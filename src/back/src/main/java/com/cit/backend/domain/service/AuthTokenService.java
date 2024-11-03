package com.cit.backend.domain.service;

import com.cit.backend.api.validator.JWTToken;
import com.cit.backend.domain.entity.Profile;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

@Service
public class AuthTokenService extends JWTService {
    public String generateToken(Profile profile) {
        return buildToken(profile.getEmail());
    }

    public boolean isTokenValid(@Valid @JWTToken String token, Profile profile) {
        return isTokenValid(token, profile.getEmail());
    }
}
