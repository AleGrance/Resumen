import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  age = 0;

  ngOnInit() {
    this.calcularEdad();
    console.log(this.currentMonth + 1);
  }

  calcularEdad() {
    let born = 1992;

    if (this.currentMonth < 11) {
      this.age = (this.currentYear - born) - 1;
    } else {
      this.age = (this.currentYear - born);
    }
  }
}
