package com.cit.backend.api.mapper;

import com.cit.backend.domain.entity.Profile;
import com.cit.backend.domain.repository.ProfileRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cit.backend.api.request.AdminRequest;
import com.cit.backend.api.response.AdminResponse;
import com.cit.backend.api.response.EmployeeResponse;
import com.cit.backend.domain.entity.Employee;

@Component
public class EmployeeMapper {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProfileMapper profileMapper;

    @Autowired
    private ProfileRepository profileRepository;

    public Employee toEmployee(AdminRequest employee) {
        Profile profileEntity = profileMapper.toProfile(employee.getProfile());
        profileEntity = profileRepository.save(profileEntity); // Save the Profile entity first

        Employee employeeEntity = modelMapper.map(employee, Employee.class);
        employeeEntity.setProfile(profileEntity); // Set the saved Profile entity
        return employeeEntity;
    }

    public AdminResponse toAdminResponse(Employee employee) {
        return modelMapper.map(employee, AdminResponse.class);
    }

    public EmployeeResponse toEmployeeResponse(Employee employee) {
        return modelMapper.map(employee, EmployeeResponse.class);
    }

    public AdminRequest toAdminRequest(Employee employee) {
        return modelMapper.map(employee, AdminRequest.class);
    }
}
