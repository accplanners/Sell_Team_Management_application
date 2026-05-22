// package com.sells_teams_management.commission.controller;

// import com.sells_teams_management.commission.dto.CommissionResponseDto;
// import com.sells_teams_management.commission.enums.BusinessSide;
// import com.sells_teams_management.commission.service.CommissionService;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/commission")
// public class CommissionController {

//     private final CommissionService service;

//     public CommissionController(
//             CommissionService service
//     ) {
//         this.service = service;
//     }

//     @PostMapping("/{userId}/business")
//     public CommissionResponseDto addBusiness(
//             @PathVariable String userId,
//             @RequestParam BusinessSide side,
//             @RequestParam int count
//     ) {

//         return service.addBusiness(
//                 userId,
//                 side,
//                 count
//         );
//     }
// }