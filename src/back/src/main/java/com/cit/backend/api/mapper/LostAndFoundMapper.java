package com.cit.backend.api.mapper;

import com.cit.backend.api.request.LostAndFoundRequest;
import com.cit.backend.api.response.LostAndFoundResponse;
import com.cit.backend.domain.entity.LostAndFound;
import com.cit.backend.domain.service.LostAndFoundService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
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

    public List<LostAndFoundResponse> toLostAndFoundResponse(List <LostAndFound> lostObjects) {
        return lostObjects.stream().map(this::toLostAndFoundResponse)
                .toList();
    }
}
