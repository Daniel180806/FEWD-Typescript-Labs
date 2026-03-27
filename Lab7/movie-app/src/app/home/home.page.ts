import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonToggle } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //Importing all components in HTML
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonToggle],
})
export class HomePage {
  movies:any[]=[];
  constructor(private service: MovieService) {}
  //COMMENTS HOME.TS, HOME.HTML, SERVICE

  //Executes each time page loads
ionViewWillEnter(){
  //subscribes to be used asynchronously
  this.service.GetMovieData().subscribe(
    //Putting data into array of movies
    (data)=>{
      this.movies = data.Search;
      console.log(this.movies);
    }
  );
}

}
