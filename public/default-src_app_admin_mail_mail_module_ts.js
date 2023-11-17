"use strict";
(self["webpackChunksparklingv2"] = self["webpackChunksparklingv2"] || []).push([["default-src_app_admin_mail_mail_module_ts"],{

/***/ 2548:
/*!***************************************************!*\
  !*** ./src/app/admin/mail/mail-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailRoutingModule": () => (/* binding */ MailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class MailRoutingModule {
}
MailRoutingModule.ɵfac = function MailRoutingModule_Factory(t) { return new (t || MailRoutingModule)(); };
MailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MailRoutingModule });
MailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2673:
/*!*******************************************!*\
  !*** ./src/app/admin/mail/mail.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailModule": () => (/* binding */ MailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-routing.module */ 2548);
/* harmony import */ var _thread_thread_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thread/thread.component */ 5164);
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea/textarea.component */ 9221);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class MailModule {
}
MailModule.ɵfac = function MailModule_Factory(t) { return new (t || MailModule)(); };
MailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MailModule });
MailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _mail_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MailModule, { declarations: [_thread_thread_component__WEBPACK_IMPORTED_MODULE_1__.ThreadComponent,
        _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_2__.TextareaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _mail_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule], exports: [_thread_thread_component__WEBPACK_IMPORTED_MODULE_1__.ThreadComponent,
        _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_2__.TextareaComponent] }); })();


/***/ }),

/***/ 9221:
/*!***********************************************************!*\
  !*** ./src/app/admin/mail/textarea/textarea.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaComponent": () => (/* binding */ TextareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);











function TextareaComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TextareaComponent_label_11_Template_label_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.config.showToolbar = !ctx_r2.config.showToolbar; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.id, "option2");
} }
function TextareaComponent_label_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TextareaComponent_label_12_Template_label_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.config.showToolbar = !ctx_r4.config.showToolbar; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.id, "option4");
} }
class TextareaComponent {
    constructor(_fs, ss, _ds) {
        this._fs = _fs;
        this.ss = ss;
        this._ds = _ds;
        this.uploadedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.sendEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.uploaded = [];
        this.data = null;
        this.id = null;
        this.config = {
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
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((res) => {
                    res.status = 'Yet';
                    this.uploaded.unshift(res);
                    let today = new Date(Date.now());
                    let _data = Object.assign(Object.assign(Object.assign({}, this.newMessage), res), { created_at: today, updated_at: today, code: `${this.id}-at-${today.getMilliseconds()}-file-${this.ss.generateRandomAlphanumeric(5)}` });
                    this.uploadedEvent.emit(_data);
                    this.data = '';
                    this.reset();
                    // this.newJobApplication.responsibility += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`
                    // this.newJobApplication.description += `<a href="${res.file}" target="__blank">${res.fileName}</a><br>`
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
        this.newMessage = {
            content: null,
            status: 'Yet',
            code: `${this.ss.generateRandomAlphanumeric(10)}`,
            file: null,
            sender: null,
            recipient: null,
            dir: null,
            message: null,
            fileName: null,
            serverLocation: null,
            uploadPath: null,
            created_at: '',
            updated_at: ''
        };
    }
    ngOnInit() {
    }
    send() {
        if (this.data) {
            let today = new Date(Date.now());
            let _data = Object.assign(Object.assign({}, this.newMessage), { created_at: today, updated_at: today, code: `${this.id}-at-${today.getMilliseconds()}`, status: 'Sending', content: this.data });
            this.sendEvent.emit(_data);
            this.data = null;
            this.reset();
        }
        else {
            this._ds.oInfoNotification('Empty Message', 'Message content cannot  be empty');
        }
    }
    reset() {
        this.newMessage = {
            content: null,
            status: 'Yet',
            code: `${this.id}-at-${this.ss.generateRandomAlphanumeric(10)}`,
            file: null,
            sender: null,
            recipient: null,
            dir: null,
            message: null,
            fileName: null,
            serverLocation: null,
            uploadPath: null,
            created_at: '',
            updated_at: ''
        };
    }
}
TextareaComponent.ɵfac = function TextareaComponent_Factory(t) { return new (t || TextareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_2__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_3__.DeviceService)); };
TextareaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TextareaComponent, selectors: [["app-mail-textarea"]], inputs: { uploaded: "uploaded", data: "data", id: "id", config: "config" }, outputs: { uploadedEvent: "uploadedEvent", sendEvent: "sendEvent" }, decls: 16, vars: 8, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [3, "config", "id", "placeholder", "ngModel", "ngModelChange"], [1, "col-md-12", "text-right", "pt-2"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", "active", 2, "background", "transparent", 3, "change"], ["type", "checkbox", "name", "options", "autocomplete", "off", "checked", "", 3, "id"], ["href", "javascript:void(0)", 1, "mr-2"], [1, "fa", "fa-paperclip"], ["class", "btn btn-primary", 3, "change", 4, "ngIf"], [1, "btn", "btn-success", 3, "change"], ["type", "checkbox", "name", "options", "autocomplete", "off", 3, "id"], [1, "icon-copy", "ion-paper-airplane"], [1, "btn", "btn-primary", 3, "change"], [1, "icon-copy", "bi", "bi-layer-forward"], [1, "icon-copy", "bi", "bi-keyboard"]], template: function TextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "angular-editor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TextareaComponent_Template_angular_editor_ngModelChange_3_listener($event) { return ctx.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TextareaComponent_Template_label_change_7_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TextareaComponent_label_11_Template, 3, 1, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TextareaComponent_label_12_Template, 3, 1, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TextareaComponent_Template_label_change_13_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("placeholder", "Type nmessge...")("ngModel", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.id, "option1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.config.showToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.config.showToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.id, "option3");
    } }, directives: [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], styles: [".angular-editor-textarea[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\nangular-editor[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.chat_send[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.take80[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n\n.take100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.take50[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.darkbtn-sec[_ngcontent-%COMP%] {\n  background: #021645;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7QUFJSjs7QUFGQTtFQUNJLHNCQUFBO0FBS0o7O0FBSEE7RUFDSSxxQkFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7QUFPSiIsImZpbGUiOiJ0ZXh0YXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbmFuZ3VsYXItZWRpdG9ye1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXRfc2VuZHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4udGFrZTgwe1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWtlMTAwe1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udGFrZTUwe1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5kYXJrYnRuLXNlY3tcclxuICAgIGJhY2tncm91bmQ6ICMwMjE2NDU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5164:
/*!*******************************************************!*\
  !*** ./src/app/admin/mail/thread/thread.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreadComponent": () => (/* binding */ ThreadComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../textarea/textarea.component */ 9221);






function ThreadComponent_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.recipient == null ? null : ctx_r1.recipient.passport, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ThreadComponent_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/img/ezgif.com-webp-to-png.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ThreadComponent_div_2_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nothing to see here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ThreadComponent_div_2_li_27_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (ctx_r6.me == null ? null : ctx_r6.me.passport) ? ctx_r6.me == null ? null : ctx_r6.me.passport : "assets/img/Sphere_rotating_transparency.gif", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ThreadComponent_div_2_li_27_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (ctx_r7.recipient == null ? null : ctx_r7.recipient.passport) ? ctx_r7.recipient == null ? null : ctx_r7.recipient.passport : "assets/img/Sphere_rotating_transparency.gif", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ThreadComponent_div_2_li_27_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 33);
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", message_r5 == null ? null : message_r5.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ThreadComponent_div_2_li_27_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r5 == null ? null : message_r5.content);
} }
function ThreadComponent_div_2_li_27_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.getTime(message_r5.created_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", message_r5 == null ? null : message_r5.status, " ");
} }
function ThreadComponent_div_2_li_27_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThreadComponent_div_2_li_27_div_4_span_2_Template, 1, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThreadComponent_div_2_li_27_div_4_span_3_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ThreadComponent_div_2_li_27_div_4_div_4_Template, 5, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isHtml(message_r5.content));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.isHtml(message_r5.content));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r5 == null ? null : message_r5.created_at);
} }
function ThreadComponent_div_2_li_27_div_5_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r5 == null ? null : message_r5.status);
} }
function ThreadComponent_div_2_li_27_div_5_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThreadComponent_div_2_li_27_div_5_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return message_r5.status = "Sent"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ThreadComponent_div_2_li_27_div_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.getTime(message_r5.created_at));
} }
function ThreadComponent_div_2_li_27_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ThreadComponent_div_2_li_27_div_5_span_11_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ThreadComponent_div_2_li_27_div_5_a_12_Template, 2, 0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ThreadComponent_div_2_li_27_div_5_div_13_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", message_r5 == null ? null : message_r5.file, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r5 == null ? null : message_r5.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r5 == null ? null : message_r5.status) != "Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r5 == null ? null : message_r5.status) == "Yet" && (message_r5 == null ? null : message_r5.sender) == (ctx_r9.me == null ? null : ctx_r9.me.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r5 == null ? null : message_r5.created_at);
} }
const _c0 = function (a0) { return { "admin_chat": a0 }; };
function ThreadComponent_div_2_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThreadComponent_div_2_li_27_img_2_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThreadComponent_div_2_li_27_img_3_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ThreadComponent_div_2_li_27_div_4_Template, 5, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThreadComponent_div_2_li_27_div_5_Template, 14, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, (message_r5 == null ? null : message_r5.sender) == (ctx_r4.me == null ? null : ctx_r4.me.code)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r5 == null ? null : message_r5.sender) == (ctx_r4.me == null ? null : ctx_r4.me.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r5 == null ? null : message_r5.sender) != (ctx_r4.me == null ? null : ctx_r4.me.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(message_r5 == null ? null : message_r5.file));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r5 == null ? null : message_r5.file);
} }
function ThreadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThreadComponent_div_2_img_5_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ThreadComponent_div_2_img_6_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Export Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ThreadComponent_div_2_p_25_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ThreadComponent_div_2_li_27_Template, 6, 7, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "app-mail-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("uploadedEvent", function ThreadComponent_div_2_Template_app_mail_textarea_uploadedEvent_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.uploadedEventHandler($event); })("sendEvent", function ThreadComponent_div_2_Template_app_mail_textarea_sendEvent_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.sendEventHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.recipient == null ? null : ctx_r0.recipient.passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r0.recipient == null ? null : ctx_r0.recipient.passport));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.recipient == null ? null : ctx_r0.recipient.firstName, " ", ctx_r0.recipient == null ? null : ctx_r0.recipient.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.recipient == null ? null : ctx_r0.recipient.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", ctx_r0.me == null ? null : ctx_r0.me.code, "_thread_conversation_dialog_", ctx_r0.recipient == null ? null : ctx_r0.recipient.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.messages.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.threads);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", (ctx_r0.me == null ? null : ctx_r0.me.code) + "_messagebox_" + (ctx_r0.recipient == null ? null : ctx_r0.recipient.code));
} }
class ThreadComponent {
    constructor(_ds) {
        this._ds = _ds;
        this.recipient = null;
        this.me = null;
        this.messages = [];
    }
    ngAfterViewInit() {
        this.gotoBottom();
    }
    ngOnInit() {
        let existinglistv = this._ds._conversations.value.get(this.recipient.code);
        if (existinglistv) {
            this.messages = existinglistv;
        }
        this._ds.getMailConversationThread({ recipient: this.recipient.code, sender: this.me.code, _sort: "created_at", _order: 'asc', _limit: 500 }).subscribe(messages => {
            let existinglistv = this._ds._conversations.value;
            existinglistv.set(this.recipient.code, messages);
            this._ds._conversations.next(existinglistv);
            // this.messages = messages;
        });
    }
    uploadedEventHandler(event) {
        event.sender = this.me.code;
        event.recipient = this.recipient.code;
        event.mail = null;
        let mail = {
            from: this.me.email,
            to: this.recipient.email,
            subject: `New Message from ${this.me.firstName} via zinder`,
            html: null,
            innerBody: event.content,
        };
        if (this.isHtml(event.content)) {
            mail.html = event.content;
        }
        this._ds.mail(mail)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
        }))
            .subscribe();
        this.messages.push(event);
    }
    sendEventHandler(event) {
        event.sender = this.me.code;
        event.recipient = this.recipient.code;
        event.status = 'Sent';
        event.mail = null;
        let mail = {
            from: this.me.email,
            to: this.recipient.email,
            subject: `New Message from ${this.me.firstName} via zinder messanger`,
            html: null,
            innerBody: event.content,
        };
        if (this.isHtml(event.content)) {
            mail.html = event.content;
        }
        this._ds.sendMessage(event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((res) => {
            if (res.id) {
                this.updateFeed(res);
                return this._ds.mail(mail)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((_res) => {
                    if (_res.created_at) {
                        res.mail = _res;
                        res.status = 'Delivered';
                        this.updateFeed(res);
                        res.status = 'Unseen';
                        return this._ds.updateMessage(res)
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
                            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(new Error('Update Error'));
                        }));
                    }
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(res);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(new Error("Mail Error"));
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(res);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(new Error("Sending Message Error"));
        }))
            .subscribe(c => {
            this.updateFeed(c);
            this.gotoBottom();
        }, e => console.error(e));
    }
    updateFeed(message) {
        let existinglistv = this._ds._conversations.value;
        let existinglist = this.threads;
        const loadedIndex = existinglist.findIndex(m => m.code == message.code);
        if (loadedIndex > -1) {
            existinglist[loadedIndex] = message;
        }
        else {
            existinglist.push(message);
        }
        existinglistv.set(this.recipient.code, existinglist);
        this._ds._conversations.next(existinglistv);
    }
    gotoBottom() {
        var _a, _b;
        let element = document.getElementById(`${(_a = this.me) === null || _a === void 0 ? void 0 : _a.code}_thread_conversation_dialog_${(_b = this.recipient) === null || _b === void 0 ? void 0 : _b.code}`);
        element.scroll({ top: element.scrollHeight, behavior: 'smooth' });
        // $("#mydiv").scrollTop(()=> { return this.scrollHeight; });
    }
    get threads() {
        return this._ds._conversations.value.get(this.recipient.code) || [];
    }
    getTime(time) {
        return new Date(time).toLocaleDateString();
    }
    isHtml(content) {
        let regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
        return regexForHTML.test(content);
    }
}
ThreadComponent.ɵfac = function ThreadComponent_Factory(t) { return new (t || ThreadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService)); };
ThreadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThreadComponent, selectors: [["app-mail-thread"]], inputs: { recipient: "recipient", me: "me" }, decls: 3, vars: 1, consts: [[1, "row"], [1, "col-md-12"], ["class", "chat-detail", 4, "ngIf"], [1, "chat-detail"], [1, "chat-profile-header", "clearfix"], [1, "left"], [1, "clearfix"], [1, "chat-profile-photo"], ["alt", "", 3, "src", 4, "ngIf"], [1, "chat-profile-name", "pt-0"], [1, "mb-0"], [1, "right", "text-right"], [1, "dropdown"], ["href", "javascript:void(0)", "role", "button", "data-toggle", "dropdown", 1, "btn", "btn-outline-primary", "border-0", "btn-sm", "dropdown-toggle"], [1, "icon-copy", "bi", "bi-grid-3x2-gap"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "chat-box"], [1, "chat-desc", "customscroll", "mCustomScrollbar", "mCustomScrollBox", 3, "id"], ["class", "text-center pb-2 pt-2 m-2 text-primary", 4, "ngIf"], ["class", "clearfix", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer", "min-h-50"], [1, "pt-2", "pb-2", "border-bs"], [3, "id", "uploadedEvent", "sendEvent"], ["alt", "", 3, "src"], [1, "text-center", "pb-2", "pt-2", "m-2", "text-primary"], [1, "clearfix", 3, "ngClass"], [1, "chat-img"], ["class", "chat-body clearfix", 4, "ngIf"], [1, "chat-body", "clearfix"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], ["class", "chat_time", 4, "ngIf"], [3, "innerHTML"], [1, "chat_time"], [1, "icon-copy", "bi", "bi-reply-fill"], [1, "upload-file-box", "clearfix"], [1, "overlay"], ["href", "javascript:void(0)"], [1, "fa", "fa-angle-down"], [1, "right"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"]], template: function ThreadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThreadComponent_div_2_Template, 31, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.me == null ? null : ctx.me.code) && (ctx.recipient == null ? null : ctx.recipient.code));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_1__.TextareaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], styles: [".mCustomScrollBox[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  max-width: 100%;\n  outline: 0;\n  direction: ltr;\n  overflow-y: scroll;\n}\n\n.chat-profile-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .chat-profile-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n}\n\n.chat-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.min-h-50[_ngcontent-%COMP%] {\n  min-height: 60px !important;\n}\n\n.chat-detail[_ngcontent-%COMP%] {\n  max-height: 70vh !important;\n  min-height: 10vh !important;\n  height: 45vh !important;\n}\n\n.border-bs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUo7O0FBRkE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFIQTtFQUNJLHdCQUFBO0FBTUoiLCJmaWxlIjoidGhyZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1DdXN0b21TY3JvbGxCb3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uY2hhdC1wcm9maWxlLWhlYWRlciAubGVmdCAuY2hhdC1wcm9maWxlLXBob3RvIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuLmNoYXQtaW1nIGltZ3tcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4ubWluLWgtNTB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtZGV0YWlse1xyXG4gICAgbWF4LWhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0NXZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci1ic3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxufVxyXG5cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_mail_mail_module_ts.js.map