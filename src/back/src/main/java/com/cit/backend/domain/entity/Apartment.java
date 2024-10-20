package com.cit.backend.domain.entity;

import com.cit.backend.api.validator.JWT;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity(name = "apartments")
@Setter
@Getter
@NoArgsConstructor
public class Apartment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private int number;

    @JWT
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
