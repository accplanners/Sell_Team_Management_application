package com.sells_teams_management.user.controller;

import com.sells_teams_management.user.dto.PersonalDetailsRequest;
import com.sells_teams_management.user.entity.PersonalDetails;
import com.sells_teams_management.user.service.PersonalDetailsService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/personal")
@RequiredArgsConstructor
public class PersonalDetailsController {

    private final PersonalDetailsService service;

    @PostMapping
    public PersonalDetails save(
            @RequestBody PersonalDetailsRequest request) {

        return service.save(request);
    }
}