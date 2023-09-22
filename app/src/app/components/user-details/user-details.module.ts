import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { ArrayToStringPipe, UserDetailsComponent } from './user-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
  declarations: [UserDetailsComponent,ArrayToStringPipe],
})
export class UserDetailsModule {}
