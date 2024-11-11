package com.cit.backend.api.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ContactsCondominiumRequest {

    @NotBlank(message = "Name is mandatory")
    private String location;

    private ContactCondominiumRequest[] contacts;
}
