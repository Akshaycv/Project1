import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
 public phone;
 public token;
  constructor() { }

  setPhone(phone){
    this.phone=phone

  }

  getPhone(){
    return this.phone

  }
  setToken(token){
    this.token=token
  }

  getToken(){
    return this.token
  }
}
