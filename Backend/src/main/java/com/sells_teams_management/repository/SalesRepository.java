package com.sells_teams_management.repository;

public class SalesRepository {
    
}
package com.app.repository;

import com.app.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaleRepository
        extends JpaRepository<Sale, Long> {

    List<Sale> findByUserId(String userId);
}