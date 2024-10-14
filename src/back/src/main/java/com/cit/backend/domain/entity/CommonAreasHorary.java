package com.cit.backend.domain.entity;

import jakarta.persistence.*;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.util.Set;

@Entity(name = "common_areas_horary")
public class CommonAreasHorary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalTime timeStart;

    @Column(nullable = false)
    private LocalTime timeEnd;

    @ElementCollection
    @CollectionTable(name = "common_areas_horary_day_of_week", joinColumns = @JoinColumn(name = "common_areas_horary_id"))
    private Set<DayOfWeek> dayOfWeek;

    @ManyToOne
    @JoinColumn(name="common_areas_id", nullable=false)
    private CommonAreas commonAreas;

}
