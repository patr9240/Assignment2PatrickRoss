import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listItems: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {
    this.listItems = af.database.list('/todoList');
  }

  //methods
  addGame(){

  }

  editGame(){

  }
  deleteGame(gameId) {

  }

}
