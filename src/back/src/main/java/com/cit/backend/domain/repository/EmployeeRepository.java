package com.cit.backend.domain.repository;

import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByCpf(String cpf);
    Optional<Employee> findByProfile(Profile profile);
}
