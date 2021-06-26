import {Action} from '@ngrx/store';
import { LOGIN, LOGOUT } from './login.actions';

export function loginReducer(state: String = "Deslogueando", action: Action){

    switch (action.type){
        case 'LOGIN':
            return "Logueando";

        case 'LOGOUT':
            return "Deslogueando";
        
        case 'SIGNIN':
            return "Registrate";
    }
}