import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../app/shared/data-storage.service';
import {AuthService} from "../app/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService : DataStorageService, private authService : AuthService){}

  onSaveData(){
  this.dataStorageService.storeRecipes()
  .subscribe(
  (response: Response) => console.log(response));
}

onFetchData(){
  this.dataStorageService.getRecipes();
}
onLogout(){
  this.authService.logout();
}
}
