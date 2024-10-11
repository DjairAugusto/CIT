package com.cit.backend.models;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;

@Entity(name = "condominiums")
public class Condominium {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(length = 80, nullable = false)
    private String name;

    @Unsigned
    private int blocks;

    @Unsigned
    private int units;

    @Unsigned
    private int apartments;

    @Column(length = 14, unique = true, nullable = false)
    private String cnpj;

    @OneToOne(mappedBy = "condominium", cascade = CascadeType.ALL, optional = false)
    @PrimaryKeyJoinColumn
    private Address address;

    @JoinColumn(name = "manager_id",referencedColumnName = "id", nullable = false)
    @OneToOne
    private People manager;
}
