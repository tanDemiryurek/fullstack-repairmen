import { Component, OnInit } from '@angular/core';
import { CompanyRequestService } from '../../service/company-request.service';
import { CompanyRequest } from '../../models/company-request.model';

@Component({
  selector: 'app-dogalgaz',
  templateUrl: './dogalgaz.component.html',
  styleUrls: ['./dogalgaz.component.css']
})
export class DogalgazComponent implements OnInit {
  approvedCompanies: CompanyRequest[] = [];

  constructor(private companyRequestService: CompanyRequestService) {}

  ngOnInit(): void {
    this.loadApprovedCompanies();
  }

  loadApprovedCompanies() {
    this.companyRequestService.getApprovedCompaniesByService('dogalgaz').subscribe(companies => {
      this.approvedCompanies = companies;
    });
  }

  formatCompanyName(companyName: string): string {
    return companyName.toLowerCase().replace(/\s+/g, '');
  }
}
