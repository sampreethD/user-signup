import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserDetailsRoutingModule } from "./user-details-routing.module";
import { UserDetailsComponent } from "./user-details.component";

@NgModule({
    imports: [CommonModule, UserDetailsRoutingModule],
    declarations: [UserDetailsComponent]
})

export class UserDetailsModule {}