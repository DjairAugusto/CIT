package com.cit.backend.domain.service;

import com.cit.backend.api.validator.JWTToken;
import com.cit.backend.domain.entity.Apartment;
import com.cit.backend.domain.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ApartmentService {
    @Autowired
    private ApartmentRepository apartmentRepository;

    public Apartment save(Apartment apartment){
        return apartmentRepository.save(apartment);
    }

    public Apartment findById(Long id) {
        return apartmentRepository.findById(id).orElse(null);
    }

    public Apartment findByToken(@JWTToken String token) {
        return apartmentRepository.findByToken(token).orElse(null);
    }

    public List<Apartment> findAllByUnitId(Long unitId) {
        return apartmentRepository.findAllByUnitId(unitId);
    }

    public void deleteById(Long id) { apartmentRepository.deleteById(id); }

    public Apartment update(Apartment apartment) { return apartmentRepository.save(apartment); }
}

