"use strict";
(self["webpackChunksparklingv2"] = self["webpackChunksparklingv2"] || []).push([["src_app_admin_home_home_module_ts"],{

/***/ 948:
/*!*************************************************************!*\
  !*** ./src/app/admin/home/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8767);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/booking/booking.service */ 6659);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/client/app.service */ 836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/calendar/calendar.component */ 1812);












function DashboardComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Welcome back ", user_r7.firstName, "");
  }
}

function DashboardComponent_div_253_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r8.role);
  }
}

function DashboardComponent_div_265_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r2.noOfJobPositions$));
  }
}

function DashboardComponent_div_276_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r3.noOfJobOpenings$));
  }
}

function DashboardComponent_div_287_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r4.noOfJobApplications$));
  }
}

function DashboardComponent_div_298_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r5.noOfJobOpenings$));
  }
}

function DashboardComponent_div_309_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r6.noOfJobPositions$));
  }
}

const _c0 = function () {
  return ["/admin/home/dashboard"];
};

class DashboardComponent {
  constructor(_us, _bs, jobService, companyService, router, scriptService, appService) {
    this._us = _us;
    this._bs = _bs;
    this.jobService = jobService;
    this.companyService = companyService;
    this.router = router;
    this.scriptService = scriptService;
    this.appService = appService;
    this.user$ = this._us.user$;
    this.isAdmin = this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(user => {
      return user.role.includes('Admin');
    }));
    this.successfulBookings = this._bs.bookings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(bookings => {
      return bookings.filter(b => b.status == 'successful').length;
    }));
    this.pendingBookings = this._bs.bookings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(bookings => {
      return bookings.filter(b => b.status == 'pending').length;
    }));
    this.spent = this._bs.bookings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(bookings => {
      // reduce((a, b) => +a + +b.price, 0)
      return bookings.filter(b => b.status == 'successful').reduce((a, b) => +a + +b.payment.amount, 0);
    }));
    this.app = this.appService.onoingApp$;
    this.company$ = this.companyService.company$;
    this.jobPositions$ = this.company$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.skipWhile)(c => !c), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
      return this.jobService.getJobPositionsApi({
        company: res.code
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(r => this.jobService.positions = r));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)());
    this.jobOpenings$ = this.company$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.skipWhile)(c => !c), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
      return this.jobService.getJobOpeningsApiSort({
        company: res.code
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(r => this.jobService.openings = r));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)());
    this.jobApplications$ = this.company$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.skipWhile)(c => !c), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
      return this.jobService.getJobApplicationApiSort({
        company: res.code
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(r => this.jobService.apps = r));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)());
    this.noOfJobPositions$ = this.jobService.jobPositions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(r => r.length));
    this.noOfJobOpenings$ = this.jobService.jobOpenings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(r => r.length));
    this.noOfJobApplications$ = this.jobService.applications$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(r => r.length));
  }

  ngOnInit() {// this.app.subscribe();
  }

  navigateTo(url) {
    this.router.navigate([url]).finally(() => {
      this.scriptService.scrollTo();
    });
  }

}

DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_2__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_4__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService));
};

DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 318,
  vars: 32,
  consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], [4, "ngIf"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "pb-10"], [1, "col-md-4", "mb-20"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(2 22 69)"], [1, "d-flex", "justify-content-between", "pb-20", "text-white"], [1, "icon", "h1", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "font-14", "text-right"], [1, "font-12"], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "text-white"], [1, "font-14"], [1, "font-24", "weight-500"], [1, "max-width-150", 2, "position", "relative"], ["id", "appointment-chart", 2, "min-height", "70px"], ["id", "apexcharts5d2add", 1, "apexcharts-canvas", "apexcharts5d2add", "apexcharts-theme-light", 2, "width", "150px", "height", "70px"], ["id", "SvgjsSvg1606", "width", "150", "height", "70", "xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "svgjs", "http://svgjs.com/svgjs", 0, "xmlns", "data", "ApexChartsNS", "transform", "translate(0, 0)", 1, "apexcharts-svg", 2, "background", "transparent"], ["id", "SvgjsG1608", "transform", "translate(0, 0)", 1, "apexcharts-inner", "apexcharts-graphical"], ["id", "SvgjsDefs1607"], ["id", "SvgjsLinearGradient1611", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["id", "SvgjsStop1612", "stop-opacity", "0.4", "stop-color", "rgba(216,227,240,0.4)", "offset", "0"], ["id", "SvgjsStop1613", "stop-opacity", "0.5", "stop-color", "rgba(190,209,230,0.5)", "offset", "1"], ["id", "SvgjsStop1614", "stop-opacity", "0.5", "stop-color", "rgba(190,209,230,0.5)", "offset", "1"], ["id", "gridRectMask5d2add"], ["id", "SvgjsRect1616", "width", "154", "height", "70", "x", "-2", "y", "0", "rx", "0", "ry", "0", "fill", "#ffffff", "opacity", "1", "stroke-width", "0", "stroke", "none", "stroke-dasharray", "0"], ["id", "gridRectMarkerMask5d2add"], ["id", "SvgjsRect1617", "width", "152", "height", "72", "x", "-1", "y", "-1", "rx", "0", "ry", "0", "fill", "#ffffff", "opacity", "1", "stroke-width", "0", "stroke", "none", "stroke-dasharray", "0"], ["id", "SvgjsRect1615", "width", "5.357142857142857", "height", "70", "x", "0", "y", "0", "rx", "0", "ry", "0", "fill", "url(#SvgjsLinearGradient1611)", "opacity", "1", "stroke-width", "0", "stroke-dasharray", "3", "y2", "70", "filter", "none", "fill-opacity", "0.9", 1, "apexcharts-xcrosshairs"], ["id", "SvgjsG1629", "transform", "translate(0, 0)", 1, "apexcharts-xaxis"], ["id", "SvgjsG1630", "transform", "translate(0, 2.75)", 1, "apexcharts-xaxis-texts-g"], ["id", "SvgjsG1632", 1, "apexcharts-grid"], ["id", "SvgjsG1633", 1, "apexcharts-gridlines-horizontal", 2, "display", "none"], ["id", "SvgjsLine1635", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1636", "x1", "0", "y1", "17.5", "x2", "150", "y2", "17.5", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1637", "x1", "0", "y1", "35", "x2", "150", "y2", "35", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1638", "x1", "0", "y1", "52.5", "x2", "150", "y2", "52.5", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1639", "x1", "0", "y1", "70", "x2", "150", "y2", "70", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsG1634", 1, "apexcharts-gridlines-vertical", 2, "display", "none"], ["id", "SvgjsLine1641", "x1", "0", "y1", "70", "x2", "150", "y2", "70", "stroke", "transparent", "stroke-dasharray", "0"], ["id", "SvgjsLine1640", "x1", "0", "y1", "1", "x2", "0", "y2", "70", "stroke", "transparent", "stroke-dasharray", "0"], ["id", "SvgjsG1619", 1, "apexcharts-bar-series", "apexcharts-plot-series"], ["id", "SvgjsG1620", "rel", "1", "seriesName", "Week", 0, "data", "realIndex", "0", 1, "apexcharts-series"], ["id", "SvgjsPath1622", "d", "M 8.035714285714285 70L 8.035714285714285 18.839285714285715Q 10.714285714285714 16.16071428571429 13.392857142857142 18.839285714285715L 13.392857142857142 70L 8.035714285714285 70", "fill", "rgba(0,143,251,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 8.035714285714285 70L 8.035714285714285 18.839285714285715Q 10.714285714285714 16.16071428571429 13.392857142857142 18.839285714285715L 13.392857142857142 70L 8.035714285714285 70", "pathFrom", "M 8.035714285714285 70L 8.035714285714285 70L 13.392857142857142 70L 13.392857142857142 70L 8.035714285714285 70", "cy", "17.5", "cx", "29.46428571428571", "j", "0", "val", "21", "barHeight", "52.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1623", "d", "M 29.46428571428571 70L 29.46428571428571 16.339285714285715Q 32.14285714285714 13.660714285714286 34.82142857142857 16.339285714285715L 34.82142857142857 70L 29.46428571428571 70", "fill", "rgba(0,227,150,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 29.46428571428571 70L 29.46428571428571 16.339285714285715Q 32.14285714285714 13.660714285714286 34.82142857142857 16.339285714285715L 34.82142857142857 70L 29.46428571428571 70", "pathFrom", "M 29.46428571428571 70L 29.46428571428571 70L 34.82142857142857 70L 34.82142857142857 70L 29.46428571428571 70", "cy", "15", "cx", "50.89285714285714", "j", "1", "val", "22", "barHeight", "55", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1624", "d", "M 50.89285714285714 70L 50.89285714285714 46.339285714285715Q 53.57142857142857 43.660714285714285 56.24999999999999 46.339285714285715L 56.24999999999999 70L 50.89285714285714 70", "fill", "rgba(254,176,25,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 50.89285714285714 70L 50.89285714285714 46.339285714285715Q 53.57142857142857 43.660714285714285 56.24999999999999 46.339285714285715L 56.24999999999999 70L 50.89285714285714 70", "pathFrom", "M 50.89285714285714 70L 50.89285714285714 70L 56.24999999999999 70L 56.24999999999999 70L 50.89285714285714 70", "cy", "45", "cx", "72.32142857142857", "j", "2", "val", "10", "barHeight", "25", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1625", "d", "M 72.32142857142857 70L 72.32142857142857 1.3392857142857142Q 75 -1.3392857142857142 77.67857142857143 1.3392857142857142L 77.67857142857143 70L 72.32142857142857 70", "fill", "rgba(255,69,96,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 72.32142857142857 70L 72.32142857142857 1.3392857142857142Q 75 -1.3392857142857142 77.67857142857143 1.3392857142857142L 77.67857142857143 70L 72.32142857142857 70", "pathFrom", "M 72.32142857142857 70L 72.32142857142857 70L 77.67857142857143 70L 77.67857142857143 70L 72.32142857142857 70", "cy", "0", "cx", "93.75", "j", "3", "val", "28", "barHeight", "70", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1626", "d", "M 93.75 70L 93.75 31.339285714285715Q 96.42857142857143 28.66071428571429 99.10714285714286 31.339285714285715L 99.10714285714286 70L 93.75 70", "fill", "rgba(119,93,208,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 93.75 70L 93.75 31.339285714285715Q 96.42857142857143 28.66071428571429 99.10714285714286 31.339285714285715L 99.10714285714286 70L 93.75 70", "pathFrom", "M 93.75 70L 93.75 70L 99.10714285714286 70L 99.10714285714286 70L 93.75 70", "cy", "30", "cx", "115.17857142857143", "j", "4", "val", "16", "barHeight", "40", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1627", "d", "M 115.17857142857143 70L 115.17857142857143 18.839285714285715Q 117.85714285714286 16.16071428571429 120.53571428571429 18.839285714285715L 120.53571428571429 70L 115.17857142857143 70", "fill", "rgba(0,143,251,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 115.17857142857143 70L 115.17857142857143 18.839285714285715Q 117.85714285714286 16.16071428571429 120.53571428571429 18.839285714285715L 120.53571428571429 70L 115.17857142857143 70", "pathFrom", "M 115.17857142857143 70L 115.17857142857143 70L 120.53571428571429 70L 120.53571428571429 70L 115.17857142857143 70", "cy", "17.5", "cx", "136.60714285714286", "j", "5", "val", "21", "barHeight", "52.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1628", "d", "M 136.60714285714286 70L 136.60714285714286 38.839285714285715Q 139.28571428571428 36.160714285714285 141.96428571428572 38.839285714285715L 141.96428571428572 70L 136.60714285714286 70", "fill", "rgba(0,227,150,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 136.60714285714286 70L 136.60714285714286 38.839285714285715Q 139.28571428571428 36.160714285714285 141.96428571428572 38.839285714285715L 141.96428571428572 70L 136.60714285714286 70", "pathFrom", "M 136.60714285714286 70L 136.60714285714286 70L 141.96428571428572 70L 141.96428571428572 70L 136.60714285714286 70", "cy", "37.5", "cx", "158.03571428571428", "j", "6", "val", "13", "barHeight", "32.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsG1621", 0, "data", "realIndex", "0", 1, "apexcharts-datalabels"], ["id", "SvgjsLine1642", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke", "#b6b6b6", "stroke-dasharray", "0", "stroke-width", "1", 1, "apexcharts-ycrosshairs"], ["id", "SvgjsLine1643", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke-dasharray", "0", "stroke-width", "0", 1, "apexcharts-ycrosshairs-hidden"], ["id", "SvgjsG1644", 1, "apexcharts-yaxis-annotations"], ["id", "SvgjsG1645", 1, "apexcharts-xaxis-annotations"], ["id", "SvgjsG1646", 1, "apexcharts-point-annotations"], ["id", "SvgjsG1631", "rel", "0", "transform", "translate(-18, 0)", 1, "apexcharts-yaxis"], [1, "apexcharts-legend"], [1, "apexcharts-tooltip", "apexcharts-theme-light"], [1, "apexcharts-tooltip-title", 2, "font-family", "Helvetica, Arial, sans-serif", "font-size", "12px"], [1, "apexcharts-tooltip-series-group"], [1, "apexcharts-tooltip-marker", 2, "background-color", "rgb(0, 143, 251)"], [1, "apexcharts-tooltip-text", 2, "font-family", "Helvetica, Arial, sans-serif", "font-size", "12px"], [1, "apexcharts-tooltip-y-group"], [1, "apexcharts-tooltip-text-label"], [1, "apexcharts-tooltip-text-value"], [1, "apexcharts-tooltip-z-group"], [1, "apexcharts-tooltip-text-z-label"], [1, "apexcharts-tooltip-text-z-value"], [1, "resize-triggers"], [1, "expand-trigger"], [2, "width", "151px", "height", "71px"], [1, "contract-trigger"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(37 79 157)"], ["aria-hidden", "true", 1, "fa", "fa-user-friends"], [1, "icon-copy", "ion-ios-circle-filled"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(39 147 140)"], ["aria-hidden", "true", 1, "fa", "fa-stethoscope"], [1, "col-md-8", "mb-20"], [1, "card-box", "p-10"], [1, "col-xl-12", "col-lg-12", "col-md-12", "mb-20"], [2, "font-weight", "500"], [1, "col-xl-6", "col-lg-6", "col-md-6", "mb-20"], [1, "card-box", "height-100-p", "widget-style3"], [1, "d-flex", "flex-wrap"], [1, "widget-data", 3, "click"], ["class", "weight-700 font-24 text-dark", 4, "ngIf"], [1, "font-14", "text-secondary", "weight-500"], [1, "widget-icon", "styling"], ["data-color", "#ff5b5b", 1, "icon", 2, "color", "rgb(2 169 235)"], [1, "icon-copy", "bi", "bi-award"], ["data-color", "#09cc06", 1, "icon", 2, "color", "rgb(2 22 69)"], [1, "icon-copy", "bi", "bi-person-badge-fill"], ["data-color", "#00eccf", 1, "icon", 2, "color", "rgb(2 169 235)"], [1, "icon-copy", "bi", "bi-signpost-split"], ["data-color", "#ff5b5b", 1, "icon", 2, "color", "rgb(2 22 69)"], [1, "icon-copy", "bi", "bi-pencil-square"], [1, "icon-copy", "bi", "bi-file-earmark-arrow-up"], [1, "icon-copy", "bi", "bi-person-video2"], [1, "col-md-4"], [1, "weight-700", "font-24", "text-dark"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DashboardComponent_h4_4_Template, 2, 1, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nav", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ol", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " My Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Expires At");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Subscription Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "svg", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "g", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "defs", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "linearGradient", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "stop", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "stop", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "stop", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "clipPath", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "rect", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "clipPath", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "rect", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "rect", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "g", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "g", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "g", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "g", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "line", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "line", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "line", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "line", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "line", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "g", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "line", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "line", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "g", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "g", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "path", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "path", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "path", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "path", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "path", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "path", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "path", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "g", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "line", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "line", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "g", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "g", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "g", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "g", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](82, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](95, "i", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "i", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Online now");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Total Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "svg", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "g", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "defs", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "linearGradient", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](115, "stop", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](116, "stop", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](117, "stop", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "clipPath", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](119, "rect", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "clipPath", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](121, "rect", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](122, "rect", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "g", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](124, "g", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "g", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "g", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "line", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](128, "line", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "line", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](130, "line", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](131, "line", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](132, "g", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](133, "line", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](134, "line", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "g", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "g", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](137, "path", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](138, "path", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "path", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](140, "path", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](141, "path", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](142, "path", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](143, "path", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](144, "g", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](145, "line", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](146, "line", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](147, "g", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](148, "g", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](149, "g", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](150, "g", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](151, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](153, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](155, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](158, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](159, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](161, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](162, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](165, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](166, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](171, "i", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174, "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, "My Roles");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, "Total Roles");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](182, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](183, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "svg", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](187, "g", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](188, "defs", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "linearGradient", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](190, "stop", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](191, "stop", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](192, "stop", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "clipPath", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](194, "rect", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](195, "clipPath", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](196, "rect", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](197, "rect", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "g", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](199, "g", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "g", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "g", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](202, "line", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](203, "line", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](204, "line", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](205, "line", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](206, "line", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](207, "g", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](208, "line", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](209, "line", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "g", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "g", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](212, "path", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](213, "path", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](214, "path", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](215, "path", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](216, "path", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](217, "path", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](218, "path", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](219, "g", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](220, "line", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](221, "line", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](222, "g", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](223, "g", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](224, "g", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](225, "g", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](226, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](227, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](228, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](229, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](230, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](231, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](232, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](233, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](234, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](235, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](236, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](237, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](239, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](240, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](241, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](242, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](243, "div", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](244, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](245, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](246, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](247, "h2", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](248, "Quick Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](250, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](251, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](252, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_252_listener() {
        return ctx.navigateTo("admin/home/setting");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](253, DashboardComponent_div_253_Template, 2, 1, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](254, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](256);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](257, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](258, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](259, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](260, "i", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](261, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](262, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](263, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](264, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_264_listener() {
        return ctx.navigateTo("admin/recruitment/job-position");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](265, DashboardComponent_div_265_Template, 3, 3, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](266, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](267, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](268, "Job Positions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](269, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](270, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](271, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](272, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](273, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](274, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](275, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_275_listener() {
        return ctx.navigateTo("admin/recruitment/job-opening");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](276, DashboardComponent_div_276_Template, 3, 3, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](277, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](278, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](279, " Job Openings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](280, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](281, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](282, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](284, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](285, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](286, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_286_listener() {
        return ctx.navigateTo("admin/recruitment/job-opening/applications");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](287, DashboardComponent_div_287_Template, 3, 3, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](288, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](289, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](290, " Job Applications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](291, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](292, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](293, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](294, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](296, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](297, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_297_listener() {
        return ctx.navigateTo("admin/home/notification");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](298, DashboardComponent_div_298_Template, 3, 3, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](299, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](300, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](301, " Uploads ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](302, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](303, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](304, "i", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](305, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](306, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](307, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](308, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_308_listener() {
        return ctx.navigateTo("admin/file-manager/home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](309, DashboardComponent_div_309_Template, 3, 3, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](310, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](311, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](312, "Employees");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](313, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](314, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](315, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](316, "div", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](317, "app-calendar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 11, ctx.user$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](31, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 13, ctx.appService.ongoingAppSub == null ? null : ctx.appService.ongoingAppSub.expires_at));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 15, ctx.appService.ongoingAppSub == null ? null : ctx.appService.ongoingAppSub.created_at));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](223);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](254, 17, ctx.user$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](257, 19, ctx.company$).name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](266, 21, ctx.jobPositions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](277, 23, ctx.jobOpenings$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](288, 25, ctx.jobApplications$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](299, 27, ctx.jobOpenings$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](310, 29, ctx.jobPositions$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__.CalendarComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".styling[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-left: 3px solid #021645;\n}\n\n.iconimg[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.iconimg-2[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.widget-data[_ngcontent-%COMP%]:hover {\n  background-color: #021645 !important;\n  color: #fff !important;\n  cursor: pointer !important;\n}\n\n.widget-data[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%] {\n  color: #fff !important;\n  cursor: pointer !important;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUlKOztBQUZBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQUtKOztBQUhBO0VBQ0ksd0JBQUE7QUFNSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoMiAyMiA2OSk7XHJcbn1cclxuLmljb25pbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmljb25pbWctMntcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ud2lkZ2V0LWRhdGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiAyMiA2OSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ud2lkZ2V0LWRhdGE6aG92ZXIgPiBkaXZ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLnAtMTB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 522:
/*!***************************************************!*\
  !*** ./src/app/admin/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 948);
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting/setting.component */ 8179);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ 5568);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification.component */ 3644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
            },
            {
                path: 'setting',
                component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_1__.SettingComponent
            },
            {
                path: 'notification',
                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__.NotificationComponent
            },
        ]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5568:
/*!**********************************************!*\
  !*** ./src/app/admin/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/Index */ 9237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class HomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_Index__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1659:
/*!*******************************************!*\
  !*** ./src/app/admin/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 522);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5568);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 948);
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting/setting.component */ 8179);
/* harmony import */ var _booking_booking_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../booking/booking.module */ 675);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification/notification.component */ 3644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);









class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _booking_booking_module__WEBPACK_IMPORTED_MODULE_5__.BookingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        _setting_setting_component__WEBPACK_IMPORTED_MODULE_4__.SettingComponent,
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _booking_booking_module__WEBPACK_IMPORTED_MODULE_5__.BookingModule] }); })();


/***/ }),

/***/ 3644:
/*!*******************************************************************!*\
  !*** ./src/app/admin/home/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/notification/notification.component */ 4769);








function NotificationComponent_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NotificationComponent_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NotificationComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NotificationComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "How To Sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Add a password to your Zinder Account If account is passwordless");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Open telegram and search for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "@ZinderOfficialBot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Send the message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Enter your account password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Wait for verification chat ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("/syncZinderTelegram ", ctx_r3.user == null ? null : ctx_r3.user.code, "");
} }
const _c0 = function () { return ["/admin/home/dashboard"]; };
class NotificationComponent {
    constructor(_us) {
        this._us = _us;
        this.isChecked = false;
        this.telegramStatus = 'yet';
        this.user = this._us.getuser();
    }
    ngOnInit() {
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["home-notification"]], decls: 65, vars: 8, consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-6"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(37 79 157)"], [1, "d-flex", "justify-content-between", "pb-20", "text-white"], [1, "icon", "h1", "text-white"], [1, "font-14", "text-right"], [1, "font-12"], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "text-white"], [1, "font-14"], [1, "font-24", "weight-500"], [1, "max-width-150", 2, "position", "relative"], [1, "card-box", "pd-10"], [1, "mb-2", "h2", "font-18"], [1, "form-group"], ["rows", "10", "cols", "50", 1, "form-control"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(69 112 134)"], [1, "icon-copy", "bi", "bi-telegram"], ["class", "mr-2", 4, "ngIf"], [3, "ngModel", "ngModelChange"], ["class", "card-box pb-10", 4, "ngIf"], ["class", "card-box pd-10", 4, "ngIf"], [1, "mr-2"], [1, "card-box", "pb-10"], [1, "form-group", "row", "pb-10"], [1, "col-sm-8", "col-md-8", "col-lg-8"], ["type", "text", "placeholder", "Enter chat ID", 1, "form-control"], [1, "col-sm-4", "col-md-4", "col-lg-4"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "btn-rounded", "btn-lg"], [1, "p-2", "text-danger"], [1, "p-2"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "filter_frames");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " 0: Open Tickets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " 0: Closed Ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, NotificationComponent_mat_icon_48_Template, 2, 0, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, NotificationComponent_mat_icon_49_Template, 2, 0, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Connect with telegram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " live_help");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Third Party Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-slide-toggle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_mat_slide_toggle_ngModelChange_62_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, NotificationComponent_div_63_Template, 2, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, NotificationComponent_div_64_Template, 24, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isChecked ? " Connected " : " Not Connected ", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isChecked);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8179:
/*!*********************************************************!*\
  !*** ./src/app/admin/home/setting/setting.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingComponent": () => (/* binding */ SettingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var src_app_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client/app.service */ 836);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);














function SettingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "h5", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h5", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Email Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", user_r4.firstName, " ", user_r4.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 8, user_r4.created_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r4.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r4.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r4.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r4.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r4.role[0], " ");
  }
}

function SettingComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function SettingComponent_i_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 98);
  }
}

function SettingComponent_form_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Retype Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return ["/admin/home/dashboard"];
};

const _c1 = function (a0) {
  return {
    "d-none": a0
  };
};

class SettingComponent {
  constructor(_us, _fs, _company, _aps, ss, _ds) {
    this._us = _us;
    this._fs = _fs;
    this._company = _company;
    this._aps = _aps;
    this.ss = ss;
    this._ds = _ds;
    this.$user = this._us.user$;
    this.changingPassword = false;
    this.currentPage = 'timelineAccount';
    this.newCompany = {
      name: '',
      website: '',
      logo: '',
      country: '',
      address: ''
    };
    this.passageAuth = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.passageAppId;
    this.company$ = this._company.company$;
  }

  ngOnInit() {
    this.company$.subscribe(c => this.newCompany = c);
  }

  submit() {}

  showmodal() {
    const showCreateCompanyModal = document.getElementById('showCreateCompanyModal');
    showCreateCompanyModal.click();
  }

  handleFileInput(event) {
    const files = event.target.files;
    const fileToUpload = files.item(0);
    let formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this._fs.upload(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(err);
    })).subscribe(f => {
      this.newCompany.logo = f.file;
    });
  }

  save(event) {
    event.preventDefault();

    if (!this.newCompany.name) {
      this._ds.openErrorNotification('Name', 'Company name is required');

      return;
    } // if(!this.newCompany.website){
    // }


    if (!this.newCompany.logo) {
      this._ds.openErrorNotification('Logo', 'Company logo is required');

      return;
    }

    if (!this.newCompany.country) {
      this._ds.openErrorNotification('Country', 'Company country is required');

      return;
    }

    if (!this.newCompany.address) {
      this._ds.openErrorNotification('Address', 'Company address is required');

      return;
    }

    let now = new Date(Date.now());

    this._company.update(Object.assign(Object.assign({}, this.newCompany), {
      updated_at: now
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(e => {
      this.handleError(e);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(e);
    })).subscribe(c => {
      this._ds.oSuccessNotification('Company Information Updated', `${this.newCompany.name} was successfully updated.`);
    });
  }

  handleError(e) {
    this._ds.oErrorNotification('opps', 'Issues while updating');
  }

  closeModal() {
    const selectCompany_header = document.getElementById('selectCompany_header');

    if (selectCompany_header) {
      selectCompany_header.options.selectedIndex = 0;
    }
  }

  handleSelectChange(e, clickedIndex, isSelected, previousValue) {}

}

SettingComponent.ɵfac = function SettingComponent_Factory(t) {
  return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_5__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_6__.DeviceService));
};

SettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SettingComponent,
  selectors: [["app-setting"]],
  decls: 164,
  vars: 25,
  consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-12", "mb-30"], ["class", "pd-20 card-box height-100-p", 4, "ngIf"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-12", "mb-30"], [1, "card-box", "height-100-p", "overflow-hidden"], [1, "profile-tab", "height-100-p"], [1, "tab", "height-100-p"], ["role", "tablist", 1, "nav", "nav-tabs", "customtab"], [1, "nav-item"], ["data-toggle", "tab", "href", "#timelineAccount", "role", "tab", 1, "nav-link", "active", 3, "click"], ["data-toggle", "tab", "href", "#settingAccount", "role", "tab", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#tasksAccount", "role", "tab", 1, "nav-link", 3, "click"], [1, "tab-content", "mCustomScrollbar"], ["id", "timelineAccount", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active", "height-100-p", 3, "ngClass"], [1, "pd-10"], [1, "profile-edit-list", "row"], [1, "weight-500", "col-md-12"], [1, "text-blue", "h5", "mb-20"], [1, "form-group", "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-form-label"], [1, "text-danger"], [1, "col-sm-12", "col-md-12", "col-lg-12"], ["readonly", "", "name", "code", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "name", "type", "text", "placeholder", "Company name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "address", "type", "text", "placeholder", "Company Address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "country", "type", "text", "placeholder", "Country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["class", "icon-copy bi bi-file-earmark-check-fill text-success", 4, "ngIf"], [1, "custom-file"], ["type", "file", "name", "logo", "placeholder", "Company Logo", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], ["name", "website", "type", "text", "placeholder", "Link to company website (Optional)", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-6", "p-2"], [1, "input-group", "mb-0"], ["href", "javascript:void()", "type", "button", "data-dismiss", "modal", "id", "closeAddCompanyModal", 1, "btn", "btn-danger", "btn-block", "btn-sm", 3, "click"], ["href", "javascript:void()", 1, "btn", "btn-success", "btn-block", "btn-sm", 3, "click"], ["id", "settingAccount", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [1, "profile-setting"], [3, "appId"], ["id", "tasksAccount", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [1, "pd-20", "profile-task-wrap"], [1, "container", "pd-0"], [1, "task-title", "row", "align-items-center"], [1, "col-md-8", "col-sm-12"], [1, "col-md-4", "col-sm-12", "text-right"], ["href", "task-add", "data-toggle", "modal", "data-target", "#task-add", 1, "bg-light-blue", "btn", "text-blue", "weight-500"], [1, "ion-plus-round"], [1, "col-md-12", "col-sm-12"], [1, "profile-task-list", "pb-30"], [1, "custom-control", "custom-checkbox", "mb-5"], ["type", "checkbox", "id", "task-1", 1, "custom-control-input"], ["for", "task-1", 1, "custom-control-label"], [1, "task-type"], [1, "task-assign"], [1, "due-date"], [1, "profile-task-list", "close-tasks"], ["id", "task-add", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", "customscroll"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "Close Modal", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "pd-0"], [1, "task-list-form"], [1, "col-md-4"], [1, "col-md-8"], ["type", "text", 1, "form-control"], [4, "ngIf"], [1, "add-more-task"], ["href", "javascript:void()", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Change password", "data-original-title", "Change password", 3, "click"], [1, "ion-plus-circled"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], [1, "pd-20", "card-box", "height-100-p"], [1, "profile-photo"], ["href", "modal", "data-toggle", "modal", "data-target", "#modal", 1, "edit-avatar"], [1, "fa", "fa-pencil"], ["src", "assets/img/profile2.svg", "alt", "", 1, "avatar-photo"], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-body", "pd-5"], [1, "img-container"], ["id", "image", "src", "assets/img/profile2.svg", "alt", "Picture"], ["type", "submit", "value", "Update", 1, "btn", "btn-primary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "text-center", "h5", "mb-0"], [1, "text-center", "text-muted", "font-14"], [1, "profile-info"], [1, "mb-20", "h5", "text-blue"], [1, "icon-copy", "bi", "bi-file-earmark-check-fill", "text-success"], [1, "form-group", "row", "mb-0"]],
  template: function SettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nav", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ol", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Account Setting ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, SettingComponent_div_15_Template, 45, 10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "ul", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_23_listener() {
        return ctx.currentPage = "timelineAccount";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Company Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_26_listener() {
        return ctx.currentPage = "settingAccount";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_29_listener() {
        return ctx.currentPage = "tasksAccount";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Password & Sessions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "ul", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h4", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " Edit Your Company Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_input_ngModelChange_45_listener($event) {
        return ctx.newCompany.code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_input_ngModelChange_52_listener($event) {
        return ctx.newCompany.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.newCompany.address = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_input_ngModelChange_66_listener($event) {
        return ctx.newCompany.country = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, SettingComponent_span_70_Template, 2, 0, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, SettingComponent_i_71_Template, 1, 0, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_74_listener($event) {
        return ctx.handleFileInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Select Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_input_ngModelChange_81_listener($event) {
        return ctx.newCompany.website = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_85_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_89_listener($event) {
        return ctx.save($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "passage-profile", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Session history");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](104, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, " Change Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Current Sessions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](114, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](115, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "SSSSSSSSSSSSSSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, " Session token ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, " SSSSSSSSSSSSSSS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, " was created at --/--/---- ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, " UserId: 1, Auth-Id: 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, " due date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "22 February 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](132, "Other Sessions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](133, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "h5", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, " Password Authentication ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "span", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](150, "Current Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](152, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](154, SettingComponent_form_154_Template, 11, 0, "form", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_156_listener() {
        return ctx.changingPassword = !ctx.changingPassword;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](157, "i", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "button", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_160_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "button", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 16, ctx.$user));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](19, _c1, ctx.currentPage != "timelineAccount"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.newCompany.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.newCompany.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.newCompany.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.newCompany.country);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", !ctx.newCompany.logo ? "Upload Logo " : "Uploaded ", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.newCompany.logo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.newCompany.logo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.newCompany.website);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c1, ctx.currentPage != "settingAccount"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appId", ctx.passageAuth);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c1, ctx.currentPage != "tasksAccount"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.changingPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.changingPassword ? "Not Changing Anymore" : "I Want To Change My Password", " ");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3789:
/*!************************************************************!*\
  !*** ./src/app/shared/services/recruitment/job.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobService": () => (/* binding */ JobService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ 4758);







class JobService {
    constructor(http, _us) {
        this.http = http;
        this._us = _us;
        this._positions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._openings = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._applications$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._applications = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new Map());
        this._job_applications = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new Map());
        this.jobPositions$ = this._positions.asObservable();
        this.jobOpenings$ = this._openings.asObservable();
        this.applications$ = this._applications$.asObservable();
        this.departments$_status = 'yet';
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.getJobPositionsApi$ = this.getJoPositionsApi().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._positions.next(res);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
        this.getJobOpeningsApi$ = this.getJobOpeningsApi().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._openings.next(res);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
    }
    getJoPositionsApi() {
        return this.http.get(`${this.apiUrl}/jobPositions`);
    }
    applyToOpening(application) {
        application.messages = [];
        return this.http.post(`${this.apiUrl}/jobApplications`, application).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((re) => { this._addApplciation(re); }));
    }
    getJobPosition(code) {
        return this.http.get(`${this.apiUrl}/jobPositions?code=${code}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => res.pop()));
    }
    getJobPositionsApi(sort) {
        return this.http.get(`${this.apiUrl}/jobPositions`, { params: sort });
    }
    getJobOpeningsApiSort(sort) {
        return this.http.get(`${this.apiUrl}/jobOpenings`, { params: sort });
    }
    getJobApplicationApiSort(sort) {
        return this.http.get(`${this.apiUrl}/jobApplications`, { params: sort });
    }
    getJobOpeningsApi() {
        const companycode = localStorage.getItem('runningCompany');
        let headerParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams().set('company_like', `${companycode}`);
        return this.http.get(`${this.apiUrl}/jobOpenings`, { params: headerParams });
    }
    getJobOpeningApplicationsApi(openingCode) {
        return this.http.get(`${this.apiUrl}/jobApplications?opening_code=${openingCode}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((applications) => {
            const jobApp = this._job_applications.value;
            jobApp.set(openingCode, applications);
            this._job_applications.next(jobApp);
        }));
    }
    searchJobOpeningApplicationsApi(openingCode, code) {
        return this.http.get(`${this.apiUrl}/jobApplications?opening_code=${openingCode}&code=${code}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((applications) => {
            const jobApp = this._job_applications.value;
            const apps = jobApp.get(openingCode) ? jobApp.get(openingCode) : [];
            const ids = new Set(apps.map((d) => d.code));
            const merged = [...apps, ...applications.filter((d) => !ids.has(d.code))];
            jobApp.set(openingCode, merged);
            this._job_applications.next(jobApp);
        }));
    }
    get job_applications() {
        return this._job_applications;
    }
    getJobOpening(code) {
        return this.http.get(`${this.apiUrl}/jobOpenings?code=${code}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => res.pop()));
    }
    getAvailableJobOpening() {
        return this.http.get(`${this.apiUrl}/jobOpenings?status=Open`);
    }
    previewJobOpening(code) {
        return this.getJobOpening(code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(opening => {
            opening.views++;
            opening.status = this.inpast(opening.deadline) ? 'Closed' : 'Open';
            return this.updateJobOpening(opening);
        }));
    }
    inpast(date) {
        let givenDate1 = new Date(date);
        let diff = new Date().getTime() - givenDate1.getTime();
        return diff > 0;
    }
    newJobPositionApi(position) {
        return this.http.post(`${this.apiUrl}/jobPositions`, position);
    }
    newJobOpeningApi(position) {
        return this.http.post(`${this.apiUrl}/jobOpenings`, position);
    }
    updateJobOpeningApi(position) {
        return this.http.patch(`${this.apiUrl}/jobOpenings/${position.id}`, position);
    }
    addPosition(position) {
        return this.newJobPositionApi(position).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._positions.value.unshift(res);
        }));
    }
    addOpening(opening) {
        opening.views = 0;
        opening.applications = 0;
        return this.newJobOpeningApi(opening).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._openings.value.unshift(res);
        }));
    }
    updateJobOpening(opening) {
        return this.updateJobOpeningApi(opening);
    }
    _addApplciation(application) {
        const exList = this._applications.value;
        let app = exList.get(application.code);
        if (!app) {
            exList.set(application.code, application);
            this._applications.next(exList);
        }
    }
    updateJobApplciationApi(application) {
        return this.http.patch(`${this.apiUrl}/jobApplications/${application.id}`, application).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._updateApplication(res);
        }));
    }
    _updateApplication(application) {
        const exList = this._applications.value;
        exList.set(application.code, application);
        this._applications.next(exList);
    }
    get applications() {
        return this._applications.value;
    }
    set apps(_apps) {
        this._applications$.next(_apps);
    }
    get jobPositionsValue() {
        return this._positions.value;
    }
    get jobOpeningsValue() {
        return this._openings.value;
    }
    set positions(ps) {
        this._positions.next(ps);
    }
    set openings(ps) {
        this._openings.next(ps);
    }
}
JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
JobService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_home_home_module_ts.js.map