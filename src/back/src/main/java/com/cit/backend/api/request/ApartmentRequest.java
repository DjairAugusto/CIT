package com.cit.backend.api.request;

import com.cit.backend.api.validator.JWT;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ApartmentRequest {
    @NotBlank(message = "Number is mandatory")
    @PositiveOrZero(message = "Number must be equals or greater than zero")
    private int number;

    @NotBlank(message = "Token is mandatory")
    @JWT()
    private String token;

    @NotBlank(message = "Unit id is mandatory")
    private Long unitId;
}
