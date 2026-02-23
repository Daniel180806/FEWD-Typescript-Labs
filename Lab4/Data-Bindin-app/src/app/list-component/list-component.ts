import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  //import common module for *ngFor
  imports: [CommonModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

//Array named presidents with name and term
presidents:any[] = [{name:"Higgins", term:"2011-"},
  {name: "McAleese", term:"1997-2011"},
  {name: "Robinson", term:"1990"},
  {name: "Hillery", term: "1976-1990"},
  {name: "0 Dalaigh", term: "1974-1976"}];
}
