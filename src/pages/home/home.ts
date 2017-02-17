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

  //methods
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
            done: 0
          });
        }
      }
    ]
  });
  prompt.present();
  }
/*
  showOptions(itemId, itemDescription) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Item Options?',
      buttons: [
        {
          text: 'Delete Item',
          role: 'destructive',
          handler: () => {
            this.removeItem(itemId);
          }
        },{
          text: 'Update Item',
          handler: () => {
            this.updateItem(itemId, itemDescription);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
*/
  removeItem(itemId: string){
    this.listItems.remove(itemId);
  }

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
  editItem(){

  }
  deleteItem() {

  }

}
