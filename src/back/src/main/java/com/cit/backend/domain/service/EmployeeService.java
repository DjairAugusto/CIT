package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.entity.Profile;
import com.cit.backend.domain.entity.enums.ProfilePermissions;
import com.cit.backend.domain.repository.EmployeeRepository;
import com.cit.backend.exceptions.UniqueColumnAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@Transactional
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ProfileService profileService;

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee saveAdmin(Employee employee) {
        if (employeeRepository.findByCpf(employee.getCpf()) != null) {
            throw new UniqueColumnAlreadyExistsException("CPF has already been registered");
        }

        Profile profile = employee.getProfile();
        profile.setPermissions(Set.of(ProfilePermissions.ROLE_ADMIN));
        profileService.save(profile);
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

    public Employee findByProfile(Profile profile) {
        return employeeRepository.findByProfile(profile).orElse(null);
    }
}
