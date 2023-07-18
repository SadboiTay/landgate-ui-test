(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklandgate_ui_test"] = self["webpackChunklandgate_ui_test"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/home/home.component */
      8263);
      /* harmony import */


      var _components_people_ngrx_people_ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/people-ngrx/people-ngrx.component */
      7259);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
      }, {
        path: 'people-ngrx',
        component: _components_people_ngrx_people_ngrx_component__WEBPACK_IMPORTED_MODULE_1__.PeopleNgrxComponent
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/header/header.component */
      3646);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      4662);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'landgate-ui-test';
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 0,
        consts: [[1, "d-flex", "flex-column", "justify-content-between", 2, "min-height", "100vh"], [2, "min-height", "75vh"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      5585);
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reducers */
      1697);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/header/header.component */
      3646);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      4662);
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/home/home.component */
      8263);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/effects */
      369);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      5811);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var _components_people_ngrx_people_ngrx_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/people-ngrx/people-ngrx.module */
      6915);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_people_ngrx_people_ngrx_module__WEBPACK_IMPORTED_MODULE_7__.PeopleNgrxModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_2__.reducers, {
          metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_2__.metaReducers
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forRoot([]), // Instrumentation must be imported after importing StoreModule (config is optional)
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__.StoreDevtoolsModule.instrument({
          maxAge: 100,
          logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production // Restrict extension to log-only mode

        }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__.StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_people_ngrx_people_ngrx_module__WEBPACK_IMPORTED_MODULE_7__.PeopleNgrxModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__.StoreDevtoolsModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__.StoreDevtoolsModule]
        });
      })();
      /***/

    },

    /***/
    4662:
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 39,
        vars: 0,
        consts: [[1, "py-5"], [1, "container", "py-4", "pl-4"], [1, "row"], [1, "mb-4", "col-sm"], ["src", "assets/images/LG-mark.png", 2, "height", "33px"], [1, "list-unstyled"], ["href", "#"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "People");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Careers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Docs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/footer-hills-2.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nnav[_ngcontent-%COMP%] {\n  padding-top: 74px;\n  padding-bottom: 95px;\n  padding-left: 41px;\n  padding-right: 41px;\n  background-color: #212121;\n  opacity: 0.7;\n  color: #e5dfdb;\n  font-size: 14px;\n}\n\nh5[_ngcontent-%COMP%] {\n  color: #d4c598;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #e5dfdb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZm9vdGVyLWhpbGxzLTIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxubmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiA3NHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDk1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgY29sb3I6ICNlNWRmZGI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiAjZDRjNTk4O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNlNWRmZGI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    3646:
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _c0 = function _c0(a0) {
        return {
          "active underline": a0
        };
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(location) {
          var _this = this;

          _classCallCheck(this, _HeaderComponent);

          this.location = location;
          this.homePath = '/home';
          this.peoplePath = '/people-ngrx';
          this.location.onUrlChange(function (val) {
            _this.path = val;
          });
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 25,
        vars: 8,
        consts: [[1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "container", "p-0"], ["href", "#", 1, "navbar-brand", "text-dark"], ["src", "assets/images/LG-mark.png", 2, "height", "33px", "padding-right", "9px"], ["src", "assets/images/landgate.png", 2, "width", "143px", "height", "20px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarMobile", "aria-controls", "navbarMobile", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarMobile", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "ngClass"], [1, "nav-link", 3, "routerLink"], [1, "nav-item"], ["href", "#", 1, "nav-link"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "People");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.path === ctx.homePath));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.homePath);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.path === ctx.peoplePath));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.peoplePath);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuZGVybGluZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    8263:
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent() {
          _classCallCheck(this, _HomeComponent);
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 72,
        vars: 0,
        consts: [[1, "hero", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-white"], [1, "container-xl", "success-story", 2, "margin-top", "70px", "margin-bottom", "70px"], [2, "margin-bottom", "70px"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "assets/images/meta-logo.png", 2, "width", "150px", "margin-right", "20px"], ["src", "assets/images/google-logo.png", 2, "width", "150px", "margin-left", "20px"], ["src", "assets/images/five-stars.png", 2, "width", "300px"], ["id", "carousel-example", "data-ride", "carousel", 1, "carousel", "slide", 2, "height", "300px"], ["role", "listbox", 1, "carousel-inner", "row", "justify-content-center", "w-100", "mx-auto"], [1, "carousel-item", "col-12", "col-sm-6", "col-md-6", "col-lg-4", "active"], [1, "fa", "fa-quote-left", "mr-3", "text-success>"], [1, "fa", "fa-quote-right", "mr-3", "text-success>"], [1, "carousel-item", "col-12", "col-sm-6", "col-md-6", "col-lg-4"], ["href", "#carousel-example", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carousel-example", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LandGate Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "by Taylor Hakes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Taylor is the kind of web developer that can do anything he puts his mind to. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Taylor's Mom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " You have no idea how high Taylor can fly. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Michael Scott ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " If I had to hire either Elon Musk, LeBron James, or Taylor Hakes to make me money - I'd hire Taylor 3 times. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Bill Gates ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Taylor is the most impressive, thourough, upstanding software engineer this side of the Mississippi. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Everyone East and West of the Mississippi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " If I had a dollar every time Taylor nailed his assignment, I would have retired last year. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Taylor's Last Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Taylor displays a profound level of mastery when it comes to front end frameworks like Angular. Passing him up would be like using your winning lottery ticket for kindling. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Google CEO, Sundar Pichai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " You're hired! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " You, very soon ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".hero[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-bg.jpg\");\n  background-size: 100%;\n  width: auto;\n  height: 300px;\n  margin: 0px 1rem;\n  border-radius: 7px;\n}\n\n.container-xl[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtREFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hlcm8tYmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDphdXRvO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luOiAwcHggMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jb250YWluZXIteGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    5869:
    /*!***********************************************************************!*\
      !*** ./src/app/components/people-ngrx/ngrx/actions/people.actions.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "loadPeoples": function loadPeoples() {
          return (
            /* binding */
            _loadPeoples
          );
        },

        /* harmony export */
        "loadedPeople": function loadedPeople() {
          return (
            /* binding */
            _loadedPeople
          );
        },

        /* harmony export */
        "selectPerson": function selectPerson() {
          return (
            /* binding */
            _selectPerson
          );
        },

        /* harmony export */
        "deselectPerson": function deselectPerson() {
          return (
            /* binding */
            _deselectPerson
          );
        },

        /* harmony export */
        "updatePerson": function updatePerson() {
          return (
            /* binding */
            _updatePerson
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      5585); // This is a request


      var _loadPeoples = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[People] Load Peoples'); // This is a load success


      var _loadedPeople = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[People] Loaded', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // An action for selecting an individual person


      var _selectPerson = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[People] Select Person', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // An action for de-selecting an individual person (cancelling the edit)


      var _deselectPerson = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[People] Deselect Person');

      var _updatePerson = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[People] Update Person', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
      /***/

    },

    /***/
    6281:
    /*!***********************************************************************!*\
      !*** ./src/app/components/people-ngrx/ngrx/effects/people.effects.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleEffects": function PeopleEffects() {
          return (
            /* binding */
            _PeopleEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      369);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      9902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      4361);
      /* harmony import */


      var _actions_people_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/people.actions */
      5869);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/people.service */
      2255);

      var _PeopleEffects = /*#__PURE__*/_createClass(function _PeopleEffects(actions$, peopleService) {
        var _this2 = this;

        _classCallCheck(this, _PeopleEffects);

        this.actions$ = actions$;
        this.peopleService = peopleService;
        this.loadPeoples$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this2.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.loadPeoples), // TODO Implement a Load People Action that gets the data from the service.
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function () {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_this2.peopleService.getPeople()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (people) {
              return (0, _actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.loadedPeople)({
                people: people
              });
            }));
          }));
        });
      });

      _PeopleEffects.ɵfac = function PeopleEffects_Factory(t) {
        return new (t || _PeopleEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_people_service__WEBPACK_IMPORTED_MODULE_1__.PeopleService));
      };

      _PeopleEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _PeopleEffects,
        factory: _PeopleEffects.ɵfac
      });
      /***/
    },

    /***/
    7130:
    /*!************************************************************************!*\
      !*** ./src/app/components/people-ngrx/ngrx/reducers/people.reducer.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "peopleFeatureKey": function peopleFeatureKey() {
          return (
            /* binding */
            _peopleFeatureKey
          );
        },

        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState
          );
        },

        /* harmony export */
        "reducer": function reducer() {
          return (
            /* binding */
            _reducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      5585);
      /* harmony import */


      var _actions_people_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/people.actions */
      5869);

      var _peopleFeatureKey = 'people';
      var _initialState = {
        isLoading: false,
        people: [],
        selectedPersonId: null
      };

      var _reducer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(_initialState, (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.loadPeoples, function (state) {
        return Object.assign(Object.assign({}, state), {
          people: [],
          isLoading: true
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.loadedPeople, function (state, _ref) {
        var people = _ref.people;
        return Object.assign(Object.assign({}, state), {
          people: people,
          isLoading: false,
          selectedPersonId: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.selectPerson, function (state, _ref2) {
        var id = _ref2.id;
        return Object.assign(Object.assign({}, state), {
          selectedPersonId: id
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.deselectPerson, function (state) {
        return Object.assign(Object.assign({}, state), {
          selectedPersonId: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.updatePerson, function (state, _ref3) {
        var person = _ref3.person;
        return Object.assign(Object.assign({}, state), {
          people: state.people.map(function (index) {
            if (index.id === state.selectedPersonId) {
              index = person;
            }

            return index;
          }),
          selectedPersonId: null
        });
      }));
      /***/

    },

    /***/
    4238:
    /*!***************************************************************************!*\
      !*** ./src/app/components/people-ngrx/ngrx/selectors/people.selectors.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectPeopleState": function selectPeopleState() {
          return (
            /* binding */
            _selectPeopleState
          );
        },

        /* harmony export */
        "selectPeople": function selectPeople() {
          return (
            /* binding */
            _selectPeople
          );
        },

        /* harmony export */
        "selectPeopleIsLoading": function selectPeopleIsLoading() {
          return (
            /* binding */
            _selectPeopleIsLoading
          );
        },

        /* harmony export */
        "selectedPersonId": function selectedPersonId() {
          return (
            /* binding */
            _selectedPersonId
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      5585);
      /* harmony import */


      var _reducers_people_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../reducers/people.reducer */
      7130);

      var _selectPeopleState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_reducers_people_reducer__WEBPACK_IMPORTED_MODULE_0__.peopleFeatureKey); // TODO: need to add a selector for people.


      var _selectPeople = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectPeopleState, function (state) {
        return state.people;
      }); // Added an additional selector to showcase loading state behavior


      var _selectPeopleIsLoading = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectPeopleState, function (state) {
        return state.isLoading;
      }); // Add selector for selected person's id


      var _selectedPersonId = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectPeopleState, function (state) {
        return state.selectedPersonId;
      });
      /***/

    },

    /***/
    7259:
    /*!*****************************************************************!*\
      !*** ./src/app/components/people-ngrx/people-ngrx.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleNgrxComponent": function PeopleNgrxComponent() {
          return (
            /* binding */
            _PeopleNgrxComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_selectors_people_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ngrx/selectors/people.selectors */
      4238);
      /* harmony import */


      var _ngrx_actions_people_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngrx/actions/people.actions */
      5869);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      5585);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _person_person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./person/person.component */
      5851);

      function PeopleNgrxComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Finding People...");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      function PeopleNgrxComponent_ng_template_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-person", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var person_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("person", person_r4);
        }
      }

      function PeopleNgrxComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Meet our People");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PeopleNgrxComponent_ng_template_2_div_4_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r2.people$));
        }
      }

      var _PeopleNgrxComponent = /*#__PURE__*/function () {
        // TODO: Include the Store and get the data from the NgrxStore
        function _PeopleNgrxComponent(store) {
          _classCallCheck(this, _PeopleNgrxComponent);

          this.store = store;
          this.people$ = this.store.select(_ngrx_selectors_people_selectors__WEBPACK_IMPORTED_MODULE_0__.selectPeople);
          this.isLoading$ = this.store.select(_ngrx_selectors_people_selectors__WEBPACK_IMPORTED_MODULE_0__.selectPeopleIsLoading);
        }

        _createClass(_PeopleNgrxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch((0, _ngrx_actions_people_actions__WEBPACK_IMPORTED_MODULE_1__.loadPeoples)());
          }
        }]);

        return _PeopleNgrxComponent;
      }();

      _PeopleNgrxComponent.ɵfac = function PeopleNgrxComponent_Factory(t) {
        return new (t || _PeopleNgrxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
      };

      _PeopleNgrxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PeopleNgrxComponent,
        selectors: [["app-people-component"]],
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf", "ngIfElse"], ["peopleView", ""], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "300px"], [1, "mr-4"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "36px"], [1, "p-3", "p-md-5"], [1, "container", "pl-0"], [1, "my-4"], [4, "ngFor", "ngForOf"], [3, "person"]],
        template: function PeopleNgrxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PeopleNgrxComponent_ng_container_0_Template, 6, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PeopleNgrxComponent_ng_template_2_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.isLoading$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _person_person_component__WEBPACK_IMPORTED_MODULE_2__.PersonComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUtbmdyeC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    6915:
    /*!**************************************************************!*\
      !*** ./src/app/components/people-ngrx/people-ngrx.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleNgrxModule": function PeopleNgrxModule() {
          return (
            /* binding */
            _PeopleNgrxModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _people_ngrx_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./people-ngrx.component */
      7259);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      5585);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/effects */
      369);
      /* harmony import */


      var _ngrx_reducers_people_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngrx/reducers/people.reducer */
      7130);
      /* harmony import */


      var _ngrx_effects_people_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngrx/effects/people.effects */
      6281);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _person_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./person/person.component */
      5851);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PeopleNgrxModule = /*#__PURE__*/_createClass(function _PeopleNgrxModule() {
        _classCallCheck(this, _PeopleNgrxModule);
      });

      _PeopleNgrxModule.ɵfac = function PeopleNgrxModule_Factory(t) {
        return new (t || _PeopleNgrxModule)();
      };

      _PeopleNgrxModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _PeopleNgrxModule
      });
      _PeopleNgrxModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature(_ngrx_reducers_people_reducer__WEBPACK_IMPORTED_MODULE_1__.peopleFeatureKey, _ngrx_reducers_people_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forFeature([_ngrx_effects_people_effects__WEBPACK_IMPORTED_MODULE_2__.PeopleEffects]), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_PeopleNgrxModule, {
          declarations: [_people_ngrx_component__WEBPACK_IMPORTED_MODULE_0__.PeopleNgrxComponent, _person_person_component__WEBPACK_IMPORTED_MODULE_3__.PersonComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsFeatureModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
          exports: [_people_ngrx_component__WEBPACK_IMPORTED_MODULE_0__.PeopleNgrxComponent]
        });
      })();
      /***/

    },

    /***/
    5851:
    /*!*******************************************************************!*\
      !*** ./src/app/components/people-ngrx/person/person.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonComponent": function PersonComponent() {
          return (
            /* binding */
            _PersonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../ngrx/actions/people.actions */
      5869);
      /* harmony import */


      var _ngrx_selectors_people_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ngrx/selectors/people.selectors */
      4238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      5585);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function PersonComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "age: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonComponent_div_2_Template_div_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.selectPerson(ctx_r3.person.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.person.firstName, " ", ctx_r0.person.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.person.age, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.person.jobTitle, " ");
        }
      }

      function PersonComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit this person");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonComponent_ng_template_3_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonComponent_ng_template_3_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonComponent_ng_template_3_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.age = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Job Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonComponent_ng_template_3_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.jobTitle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonComponent_ng_template_3_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.deselectPerson();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonComponent_ng_template_3_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.updatePerson();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.jobTitle);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "border border-primary": a0
        };
      };

      var _PersonComponent = /*#__PURE__*/function () {
        function _PersonComponent(store) {
          _classCallCheck(this, _PersonComponent);

          this.store = store;
          this.selectedPersonId$ = this.store.select(_ngrx_selectors_people_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedPersonId);
        }

        _createClass(_PersonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.setFormValues();
            this.selectedPersonSubscription = this.selectedPersonId$.subscribe(function (id) {
              if (id === _this3.person.id) {
                _this3.isSelected = true;
              } else {
                _this3.isSelected = false;

                _this3.setFormValues();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.selectedPersonSubscription.unsubscribe();
          }
        }, {
          key: "selectPerson",
          value: function selectPerson(id) {
            this.store.dispatch((0, _ngrx_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.selectPerson)({
              id: id
            }));
          }
        }, {
          key: "deselectPerson",
          value: function deselectPerson() {
            this.store.dispatch((0, _ngrx_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.deselectPerson)());
          }
        }, {
          key: "updatePerson",
          value: function updatePerson() {
            var updatePersonDto = {
              id: this.person.id,
              firstName: this.firstName,
              lastName: this.lastName,
              age: this.age,
              jobTitle: this.jobTitle
            };
            this.store.dispatch((0, _ngrx_actions_people_actions__WEBPACK_IMPORTED_MODULE_0__.updatePerson)({
              person: updatePersonDto
            }));
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.firstName = this.person.firstName;
            this.lastName = this.person.lastName;
            this.age = this.person.age;
            this.jobTitle = this.person.jobTitle;
          }
        }]);

        return _PersonComponent;
      }();

      _PersonComponent.ɵfac = function PersonComponent_Factory(t) {
        return new (t || _PersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
      };

      _PersonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PersonComponent,
        selectors: [["app-person"]],
        inputs: {
          person: "person"
        },
        decls: 5,
        vars: 5,
        consts: [[1, "container", "px-0"], [1, "card", "p-2", "p-md-3", "mb-3", 3, "ngClass"], ["class", "row align-items-center", 4, "ngIf", "ngIfElse"], ["editView", ""], [1, "row", "align-items-center"], [1, "col-5", "col-sm-7", "sm-row"], [1, "col-12", "col-sm-8", "h6", "mb-0"], [1, "col-12", "col-sm-4"], [2, "font-size", "11px"], [1, "col-5", "col-sm-4"], [1, "col-2", "col-sm-1", "d-flex", "justify-content-end", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-ellipsis-h", "mr-2"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "aria-label", "First Name", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-label", "Last Name", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-label", "Age", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-label", "Job Title", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-secondar", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
        template: function PersonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PersonComponent_div_2_Template, 12, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonComponent_ng_template_3_Template, 27, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.isSelected));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSelected)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6854:
    /*!****************************************!*\
      !*** ./src/app/models/person-model.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonModel": function PersonModel() {
          return (
            /* binding */
            _PersonModel
          );
        }
        /* harmony export */

      });

      var _PersonModel = /*#__PURE__*/_createClass(function _PersonModel(dataIn) {
        _classCallCheck(this, _PersonModel);

        // TODO: Implement a dataIn object that gets passed in as a JavaScript Object
        if (dataIn) {
          this.firstName = dataIn.firstName;
          this.lastName = dataIn.lastName;
          this.age = dataIn.age;
          this.jobTitle = dataIn.jobTitle;
          this.id = dataIn.id;
        }
      });
      /***/

    },

    /***/
    1697:
    /*!***********************************!*\
      !*** ./src/app/reducers/index.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reducers": function reducers() {
          return (
            /* binding */
            _reducers
          );
        },

        /* harmony export */
        "metaReducers": function metaReducers() {
          return (
            /* binding */
            _metaReducers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);

      var _reducers = {};

      var _metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];
      /***/

    },

    /***/
    2255:
    /*!********************************************!*\
      !*** ./src/app/services/people.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeopleService": function PeopleService() {
          return (
            /* binding */
            _PeopleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5428);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      1134);
      /* harmony import */


      var _models_person_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/person-model */
      6854);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PeopleService = /*#__PURE__*/function () {
        function _PeopleService() {
          _classCallCheck(this, _PeopleService);

          this.mockPeopleList = [{
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 21,
            jobTitle: 'Wanna be Signer'
          }, {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            age: 22,
            jobTitle: 'Signer'
          }, {
            id: 3,
            firstName: 'Bob',
            lastName: 'Barker',
            age: 80,
            jobTitle: 'TV Host'
          }, {
            id: 4,
            firstName: 'John',
            lastName: 'Doe',
            age: 21,
            jobTitle: 'Wanna be Signer'
          }].map(function (person) {
            return new _models_person_model__WEBPACK_IMPORTED_MODULE_0__.PersonModel(person);
          });
        }

        _createClass(_PeopleService, [{
          key: "getPeople",
          value: function getPeople() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(2000)).toPromise();

                    case 2:
                      return _context.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.mockPeopleList).toPromise());

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _PeopleService;
      }();

      _PeopleService.ɵfac = function PeopleService_Factory(t) {
        return new (t || _PeopleService)();
      };

      _PeopleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _PeopleService,
        factory: _PeopleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map