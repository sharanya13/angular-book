import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { PopularBookService } from "./PopularBooks.service";
import { PopularBookComponent } from "./PopularBooks.component";


 
@NgModule({

    declarations:[PopularBookComponent],

    imports:[CommonModule,HttpClientModule],

    exports:[PopularBookComponent],

    providers:[PopularBookService]

})

export class PopularBookModule
{
 
}