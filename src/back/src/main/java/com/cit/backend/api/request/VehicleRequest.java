package com.cit.backend.api.request;

import com.cit.backend.api.validator.JWT;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class VehicleRequest {

    @NotBlank(message = "Type is mandatory");
    private String type;

    @NotBlank(message = "Model is mandatory");
    private String model;

    @NotBlank(message = "Color is mandatory");
    private String color;

    @NotBlank(message = "Plate is mandatory");
    @Size(min = 6, max = 7, message = "Plate must be between 6 and 7 characters");
    private String plate;

}
