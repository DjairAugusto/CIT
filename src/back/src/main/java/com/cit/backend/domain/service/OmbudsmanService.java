package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.Ticket;
import com.cit.backend.domain.repository.OmbudsmanRepository;
import com.cit.backend.exceptions.UniqueColumnAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OmbudsmanService {
    @Autowired
    private OmbudsmanRepository ombudsmanRepository;

    public Ticket findById(Long id) {
        return ombudsmanRepository.findById(id).orElse(null);
    }

    public Ticket create(Ticket ticket) {
        if (ombudsmanRepository.findById(ticket.getId()).isPresent()) {
            throw new UniqueColumnAlreadyExistsException("Ticket has already been registered");
        }

        return ombudsmanRepository.save(ticket);
    }

    public Ticket update(Ticket ticket) {
        return ombudsmanRepository.save(ticket);
    }
}
