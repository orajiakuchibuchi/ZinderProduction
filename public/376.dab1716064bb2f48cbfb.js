"use strict";(self.webpackChunksparklingv2=self.webpackChunksparklingv2||[]).push([[376],{9376:(F,u,r)=>{r.r(u),r.d(u,{WithdrawModule:()=>_});var Z=r(8583),l=r(4655),t=r(7716),s=r(5947),m=r(6627);const g=function(){return["/accounting/home"]};let w=(()=>{class i{constructor(e){this.sc=e,this.tab="View",this.loadForm=!1,this.listOfWithdraw=0}ngOnInit(){}navigateMeToANewPage(e){this.sc.changePage(e)}goto(e,a){this.tab=a,this.loadForm="Create"==this.tab}navigateTo(e){this.sc.changePage(e)}setListOfWithdraw(e){this.listOfWithdraw=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-index"]],decls:36,vars:2,consts:[[1,"page-header"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"title"],["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void()","routerLinkActive","router-link-active",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"font-24","weight-500","mb-10"],[1,"col-12","pd-20","pt-10"],[1,"card","card-box","m-2"],[1,"card-body"],[1,"tab"],["role","tablist",1,"nav","nav-tabs","customtab"],[1,"nav-item"],["data-toggle","tab","href","accounting/withdraw#view","role","tab","aria-selected","true",1,"nav-link","active",3,"click"],["data-toggle","tab","href","accounting/withdraw#create","role","tab","aria-selected","false",1,"nav-link",3,"click"],["href","javascript:void()",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4"),t._uU(5,"Withdraw"),t.qZA(),t.qZA(),t.TgZ(6,"nav",4),t.TgZ(7,"ol",5),t.TgZ(8,"li",6),t.TgZ(9,"a",7),t._uU(10,"Home"),t.qZA(),t.qZA(),t.TgZ(11,"li",8),t._uU(12," Withdraw "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"div",9),t.TgZ(15,"div",10),t._uU(16,"All Withdraw"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",1),t.TgZ(18,"div",11),t.TgZ(19,"div",12),t.TgZ(20,"div",13),t.TgZ(21,"div",14),t.TgZ(22,"ul",15),t.TgZ(23,"li",16),t.TgZ(24,"a",17),t.NdJ("click",function(){return a.goto("withdraw#view","View")}),t._uU(25,"View"),t.qZA(),t.qZA(),t.TgZ(26,"li",16),t.TgZ(27,"a",18),t.NdJ("click",function(){return a.goto("withdraw#create","Create")}),t._uU(28,"Create"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div"),t.TgZ(30,"a",19),t.NdJ("click",function(){return a.navigateMeToANewPage("accounting/withdraw/view/")}),t.TgZ(31,"mat-icon"),t._uU(32,"visibility"),t.qZA(),t.qZA(),t.TgZ(33,"a",19),t.NdJ("click",function(){return a.navigateMeToANewPage("accounting/withdraw/create/")}),t.TgZ(34,"mat-icon"),t._uU(35,"edit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("routerLink",t.DdM(1,g)))},directives:[l.yS,l.Od,m.Hw],styles:[""]}),i})();var n=r(3679),p=r(5304),v=r(8002),A=r(3342),T=r(205),f=r(1659),q=r(1521),h=r(4322);const b=function(){return["/accounting/home"]},C=function(){return["/accounting/withdraw"]};function W(i,o){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij("Scheduled Time: ",e.withdrawalData.scheduledTime,"")}}function x(i,o){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij("External Zinder Account: ",e.withdrawalData.externalZinderAccount,"")}}const I=function(){return["/accounting/home"]},S=function(){return["/accounting/wallet"]},k=[{path:"",component:w},{path:"create",component:(()=>{class i{constructor(e,a,c,d,D,J){this.fb=e,this.ds=a,this.auth=c,this.router=d,this.sc=D,this.walletService=J,this.errors="",this.saved=!1,this.message="",this.url="",this.withdrawalForm=this.fb.group({wallet:["",n.kI.required],amount:["",n.kI.required],withdrawalTime:["instant",n.kI.required],scheduledTime:[""],withdrawalAccount:["zinder",n.kI.required],externalZinderAccount:[""]})}ngOnInit(){this.url=this.router.url}saveCompleted(e){}get firstControls(){return this.withdrawalForm.controls}get secondControls(){return this.withdrawalForm.controls}submit(){let e={who:"GUEST",firstName:this.firstControls.firstName.value.trim(),lastName:this.firstControls.lastName.value.trim(),country:this.firstControls.country.value.trim(),phone:this.firstControls.phone.value,password:this.secondControls.password.value.trim(),role:["Admin"],created_at:new Date(Date.now()).toISOString(),updated_at:new Date(Date.now()).toISOString(),status:"Active"};this.ds.showSpinner(),this.auth.register(e).pipe((0,p.K)(a=>this.handleError(a.response)),(0,v.U)(a=>a),(0,A.b)(()=>this.saved=!0)).subscribe(a=>{this.ds.showSpinner(),this.ds.oSuccessNotification("Withdraw Successful",this.message),this.message=a.response,this.ds.hideSpinner()})}handleError(e){return this.ds.showSpinner(),this.ds.oErrorNotification("Opps",e),this.ds.hideSpinner(),"Withdraw not successful."==e&&this.router.navigate(["accounting/withdraw"]),(0,T._)(e)}loginnow(){this.router.navigate(["acccounting/withdraw"])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.qu),t.Y36(f.U),t.Y36(q.e),t.Y36(l.F0),t.Y36(s.x),t.Y36(h.X))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create"]],decls:52,vars:4,consts:[[1,"page-header"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"title"],["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void()","routerLinkActive","router-link-active",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container"],["{{formGroup}}","withdrawalForm",3,"ngSubmit"],[1,"form-group"],["for","wallet"],["formControlName","wallet","id","wallet",1,"form-control"],["value","wallet1"],["value","wallet2"],["value","wallet3"],["for","amount"],["type","number","formControlName","amount","id","amount",1,"form-control"],["for","withdrawalTime"],["formControlName","withdrawalTime","id","withdrawalTime",1,"form-control"],["value","instant"],["value","scheduled"],["for","withdrawalAccount"],["formControlName","withdrawalAccount","id","withdrawalAccount",1,"form-control"],["value","zinder"],["value","other"],["type","submit",1,"btn","btn-primary"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4"),t._uU(5,"Withdraw"),t.qZA(),t.qZA(),t.TgZ(6,"nav",4),t.TgZ(7,"ol",5),t.TgZ(8,"li",6),t.TgZ(9,"a",7),t._uU(10,"Home"),t.qZA(),t.qZA(),t.TgZ(11,"li",6),t.TgZ(12,"a",7),t._uU(13,"Withdraw"),t.qZA(),t.qZA(),t.TgZ(14,"li",8),t._uU(15," Create "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",9),t.TgZ(17,"h2"),t._uU(18,"Create Withdrawal"),t.qZA(),t.TgZ(19,"form",10),t.NdJ("ngSubmit",function(){return a.submit()}),t.TgZ(20,"div",11),t.TgZ(21,"label",12),t._uU(22,"Select Wallet"),t.qZA(),t.TgZ(23,"select",13),t.TgZ(24,"option",14),t._uU(25,"Wallet 1"),t.qZA(),t.TgZ(26,"option",15),t._uU(27,"Wallet 2"),t.qZA(),t.TgZ(28,"option",16),t._uU(29,"Wallet 3"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",11),t.TgZ(31,"label",17),t._uU(32,"Amount"),t.qZA(),t._UZ(33,"input",18),t.qZA(),t.TgZ(34,"div",11),t.TgZ(35,"label",19),t._uU(36,"Time of Withdrawal"),t.qZA(),t.TgZ(37,"select",20),t.TgZ(38,"option",21),t._uU(39,"Instant"),t.qZA(),t.TgZ(40,"option",22),t._uU(41,"Scheduled"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",11),t.TgZ(43,"label",23),t._uU(44,"Withdrawal Account"),t.qZA(),t.TgZ(45,"select",24),t.TgZ(46,"option",25),t._uU(47,"Zinder Account"),t.qZA(),t.TgZ(48,"option",26),t._uU(49,"Other Account"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"button",27),t._uU(51,"Create Withdrawal"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("routerLink",t.DdM(2,b)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,C)))},directives:[l.yS,l.Od,n._Y,n.JL,n.F,n.EJ,n.JJ,n.u,n.YN,n.Kr,n.wV,n.Fj],styles:[""]}),i})()},{path:"view",component:(()=>{class i{constructor(e,a,c){this.route=e,this.sc=a,this.walletService=c,this.withdrawalId="",this.route.params.subscribe(d=>{this.withdrawalId=d.id})}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.gz),t.Y36(s.x),t.Y36(h.X))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view"]],decls:34,vars:11,consts:[[1,"page-header"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"title"],["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void()","routerLinkActive","router-link-active",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container"],[4,"ngIf"],["routerLink","/"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4"),t._uU(5,"Withdraw"),t.qZA(),t.qZA(),t.TgZ(6,"nav",4),t.TgZ(7,"ol",5),t.TgZ(8,"li",6),t.TgZ(9,"a",7),t._uU(10,"Home"),t.qZA(),t.qZA(),t.TgZ(11,"li",6),t.TgZ(12,"a",7),t._uU(13,"Withdraw"),t.qZA(),t.qZA(),t.TgZ(14,"li",8),t._uU(15," View "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",9),t.TgZ(17,"h2"),t._uU(18,"Withdrawal Details"),t.qZA(),t.TgZ(19,"div"),t.TgZ(20,"p"),t._uU(21),t.qZA(),t.TgZ(22,"p"),t._uU(23),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA(),t.TgZ(26,"p"),t._uU(27),t.qZA(),t.YNc(28,W,2,1,"p",10),t.TgZ(29,"p"),t._uU(30),t.qZA(),t.YNc(31,x,2,1,"p",10),t.qZA(),t.TgZ(32,"a",11),t._uU(33,"Back to Withdrawals"),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("routerLink",t.DdM(9,I)),t.xp6(3),t.Q6J("routerLink",t.DdM(10,S)),t.xp6(9),t.hij("Withdrawal ID: ",a.withdrawalData.id,""),t.xp6(2),t.hij("Wallet: ",a.withdrawalData.wallet,""),t.xp6(2),t.hij("Amount: ",a.withdrawalData.amount,""),t.xp6(2),t.hij("Time of Withdrawal: ",a.withdrawalData.withdrawalTime,""),t.xp6(1),t.Q6J("ngIf","scheduled"===a.withdrawalData.withdrawalTime),t.xp6(2),t.hij("Withdrawal Account: ",a.withdrawalData.withdrawalAccount,""),t.xp6(1),t.Q6J("ngIf","zinder"===a.withdrawalData.withdrawalAccount))},directives:[l.yS,l.Od,Z.O5],styles:[""]}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.Bz.forChild(k)],l.Bz]}),i})();var N=r(8831);let _=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[Z.ez,y,N.m]]}),i})()}}]);