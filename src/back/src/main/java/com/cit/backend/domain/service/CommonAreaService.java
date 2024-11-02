package com.cit.backend.domain.service;

import com.cit.backend.domain.repository.CommonAreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CommonAreaService {
    @Autowired
    private CommonAreaRepository commonAreaRepository;
}
