import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //gives us ability to do method asynchronously, a bit more powerful as it can subscribe
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient:HttpClient)//can use any name but for this 'httpClient' is a instance HttpClient
  {}

  //Initialise student api
  GetStudentData():Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019cc30f-879f-7815-b8ab-6b1d3dee6884') //insert Http link
  }

  //Initialise weather api
  GetWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }

}
