package com.example.banking_system.Repository;

import com.example.banking_system.Entity.OtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtpRepository extends JpaRepository<OtpVerification,Long> {

    OtpVerification findTopByPhoneOrderByExpiredAtDesc(String phone);

}
