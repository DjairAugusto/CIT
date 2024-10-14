package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import com.cit.backend.domain.entity.enums.PermissionEmployee;

import java.util.List;


@Entity(name = "employees")
public class Employee extends People {

    @Column(length = 80)
    private String role;
    private PermissionEmployee permission;

    @OneToOne(mappedBy = "employee")
    private Condominium management;

    @ManyToOne
    @JoinColumn(name="condominium_id", nullable=false)
    private Condominium condominium;

    @OneToMany(mappedBy = "employee")
    private List<Ticket> tickets;
}
