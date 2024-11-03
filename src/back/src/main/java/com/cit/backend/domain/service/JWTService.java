package com.cit.backend.domain.service;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.cit.backend.api.validator.JWTToken;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

public abstract class JWTService {
    @Value("${api.security.jwt.secret}")
    private String SECRET;

    @Value("${api.security.jwt.expiration}")
    private Long EXPIRATION;

    private static final String ISSUER = "CIT-APPLICATION-API";

    private Algorithm getSignKey() {
        return Algorithm.HMAC256(SECRET);
    }

    protected String buildToken(String subject) {
        return buildToken(subject, true);
    }

    protected String buildToken(
            String subject,
            boolean expires
    ) {
        try {
            JWTCreator.Builder builder = JWT
                    .create()
                    .withIssuer(ISSUER)
                    .withIssuedAt(new Date())
                    .withSubject(subject);
            if (expires) builder.withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION));
            return builder.sign(getSignKey());
        } catch (JWTCreationException e) {
            // TODO criar uma exceção personalizada
            throw new RuntimeException("Error creating JWTToken", e);
        }
    }

    protected Boolean isTokenValid(@Valid @JWTToken String token, String subject) {
        try {
            return !isTokenExpired(token) && JWT
                    .require(getSignKey())
                    .withIssuer(ISSUER)
                    .build()
                    .verify(token)
                    .getSubject()
                    .equals(subject);
        } catch (JWTVerificationException e) {
            // TODO criar uma exceção personalizada
            throw new RuntimeException("Error validating JWTToken", e);
        }
    }

    private DecodedJWT decode(String token) {
        return JWT.decode(token);
    }

    public Boolean isTokenExpired(@Valid @JWTToken String token) {
        return decode(token).getExpiresAt().before(new Date());
    }

    public String getSubject(@Valid @JWTToken String token) {
        return decode(token).getSubject();
    }
}
