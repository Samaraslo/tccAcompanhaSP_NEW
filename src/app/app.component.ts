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
          {icon: this.icons[3], title: 'Despesas por área', component: FuncoesPage },
          {icon: this.icons[4], title: 'Despesas por orgão', component: Credores },
          {icon: this.icons[5], title: 'Despesas por programa', component: Page2 },
          {icon: this.icons[6], title: 'Despesas por grupos', component: Page2 },
          {icon: this.icons[7], title: 'Pesquisa Avançada', component: Page2 }
        ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
