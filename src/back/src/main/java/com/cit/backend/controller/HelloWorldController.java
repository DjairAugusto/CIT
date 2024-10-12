package com.cit.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.cit.backend.domain.entity.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/")
public class HelloWorldController {

    @Autowired
    private HelloWorldService helloWorldService;

    @GetMapping("/{name}")
    public String helloWorld(@PathVariable("name") String name) {
        // pegar os parametros da requisição
        return helloWorldService.helloWorld(name);
    }
}