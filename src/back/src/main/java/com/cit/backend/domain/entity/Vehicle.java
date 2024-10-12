package com.cit.backend.domain.entity;

import com.cit.backend.domain.entity.enums.TypeVehicle;
import jakarta.persistence.*;

@Entity(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 7, nullable = false)
    private String plate;

    @Column(length = 80, nullable = false)
    private String model;

    @Column(length = 80, nullable = false)
    private String color;

    @Column(length = 80, nullable = false)
    private String brand;

    @Column(nullable = false)
    private TypeVehicle type;

}
