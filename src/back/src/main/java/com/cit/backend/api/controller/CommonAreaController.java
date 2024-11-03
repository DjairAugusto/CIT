package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.CommonAreaMapper;
import com.cit.backend.api.request.CommonAreaRequest;
import com.cit.backend.api.response.CommonAreaResponse;
import com.cit.backend.domain.entity.CommonArea;
import com.cit.backend.domain.service.CommonAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/common-area")
public class CommonAreaController {
    @Autowired
    private CommonAreaService commonAreaService;

    @Autowired
    private CommonAreaMapper commonAreaMapper;

    @PostMapping
    public ResponseEntity<CommonAreaResponse> createCommonArea(@RequestBody CommonAreaRequest request) {
        CommonArea commonArea = commonAreaMapper.toCommonArea(request);
        commonArea = commonAreaService.save(commonArea);
        CommonAreaResponse response = commonAreaMapper.toCommonAreaResponse(commonArea);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/by-condominium/{id:\\d+}")
    public ResponseEntity<List<CommonAreaResponse>> getCommonArea(@PathVariable("id") Long condominiumId) {
        List<CommonArea> commonAreas = commonAreaService.getCommonAreasByCondominiumId(condominiumId);
        List<CommonAreaResponse> response = commonAreaMapper.toCommonAreaResponse(commonAreas);

        return ResponseEntity.ok(response);
    }
}
