package com.cit.backend.domain.repository;

import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByCpf(String cpf);
    Employee findByProfile(Profile profile);
}
