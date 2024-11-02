package com.cit.backend.api.mapper;

import com.cit.backend.api.request.CommonAreaRequest;
import com.cit.backend.api.response.CommonAreaResponse;
import com.cit.backend.domain.entity.CommonArea;
import com.cit.backend.domain.service.CondominiumService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CommonAreaMapper {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CondominiumService condominiumService;

    public CommonArea toCommonArea(CommonAreaRequest commonArea) {
        CommonArea commonAreaEntity = modelMapper.map(commonArea, CommonArea.class);
        commonAreaEntity.setCondominium(condominiumService.findById(commonArea.getCondominiumId()));
        return commonAreaEntity;
    }

    public CommonAreaResponse toCommonAreaResponse(CommonArea commonArea) {
        return modelMapper.map(commonArea, CommonAreaResponse.class);
    }
}
