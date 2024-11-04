package com.cit.backend.api.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ProfileRequest {

    @NotBlank(message = "Name is mandatory")
    private String email;

    @NotBlank(message = "Password is mandatory")
    private String password;

    private String permission;

}
