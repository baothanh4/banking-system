package com.example.banking_system.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "otp_verification")
@AllArgsConstructor
@NoArgsConstructor
public class OtpVerification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "phone")
    private String phone;

    @Column(name = "otp_code")
    private String otp_code;

    @Column(name = "expired_at")
    private LocalDateTime expiredAt;

    @Column(name = "verified")
    private boolean verified;
}
