package com.cit.backend.api.mapper;

import com.cit.backend.api.request.EmployeeRequest;
import com.cit.backend.api.response.EmployeeResponse;
import com.cit.backend.api.request.AdminRequest;
import com.cit.backend.api.response.AdminResponse;
import com.cit.backend.domain.entity.Contact;
import com.cit.backend.domain.entity.Employee;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Employee toEmployee(EmployeeRequest employee) {
        return modelMapper.map(employee, Employee.class);
    }

    public Employee toEmployee(AdminRequest employee) {
        return modelMapper.map(employee, Employee.class);
    }

    public AdminResponse toAdminResponse(Employee employee) {
        return modelMapper.map(employee, AdminResponse.class);
    }

    public EmployeeResponse toEmployeeResponse(Employee employee) {
        return modelMapper.map(employee, EmployeeResponse.class);
    }

    public EmployeeRequest toEmployeeRequest(Employee employee) {
        return modelMapper.map(employee, EmployeeRequest.class);
    }
    
    public AdminRequest toAdminRequest(Employee employee) {
        return modelMapper.map(employee, AdminRequest.class);
    }
}
