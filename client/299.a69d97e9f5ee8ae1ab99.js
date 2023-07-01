"use strict";(self.webpackChunksparklingv2=self.webpackChunksparklingv2||[]).push([[299],{9299:($,g,a)=>{a.r(g),a.d(g,{AuthModule:()=>W});var d=a(8583),l=a(4655),s=a(3679),_=a(9643),w=a(2340),t=a(7716),p=a(1521),A=a(2899);const T=function(){return["/"]},Z=function(){return["/auth/register"]},q=function(r,n){return{"dw-padlock1":r,"dw-eye":n}},b=function(){return["/auth/forgot"]};let f=(()=>{class r{constructor(e,o,i,c){this.formBuilder=e,this.router=o,this.auth=i,this._ds=c,this.user=null,this.message="",this.appName=w.N.appName,this.timeToSet=()=>setTimeout(()=>{this.clearBrowserAutoFill(),this.loginForm.controls.created_at.setValue(new Date(Date.now()))},1e3),this.loginForm=this.formBuilder.group({created_at:[new Date(Date.now()),s.kI.required],submited_at:[null,s.kI.required],email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.minLength(6)]],password_type:["password",s.kI.required]})}ngAfterViewInit(){this.timeToSet()}ngOnInit(){this.auth.sessionAuth&&this.router.navigate(["admin"])}setpassword_type(){this.loginForm.controls.password_type.setValue("text"==this.password_type?"password":"text")}get password_type(){return this.loginForm.controls.password_type.value}signIn(e){e.preventDefault(),this.message="",this.loginForm.controls.submited_at.setValue(new Date(Date.now())),console.log(this.loginForm),this.resetFormStyle();const o=document.getElementById("password");if(document.getElementById("email").classList.add("INVALID"==this.loginForm.controls.email.status?"error-border":"sucess-border"),o.classList.add("INVALID"==this.loginForm.controls.password.status?"error-border":"sucess-border"),!this.loginForm.valid)return void this.loginForm.controls.submited_at.setValue(null);const c=this.postUserToServer();this.user=c,this.auth.login(this.user).pipe((0,_.d)()).subscribe(m=>{if(console.log(m),this.message=m.response,"200"==m.status){const X={title:"Login Successful",message:`You have scuccessfully logged in at ${new Date(Date.now()).toLocaleString()}`,status:"unseen",userID:m.user.id,created_at:new Date(Date.now()),updated_at:new Date(Date.now())};this.router.navigate(["admin/home/dashboard"]).finally(()=>{this._ds.add(X).subscribe(K=>console.log(K))})}})}resetFormStyle(){const e=document.getElementById("password"),o=document.getElementById("email");o.classList.remove("error-border"),e.classList.remove("error-border"),o.classList.remove("no-border"),e.classList.remove("no-border"),o.classList.remove("sucess-border"),e.classList.remove("sucess-border")}postUserToServer(){let e={};return Object.entries(this.loginForm.value).forEach(([o,i])=>{"created_at"!=o&&"submited_at"!=o&&(e[o]=i)}),e}clearBrowserAutoFill(){const e=document.getElementById("password"),o=document.getElementById("email");e.value=" ".trim(),o.value=" ".trim()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(s.qu),t.Y36(l.F0),t.Y36(p.e),t.Y36(A.U))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:54,vars:16,consts:[[1,"login-header","box-shadow"],[1,"container-fluid","d-flex","justify-content-between","align-items-center"],[1,"brand-logo"],["href","javascript:void()","routerLinkActive","router-link-active",3,"routerLink"],["src","assets/img/sparkling-green-logo-rectangle.PNG","alt",""],[1,"login-menu"],[1,"login-wrap","d-flex","align-items-center","flex-wrap","justify-content-center"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-6","col-lg-7"],["src","assets/img/cleaning service-pana.svg","alt",""],[1,"col-md-6","col-lg-5"],[1,"login-box","bg-white","box-shadow","border-radius-10"],[1,"login-title"],[1,"text-center","text-primary"],[3,"formGroup"],[1,"input-group","custom"],["type","email","formControlName","email","id","email","value","","placeholder","Email",1,"form-control","form-control-lg"],[1,"input-group-append","custom"],[1,"input-group-text"],[1,"icon-copy","dw","dw-user1"],["formControlName","password","value","","id","password","placeholder","Enter Password",1,"form-control","form-control-lg",3,"type"],[1,"input-group-append","custom",3,"click"],[1,"dw",3,"ngClass"],[1,"row","pb-30"],[1,"col-6"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],[1,"forgot-password"],["href","javascript:void()","routerLinkActive","router-link-active",1,"text-primary",3,"routerLink"],[1,"row"],[1,"col-sm-12"],[1,"input-group","mb-0"],["href","javascript:void()",1,"btn","btn-primary","btn-lg","btn-block",3,"click"],["data-color","#707373",1,"font-16","weight-600","pt-10","pb-10","text-center"],["href","javascript:void()","routerLinkActive","router-link-active",1,"btn","btn-outline-primary","btn-lg","btn-block",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.qZA(),t.TgZ(5,"div",5),t.TgZ(6,"ul"),t.TgZ(7,"li"),t.TgZ(8,"a",3),t._uU(9,"Register"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t._UZ(14,"img",10),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"div",12),t.TgZ(17,"div",13),t.TgZ(18,"h2",14),t._uU(19),t.qZA(),t.qZA(),t.TgZ(20,"form",15),t.TgZ(21,"div",16),t._UZ(22,"input",17),t.TgZ(23,"div",18),t.TgZ(24,"span",19),t._UZ(25,"i",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",16),t._UZ(27,"input",21),t.TgZ(28,"div",22),t.NdJ("click",function(){return o.setpassword_type()}),t.TgZ(29,"span",19),t._UZ(30,"i",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div"),t.TgZ(32,"p"),t._uU(33),t.qZA(),t.qZA(),t.TgZ(34,"div",24),t.TgZ(35,"div",25),t.TgZ(36,"div",26),t._UZ(37,"input",27),t.TgZ(38,"label",28),t._uU(39,"Remember"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",25),t.TgZ(41,"div",29),t.TgZ(42,"a",30),t._uU(43,"Forgot Password"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",31),t.TgZ(45,"div",32),t.TgZ(46,"div",33),t.TgZ(47,"a",34),t.NdJ("click",function(c){return o.signIn(c)}),t._uU(48,"Sign In"),t.qZA(),t.qZA(),t.TgZ(49,"div",35),t._uU(50," OR "),t.qZA(),t.TgZ(51,"div",33),t.TgZ(52,"a",36),t._uU(53,"Create Account"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(9,T)),t.xp6(5),t.Q6J("routerLink",t.DdM(10,Z)),t.xp6(11),t.hij("Login To ",o.appName,""),t.xp6(1),t.Q6J("formGroup",o.loginForm),t.xp6(7),t.s9C("type",o.password_type),t.xp6(3),t.Q6J("ngClass",t.WLB(11,q,"password"==o.password_type,"text"==o.password_type)),t.xp6(3),t.Oqu(o.message),t.xp6(9),t.Q6J("routerLink",t.DdM(14,b)),t.xp6(10),t.Q6J("routerLink",t.DdM(15,Z)))},directives:[l.yS,l.Od,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.mk],styles:[".text-primary[_ngcontent-%COMP%]{color:#078e2d!important}.btn-primary[_ngcontent-%COMP%]{background-color:#078e2d!important}"]}),r})();var x=a(8002),y=a(3342),u=a(4553),v=a(8295),C=a(9983),I=a(1095);function k(r,n){1&r&&t._uU(0,"Personal Info")}function F(r,n){1&r&&t._uU(0,"Account Information")}function L(r,n){if(1&r&&(t.TgZ(0,"div"),t.TgZ(1,"p",21),t._uU(2,"You are almsot now done."),t.qZA(),t.TgZ(3,"p",21),t._uU(4),t.qZA(),t.TgZ(5,"p",21),t._uU(6),t.qZA(),t.TgZ(7,"p",21),t._uU(8),t.qZA(),t.TgZ(9,"p",21),t._uU(10),t.qZA(),t.TgZ(11,"p",21),t._uU(12),t.qZA(),t.TgZ(13,"p",21),t._uU(14),t.qZA(),t.qZA()),2&r){const e=t.oxw();t.xp6(4),t.hij("Firstname: ",e.firstControls.firstName.value,""),t.xp6(2),t.hij("Lastname: ",e.firstControls.lastName.value,""),t.xp6(2),t.hij("Country: ",e.firstControls.country.value,""),t.xp6(2),t.hij("Phone: ",e.firstControls.phone.value,""),t.xp6(2),t.hij("Email: ",e.secondControls.email.value,""),t.xp6(2),t.hij("Password: ",e.secondControls.password.value,"")}}function U(r,n){if(1&r&&(t.TgZ(0,"div"),t.TgZ(1,"p",21),t._uU(2),t.qZA(),t.qZA()),2&r){const e=t.oxw();t.xp6(2),t.Oqu(e.message)}}function N(r,n){1&r&&(t.TgZ(0,"button",31),t._uU(1,"Back"),t.qZA())}function J(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){return t.CHM(e),t.oxw().loginnow()}),t._uU(1,"Login"),t.qZA()}}function D(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"button",37),t.NdJ("click",function(){return t.CHM(e),t.oxw().submit()}),t._uU(1,"Submit"),t.qZA()}2&r&&t.Udp("background-color","#009b72")}const P=function(){return["/"]},B=function(){return["/auth/login"]};function M(r,n){if(1&r&&(t.TgZ(0,"div",16),t._UZ(1,"input",28),t.TgZ(2,"div",18),t.TgZ(3,"span",19),t._UZ(4,"i",29),t.qZA(),t.qZA(),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.uIk("readonly","yet"!=e.code_status||null)}}const h=function(r,n){return{"dw-padlock1":r,"dw-eye":n}};function Q(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",16),t._UZ(1,"input",30),t.TgZ(2,"div",31),t.NdJ("click",function(){return t.CHM(e),t.oxw().setpassword_type()}),t.TgZ(3,"span",19),t._UZ(4,"i",32),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=t.oxw();t.xp6(1),t.s9C("type",e.password_type),t.xp6(3),t.Q6J("ngClass",t.WLB(2,h,"password"==e.password_type,"text"==e.password_type))}}function j(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",16),t._UZ(1,"input",33),t.TgZ(2,"div",31),t.NdJ("click",function(){return t.CHM(e),t.oxw().setpassword_type()}),t.TgZ(3,"span",19),t._UZ(4,"i",32),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=t.oxw();t.xp6(1),t.s9C("type",e.password_type),t.xp6(3),t.Q6J("ngClass",t.WLB(2,h,"password"==e.password_type,"text"==e.password_type))}}function Y(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"a",34),t.NdJ("click",function(i){return t.CHM(e),t.oxw().submit(i)}),t._uU(1,"Submit"),t.qZA()}}function S(r,n){1&r&&(t.TgZ(0,"div",35),t._uU(1," OR "),t.qZA())}const O=function(){return["/"]},R=function(){return["/auth/register"]},V=function(){return["/auth/login"]},G=[{path:"",component:f},{path:"login",component:f},{path:"register",component:(()=>{class r{constructor(e,o,i){this._formBuilder=e,this.auth=o,this.router=i,this.firstFormGroup=this._formBuilder.group({firstName:["",s.kI.required],lastName:["",s.kI.required],country:["",s.kI.required],phone:["",s.kI.required]}),this.secondFormGroup=this._formBuilder.group({email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.minLength(6)]]}),this.isLinear=!0,this.saved=!1,this.message=""}ngOnInit(){this.auth.sessionAuth&&this.router.navigate(["admin"])}get firstControls(){return this.firstFormGroup.controls}get secondControls(){return this.secondFormGroup.controls}submit(){let e={firstName:this.firstControls.firstName.value,lastName:this.firstControls.lastName.value,country:this.firstControls.country.value,phone:this.firstControls.phone.value,email:this.secondControls.email.value,password:this.secondControls.password.value,created_at:new Date(Date.now()).toISOString(),updated_at:new Date(Date.now()).toISOString(),role:["Customer"],status:"Active"};this.auth.register(e).pipe((0,x.U)(o=>o.response),(0,y.b)(()=>this.saved=!0)).subscribe(o=>{this.message=o})}loginnow(){this.router.navigate(["auth/login"])}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(s.qu),t.Y36(p.e),t.Y36(l.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-register"]],decls:75,vars:16,consts:[[1,"login-header","box-shadow"],[1,"container-fluid","d-flex","justify-content-between","align-items-center"],[1,"brand-logo"],["href","javascript:void()","routerLinkActive","router-link-active",3,"routerLink"],["src","assets/img/sparkling-green-logo-rectangle.PNG","alt",""],[1,"login-menu"],[1,"login-wrap","d-flex","align-items-center","flex-wrap","justify-content-center"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-6","col-lg-6"],["src","assets/img/cleaning service-amico.svg","alt",""],[1,"login-box","bg-white","box-shadow","border-radius-10","organisetihis"],[1,"login-title"],[1,"text-center","text-primary"],[3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel","","class","text-white"],[1,"row"],[1,"col-md-12"],[1,"text-white"],["matInput","","placeholder","First name","formControlName","firstName","required","",1,"text-white"],["matInput","","placeholder","Last name","formControlName","lastName","required","",1,"text-white"],["matInput","","placeholder","Country","formControlName","country","required","",1,"text-white"],["matInput","","placeholder","Phone","formControlName","phone","required","",1,"text-white"],["mat-button","","matStepperNext","",1,"text-white","btn"],["label","Login Information",3,"stepControl"],[1,"col-12"],["matInput","","formControlName","email","placeholder","Email","type","email","required","",1,"text-white"],["matInput","","formControlName","password","placeholder","Password","type","password","required","",1,"text-white"],["mat-button","","matStepperPrevious","",1,"text-white","btn","spacel"],[4,"ngIf"],["mat-button","","matStepperPrevious","","class","text-white btn spacel",4,"ngIf"],["mat-button","","matStepperPrevious","","class","text-white btn spacel",3,"click",4,"ngIf"],["mat-button","","class","text-white btn",3,"background-color","click",4,"ngIf"],["mat-button","","matStepperPrevious","",1,"text-white","btn","spacel",3,"click"],["mat-button","",1,"text-white","btn",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.qZA(),t.TgZ(5,"div",5),t.TgZ(6,"ul"),t.TgZ(7,"li"),t.TgZ(8,"a",3),t._uU(9,"Login"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t._UZ(14,"img",10),t.qZA(),t.TgZ(15,"div",9),t.TgZ(16,"div",11),t.TgZ(17,"div",12),t.TgZ(18,"h2",13),t._uU(19,"Create Account"),t.qZA(),t.qZA(),t.TgZ(20,"mat-stepper",14,15),t.TgZ(22,"mat-step",16),t.TgZ(23,"form",17),t.YNc(24,k,1,0,"ng-template",18),t.TgZ(25,"div",19),t.TgZ(26,"div",20),t.TgZ(27,"mat-form-field"),t.TgZ(28,"mat-label",21),t._uU(29,"First Name"),t.qZA(),t._UZ(30,"input",22),t.qZA(),t.qZA(),t.TgZ(31,"div",20),t.TgZ(32,"mat-form-field"),t.TgZ(33,"mat-label",21),t._uU(34,"Last Name"),t.qZA(),t._UZ(35,"input",23),t.qZA(),t.qZA(),t.TgZ(36,"div",20),t.TgZ(37,"mat-form-field"),t.TgZ(38,"mat-label",21),t._uU(39,"Country"),t.qZA(),t._UZ(40,"input",24),t.qZA(),t.qZA(),t.TgZ(41,"div",20),t.TgZ(42,"mat-form-field"),t.TgZ(43,"mat-label",21),t._uU(44,"Phone"),t.qZA(),t._UZ(45,"input",25),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div"),t.TgZ(47,"button",26),t._uU(48,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"mat-step",27),t.TgZ(50,"form",17),t.TgZ(51,"div",19),t.TgZ(52,"div",28),t.TgZ(53,"mat-form-field"),t.TgZ(54,"mat-label",21),t._uU(55,"Email"),t.qZA(),t._UZ(56,"input",29),t.qZA(),t.qZA(),t.TgZ(57,"div",28),t.TgZ(58,"mat-form-field"),t.TgZ(59,"mat-label",21),t._uU(60,"Password"),t.qZA(),t._UZ(61,"input",30),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"div"),t.TgZ(63,"button",31),t._uU(64,"Back"),t.qZA(),t.TgZ(65,"button",26),t._uU(66,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(67,"mat-step"),t.YNc(68,F,1,0,"ng-template",18),t.YNc(69,L,15,6,"div",32),t.YNc(70,U,3,1,"div",32),t.TgZ(71,"div"),t.YNc(72,N,2,0,"button",33),t.YNc(73,J,2,0,"button",34),t.YNc(74,D,2,2,"button",35),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(14,P)),t.xp6(5),t.Q6J("routerLink",t.DdM(15,B)),t.xp6(12),t.Udp("background-color","#021645"),t.Q6J("linear",o.isLinear),t.xp6(2),t.Q6J("stepControl",o.firstFormGroup),t.xp6(1),t.Q6J("formGroup",o.firstFormGroup),t.xp6(26),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(19),t.Q6J("ngIf",!o.saved),t.xp6(1),t.Q6J("ngIf",o.saved),t.xp6(2),t.Q6J("ngIf",!o.saved),t.xp6(1),t.Q6J("ngIf",o.saved),t.xp6(1),t.Q6J("ngIf",!o.saved))},directives:[l.yS,l.Od,u.Vq,u.C0,s._Y,s.JL,s.sg,u.VY,v.KE,v.hX,C.Nt,s.Fj,s.JJ,s.u,s.Q7,I.lW,u.Ic,u.fd,d.O5],styles:[".mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-mdc-form-field[_ngcontent-%COMP%]{margin-top:16px}.text-white[_ngcontent-%COMP%]{color:#fff}.organisetihis[_ngcontent-%COMP%]{max-width:none!important;width:100%}.mat-form-field[_ngcontent-%COMP%]{width:100%!important}.btn[_ngcontent-%COMP%]{border:1px solid white}.spacel[_ngcontent-%COMP%]{margin-right:2px}.fonts[_ngcontent-%COMP%]{font-size:22px}"]}),r})()},{path:"forgot",component:(()=>{class r{constructor(e,o,i){this.formBuilder=e,this.auth=o,this.router=i,this.message="",this.changed=!1,this.forgotForm=this.formBuilder.group({created_at:[new Date(Date.now()),s.kI.required],submited_at:[null,s.kI.required],email:["",[s.kI.required,s.kI.email]],email_status:["yet",[s.kI.required]],code:["",[s.kI.required,s.kI.minLength(4),s.kI.maxLength(5)]],code_status:["yet",[s.kI.required]],password:["",[s.kI.required,s.kI.minLength(6)]],confirmationpassword:["",[s.kI.required,s.kI.minLength(6)]],password_type:["password",s.kI.required]})}ngAfterViewInit(){}ngOnInit(){this.auth.sessionAuth&&this.router.navigate(["admin"])}setpassword_type(){this.forgotForm.controls.password_type.setValue("text"==this.password_type?"password":"text")}get email_status(){return this.forgotForm.controls.email_status.value}get code_status(){return this.forgotForm.controls.code_status.value}get password_status(){return this.forgotForm.controls.password.status}get password_type(){return this.forgotForm.controls.password_type.value}processForEmail(){const e=document.getElementById("email");e.classList.remove("error-border"),e.classList.remove("no-border"),e.classList.remove("sucess-border"),"INVALID"==this.forgotForm.controls.email.status?(e.classList.add("error-boarder"),this.message="Email is invalid"):this.forgotForm.controls.email_status.setValue("approved")}processForCode(){const e=document.getElementById("code");e.classList.remove("error-border"),e.classList.remove("no-border"),e.classList.remove("sucess-border"),"INVALID"==this.forgotForm.controls.code.status?(e.classList.add("error-boarder"),this.message="Code is invalid"):(this.forgotForm.controls.code_status.setValue("approved"),this.forgotForm.controls.email_status.setValue("pending code"))}processForPassword(){const e=document.getElementById("password");if(e.classList.remove("error-border"),e.classList.remove("no-border"),e.classList.remove("sucess-border"),"INVALID"==this.forgotForm.controls.password.status)e.classList.add("error-boarder"),this.message="Password is not accepted";else{const o=document.getElementById("confirmationpassword");o.classList.remove("error-border"),o.classList.remove("no-border"),o.classList.remove("sucess-border"),this.forgotForm.controls.confirmationpassword.value!==this.forgotForm.controls.password.value?(o.classList.add("error-boarder"),this.message="Retyped password does not match your new password"):(this.forgotForm.controls.submited_at.setValue(new Date(Date.now())),this.changeNewPassword())}}submit(e){e.preventDefault(),this.message="","yet"!=this.email_status?"approved"!=this.email_status?"approved"!=this.code_status||this.processForPassword():this.processForCode():this.processForEmail()}changeNewPassword(){console.log({email:this.forgotForm.controls.email.value,code:this.forgotForm.controls.code.value,password:this.forgotForm.controls.password.value,confirmationpassword:this.forgotForm.controls.confirmationpassword.value}),this.message="Password was successfully changed. You can login now",this.changed=!0}resetFormStyle(){const e=document.getElementById("email");e.classList.remove("error-border"),e.classList.remove("no-border"),e.classList.remove("sucess-border")}postUserToServer(){let e={};return Object.entries(this.forgotForm.value).forEach(([o,i])=>{"created_at"!=o&&"submited_at"!=o&&(e[o]=i)}),e}clearBrowserAutoFill(){const e=document.getElementById("password"),o=document.getElementById("email");e.value=" ".trim(),o.value=" ".trim()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(s.qu),t.Y36(p.e),t.Y36(l.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-forgot"]],decls:40,vars:14,consts:[[1,"login-header","box-shadow"],[1,"container-fluid","d-flex","justify-content-between","align-items-center"],[1,"brand-logo"],["href","javascript:void()","routerLinkActive","router-link-active",3,"routerLink"],["src","assets/img/sparkling-green-logo-rectangle.PNG","alt",""],[1,"login-menu"],[1,"login-wrap","d-flex","align-items-center","flex-wrap","justify-content-center"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-6","col-lg-7"],["src","assets/img/Forgot password-pana.svg","alt",""],[1,"col-md-6","col-lg-5"],[1,"login-box","bg-white","box-shadow","border-radius-10"],[1,"login-title"],[1,"text-center","text-primary"],[3,"formGroup"],[1,"input-group","custom"],["type","email","formControlName","email","id","email","value","","placeholder","Email",1,"form-control","form-control-lg"],[1,"input-group-append","custom"],[1,"input-group-text"],[1,"icon-copy","dw","dw-user1"],["class","input-group custom",4,"ngIf"],[1,"row"],[1,"col-sm-12"],[1,"input-group","mb-0"],["class","btn btn-primary btn-lg btn-block","href","javascript:void()",3,"click",4,"ngIf"],["class","font-16 weight-600 pt-10 pb-10 text-center","data-color","#707373",4,"ngIf"],["href","javascript:void()","routerLinkActive","router-link-active",1,"btn","btn-outline-primary","btn-lg","btn-block",3,"routerLink"],["type","text","formControlName","code","value","","id","code","placeholder","Enter Code",1,"form-control","form-control-lg"],[1,"dw","dw-coding"],["formControlName","password","value","","id","password","placeholder","New Password",1,"form-control","form-control-lg",3,"type"],[1,"input-group-append","custom",3,"click"],[1,"dw",3,"ngClass"],["formControlName","confirmationpassword","value","","id","confirmationpassword","placeholder","Retype Password",1,"form-control","form-control-lg",3,"type"],["href","javascript:void()",1,"btn","btn-primary","btn-lg","btn-block",3,"click"],["data-color","#707373",1,"font-16","weight-600","pt-10","pb-10","text-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.qZA(),t.TgZ(5,"div",5),t.TgZ(6,"ul"),t.TgZ(7,"li"),t.TgZ(8,"a",3),t._uU(9,"Register"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t._UZ(14,"img",10),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"div",12),t.TgZ(17,"div",13),t.TgZ(18,"h2",14),t._uU(19,"Reset Password"),t.qZA(),t.qZA(),t.TgZ(20,"form",15),t.TgZ(21,"div",16),t._UZ(22,"input",17),t.TgZ(23,"div",18),t.TgZ(24,"span",19),t._UZ(25,"i",20),t.qZA(),t.qZA(),t.qZA(),t.YNc(26,M,5,1,"div",21),t.YNc(27,Q,5,5,"div",21),t.YNc(28,j,5,5,"div",21),t.TgZ(29,"div"),t.TgZ(30,"p"),t._uU(31),t.qZA(),t.qZA(),t.TgZ(32,"div",22),t.TgZ(33,"div",23),t.TgZ(34,"div",24),t.YNc(35,Y,2,0,"a",25),t.qZA(),t.YNc(36,S,2,0,"div",26),t.TgZ(37,"div",24),t.TgZ(38,"a",27),t._uU(39,"Login "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(11,O)),t.xp6(5),t.Q6J("routerLink",t.DdM(12,R)),t.xp6(12),t.Q6J("formGroup",o.forgotForm),t.xp6(2),t.uIk("readonly","yet"!=o.email_status||null),t.xp6(4),t.Q6J("ngIf","approved"==o.email_status),t.xp6(1),t.Q6J("ngIf","approved"==o.code_status),t.xp6(1),t.Q6J("ngIf","VALID"==o.password_status),t.xp6(3),t.Oqu(o.message),t.xp6(4),t.Q6J("ngIf",!o.changed),t.xp6(1),t.Q6J("ngIf",!o.changed),t.xp6(2),t.Q6J("routerLink",t.DdM(13,V)))},directives:[l.yS,l.Od,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.O5,d.mk],styles:[""]}),r})()}];let z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[l.Bz.forChild(G)],l.Bz]}),r})();var H=a(4081);let W=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[d.ez,z,H.m]]}),r})()}}]);