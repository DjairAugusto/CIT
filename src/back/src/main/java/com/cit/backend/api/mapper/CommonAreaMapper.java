package com.cit.backend.api.mapper;

import com.cit.backend.api.request.CommonAreaRequest;
import com.cit.backend.api.request.ReserveRequest;
import com.cit.backend.domain.entity.Apartment;
import com.cit.backend.domain.entity.CommonAreas;
import com.cit.backend.domain.entity.Reserve;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CommonAreaMapper {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ReserveMapper reserveMapper;

    public CommonAreas toCommonArea(CommonAreaRequest commonArea) {
        CommonAreas commonAreaEntity = modelMapper.map(commonArea, CommonAreas.class);
        ReserveRequest reserve = commonArea.getReserve();
        if(reserve != null) {
            commonAreaEntity.getReserve().add(reserveMapper.toReserve(reserve));
        }
        return commonAreaEntity;
    }
}
