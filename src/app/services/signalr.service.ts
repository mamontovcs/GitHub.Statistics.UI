import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection!: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:2509/authenticationHub')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addSendAccessTokenToClientListener = () => {
    this.hubConnection.on('SendAccessTokenToClient', (accessToken) => {
      localStorage.setItem('AccessToken', accessToken);
    });
  }
}