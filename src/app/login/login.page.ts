import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    //validaciones del form
    registerForm:any = FormGroup;
    submitted = false;
  constructor(private nav: NavController, private formBuilder: FormBuilder) { }
  get f() { return this.registerForm.controls; }

  onSubmit() {
  
    this.submitted = true;
    // para aqui si el form es invalido
    if (this.registerForm.invalid) {
        return;
    }
    //True si todos los campos son validos
    if(this.submitted)
    {
      alert("Great!!");
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  gotoForgotPassword(){
    this.nav.navigateForward(['forgot-password']);
  }

  gotoRegistro(){ 
    this.nav.navigateForward(['registro'])
  }
}
