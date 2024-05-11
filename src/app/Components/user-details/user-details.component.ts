import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  userId: string = '';
  user?: User
  constructor(private userservice: UserService,
    private activateroute: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    this.userId = this.activateroute.snapshot.paramMap.get("id") ?? '';
    this.userservice.getUserById(this.userId).subscribe((data) => {
      this.user = data.data;
    });
  }
  navigatetoall() {
    this.router.navigate(['/all-users']);
  }
}
