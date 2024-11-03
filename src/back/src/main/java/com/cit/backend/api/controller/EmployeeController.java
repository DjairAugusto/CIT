package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.EmployeeMapper;
import com.cit.backend.api.request.AdminRequest;
import com.cit.backend.api.response.AdminResponse;
import com.cit.backend.api.response.EmployeeResponse;
import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.service.CondominiumService;
import com.cit.backend.domain.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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



    @PostMapping(value = "/admin", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EmployeeResponse> createEmployee(@Valid @RequestBody AdminRequest request) {

        Employee employee = employeeMapper.toEmployee(request);
        Employee employeeSaved = employeeService.saveAdmin(employee);
        EmployeeResponse response = employeeMapper.toEmployeeResponse(employeeSaved);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
