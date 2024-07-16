import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-add-gateway',
  standalone: true,
  imports: [
    LoadingComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './add-gateway.component.html',
  styleUrl: './add-gateway.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddGatewayComponent {
  form!: FormGroup;
  // private formBuilder!: FormBuilder;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      ip_address: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[1-9]{1,3}[.][1-9]{1,3}[.][1-9]{1,3}[.][1-9]{1,3}'
          ),
        ],
      ],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
