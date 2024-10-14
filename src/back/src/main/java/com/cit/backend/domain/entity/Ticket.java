package com.cit.backend.domain.entity;

import com.cit.backend.domain.entity.enums.StatusTicket;
import com.cit.backend.domain.entity.enums.TypeTicket;
import jakarta.persistence.*;

@Entity(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private TypeTicket type;

    @Column(columnDefinition = "TEXT")
    private String description;

    private StatusTicket status;

    @Column(columnDefinition = "TEXT")
    private String responce;

    @ManyToOne
    @JoinColumn(name="apartment_id", nullable=false)
    private Apartment apartment;

    @ManyToOne
    @JoinColumn(name="employee_id", nullable=false)
    private Employee employee;
}
