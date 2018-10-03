import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // La variable query se vinculará al formulario y también se usará cuando se busquen lugares y se rellene el mapa
    public query: string;

    public constructor() {
        this.query = "starbucks";
    }

  ngOnInit() { }

}
