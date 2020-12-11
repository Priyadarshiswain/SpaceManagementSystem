import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-publisher-component',
  templateUrl: './publisher.component.html'
})
export class PublisherComponent implements OnInit {


  public Locations: any;

  ngOnInit() {
    this.loadData();
  }

  constructor(private _httpClient: HttpClient) {

  }

  loadData() {
    this._httpClient.get("assets/location.json").subscribe(data => {
      this.Locations = data;
    })
  }



}
