import { Component } from '@angular/core';
import { NavbarComponent } from '../app/pages/navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  onHover() {
    let element = <HTMLElement>document.getElementById("grid_container");
    element.style.gridTemplateColumns = '15vw 85vw';
  }
  offHover(){
    let element = <HTMLElement>document.getElementById("grid_container");
    element.style.gridTemplateColumns = '5vw 95vw';
  }
}