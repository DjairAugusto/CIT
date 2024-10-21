package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.EmployeeMapper;
import com.cit.backend.api.request.AdminRequest;
import com.cit.backend.api.request.EmployeeRequest;
import com.cit.backend.api.response.EmployeeResponse;
import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.service.CondominiumService;
import com.cit.backend.domain.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EmployeeMapper employeeMapper;

    @PostMapping
    public ResponseEntity<EmployeeResponse> createEmployee(@Valid @RequestBody EmployeeRequest employeeRequest) {
        Employee employee = employeeMapper.toEmployee(employeeRequest);
        Employee employeeSave = employeeService.save(employee);
        EmployeeResponse employeeResponse = employeeMapper.toEmployeeResponse(employeeSave);
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeResponse);
    }
}
