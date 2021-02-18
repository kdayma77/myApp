import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  genderOptions = [
    {name: 'male'},
    {name: 'female'},
    {name: 'others'}];
  dateValue: any;
  genderValue: any;
  password: string;
  confirmPassword: string;
  message: string;
  showError: boolean = false;
  showErrorForEmail: boolean = false;
  showErrorForPassword: boolean = false;
  showErrorForPasswordValid: boolean = false;
  showErrorForLastname: boolean = false;
  showErrorForDate: boolean = false;
  dontStoreDetails: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.showError = false;
    this.showErrorForLastname = false;
    this.showErrorForEmail = false;
    this.showErrorForPassword = false;
    this.showErrorForDate = false;
    this.dontStoreDetails = false;

    this.validateForm();
    console.log("insubmit");
    if(!this.showError && !this.showErrorForLastname && !this.showErrorForEmail && !this.showErrorForPassword && !this.showErrorForDate && !this.dontStoreDetails) {
    localStorage.setItem("firstname",this.firstName.replace(/^\s+|\s+$/gm,''));
    localStorage.setItem("lastName",this.lastName.replace(/^\s+|\s+$/gm,''));
    localStorage.setItem("email",this.email);
    localStorage.setItem("dateValue",this.dateValue);
    this.router.navigate(['userdetails'])
    }
  }

  validateForm() {
    const emailPattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$";
    const namePattern = "[A-Za-z]+";
    const passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    const checkname = new RegExp(namePattern);
    const emailcheck = new RegExp(emailPattern);
    const passwordcheck = new RegExp(passwordPattern);
    if(!this.firstName && !this.lastName && !this.email && !this.password && !this.confirmPassword && !this.showErrorForDate) {
      this.dontStoreDetails = true;
     return alert("please complete form details")
    } else if(!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword || !this.dateValue) {
      this.dontStoreDetails = true;
      return alert("please fill missing form details")
     }
    else if(this.firstName  && !checkname.test(this.firstName)) {
      this.showError = true;
      return this.message = "Enter Vaild Name";
    } else if(this.lastName && !checkname.test(this.lastName)) {
      this.showErrorForLastname = true;
      return this.message = "Enter Vaild Name";
    } else if (this.email && !emailcheck.test(this.email)) {
      this.showErrorForEmail = true;
      return this.message = "Enter Valid Email";
    } else if (this.password &&  !passwordcheck.test(this.password)) {
      this.showErrorForPassword = true;
      return this.message = "Enter Valid Password"
    } else if (this.confirmPassword && !passwordcheck.test(this.confirmPassword)) {
      this.showErrorForPassword = true;
      return this.message = "Enter Valid Password"
    }else if(this.password !== this.confirmPassword) {
      this.showErrorForPassword = true;
      return this.message = "Password Does Not Match"
    } else if(this.dateValue) {
      const checkDate =  this.dateValue.getFullYear();
      let today = new Date();
      let year = today.getFullYear() - 15;
      if(checkDate > year) {
        this.showErrorForDate = true;
       return this.message = "Age should be greater than 15 years";
      } 
     } else if(!this.dateValue) {
      this.showErrorForDate = true;
      return this.message = "Age should be greater than 15 years";
     }
  }

}
