import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gateway } from '../interfaces/gateway';
import { HttpClient } from '@angular/common/http';

interface State {
  gateways: Gateway[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GatewayService {
  private http = inject(HttpClient);

  constructor() {
    console.log('Gateway Service');
  }

  getGateways(): Observable<any> {
    return this.http.get('http://localhost:3000/gateway/');
  }
}
