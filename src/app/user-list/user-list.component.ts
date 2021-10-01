import { Component, OnInit } from '@angular/core';
import { WebStorageService } from '../services/web-storage.service';
import { User } from '../user/user';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private userListService: UserListService,
    private webStorage: WebStorageService
  ) { }

  public async ngOnInit(): Promise<void> {
    const filtered = this.webStorage.get('USERS');
    this.users = filtered ? JSON.parse(filtered) : await this.userListService.getAll();
  }

  public async update(text: string): Promise<void> {
    this.users = await this.userListService.filter(text);
    this.webStorage.set('USERS', JSON.stringify(this.users));
  }

}
