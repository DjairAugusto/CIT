package com.cit.backend.models;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;

@Entity(name = "addresses")
public class Address {
    
    @Id
    @Column(name = "condominium_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "condominium_id")
    private Condominium condominium;

    @Column(length = 80)
    private String street;

    @Unsigned
    private int number;

    @Column(length = 40)
    private String complement;

    @Column(length = 20)
    private String neighborhood;

    @Column(length = 30)
    private String city;

    @Column(length = 2)
    private String state;

    @Column(length = 8)
    private String zipCode;
}
