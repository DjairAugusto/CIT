package com.cit.backend.models;

import jakarta.persistence.*;

@Entity(name = "people")
public class People {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 80)
    private String name;

    @Column(length = 11, unique = true)
    private String cpf;
}
