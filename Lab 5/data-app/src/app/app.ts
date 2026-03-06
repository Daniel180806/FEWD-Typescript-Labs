import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data-service'; //import dataservice


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  //Make local arrays
  students:any[]=[]
  weather:any[]=[]
  //Make variables for api
  temperature:string = ""
  humidity:string = ""
  //Constructor for dataservice
  constructor(private dataService:DataService){

   }

//called when component is loaded for first time
   ngOnInit(): void{
    this.dataService.GetStudentData().subscribe( //suubscribe means to do it asynchronously
      (data)=>{
        this.students = data.students;
        console.log(this.students)
      }
    );

    this.dataService.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather
        this.temperature = (data.main.temp-270).toFixed(2).toString();
        this.humidity = data.main.humidity
        console.log(this.weather)
      }
    )
   }
}
