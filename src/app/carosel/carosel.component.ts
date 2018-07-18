import { Component, OnInit } from '@angular/core';
import { MainComponentComponent } from '../main-component/main-component.component';
import { Item } from '../item';

declare var firebase: any;

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})

export class CaroselComponent implements OnInit {

  static chosenImg;
  static fbData;
  static uid;
  static dataList = Array<Item>();

  constructor() {

  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        this.uid = user.uid;
        this.fbData = firebase.database().ref().child('users').child(user.uid);
        this.fbData.on('child_added', function (snapshot) {
        const object = Object.values(snapshot.val());
      });
      } else {
        // User is signed out.
        console.log('User is signed out');
        firebase.auth().signInAnonymously().catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
      const ref = firebase.database().ref('/item');
      ref.on('value', function(snapshot) {
        const object = Object.values(snapshot.val());
        console.log(object);
        object.forEach(element => {
          const n = new Item(element.name, element.quantity, element.price, element.discription);
          CaroselComponent.dataList.push(n);
        });
     }, function (error) {
        console.log('Error: ' + error.code);
     });

// ref.on('child_changed', function(data) {
//    updateTaskView(data.key, data.val().title);
// });

// ref.on('child_removed', function(data) {
//    removeTaskView(data.key, data.val().title);
// });
    });
  }
  addItemTODB() {
    const name = document.getElementById('itemName').innerHTML;
    firebase.database().ref('item/' + name).set({
      itemName: name,
      itemQuantity: document.getElementById('itemQuantity').innerHTML,
      itemPrice: document.getElementById('itemPrice').innerHTML,
      itemDiscription: document.getElementById('itemDiscription').innerHTML
    });
  }



}
