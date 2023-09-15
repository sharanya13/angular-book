import { Component, OnInit } from "@angular/core";
import { AuthorsService } from "./Authors.service";


@Component({
    selector :'Authors-list',
    templateUrl: './Authors-list.component.html',
    providers : [AuthorsService ]
})

export class AuthorsListComponent implements OnInit
{
    authorsList:any[]=[];

    constructor(private authorservice : AuthorsService){}
 
    ngOnInit(): void 
    {
        this.authorservice.getAllAuthorsDetails().subscribe((data)=> this.authorsList = data);

        console.log(this.authorsList.length);
    }
}


 