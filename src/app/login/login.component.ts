import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

aim="your perfect banking partner"
data="enter ac number"
acno=''
pass=''


userDetails:any={
  1000:{acno:1000,username:"anu",password:123,balance:0},
  1001:{acno:1001,username:"appu",password:123,balance:0},
  1002:{acno:1002,username:"anil",password:123,balance:0},
  1003:{acno:1003,username:"anoop",password:123,balance:0},
  1004:{acno:1004,username:"amal",password:123,balance:0},
  1005:{acno:1005,username:"arun",password:123,balance:0}
}
constructor(){ }
// login(){
//   // alert('login clicked')
//   var acno=this.acno
//   var pass=this.pass
//   var userDetails=this.userDetails

//   if (acno in userDetails) {
//  if(pass==userDetails[acno]["password"]){
//   alert("login success")
//  }   
//  else{
//   alert("incorrect password")
//  }
// }
//  else{
//   alert("incorrect username")
//  }
//   }

login(a:any,b:any){
 this.acno=a.value
 this.pass=b.value
 
  var acno=this.acno
  var pass=this.pass
  var userDetails=this.userDetails

  if (acno in userDetails) {
 if(pass==userDetails[acno]["password"]){
  alert("login success")
 }   
 else{
  alert("incorrect password")
 }
}
 else{
  alert("incorrect username")
 }
  }

// acnoChange(event:any){
// this.acno=event.target.value
// }
// passChange(event:any){
//   this.pass=event.target.value

// }
}
