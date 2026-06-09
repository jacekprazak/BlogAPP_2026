import { Component, inject, OnInit } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Articles } from "../features/articles/articles";


@Component({
  selector: 'app-root',
  imports: [Nav, Articles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountService = inject(AccountService)

  async ngOnInit() {
     this.setCurrentUser()
  }

  setCurrentUser() {
    const userString = localStorage.getItem("user")
    if (!userString) return
    const user = JSON.parse(userString)
    this.accountService.currentUser.set(user) 
  }


}
