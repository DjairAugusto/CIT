package com.cit.backend.domain.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.cit.backend.domain.entity.Apartment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TokenService {
    @Value("${api.security.jwt.secret}")
    private String SECRET;
    private static final String ISSUER = "CIT-APPLICATION-API";



    public String generateToken() {
        try {
            Algorithm algorithm = Algorithm.HMAC256(SECRET);
            String uniqueToken = UUID.randomUUID().toString() + "-" + System.currentTimeMillis();


            return JWT.create()
                    .withIssuer(ISSUER)
                    .withSubject(uniqueToken)
                    .sign(algorithm);

        } catch (JWTCreationException e) {
            // TODO Cria uma exceção Personalisada
            throw new RuntimeException("Error creating token",e);
        }
    }

    public String validateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(SECRET);
            return JWT.require(algorithm)
                    .withIssuer(ISSUER)
                    .build()
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException e) {
            // TODO Cria uma exceção Personalisada
            throw new RuntimeException("Error validating token",e);
        }
    }
}
