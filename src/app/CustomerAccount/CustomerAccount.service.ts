import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CustomersService
{
    constructor(private httpClient:HttpClient) { }
    
    public getAllCustomersDetails(id:any) : Observable<any>
    {
        return this.httpClient.get('http://localhost:8087/customers/'+id);
    }
}