package com.cit.backend.domain.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity(name = "apartments")
public class Apartment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private int number;
    private String token;

    @ManyToOne
    @JoinColumn(name="unit_id", nullable=false)
    private Unit unit;

    @ManyToMany
    @JoinTable(
            name = "apartment_warning",
            joinColumns = @JoinColumn(name = "apartment_id"),
            inverseJoinColumns = @JoinColumn(name = "warning_id"))
    private Set<Warning> warnings;

    @OneToMany(mappedBy = "apartment")
    private Set<Visitant> visits;

    @OneToMany(mappedBy = "apartment")
    private Set<People> residents;

    @OneToMany(mappedBy = "apartment")
    private Set<Deliveries> deliveries;

    @OneToMany(mappedBy = "apartment")
    private Set<Vehicle> vehicles;

    @OneToMany(mappedBy = "apartment")
    private Set<Billet> billets;

    @OneToMany(mappedBy = "apartment")
    private Set<Ticket> tickets;

}
