package com.cit.backend.api.mapper;

import com.cit.backend.api.request.ApartmentRequest;
import com.cit.backend.api.response.ApartmentResponse;
import com.cit.backend.domain.entity.Apartment;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ApartmentMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Apartment toApartment(@Valid ApartmentRequest request) {
    }

    public ApartmentResponse toApartmentResponse(Apartment apartmentSaved) {
    }

    public ApartmentRequest toApartmentRequest(Apartment apartment) {
    }
}
