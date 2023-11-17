"use strict";
(self["webpackChunksparklingv2"] = self["webpackChunksparklingv2"] || []).push([["default-src_app_admin_employee_employee_module_ts"],{

/***/ 6771:
/*!***********************************************************!*\
  !*** ./src/app/admin/employee/create/create.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8767);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var src_app_shared_services_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/Index */ 9237);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);

















function CreateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Create a new user");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CreateComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-slide-toggle", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10.isChecked = $event;
    })("ngModelChange", function CreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r12.isCheckedEvent($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.isChecked ? "Bulk Upload" : "Create Single", " ");
  }
}

function CreateComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}

function CreateComponent_div_39_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const opening_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", opening_r14.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](opening_r14.title);
  }
}

function CreateComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Load By Opening :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "select", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_39_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r15.opening_code = $event;
    })("change", function CreateComponent_div_39_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r17.changedOpening($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Select Opening");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CreateComponent_div_39_option_6_Template, 2, 2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r3.opening_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 2, ctx_r3.opening$));
  }
}

function CreateComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Search Job Applicant Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_40_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r18.changeSerarchKey($event);
    })("ngModelChange", function CreateComponent_div_40_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r20.searchKey = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r4.searchKey);
  }
}

function CreateComponent_div_41_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_div_41_li_11_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const app_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r23.load(app_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const app_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](app_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](", ", app_r22.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", app_r22.firstName, " ", app_r22.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", app_r22.code, " ");
  }
}

function CreateComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Search Result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ul", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, CreateComponent_div_41_li_11_Template, 14, 5, "li", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", ctx_r5.applications.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.applications);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.status, " ");
  }
}

function CreateComponent_option_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const position_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", position_r25.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](position_r25.title);
  }
}

function CreateComponent_option_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const dept_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", dept_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](dept_r26.name);
  }
}

function CreateComponent_div_335_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Asssign Role: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "(min 1)*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CreateComponent_div_335_select_3_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const role_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", role_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](role_r31.name);
  }
}

function CreateComponent_div_335_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_335_select_3_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r32.newEmployee.role = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "optgroup", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CreateComponent_div_335_select_3_option_2_Template, 2, 2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("selectpicker-new-emp-role-", ctx_r28.newEmployee == null ? null : ctx_r28.newEmployee.code, " form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r28.newEmployee.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, ctx_r28.assignableRole));
  }
}

function CreateComponent_div_335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CreateComponent_div_335_label_1_Template, 4, 0, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CreateComponent_div_335_select_3_Template, 4, 7, "select", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r8.isMaster$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx_r8.isMaster$));
  }
}

const _c0 = function (a0) {
  return {
    "d-none": a0
  };
};

function CreateComponent_div_342_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Bulk Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_div_342_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r34.clickedUploadFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, !ctx_r9.isChecked));
  }
}

class CreateComponent {
  constructor(_ds, _depServ, _script, _js, _us, _route, location, changeDetRef, _company, auth, router, _fs) {
    this._ds = _ds;
    this._depServ = _depServ;
    this._script = _script;
    this._js = _js;
    this._us = _us;
    this._route = _route;
    this.location = location;
    this.changeDetRef = changeDetRef;
    this._company = _company;
    this.auth = auth;
    this.router = router;
    this._fs = _fs;
    this.role = '';
    this.route = '';
    this.isRegisterationPage = false;
    this.showTitle = false;
    this.loadForm = false;
    this.newEmployee = {
      code: `ZU-${this._script.generateRandomAlphanumeric(3)}`,
      firstName: '',
      lastName: '',
      gender: '',
      marital_status: '',
      country: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      date_of_employment: '',
      dob: '',
      email: '',
      password: '',
      passport: '',
      role: ['Staff'],
      job_title: '',
      job_positions: '',
      // reports_to: '',
      department: '',
      type_of_contract: '',
      working_hours: '',
      cfale: '',
      ale: '',
      ala: '',
      sort_code: '',
      location: '',
      probation: '',
      confidance: '',
      result: '',
      comments: '',
      behavior: '',
      amount: '',
      currency: '',
      pay_type: '',
      payroll: '',
      pension: '',
      name_of_acc: '',
      name_of_bank: '',
      acc_num: ''
    };
    this.fileToUpload = null;
    this.formId = null;
    this.searchKey = '';
    this.status = '';
    this.opening_code = null;
    this.wizard = null;
    this.staff = null;
    this.formStep = 0;
    this.isChecked = false;
    this.isLinear = true;
    this.url = '';
    this.saved = false;
    this.message = '';
    this.errorMessage = '';
    this.country = {
      search: ''
    };
    this.totalFields = 36;
    this.isMaster = false;
    this.isAdmin = false;
    this.opening$ = this._js.getJobOpeningsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)());
    this.positions$ = this._js.getJobPositionsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(r => {
      var _a;

      const selectDropdown = $(`.selectpicker-new-emp-position-${(_a = this.newEmployee) === null || _a === void 0 ? void 0 : _a.code}`);
      selectDropdown.selectpicker();
      selectDropdown.on('changed.bs.select', this.handleJobPosition);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)());
    this.departments$ = this._depServ.getDepartmentsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)());
    this._job_applications = this._js.job_applications;
    this.isMaster$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this._route.snapshot.data['fromResolverUser'] && this._route.snapshot.data['fromResolverUser'].role.includes('Master'.toLowerCase().trim())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.skipWhile)(c => !this.isRegisterationPage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(res => {
      this.isMaster = res;
    }));
    this.isAdmin$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this._route.snapshot.data['fromResolverUser'] && this._route.snapshot.data['fromResolverUser'].role.includes('Admin'.toLowerCase().trim())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.skipWhile)(c => !this.isRegisterationPage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(res => {
      this.isAdmin = res;
    }));
    this.assignableRole = this._us.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(roles => {
      return roles.filter(r => r.name != 'Master');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(r => {
      var _a;

      this.staff = r.filter(_r => _r.name == 'Staff').map(r => r.name);
      const selectDropdown2 = $(`.selectpicker-new-emp-role-${(_a = this.newEmployee) === null || _a === void 0 ? void 0 : _a.code}`);
      selectDropdown2.selectpicker();
      selectDropdown2.on('changed.bs.select', this.handleJobPosition);
    }));
    this.hasSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.result = [];
    this.newEmployee.code = `EI-${this._script.generateRandomAlphanumeric(3)}`;
  }

  ngOnChanges(changes) {
    if (changes.loadForm && changes.loadForm.currentValue) {
      this.formId = `#smartwizard-user-new-${this.newEmployee.code}`;
      $(() => {
        this.wizard = $(this.formId);
        this.wizard.smartWizard({
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
          <button class="btn btn-danger" onclick="clickId('resetEmployeeFormBtnHidden${this.formId}')">Reset</button>
          <button class="btn btn-success" id="canisubmit64${this.formId}" onclick="clickId('createEmployeeSubmitBtnHidden${this.formId}')">
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
          getContent: (idx, stepDirection, stepPosition, selStep, callback) => this.provideContent(idx, stepDirection, stepPosition, selStep, callback) // Callback function for content loading

        });
        this.wizard.smartWizard("reset");
        this.wizard.on("loaded", e => this.loadedForm);
      });
    }

    if (changes.route && changes.route.currentValue) {
      this.location.go(changes.route.currentValue);
    }
  }

  ngAfterViewInit() {}

  loadedForm(e) {
    if (this.route) {
      this.location.go(this.route);
    }

    this.load(this.newEmployee);
  }

  ngOnInit() {
    this.url = this.router.url;

    if (this.route) {
      this.location.go(this.route);
    }

    this.isAdmin = this._route.snapshot.data['fromResolverUser'] && this._route.snapshot.data['fromResolverUser'].role.includes('Admin'.trim());
    this.isMaster = this._route.snapshot.data['fromResolverUser'] && this._route.snapshot.data['fromResolverUser'].role.includes('Master'.trim());
    this.isAdmin$.subscribe();
  }

  provideContent(idx, stepDirection, stepPosition, selStep, callback) {
    this.formStep = idx;
    const canisubmit64 = document.getElementById(`canisubmit64${this.formId}`); // You can use stepDirection to get ajax content on the forward movement and stepPosition to identify the step position

    if (stepDirection == 'forward' && stepPosition == 'middle') {
      let ajaxURL = "YOUR AJAX URL"; // Ajax call to fetch your content
      // $.ajax({
      //     method  : "GET",
      //     url     : ajaxURL,
      //     beforeSend: function( xhr:any ) {
      //         // Show the loader
      //         $('#smartwizard').smartWizard("loader", "show");
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
      //     $('#smartwizard').smartWizard("loader", "hide");
      // }).fail(function(err:any) {
      //     // Handle ajax error
      //     // Hide the loader
      //     $('#smartwizard').smartWizard("loader", "hide");
      // });
    }

    if (this.formStep == 3) {
      canisubmit64.classList.remove('d-none');
    } else if (this.formStep == 1) {
      canisubmit64.classList.add('d-none');
    } else {
      canisubmit64.classList.add('d-none');
    } // The callback must called in any case to procced the steps
    // The empty callback will not apply any dynamic contents to the steps


    callback();
  }

  changedOpening(value) {
    this.searchKey = '';
  }

  changeSerarchKey(value) {
    this.searchKey = value;

    if (this.searchKey.length > 3 || !this.job_applications.get(this.searchKey)) {
      this.status = 'loading';

      this._js.searchJobOpeningApplicationsApi(this.opening_code, this.searchKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(2000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(c => this.status = '');
    }
  }

  clickedUploadFile() {
    const formFile = document.getElementById('formFile');
    formFile.click();
  }

  reset() {
    this.newEmployee = {
      code: `ZU-${this._script.generateRandomAlphanumeric(3)}`,
      firstName: '',
      lastName: '',
      gender: '',
      marital_status: '',
      country: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      date_of_employment: '',
      dob: '',
      email: '',
      password: '',
      passport: '',
      role: '',
      job_title: '',
      job_positions: '',
      // reports_to: '',
      department: '',
      type_of_contract: '',
      working_hours: '',
      cfale: '',
      ale: '',
      ala: '',
      sort_code: '',
      location: '',
      probation: '',
      confidance: '',
      result: '',
      comments: '',
      behavior: '',
      amount: '',
      currency: '',
      pay_type: '',
      payroll: '',
      pension: '',
      name_of_acc: '',
      name_of_bank: '',
      acc_num: ''
    };
    this.newEmployee.code = `EI-${this._script.generateRandomAlphanumeric(3)}`;
    $('#smartwizard').smartWizard("reset");
    $('#smartwizard').smartWizard("goToStep", 0, true);
  }

  load(applicant) {
    this.newEmployee = Object.assign(Object.assign({}, this.newEmployee), {
      firstName: applicant.firstName,
      lastName: applicant.lastName,
      email: applicant.email,
      phone: applicant.phone,
      country: applicant.country
    });
    this.wizard.smartWizard("goToStep", 0, true); // this.newEmployee = {
    //   ...this.newEmployee,
    //   firstName: '',
    //   lastName: '',
    //   gender: '',
    //   marital_status: '',
    //   country: '',
    //   phone: '',
    //   address: '',
    //   state: '',
    //   city: '',
    //   date_of_employment: '',
    //   dob: '',
    //   email: '',
    //   password: '',
    //   passport: '',
    //   role: '',
    //   job_title: '',
    //   job_positions: '',
    //   // reports_to: '',
    //   department: '',
    //   type_of_contract: '',
    //   working_hours: '',
    //   cfale: '',
    //   ale: '',
    //   ala: '',
    //   sort_code: '',
    //   location: '',
    //   probation: '',
    //   confidance: '',
    //   result: '',
    //   comments: '',
    //   behavior: '',
    //   amount: '',
    //   currency: '',
    //   pay_type: '',
    //   payroll: '',
    //   pension: '',
    //   name_of_acc: '',
    //   name_of_bank: '',
    //   acc_num: '',
    // };

    this.searchKey = '';
    this.opening_code = '';
    this.positions$.subscribe(r => {});
  }

  handleJobPosition(e, clickedIndex, isSelected, previousValue) {}

  resetConfirmation() {
    $('#danger-modal').modal('show');
  }

  uploadPassport() {
    const formFile = document.getElementById('formFile1');
    formFile.click();
  }

  valueChange(value) {}

  handleFileInput(event) {
    var _a;

    const files = event.target.files;
    this.fileToUpload = files.item(0);
    let formData = new FormData();
    formData.append('file', this.fileToUpload, (_a = this.fileToUpload) === null || _a === void 0 ? void 0 : _a.name);

    this._fs.upload(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.throwError)(err);
    })).subscribe(f => {
      this.newEmployee.passport = f.file;
    });
  }

  isCheckedEvent(event) {}

  nameSearchChange(event) {// if (event.length > 0) {
    //   const key = (<string>this.country.search).toLowerCase().trim();
    //   this.result = this._us.listOfUsersValue().filter(u => u.firstName.toLowerCase().includes(key) || u.lastName.toLowerCase().includes(key));
    // } else {
    //   this.result = [];
    // }
  }

  updateImageUploaded() {
    const passportEmployeeephotoId = document.getElementById("passportEmployeeephotoId");
    passportEmployeeephotoId.click();
  }

  submit() {
    this.newEmployee.location = this._company.getSessionCompany();
    this.errorMessage = ``;
    let errF = '';

    if (this.isMaster || this.isAdmin) {
      this.assignableRole.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(r => {
        for (const [key, value] of Object.entries(this.newEmployee)) {
          const v = value;

          if (!v || v.length == 0) {
            this.errorMessage += `${key.replace('_', ' ').toUpperCase()} required, `;
            errF += `${key}, `;
          }
        }

        if (this.errorMessage.length > 0) {
          const notification = this._ds.openErrorNotification('Opps..', `Please reconfirm form, these fields: ${errF} might have been left empty by you which is required.`);

          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
            status: '500',
            notification
          });
        } else {
          let user = Object.assign(Object.assign({}, this.newEmployee), {
            role: [this.newEmployee.role],
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            company: this._company.runningCompany.code,
            location: this._company.runningCompany.code,
            status: 'Active'
          });
          return this._us.createUser(user, user.role[0]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.saved = true));
        }
      })).subscribe(r => {
        // this._ds.openSuccessNotification('Employee Created', 'Saving Employee info to the database..');
        this._us.listOfEmpoyees.value.unshift(r.user);

        this._us.listOfEmpoyees.next(this._us.listOfEmpoyees.value);

        if (r.status == '200') {
          this._ds.openSuccessNotification('Employee Created', `${r.user.firstName} ${r.user.lastName} created successfully`);

          this.hasSaved.emit(r.user);
        } else {
          this._ds.oErrorNotification('Opps...', r.response);
        } // this.reset()
        // this.hasSaved.emit(r.user);

      });
    } else {}
  }

  loginnow() {
    this.router.navigate(['auth/login']);
  }

  get job_applications() {
    return this._job_applications.value;
  }

  get applications() {
    var _a;

    const app = (_a = this.job_applications.get(this.opening_code)) === null || _a === void 0 ? void 0 : _a.filter(a => {
      if (this.searchKey.length < 1) {
        return a.status == 'Accepted' || a.status == 'Employed';
      }

      return (a.status == 'Accepted' || a.status == 'Employed') && a.code.toLowerCase().includes(this.searchKey.toLowerCase());
    });

    if (!app) {
      return [];
    }

    return app;
  }

}

CreateComponent.ɵfac = function CreateComponent_Factory(t) {
  return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_2__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_3__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_Index__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__.FileService));
};

CreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CreateComponent,
  selectors: [["app-employee-create"]],
  inputs: {
    role: "role",
    route: "route",
    isRegisterationPage: "isRegisterationPage",
    showTitle: "showTitle",
    loadForm: "loadForm",
    newEmployee: "newEmployee"
  },
  outputs: {
    hasSaved: "hasSaved"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 360,
  vars: 70,
  consts: [[1, "row"], ["class", "col-12 p-2 mb-2", 4, "ngIf"], [1, "col-md-12", "p-2", "mb-2", 3, "ngClass"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [3, "id"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "href"], [1, "num"], [1, "tab-content", "mCustomScrollbar"], ["id", "step-1", "role", "tabpanel", "aria-labelledby", "step-1", 1, "tab-pane", "mCustomScrollbar"], [1, "customscroll"], [1, "col-md-3"], [1, "form-group", 3, "ngClass"], [1, "custom-file"], ["type", "file", "name", "file", "id", "passportEmployeeephotoId", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], ["class", "form-group pb-2", 4, "ngIf"], ["class", "card-box height-100-p pd-20 min-height-200px", 4, "ngIf"], [1, "card", "card-box", 3, "ngClass"], ["alt", "Employee Passport & Profile photo", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "weight-500"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "text-center", 3, "click"], [1, "col-md-9"], [1, "col-md-4"], [1, "form-group"], [1, "text-danger"], ["type", "text", "readonly", "", "name", "code", "placeholder", "Employee ID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "firstName", "placeholder", "First name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "placeholder", "Last name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "phone", "placeholder", "Phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "dob", "placeholder", "Select Date", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["name", "gender", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Female"], ["name", "marital_status", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "single"], ["value", "married"], ["value", "domestic partnership"], ["type", "text", "name", "country", "placeholder", "Search Country", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "state", "placeholder", "State", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "city", "placeholder", "City", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "address", "placeholder", "Address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "step-2", "role", "tabpanel", "aria-labelledby", "step-2", 1, "tab-pane", "mCustomScrollbar"], ["data-size", "5", "data-style", "btn-outline-secondary", "multiple", "", "data-max-options", "30", 3, "ngModel", "ngModelChange"], ["label", "Positions"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "job_title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "department", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "date_of_employment", "placeholder", "Select Date", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["name", "type_of_contract", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Fixed"], ["value", "Full-time"], ["value", "Contract"], ["value", "Part-time"], ["value", "Intern"], ["type", "number", "name", "working_hours", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "cfale", "value", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ale", "value", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ala", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "probation", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Yes"], ["value", "No"], ["id", "step-3", "role", "tabpanel", "aria-labelledby", "step-3", 1, "tab-pane", "mCustomScrollbar"], ["type", "text", "name", "amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "currency", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], ["value", "Dollars"], ["value", "Pounds"], ["value", "Naira"], ["name", "pay_type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "payroll", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["type", "text", "placeholder", "Select Date", "name", "name_of_acc", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["placeholder", "Select time", "type", "text", "name", "name_of_bank", 1, "form-control", "time-picker", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Select Date", "name", "acc_num", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["placeholder", "Select time", "type", "text", "name", "sort_code", 1, "form-control", "time-picker", 3, "ngModel", "ngModelChange"], ["name", "pension", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "step-4", "role", "tabpanel", "aria-labelledby", "step-4", 1, "tab-pane", "mCustomScrollbar"], ["type", "text", "name", "behavior", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "confidance", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "result", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Approved", "selected", ""], ["value", "Rejected"], ["name", "comments", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "btn", "btn-success", "d-none", 3, "id", "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "0%"], ["class", "col-md-12 p-2 mb-2 text-center", 3, "ngClass", 4, "ngIf"], ["id", "danger-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "Are you sure?", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "font-18"], [1, "mb-20"], [1, "mb-30", "text-center"], [1, "font-18"], [1, "icon-copy", "bi", "bi-trash-fill"], [1, "icon-copy", "bi", "bi-question-lg"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "p-2", "mb-2"], ["value", "primary", 3, "ngModel", "ngModelChange"], ["role", "alert", 1, "alert", "alert-danger"], [1, "form-group", "pb-2"], ["name", "opening_code", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value"], ["type", "text", "name", "applicant", "placeholder", "Job Applicant Code", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-box", "height-100-p", "pd-20", "min-height-200px"], [1, "d-flex", "justify-content-between", "pb-10"], [1, "h6", "mb-0"], [1, "dropdown"], ["data-color", "#1b3133", "href", "javascript:void(0)", "role", "button", "data-toggle", "dropdown", 1, "btn", "btn-link", "font-24", "p-0", "line-height-1", "no-arrow", "dropdown-toggle", 2, "color", "rgb(27, 49, 51)"], [1, "dw", "dw-more"], [1, "user-list", "min-height-200px"], [1, "scroll"], ["class", "d-flex align-items-center justify-content-between", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "name-avatar", "d-flex", "align-items-center", "pr-2"], [1, "txt"], ["data-bgcolor", "#e7ebf5", "data-color", "#265ed7", 1, "badge", "badge-pill", "badge-sm", 2, "color", "rgb(38, 94, 215)", "background-color", "rgb(231, 235, 245)"], ["data-bgcolor", "#e7ebf5", "data-color", "#265ed7", 1, "badge", "badge-pill", "badge-sm", 2, "color", "rgb(89, 140, 249)", "background-color", "rgb(45, 92, 211)"], [1, "font-14", "weight-600"], ["data-color", "#b2b1b6", 1, "font-12", "weight-500", 2, "color", "rgb(178, 177, 182)"], [1, "cta", "flex-shrink-0"], ["href", "javascript:void(0)", "type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [4, "ngIf"], ["data-size", "5", "data-style", "btn-outline-secondary", "multiple", "", "data-max-options", "30", 3, "class", "ngModel", "ngModelChange", 4, "ngIf"], ["label", "App Roles"], [1, "col-md-12", "p-2", "mb-2", "text-center", 3, "ngClass"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "mb-3", "d-none"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", 1, "form-control"]],
  template: function CreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CreateComponent_div_1_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CreateComponent_div_2_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CreateComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Personal Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Employment Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " Salary Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Remark ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Upload Passport");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_36_listener($event) {
        return ctx.handleFileInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Choose file");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, CreateComponent_div_39_Template, 8, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, CreateComponent_div_40_Template, 4, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, CreateComponent_div_41_Template, 14, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "h5", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Passport Uploaded");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_a_click_47_listener() {
        return ctx.updateImageUploaded();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Change");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Employee ID: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.valueChange($event);
      })("ngModelChange", function CreateComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.newEmployee.code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_64_listener($event) {
        return ctx.newEmployee.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_71_listener($event) {
        return ctx.newEmployee.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "First Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_78_listener($event) {
        return ctx.newEmployee.firstName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Last Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_85_listener($event) {
        return ctx.newEmployee.lastName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "Phone Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_92_listener($event) {
        return ctx.newEmployee.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "Date of Birth: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_99_listener($event) {
        return ctx.newEmployee.dob = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "Gender: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "select", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_106_listener($event) {
        return ctx.newEmployee.gender = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "Male");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "Female");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "Marital Status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "select", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_117_listener($event) {
        return ctx.newEmployee.marital_status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "Select Marital Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "married");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "domestic partnership");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "Country: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_132_listener($event) {
        return ctx.newEmployee.country = $event;
      })("ngModelChange", function CreateComponent_Template_input_ngModelChange_132_listener($event) {
        return ctx.nameSearchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "State: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_139_listener($event) {
        return ctx.newEmployee.state = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143, "City: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_146_listener($event) {
        return ctx.newEmployee.city = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](150, "Full House Address: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_153_listener($event) {
        return ctx.newEmployee.address = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "Job Positions: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162, "(min 1)*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "select", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_163_listener($event) {
        return ctx.newEmployee.job_positions = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "optgroup", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](165, CreateComponent_option_165_Template, 2, 2, "option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](166, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "Job Title: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](172, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](173, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_173_listener($event) {
        return ctx.newEmployee.job_title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "Department: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "select", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_180_listener($event) {
        return ctx.newEmployee.department = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](181, CreateComponent_option_181_Template, 2, 2, "option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](182, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](186, "Date of Employment: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_189_listener($event) {
        return ctx.newEmployee.date_of_employment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "Type of contract: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "select", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_196_listener($event) {
        return ctx.newEmployee.type_of_contract = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, "Full-time");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, "Contract");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "Part-time");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206, "Intern");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210, "Working Hours: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "/ day*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_213_listener($event) {
        return ctx.newEmployee.working_hours = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](217, "Company Full-time annual leave entitlement: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_220_listener($event) {
        return ctx.newEmployee.cfale = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "General Annual leave entitlement: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_227_listener($event) {
        return ctx.newEmployee.ale = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "Annual leave allowance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_232_listener($event) {
        return ctx.newEmployee.ala = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](233, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "Probation required:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](237, "select", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_237_listener($event) {
        return ctx.newEmployee.probation = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](239, "Probation required?");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](245, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](248, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](250, "Amount :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](251, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_251_listener($event) {
        return ctx.newEmployee.amount = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](253, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "Currency (Paying In?) :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "select", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_256_listener($event) {
        return ctx.newEmployee.currency = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](257, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](258, "Select Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](259, "option", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](260, "Dollars");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](261, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "Pounds");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](263, "option", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](264, " Naira ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](265, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](267, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](268, "Pay Type :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](269, "select", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_269_listener($event) {
        return ctx.newEmployee.pay_type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](271, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](273, "Hourly");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](274, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](275, " commission only ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](276, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](277, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](278, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](279, "Payroll Number :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](280, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_280_listener($event) {
        return ctx.newEmployee.payroll = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](281, "div", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](282, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](283, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](284, "Name on account :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](285, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_285_listener($event) {
        return ctx.newEmployee.name_of_acc = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](287, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](288, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](289, "Name of Bank :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](290, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_290_listener($event) {
        return ctx.newEmployee.name_of_bank = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](291, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](292, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](293, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](294, "Account Num :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](295, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_295_listener($event) {
        return ctx.newEmployee.acc_num = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](296, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](297, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](298, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](299, "Sort Code :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](300, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_300_listener($event) {
        return ctx.newEmployee.sort_code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](301, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](302, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](303, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](304, "Pension Eligible :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](305, "select", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_305_listener($event) {
        return ctx.newEmployee.pension = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](306, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](307, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](308, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](309, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](310, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](311, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](312, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](313, "div", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](314, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](315, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](316, "Behaviour :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](317, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_317_listener($event) {
        return ctx.newEmployee.behavior = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](318, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](319, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](320, "Confidance");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](321, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_321_listener($event) {
        return ctx.newEmployee.confidance = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](322, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](323, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](324, "Qualification Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](325, "select", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_325_listener($event) {
        return ctx.newEmployee.result = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](326, "option", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](327, "Approved");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](328, "option", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](329, "Rejected");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](330, "div", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](331, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](332, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](333, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](334, "textarea", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_textarea_ngModelChange_334_listener($event) {
        return ctx.newEmployee.comments = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](335, CreateComponent_div_335_Template, 5, 6, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](336, "button", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_336_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](337, "Force Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](338, "button", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_338_listener() {
        return ctx.resetConfirmation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](339, "Force Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](340, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](341, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](342, CreateComponent_div_342_Template, 9, 3, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](343, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](344, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](345, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](346, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](347, "h3", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](348, "Are you sure?");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](349, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](350, "span", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](351, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](352, "span", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](353, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](354, " You are about to clear all existing values in the form field, including including any uploaded file ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](355, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](356, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](357, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](358, "button", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_358_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](359, " Yes, Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isRegisterationPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](64, _c0, ctx.isChecked));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "smartwizard-user-new-", ctx.newEmployee.code, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-1", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-2", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-3", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-4", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](66, _c0, ctx.newEmployee.passport));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isRegisterationPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.opening_code && !ctx.isRegisterationPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.opening_code && !ctx.isRegisterationPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](68, _c0, !ctx.newEmployee.passport));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.newEmployee.passport, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.firstName);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.lastName);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.dob);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.gender);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.marital_status);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.country);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.city);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("selectpicker-new-emp-position-", ctx.newEmployee == null ? null : ctx.newEmployee.code, " form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.job_positions);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](166, 60, ctx.positions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.job_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.department);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](182, 62, ctx.departments$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.date_of_employment);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.type_of_contract);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.working_hours);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.cfale);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.ale);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.ala);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.probation);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.pay_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.payroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.name_of_acc);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.name_of_bank);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.acc_num);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.sort_code);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.pension);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.behavior);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.confidance);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.result);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.comments);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isRegisterationPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "createEmployeeSubmitBtnHidden", ctx.formId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "resetEmployeeFormBtnHidden", ctx.formId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isChecked);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.SelectMultipleControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggle],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
  styles: [".card-img-top[_ngcontent-%COMP%] {\n  height: 200px !important;\n}\n\n.mat-list-text[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.min-height-200px[_ngcontent-%COMP%] {\n  max-height: 220px !important;\n}\n\n.min-height-300[_ngcontent-%COMP%] {\n  min-height: 300px !important;\n}\n\n.tab-pane[_ngcontent-%COMP%] {\n  min-height: 450px !important;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.mx-h-350[_ngcontent-%COMP%] {\n  max-height: 500px !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  max-height: 500px !important;\n  min-height: 300px !important;\n  padding-top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSw0QkFBQTtBQUdKOztBQURBO0VBQ0ksNEJBQUE7QUFJSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtBQUlKOztBQURBO0VBQ0ksNEJBQUE7QUFJSjs7QUFEQTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUlKIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3B7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1saXN0LXRleHR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1pbi1oZWlnaHQtMjAwcHh7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5taW4taGVpZ2h0LTMwMHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWItcGFuZXtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGx7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5teC1oLTM1MHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 3528:
/*!**********************************************************************!*\
  !*** ./src/app/admin/employee/department/create/create.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 8417);








function CreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Search By First / Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_34_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.newDepartment.search = $event; })("ngModelChange", function CreateComponent_div_34_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.nameSearchChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.newDepartment.search);
} }
function CreateComponent_div_35_mat_list_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_div_35_mat_list_option_4_Template_mat_list_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const user_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.newDepartment.user = user_r7; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", user_r7 == null ? null : user_r7.firstName, " ", user_r7 == null ? null : user_r7.lastName, " ");
} }
function CreateComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-selection-list", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CreateComponent_div_35_mat_list_option_4_Template, 2, 2, "mat-list-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", "#010d2a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Options selected: ", _r5.selectedOptions.selected.length, " ");
} }
class CreateComponent {
    constructor(_us, _deptService, companyService) {
        this._us = _us;
        this._deptService = _deptService;
        this.companyService = companyService;
        this.newDepartment = {
            name: '',
            code: '',
            search: '',
            user: null,
            assign: true
        };
        this.result = [];
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.department = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    save(event) {
        event.preventDefault();
        const submitedAt = new Date(Date.now());
        const newDepartment = {
            name: this.newDepartment.name,
            code: this.newDepartment.code,
            created_at: submitedAt,
            updated_at: submitedAt,
            hod: null,
            status: 'Active',
            company: this.companyService.runningCompany.code
        };
        if (this.newDepartment.user) {
            newDepartment.hod = this.newDepartment.user.id;
        }
        // this.department.emit(this.newDepartment);
        this._deptService.add(newDepartment).subscribe(res => $('#create-department-modal').modal('hide'));
        // $('#create-department-modal').modal('hide');
        // const closeAddCompanyModal:any = document.getElementById('closeAddCompanyModal');
        //
        // if(this.newDepartment.name){
        //   closeAddCompanyModal.click();
        // }
    }
    nameSearchChange(event) {
        const key = this.newDepartment.search.toLowerCase().trim();
        this.result = this._us.listOfUsersValue().filter(u => u.firstName.toLowerCase().includes(key) || u.lastName.toLowerCase().includes(key));
    }
    handlePassportUpload(event) {
    }
    toggleAssign(event) {
    }
    closeModal() {
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService)); };
CreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-department-create"]], outputs: { department: "department" }, decls: 45, vars: 5, consts: [["href", "javascript:void()", "rel", "content-y", "data-toggle", "collapse", "role", "button", "aria-expanded", "true", "data-backdrop", "static", "data-toggle", "modal", "data-target", "#create-department-modal", "type", "button", 1, "btn", "btn-primary", "btn-sm", "scroll-click"], [1, "fa", "fa-plus"], [1, "ml-2"], ["id", "create-department-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "row"], [1, "col-12"], [1, "p-4"], [1, "login-title"], [1, "text-center", "text-primary"], [1, "form-group", "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-form-label"], [1, "text-danger"], [1, "col-sm-12", "col-md-12", "col-lg-12"], ["name", "code", "type", "text", "placeholder", "Department ID/Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "name", "type", "text", "placeholder", "Department name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "pb-30"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "assign", "name", "assign", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "assign", 1, "custom-control-label"], ["class", "form-group row", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-sm-6", "p-2"], [1, "input-group", "mb-0"], ["type", "button", "href", "javascript:void()", 1, "btn", "btn-success", "btn-block", "btn-sm", 3, "click"], ["type", "button", "data-dismiss", "modal", "id", "closeAddCompanyModal", "href", "javascript;;", 1, "btn", "btn-danger", "btn-block", "btn-sm", 3, "click"], ["name", "search", "type", "text", "placeholder", "Search for user by first or last name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], [3, "multiple"], ["shoes", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " New Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_20_listener($event) { return ctx.newDepartment.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newDepartment.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_31_listener($event) { return ctx.newDepartment.assign = $event; })("click", function CreateComponent_Template_input_click_31_listener($event) { return ctx.toggleAssign($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Assign Head Of Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CreateComponent_div_34_Template, 5, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CreateComponent_div_35_Template, 7, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_Template_a_click_39_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_Template_a_click_43_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newDepartment.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newDepartment.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newDepartment.assign);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.newDepartment.assign);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.newDepartment.assign);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListOption], styles: [".mat-list-text[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWxpc3QtdGV4dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });


/***/ }),

/***/ 4353:
/*!********************************************************************!*\
  !*** ./src/app/admin/employee/department/index/index.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/list.component */ 8868);







const _c0 = function () { return ["/admin/employee/all"]; };
class IndexComponent {
    constructor(_deptService) {
        this._deptService = _deptService;
        this.departments = 0;
    }
    ngOnInit() {
        this._deptService.departments$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(d => d.length))
            .subscribe(d => this.departments = d);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_0__.DepartmentService)); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 75, vars: 3, consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "col-lg-12", "col-md-12", "col-sm-12", "mb-30"], [1, "pd-20", "card-box"], [1, "tab"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#schheduleAttendance", "role", "tab", "aria-selected", "false", 1, "nav-link", "text-blue", "active"], [1, "tab-content"], ["id", "home", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "schheduleAttendance", "role", "tabpanel", 1, "tab-pane", "fade", "active", "show"], [1, "row", "pd-20"], [1, "font-24", "weight-500", "mb-10"], [1, "col-md-6"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(69 112 134)"], [1, "d-flex", "justify-content-between", "pb-20", "text-white"], [1, "icon", "h1", "text-white"], [1, "font-14", "text-right"], [1, "font-12"], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "text-white"], [1, "font-14"], [1, "font-24", "weight-500"], [1, "max-width-150", 2, "position", "relative"], ["data-bgcolor", "#455a64", 1, "card-box", "min-height-200px", "pd-20", "mb-20", 2, "background-color", "rgb(37 79 157)"], ["href", "#javascript:void()", 1, "text-white"], ["mat-raised-button", "", "color", "primary", 1, "mr-2", "bg-pry"], [1, "col-12"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "All Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "nature_people");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " 200 Male Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " 100 Female Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Total Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " person_pin_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Export Your Department Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Export Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "fiber_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "app-department-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.departments);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8868:
/*!******************************************************************!*\
  !*** ./src/app/admin/employee/department/list/list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/create.component */ 3528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);






function ListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", department_r1 == null ? null : department_r1.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](department_r1 == null ? null : department_r1.name);
} }
class ListComponent {
    constructor(_deptService, activatedRoute) {
        this._deptService = _deptService;
        this.activatedRoute = activatedRoute;
        this.departments = [];
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe();
        this._deptService.departments$.subscribe(d => this.departments = d);
    }
    departmentEvent(evt) {
        this.departments.unshift(evt);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_0__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-department-list"]], decls: 25, vars: 1, consts: [[1, "card-box", "pb-10"], [1, "clearfix", "mb-20", "pd-20"], [1, "pull-left"], [1, "h5", "mb-0"], [1, "pull-right"], [3, "department"], [1, "row"], [1, "col-md-12", "container-fluid"], [1, "table-responsive", "p-2"], [1, "data-table", "table", "nowrap"], [1, "table-plus"], [4, "ngFor", "ngForOf"], [1, "padleft"], ["href", "javascript:void()", "rel", "content-y", "data-toggle", "collapse", "role", "button", "aria-expanded", "true", "type", "button", 1, "btn", "btn-primary", "btn-sm", "scroll-click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "List Of Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-department-create", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("department", function ListComponent_Template_app_department_create_department_6_listener($event) { return ctx.departmentEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " #");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Head Of Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ListComponent_tr_24_Template, 13, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.departments);
    } }, directives: [_create_create_component__WEBPACK_IMPORTED_MODULE_1__.CreateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: [".padleft[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkbGVmdHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 2320:
/*!***********************************************************!*\
  !*** ./src/app/admin/employee/employee-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeRoutingModule": () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ 7918);
/* harmony import */ var _department_index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department/index/index.component */ 4353);
/* harmony import */ var _department_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department/create/create.component */ 3528);
/* harmony import */ var _department_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department/list/list.component */ 8868);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ 4562);
/* harmony import */ var src_app_shared_resolvers_company_department_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/resolvers/company/department.resolver */ 8654);
/* harmony import */ var src_app_shared_resolvers_user_user_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/resolvers/user/user.resolver */ 7881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent
    },
    {
        path: 'all',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent,
        data: { tab: 'View' },
        resolve: {
            fromResolverUser: src_app_shared_resolvers_user_user_resolver__WEBPACK_IMPORTED_MODULE_6__.UserResolver
        },
    },
    {
        path: 'create',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent,
        data: { tab: 'Create' }
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent
    },
    {
        path: 'department',
        component: _department_index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent,
        resolve: [src_app_shared_resolvers_company_department_resolver__WEBPACK_IMPORTED_MODULE_5__.DepartmentResolver]
    },
    {
        path: 'department/create',
        component: _department_create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent
    },
    {
        path: 'department/list',
        component: _department_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
        resolve: [src_app_shared_resolvers_company_department_resolver__WEBPACK_IMPORTED_MODULE_5__.DepartmentResolver]
    },
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 392:
/*!***************************************************!*\
  !*** ./src/app/admin/employee/employee.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeModule": () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 2320);
/* harmony import */ var _department_index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department/index/index.component */ 4353);
/* harmony import */ var _department_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department/create/create.component */ 3528);
/* harmony import */ var _department_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department/list/list.component */ 8868);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ 7918);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ 6771);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ 4562);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ 4932);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/update.component */ 4660);
/* harmony import */ var _mail_mail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mail/mail.module */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);













class EmployeeModule {
}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule,
            _mail_mail_module__WEBPACK_IMPORTED_MODULE_10__.MailModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_department_index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent,
        _department_create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent,
        _department_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
        _create_create_component__WEBPACK_IMPORTED_MODULE_5__.CreateComponent,
        _index_index_component__WEBPACK_IMPORTED_MODULE_4__.IndexComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_6__.ListComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_8__.ViewComponent,
        _update_update_component__WEBPACK_IMPORTED_MODULE_9__.UpdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule,
        _mail_mail_module__WEBPACK_IMPORTED_MODULE_10__.MailModule], exports: [_create_create_component__WEBPACK_IMPORTED_MODULE_5__.CreateComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_8__.ViewComponent] }); })();


/***/ }),

/***/ 7918:
/*!*********************************************************!*\
  !*** ./src/app/admin/employee/index/index.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/list.component */ 4562);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/create.component */ 6771);







const _c0 = function () { return ["/admin/employee/all"]; };
const _c1 = function (a0) { return { "active": a0 }; };
const _c2 = function (a0, a1, a2) { return { "active": a0, "show": a1, "d-none": a2 }; };
class IndexComponent {
    constructor(location, _formBuilder, router, route) {
        this.location = location;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.route = route;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
        this.tab = 'View';
        this.url = '';
        this.loadForm = false;
    }
    ngOnInit() {
        this.route
            .data
            .subscribe(v => {
            this.tab = v.tab;
            this.url = this.router.url;
            if (this.tab == 'Create' && !this.loadForm) {
                this.loadForm = true;
                if ((this.url.match(/step/g) || []).length > 1) {
                    this.location.replaceState(`admin/employee/create#createEmployee`);
                }
            }
        });
    }
    goto(url, tab) {
        this.tab = tab;
        this.location.replaceState(`/admin/employee/${url}`);
        if (this.tab == 'Create') {
            this.loadForm = true;
            if ((this.url.match(/step/g) || []).length > 1) {
                this.location.replaceState(`admin/employee/create#createEmployee`);
            }
        }
        else {
            this.loadForm = false;
        }
    }
    hasSavedEvent(event) {
        this.goto('all#viewEmployee', 'View');
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 32, vars: 19, consts: [[1, "page-header"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "title"], ["aria-label", "breadcrumb", "role", "navigation"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void()", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-12", "pd-20", "pt-10"], [1, "card", "card-box", "m-2"], [1, "card-body"], [1, "tab"], ["role", "tablist", 1, "nav", "nav-tabs", "customtab"], [1, "nav-item"], ["data-toggle", "tab", "href", "admin/employee/all#viewEmployee", "role", "tab", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "click"], ["data-toggle", "tab", "href", "admin/employee/create#createEmployee", "role", "tab", "aria-selected", "false", 1, "nav-link", 3, "ngClass", "click"], [1, "tab-content", "mCustomScrollbar"], ["id", "viewEmployee", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [1, "pd-20"], ["id", "createEmployee", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [3, "loadForm", "hasSaved"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_20_listener() { return ctx.goto("all#viewEmployee", "View"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_23_listener() { return ctx.goto("create#createEmployee", "Create"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "app-employee-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "app-employee-create", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("hasSaved", function IndexComponent_Template_app_employee_create_hasSaved_31_listener($event) { return ctx.hasSavedEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx.tab == "View"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, ctx.tab == "Create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](11, _c2, ctx.tab == "View", ctx.tab == "View", ctx.tab != "View"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](15, _c2, ctx.tab == "Create", ctx.tab == "Create", ctx.tab != "Create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loadForm", ctx.loadForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_1__.CreateComponent], styles: [".mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 4562:
/*!*******************************************************!*\
  !*** ./src/app/admin/employee/list/list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view.component */ 4932);












function ListComponent_ng_container_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r9.translate(column_r8)), " ");
  }
}

function ListComponent_ng_container_4_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_container_4_td_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, element_r12[column_r8]), " ");
  }
}

function ListComponent_ng_container_4_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_ng_container_4_td_2_Template_td_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const element_r12 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r17.dropingDown(element_r12, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListComponent_ng_container_4_td_2_span_1_Template, 5, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListComponent_ng_container_4_td_2_span_2_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r8 == "public_url" || column_r8 == "private_url");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r8 != "public_url" && column_r8 != "private_url");
  }
}

function ListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListComponent_ng_container_4_th_1_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListComponent_ng_container_4_td_2_Template, 3, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matColumnDef", column_r8);
  }
}

function ListComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ListComponent_td_7_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ListComponent_td_7_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ListComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_td_7_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const element_r20 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r23.dropingDown(element_r20, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListComponent_td_7_mat_icon_2_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListComponent_td_7_mat_icon_3_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.expandedElement !== element_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.expandedElement === element_r20);
  }
}

function ListComponent_td_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-employee-view", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updatedUser", function ListComponent_td_9_div_14_Template_app_employee_view_updatedUser_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const element_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r28.updatedUserEventHandler($event, element_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("employee", ctx_r27.expandedElement);
  }
}

function ListComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Employee Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ListComponent_td_9_div_14_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r3.columnsToDisplayWithExpand.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", element_r25 == ctx_r3.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.expandedElement && element_r25.code == ctx_r3.expandedElement.code);
  }
}

function ListComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 36);
  }
}

function ListComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_tr_11_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const element_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r32.expandedElement = ctx_r32.expandedElement === element_r31 ? null : element_r31;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("example-expanded-row", ctx_r5.expandedElement === element_r31);
  }
}

function ListComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 38);
  }
}

function ListComponent_div_13_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No user found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListComponent_div_13_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const users_r35 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", users_r35.length < 1);
  }
}

const _c0 = function () {
  return ["expandedDetail"];
};

class ListComponent {
  constructor(_us, location) {
    this._us = _us;
    this.location = location;
    this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this.users$ = this._us.getEmployees({
      _sort: "created_at",
      _order: 'desc',
      _limit: 500
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(r => {
      this.users = r;
      return r;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
    this.users = [];
    this.p = 0;
    this.appFetchStatus = 'Yet';
    this.columnsToDisplay = ['code', 'firstName', 'lastName', 'gender', 'dob', 'department', 'status'];
    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    this.expandedElement = null;
  }

  ngOnInit() {
    this.users$.subscribe(r => this.dataSource.next(r));
  }

  translate(key) {
    return `${key.replace('_', ' ')}`;
  }

  copied(url) {// let opt = {...this._ds.toastOptions, theClass: 'welcome-modal', timeOut:3000 };
    // this._ds.oSuccessNotification('Copied Job Opening URL', `${url} copied to clipboard.`, opt);
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

  getCurrentApplication() {// if(this.expandedElement){
    //   const jobApps = this._js.job_applications.value;
    //   this.appFetchStatus = 'Fetching job applications...'
    //   this._js.getJobOpeningApplicationsApi(this.expandedElement.code).subscribe(applications=>this.appFetchStatus = 'Loaded'
    //   )
    // }
  }

  updatedUserEventHandler(event, element) {
    this.expandedElement = Object.assign(Object.assign({}, this.expandedElement), event);
    const previousList = this.users;
    const indexOfChanged = previousList.findIndex(u => u.code == event.code);

    if (indexOfChanged > -1) {
      previousList.splice(indexOfChanged, 1);
    }

    previousList.unshift(this.expandedElement);
    this.dataSource.next(previousList);
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-employee-list"]],
  decls: 18,
  vars: 13,
  consts: [[1, "row"], [1, "col-md-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expand"], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center p-2", 4, "ngIf"], [1, "col-md-12", "text-right"], ["aria-label", "Select page of Employee List search results", 3, "length", "pageSize"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], [4, "ngIf"], ["title", "Preview In New Tab", 1, "p-2", "pointer"], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "expand row", 3, "click"], [1, "example-element-detail"], [1, "card", "card-box", "m-2"], [1, "card-header"], [1, "col-md-9"], [1, "text-primary", "pt-4"], [1, "col-md-3", "text-right"], [1, "p-2", "text-right"], [1, "btn", "btn-sm", "btn-primary"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [3, "employee", "updatedUser"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], [1, "text-center", "p-2"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListComponent_ng_container_4_Template, 3, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ListComponent_th_6_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ListComponent_td_7_Template, 4, 2, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ListComponent_td_9_Template, 15, 3, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ListComponent_tr_10_Template, 1, 0, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ListComponent_tr_11_Template, 1, 2, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListComponent_tr_12_Template, 1, 0, "tr", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ListComponent_div_13_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mat-paginator", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplayWithExpand);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplayWithExpand);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 8, ctx.dataSource));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 10, ctx.dataSource)) == null ? null : tmp_6_0.length)("pageSize", 10);
    }
  },
  directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _view_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe],
  styles: ["td[_ngcontent-%COMP%] {\n  max-width: 100px;\n  word-break: break-all;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  background-color: #021645 !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #0f5d91;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #0f69a5;\n}\n\n.pointer[_ngcontent-%COMP%]:hover {\n  color: #0f69a5;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.masy[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-top: 5px;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-expanded-row[_ngcontent-%COMP%] {\n  background: #1a5799;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7QUFHSjs7QUFBRTtFQUNFLFNBQUE7QUFHSjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBQUU7RUFDRSxtQkFBQTtBQUdKOztBQURFO0VBQ0UsY0FBQTtBQUlKOztBQUZFO0VBQ0Usc0JBQUE7QUFLSjs7QUFGRTtFQUNFLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUhFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFNSjs7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSEU7RUFDRSxhQUFBO0FBTUo7O0FBSEU7RUFDRSxtQkFBQTtBQU1KOztBQUhFO0VBQ0UsWUFBQTtBQU1KIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLm1hdC1lbGV2YXRpb24tejh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxNjQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNSwgOTMsIDE0NSk7XHJcbiAgfVxyXG5cclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGY2OWE1O1xyXG4gIH1cclxuICAucG9pbnRlcjpob3ZlcntcclxuICAgIGNvbG9yOiAjMGY2OWE1O1xyXG4gIH1cclxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm1hc3l7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtZXhwYW5kZWQtcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICMxYTU3OTk7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiJdfQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      height: '0px',
      minHeight: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
  }
});

/***/ }),

/***/ 4660:
/*!***********************************************************!*\
  !*** ./src/app/admin/employee/update/update.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateComponent": () => (/* binding */ UpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/client/device.service */ 2899);
/* harmony import */ var src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/department/department.service */ 4441);
/* harmony import */ var src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/client/scripts.service */ 5947);
/* harmony import */ var src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/recruitment/job.service */ 3789);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/company/company.service */ 7613);
/* harmony import */ var src_app_shared_services_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/Index */ 9237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/client/file.service */ 916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
















function UpdateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Update Info # ", ctx_r0.newEmployee == null ? null : ctx_r0.newEmployee.id, "");
  }
}

function UpdateComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}

function UpdateComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Search Job Applicant Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_div_63_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r7.changeSerarchKey($event);
    })("ngModelChange", function UpdateComponent_div_63_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r9.searchKey = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.searchKey);
  }
}

function UpdateComponent_div_64_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateComponent_div_64_li_11_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const app_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r12.load(app_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const app_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](app_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](", ", app_r11.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", app_r11.firstName, " ", app_r11.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", app_r11.code, " ");
  }
}

function UpdateComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Search Result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ul", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UpdateComponent_div_64_li_11_Template, 14, 5, "li", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", ctx_r3.applications.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.applications);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.status, " ");
  }
}

function UpdateComponent_select_186_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pos_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", pos_r16.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](pos_r16.title);
  }
}

function UpdateComponent_select_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "select", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_select_186_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r17.newEmployee.job_positions = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "optgroup", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UpdateComponent_select_186_option_2_Template, 2, 2, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const position_r14 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("selectpicker-update-position-", ctx_r4.newEmployee == null ? null : ctx_r4.newEmployee.code, " form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("size", ctx_r4.newEmployee.job_positions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r4.newEmployee.job_positions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", position_r14);
  }
}

function UpdateComponent_option_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const dept_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", dept_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](dept_r19.name);
  }
}

const _c0 = function (a0) {
  return {
    "d-none": a0
  };
};

function UpdateComponent_div_364_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Bulk Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateComponent_div_364_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r20.clickedUploadFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, !ctx_r6.isChecked));
  }
}

class UpdateComponent {
  constructor(_ds, _depServ, _script, _js, _us, changeDetect, _company, auth, changeDetRef, router, _fs) {
    this._ds = _ds;
    this._depServ = _depServ;
    this._script = _script;
    this._js = _js;
    this._us = _us;
    this.changeDetect = changeDetect;
    this._company = _company;
    this.auth = auth;
    this.changeDetRef = changeDetRef;
    this.router = router;
    this._fs = _fs;
    this.role = '';
    this.showTitle = false;
    this.loadForm = false;
    this.smartwizardupdateEmployee = null;
    this.fileToUpload = null;
    this.searchKey = '';
    this.status = '';
    this.status_update = '';
    this.opening_code = null;
    this.formStep = 0;
    this.isChecked = false;
    this.isLinear = true;
    this.url = '';
    this.saved = false;
    this.message = '';
    this.errorMessage = '';
    this.country = {
      search: ''
    };
    this.newEmployee = {
      code: '',
      firstName: '',
      lastName: '',
      gender: '',
      marital_status: '',
      country: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      date_of_employment: '',
      dob: '',
      email: '',
      password: '',
      passport: '',
      role: '',
      job_title: '',
      job_positions: '',
      // reports_to: '',
      department: '',
      type_of_contract: '',
      working_hours: '',
      cfale: '',
      ale: '',
      ala: '',
      sort_code: '',
      location: '',
      probation: '',
      confidance: '',
      result: '',
      comments: '',
      behavior: '',
      amount: '',
      currency: '',
      pay_type: '',
      payroll: '',
      pension: '',
      name_of_acc: '',
      name_of_bank: '',
      acc_num: ''
    };
    this.totalFields = 36;
    this.positions$ = this._js.getJobPositionsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(r => {
      this.changeDetect.detectChanges();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)());
    this.departments$ = this._depServ.getDepartmentsApi$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)());
    this._job_applications = this._js.job_applications;
    this.assignableRole = this._us.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(roles => {
      return roles.filter(r => r.name != 'Master');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(r => {
      var _a;

      this.newEmployee.role = (_a = r.find(_r => _r.name == 'Staff')) === null || _a === void 0 ? void 0 : _a.name;
    }));
    this.hasSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.result = [];
    this.employeeClone = null;
  }

  ngOnChanges(changes) {
    var _a, _b;

    if (this.newEmployee) {
      this.employeeClone = Object.assign({}, this.newEmployee);

      if (changes.loadForm.currentValue) {
        this.smartwizardupdateEmployee = $(`#smartwizardupdateEmployee${this.newEmployee.code}`);
        this.smartwizardupdateEmployee.smartWizard({
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
            <button class="btn btn-danger" onclick="clickId('resetEmployeeFormBtnHidden')">Reset</button>
            <button class="btn btn-success" id="canisubmit64${(_a = this.newEmployee) === null || _a === void 0 ? void 0 : _a.code}" onclick="clickId('createEmployeeSubmitBtnHidden${(_b = this.newEmployee) === null || _b === void 0 ? void 0 : _b.code}')">
            Update</button>` // Extra html to show on toolbar

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
          getContent: (idx, stepDirection, stepPosition, selStep, callback) => this.provideContent(idx, stepDirection, stepPosition, selStep, callback) // Callback function for content loading

        });
        this.smartwizardupdateEmployee.smartWizard("reset");
        this.smartwizardupdateEmployee.on("loaded", e => {
          this.load(this.newEmployee);
        });
      }
    }
  }

  ngAfterViewInit() {}

  ngOnInit() {
    this.url = this.router.url;
  }

  provideContent(idx, stepDirection, stepPosition, selStep, callback) {
    var _a;

    this.formStep = idx;
    const canisubmit64 = document.getElementById("canisubmit64" + ((_a = this.newEmployee) === null || _a === void 0 ? void 0 : _a.code)); // You can use stepDirection to get ajax content on the forward movement and stepPosition to identify the step position

    if (stepDirection == 'forward' && stepPosition == 'middle') {
      let ajaxURL = "YOUR AJAX URL";
    }

    if (this.formStep == 3) {
      canisubmit64.classList.remove('d-none');
    } else {
      canisubmit64.classList.add('d-none');
    } // The callback must called in any case to procced the steps
    // The empty callback will not apply any dynamic contents to the steps


    callback();
  }

  changedOpening(value) {
    //
    this.searchKey = '';
  }

  changeSerarchKey(value) {
    this.searchKey = value;

    if (this.searchKey.length > 3 || !this.job_applications.get(this.searchKey)) {
      this.status = 'loading';

      this._js.searchJobOpeningApplicationsApi(this.opening_code, this.searchKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(2000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(c => this.status = '');
    }
  }

  clickedUploadFile() {
    const formFile = document.getElementById('formFile'); //

    formFile.click();
  }

  reset() {
    this.newEmployee = this.employeeClone;
    this.smartwizardupdateEmployee.smartWizard("goToStep", 0, true);
    this.hasSaved.emit(this.newEmployee);

    this._ds.oInfoNotification('Data Reset', 'Data restored to last saved state');
  }

  load(applicant) {
    var _a;

    this.smartwizardupdateEmployee.smartWizard("goToStep", 0, true);
    const selectDropdown = $(`.selectpicker-update-position-${(_a = this.newEmployee) === null || _a === void 0 ? void 0 : _a.code}`);
    this.newEmployee = Object.assign(Object.assign({}, this.newEmployee), {
      firstName: applicant.firstName,
      lastName: applicant.lastName,
      country: applicant.country,
      phone: applicant.phone,
      email: applicant.email
    });
    this.status_update = applicant.status;
    this.country.search = applicant.country;
    this.searchKey = '';
    this.opening_code = '';

    this._ds.oInfoNotification('Data loaded', 'Employee data loaded successfully');

    this.positions$.subscribe(r => {
      selectDropdown.selectpicker();
      selectDropdown.on('changed.bs.select', this.handleJobPosition);
    });
  }

  handleJobPosition(e, clickedIndex, isSelected, previousValue) {}

  resetConfirmation() {
    $('#danger-modal-' + this.newEmployee.code).modal('show');
  }

  handleFileInput(event) {
    var _a;

    const files = event.target.files;
    this.fileToUpload = files.item(0); //

    let formData = new FormData();
    formData.append('file', this.fileToUpload, (_a = this.fileToUpload) === null || _a === void 0 ? void 0 : _a.name);

    this._fs.upload(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.throwError)(err);
    })).subscribe(f => {
      this.newEmployee.passport = f.file;
    });
  }

  updateImageUploaded() {
    const passportEmployeeephotoId = document.getElementById("passportEmployeeephotoId");
    passportEmployeeephotoId.click();
  }

  submit() {
    this.errorMessage = ``;
    let errF = '';
    this.assignableRole.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(r => {
      for (const [key, value] of Object.entries(this.newEmployee)) {
        const v = value;

        if (!v || v.length == 0) {
          this.errorMessage += `${key.replace('_', ' ').toUpperCase()} required, `;
          errF += `${key}, `;
        }
      }

      if (this.errorMessage.length > 0) {
        const notification = this._ds.openErrorNotification('Opps..', `Please reconfirm form, these fields: ${errF} might have been left empty by you which is required.`);

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)({
          status: '500',
          notification
        });
      } else {
        let user = Object.assign(Object.assign({}, this.newEmployee), {
          status: this.status_update
        });

        const notification = this._ds.oInfoNotification('Update Submitted', `Your request was submitted successfully and is currently being processed.`);

        this.hasSaved.emit(user);
        return this._us.updateUser(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(e => {
          this.handleError(e, 'updating user');
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.throwError)(e);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(r => {
          this.hasSaved.emit(r.user);
          this.saved = true;
        }));
      }
    })).subscribe(r => {
      // this._ds.openSuccessNotification('Employee Created', 'Saving Employee info to the database..');
      if (r.status == '200') {
        this._ds.openSuccessNotification('Employee Data Updated', `${r.user.firstName} ${r.user.lastName} record was successfully updated`);
      } else {
        this._ds.oErrorNotification('Opps...', r.response);
      } // this.reset()
      // this.hasSaved.emit(r.user);

    });
  }

  handleError(err, action) {
    const norification = this._ds.openErrorNotification('Opps..', `Issues with ${action} action`);
  }

  get job_applications() {
    return this._job_applications.value;
  }

  get applications() {
    var _a;

    const app = (_a = this.job_applications.get(this.opening_code)) === null || _a === void 0 ? void 0 : _a.filter(a => {
      if (this.searchKey.length < 1) {
        return a.status == 'Accepted' || a.status == 'Employed';
      }

      return (a.status == 'Accepted' || a.status == 'Employed') && a.code.toLowerCase().includes(this.searchKey.toLowerCase());
    });

    if (!app) {
      return [];
    }

    return app;
  }

}

UpdateComponent.ɵfac = function UpdateComponent_Factory(t) {
  return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_department_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_scripts_service__WEBPACK_IMPORTED_MODULE_2__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_recruitment_job_service__WEBPACK_IMPORTED_MODULE_3__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_Index__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_client_file_service__WEBPACK_IMPORTED_MODULE_7__.FileService));
};

UpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: UpdateComponent,
  selectors: [["app-employee-update"]],
  inputs: {
    role: "role",
    showTitle: "showTitle",
    loadForm: "loadForm",
    newEmployee: "newEmployee"
  },
  outputs: {
    hasSaved: "hasSaved"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 383,
  vars: 67,
  consts: [[1, "row"], ["class", "col-12 p-2 mb-2", 4, "ngIf"], [1, "col-md-12", "p-2", "mb-2", 3, "ngClass"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [3, "id"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "href"], [1, "num"], [1, "tab-content", "mCustomScrollbar"], ["id", "step-1", "role", "tabpanel", "aria-labelledby", "step-1", 1, "tab-pane", "mCustomScrollbar"], [1, "col-md-3"], [1, "form-group", 3, "ngClass"], [1, "custom-file"], ["type", "file", "name", "file", "id", "passportEmployeeephotoId", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], [1, "form-group", "pb-2"], ["name", "opening_code", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Employed"], ["value", "Active"], ["value", "Online"], ["value", "Offline"], ["value", "Deactivated"], ["value", "Probation"], ["value", "Retired"], ["value", "Sacked"], ["value", "Ban"], ["class", "form-group pb-2", 4, "ngIf"], ["class", "card-box height-100-p pd-20 min-height-200px", 4, "ngIf"], [1, "card", "card-box", 3, "ngClass"], ["alt", "Employee Passport & Profile photo", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "weight-500"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "text-center", 3, "click"], [1, "col-md-9"], [1, "col-md-4"], [1, "form-group"], [1, "text-danger"], ["type", "text", "readonly", "", "name", "code", "placeholder", "Employee ID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "firstName", "placeholder", "First name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "placeholder", "Last name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "phone", "placeholder", "Phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "dob", "placeholder", "Select Date", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["name", "gender", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Female"], ["name", "marital_status", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "single"], ["value", "married"], ["value", "domestic partnership"], ["type", "text", "name", "country", "placeholder", "Search Country", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "state", "placeholder", "State", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "city", "placeholder", "City", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "address", "placeholder", "Address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "step-2", "role", "tabpanel", "aria-labelledby", "step-2", 1, "tab-pane", "mCustomScrollbar"], ["data-style", "btn-outline-secondary", "multiple", "", "data-max-options", "30", 3, "class", "size", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "name", "job_title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "department", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "name", "date_of_employment", "placeholder", "Select Date", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["name", "type_of_contract", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Fixed"], ["value", "Full-time"], ["value", "Contract"], ["value", "Part-time"], ["value", "Intern"], ["type", "number", "name", "working_hours", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "cfale", "value", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ale", "value", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ala", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "probation", 1, "custom-select", "form-control", 3, "ngModel", "ngModelChange"], ["value", "Yes"], ["value", "No"], ["id", "step-3", "role", "tabpanel", "aria-labelledby", "step-3", 1, "tab-pane", "mCustomScrollbar"], ["type", "text", "name", "amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "currency", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], ["value", "Dollars"], ["value", "Pounds"], ["value", "Naira"], ["name", "pay_type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "payroll", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["type", "text", "placeholder", "Select Date", "name", "name_of_acc", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["placeholder", "Select time", "type", "text", "name", "name_of_bank", 1, "form-control", "time-picker", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Select Date", "name", "acc_num", 1, "form-control", "date-picker", 3, "ngModel", "ngModelChange"], ["placeholder", "Select time", "type", "text", "name", "sort_code", 1, "form-control", "time-picker", 3, "ngModel", "ngModelChange"], ["name", "pension", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "step-4", "role", "tabpanel", "aria-labelledby", "step-4", 1, "tab-pane", "mCustomScrollbar"], ["type", "text", "name", "behavior", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "confidance", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "result", 1, "form-control", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "value"], ["value", "Approved"], ["value", "Rejected"], ["name", "comments", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "d-none", 3, "id", "click"], ["id", "resetEmployeeFormBtnHidden", 1, "btn", "btn-success", "d-none", 3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "0%"], ["class", "col-md-12 p-2 mb-2 text-center", 3, "ngClass", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "Are you sure?", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "font-18"], [1, "mb-20", "text-primary"], [1, "mb-30", "text-center"], [1, "font-18"], [1, "icon-copy", "bi", "bi-trash-fill"], [1, "icon-copy", "bi", "bi-question-lg"], [1, "text-primary", "text-center"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "p-2", "mb-2"], [1, "h2"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "text", "name", "applicant", "placeholder", "Job Applicant Code", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-box", "height-100-p", "pd-20", "min-height-200px"], [1, "d-flex", "justify-content-between", "pb-10"], [1, "h6", "mb-0"], [1, "dropdown"], ["data-color", "#1b3133", "href", "javascript:void(0)", "role", "button", "data-toggle", "dropdown", 1, "btn", "btn-link", "font-24", "p-0", "line-height-1", "no-arrow", "dropdown-toggle", 2, "color", "rgb(27, 49, 51)"], [1, "dw", "dw-more"], [1, "user-list", "min-height-200px"], [1, "scroll"], ["class", "d-flex align-items-center justify-content-between", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "name-avatar", "d-flex", "align-items-center", "pr-2"], [1, "txt"], ["data-bgcolor", "#e7ebf5", "data-color", "#265ed7", 1, "badge", "badge-pill", "badge-sm", 2, "color", "rgb(38, 94, 215)", "background-color", "rgb(231, 235, 245)"], ["data-bgcolor", "#e7ebf5", "data-color", "#265ed7", 1, "badge", "badge-pill", "badge-sm", 2, "color", "rgb(89, 140, 249)", "background-color", "rgb(45, 92, 211)"], [1, "font-14", "weight-600"], ["data-color", "#b2b1b6", 1, "font-12", "weight-500", 2, "color", "rgb(178, 177, 182)"], [1, "cta", "flex-shrink-0"], ["href", "javascript:void(0)", "type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["data-style", "btn-outline-secondary", "multiple", "", "data-max-options", "30", 3, "size", "ngModel", "ngModelChange"], ["label", "Positions"], [3, "value"], [1, "col-md-12", "p-2", "mb-2", "text-center", 3, "ngClass"], [1, "mb-20"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "mb-3", "d-none"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", 1, "form-control"]],
  template: function UpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateComponent_div_1_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UpdateComponent_div_3_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Personal Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Employment Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Salary Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Remark ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Upload Passport");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UpdateComponent_Template_input_change_35_listener($event) {
        return ctx.handleFileInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Choose file");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Change account status from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_44_listener($event) {
        return ctx.status_update = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Employed");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Online");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Offline");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Deactivated");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Probation");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Retired");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Sacked");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Ban");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, UpdateComponent_div_63_Template, 4, 1, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, UpdateComponent_div_64_Template, 14, 3, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Passport Uploaded");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateComponent_Template_a_click_70_listener() {
        return ctx.updateImageUploaded();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "Change");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Employee ID: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_80_listener($event) {
        return ctx.newEmployee.code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_87_listener($event) {
        return ctx.newEmployee.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_94_listener($event) {
        return ctx.newEmployee.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "First Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_101_listener($event) {
        return ctx.newEmployee.firstName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "Last Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_108_listener($event) {
        return ctx.newEmployee.lastName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "Phone Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_115_listener($event) {
        return ctx.newEmployee.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "Date of Birth: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_122_listener($event) {
        return ctx.newEmployee.dob = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "Gender: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "select", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_129_listener($event) {
        return ctx.newEmployee.gender = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "Male");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "Female");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "Marital Status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "select", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_140_listener($event) {
        return ctx.newEmployee.marital_status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "option", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "Select Marital Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, "married");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "domestic partnership");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "Country: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_155_listener($event) {
        return ctx.country.search = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "State: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_162_listener($event) {
        return ctx.newEmployee.state = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "City: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_169_listener($event) {
        return ctx.newEmployee.city = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "Full House Address: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_176_listener($event) {
        return ctx.newEmployee.address = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "Job Positions:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, "* (double-click to dropdown)");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](186, UpdateComponent_select_186_Template, 3, 6, "select", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](187, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, "Job Title: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_194_listener($event) {
        return ctx.newEmployee.job_title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "Department: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "select", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_201_listener($event) {
        return ctx.newEmployee.department = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](202, UpdateComponent_option_202_Template, 2, 2, "option", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](203, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](206, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](207, "Date of Employment: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_210_listener($event) {
        return ctx.newEmployee.date_of_employment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](212, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](214, "Type of contract: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](216, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "select", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_217_listener($event) {
        return ctx.newEmployee.type_of_contract = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "Full-time");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](223, "Contract");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](224, "option", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](225, "Part-time");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "option", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](227, "Intern");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "Working Hours: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "/ day*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_234_listener($event) {
        return ctx.newEmployee.working_hours = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](237, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](238, "Company Full-time annual leave entitlement: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](239, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](240, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](241, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_241_listener($event) {
        return ctx.newEmployee.cfale = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](243, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](245, "General Annual leave entitlement: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](247, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](248, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_248_listener($event) {
        return ctx.newEmployee.ale = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](251, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](252, "Annual leave allowance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](253, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_253_listener($event) {
        return ctx.newEmployee.ala = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](255, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](257, "Probation required:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](258, "select", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_258_listener($event) {
        return ctx.newEmployee.probation = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](259, "option", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](260, "Probation required?");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](261, "option", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](263, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](264, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](265, "div", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](267, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](269, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](271, "Amount :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_272_listener($event) {
        return ctx.newEmployee.amount = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](273, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](274, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](275, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](276, "Currency (Paying In?) :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](277, "select", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_277_listener($event) {
        return ctx.newEmployee.currency = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](278, "option", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](279, "Select Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](280, "option", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](281, "Dollars");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](282, "option", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](283, "Pounds");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](284, "option", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](285, " Naira ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](287, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](288, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](289, "Pay Type :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](290, "select", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_290_listener($event) {
        return ctx.newEmployee.pay_type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](291, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](292, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](293, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](294, "Hourly");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](295, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](296, " commission only ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](297, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](298, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](300, "Payroll Number :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](301, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_301_listener($event) {
        return ctx.newEmployee.payroll = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](302, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](303, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](304, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](305, "Name on account :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](306, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_306_listener($event) {
        return ctx.newEmployee.name_of_acc = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](307, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](308, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](309, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](310, "Name of Bank :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](311, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_311_listener($event) {
        return ctx.newEmployee.name_of_bank = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](312, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](313, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](314, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](315, "Account Num :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](316, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_316_listener($event) {
        return ctx.newEmployee.acc_num = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](317, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](318, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](319, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](320, "Sort Code :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](321, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_321_listener($event) {
        return ctx.newEmployee.sort_code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](322, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](323, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](324, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](325, "Pension Eligible :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](326, "select", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_326_listener($event) {
        return ctx.newEmployee.pension = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](327, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](328, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](329, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](330, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](331, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](332, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](333, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](334, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](335, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](336, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](337, "Behaviour :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](338, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_338_listener($event) {
        return ctx.newEmployee.behavior = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](339, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](340, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](341, "Confidance");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](342, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_342_listener($event) {
        return ctx.newEmployee.confidance = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](343, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](344, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](345, "Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](346, "select", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_346_listener($event) {
        return ctx.newEmployee.result = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](347, "option", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](348);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](349, "option", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](350, "Approved");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](351, "option", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](352, "Rejected");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](353, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](354, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](355, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](356, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](357, "textarea", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_textarea_ngModelChange_357_listener($event) {
        return ctx.newEmployee.comments = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](358, "button", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateComponent_Template_button_click_358_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](359, "Force Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](360, "button", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateComponent_Template_button_click_360_listener() {
        return ctx.resetConfirmation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](361, "Force Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](362, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](363, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](364, UpdateComponent_div_364_Template, 9, 3, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](365, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](366, "div", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](367, "div", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](368, "div", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](369, "h3", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](370, "Are you sure?");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](371, "div", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](372, "span", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](373, "i", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](374, "span", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](375, "i", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](376, "p", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](377, " You are about to reset all changes in the form field, including including any uploaded file to the last updated state. Are you sure you are about to reset changes without saving? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](378, "div", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](379, "button", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](380, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](381, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateComponent_Template_button_click_381_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](382, " Yes, Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](61, _c0, ctx.isChecked));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "smartwizardupdateEmployee", ctx.newEmployee.code, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-1", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-2", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-3", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "", ctx.url, "#step-4", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](63, _c0, ctx.newEmployee.passport));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.newEmployee == null ? null : ctx.newEmployee.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.status_update);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.opening_code && !(ctx.newEmployee == null ? null : ctx.newEmployee.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.opening_code && !(ctx.newEmployee == null ? null : ctx.newEmployee.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](65, _c0, !ctx.newEmployee.passport));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.newEmployee.passport, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.firstName);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.lastName);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.dob);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.gender);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.marital_status);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.country.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.city);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](187, 57, ctx.positions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.job_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.department);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](203, 59, ctx.departments$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.date_of_employment);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.type_of_contract);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.working_hours);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.cfale);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.ale);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.ala);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.probation);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.pay_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.payroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.name_of_acc);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.name_of_bank);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.acc_num);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.sort_code);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.pension);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.behavior);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.confidance);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.result);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.newEmployee.result);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.newEmployee.result);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.newEmployee.comments);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "createEmployeeSubmitBtnHidden", ctx.newEmployee == null ? null : ctx.newEmployee.code, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "danger-modal-", ctx.newEmployee == null ? null : ctx.newEmployee.code, "");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectMultipleControlValueAccessor],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: [".card-img-top[_ngcontent-%COMP%] {\n  height: 200px !important;\n}\n\n.mat-list-text[_ngcontent-%COMP%] {\n  color: black;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.min-height-200px[_ngcontent-%COMP%] {\n  max-height: 220px !important;\n}\n\n.tab-pane[_ngcontent-%COMP%] {\n  min-height: 450px !important;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n  max-height: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSw0QkFBQTtBQUlKOztBQURBO0VBQ0ksNEJBQUE7QUFJSjs7QUFEQTtFQUNJLGtCQUFBO0FBSUo7O0FBREE7RUFDSSw0QkFBQTtBQUlKIiwiZmlsZSI6InVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3B7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1saXN0LXRleHR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxubGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1pbi1oZWlnaHQtMjAwcHh7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiLXBhbmV7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xse1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSA+IC5pbm5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
});

/***/ }),

/***/ 4932:
/*!*******************************************************!*\
  !*** ./src/app/admin/employee/view/view.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 4758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../update/update.component */ 4660);
/* harmony import */ var _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/calendar/calendar.component */ 1812);










function ViewComponent_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 78);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.employee == null ? null : ctx_r2.employee.passport, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ViewComponent_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 78);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/img/ezgif.com-webp-to-png.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ViewComponent_div_2_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 79);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.employee == null ? null : ctx_r4.employee.passport, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ViewComponent_div_2_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 79);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/img/ezgif.com-webp-to-png.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ViewComponent_div_2_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.employee == null ? null : ctx_r6.employee.job_title, "");
} }
function ViewComponent_div_2_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "nature_people");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r7.employee == null ? null : ctx_r7.employee.job_title), "");
} }
function ViewComponent_div_2_li_47_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ViewComponent_div_2_li_47_span_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ViewComponent_div_2_li_47_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ViewComponent_div_2_li_47_span_4_span_4_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ViewComponent_div_2_li_47_span_4_span_5_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r11 = ctx.$implicit;
    const _i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, position_r11), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _i_r12 != (ctx_r10.employee == null ? null : ctx_r10.employee.job_positions.length) - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _i_r12 == (ctx_r10.employee == null ? null : ctx_r10.employee.job_positions.length) - 1);
} }
function ViewComponent_div_2_li_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ViewComponent_div_2_li_47_span_4_Template, 6, 5, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.employee == null ? null : ctx_r8.employee.job_positions);
} }
function ViewComponent_div_2_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"](" ", ctx_r9.employee.address && ctx_r9.employee.address.length > 0 ? ctx_r9.employee.address : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "No Address Stored"), " ", ctx_r9.employee.city && ctx_r9.employee.city.length > 0 ? ctx_r9.employee.city : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, " "), " ", ctx_r9.employee.state && ctx_r9.employee.state.length > 0 ? ctx_r9.employee.state : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, " "), " ", ctx_r9.employee.country && ctx_r9.employee.country.length > 0 ? ctx_r9.employee.country : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, " "), " ");
} }
function ViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ViewComponent_div_2_img_5_Template, 1, 1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ViewComponent_div_2_img_6_Template, 1, 1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ViewComponent_div_2_img_12_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ViewComponent_div_2_img_13_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h5", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "strong", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ViewComponent_div_2_p_23_Template, 4, 1, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "alternate_email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ViewComponent_div_2_li_46_Template, 6, 3, "li", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ViewComponent_div_2_li_47_Template, 5, 1, "li", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ViewComponent_div_2_li_48_Template, 9, 12, "li", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "network_locked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.employee.passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.employee.passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.employee.passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.employee.passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 16, ctx_r0.employee == null ? null : ctx_r0.employee.firstName), ". ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 18, ctx_r0.employee == null ? null : ctx_r0.employee.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.employee == null ? null : ctx_r0.employee.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.employee == null ? null : ctx_r0.employee.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.employee == null ? null : ctx_r0.employee.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 20, ctx_r0.employee == null ? null : ctx_r0.employee.email), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.employee == null ? null : ctx_r0.employee.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.iAdmin(ctx_r0.employee.role) && ctx_r0.employee.job_title && ctx_r0.employee.job_title.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.iAdmin(ctx_r0.employee.role) && ctx_r0.employee.job_positions && ctx_r0.employee.job_positions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.iAdmin(ctx_r0.employee.role) && ctx_r0.employee.address && ctx_r0.employee.address.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 22, ctx_r0.employee == null ? null : ctx_r0.employee.status), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Last Updated: ", ctx_r0.lastUpdated, "");
} }
function ViewComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
const _c1 = function (a0, a1, a2) { return { "col-lg-8": a0, "col-xl-8": a1, "col-md-8": a2 }; };
const _c2 = function (a0) { return { "active": a0 }; };
const _c3 = function (a0, a1) { return { "active": a0, "show": a1 }; };
class ViewComponent {
    constructor(_us, location, router) {
        this._us = _us;
        this.location = location;
        this.router = router;
        this.employee = null;
        this.currentPage = '#timeline';
        this.p = 0;
        this.lastUpdated = `hr:min, dd-mm-yyyy`;
        this.today = new Date(Date.now()).toLocaleString();
        this.shouldShowProfile = false;
        this.me$ = this._us.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(me => {
            if (me.authToken) {
                this.me = me;
                //
                //
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
        this.updatedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.me$.subscribe();
    }
    iAdmin(role) {
        return role.findIndex(r => r.includes('Admin'.toLowerCase())) > -1;
    }
    isMaster(role) {
        return role.findIndex(r => r.includes('Master'.toLowerCase())) > -1;
    }
    ngOnChanges(changes) {
        this.getlastUpdated(this.employee);
        if (changes.employee && changes.employee.currentValue && changes.employee.previousValue) {
            this.determineLatest(changes.employee.currentValue, changes.employee.previousValue);
        }
    }
    navigate(tab) {
        this.currentPage = tab;
        if (this.currentPage == '#setting') {
            this.shouldShowProfile = true;
        }
        else {
            this.shouldShowProfile = false;
            if (this.router.url !== 'admin/employee/all/#viewEmployee' && this.router.url !== 'admin/employee/all') {
                this.location.go(`admin/employee/all/#viewEmployee`);
            }
        }
    }
    hasSavedEvent(event) {
        this.employee = Object.assign(Object.assign({}, this.employee), event);
        this.getlastUpdated(this.employee);
        this.updatedUser.emit(this.employee);
        this.navigate(`#timeline`);
    }
    determineLatest(first, second) {
        const firstPeriod = new Date(first.updated_at);
        const secondPeriod = new Date(second.updated_at);
        if (firstPeriod.getTime() >= secondPeriod.getTime()) {
            this.employee = first;
        }
        else {
            this.employee = second;
        }
        this.getlastUpdated(this.employee);
    }
    getlastUpdated(employee) {
        if (!employee.updated_at) {
            this.lastUpdated = `hr:min, dd-mm-yyyy`;
        }
        else {
            let _at = new Date(employee.updated_at);
            let today = _at.getMinutes() + 1;
            if (today < 10) {
                today = `0` + today;
            }
            this.lastUpdated = `${_at.toLocaleString()}`;
        }
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-employee-view"]], inputs: { employee: "employee", currentPage: "currentPage" }, outputs: { updatedUser: "updatedUser" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 178, vars: 63, consts: [[1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-12", "mb-30", 3, "ngClass"], ["class", "pd-20 card-box height-100-p", 4, "ngIf"], [1, "col-sm-12", "mb-30", 3, "ngClass"], [1, "card-box", "height-100-p", "overflow-hidden"], [1, "profile-tab", "height-100-p"], [1, "tab", "height-100-p"], ["role", "tablist", 1, "nav", "nav-tabs", "customtab"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", 1, "nav-link", 3, "ngClass", "href", "click"], [1, "tab-content", "mCustomScrollbar"], ["role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass", "id"], [1, "pd-20"], [1, "profile-timeline"], [1, "timeline-month"], [1, "profile-timeline-list"], [1, "date", "font-12"], [1, "task-name", "font-14"], [1, "ion-android-alarm-clock"], [1, "font-14"], [1, "task-time", "font-12"], [1, "ion-ios-clock"], [1, "col-md-12", "text-center"], [1, "pd-20", "profile-task-wrap"], [1, "container", "p-0", "m-0", "smxw20"], [1, "profile-task-list", "pb-10"], ["class", "col-md-12", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "customscroll", 3, "id"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "Close Modal", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "pd-0"], [1, "task-list-form"], [1, "form-group", "row"], [1, "col-md-4"], [1, "col-md-8"], ["type", "text", 1, "form-control"], [1, "form-control"], ["data-style", "btn-outline-primary", "title", "Not Chosen", "multiple", "", "data-selected-text-format", "count", "data-count-selected-text", "{0} people selected", 1, "selectpicker", "form-control"], [1, "form-group", "row", "mb-0"], ["type", "text", 1, "form-control", "date-picker"], ["href", "javascript:;", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "Remove Task", 1, "remove-task"], [1, "ion-minus-circled"], [1, "add-more-task"], ["href", "#", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "Add Task"], [1, "ion-plus-circled"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["role", "tabpanel", 1, "tab-pane", "fade", "height-100-p", 3, "ngClass", "id"], [1, "profile-setting"], [1, "col-md-12"], [1, "m-2", "p-2"], [1, "text-danger"], [3, "loadForm", "newEmployee", "showTitle", "hasSaved"], [1, "pd-20", "card-box", "height-100-p"], [1, "profile-photo"], ["href", "javascript:;", "data-toggle", "modal", "data-target", "#modal", 1, "edit-avatar"], ["alt", "", "class", "avatar-photo", 3, "src", 4, "ngIf"], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-body", "pd-5"], [1, "img-container"], ["id", "image", "alt", "Picture", 3, "src", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "text-center", "h5", "mb-2"], [1, "font-16"], [1, "icon-copy", "bi", "bi-person-bounding-box"], ["class", "text-center text-muted font-14 mb-2", 4, "ngIf"], [1, "text-center", "text-muted", "font-14", "mb-2"], [1, "icon-copy", "bi", "bi-pentagon-half"], [1, "text-center", "text-muted", "font-14"], [1, "icon-copy", "bi", "bi-shield-fill-check"], [1, "profile-info"], [1, "mb-20", "h5", "text-blue"], [4, "ngIf"], ["alt", "", 1, "avatar-photo", 3, "src"], ["id", "image", "alt", "Picture", 3, "src"], [1, "d-flex"], ["class", "d-flex", 4, "ngFor", "ngForOf"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ViewComponent_div_2_Template, 60, 24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewComponent_Template_a_click_9_listener() { return ctx.navigate("#timeline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewComponent_Template_a_click_14_listener() { return ctx.navigate("#tasks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewComponent_Template_a_click_19_listener() { return ctx.navigate("#setting"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Task Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Fix the issue with the schedule a meeting form on the official website home page, ensure all notification is dispatched to all support staff responsibe on schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Meeting Event Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Check-In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "07:30 am, by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Zinder System");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, ViewComponent_div_77_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Tasks Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Task Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Task Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Assigned to");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Ferdinand M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Don H. Rabon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Ann P. Harris");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " Katie D. Verdin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Christopher S. Fulghum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " Matthew C. Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Task Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Task Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Assigned to");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Ferdinand M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Don H. Rabon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Ann P. Harris");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " Katie D. Verdin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Christopher S. Fulghum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " Matthew C. Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, " Add More Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Note: This is an administrative action to override a user profile information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "app-employee-update", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("hasSaved", function ViewComponent_Template_app_employee_update_hasSaved_177_listener($event) { return ctx.hasSavedEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c0, ctx.shouldShowProfile));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](44, _c1, !ctx.shouldShowProfile, !ctx.shouldShowProfile, !ctx.shouldShowProfile));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "", ctx.currentPage, "", ctx.employee == null ? null : ctx.employee.code, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](48, _c2, ctx.currentPage == "#timeline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "", ctx.currentPage, "", ctx.employee == null ? null : ctx.employee.code, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c2, ctx.currentPage == "#tasks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "", ctx.currentPage, "", ctx.employee == null ? null : ctx.employee.code, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c2, ctx.currentPage == "#setting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "timeline", ctx.employee == null ? null : ctx.employee.code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](54, _c3, ctx.currentPage == "#timeline", ctx.currentPage == "#timeline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 32, ctx.employee == null ? null : ctx.employee.firstName), "'s' Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 34, ctx.today));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("09:30 am, by ", ctx.me == null ? null : ctx.me.firstName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 36, ctx.today));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Meeting with kelvin at 8:30AM, ", ctx.today, " to fix the fingerprint issue at the reception door. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("07:40 am, by ", ctx.employee == null ? null : ctx.employee.firstName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 38, ctx.today));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 40, ctx.employee == null ? null : ctx.employee.firstName), " just checked in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("All activities since joining on ", ctx.lastUpdated, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "tasks", ctx.employee == null ? null : ctx.employee.code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](57, _c3, ctx.currentPage == "#tasks", ctx.currentPage == "#tasks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "task-add", ctx.employee == null ? null : ctx.employee.code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "setting", ctx.employee == null ? null : ctx.employee.code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](60, _c3, ctx.currentPage == "#setting", ctx.currentPage == "#setting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loadForm", ctx.shouldShowProfile)("newEmployee", ctx.employee)("showTitle", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _update_update_component__WEBPACK_IMPORTED_MODULE_1__.UpdateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["label[_ngcontent-%COMP%] {\n  color: #000 !important;\n}\n\nli[_ngcontent-%COMP%] {\n  color: #000 !important;\n}\n\n.indicator[_ngcontent-%COMP%] {\n  color: #0d8ad1 !important;\n  cursor: pointer;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n.avatar-photo[_ngcontent-%COMP%] {\n  max-height: 150px;\n  min-width: 160px;\n}\n\n.no-image-profile-icon[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  margin: 0 auto 15px;\n  position: relative;\n}\n\n.smxw20[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0ksMEJBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6InZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxubGkge1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4uaW5kaWNhdG9ye1xyXG4gICAgY29sb3I6ICMwZDhhZDEgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWljb257XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhci1waG90b3tcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLm5vLWltYWdlLXByb2ZpbGUtaWNvbntcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc214dzIwe1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 8654:
/*!*****************************************************************!*\
  !*** ./src/app/shared/resolvers/company/department.resolver.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentResolver": () => (/* binding */ DepartmentResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_department_department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/department/department.service */ 4441);


class DepartmentResolver {
    constructor(departMentService) {
        this.departMentService = departMentService;
    }
    resolve(route, state) {
        return this.departMentService.getDepartmentsApi$;
    }
}
DepartmentResolver.ɵfac = function DepartmentResolver_Factory(t) { return new (t || DepartmentResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_department_department_service__WEBPACK_IMPORTED_MODULE_0__.DepartmentService)); };
DepartmentResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DepartmentResolver, factory: DepartmentResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4441:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/department/department.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentService": () => (/* binding */ DepartmentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ 4758);






class DepartmentService {
    constructor(http, _us) {
        this.http = http;
        this._us = _us;
        this._departments = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.departments$ = this._departments.asObservable();
        this.departments$_status = 'yet';
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.getDepartmentsApi$ = this.getDepartmentsApi().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._departments.next(res);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
    }
    getDepartmentsApi() {
        return this.http.get(`${this.apiUrl}/departments`);
    }
    newDepartmentApi(department) {
        return this.http.post(`${this.apiUrl}/departments`, department);
    }
    add(department) {
        return this.newDepartmentApi(department).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            this._departments.value.unshift(res);
        }));
    }
    get departmentsValue() {
        return this._departments.value;
    }
}
DepartmentService.ɵfac = function DepartmentService_Factory(t) { return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
DepartmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DepartmentService, factory: DepartmentService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=default-src_app_admin_employee_employee_module_ts.js.map