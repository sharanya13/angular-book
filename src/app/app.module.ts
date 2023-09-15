import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsModule } from './Authors/Authors.module'
import { AdminsModule } from './Admin/Admin.module';
import { CommonModule } from '@angular/common';
import { BooksModule } from './Books/Books.module';
import { CustomersModule } from './Customers/Customers.module';
import { HomePageModule } from './HomePage/HomePage.module';
import { OrdersModule } from './Orders/Orders.module';
import { PopularBookModule } from './PopularBooks/PopularBooks.module';
import { CustomerAccountModule } from './CustomerAccount/CustomerAccount.module';
import { CustomersService } from './CustomerAccount/CustomerAccount.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthorsModule,
    AdminsModule,
    BooksModule,
    CustomersModule,
    HomePageModule,
    OrdersModule,
    PopularBookModule,
    CustomerAccountModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
