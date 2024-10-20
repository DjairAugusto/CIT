package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.repository.CondominiumRepository;
import com.cit.backend.domain.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        employeeRepository.deleteById(id);
    }

    public Employee update(Employee employee) {
        return employeeRepository.save(employee);
    }
}
