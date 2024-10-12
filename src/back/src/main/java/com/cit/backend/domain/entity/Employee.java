package com.cit.backend.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import com.cit.backend.domain.entity.enums.PermissionEmployee;


@Entity(name = "employees")
public class Employee extends People {

    @Column(length = 80)
    private String role;
    private PermissionEmployee permission;
}
