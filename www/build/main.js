webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contratos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_filtros_modal_filtros__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalhes_contrato_detalhes_contrato__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_mensagens__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grafico_contratos_grafico_contratos__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Contratos = (function () {
    function Contratos(alertCtrl, navCtrl, contratosService, loadingCtrl, modalCtrl, detalhesContratoCtrl, global, graficos) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.contratosService = contratosService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.detalhesContratoCtrl = detalhesContratoCtrl;
        this.global = global;
        this.graficos = graficos;
        this.objContratos = {};
        this.lstContratosSearch = {};
        this.getAllContratos();
        this.initializeItems();
    }
    /*o método a seguir passa para um array os valores recebidos do metodo do provider,
      desta forma, consigo manipular facilmente os dados na View
    */
    Contratos.prototype.getAllContratos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present().then(function () {
            _this.contratosService.getAllContratosProvider()
                .then(function (res) {
                if (res) {
                    _this.objContratos = res;
                    console.log('1', _this.objContratos);
                    loader.dismiss();
                }
            }, function (error) {
                console.log('2', error);
                loader.dismiss();
            });
        });
    };
    /*o método a seguir redireciona para pagina de Detalhes do Contrato passando
      no parametro o código do contrato clicado, ao entrar na pagina de detalhes,
      é feita uma nova consulta ao WS porém passando esse parametro para retornar os dados
      especificos deste contrato
    */
    Contratos.prototype.openDetalhesContrato = function (codContrato) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detalhes_contrato_detalhes_contrato__["a" /* DetalhesContrato */], {
            paramCodContrato: codContrato
        });
    };
    Contratos.prototype.openModalFiltros = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_filtros_modal_filtros__["a" /* ModalFiltros */]);
        modal.onDidDismiss(function (data) {
            console.log('Filtros =>', data);
            console.log('4');
            _this.objContratos = data;
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
        modal.present();
    };
    Contratos.prototype.openGrafico = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__grafico_contratos_grafico_contratos__["a" /* GraficoContratos */], {
            objContrato: this.objContratos
        });
    };
    /*O método a seguir abre um alert contendo as informações do contrato,
    esses textos estão todos na classe Mensagens, dentro da pasta global*/
    Contratos.prototype.openInformacoes = function () {
        var alert = this.alertCtrl.create({
            title: this.global.msgTituloInfoContrato,
            subTitle: this.global.msgConteudoInfoContrato,
            buttons: ['OK, entendi! :) ']
        });
        alert.present();
    };
    Contratos.prototype.initializeItems = function () {
        this.lstContratosSearch = this.objContratos;
    };
    Contratos.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.lstContratosSearch = this.lstContratosSearch.filter(function (v) {
            if (v.codContrato && q) {
                if (v.codContrato.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return Contratos;
}());
Contratos = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-page1',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\contratos\contratos.html"*/'<ion-header>\n\n  <ion-navbar color="headerColor">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contratos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content>\n\n\n\n\n\n<ion-searchbar (ionInput)="getItems($event)" placeholder="Busca" ></ion-searchbar>\n\n\n\n<div padding>\n\n  <button ion-button primary small icon-left full color="purple" (click)="openModalFiltros()" >\n\n    <ion-icon name="filter"></ion-icon>Filtrar\n\n  </button>\n\n</div>\n\n  <ion-list *ngFor="let c of objContratos.lstContratos; let i = index">\n\n          <ion-item *ngIf="i<10" (click)="openDetalhesContrato(c.codContrato)">\n\n            <ion-icon  item-left name="md-arrow-dropright" color="primary"></ion-icon>\n\n              <div item-left>{{c.codContrato}}</div>\n\n              <div item-right> <span color="txtGray">{{c.anoContrato}}</span></div>\n\n          </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-fab right bottom primary>\n\n   <button ion-fab color="primary" ><ion-icon name="add"></ion-icon></button>\n\n   <ion-fab-list side="top">\n\n      <button ion-fab color="btnGreen"  (click)="openInformacoes()"      ><ion-icon name="information"></ion-icon></button>\n\n      <button ion-fab color="btnPurple" (click)="openDetalhesContrato()" ><ion-icon name="ios-more"></ion-icon></button>\n\n    </ion-fab-list>\n\n </ion-fab>\n\n\n\n <ion-fab left bottom >\n\n  <button ion-fab color="btnPink" (click)="openGrafico()"><ion-icon name="stats"></ion-icon></button>\n\n</ion-fab>\n\n\n\n\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\contratos\contratos.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__["a" /* ContratosService */], __WEBPACK_IMPORTED_MODULE_6__grafico_contratos_grafico_contratos__["a" /* GraficoContratos */], __WEBPACK_IMPORTED_MODULE_4__detalhes_contrato_detalhes_contrato__["a" /* DetalhesContrato */], __WEBPACK_IMPORTED_MODULE_5__global_mensagens__["a" /* Mensagens */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__["a" /* ContratosService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__detalhes_contrato_detalhes_contrato__["a" /* DetalhesContrato */],
        __WEBPACK_IMPORTED_MODULE_5__global_mensagens__["a" /* Mensagens */],
        __WEBPACK_IMPORTED_MODULE_6__grafico_contratos_grafico_contratos__["a" /* GraficoContratos */]])
], Contratos);

//# sourceMappingURL=contratos.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credores; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_credores_service__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Credores = (function () {
    function Credores(alertCtrl, navCtrl, navParams, credoresService, loadingCtrl
        /*public modalCtrl: ModalController,
        public detalhesContratoCtrl: DetalhesContrato,
        public global: Mensagens,
        public graficos:GraficoContratos*/ ) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credoresService = credoresService;
        this.loadingCtrl = loadingCtrl;
        this.credores = {};
        this.codigoContrato = navParams.get('paramCodContrato');
        this.codigoEmpresa = navParams.get('paramCodEmpresa');
        this.anoContrato = navParams.get('paramAnoContrato');
        console.log('cod', this.codigoContrato + 'codEmpresa: ', this.codigoEmpresa + 'anoContrato: ', this.anoContrato);
        //  this.initializeItems();
        this.getCredoresDeContrato();
    }
    Credores.prototype.getCredoresDeContrato = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present().then(function () {
            _this.credoresService.getCredoresDeContratoProvider(_this.codigoContrato, _this.codigoEmpresa, _this.anoContrato)
                .then(function (res) {
                if (res) {
                    _this.credores = res;
                    console.log('1', _this.credores);
                    loader.dismiss();
                }
            }, function (error) {
                console.log('2', error);
                loader.dismiss();
            });
        });
    };
    return Credores;
}());
Credores = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-page1',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\credores\credores.html"*/'<ion-header>\n\n  <ion-navbar color="headerColor">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Credores</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n         \n\n<ion-content class="card-background-page">\n\n\n\n\n\n<ion-searchbar placeholder="Busca" ></ion-searchbar>\n\n\n\n<div padding>\n\n  <button ion-button primary color="purple" small full > Filtrar\n\n    <ion-icon name="filter"></ion-icon>\n\n  </button>\n\n</div>\n\n  <ion-list *ngFor="let c of credores.lstCredores; let i = index">\n\n    <ion-card>\n\n      <ion-card-header style="padding: 0">\n\n        <img src="assets/img/coins.jpg"/>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-grid style="padding: 0">\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <span>CPF/CNPJ</span><br>\n\n              <h3><strong>{{c.numCpfCnpj}}</strong></h3>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <span>Tipo de Natureza</span>\n\n              <h1 style="text-align: center;"><strong>{{c.txtTipoNatureza}}</strong></h1>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <h2 style="text-align: center;">\n\n              <ion-icon name="md-arrow-dropright" color="btnPink" item-left></ion-icon>\n\n              <strong>{{c.txtRazaoSocial}}</strong>\n\n            </h2>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-list>\n\n  <ion-fab right bottom primary>\n\n   <button ion-fab color="primary" ><ion-icon name="add"></ion-icon></button>\n\n   <ion-fab-list side="top">\n\n      <button ion-fab color="btnGreen"        ><ion-icon name="information"></ion-icon></button>\n\n      <button ion-fab color="btnPurple"  ><ion-icon name="ios-more"></ion-icon></button>\n\n    </ion-fab-list>\n\n </ion-fab>\n\n\n\n <ion-fab left bottom >\n\n  <button ion-fab color="btnPink" ><ion-icon name="stats"></ion-icon></button>\n\n</ion-fab>\n\n\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\credores\credores.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_credores_service__["a" /* CredoresService */] /*,GraficoContratos, DetalhesContrato*/]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_credores_service__["a" /* CredoresService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]
        /*public modalCtrl: ModalController,
        public detalhesContratoCtrl: DetalhesContrato,
        public global: Mensagens,
        public graficos:GraficoContratos*/ ])
], Credores);

//# sourceMappingURL=credores.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespesasServico; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_mensagens__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DespesasServico = (function () {
    function DespesasServico(http, global) {
        this.http = http;
        this.global = global;
        console.log('Hello DespesasServico Provider');
        this.urlDespesas = 'https://gatewayapi.prodam.sp.gov.br:443/financas/orcamento/sof/v2.1.0/consultarDespesas';
        this.urlFuncoes = 'https://gatewayapi.prodam.sp.gov.br:443/financas/orcamento/sof/v2.1.0/consultarFuncoes';
        this.urlOrgaos = 'https://gatewayapi.prodam.sp.gov.br:443/financas/orcamento/sof/v2.1.0/consultarOrgaos';
    }
    DespesasServico.prototype.getDespesasProvider = function (params) {
        var _this = this;
        console.log('Chegou no provider DESPESAS --- mes/ano: ' + params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            console.log(_this.urlDespesas + '?' + params);
            _this.http.get(_this.urlDespesas + '?' + params, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DespesasServico.prototype.getFuncoesProvider = function (anoParam) {
        var _this = this;
        console.log('Chegou no provider FUNCOES: Ano ---' + anoParam);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            console.log(_this.urlFuncoes + '?' + anoParam);
            _this.http.get(_this.urlFuncoes + '?' + anoParam, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DespesasServico.prototype.getOrgaosProvider = function (anoParam) {
        var _this = this;
        console.log('Chegou no provider Orgaos: Ano ---' + anoParam);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            console.log(_this.urlOrgaos + '?' + anoParam);
            _this.http.get(_this.urlOrgaos + '?' + anoParam, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    return DespesasServico;
}());
DespesasServico = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__global_mensagens__["a" /* Mensagens */]])
], DespesasServico);

//# sourceMappingURL=despesas-servico.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Utils = (function () {
    function Utils() {
        this.primeiraVezNoAPP = true;
    }
    Utils.prototype.detectAmount = function (v) {
        if (v) {
            this.n = v[v.length - 1];
            if (isNaN(this.n)) {
                v = v.substring(0, v.length - 1);
                return v;
            }
            v = this.fixAmount(v);
            return v;
        }
    };
    Utils.prototype.fixAmount = function (a) {
        var period = a.indexOf(".");
        if (period > -1) {
            a = a.substring(0, period) + a.substring(period + 1);
        }
        this.len = a.length;
        while (this.len < 3) {
            a = "0" + a;
            this.len = a.length;
        }
        a = a.substring(0, this.len - 2) + "." + a.substring(this.len - 2, this.len);
        while (a.length > 4 && (a[0] == '0')) {
            a = a.substring(1);
        }
        if (a[0] == ".") {
            a = "0" + a;
        }
        return (a);
    };
    return Utils;
}());
Utils = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'currencyformat'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Utils);

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_despesas_servico__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_dao__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_util__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setores_setores__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuncoesPage = (function () {
    function FuncoesPage(navCtrl, navParams, loadingCtrl, despesasServico, platform, util, dao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.despesasServico = despesasServico;
        this.platform = platform;
        this.util = util;
        this.dao = dao;
        this.objFuncoes = {};
        this.lstDBAreas = [];
        this.myDate = new Date();
        this.myYear = this.myDate.getFullYear();
        this.myMonth = this.myDate.getMonth() + 1;
        this.consultarFuncoes(this.myYear);
    }
    FuncoesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FuncoesPage');
        var loader = this.loadingCtrl.create();
        loader.present().then(function () {
            _this.consultarDespesasFuncoes(_this.myYear, _this.myMonth, "10", false, loader);
            _this.consultarDespesasFuncoes(_this.myYear, _this.myMonth, "06", false, loader);
            _this.consultarDespesasFuncoes(_this.myYear, _this.myMonth, "12", false, loader);
            _this.consultarDespesasFuncoes(_this.myYear, _this.myMonth, "13", true, loader);
        });
    };
    FuncoesPage.prototype.carregarGraficoFuncoes = function () {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
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
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            console.log('index ' + tooltipItem.index);
                            var numSeguranca = parseInt(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).toFixed(2);
                            numSeguranca = numSeguranca.replace(".", ",");
                            return 'R$ ' + String(numSeguranca).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        }
                    }
                },
            }
        });
    };
    FuncoesPage.prototype.buscarComAnoMesDiferente = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present().then(function () {
            _this.consultarDespesasFuncoes(_this.anoDif, _this.mesDif, "10", false, loader);
            _this.consultarDespesasFuncoes(_this.anoDif, _this.mesDif, "06", false, loader);
            _this.consultarDespesasFuncoes(_this.anoDif, _this.mesDif, "12", false, loader);
            _this.consultarDespesasFuncoes(_this.anoDif, _this.mesDif, "13", true, loader);
        });
    };
    FuncoesPage.prototype.consultarDespesasFuncoes = function (anoParam, mesParam, codFuncao, fimExecucao, load) {
        var _this = this;
        var strParam = 'anoDotacao=' + anoParam + '&mesDotacao=' + mesParam + '&codFuncao=' + codFuncao;
        this.despesasServico.getDespesasProvider(strParam)
            .then(function (res) {
            if (res) {
                _this.objFuncoes = res;
                if (codFuncao == '10')
                    _this.valRealizadoSaude = _this.objFuncoes.lstDespesas[0].valPagoExercicio;
                if (codFuncao == '06')
                    _this.valRealizadoSeguranca = _this.objFuncoes.lstDespesas[0].valPagoExercicio;
                if (codFuncao == '12')
                    _this.valRealizadoEducacao = _this.objFuncoes.lstDespesas[0].valPagoExercicio;
                if (codFuncao == '13')
                    _this.valRealizadoCultura = _this.objFuncoes.lstDespesas[0].valPagoExercicio;
                _this.carregarGraficoFuncoes();
                if (fimExecucao) {
                    console.log('Fim loader');
                    load.dismiss();
                }
            }
        }, function (error) {
            console.log('2', error);
        });
    };
    FuncoesPage.prototype.openPageSetores = function () {
        console.log(this.setorSelecionado);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__setores_setores__["a" /* SetoresPage */], {
            setorParam: this.setorSelecionado.substring(0, 2)
        });
    };
    FuncoesPage.prototype.consultarFuncoes = function (anoParam) {
        var _this = this;
        console.log('0');
        console.log('anoParam' + anoParam);
        var strParam = 'anoExercicio=' + anoParam;
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
                .then(function (res) {
                if (res) {
                    var retWS = {};
                    retWS = res;
                    for (var i = 0; i < retWS.lstFuncoes.length; i++) {
                        _this.lstDBAreas.push({ codArea: retWS.lstFuncoes[i].codFuncao, descArea: retWS.lstFuncoes[i].txtDescricaoFuncao });
                    }
                    _this.objFuncoes.lstFuncoes = _this.lstDBAreas;
                }
            }, function (error) {
                console.log('2', error);
            });
        }
        else {
            ///console.log(retWS);
            this.despesasServico.getFuncoesProvider(strParam)
                .then(function (res) {
                if (res) {
                    var retWS = {};
                    retWS = res;
                    for (var i = 0; i < retWS.lstFuncoes.length; i++) {
                        _this.lstDBAreas.push({ codArea: retWS.lstFuncoes[i].codFuncao, descArea: retWS.lstFuncoes[i].txtDescricaoFuncao });
                    }
                    _this.objFuncoes.lstFuncoes = _this.lstDBAreas;
                }
            }, function (error) {
                console.log('2', error);
            });
        }
    };
    return FuncoesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
    __metadata("design:type", Object)
], FuncoesPage.prototype, "doughnutCanvas", void 0);
FuncoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-funcoes',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\funcoes\funcoes.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setores - {{ myMonth }} / {{ myYear }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <canvas #doughnutCanvas></canvas>\n\n      <ion-card>\n        <ion-card-header>\n            Pesquisar ano/mês diferente\n        </ion-card-header>\n\n          <ion-card-content style="padding: 0">\n            <ion-grid style="padding: 0">\n\n              <ion-row>\n                <ion-col col-6>\n                  <ion-item item-left>\n                    <ion-label stacked>Ano:</ion-label>\n                    <ion-datetime displayFormat="YYYY" [(ngModel)]="anoDif" placeholder="Selecione" min="2003"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item item-right>\n                    <ion-label stacked>Mês:</ion-label>\n                    <ion-select [(ngModel)]="mesDif" placeholder="Selecione">\n                      <ion-option>1</ion-option>\n                      <ion-option>2</ion-option>\n                      <ion-option>3</ion-option>\n                      <ion-option>4</ion-option>\n                      <ion-option>5</ion-option>\n                      <ion-option>6</ion-option>\n                      <ion-option>7</ion-option>\n                      <ion-option>8</ion-option>\n                      <ion-option>9</ion-option>\n                      <ion-option>10</ion-option>\n                      <ion-option>11</ion-option>\n                      <ion-option>12</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        <button bottom ion-button full small primary color="purple" (click)="buscarComAnoMesDiferente()">Buscar</button>\n      </ion-card-content>\n    </ion-card>\n  <!--  <ion-list>\n         <ion-item *ngFor="let area of lstDBAreas">\n                 {{area.codArea}}{{area.descArea}}\n         </ion-item>\n    </ion-list>-->\n<ion-card>\n  <ion-card-header>\n  Pesquisar o Setor\n  </ion-card-header>\n  <ion-card-content style="padding: 0">\n    <ion-item>\n    <ion-select placeholder="Selecione o setor" style="max-width: 100% !important;" (ionChange)="openPageSetores()" [(ngModel)]="setorSelecionado">\n      <ion-option *ngFor="let setor of lstDBAreas"  >{{setor.codArea}} - {{setor.descArea}}</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\funcoes\funcoes.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_despesas_servico__["a" /* DespesasServico */], __WEBPACK_IMPORTED_MODULE_4__dao_dao__["a" /* DaoPage */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_despesas_servico__["a" /* DespesasServico */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__global_util__["a" /* Utils */],
        __WEBPACK_IMPORTED_MODULE_4__dao_dao__["a" /* DaoPage */]])
], FuncoesPage);

//# sourceMappingURL=funcoes.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_mensagens__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FormFaleConoscoPage } from '../form-fale-conosco/form-fale-conosco'
var HomePage = (function () {
    function HomePage(navCtrl, navParams, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openModalSobreApp = function () {
        var alert = this.alertCtrl.create({
            title: this.global.msgTituloSobreOAPP,
            subTitle: this.global.msgConteudoSobreOAPP,
            buttons: ['OK, entendi! :) ']
        });
        alert.present();
    };
    HomePage.prototype.openFormFaleConosco = function () {
        //  this.navCtrl.push(FormFaleConoscoPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="headerColor" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Início</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n  <ion-slides pager autoplay="10000" loop="true">\n    <ion-slide>\n      <img class="imgHome" src="assets/img/sp.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img class="imgHome" src="assets/img/sp2.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img class="imgHome" src="assets/img/sp3.jpg"/>\n    </ion-slide>\n</ion-slides>\n\n<div>\n  <button ion-button full color="purple" (click)="openModalSobreApp()" class="btnHome">Sobre o aplicativo</button>\n  <button ion-button full color="purpleSoft" class="btnHome">...</button>\n  <button ion-button full color="purple" (click)="openFormFaleConosco()" class="btnHome">Fale Conosco :)</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__global_mensagens__["a" /* Mensagens */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__global_mensagens__["a" /* Mensagens */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFiltros; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contratos_contratos__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalFiltros = (function () {
    function ModalFiltros(navCtrl, navParams, viewCtrl, contratosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.contratosService = contratosService;
        this.filtros = {};
        this.contratosFiltrados = {};
    }
    ModalFiltros.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFiltrosPage');
    };
    ModalFiltros.prototype.closeModal = function () {
        //  this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contratos_contratos__["a" /* Contratos */]);
    };
    ModalFiltros.prototype.validarValores = function () {
        if (this.filtros.codContrato == null)
            this.filtros.codContrato = '';
        if (this.filtros.codEmpresa == null)
            this.filtros.codEmpresa = '';
        if (this.filtros.numCpfCnpj == null)
            this.filtros.numCpfCnpj = '';
        if (this.filtros.anoContrato == null)
            this.filtros.anoContrato = '';
        if (this.filtros.codOrgao == null)
            this.filtros.codOrgao = '';
    };
    ModalFiltros.prototype.aplicarFiltros = function () {
        var _this = this;
        //this.viewCtrl.dismiss(this.filtros);
        this.validarValores();
        console.log('0');
        var strParam = 'codContrato=' + this.filtros.codContrato
            + '&codEmpresa=' + this.filtros.codEmpresa
            + '&numCpfCnpj=' + this.filtros.numCpfCnpj
            + '&anoContrato=' + this.filtros.anoContrato
            + '&codOrgao=' + this.filtros.codOrgao;
        this.contratosService.getContratoComFiltroProvider(strParam)
            .then(function (res) {
            if (res) {
                _this.contratosFiltrados = res;
                console.log('1', _this.contratosFiltrados);
                _this.viewCtrl.dismiss(_this.contratosFiltrados);
            }
        }, function (error) {
            console.log('2', error);
            _this.viewCtrl.dismiss();
        });
    };
    return ModalFiltros;
}());
ModalFiltros = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal-filtros',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\modal-filtros\modal-filtros.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="headerColor">\n\n      <ion-title>\n\n        <ion-icon item-left (click)="closeModal()"  name="md-arrow-round-back"></ion-icon>\n\n        Filtros\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="purple" floating>Código do contrato</ion-label>\n\n      <ion-input type="text" [(ngModel)]="filtros.codContrato"> </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="purple" floating>CPF/CNPJ</ion-label>\n\n      <ion-input type="text" [(ngModel)]="filtros.numCpfCnpj"> </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="purple" floating>Código da Empresa</ion-label>\n\n      <ion-input type="text" [(ngModel)]="filtros.codEmpresa"> </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="purple" floating>Código do órgão</ion-label>\n\n      <ion-input type="text" [(ngModel)]="filtros.codOrgao"> </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="purple" >Ano do Contrato</ion-label>\n\n      <ion-datetime min="2000" [(ngModel)]="filtros.anoContrato" displayFormat="YYYY"></ion-datetime>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button bottom ion-button full primary color="purple" (click)="aplicarFiltros()"> Aplicar filtros</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\modal-filtros\modal-filtros.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__["a" /* ContratosService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__["a" /* ContratosService */]])
], ModalFiltros);

//# sourceMappingURL=modal-filtros.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesContrato; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credores_credores__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contratos_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalhesContrato = (function () {
    function DetalhesContrato(navCtrl, navParams, viewCtrl, loadingCtrl, contratosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.contratosService = contratosService;
        this.detalhes = {};
        this.codigoContrato = navParams.get('paramCodContrato');
        console.log('cod', this.codigoContrato);
        this.getDetalhesContrato();
    }
    DetalhesContrato.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhesContratoPage');
    };
    DetalhesContrato.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DetalhesContrato.prototype.getDetalhesContrato = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present().then(function () {
            _this.contratosService.getThisContratoProvider(_this.codigoContrato)
                .then(function (res) {
                if (res) {
                    _this.detalhes = res;
                    console.log('1', _this.detalhes);
                    loader.dismiss();
                }
            }, function (error) {
                console.log('2', error);
                loader.dismiss();
            });
        });
    };
    DetalhesContrato.prototype.openCredoresContrato = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__credores_credores__["a" /* Credores */], {
            paramCodContrato: this.codigoContrato,
            paramCodEmpresa: '04',
            paramAnoContrato: '2012',
        });
        console.log(this.codigoContrato + ' ' + this.detalhes.codEmpresa + ' ' + this.detalhes.anoContrato);
    };
    return DetalhesContrato;
}());
DetalhesContrato = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detalhes-contrato',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\detalhes-contrato\detalhes-contrato.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <ion-title>Detalhes do Contrato</ion-title>\n  </ion-navbar>\n</ion-header>\n    \n<ion-content class="has-header has-subheader"  >\n      <ion-list *ngFor="let c of detalhes.lstContratos">\n        <ion-card>\n          <ion-card-header style="padding: 0">\n            <h2 style="text-align: center;">\n              <ion-icon name="md-arrow-dropright" color="btnPink" item-left></ion-icon>\n              <strong>{{c.anoContrato}}</strong>\n            </h2>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid style="padding: 0">\n              <ion-row>\n                <ion-col col-6>\n                  <span>Código do contrato</span><br>\n                  <h3><strong>{{c.codContrato}}</strong></h3>\n                </ion-col>\n                <ion-col col-6>\n                  <span>Código da empresa</span>\n                  <h3 style="text-align: center;"><strong>{{c.codEmpresa}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-6>\n                  <span>Código da modalidade</span><br>\n                  <h3><strong>{{c.codModalidade}}</strong></h3>\n                </ion-col>\n                <ion-col col-6>\n                  <span>Código do orgão</span>\n                  <h3 style="text-align: center;"><strong>{{c.codOrgao}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Descrição do orgão</span>\n                  <h3 style="text-align: center;"><strong>{{c.txtDescricaoOrgao}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Data de assinatura do contrato</span>\n                  <h3 style="text-align: center;"><strong>{{c.datAssinaturaContrato}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Data de publicação do contrato</span>\n                  <h3 style="text-align: center;"><strong>{{c.datPublicacaoContrato}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Data de vigência</span>\n                  <h3 style="text-align: center;"><strong>{{c.datVigencia}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Número original do contrato</span>\n                  <h3 style="text-align: center;"><strong>{{c.numOriginalContrato}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Razão Social</span>\n                  <h3 style="text-align: center;"><strong>{{c.txtRazaoSocial}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Objetivo do contrato</span>\n                  <h3 style="text-align: center;"><strong>{{c.txtObjetoContrato}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                  <span>Descrição da modalidade</span>\n                  <h3 style="text-align: center;"><strong>{{c.txtDescricaoModalidade}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-6>\n                  <span>Valor de aditamento</span>\n                  <h3 style="text-align: center;"><strong>{{c.valAditamentos}}</strong></h3>\n                </ion-col>\n                <ion-col col-6>\n                  <span>Valor da anulação</span>\n                  <h3 style="text-align: center;"><strong>{{c.valAnulacao}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-6>\n                  <span>Valor Anulado Empenho</span>\n                  <h3 style="text-align: center;"><strong>{{c.valAnuladoEmpenho}}</strong></h3>\n                </ion-col>\n                <ion-col col-6>\n                  <span>Valor total do empenho</span>\n                  <h3 style="text-align: center;"><strong>{{c.valTotalEmpenhado}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-6>\n                  <span>Valor empenhado líquido</span>\n                  <h3 style="text-align: center;"><strong>{{c.valEmpenhadoLiquido}}</strong></h3>\n                </ion-col>\n                <ion-col col-6>\n                  <span>Valor liquidado</span>\n                  <h3 style="text-align: center;"><strong>{{c.valLiquidado}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-6>\n                  <span>Valor Pago</span>\n                  <h3 style="text-align: center;"><strong>{{c.valPago}}</strong></h3>\n                </ion-col>\n                <ion-col col-6>\n                  <span>Valor Principal</span>\n                  <h3 style="text-align: center;"><strong>{{c.valPrincipal}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n\n              <ion-row>\n                <ion-col col-6>\n                  <span>Valor de reajustes</span>\n                  <h3 style="text-align: center;"><strong>{{c.valReajustes}}</strong></h3>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n\n              <ion-col col-12>\n                <span>Tipo de contratação</span>\n                <h3 style="text-align: center;"><strong>{{c.txtTipoContratacao}}</strong></h3>\n              </ion-col>\n            </ion-row>\n\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n<!--\n\n\n              <p style="margin-top:18px" ion-text color="primary">Código do contrato</p>\n              <p >{{c.codContrato}}</p>\n              <p ion-text color="primary">Ano do contrato</p>\n              <p>{{c.anoContrato}}</p>\n              <p ion-text color="primary">Código do evento</p>\n              <p>{{c.codEvento}}</p>\n              <p ion-text color="primary">Código da modalidade</p>\n              <p>{{c.codModalidade}}</p>\n              <p ion-text color="primary">Código da empresa</p>\n              <p>{{c.codEmpresa}}</p>\n              <p ion-text color="primary">Código do orgão</p>\n              <p>{{c.codOrgao}}</p>\n              <p ion-text color="primary">Descrição do orgão</p>\n              <p>{{c.txtDescricaoOrgao}}</p>\n              <p ion-text color="primary">Data de assinatura do contrato</p>\n              <p>{{c.datAssinaturaContrato}}</p>\n              <p ion-text color="primary">Data de publicação do contrato</p>\n              <p>{{c.datPublicacaoContrato}}</p>\n              <p ion-text color="primary">Data de vigência</p>\n              <p>{{c.datVigencia}}</p>\n              <p ion-text color="primary">Número original do contrato</p>\n              <p>{{c.numOriginalContrato}}</p>\n              <p ion-text color="primary">Razão Social</p>\n              <p>{{c.txtRazaoSocial}}</p>\n              <p ion-text color="primary">Objetivo do contrato</p>\n              <p>{{c.txtObjetoContrato}}</p>\n              <p ion-text color="primary">Descrição da modalidade</p>\n              <p>{{c.txtDescricaoModalidade}}</p>\n              <p ion-text color="primary">Valor de aditamento</p>\n              <p>{{c.valAditamentos}}</p>\n              <p ion-text color="primary">Valor da anulação</p>\n              <p>{{c.valAnulacao}}</p>\n              <p ion-text color="primary">Valor Anulado Empenho</p>\n              <p>{{c.valAnuladoEmpenho}}</p>\n              <p ion-text color="primary">Valor total do empenho</p>\n              <p>{{c.valTotalEmpenhado}}</p>\n              <p ion-text color="primary">Valor empenhado líquido</p>\n              <p>{{c.valEmpenhadoLiquido}}</p>\n              <p ion-text color="primary">Valor liquidado</p>\n              <p>{{c.valLiquidado}}</p>\n              <p ion-text color="primary">Valor Pago</p>\n              <p>{{c.valPago}}</p>\n              <p ion-text color="primary">Valor Principal</p>\n              <p>{{c.valPrincipal}}</p>--\n              <p ion-text color="primary">Valor de reajustes</p>\n              <p>{{c.valReajustes}}</p>\n              <p ion-text color="primary">Tipo de contratação</p>\n              <p>{{c.txtTipoContratacao}}</p> -->\n  </ion-list>\n\n\n  <ion-fab right bottom>\n   <button ion-fab color="btnPink" ><ion-icon name="search"></ion-icon></button>\n   <ion-fab-list side="left">\n      <button color="btnPurple" (click)="openCredoresContrato()" ion-button>Credores</button>\n    </ion-fab-list>\n </ion-fab>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\detalhes-contrato\detalhes-contrato.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_contratos_service__["a" /* ContratosService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_contratos_service__["a" /* ContratosService */]])
], DetalhesContrato);

//# sourceMappingURL=detalhes-contrato.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoContratos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficoContratos = (function () {
    function GraficoContratos(navCtrl, navParams, viewCtrl, contratosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.contratosService = contratosService;
        this.objContrato = {};
        this.chartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.chartLabels = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
        this.chartType = 'bar'; //doughnut
        this.chartLegend = true;
        this.chartData = [
            { data: [75, 80, 45, 100], label: 'Contrato A' },
            { data: [80, 55, 75, 95], label: 'Contrato B' }
        ];
        this.objContrato = navParams.get('objContrato');
        console.log('objContrato', this.objContrato);
    }
    GraficoContratos.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraficoContratosPage');
    };
    GraficoContratos.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return GraficoContratos;
}());
GraficoContratos = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-grafico-contratos',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\grafico-contratos\grafico-contratos.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <ion-title>Gráficos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n    \n<ion-content padding>\n  <canvas baseChart [datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [legend]="chartLegend"\n      [chartType]="chartType"></canvas>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\grafico-contratos\grafico-contratos.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__["a" /* ContratosService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_contratos_service__["a" /* ContratosService */]])
], GraficoContratos);

//# sourceMappingURL=grafico-contratos.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_despesas_servico__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_util__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__funcoes_funcoes__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__despesafiltros_despesafiltros__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dao_dao__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DespesasPage = (function () {
    function DespesasPage(navCtrl, navParams, despesasServico, loadingCtrl, platform, util, dao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.despesasServico = despesasServico;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.util = util;
        this.dao = dao;
        this.objDespesas = {};
    }
    DespesasPage.prototype.ionViewDidLoad = function () {
        this.myDate = new Date();
        this.myYear = this.myDate.getFullYear();
        this.myMonth = this.myDate.getMonth() + 1;
        this.labelAno = this.myYear;
        this.labelMes = this.myMonth;
        console.log('>>>>>>' + this.myYear + this.myMonth);
        this.consultarDespesas(this.myYear, this.myMonth);
        console.log('ionViewDidLoad DespesasPage');
    };
    DespesasPage.prototype.carregarGrafico = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Valores: " + this.labelMes + '/' + this.labelAno],
                datasets: [{
                        label: 'Orçado Início',
                        data: [this.valOrcadoInicio],
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Orçado Atual',
                        data: [this.valOrcadoAtual],
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Liquidado',
                        data: [this.valLiquidado],
                        backgroundColor: "rgba(153, 102, 255, 0.2)",
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                            display: false
                        }],
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var num = data.datasets[tooltipItem.datasetIndex].data[0].toFixed(2);
                            num = num.replace(".", ",");
                            console.log(String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
                            return 'R$ ' + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        }
                    }
                },
            }
        });
    };
    DespesasPage.prototype.buscarComAnoMesDiferente = function () {
        console.log(this.anoDif + '/' + this.mesDif);
        this.labelMes = this.mesDif;
        this.labelAno = this.anoDif;
        this.consultarDespesas(this.anoDif, this.mesDif);
    };
    DespesasPage.prototype.openPageFuncoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__funcoes_funcoes__["a" /* FuncoesPage */], {
            anoParam: this.labelAno
        });
    };
    DespesasPage.prototype.openPagePesquisa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__despesafiltros_despesafiltros__["a" /* DespesafiltrosPage */]);
    };
    DespesasPage.prototype.consultarDespesas = function (anoParam, mesParam) {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present().then(function () {
            var strParam = 'anoDotacao=' + anoParam + '&mesDotacao=' + mesParam;
            _this.despesasServico.getDespesasProvider(strParam)
                .then(function (res) {
                if (res) {
                    console.log('this.platform.is()' + _this.platform.is('cordova'));
                    if (_this.platform.is('cordova')) {
                        //this.dao.insertRetDespesas(res);
                        console.log('via celular');
                    }
                    else {
                        console.log('via browser');
                    }
                    //if(this.util.primeiraVezNoAPP){
                    //se é a primeira vez no app - a busca é realizada pelo WS
                    _this.objDespesas = res;
                    //}else{
                    //caso contrário realiza consulta no BD.
                    //this.objDespesas = this.dao.readDespesas();
                    //}
                    _this.valOrcadoInicio = _this.objDespesas.lstDespesas[0].valOrcadoInicial;
                    _this.valOrcadoAtual = _this.objDespesas.lstDespesas[0].valOrcadoAtualizado;
                    _this.valLiquidado = _this.objDespesas.lstDespesas[0].valLiquidado;
                    _this.carregarGrafico();
                    loader.dismiss();
                }
            }, function (error) {
                console.log('2', error);
                loader.dismiss();
            });
        });
    };
    return DespesasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
    __metadata("design:type", Object)
], DespesasPage.prototype, "barCanvas", void 0);
DespesasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-despesas',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\despesas\despesas.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Despesas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<h3>Orçado X Realizado</h3>\n    <canvas #barCanvas></canvas>\n\n    <ion-card>\n      <ion-card-header>\n          Pesquisar ano/mês diferente\n      </ion-card-header>\n\n      <ion-card-content style="padding: 0">\n        <ion-grid style="padding: 0">\n\n          <ion-row>\n            <ion-col col-6>\n              <ion-item item-left>\n                <ion-label stacked>Ano:</ion-label>\n                <ion-datetime displayFormat="YYYY" [(ngModel)]="anoDif" placeholder="Selecione" min="2003"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item item-right>\n                <ion-label stacked>Mês:</ion-label>\n                <ion-select [(ngModel)]="mesDif" placeholder="Selecione">\n                  <ion-option>1</ion-option>\n                  <ion-option>2</ion-option>\n                  <ion-option>3</ion-option>\n                  <ion-option>4</ion-option>\n                  <ion-option>5</ion-option>\n                  <ion-option>6</ion-option>\n                  <ion-option>7</ion-option>\n                  <ion-option>8</ion-option>\n                  <ion-option>9</ion-option>\n                  <ion-option>10</ion-option>\n                  <ion-option>11</ion-option>\n                  <ion-option>12</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <button bottom ion-button full small primary color="purple" (click)="buscarComAnoMesDiferente()">Buscar</button>\n\n      </ion-card-content>\n    </ion-card>\n\n  <!--  <button bottom ion-button full small primary color="purple" (click)="openPageFuncoes()">Visualizar por Areas</button>\n    <button bottom ion-button full primary color="headerColor" (click)="openPagePesquisa()">Pesquisa Avançada</button>\n-->\n\n<!--  <ion-card>s\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\despesas\despesas.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_despesas_servico__["a" /* DespesasServico */], __WEBPACK_IMPORTED_MODULE_7__dao_dao__["a" /* DaoPage */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_despesas_servico__["a" /* DespesasServico */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__global_util__["a" /* Utils */],
        __WEBPACK_IMPORTED_MODULE_7__dao_dao__["a" /* DaoPage */]])
], DespesasPage);

//# sourceMappingURL=despesas.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensagens; });
var Mensagens = (function () {
    function Mensagens() {
        this.msgTituloSobreOAPP = 'Sobre o "Acompanha SP"';
        this.msgConteudoSobreOAPP = '<p>O APP <strong>"Acompanha SP"</strong> é um aplicativo com o objetivo de facilitar o entendimento sobre o orçamento público da cidade de são paulo.</p> <p><span><strong> O ACOMPANHA SP</strong></span> permitirá ao cidadão consultar a execução financeira dos contratos do município e a natureza das despesas municipais a eles vinculadas.</p><p> Permitirá ao cidadão consultar credores associados a determinado contrato.</p><p> Também é possível consultar informações de empenhos armazenados em dia. Entre outros. </p>';
        this.msgTituloInfoContrato = 'O que são os contratos?';
        this.msgConteudoInfoContrato = 'Ajuste entre a administração e outro agente em que se institui à obrigação de dar ou fazer mediante retribuição.';
        this.txtToken = 'Bearer 5fcddf929dd5a9876b914487fcf03c98';
        this.txtContentTyoe = 'application/json';
    }
    return Mensagens;
}());

//# sourceMappingURL=mensagens.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_despesas_servico__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_dao__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SetoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SetoresPage = (function () {
    function SetoresPage(navCtrl, despesasServico, platform, dao, navParams) {
        this.navCtrl = navCtrl;
        this.despesasServico = despesasServico;
        this.platform = platform;
        this.dao = dao;
        this.navParams = navParams;
        this.objOrgaos = {};
        this.objDespesas = {};
        this.data = [];
        this.lstDBOrgaos = [];
        this.lstPrefeituras = [];
        if (this.platform.is('cordova')) {
            this.lstHabitantesSubPref = [];
            this.lstHabitantesSubPref = dao.initializeHabitantesPorSubPref();
        }
        else {
            var subPref = {};
            this.lstHabitantesSubPref = [];
            subPref.codigo = '41';
            subPref.nome = 'PERUS';
            subPref.qtdHabitantes = 148226;
            this.lstHabitantesSubPref.push(subPref);
        }
        this.myDate = new Date();
        this.myYear = this.myDate.getFullYear();
        this.myMonth = this.myDate.getMonth() + 1;
        this.consultarOrgaos(this.myYear);
        this.setorSelecionado = navParams.get('setorParam');
        console.log('setorSelecionado>>>>>>' + this.setorSelecionado);
    }
    SetoresPage.prototype.carregaAccordion = function () {
        console.log('this.lstPrefeituras' + this.lstPrefeituras);
        for (var i = 0; i < this.lstPrefeituras.length; i++) {
            this.data.push({
                title: "" + this.lstPrefeituras[i].txtDescricaoOrgao,
                codOrgao: "" + this.lstPrefeituras[i].codOrgao,
                valLiquidado: '',
                qtdHabitantes: '',
                total: '',
                icon: 'md-arrow-dropright',
                showDetails: false
            });
        }
    };
    SetoresPage.prototype.toggleDetails = function (data) {
        this.consultarDespesas(this.myYear, this.myMonth, data.codOrgao, data);
    };
    SetoresPage.prototype.filtrarPrefeituras = function () {
        //this.lstPrefeituras.push('a');
        console.log('>>>>>>' + this.objOrgaos.lstOrgaos.length);
        for (var i = 0; i < this.objOrgaos.lstOrgaos.length; i++) {
            var subPrefeitura = {};
            if ((this.objOrgaos.lstOrgaos[i].txtDescricaoOrgao.toUpperCase()).startsWith("PREFEITURA")) {
                subPrefeitura.txtDescricaoOrgao = (this.objOrgaos.lstOrgaos[i].txtDescricaoOrgao).replace("PREFEITURA REGIONAL", "");
                subPrefeitura.codOrgao = this.objOrgaos.lstOrgaos[i].codOrgao;
                this.lstPrefeituras.push(subPrefeitura);
                //  this.lstPrefeituras.push(this.objOrgaos.lstOrgaos[i].txtDescricaoOrgao);
            }
        }
        console.log(this.lstPrefeituras);
    };
    SetoresPage.prototype.consultarOrgaos = function (anoParam) {
        var _this = this;
        //let loader = this.loadingCtrl.create();
        var strParam = 'anoExercicio=' + anoParam;
        //  loader.present().then(() => {
        this.despesasServico.getOrgaosProvider(strParam)
            .then(function (res) {
            if (res) {
                _this.objOrgaos = res;
                console.log('1', _this.objOrgaos);
                //          loader.dismiss();
                _this.filtrarPrefeituras();
                _this.carregaAccordion();
            }
        }, function (error) {
            console.log('2', error);
            //      loader.dismiss();
            //  })
        });
    };
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
    SetoresPage.prototype.consultarDespesas = function (anoParam, mesParam, orgaoParam, data) {
        //let loader = this.loadingCtrl.create();
        var _this = this;
        var strParam = 'anoDotacao=' + anoParam + '&mesDotacao=' + mesParam + '&codOrgao=' + orgaoParam;
        //  loader.present().then(() => {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'md-arrow-dropright';
        }
        else {
            this.despesasServico.getDespesasProvider(strParam)
                .then(function (res) {
                if (res) {
                    _this.objDespesas = res;
                    console.log('1', _this.objDespesas);
                    // loader.dismiss();
                    _this.valLiquidado = _this.objDespesas.lstDespesas[0].valLiquidado;
                    for (var i = 0; i < _this.data.length; i++) {
                        if (_this.data[i].codOrgao == data.codOrgao) {
                            _this.data[i].valLiquidado = _this.valLiquidado;
                            for (var j = 0; j < _this.lstHabitantesSubPref.length; j++) {
                                if (data.codOrgao == _this.lstHabitantesSubPref[j].codigo) {
                                    _this.data[i].qtdHabitantes = _this.lstHabitantesSubPref[j].qtdHabitantes;
                                }
                            }
                            _this.data[i].total = String(Number(_this.data[i].valLiquidado) / Number(_this.data[i].qtdHabitantes));
                        }
                    }
                    data.showDetails = true;
                    data.icon = 'md-arrow-dropdown';
                }
            }, function (error) {
                console.log('2', error);
                //      loader.dismiss();
                //  })
            });
        }
    };
    return SetoresPage;
}());
SetoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setores',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\setores\setores.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-content >\n  <ion-list>\n    <ion-list-header style="padding: 0">\n      <img src="assets/img/imgSP.jpg"/>\n    </ion-list-header>\n    <ion-item *ngFor="let d of data" (click)="toggleDetails(d);"  ><ion-icon style="padding: 0" color="primary" item-left [name]="d.icon"></ion-icon>\n      {{d.title}}\n      <div *ngIf="d.showDetails"><ion-icon style="padding: 0" color="primary" item-left name="logo-usd"></ion-icon>{{d.valLiquidado}}</div>\n      <div *ngIf="d.showDetails"><ion-icon style="padding: 0" color="primary" item-left name="people"></ion-icon>{{d.qtdHabitantes}}</div>\n      <div *ngIf="d.showDetails"><ion-icon style="padding: 0" color="primary" item-left name="cash"></ion-icon>{{d.total}}</div>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\setores\setores.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_despesas_servico__["a" /* DespesasServico */], __WEBPACK_IMPORTED_MODULE_3__dao_dao__["a" /* DaoPage */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_despesas_servico__["a" /* DespesasServico */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__dao_dao__["a" /* DaoPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SetoresPage);

//# sourceMappingURL=setores.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespesafiltrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DespesafiltrosPage = (function () {
    function DespesafiltrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DespesafiltrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DespesafiltrosPage');
    };
    return DespesafiltrosPage;
}());
DespesafiltrosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-despesafiltros',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\despesafiltros\despesafiltros.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pesquisa Avançada</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Ano:</ion-label>\n          <ion-datetime displayFormat="YYYY" type="text" placeholder="Selecione o ano"></ion-datetime>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label stacked>Mês:</ion-label>\n          <ion-input  type="number" min="1" max="12"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Empresa:</ion-label>\n          <ion-select placeholder="Selecione a empresa"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Orgão</ion-label>\n          <ion-select okText="OK" cancelText="Cancelar" placeholder="Selecione o orgão">\n            <ion-option value="duvida">Dúvida</ion-option>\n            <ion-option value="sugestao">Sugestão</ion-option>\n            <ion-option value="critica">Crítica</ion-option>\n            <ion-option value="elogio">Elogio</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Unidade</ion-label>\n          <ion-select placeholder="Selecione a unidade"></ion-select>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label stacked>Area</ion-label>\n          <ion-select placeholder="Selecione a área"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Sub-Area</ion-label>\n          <ion-select  placeholder="Selecione a sub-area"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Projeto</ion-label>\n          <ion-select  placeholder="Selecione o projeto"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Programa</ion-label>\n          <ion-select placeholder="Selecione o programa"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Categoria</ion-label>\n          <ion-select  placeholder="Selecione a categoria"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Grupo</ion-label>\n          <ion-select  placeholder="Selecione o grupo"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Modalidade</ion-label>\n          <ion-select  placeholder="Selecione a modalidade"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Elemento</ion-label>\n          <ion-select  placeholder="Selecione o elemento"></ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Fonte de Recurso</ion-label>\n          <ion-select  placeholder="Selecione a fonte de recurso"></ion-select>\n        </ion-item>\n      </ion-list>\n      <div padding>\n        <button ion-button block color="purple">Aplicar Filtros</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\despesafiltros\despesafiltros.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], DespesafiltrosPage);

//# sourceMappingURL=despesafiltros.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contratos_contratos__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_credores_credores__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_filtros_modal_filtros__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global_mensagens__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detalhes_contrato_detalhes_contrato__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts_charts_charts__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts_charts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts_charts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_chart_js_dist_Chart_bundle_min_js__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_chart_js_dist_Chart_bundle_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__node_modules_chart_js_dist_Chart_bundle_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_grafico_contratos_grafico_contratos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_form_fale_conosco_form_fale_conosco__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_despesas_despesas__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_funcoes_funcoes__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_despesafiltros_despesafiltros__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_dao_dao__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_setores_setores__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__global_util__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//import '../pages/despesas/jsConvert.js';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contratos_contratos__["a" /* Contratos */],
            __WEBPACK_IMPORTED_MODULE_7__pages_credores_credores__["a" /* Credores */],
            __WEBPACK_IMPORTED_MODULE_8__pages_modal_filtros_modal_filtros__["a" /* ModalFiltros */],
            __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__["a" /* Page2 */],
            __WEBPACK_IMPORTED_MODULE_13__pages_detalhes_contrato_detalhes_contrato__["a" /* DetalhesContrato */],
            __WEBPACK_IMPORTED_MODULE_16__pages_grafico_contratos_grafico_contratos__["a" /* GraficoContratos */],
            __WEBPACK_IMPORTED_MODULE_17__pages_form_fale_conosco_form_fale_conosco__["a" /* FormFaleConoscoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_despesas_despesas__["a" /* DespesasPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_funcoes_funcoes__["a" /* FuncoesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_despesafiltros_despesafiltros__["a" /* DespesafiltrosPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_dao_dao__["a" /* DaoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_setores_setores__["a" /* SetoresPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_14_ng2_charts_charts_charts__["ChartsModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contratos_contratos__["a" /* Contratos */],
            __WEBPACK_IMPORTED_MODULE_7__pages_credores_credores__["a" /* Credores */],
            __WEBPACK_IMPORTED_MODULE_8__pages_modal_filtros_modal_filtros__["a" /* ModalFiltros */],
            __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__["a" /* Page2 */],
            __WEBPACK_IMPORTED_MODULE_13__pages_detalhes_contrato_detalhes_contrato__["a" /* DetalhesContrato */],
            __WEBPACK_IMPORTED_MODULE_16__pages_grafico_contratos_grafico_contratos__["a" /* GraficoContratos */],
            __WEBPACK_IMPORTED_MODULE_17__pages_form_fale_conosco_form_fale_conosco__["a" /* FormFaleConoscoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_despesas_despesas__["a" /* DespesasPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_funcoes_funcoes__["a" /* FuncoesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_despesafiltros_despesafiltros__["a" /* DespesafiltrosPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_dao_dao__["a" /* DaoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_setores_setores__["a" /* SetoresPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__global_mensagens__["a" /* Mensagens */],
            __WEBPACK_IMPORTED_MODULE_23__global_util__["a" /* Utils */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contratos_contratos__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_credores_credores__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_despesas_despesas__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_funcoes_funcoes__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        //array com os nomes dos icones que vão aparecer no menu - url pra ver os icones https://ionicframework.com/docs/ionicons/
        this.icons = ['home', 'paper', 'clipboard', 'trending-down', 'logo-usd', 'trending-up', 'pulse'];
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: this.icons[0], title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: this.icons[1], title: 'Contratos', component: __WEBPACK_IMPORTED_MODULE_5__pages_contratos_contratos__["a" /* Contratos */] },
            //Despesa por area e subarea
            { icon: this.icons[2], title: 'Despesas', component: __WEBPACK_IMPORTED_MODULE_7__pages_despesas_despesas__["a" /* DespesasPage */] },
            { icon: this.icons[3], title: 'Setores', component: __WEBPACK_IMPORTED_MODULE_8__pages_funcoes_funcoes__["a" /* FuncoesPage */] },
            { icon: this.icons[4], title: 'Despesas por orgão', component: __WEBPACK_IMPORTED_MODULE_6__pages_credores_credores__["a" /* Credores */] }
            /*  {icon: this.icons[5], title: 'Despesas por programa', component: Page2 },
              {icon: this.icons[6], title: 'Despesas por grupos', component: Page2 },
              {icon: this.icons[7], title: 'Pesquisa Avançada', component: Page2 }*/
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var db = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */]();
            db.create({
                name: "dbAcompanhaSP.db",
                location: "default"
            }).then(function (db) {
                db.executeSql("CREATE TABLE IF NOT EXISTS tbSubprefeitura (codigo TEXT PRIMARY KEY, nome TEXT, qtdHabitantes INTEGER);", {}).then(function (data) {
                    db.executeSql("SELECT * FROM tbSubprefeitura", []).then(function (data) {
                        if (data.rows.length > 0) {
                            console.log("Tabela já carregada com " + data.rows.length + " registros");
                        }
                        else {
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
                                "INSERT INTO tbSubprefeitura VALUES ('52','VILA MARIANA',294627);", {}).then(function (data) {
                            }, function (error) {
                                console.log('Component Erro 1 ' + error);
                            });
                        }
                    }, function (error) {
                        console.log('Component Erro 2 ' + error);
                    });
                }, function (error) {
                    console.log('Component Erro 3 ' + error);
                });
            }, function (error) {
                console.log('Component Erro 4 ' + error);
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="headerColor">\n      <ion-title >Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="card-background-page">\n    <ion-card>\n      <img src="assets/img/card-saopaolo.png"/>\n    </ion-card>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon color="purple" [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\app\app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_mensagens__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CredoresService = (function () {
    function CredoresService(http, global) {
        this.http = http;
        this.global = global;
        console.log('Hello CredoresService Provider');
        this.urlCredores = 'https://gatewayapi.prodam.sp.gov.br:443/financas/orcamento/sof/v2.1.1/consultarCredoresDeContrato';
    }
    CredoresService.prototype.getCredoresDeContratoProvider = function (codContrato, codigoEmpresa, anoContrato) {
        var _this = this;
        console.log('Chegou no provider --- codigo: ' + codContrato);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlCredores + '?codContrato=' + codContrato + '&codEmpresa=' + codigoEmpresa + '&anoExercicio=' + anoContrato, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    return CredoresService;
}());
CredoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__global_mensagens__["a" /* Mensagens */]])
], CredoresService);

//# sourceMappingURL=credores-service.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bn": 223,
	"./bn.js": 223,
	"./bo": 224,
	"./bo.js": 224,
	"./br": 225,
	"./br.js": 225,
	"./bs": 226,
	"./bs.js": 226,
	"./ca": 227,
	"./ca.js": 227,
	"./cs": 228,
	"./cs.js": 228,
	"./cv": 229,
	"./cv.js": 229,
	"./cy": 230,
	"./cy.js": 230,
	"./da": 231,
	"./da.js": 231,
	"./de": 232,
	"./de-at": 233,
	"./de-at.js": 233,
	"./de-ch": 234,
	"./de-ch.js": 234,
	"./de.js": 232,
	"./dv": 235,
	"./dv.js": 235,
	"./el": 236,
	"./el.js": 236,
	"./en-au": 237,
	"./en-au.js": 237,
	"./en-ca": 238,
	"./en-ca.js": 238,
	"./en-gb": 239,
	"./en-gb.js": 239,
	"./en-ie": 240,
	"./en-ie.js": 240,
	"./en-nz": 241,
	"./en-nz.js": 241,
	"./eo": 242,
	"./eo.js": 242,
	"./es": 243,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es.js": 243,
	"./et": 245,
	"./et.js": 245,
	"./eu": 246,
	"./eu.js": 246,
	"./fa": 247,
	"./fa.js": 247,
	"./fi": 248,
	"./fi.js": 248,
	"./fo": 249,
	"./fo.js": 249,
	"./fr": 250,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 250,
	"./fy": 253,
	"./fy.js": 253,
	"./gd": 254,
	"./gd.js": 254,
	"./gl": 255,
	"./gl.js": 255,
	"./gom-latn": 256,
	"./gom-latn.js": 256,
	"./he": 257,
	"./he.js": 257,
	"./hi": 258,
	"./hi.js": 258,
	"./hr": 259,
	"./hr.js": 259,
	"./hu": 260,
	"./hu.js": 260,
	"./hy-am": 261,
	"./hy-am.js": 261,
	"./id": 262,
	"./id.js": 262,
	"./is": 263,
	"./is.js": 263,
	"./it": 264,
	"./it.js": 264,
	"./ja": 265,
	"./ja.js": 265,
	"./jv": 266,
	"./jv.js": 266,
	"./ka": 267,
	"./ka.js": 267,
	"./kk": 268,
	"./kk.js": 268,
	"./km": 269,
	"./km.js": 269,
	"./kn": 270,
	"./kn.js": 270,
	"./ko": 271,
	"./ko.js": 271,
	"./ky": 272,
	"./ky.js": 272,
	"./lb": 273,
	"./lb.js": 273,
	"./lo": 274,
	"./lo.js": 274,
	"./lt": 275,
	"./lt.js": 275,
	"./lv": 276,
	"./lv.js": 276,
	"./me": 277,
	"./me.js": 277,
	"./mi": 278,
	"./mi.js": 278,
	"./mk": 279,
	"./mk.js": 279,
	"./ml": 280,
	"./ml.js": 280,
	"./mr": 281,
	"./mr.js": 281,
	"./ms": 282,
	"./ms-my": 283,
	"./ms-my.js": 283,
	"./ms.js": 282,
	"./my": 284,
	"./my.js": 284,
	"./nb": 285,
	"./nb.js": 285,
	"./ne": 286,
	"./ne.js": 286,
	"./nl": 287,
	"./nl-be": 288,
	"./nl-be.js": 288,
	"./nl.js": 287,
	"./nn": 289,
	"./nn.js": 289,
	"./pa-in": 290,
	"./pa-in.js": 290,
	"./pl": 291,
	"./pl.js": 291,
	"./pt": 292,
	"./pt-br": 293,
	"./pt-br.js": 293,
	"./pt.js": 292,
	"./ro": 294,
	"./ro.js": 294,
	"./ru": 295,
	"./ru.js": 295,
	"./sd": 296,
	"./sd.js": 296,
	"./se": 297,
	"./se.js": 297,
	"./si": 298,
	"./si.js": 298,
	"./sk": 299,
	"./sk.js": 299,
	"./sl": 300,
	"./sl.js": 300,
	"./sq": 301,
	"./sq.js": 301,
	"./sr": 302,
	"./sr-cyrl": 303,
	"./sr-cyrl.js": 303,
	"./sr.js": 302,
	"./ss": 304,
	"./ss.js": 304,
	"./sv": 305,
	"./sv.js": 305,
	"./sw": 306,
	"./sw.js": 306,
	"./ta": 307,
	"./ta.js": 307,
	"./te": 308,
	"./te.js": 308,
	"./tet": 309,
	"./tet.js": 309,
	"./th": 310,
	"./th.js": 310,
	"./tl-ph": 311,
	"./tl-ph.js": 311,
	"./tlh": 312,
	"./tlh.js": 312,
	"./tr": 313,
	"./tr.js": 313,
	"./tzl": 314,
	"./tzl.js": 314,
	"./tzm": 315,
	"./tzm-latn": 316,
	"./tzm-latn.js": 316,
	"./tzm.js": 315,
	"./uk": 317,
	"./uk.js": 317,
	"./ur": 318,
	"./ur.js": 318,
	"./uz": 319,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 319,
	"./vi": 321,
	"./vi.js": 321,
	"./x-pseudo": 322,
	"./x-pseudo.js": 322,
	"./yo": 323,
	"./yo.js": 323,
	"./zh-cn": 324,
	"./zh-cn.js": 324,
	"./zh-hk": 325,
	"./zh-hk.js": 325,
	"./zh-tw": 326,
	"./zh-tw.js": 326
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 428;

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2 = Page2_1 = (function () {
    function Page2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    Page2.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Page2_1, {
            item: item
        });
    };
    return Page2;
}());
Page2 = Page2_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-page2',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\page2\page2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Page Two</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\page2\page2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Page2);

var Page2_1;
//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFaleConoscoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EmailComposer } from '@ionic-native/email-composer';
var FormFaleConoscoPage = (function () {
    function FormFaleConoscoPage(navCtrl, formBuilder
        //  private emailComposer: EmailComposer
    ) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.myForm = this.createMyForm();
    }
    FormFaleConoscoPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    /*sendEmail(){
      this.emailComposer.isAvailable().then((available: boolean) =>{
       if(available) {
        let email = {
          to: 'samara_slo@hotmail.com',
          cc: 'erika@mustermann.de',
          bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            'file://img/logo.png',
            'res://icon.png',
            'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
            'file://README.pdf'
          ],
          subject: 'Cordova Icons',
          body: 'How are you? Nice greetings from Leipzig',
          isHtml: true
        };
  
        // Send a text message using default options
        this.emailComposer.open(email);
       }
      });
    }*/
    FormFaleConoscoPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            msgForm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            subject: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    return FormFaleConoscoPage;
}());
FormFaleConoscoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-form-fale-conosco',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\form-fale-conosco\form-fale-conosco.html"*/'<ion-header>\n\n  <ion-navbar color="headerColor">\n\n    <ion-title>Fale Conosco</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-icon name="person" color="purple" item-left></ion-icon>\n\n        <ion-label stacked>Nome:</ion-label>\n\n        <ion-input formControlName="name" type="text" placeholder="Nome"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="mail" color="purple" item-left></ion-icon>\n\n        <ion-label stacked>E-mail:</ion-label>\n\n        <ion-input formControlName="email" type="email" placeholder="E-mail"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="calendar" color="purple" item-left></ion-icon>\n\n        <ion-label stacked>Data de Nascimento:</ion-label>\n\n        <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="paper" color="purple" item-left></ion-icon>\n\n        <ion-label stacked>Assunto</ion-label>\n\n        <ion-select formControlName="subject" okText="OK" cancelText="Cancelar" placeholder="Selecione">\n\n          <ion-option value="duvida">Dúvida</ion-option>\n\n          <ion-option value="sugestao">Sugestão</ion-option>\n\n          <ion-option value="critica">Crítica</ion-option>\n\n          <ion-option value="elogio">Elogio</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="create" color="purple" item-left></ion-icon>\n\n        <ion-label stacked>Digite sua mensagem</ion-label>\n\n        <ion-textarea formControlName="msgForm" type="textarea"   placeholder="Digite sua mensagem aqui"></ion-textarea>\n\n      </ion-item>\n\n<!--\n\n      <ion-row radio-group formControlName="gender">\n\n        <ion-item>\n\n          <ion-icon name="woman" item-left></ion-icon>\n\n          <ion-label>Feminino</ion-label>\n\n          <ion-radio value="2"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="man" item-left></ion-icon>\n\n          <ion-label>Masculino</ion-label>\n\n          <ion-radio value="1"></ion-radio>\n\n        </ion-item>\n\n      </ion-row>\n\n-->\n\n    </ion-list>\n\n    <div padding>\n\n      <!--<button ion-button block type="submit" color="purple" [disabled]="!myForm.valid">Enviar</button>-->\n\n      <button ion-button block type="submit" color="purple">Enviar</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\form-fale-conosco\form-fale-conosco.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]
        //  private emailComposer: EmailComposer
    ])
], FormFaleConoscoPage);

//# sourceMappingURL=form-fale-conosco.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContratosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_mensagens__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContratosService = (function () {
    function ContratosService(http, global) {
        this.http = http;
        this.global = global;
        console.log('Hello ContratosService Provider');
        //URL do método do WS - Consulta Contratos
        this.urlContrato = 'https://gatewayapi.prodam.sp.gov.br:443/financas/orcamento/sof/v2.1.1/consultaContrato';
    }
    //chamada para o ws utilizando token de acesso
    ContratosService.prototype.getAllContratosProvider = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlContrato, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    //este método é chamado ao clicar em um contato específico
    //o método a seguir é usado para retornar os detalhes do contrato
    ContratosService.prototype.getThisContratoProvider = function (codContrato) {
        var _this = this;
        console.log('Chegou no provider --- codigo: ' + codContrato);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlContrato + '?codContrato=' + codContrato, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    //o método a seguir é utilizado para retornar os dados filtrados do contrato
    ContratosService.prototype.getContratoComFiltroProvider = function (params) {
        var _this = this;
        console.log('Chegou no provider --- codigo: ' + params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': this.global.txtContentTyoe,
            'Authorization': this.global.txtToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            console.log(_this.urlContrato + '?' + params);
            _this.http.get(_this.urlContrato + '?' + params, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    return ContratosService;
}());
ContratosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__global_mensagens__["a" /* Mensagens */]])
], ContratosService);

//# sourceMappingURL=contratos-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DaoPage = (function () {
    function DaoPage(platform) {
        this.platform = platform;
        this.peopleForm = {};
        this.platform.ready().then(function () {
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
    DaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaoPage');
    };
    /*public insertRetDespesas(retWS) {
  
          this.db.executeSql("INSERT INTO retornoWS (retornoDespesas) VALUES ('" +retWS+"')", []).then((data) => {
              console.log("INSERTED: " + JSON.stringify(data));
          }, (error) => {
              console.log("ERROR: " + JSON.stringify(error.err));
          });
    }*/
    DaoPage.prototype.insertArea = function (retWS) {
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
    };
    DaoPage.prototype.insertOrgaos = function (retWS) {
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
    };
    DaoPage.prototype.readTbArea = function () {
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
    };
    DaoPage.prototype.readDespesas = function () {
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
    };
    DaoPage.prototype.initializeHabitantesPorSubPref = function () {
        var _this = this;
        console.log('Habitantes DAO');
        this.db.executeSql("CREATE TABLE IF NOT EXISTS tbSubprefeitura (codigo TEXT PRIMARY KEY, nome TEXT, qtdHabitantes INTEGER);", {}).then(function (data) {
            _this.db.executeSql("SELECT * FROM tbSubprefeitura", []).then(function (data) {
                var lstHabitantes = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        lstHabitantes.push({ codigo: data.rows.item(i).codigo, nome: data.rows.item(i).nome, qtdHabitantes: data.rows.item(i).qtdHabitantes });
                    }
                    return lstHabitantes;
                }
                else {
                    _this.db.executeSql("INSERT INTO tbSubprefeitura VALUES ('55','JABAQUARA',213862);" +
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
                        "INSERT INTO tbSubprefeitura VALUES ('52','VILA MARIANA',294627);", {}).then(function (data) {
                        _this.db.executeSql("SELECT * FROM tbSubprefeitura", []).then(function (data) {
                            var lstHabitantes = [];
                            if (data.rows.length > 0) {
                                for (var i = 0; i < data.rows.length; i++) {
                                    lstHabitantes.push({ codigo: data.rows.item(i).codigo, nome: data.rows.item(i).nome, qtdHabitantes: data.rows.item(i).qtdHabitantes });
                                }
                            }
                            return lstHabitantes;
                        }, function (error) {
                            console.log('Habitantes DAO Erro 1 ' + error);
                        });
                    }, function (error) {
                        console.log('Habitantes DAO Erro 2 ' + error);
                    });
                }
            }, function (error) {
                console.log('Habitantes DAO Erro 3 ' + error);
            });
        }, function (error) {
            console.log('Habitantes DAO Erro 4 ' + error);
        });
    };
    return DaoPage;
}());
DaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dao',template:/*ion-inline-start:"C:\Users\Samara\tccAcompanhaSP\src\pages\dao\dao.html"*/'<!--\n  Generated template for the DaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DAO</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samara\tccAcompanhaSP\src\pages\dao\dao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], DaoPage);

//# sourceMappingURL=dao.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map