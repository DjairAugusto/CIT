package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.ApartmentMapper;
import com.cit.backend.api.request.ApartmentRequest;
import com.cit.backend.api.response.ApartmentResponse;
import com.cit.backend.domain.entity.Apartment;
import com.cit.backend.domain.service.ApartmentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apartment")
public class ApartmentController {
    @Autowired
    private ApartmentService apartmentService;

    @Autowired
    private ApartmentMapper apartmentMapper;

    @PostMapping
    public ResponseEntity<ApartmentResponse> createApartment(@Valid @RequestBody ApartmentRequest request) {
        Apartment apartment = apartmentMapper.toApartment(request);
        Apartment apartmentSaved = apartmentService.save(apartment);
        ApartmentResponse response = apartmentMapper.toApartmentResponse(apartmentSaved);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}