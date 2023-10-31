import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-unit',
  templateUrl: './user-unit.component.html',
  styleUrls: ['./user-unit.component.scss']
})
export class UserUnitComponent {

  constructor(private readonly router: Router) {}

  onUserUnitClick() {
    this.router.navigateByUrl('/user/id')
  }
}
