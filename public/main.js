(self["webpackChunksparklingv2"] = self["webpackChunksparklingv2"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("default-src_app_admin_employee_employee_module_ts"), __webpack_require__.e("default-src_app_admin_user-role_user-role_module_ts"), __webpack_require__.e("default-src_app_shared_resolvers_user_user_resolver_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_resolvers_user_user_resolver_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_shared_services_client_socket_service_ts"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("default-src_app_admin_employee_employee_module_ts"), __webpack_require__.e("default-src_app_admin_user-role_user-role_module_ts"), __webpack_require__.e("default-src_app_shared_resolvers_user_user_resolver_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_admin_recruitment_recruitment_module_ts"), __webpack_require__.e("default-src_app_shared_services_client_socket_service_ts"), __webpack_require__.e("src_app_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./client/client.module */ 6319)).then(m => m.ClientModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ 2879);




// import { EmployeeService } from './services/employee.service';
// import { MatDialog } from '@angular/material/dialog';
class AppComponent {
    constructor(changeDetectorRef, media) {
        this.title = 'Sparklingv2';
        this.fillerNav = [
            'Home',
            'Services',
            'Pricing',
            'Get Quote',
            'About us',
            'FAQ',
            'Login / Register',
            'Dashboard',
        ];
        this.fillerContent = Array.from({ length: 8 }, (_, i) => `Index: ${i}`);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.MediaMatcher)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "simple-notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, angular2_notifications__WEBPACK_IMPORTED_MODULE_3__.SimpleNotificationsComponent], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFOzBGQUFBO0VBRUEsT0FBQTtBQUNKOztBQUVFO0VBQ0U7K0RBQUE7RUFFQSxjQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-notifications */ 2879);
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ 3236);
/* harmony import */ var _shared_interceptors_device_info_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors/device-info.interceptor */ 9953);
/* harmony import */ var _shared_interceptors_url_caching_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors/url-caching.interceptor */ 7699);
/* harmony import */ var _shared_interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/interceptors/header.interceptor */ 8089);
/* harmony import */ var _shared_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/interceptors/loader.interceptor */ 5405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_device_info_interceptor__WEBPACK_IMPORTED_MODULE_3__.DeviceInfoInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_url_caching_interceptor__WEBPACK_IMPORTED_MODULE_4__.UrlCachingInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_5__.HeaderInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__.LoaderInterceptor, multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            angular2_notifications__WEBPACK_IMPORTED_MODULE_12__.SimpleNotificationsModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, angular2_notifications__WEBPACK_IMPORTED_MODULE_12__.SimpleNotificationsModule] }); })();


/***/ }),

/***/ 9953:
/*!****************************************************************!*\
  !*** ./src/app/shared/interceptors/device-info.interceptor.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceInfoInterceptor": () => (/* binding */ DeviceInfoInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ 1946);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class DeviceInfoInterceptor {
    constructor(deviceDetectorService, http) {
        this.deviceDetectorService = deviceDetectorService;
        this.http = http;
    }
    // This interceptor makes user of the ngx-device-detector to detect device info
    intercept(request, next) {
        let requestClone = request.clone();
        if (request.method == "POST") {
            requestClone = this.handleBodyIn(requestClone, this.deviceDetectorService.userAgent, 'user_agent');
            requestClone = this.handleBodyIn(requestClone, this.deviceDetectorService.browser_version, 'browserVersion');
            requestClone = this.handleBodyIn(requestClone, this.deviceDetectorService.os, 'os');
            requestClone = this.handleBodyIn(requestClone, this.deviceDetectorService.os_version, 'osVersion');
            requestClone = this.handleBodyIn(requestClone, this.deviceDetectorService.browser, 'browser');
            requestClone = this.handleBodyIn(requestClone, this.deviceDetectorService.orientation, 'deviceOrientation');
        }
        return next.handle(requestClone);
    }
    handleBodyIn(req, tokenToAdd, tokenName) {
        if (req.method.toLowerCase() === 'post') {
            if (req.body instanceof FormData) {
                req = req.clone({
                    body: req.body.append(tokenName, tokenToAdd)
                });
            }
            else {
                const foo = {};
                foo[tokenName] = tokenToAdd;
                req = req.clone({
                    body: Object.assign(Object.assign({}, req.body), foo)
                });
            }
        }
        if (req.method.toLowerCase() === 'get') {
            req = req.clone({
                params: req.params.set(tokenName, tokenToAdd)
            });
        }
        return req;
    }
}
DeviceInfoInterceptor.ɵfac = function DeviceInfoInterceptor_Factory(t) { return new (t || DeviceInfoInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DeviceInfoInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceInfoInterceptor, factory: DeviceInfoInterceptor.ɵfac });


/***/ }),

/***/ 3236:
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7859);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);



// @Injectable()
class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return this.handler(next, request);
    }
    handler(next, request) {
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((httpError) => {
            console.log(httpError);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(httpError);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((httpError) => {
            console.log(httpError);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(httpError);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8089:
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/header.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInterceptor": () => (/* binding */ HeaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user/user.service */ 4758);
/* harmony import */ var _services_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Index */ 9237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);





class HeaderInterceptor {
    constructor(_us, _auth, router) {
        this._us = _us;
        this._auth = _auth;
        this.router = router;
        this.user$ = this._us.getAuthUserApi(this._auth.sessionAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.pop())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
    }
    intercept(request, next) {
        if (request.method == "POST") {
            return this.handleRequest(request, next);
        }
        return next.handle(request);
    }
    handleRequest(request, next) {
        let requestClone = request.clone();
        let user = this._us.getuser();
        if (!user || !user.code) {
            return this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((res) => {
                if (res && res.id) {
                    this._us.setuser(res);
                    if (request.body instanceof FormData) {
                        requestClone = request.clone({
                            body: request.body.append('who', res.code)
                        });
                    }
                    else {
                        const body = Object.assign({ who: user.code }, request.body);
                        requestClone = request.clone({ body });
                    }
                }
                return next.handle(requestClone);
            }));
        }
        else {
            if (request.body instanceof FormData) {
                requestClone = request.clone({
                    body: request.body.append('who', user.code)
                });
            }
            else {
                const body = Object.assign({ who: user.code }, request.body);
                requestClone = request.clone({ body });
            }
        }
        return next.handle(requestClone);
    }
}
HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) { return new (t || HeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Index__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
HeaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HeaderInterceptor, factory: HeaderInterceptor.ɵfac });


/***/ }),

/***/ 5405:
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/loader.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);


class LoaderInterceptor {
    constructor() { }
    intercept(request, next) {
        return this.handler(next, request);
    }
    handler(next, request) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(evt => {
        }));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 7699:
/*!****************************************************************!*\
  !*** ./src/app/shared/interceptors/url-caching.interceptor.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlCachingInterceptor": () => (/* binding */ UrlCachingInterceptor)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_client_cache_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client/cache-registration.service */ 1090);






const TTL = 96;
// List of url to not cache
const uncacheUrl = [
    `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/auth/login`,
    `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/auth/update/guest/profile`,
    `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/auth/register`
];
class UrlCachingInterceptor {
    constructor(cacheRegistrationService) {
        this.cacheRegistrationService = cacheRegistrationService;
    }
    intercept(req, next) {
        const cachedResponse = this.cacheRegistrationService.get(req.url);
        if (cachedResponse && cachedResponse.url) {
            if (uncacheUrl.includes(cachedResponse.url)) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cachedResponse);
            }
        }
        return this.sendRequest(req, next);
        // return cachedResponse
        // '?' of(cachedResponse)
        //     : this.sendRequest(req, next);
    }
    sendRequest(req, next) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(evt => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                this.cacheRegistrationService.set(req.url, evt, TTL);
            }
        }));
    }
}
UrlCachingInterceptor.ɵfac = function UrlCachingInterceptor_Factory(t) { return new (t || UrlCachingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_client_cache_registration_service__WEBPACK_IMPORTED_MODULE_1__.CacheRegistrationService)); };
UrlCachingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UrlCachingInterceptor, factory: UrlCachingInterceptor.ɵfac });


/***/ }),

/***/ 4091:
/*!*******************************************!*\
  !*** ./src/app/shared/models/Document.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Document": () => (/* binding */ Document)
/* harmony export */ });
class Document {
    constructor() {
        this.children = [];
        this.name = '';
        this.status = 'unsaved';
        this.type = '';
        this.id = Math.random() * (324234 - 12) + 12;
        this._created_at = new Date(Date.now());
        this._updated_at = this.created_at;
    }
    get created_at() {
        return this._created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
}


/***/ }),

/***/ 4472:
/*!****************************************!*\
  !*** ./src/app/shared/models/Index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GUESS": () => (/* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_0__.GUESS),
/* harmony export */   "DocumentNode": () => (/* reexport safe */ _Document__WEBPACK_IMPORTED_MODULE_1__.Document)
/* harmony export */ });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ 4060);
/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Document */ 4091);





/***/ }),

/***/ 4060:
/*!***************************************!*\
  !*** ./src/app/shared/models/User.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GUESS": () => (/* binding */ GUESS)
/* harmony export */ });
const GUESS = {
    firstName: '',
    code: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    password: '',
    created_at: '',
    role: [],
    status: '',
    authToken: '',
    id: '',
    who: null,
    email_verified: false,
    phone_verified: false,
    webauthn: false,
    webauthn_devices: [],
    last_login_at: '',
    login_count: 0,
    user_metadata: null,
    webauthn_types: [],
    update_at: ''
};



/***/ }),

/***/ 9237:
/*!******************************************!*\
  !*** ./src/app/shared/services/Index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)
/* harmony export */ });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ 6256);




/***/ }),

/***/ 6256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _passageidentity_passage_elements_passage_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @passageidentity/passage-elements/passage-user */ 6115);
/* harmony import */ var _passageidentity_passage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @passageidentity/passage-js */ 8109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);









class AuthService {
  // private attemptRegisterKey$: Observable<any> = from( this.registerPasskey()).pipe(shareReplay(1))
  constructor(http) {
    this.http = http;
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
    this.listOfUsers = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.user$ = this.user.asObservable();
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api;
    this.isAuthenticated = false;
    this.username = '';
    this.isLoading = true;
    this.appId = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.passageAppId;
    this.passage = new _passageidentity_passage_js__WEBPACK_IMPORTED_MODULE_3__.Passage(this.appId);
    this._passage = this.passage; // this.attemptRegisterKey$.subscribe()
  }

  showEnablePasskey(identifier) {
    var _this = this;

    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const user = yield _this.passage.identifierExists(identifier); // If the user's device is capable of registering a passkey
      // and they have yet to register a passkey

      if (!(user === null || user === void 0 ? void 0 : user.hasPasskey) && (yield _this.passage.createCredentialAvailable()).isAvailable) return true;
      return false;
    })();
  }

  registerPasskey() {
    var _this2 = this;

    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // Get or Create Current User within Passage Express Authorizer Function
      const passageUser = _this2.passage.getCurrentUser(); // If your Authorizer Function denies the request.
      // getCurrentUser will return null.


      if (!passageUser) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(new Error("Failed to Get or Create Passage User"));
      }

      ;
      _this2._passage = new _passageidentity_passage_js__WEBPACK_IMPORTED_MODULE_3__.Passage(_this2.appId, passageUser.tokenStore); // console.log(passageUser)
      // console.log(this._passage)
      // console.log(this.passage)

      try {
        const passkey = yield _this2._passage.getCurrentUser().addDevice(); // console.log(passkey)

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(passkey); // Show passkey has successfully been registered
      } catch (e) {
        // console.log(JSON.stringify(e))
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(new Error(`Opps, Issues with user browser. Possible reasons: 1. User Device does not support webauthn 2. User cancels the register passkey flow 3. Network request error.`));
      }
    })();
  }

  isLoggedIn() {
    var _this3 = this;

    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.isLoading = true;
      return yield new _passageidentity_passage_elements_passage_user__WEBPACK_IMPORTED_MODULE_2__.PassageUser().userInfo().then(userInfo => {
        if (userInfo !== undefined) {
          _this3.isLoading = false;
          _this3.isAuthenticated = true;
          _this3.username = userInfo.email ? userInfo.email : userInfo.phone;
        } else {
          _this3.isLoading = false;
          _this3.isAuthenticated = false;
          _this3.username = '';
        }

        return _this3.isAuthenticated;
      });
    })();
  }

  passageAppInfo() {
    var _this4 = this;

    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4._passage.appInfo();
    })();
  }

  passageLogin(data) {
    var _this5 = this;

    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5._passage.register(data); // return await this._passage.login(data)
    })();
  }

  generateAuthToken() {
    let date = new Date();
    return `Auth-${date.getTime().toString()}-temp-session`;
  }

  registerApi(user) {
    return this.http.post(`${this.apiUrl}/users`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      return {
        status: '200',
        response: 'User successfully registered in the server',
        user,
        res
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(result => {
      let list = this.listOfUsers.value;
      list.push(result.res);
      this.listOfUsers.next(list);
    }));
  }

  get sessionAuth() {
    return localStorage.getItem('_authToken');
  }

  setsessionAuth(token) {
    localStorage.setItem('_authToken', token);
  }

  clearsessionAuth() {
    localStorage.clear();
    sessionStorage.clear();
  }

  logout() {
    return this.deleteAuthTokenApi(this.sessionAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
      this.clearsessionAuth();
      this.user.next(undefined);

      this._clearsession();
    }));
  }

  _clearsession() {
    localStorage.clear();
  }

  authticateUserApi(user) {
    let authUser = user;
    authUser.id = undefined;
    return this.http.post(`${this.apiUrl}/auth`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      return {
        status: '200',
        response: 'User successfully authenticated',
        user: res,
        res
      };
    }));
  }

  loginApi(user) {
    let headerParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set('email', user.email).set('password', user.password);
    return this.http.get(`${this.apiUrl}/users`, {
      params: headerParams
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      if (res.length < 1) {
        return {
          status: false,
          message: 'Incorrect credentials. No user found'
        };
      }

      return {
        status: true,
        message: 'User exist',
        user: res[0]
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(response => {
      if (response.status) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.passageLogin(user.email)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(result => {
          if (result.auth_token) {
            let ru = response.user;
            let toret = Object.assign(Object.assign({}, ru), {
              authToken: result.auth_token,
              auth_token: result.auth_token
            });
            return this.authticateUserApi(toret).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(_response => {
              this.setsessionAuth(_response.res.authToken);
              this.user.next(_response.res);
            }));
          }

          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
            status: '403',
            response: result
          });
        }));
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
        status: '403',
        response: response.message
      });
    }));
  }

  getAuthUserApi(token) {
    let headerParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set('authToken', token);
    return this.http.get(`${this.apiUrl}/auth`, {
      params: headerParams
    });
  }

  deleteAuthTokenApi(token) {
    if (token) {
      return this.getAuthUserApi(token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => res.pop()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(result => {
        if (result.id) {
          return this.http.delete(`${this.apiUrl}/auth/${result.id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
            return {
              status: '200',
              response: 'Successfully logged out user',
              data: res
            };
          }));
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          status: '403',
          response: 'Invalid user in session'
        });
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      status: '403',
      response: 'Invalid token in session'
    });
  }

  getUserByEmailApi(email) {
    let headerParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set('email', email);
    return this.http.get(`${this.apiUrl}/users`, {
      params: headerParams
    });
  }

  register(data) {
    return this.getUserByEmailApi(data.email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(response => {
      if (response && response.length > 0) {
        // return of({
        //   status: '200',
        //   response: 'User with email already exists',
        //   user: data,
        //   res: response
        // });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)({
          status: '200',
          response: 'Email registered to a zinder account, please login/register your login account via the login page.',
          user: data,
          res: response
        });
      }

      return this.registerApi(data);
    }));
  }

  login(data) {
    return this.loginApi(data);
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 836:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/client/app.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3882);





class AppService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this._ongoingApp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this._ongoingAppSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this._subscribedApps = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.subscribedApps$ = this._subscribedApps.asObservable();
        this.onoingApp$ = this._ongoingApp.asObservable();
        this.listOfApps = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._listOfSubscribedApps = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.listOfSubscribedApps$ = this._listOfSubscribedApps.asObservable();
        this.selectedApp = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(undefined);
        this.getAppsApi$ = this.getAppsApi().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
        this.apps$ = this.getAppsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            this.listOfApps.next(res);
        }));
    }
    getAppsApi() {
        return this.http.get(`${this.apiUrl}/apps`);
    }
    getAppSubscriptionApi(sort) {
        return this.http.get(`${this.apiUrl}/subscriptions`, { params: sort });
    }
    getAndSetOngoingAppSubscriptionApi(sort) {
        return this.getAppSubscriptionApi(sort).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((r) => r.pop()));
    }
    saveLocalApp(app) {
        sessionStorage.setItem('runningApp', JSON.stringify(app));
    }
    subscribe(data) {
        return this.http.post(`${this.apiUrl}/subscriptions`, data);
    }
    getLocalApp() {
        let getLocalApp = sessionStorage.getItem('runningApp');
        let toReturn = null;
        if (getLocalApp) {
            try {
                getLocalApp = JSON.parse(getLocalApp);
                toReturn = getLocalApp;
            }
            catch (error) {
                sessionStorage.removeItem('runningApp');
                getLocalApp = null;
            }
        }
        return toReturn;
    }
    set appcode(code) {
        localStorage.setItem('appcode', code);
    }
    removeappcode() {
        localStorage.removeItem('appcode');
    }
    get appcode() {
        return localStorage.getItem('appcode');
    }
    get listOfAppsValue() {
        return this.listOfApps.value;
    }
    get listOfSubscribedApps() {
        return this._listOfSubscribedApps.value;
    }
    set onoingApp(app) {
        this._ongoingApp.next(app);
    }
    set onoingAppSub(app) {
        this._ongoingAppSub.next(app);
    }
    get ongoingAppSub() {
        return this._ongoingAppSub.value;
    }
    set subscribedApps(app) {
        this._subscribedApps.next(app);
    }
    set listOfSubscribedApps(apps) {
        this._listOfSubscribedApps.next(apps);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1090:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/client/cache-registration.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheRegistrationService": () => (/* binding */ CacheRegistrationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CacheRegistrationService {
    constructor() {
        this.services = [];
        this.cache = new Map();
    }
    addedToCache(serviceUri) {
        return this.services.indexOf(serviceUri) > -1;
    }
    addToCache(serviceUri) {
        // Check if not already added to list
        if (!this.addedToCache(serviceUri)) {
            this.services.push(serviceUri);
        }
    }
    get(key) {
        const tuple = this.cache.get(key);
        if (!tuple) {
            return null;
        }
        const expires = tuple[0];
        const httpResponse = tuple[1];
        // Don't observe expired keys
        const now = new Date();
        if (expires && expires.getTime() < now.getTime()) {
            this.cache.delete(key);
            return null;
        }
        return httpResponse;
    }
    set(key, value, ttl = null) {
        const expires = new Date();
        if (ttl) {
            expires.setSeconds(expires.getHours() + ttl);
            this.cache.set(key, [expires, value]);
        }
        else {
            expires.setHours(expires.getHours() + 72);
            this.cache.set(key, [expires, value]);
        }
    }
}
CacheRegistrationService.ɵfac = function CacheRegistrationService_Factory(t) { return new (t || CacheRegistrationService)(); };
CacheRegistrationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheRegistrationService, factory: CacheRegistrationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4758:
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/user.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _models_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Index */ 4472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _passageidentity_passage_elements_passage_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @passageidentity/passage-elements/passage-user */ 6115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Index */ 9237);
/* harmony import */ var _client_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/app.service */ 836);











class UserService {
  constructor(http, _auth, _app) {
    this.http = http;
    this._auth = _auth;
    this._app = _app;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api;
    this.$user_ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this.total = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
    this.listOfUsers = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.listOfEmpoyees = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.listOfMenu = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.app_menus = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.app_Menus$ = this.getMenusApi().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      const app = this._app.appcode;
      const u = this.getuser();
      const menusForAppndRole = app ? res.filter(m => {
        return (m.roles == 'everyone' || u.role.includes(m.roles)) && m.app_id == app;
      }) : [];
      this.app_menus.next(menusForAppndRole);
      return this.app_menus.value;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
    this.menu = new Map();
    this.listOfViewedRoles = new Map();
    this._viewedusers$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(new Map());
    this.user$ = this.user.asObservable();
    this.list$ = this.listOfUsers.asObservable();
    this.getAuthUserApi$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_models_Index__WEBPACK_IMPORTED_MODULE_1__.GUESS).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(r => {
      if (!this._auth.sessionAuth) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(r);
      }

      return this.getAuthUserApi(this._auth.sessionAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
    }));
    this.getUsersApi$ = this.getSortedUsersApi({
      _sort: 'created_at',
      _order: 'desc'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(r => {
      this.total.next(r.length);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
    this.cleaners$ = this.listOfUsers.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(users => {
      return users.filter(u => {
        var _a;

        return (_a = u.role) === null || _a === void 0 ? void 0 : _a.includes('Cleaner');
      });
    }));
    this.listOfRoles = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.roles$ = this.listOfRoles.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => this.getRolesApi()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
  }

  getPassageUserInfo() {
    var _this = this;

    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield new _passageidentity_passage_elements_passage_user__WEBPACK_IMPORTED_MODULE_3__.PassageUser().userInfo().then(userInfo => {
        _this.$user_.next(userInfo);

        return userInfo;
      });
    })();
  }

  getuser$() {
    return (0,C_Users_HP_Documents_seanproject_Sparklingv2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield new _passageidentity_passage_elements_passage_user__WEBPACK_IMPORTED_MODULE_3__.PassageUser().userInfo();
    })();
  }

  createUserApi(user) {
    return this.http.post(`${this.apiUrl}/users`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      const existingList = this.listOfUsers.getValue();
      existingList.push(res);
      this.listOfUsers.next(existingList);
      return {
        status: '200',
        response: 'User successfully registered in the server',
        user: res
      };
    }));
  }

  updateUserApi(user) {
    return this.http.patch(`${this.apiUrl}/users/${user.id}`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      return {
        status: '200',
        response: 'User successfully updated in the server',
        user: res
      };
    }));
  }

  createRoleApi(role) {
    return this.http.post(`${this.apiUrl}/roles`, role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      return {
        status: '200',
        response: `${res.name} role successfully created`,
        role: res
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(res => {
      const existingList = this.listOfRoles.getValue();
      existingList.unshift(res.role);
      this.listOfRoles.next(existingList);
    }));
  }

  listOfUsersValue() {
    return this.listOfUsers.value;
  }

  forgetUser() {
    this.user.next(_models_Index__WEBPACK_IMPORTED_MODULE_1__.GUESS);

    if (this._auth.sessionAuth) {
      this._auth.clearsessionAuth();
    }
  }

  createRole(role) {
    const doesRoleExist = this.findRole(role.name);

    if (!doesRoleExist) {
      return this.createRoleApi(role);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)({
        status: '500',
        response: `Role With the name ${role.name} already exists`
      });
    }
  }

  setapp_menus(values) {
    this.app_menus.next(values);
  }

  findRole(name) {
    return this.listOfRoles.value.find(role => role.name.trim().toLowerCase() == name.trim().toLowerCase());
  }

  getAuthUserApi(email) {
    let headerParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set('email_like', email);
    return this.http.get(`${this.apiUrl}/users`, {
      params: headerParams
    });
  } // getOrCreate(email:string){
  //   let headerParams = new HttpParams().set('email', email);
  //   return this.http.get(`${this.apiUrl}/users`, { params: headerParams }).pipe(
  //     switchMap(res=>{
  //       if(UserService.length > 0){
  //         return of(res);
  //       }
  //       return this._auth.register()
  //     })
  //   )
  // }


  getUsersApi() {
    return this.http.get(`${this.apiUrl}/users`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(r => {
      this.total.next(r.length);
    }));
  }

  getSortedUsersApi(params) {
    return this.http.get(`${this.apiUrl}/users`, {
      params
    });
  }

  getRolesApi() {
    return this.http.get(`${this.apiUrl}/roles`);
  }

  getMenusApi() {
    return this.http.get(`${this.apiUrl}/menus`);
  }

  getMenusApi$(sort) {
    return this.http.get(`${this.apiUrl}/menus`, {
      params: sort
    });
  }

  getEmployees(sort) {
    sort = Object.assign(Object.assign({}, sort), {
      who: this.getuser().code,
      company: localStorage.getItem('runningCompany')
    });
    return this.http.post(`${this.apiUrl}/employees`, sort);
  }

  createUser(user, role) {
    return this.createUserApi(user);
  }

  updateUser(user) {
    user.updated_at = new Date(Date.now()).toISOString();
    return this.updateUserApi(user);
  }

  findUser(email) {
    return this.listOfUsers.value.find(user => {
      var _a;

      return (_a = user.email) === null || _a === void 0 ? void 0 : _a.trim().toLocaleLowerCase().includes(email.trim().toLowerCase());
    });
  }

  findUserApi(email) {
    return this.http.get(`${this.apiUrl}/users?email_like=${email}`);
  }

  checkIfUserHasRole(role) {
    return this.user.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_user => !_user ? false : _user.role.map(_r => _r.toLowerCase().trim()).includes(role.toLowerCase())));
  }

  setuser(user) {
    this.user.next(user);
  }

  getuser() {
    return this.user.value;
  }

  get viewedusers$() {
    return this._viewedusers$.value;
  }

  set setviewedusers$(user) {
    const users = this.viewedusers$;
    users.set(user.code, user);

    this._viewedusers$.next(users);
  }

}

UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_Index__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_client_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService));
};

UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    flutter_public_key: 'FLWPUBK_TEST-6f6045944f247c7d04c3b7c1d73a2723-X',
    flutter_private_key: 'FLWSECK_TEST-65474a7f10fa663422b0182f9cd9ed66-X',
    api: 'http://localhost:3000',
    emailApi: 'http://localhost:3003',
    uploadApi: 'http://localhost:3002',
    // api: 'https://zinder-server.onrender.com',
    // emailApi: 'https://zinder-mail-server.onrender.com',
    // uploadApi: 'https://zinder-file-server.onrender.com',
    appName: 'Zinder',
    passageAppId: '8nWALwN5Ot37pEsAmoh3fc2y',
    teegramToken: '',
    appDomain: 'http://localhost:5001'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map