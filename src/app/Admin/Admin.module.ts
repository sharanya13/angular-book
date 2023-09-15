import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { AdminListComponent } from "./Admin-list.component";
import { AdminService } from "./Admin.service";
import { AdminSignUpComponent } from "./AdminSignUp.component";


@NgModule({
    declarations:[AdminListComponent,AdminSignUpComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[AdminListComponent,AdminSignUpComponent],

    providers:[AdminService]
})

export class AdminsModule
{
 
}