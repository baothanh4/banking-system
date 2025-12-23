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
@Data
@Table(name = "account")
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "account_number",unique = true,nullable = false)
    private String account_number;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type")
    private AccountType account_type;

    @Column(name = "balance")
    private BigDecimal balance;

    @Column(name = "currency")
    private String currency;

    @Enumerated(EnumType.STRING)
    private AccountStatus status;
}
