import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PopularBookService
{
    constructor(private httpClient:HttpClient) { }
    
    public getAllPopularBooksList() : Observable<any>
    {
        return this.httpClient.get('http://localhost:8087/reports/');
    }
}