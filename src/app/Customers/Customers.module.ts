import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from "./Customer-list.component";
import { CustomerService } from "./Customers.service";
import { CustomerSignUpComponent } from "./CustomerSignUp.component";

@NgModule({
    declarations:[CustomerListComponent,CustomerSignUpComponent],
    imports:[CommonModule,HttpClientModule],
    exports:[CustomerListComponent,CustomerSignUpComponent],
    providers:[CustomerService]
})

export class CustomersModule
{

}