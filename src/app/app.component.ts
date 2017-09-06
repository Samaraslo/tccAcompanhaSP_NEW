import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { FormFaleConoscoPage } from '../pages/form-fale-conosco/form-fale-conosco';
import { Contratos } from '../pages/contratos/contratos';
import { Credores } from '../pages/credores/credores';
import { ModalFiltros } from '../pages/modal-filtros/modal-filtros';
import { Page2 } from '../pages/page2/page2';
import { Mensagens } from '../global/mensagens';
import { DespesasPage } from '../pages/despesas/despesas';
import { FuncoesPage } from '../pages/funcoes/funcoes';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';



@Component({
  templateUrl: 'app.html',
//  providers: [Mensagens]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  icons:string[];
  rootPage: any = HomePage;

  pages: Array<{icon:string,title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


        //array com os nomes dos icones que vão aparecer no menu - url pra ver os icones https://ionicframework.com/docs/ionicons/
        this.icons = ['home', 'paper', 'clipboard', 'trending-down', 'logo-usd', 'trending-up','pulse'];

        // used for an example of ngFor and navigation
        this.pages = [
          {icon: this.icons[0], title: 'Início', component: HomePage },
          {icon: this.icons[1], title: 'Contratos', component: Contratos },

          //Despesa por area e subarea
          {icon: this.icons[2], title: 'Despesas', component: DespesasPage },
          {icon: this.icons[3], title: 'Setores', component: FuncoesPage },
          {icon: this.icons[4], title: 'Despesas por orgão', component: Credores }
        /*  {icon: this.icons[5], title: 'Despesas por programa', component: Page2 },
          {icon: this.icons[6], title: 'Despesas por grupos', component: Page2 },
          {icon: this.icons[7], title: 'Pesquisa Avançada', component: Page2 }*/
        ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let db = new SQLite();
    db.create({
              name: "dbAcompanhaSP.db",
              location: "default"
    }).then((db: SQLiteObject) => {

            db.executeSql("CREATE TABLE IF NOT EXISTS tbSubprefeitura (codigo TEXT PRIMARY KEY, nome TEXT, qtdHabitantes INTEGER);" , {}).then((data) => {

              db.executeSql("SELECT * FROM tbSubprefeitura", []).then((data) => {

                  if(data.rows.length > 0) {
                      console.log("Tabela já carregada com " + data.rows.length + " registros");
                  }else{
                    db.executeSql("INSERT INTO tbSubprefeitura VALUES ('55','JABAQUARA',213862);" +
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

                       }, (error) => {
                          console.log('Component Erro 1 ' + error);
                       })
                  }
              }, (error) => {
                console.log('Component Erro 2 ' + error);
              });

            }, (error) => {
              console.log('Component Erro 3 ' + error);
            })
    }, (error) => {
      console.log('Component Erro 4 ' + error);
    });

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
