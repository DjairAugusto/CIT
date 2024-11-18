package com.cit.backend.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResidentRequest {
    private String name;
    private String phone;
    private String cpf;
    private String email;
}
