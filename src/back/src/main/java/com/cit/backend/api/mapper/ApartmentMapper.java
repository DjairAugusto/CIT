package com.cit.backend.api.mapper;

import com.cit.backend.api.request.ApartmentRequest;
import com.cit.backend.api.response.ApartmentResponse;
import com.cit.backend.domain.entity.Apartment;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ApartmentMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Apartment toApartment(@Valid ApartmentRequest request) {
        return modelMapper.map(request, Apartment.class);
    }

    public ApartmentResponse toApartmentResponse(Apartment apartment) {
        return modelMapper.map(apartment, ApartmentResponse.class);
    }

    public List<ApartmentResponse> toApartmentResponseList(List<Apartment> apartments) {
        return apartments.stream()
                .map(this::toApartmentResponse)
                .collect(Collectors.toList());
    }

    public ApartmentRequest toApartmentRequest(Apartment apartment) {
        return modelMapper.map(apartment, ApartmentRequest.class);
    }

    public List<ApartmentRequest> toApartmentRequestList(List<Apartment> apartments) {
        return apartments.stream()
                .map(this::toApartmentRequest)
                .collect(Collectors.toList());
    }
}
