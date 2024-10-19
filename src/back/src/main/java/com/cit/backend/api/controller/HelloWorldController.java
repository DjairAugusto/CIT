package com.cit.backend.api.controller;

import com.cit.backend.exceptions.MissingVariableException;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.cit.backend.domain.entity.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/")
public class HelloWorldController {

    @Autowired
    private HelloWorldService helloWorldService;

    @GetMapping("/")
    public String helloWorld() {
        return "Ola seja bem vindo ao sistema do <b>C.I.T</b><br>Condomínio<br>Inteligente<br>";
    }

    @GetMapping("/exemple/{name}")
    public String hello(@PathVariable("name") String name) {
        return helloWorldService.helloWorld(name);
    }

    @GetMapping("/exemple/excecao")
    public String exception() {
        List<String> formVariables = Arrays.asList(
            "firstName",
            "lastName",
            "email",
            "password",
            "confirmPassword",
            "phoneNumber",
            "address",
            "city",
            "state",
            "zipCode",
            "country"
        );
        throw new MissingVariableException(formVariables);
    }
}