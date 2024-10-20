package com.cit.backend.api.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.swing.*;

@Setter
@Getter
public class AdminRequest extends PeopleRequest{

    @NotBlank(message = "Role is mandatory")
    private String role;

    @NotBlank(message = "Permission is mandatory")
    private Spring permission;

    public AdminRequest(String name, String cpf, ContactRequest contact, String role, Spring permission) {
        super(name, cpf, contact);
        this.role = role;
        this.permission = permission;
    }
}
