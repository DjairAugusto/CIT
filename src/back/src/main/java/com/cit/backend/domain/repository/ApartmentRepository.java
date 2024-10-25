package com.cit.backend.domain.repository;

import com.cit.backend.api.validator.JWT;
import com.cit.backend.domain.entity.Apartment;
import jakarta.validation.Valid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Long> {
    Optional<Apartment> findByToken(@Valid @JWT String token);
    List<Apartment> findAllByUnitId(Long unitId);
}
