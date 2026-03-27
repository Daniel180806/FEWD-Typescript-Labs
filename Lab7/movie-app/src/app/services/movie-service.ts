import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import httpclient
import { Observable } from 'rxjs'; //import obserable
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient : HttpClient){

  }

  //Returns observable of any type
  GetMovieData():Observable<any>{
    //return this api
    return this.httpClient.get('https://www.omdbapi.com/?apikey=5a5c5c0f&s=%27war%27') //5a5c5c0f is my own api key, u can change it to use a different person's api key, change "war" to any move to find the specific title eg: peace/ car
  }
  
}
