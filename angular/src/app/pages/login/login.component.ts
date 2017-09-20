import { LoginService } from './../../common/service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerCredentials = { email: '', password: '' };
  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }
  public login(registerCredentials) {
    let body = {
      email: this.registerCredentials.email,
      password: this.registerCredentials.password };
      this.loginService.doLogin(body).subscribe(
        data => {
          console.log(data);
          if(data['status']){
            console.log(data['message']);
          }else {
            console.log(data['message']);
          }
        }
      );
  }
  public getAll () {
    this.loginService.getAll().subscribe(
      data => {
        console.log(data);
      }
    )
  }
    

}


