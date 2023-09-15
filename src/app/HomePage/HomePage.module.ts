import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from "./HomePage.component";

@NgModule({
    declarations:[HomePageComponent],
    imports:[CommonModule,HttpClientModule],
    exports:[HomePageComponent],
    providers:[]
})

export class HomePageModule
{

}