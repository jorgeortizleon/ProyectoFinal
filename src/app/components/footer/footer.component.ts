import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}

  closeSession(){ 
    this.nav.navigateForward(['login'])
  }

}
