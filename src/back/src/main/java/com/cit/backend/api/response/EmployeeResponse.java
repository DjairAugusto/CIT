package com.cit.backend.api.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class EmployeeResponse {
    private int id;
    private String name;
    private String email;
    private String phone;
    private String role;

}
