package com.cit.backend.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ApartmentRequest {
    @NotBlank(message = "Number is mandatory")
    @PositiveOrZero(message = "Number must be greater than zero")
    private int number;


}
