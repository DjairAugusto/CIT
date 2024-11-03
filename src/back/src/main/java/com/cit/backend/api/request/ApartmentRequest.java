package com.cit.backend.api.request;

import com.cit.backend.api.validator.JWTToken;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ApartmentRequest {
    private Long id;

    @NotNull(message = "Number is mandatory")
    @PositiveOrZero(message = "Number must be equals or greater than zero")
    private int number;

    @NotBlank(message = "Token is mandatory")
    @JWTToken()
    private String token;

    @NotNull(message = "Unit id is mandatory")
    @PositiveOrZero(message = "Unit id must be equals or greater than zero")
    private Long unitId;
}
