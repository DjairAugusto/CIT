package com.cit.backend.domain.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity(name = "units")
public class Unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int Long;

    @Column(nullable = false)
    private int number;

    @ManyToOne
    @JoinColumn(name="block_id", nullable=false)
    private Block block;

    @OneToMany(mappedBy="unit")
    private Set<Apartment> apartments;

    @ManyToMany
    @JoinTable(
            name = "unit_warning",
            joinColumns = @JoinColumn(name = "unit_id"),
            inverseJoinColumns = @JoinColumn(name = "warning_id"))
    private Set<Warning> warnings;
}
