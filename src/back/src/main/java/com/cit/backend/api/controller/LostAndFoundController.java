package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.LostAndFoundMapper;
import com.cit.backend.api.request.LostAndFoundRequest;
import com.cit.backend.api.response.LostAndFoundResponse;
import com.cit.backend.domain.entity.LostAndFound;
import com.cit.backend.domain.service.LostAndFoundService;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lost-and-found")
public class LostAndFoundController {

    @Autowired
    private LostAndFoundService lostObjectService;

    @Autowired
    private LostAndFoundMapper lostObjectMapper;

    @PostMapping
    @RolesAllowed("EMPLOYEE")
    public ResponseEntity<LostAndFoundResponse> lostObjectCreate(@RequestBody LostAndFoundRequest lostObject) {
        LostAndFound lostAndFound = lostObjectMapper.toLostAndFound(lostObject);
        lostAndFound = lostObjectService.save(lostAndFound);
        LostAndFoundResponse response = lostObjectMapper.toLostAndFoundResponse(lostAndFound);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id:\\d+}")
    public ResponseEntity<LostAndFoundResponse> getLostObject(@PathVariable("/{id:\\d+}") String id){
        return null;
    }

}
