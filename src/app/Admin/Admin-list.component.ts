import { Component, OnInit } from "@angular/core";
import { AdminService } from "./Admin.service";
import { Router } from "@angular/router";


@Component({
    selector :'Admin-list',
    templateUrl: './Admin-list.component.html',
    providers : [AdminService ],
    styleUrls: ['./Admin.component.css']
})

export class AdminListComponent implements OnInit
{
    adminList:any[]=[];

    constructor(private adminService : AdminService, private router : Router){}
    
    authenticate(username:String,password:String)
    {

        console.log(username+" "+password);
        const data={
            "username":username,
            "password":password
        }

        this.adminService.verifyAdminDetails(data).subscribe((result)=> {
            if(result==1)
            {
                this.router.navigate(['Booklist']);
            }
            else
            {
                alert("Invalid Credentials")
            }
        },)
    }
    SignUp()
    {
        this.router.navigate(['CustomerSignUp']);
    }


    ngOnInit(): void 
    {
        // this.adminService.getAllAdminsDetails().subscribe((data)=> this.adminList = data);
    }
}