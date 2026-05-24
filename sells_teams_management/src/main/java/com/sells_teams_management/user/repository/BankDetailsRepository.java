package com.sells_teams_management.user.repository;

import com.sells_teams_management.user.entity.BankDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BankDetailsRepository
        extends JpaRepository<BankDetails,Long> {

    Optional<BankDetails> findByUserId(Long userId);
}
