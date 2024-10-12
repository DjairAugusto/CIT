package com.cit.backend.domain.entity;

import jakarta.persistence.*;

@Entity(name = "people")
public class People {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 80)
    private String name;

    @Column(length = 11, unique = true)
    private String cpf;

    @ManyToOne
    @JoinColumn(name="apartment_id", nullable=false)
    private Apartment apartment;

    @OneToOne(mappedBy = "people")
    private Contact contact;
}
