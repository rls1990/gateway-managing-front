import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-gateway',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './gateway.component.html',
  styleUrl: './gateway.component.css',
})
export default class GatewayComponent {}
