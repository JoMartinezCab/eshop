import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = environment.basicUrl;
  private auth:Auth[] = [];

  constructor(private httpClient:HttpClient){}

  authUser():Observable<boolean>{
    const url = `${ this.apiUrl }/auth/login`;
    return this.httpClient.post<boolean>(url);
  }
}
