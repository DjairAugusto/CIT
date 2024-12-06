package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.OmbudsmanMapper;
import com.cit.backend.api.request.OmbudsmenRequest;
import com.cit.backend.api.response.OmbudsmenResponse;
import com.cit.backend.domain.entity.*;
import com.cit.backend.domain.entity.enums.StatusTicket;
import com.cit.backend.domain.service.EmployeeService;
import com.cit.backend.domain.service.OmbudsmanService;
import com.cit.backend.domain.service.ResidentService;
import com.cit.backend.exceptions.EmployeeNotRegisteredInACondominiumException;
import com.cit.backend.exceptions.InvalidResidentException;
import com.cit.backend.exceptions.MissingVariableException;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ombudsmen")
public class OmbudsmenController {
    @Autowired
    private OmbudsmanMapper ombudsmanMapper;

    @Autowired
    private OmbudsmanService ombudsmanService;

    @Autowired
    private ResidentService residentService;

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<OmbudsmenResponse>> getAll() {
        Profile profile = (Profile) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Employee employee = employeeService.findByProfile(profile);
        Resident resident = residentService.getFromProfile(profile);

        List<Ticket> tickets;
        if (employee != null) {
            Condominium condominium = employee.getCondominium();
            if (condominium == null)
                throw new EmployeeNotRegisteredInACondominiumException("Employee is not registered in a condominium");

            tickets = ombudsmanService.findAllByCondominium(condominium);
        } else if (resident != null) {
            Apartment apartment = resident.getApartment();
            if (apartment == null) throw new InvalidResidentException("Resident is not registered in an apartment");

            tickets = ombudsmanService.findAllByApartment(apartment);
        } else throw new RuntimeException("User is not an employee or a resident");

        List<OmbudsmenResponse> response = ombudsmanMapper.toOmbudsmenResponse(tickets);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OmbudsmenResponse> findById(@PathVariable Long id) {
        Ticket ticket = ombudsmanService.findById(id);
        OmbudsmenResponse response = ombudsmanMapper.toOmbudsmenResponse(ticket);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    @RolesAllowed("RESIDENT")
    public ResponseEntity<OmbudsmenResponse> create(@RequestBody OmbudsmenRequest request) {
        Profile profile = (Profile) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Resident resident = residentService.getFromProfile(profile);
        Apartment apartment = resident.getApartment();

        if (apartment == null) throw new InvalidResidentException("Resident is not registered in an apartment");

        Ticket ticket = ombudsmanMapper.toTicket(request);
        ticket.setApartment(apartment);
        ticket.setStatus(StatusTicket.OPEN);
        Ticket saved = ombudsmanService.create(ticket);
        OmbudsmenResponse response = ombudsmanMapper.toOmbudsmenResponse(saved);
        return ResponseEntity.ok(response);
    }

    @PutMapping
    public ResponseEntity<OmbudsmenResponse> update(@RequestBody OmbudsmenRequest request) {
        if (request.getId() == null) {
            throw new MissingVariableException("Id is required", List.of("id"));
        }

        Ticket ticket = ombudsmanMapper.toTicket(request);
        ombudsmanMapper.fillNullFields(ticket, ombudsmanService.findById(request.getId()));
        Ticket updated = ombudsmanService.update(ticket);
        OmbudsmenResponse response = ombudsmanMapper.toOmbudsmenResponse(updated);
        return ResponseEntity.ok(response);
    }
}
