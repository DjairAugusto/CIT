package com.cit.backend.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "residents")
@PrimaryKeyJoinColumn(name = "people_id")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Resident extends People {
    @OneToOne
    Apartment apartment;
}