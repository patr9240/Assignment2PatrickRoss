/*  app.module.ts
    Created: February 16, 2017
    Created: February 17, 2017
    The To-Do List!
    Patrick Ross
    200307049
    This is the app module page for the to-do list */

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDP6zh4owWKQfIZachyBPAAvianBaGTrNE",
    authDomain: "assignment2patrickross.firebaseapp.com",
    databaseURL: "https://assignment2patrickross.firebaseio.com",
    storageBucket: "assignment2patrickross.appspot.com",
    messagingSenderId: "477587246547"
  };

  

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
