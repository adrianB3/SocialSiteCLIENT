import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {User} from '../_models/user';
import {Injectable} from '@angular/core';
import {UserService} from '../_services/user.service';
import {AlertifyService} from '../_services/alertify.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().catch(error => {
      this.alertify.error('Problem retriving data');
      this.router.navigate(['/feed']);
      return Observable.of(null);
    })
  }
}
