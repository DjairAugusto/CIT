package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;

import java.util.Set;

@Entity(name = "common_areas")
@Getter
@Setter
public class CommonAreas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 80)
    private String name;

    @Unsigned
    private float tax;

    @ManyToOne
    @JoinColumn(name="condominium_id", nullable=false)
    private Condominium condominium;

    @OneToMany(mappedBy = "commonAreas")
    private Set<CommonAreasHorary> commonAreasSchedule;

    @OneToMany(mappedBy = "commonAreas")
    private Set<Reserve> Reserve;
}
