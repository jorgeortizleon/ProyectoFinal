import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //Variebles del form
  onRegisterForm: any = FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService
    ) {

     }

  //Add user actions
  get f() { return this.onRegisterForm.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.onRegisterForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      alert("Bienvenido!");
    }

  }

  ngOnInit() {
    //Add User form validations
    this.onRegisterForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      /*'lastname': [null, Validators.compose([
        Validators.required
      ])],
      'lastname2': [null, Validators.compose([
        Validators.required
      ])],
      'domicilio': [null, Validators.compose([
        Validators.required
      ])],
      'colonia': [null, Validators.compose([
        Validators.required
      ])],
      'poblacion': [null, Validators.compose([
        Validators.required
      ])],
      'codigoPostal': [null, Validators.compose([
        Validators.required
      ])],
      'telefono': [null, Validators.compose([
        Validators.required
      ])],
      'ocupacion': [null, Validators.compose([
        Validators.required
      ])],
      'edad': [null, Validators.compose([
        Validators.required
      ])],
      'sexo': [null, Validators.compose([
        Validators.required
      ])],
      'referido': [null, Validators.compose([
        Validators.required
      ])],*/
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
      });
  }

  doSave(){
    console.log(this.onRegisterForm.value)

    this.userService.registerUser(this.onRegisterForm.value).subscribe((data: any) => {
      console.log(data)
    })

}

}
