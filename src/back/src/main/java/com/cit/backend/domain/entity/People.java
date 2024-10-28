package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "peoples")
@Inheritance(strategy = InheritanceType.JOINED)
@Setter
@Getter
@NoArgsConstructor
public class People {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 80)
    private String name;

    @Column(length = 14, unique = true)
    private String cpf;

    @OneToOne(mappedBy = "people", optional = true)
    private Contact contact;

    @OneToOne
    @JoinColumn(name = "profile_id", nullable = false)
    private Profile profile;
}
