import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor( private http :  HttpClient) { }

  SignUp(){
    const apiHeaders = {
      headers: new HttpHeaders({
        "key": "AIzaSyD9J8xkrfZ_7sX5Gn9bMWUxKLm9jFqTRXU"
      })
    }

    const body ={
      "email":"",
      "password":"",
      "returnSecureToken": true
    }

    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp", body, apiHeaders )

  }
}
