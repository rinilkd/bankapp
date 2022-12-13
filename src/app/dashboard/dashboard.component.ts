import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  user=""

  constructor(private ds:DataService,private fb:FormBuilder){
    this.user=this.ds.currentuser
   }

   depositForm=this.fb.group({acno:[''],psw:[''],amt:['']})
   withdrawForm=this.fb.group({wacno:[''],wpsw:[''],wamt:['']})
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
}
