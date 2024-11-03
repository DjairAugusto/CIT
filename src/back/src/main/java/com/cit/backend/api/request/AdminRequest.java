package com.cit.backend.api.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.swing.*;

@Setter
@Getter
public class AdminRequest extends PeopleRequest{
    public AdminRequest(String name, String cpf, ContactRequest contact) {
        super(name, cpf, contact);
    }
}
