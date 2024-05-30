package com.example.demo.controller;

import com.example.demo.model.CompanyRequest;
import com.example.demo.service.CompanyRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company-requests")
public class CompanyRequestController {

    @Autowired
    private CompanyRequestService companyRequestService;

    @GetMapping("/approved/{service}")
    public List<CompanyRequest> getApprovedCompaniesByService(@PathVariable String service) {
        return companyRequestService.getApprovedCompaniesByService(service);
    }

    @PostMapping("/submit/{userId}")
    public CompanyRequest submitRequest(@RequestBody CompanyRequest request, @PathVariable Long userId) {
        return companyRequestService.submitRequest(request, userId);
    }

    @GetMapping("/all")
    public List<CompanyRequest> getAllRequests() {
        return companyRequestService.getAllRequests();
    }

    @PostMapping("/approve/{requestId}")
    public CompanyRequest approveRequest(@PathVariable Long requestId) {
        return companyRequestService.approveRequest(requestId);
    }

    @PostMapping("/reject/{requestId}")
    public void rejectRequest(@PathVariable Long requestId) {
        companyRequestService.rejectRequest(requestId);
    }

    @PostMapping("/remove/{companyId}")
    public void removeCompany(@PathVariable Long companyId) {
        companyRequestService.removeCompany(companyId);
    }
}
