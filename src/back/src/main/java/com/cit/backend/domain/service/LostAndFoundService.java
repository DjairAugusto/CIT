package com.cit.backend.domain.service;

import com.cit.backend.api.request.LostAndFoundRequest;
import com.cit.backend.domain.entity.LostAndFound;
import com.cit.backend.domain.repository.LostAndFoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LostAndFoundService {

    @Autowired
    private LostAndFoundRepository lostAndFoundRepository;

    public LostAndFound save(LostAndFound lostObject) {
        return lostAndFoundRepository.save(lostObject);
    }
}
