import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyCwAR2Scbk_AwI4SV3s5hOuH_WMvrMD5PI",
    authDomain: "ng-recipe-8cf12.firebaseapp.com"
  });

  }

  onNavigate(feature: string){
    this.loadedFeature=feature;

  }
}
