import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public database: SQLite;
  public db: SQLiteObject;
  public people: Array<Object>;
  peopleForm:any = {};

  constructor( public platform:Platform) {
    this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.create({name: "data.db", location: "default"}).then((db: SQLiteObject) => {
                this.db = db;
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });

  }

  public add() {

        this.db.executeSql("INSERT INTO people (firstname, lastname) VALUES ('" + this.peopleForm.firstName+"', '" + this.peopleForm.lastName+"')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.db.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

}
