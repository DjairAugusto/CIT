package com.cit.backend.api.mapper;

import com.cit.backend.api.request.CommonAreaRequest;
import com.cit.backend.api.response.CommonAreaResponse;
import com.cit.backend.domain.entity.CommonArea;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CommonAreaMapper {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ReserveMapper reserveMapper;

        ReserveRequest reserve = commonArea.getReserve();
        if(reserve != null) {
            commonAreaEntity.getReserve().add(reserveMapper.toReserve(reserve));
        }
    public CommonArea toCommonArea(CommonAreaRequest commonArea) {
        CommonArea commonAreaEntity = modelMapper.map(commonArea, CommonArea.class);
        return commonAreaEntity;
    }

    public CommonAreaResponse toCommonAreaResponse(CommonArea commonArea) {
        return modelMapper.map(commonArea, CommonAreaResponse.class);
    }
}
