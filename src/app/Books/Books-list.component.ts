import { Component, OnInit } from "@angular/core";
import { BooksService } from "./Books.service";
import { Router } from "@angular/router";

@Component({
    selector :'Books-list',
    templateUrl: './Books-list.component.html',
    providers : [BooksService]
})

export class BooksListComponent implements OnInit
{
    BooksList:any[]=[];
    constructor(private booksService : BooksService,private router : Router){}
    searching(search:string)
    {
        if(search.length!=0)
        {
            this.booksService.getAllBooksDetails(search).subscribe((data)=> this.BooksList = data);
        }
        else
        {
            this.booksService.getAllBooksDetails('').subscribe((data)=> this.BooksList = data);
        }
    };

    addtocart(id:any,quantity:number)
    {
        const data={
                "bookid": { "bookid" : id },
                   "quantity": quantity
           }
        this.booksService.InsertIntoCart(data).subscribe((result)=>{});
    }
    logout()
    {
        this.booksService.logout().subscribe();
    }
    ngOnInit(): void
    {
        this.booksService.getAllBooksDetails('').subscribe((data)=> this.BooksList = data);
    }
}