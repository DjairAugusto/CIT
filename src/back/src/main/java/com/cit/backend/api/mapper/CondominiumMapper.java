package com.cit.backend.api.mapper;

import com.cit.backend.api.request.CondominiumRequest;
import com.cit.backend.api.response.CondominiumResponse;
import com.cit.backend.domain.entity.Condominium;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CondominiumMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Condominium toCondominium(CondominiumRequest condominium) {
        return modelMapper.map(condominium, Condominium.class);
    }

    public CondominiumResponse toCondominiumResponse(Condominium condominium) {
        return modelMapper.map(condominium, CondominiumResponse.class);
    }

    public CondominiumRequest toCondominiumRequest(Condominium condominium) {
        return modelMapper.map(condominium, CondominiumRequest.class);
    }
}
