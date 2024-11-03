package com.cit.backend.api.request;

import org.hibernate.validator.constraints.br.CNPJ;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CondominiumRequest {
    @NotBlank(message = "Name is mandatory")
    @Size(min = 3, max = 80, message = "Name must have between 3 and 80 characters")
    private String name;

    @NotBlank(message = "CNPJ is mandatory")
    @CNPJ(message = "Invalid CNPJ")
    private String cnpj;

    @NotNull(message = "Blocks is mandatory")
    @PositiveOrZero(message = "Blocks must be greater than zero")
    private int blocks;

    @NotNull(message = "Units is mandatory")
    @PositiveOrZero(message = "Units must be greater than zero")
    private int units;

    @NotNull(message = "Floors is mandatory")
    @PositiveOrZero(message = "Floors must be greater than zero")
    private int floors;

    @NotNull(message = "Apartments is mandatory")
    @PositiveOrZero(message = "Apartments must be greater than zero")
    private int apartments;

    @NotNull(message = "Manager ID is mandatory")
    @PositiveOrZero(message = "Manager ID must be greater than zero")
    private long managerId;
    
    private AddressRequest address;
}
