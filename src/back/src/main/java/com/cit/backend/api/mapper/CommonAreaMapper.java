package com.cit.backend.api.mapper;

import com.cit.backend.api.request.CommonAreaRequest;
import com.cit.backend.api.response.CommonAreaResponse;
import com.cit.backend.domain.entity.CommonArea;
import com.cit.backend.domain.service.CondominiumService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CommonAreaMapper {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CondominiumService condominiumService;

    public CommonArea toCommonArea(CommonAreaRequest request) {
        CommonArea commonArea = modelMapper.map(request, CommonArea.class);
        commonArea.setCondominium(condominiumService.findById(request.getCondominiumId()));
        return commonArea;
    }

    public CommonAreaResponse toCommonAreaResponse(CommonArea commonArea) {
        return modelMapper.map(commonArea, CommonAreaResponse.class);
    }

    public List<CommonAreaResponse> toCommonAreaResponse(List<CommonArea> commonAreas) {
        return commonAreas.stream()
                .map(this::toCommonAreaResponse)
                .toList();
    }
}
