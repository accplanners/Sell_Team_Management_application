package com.sells_teams_management.user.service;

import com.sells_teams_management.user.dto.BankDetailsRequest;
import com.sells_teams_management.user.entity.BankDetails;
import com.sells_teams_management.user.repository.BankDetailsRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BankDetailsService {

    private final BankDetailsRepository repository;

    public BankDetails save(
            BankDetailsRequest request){

        BankDetails details =
                repository.findByUserId(
                        request.getUserId())
                .orElse(
                        new BankDetails());

        details.setUserId(request.getUserId());
        details.setBankName(request.getBankName());
        details.setAccountNumber(request.getAccountNumber());
        details.setIfscCode(request.getIfscCode());
        details.setBranchName(request.getBranchName());
        details.setAccountHolderName(
                request.getAccountHolderName());

        return repository.save(details);
    }
}
