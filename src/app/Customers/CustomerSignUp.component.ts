import { Component, OnInit } from "@angular/core";
import { CustomerService } from "./Customers.service";
import { Router } from "@angular/router";

@Component({
    selector :'CustomerSignUp',
    templateUrl: './CustomerSignUp.component.html',
    providers : [CustomerService ],
    styleUrls: ['./Customer-list.component.css']
})

export class CustomerSignUpComponent implements OnInit
{
    customerList:any[]=[];
    constructor(private customerSignUpService : CustomerService,private router : Router){}
    onclick(firstname:String,lastname:String,email:String,phonenumber:any,address:any,pincode:any,username:String,password:String)
    {
       const data={
            "username":username,
            "password":password,
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "phonenumber":phonenumber,
            "address":address,
            "pincode":pincode
        }
        this.customerSignUpService.InsertCustomerDetails(data).subscribe((result)=> {
            if(result==1)
            {
                alert("Registered");
                this.router.navigate(['Customerlist']);
            }
            else
            {
                alert("Something went wrong..!!");
                this.router.navigate(['customersignup']);
            }
        });
    }
    ngOnInit(): void
    {
        
    }
}