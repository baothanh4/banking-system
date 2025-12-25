package com.example.banking_system.Repository;

import com.example.banking_system.Entity.OtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface OtpRepository extends JpaRepository<OtpVerification,Long> {

    OtpVerification findTopByPhoneOrderByExpiredAtDesc(String phone);

    @Query("""
SELECT o FROM OtpVerification o
WHERE o.sessionId = :sessionId
AND o.otp_code = :otp
AND o.purpose = :purpose
AND o.verified = false
AND o.expiredAt > :now
""")
    Optional<OtpVerification> findValidOtp(
            String sessionId,
            String otp,
            String purpose,
            LocalDateTime now
    );

}
