import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { DespesasServico } from '../../providers/despesas-servico';
import { DaoPage } from '../dao/dao';
import { Utils } from '../../global/util';
import { SetoresPage } from '../setores/setores';

@Component({
  selector: 'page-funcoes',
  templateUrl: 'funcoes.html',
  providers: [DespesasServico, DaoPage]
})
export class FuncoesPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  objFuncoes: any = {};
  anoDif: any;
  mesDif: any;
  setorSelecionado: any;
  valRealizadoSaude: any;
  valRealizadoSeguranca: any;
  valRealizadoCultura: any;
  valRealizadoEducacao: any;
  myDate: Date;
  myYear: any;
  myMonth: any;
  public lstDBAreas: Array<Object>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public despesasServico: DespesasServico,
              public platform: Platform,
              public util: Utils,
              private dao: DaoPage) {
                this.lstDBAreas = [];
                this.myDate = new Date();
                this.myYear = this.myDate.getFullYear();
                this.myMonth = this.myDate.getMonth()+1;

                this.consultarFuncoes(this.myYear);

              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncoesPage');
    let loader = this.loadingCtrl.create();
    loader.present().then(() => {
      this.consultarDespesasFuncoes(this.myYear,this.myMonth,"10",false, loader);
      this.consultarDespesasFuncoes(this.myYear,this.myMonth,"06",false, loader);
      this.consultarDespesasFuncoes(this.myYear,this.myMonth,"12",false, loader);
      this.consultarDespesasFuncoes(this.myYear,this.myMonth,"13",true, loader);
    })

  }

  carregarGraficoFuncoes(){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Saúde", "Segurança", "Educação", "Cultura"],
                datasets: [{
                    label: ["Saúde", "Segurança", "Educação", "Cultura"],
                    data: [this.valRealizadoSaude, this.valRealizadoSeguranca, this.valRealizadoEducacao, this.valRealizadoCultura],
                    backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#009688",
                      "#FFCE56",

                    ],
                    hoverBackgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(255, 206, 86, 0.5)',
                      'rgba(0, 150, 136, 0.5)',
                      'rgba(75, 192, 192, 0.5)',
                    ]
                }]
            },
            options: {
              responsive:true,

              tooltips:{
                callbacks:{
                  label: function(tooltipItem, data){
                      console.log('index ' + tooltipItem.index);
                      let numSeguranca = parseInt(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).toFixed(2);
                      numSeguranca = numSeguranca.replace(".",",");
                      return 'R$ ' + String(numSeguranca).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                  }
                }
              },
          }
        });
  }

buscarComAnoMesDiferente(){
  let loader = this.loadingCtrl.create();
  loader.present().then(() => {
    this.consultarDespesasFuncoes(this.anoDif, this.mesDif,"10",false, loader);
    this.consultarDespesasFuncoes(this.anoDif, this.mesDif,"06",false, loader);
    this.consultarDespesasFuncoes(this.anoDif, this.mesDif,"12",false, loader);
    this.consultarDespesasFuncoes(this.anoDif, this.mesDif,"13", true, loader);
  })



}

consultarDespesasFuncoes(anoParam, mesParam, codFuncao, fimExecucao, load){
    let strParam = 'anoDotacao='+ anoParam + '&mesDotacao='  + mesParam + '&codFuncao=' + codFuncao;

    this.despesasServico.getDespesasProvider(strParam)
    .then((res) => {
      if (res) {

        this.objFuncoes = res;

        if(codFuncao == '10')
        this.valRealizadoSaude = this.objFuncoes.lstDespesas[0].valPagoExercicio;
        if(codFuncao == '06')
        this.valRealizadoSeguranca = this.objFuncoes.lstDespesas[0].valPagoExercicio;
        if(codFuncao == '12')
        this.valRealizadoEducacao =  this.objFuncoes.lstDespesas[0].valPagoExercicio;
        if(codFuncao == '13')
        this.valRealizadoCultura =  this.objFuncoes.lstDespesas[0].valPagoExercicio;

        this.carregarGraficoFuncoes();

        if (fimExecucao){
          console.log('Fim loader');
          load.dismiss();
        }
      }
    }, (error) => {
      console.log('2', error);
    })



}


openPageSetores(){
  console.log(this.setorSelecionado);
  this.navCtrl.push(SetoresPage, {
      setorParam : this.setorSelecionado.substring(0,2)
  });
}

  consultarFuncoes(anoParam){
  console.log('0');
  console.log('anoParam' + anoParam);

      let strParam = 'anoExercicio='+ anoParam;

        if (this.platform.is('cordova')) {

          /*this.lstDBAreas = this.dao.readTbArea();

          if(this.lstDBAreas.length > 0){

            this.objFuncoes.lstFuncoes = this.lstDBAreas;

          }else{

            this.despesasServico.getFuncoesProvider(strParam)
            .then((res) => {

              if (res) {

                  this.dao.insertArea(res);
                  this.lstDBAreas = this.dao.readTbArea();
                  this.objFuncoes.lstFuncoes = this.lstDBAreas;
              }

            }, (error) => {
              console.log('2', error);
            })

          }*/

          this.despesasServico.getFuncoesProvider(strParam)
          .then((res) => {

            if (res) {
              let retWS: any = {};
              retWS = res;
              for(var i = 0; i < retWS.lstFuncoes.length; i++) {
                  this.lstDBAreas.push({codArea: retWS.lstFuncoes[i].codFuncao, descArea: retWS.lstFuncoes[i].txtDescricaoFuncao});
              }

              this.objFuncoes.lstFuncoes = this.lstDBAreas;

            }

          }, (error) => {
            console.log('2', error);
          })

        }else{
///console.log(retWS);
          this.despesasServico.getFuncoesProvider(strParam)
          .then((res) => {

            if (res) {
              let retWS: any = {};
              retWS = res;
              for(var i = 0; i < retWS.lstFuncoes.length; i++) {
                  this.lstDBAreas.push({codArea: retWS.lstFuncoes[i].codFuncao, descArea: retWS.lstFuncoes[i].txtDescricaoFuncao});
              }

              this.objFuncoes.lstFuncoes = this.lstDBAreas;

            }

          }, (error) => {
            console.log('2', error);
          })

        }
  }

}
