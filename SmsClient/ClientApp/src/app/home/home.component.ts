import { Component } from '@angular/core';
import { SmsService } from '../services/sms.service'
import { PublishModel } from '../models/publish-model'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  uname: string;
  pass: string;

  constructor(private router: Router, private _authService: AuthService) {
  }

  login(): void {
    if (this.uname === 'Pub' && this.pass === '123') {
     // var x = this._authService.Auth()
      //if (this._authService.data) {
        this.router.navigate(['/publisher']);
      //}
    }
    else if (this.uname === 'Sub' && this.pass === '123') {
      this.router.navigate(['/subscriber']);
    }
    else {

    }
  }
}
