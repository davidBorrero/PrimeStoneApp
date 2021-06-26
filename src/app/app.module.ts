import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import {Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

import { LoginComponent } from './components/template/login/login.component';
import { loginReducer } from './components/template/login/login.reducer';
import { TaskManagementComponent } from './components/template/task-management/task-management.component';
import { SigninComponent } from './components/template/signin/signin.component';

const routes: Routes =[
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SigninComponent},
  {path: 'taskManager', component: TaskManagementComponent},
  {path: '',   redirectTo: 'signin', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskManagementComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ userState: loginReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
