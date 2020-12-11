//import { EventEmitter, Injectable } from '@angular/core';
//import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
//import { PublishModel } from '../models/publisher.model'
//@Injectable({
//  providedIn: 'root',
//})
//export class SmsService {
//  dataReceived = new EventEmitter<string>();
//  //connectionEstablished = new EventEmitter<Boolean>();
//  private connectionIsEstablished = false;
//  private _hubConnection: HubConnection;
//  constructor() {
//    this.createConnection();
//    this.RecieveData();
//    this.startConnection();
//  }
//  private createConnection() {
//    this._hubConnection = new HubConnectionBuilder()
//      .withUrl(window.location.href + 'SmsHub')
//      .build();
//  }
//  private startConnection(): void {
//    this._hubConnection
//      .start()
//      .then(() => {
//        this.connectionIsEstablished = true;
//        console.log('Hub connection started');
//        //this.connectionEstablished.emit(true);
//      })
//      .catch(err => {
//        console.log('Error while establishing connection, retrying...');
//        setTimeout(function () { this.startConnection(); }, 5000);
//      });
//  }
//  PublishData(publishModel: PublishModel) {
//    this._hubConnection.invoke('Publish', publishModel);
//  }
//  RecieveData(): void {
//    this._hubConnection.on('Publish', (data: string) => {
//      this.dataReceived.emit(data);
//    });
//  }
//  Subscribe(subId: string) {
//    this._hubConnection.invoke('Subscribe', subId);
//  }
//  UnSubscribe(subId: any) {
//    this._hubConnection.invoke('UnSubscribe', subId);
//  }
//}    
//# sourceMappingURL=SmsService.js.map