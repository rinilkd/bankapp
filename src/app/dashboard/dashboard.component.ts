import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteconfirmComponent } from '../deleteconfirm/deleteconfirm.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // acno=''
  // amt=''
  // psw=''

  // wacno=''
  // wamt=''
  // wpsw=''
  dateandtime:any
  acno:any
  user=""

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router){

    this.dateandtime=new Date()
    this.user=this.ds.currentuser
   }

   depositForm=this.fb.group({acno:[''],psw:[''],amt:['']})
   withdrawForm=this.fb.group({wacno:[''],wpsw:[''],wamt:['']})

   ngOnInit(): void{
     if(!localStorage.getItem('currentacno')){
      alert('please login first')
      this.router.navigateByUrl('')
     }
   }
  deposit(){
var acno=this.depositForm.value.acno
var amt=this.depositForm.value.amt
var psw=this.depositForm.value.psw

const result=this.ds.deposit(acno,psw,amt)

if(result){
  alert(`${amt} credited to your ac and the balance is ${result}`)
}
else{
  alert(`incorrect acno or password`)
}
  }
  withdraw(){
    var wacno=this.withdrawForm.value.wacno
    var wamt=this.withdrawForm.value.wamt
    var wpsw=this.withdrawForm.value.wpsw
    
    const result=this.ds.withdraw(wacno,wpsw,wamt)
    
    if(result){
      alert(`${wamt} debited to your ac and the balance is ${result}`)
    }
    else{
      alert(`incorrect acno or password`)
    }
  }
  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
this.router.navigateByUrl('')


  }
  deleteconfirm(){
   this.acno=JSON.parse(localStorage.getItem('currentacno') || "")
  }
}
