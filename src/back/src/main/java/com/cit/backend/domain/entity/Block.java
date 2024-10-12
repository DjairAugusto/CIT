package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import java.util.Set;

@Entity(name = "blocks")
public class Block {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 80)
    private String name;

    @ManyToOne
    @JoinColumn(name="condominium_id", nullable=false)
    private Condominium condominium;

    @OneToMany(mappedBy="block")
    private Set<Unit> units;

    @ManyToMany
    @JoinTable(
            name = "block_warning",
            joinColumns = @JoinColumn(name = "block_id"),
            inverseJoinColumns = @JoinColumn(name = "warning_id"))
    private Set<Warning> warnings;
}
