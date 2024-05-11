import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule
    , RouterOutlet,
    HeaderComponent,
    AllUsersComponent,
    UserDetailsComponent,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,



  ],
})
export class AppComponent {

  [x: string]: any;
  title = 'Users';
  constructor() { }
}
