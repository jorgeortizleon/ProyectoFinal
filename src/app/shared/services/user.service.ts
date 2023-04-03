import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = environment.api;

  constructor(public http: HttpClient) { 

  }

  registerUser(form: any){
    let request;
    console.log(form)

    return this.http.post(this.url+'/users/create', {
      file: form,
    });
  }

}
