import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { OrdersListComponent } from "./Orders.component";
import { OrdersService } from "./Orders.service";


 
@NgModule({

    declarations:[OrdersListComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[OrdersListComponent],

    providers:[OrdersService]

})

export class OrdersModule
{
 
}