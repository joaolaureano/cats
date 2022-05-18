(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/back-button/back-button.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/back-button/back-button.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\" border rounded-circle text-center\" type=\"button\" (click) = \"getBack($event)\">&larr;</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cats-full-screen/cats-full-screen.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cats-full-screen/cats-full-screen.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-back-button></app-back-button>\n<div class=\"container-fluid m-0 p-0 d-flex flex-wrap justify-content-center \">\n    <img src={{catUrl}} *ngFor=\"let catUrl of groupCat\" />\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/http-generator/http-generator.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/http-generator/http-generator.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center flex-column\">\n  <img src=\"{{ httpImage }}\" class=\"img-fluid w-50 mw-50 my-2\" />\n  <label> Type the HTTP code:</label>\n  <input class=\"w-25\" [(ngModel)]=\"httpCode\" />\n  <button\n    [disabled]=\"!httpCode\"\n    (click)=\"generateFunnyImage()\"\n    class=\"btn bg-dark text-white\"\n  >\n    GENERATE FUNNY IMAGE\n  </button>\n</div>\n\n<app-back-button class=\"position\"></app-back-button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main-menu/main-menu.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main-menu/main-menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  h-100 overflow-hidden\">\n    <div class=\"row h-100\">\n        <div class=\"effect-div img1 col-6 d-flex align-items-center justify-content-center\" [routerLink]=\"['/imageGenerator']\">\n            <h2 class=\"text-white text-center h3\">\n                I WANNA SEE SOME FUNNY CATS\n            </h2>\n        </div>\n        <div class=\"effect-div img2 col-6 d-flex align-items-center justify-content-center\" [routerLink]=\"['/httpGenerator']\">\n            <h2 class=\"text-white text-center h3\">\n                I WANNA SEE THE BEST IMAGE FOR EACH HTTP\n            </h2> \n        </div>\n    </div>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/random-images/random-images.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/random-images/random-images.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-back-button class=\"position\"></app-back-button>\n<div class=\"d-flex align-items-center flex-column\">\n  <h2>AWESOMEST CATZ GENERATOR!!!!11</h2>\n  <img class=\"img-fluid w-75 mw-75 my-2\" src=\"{{ randomimage }}\" />\n  <div class=\"d-flex flex-row gap\">\n    <button class=\"btn bg-dark text-white\" (click)=\"generateImg()\">\n      Generate another FUNNYZ IMAGE LOL (☞ﾟヮﾟ)☞\n    </button>\n    <button class=\"btn bg-dark text-white\" (click)=\"saveImage()\">\n      OWN SAVE THAT ฅ^•ﻌ•^ฅ\n    </button>\n    <button\n      [disabled]=\"!imagesUrl.length\"\n      class=\"btn bg-dark text-white\"\n      (click)=\"deleteImage()\"\n    >\n      i hated the last one. remove it. &#9760;\n    </button>\n  </div>\n</div>\n<div *ngIf=\"imagesUrl.length != 0\">\n  <h1 class=\"text-center\">THE CUTTEST IMAGES EVA</h1>\n</div>\n<div class=\"d-flex w-100 align-items-center justify-content-center flex-wrap\">\n  <img\n    *ngFor=\"let image of imagesUrl\"\n    src=\"{{ image }}\"\n    class=\"w-25 mb-2 ml-5\"\n  />\n</div>\n<div class=\"spinner-container\" *ngIf=\"spinnerActive\">\n  <img src=\"{{ nyan_cat }}\" />\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main-menu/main-menu.component */ "./src/app/pages/main-menu/main-menu.component.ts");
/* harmony import */ var _pages_random_images_random_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/random-images/random-images.component */ "./src/app/pages/random-images/random-images.component.ts");
/* harmony import */ var _pages_http_generator_http_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/http-generator/http-generator.component */ "./src/app/pages/http-generator/http-generator.component.ts");
/* harmony import */ var _pages_cats_full_screen_cats_full_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/cats-full-screen/cats-full-screen.component */ "./src/app/pages/cats-full-screen/cats-full-screen.component.ts");







const routes = [
    { path: "httpGenerator", component: _pages_http_generator_http_generator_component__WEBPACK_IMPORTED_MODULE_5__["HttpGeneratorComponent"] },
    { path: "imageGenerator", component: _pages_random_images_random_images_component__WEBPACK_IMPORTED_MODULE_4__["RandomImagesComponent"] },
    { path: "fullCats", component: _pages_cats_full_screen_cats_full_screen_component__WEBPACK_IMPORTED_MODULE_6__["CatsFullScreenComponent"] },
    { path: "**", component: _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    margin-left: 0px !important;\n    padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cats';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main-menu/main-menu.component */ "./src/app/pages/main-menu/main-menu.component.ts");
/* harmony import */ var _pages_random_images_random_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/random-images/random-images.component */ "./src/app/pages/random-images/random-images.component.ts");
/* harmony import */ var _pages_http_generator_http_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/http-generator/http-generator.component */ "./src/app/pages/http-generator/http-generator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_cats_full_screen_cats_full_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/cats-full-screen/cats-full-screen.component */ "./src/app/pages/cats-full-screen/cats-full-screen.component.ts");
/* harmony import */ var _components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/back-button/back-button.component */ "./src/app/components/back-button/back-button.component.ts");
/* harmony import */ var _services_spinner_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/spinner-interceptor-service */ "./src/app/services/spinner-interceptor-service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"],
            _pages_random_images_random_images_component__WEBPACK_IMPORTED_MODULE_7__["RandomImagesComponent"],
            _pages_http_generator_http_generator_component__WEBPACK_IMPORTED_MODULE_8__["HttpGeneratorComponent"],
            _pages_cats_full_screen_cats_full_screen_component__WEBPACK_IMPORTED_MODULE_10__["CatsFullScreenComponent"],
            _components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_11__["BackButtonComponent"],
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _services_spinner_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerInterceptorService"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/back-button/back-button.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/back-button/back-button.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\n  background-color: gray;\n}\nbutton:active {\n  transform: translateY(4px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/back-button/back-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/back-button/back-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackButtonComponent = class BackButtonComponent {
    constructor() { }
    ngOnInit() {
    }
    getBack(e) {
        e.preventDefault();
        window.history.back();
    }
};
BackButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-back-button',
        template: __webpack_require__(/*! raw-loader!./back-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/back-button/back-button.component.html"),
        styles: [__webpack_require__(/*! ./back-button.component.css */ "./src/app/components/back-button/back-button.component.css")]
    })
], BackButtonComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.imagesEndPoint = "https://aws.random.cat/meow";
        this.httpEndPoint = "https://http.cat/";
        this.catEndPoint = "http://aws.random.cat/meow";
    }
    getImage() {
        return this.http.get(this.imagesEndPoint);
    }
    getHttpImage(code) {
        return this.http.get(this.httpEndPoint + code);
    }
    getCat() {
        return this.http.get(this.catEndPoint);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/pages/cats-full-screen/cats-full-screen.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cats-full-screen/cats-full-screen.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    max-height:25vw;\n    /* height: vw; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0cy1mdWxsLXNjcmVlbi9jYXRzLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0cy1mdWxsLXNjcmVlbi9jYXRzLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgbWF4LWhlaWdodDoyNXZ3O1xuICAgIC8qIGhlaWdodDogdnc7ICovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/cats-full-screen/cats-full-screen.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cats-full-screen/cats-full-screen.component.ts ***!
  \**********************************************************************/
/*! exports provided: CatsFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsFullScreenComponent", function() { return CatsFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



let CatsFullScreenComponent = class CatsFullScreenComponent {
    constructor(http) {
        this.http = http;
        this.groupCat = [];
    }
    ngOnInit() {
        this.generateCat();
    }
    generateCat() {
        for (let i = 0; i < 50; i++)
            this.http.getCat().subscribe((res) => {
                this.groupCat.push(res["file"]);
            });
    }
};
CatsFullScreenComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
CatsFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cats-full-screen",
        template: __webpack_require__(/*! raw-loader!./cats-full-screen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cats-full-screen/cats-full-screen.component.html"),
        styles: [__webpack_require__(/*! ./cats-full-screen.component.css */ "./src/app/pages/cats-full-screen/cats-full-screen.component.css")]
    })
], CatsFullScreenComponent);



/***/ }),

/***/ "./src/app/pages/http-generator/http-generator.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/http-generator/http-generator.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-bottom: 10px;\n}\nimg {\n  max-width: 75%;\n}\n.position {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHR0cC1nZW5lcmF0b3IvaHR0cC1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9odHRwLWdlbmVyYXRvci9odHRwLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmltZyB7XG4gIG1heC13aWR0aDogNzUlO1xufVxuLnBvc2l0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/http-generator/http-generator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/http-generator/http-generator.component.ts ***!
  \******************************************************************/
/*! exports provided: HttpGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpGeneratorComponent", function() { return HttpGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



let HttpGeneratorComponent = class HttpGeneratorComponent {
    constructor(http) {
        this.http = http;
        this.httpImage = "../../assets/FUNNYCAT2.jpg";
    }
    ngOnInit() { }
    generateFunnyImage() {
        this.httpImage = "https://http.cat/" + this.httpCode;
    }
};
HttpGeneratorComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
HttpGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-http-generator",
        template: __webpack_require__(/*! raw-loader!./http-generator.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/http-generator/http-generator.component.html"),
        styles: [__webpack_require__(/*! ./http-generator.component.css */ "./src/app/pages/http-generator/http-generator.component.css")]
    })
], HttpGeneratorComponent);



/***/ }),

/***/ "./src/app/pages/main-menu/main-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/main-menu/main-menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".effect-div\n{\n  background-size: 100% 100%;\n}\n.effect-div{\n    transition: 0.8s ease;\n    opacity:0.5;\n}\n.effect-div:hover{\n    transform: scale(1.2);\n    opacity:0.9;\n    cursor: pointer;\n}\n.img1{background-image: url(\"/assets/FUNNYCAT.jpg\")}\n.img2{background-image: url(\"/assets/FUNNYCAT2.jpg\")}\n.img2:hover{background-image: url(\"/assets/djcat.gif\")}\n.img1:hover{background-image: url(\"/assets/pianocat.gif\")}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDBCQUEwQjtBQUM1QjtBQUNBO0lBRUkscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUNBO0lBRUkscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0EsTUFBTSw2Q0FBNkM7QUFDbkQsTUFBTSw4Q0FBOEM7QUFDcEQsWUFBWSwwQ0FBMEM7QUFDdEQsWUFBWSw2Q0FBNkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWZmZWN0LWRpdlxue1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5lZmZlY3QtZGl2eyBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246MC44cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuOHMgZWFzZTtcbiAgICBvcGFjaXR5OjAuNTtcbn1cbi5lZmZlY3QtZGl2OmhvdmVye1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBvcGFjaXR5OjAuOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nMXtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0ZVTk5ZQ0FULmpwZ1wiKX1cbi5pbWcye2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvRlVOTllDQVQyLmpwZ1wiKX1cbi5pbWcyOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZGpjYXQuZ2lmXCIpfVxuLmltZzE6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWFub2NhdC5naWZcIil9Il19 */"

/***/ }),

/***/ "./src/app/pages/main-menu/main-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-menu/main-menu.component.ts ***!
  \********************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainMenuComponent = class MainMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main-menu/main-menu.component.html"),
        styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/pages/main-menu/main-menu.component.css")]
    })
], MainMenuComponent);



/***/ }),

/***/ "./src/app/pages/random-images/random-images.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/random-images/random-images.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-bottom: 10px;\n}\nimg {\n  width: 60vw;\n  height: 80vh;\n}\n.position {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.gap {\n  gap: 15px;\n}\n.spinner-container {\n  background-color: rgba(0, 0, 0, 0.1);\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n}\n.spinner-container img {\n  width: 200px;\n  height: 200px;\n  border-radius: 360px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmFuZG9tLWltYWdlcy9yYW5kb20taW1hZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtBQUNSO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmFuZG9tLWltYWdlcy9yYW5kb20taW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW1nIHtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogODB2aDtcbn1cbi5wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5nYXAge1xuICBnYXA6IDE1cHg7XG59XG4uc3Bpbm5lci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/random-images/random-images.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/random-images/random-images.component.ts ***!
  \****************************************************************/
/*! exports provided: RandomImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomImagesComponent", function() { return RandomImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_spinner_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spinner-handler-service */ "./src/app/services/spinner-handler-service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");




let RandomImagesComponent = class RandomImagesComponent {
    constructor(spinnerHandler, serviceImage) {
        this.spinnerHandler = spinnerHandler;
        this.serviceImage = serviceImage;
        this.randomimage = "../../assets/FUNNYCAT.jpg";
        this.nyan_cat = "../../assets/nyan_cat.gif";
        this.spinnerActive = true;
        this.imagesUrl = [];
        this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
    }
    ngOnInit() { }
    generateImg() {
        this.serviceImage.getImage().subscribe((res) => {
            this.randomimage = res["file"];
        });
    }
    saveImage() {
        this.imagesUrl.push(this.randomimage);
    }
    deleteImage() {
        this.imagesUrl.splice(-1, 1);
    }
    showSpinner(state) {
        this.spinnerActive = state;
    }
};
RandomImagesComponent.ctorParameters = () => [
    { type: src_app_services_spinner_handler_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerHandlerService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
RandomImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-random-images",
        template: __webpack_require__(/*! raw-loader!./random-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/random-images/random-images.component.html"),
        styles: [__webpack_require__(/*! ./random-images.component.css */ "./src/app/pages/random-images/random-images.component.css")]
    })
], RandomImagesComponent);



/***/ }),

/***/ "./src/app/services/spinner-handler-service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/spinner-handler-service.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerHandlerService", function() { return SpinnerHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SpinnerHandlerService = class SpinnerHandlerService {
    constructor() {
        this.numberOfRequests = 0;
        this.showSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.handleRequest = (state = "minus") => {
            this.numberOfRequests =
                state === "plus" ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
            this.showSpinner.next(this.numberOfRequests > 0);
        };
    }
};
SpinnerHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SpinnerHandlerService);



/***/ }),

/***/ "./src/app/services/spinner-interceptor-service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/spinner-interceptor-service.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerInterceptorService", function() { return SpinnerInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _spinner_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner-handler-service */ "./src/app/services/spinner-handler-service.ts");




let SpinnerInterceptorService = class SpinnerInterceptorService {
    constructor(spinnerHandler) {
        this.spinnerHandler = spinnerHandler;
        this.finalize = () => this.spinnerHandler.handleRequest();
    }
    intercept(request, next) {
        this.spinnerHandler.handleRequest("plus");
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(this.finalize.bind(this)));
    }
};
SpinnerInterceptorService.ctorParameters = () => [
    { type: _spinner_handler_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerHandlerService"] }
];
SpinnerInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SpinnerInterceptorService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/loreano/Desktop/projects/cats/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map