import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService,private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }

}
