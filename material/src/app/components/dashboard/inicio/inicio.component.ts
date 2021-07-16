import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tiles: any[] = [
    {text: 'Conteudo 1', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Conteudo 2', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Conteudo 3', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Conteudo 4', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
