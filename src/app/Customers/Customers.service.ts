import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CustomerService
{
    constructor(private httpClient:HttpClient) { }
    public verifyCustomersLogin(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/customers/',data);
    }
    public InsertCustomerDetails(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/customers/insert', data);
    }
}