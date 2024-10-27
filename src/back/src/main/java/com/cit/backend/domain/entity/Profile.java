package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "profiles")
@Getter
@Setter
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 80, nullable = false)
    private String email;

    @Column(length = 30, nullable = false)
    private String password;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="apartment_id", nullable=false)
    private Apartment apartment;
}
