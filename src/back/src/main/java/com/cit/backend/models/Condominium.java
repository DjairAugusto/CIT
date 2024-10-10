package com.cit.backend.models;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;

@Entity(name = "condominiums")
public class Condominium {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 80)
    private String name;

    @Unsigned
    private int blocks;

    @Unsigned
    private int units;

    @Unsigned
    private int apartments;

    @Column(length = 14, unique = true)
    private String cnpj;

    @JoinColumn(name = "address_id")
    @OneToOne
    private Address address;

    @JoinColumn(name = "manager_id")
    @OneToOne
    private People manager;
}
