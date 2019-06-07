import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MpcComponent } from './mpc/mpc.component';
<<<<<<< HEAD
import { ButtonComponent } from './button/button.component';
=======
import { InputComponent } from './input/input.component';
>>>>>>> 7dd2f7d2e7fdf0ae1d17fc76dd73ce47ddd9c8e1

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MpcComponent,
<<<<<<< HEAD
    ButtonComponent
=======
    InputComponent
>>>>>>> 7dd2f7d2e7fdf0ae1d17fc76dd73ce47ddd9c8e1
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
