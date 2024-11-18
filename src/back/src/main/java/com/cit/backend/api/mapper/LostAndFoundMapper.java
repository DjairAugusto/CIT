package com.cit.backend.api.mapper;

import com.cit.backend.api.request.LostAndFoundRequest;
import com.cit.backend.api.response.LostAndFoundResponse;
import com.cit.backend.domain.entity.LostAndFound;
import com.cit.backend.domain.service.LostAndFoundService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class LostAndFoundMapper {

    @Autowired
    private ModelMapper modelMapper;

    private LostAndFoundService lostAndFoundService;

    public LostAndFound toLostAndFound (LostAndFoundRequest lostObject) {
        return modelMapper.map(lostObject, LostAndFound.class);
    }

    public LostAndFoundResponse toLostAndFoundResponse(LostAndFound lostObject) {
        return modelMapper.map(lostObject, LostAndFoundResponse.class);
    }
}
