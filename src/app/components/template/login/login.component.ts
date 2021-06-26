import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  userState: String
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userState: String;
  btnEnable = false;
  emailUser= "";
  pswUser=""

  constructor( private store: Store<AppState>) { 

    this.store.subscribe(state =>{
      this.userState = state.userState
    })
  }

  ngOnInit(): void {
  }

  logIn($e){
    $e.preventDefault();
    console.log($e.target[0].value)
    console.log($e.target[1].value)
    const action: Action ={
      type: 'LOGIN'
    }
    this.store.dispatch(action);
  }

  emailInput(email){
    this.emailUser = email
  }

  passwordInput(psw){
    this.pswUser = psw
    console.log(psw)
  }

  logOut(){
    const action: Action ={
      type: 'LOGOUT'
    }
    this.store.dispatch(action);
  }

  SignIn(){
    const action: Action ={
      type: 'SIGNIN'
    }
    this.store.dispatch(action);
  }

}
