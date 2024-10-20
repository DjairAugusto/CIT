package com.cit.backend.api.mapper;

import com.cit.backend.api.request.EmployeeRequest;
import com.cit.backend.api.response.EmployeeResponse;
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

    public EmployeeResponse toEmployeeResponse(Employee employee) {
        return modelMapper.map(employee, EmployeeResponse.class);
    }

    public EmployeeRequest toEmployeeRequest(Employee employee) {
        return modelMapper.map(employee, EmployeeRequest.class);
    }
}
