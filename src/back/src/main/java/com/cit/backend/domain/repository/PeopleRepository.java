package com.cit.backend.domain.repository;

import com.cit.backend.domain.entity.People;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PeopleRepository extends JpaRepository<People, Long> {
    public Optional<People> findByCpf(String Cpf);
}
