import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  data: any;
  constructor(private _httpClient: HttpClient) {

  }

  Auth() {
    this._httpClient.get("assets/publisher.json").subscribe(data => {
      this.data = data;
    })
  }
}
