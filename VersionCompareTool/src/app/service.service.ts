import { Injectable } from '@angular/core';
import { Service } from './service';
import { SERVICES } from './mock-services';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getServices(): Observable<Service[]> {
    this.messageService.add('Service: fetched services');
    return of(SERVICES);
  }

  constructor(private messageService: MessageService) { }
}
