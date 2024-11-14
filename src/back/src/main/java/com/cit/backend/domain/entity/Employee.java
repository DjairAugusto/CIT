package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity(name = "employees")
@PrimaryKeyJoinColumn(name = "people_id")
@Setter
@Getter
@NoArgsConstructor
public class Employee extends People {
    @OneToOne(mappedBy = "employee")
    private Condominium management;

    @Column
    private String role;

    @ManyToOne
    @JoinColumn(name="condominium_id", nullable=true)
    private Condominium condominium;

    @OneToMany(mappedBy = "employee")
    private List<Ticket> tickets;
}
