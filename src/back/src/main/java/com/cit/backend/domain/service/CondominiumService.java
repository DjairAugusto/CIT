package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Apartment;
import com.cit.backend.domain.entity.Block;
import com.cit.backend.domain.entity.Condominium;
import com.cit.backend.domain.entity.Unit;
import com.cit.backend.domain.repository.ApartmentRepository;
import com.cit.backend.domain.repository.BlockRepository;
import com.cit.backend.domain.repository.CondominiumRepository;
import com.cit.backend.domain.repository.UnitRepository;
import com.cit.backend.exceptions.UniqueColumnAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CondominiumService {
    @Autowired
    private CondominiumRepository condominiumRepository;
    @Autowired
    private BlockRepository blockRepository;
    @Autowired
    private ApartmentRepository apartmentRepository;
    @Autowired
    private UnitRepository unitRepository;
    @Autowired
    private TokenService tokenService;

    public Condominium save(Condominium condominium) {
        if (condominiumRepository.findByCnpj(condominium.getCnpj()) != null) {
            throw new UniqueColumnAlreadyExistsException("CNPJ has already been registered");
        }

        if (condominiumRepository.findByManagerId(condominium.getManager().getId()) != null) {
            throw new UniqueColumnAlreadyExistsException("Syndico is already managing a condominium");
        }

        Condominium condominiumSaved = condominiumRepository.save(condominium);
        int UNIT = 1;

        List<Apartment> apartments = new ArrayList<>();
        for (int i = 0; i < condominium.getBlocks(); i++) {
            Block block = new Block();
            block.setCondominium(condominiumSaved);
            block.setName("Block " + (i + 1));

            for (int j = 0; j < condominium.getUnits(); j++) {
                UNIT++;
                Unit unit = new Unit();
                unit.setBlock(block);
                unit.setNumber(UNIT);

                for (int k = 0; k < condominium.getFloors(); k++) {
                    int floor = k + 1;
                    for (int l = 0; l < condominium.getApartments(); l++) {
                        // TODO Melhora a geração de token
                        Apartment apartment = new Apartment();
                        apartment.setUnit(unit);
                        apartment.setNumber((floor * 100) + l + 1);
                        apartment.setToken(tokenService.generateToken());
                        unit.getApartments().add(apartment);
                    }
                }
                block.getUnits().add(unit);
            }

            blockRepository.save(block);
        }
        return condominiumSaved;
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
