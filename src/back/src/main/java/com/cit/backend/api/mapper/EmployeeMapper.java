package com.cit.backend.api.mapper;

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

    public Employee toEmployee(AdminRequest employee) {
        return modelMapper.map(employee, Employee.class);
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
