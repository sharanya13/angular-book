import { Component,OnInit } from '@angular/core';
import { CustomersService } from "./CustomerAccount.service";


@Component({
    selector :'CustomerAccount',
    templateUrl: './CustomerAccount.component.html',
    providers : [CustomersService]
})

export class CustomerComponent implements OnInit
{
    customersList:any;
    constructor(private customersService : CustomersService){}
 
    ngOnInit(): void 
    {
        //this.customersService.getAllCustomersDetails(1).subscribe((data)=> console.log(data));
        
    }
}


 
