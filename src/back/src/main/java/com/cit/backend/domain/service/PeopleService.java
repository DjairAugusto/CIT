//package com.cit.backend.domain.service;
//
//import com.cit.backend.domain.entity.People;
//import com.cit.backend.domain.repository.PeopleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//@Service
//@Transactional
//public class PeopleService {
//    @Autowired
//    private PeopleRepository peopleRepository;
//
//    public People findByCPF(String CPF) {
//        return peopleRepository.findByCpf(CPF).orElse(null);
//    }
//}
