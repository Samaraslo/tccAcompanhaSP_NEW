import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the DaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dao',
  templateUrl: 'dao.html',
})
export class DaoPage {

  public database: SQLite;
  public db: SQLiteObject;
  public lstDBDespesas: Array<Object>;
  public lstDBAreas: Array<Object>;
  peopleForm:any = {};

  constructor(public platform:Platform) {
    this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.create({name: "dbAcompanhaSP.db", location: "default"}).then((db: SQLiteObject) => {
                this.db = db;
                this.readDespesas();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaoPage');
  }

  public insertRetDespesas(retWS) {

        this.db.executeSql("INSERT INTO retornoWS (retornoDespesas) VALUES ('" +retWS+"')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
  }


  public insertArea(retWS) {
    console.log('insertArea');
  for( let i = 0; i < retWS.lstFuncoes.length; i++){

    console.log(retWS.lstFuncoes[i].codFuncao);
    console.log(retWS.lstFuncoes[i].txtDescricaoFuncao);

    this.db.executeSql("INSERT INTO tbArea (codArea,descArea) VALUES ('" +retWS.lstFuncoes[i].codFuncao+"','"+retWS.lstFuncoes[i].txtDescricaoFuncao+"')", []).then((data) => {
             console.log("INSERTED: " + JSON.stringify(data));
         }, (error) => {
             console.log("ERROR: " + JSON.stringify(error.err));
         });
  }

  }

public readTbArea() {

        this.db.executeSql("SELECT * FROM tbArea", []).then((data) => {

          this.lstDBAreas = [];
            if(data.rows.length > 0) {

                for(var i = 0; i < data.rows.length; i++) {
                    this.lstDBAreas.push({codArea: data.rows.item(i).codArea, descArea: data.rows.item(i).descArea});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
        return this.lstDBAreas;
    }


    public readDespesas() {
        this.db.executeSql("SELECT * FROM retornoWS", []).then((data) => {
            this.lstDBDespesas = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.lstDBDespesas.push({retornoJSON: data.rows.item(i).retornoJSON});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
        return this.lstDBDespesas;
    }

}
