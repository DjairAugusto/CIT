package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.EmployeeMapper;
import com.cit.backend.api.request.AdminRequest;
import com.cit.backend.api.response.EmployeeResponse;
import com.cit.backend.domain.entity.Employee;
import com.cit.backend.domain.service.CondominiumService;
import com.cit.backend.domain.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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



    @postMapping("/admin")
    public ResponseEntity<AdminRequest> createEmployee(@Valid @RequestBody AdminRequest request) {
        EmployeeMapper employeeMapper;
        Employee employee = employeeMapper.toEmployee(request);
        Employee employeeSaved = employeeService.save(employee);
        EmployeeResponse response = employeeMapper.toEmployeeResponse(employeeSaved);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
