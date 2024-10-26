package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Apartment;
import com.cit.backend.domain.entity.Block;
import com.cit.backend.domain.entity.Condominium;
import com.cit.backend.domain.entity.Unit;
import com.cit.backend.domain.repository.BlockRepository;
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

    @Autowired
    private BlockRepository blockService;

    public Condominium save(Condominium condominium) {
        if (condominiumRepository.findByCnpj(condominium.getCnpj()) != null) {
            throw new UniqueColumnAlreadyExistsException("CNPJ Already Exists");
        }

        Condominium condominiumSaved = condominiumRepository.save(condominium);

        for (int i = 0; i < condominium.getBlocks(); i++) {
            Block block = new Block();
            for (int j = 0; j < condominium.getUnits(); j++) {
                Unit unit = new Unit();
                for (int k = 0; k < condominium.getApartments(); k++) {
                    Apartment apartment = new Apartment();

                }
            }

            blockService.save(block);
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
