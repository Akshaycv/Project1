import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.css']
})
export class MobComponent implements OnInit {
    mobno;
    postId;

  constructor(public http : HttpClient,public ph:PhoneService,public router: Router) { }

  ngOnInit(): void {
  }
// onSubmit(mobdata){
//  
//   this.onSubmit1(mobdata)
  


onSubmit(mobdata){

  // console.log(data)
    var json = {phone:mobdata.mob_no};
    console.log(json);
    this.http.post<any>('http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_otp/',json).subscribe(data => {
      this.postId=data.id;
      console.log(data);

      this.ph.setPhone(mobdata.mob_no);
      this.router.navigateByUrl("/otp")
      
    })



}



}
