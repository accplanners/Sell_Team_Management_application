package com.sells_teams_management.user.service;

import com.sells_teams_management.user.entity.PersonalDetails;
import com.sells_teams_management.user.dto.PersonalDetailsRequest;
import com.sells_teams_management.user.repository.PersonalDetailsRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class PersonalDetailsService {

    private final PersonalDetailsRepository repository;

    public PersonalDetails save(
            PersonalDetailsRequest request){

        PersonalDetails details =
                repository
                .findByUserId(request.getUserId())
                .orElse(new PersonalDetails());

        details.setUserId(request.getUserId());
        details.setFirstName(request.getFirstName());
        details.setMiddleName(request.getMiddleName());
        details.setLastName(request.getLastName());
        details.setAddress(request.getAddress());
        details.setMobile(request.getMobile());
        details.setEmail(request.getEmail());

        details.setDob(
                LocalDate.parse(request.getDob())
        );

        details.setPancard(request.getPancard());
        details.setNomineeName(request.getNomineeName());
        details.setRelation(request.getRelation());

        return repository.save(details);
    }
}