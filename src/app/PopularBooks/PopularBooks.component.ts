import { Component, OnInit } from "@angular/core";
import { PopularBookService } from "./PopularBooks.service";


@Component({
    selector :'Authors-list',
    templateUrl: './PopularBooks.component.html',
    providers : [PopularBookService ]
})

export class PopularBookComponent implements OnInit
{
    popularBooksList:any[]=[];

    constructor(private popularBookService : PopularBookService){}
 
    ngOnInit(): void 
    {
        this.popularBookService.getAllPopularBooksList().subscribe((data)=> this.popularBooksList = data);

        console.log(this.popularBooksList.length);
    }
}

