"use strict";
(self["webpackChunksparklingv2"] = self["webpackChunksparklingv2"] || []).push([["default-src_app_admin_recruitment_recruitment_module_ts"],{

/***/ 2143:
/*!************************************************************!*\
  !*** ./src/app/admin/recruitment/index/index.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class IndexComponent {
    constructor(location, _formBuilder, router, route) {
        this.location = location;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.route = route;
        this.tab = 'Home';
        this.url = '';
    }
    ngOnInit() {
        this.route
            .data
            .subscribe(v => {
            this.tab = v.tab;
            this.url = this.router.url;
        });
    }
    goto(url, tab) {
        this.tab = tab;
        this.location.replaceState(`/admin/file-manager/${url}`);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 1, vars: 0, template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiJdfQ== */"] });


/***/ }),

/***/ 314:
/*!****************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/application/index/index.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/list.component */ 3887);



const _c0 = function () { return ["/admin/file-manager/home"]; };
class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-recruitment-application-index"]], decls: 112, vars: 2, consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "font-24", "weight-500", "mb-10"], [1, "col-md-6"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(2 22 69)"], [1, "d-flex", "justify-content-between", "pb-20", "text-white"], [1, "icon", "h1", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-map-pin"], [1, "font-14", "text-right"], [1, "font-12"], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "text-white"], [1, "font-14"], [1, "font-24", "weight-500"], [1, "max-width-150", 2, "position", "relative"], ["id", "appointment-chart", 2, "min-height", "70px"], ["id", "apexcharts5d2add", 1, "apexcharts-canvas", "apexcharts5d2add", "apexcharts-theme-light", 2, "width", "150px", "height", "70px"], ["id", "SvgjsSvg1606", "width", "150", "height", "70", "xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "svgjs", "http://svgjs.com/svgjs", 0, "xmlns", "data", "ApexChartsNS", "transform", "translate(0, 0)", 1, "apexcharts-svg", 2, "background", "transparent"], ["id", "SvgjsG1608", "transform", "translate(0, 0)", 1, "apexcharts-inner", "apexcharts-graphical"], ["id", "SvgjsDefs1607"], ["id", "SvgjsLinearGradient1611", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["id", "SvgjsStop1612", "stop-opacity", "0.4", "stop-color", "rgba(216,227,240,0.4)", "offset", "0"], ["id", "SvgjsStop1613", "stop-opacity", "0.5", "stop-color", "rgba(190,209,230,0.5)", "offset", "1"], ["id", "SvgjsStop1614", "stop-opacity", "0.5", "stop-color", "rgba(190,209,230,0.5)", "offset", "1"], ["id", "gridRectMask5d2add"], ["id", "SvgjsRect1616", "width", "154", "height", "70", "x", "-2", "y", "0", "rx", "0", "ry", "0", "fill", "#ffffff", "opacity", "1", "stroke-width", "0", "stroke", "none", "stroke-dasharray", "0"], ["id", "gridRectMarkerMask5d2add"], ["id", "SvgjsRect1617", "width", "152", "height", "72", "x", "-1", "y", "-1", "rx", "0", "ry", "0", "fill", "#ffffff", "opacity", "1", "stroke-width", "0", "stroke", "none", "stroke-dasharray", "0"], ["id", "SvgjsRect1615", "width", "5.357142857142857", "height", "70", "x", "0", "y", "0", "rx", "0", "ry", "0", "fill", "url(#SvgjsLinearGradient1611)", "opacity", "1", "stroke-width", "0", "stroke-dasharray", "3", "y2", "70", "filter", "none", "fill-opacity", "0.9", 1, "apexcharts-xcrosshairs"], ["id", "SvgjsG1629", "transform", "translate(0, 0)", 1, "apexcharts-xaxis"], ["id", "SvgjsG1630", "transform", "translate(0, 2.75)", 1, "apexcharts-xaxis-texts-g"], ["id", "SvgjsG1632", 1, "apexcharts-grid"], ["id", "SvgjsG1633", 1, "apexcharts-gridlines-horizontal", 2, "display", "none"], ["id", "SvgjsLine1635", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1636", "x1", "0", "y1", "17.5", "x2", "150", "y2", "17.5", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1637", "x1", "0", "y1", "35", "x2", "150", "y2", "35", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1638", "x1", "0", "y1", "52.5", "x2", "150", "y2", "52.5", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1639", "x1", "0", "y1", "70", "x2", "150", "y2", "70", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsG1634", 1, "apexcharts-gridlines-vertical", 2, "display", "none"], ["id", "SvgjsLine1641", "x1", "0", "y1", "70", "x2", "150", "y2", "70", "stroke", "transparent", "stroke-dasharray", "0"], ["id", "SvgjsLine1640", "x1", "0", "y1", "1", "x2", "0", "y2", "70", "stroke", "transparent", "stroke-dasharray", "0"], ["id", "SvgjsG1619", 1, "apexcharts-bar-series", "apexcharts-plot-series"], ["id", "SvgjsG1620", "rel", "1", "seriesName", "Week", 0, "data", "realIndex", "0", 1, "apexcharts-series"], ["id", "SvgjsPath1622", "d", "M 8.035714285714285 70L 8.035714285714285 18.839285714285715Q 10.714285714285714 16.16071428571429 13.392857142857142 18.839285714285715L 13.392857142857142 70L 8.035714285714285 70", "fill", "rgba(0,143,251,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 8.035714285714285 70L 8.035714285714285 18.839285714285715Q 10.714285714285714 16.16071428571429 13.392857142857142 18.839285714285715L 13.392857142857142 70L 8.035714285714285 70", "pathFrom", "M 8.035714285714285 70L 8.035714285714285 70L 13.392857142857142 70L 13.392857142857142 70L 8.035714285714285 70", "cy", "17.5", "cx", "29.46428571428571", "j", "0", "val", "21", "barHeight", "52.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1623", "d", "M 29.46428571428571 70L 29.46428571428571 16.339285714285715Q 32.14285714285714 13.660714285714286 34.82142857142857 16.339285714285715L 34.82142857142857 70L 29.46428571428571 70", "fill", "rgba(0,227,150,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 29.46428571428571 70L 29.46428571428571 16.339285714285715Q 32.14285714285714 13.660714285714286 34.82142857142857 16.339285714285715L 34.82142857142857 70L 29.46428571428571 70", "pathFrom", "M 29.46428571428571 70L 29.46428571428571 70L 34.82142857142857 70L 34.82142857142857 70L 29.46428571428571 70", "cy", "15", "cx", "50.89285714285714", "j", "1", "val", "22", "barHeight", "55", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1624", "d", "M 50.89285714285714 70L 50.89285714285714 46.339285714285715Q 53.57142857142857 43.660714285714285 56.24999999999999 46.339285714285715L 56.24999999999999 70L 50.89285714285714 70", "fill", "rgba(254,176,25,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 50.89285714285714 70L 50.89285714285714 46.339285714285715Q 53.57142857142857 43.660714285714285 56.24999999999999 46.339285714285715L 56.24999999999999 70L 50.89285714285714 70", "pathFrom", "M 50.89285714285714 70L 50.89285714285714 70L 56.24999999999999 70L 56.24999999999999 70L 50.89285714285714 70", "cy", "45", "cx", "72.32142857142857", "j", "2", "val", "10", "barHeight", "25", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1625", "d", "M 72.32142857142857 70L 72.32142857142857 1.3392857142857142Q 75 -1.3392857142857142 77.67857142857143 1.3392857142857142L 77.67857142857143 70L 72.32142857142857 70", "fill", "rgba(255,69,96,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 72.32142857142857 70L 72.32142857142857 1.3392857142857142Q 75 -1.3392857142857142 77.67857142857143 1.3392857142857142L 77.67857142857143 70L 72.32142857142857 70", "pathFrom", "M 72.32142857142857 70L 72.32142857142857 70L 77.67857142857143 70L 77.67857142857143 70L 72.32142857142857 70", "cy", "0", "cx", "93.75", "j", "3", "val", "28", "barHeight", "70", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1626", "d", "M 93.75 70L 93.75 31.339285714285715Q 96.42857142857143 28.66071428571429 99.10714285714286 31.339285714285715L 99.10714285714286 70L 93.75 70", "fill", "rgba(119,93,208,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 93.75 70L 93.75 31.339285714285715Q 96.42857142857143 28.66071428571429 99.10714285714286 31.339285714285715L 99.10714285714286 70L 93.75 70", "pathFrom", "M 93.75 70L 93.75 70L 99.10714285714286 70L 99.10714285714286 70L 93.75 70", "cy", "30", "cx", "115.17857142857143", "j", "4", "val", "16", "barHeight", "40", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1627", "d", "M 115.17857142857143 70L 115.17857142857143 18.839285714285715Q 117.85714285714286 16.16071428571429 120.53571428571429 18.839285714285715L 120.53571428571429 70L 115.17857142857143 70", "fill", "rgba(0,143,251,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 115.17857142857143 70L 115.17857142857143 18.839285714285715Q 117.85714285714286 16.16071428571429 120.53571428571429 18.839285714285715L 120.53571428571429 70L 115.17857142857143 70", "pathFrom", "M 115.17857142857143 70L 115.17857142857143 70L 120.53571428571429 70L 120.53571428571429 70L 115.17857142857143 70", "cy", "17.5", "cx", "136.60714285714286", "j", "5", "val", "21", "barHeight", "52.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1628", "d", "M 136.60714285714286 70L 136.60714285714286 38.839285714285715Q 139.28571428571428 36.160714285714285 141.96428571428572 38.839285714285715L 141.96428571428572 70L 136.60714285714286 70", "fill", "rgba(0,227,150,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 136.60714285714286 70L 136.60714285714286 38.839285714285715Q 139.28571428571428 36.160714285714285 141.96428571428572 38.839285714285715L 141.96428571428572 70L 136.60714285714286 70", "pathFrom", "M 136.60714285714286 70L 136.60714285714286 70L 141.96428571428572 70L 141.96428571428572 70L 136.60714285714286 70", "cy", "37.5", "cx", "158.03571428571428", "j", "6", "val", "13", "barHeight", "32.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsG1621", 0, "data", "realIndex", "0", 1, "apexcharts-datalabels"], ["id", "SvgjsLine1642", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke", "#b6b6b6", "stroke-dasharray", "0", "stroke-width", "1", 1, "apexcharts-ycrosshairs"], ["id", "SvgjsLine1643", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke-dasharray", "0", "stroke-width", "0", 1, "apexcharts-ycrosshairs-hidden"], ["id", "SvgjsG1644", 1, "apexcharts-yaxis-annotations"], ["id", "SvgjsG1645", 1, "apexcharts-xaxis-annotations"], ["id", "SvgjsG1646", 1, "apexcharts-point-annotations"], ["id", "SvgjsG1631", "rel", "0", "transform", "translate(-18, 0)", 1, "apexcharts-yaxis"], [1, "apexcharts-legend"], [1, "apexcharts-tooltip", "apexcharts-theme-light"], [1, "apexcharts-tooltip-title", 2, "font-family", "Helvetica, Arial, sans-serif", "font-size", "12px"], [1, "apexcharts-tooltip-series-group"], [1, "apexcharts-tooltip-marker", 2, "background-color", "rgb(0, 143, 251)"], [1, "apexcharts-tooltip-text", 2, "font-family", "Helvetica, Arial, sans-serif", "font-size", "12px"], [1, "apexcharts-tooltip-y-group"], [1, "apexcharts-tooltip-text-label"], [1, "apexcharts-tooltip-text-value"], [1, "apexcharts-tooltip-z-group"], [1, "apexcharts-tooltip-text-z-label"], [1, "apexcharts-tooltip-text-z-value"], [1, "resize-triggers"], [1, "expand-trigger"], [2, "width", "151px", "height", "71px"], [1, "contract-trigger"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(25, 131, 163)"], ["aria-hidden", "true", 1, "fa", "fa-globe"], [1, "font-12", "text-white"], [1, "btn", "btn-primary", "btn-sm", "text-white"], [1, "pd-10"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Job Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Job Applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Your Job Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Salary Cap.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Total Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "defs", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "linearGradient", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "stop", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "stop", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "stop", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "clipPath", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "clipPath", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "rect", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "rect", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "g", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "line", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "line", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "line", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "line", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "line", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "g", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "line", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "line", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "g", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "g", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "line", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "line", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "g", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "g", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Total Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "app-recruitment-application-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3887:
/*!**************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/application/list/list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/view.component */ 1232);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 7043);
/* harmony import */ var _opening_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../opening/create/create.component */ 2000);















function ListComponent_div_7_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r10.translate(column_r9)), " ");
  }
}

function ListComponent_div_7_ng_container_2_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_7_ng_container_2_td_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r13[column_r9], " ");
  }
}

function ListComponent_div_7_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListComponent_div_7_ng_container_2_td_2_Template_td_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const element_r13 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r18.dropingDown(element_r13, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListComponent_div_7_ng_container_2_td_2_span_1_Template, 5, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListComponent_div_7_ng_container_2_td_2_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", column_r9 == "public_url" || column_r9 == "private_url");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", column_r9 != "public_url" && column_r9 != "private_url");
  }
}

function ListComponent_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListComponent_div_7_ng_container_2_th_1_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListComponent_div_7_ng_container_2_td_2_Template, 3, 2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matColumnDef", column_r9);
  }
}

function ListComponent_div_7_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_7_td_5_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_7_td_5_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_7_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListComponent_div_7_td_5_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const element_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r24.dropingDown(element_r21, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListComponent_div_7_td_5_mat_icon_2_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ListComponent_div_7_td_5_mat_icon_3_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.expandedElement !== element_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.expandedElement === element_r21);
  }
}

function ListComponent_div_7_td_7_div_50_tbody_20_tr_1_a_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const upload_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", upload_r37.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", upload_r37.fileName, " ");
  }
}

function ListComponent_div_7_td_7_div_50_tbody_20_tr_1_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListComponent_div_7_td_7_div_50_tbody_20_tr_1_td_26_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const application_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return ctx_r39.reply(application_r33);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-recruitment-application-view", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("applicationEmit", function ListComponent_div_7_td_7_div_50_tbody_20_tr_1_td_26_Template_app_recruitment_application_view_applicationEmit_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const i_r34 = ctx_r43.index;
      const application_r33 = ctx_r43.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return ctx_r42.applicationEmitter($event, i_r34, application_r33);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r38 = ctx.ngIf;
    const application_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("application", application_r33)("user", user_r38);
  }
}

function ListComponent_div_7_td_7_div_50_tbody_20_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "last updated on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ListComponent_div_7_td_7_div_50_tbody_20_tr_1_a_25_Template, 2, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ListComponent_div_7_td_7_div_50_tbody_20_tr_1_td_26_Template, 7, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const application_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 10, application_r33.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", application_r33.firstName, " ", application_r33.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](application_r33.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](application_r33.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](application_r33.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](application_r33.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 12, application_r33.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", application_r33.uploads);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 14, ctx_r32.user$));
  }
}

const _c0 = function () {
  return [];
};

const _c1 = function (a1) {
  return {
    itemsPerPage: 2,
    currentPage: a1
  };
};

function ListComponent_div_7_td_7_div_50_tbody_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListComponent_div_7_td_7_div_50_tbody_20_tr_1_Template, 28, 16, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const applications_r31 = ctx.ngIf;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, applications_r31.get(ctx_r29.expandedElement.code) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, ctx_r29.p)));
  }
}

function ListComponent_div_7_td_7_div_50_p_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r46.appFetchStatus, " ");
  }
}

function ListComponent_div_7_td_7_div_50_p_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No Application received ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_7_td_7_div_50_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListComponent_div_7_td_7_div_50_p_22_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListComponent_div_7_td_7_div_50_p_22_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const apps_r45 = ctx.ngIf;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r30.appFetchStatus != "Yet" && ctx_r30.appFetchStatus != "Loaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", apps_r45.get(ctx_r30.expandedElement.code) == undefined && ctx_r30.appFetchStatus != "Yet" && ctx_r30.appFetchStatus != "Loaded");
  }
}

function ListComponent_div_7_td_7_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Uploaded Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ListComponent_div_7_td_7_div_50_tbody_20_Template, 3, 7, "tbody", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ListComponent_div_7_td_7_div_50_p_22_Template, 3, 2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 2, ctx_r27.applications));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 4, ctx_r27.applications));
  }
}

function ListComponent_div_7_td_7_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "pagination-controls", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ListComponent_div_7_td_7_div_51_Template_pagination_controls_pageChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r48.p = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_7_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Application List");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "sort_by_alpha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " import_export");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Viewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Request Interview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Pending Interview Acceptance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Accepted Interview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Passed Interview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Failed Interview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Employed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ListComponent_div_7_td_7_div_50_Template, 24, 6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ListComponent_div_7_td_7_div_51_Template, 3, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", ctx_r5.columnsToDisplayWithExpand.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@detailExpand", element_r26 == ctx_r5.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "search_" + (ctx_r5.expandedElement == null ? null : ctx_r5.expandedElement.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.expandedElement);
  }
}

function ListComponent_div_7_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 69);
  }
}

function ListComponent_div_7_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListComponent_div_7_tr_9_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const element_r50 = restoredCtx.$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r51.expandedElement = ctx_r51.expandedElement === element_r50 ? null : element_r50;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r50 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("example-expanded-row", ctx_r7.expandedElement === element_r50);
  }
}

function ListComponent_div_7_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 71);
  }
}

const _c2 = function () {
  return ["expandedDetail"];
};

function ListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListComponent_div_7_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ListComponent_div_7_th_4_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ListComponent_div_7_td_5_Template, 4, 2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ListComponent_div_7_td_7_Template, 52, 5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ListComponent_div_7_tr_8_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ListComponent_div_7_tr_9_Template, 1, 2, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ListComponent_div_7_tr_10_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplayWithExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplayWithExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c2));
  }
}

function ListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-recruitment-opening-create", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loadForm", true);
  }
}

class ListComponent {
  constructor(_js, _ds, _us) {
    this._js = _js;
    this._ds = _ds;
    this._us = _us;
    this.creating = false;
    this.dataSource = [];
    this.p = 0;
    this.opening$ = this._js.getJobOpeningsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(res => {
      this.dataSource = res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
    this.applications = this._js.job_applications;
    this.user$ = this._us.user$;
    this.appFetchStatus = 'Yet';
    this.columnsToDisplay = ['title', 'code', 'deadline', 'status', 'public_url'];
    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    this.expandedElement = null;
  }

  ngOnInit() {
    this.opening$.subscribe();
  }

  translate(key) {
    return `${key.replace('_', ' ')}`;
  }

  copied(url) {
    let opt = Object.assign(Object.assign({}, this._ds.toastOptions), {
      theClass: 'welcome-modal',
      timeOut: 3000
    });

    this._ds.oSuccessNotification('Copied Job Opening URL', `${url} copied to clipboard.`, opt);
  }

  applicationEmitter(event, index, application) {
    application = event;
  }

  dropingDown(element, event) {
    if (this.expandedElement === element) {
      this.expandedElement = null;
    } else {
      this.expandedElement = element;
      this.getCurrentApplication();
    }

    event.stopPropagation();
  }

  getCurrentApplication() {
    if (this.expandedElement) {
      const jobApps = this._js.job_applications.value;
      this.appFetchStatus = 'Fetching job applications...';

      this._js.getJobOpeningApplicationsApi(this.expandedElement.code).subscribe(applications => this.appFetchStatus = 'Loaded');
    }
  }

  reply(application) {}

  view(application) {}

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-recruitment-application-list"]],
  decls: 9,
  vars: 3,
  consts: [[1, "row"], [1, "col-md-12"], [1, "clearfix", "mb-20"], [1, "pull-left"], [1, "text-blue", "h4"], [1, "pull-right"], ["class", "col-md-12", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expand"], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], [4, "ngIf"], ["title", "Preview In New Tab", 1, "p-2", "pointer"], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "expand row", 3, "click"], [1, "example-element-detail"], [1, "card", "card-box", "m-2"], [1, "card-header"], [1, "col-md-6"], [1, "text-primary", "pt-4"], [1, "col-md-6", "text-right"], [1, "p-2", "d-flex"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "pr-2"], [1, "btn", "btn-sm", "btn-outline-secondary", "masy", "active"], ["type", "radio", "name", "options", "id", "option1", "autocomplete", "off", "checked", ""], [1, "btn", "btn-sm", "btn-outline-secondary", "masy"], ["type", "radio", "name", "options", "id", "option3", "autocomplete", "off"], ["type", "radio", "name", "options", "id", "option2", "autocomplete", "off"], [1, "form-group", "col-form-label", "pr-2"], ["id", "selectCompany_status", "name", "status", 1, "custom-select", "form-control"], ["value", "submitted"], ["value", "Viewed"], ["value", "Request Interview"], ["value", "Pending Interview Acceptance"], ["value", "Accepted Interview"], ["value", "Passed Interview"], ["value", "Failed Interview"], ["value", "Rejected"], ["value", "Accepted"], ["value", "Employed"], [1, "col-form-label"], ["type", "text", "name", "search", "placeholder", "Search", 1, "form-control", 3, "id"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "table-responsive"], [1, "data-table", "table", "nowrap"], [1, "table-plus"], [1, "datatable-nosort"], ["class", "text-center", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-block", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "d-block", 3, "href"], ["title", "Respoond", 1, "p-2", "pointer", 3, "click"], [3, "application", "user", "applicationEmit"], [1, "text-center"], [1, "col-12", "text-right"], [3, "pageChange"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], [3, "loadForm"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ListComponent_div_7_Template, 11, 6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ListComponent_div_8_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx.creating ? "Application Openings" : "Create New Job Opening ", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.creating);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.creating);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _view_view_component__WEBPACK_IMPORTED_MODULE_3__.ViewComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginationControlsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _opening_create_create_component__WEBPACK_IMPORTED_MODULE_4__.CreateComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["td[_ngcontent-%COMP%] {\n  max-width: 100px;\n  word-break: break-all;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  background-color: #021645 !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #0f5d91;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #0f69a5;\n}\n\n.pointer[_ngcontent-%COMP%]:hover {\n  color: #0f69a5;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.masy[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-top: 5px;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQUFFO0VBQ0UsU0FBQTtBQUdKOztBQUFFO0VBQ0UsbUJBQUE7QUFHSjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxzQkFBQTtBQUtKOztBQUZFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFIRTtFQUNFLGFBQUE7QUFNSjs7QUFIRTtFQUNFLFlBQUE7QUFNSiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5tYXQtZWxldmF0aW9uLXo4e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMTY0NSAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNSwgOTMsIDE0NSk7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjY5YTU7XHJcbiAgfVxyXG4gIC5wb2ludGVyOmhvdmVye1xyXG4gICAgY29sb3I6ICMwZjY5YTU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5tYXN5e1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gICJdfQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
      height: '0px',
      minHeight: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
  }
});

/***/ }),

/***/ 1232:
/*!**************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/application/view/view.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ 7043);














function ViewComponent_a_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upload_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", upload_r4.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", upload_r4.fileName, ", ");
} }
function ViewComponent_div_101_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Must be up to 50 characters to proceed action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ViewComponent_div_101_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Must be up to ", ctx_r6.error, "");
} }
function ViewComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "angular-editor", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ViewComponent_div_101_Template_angular_editor_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.response = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ViewComponent_div_101_p_2_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ViewComponent_div_101_p_3_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx_r1.editorConfig)("placeholder", "Dear " + (ctx_r1.application == null ? null : ctx_r1.application.firstName) + "...")("ngModel", ctx_r1.response);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.response && ctx_r1.response.length < 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.error);
} }
function ViewComponent_div_102_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, message_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", message_r11.mailOptions.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", message_r11.body, " ");
} }
function ViewComponent_div_102_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No message here...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return { itemsPerPage: 2, currentPage: a1, id: a2 }; };
function ViewComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ViewComponent_div_102_li_3_Template, 10, 5, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ViewComponent_div_102_li_5_Template, 4, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "pagination-controls", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ViewComponent_div_102_Template_pagination_controls_pageChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, ctx_r2.application.messages, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx_r2.p, "view_" + (ctx_r2.application == null ? null : ctx_r2.application.code))));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.application.messages.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "view_", ctx_r2.application == null ? null : ctx_r2.application.code, "");
} }
function ViewComponent_div_103_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewComponent_div_103_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.update("Rejected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ViewComponent_div_103_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Processing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ViewComponent_div_103_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewComponent_div_103_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r19.update(ctx_r19.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r16.status), " ");
} }
function ViewComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewComponent_div_103_button_1_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ViewComponent_div_103_button_2_Template, 3, 0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ViewComponent_div_103_button_3_Template, 4, 3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.processing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.processing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.status != "Rejected" || (ctx_r3.application == null ? null : ctx_r3.application.status) != "Employed") && !ctx_r3.processing);
} }
class ViewComponent {
    constructor(cs, _fs, _ds, _js) {
        this.cs = cs;
        this._fs = _fs;
        this._ds = _ds;
        this._js = _js;
        this.type = 'modal';
        this.application = null;
        this.user = null;
        this.p = 0;
        this.error = null;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '50',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uploadApi}/upload`,
            upload: (file) => {
                let formData = new FormData();
                formData.append('file', file, file.name);
                return this._fs.upload(formData)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)((res) => {
                }));
            },
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
            ]
        };
        this.response = '';
        this.status = '';
        this.processing = false;
        this.showinghistory = false;
        this.applicationEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
    }
    view() {
    }
    reply(status) {
        let state = false;
        this.processing = false;
        this.error = null;
        let mail = {
            from: this.user.email,
            to: this.application.email,
            subject: ``,
            html: ``,
            body: ``
        };
        switch (status) {
            case 'Rejected':
                state = confirm('Are you sure you want to reject this application?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Application Response`, html: this.html, body: this.response });
                }
                break;
            case 'Request Interview':
                state = confirm('Are you sure you want to request for an interview?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Interview Request`, html: this.html, body: this.response });
                }
                break;
            case 'Viewed':
                state = confirm('Are you sure you want to only notify application?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Viewed Application Request`, html: this.html, body: this.response });
                }
                break;
            case 'Passed Interview':
                state = confirm('Are you sure you want to submit request?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Application Interview Successful`, html: this.html, body: this.response });
                }
                break;
            case 'Failed Interview':
                state = confirm('Are you sure you want to submit request?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Interview Failed`, html: this.html, body: this.response });
                }
                break;
            case 'Accepted':
                state = confirm('Are you sure you want to accept application?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Application Accepted`, html: this.html, body: this.response });
                }
                break;
        }
        if (state) {
            this.processing = true;
            let myLargeModalLabel = document.getElementById('myLargeModalLabel' + this.application.code);
            if (myLargeModalLabel) {
                myLargeModalLabel.click();
            }
            this._ds.mail(mail)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(_mail => {
                this.application.status = this.status;
                this.application.updated_at = new Date(Date.now());
                this.application.messages.unshift(_mail);
                return this._js.updateJobApplciationApi(this.application).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
                    this.application = res;
                    this.applicationEmit.emit(this.application);
                    this._ds.oSuccessNotification('Application updated', `Application ${this.application.code} successfully updated.`);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
                    this.handleErrr(err);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
                }));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
                this.handleErrr(err);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
            }))
                .subscribe(c => {
                this.processing = false;
            });
        }
    }
    update(status) {
        let state = false;
        this.processing = false;
        this.error = null;
        let mail = {
            from: this.user.email,
            to: this.application.email,
            subject: ``,
            html: ``,
            body: ``
        };
        switch (status) {
            case 'Rejected':
                state = confirm('Are you sure you want to reject this application?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Application Response`, html: this.html, body: this.response });
                }
                break;
            case 'Request Interview':
                state = confirm('Are you sure you want to request for an interview?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Interview Request`, html: this.html, body: this.response });
                }
                break;
            case 'Viewed':
                state = confirm('Are you sure you want to only notify application?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Viewed Application Request`, html: this.html, body: this.response });
                }
                break;
            case 'Passed Interview':
                state = confirm('Are you sure you want to submit request?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Application Interview Successful`, html: this.html, body: this.response });
                }
                break;
            case 'Failed Interview':
                state = confirm('Are you sure you want to submit request?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Interview Failed`, html: this.html, body: this.response });
                }
                break;
            case 'Accepted':
                state = confirm('Are you sure you want to accept application?');
                if (state) {
                    mail = Object.assign(Object.assign({}, mail), { subject: `Application Accepted`, html: this.html, body: this.response });
                }
                break;
        }
        if (state) {
            this.processing = true;
            let myLargeModalLabel = document.getElementById('myLargeModalLabel' + this.application.code);
            if (myLargeModalLabel) {
                myLargeModalLabel.click();
            }
            this._ds.mail(mail)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(_mail => {
                this.application.status = this.status;
                this.application.updated_at = new Date(Date.now());
                this.application.messages.unshift(_mail);
                return this._js.updateJobApplciationApi(this.application).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(r => { return Object.assign(Object.assign({}, r), { _mail }); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
                    this.application = res;
                    this.applicationEmit.emit(this.application);
                    this._ds.oSuccessNotification('Application updated', `Application ${this.application.code} successfully updated.`);
                    let messagehtml = document.createElement('div');
                    messagehtml.innerHTML = _mail.body;
                    this._ds.messageTelegramAdmin({
                        message: `${this.cs.runningCompany.name} just updated the job application:\n ${this.application.code}.\n\nMail Notification\n\nFrom\n${_mail.mailOptions.from}\n\nTo\n${_mail.mailOptions.to}\nBody\n\n${messagehtml.textContent}`
                    }).subscribe();
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
                    this.handleErrr(err);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
                }));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
                this.handleErrr(err);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
            }))
                .subscribe(c => {
                this.processing = false;
            });
        }
    }
    handleErrr(err) {
        this.error = `Oppss Error: Application ${this.application.code}`;
        this.processing = false;
        const id = document.getElementById('#bs-example-modal-lg-' + this.application.code);
        if (id) {
            id.click();
        }
    }
    get html() {
        return `
    <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Transactional Email</title>
    <style>
      /* -------------------------------------
          GLOBAL RESETS
      ------------------------------------- */

      /*All the styling goes here*/

      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
      }

      body {
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }
        table td {
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top;
      }

      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

      .body {
        background-color: #f6f6f6;
        width: 100%;
      }

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }

      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
        background: #ffffff;
        border-radius: 3px;
        width: 100%;
      }
      .txp{
        font-wa
      }

      .wrapper {
        box-sizing: border-box;
        padding: 20px;
      }

      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }
      .txp{
        word-wrap: break-word;
      }

      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center;
      }

      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px;
      }

      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
      }

      p,
      ul,
      ol {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px;
      }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px;
      }

      a {
        color: #3498db;
        text-decoration: underline;
      }

      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {
        box-sizing: border-box;
        width: 100%; }
        .btn > tbody > tr > td {
          padding-bottom: 15px; }
        .btn table {
          width: auto;
      }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center;
      }
        .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize;
      }

      .btn-primary table td {
        background-color: #3498db;
      }

      .btn-primary a {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
      }

      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
        margin-bottom: 0;
      }

      .first {
        margin-top: 0;
      }

      .align-center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .clear {
        clear: both;
      }

      .mt0 {
        margin-top: 0;
      }

      .mb0 {
        margin-bottom: 0;
      }

      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
      }

      .powered-by a {
        text-decoration: none;
      }

      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0;
      }

      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table.body h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {
          font-size: 16px !important;
        }
        table.body .wrapper,
        table.body .article {
          padding: 10px !important;
        }
        table.body .content {
          padding: 0 !important;
        }
        table.body .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table.body .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table.body .btn table {
          width: 100% !important;
        }
        table.body .btn a {
          width: 100% !important;
        }
        table.body .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }

    </style>
  </head>
  <body>
    <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">


              <div class="txp wrap card p-2 m-2">${this.response}</p>


            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div class="footer">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-block">
                    <span class="apple-link">For End Of Tenancy Cleaning
                    Please call for a Free Quote on.    07948750605
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html> `;
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_3__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_4__.JobService)); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-recruitment-application-view"]], inputs: { type: "type", application: "application", user: "user" }, decls: 104, vars: 25, consts: [["title", "View", "data-toggle", "modal", 1, "p-2", "pointer", 3, "click"], ["id", "bg-job-app-lg", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-xl"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "myLargeModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "id"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "p-2"], [1, "card", "card-box"], [1, "card-header"], [1, "card-body"], [1, "max-height-300", "min-height-300px"], [1, "text-success"], [1, "text-primary"], ["class", "d-block", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "max-height-300", "min-height-300px", "scr"], [3, "innerHTML"], [1, "col-md-12"], [1, "col-md-3"], ["name", "status", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Viewed"], ["value", "Request Interview"], ["value", "Passed Interview"], ["value", "Failed Interview"], ["value", "Rejected"], ["value", "Accepted"], ["value", "Employed"], [1, "col-md-9"], [1, "col-md-8"], [1, "text-danger"], [1, "col-md-4", "text-right", "pointer"], [3, "click"], [1, "icon-copy", "bi", "bi-arrow-90deg-down"], ["class", "card-body", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], ["target", "_blank", 1, "d-block", 3, "href"], [3, "config", "placeholder", "ngModel", "ngModelChange"], ["class", "text-danger pt-2 pb-2", 4, "ngIf"], [1, "text-danger", "pt-2", "pb-2"], [1, "timeline", "mb-30"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-12", "text-right"], [3, "id", "pageChange"], [1, "timeline-date"], [1, "timeline-desc", "card-box"], [1, "pd-20"], [1, "mb-10", "h4"], [1, "text-dark"], [1, "modal-footer"], ["type", "button", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm curblock", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "icon-copy", "bi", "bi-x-lg"], ["type", "button", 1, "btn", "btn-sm", "curblock"], [1, "icon-copy", "bi", "bi-lock"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "icon-copy", "bi", "bi-forward-fill"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewComponent_Template_span_click_0_listener() { return ctx.view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "remove_red_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " applied on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " with the phone number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " and email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " This job was last updated on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Uploaded Documents: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, ViewComponent_a_53_Template, 2, 2, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Cover Letter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " Update Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ViewComponent_Template_select_ngModelChange_73_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Viewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Request Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Passed Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Failed Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Employed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, " Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "small", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewComponent_Template_small_click_97_listener() { return ctx.showinghistory = !ctx.showinghistory; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, ViewComponent_div_101_Template, 4, 5, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, ViewComponent_div_102_Template, 9, 9, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](103, ViewComponent_div_103_Template, 4, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-target", "#bs-example-modal-lg-" + (ctx.application == null ? null : ctx.application.code));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", "bs-example-modal-lg-" + (ctx.application == null ? null : ctx.application.code));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Application #", ctx.application == null ? null : ctx.application.code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "myLargeModalLabel", ctx.application == null ? null : ctx.application.code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.application == null ? null : ctx.application.firstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.application == null ? null : ctx.application.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.application == null ? null : ctx.application.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 21, ctx.application == null ? null : ctx.application.created_at));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.application == null ? null : ctx.application.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.application == null ? null : ctx.application.email, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 23, ctx.application == null ? null : ctx.application.updated_at), " and is currently of the status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.application == null ? null : ctx.application.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.application.uploads);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Referred By: ", ctx.application == null ? null : ctx.application.referredBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Public url: ", ctx.application == null ? null : ctx.application.public_url, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.application == null ? null : ctx.application.coverLetterTypeContent, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.showinghistory ? "Message Box" : "Message Thread " + (ctx.p + 1) + "/" + ctx.application.messages.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showinghistory && ctx.status !== (ctx.application == null ? null : ctx.application.status));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showinghistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.response && ctx.response.length >= 50);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__.AngularEditorComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.PaginationControlsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe], styles: [".max-height-300[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n\n.min-height-300px[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.scr[_ngcontent-%COMP%] {\n  scroll-behavior: auto;\n  overflow-y: scroll;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #00c8ff;\n}\n\n.curblock[_ngcontent-%COMP%] {\n  background-color: #F6AE2D;\n  cursor: not-allowed;\n}\n\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC1oZWlnaHQtMzAwe1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcblxyXG59XHJcbi5taW4taGVpZ2h0LTMwMHB4e1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuLnNjcntcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLndyYXB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIwMCwgMjU1KTtcclxufVxyXG4uY3VyYmxvY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZBRTJEO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4ubWwtMntcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2000:
/*!**************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/create/create.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);

















function CreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Create A Job Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
function CreateComponent_mat_radio_button_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-radio-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", res_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](res_r3.title);
} }
class CreateComponent {
    constructor(_ds, _us, router, _departMentService, _script, changeDetect, companyService, _js, _fs) {
        this._ds = _ds;
        this._us = _us;
        this.router = router;
        this._departMentService = _departMentService;
        this._script = _script;
        this.changeDetect = changeDetect;
        this.companyService = companyService;
        this._js = _js;
        this._fs = _fs;
        this.role = '';
        this.showTitle = false;
        this.loadForm = false;
        this.fileToUpload = null;
        this.formStep = 0;
        this.isChecked = false;
        this.isLinear = true;
        this.wantToSearch = true;
        this.url = '';
        this.saved = false;
        this.message = '';
        this.value = 'Clear me';
        this.errorMessage = '';
        this.country = {
            search: ''
        };
        this.formValid = false;
        this.allowableDoc = [
            'CV',
            'Resume',
            'Cover Letter',
            'Additional Document'
        ];
        this.code = `JO-${this._script.generateRandomAlphanumeric(3)}`;
        this.newJobOpening = {
            title: '',
            code: this.code,
            info: '',
            position: '',
            deadline: '',
            created_at: '',
            updated_at: '',
            status: '',
            public_url: this.public_url,
            private_url: this.private_url
        };
        this.search = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '50',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uploadApi}/upload`,
            upload: (file) => {
                let formData = new FormData();
                formData.append('file', file, file.name);
                return this._fs.upload(formData)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)((err) => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)((res) => {
                    this.newJobOpening.responsibility += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`;
                    this.newJobOpening.description += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`;
                }));
            },
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
            ]
        };
        this.totalFields = 36;
        this.labelPosition = null;
        this.assignableRole = this._us.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((roles) => {
            return roles.filter(r => r.name != 'Master');
        }));
        this.departments$ = this._departMentService.departments$;
        this.hasSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.result = [];
        this.summary = ``;
    }
    ngOnChanges(changes) {
        if (changes.loadForm) {
            if (changes.loadForm.currentValue) {
                $(() => {
                    $('#smartwizardCreateOpening').smartWizard({
                        selected: this.formStep,
                        // theme: 'default', // theme for the wizard, related css need to include for other than default theme
                        justified: true,
                        autoAdjustHeight: true,
                        backButtonSupport: true,
                        enableUrlHash: true,
                        transition: {
                            animation: 'slideSwing',
                            speed: '1000',
                            easing: '',
                            prefixCss: '',
                            fwdShowCss: '',
                            fwdHideCss: '',
                            bckShowCss: '',
                            bckHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on backward direction
                        },
                        toolbar: {
                            position: 'bottom',
                            showNextButton: true,
                            showPreviousButton: true,
                            extraHtml: `
              <button class="btn btn-danger" onclick="clickId('resetEmployeeFormBtnHidden')">Reset</button>
              <button class="btn btn-success" id="canisubmit64" onclick="clickId('createEmployeeSubmitBtnHidden')">
              save</button>` // Extra html to show on toolbar
                        },
                        anchor: {
                            enableNavigation: true,
                            enableNavigationAlways: false,
                            enableDoneState: true,
                            markPreviousStepsAsDone: true,
                            unDoneOnBackNavigation: false,
                            enableDoneStateNavigation: true // Enable/Disable the done state navigation
                        },
                        keyboard: {
                            keyNavigation: true,
                            keyLeft: [37],
                            keyRight: [39] // Right key code
                        },
                        lang: {
                            next: 'Next',
                            previous: 'Previous'
                        },
                        disabledSteps: [],
                        errorSteps: [],
                        warningSteps: [],
                        hiddenSteps: [],
                        getContent: (idx, stepDirection, stepPosition, selStep, callback) => { this.provideContent(idx, stepDirection, stepPosition, selStep, callback); } // Callback function for content loading
                    });
                });
            }
        }
    }
    ngAfterViewInit() {
        this.changeDetect.detectChanges();
    }
    ngOnInit() {
        this.url = this.router.url;
    }
    provideContent(idx, stepDirection, stepPosition, selStep, callback) {
        this.formStep = idx;
        const canisubmit64 = document.getElementById("canisubmit64");
        // You can use stepDirection to get ajax content on the forward movement and stepPosition to identify the step position
        if (stepDirection == 'forward' && stepPosition == 'middle') {
            let ajaxURL = "YOUR AJAX URL";
        }
        if (this.formStep == 3) {
            canisubmit64.classList.remove('d-none');
            this.summary = this.build;
        }
        else {
            this.summary = '';
            canisubmit64.classList.add('d-none');
        }
        this.changeDetect.detectChanges();
        callback();
    }
    reset() {
        this.newJobOpening = {
            title: '',
            code: `JO-${this._script.generateRandomAlphanumeric(3)}`,
            info: '',
            position: '',
            deadline: '',
            created_at: '',
            updated_at: '',
            status: '',
            public_url: '',
            private_url: ''
        };
        $('#smartwizardCreateOpening').smartWizard("reset");
        $('#smartwizardCreateOpening').smartWizard("goToStep", 0, true);
    }
    resetConfirmation() {
        $('#danger-modal').modal('show');
    }
    nameSearchChange(event) {
        const key = this.search.toLowerCase().trim();
        this._js.getJobPositionsApi$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(3000))
            .subscribe(res => {
            this.result = res.filter(j => j.title.toLowerCase().includes(key) || j.code.toLowerCase().includes(key));
        });
    }
    valueChange(value) {
    }
    submit() {
        this.newJobOpening.company = this.companyService.runningCompany.code;
        this.formValid = true;
        for (const [key, value] of Object.entries(this.newJobOpening)) {
            const v = value;
            if (!v || v.length == 0) {
                this.formValid = false;
            }
        }
        if (!this.formValid) {
            this._ds.openErrorNotification('Opps..', `Please reconfirm form. Some fields are required`);
        }
        else {
            this.newJobOpening.public_url = this.public_url;
            this.newJobOpening.private_url = this.private_url;
            this._js.addOpening(this.newJobOpening).subscribe(res => {
                this._ds.openSuccessNotification('Position Created', 'Saving job position info to the database..');
                this.reset();
            });
        }
    }
    get build() {
        const today = new Date(Date.now());
        this.newJobOpening.created_at = today.toDateString();
        this.newJobOpening.updated_at = today.toDateString();
        let html = '';
        for (const [key, value] of Object.entries(this.newJobOpening)) {
            const v = value;
            html += this._build(key, v);
        }
        return html;
    }
    get public_url() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appDomain}/admin/recruitment/job-opening/preview/${this.code}`;
    }
    get private_url() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appDomain}/admin/recruitment/job-opening/applications/${this.code}`;
    }
    _build(key, v) {
        let html = '';
        if (!v || v.length == 0) {
            html += `<p class="text-danger">${key.replace('_', ' ').toUpperCase()}: ${v}</p>`;
        }
        else {
            html += `<p><span class="text-primary">${key.replace('_', ' ').toUpperCase()}</span>: <span class="text-success">${v}</span></p>`;
        }
        return html.replace('undefined', '');
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_4__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_6__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__.FileService)); };
CreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-recruitment-opening-create"]], inputs: { role: "role", showTitle: "showTitle", loadForm: "loadForm" }, outputs: { hasSaved: "hasSaved" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 135, vars: 19, consts: [[1, "row", "mt-4"], ["class", "col-12 p-2 mb-2", 4, "ngIf"], [1, "col-md-12", "p-2", "mb-2", "min-height-200px"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["id", "smartwizardCreateOpening"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "href"], [1, "num"], [1, "tab-content", "min-height-300px"], ["id", "step-1", "role", "tabpanel", "aria-labelledby", "step-1", 1, "tab-pane", "mCustomScrollbar"], [1, "row"], [1, "col-md-12"], [1, "col-md-6"], [1, "form-group"], [1, "text-danger"], ["type", "text", "name", "title", "placeholder", "Search position", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["class", "example-margin blx", 3, "value", 4, "ngFor", "ngForOf"], ["id", "step-2", "role", "tabpanel", "aria-labelledby", "step-2", 1, "tab-pane", "mCustomScrollbar"], ["type", "text", "name", "title", "placeholder", "Position Title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], ["type", "date", "name", "deadline", "placeholder", "Position Code", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "status", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Open"], ["value", "Closed"], ["value", "Extended"], [3, "config", "placeholder", "ngModel", "ngModelChange"], ["id", "step-3", "role", "tabpanel", "aria-labelledby", "step-3", 1, "tab-pane", "mCustomScrollbar"], ["type", "text", "name", "code", "placeholder", "Position Code", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", "name", "public_url", "readonly", "", "required", "", 1, "form-control", 3, "value", "ngModelChange"], ["type", "text", "name", "private_url", "readonly", "", "required", "", 1, "form-control", 3, "value"], ["id", "step-4", "role", "tabpanel", "aria-labelledby", "step-4", 1, "tab-pane", "mCustomScrollbar"], [3, "innerHtml"], ["id", "createEmployeeSubmitBtnHidden", 1, "btn", "btn-success", "d-none", 3, "click"], ["id", "resetEmployeeFormBtnHidden", 1, "btn", "btn-success", "d-none", 3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "0%"], ["id", "danger-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "Are you sure?", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "font-18"], [1, "mb-20"], [1, "mb-30", "text-center"], [1, "font-18"], [1, "icon-copy", "bi", "bi-trash-fill"], [1, "icon-copy", "bi", "bi-question-lg"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "p-2", "mb-2"], ["role", "alert", 1, "alert", "alert-danger"], [1, "example-margin", "blx", 3, "value"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CreateComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CreateComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Job Position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Job Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Promotion Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Job Position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_39_listener($event) { return ctx.nameSearchChange($event); })("ngModelChange", function CreateComponent_Template_input_ngModelChange_39_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Search Result:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-radio-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_mat_radio_group_ngModelChange_44_listener($event) { return ctx.newJobOpening.position = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, CreateComponent_mat_radio_button_45_Template, 2, 2, "mat-radio-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_55_listener($event) { return ctx.valueChange($event); })("ngModelChange", function CreateComponent_Template_input_ngModelChange_55_listener($event) { return ctx.newJobOpening.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, " Deadline :");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_62_listener($event) { return ctx.newJobOpening.deadline = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, " Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_69_listener($event) { return ctx.newJobOpening.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Extended");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, " Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "angular-editor", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_82_listener($event) { return ctx.newJobOpening.info = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, " Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](92, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, " Public URL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_99_listener($event) { return ctx.valueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, " Private URL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](106, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](111, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_112_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "Force Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_114_listener() { return ctx.resetConfirmation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "Force Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](117, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](126, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](128, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, " You are about to clear all existing values in the form field, including including any uploaded file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_133_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, " Yes, Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-1", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-2", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-3", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-4", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobOpening.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobOpening.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobOpening.deadline);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobOpening.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.editorConfig)("placeholder", "Enter text here...")("ngModel", ctx.newJobOpening.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.newJobOpening.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.public_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.private_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", ctx.summary, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioGroup, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_19__.AngularEditorComponent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioButton], styles: [".example-margin[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.blx[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 1px solid;\n}\n\n.min-height-300px[_ngcontent-%COMP%] {\n  min-height: 300px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksNEJBQUE7QUFHSiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1tYXJnaW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYmx4e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxufVxyXG4ubWluLWhlaWdodC0zMDBweHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7997:
/*!**************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/delete/delete.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteComponent": () => (/* binding */ DeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DeleteComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(); };
DeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteComponent, selectors: [["app-admin-recruitment-job-opening-delete"]], decls: 34, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["type", "button", "data-toggle", "modal", "data-target", "#deleteConfirmationModal", 1, "btn", "btn-danger"], ["id", "deleteConfirmationModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "deleteConfirmationModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "deleteConfirmationModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-danger"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Click the delete button to delete the record");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ensure you are sure you wnat to delete the record! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Delete Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Are you sure you want to delete this item? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1461:
/*!**********************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/list/list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/create.component */ 2000);







function ListComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 10);
  }
}

function ListComponent_div_10_div_1_table_3_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Options \u25BE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListComponent_div_10_div_1_table_3_tr_18_Template_a_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const opening_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return ctx_r10.navigateMeToANewPage("admin/recruitment/job-opening/update/" + opening_r8.code);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListComponent_div_10_div_1_table_3_tr_18_Template_a_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const opening_r8 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return ctx_r12.navigateMeToDeletePage("admin/recruitment/job-opening/delete/" + opening_r8.code);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const opening_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, opening_r8.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opening_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opening_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opening_r8.deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opening_r8.status);
  }
}

function ListComponent_div_10_div_1_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ListComponent_div_10_div_1_table_3_tr_18_Template, 27, 8, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 1, ctx_r5.opening$));
  }
}

function ListComponent_div_10_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Opening Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ListComponent_div_10_div_1_table_3_Template, 20, 3, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ListComponent_div_10_div_1_div_4_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const openings_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", openings_r3.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", openings_r3.length < 1);
  }
}

const _c0 = function (a0) {
  return {
    "d-none": a0
  };
};

function ListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListComponent_div_10_div_1_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r1.creating));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.creating);
  }
}

function ListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-recruitment-opening-create", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loadForm", true);
  }
}

class ListComponent {
  constructor(_js, deviceService, _router) {
    this._js = _js;
    this.deviceService = deviceService;
    this._router = _router;
    this.creating = false;
    this.opening$ = this._js.jobOpenings$;
    this._data = [{
      "who": "ZU-27437",
      "title": "Full-Stack Developer Undergraduate/NYSC Full-Stack Internship Opening",
      "code": "JO-539",
      "info": "The Full-Stack Developer designs and maintains websites and systems to serve a company's needs. They develop these platforms to function independently, not needing to rely on third-party services to remain consistent. They manage the client and server-side of these services, ensuring they're functional and usable.<br>They are responsible for designing and developing websites and platforms. They work with design teams to ensure that user interactions on web pages are intuitive and engaging. They also provide back-end functionality that can run smoothly from any device or browser type commonly used today.<br><br><div><h2>Requirements and skills</h2><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Degree in Computer Science, Statistics or a relevant field<br><br><br></li></ul></div>",
      "position": "ZJP-5419",
      "deadline": "2023-09-30",
      "created_at": "Thu Aug 31 2023",
      "updated_at": "Thu Aug 31 2023",
      "status": "Open",
      "public_url": "http://localhost:5001/admin/recruitment/job-opening/preview/JO-539",
      "private_url": "http://localhost:5001/admin/recruitment/job-opening/applications/JO-539",
      "company": "ZC-81892816",
      "views": 0,
      "applications": 0,
      "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "browserVersion": "116.0.0.0",
      "os": "Windows",
      "osVersion": "windows-10",
      "browser": "Chrome",
      "deviceOrientation": "landscape",
      "id": 2
    }];
  }

  ngOnInit() {
    this._js.getJobOpeningsApi$.subscribe(res => {
      this._js.openings = res;
    });

    this.opening$.subscribe(res => {});
  }

  format(d) {
    // `d` is the original data object for the row
    return '<dl>' + '<dt>Title:</dt>' + '<dd>' + d.title + '</dd>' + '<dt>Code:</dt>' + '<dd>' + d.code + '</dd>' + '<dt>Deadline:</dt>' + '<dd>' + d.deadline + '</dd>' + '<dt>Created At:</dt>' + '<dd>' + d.created_at + '</dd>' + '<dt>Public Url:</dt>' + '<dd>' + d.public_url + '</dd>' + '<dt>Views:</dt>' + '<dd>' + d.views + '</dd>' + '</dl>';
  }

  translate(key) {
    return `${key.replace('_', ' ')}`;
  } // copied(url: string) {
  //   let opt = { ...this._ds.toastOptions, theClass: 'welcome-modal', timeOut: 3000 };
  //   this._ds.oSuccessNotification('Copied Job Opening URL', `${url} copied to clipboard.`, opt);
  // }


  goToLink(url) {
    window.open(url, "_blank");
  }

  newOpening() {}

  navigateMeToANewPage(url) {
    this.deviceService.showSpinner();
    setTimeout(() => {
      this._router.navigate([url]);

      this.deviceService.hideSpinner();
      this.deviceService.oInfoNotification('Navigate', 'You are currently viewing the new page');
    }, 1500);
  }

  navigateMeToDeletePage(url) {
    this.deviceService.showSpinner();
    setTimeout(() => {
      this._router.navigate([url]);

      this.deviceService.hideSpinner();
      this.deviceService.oInfoNotification('Navigate', 'You are currently viewing the new page');
    }, 1500);
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-recruitment-opening-list"]],
  decls: 13,
  vars: 7,
  consts: [[1, "row"], [1, "col-md-12"], [1, "clearfix", "mb-20"], [1, "pull-left"], [1, "text-blue", "h4"], [1, "pull-right"], ["href", "javascript:void()", "rel", "content-y", "data-toggle", "collapse", "role", "button", 1, "btn", "btn-primary", "btn-sm", "scroll-click", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "col-md-12", 3, "ngClass", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "fa", "fa-plus"], [1, "col-md-12", 3, "ngClass"], ["class", "card card-box m-6", 4, "ngIf"], [1, "card", "card-box", "m-6"], [1, "card-body"], [1, "table-responsive"], ["class", "data-table table nowrap table custom-height", 4, "ngIf"], ["class", "text-center p-2", 4, "ngIf"], [1, "data-table", "table", "nowrap", "table", "custom-height"], [1, "table-plus"], [1, "datatable-nosort"], [4, "ngFor", "ngForOf"], ["title", "Copy Job Application URl", 1, "p-2", "pointer"], ["title", "View Job Opening to update status or view more information about job", 1, "p-2", "pointer"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], [3, "click"], [1, "text-center", "p-2"], [1, "text-center", "mb-2"], [3, "loadForm"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListComponent_Template_a_click_7_listener() {
        return ctx.creating = !ctx.creating;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ListComponent_i_8_Template, 1, 0, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ListComponent_div_10_Template, 2, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ListComponent_div_12_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !ctx.creating ? "List Of Job Openings" : "Create New Job Opening ", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.creating);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !ctx.creating ? "Create" : "Return To List", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 5, ctx.opening$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.creating);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["td[_ngcontent-%COMP%] {\n  max-width: 100px;\n  word-break: break-all;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  background-color: #021645 !important;\n}\n\n.bd-none[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #0f5d91;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #0f69a5;\n}\n\n.pointer[_ngcontent-%COMP%]:hover {\n  color: #0f69a5;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: grey;\n  color: white;\n  padding: 10px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.custom-height[_ngcontent-%COMP%] {\n  height: 200px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0UsdUJBQUE7QUFHRjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFERTtFQUNFLFNBQUE7QUFJSjs7QUFERTtFQUNFLG1CQUFBO0FBSUo7O0FBREU7RUFDRSxtQkFBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtBQUtKOztBQUhFO0VBQ0Usc0JBQUE7QUFNSjs7QUFIRTtFQUNFLGdCQUFBO0FBTUo7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFIRTtFQUNFLGFBQUE7QUFNSjs7QUFIRTtFQUNFLFlBQUE7QUFNSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFERTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtBQUlKOztBQURFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBREU7RUFDRSxzQkFBQTtBQUlKOztBQURFO0VBQ0UsY0FBQTtBQUlKOztBQUFFO0VBQ0UsYUFBQTtFQUFlLGdDQUFBO0FBSW5CIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLm1hdC1lbGV2YXRpb24tejh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxNjQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJkLW5vbmV7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1LCA5MywgMTQ1KTtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzBmNjlhNTtcclxuICB9XHJcbiAgLnBvaW50ZXI6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzBmNjlhNTtcclxuICB9XHJcbiAgLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgLy8gZHJvcCBkb3duIHN0eWxpbmdcclxuXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLy8gdGFibGUgaGVpZ2h0ICBzdHlsaW5nXHJcbiAgLmN1c3RvbS1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAyMDBweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXHJcbiAgfVxyXG4gIFxyXG4iXX0= */"]
});

/***/ }),

/***/ 6706:
/*!********************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/opening.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeningComponent": () => (/* binding */ OpeningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ 1461);



const _c0 = function () { return ["/admin/file-manager/home"]; };
class OpeningComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpeningComponent.ɵfac = function OpeningComponent_Factory(t) { return new (t || OpeningComponent)(); };
OpeningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OpeningComponent, selectors: [["app-opening"]], decls: 56, vars: 2, consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "font-24", "weight-500", "mb-10"], [1, "col-md-4"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-150px", "pd-20", "mb-20", 2, "background-color", "rgb(40 65 146)"], [1, "d-flex", "justify-content-between", "pb-20", "text-white"], [1, "icon", "h1", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-globe"], [1, "font-14", "text-right"], [1, "text-white"], [1, "font-12", "text-white"], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "font-24", "weight-500"], [1, "max-width-150", 2, "position", "relative"], [1, "btn", "btn-primary", "btn-sm", "text-white"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(2 22 69)"], ["aria-hidden", "true", 1, "fa", "fa-map-pin"], [1, "font-12"], [1, "font-14"], [1, "btn", "btn-outline-primary", "btn-sm", "text-white"], [1, "col-md-8"], [1, "card", "card-box", "m-2"], [1, "card-body"]], template: function OpeningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Job Opening");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Job Opening ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Your Job Vacancies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Total Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Closed Vacancies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Open Vacancies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Promote A Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "app-recruitment-opening-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8421:
/*!********************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/preview/apply/apply.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyComponent": () => (/* binding */ ApplyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);















function ApplyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Create A Job Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ApplyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
function ApplyComponent_div_4_div_70_div_1_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", opn_r8, " ");
} }
function ApplyComponent_div_4_div_70_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ApplyComponent_div_4_div_70_div_1_label_3_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const opn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r13.deleteFileInput("requiredUploads", ctx_r13.getkey(opn_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_0_0 = ctx_r11.doesExist("requiredUploads", ctx_r11.getkey(opn_r8))) == null ? null : tmp_0_0.name, " ");
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
function ApplyComponent_div_4_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ApplyComponent_div_4_div_70_div_1_label_2_Template, 6, 1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ApplyComponent_div_4_div_70_div_1_label_3_Template, 4, 1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ApplyComponent_div_4_div_70_div_1_Template_input_change_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const opn_r8 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r17.handleFileInput($event, "requiredUploads", ctx_r17.getkey(opn_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opn_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r6.doesExist("requiredUploads", ctx_r6.getkey(opn_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.doesExist("requiredUploads", ctx_r6.getkey(opn_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r6.doesExist("requiredUploads", ctx_r6.getkey(opn_r8))));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", ctx_r6.getkey(opn_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "photoOfApplication_", ctx_r6.getkey(opn_r8), "");
} }
function ApplyComponent_div_4_div_70_div_2_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Optional");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opn_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", opn_r19, " ");
} }
function ApplyComponent_div_4_div_70_div_2_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ApplyComponent_div_4_div_70_div_2_label_3_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const opn_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r24.deleteFileInput("optionalUploads", ctx_r24.getkey(opn_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opn_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_0_0 = ctx_r22.doesExist("optionalUploads", ctx_r22.getkey(opn_r19))) == null ? null : tmp_0_0.name, " ");
} }
function ApplyComponent_div_4_div_70_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ApplyComponent_div_4_div_70_div_2_label_2_Template, 6, 1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ApplyComponent_div_4_div_70_div_2_label_3_Template, 4, 1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ApplyComponent_div_4_div_70_div_2_Template_input_change_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const opn_r19 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r28.handleFileInput($event, "optionalUploads", ctx_r28.getkey(opn_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opn_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r7.doesExist("optionalUploads", ctx_r7.getkey(opn_r19)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.doesExist("optionalUploads", ctx_r7.getkey(opn_r19)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r7.doesExist("optionalUploads", ctx_r7.getkey(opn_r19))));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", ctx_r7.getkey(opn_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "photoOptionalOfApplication_", ctx_r7.getkey(opn_r19), "");
} }
function ApplyComponent_div_4_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ApplyComponent_div_4_div_70_div_1_Template, 8, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ApplyComponent_div_4_div_70_div_2_Template, 8, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Cover Letter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "angular-editor", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_div_70_Template_angular_editor_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r30.newJobApplication.coverLetterTypeContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const open_r5 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", open_r5.required_documents);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", open_r5.optional_documents);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx_r4.editorConfig)("placeholder", "Enter text here...")("ngModel", ctx_r4.newJobApplication.coverLetterTypeContent);
} }
function ApplyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Personal Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Additional Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Firstname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.newJobApplication.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Lastname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r34.newJobApplication.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.newJobApplication.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_Template_input_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r36.newJobApplication.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r37.newJobApplication.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ApplyComponent_div_4_div_70_Template, 8, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, " Tell us how you found this job:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ApplyComponent_div_4_Template_select_ngModelChange_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r38.newJobApplication.referredBy = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Google Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Zinder Ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "I recieved the job link from a friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](100, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ApplyComponent_div_4_Template_button_click_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r39.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "Force Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ApplyComponent_div_4_Template_button_click_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.resetConfirmation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "Force Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](106, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "", ctx_r2.url, "#step-1", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "", ctx_r2.url, "#step-2", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "", ctx_r2.url, "#step-3", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "", ctx_r2.url, "#step-4", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newJobApplication.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newJobApplication.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newJobApplication.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newJobApplication.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newJobApplication.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newJobApplication.referredBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx_r2.summary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
function ApplyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Your Tracking URL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.sucmes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.public_url);
} }
class ApplyComponent {
    constructor(_ds, _us, router, _departMentService, _script, changeDetect, _js, _fs, location) {
        this._ds = _ds;
        this._us = _us;
        this.router = router;
        this._departMentService = _departMentService;
        this._script = _script;
        this.changeDetect = changeDetect;
        this._js = _js;
        this._fs = _fs;
        this.location = location;
        this.role = '';
        this.showTitle = false;
        this.loadForm = false;
        this.opening = null;
        this.position = null;
        this.routeCode = null;
        this.formStep = 0;
        this.url = '';
        this.saved = false;
        this.message = '';
        this.errorMessage = '';
        this.sucmes = '';
        this.formValid = false;
        this.code = `JA-${this._script.generateRandomAlphanumeric(3)}`;
        this.applicationcode = ``;
        this.newJobApplication = {
            firstName: '',
            lastName: '',
            country: '',
            phone: ' ',
            email: '',
            requiredUploads: {},
            optionalUploads: {},
            coverLetterTypeContent: '',
            referredBy: '',
            code: this.code,
            created_at: '',
            updated_at: '',
            status: 'unsubmitted',
            public_url: this.public_url
        };
        this.search = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '50',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uploadApi}/upload`,
            upload: (file) => {
                let formData = new FormData();
                formData.append('file', file, file.name);
                return this._fs.upload(formData)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(err);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((res) => {
                    // this.newJobApplication.responsibility += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`
                    // this.newJobApplication.description += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`
                    //
                    //
                }));
            },
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
            ]
        };
        this.hasSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.hasSavedForm = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.summary = ``;
    }
    ;
    unloadHandler(event) {
        this.validateeReload(event);
        return false;
    }
    ngOnDestroy() {
        this.reset();
    }
    ngOnChanges(changes) {
        if (changes.loadForm) {
            if (changes.loadForm.currentValue) {
                this.initalizeForm();
            }
        }
        // this.changeDetect.detectChanges();
    }
    ngAfterViewInit() {
        // this.changeDetect.detectChanges();
    }
    ngOnInit() {
        this.url = this.router.url;
        this.location.go(`/jobs/${this.routeCode}`);
    }
    initalizeForm() {
        $(() => {
            $('#smartwizardCreateOpening').smartWizard({
                selected: this.formStep,
                // theme: 'default', // theme for the wizard, related css need to include for other than default theme
                justified: true,
                autoAdjustHeight: true,
                backButtonSupport: true,
                enableUrlHash: true,
                transition: {
                    animation: 'slideSwing',
                    speed: '1500',
                    easing: '',
                    prefixCss: '',
                    fwdShowCss: '',
                    fwdHideCss: '',
                    bckShowCss: '',
                    bckHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on backward direction
                },
                toolbar: {
                    position: 'bottom',
                    showNextButton: true,
                    showPreviousButton: true,
                    extraHtml: `
          <button class="btn btn-danger" onclick="clickId('resetEmployeeFormBtnHidden')">Reset</button>
          <button class="btn btn-success" id="canisubmit64" onclick="clickId('createEmployeeSubmitBtnHidden')">
          Save</button>` // Extra html to show on toolbar
                },
                anchor: {
                    enableNavigation: true,
                    enableNavigationAlways: false,
                    enableDoneState: true,
                    markPreviousStepsAsDone: true,
                    unDoneOnBackNavigation: false,
                    enableDoneStateNavigation: true // Enable/Disable the done state navigation
                },
                keyboard: {
                    keyNavigation: true,
                    keyLeft: [37],
                    keyRight: [39] // Right key code
                },
                lang: {
                    next: 'Next',
                    previous: 'Previous'
                },
                disabledSteps: [],
                errorSteps: [],
                warningSteps: [],
                hiddenSteps: [],
                getContent: (idx, stepDirection, stepPosition, selStep, callback) => { this.provideContent(idx, stepDirection, stepPosition, selStep, callback); } // Callback function for content loading
            });
        });
    }
    provideContent(idx, stepDirection, stepPosition, selStep, callback) {
        this.formStep = idx;
        const canisubmit64 = document.getElementById("canisubmit64");
        // You can use stepDirection to get ajax content on the forward movement and stepPosition to identify the step position
        if (stepDirection == 'forward' && stepPosition == 'middle') {
            let ajaxURL = "YOUR AJAX URL";
        }
        if (this.formStep == 3 && this.newJobApplication.status == 'unsubmitted') {
            canisubmit64.classList.remove('d-none');
            this.summary = this.build;
        }
        else {
            this.summary = '';
            canisubmit64.classList.add('d-none');
        }
        this.changeDetect.detectChanges();
        callback();
    }
    validateeReload(event) {
        this.location.go(this.url);
    }
    handleFileInput(event, status, index) {
        const files = event.target.files;
        if (files.length > 0) {
            const file = files[0];
            const getsize = file.size.toString();
            let size = ``;
            let unit = 'kb';
            if (getsize.length >= 7) {
                unit = 'mb';
                size = `${(Math.round(+getsize / 1024) / 1000).toFixed(2)}MB`;
                this._ds.oErrorNotification('File exceeds limit', `Maximum upload file for a file is 1MB. Uploaded document size is ${size}`);
                return;
            }
            size = `${Math.round(+getsize / 1024).toFixed(2)}kb`;
            this._ds.oSuccessNotification('File was uploaded', `${file.name} was accepted`);
            this.newJobApplication[status][index] = files[0];
        }
    }
    deleteFileInput(status, index) {
        let record = this.doesExist(status, index);
        this._ds.oSuccessNotification(`${status} File Removed`, `${record.name} successfully removed. Kindly note to upload a new one if required`);
        this.newJobApplication[status][index] = null;
    }
    doesExist(status, index) {
        return this.newJobApplication[status][index];
    }
    reset() {
        this.code = `JA-${this._script.generateRandomAlphanumeric(3)}`;
        this.newJobApplication = {
            firstName: '',
            lastName: '',
            country: '',
            phone: ' ',
            email: '',
            requiredUploads: {},
            optionalUploads: {},
            coverLetterTypeContent: '',
            referredBy: '',
            code: this.code,
            created_at: '',
            updated_at: '',
            status: 'unsubmitted',
            public_url: this.public_url
        };
        $('#smartwizardCreateOpening').smartWizard("reset");
        $('#smartwizardCreateOpening').smartWizard("goToStep", 0, true);
    }
    resetConfirmation() {
        $('#danger-modal').modal('show');
    }
    valueChange(value) {
    }
    submit() {
        this.formValid = true;
        let form = new FormData();
        for (const [key, value] of Object.entries(this.newJobApplication)) {
            const v = value;
            if (!v || v.length == 0) {
                this.formValid = false;
            }
            else {
                if (key !== 'requiredUploads' && key !== 'optionalUploads') {
                    form.append(key, v);
                }
                else {
                    for (const [_key, _value] of Object.entries(v)) {
                        form.append(_key, _value, _value.name);
                    }
                }
            }
        }
        if (!this.formValid) {
            this._ds.openErrorNotification('Opps..', `Please reconfirm form. Some fields are required`);
        }
        else {
            this.newJobApplication.company = this.position.company;
            this.newJobApplication.public_url = this.public_url;
            this.newJobApplication.private_url = this.private_url;
            this.newJobApplication.status = 'unsubmitted';
            this.newJobApplication.opening_code = this.routeCode;
            this.sucmes = 'Your application has been submitted.';
            this._ds.openSuccessNotification('Application Submitted', this.sucmes);
            const canisubmit64 = document.getElementById("canisubmit64");
            canisubmit64.classList.add('d-none');
            this.loadForm = false;
            this.formStep = this.formStep > 0 ? this.formStep - 1 : this.formStep;
            this.changeDetect.detectChanges();
            this.hasSaved.emit(this.newJobApplication);
            this.hasSavedForm.emit(form);
        }
    }
    get build() {
        const today = new Date(Date.now());
        this.newJobApplication.created_at = today.toDateString();
        this.newJobApplication.updated_at = today.toDateString();
        this.applicationcode = `JA-${this._script.generateRandomAlphanumeric(3)}`;
        let html = '';
        for (const [key, value] of Object.entries(this.newJobApplication)) {
            const v = value;
            html += this._build(key, v);
        }
        return html;
    }
    get public_url() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appDomain}/admin/recruitment/job-opening/applications/preview/${this.code}`;
    }
    get private_url() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appDomain}/admin/recruitment/job-opening/applications/${this.code}`;
    }
    _build(key, v) {
        let html = '';
        if (!v || v.length == 0) {
            html += `<p class="text-danger">${key.replace('_', ' ').toUpperCase()}: ${v}</p>`;
        }
        else {
            html += `<p><span class="text-primary">${key.replace('_', ' ').toUpperCase()}</span>: <span class="text-success">${v}</span></p>`;
        }
        return html.replace('undefined', '');
    }
    getkey(key) {
        return key.replace(' ', '_').toLowerCase();
    }
}
ApplyComponent.ɵfac = function ApplyComponent_Factory(t) { return new (t || ApplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_4__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_5__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_6__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location)); };
ApplyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ApplyComponent, selectors: [["app-opening-apply"]], hostBindings: function ApplyComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("beforeunload", function ApplyComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } }, inputs: { role: "role", showTitle: "showTitle", loadForm: "loadForm", opening: "opening", position: "position", routeCode: "routeCode" }, outputs: { hasSaved: "hasSaved", hasSavedForm: "hasSavedForm" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 4, consts: [[1, "row", "mt-4"], ["class", "col-12 p-2 mb-2", 4, "ngIf"], [1, "col-md-12", "p-2", "mb-2", "min-height-200px"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["id", "smartwizardCreateOpening", 4, "ngIf"], [4, "ngIf"], ["id", "danger-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "Are you sure?", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "font-18"], [1, "mb-20"], [1, "mb-30", "text-center"], [1, "font-18"], [1, "icon-copy", "bi", "bi-trash-fill"], [1, "icon-copy", "bi", "bi-question-lg"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "p-2", "mb-2"], ["role", "alert", 1, "alert", "alert-danger"], ["id", "smartwizardCreateOpening"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "href"], [1, "num"], [1, "tab-content", "min-height-300px"], ["id", "step-1", "role", "tabpanel", "aria-labelledby", "step-1", 1, "tab-pane", "mCustomScrollbar"], [1, "row"], [1, "col-md-12"], [1, "col-md-6"], [1, "form-group"], [1, "text-danger"], ["type", "text", "name", "firstName", "placeholder", "Firstname", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "placeholder", "Lastname", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "country", "placeholder", "Country", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phone", "placeholder", "Phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "step-2", "role", "tabpanel", "aria-labelledby", "step-2", 1, "tab-pane", "mCustomScrollbar"], ["class", "row", 4, "ngIf"], ["id", "step-3", "role", "tabpanel", "aria-labelledby", "step-3", 1, "tab-pane", "mCustomScrollbar"], ["name", "referredBy", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Zinder Ads"], ["value", "Facebook"], ["value", "Twitter"], ["value", "Instagram"], ["value", "I recieved the job link from a friend"], ["value", "Others"], ["id", "step-4", "role", "tabpanel", "aria-labelledby", "step-4", 1, "tab-pane", "mCustomScrollbar"], [1, "p-10"], [3, "innerHtml"], ["id", "createEmployeeSubmitBtnHidden", 1, "btn", "btn-success", "d-none", 3, "click"], ["id", "resetEmployeeFormBtnHidden", 1, "btn", "btn-success", "d-none", 3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "0%"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [3, "config", "placeholder", "ngModel", "ngModelChange"], ["class", "pointer", 3, "click", 4, "ngIf"], [1, "custom-file", 3, "ngClass"], ["type", "file", 1, "custom-file-input", 3, "name", "id", "change"], [1, "custom-file-label"], [1, "text-secondary"], [1, "pointer", 3, "click"], [1, "mb-10"], ["type", "text", "readonly", "", "required", "", 1, "form-control", 3, "value"]], template: function ApplyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ApplyComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ApplyComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ApplyComponent_div_4_Template, 107, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ApplyComponent_div_5_Template, 10, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " You are about to clear all existing values in the form field, including including any uploaded file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ApplyComponent_Template_button_click_21_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Yes, Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.newJobApplication.status == "unsubmitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.newJobApplication.status == "submitted");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__.AngularEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBseS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6291:
/*!****************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/preview/preview.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewComponent": () => (/* binding */ PreviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply/apply.component */ 8421);











function PreviewComponent_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 35);
  }

  if (rf & 2) {
    const pos_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", pos_r7.info, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function PreviewComponent_div_24_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 35);
  }

  if (rf & 2) {
    const pos_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", pos_r8.description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function PreviewComponent_div_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 35);
  }

  if (rf & 2) {
    const pos_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", pos_r9.responsibility, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function PreviewComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PreviewComponent_div_24_div_4_Template, 1, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PreviewComponent_div_24_div_6_Template, 1, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PreviewComponent_div_24_div_8_Template, 1, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const open_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", open_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", open_r3.info, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, ctx_r0.position));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, ctx_r0.position));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 9, ctx_r0.position));
  }
}

function PreviewComponent_div_30_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Job Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pos_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](pos_r13.title);
  }
}

function PreviewComponent_div_30_a_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PreviewComponent_div_30_a_15_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r16.loadForm = !ctx_r16.loadForm;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Apply Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function PreviewComponent_div_30_a_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "active": a0
  };
};

function PreviewComponent_div_30_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PreviewComponent_div_30_a_15_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r18.loadForm = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PreviewComponent_div_30_a_15_span_3_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PreviewComponent_div_30_a_15_span_4_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const open_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, !ctx_r12.inpast(open_r10.deadline) && !ctx_r12.application));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.application ? ctx_r12.application == null ? null : ctx_r12.application.public_url : "Interested?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r12.application);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.application);
  }
}

const _c1 = function (a0) {
  return {
    "bg-danger": a0
  };
};

function PreviewComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PreviewComponent_div_30_a_1_Template, 4, 1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Views ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Deadline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PreviewComponent_div_30_a_15_Template, 5, 6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const open_r10 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, ctx_r1.position));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](open_r10.views);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c1, ctx_r1.inpast(open_r10.deadline)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](open_r10.deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, ctx_r1.inpast(open_r10.deadline)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](open_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.inpast(open_r10.deadline));
  }
}

function PreviewComponent_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const opn_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", opn_r23.public_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Closing ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, opn_r23.deadline), ": ", opn_r23.title, "");
  }
}

function PreviewComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Other Job Openings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PreviewComponent_div_32_div_3_Template, 4, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const opens_r21 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", opens_r21);
  }
}

const _c2 = function () {
  return ["/admin/file-manager/home"];
};

class PreviewComponent {
  constructor(deviceService, route, _fs, _js, title, meta) {
    this.deviceService = deviceService;
    this.route = route;
    this._fs = _fs;
    this._js = _js;
    this.title = title;
    this.meta = meta;
    this.letWatcher = null;
    this.application = null;
    this.loadForm = false;
    this.opening = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(paramMap => {
      this.code = paramMap.get('code');

      if (this.code) {
        return this._js.previewJobOpening(this.code);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
    this.position = this.opening.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(opening => {
      if (opening) {
        return this._js.getJobPosition(opening.position).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(r => console.log(r)));
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
    this.availableOpenings = this._js.getAvailableJobOpening().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(res => {
      const ex = res.findIndex(r => r.code == this.code);

      if (ex > -1) {
        res.splice(ex, 1);
      }

      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
  }

  ngOnDestroy() {
    if (this.letWatcher) {
      clearInterval(this.letWatcher);
      this.letWatcher = null;
      this.uncheck();
    }
  }

  inpast(date) {
    let givenDate1 = new Date(date);
    let diff = new Date().getTime() - givenDate1.getTime();
    return diff > 0;
  }

  hasSavedApplicatin(e) {
    this.application = e;
  }

  hasSavedApplicatinForm(e) {
    let requests = [];

    for (const [key, value] of Object.entries(this.application.requiredUploads)) {
      const v = value;

      if (!v) {
        let errF = `${key.replace('_', ' ').toUpperCase()} required, `;
        return errF;
      } else {
        const formData = new FormData();
        formData.append(key, v, v.name);
        requests.push(this._fs._upload(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
          this.application.requiredUploads[key] = res;
        })));
      }
    }

    for (const [key, value] of Object.entries(this.application.optionalUploads)) {
      const v = value;

      if (v) {
        const formData = new FormData();
        formData.append(key, v, v.name);
        requests.push(this._fs._upload(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
          this.application.optionalUploads[key] = res.file;
        })));
      }
    }

    this.application.status = 'submitted';
    this.deviceService.showSpinner();

    const _upload = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(requests.map(source$ => source$)); // create application post


    this._js.applyToOpening(this.application).pipe( // switch to new observable to upload documents
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(_res => {
      return _upload.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(res => {
        this.application.uploaded_at = new Date(Date.now());
        this.application.uploads = res;
        this.application.id = _res.id; // update

        return this._js.updateJobApplciationApi(this.application).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(e => {
          console.log(e);
          const applyNowModalBtn = document.getElementById('applyNowModalBtn');
          applyNowModalBtn === null || applyNowModalBtn === void 0 ? void 0 : applyNowModalBtn.click();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(e);
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(e => {
        console.log(e);
        const applyNowModalBtn = document.getElementById('applyNowModalBtn');
        applyNowModalBtn === null || applyNowModalBtn === void 0 ? void 0 : applyNowModalBtn.click();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(e);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(e => {
      console.log(e);
      const applyNowModalBtn = document.getElementById('applyNowModalBtn');
      applyNowModalBtn === null || applyNowModalBtn === void 0 ? void 0 : applyNowModalBtn.click();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(e);
    })).subscribe(response => {
      setTimeout(() => {
        this.deviceService.hideSpinner();
      }, 900);
    });
  }

  ngOnInit() {
    this.opening.subscribe(o => {
      this.title.setTitle(`Apply for ${o.title} via Zinder Platform`);
      this.meta.updateTag({
        name: 'author',
        content: 'Zinder Platform'
      });
      let today = new Date(o.deadline).toLocaleString();
      this.meta.updateTag({
        name: 'keyword',
        content: `${o.title} ${today} ${o.info} ${o.deadline} ${o.position}`
      });
      this.meta.updateTag({
        name: 'description',
        content: `Apply for ${o.title} via Zinder Platform`
      });
    });
    this.position.subscribe(p => {
      this.title.setTitle(`${p.title} Job Opening, Estimated Salary Of ${p.base_earning}. Apply now via Zinder Platform`);
      this.meta.updateTag({
        name: 'description',
        content: `Apply for the job position ${p.title} with an estimated ${p.base_earning} via Zinder Platform`
      });
    });
    this.availableOpenings.subscribe();
    this.check();
    this.letWatcher = setInterval(this.check, 10000);
    this.route.paramMap.subscribe(paramMap => {
      this.code = paramMap.get('code');
    });
  }

  check() {
    const left_side_bar = document.getElementById('left-side-bar');
    const sidebar = document.getElementById('bdy');
    const mobilemenuoverlay = document.getElementById('mobilemenuoverlay');
    const header = document.getElementById('hdrh');
    const iclist = document.getElementById('iclist');
    const hsform = document.getElementById('hsform');

    if (left_side_bar) {
      left_side_bar.style.left = '-281px';
      left_side_bar.classList.add('open');
    }

    if (header) {
      header.classList.add('d-none');
    }

    if (iclist) {
      iclist.classList.add('d-none');
    }

    if (hsform) {
      hsform.classList.add('d-none');
    }

    if (sidebar) {
      sidebar.classList.add('sidebar-shrink');
    }

    if (mobilemenuoverlay) {
      mobilemenuoverlay.classList.add('show');
    }
  }

  uncheck() {
    const left_side_bar = document.getElementById('left-side-bar');
    const sidebar = document.getElementById('bdy');
    const mobilemenuoverlay = document.getElementById('mobilemenuoverlay');
    const header = document.getElementById('hdrh');
    const iclist = document.getElementById('iclist');
    const hsform = document.getElementById('hsform');

    if (left_side_bar) {
      left_side_bar.style.left = '-0px';
      left_side_bar.classList.remove('open');
    }

    if (header) {
      header.classList.remove('d-none');
      iclist.classList.remove('d-none');
      hsform.classList.remove('d-none');
    }

    if (sidebar) {
      sidebar.classList.remove('sidebar-shrink');
    }

    if (mobilemenuoverlay) {
      mobilemenuoverlay.classList.remove('show');
    }
  }

}

PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
  return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_2__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Meta));
};

PreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PreviewComponent,
  selectors: [["app-preview"]],
  decls: 63,
  vars: 20,
  consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["href", "javascript:void()"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-12", "pd-20", "pt-10"], [1, "blog-wrap"], [1, "col-md-8", "col-sm-12"], [1, "blog-detail", "card-box", "overflow-hidden", "mb-30"], [1, "blog-img"], ["src", "assets/img/zinder_1.svg", "alt", "", 1, "card-img-top"], ["class", "blog-caption", 4, "ngIf"], [1, "col-md-4", "col-sm-12"], [1, "card-box", "mb-30"], [1, "pd-20", "h3", "mb-0"], ["class", "list-group", 4, "ngIf"], ["class", "card-box overflow-hidden mb-30", 4, "ngIf"], [1, "card-box"], [1, "pd-20", "h5", "mb-0"], [1, "latest-post"], ["id", "bd-example-modal-lg", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-lg"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "myLargeModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [3, "loadForm", "position", "opening", "routeCode", "hasSaved", "hasSavedForm"], [1, "blog-caption"], [1, "mb-10"], [1, "text-primary", 3, "innerHTML"], ["class", "text-primary", 3, "innerHTML", 4, "ngIf"], [1, "list-group"], ["href", "javascript:void()", "class", "list-group-item d-flex align-items-center justify-content-between active", 4, "ngIf"], ["href", "javascript:void()", 1, "list-group-item", "d-flex", "align-items-center", "justify-content-between"], [1, "badge", "badge-primary", "badge-pill"], [1, "badge", "badge-primary", "badge-pill", 3, "ngClass"], ["href", "javascript:void()", "class", "list-group-item d-flex align-items-center justify-content-between ", "id", "applyNowModalBtn", "data-toggle", "modal", "data-target", "#bd-example-modal-lg", 3, "ngClass", "click", 4, "ngIf"], ["href", "javascript:void()", 1, "list-group-item", "d-flex", "align-items-center", "justify-content-between", "active"], ["href", "javascript:void()", "id", "applyNowModalBtn", "data-toggle", "modal", "data-target", "#bd-example-modal-lg", 1, "list-group-item", "d-flex", "align-items-center", "justify-content-between", 3, "ngClass", "click"], [1, "sls"], ["class", "badge badge-primary badge-pill", 3, "click", 4, "ngIf"], ["class", "badge badge-primary badge-pill", 4, "ngIf"], [1, "badge", "badge-primary", "badge-pill", 3, "click"], [1, "card-box", "overflow-hidden", "mb-30"], ["class", "list-group", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "list-group-item", "d-flex", "align-items-center", "justify-content-between", 3, "href"]],
  template: function PreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Job Opening");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nav", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ol", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Recruitment");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Job Opening");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PreviewComponent_div_24_Template, 10, 11, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h3", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Opening Records");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PreviewComponent_div_30_Template, 16, 13, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PreviewComponent_div_32_Template, 4, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "FAQ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Learn About Zinder H-R Enterprise Solution");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Zinder Platform");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Report this post");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Zinder Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "h4", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " Apply ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " \u00D7 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "app-opening-apply", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("hasSaved", function PreviewComponent_Template_app_opening_apply_hasSaved_60_listener($event) {
        return ctx.hasSavedApplicatin($event);
      })("hasSavedForm", function PreviewComponent_Template_app_opening_apply_hasSavedForm_60_listener($event) {
        return ctx.hasSavedApplicatinForm($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Job ID #", ctx.code, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 9, ctx.opening));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 11, ctx.opening));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 13, ctx.availableOpenings));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadForm", ctx.loadForm)("position", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 15, ctx.position))("opening", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](62, 17, ctx.opening))("routeCode", ctx.code);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _apply_apply_component__WEBPACK_IMPORTED_MODULE_3__.ApplyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".card-img-top[_ngcontent-%COMP%] {\n  max-height: 300px !important;\n}\n\n.sls[_ngcontent-%COMP%] {\n  width: 60%;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQUssVUFBQTtFQUFhLHFCQUFBO0FBR2xCIiwiZmlsZSI6InByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctdG9we1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsc3t3aWR0aDogNjAlOyAgd29yZC13cmFwOiBicmVhay13b3JkO30iXX0= */"]
});

/***/ }),

/***/ 6979:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/preview/search/search.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9634:
/*!**************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/opening/update/update.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateComponent": () => (/* binding */ UpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class UpdateComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.updForm = this._fb.group({
            created: '',
            title: '',
            code: '',
            deadline: '',
        });
    }
    ngOnInit() {
    }
    onFormSubmit() {
        // if (this.updForm.valid) {
        //     this._updService.addEmployee(this.updForm.value)
        //       .subscribe({
        //         next: (val: any) => {
        //           alert('Employee added successfully!');
        //           this._dialogRef.close();
        //         },
        //         error: (err: any) => {
        //           console.error(err);
        //         },
        //       });
        //   }
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
UpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-admin-recruitment-job-opening-update"]], decls: 35, vars: 0, consts: [[1, "container"], [1, "card"], [1, "card-header"], [1, "text-center"], [1, "container", "mt-5"], [1, "mb-3"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "placeholder", "Enter title", 1, "form-control"], ["for", "code", 1, "form-label"], ["type", "text", "id", "code", "placeholder", "Enter code", "readonly", "", 1, "form-control"], ["for", "deadline", 1, "form-label"], ["type", "date", "id", "deadline", 1, "form-control"], ["for", "status", 1, "form-label"], ["id", "status", 1, "form-select"], ["value", "open"], ["value", "closed"], ["value", "extended"], ["for", "description", 1, "form-label"], ["id", "description", "rows", "4", "placeholder", "Enter description", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UPDATE JOB OPENING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Extended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQURGIiwiZmlsZSI6InVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxpbmcgdGhlIHVwZGF0ZSBmb3JtXHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6439:
/*!***************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/position/create/create.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);


















function CreateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Create A Job Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CreateComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}

function CreateComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const department_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", department_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](department_r8.name);
  }
}

function CreateComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Working Hours :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_112_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r9.newJobPosition.working_hours = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r3.newJobPosition.working_hours);
  }
}

function CreateComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Salary :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_113_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r11.newJobPosition.salary = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r4.newJobPosition.salary);
  }
}

function CreateComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Commission :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_114_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r13.newJobPosition.commission = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r5.newJobPosition.commission);
  }
}

function CreateComponent_option_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const doc_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", doc_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](doc_r15);
  }
}

function CreateComponent_option_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const doc_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", doc_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](doc_r16);
  }
}

class CreateComponent {
  constructor(_ds, _us, companyService, router, _departMentService, _script, changeDetect, _js, _fs) {
    this._ds = _ds;
    this._us = _us;
    this.companyService = companyService;
    this.router = router;
    this._departMentService = _departMentService;
    this._script = _script;
    this.changeDetect = changeDetect;
    this._js = _js;
    this._fs = _fs;
    this.role = '';
    this.id = 'smartwizardCreatePosition';
    this.showSidePan = true;
    this.showTitle = false;
    this.loadForm = false;
    this.fileToUpload = null;
    this.formStep = 0;
    this.isChecked = false;
    this.isLinear = true;
    this.wantToSearch = true;
    this.url = '';
    this.saved = false;
    this.message = '';
    this.value = 'Clear me';
    this.errorMessage = '';
    this.country = {
      search: ''
    };
    this.formValid = false;
    this.allowableDoc = ['CV', 'Resume', 'Cover Letter Upload', 'Additional Document'];
    this.newJobPosition = {
      title: '',
      code: `ZJP-${this._script.generateRandomAlphanumeric(4)}`,
      department_id: '',
      description: '',
      responsibility: '',
      created_at: '',
      updated_at: '',
      working_hours: '',
      salary: '',
      commission: '',
      pay_type: '',
      job_type: '',
      base_earning: 10,
      max_earning: 100,
      promotable: false,
      required_documents: [],
      optional_documents: []
    };
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '100',
      minHeight: '50',
      maxHeight: '150',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [{
        class: 'arial',
        name: 'Arial'
      }, {
        class: 'times-new-roman',
        name: 'Times New Roman'
      }, {
        class: 'calibri',
        name: 'Calibri'
      }, {
        class: 'comic-sans-ms',
        name: 'Comic Sans MS'
      }],
      customClasses: [{
        name: 'quote',
        class: 'quote'
      }, {
        name: 'redText',
        class: 'redText'
      }, {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }],
      uploadUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uploadApi}/upload`,
      upload: file => {
        let formData = new FormData();
        formData.append('file', file, file.name);
        return this._fs.upload(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(res => {
          this.newJobPosition.responsibility += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`;
          this.newJobPosition.description += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`;
        }));
      },
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
    };
    this.totalFields = 36;
    this.assignableRole = this._us.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(roles => {
      return roles.filter(r => r.name != 'Master');
    }));
    this.departments$ = this._departMentService.departments$;
    this.hasSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.result = [];
    this.summary = ``;
  }

  ngOnChanges(changes) {
    if (changes.loadForm) {
      if (changes.loadForm.currentValue) {
        $(() => {
          $(`#${this.id}`).smartWizard({
            selected: this.formStep,
            // theme: 'default', // theme for the wizard, related css need to include for other than default theme
            justified: true,
            autoAdjustHeight: true,
            backButtonSupport: true,
            enableUrlHash: true,
            transition: {
              animation: 'slideHorizontal',
              speed: '400',
              easing: '',
              prefixCss: '',
              fwdShowCss: '',
              fwdHideCss: '',
              bckShowCss: '',
              bckHideCss: '' // Only used if animation is 'css'. Step hide Animation CSS on backward direction

            },
            toolbar: {
              position: 'bottom',
              showNextButton: true,
              showPreviousButton: true,
              extraHtml: `
              <button class="btn btn-danger" onclick="clickId('${this.id}resetEmployeeFormBtnHidden')">Reset</button>
              <button class="btn btn-success" id="canisubmit64" onclick="clickId('${this.id}createEmployeeSubmitBtnHidden')">
              save</button>` // Extra html to show on toolbar

            },
            anchor: {
              enableNavigation: true,
              enableNavigationAlways: false,
              enableDoneState: true,
              markPreviousStepsAsDone: true,
              unDoneOnBackNavigation: false,
              enableDoneStateNavigation: true // Enable/Disable the done state navigation

            },
            keyboard: {
              keyNavigation: true,
              keyLeft: [37],
              keyRight: [39] // Right key code

            },
            lang: {
              next: 'Next',
              previous: 'Previous'
            },
            disabledSteps: [],
            errorSteps: [],
            warningSteps: [],
            hiddenSteps: [],
            getContent: (idx, stepDirection, stepPosition, selStep, callback) => {
              this.provideContent(idx, stepDirection, stepPosition, selStep, callback);
            } // Callback function for content loading

          });
        });
      }
    }
  }

  ngAfterViewInit() {
    this.changeDetect.detectChanges();
  }

  ngOnInit() {
    this.url = this.router.url;
  }

  provideContent(idx, stepDirection, stepPosition, selStep, callback) {
    this.formStep = idx;
    const canisubmit64 = document.getElementById("canisubmit64"); // You can use stepDirection to get ajax content on the forward movement and stepPosition to identify the step position

    if (stepDirection == 'forward' && stepPosition == 'middle') {
      let ajaxURL = "YOUR AJAX URL"; // Ajax call to fetch your content
      // $.ajax({
      //     method  : "GET",
      //     url     : ajaxURL,
      //     beforeSend: function( xhr:any ) {
      //         // Show the loader
      //         $(`#${this.id}`).smartWizard("loader", "show");
      //     }
      // }).done(function( res:any ) {
      //     // Build the content HTML
      //     let html = `<div class="card w-100" >
      //                     <div class="card-body">
      //                         <p class="card-text">${res}</p>
      //                     </div>
      //                 </div>`;
      //     // Resolve the Promise with the tab content
      //     callback(html);
      //     // Hide the loader
      //     $(`#${this.id}`).smartWizard("loader", "hide");
      // }).fail(function(err:any) {
      //     // Handle ajax error
      //     // Hide the loader
      //     $(`#${this.id}`).smartWizard("loader", "hide");
      // });
    }

    if (this.formStep == 3) {
      canisubmit64.classList.remove('d-none');
      this.summary = this.build;
    } else {
      this.summary = '';
      canisubmit64.classList.add('d-none');
    }

    this.changeDetect.detectChanges(); // The callback must called in any case to procced the steps
    // The empty callback will not apply any dynamic contents to the steps

    callback();
  }

  reset() {
    this.newJobPosition = {
      title: '',
      code: `DPM-${this._script.generateRandomAlphanumeric(4)}`,
      department_id: '',
      description: '',
      responsibility: '',
      created_at: '',
      updated_at: '',
      working_hours: '',
      salary: '',
      commission: '',
      pay_type: '',
      job_type: '',
      base_earning: 10,
      max_earning: 100,
      promotable: false,
      required_documents: [],
      optional_documents: []
    };
    $(`#${this.id}`).smartWizard("reset");
    $(`#${this.id}`).smartWizard("goToStep", 0, true);
  }

  resetConfirmation() {
    $('#danger-modal').modal('show');
  }

  valueChange(value) {}

  submit() {
    this.newJobPosition.company = this.companyService.runningCompany.code;
    let errorMessage = `Opps a required field is missing.`;

    if (!this.formValid) {
      this._ds.openErrorNotification('Opps..', errorMessage);
    } else {
      this._js.addPosition(this.newJobPosition).subscribe(res => {
        this.hasSaved.emit(res);

        this._ds.openSuccessNotification('Position Created', 'Saving job position info to the database..');

        this.reset();
      });
    }
  }

  get build() {
    this.formValid = true;
    const today = new Date(Date.now());
    this.newJobPosition.created_at = today;
    this.newJobPosition.updated_at = today;
    let html = '';

    for (const [key, value] of Object.entries(this.newJobPosition)) {
      const v = value;

      if (key == 'salary') {
        if (this.newJobPosition.pay_type == 'salary') {
          if (!v || v.length == 0) {
            this.formValid = false;
          }

          html += this._build(key, v);
        }
      } else if (key == 'working_hours') {
        if (this.newJobPosition.pay_type == 'hourly') {
          if (!v || v.length == 0) {
            this.formValid = false;
          }

          html += this._build(key, v);
        }
      } else if (key == 'commission') {
        if (this.newJobPosition.pay_type == 'commission') {
          if (!v || v.length == 0) {
            this.formValid = false;
          }

          html += this._build(key, v);
        }
      } else if (key == 'responsibility' || key == 'description') {
        if (!v || v.length == 0) {
          this.formValid = false;
        }

        html += `
          <div class="card card-box m-2">
								<div class="card-header">${key.replace('_', ' ').toUpperCase()}</div>
								<div class="card-body">
                <p>
                ${v}
                </p>
								</div>
							</div>
          `;
      } else {
        if (key != 'promotable') {
          if (!v || v.length == 0) {
            this.formValid = false;
          }
        }

        html += this._build(key, v);
      }
    }

    return html;
  }

  _build(key, v) {
    let html = '';

    if (!v || v.length == 0) {
      html += `<p class="text-danger">${key.replace('_', ' ').toUpperCase()}: ${v}</p>`;
    } else {
      html += `<p><span class="text-primary">${key.replace('_', ' ').toUpperCase()}</span>: <span class="text-success">${v}</span></p>`;
    }

    return html.replace('undefined', '');
  }

}

CreateComponent.ɵfac = function CreateComponent_Factory(t) {
  return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_5__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_6__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__.FileService));
};

CreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CreateComponent,
  selectors: [["app-recruitment-position-create"]],
  inputs: {
    role: "role",
    id: "id",
    showSidePan: "showSidePan",
    showTitle: "showTitle",
    loadForm: "loadForm"
  },
  outputs: {
    hasSaved: "hasSaved"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 171,
  vars: 35,
  consts: [[1, "row"], ["class", "col-12 p-2 mb-2", 4, "ngIf"], [1, "p-2", "mb-2", "min-height-200px", "col-md-12"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [3, "id"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "href"], [1, "num"], [1, "tab-content"], ["id", "step-1", "role", "tabpanel", "aria-labelledby", "step-1", 1, "tab-pane"], [1, "col-md-12"], [1, "col-md-6"], [1, "form-group"], [1, "text-danger"], ["type", "text", "name", "title", "placeholder", "Position Title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "code", "placeholder", "Position Code", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "department", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "job_type", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "On-Site"], ["value", "Remote"], ["value", "Hybrid"], [3, "config", "placeholder", "ngModel", "ngModelChange"], ["id", "step-2", "role", "tabpanel", "aria-labelledby", "step-2", 1, "tab-pane"], ["type", "number", "name", "base_earning", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "max_earning", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "pay_type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "salary"], ["value", "hourly"], ["value", "commission"], ["class", "col-md-6", 4, "ngIf"], ["id", "step-3", "role", "tabpanel", "aria-labelledby", "step-3", 1, "tab-pane"], ["multiple", "", "name", "required_documents", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "No Required Document"], ["multiple", "", "name", "optional_documents", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "No Optional/Additional Document Allowed"], ["value", "newJobPosition.promotable ? 'primary' : 'danger'", 3, "ngModel", "ngModelChange"], ["id", "step-4", "role", "tabpanel", "aria-labelledby", "step-4", 1, "tab-pane"], [3, "innerHtml"], [1, "btn", "btn-success", "d-none", 3, "id", "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "0%"], ["id", "danger-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "Are you sure?", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "font-18"], [1, "mb-20"], [1, "mb-30", "text-center"], [1, "font-18"], [1, "icon-copy", "bi", "bi-trash-fill"], [1, "icon-copy", "bi", "bi-question-lg"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "p-2", "mb-2"], ["role", "alert", 1, "alert", "alert-danger"], [3, "value"], ["type", "number", "name", "working_hours", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "salary", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "commission", 1, "form-control", 3, "ngModel", "ngModelChange"]],
  template: function CreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CreateComponent_div_1_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CreateComponent_div_3_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Job Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Salary Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Promotion Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Review ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Title: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.valueChange($event);
      })("ngModelChange", function CreateComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.newJobPosition.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Code :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_45_listener($event) {
        return ctx.newJobPosition.code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, " Department:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_52_listener($event) {
        return ctx.newJobPosition.department_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, CreateComponent_option_53_Template, 2, 2, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](54, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, " Job Type:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_61_listener($event) {
        return ctx.newJobPosition.job_type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "On-Site");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Remote");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Hybrid");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, " Description :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "angular-editor", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_74_listener($event) {
        return ctx.newJobPosition.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, " Responsibility :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "angular-editor", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_81_listener($event) {
        return ctx.newJobPosition.responsibility = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, " Base Earning :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_91_listener($event) {
        return ctx.newJobPosition.base_earning = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, " Max Earning :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_98_listener($event) {
        return ctx.newJobPosition.max_earning = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, " Payment Type :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "select", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_105_listener($event) {
        return ctx.newJobPosition.pay_type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "Hourly");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, " commission only ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](112, CreateComponent_div_112_Template, 7, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](113, CreateComponent_div_113_Template, 7, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](114, CreateComponent_div_114_Template, 7, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, " Required Documents :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "select", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_124_listener($event) {
        return ctx.newJobPosition.required_documents = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "No Required Document");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](127, CreateComponent_option_127_Template, 2, 2, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, " Optional Documents :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "select", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_134_listener($event) {
        return ctx.newJobPosition.optional_documents = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "No Optional/Additional Document Allowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](137, CreateComponent_option_137_Template, 2, 2, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "mat-slide-toggle", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_mat_slide_toggle_ngModelChange_142_listener($event) {
        return ctx.newJobPosition.promotable = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, "Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](147, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_148_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "Force Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_150_listener() {
        return ctx.resetConfirmation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "Force Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](153, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "h3", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "Are you sure?");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](162, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](164, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, " You are about to clear all existing values in the form field, including including any uploaded file ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_169_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, " Yes, Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-1", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-2", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-3", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-4", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.department_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](54, 33, ctx.departments$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.job_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.editorConfig)("placeholder", "Enter text here...")("ngModel", ctx.newJobPosition.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.editorConfig)("placeholder", "Enter text here...")("ngModel", ctx.newJobPosition.responsibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.base_earning);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.max_earning);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.pay_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newJobPosition.pay_type == "hourly");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newJobPosition.pay_type == "salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newJobPosition.pay_type == "commission");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.required_documents);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.allowableDoc);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.optional_documents);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.allowableDoc);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.newJobPosition.promotable ? "Position Can be promoted " : "Position Cannot be promoted ", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newJobPosition.promotable);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", ctx.summary, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "", ctx.id, "createEmployeeSubmitBtnHidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "", ctx.id, "resetEmployeeFormBtnHidden");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectMultipleControlValueAccessor, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 5570:
/*!***********************************************************************!*\
  !*** ./src/app/admin/recruitment/job/position/list/list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8767);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/create.component */ 6439);











function ListComponent_div_5_table_1_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_div_5_table_1_tr_22_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const position_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r8.navigateMeToANewPage("admin/recruitment/job-position/update/" + position_r6.code);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const position_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, position_r6.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](position_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](position_r6.department_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](position_r6.job_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](position_r6.pay_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](position_r6.base_earning);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](position_r6.max_earning);
  }
}

function ListComponent_div_5_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Job Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Base Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Max Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ListComponent_div_5_table_1_tr_22_Template, 23, 10, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 1, ctx_r4.positions$));
  }
}

function ListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_div_5_table_1_Template, 24, 3, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const positions_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", positions_r3.length > 0);
  }
}

function ListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Position Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r10.newPosition();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Create Job Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "New Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-recruitment-position-create", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("hasSaved", function ListComponent_div_10_Template_app_recruitment_position_create_hasSaved_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r12.hasSavedEvent($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showSidePan", false)("id", "smartwizardCreatePositionNewModal")("loadForm", true);
  }
}

class ListComponent {
  constructor(jobService, deviceService, _router, dialogModule, companyService) {
    this.jobService = jobService;
    this.deviceService = deviceService;
    this._router = _router;
    this.dialogModule = dialogModule;
    this.companyService = companyService;
    this.company$ = this.companyService.company$;
    this.positions$ = this.company$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.skipWhile)(c => !c), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(res => {
      return this.jobService.getJobPositionsApi({
        company: res.code
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(r => this.jobService.positions = r));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(3));
  }

  ngOnInit() {}

  hasSavedEvent(event) {
    const swModalQuickCreateQuickCreateLabelClose = document.getElementById('swModalQuickCreateQuickCreateLabelClose');

    if (swModalQuickCreateQuickCreateLabelClose) {
      swModalQuickCreateQuickCreateLabelClose.click();
    }

    this.deviceService.oSuccessNotification('Position Created', `${event.title} was just created`);
  }

  newPosition() {} // Accepts a string as url and navigates to new page in 1 and half sec toggling the loader


  navigateMeToANewPage(url) {
    this.deviceService.showSpinner();
    setTimeout(() => {
      this._router.navigate([url]);

      this.deviceService.hideSpinner();
      this.deviceService.oInfoNotification('Navigate', 'You are currently viewing the new page');
    }, 1500);
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-recruitment-position-list"]],
  decls: 13,
  vars: 13,
  consts: [[1, "row"], [1, "col-md-12"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center p-2", 4, "ngIf"], ["class", "modal fade", "id", "swModalQuickCreateQuickCreate", "tabindex", "-1", "aria-labelledby", "swModalQuickCreateQuickCreateLabel", "style", "display: none;", "aria-hidden", "true", 4, "ngIf"], [1, "table-responsive"], ["class", "data-table table nowrap", 4, "ngIf"], [1, "data-table", "table", "nowrap"], [1, "table-plus"], [1, "datatable-nosort"], [4, "ngFor", "ngForOf"], [1, "table-actions"], ["href", "javascript:void()", "data-color", "#e95959", 3, "click"], [1, "text-center", "p-2"], [1, "text-center", "mb-2"], ["data-toggle", "modal", "data-target", "#swModalQuickCreateQuickCreate", "type", "button", "data-backdrop", "static", 1, "btn", "btn-sm", "btn-primary", "border-0", "weight-500", "bp", 3, "click"], [1, "icon-copy", "bi", "bi-person-workspace"], ["id", "swModalQuickCreateQuickCreate", "tabindex", "-1", "aria-labelledby", "swModalQuickCreateQuickCreateLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["id", "swModalQuickCreateQuickCreateLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "id", "swModalQuickCreateQuickCreateLabelClose", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-primary"], [1, "modal-body"], [3, "showSidePan", "id", "loadForm", "hasSaved"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "List Of Positions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ListComponent_div_5_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ListComponent_div_7_Template, 6, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ListComponent_div_10_Template, 10, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, ctx.positions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, ctx.positions$) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 7, ctx.positions$).length < 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 9, ctx.positions$) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, ctx.positions$).length < 1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _create_create_component__WEBPACK_IMPORTED_MODULE_3__.CreateComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 1612:
/*!**********************************************************************!*\
  !*** ./src/app/admin/recruitment/job/position/position.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionComponent": () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ 5570);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ 6439);





const _c0 = function () { return ["/admin/employee/all"]; };
const _c1 = function (a0, a1, a2) { return { "active": a0, "d-none": a1, "show": a2 }; };
// This is a sample of a page component
class PositionComponent {
    constructor() {
        this.tab = 'View';
        this.loadForm = false;
    }
    ngOnInit() {
    }
    goto(url, tab) {
        this.tab = tab;
        // this.location.replaceState(`/admin/employee/${url}`);
        if (this.tab == 'Create') {
            this.loadForm = true;
            // if((this.url.match(/step/g) || []).length > 1){
            //   this.location.replaceState(`admin/employee/create#createEmployee`);
            // }
        }
        else {
            this.loadForm = false;
        }
    }
}
PositionComponent.ɵfac = function PositionComponent_Factory(t) { return new (t || PositionComponent)(); };
PositionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PositionComponent, selectors: [["app-position"]], decls: 131, vars: 13, consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-12", "pd-20", "pt-10"], [1, "card", "card-box", "m-2"], [1, "card-body"], [1, "tab"], ["role", "tablist", 1, "nav", "nav-tabs", "customtab"], [1, "nav-item"], ["data-toggle", "tab", "href", "admin/recruitment/job-position#viewJobPosition", "role", "tab", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["data-toggle", "tab", "href", "admin/recruitment/job-position#createJobPosition", "role", "tab", "aria-selected", "false", 1, "nav-link", 3, "click"], [1, "tab-content", "mCustomScrollbar"], ["id", "viewJobPosition", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [1, "col-md-12", "mb-10", "pd-10"], [1, "col-md-12"], [1, "font-24", "weight-500", "mb-10"], [1, "col-md-6"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(2 22 69)"], [1, "d-flex", "justify-content-between", "pb-20", "text-white"], [1, "icon", "h1", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-map-pin"], [1, "font-14", "text-right"], [1, "font-12"], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "text-white"], [1, "font-14"], [1, "font-24", "weight-500"], [1, "max-width-150", 2, "position", "relative"], ["id", "appointment-chart", 2, "min-height", "70px"], ["id", "apexcharts5d2add", 1, "apexcharts-canvas", "apexcharts5d2add", "apexcharts-theme-light", 2, "width", "150px", "height", "70px"], ["id", "SvgjsSvg1606", "width", "150", "height", "70", "xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "svgjs", "http://svgjs.com/svgjs", 0, "xmlns", "data", "ApexChartsNS", "transform", "translate(0, 0)", 1, "apexcharts-svg", 2, "background", "transparent"], ["id", "SvgjsG1608", "transform", "translate(0, 0)", 1, "apexcharts-inner", "apexcharts-graphical"], ["id", "SvgjsDefs1607"], ["id", "SvgjsLinearGradient1611", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["id", "SvgjsStop1612", "stop-opacity", "0.4", "stop-color", "rgba(216,227,240,0.4)", "offset", "0"], ["id", "SvgjsStop1613", "stop-opacity", "0.5", "stop-color", "rgba(190,209,230,0.5)", "offset", "1"], ["id", "SvgjsStop1614", "stop-opacity", "0.5", "stop-color", "rgba(190,209,230,0.5)", "offset", "1"], ["id", "gridRectMask5d2add"], ["id", "SvgjsRect1616", "width", "154", "height", "70", "x", "-2", "y", "0", "rx", "0", "ry", "0", "fill", "#ffffff", "opacity", "1", "stroke-width", "0", "stroke", "none", "stroke-dasharray", "0"], ["id", "gridRectMarkerMask5d2add"], ["id", "SvgjsRect1617", "width", "152", "height", "72", "x", "-1", "y", "-1", "rx", "0", "ry", "0", "fill", "#ffffff", "opacity", "1", "stroke-width", "0", "stroke", "none", "stroke-dasharray", "0"], ["id", "SvgjsRect1615", "width", "5.357142857142857", "height", "70", "x", "0", "y", "0", "rx", "0", "ry", "0", "fill", "url(#SvgjsLinearGradient1611)", "opacity", "1", "stroke-width", "0", "stroke-dasharray", "3", "y2", "70", "filter", "none", "fill-opacity", "0.9", 1, "apexcharts-xcrosshairs"], ["id", "SvgjsG1629", "transform", "translate(0, 0)", 1, "apexcharts-xaxis"], ["id", "SvgjsG1630", "transform", "translate(0, 2.75)", 1, "apexcharts-xaxis-texts-g"], ["id", "SvgjsG1632", 1, "apexcharts-grid"], ["id", "SvgjsG1633", 1, "apexcharts-gridlines-horizontal", 2, "display", "none"], ["id", "SvgjsLine1635", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1636", "x1", "0", "y1", "17.5", "x2", "150", "y2", "17.5", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1637", "x1", "0", "y1", "35", "x2", "150", "y2", "35", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1638", "x1", "0", "y1", "52.5", "x2", "150", "y2", "52.5", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsLine1639", "x1", "0", "y1", "70", "x2", "150", "y2", "70", "stroke", "#e0e0e0", "stroke-dasharray", "0", 1, "apexcharts-gridline"], ["id", "SvgjsG1634", 1, "apexcharts-gridlines-vertical", 2, "display", "none"], ["id", "SvgjsLine1641", "x1", "0", "y1", "70", "x2", "150", "y2", "70", "stroke", "transparent", "stroke-dasharray", "0"], ["id", "SvgjsLine1640", "x1", "0", "y1", "1", "x2", "0", "y2", "70", "stroke", "transparent", "stroke-dasharray", "0"], ["id", "SvgjsG1619", 1, "apexcharts-bar-series", "apexcharts-plot-series"], ["id", "SvgjsG1620", "rel", "1", "seriesName", "Week", 0, "data", "realIndex", "0", 1, "apexcharts-series"], ["id", "SvgjsPath1622", "d", "M 8.035714285714285 70L 8.035714285714285 18.839285714285715Q 10.714285714285714 16.16071428571429 13.392857142857142 18.839285714285715L 13.392857142857142 70L 8.035714285714285 70", "fill", "rgba(0,143,251,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 8.035714285714285 70L 8.035714285714285 18.839285714285715Q 10.714285714285714 16.16071428571429 13.392857142857142 18.839285714285715L 13.392857142857142 70L 8.035714285714285 70", "pathFrom", "M 8.035714285714285 70L 8.035714285714285 70L 13.392857142857142 70L 13.392857142857142 70L 8.035714285714285 70", "cy", "17.5", "cx", "29.46428571428571", "j", "0", "val", "21", "barHeight", "52.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1623", "d", "M 29.46428571428571 70L 29.46428571428571 16.339285714285715Q 32.14285714285714 13.660714285714286 34.82142857142857 16.339285714285715L 34.82142857142857 70L 29.46428571428571 70", "fill", "rgba(0,227,150,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 29.46428571428571 70L 29.46428571428571 16.339285714285715Q 32.14285714285714 13.660714285714286 34.82142857142857 16.339285714285715L 34.82142857142857 70L 29.46428571428571 70", "pathFrom", "M 29.46428571428571 70L 29.46428571428571 70L 34.82142857142857 70L 34.82142857142857 70L 29.46428571428571 70", "cy", "15", "cx", "50.89285714285714", "j", "1", "val", "22", "barHeight", "55", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1624", "d", "M 50.89285714285714 70L 50.89285714285714 46.339285714285715Q 53.57142857142857 43.660714285714285 56.24999999999999 46.339285714285715L 56.24999999999999 70L 50.89285714285714 70", "fill", "rgba(254,176,25,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 50.89285714285714 70L 50.89285714285714 46.339285714285715Q 53.57142857142857 43.660714285714285 56.24999999999999 46.339285714285715L 56.24999999999999 70L 50.89285714285714 70", "pathFrom", "M 50.89285714285714 70L 50.89285714285714 70L 56.24999999999999 70L 56.24999999999999 70L 50.89285714285714 70", "cy", "45", "cx", "72.32142857142857", "j", "2", "val", "10", "barHeight", "25", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1625", "d", "M 72.32142857142857 70L 72.32142857142857 1.3392857142857142Q 75 -1.3392857142857142 77.67857142857143 1.3392857142857142L 77.67857142857143 70L 72.32142857142857 70", "fill", "rgba(255,69,96,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 72.32142857142857 70L 72.32142857142857 1.3392857142857142Q 75 -1.3392857142857142 77.67857142857143 1.3392857142857142L 77.67857142857143 70L 72.32142857142857 70", "pathFrom", "M 72.32142857142857 70L 72.32142857142857 70L 77.67857142857143 70L 77.67857142857143 70L 72.32142857142857 70", "cy", "0", "cx", "93.75", "j", "3", "val", "28", "barHeight", "70", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1626", "d", "M 93.75 70L 93.75 31.339285714285715Q 96.42857142857143 28.66071428571429 99.10714285714286 31.339285714285715L 99.10714285714286 70L 93.75 70", "fill", "rgba(119,93,208,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 93.75 70L 93.75 31.339285714285715Q 96.42857142857143 28.66071428571429 99.10714285714286 31.339285714285715L 99.10714285714286 70L 93.75 70", "pathFrom", "M 93.75 70L 93.75 70L 99.10714285714286 70L 99.10714285714286 70L 93.75 70", "cy", "30", "cx", "115.17857142857143", "j", "4", "val", "16", "barHeight", "40", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1627", "d", "M 115.17857142857143 70L 115.17857142857143 18.839285714285715Q 117.85714285714286 16.16071428571429 120.53571428571429 18.839285714285715L 120.53571428571429 70L 115.17857142857143 70", "fill", "rgba(0,143,251,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 115.17857142857143 70L 115.17857142857143 18.839285714285715Q 117.85714285714286 16.16071428571429 120.53571428571429 18.839285714285715L 120.53571428571429 70L 115.17857142857143 70", "pathFrom", "M 115.17857142857143 70L 115.17857142857143 70L 120.53571428571429 70L 120.53571428571429 70L 115.17857142857143 70", "cy", "17.5", "cx", "136.60714285714286", "j", "5", "val", "21", "barHeight", "52.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsPath1628", "d", "M 136.60714285714286 70L 136.60714285714286 38.839285714285715Q 139.28571428571428 36.160714285714285 141.96428571428572 38.839285714285715L 141.96428571428572 70L 136.60714285714286 70", "fill", "rgba(0,227,150,0.85)", "fill-opacity", "1", "stroke-opacity", "1", "stroke-linecap", "butt", "stroke-width", "0", "stroke-dasharray", "0", "index", "0", "clip-path", "url(#gridRectMask5d2add)", "pathTo", "M 136.60714285714286 70L 136.60714285714286 38.839285714285715Q 139.28571428571428 36.160714285714285 141.96428571428572 38.839285714285715L 141.96428571428572 70L 136.60714285714286 70", "pathFrom", "M 136.60714285714286 70L 136.60714285714286 70L 141.96428571428572 70L 141.96428571428572 70L 136.60714285714286 70", "cy", "37.5", "cx", "158.03571428571428", "j", "6", "val", "13", "barHeight", "32.5", "barWidth", "5.357142857142857", 1, "apexcharts-bar-area"], ["id", "SvgjsG1621", 0, "data", "realIndex", "0", 1, "apexcharts-datalabels"], ["id", "SvgjsLine1642", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke", "#b6b6b6", "stroke-dasharray", "0", "stroke-width", "1", 1, "apexcharts-ycrosshairs"], ["id", "SvgjsLine1643", "x1", "0", "y1", "0", "x2", "150", "y2", "0", "stroke-dasharray", "0", "stroke-width", "0", 1, "apexcharts-ycrosshairs-hidden"], ["id", "SvgjsG1644", 1, "apexcharts-yaxis-annotations"], ["id", "SvgjsG1645", 1, "apexcharts-xaxis-annotations"], ["id", "SvgjsG1646", 1, "apexcharts-point-annotations"], ["id", "SvgjsG1631", "rel", "0", "transform", "translate(-18, 0)", 1, "apexcharts-yaxis"], [1, "apexcharts-legend"], [1, "apexcharts-tooltip", "apexcharts-theme-light"], [1, "apexcharts-tooltip-title", 2, "font-family", "Helvetica, Arial, sans-serif", "font-size", "12px"], [1, "apexcharts-tooltip-series-group"], [1, "apexcharts-tooltip-marker", 2, "background-color", "rgb(0, 143, 251)"], [1, "apexcharts-tooltip-text", 2, "font-family", "Helvetica, Arial, sans-serif", "font-size", "12px"], [1, "apexcharts-tooltip-y-group"], [1, "apexcharts-tooltip-text-label"], [1, "apexcharts-tooltip-text-value"], [1, "apexcharts-tooltip-z-group"], [1, "apexcharts-tooltip-text-z-label"], [1, "apexcharts-tooltip-text-z-value"], [1, "resize-triggers"], [1, "expand-trigger"], [2, "width", "151px", "height", "71px"], [1, "contract-trigger"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(25, 131, 163)"], ["aria-hidden", "true", 1, "fa", "fa-globe"], [1, "font-12", "text-white"], [1, "btn", "btn-primary", "btn-sm", "text-white"], ["id", "createJobPosition", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [1, "pd-20"], [3, "loadForm"]], template: function PositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Job Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Job Position ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_20_listener() { return ctx.goto("job-position#viewJobPosition", "View"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_23_listener() { return ctx.goto("job-position#createJobPosition", "Create"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Your Job Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Salary Cap.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Total Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "defs", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "linearGradient", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "stop", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "stop", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "stop", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "clipPath", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "rect", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "clipPath", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "rect", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "g", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "g", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "line", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "line", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "line", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "line", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "line", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "g", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "line", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "line", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "g", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "g", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "line", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "line", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "g", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Total Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "app-recruitment-position-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "app-recruitment-position-create", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c1, ctx.tab == "View", ctx.tab != "View", ctx.tab == "View"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c1, ctx.tab == "Create", ctx.tab != "Create", ctx.tab == "Create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loadForm", ctx.loadForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_1__.CreateComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3775:
/*!***************************************************************************!*\
  !*** ./src/app/admin/recruitment/job/position/update/update.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateComponent": () => (/* binding */ UpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(); };
UpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-admin-recruitment-job-position-update"]], decls: 2, vars: 0, template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7447:
/*!*****************************************************************!*\
  !*** ./src/app/admin/recruitment/recruitment-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentRoutingModule": () => (/* binding */ RecruitmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ 2143);
/* harmony import */ var _job_opening_opening_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job/opening/opening.component */ 6706);
/* harmony import */ var _job_position_position_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job/position/position.component */ 1612);
/* harmony import */ var src_app_shared_resolvers_company_department_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/resolvers/company/department.resolver */ 8654);
/* harmony import */ var _job_opening_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job/opening/preview/preview.component */ 6291);
/* harmony import */ var _job_application_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job/application/index/index.component */ 314);
/* harmony import */ var _job_position_update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job/position/update/update.component */ 3775);
/* harmony import */ var _job_opening_update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job/opening/update/update.component */ 9634);
/* harmony import */ var _job_opening_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./job/opening/delete/delete.component */ 7997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent,
        children: [
            {
                path: 'job-opening',
                component: _job_opening_opening_component__WEBPACK_IMPORTED_MODULE_1__.OpeningComponent,
                data: { tab: 'Opening' }
            },
            {
                path: 'job-opening/preview/:code',
                component: _job_opening_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__.PreviewComponent,
                data: { tab: 'Application View' }
            },
            {
                path: 'job-opening/applications',
                component: _job_application_index_index_component__WEBPACK_IMPORTED_MODULE_5__.IndexComponent,
                data: { tab: 'Application History' }
            },
            {
                path: 'job-position',
                component: _job_position_position_component__WEBPACK_IMPORTED_MODULE_2__.PositionComponent,
                data: { tab: 'Position' }
            },
            {
                path: 'job-position/update/:code',
                component: _job_position_update_update_component__WEBPACK_IMPORTED_MODULE_6__.UpdateComponent
            },
            {
                path: 'job-opening/update/:code',
                component: _job_opening_update_update_component__WEBPACK_IMPORTED_MODULE_7__.UpdateComponent
            },
            {
                path: 'job-opening/delete/:code',
                component: _job_opening_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__.DeleteComponent
            }
            // ,{
            //   path: 'applications/open',
            //   component: ListComponent
            // },
            // {
            //   path: 'applications/closed',
            //   component: ListComponent
            // }
        ],
        resolve: [src_app_shared_resolvers_company_department_resolver__WEBPACK_IMPORTED_MODULE_3__.DepartmentResolver]
    }
];
class RecruitmentRoutingModule {
}
RecruitmentRoutingModule.ɵfac = function RecruitmentRoutingModule_Factory(t) { return new (t || RecruitmentRoutingModule)(); };
RecruitmentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: RecruitmentRoutingModule });
RecruitmentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RecruitmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 4035:
/*!*********************************************************!*\
  !*** ./src/app/admin/recruitment/recruitment.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentModule": () => (/* binding */ RecruitmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recruitment-routing.module */ 7447);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ 2143);
/* harmony import */ var _job_application_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job/application/index/index.component */ 314);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _user_role_user_role_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-role/user-role.module */ 9194);
/* harmony import */ var _job_opening_opening_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job/opening/opening.component */ 6706);
/* harmony import */ var _job_position_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job/position/position.component */ 1612);
/* harmony import */ var _job_opening_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job/opening/create/create.component */ 2000);
/* harmony import */ var _job_position_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./job/position/create/create.component */ 6439);
/* harmony import */ var _job_position_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job/position/list/list.component */ 5570);
/* harmony import */ var _job_opening_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job/opening/list/list.component */ 1461);
/* harmony import */ var _job_application_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job/application/list/list.component */ 3887);
/* harmony import */ var _job_opening_preview_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./job/opening/preview/preview.component */ 6291);
/* harmony import */ var _job_opening_preview_apply_apply_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./job/opening/preview/apply/apply.component */ 8421);
/* harmony import */ var _job_opening_preview_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job/opening/preview/search/search.component */ 6979);
/* harmony import */ var _job_application_view_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./job/application/view/view.component */ 1232);
/* harmony import */ var _job_position_update_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./job/position/update/update.component */ 3775);
/* harmony import */ var _job_opening_update_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./job/opening/update/update.component */ 9634);
/* harmony import */ var _job_opening_delete_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./job/opening/delete/delete.component */ 7997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);





















class RecruitmentModule {
}
RecruitmentModule.ɵfac = function RecruitmentModule_Factory(t) { return new (t || RecruitmentModule)(); };
RecruitmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: RecruitmentModule });
RecruitmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _user_role_user_role_module__WEBPACK_IMPORTED_MODULE_4__.UserRoleModule,
            _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](RecruitmentModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent,
        _job_application_index_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexComponent,
        _job_opening_opening_component__WEBPACK_IMPORTED_MODULE_5__.OpeningComponent,
        _job_position_position_component__WEBPACK_IMPORTED_MODULE_6__.PositionComponent,
        _job_position_create_create_component__WEBPACK_IMPORTED_MODULE_8__.CreateComponent,
        _job_position_list_list_component__WEBPACK_IMPORTED_MODULE_9__.ListComponent,
        _job_opening_list_list_component__WEBPACK_IMPORTED_MODULE_10__.ListComponent,
        _job_application_list_list_component__WEBPACK_IMPORTED_MODULE_11__.ListComponent,
        _job_opening_create_create_component__WEBPACK_IMPORTED_MODULE_7__.CreateComponent,
        _job_opening_preview_preview_component__WEBPACK_IMPORTED_MODULE_12__.PreviewComponent,
        _job_opening_preview_apply_apply_component__WEBPACK_IMPORTED_MODULE_13__.ApplyComponent,
        _job_opening_preview_search_search_component__WEBPACK_IMPORTED_MODULE_14__.SearchComponent,
        _job_application_view_view_component__WEBPACK_IMPORTED_MODULE_15__.ViewComponent,
        _job_position_update_update_component__WEBPACK_IMPORTED_MODULE_16__.UpdateComponent,
        _job_opening_update_update_component__WEBPACK_IMPORTED_MODULE_17__.UpdateComponent,
        _job_opening_delete_delete_component__WEBPACK_IMPORTED_MODULE_18__.DeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _user_role_user_role_module__WEBPACK_IMPORTED_MODULE_4__.UserRoleModule,
        _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentRoutingModule], exports: [_job_opening_preview_preview_component__WEBPACK_IMPORTED_MODULE_12__.PreviewComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_recruitment_recruitment_module_ts.js.map