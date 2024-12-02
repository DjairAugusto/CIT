package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.OmbudsmanMapper;
import com.cit.backend.api.request.OmbudsmenRequest;
import com.cit.backend.api.response.OmbudsmenResponse;
import com.cit.backend.domain.entity.Ticket;
import com.cit.backend.domain.service.OmbudsmanService;
import com.cit.backend.exceptions.MissingVariableException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ombudsmen")
public class OmbudsmenController {
    @Autowired
    private OmbudsmanMapper ombudsmanMapper;

    @Autowired
    private OmbudsmanService ombudsmanService;

    @GetMapping("/{id}")
    public ResponseEntity<OmbudsmenResponse> findById(@PathVariable Long id) {
        Ticket ticket = ombudsmanService.findById(id);
        OmbudsmenResponse response = ombudsmanMapper.toOmbudsmenResponse(ticket);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<OmbudsmenResponse> create(@RequestBody OmbudsmenRequest request) {
        Ticket ticket = ombudsmanMapper.toTicket(request);
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
