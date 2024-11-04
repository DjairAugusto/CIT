package com.cit.backend.api.mapper;

import com.cit.backend.api.request.ReserveRequest;
import com.cit.backend.domain.entity.Reserve;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReserveMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Reserve toReserve(ReserveRequest reserve) {
        return modelMapper.map(reserve, Reserve.class);
    }
}
