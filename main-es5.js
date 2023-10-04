function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./panel/panel.module": "./src/app/panel/panel.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]
    }, {
      path: 'panel',
      loadChildren: './panel/panel.module#PanelModule'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/components/alert/alert.component */
    "./src/app/shared/components/alert/alert.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-alert");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume/resume.module */
    "./src/app/resume/resume.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _panel_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./panel/panel.module */
    "./src/app/panel/panel.module.ts");
    /* harmony import */


    var _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/components/alert/alert.module */
    "./src/app/shared/components/alert/alert.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _panel_panel_module__WEBPACK_IMPORTED_MODULE_7__["PanelModule"], _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_8__["AlertModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _panel_panel_module__WEBPACK_IMPORTED_MODULE_7__["PanelModule"], _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_8__["AlertModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _panel_panel_module__WEBPACK_IMPORTED_MODULE_7__["PanelModule"], _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_8__["AlertModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/components/login/login.service */
    "./src/app/shared/components/login/login.service.ts");
    /* harmony import */


    var _shared_components_register_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components/register/register.service */
    "./src/app/shared/components/register/register.service.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/register/register.component */
    "./src/app/shared/components/register/register.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(loginService, registerService) {
        _classCallCheck(this, HomeComponent);

        this.loginService = loginService;
        this.registerService = registerService;
      }

      _createClass(HomeComponent, [{
        key: "login",
        value: function login() {
          this.loginService.showLogin();
        }
      }, {
        key: "register",
        value: function register() {
          this.registerService.showWindow();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_register_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      decls: 32,
      vars: 0,
      consts: [[1, "panel"], [1, "content"], ["src", "/assets/images/banner-home-curriculos.png", "alt", "Meus Curr\xEDculos"], [1, "title"], [1, "bt", "primary", 3, "click"], [1, "box"], ["src", "/assets/images/img-home-box-cadastro.png", "alt", "Cadastre seus curr\xEDculo"], ["src", "/assets/images/img-home-box-modelos.png", "alt", "Escolha um modelo"], ["src", "/assets/images/img-home-box-versoes.png", "alt", "Crie vers\xF5es"], ["src", "/assets/images/img-home-box-pdf.png", "alt", "Baixe em pdf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meus Curr\xEDculos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cadastre seu curr\xEDculo e crie modelos profissionais e criativos. Tenha seu curr\xEDculo online ou se preferir fa\xE7a o download para impress\xE3o. Aumente suas chances no mercado de trabalho e utilize este site de forma totalmente gratuita.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cadastre os dados do seu curr\xEDculo, informa\xE7\xF5es pessoais, habilidades, treinamentos e experi\xEAncia professional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Escolha um dos modelos de layout e um estilo de cor da sua prefer\xEAncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tenha mais de uma vers\xE3o do seu curr\xEDculo, fazendo altera\xE7\xF5es do objetivo, destacando cursos e habilidades aumentando suas chances no mercado de trabalho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gere PDF para ter seu curr\xEDculo impresso ou compartilhe como preferir e tenha tamb\xE9m seu curr\xEDculo online para desktop e celular, sempre atualizado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_27_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cadastre-se");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  background: url(/assets/images/bg-home-header.png) no-repeat 0 top;\n  background-size: 100%;\n  color: #707070;\n  text-align: center;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: block;\n  width: 500px;\n  text-align: center;\n  margin: auto;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #0D81FA;\n  text-transform: uppercase;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  right: 30px;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 240px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 145px;\n}\n[_nghost-%COMP%]   .bt[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff;\n  text-transform: uppercase;\n  padding: 10px 30px;\n  border-radius: 25px;\n  box-shadow: 3px 5px 3px #70707098;\n  cursor: pointer;\n  transition: all ease-in-out 200ms;\n}\n[_nghost-%COMP%]   .bt.primary[_ngcontent-%COMP%] {\n  border: 3px solid #0D81FA;\n  color: #0D81FA;\n}\n[_nghost-%COMP%]   .bt[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05, 1.05);\n  background: #efefef;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_components_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _shared_components_register_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/components/footer/footer.module */
    "./src/app/shared/components/footer/footer.module.ts");
    /* harmony import */


    var _shared_components_login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/login/login.module */
    "./src/app/shared/components/login/login.module.ts");
    /* harmony import */


    var _shared_components_register_register_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/register/register.module */
    "./src/app/shared/components/register/register.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"], _shared_components_login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"], _shared_components_register_register_module__WEBPACK_IMPORTED_MODULE_5__["RegisterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"], _shared_components_login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"], _shared_components_register_register_module__WEBPACK_IMPORTED_MODULE_5__["RegisterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"], _shared_components_login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"], _shared_components_register_register_module__WEBPACK_IMPORTED_MODULE_5__["RegisterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/panel-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/panel/panel-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PanelRoutingModule */

  /***/
  function srcAppPanelPanelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelRoutingModule", function () {
      return PanelRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _resumes_resumes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resumes/resumes.component */
    "./src/app/panel/resumes/resumes.component.ts");
    /* harmony import */


    var _panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./panel.component */
    "./src/app/panel/panel.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/panel/profile/profile.component.ts");
    /* harmony import */


    var _resume_form_resume_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume-form/resume-form.component */
    "./src/app/panel/resume-form/resume-form.component.ts");

    var routes = [{
      path: '',
      component: _panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'resumes'
      }, {
        path: 'resumes',
        component: _resumes_resumes_component__WEBPACK_IMPORTED_MODULE_2__["ResumesComponent"]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
      }, {
        path: 'resume-form',
        component: _resume_form_resume_form_component__WEBPACK_IMPORTED_MODULE_5__["ResumeFormComponent"]
      }, {
        path: 'resume-form/:id',
        component: _resume_form_resume_form_component__WEBPACK_IMPORTED_MODULE_5__["ResumeFormComponent"]
      }]
    }];

    var PanelRoutingModule = function PanelRoutingModule() {
      _classCallCheck(this, PanelRoutingModule);
    };

    PanelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelRoutingModule
    });
    PanelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PanelRoutingModule_Factory(t) {
        return new (t || PanelRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PanelRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/panel.component.ts":
  /*!******************************************!*\
    !*** ./src/app/panel/panel.component.ts ***!
    \******************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcAppPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var PanelComponent = function PanelComponent() {
      _classCallCheck(this, PanelComponent);
    };

    PanelComponent.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)();
    };

    PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [[1, "panel"]],
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './panel.component.html',
          styleUrls: ['./panel.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/panel.module.ts":
  /*!***************************************!*\
    !*** ./src/app/panel/panel.module.ts ***!
    \***************************************/

  /*! exports provided: PanelModule */

  /***/
  function srcAppPanelPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelModule", function () {
      return PanelModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./panel.component */
    "./src/app/panel/panel.component.ts");
    /* harmony import */


    var _panel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./panel-routing.module */
    "./src/app/panel/panel-routing.module.ts");
    /* harmony import */


    var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/header/header.module */
    "./src/app/shared/components/header/header.module.ts");
    /* harmony import */


    var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/footer/footer.module */
    "./src/app/shared/components/footer/footer.module.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/panel/profile/profile.module.ts");
    /* harmony import */


    var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/interceptors/auth.interceptor */
    "./src/app/shared/interceptors/auth.interceptor.ts");
    /* harmony import */


    var _resumes_resumes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./resumes/resumes.module */
    "./src/app/panel/resumes/resumes.module.ts");
    /* harmony import */


    var _resume_form_resume_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./resume-form/resume-form.module */
    "./src/app/panel/resume-form/resume-form.module.ts");

    var PanelModule = function PanelModule() {
      _classCallCheck(this, PanelModule);
    };

    PanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelModule
    });
    PanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PanelModule_Factory(t) {
        return new (t || PanelModule)();
      },
      providers: [// Intercepta as conexões para adicionar o token no cabeçalho
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelRoutingModule"], _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"], _resumes_resumes_module__WEBPACK_IMPORTED_MODULE_8__["ResumesModule"], _resume_form_resume_form_module__WEBPACK_IMPORTED_MODULE_9__["ResumeFormModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PanelModule, {
        declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]],
        imports: [_panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelRoutingModule"], _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"], _resumes_resumes_module__WEBPACK_IMPORTED_MODULE_8__["ResumesModule"], _resume_form_resume_form_module__WEBPACK_IMPORTED_MODULE_9__["ResumeFormModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]],
          imports: [_panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelRoutingModule"], _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"], _resumes_resumes_module__WEBPACK_IMPORTED_MODULE_8__["ResumesModule"], _resume_form_resume_form_module__WEBPACK_IMPORTED_MODULE_9__["ResumeFormModule"]],
          providers: [// Intercepta as conexões para adicionar o token no cabeçalho
          {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/panel/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPanelProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/components/alert/alert.service */
    "./src/app/shared/components/alert/alert.service.ts");
    /* harmony import */


    var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/users.service */
    "./src/app/shared/services/users.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(formBuilder, alertService, usersService) {
        _classCallCheck(this, ProfileComponent);

        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.usersService = usersService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.loadData();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.formProfile = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['********', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this = this;

          this.usersService.getData().subscribe(function (response) {
            var fullName = response.fullName,
                email = response.email;

            _this.formProfile.setValue({
              fullName: fullName,
              email: email,
              password: '********'
            });
          });
        }
      }, {
        key: "btSave",
        value: function btSave() {
          var _this2 = this;

          if (this.formProfile.valid) {
            var _this$formProfile$val = this.formProfile.value,
                fullName = _this$formProfile$val.fullName,
                email = _this$formProfile$val.email,
                password = _this$formProfile$val.password;
            this.usersService.update(fullName, email).subscribe(function (response) {
              if (response.status === 'success') {
                _this2.alertService.msgSuccess('Dados salvos com sucesso!');
              }
            }, function (error) {
              if (error.status === 400) {
                var errorMessage = Object.values(error.error.message[0].constraints)[0];

                _this2.alertService.msgError(errorMessage);
              } else if (error.status === 403) {
                _this2.alertService.msgError(error.error.message);
              } else {
                _this2.alertService.msgError('Ocorreu um erro, tente novamente!');
              }
            });
          } else {
            this.alertService.msgError('Verifique se todos os campos foram preenchidos corretamente!');
          }
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["ng-component"]],
      decls: 12,
      vars: 1,
      consts: [[1, "panel-content"], [1, "page-title"], [1, "page-box"], [3, "formGroup"], ["type", "text", "name", "fullName", "id", "fullName", "placeholder", "Nome Completo", "formControlName", "fullName"], ["type", "email", "name", "email", "id", "email", "placeholder", "E-mail", "formControlName", "email"], ["type", "password", "name", "password", "id", "password", "placeholder", "Senha", "formControlName", "password"], [1, "buttons"], [1, "bt", "primary", 3, "click"], [1, "bg"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meus Dados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_9_listener() {
            return ctx.btSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formProfile);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  width: 500px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -25px;\n  right: 125px;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 160px;\n  background: #FFF url(/assets/images/background-cv.png) no-repeat right center;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/panel/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppPanelProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/panel/profile/profile.component.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/resume-form/resume-form.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/panel/resume-form/resume-form.component.ts ***!
    \************************************************************/

  /*! exports provided: ResumeFormComponent */

  /***/
  function srcAppPanelResumeFormResumeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeFormComponent", function () {
      return ResumeFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/resumes.service */
    "./src/app/shared/services/resumes.service.ts");
    /* harmony import */


    var _shared_components_box_content_box_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/box-content/box-content.component */
    "./src/app/shared/components/box-content/box-content.component.ts");
    /* harmony import */


    var _shared_components_form_input_field_input_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/form/input-field/input-field.component */
    "./src/app/shared/components/form/input-field/input-field.component.ts");
    /* harmony import */


    var _shared_components_form_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/form/select/select.component */
    "./src/app/shared/components/form/select/select.component.ts");
    /* harmony import */


    var _shared_components_form_textarea_field_textarea_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/form/textarea-field/textarea-field.component */
    "./src/app/shared/components/form/textarea-field/textarea-field.component.ts");

    function ResumeFormComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input-field", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-input-field", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeFormComponent_div_45_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.addSkill(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skillForm_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", skillForm_r1);
      }
    }

    var ResumeFormComponent = /*#__PURE__*/function () {
      function ResumeFormComponent(formBuilder, location, resumesService, route) {
        _classCallCheck(this, ResumeFormComponent);

        this.formBuilder = formBuilder;
        this.location = location;
        this.resumesService = resumesService;
        this.route = route;
        this.skillType = '';
      }

      _createClass(ResumeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.modelOptions = [{
            key: 'modern',
            value: 'Moderno'
          }, {
            key: 'classic',
            value: 'Classico'
          }];
          this.styleOptions = [{
            key: 'gray',
            value: 'Cinza'
          }, {
            key: 'brown',
            value: 'Marrom'
          }, {
            key: 'pink',
            value: 'Rosa'
          }];
          this.route.params.subscribe(function (params) {
            return _this3.resumeId = params['id'];
          });
          this.initForm();
          if (this.resumeId) this.loadData();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.formResume = this.formBuilder.group({
            name: [''],
            description: [''],
            domain: [''],
            model: ['modern'],
            style: ['brown'],
            resume: this.formBuilder.group({
              name: [''],
              occupation: [''],
              dateOfBirth: [''],
              email: [''],
              mobile: [''],
              mobile2: [''],
              address: [''],
              aboutMe: [''],
              professionalGoals: [''],
              skills: this.formBuilder.array([])
            })
          });
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this4 = this;

          this.resumesService.getOne(this.resumeId).subscribe(function (response) {
            //const {_id, userId, __v, ...resume} = response
            //this.formResume.setValue(resume)
            var dateOfBirth = new Date(response['resume']['dateOfBirth']);
            var dateOfBirthStr = ('0' + dateOfBirth.getDate()).slice(-2) + '/' + ('0' + (dateOfBirth.getMonth() + 1)).slice(-2) + '/' + dateOfBirth.getFullYear();

            _this4.formResume.setValue({
              name: response['name'],
              description: response['description'],
              domain: response['domain'] || '',
              model: response['model'],
              style: response['style'],
              resume: {
                name: response['resume']['name'],
                occupation: response['resume']['occupation'],
                dateOfBirth: response['resume']['dateOfBirth'],
                email: response['resume']['email'] || '',
                mobile: response['resume']['mobile'] || '',
                mobile2: response['resume']['mobile2'] || '',
                address: response['resume']['address'] || '',
                aboutMe: response['resume']['aboutMe'],
                professionalGoals: response['resume']['professionalGoals'],
                skills: []
              }
            });

            var _iterator = _createForOfIteratorHelper(response['resume']['skills']),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var skill = _step.value;
                _this4.skillType = skill['skillType']; //this.addSkillType()
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }, {
        key: "addSkillGroup",
        value: function addSkillGroup() {
          var formSkills = this.formResume.get('resume.skills');
          formSkills.push(this.formBuilder.group({
            skillType: [''],
            skillNames: [[]]
          }));
        }
      }, {
        key: "addSkill",
        value: function addSkill(skillForm) {
          console.log('addSkill', skillForm);
        }
      }, {
        key: "btCancel",
        value: function btCancel() {
          this.location.back();
        }
      }, {
        key: "btSave",
        value: function btSave() {
          var _this5 = this;

          var resume = this.formResume.value;
          var dateOfBirthStr = this.formResume.get('resume.dateOfBirth').value;
          console.log(dateOfBirthStr, +dateOfBirthStr);
          console.log(this.formResume.get('resume.dateOfBirth'));
          var dateOfBirth = new Date(+dateOfBirthStr.substr(4, 4), +dateOfBirthStr.substr(2, 2) - 1, +dateOfBirthStr.substr(0, 2));
          console.log(dateOfBirth); //resume['resume']['dateOfBirth'] = dateOfBirth 
          //return console.log(resume)

          console.log(resume); //return

          if (this.resumeId) {
            this.resumesService.update(this.resumeId, resume).subscribe(function (response) {
              return response['status'] === 'success' && _this5.location.back();
            });
          } else {
            this.resumesService.create(resume).subscribe(function (response) {
              return response['status'] === 'success' && _this5.location.back();
            });
          }
        }
      }]);

      return ResumeFormComponent;
    }();

    ResumeFormComponent.ɵfac = function ResumeFormComponent_Factory(t) {
      return new (t || ResumeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_4__["ResumesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ResumeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeFormComponent,
      selectors: [["ng-component"]],
      decls: 51,
      vars: 4,
      consts: [[1, "panel-content"], [1, "page-title"], [3, "formGroup"], [1, "sub-title"], [1, "form-line"], [1, "form-col"], ["label", "Nome do Curr\xEDculo", "placeholder", "Ex.: Curr\xEDculo padr\xE3o", "formControlName", "name"], ["label", "Dom\xEDnio", "placeholder", "Ex.: seumone.com.br", "formControlName", "domain"], ["label", "Modelo", "formControlName", "model", 3, "options"], ["label", "Estilo", "formControlName", "style", 3, "options"], ["label", "Descri\xE7\xE3o", "formControlName", "description", "placeholder", "Informa\xE7\xF5es sobre esta vers\xE3o do curr\xEDculo. Esse texto apenas ficar\xE1 vis\xEDvel em seu painel, mas n\xE3o ir\xE1 aparecer dentro do curr\xEDculo"], ["formGroupName", "resume"], ["label", "Nome Completo", "formControlName", "name"], ["label", "Ocupa\xE7\xE3o / Cargo", "formControlName", "occupation"], ["label", "Data de Nascimento", "formControlName", "dateOfBirth", "placeHoder", "Digite no formato dd/mm/aaaa"], ["label", "E-mail", "formControlName", "email"], ["label", "Telefone", "formControlName", "mobile"], ["label", "Telefone 2"], [1, "form-col", "photo"], [1, "photo"], ["label", "Endere\xE7o"], ["label", "Sobre mim", "formControlName", "aboutMe", "placeholder", "Escreva um pouco sobre voc\xEA, sua experi\xEAncia profissional e ou acad\xEAmica, seus hobbies e o que mais quiser apresentar no seu curr\xEDculo, essa \xE9 sua apresenta\xE7\xE3o no curr\xEDculo e muito importante", "rows", "10"], ["label", "Objetivo Profissional", "formControlName", "professionalGoals", "placeholder", "Fale sobre o seu objetivo atual, o que est\xE1 procurando e seus planos para o futuro", "rows", "10"], [1, "sub-title-plus"], [1, "bt-add-box", 3, "click"], ["class", "box-group", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "buttons"], [1, "bt", "secondary", 3, "click"], [1, "bt", "primary", 3, "click"], [1, "box-group", 3, "formGroup"], ["label", "Tipo de Qualifica\xE7\xE3o", "formControlName", "skillType"], ["label", "Habilidade / Ferramenta"], ["skill", ""], [1, "bt-add-item", 3, "click"], [1, "bt-remove-box"]],
      template: function ResumeFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cadastro de Curr\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-box-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dados da Aplica\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-input-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-input-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-textarea-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Informa\xE7\xF5es de Contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-input-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-input-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-input-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-input-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-input-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-input-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-input-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Apresenta\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-textarea-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-textarea-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Qualifica\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeFormComponent_Template_div_click_44_listener() {
            return ctx.addSkillGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ResumeFormComponent_div_45_Template, 10, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeFormComponent_Template_button_click_47_listener() {
            return ctx.btCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeFormComponent_Template_button_click_49_listener() {
            return ctx.btSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formResume);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.modelOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.styleOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formResume.get("resume.skills")["controls"]);
        }
      },
      directives: [_shared_components_box_content_box_content_component__WEBPACK_IMPORTED_MODULE_5__["BoxContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_form_input_field_input_field_component__WEBPACK_IMPORTED_MODULE_6__["InputFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_components_form_select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], _shared_components_form_textarea_field_textarea_field_component__WEBPACK_IMPORTED_MODULE_8__["TextareaFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  width: 900px;\n  padding: 10px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #0D81FA;\n  font-size: 28px;\n  border-bottom: 2px solid #0D81FA;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sub-title-plus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid #0D81FA;\n  margin-bottom: 10px;\n  position: relative;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sub-title-plus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0D81FA;\n  font-size: 28px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sub-title-plus[_ngcontent-%COMP%]   .bt-add-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #0D81FA;\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  top: 16px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-col.photo[_ngcontent-%COMP%] {\n  width: 300px;\n  flex: none;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-col.photo[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  height: 100%;\n  background: url(\"/assets/images/icon-photo.png\") no-repeat center;\n  border: 1px solid #707070;\n  box-shadow: 3px 5px 3px #70707098;\n  border-radius: 8px;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .bt-square[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: url(\"/assets/images/icon-add.png\") no-repeat center;\n  background-size: 24px;\n  border: 1px solid #707070;\n  box-shadow: 3px 5px 3px #70707098;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  margin-left: -10px;\n  align-self: flex-end;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .bt-add-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .bt-remove-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #707070;\n  box-shadow: 3px 5px 3px #70707098;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: -25px;\n  right: 125px;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './resume-form.component.html',
          styleUrls: ['./resume-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: src_app_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_4__["ResumesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/resume-form/resume-form.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/panel/resume-form/resume-form.module.ts ***!
    \*********************************************************/

  /*! exports provided: ResumeFormModule */

  /***/
  function srcAppPanelResumeFormResumeFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeFormModule", function () {
      return ResumeFormModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _resume_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resume-form.component */
    "./src/app/panel/resume-form/resume-form.component.ts");
    /* harmony import */


    var src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/box-content/box-content.module */
    "./src/app/shared/components/box-content/box-content.module.ts");
    /* harmony import */


    var src_app_shared_components_form_select_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/form/select/select.module */
    "./src/app/shared/components/form/select/select.module.ts");
    /* harmony import */


    var src_app_shared_components_form_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/form/form.module */
    "./src/app/shared/components/form/form.module.ts");

    var ResumeFormModule = function ResumeFormModule() {
      _classCallCheck(this, ResumeFormModule);
    };

    ResumeFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResumeFormModule
    });
    ResumeFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResumeFormModule_Factory(t) {
        return new (t || ResumeFormModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_5__["BoxContentModule"], src_app_shared_components_form_select_select_module__WEBPACK_IMPORTED_MODULE_6__["SelectModule"], src_app_shared_components_form_form_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeFormModule, {
        declarations: [_resume_form_component__WEBPACK_IMPORTED_MODULE_4__["ResumeFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_5__["BoxContentModule"], src_app_shared_components_form_select_select_module__WEBPACK_IMPORTED_MODULE_6__["SelectModule"], src_app_shared_components_form_form_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_resume_form_component__WEBPACK_IMPORTED_MODULE_4__["ResumeFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_resume_form_component__WEBPACK_IMPORTED_MODULE_4__["ResumeFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_5__["BoxContentModule"], src_app_shared_components_form_select_select_module__WEBPACK_IMPORTED_MODULE_6__["SelectModule"], src_app_shared_components_form_form_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_resume_form_component__WEBPACK_IMPORTED_MODULE_4__["ResumeFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/resumes/resumes.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/panel/resumes/resumes.component.ts ***!
    \****************************************************/

  /*! exports provided: ResumesComponent */

  /***/
  function srcAppPanelResumesResumesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumesComponent", function () {
      return ResumesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/resumes.service */
    "./src/app/shared/services/resumes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResumesComponent_ng_container_6_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dom\xEDnio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var resume_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resume_r3.domain);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/panel/resume-form", a1];
    };

    function ResumesComponent_ng_container_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nome do Curr\xEDculo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResumesComponent_ng_container_6_div_1_div_11_Template, 5, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumesComponent_ng_container_6_div_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var resume_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.btDelete(resume_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Excluir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var resume_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resume_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resume_r3.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resume_r3.domain);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, resume_r3._id));
      }
    }

    function ResumesComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResumesComponent_ng_container_6_div_1_Template, 19, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var resumes_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", resumes_r1);
      }
    }

    var ResumesComponent = /*#__PURE__*/function () {
      function ResumesComponent(resumesService) {
        _classCallCheck(this, ResumesComponent);

        this.resumesService = resumesService;
      }

      _createClass(ResumesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getResumes();
        }
      }, {
        key: "getResumes",
        value: function getResumes() {
          this.resumes$ = this.resumesService.getAll();
        }
      }, {
        key: "btDelete",
        value: function btDelete(resumeId) {
          var _this6 = this;

          this.resumesService["delete"](resumeId).subscribe(function (response) {
            return _this6.getResumes();
          });
        }
      }]);

      return ResumesComponent;
    }();

    ResumesComponent.ɵfac = function ResumesComponent_Factory(t) {
      return new (t || ResumesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_1__["ResumesService"]));
    };

    ResumesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumesComponent,
      selectors: [["ng-component"]],
      decls: 8,
      vars: 3,
      consts: [[1, "panel-content"], [1, "header"], [1, "page-title"], ["routerLink", "/panel/resume-form", 1, "bt", "primary"], [4, "ngIf"], ["class", "page-box", 4, "ngFor", "ngForOf"], [1, "page-box"], [1, "field"], ["class", "field", 4, "ngIf"], [1, "bt-icon", "share"], [1, "bt-icon", "preview"], [1, "buttons"], [1, "bt", "secondary", 3, "routerLink"], [1, "bt", "primary", 3, "click"]],
      template: function ResumesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Meus Curr\xEDculos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Criar Novo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResumesComponent_ng_container_6_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.resumes$));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  width: 500px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%] {\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #0D81FA;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .bt-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid #0D81FA;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .bt-icon.share[_ngcontent-%COMP%] {\n  background: #fff url(\"/assets/images/icon-share.png\") no-repeat center;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .bt-icon.preview[_ngcontent-%COMP%] {\n  background: #fff url(\"/assets/images/icon-preview.png\") no-repeat center;\n  top: 70px;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: -25px;\n  right: 125px;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './resumes.component.html',
          styleUrls: ['./resumes.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_1__["ResumesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/resumes/resumes.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/panel/resumes/resumes.module.ts ***!
    \*************************************************/

  /*! exports provided: ResumesModule */

  /***/
  function srcAppPanelResumesResumesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumesModule", function () {
      return ResumesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _resumes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resumes.component */
    "./src/app/panel/resumes/resumes.component.ts");
    /* harmony import */


    var src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/box-content/box-content.module */
    "./src/app/shared/components/box-content/box-content.module.ts");

    var ResumesModule = function ResumesModule() {
      _classCallCheck(this, ResumesModule);
    };

    ResumesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResumesModule
    });
    ResumesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResumesModule_Factory(t) {
        return new (t || ResumesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_4__["BoxContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumesModule, {
        declarations: [_resumes_component__WEBPACK_IMPORTED_MODULE_3__["ResumesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_4__["BoxContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_resumes_component__WEBPACK_IMPORTED_MODULE_3__["ResumesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_components_box_content_box_content_module__WEBPACK_IMPORTED_MODULE_4__["BoxContentModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/course-group/course-group.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/resume/course-group/course-group.component.ts ***!
    \***************************************************************/

  /*! exports provided: CourseGroupComponent */

  /***/
  function srcAppResumeCourseGroupCourseGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseGroupComponent", function () {
      return CourseGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CourseGroupComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data);
      }
    }

    var CourseGroupComponent = /*#__PURE__*/function () {
      function CourseGroupComponent() {
        _classCallCheck(this, CourseGroupComponent);

        this.show = true;
      }

      _createClass(CourseGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CourseGroupComponent;
    }();

    CourseGroupComponent.ɵfac = function CourseGroupComponent_Factory(t) {
      return new (t || CourseGroupComponent)();
    };

    CourseGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseGroupComponent,
      selectors: [["app-course-group"]],
      inputs: {
        title: "title",
        data: "data",
        show: "show"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function CourseGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CourseGroupComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #EF8A40;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-group',
          templateUrl: './course-group.component.html',
          styleUrls: ['./course-group.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume/data-group/data-group.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/resume/data-group/data-group.component.ts ***!
    \***********************************************************/

  /*! exports provided: DataGroupComponent */

  /***/
  function srcAppResumeDataGroupDataGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataGroupComponent", function () {
      return DataGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DataGroupComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r2);
      }
    }

    function DataGroupComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function DataGroupComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataGroupComponent_ng_container_6_ng_container_2_Template, 2, 0, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var word_r3 = ctx.$implicit;
        var last_r4 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r4);
      }
    }

    var DataGroupComponent = /*#__PURE__*/function () {
      function DataGroupComponent() {
        _classCallCheck(this, DataGroupComponent);
      }

      _createClass(DataGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DataGroupComponent;
    }();

    DataGroupComponent.ɵfac = function DataGroupComponent_Factory(t) {
      return new (t || DataGroupComponent)();
    };

    DataGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DataGroupComponent,
      selectors: [["app-data-group"]],
      inputs: {
        title: "title",
        data: "data",
        dataLines: "dataLines",
        dataWords: "dataWords"
      },
      decls: 7,
      vars: 4,
      consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function DataGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataGroupComponent_span_4_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataGroupComponent_ng_container_6_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataLines);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataWords);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #EF8A40;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #FFFFFF;\n  -webkit-font-smoothing: antialiased;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 0.9em;\n  margin-top: 4px;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-data-group',
          templateUrl: './data-group.component.html',
          styleUrls: ['./data-group.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataLines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataWords: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume/experience-group/experience-group.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/resume/experience-group/experience-group.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ExperienceGroupComponent */

  /***/
  function srcAppResumeExperienceGroupExperienceGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceGroupComponent", function () {
      return ExperienceGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExperienceGroupComponent_div_0_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "at\xE9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dateTo);
      }
    }

    function ExperienceGroupComponent_div_0_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
      }

      if (rf & 2) {
        var line_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", line_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ExperienceGroupComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceGroupComponent_div_0_ng_container_4_Template, 5, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceGroupComponent_div_0_span_11_Template, 1, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dateFrom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dateTo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataLines);
      }
    }

    var ExperienceGroupComponent = /*#__PURE__*/function () {
      function ExperienceGroupComponent() {
        _classCallCheck(this, ExperienceGroupComponent);

        this.show = true;
      }

      _createClass(ExperienceGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceGroupComponent;
    }();

    ExperienceGroupComponent.ɵfac = function ExperienceGroupComponent_Factory(t) {
      return new (t || ExperienceGroupComponent)();
    };

    ExperienceGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceGroupComponent,
      selectors: [["app-experience-group"]],
      inputs: {
        dateFrom: "dateFrom",
        dateTo: "dateTo",
        title: "title",
        subTitle: "subTitle",
        data: "data",
        dataLines: "dataLines",
        show: "show"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "row-flex", 4, "ngIf"], [1, "row-flex"], [1, "col", "left"], [4, "ngIf"], [1, "col", "right"], [1, "title"], [1, "sub-title"], [3, "innerHTML"], [3, "innerHTML", 4, "ngFor", "ngForOf"]],
      template: function ExperienceGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceGroupComponent_div_0_Template, 12, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show === true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .row-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 10px;\n  align-self: center;\n}\n[_nghost-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col.right[_ngcontent-%COMP%] {\n  flex: 1;\n  border-left: 1px solid #644B39;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #EF8A40;\n}\n[_nghost-%COMP%]   label.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   label.sub-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience-group',
          templateUrl: './experience-group.component.html',
          styleUrls: ['./experience-group.component.scss']
        }]
      }], function () {
        return [];
      }, {
        dateFrom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dateTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataLines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/resume.service */
    "./src/app/shared/services/resume.service.ts");
    /* harmony import */


    var _shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/resumes.service */
    "./src/app/shared/services/resumes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _data_group_data_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data-group/data-group.component */
    "./src/app/resume/data-group/data-group.component.ts");
    /* harmony import */


    var _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./course-group/course-group.component */
    "./src/app/resume/course-group/course-group.component.ts");
    /* harmony import */


    var _experience_group_experience_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./experience-group/experience-group.component */
    "./src/app/resume/experience-group/experience-group.component.ts");

    function ResumeComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.resume.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3, a4) {
      return [a0, a1, a2, a3, a4];
    };

    function ResumeComponent_div_0_app_data_group_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-group", 22);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](1, _c0, ctx_r2.resume.mobile, ctx_r2.resume.mobile2, ctx_r2.resume.email, ctx_r2.resume.linkedIn, ctx_r2.resume.github));
      }
    }

    function ResumeComponent_div_0_app_data_group_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-group", 23);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataLines", ctx_r3.resume.address);
      }
    }

    function ResumeComponent_div_0_app_data_group_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-group", 24);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r4.resume.dateOfBirth);
      }
    }

    function ResumeComponent_div_0_div_12_app_data_group_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-group", 27);
      }

      if (rf & 2) {
        var skill_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", skill_r20.type)("dataWords", skill_r20.skills);
      }
    }

    function ResumeComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Qualifica\xE7\xF5es");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResumeComponent_div_0_div_12_app_data_group_3_Template, 1, 2, "app-data-group", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.resume.skills);
      }
    }

    function ResumeComponent_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sobre mim");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.resume.aboutMe);
      }
    }

    function ResumeComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Objetivo Profissional");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.resume.professionalGoals);
      }
    }

    function ResumeComponent_div_0_h3_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forma\xE7\xE3o Acad\xEAmica");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResumeComponent_div_0_app_course_group_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course-group", 29);
      }

      if (rf & 2) {
        var course_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", course_r21.dateConclusion, " - ", course_r21.institution, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", course_r21.course);
      }
    }

    function ResumeComponent_div_0_h3_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Certifica\xE7\xF5es atuais");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResumeComponent_div_0_app_course_group_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course-group", 29);
      }

      if (rf & 2) {
        var course_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", course_r22.dateConclusion, " - ", course_r22.institution, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", course_r22.course);
      }
    }

    function ResumeComponent_div_0_h3_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Outras certifica\xE7\xF5es");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResumeComponent_div_0_app_course_group_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course-group", 30);
      }

      if (rf & 2) {
        var course_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", course_r23.dateConclusion, " - ", course_r23.institution, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", course_r23.course)("show", course_r23.show);
      }
    }

    function ResumeComponent_div_0_h3_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forma\xE7\xE3o T\xE9cnica");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResumeComponent_div_0_app_course_group_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course-group", 29);
      }

      if (rf & 2) {
        var course_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", course_r24.dateConclusion, " - ", course_r24.institution, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", course_r24.course);
      }
    }

    function ResumeComponent_div_0_div_26_app_course_group_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course-group", 30);
      }

      if (rf & 2) {
        var course_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("title", "", course_r26.dateConclusion, " - ", course_r26.institution, " (", course_r26.workload, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", course_r26.course)("show", course_r26.show);
      }
    }

    function ResumeComponent_div_0_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forma\xE7\xE3o Extra Curricular");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResumeComponent_div_0_div_26_app_course_group_3_Template, 1, 5, "app-course-group", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.resume.extraCourses);
      }
    }

    function ResumeComponent_div_0_h3_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Experi\xEAncia Profissional");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResumeComponent_div_0_app_experience_group_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-group", 31);
      }

      if (rf & 2) {
        var job_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dateFrom", job_r27.dateFrom)("dateTo", job_r27.dateTo)("title", job_r27.company)("subTitle", job_r27.position)("dataLines", job_r27.description)("show", job_r27.show);
      }
    }

    function ResumeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumeComponent_div_0_div_8_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumeComponent_div_0_app_data_group_9_Template, 1, 7, "app-data-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResumeComponent_div_0_app_data_group_10_Template, 1, 1, "app-data-group", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResumeComponent_div_0_app_data_group_11_Template, 1, 1, "app-data-group", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResumeComponent_div_0_div_12_Template, 4, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResumeComponent_div_0_div_14_Template, 5, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResumeComponent_div_0_div_15_Template, 5, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResumeComponent_div_0_h3_18_Template, 2, 0, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ResumeComponent_div_0_app_course_group_19_Template, 1, 3, "app-course-group", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ResumeComponent_div_0_h3_20_Template, 2, 0, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ResumeComponent_div_0_app_course_group_21_Template, 1, 3, "app-course-group", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ResumeComponent_div_0_h3_22_Template, 2, 0, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ResumeComponent_div_0_app_course_group_23_Template, 1, 4, "app-course-group", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResumeComponent_div_0_h3_24_Template, 2, 0, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResumeComponent_div_0_app_course_group_25_Template, 1, 3, "app-course-group", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ResumeComponent_div_0_div_26_Template, 4, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResumeComponent_div_0_h3_28_Template, 2, 0, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ResumeComponent_div_0_app_experience_group_29_Template, 1, 6, "app-experience-group", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.styleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.resume.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.resume.occupation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.foto);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.mobile || ctx_r0.resume.email || ctx_r0.resume.linkedIn || ctx_r0.resume.github);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.dateOfBirth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.skills);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.aboutMe);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.professionalGoals);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.academicQualifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resume.academicQualifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.certifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resume.certifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.certifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resume.othersCertifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.technicalQualifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resume.technicalQualifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.extraCourses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resume.professionalExperience);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resume.professionalExperience);
      }
    }

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent(resumeService, resumesService, route, titleService) {
        _classCallCheck(this, ResumeComponent);

        this.resumeService = resumeService;
        this.resumesService = resumesService;
        this.route = route;
        this.titleService = titleService;
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          var hostname = window.location.hostname;
          var resumeId = this.route.snapshot.queryParams.resumeId;
          console.log(this.route.snapshot.queryParams);

          if (!resumeId) {
            // Carrega os dados do currículo (utilizando mock local, sem banco de dados)
            this.resume = this.resumeService.getResume(0);
            this.styleName = 'brow';
          } else {
            this.resumesService.getByHost('danielvazmartins.com.br').subscribe(function (response) {
              console.log(response);
              _this7.resume = response['resume'];
            });
          } // Pega os parâmetro da URL
          //const resumeId = this.route.snapshot.queryParams.resumeId || this.resumeService.getResumeId(hostname)
          //this.styleName = this.route.snapshot.queryParams.style || this.resumeService.getStyleName(hostname)
          // Altera o title do navegador
          //this.titleService.setTitle(this.resume.name)

        }
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_resume_service__WEBPACK_IMPORTED_MODULE_3__["ResumeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_4__["ResumesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 1,
      vars: 1,
      consts: [["class", "style", 3, "ngClass", 4, "ngIf"], [1, "style", 3, "ngClass"], [1, "header"], [1, "box-resume"], [1, "sidebar"], ["class", "perfil-img", 4, "ngIf"], ["title", "Contato", 3, "dataLines", 4, "ngIf"], ["title", "Endere\xE7o", 3, "dataLines", 4, "ngIf"], ["title", "Data de nascimento", 3, "data", 4, "ngIf"], ["class", "box-skills", 4, "ngIf"], [1, "main-content"], ["class", "row", 4, "ngIf"], [1, "row-flex"], [1, "col"], ["class", "sub-title", 4, "ngIf"], [3, "title", "data", 4, "ngFor", "ngForOf"], [3, "title", "data", "show", 4, "ngFor", "ngForOf"], ["class", "col", 4, "ngIf"], [1, "row"], [3, "dateFrom", "dateTo", "title", "subTitle", "dataLines", "show", 4, "ngFor", "ngForOf"], [1, "perfil-img"], [3, "src"], ["title", "Contato", 3, "dataLines"], ["title", "Endere\xE7o", 3, "dataLines"], ["title", "Data de nascimento", 3, "data"], [1, "box-skills"], [3, "title", "dataWords", 4, "ngFor", "ngForOf"], [3, "title", "dataWords"], [1, "sub-title"], [3, "title", "data"], [3, "title", "data", "show"], [3, "dateFrom", "dateTo", "title", "subTitle", "dataLines", "show"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResumeComponent_div_0_Template, 30, 21, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resume);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _data_group_data_group_component__WEBPACK_IMPORTED_MODULE_6__["DataGroupComponent"], _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_7__["CourseGroupComponent"], _experience_group_experience_group_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceGroupComponent"]],
      styles: ["[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background: #c19575;\n  color: #644B39;\n  font-family: Georgia;\n  border-bottom: 3px solid #EF8A40;\n  font-style: italic;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  margin: auto;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  flex: 1;\n  background: linear-gradient(#644B39, #32261D);\n  text-align: center;\n  padding: 10px;\n  min-width: 300px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .perfil[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  margin: auto;\n  background: url(\"/assets/foto-perfil.png\");\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .perfil-img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  margin: auto;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  overflow: hidden;\n  box-shadow: -3px 3px 1px 1px #c19575;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .perfil-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .box-skills[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #FFFFFF08;\n  max-width: 300px;\n  margin: auto;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .box-skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #EF8A40;\n  text-decoration: underline;\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  flex: 2;\n  background: #EFE8E4;\n  color: #AC8B74;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #644B39;\n  border-bottom: 1px solid #644B39;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .row-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  min-width: 300px;\n}\n[_nghost-%COMP%]   .box-resume[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2) {\n  border-left: 3px solid #644B39;\n}", ".style.brown[_ngcontent-%COMP%] {\n  background: #AC8B74;\n}", ".style.pink[_ngcontent-%COMP%] {\n  background: #f06292;\n}\n.style.pink[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background: #f48fb1;\n  color: #e91e63;\n  border-bottom: 3px solid #880e4f;\n}\n.style.pink[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  background: linear-gradient(#ad1457, #880e4f);\n}\n.style.pink[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .perfil-img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  margin: auto;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  overflow: hidden;\n  box-shadow: -3px 3px 1px 1px #f48fb1;\n}\n.style.pink[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .perfil-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.style.pink[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .box-skills[_ngcontent-%COMP%] {\n  background: #FFFFFF08;\n}\n.style.pink[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .box-skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f48fe2;\n}\n.style.pink[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #ec407a;\n}\n.style.pink[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #880e4f;\n  border-bottom: 1px solid #880e4f;\n}\n.style.pink[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2) {\n  border-left: 3px solid #880e4f;\n}\n.style.pink[_ngcontent-%COMP%]     app-data-group label {\n  color: #f48fe2;\n}\n.style.pink[_ngcontent-%COMP%]     app-course-group label {\n  color: #880e4f;\n}\n.style.pink[_ngcontent-%COMP%]     app-experience-group label {\n  color: #880e4f;\n}", ".style.gray[_ngcontent-%COMP%] {\n  background: #546e7a;\n}\n.style.gray[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background: #cfd8dc;\n  color: #546e7a;\n  border-bottom: 3px solid #455a64;\n}\n.style.gray[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  background: #90a4ae;\n}\n.style.gray[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .perfil-img[_ngcontent-%COMP%] {\n  box-shadow: -3px 3px 1px 1px #cfd8dc;\n}\n.style.gray[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .box-skills[_ngcontent-%COMP%] {\n  background: #FFFFFF08;\n}\n.style.gray[_ngcontent-%COMP%]   .box-resume[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .box-skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #263238;\n  font-weight: bold;\n}\n.style.gray[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #424242;\n}\n.style.gray[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #263238;\n  border-bottom: 1px solid #263238;\n}\n.style.gray[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .row-flex[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2) {\n  border-left: 3px solid #263238;\n}\n.style.gray[_ngcontent-%COMP%]     app-data-group label {\n  color: #263238;\n  font-weight: bold;\n}\n.style.gray[_ngcontent-%COMP%]     app-course-group label {\n  font-weight: bold;\n  color: #546e7a;\n}\n.style.gray[_ngcontent-%COMP%]     app-experience-group label {\n  color: #263238;\n}\n.style.gray[_ngcontent-%COMP%]     app-experience-group label.sub-title {\n  font-weight: bold;\n  border-bottom: 1px solid #263238;\n  color: #546e7a !important;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.scss', './styles/brown-style.scss', './styles/pink-style.scss', './styles/gray-style.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_resume_service__WEBPACK_IMPORTED_MODULE_3__["ResumeService"]
        }, {
          type: _shared_services_resumes_service__WEBPACK_IMPORTED_MODULE_4__["ResumesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/resume/resume.module.ts ***!
    \*****************************************/

  /*! exports provided: ResumeModule */

  /***/
  function srcAppResumeResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeModule", function () {
      return ResumeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./course-group/course-group.component */
    "./src/app/resume/course-group/course-group.component.ts");
    /* harmony import */


    var _data_group_data_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-group/data-group.component */
    "./src/app/resume/data-group/data-group.component.ts");
    /* harmony import */


    var _experience_group_experience_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experience-group/experience-group.component */
    "./src/app/resume/experience-group/experience-group.component.ts");

    var ResumeModule = function ResumeModule() {
      _classCallCheck(this, ResumeModule);
    };

    ResumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResumeModule
    });
    ResumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResumeModule_Factory(t) {
        return new (t || ResumeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeModule, {
        declarations: [_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"], _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_3__["CourseGroupComponent"], _data_group_data_group_component__WEBPACK_IMPORTED_MODULE_4__["DataGroupComponent"], _experience_group_experience_group_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceGroupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"], _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_3__["CourseGroupComponent"], _data_group_data_group_component__WEBPACK_IMPORTED_MODULE_4__["DataGroupComponent"], _experience_group_experience_group_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceGroupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/alert/alert.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/alert/alert.component.ts ***!
    \************************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppSharedComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/shared/components/alert/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popup/popup.component */
    "./src/app/shared/components/popup/popup.component.ts");

    function AlertComponent_app_popup_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_app_popup_0_Template_app_popup_close_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.btClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aten\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.alert.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.alert.message);
      }
    }

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.alertService.listenAlert().subscribe(function (response) {
            return _this8.alert = response;
          });
        }
      }, {
        key: "btClose",
        value: function btClose() {
          this.alert = null;
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      decls: 1,
      vars: 1,
      consts: [[3, "close", 4, "ngIf"], [3, "close"], [1, "content", 3, "ngClass"], [1, "title"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_app_popup_0_Template, 6, 2, "app-popup", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .content.error[_ngcontent-%COMP%] {\n  color: #C71B1B;\n}\n[_nghost-%COMP%]   .content.success[_ngcontent-%COMP%] {\n  color: #064D96;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.scss']
        }]
      }], function () {
        return [{
          type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/alert/alert.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/alert/alert.module.ts ***!
    \*********************************************************/

  /*! exports provided: AlertModule */

  /***/
  function srcAppSharedComponentsAlertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alert.component */
    "./src/app/shared/components/alert/alert.component.ts");
    /* harmony import */


    var _popup_popup_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popup/popup.module */
    "./src/app/shared/components/popup/popup.module.ts");

    var AlertModule = function AlertModule() {
      _classCallCheck(this, AlertModule);
    };

    AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AlertModule
    });
    AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AlertModule_Factory(t) {
        return new (t || AlertModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_3__["PopupModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, {
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_3__["PopupModule"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_3__["PopupModule"]],
          exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/alert/alert.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/alert/alert.service.ts ***!
    \**********************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppSharedComponentsAlertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AlertService, [{
        key: "listenAlert",
        value: function listenAlert() {
          return this.alertSubject.asObservable();
        }
      }, {
        key: "msgError",
        value: function msgError(message) {
          this.alertSubject.next({
            message: message,
            type: 'error'
          });
        }
      }, {
        key: "msgSuccess",
        value: function msgSuccess(message) {
          this.alertSubject.next({
            message: message,
            type: 'success'
          });
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)();
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/box-content/box-content.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/box-content/box-content.component.ts ***!
    \************************************************************************/

  /*! exports provided: BoxContentComponent */

  /***/
  function srcAppSharedComponentsBoxContentBoxContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxContentComponent", function () {
      return BoxContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var BoxContentComponent = function BoxContentComponent() {
      _classCallCheck(this, BoxContentComponent);
    };

    BoxContentComponent.ɵfac = function BoxContentComponent_Factory(t) {
      return new (t || BoxContentComponent)();
    };

    BoxContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoxContentComponent,
      selectors: [["app-box-content"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "box"]],
      template: function BoxContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 20px 20px 50px 20px;\n  border: 2px solid #0D81FA;\n  border-radius: 25px;\n  background: #fff;\n  display: flex;\n  position: relative;\n}\n[_nghost-%COMP%]   .box[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: url(/assets/images/background-box-border.png) no-repeat;\n  width: 230px;\n  height: 55px;\n  position: absolute;\n  right: -2px;\n  bottom: -3px;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoxContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-box-content',
          templateUrl: './box-content.component.html',
          styleUrls: ['./box-content.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/box-content/box-content.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/components/box-content/box-content.module.ts ***!
    \*********************************************************************/

  /*! exports provided: BoxContentModule */

  /***/
  function srcAppSharedComponentsBoxContentBoxContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxContentModule", function () {
      return BoxContentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _box_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./box-content.component */
    "./src/app/shared/components/box-content/box-content.component.ts");

    var BoxContentModule = function BoxContentModule() {
      _classCallCheck(this, BoxContentModule);
    };

    BoxContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BoxContentModule
    });
    BoxContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BoxContentModule_Factory(t) {
        return new (t || BoxContentModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BoxContentModule, {
        declarations: [_box_content_component__WEBPACK_IMPORTED_MODULE_1__["BoxContentComponent"]],
        exports: [_box_content_component__WEBPACK_IMPORTED_MODULE_1__["BoxContentComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoxContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_box_content_component__WEBPACK_IMPORTED_MODULE_1__["BoxContentComponent"]],
          exports: [_box_content_component__WEBPACK_IMPORTED_MODULE_1__["BoxContentComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [[1, "content"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Desenvolvido por");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "danielvazmartins@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  background: url(/assets/images/bg-footer.png) no-repeat right bottom;\n  background-size: auto 100%;\n  height: 200px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 20px;\n  text-align: left;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/components/footer/footer.module.ts ***!
    \***********************************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppSharedComponentsFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FooterModule
    });
    FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FooterModule_Factory(t) {
        return new (t || FooterModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, {
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
          exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/form.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/components/form/form.module.ts ***!
    \*******************************************************/

  /*! exports provided: FormModule */

  /***/
  function srcAppSharedComponentsFormFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return FormModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./input-field/input-field.module */
    "./src/app/shared/components/form/input-field/input-field.module.ts");
    /* harmony import */


    var _select_select_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./select/select.module */
    "./src/app/shared/components/form/select/select.module.ts");
    /* harmony import */


    var _textarea_field_textarea_field_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./textarea-field/textarea-field.module */
    "./src/app/shared/components/form/textarea-field/textarea-field.module.ts");

    var FormModule = function FormModule() {
      _classCallCheck(this, FormModule);
    };

    FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormModule
    });
    FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormModule_Factory(t) {
        return new (t || FormModule)();
      },
      imports: [[_input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__["InputFieldModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_2__["SelectModule"]], _input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__["InputFieldModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_2__["SelectModule"], _textarea_field_textarea_field_module__WEBPACK_IMPORTED_MODULE_3__["TextareaFieldModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, {
        imports: [_input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__["InputFieldModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_2__["SelectModule"]],
        exports: [_input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__["InputFieldModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_2__["SelectModule"], _textarea_field_textarea_field_module__WEBPACK_IMPORTED_MODULE_3__["TextareaFieldModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__["InputFieldModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_2__["SelectModule"]],
          exports: [_input_field_input_field_module__WEBPACK_IMPORTED_MODULE_1__["InputFieldModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_2__["SelectModule"], _textarea_field_textarea_field_module__WEBPACK_IMPORTED_MODULE_3__["TextareaFieldModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/input-field/input-field.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/components/form/input-field/input-field.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: InputFieldComponent */

  /***/
  function srcAppSharedComponentsFormInputFieldInputFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputFieldComponent", function () {
      return InputFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var InputFieldComponent = /*#__PURE__*/function () {
      function InputFieldComponent() {
        _classCallCheck(this, InputFieldComponent);

        this.placeholder = '';
      }

      _createClass(InputFieldComponent, [{
        key: "writeValue",
        value: function writeValue(obj) {
          this.value = obj;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "onChange",
        value: function onChange(value) {}
      }]);

      return InputFieldComponent;
    }();

    InputFieldComponent.ɵfac = function InputFieldComponent_Factory(t) {
      return new (t || InputFieldComponent)();
    };

    InputFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputFieldComponent,
      selectors: [["app-input-field"]],
      inputs: {
        label: "label",
        placeholder: "placeholder"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return InputFieldComponent;
        }),
        multi: true
      }])],
      decls: 4,
      vars: 3,
      consts: [[1, "form-field"], ["for", "name"], ["type", "text", 3, "ngModel", "placeholder", "change"]],
      template: function InputFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputFieldComponent_Template_input_change_3_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-field',
          templateUrl: './input-field.component.html',
          styleUrls: ['./input-field.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return InputFieldComponent;
            }),
            multi: true
          }]
        }]
      }], null, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/input-field/input-field.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/form/input-field/input-field.module.ts ***!
    \**************************************************************************/

  /*! exports provided: InputFieldModule */

  /***/
  function srcAppSharedComponentsFormInputFieldInputFieldModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputFieldModule", function () {
      return InputFieldModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _input_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./input-field.component */
    "./src/app/shared/components/form/input-field/input-field.component.ts");

    var InputFieldModule = function InputFieldModule() {
      _classCallCheck(this, InputFieldModule);
    };

    InputFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputFieldModule
    });
    InputFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InputFieldModule_Factory(t) {
        return new (t || InputFieldModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputFieldModule, {
        declarations: [_input_field_component__WEBPACK_IMPORTED_MODULE_2__["InputFieldComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [_input_field_component__WEBPACK_IMPORTED_MODULE_2__["InputFieldComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_input_field_component__WEBPACK_IMPORTED_MODULE_2__["InputFieldComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_input_field_component__WEBPACK_IMPORTED_MODULE_2__["InputFieldComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/select/select.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/components/form/select/select.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppSharedComponentsFormSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SelectComponent_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.value);
      }
    }

    var SelectComponent = /*#__PURE__*/function () {
      function SelectComponent() {
        _classCallCheck(this, SelectComponent);
      }

      _createClass(SelectComponent, [{
        key: "writeValue",
        value: function writeValue(obj) {
          this.value = obj;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "onChange",
        value: function onChange(value) {}
      }]);

      return SelectComponent;
    }();

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)();
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      inputs: {
        label: "label",
        options: "options"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectComponent;
        }),
        multi: true
      }])],
      decls: 6,
      vars: 3,
      consts: [[1, "form-field"], [1, "select-wrapper"], [3, "ngModel", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectComponent_Template_select_change_4_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_option_5_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["[_nghost-%COMP%]   .select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .select-wrapper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: 16px;\n  top: 16px;\n  border: 10px solid;\n  border-color: #707070 transparent transparent transparent;\n  pointer-events: none;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select',
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return SelectComponent;
            }),
            multi: true
          }]
        }]
      }], null, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/select/select.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/form/select/select.module.ts ***!
    \****************************************************************/

  /*! exports provided: SelectModule */

  /***/
  function srcAppSharedComponentsFormSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectModule", function () {
      return SelectModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/shared/components/form/select/select.component.ts");

    var SelectModule = function SelectModule() {
      _classCallCheck(this, SelectModule);
    };

    SelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectModule
    });
    SelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SelectModule_Factory(t) {
        return new (t || SelectModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectModule, {
        declarations: [_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/textarea-field/textarea-field.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/components/form/textarea-field/textarea-field.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: TextareaFieldComponent */

  /***/
  function srcAppSharedComponentsFormTextareaFieldTextareaFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextareaFieldComponent", function () {
      return TextareaFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TextareaFieldComponent = /*#__PURE__*/function () {
      function TextareaFieldComponent() {
        _classCallCheck(this, TextareaFieldComponent);

        this.placeholder = '';
      }

      _createClass(TextareaFieldComponent, [{
        key: "writeValue",
        value: function writeValue(obj) {
          this.value = obj;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "onChange",
        value: function onChange(value) {}
      }]);

      return TextareaFieldComponent;
    }();

    TextareaFieldComponent.ɵfac = function TextareaFieldComponent_Factory(t) {
      return new (t || TextareaFieldComponent)();
    };

    TextareaFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextareaFieldComponent,
      selectors: [["app-textarea-field"]],
      inputs: {
        label: "label",
        placeholder: "placeholder",
        rows: "rows"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return TextareaFieldComponent;
        }),
        multi: true
      }])],
      decls: 4,
      vars: 4,
      consts: [[1, "form-field"], [3, "ngModel", "placeholder", "rows", "change"]],
      template: function TextareaFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TextareaFieldComponent_Template_textarea_change_3_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder)("rows", ctx.rows);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-textarea-field',
          templateUrl: './textarea-field.component.html',
          styleUrls: ['./textarea-field.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return TextareaFieldComponent;
            }),
            multi: true
          }]
        }]
      }], null, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form/textarea-field/textarea-field.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/form/textarea-field/textarea-field.module.ts ***!
    \********************************************************************************/

  /*! exports provided: TextareaFieldModule */

  /***/
  function srcAppSharedComponentsFormTextareaFieldTextareaFieldModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextareaFieldModule", function () {
      return TextareaFieldModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _textarea_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./textarea-field.component */
    "./src/app/shared/components/form/textarea-field/textarea-field.component.ts");

    var TextareaFieldModule = function TextareaFieldModule() {
      _classCallCheck(this, TextareaFieldModule);
    };

    TextareaFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TextareaFieldModule
    });
    TextareaFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TextareaFieldModule_Factory(t) {
        return new (t || TextareaFieldModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TextareaFieldModule, {
        declarations: [_textarea_field_component__WEBPACK_IMPORTED_MODULE_2__["TextareaFieldComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [_textarea_field_component__WEBPACK_IMPORTED_MODULE_2__["TextareaFieldComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_textarea_field_component__WEBPACK_IMPORTED_MODULE_2__["TextareaFieldComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_textarea_field_component__WEBPACK_IMPORTED_MODULE_2__["TextareaFieldComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, router) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "btLogout",
        value: function btLogout() {
          this.authService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 11,
      vars: 0,
      consts: [[1, "buttons"], ["routerLink", "/panel/profile", "routerLinkActive", "active", 1, "bt-wrapper"], [1, "bt-circle", "profile"], ["routerLink", "/panel/resumes", "routerLinkActive", "active", 1, "bt-wrapper"], [1, "bt-circle", "resumes"], [1, "logo"], [1, "buttons", "right"], [1, "bt-wrapper"], [1, "bt-circle", "logout", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_10_listener() {
            return ctx.btLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  background: url(/assets/images/bg-header.png) no-repeat;\n  background-size: 100% 96px;\n  height: 100px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n[_nghost-%COMP%]   .buttons.right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0 15px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt-wrapper[_ngcontent-%COMP%]   .bt-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid #0D81FA;\n  box-shadow: 5px 5px 3px #0000004b;\n  -webkit-filter: blur(1px);\n          filter: blur(1px);\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt-wrapper[_ngcontent-%COMP%]   .bt-circle.profile[_ngcontent-%COMP%] {\n  background: #fff url(\"/assets/images/icon-profile.png\") no-repeat 21px 17px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt-wrapper[_ngcontent-%COMP%]   .bt-circle.resumes[_ngcontent-%COMP%] {\n  background: #fff url(\"/assets/images/icon-resumes.png\") no-repeat 20px 18px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt-wrapper[_ngcontent-%COMP%]   .bt-circle.logout[_ngcontent-%COMP%] {\n  background: #fff url(\"/assets/images/icon-logout.png\") no-repeat 23px 23px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .bt-wrapper.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #707070;\n  box-shadow: 5px 5px 3px #0000004b;\n  width: 78px;\n  height: 12px;\n  border-radius: 50%;\n  top: 75px;\n  left: 5px;\n  z-index: -1;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: url(/assets/images/logo-header.png) no-repeat;\n  background-size: 100%;\n  width: 124px;\n  height: 124px;\n  margin: auto;\n  margin-top: -10px;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/components/header/header.module.ts ***!
    \***********************************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppSharedComponentsHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/shared/components/header/header.component.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeaderModule
    });
    HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, {
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSharedComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/shared/components/login/login.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../alert/alert.service */
    "./src/app/shared/components/alert/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../popup/popup.component */
    "./src/app/shared/components/popup/popup.component.ts");

    function LoginComponent_app_popup_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function LoginComponent_app_popup_0_Template_app_popup_close_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.btClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bem Vindo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Se j\xE1 possui cadastro, entre e gerencie seus curr\xEDculos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_app_popup_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.btLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Entrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formLogin);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, formBuilder, authService, route, alertService) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.alertService = alertService;
        this.showWindow = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.loginService.listenState().subscribe(function (state) {
            return _this9.showWindow = state;
          });
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.formLogin = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "btClose",
        value: function btClose() {
          this.showWindow = false;
        }
      }, {
        key: "btLogin",
        value: function btLogin() {
          var _this10 = this;

          if (this.formLogin.valid) {
            var _this$formLogin$value = this.formLogin.value,
                email = _this$formLogin$value.email,
                password = _this$formLogin$value.password;
            this.authService.login(email, password).subscribe(function (response) {
              _this10.showWindow = false;

              _this10.route.navigateByUrl('/panel');
            }, function (error) {
              if (error.status === 401) return _this10.alertService.msgError('Usuário ou senha inválidos!');

              _this10.alertService.msgError('Ocorreu um erro, tente novamente!');
            });
          } else {
            this.alertService.msgError('Verifique se todos os campos foram preenchidos corretamente!');
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 1,
      vars: 1,
      consts: [[3, "close", 4, "ngIf"], [3, "close"], [1, "title"], [3, "formGroup"], ["type", "email", "name", "email", "id", "email", "placeholder", "E-mail", "formControlName", "email"], ["type", "password", "name", "password", "id", "password", "placeholder", "Senha", "formControlName", "password"], [1, "bt", "primary", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_app_popup_0_Template, 10, 1, "app-popup", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWindow);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["PopupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #0D81FA;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  align-items: center;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/login/login.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/login/login.module.ts ***!
    \*********************************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppSharedComponentsLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../popup/popup.module */
    "./src/app/shared/components/popup/popup.module.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]],
        exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]],
          exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/login/login.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/login/login.service.ts ***!
    \**********************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppSharedComponentsLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService() {
        _classCallCheck(this, LoginService);

        this.loginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(LoginService, [{
        key: "listenState",
        value: function listenState() {
          return this.loginSubject.asObservable();
        }
      }, {
        key: "showLogin",
        value: function showLogin() {
          this.loginSubject.next(true);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)();
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/popup/popup.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/popup/popup.component.ts ***!
    \************************************************************/

  /*! exports provided: PopupComponent */

  /***/
  function srcAppSharedComponentsPopupPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupComponent", function () {
      return PopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var PopupComponent = /*#__PURE__*/function () {
      function PopupComponent() {
        _classCallCheck(this, PopupComponent);

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PopupComponent, [{
        key: "btClose",
        value: function btClose() {
          this.close.emit();
        }
      }]);

      return PopupComponent;
    }();

    PopupComponent.ɵfac = function PopupComponent_Factory(t) {
      return new (t || PopupComponent)();
    };

    PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["app-popup"]],
      outputs: {
        close: "close"
      },
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [[1, "popup"], [1, "background"], [1, "box"], [1, "bt-close", 3, "click"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_3_listener() {
            return ctx.btClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]   .popup[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(7, 7, 7, 0.7);\n  z-index: 10;\n}\n[_nghost-%COMP%]   .popup[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 490px;\n  padding: 20px;\n  text-align: center;\n  background: #fff;\n  border: 3px solid #0D81FA;\n  border-radius: 25px;\n  position: relative;\n  color: #707070;\n}\n[_nghost-%COMP%]   .popup[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .bt-close[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: url(/assets/images/icon-x-red.png) no-repeat;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup',
          templateUrl: './popup.component.html',
          styleUrls: ['./popup.component.scss']
        }]
      }], null, {
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/popup/popup.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/popup/popup.module.ts ***!
    \*********************************************************/

  /*! exports provided: PopupModule */

  /***/
  function srcAppSharedComponentsPopupPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupModule", function () {
      return PopupModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./popup.component */
    "./src/app/shared/components/popup/popup.component.ts");

    var PopupModule = function PopupModule() {
      _classCallCheck(this, PopupModule);
    };

    PopupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopupModule
    });
    PopupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopupModule_Factory(t) {
        return new (t || PopupModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupModule, {
        declarations: [_popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"]],
        exports: [_popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"]],
          exports: [_popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/register/register.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/register/register.component.ts ***!
    \******************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppSharedComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register.service */
    "./src/app/shared/components/register/register.service.ts");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/users.service */
    "./src/app/shared/services/users.service.ts");
    /* harmony import */


    var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../alert/alert.service */
    "./src/app/shared/components/alert/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popup/popup.component */
    "./src/app/shared/components/popup/popup.component.ts");

    function RegisterComponent_app_popup_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function RegisterComponent_app_popup_0_Template_app_popup_close_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.btClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bem Vindo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Faca seu cadastro, \xE9 totalmente gratuito");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_app_popup_0_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.btRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cadastrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formRegister);
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(registerService, formBuilder, usersService, alertService) {
        _classCallCheck(this, RegisterComponent);

        this.registerService = registerService;
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.alertService = alertService;
        this.showWindow = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.registerService.listenState().subscribe(function (state) {
            return _this11.showWindow = state;
          });
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.formRegister = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "btClose",
        value: function btClose() {
          this.showWindow = false;
        }
      }, {
        key: "btRegister",
        value: function btRegister() {
          var _this12 = this;

          if (this.formRegister.valid) {
            var _this$formRegister$va = this.formRegister.value,
                fullName = _this$formRegister$va.fullName,
                email = _this$formRegister$va.email,
                password = _this$formRegister$va.password;
            this.usersService.create(fullName, email, password).subscribe(function (response) {
              if (response.status === 'success') {
                _this12.alertService.msgSuccess('Cadastro efetuado com sucesso!');

                _this12.showWindow = false;
              }
            }, function (error) {
              if (error.status === 400) {
                var errorMessage = Object.values(error.error.message[0].constraints)[0];

                _this12.alertService.msgError(errorMessage);
              } else if (error.status === 403) {
                _this12.alertService.msgError(error.error.message);
              } else {
                _this12.alertService.msgError('Ocorreu um erro, tente novamente!');
              }
            });
          } else {
            this.alertService.msgError('Verifique se todos os campos foram preenchidos corretamente!');
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 1,
      vars: 1,
      consts: [[3, "close", 4, "ngIf"], [3, "close"], [1, "title"], [3, "formGroup"], ["type", "text", "name", "fullName", "id", "fullName", "placeholder", "Nome Completo", "formControlName", "fullName"], ["type", "email", "name", "email", "id", "email", "placeholder", "E-mail", "formControlName", "email"], ["type", "password", "name", "password", "id", "password", "placeholder", "Senha", "formControlName", "password"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "placeholder", "Confirme sua senha", "formControlName", "confirmPassword", "autocomplete", "off"], [1, "bt", "primary", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_app_popup_0_Template, 12, 1, "app-popup", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWindow);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #0D81FA;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  align-items: center;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }, {
          type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/register/register.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/components/register/register.module.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterModule */

  /***/
  function srcAppSharedComponentsRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/shared/components/register/register.component.ts");
    /* harmony import */


    var _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../popup/popup.module */
    "./src/app/shared/components/popup/popup.module.ts");

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegisterModule
    });
    RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegisterModule_Factory(t) {
        return new (t || RegisterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterModule, {
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]],
        exports: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _popup_popup_module__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]],
          exports: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/register/register.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/register/register.service.ts ***!
    \****************************************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppSharedComponentsRegisterRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RegisterService = /*#__PURE__*/function () {
      function RegisterService() {
        _classCallCheck(this, RegisterService);

        this.registerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(RegisterService, [{
        key: "listenState",
        value: function listenState() {
          return this.registerSubject.asObservable();
        }
      }, {
        key: "showWindow",
        value: function showWindow() {
          this.registerSubject.next(true);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ɵfac = function RegisterService_Factory(t) {
      return new (t || RegisterService)();
    };

    RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegisterService,
      factory: RegisterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/interceptors/auth.interceptor.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
    \*********************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // Se estiver logado então intercepta as conexões para adicionar o token no cabeçalho
          if (this.authService.isLogged()) {
            var token = this.authService.getToken();
            req = req.clone({
              setHeaders: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          }

          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/mocks/resumes.mock.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/mocks/resumes.mock.ts ***!
    \**********************************************/

  /*! exports provided: resumesMock */

  /***/
  function srcAppSharedMocksResumesMockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resumesMock", function () {
      return resumesMock;
    });

    var resumesMock = {
      resumes: [{
        name: 'Daniel Vaz Villalobos Martins',
        foto: '/assets/foto-perfil.jpg',
        occupation: 'Full Stack Sênior | NodeJs | Java | AngularJS | DevOps',
        dateOfBirth: '17/08/1983',
        address: ['Av. Vila Ema, 3793 ap 103C', 'Cep 03281-001 - São Paulo-SP'],
        mobile: '(11) 96450-0218',
        email: 'danielvazmartins@gmail.com',
        linkedIn: 'linkedin.com/in/danielvazmartins',
        github: 'github.com/danielvazmartins',
        skills: [{
          type: 'Back-end',
          skills: ['NodeJs (Express, NestJs)', 'Java']
        }, {
          type: 'Front-end',
          skills: ['Angular', 'JavaScript', 'TypeScript', 'PWA', 'Bootstrap', 'Material Design', 'CSS', 'SASS']
        }, {
          type: 'Database',
          skills: ['Mysql', 'MongoDB', 'Elasticsearch', 'Sql Server', 'Postgree']
        }, {
          type: 'Mobile',
          skills: ['Android com Java', 'iOS com Objective-C']
        }, {
          type: 'Infraestrutura',
          skills: ['Administração de servidores Windows e Linux', 'Docker', 'Kubernets', 'Cloud (AWS e Azure), DevOps (Git, Jenkins, etc)']
        }, {
          type: 'Design',
          skills: ['Photoshop', 'Illustrator', 'Adobe XD']
        }, {
          type: 'Idiomas',
          skills: ['Inglês Técnico Avançado']
        }],
        aboutMe: 'Atuo na área de TI desde 2003, formado em Ciências da Computação e pós graduado em Gerenciamento de Projetos, além de ter algumas certificações estou sempre estudando através de plataformas como Alura, SchoolOfNet, Udemy, etc. Durante minha carreira participei de diversos projetos, utilizando tecnologias diferentes, sempre com o foco em desenvolvimento mas atuando também na parte de infra estrutura e DevOps, adquirindo um grande conhecimento de toda área de TI.',
        professionalGoals: 'Atuar na área de desenvolvimento, seja como full-stack, back-end (NodeJs e Java), front-end (Angular), ou até mesmo com desenvolvimentos de Apps Nativos ou DevOps. Sempre me atualizando e pondo em prática os conhecimentos adquiridos. ',
        academicQualifications: [{
          dateConclusion: '2017',
          institution: 'Universidade Metodista de São Paulo',
          course: 'Pós Graduação em Gerenciamento de Projetos de TI com práticas alinhadas ao PMI'
        }, {
          dateConclusion: '2005',
          institution: 'UniFEI  -  Centro Universitário da FEI',
          course: 'Bacharel em Ciências da Computação'
        }],
        certifications: [{
          dateConclusion: '08/2023',
          institution: 'Microsoft',
          course: 'AZ-204 Azure Developer Associate'
        }, {
          dateConclusion: '11/2021',
          institution: 'Microsoft',
          course: 'AZ-900 Azure Fundamentals'
        }],
        othersCertifications: [{
          dateConclusion: '04/2013',
          institution: 'VTEX',
          course: 'VTEX Interface Developer Certified (VID)',
          show: false
        }, {
          dateConclusion: '08/2011',
          institution: 'Microsoft',
          course: 'MCTS – Microsoft Exchange Server 2010, Configuration',
          show: true
        }, {
          dateConclusion: '12/2010',
          institution: 'Microsoft',
          course: 'MCTS – Windows 7, Configuration',
          show: true
        }, {
          dateConclusion: '11/2010',
          institution: 'BlackBerry',
          course: 'BlackBerry Certified Server Support Specialist (v5.0)',
          show: false
        }, {
          dateConclusion: '10/2010',
          institution: 'BlackBerry',
          course: 'BlackBerry Certified Support Specialist (v5.0)',
          show: false
        }, {
          dateConclusion: '04/2010',
          institution: 'Microsoft',
          course: 'MCTS – Microsoft Windows SharePoint Services 3.0, Configuration',
          show: true
        }, {
          dateConclusion: '11/2009',
          institution: 'Microsoft',
          course: 'MCSA - Microsoft Windows Server 2003 Network Infrastructure',
          show: true
        }, {
          dateConclusion: '05/2009',
          institution: 'Microsoft',
          course: 'MCSA - Microsoft Windows Server 2003 Environment',
          show: true
        }, {
          dateConclusion: '08/2008',
          institution: 'Cisco',
          course: 'Cisco Certified Network Associate - Cisco ID# CSCO10955792',
          show: true
        }],
        extraCourses: [{
          dateConclusion: '09/2020',
          institution: 'IGTI (XP Educação)',
          workload: '148h / 2 meses',
          course: 'Bootcamp Desenvolvedor Mobile Apps (Android, React Native, Flutter)',
          show: true
        }, {
          dateConclusion: '07/2020',
          institution: 'IGTI (XP Educação)',
          workload: '148h / 2 meses',
          course: 'Bootcamp FullStack Developer (NodeJs, React)',
          show: true
        }, {
          dateConclusion: '01/2015',
          institution: 'Saga',
          workload: '408 horas / 2 anos',
          course: 'Computação Gráfica (Photoshop, Illustrator, Dreamweaver, Flash, Premiere, AfterEffects, Maya, etc)',
          show: true
        }, {
          dateConclusion: '05/2014',
          institution: 'Clarify Treinamentos',
          workload: '24 horas',
          course: 'Microsoft Project 2013 - Gerenciamento de Projetos',
          show: false
        }, {
          dateConclusion: '01/2011',
          institution: 'CNA',
          workload: '2 módulos',
          course: 'Inglês - Advanced Conversation Course',
          show: true
        }, {
          dateConclusion: '07/2010',
          institution: 'Brás & Figueiredo',
          workload: '20 horas',
          course: '2824 – Implementing Microsoft Internet Security and Acceleration Server 2004',
          show: false
        }, {
          dateConclusion: '03/2010',
          institution: 'Brás & Figueiredo',
          workload: '20 horas',
          course: '6292 – Installing and Configuring Windows 7 Client',
          show: false
        }, {
          dateConclusion: '12/2008',
          institution: 'Brás & Figueiredo',
          workload: '40 horas',
          course: '2277 – Implementing, Managing, and Maintaining a MS Win 2003 Network Infrastructure: Network Services',
          show: false
        }, {
          dateConclusion: '12/2008',
          institution: 'Brás & Figueiredo',
          workload: '16 horas',
          course: '2276 – Implementing a Microsoft Windows Server 2003 Network Insfrastructure : Network Hosts',
          show: false
        }, {
          dateConclusion: '12/2008',
          institution: 'CNA',
          workload: '9 módulos',
          course: 'Inglês - Basic, Intermediate, Advanced and High Advanced',
          show: true
        }, {
          dateConclusion: '10/2008',
          institution: 'Brás & Figueiredo',
          workload: '24 horas',
          course: '2275 – Maintaining a Microsoft Windows Server 2003 Enviroment',
          show: false
        }, {
          dateConclusion: '09/2008',
          institution: 'Brás & Figueiredo',
          workload: '40 horas',
          course: '2274 – Managing a Microsoft Windows Server 2003 Environment',
          show: false
        }, {
          dateConclusion: '08/2007',
          institution: 'Green Treinamento',
          workload: '8 horas',
          course: 'Introdução a Firewall – Linux',
          show: true
        }, {
          dateConclusion: '08/2007',
          institution: 'Green Treinamento',
          workload: '40 horas',
          course: 'LPI 102 – Administração de Redes Linux',
          show: true
        }, {
          dateConclusion: '07/2007',
          institution: 'Green Treinamento',
          workload: '40 horas',
          course: 'LPI 101 – Administração de Sistemas Linux',
          show: true
        }, {
          dateConclusion: '09/2006',
          institution: 'Brás & Figueiredo',
          workload: '40 horas',
          course: '2400 – Implementing and Managing Microsoft Exchange Server 2003',
          show: false
        }],
        professionalExperience: [{
          dateFrom: '19/04/2021',
          dateTo: '21/09/2023',
          company: 'F1RST Digital Services (Santander)',
          position: 'Analista de Desenvolvimento de Sistemas Sênior',
          description: ['Desenvolvimento de sistemas FullStack utilizando NodeJs (Express e NestJs), Java, Angular, MongoDB, ElastichSearch e desenvolvimento de DevOps no Jenkins (Groovy) fazendo intregação com Openshift, Azure e AWS', 'Utilizando boas práticas de projeto, testes unitários (TDD) e seguindo padrão de projeto Agile (Scrum) e Jira', 'Utilização de ferramentas durante o desenvolvimento até o deploy como Git, Jenkins, Docker, Kubernets, Openshift, Sonar, Fortify, etc'],
          show: true
        }, {
          dateFrom: '14/08/2018',
          dateTo: '16/04/2021',
          company: 'MJV Technology & Innovation (Santander)',
          position: 'Analista Full Stack',
          description: ['Desenvolvimento de sistemas FullStack utilizando NodeJs (Express e NestJs), Angular, MongoDB e ElastichSearch.', 'Utilizando boas práticas de projeto, testes unitários (TDD) e seguindo padrão de projeto Agile (Scrum) e Jira', 'Utilização de ferramentas durante o desenvolvimento até o deploy como Git, Jenkins, Docker, Kubernets, Openshift, Sonar, Fortify, etc'],
          show: true
        }, {
          dateFrom: '13/04/2009',
          dateTo: '27/07/2018',
          company: 'Viewit Comércio e Técnologia LTDA',
          position: 'Analista de TI Pleno',
          description: ['<b>Até 2018 -</b> Desenvolvimento de novos projetos em NodeJs com Angular6, manutenção dos projetos existentes em Java ou Nativos. Gerenciamento dos servidores na Amazon AWS', '<b>Até 2013 -</b> Desenvolvimento de aplicativos para Android (Java), Iphone (Objective-C), Web Mobile (HTML, CSS, JQuery). Desenvolvimento do site da empresa (PHP, XHTML). Plataformas de comércio eletrônico (VTEX e Magento). Aplicativos na AppStore (Onofre, John John Denim, Lelis Blanc, By Tennis), no Google Play (Onofre)', '<b>Até 2011 -</b> Instalação e gerenciamento de infraestrutura para provedor (Hosting de Exchange 2007 e 2010, Zimbra, Postfix, BES, Web com Plesk, Sharepoint, DNS, VMWare, etc). Desenvolvimento de painel de controle do provedor (PHP), webservices de integração (C#), MTA para gerenciamento de e-mail e anti-span (JAVA)'],
          show: true
        }, {
          dateFrom: '29/03/2004',
          dateTo: '26/03/2009',
          company: 'Ventiladores Bernauer S.A.',
          position: 'Analista de Sistemas e Administrador de Redes',
          description: ['Desenvolvimento de sistemas para uso interno em diversas áreas (PCP, Vendas, Engenharia, Almoxarifado, etc), integração com sistemas de terceiros (ERP - RM), levantamento das necessidades dos usuários, modelagem de dados. Principais ferramentas: Delphi 7, Sql Server 2000, Postgre, DBF, Rave Report, FastCube, etc.', 'Implantação, manutenção e gerenciamento dos servidores (SBS 2003 com Exchange 2003, SQL Server 2000, WSUS, NTBackup. Windows 2003 com Terminal Service. Slackware como servidor de arquivos com SAMBA integrado com o AD do SBS 2003. Slackware como firewall utilizando IPTABLES, SQUID, SARG, OPENVPN). RAID em linux e Windows.'],
          show: true
        }, {
          dateFrom: '18/08/2003',
          dateTo: '31/12/2003',
          company: 'Home Doctor',
          position: 'Suporte Técnico (Estagiário)',
          description: ['Suporte interno aos usuários, instalação e configuração de computadores com Windows NT, 2000 e XP, configuração de rede, acessos e restrições de usuários, rotinas de backup, etc.'],
          show: false
        }, {
          dateFrom: '17/06/2003',
          dateTo: '30/07/2003',
          company: 'Bohm Interal',
          position: 'Analista Programador (Estagiário)',
          description: ['Desenvolvimento de programa de CRM na linguagem Delphi, com banco de dados Oracle, utilizando SQL e PL/SQL. '],
          show: false
        }]
      }]
    };
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('username', email).set('password', password);
          return this.http.post('/api/auth/login', params, {
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var token = response.headers.get('x-access-token');
            localStorage.setItem('access-token', token);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('access-token');
          this.router.navigateByUrl('/home');
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return !!this.getToken();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('access-token');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/resume.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/resume.service.ts ***!
    \***************************************************/

  /*! exports provided: ResumeService */

  /***/
  function srcAppSharedServicesResumeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeService", function () {
      return ResumeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _mocks_resumes_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mocks/resumes.mock */
    "./src/app/shared/mocks/resumes.mock.ts");

    var ResumeService = /*#__PURE__*/function () {
      function ResumeService(http) {
        _classCallCheck(this, ResumeService);

        this.http = http;
      }

      _createClass(ResumeService, [{
        key: "getResumeId",
        value: function getResumeId(hostname) {
          if (hostname.endsWith('danielvazmartins.com.br')) return 0;
          if (hostname.endsWith('rozanaaquino.com.br')) return 1;
          return 0;
        }
      }, {
        key: "getStyleName",
        value: function getStyleName(hostname) {
          if (hostname.endsWith('danielvazmartins.com.br')) return 'brow';
          if (hostname.endsWith('rozanaaquino.com.br')) return 'gray';
          return 'brow';
        } // Retornar currículo de mock (para desenvolvimento sem o banco de dados)

      }, {
        key: "getResume",
        value: function getResume(id) {
          return _mocks_resumes_mock__WEBPACK_IMPORTED_MODULE_2__["resumesMock"].resumes[id];
        }
      }]);

      return ResumeService;
    }();

    ResumeService.ɵfac = function ResumeService_Factory(t) {
      return new (t || ResumeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ResumeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResumeService,
      factory: ResumeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/resumes.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/resumes.service.ts ***!
    \****************************************************/

  /*! exports provided: ResumesService */

  /***/
  function srcAppSharedServicesResumesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumesService", function () {
      return ResumesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");

    var ResumesService = /*#__PURE__*/function () {
      function ResumesService(http, authService) {
        _classCallCheck(this, ResumesService);

        this.http = http;
        this.authService = authService;
        this.resourceUrl = '/api/resumes';
      } // Retorna a lista de curriculos do usuario logado no Painel


      _createClass(ResumesService, [{
        key: "getAll",
        value: function getAll() {
          var _this13 = this;

          return this.http.get(this.resourceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.status === 'success' ? response['data'] : [];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) _this13.authService.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(resumeId) {
          return this.http.get("".concat(this.resourceUrl, "/").concat(resumeId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.status === 'success' ? response['data'] : [];
          }));
        }
      }, {
        key: "getByHost",
        value: function getByHost(domain) {
          return this.http.get("".concat(this.resourceUrl, "/public"), {
            params: {
              domain: domain
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.status === 'success' ? response['data'] : [];
          }));
        } // Cadastra um novo currículo

      }, {
        key: "create",
        value: function create(resume) {
          return this.http.post(this.resourceUrl, resume);
        } // Atualiza um currículo

      }, {
        key: "update",
        value: function update(resumeId, resume) {
          return this.http.put("".concat(this.resourceUrl, "/").concat(resumeId), resume);
        } // Remove um currículo

      }, {
        key: "delete",
        value: function _delete(resumeId) {
          return this.http["delete"]("".concat(this.resourceUrl, "/").concat(resumeId));
        }
      }]);

      return ResumesService;
    }();

    ResumesService.ɵfac = function ResumesService_Factory(t) {
      return new (t || ResumesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    ResumesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResumesService,
      factory: ResumesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/users.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/users.service.ts ***!
    \**************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppSharedServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http, authService) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.authService = authService;
      }

      _createClass(UsersService, [{
        key: "getData",
        value: function getData() {
          var _this14 = this;

          return this.http.get('/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.status === 'success' ? response['data'] : [];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) _this14.authService.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }));
        }
      }, {
        key: "create",
        value: function create(fullName, email, password) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fullName', fullName).set('email', email).set('password', password);
          return this.http.post('/api/users', params);
        }
      }, {
        key: "update",
        value: function update(fullName, email) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fullName', fullName).set('email', email);
          return this.http.put('/api/users', params);
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/hdDados/projetos/mysite/resume/spa/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);