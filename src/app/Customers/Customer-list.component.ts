import { Component, OnInit } from "@angular/core";
import { CustomerService } from "./Customers.service";
import { Router } from "@angular/router";

@Component({
    selector :'Customer-list',
    templateUrl: './Customer-list.component.html',
    providers : [CustomerService ],
    styleUrls: ['./Customer-list.component.css']
})

export class CustomerListComponent implements OnInit
{
    customerList:any[]=[];
    constructor(private customerService : CustomerService,private router : Router){}
    authenticate(username:String,password:String)
    {
        alert("Welcome");
       const data={
            "username":username,
            "password":password
        }
        this.customerService.verifyCustomersLogin(data).subscribe((result)=> {
            if(result==1)
            {
                alert("Login Successful");
                this.router.navigate(['Booklist']);
            }
            else
            {
                alert("Invalid Credentials")
            }
        });
    }
    ngOnInit(): void
    {
        // this.customerService.getAllCustomersDetails().subscribe((data)=> this.customerList = data);
    }
}