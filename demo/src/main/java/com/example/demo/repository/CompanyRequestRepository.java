package com.example.demo.repository;

import com.example.demo.model.CompanyRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CompanyRequestRepository extends JpaRepository<CompanyRequest, Long> {
    List<CompanyRequest> findByServicesAndApproved(String services, boolean approved);
}
