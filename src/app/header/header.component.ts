import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { SignalrService } from '../services/signalr.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public signalRService: SignalrService, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addSendAccessTokenToClientListener();   
  }

  OnLogin() {
    this._authenticationService.authtenticate().subscribe(githubLink => {
      let link = JSON.parse(githubLink.toString());
      console.log(link);
      window.open(link);
    });
  }
}