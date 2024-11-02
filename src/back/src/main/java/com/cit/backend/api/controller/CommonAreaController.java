package com.cit.backend.api.controller;

import com.cit.backend.domain.service.CommonAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/common-area")
public class CommonAreaController {
    @Autowired
    private CommonAreaService commonAreaService;
}
