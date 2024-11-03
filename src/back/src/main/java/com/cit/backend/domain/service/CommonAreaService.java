package com.cit.backend.domain.service;

import com.cit.backend.domain.entity.CommonArea;
import com.cit.backend.domain.repository.CommonAreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommonAreaService {
    @Autowired
    private CommonAreaRepository commonAreaRepository;

    public CommonArea save(CommonArea commonArea) {
        return commonAreaRepository.save(commonArea);
    }

    public List<CommonArea> getCommonAreasByCondominiumId(long condominiumId) {
        return commonAreaRepository.findAllByCondominiumId(condominiumId);
    }
}
