package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.LostAndFound;
import com.cit.backend.domain.repository.LostAndFoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LostAndFoundService {

    @Autowired
    private LostAndFoundRepository LostAndFound;

    public void createLostObject(LostAndFound lostObject) {

    }
}
