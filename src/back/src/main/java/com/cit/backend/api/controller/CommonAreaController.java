package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.CommonAreaMapper;
import com.cit.backend.api.request.CommonAreaRequest;
import com.cit.backend.api.response.CommonAreaResponse;
import com.cit.backend.domain.entity.CommonArea;
import com.cit.backend.domain.entity.Profile;
import com.cit.backend.domain.entity.Resident;
import com.cit.backend.domain.service.CommonAreaService;
import com.cit.backend.domain.service.ResidentService;
import com.cit.backend.exceptions.MissingVariableException;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/common-area")
public class CommonAreaController {
    @Autowired
    private CommonAreaService commonAreaService;

    @Autowired
    private ResidentService residentService;

    @Autowired
    private CommonAreaMapper commonAreaMapper;

    @PostMapping
    @RolesAllowed("ADMIN")
    public ResponseEntity<CommonAreaResponse> createCommonArea(@RequestBody CommonAreaRequest request) {
        CommonArea commonArea = commonAreaMapper.toCommonArea(request);
        commonArea = commonAreaService.save(commonArea);
        CommonAreaResponse response = commonAreaMapper.toCommonAreaResponse(commonArea);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<CommonAreaResponse>> getCommonAreas() {
        Profile profile = (Profile) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Resident resident = residentService.getFromProfile(profile);

        List<CommonArea> commonAreas;
        if (resident != null) commonAreas = commonAreaService.getCommonAreas(resident);
        else commonAreas = commonAreaService.getCommonAreas();

        List<CommonAreaResponse> response = commonAreaMapper.toCommonAreaResponse(commonAreas);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/by-condominium/{id:\\d+}")
    public ResponseEntity<List<CommonAreaResponse>> getCommonAreaByCondominium(@PathVariable("id") Long condominiumId) {
        List<CommonArea> commonAreas = commonAreaService.getCommonAreasByCondominiumId(condominiumId);
        List<CommonAreaResponse> response = commonAreaMapper.toCommonAreaResponse(commonAreas);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id:\\d+}")
    public ResponseEntity<CommonAreaResponse> getCommonAreaById(@PathVariable("id") Long id) {
        CommonArea commonArea = commonAreaService.findById(id);
        if (commonArea == null) return ResponseEntity.notFound().build();

        CommonAreaResponse response = commonAreaMapper.toCommonAreaResponse(commonArea);
        return ResponseEntity.ok(response);
    }

    @PatchMapping
    @RolesAllowed("ADMIN")
    public ResponseEntity<CommonAreaResponse> updateCommonArea(@RequestBody CommonAreaRequest request) {
        if (request.getId() == null)
            throw new MissingVariableException("The id of the Common Area is needed", List.of("id"));

        CommonArea commonArea = commonAreaMapper.toCommonArea(request);
        commonArea = commonAreaMapper.fillNullFields(commonArea, commonAreaService.findById(request.getId()));
        commonArea = commonAreaService.save(commonArea);
        CommonAreaResponse response = commonAreaMapper.toCommonAreaResponse(commonArea);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id:\\d+}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<Void> deleteCommonArea(@PathVariable("id") Long id) {
        commonAreaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
