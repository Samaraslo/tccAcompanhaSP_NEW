import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'homePageTestSQLite.html'
})
export class HomePageTestSQLite {

  public database: SQLite;
  public dbO: SQLiteObject;
  public people: Array<Object>;
  peopleForm:any = {};

  constructor(public navCtrl: NavController, public platform:Platform) {
    this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.create({name: "data.db", location: "default"}).then((dbO: SQLiteObject) => {
                this.dbO = dbO;
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });

  }

  public add() {

        this.dbO.executeSql("INSERT INTO people (firstname, lastname) VALUES ('" + this.peopleForm.firstName+"', '" + this.peopleForm.lastName+"')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.dbO.executeSql("SELECT * FROM people", []).then((data) => {
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
