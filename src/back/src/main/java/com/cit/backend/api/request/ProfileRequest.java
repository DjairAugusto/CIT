package com.cit.backend.api.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
public class ProfileRequest {
    @NotBlank(message = "Name is mandatory")
    private String email;

    @NotBlank(message = "Password is mandatory")
    private String password;

    private List<String> permissions;
}
