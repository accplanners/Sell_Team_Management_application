package com.sells_teams_management.user.controller;

import com.sells_teams_management.user.dto.BankDetailsRequest;
import com.sells_teams_management.user.entity.BankDetails;
import com.sells_teams_management.user.service.BankDetailsService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bank")
@RequiredArgsConstructor
public class BankDetailsController {

    private final BankDetailsService service;

    @PostMapping
    public BankDetails save(
            @RequestBody
            BankDetailsRequest request){

        return service.save(request);
            }
        }
