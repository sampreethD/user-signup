import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [RegistrationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegistrationModule {}
