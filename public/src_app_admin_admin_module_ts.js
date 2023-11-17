"use strict";
(self["webpackChunksparklingv2"] = self["webpackChunksparklingv2"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 1034);
/* harmony import */ var _shared_resolvers_user_user_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resolvers/user/user.resolver */ 7881);
/* harmony import */ var _shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/guards/auth/auth.guard */ 4369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_booking_booking_module_ts"), __webpack_require__.e("src_app_admin_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 1659)).then(m => m.HomeModule)
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_booking_booking_module_ts"), __webpack_require__.e("src_app_admin_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 1659)).then(m => m.HomeModule)
            },
            {
                path: 'user-role',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("default-src_app_admin_employee_employee_module_ts"), __webpack_require__.e("default-src_app_admin_user-role_user-role_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-role/user-role.module */ 9194)).then(m => m.UserRoleModule)
            },
            {
                path: 'file-manager',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("default-src_app_admin_employee_employee_module_ts"), __webpack_require__.e("default-src_app_admin_user-role_user-role_module_ts"), __webpack_require__.e("src_app_admin_file-manager_file-manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./file-manager/file-manager.module */ 321)).then(m => m.FileManagerModule)
            },
            {
                path: 'recruitment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("default-src_app_admin_employee_employee_module_ts"), __webpack_require__.e("default-src_app_admin_user-role_user-role_module_ts"), __webpack_require__.e("default-src_app_admin_recruitment_recruitment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recruitment/recruitment.module */ 4035)).then(m => m.RecruitmentModule)
            },
            {
                path: 'booking',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_admin_booking_booking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 675)).then(m => m.BookingModule)
            },
            {
                path: 'event',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_admin_booking_booking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 675)).then(m => m.BookingModule)
            },
            {
                path: 'leave-and-holiday',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_holiday_holiday_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./holiday/holiday.module */ 5755)).then(m => m.HolidayModule)
            },
            {
                path: 'messanger',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("src_app_admin_messanger_messanger_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./messanger/messanger.module */ 3639)).then(m => m.MessangerModule)
            },
            {
                path: 'pricing',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_pricing_pricing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pricing/pricing.module */ 6687)).then(m => m.PricingModule)
            },
            {
                path: 'employee',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_mail_mail_module_ts"), __webpack_require__.e("default-src_app_admin_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee.module */ 392)).then(m => m.EmployeeModule)
            },
            {
                path: 'calendar',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_attendance_attendance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./attendance/attendance.module */ 8357)).then(m => m.AttendanceModule)
            },
        ],
        resolve: {
            fromResolverUser: _shared_resolvers_user_user_resolver__WEBPACK_IMPORTED_MODULE_1__.UserResolver
        },
        canActivate: [_shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1034:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8767);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/user/user.service */ 4758);
/* harmony import */ var _shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/company/company.service */ 7613);
/* harmony import */ var _shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/client/app.service */ 836);
/* harmony import */ var _shared_services_client_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/client/socket.service */ 4117);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/page-loader/page-loader.component */ 8500);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 5991);
/* harmony import */ var _shared_components_notify_notify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/notify/notify.component */ 4502);
/* harmony import */ var _shared_components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/right-sidebar/right-sidebar.component */ 908);
/* harmony import */ var _shared_components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/left-sidebar/left-sidebar.component */ 6093);
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setup/setup.component */ 4803);

















function AdminComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-right-sidebar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("accessFullData", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r0.ongoingApp));
  }
}

function AdminComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-left-sidebar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("user", user_r3);
  }
}

function AdminComponent_div_13_div_1_div_1_router_outlet_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "router-outlet");
  }
}

function AdminComponent_div_13_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AdminComponent_div_13_div_1_div_1_router_outlet_1_Template, 1, 0, "router-outlet", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r7.ongoingApp));
  }
}

function AdminComponent_div_13_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-setup", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lc_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("listOfCompanies", lc_r6)("company", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, ctx_r8._company$))("subscriptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 7, ctx_r8.listOfSubscribedApps$))("apps", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 9, ctx_r8.apps))("ongoingApp", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 11, ctx_r8.ongoingApp));
  }
}

function AdminComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AdminComponent_div_13_div_1_div_1_Template, 3, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AdminComponent_div_13_div_1_div_3_Template, 6, 13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r5.listOfSubscribedApps$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, ctx_r5.ongoingApp));
  }
}

function AdminComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AdminComponent_div_13_div_1_Template, 5, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r2.listOfCompanies));
  }
}

class AdminComponent {
  constructor(_userService, _cs, appService, socket, route) {
    this._userService = _userService;
    this._cs = _cs;
    this.appService = appService;
    this.socket = socket;
    this.route = route; // tobeResolved authenticated user data Observable

    this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(null);
    this._company$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(null);
    this._listOfCompanies = this._user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.skipWhile)(c => !c), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(res => {
      if (res.role.includes('Admin') || res.role.includes('Master')) {
        return this._cs.getAdminCompanysApi$(res.code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(r => {
          this._cs.setlistOfCompanys = r;
        }));
      } else {
        return this._cs.getAdminCompanysApi$(res.code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(r => {
          this._cs.setlistOfCompanys = r;
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)());
    this._subscriptions = this._listOfCompanies.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.skipWhile)(c => c.length < 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(res => {
      let ownCompany;

      if (this._cs.getSessionCompany()) {
        ownCompany = res.find(c => c.code == this._cs.getSessionCompany());
      }

      if (!ownCompany) {
        ownCompany = res[0];

        this._cs.saveSessionCompany(ownCompany.code);
      }

      this._company$.next(ownCompany);

      this._cs.company = ownCompany;
      return this.appService.getAppSubscriptionApi({
        "company": ownCompany.code,
        "type": "App",
        "status": "Active"
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)());
    this.apps = this.appService.apps$;
    this.listOfCompanies = this._cs.companys$;
    this.companys = this._cs.getAdminCompanys$;
    this.selectedcompany$ = this._cs.selectedcompany$;
    this.onoingApp = null;
    this.id = '';
    this.code = '';
    this.ongoingApp = this.appService.onoingApp$;
    this.listOfSubscribedApps$ = this.appService.listOfSubscribedApps$;
  }

  ngOnInit() {
    this._user$.next(this.route.snapshot.data['fromResolverUser']);

    this._user$.subscribe(c => {
      if (!c) {}
    });

    this._listOfCompanies.subscribe();

    this._subscriptions.subscribe(subs => {
      this.appService.listOfSubscribedApps = subs;

      if (subs.length > 0) {
        let app;
        let sub;

        if (this.appService.appcode) {
          sub = subs.find(ap => ap.app.code == this.appService.appcode);
        }

        if (!sub) {
          sub = subs[0];
        }

        this.appService.onoingAppSub = sub;
        app = sub.app;
        this.appService.onoingApp = app;
        this.appService.appcode = app.code;
      }
    });
  }

}

AdminComponent.ɵfac = function AdminComponent_Factory(t) {
  return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_client_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute));
};

AdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AdminComponent,
  selectors: [["app-admin"]],
  decls: 15,
  vars: 9,
  consts: [[4, "ngIf"], ["type", "ball-scale-multiple"], ["id", "mobilemenuoverlay", 1, "mobile-menu-overlay"], [1, "main-container"], [1, "xs-pd-20-10", "pd-ltr-20"], [3, "accessFullData"], [3, "user"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [3, "listOfCompanies", "company", "subscriptions", "apps", "ongoingApp"]],
  template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-page-loader");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AdminComponent_div_4_Template, 3, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AdminComponent_div_6_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ngx-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-notify");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AdminComponent_div_13_Template, 3, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, ctx.ongoingApp));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, ctx._user$));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 7, ctx._user$));
    }
  },
  directives: [_shared_components_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__.PageLoaderComponent, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _shared_components_notify_notify_component__WEBPACK_IMPORTED_MODULE_6__.NotifyComponent, _shared_components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent, _shared_components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.LeftSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _setup_setup_component__WEBPACK_IMPORTED_MODULE_9__.SetupComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ 1034);
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup/setup.component */ 4803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_2__.AdminComponent,
        _setup_setup_component__WEBPACK_IMPORTED_MODULE_3__.SetupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] }); })();


/***/ }),

/***/ 4803:
/*!************************************************!*\
  !*** ./src/app/admin/setup/setup.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupComponent": () => (/* binding */ SetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/client/app.service */ 836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_choose_app_choose_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/choose-app/choose-app.component */ 1537);




function SetupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Begin Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Please create a company to start your journey.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Create Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SetupComponent_div_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-choose-app", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "admin_choseAppFrom_" + i_r6)("company", ctx_r4.company)("app", app_r5)("height", 200);
} }
function SetupComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Almost there!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Subscribe to our Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SetupComponent_div_2_div_1_div_5_Template, 2, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.apps);
} }
function SetupComponent_div_2_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-choose-app", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "admin_choseAppFrom_" + i_r9)("company", ctx_r7.company)("app", app_r8)("height", 200);
} }
function SetupComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome to Zinder!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Proceed to platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SetupComponent_div_2_div_2_div_5_Template, 2, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.apps);
} }
function SetupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SetupComponent_div_2_div_1_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SetupComponent_div_2_div_2_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.subscriptions || ctx_r1.subscriptions.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.subscriptions && ctx_r1.subscriptions.length > 0);
} }
class SetupComponent {
    constructor(appService) {
        this.appService = appService;
        // apps: Observable<any> = this.appService.listOfApps;
        this.apps = [];
        this.ongoingApp = null;
        this.listOfCompanies = [];
        this.subscriptions = [];
        this.company = null;
    }
    ngOnInit() {
    }
}
SetupComponent.ɵfac = function SetupComponent_Factory(t) { return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
SetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SetupComponent, selectors: [["app-setup"]], inputs: { apps: "apps", ongoingApp: "ongoingApp", listOfCompanies: "listOfCompanies", subscriptions: "subscriptions", company: "company" }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col-md-12", "id", "stepOneAdminSetup", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["id", "stepOneAdminSetup", 1, "col-md-12"], [1, "mb-10"], ["data-backdrop", "static", "data-toggle", "modal", "data-target", "#create-company-modal", "type", "button", 1, "btn", "btn-primary"], [1, "col-md-12"], ["class", "row", 4, "ngIf"], [1, "mb-10", "col-md-12"], [1, "text-center", "p-2", "col-md-12"], ["class", "col-md-4 p-2 app_item", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2", "app_item"], [3, "id", "company", "app", "height"]], template: function SetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SetupComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SetupComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.listOfCompanies || ctx.listOfCompanies.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listOfCompanies && ctx.listOfCompanies.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_choose_app_choose_app_component__WEBPACK_IMPORTED_MODULE_1__.ChooseAppComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4369:
/*!**************************************************!*\
  !*** ./src/app/shared/guards/auth/auth.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Index */ 9237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AuthGuard {
    constructor(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.setsessionAuthToken = this._auth.sessionAuth;
    }
    canActivate(route, state) {
        this.setsessionAuthToken = this._auth.sessionAuth;
        return this._auth.isLoggedIn().finally(() => {
            if (!this._auth.isAuthenticated) {
                this.router.navigate(['auth/login']);
            }
        });
    }
    valid(created_at) {
        let now = new Date(Date.now());
        let created = new Date(created_at);
        return now.getTime() - created.getTime() < (60 * 60 * 1000 * 24 * 2); // less than 2 days
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_Index__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map