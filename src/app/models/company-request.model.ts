import { User } from './user.model';

export class CompanyRequest {
  id: number;
  companyName: string;
  services: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  approved: boolean;
  user: User;

  constructor(
    id: number,
    companyName: string,
    services: string,
    email: string,
    phone: string,
    location: string,
    description: string,
    approved: boolean,
    user: User
  ) {
    this.id = id;
    this.companyName = companyName;
    this.services = services;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.description = description;
    this.approved = approved;
    this.user = user;
  }
}
