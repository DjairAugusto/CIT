package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Visitant;
import com.cit.backend.domain.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class VisitorService {

    @Autowired
    private VisitorRepository visitorRepository;

    public Visitant save(Visitant visitor) {
        Visitant visitant = visitorRepository.save(visitor);
        return visitant;
    }

    public Optional<Visitant> findById(Long id) {
        return visitorRepository.findById(id);
    }

    public void deleteById(Long id){
        visitorRepository.deleteById(id);
    }
}
