package com.cit.backend.domain.service;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.cit.backend.api.validator.JWTToken;
import com.cit.backend.domain.entity.Profile;
import jakarta.validation.Valid;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuthTokenService extends JWTService {
    private List<String> parseAuthorities(Profile profile) {
        return profile.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();
    }

    public String generateToken(Profile profile) {
        HashMap<String, Object> payload = new HashMap<>();
        List<String> permissions = parseAuthorities(profile);
        payload.put("permissions", permissions);
        return buildToken(profile.getEmail(), true, payload);
    }

    public void validateToken(@Valid @JWTToken String token, Profile profile) throws JWTVerificationException {
        if (this.isTokenExpired(token)) throw new JWTVerificationException("Token expired");

        if (!this.isTokenValid(token, profile)) throw new JWTVerificationException("Token invalid");
    }

    public boolean isTokenValid(@Valid @JWTToken String token, Profile profile) {
        return isTokenValid(token, profile.getEmail());
    }
}
