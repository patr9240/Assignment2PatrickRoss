/*  home.ts
    Created: February 16, 2017
    Updated: February 17, 2017
    The To-Do List!
    Patrick Ross
    200307049
    This is the logic for the to-do list app */
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  listItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.listItems = af.database.list('/todoList');
  }

  /*addItem
    This method activates a popup for the user 
    to create a new item in the to-do list*/
  addItem(){    
    let prompt = this.alertCtrl.create({
    title: 'To-Do List Item',
    message: "Add a new item to your To-Do List.",
    inputs: [
      {
        name: 'item',
        placeholder: 'Description'
      },
    ],
    buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Save',
         handler: data => {
           this.listItems.push({
             item: data.item,
             done: false
           });
         }
       }
     ]
   });
   prompt.present();
   }
  /*removeItem
    This method removes the selected item from the to-do list*/
  removeItem(itemId: string){
    this.listItems.remove(itemId);
  }
  /*updateItem
    This method activates a popup for the user
    to edit the details of a to-do list item*/
  updateItem(itemId, itemDescription){
    let prompt = this.alertCtrl.create({
      title: 'Item Description',
      message: "Update the description for this To-Do List item.",
      inputs: [
        {
          name: 'item',
          placeholder: 'Description',
          value: itemDescription
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.listItems.update(itemId, {
              item: data.item
            });
          }
        }
      ]
    });
    prompt.present();
  }
  /*This method switches a to-do list item from complete 
    to incomplete or from incomplete to complete.*/
  switchComplete(itemId, itemCompletion){
    if(itemCompletion == true){
      this.listItems.update(itemId, {
        done: false
      });
    }
    if(itemCompletion == false){
      this.listItems.update(itemId, {
        done: true
      });
    }
  }
}
