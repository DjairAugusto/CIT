package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Apartment;
import com.cit.backend.domain.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public void deleteById(Long id) { apartmentRepository.deleteById(id); }

    public Apartment update(Apartment apartment) { return apartmentRepository.save(apartment); }
}

