import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserListService } from './user-list.service';

import { WebStorageService } from '../services/web-storage.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: Promise<User[]> | null = null;

  constructor(
    private userListService: UserListService,
    private webStorageService: WebStorageService
  ) { }

  public async ngOnInit(): Promise<void> {
    //const filtered = this.webStorageService.get('USERS');
    this.webStorageService.getRemote().subscribe(
      (filtered: any) => {
        this.users = (filtered === null) ? this.userListService.getAll() : this.userListService.filter(filtered);
      }, error => {
        console.error("some api error message", error);
      }
    )

  }

  public async update(text: string): Promise<void> {
    this.webStorageService.setRemote(text).subscribe((filtered: any) => {
      this.users = (filtered === null) ? this.userListService.getAll() : this.userListService.filter(filtered);
    })
  }

}
