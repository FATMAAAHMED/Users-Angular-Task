import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private id = new BehaviorSubject<any>(null);

  constructor() { }
  // set id valu as entered in search field
  sendUserId(id: string) {
    this.id.next(id);
  }
  // get id
  GetUserId() {
    return this.id.asObservable();
  }
}
