import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importing components from A and B
import{ A }from './a/a';
import{ B }from './b/b';
@Component({
  //Selector on index.html body
  selector: 'root-directive',
  imports: [RouterOutlet, A, B],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  name:string = "Martin";
  age:number = 21;
}
