import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { InteractionService } from '../../Services/interaction.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [NgFor, CommonModule, NgxSpinnerModule, NgxSkeletonLoaderModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css',
})
export class AllUsersComponent implements OnInit {
  //store
  isLoading: boolean = true;
  userMap?: User[];
  allUsersList: User[] = [];
  cachedService: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private interactionservice: InteractionService,
    private spinner: NgxSpinnerService
  ) {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.spinner.show();
        setTimeout(() => {
          this.isLoading = false;
          this.userMap = data.data;
          console.log('cashed data is ', this.userMap);
          this.allUsersList = data.data;
          this.spinner.hide();
          this.isLoading = true;
        }, 3000);
      },
      error: (err: any) => {
        console.log('cant retrive data');
      },
    });
  }
  ngOnInit(): void {
    // get user by id
    this.interactionservice.GetUserId().subscribe({
      next: (id: any) => {
        this.isLoading = false;
        this.spinner.show();
        setTimeout(() => {
          this.getUserById(id);
          this.spinner.hide();
          this.isLoading = true;
        }, 3000);
      },
    });
  }
  // /user details navigation
  getUserDetails(id: number) {
    this.isLoading = false;
    this.spinner.show();
    setTimeout(() => {
      this.router.navigate(['userDetails', id]);
      window.scrollTo(0, 0);
      this.spinner.hide();
      this.isLoading = true;
    }, 3000);
  }

  // search
  getUserById(id: string) {
    console.log('id = ', id);
    if (id == null || id == undefined) return;
    this.userService.getUserById(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.allUsersList = [data.data];
      },
    });
  }
}
