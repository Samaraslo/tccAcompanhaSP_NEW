import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform  } from 'ionic-angular';
import { DespesasServico } from '../../providers/despesas-servico';
import { DaoPage } from '../dao/dao';

/**
 * Generated class for the SetoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setores',
  templateUrl: 'setores.html',
  providers: [DespesasServico,DaoPage]
})
export class SetoresPage {
  setorSelecionado:string;
  myDate: Date;
  myYear: any;
  myMonth: any;
  objOrgaos: any = {};
  objDespesas: any = {};
  valLiquidado: string;
  data: Array<{title: string,codOrgao:string, valLiquidado:string, qtdHabitantes:string, total:string, icon: string, showDetails: boolean}> = [];
  public lstDBOrgaos: Array<Object> = [];
  public lstPrefeituras: Array<any>= [];
  public lstHabitantesSubPref;



  constructor(public navCtrl: NavController, public despesasServico: DespesasServico,
              public platform: Platform,private dao: DaoPage, public navParams: NavParams,) {

    if (this.platform.is('cordova')) {

          this.lstHabitantesSubPref = [];
          this.lstHabitantesSubPref = dao.initializeHabitantesPorSubPref();

   }else{

         let subPref:any = {};
         this.lstHabitantesSubPref = [];

         subPref.codigo = '41';
         subPref.nome = 'PERUS';
         subPref.qtdHabitantes = 148226;
         this.lstHabitantesSubPref.push(subPref);
   }


    this.myDate = new Date();
    this.myYear = this.myDate.getFullYear();
    this.myMonth = this.myDate.getMonth()+1;
    this.consultarOrgaos(this.myYear);
    this.setorSelecionado = navParams.get('setorParam');

    console.log('setorSelecionado>>>>>>' + this.setorSelecionado);
  }

carregaAccordion(){

  console.log('this.lstPrefeituras' + this.lstPrefeituras);

  for(let i = 0; i < this.lstPrefeituras.length; i++ ){

    this.data.push({
        title: ""+this.lstPrefeituras[i].txtDescricaoOrgao,
        codOrgao: ""+this.lstPrefeituras[i].codOrgao,
        valLiquidado: '',
        qtdHabitantes: '',
        total: '',
        icon: 'md-arrow-dropright',
        showDetails: false
      });
  }

}

  toggleDetails(data) {

    this.consultarDespesas(this.myYear,this.myMonth,data.codOrgao,data);

  }

filtrarPrefeituras(){
//this.lstPrefeituras.push('a');
console.log( '>>>>>>' + this.objOrgaos.lstOrgaos.length);
  for(let i = 0; i < this.objOrgaos.lstOrgaos.length; i++){

    let subPrefeitura:any = {};

    if((this.objOrgaos.lstOrgaos[i].txtDescricaoOrgao.toUpperCase()).startsWith("PREFEITURA")){

      subPrefeitura.txtDescricaoOrgao = (this.objOrgaos.lstOrgaos[i].txtDescricaoOrgao).replace("PREFEITURA REGIONAL","");
      subPrefeitura.codOrgao = this.objOrgaos.lstOrgaos[i].codOrgao;

      this.lstPrefeituras.push(subPrefeitura);
    //  this.lstPrefeituras.push(this.objOrgaos.lstOrgaos[i].txtDescricaoOrgao);
    }
  }
  console.log(this.lstPrefeituras);
}


  consultarOrgaos(anoParam){
    //let loader = this.loadingCtrl.create();
    let strParam = 'anoExercicio='+ anoParam;

//  loader.present().then(() => {
    this.despesasServico.getOrgaosProvider(strParam)
      .then((res) => {
        if (res) {
          this.objOrgaos = res;
          console.log('1', this.objOrgaos);
  //          loader.dismiss();
          this.filtrarPrefeituras();
          this.carregaAccordion();
        }
      }, (error) => {
        console.log('2', error);
    //      loader.dismiss();
    //  })
  })

}



/*consultarDespesas(anoParam, mesParam, orgaoParam){
  //let loader = this.loadingCtrl.create();


  let strParam = 'anoDotacao='+ anoParam + '&mesDotacao='  + mesParam + '&codOrgao=' + orgaoParam + '&codFuncao=' + this.setorSelecionado;
console.log(strParam);
//  loader.present().then(() => {
  this.despesasServico.getDespesasProvider(strParam)
    .then((res) => {
      if (res) {
        this.objDespesas = res;
        console.log('1', this.objDespesas);
//          loader.dismiss();

        this.valLiquidado = this.objDespesas.lstDespesas[0].valLiquidado;

      }
    }, (error) => {
      console.log('2', error);
  //      loader.dismiss();
  //  })
})

}*/

consultarDespesas(anoParam, mesParam, orgaoParam, data){

  //let loader = this.loadingCtrl.create();

  let strParam = 'anoDotacao='+ anoParam + '&mesDotacao='  + mesParam + '&codOrgao=' + orgaoParam;

  //  loader.present().then(() => {
  if (data.showDetails) {

    data.showDetails = false;
    data.icon = 'md-arrow-dropright';

  }else{

    this.despesasServico.getDespesasProvider(strParam)
      .then((res) => {
        if (res) {

          this.objDespesas = res;
          console.log('1', this.objDespesas);
    // loader.dismiss();

          this.valLiquidado = this.objDespesas.lstDespesas[0].valLiquidado;

          for(let i = 0; i < this.data.length; i++ ){

            if(this.data[i].codOrgao == data.codOrgao){

              this.data[i].valLiquidado = this.valLiquidado;

              for(let j = 0;j< this.lstHabitantesSubPref.length;j++){

                if(data.codOrgao == this.lstHabitantesSubPref[j].codigo){

                  this.data[i].qtdHabitantes = this.lstHabitantesSubPref[j].qtdHabitantes;

                }

              }

              this.data[i].total = String(Number(this.data[i].valLiquidado) / Number(this.data[i].qtdHabitantes)) ;

            }

          }



          data.showDetails = true;
          data.icon = 'md-arrow-dropdown';

        }
      }, (error) => {
        console.log('2', error);
    //      loader.dismiss();
    //  })
      })



  }



}






/*  consultarOrgaos(anoParam){
  console.log('0');
  console.log('anoParam' + anoParam);

      let strParam = 'anoExercicio='+ anoParam;

        if (this.platform.is('cordova')) {

          this.lstDBOrgaos = this.dao.readTbArea();

          if(this.lstDBOrgaos.length > 0){

            this.objOrgaos.lstOrgaos = this.lstDBOrgaos;

          }else{

            this.despesasServico.getOrgaosProvider(strParam)
            .then((res) => {

              if (res) {

                  this.dao.insertArea(res);
                  this.lstDBOrgaos = this.dao.readTbArea();
                  this.objOrgaos.lstOrgaos = this.lstDBOrgaos;
              }

            }, (error) => {
              console.log('2', error);
            })

          }

        }else{
///console.log(retWS);
          this.despesasServico.getOrgaosProvider(strParam)
          .then((res) => {

            if (res) {
              let retWS: any = {};
              retWS = res;
              for(var i = 0; i < retWS.lstOrgaos.length; i++) {
                  this.lstDBOrgaos.push({codArea: retWS.lstOrgaos[i].codFuncao, descArea: retWS.lstOrgaos[i].txtDescricaoFuncao});
              }

              this.objOrgaos.lstOrgaos = this.lstDBOrgaos;
              this.carregaAccordion();
            }

          }, (error) => {
            console.log('2', error);
          })

        }
  }
*/
}
