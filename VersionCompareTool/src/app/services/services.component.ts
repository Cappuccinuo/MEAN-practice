import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { SERVICES } from '../mock-services';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[];
  selectedService = Service;

  onSelect(service: Service): void {
    this.selectedService = service;
  }

  getServices(): void {
    this.serviceService.getServices()
      .subscribe(services => this.services = services);
  }

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getServices();
  }

}
