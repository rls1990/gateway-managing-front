import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  OnInit,
} from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GatewayService } from '../../services/gateway.service';
import { Gateway } from '../../interfaces/gateway';
import { Observable } from 'rxjs';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-gateway',
  standalone: true,
  imports: [
    LoadingComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
  ],
  templateUrl: './gateway.component.html',
  styleUrl: './gateway.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GatewayComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'ip_address',
    'periferical_devices',
    'actions',
  ];

  dataSource!: MatTableDataSource<Gateway>;

  public gatewayService = inject(GatewayService);

  paginator!: MatPaginator;

  gateways!: Observable<any>;

  constructor() {
    console.log('Constructor');
    this.dataSource = new MatTableDataSource<Gateway>();
  }

  ngOnInit() {
    this.gatewayService.getGateways().subscribe((res) => {
      console.log('On Init');
      console.log(res);
      this.dataSource.data = [...res];
    });
  }

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator | null) {
    this.dataSource.paginator = paginator;
    console.log('ViewChild');
  }
}
