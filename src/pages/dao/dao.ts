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
            /*this.database = new SQLite();
            this.database.create({name: "dbAcompanhaSP.db", location: "default"}).then((db: SQLiteObject) => {
                console.log('Construtor DAO');
                this.db = db;
                this.db.executeSql("CREATE TABLE IF NOT EXISTS retornoWS (retornoDespesas TEXT);" , {}).then((data) => {}
                , (error) => {

                });
                //this.readDespesas();
            }, (error) => {
                console.log("ERROR: ", error);
            });*/
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaoPage');
  }

  /*public insertRetDespesas(retWS) {

        this.db.executeSql("INSERT INTO retornoWS (retornoDespesas) VALUES ('" +retWS+"')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
  }*/


  public insertArea(retWS) {
    /*console.log('insertArea');
  for( let i = 0; i < retWS.lstFuncoes.length; i++){

    console.log(retWS.lstFuncoes[i].codFuncao);
    console.log(retWS.lstFuncoes[i].txtDescricaoFuncao);

    this.db.executeSql("INSERT INTO tbArea (codArea,descArea) VALUES ('" +retWS.lstFuncoes[i].codFuncao+"','"+retWS.lstFuncoes[i].txtDescricaoFuncao+"')", []).then((data) => {
             console.log("INSERTED: " + JSON.stringify(data));
         }, (error) => {
             console.log("ERROR: " + JSON.stringify(error.err));
         });
  }*/
}

  public insertOrgaos(retWS) {
      /*console.log('insertOrgao');
    for( let i = 0; i < retWS.lstOrgaos.length; i++){

      console.log(retWS.lstOrgaos[i].codOrgao);
      console.log(retWS.lstOrgaos[i].txtDescricaoOrgao);

      this.db.executeSql("INSERT INTO tbOrgaos (codOrgao,descOrgao) VALUES ('" +retWS.lstOrgaos[i].codOrgao+"','"+retWS.lstOrgaos[i].txtDescricaoOrgao+"')", []).then((data) => {
               console.log("INSERTED: " + JSON.stringify(data));
           }, (error) => {
               console.log("ERROR: " + JSON.stringify(error.err));
           });
    }*/
  }

public readTbArea() {

      /*  this.db.executeSql("SELECT * FROM tbArea", []).then((data) => {

          this.lstDBAreas = [];
            if(data.rows.length > 0) {

                for(var i = 0; i < data.rows.length; i++) {
                    this.lstDBAreas.push({codArea: data.rows.item(i).codArea, descArea: data.rows.item(i).descArea});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
        return this.lstDBAreas;*/
    }


   public readDespesas() {
  /*      this.db.executeSql("SELECT * FROM retornoWS", []).then((data) => {
            this.lstDBDespesas = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.lstDBDespesas.push({retornoJSON: data.rows.item(i).retornoJSON});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
        return this.lstDBDespesas;*/
    }

    public initializeHabitantesPorSubPref(){

      console.log('Habitantes DAO');

      this.db.executeSql("CREATE TABLE IF NOT EXISTS tbSubprefeitura (codigo TEXT PRIMARY KEY, nome TEXT, qtdHabitantes INTEGER);" , {}).then((data) => {

        this.db.executeSql("SELECT * FROM tbSubprefeitura", []).then((data) => {

            let lstHabitantes: Array<any> = [];

            if(data.rows.length > 0) {

                for(var i = 0; i < data.rows.length; i++) {
                    lstHabitantes.push({codigo: data.rows.item(i).codigo, nome: data.rows.item(i).nome,qtdHabitantes: data.rows.item(i).qtdHabitantes});
                }

                return lstHabitantes;

            }else{

              this.db.executeSql("INSERT INTO tbSubprefeitura VALUES ('55','JABAQUARA',213862);" +
                            "INSERT INTO tbSubprefeitura VALUES ('63','SÃO MIGUEL PAULISTA',410514);" +
                            "INSERT INTO tbSubprefeitura VALUES ('66','ARICANDUVA/FORMOSA/CARRÃO',258203); " +
                            "INSERT INTO tbSubprefeitura VALUES ('50','BUTANTA',384069); " +
                            "INSERT INTO tbSubprefeitura VALUES ('57','CAMPO LIMPO',578857); " +
                            "INSERT INTO tbSubprefeitura VALUES ('44','CASA VERDE/CACHOEIRINHA',313026); " +
                            "INSERT INTO tbSubprefeitura VALUES ('56','CIDADE ADEMAR',402713); " +
                            "INSERT INTO tbSubprefeitura VALUES ('71','CIDADE TIRADENTES',242077); " +
                            "INSERT INTO tbSubprefeitura VALUES ('48','LAPA',255185); " +
                            "INSERT INTO tbSubprefeitura VALUES ('68','GUAIANASES',291193); " +
                            "INSERT INTO tbSubprefeitura VALUES ('46','JAÇANÃ-TREMEMBÉ- PR-JT',276628);" +
                            "INSERT INTO tbSubprefeitura VALUES ('51','PINHEIROS',233563);" +
                            "INSERT INTO tbSubprefeitura VALUES ('69','VILA PRUDENTE',224695);" +
                            "INSERT INTO tbSubprefeitura VALUES ('62','ERMELINO MATARAZZO',210709);" +
                            "INSERT INTO tbSubprefeitura VALUES ('43','FREGUESIA/BRASILANDIA',407245);" +
                            "INSERT INTO tbSubprefeitura VALUES ('53','IPIRANGA',429299);" +
                            "INSERT INTO tbSubprefeitura VALUES ('64','ITAIM PAULISTA',399140);" +
                            "INSERT INTO tbSubprefeitura VALUES ('67','ITAQUERA',525337);" +
                            "INSERT INTO tbSubprefeitura VALUES ('58','M´BOI MIRIM',544446);" +
                            "INSERT INTO tbSubprefeitura VALUES ('65','MOOCA',286598);" +
                            "INSERT INTO tbSubprefeitura VALUES ('60','PARELHEIROS',148239);" +
                            "INSERT INTO tbSubprefeitura VALUES ('61','PENHA',476489);" +
                            "INSERT INTO tbSubprefeitura VALUES ('41','PERUS',148226);" +
                            "INSERT INTO tbSubprefeitura VALUES ('42','PIRITUBA/JARAGUÁ'',442722);" +
                            "INSERT INTO tbSubprefeitura VALUES ('45','SANTANA/TUCURUVI',304062);" +
                            "INSERT INTO tbSubprefeitura VALUES ('54','SANTO AMARO',207421);" +
                            "INSERT INTO tbSubprefeitura VALUES ('70','SÃO MATEUS',436329);" +
                            "INSERT INTO tbSubprefeitura VALUES ('72','SAPOPEMBA',295975);" +
                            "INSERT INTO tbSubprefeitura VALUES ('49','SÉ'',324597);" +
                            "INSERT INTO tbSubprefeitura VALUES ('59','SOCORRO',672901);" +
                            "INSERT INTO tbSubprefeitura VALUES ('47','VILA MARIA/ VILA GUILHERME',287866);" +
                            "INSERT INTO tbSubprefeitura VALUES ('52','VILA MARIANA',294627);", {}).then((data) => {

                 this.db.executeSql("SELECT * FROM tbSubprefeitura", []).then((data) => {

                   let lstHabitantes: Array<any> = [];

                   if(data.rows.length > 0) {
                       for(var i = 0; i < data.rows.length; i++) {
                           lstHabitantes.push({codigo: data.rows.item(i).codigo, nome: data.rows.item(i).nome,qtdHabitantes: data.rows.item(i).qtdHabitantes});
                       }
                   }

                   return lstHabitantes;

                 }, (error) => {
                   console.log('Habitantes DAO Erro 1 ' + error);
                 })


                 }, (error) => {
                   console.log('Habitantes DAO Erro 2 ' + error);
                 })
            }
        }, (error) => {
          console.log('Habitantes DAO Erro 3 ' + error);
        });

      }, (error) => {
        console.log('Habitantes DAO Erro 4 ' + error);
      })

    }

}
