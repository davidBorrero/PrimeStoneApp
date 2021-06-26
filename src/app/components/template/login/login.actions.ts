import {Action} from '@ngrx/store'
export const LOGIN = '[Login] Login';
export const LOGOUT = '[Login] Logout';

export class LoginAction implements Action {
    readonly type = LOGIN;
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;
}