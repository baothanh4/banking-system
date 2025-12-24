package com.example.banking_system.Entity;


import com.example.banking_system.Enum.AccountStatus;
import com.example.banking_system.Enum.AccountType;
import com.example.banking_system.Enum.UserStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "accounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Số tài khoản ngân hàng
    @Column(name = "account_number", unique = true, nullable = false, length = 20)
    private String accountNumber;

    // Một user có thể có nhiều tài khoản
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType accountType;

    @Column(name = "balance", nullable = false, precision = 19, scale = 2)
    private BigDecimal balance;

    @Column(name = "currency", length = 3)
    private String currency; // VND, USD

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private AccountStatus status;
}

