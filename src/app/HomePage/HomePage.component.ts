import { Component} from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector :'Customer-list',
    templateUrl: './HomePage.component.html',
    providers : [ ],
    styleUrls: ['./HomePage.component.css']
})

export class HomePageComponent 
{
    constructor(private router : Router){}
    admin()
    {
        this.router.navigate(['Adminlist']);
    }
    customer()
    {
        this.router.navigate(['Customerlist']);
    }
}