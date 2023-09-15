import { Component, OnInit } from "@angular/core";
import { OrdersService } from "./Orders.service";
import { BooksService } from "../Books/Books.service";


@Component({
    selector :'Orders',
    templateUrl: './Orders.component.html',
    providers : [OrdersService,BooksService ]
})

export class OrdersListComponent implements OnInit
{
    ordersList:any[]=[];
    BooksList:any[]=[];
    constructor(private ordersService : OrdersService, private booksService : BooksService){}
    
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

    ngOnInit(): void 
    {
        this.ordersService.getAllOrdersDetails().subscribe((data)=> this.ordersList = data);
    }
}

