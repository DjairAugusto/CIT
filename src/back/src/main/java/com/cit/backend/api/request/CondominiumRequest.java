package com.cit.backend.api.request;

import com.cit.backend.api.validator.Phone;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

@Setter
@Getter
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

    @NotNull(message = "Apartments is mandatory")
    @PositiveOrZero(message = "Apartments must be greater than zero")
    private int apartments;
    
    private AddressRequest address;
}
