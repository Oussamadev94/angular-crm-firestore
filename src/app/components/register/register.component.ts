import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "";
  password = "";

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    
  }


  register(){
    this.authService._register(this.email, this.password)
                    .then( res=> {
                      this.flashMessage.show(
                        "Your Account Has been Created",
                      {
                        cssClass: "alert-success",
                        timeout: 5000
                      }
                      )
                      this.router.navigate(['/'])
                  })
                    .catch( error => {
                      this.flashMessage.show(
                        error.message,
                      {
                        cssClass: "alert-danger",
                        timeout: 5000
                      }
                      )                      
                    })
  }

}
