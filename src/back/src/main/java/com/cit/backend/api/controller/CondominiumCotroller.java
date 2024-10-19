package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.CondominiumMapper;
import com.cit.backend.domain.entity.Condominium;
import com.cit.backend.domain.service.CondominiumService;
import com.cit.backend.api.request.CondominiumRequest;
import com.cit.backend.api.response.CondominiumResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/condominium")
public class CondominiumCotroller {

    @Autowired
    private CondominiumService condominiumService;

    @Autowired
    private CondominiumMapper condominiumMapper;

    // @GetMapping("/condominium")
    // public String helloWorld() {
    //     return "Ola seja bem vindo ao sistema do <b>C.I.T</b><br>Condomínio<br>Inteligente<br>";
    // }

    @PostMapping
    public ResponseEntity<CondominiumResponse> createCondominium(@Valid @RequestBody CondominiumRequest request) {
        Condominium condominium = condominiumMapper.toCondominium(request);
        System.out.println(condominium);
        System.out.println(condominium.getName());
        condominium.setId(1L);
        Condominium condominiumSaved = condominiumService.save(condominium);
        CondominiumResponse response = condominiumMapper.toCondominiumResponse(condominium);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
