import { Component, OnInit } from "@angular/core";
import { AdminService } from "./Admin.service";
import { Router } from "@angular/router";

@Component({
    selector :'CustomerSignUp',
    templateUrl: './AdminSignUp.component.html',
    providers : [AdminService ],
    styleUrls: ['./Admin.component.css']
})

export class AdminSignUpComponent implements OnInit
{
    customerList:any[]=[];
    constructor(private adminService : AdminService, private router : Router){}
    onclick(name:String,storecode:any,username:String,password:String)
    {
       const data={
            "username":username,
            "password":password,
            "name":name,
            "storecode":storecode
        }
        this.adminService.insertAdminDetails(data).subscribe((result)=> {
            if(result==1)
            {
                alert("Registered")
                this.router.navigate(['Adminlist']);
            }
            else
            {
                alert("Something went wrong..!!");
            }
        });
    }
    ngOnInit(): void
    {
        
    }
}