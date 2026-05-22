// package com.sells_teams_management.commission.service;

// import com.sells_teams_management.commission.dto.CommissionResponseDto;
// import com.sells_teams_management.commission.engine.DeepTeamCommissionEngine;
// import com.sells_teams_management.commission.entity.CommissionWallet;
// import com.sells_teams_management.commission.entity.PairMatch;
// import com.sells_teams_management.commission.enums.BusinessSide;
// import com.sells_teams_management.commission.repository.CommissionWalletRepository;
// import com.sells_teams_management.commission.repository.PairMatchRepository;

// import org.springframework.stereotype.Service;

// @Service
// public class CommissionService {

//     private final PairMatchRepository pairRepo;

//     private final CommissionWalletRepository walletRepo;

//     private final DeepTeamCommissionEngine engine;

//     public CommissionService(
//             PairMatchRepository pairRepo,
//             CommissionWalletRepository walletRepo,
//             DeepTeamCommissionEngine engine
//     ) {
//         this.pairRepo = pairRepo;
//         this.walletRepo = walletRepo;
//         this.engine = engine;
//     }

//     public CommissionResponseDto addBusiness(
//             String userId,
//             BusinessSide side,
//             int count
//     ) {

//         PairMatch pairMatch = pairRepo
//                 .findByUserId(userId)
//                 .orElseGet(() -> createPair(userId));

//         CommissionWallet wallet = walletRepo
//                 .findByUserId(userId)
//                 .orElseGet(() -> createWallet(userId));

//         // Add business to LEFT or RIGHT
//         if (side == BusinessSide.LEFT) {

//             pairMatch.setLeftBusiness(
//                     pairMatch.getLeftBusiness() + count
//             );

//         } else {

//             pairMatch.setRightBusiness(
//                     pairMatch.getRightBusiness() + count
//             );
//         }

//         // Save initial updates
//         pairRepo.save(pairMatch);
//         walletRepo.save(wallet);

//         // Process commission matching
//         engine.processPair(userId);

//         // Fetch updated values
//         PairMatch updatedPair = pairRepo
//                 .findByUserId(userId)
//                 .orElseThrow(() ->
//                         new RuntimeException("Pair data not found"));

//         CommissionWallet updatedWallet = walletRepo
//                 .findByUserId(userId)
//                 .orElseThrow(() ->
//                         new RuntimeException("Wallet not found"));

//         // Return response
//         return new CommissionResponseDto(
//                 userId,
//                 updatedPair.getLeftBusiness(),
//                 updatedPair.getRightBusiness(),
//                 updatedPair.getMatchedPairs(),
//                 updatedWallet.getTotalEarnings()
//         );
//     }

//     // Create new pair entry
//     private PairMatch createPair(String userId) {

//         PairMatch pair = new PairMatch();

//         pair.setUserId(userId);
//         pair.setLeftBusiness(0);
//         pair.setRightBusiness(0);
//         pair.setMatchedPairs(0);

//         return pair;
//     }

//     // Create wallet
//     private CommissionWallet createWallet(String userId) {

//         CommissionWallet wallet =
//                 new CommissionWallet();

//         wallet.setUserId(userId);
//         wallet.setAvailableBalance(0);
//         wallet.setTotalEarnings(0);

//         return wallet;
//     }
// }