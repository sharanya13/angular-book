import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from "./Books-list.component";
import { BooksService } from "./Books.service";
import { CartComponent } from "./Cart.component";
@NgModule({
    declarations:[BooksListComponent,CartComponent],
    imports:[CommonModule,HttpClientModule],
    exports:[BooksListComponent,CartComponent],
    providers:[BooksService]
})

export class BooksModule
{

}

 