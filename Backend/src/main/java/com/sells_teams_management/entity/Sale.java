package com.sells_teams_management.entity;

public class Sale {
    
}
package com.app.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId;

    private String productName;

    private Double amount;

    private Integer quantity;

    private Double pv;

    private LocalDateTime purchaseDate;

    public Sale() {
        this.purchaseDate = LocalDateTime.now();
    }

    public Sale(
            String userId,
            String productName,
            Double amount,
            Integer quantity,
            Double pv
    ) {
        this.userId = userId;
        this.productName = productName;
        this.amount = amount;
        this.quantity = quantity;
        this.pv = pv;
        this.purchaseDate = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPv() {
        return pv;
    }

    public void setPv(Double pv) {
        this.pv = pv;
    }

    public LocalDateTime getPurchaseDate() {
        return purchaseDate;
    }
}