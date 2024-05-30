package com.example.demo.controller;

import com.example.demo.model.CompanyRequest;
import com.example.demo.repository.CompanyRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private CompanyRequestRepository companyRequestRepository;

    @GetMapping("/company-requests")
    public List<CompanyRequest> getCompanyRequests() {
        return companyRequestRepository.findAll();
    }

    @PostMapping("/company-requests")
    public ResponseEntity<CompanyRequest> createCompanyRequest(@RequestBody CompanyRequest companyRequest) {
        CompanyRequest savedRequest = companyRequestRepository.save(companyRequest);
        return ResponseEntity.ok(savedRequest);
    }

    @PostMapping("/approve-company/{id}")
    public ResponseEntity<String> approveCompany(@PathVariable Long id) {
        Optional<CompanyRequest> request = companyRequestRepository.findById(id);
        if (request.isPresent()) {
            CompanyRequest companyRequest = request.get();
            // You can add logic here to create a new User with the company role if needed
            companyRequestRepository.delete(companyRequest);
            return ResponseEntity.ok("Company request approved");
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/reject-company/{id}")
    public ResponseEntity<String> rejectCompany(@PathVariable Long id) {
        Optional<CompanyRequest> request = companyRequestRepository.findById(id);
        if (request.isPresent()) {
            companyRequestRepository.deleteById(id);
            return ResponseEntity.ok("Company request rejected");
        }
        return ResponseEntity.notFound().build();
    }
}
