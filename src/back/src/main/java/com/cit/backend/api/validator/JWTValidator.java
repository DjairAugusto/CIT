package com.cit.backend.api.validator;

import com.cit.backend.domain.service.JWTApartmentService;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class JWTValidator implements ConstraintValidator<JWT, String> {
    @Autowired
    private JWTApartmentService jwtApartmentService;

    @Override
    public void initialize(JWT constraintAnnotation) {
    }

    @Override
    public boolean isValid(String jwtField, ConstraintValidatorContext context) {
        if (jwtField == null) {
            return false;
        }
        // Regex pattern for JWT validation
        return jwtField.matches("^(?:[A-Za-z0-9-_]+(?:\\.|$)){3}");
    }
}
