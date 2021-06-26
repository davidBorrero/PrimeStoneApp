import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  apiHeaders = {
    headers: new HttpHeaders({
      "key": "AIzaSyD9J8xkrfZ_7sX5Gn9bMWUxKLm9jFqTRXU"
    })
  }

  constructor( private http :  HttpClient) { }

  SignUp(email, password){

    const body ={
      "email":email,
      "password":password,
      "returnSecureToken": true
    }

    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp", body, this.apiHeaders )

  }

  SignIn(email, password){

    const body ={
      "email":email,
      "password":password,
      "returnSecureToken": true
    }

    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword", body, this.apiHeaders )
  }
}
