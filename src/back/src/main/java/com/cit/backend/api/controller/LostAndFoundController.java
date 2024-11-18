package com.cit.backend.api.controller;

import com.cit.backend.domain.service.LostAndFoundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lost-and-found")
public class LostAndFoundController {

    @Autowired
    private LostAndFoundService lostObjectService;

    @PostMapping
    public ResponseEntity<LostAndFoundController> lostObjectCreate(@RequestBody String body){
        return null;
    }

    @GetMapping("/{id:\\d+}")
    public ResponseEntity<LostAndFoundController> getLostObject(@PathVariable("/{id:\\d+}") String id){
        return null;
    }

}
