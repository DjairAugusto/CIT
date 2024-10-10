package com.cit.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import com.cit.backend.models.enums.PermissionEmployee;


@Entity(name = "employees")
public class Employee extends People {

    @Column(length = 80)
    private String role;
    private PermissionEmployee permission;
}
