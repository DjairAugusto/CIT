package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Resident;
import com.cit.backend.domain.entity.Profile;
import com.cit.backend.domain.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResidentService {
    @Autowired
    private ResidentRepository residentRepository;

    public Resident getFromProfile(Profile profile) {
        return residentRepository.findByProfile(profile).orElse(null);
    }
}
