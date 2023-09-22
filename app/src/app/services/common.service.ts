import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserDetails } from '../interface/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userDetailsSubject: BehaviorSubject<Array<IUserDetails>> = new BehaviorSubject<Array<IUserDetails>>([]);

  data:Array<IUserDetails> = JSON.parse(window.localStorage.getItem('userData') || '') || [];

  constructor() { 
    if(this.data.length){
      this.updateList(this.data);
    }
  }

  public setUserDetails(userData: IUserDetails) {
    this.data.push(userData);
    this.updateList(this.data);
  }

  public getUserDetails() {
    return this.userDetailsSubject;
  }

  public updateList(data: Array<IUserDetails>) {
    //alternative to api call
    window.localStorage.setItem('userData', JSON.stringify(data));
    this.userDetailsSubject.next(data);
  }
}
