package com.cit.backend.api.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

@Setter
@Getter
@AllArgsConstructor
public class CondominiumRequest {
    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "CNPJ is mandatory")
    @CNPJ(message = "Invalid CNPJ")
    private String cnpj;


    private int blocks;

    private int units;

    private int apartments;
}
