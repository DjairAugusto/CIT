package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Condominium;
import com.cit.backend.domain.repository.CondominiumRepository;
import com.cit.backend.exceptions.UniqueColumnAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CondominiumService {
    @Autowired
    private CondominiumRepository condominiumRepository;

    public Condominium save(Condominium condominium) {
        if (condominiumRepository.findByCnpj(condominium.getCnpj()) != null) {
            throw new UniqueColumnAlreadyExistsException("CNPJ Already Exists");
        }

        return condominiumRepository.save(condominium);
    }

    public Condominium findById(Long id) {
        return condominiumRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        condominiumRepository.deleteById(id);
    }

    public Condominium update(Condominium condominium) {
        return condominiumRepository.save(condominium);
    }
}
