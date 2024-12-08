package com.cit.backend.domain.repository;

import com.cit.backend.domain.entity.People;
import com.cit.backend.domain.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

@NoRepositoryBean
public interface PeopleRepository<T extends People> extends JpaRepository<T, Long> {
    Optional<T> findByCpf(String Cpf);
    Optional<T> findByProfile(Profile profile);
}
