import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonLabel, IonRadioGroup, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, RouterLink, IonLabel, CommonModule, FormsModule, IonRadio, IonRadioGroup, IonList, IonItem, IonButton]
})
export class StatusPage implements OnInit {
  status: string = "";
  constructor(private storage: Storage) { }

  async saveStatus(){
    await this.storage.create();
    await this.storage.set('myStatus', this.status);
  }

  async ionViewWillEnter(){
    await this.storage.create()
    this.status = await this.storage.get('myStatus');
  }

  ngOnInit() {

  }

}
