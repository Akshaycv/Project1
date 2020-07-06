import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  mobno;
  otp;
  phone;
  postId;
  constructor(public ph:PhoneService,public http : HttpClient,public router: Router) {
    
    
    // console.log(this.phone)
   }

  ngOnInit(): void {
    this.phone=this.ph.getPhone()
    console.log(this.phone)
    
  }

  onSubmit(otpdata){

    // console.log(data)
      var json = {username:this.phone,password:otpdata.otp_no};
      console.log(json);
      this.http.post<any>('http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_access_token/',json).subscribe(data => {
        this.postId=data.id;
        console.log(data.access);
        this.ph.setToken(data.acccess)
        this.router.navigateByUrl("/prod")


        
        
      })
}
}
  
