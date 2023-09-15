import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AdminService
{
    constructor(private httpClient:HttpClient) { }
    
    public verifyAdminDetails(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/admin/',data);
    }

    public insertAdminDetails(data:any) : Observable<any>
    {
        return this.httpClient.post('http://localhost:8087/admin/insert',data);
    }
}

 