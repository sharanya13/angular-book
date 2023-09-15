import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from "./CustomerAccount.component";
import { CustomersService } from "./CustomerAccount.service";


 
@NgModule({

    declarations:[CustomerComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[CustomerComponent],

    providers:[CustomersService]

})

export class CustomerAccountModule
{
 
}