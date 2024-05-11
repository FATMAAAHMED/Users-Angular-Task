import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';
import { Subject, debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { InteractionService } from '../../Services/interaction.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userid: any;
  constructor(private router: Router,
    private interactionservice: InteractionService) {

  }
  search(id: string) {
    this.interactionservice.sendUserId(id);
  }
}
