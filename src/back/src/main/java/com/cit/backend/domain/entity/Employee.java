package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity
@Table(name = "employees")
@Setter
@Getter
@NoArgsConstructor
public class Employee extends People {
    @Column
    private String role;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="condominium_id", nullable=true)
    private Condominium condominium;

    @OneToMany(mappedBy = "employee")
    private List<Ticket> tickets;
}
