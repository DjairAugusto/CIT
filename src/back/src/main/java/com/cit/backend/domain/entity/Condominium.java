package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

import java.util.Set;

@Entity(name = "condominiums")
@Setter
@Getter
@NoArgsConstructor
public class Condominium {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 80, nullable = false)
    private String name;

    @Unsigned
    private int blocks;

    @Unsigned
    private int units;

    @Unsigned
    private int apartments;

    @Column(length = 18, unique = true)
    private String cnpj;

    @OneToOne(mappedBy = "condominium", cascade = CascadeType.ALL, optional = false)
    @PrimaryKeyJoinColumn
    private Address address;

    @OneToOne
    @JoinColumn(name = "manager_id", nullable = true)
    private Employee manager;

    @OneToMany(mappedBy="condominium", cascade = CascadeType.ALL)
    private Set<Employee> Employees;

    @OneToMany(mappedBy="condominium", cascade = CascadeType.ALL)
    private Set<Block> items;

    @OneToMany(mappedBy = "condominium", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Set<Warning> warning;

    @ManyToMany
    @JoinTable(
            name = "condominium_warning",
            joinColumns = @JoinColumn(name = "condominium_id"),
            inverseJoinColumns = @JoinColumn(name = "warning_id"))
    private Set<Warning> warnings;

    @OneToMany(mappedBy = "condominium", cascade = CascadeType.ALL)
    private Set<CommonAreas> commonAreas;

    @OneToMany(mappedBy = "condominium", cascade = CascadeType.ALL)
    private Set<LostAndFound> lostAndFound;

    @OneToMany(mappedBy = "condominium", cascade = CascadeType.ALL)
    private Set<Meeting> meeting;

    @OneToMany(mappedBy = "condominium", cascade = CascadeType.ALL)
    private Set<Rules> rules;

    @OneToMany(mappedBy = "condominium", cascade = CascadeType.ALL)
    private Set<Income> income;

    @OneToOne
    @JoinColumn(name = "employee_id", nullable = true)
    private Employee employee;
}
