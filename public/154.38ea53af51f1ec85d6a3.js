"use strict";(self.webpackChunksparklingv2=self.webpackChunksparklingv2||[]).push([[154],{6290:(D,P,o)=>{o.d(P,{G:()=>r});var e=o(205),x=o(3342),A=o(5304),O=o(3190),t=o(7716),n=o(916),_=o(7613),C=o(836),h=o(4758),I=o(1659),w=o(4655),m=o(1521),T=o(5947),p=o(8583),y=o(4769),u=o(3679);function M(l,d){if(1&l&&(t.TgZ(0,"h3",50),t._uU(1),t.ALo(2,"slice"),t.qZA()),2&l){const a=d.ngIf;t.xp6(1),t.Oqu(a?a.short_name:t.Dn7(2,1,"No Subscription",0,20))}}function b(l,d){1&l&&(t.TgZ(0,"h3",50),t._uU(1),t.qZA()),2&l&&(t.xp6(1),t.Oqu("No Subscription"))}function U(l,d){if(1&l&&(t.TgZ(0,"span",51),t._uU(1),t.qZA()),2&l){const a=d.ngIf;t.xp6(1),t.AsE("",a.firstName," ",a.lastName,"")}}function v(l,d){1&l&&(t.TgZ(0,"span",34),t._uU(1,"*"),t.qZA())}function E(l,d){1&l&&t._UZ(0,"i",52)}let r=(()=>{class l{constructor(a,c,f,i,g,s,Z,S){this._fs=a,this._company=c,this._aps=f,this._us=i,this._ds=g,this.router=s,this._auth=Z,this.ss=S,this.user$=this._us.user$,this.newCompany={name:"",website:"",logo:"",country:"",address:""},this.currenntCompany=this._company.company$.pipe((0,x.b)(L=>console.log(L))),this.app=this._aps.onoingApp$,this.runningSchool=null}ngOnInit(){localStorage.getItem("runningCompany")&&(this._ds.showSpinner(),this._company.getCompanyApi$(localStorage.getItem("runningCompany")).pipe((0,A.K)(a=>(this._ds.hideSpinner(),this._ds.oErrorNotification("Opps","Issues Fetching company info. Please reload"),(0,e._)(a)))).subscribe(a=>{this._ds.hideSpinner(),this._company.company=a})),this._company.company$.subscribe(a=>{this.runningSchool=a}),this.user$.subscribe(),this.app.subscribe(),$("#notification-header-dropdownmenu").click(a=>{a.stopPropagation(),this.prevent(a)})}prevent(a){a.preventDefault()}navigateTo(a){this.router.navigate([a])}selectCompany(a){0==a.target.value.length&&document.getElementById("showCreateCompanyModal").click()}showmodal(){document.getElementById("showCreateCompanyModal").click()}handleFileInput(a){const f=a.target.files.item(0);let i=new FormData;i.append("file",f,f.name),this._ds.showSpinner(),this._fs.upload(i).pipe((0,A.K)(g=>(this._ds.hideSpinner(),this._ds.oErrorNotification("Issues uploading","Issues with uploading the selected image. Please select another file"),(0,e._)(g)))).subscribe(g=>{this._ds.hideSpinner(),this._ds.oSuccessNotification("Company Icon Uploaded","Successfully saved company icon for upload"),this.newCompany.logo=g.file})}save(a){if(a.preventDefault(),!this.newCompany.name)return void this._ds.openErrorNotification("Name","Company name is required");if(!this.newCompany.logo)return void this._ds.openErrorNotification("Logo","Company logo is required");if(!this.newCompany.country)return void this._ds.openErrorNotification("Country","Company country is required");if(!this.newCompany.address)return void this._ds.openErrorNotification("Address","Company address is required");let c=new Date(Date.now()),f=null,i=`ZC-${this.ss.hashFnv32a(`${c}-${localStorage.getItem("_authToken")}`,!0,8)}`;this._ds.showSpinner(),this._company.add(Object.assign(Object.assign({},this.newCompany),{cerated_at:c,updated_at:c,status:"Active",code:i})).pipe((0,O.w)(g=>(f=g,this._company.adduser({company:i,user:localStorage.getItem("_authToken")}).pipe((0,A.K)(s=>(this.handleError(s),(0,e._)(s)))))),(0,x.b)(g=>{this._company.saveSessionCompany(g.company),this._company.company=f}),(0,A.K)(g=>(this.handleError(g),(0,e._)(g)))).subscribe(g=>{this._ds.hideSpinner(),this.newCompany.name="",this.newCompany.website="",this.newCompany.logo="",this.newCompany.country="",document.getElementById("closeAddCompanyModal").click()})}closeModal(){const a=document.getElementById("selectCompany_header");a&&(a.options.selectedIndex=0)}handleError(a){this._ds.oErrorNotification("Opps","Issues registering company. Please contact support"),this._ds.hideSpinner()}handleSelectChange(a,c,f,i){}logout(){this._auth.logout().subscribe(a=>{this.router.navigate([""])})}}return l.\u0275fac=function(a){return new(a||l)(t.Y36(n.I),t.Y36(_.J),t.Y36(C.z),t.Y36(h.K),t.Y36(I.U),t.Y36(w.F0),t.Y36(m.e),t.Y36(T.x))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-header"]],decls:96,vars:17,consts:[["id","header",1,"header","p-2"],[1,"header-left"],["id","iclist",1,"menu-icon","bi","bi-list"],["class","pt-3",4,"ngIf"],["id","hdrh",1,"header-right"],[1,"dashboard-setting","user-notification"],[1,"dropdown"],["href","javascript:;","data-toggle","right-sidebar",1,"dropdown-toggle","no-arrow"],[1,"icon-copy","bi","bi-grid-3x3-gap"],[1,"user-notification"],["href","javascript:;","role","button","data-toggle","dropdown",1,"dropdown-toggle","no-arrow"],["alt","",1,"dark-logo","lgbv","mr-2",3,"src"],[1,"badge","notification-active"],["id","notification-header-dropdownmenu",1,"dropdown-menu","dropdown-menu-right"],[1,"notification-list","mx-h-350","customscroll"],[1,"user-info-dropdown"],["href","javascript:;","role","button","data-toggle","dropdown",1,"dropdown-toggle"],[1,"user-icon"],[1,"dw","dw-user1"],["class","user-name",4,"ngIf"],[1,"dropdown-menu","dropdown-menu-right","dropdown-menu-icon-list"],["href","javascript:void()",1,"dropdown-item",3,"click"],[1,"dw","dw-settings2"],[1,"dw","dw-money"],[1,"dw","dw-calendar"],[1,"dw","dw-logout"],["id","create-company-modal","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"p-4"],[1,"login-title"],[1,"text-center","text-primary"],[1,"form-group","row"],[1,"col-sm-12","col-md-12","col-lg-12","col-form-label"],[1,"text-danger"],[1,"col-sm-12","col-md-12","col-lg-12"],["name","name","type","text","placeholder","Company name",1,"form-control",3,"ngModel","ngModelChange"],["name","address","type","text","placeholder","Company Address",1,"form-control",3,"ngModel","ngModelChange"],["name","country","type","text","placeholder","Country",1,"form-control",3,"ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["class","icon-copy bi bi-file-earmark-check-fill text-success",4,"ngIf"],[1,"custom-file"],["type","file","name","logo","placeholder","Company Logo",1,"custom-file-input",3,"change"],[1,"custom-file-label"],["name","website","type","text","placeholder","Link to company website (Optional)",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-sm-6","p-2"],[1,"input-group","mb-0"],["href","javascript:void()","type","button","data-dismiss","modal","id","closeAddCompanyModal",1,"btn","btn-danger","btn-block","btn-sm",3,"click"],["href","javascript:void()",1,"btn","btn-success","btn-block","btn-sm",3,"click"],[1,"pt-3"],[1,"user-name"],[1,"icon-copy","bi","bi-file-earmark-check-fill","text-success"]],template:function(a,c){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"div",2),t.YNc(3,M,3,5,"h3",3),t.ALo(4,"async"),t.YNc(5,b,2,1,"h3",3),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"a",7),t._UZ(11,"i",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",6),t.TgZ(14,"a",10),t._UZ(15,"img",11),t._UZ(16,"span",12),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"div",14),t._UZ(19,"app-notification"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",15),t.TgZ(21,"div",6),t.TgZ(22,"a",16),t.TgZ(23,"span",17),t._UZ(24,"i",18),t.qZA(),t.YNc(25,U,2,2,"span",19),t.ALo(26,"async"),t.qZA(),t.TgZ(27,"div",20),t.TgZ(28,"a",21),t.NdJ("click",function(){return c.navigateTo("admin/home/setting")}),t._UZ(29,"i",18),t._uU(30," Profile"),t.qZA(),t.TgZ(31,"a",21),t.NdJ("click",function(){return c.navigateTo("admin/home/notification")}),t._UZ(32,"i",22),t._uU(33," Notification"),t.qZA(),t.TgZ(34,"a",21),t.NdJ("click",function(){return c.navigateTo("admin/pricing")}),t._UZ(35,"i",23),t._uU(36," Pricing"),t.qZA(),t.TgZ(37,"a",21),t.NdJ("click",function(){return c.navigateTo("admin/booking/records")}),t._UZ(38,"i",24),t._uU(39," Booking"),t.qZA(),t.TgZ(40,"a",21),t.NdJ("click",function(){return c.logout()}),t._UZ(41,"i",25),t._uU(42," Log Out"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",26),t.TgZ(44,"div",27),t.TgZ(45,"div",28),t.TgZ(46,"div",29),t.TgZ(47,"div",30),t.TgZ(48,"h2",31),t._uU(49," New Company "),t.qZA(),t.qZA(),t.TgZ(50,"form"),t.TgZ(51,"div",32),t.TgZ(52,"label",33),t._uU(53,"Name "),t.TgZ(54,"span",34),t._uU(55,"*"),t.qZA(),t.qZA(),t.TgZ(56,"div",35),t.TgZ(57,"input",36),t.NdJ("ngModelChange",function(i){return c.newCompany.name=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"div",32),t.TgZ(59,"label",33),t._uU(60,"Address "),t.TgZ(61,"span",34),t._uU(62,"*"),t.qZA(),t.qZA(),t.TgZ(63,"div",35),t.TgZ(64,"input",37),t.NdJ("ngModelChange",function(i){return c.newCompany.address=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(65,"div",32),t.TgZ(66,"label",33),t._uU(67,"Country "),t.TgZ(68,"span",34),t._uU(69,"*"),t.qZA(),t.qZA(),t.TgZ(70,"div",35),t.TgZ(71,"input",38),t.NdJ("ngModelChange",function(i){return c.newCompany.country=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(72,"div",32),t.TgZ(73,"label",33),t._uU(74),t.YNc(75,v,2,0,"span",39),t.YNc(76,E,1,0,"i",40),t.qZA(),t.TgZ(77,"div",35),t.TgZ(78,"div",41),t.TgZ(79,"input",42),t.NdJ("change",function(i){return c.handleFileInput(i)}),t.qZA(),t.TgZ(80,"label",43),t._uU(81,"Select Image"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(82,"div",32),t.TgZ(83,"label",33),t._uU(84,"Website"),t.qZA(),t.TgZ(85,"div",35),t.TgZ(86,"input",44),t.NdJ("ngModelChange",function(i){return c.newCompany.website=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(87,"div",45),t.TgZ(88,"div",46),t.TgZ(89,"div",47),t.TgZ(90,"a",48),t.NdJ("click",function(){return c.closeModal()}),t._uU(91,"Close"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(92,"div",46),t.TgZ(93,"div",47),t.TgZ(94,"a",49),t.NdJ("click",function(i){return c.save(i)}),t._uU(95,"Create"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(3),t.Q6J("ngIf",t.lcZ(4,11,c.app)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(6,13,c.app)),t.xp6(10),t.Q6J("src","assets/img/zinder_1.svg",t.LSH),t.xp6(10),t.Q6J("ngIf",t.lcZ(26,15,c.user$)),t.xp6(32),t.Q6J("ngModel",c.newCompany.name),t.xp6(7),t.Q6J("ngModel",c.newCompany.address),t.xp6(7),t.Q6J("ngModel",c.newCompany.country),t.xp6(3),t.hij("",c.newCompany.logo?"Uploaded ":"Upload Logo "," "),t.xp6(1),t.Q6J("ngIf",!c.newCompany.logo),t.xp6(1),t.Q6J("ngIf",c.newCompany.logo),t.xp6(10),t.Q6J("ngModel",c.newCompany.website))},directives:[p.O5,y.c,u._Y,u.JL,u.F,u.Fj,u.JJ,u.On],pipes:[p.Ov,p.OU],styles:[".header-search[_ngcontent-%COMP%]{max-width:250px}.d-none[_ngcontent-%COMP%]{display:none!important}.h2[_ngcontent-%COMP%]{color:#2253a1}.bp[_ngcontent-%COMP%]{background-color:#127dc5}.lgbv[_ngcontent-%COMP%]{max-height:30px;min-height:20px;border-radius:50px;border:2px solid #284192;min-width:20px;width:29px;padding-top:5px}.commpico[_ngcontent-%COMP%]{padding-right:0;padding-top:15px;margin-right:0}"]}),l})()},6093:(D,P,o)=>{o.d(P,{u:()=>U});var e=o(8002),x=o(6888),A=o(3190),O=o(4612),t=o(3342),n=o(7716),_=o(4655),C=o(7613),h=o(836),I=o(4758),w=o(1659),m=o(1521),T=o(8583);const p=["accordionmenu"];function y(v,E){if(1&v){const r=n.EpF();n.TgZ(0,"li"),n.TgZ(1,"a",2),n.NdJ("click",function(d){const c=n.CHM(r).$implicit;return n.oxw(3).navigateTo(d,c)}),n._uU(2),n.qZA(),n.qZA()}if(2&v){const r=E.$implicit;n.xp6(2),n.Oqu(r.name)}}const u=function(v,E){return{active:v,"no-arrow":E}};function M(v,E){if(1&v){const r=n.EpF();n.TgZ(0,"li",25),n.TgZ(1,"a",26),n.NdJ("click",function(d){const c=n.CHM(r).$implicit;return n.oxw(2).navigateTo(d,c)}),n._UZ(2,"span"),n.TgZ(3,"span",16),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"ul",17),n.YNc(6,y,3,1,"li",27),n.qZA(),n.qZA()}if(2&v){const r=E.$implicit,l=n.oxw(2);n.xp6(1),n.Q6J("ngClass",n.WLB(5,u,l.activePage==r.name,r.children.length<1)),n.xp6(1),n.Tol(r.icon),n.xp6(2),n.Oqu(r.name),n.xp6(2),n.Q6J("ngForOf",r.children)}}function b(v,E){if(1&v&&(n.TgZ(0,"div"),n.YNc(1,M,7,8,"li",24),n.qZA()),2&v){const r=n.oxw();n.xp6(1),n.Q6J("ngForOf",r.menu.get(r.appcode))}}let U=(()=>{class v{constructor(r,l,d,a,c,f){this.router=r,this._cs=l,this._app=d,this._us=a,this._ds=c,this._auth=f,this.user=null,this.accessFullData=null,this.activePage="",this.isAdmin=this._us.user$.pipe((0,e.U)(i=>i.role.includes("Admin"))),this.isMaster=this._us.user$.pipe((0,e.U)(i=>i.role.includes("Master"))),this.menu=new Map,this.config$=this._ds.preference$,this.menu$=this._app.selectedApp$.pipe((0,x.n)(i=>!i),(0,A.w)(i=>{const g=this._us.getuser();return this._us.getMenusApi$({roles_like:g.role.toString(),app_code:i.code}).pipe((0,O.b)(s=>this._us.getMenusApi$({roles:"everyone",app_code:i.code}).pipe((0,t.b)(Z=>this.set_menu(i.code,Z)))),(0,t.b)(s=>this.set_menu(i.code,s)))}))}ngAfterViewInit(){$('.menu-icon, [data-toggle="left-sidebar-close"]').on("click",()=>{$("body").toggleClass("sidebar-shrink"),$(".left-side-bar").toggleClass("open"),$(".mobile-menu-overlay").toggleClass("show")}),$(this.accordion.nativeElement).each(()=>{var r=window.location.href.split("/").pop();$(this.accordion.nativeElement).find('a[href="'+r+'"]').addClass("active")}),$("#accordionmenu").vmenuModule({Speed:400,autostart:!1,autohide:!0}),$("input:radio[name=menu-dropdown-icon]").change(()=>{var r=["sidebar-menu"];r.push($("input:radio[name=menu-dropdown-icon]:checked").val().toLowerCase().replace(/\s+/,"-")),r.push($("input:radio[name=menu-list-icon]:checked").val().toLowerCase().replace(/\s+/,"-")),$(".sidebar-menu").attr("class",r.join(" ")),this.setOptions("menuDropdownIcon",r.slice(-2)[0])}),$("input:radio[name=menu-list-icon]").change(()=>{var r=["sidebar-menu"];r.push($("input:radio[name=menu-dropdown-icon]:checked").val().toLowerCase().replace(/\s+/,"-")),r.push($("input:radio[name=menu-list-icon]:checked").val().toLowerCase().replace(/\s+/,"-")),$(".sidebar-menu").attr("class",r.join(" ")),this.setOptions("menuListIcon",r.slice(-1)[0])}),$.fn.vmenuModule=r=>{var l,d,a=$.extend({Speed:220,autostart:!0,autohide:1},r);(d=(l=$(this.accordion.nativeElement)).find("ul").parent("li").children("a")).attr("data-option","off"),d.unbind("click").on("click",()=>{var c=$(this.accordion.nativeElement);a.autohide&&c.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(a.Speed/1.2,()=>{$(this.accordion.nativeElement).parent("li").children("a").attr("data-option","off"),$(this.accordion.nativeElement).parent("li").removeClass("show")}),"off"==c.attr("data-option")&&c.parent("li").children("ul").slideDown(a.Speed,()=>{c.attr("data-option","on"),c.parent("li").addClass("show")}),"on"==c.attr("data-option")&&(c.attr("data-option","off"),c.parent("li").children("ul").slideUp(a.Speed),c.parent("li").removeClass("show"))}),a.autostart?l.find("a").each(()=>{$(this.accordion.nativeElement).parent("li").parent("ul").slideDown(a.Speed,()=>{$(this.accordion.nativeElement).parent("li").children("a").attr("data-option","on")})}):l.find("a.active").each(()=>{$(this.accordion.nativeElement).parent("li").parent("ul").slideDown(a.Speed,()=>{$(this.accordion.nativeElement).parent("li").children("a").attr("data-option","on"),$(this.accordion.nativeElement).parent("li").addClass("show")})})}}set_menu(r,l){let d=this.menu.get(r);if(d){var a=new Set(d.map(f=>f.id));d=[...d,...l.filter(f=>!a.has(f.id))]}else d=l;this.menu.set(r,d)}ngOnInit(){this.menu$.subscribe(),this.setActivePage()}logout(){this._auth.logout().subscribe(r=>{this._us.forgetUser(),this.router.navigate([""])})}setOptions(r,l){var d=Object.assign({},this.getOptions());d[r]=l,localStorage.setItem("optionsObject",JSON.stringify(d))}getOptions(){return JSON.parse(localStorage.getItem("optionsObject"))}setActivePage(){switch(window.location.href.split("/")[4]){case"home":this.activePage="Home";break;case"user-role":this.activePage="Users & Roles";break;case"pricing":this.activePage="Pricing";break;case"booking":this.activePage="Booking";break;case"recruitment":this.activePage="Recruitment"}}get appcode(){return this._app.appcode}navigateTo(r,l){r.preventDefault();const d=l.link;if(l.children.length>0){const a=r.target.parentElement;a.classList.toggle("show"),a.children[1].style.display=a.className.includes("show")?"block":"none"}d&&d.length>0&&this.router.navigate([d]).catch(a=>{}).finally(()=>{this.setActivePage()})}website(r,l){r.preventDefault(),this.router.navigate([l]).catch(d=>{}).finally(()=>{this.setActivePage()})}}return v.\u0275fac=function(r){return new(r||v)(n.Y36(_.F0),n.Y36(C.J),n.Y36(h.z),n.Y36(I.K),n.Y36(w.U),n.Y36(m.e))},v.\u0275cmp=n.Xpm({type:v,selectors:[["app-left-sidebar"]],viewQuery:function(r,l){if(1&r&&n.Gf(p,5),2&r){let d;n.iGM(d=n.CRH())&&(l.accordion=d.first)}},inputs:{user:"user",accessFullData:"accessFullData"},decls:39,vars:9,consts:[["id","left-side-bar",1,"left-side-bar"],[1,"brand-logo"],["href","javascript:void()",3,"click"],["alt","",1,"dark-logo","lgbv",3,"src"],["alt","",1,"light-logo","lgbv",3,"src"],["data-toggle","left-sidebar-close",1,"close-sidebar"],[1,"ion-close-round"],[1,"menu-block","customscroll"],[1,"sidebar-menu"],["id","accordionmenu"],["accordionmenu",""],[4,"ngIf"],[1,"dropdown-divider"],[1,"sidebar-small-cap"],["href","javascript:;",1,"dropdown-toggle"],[1,"micon","bi","bi-file-pdf"],[1,"mtext"],[1,"submenu"],["href","introduction.html"],["href","javascript:void()",1,"dropdown-toggle","no-arrow",3,"click"],[1,"micon","bi","bi-door-closed"],["href","javascript:void()","target","_blank",1,"dropdown-toggle","no-arrow",3,"click"],[1,"micon","bi","bi-layout-text-window-reverse"],["src","assets/vendors/images/coming-soon.png","alt","","width","25"],["class","dropdown","ngbDropdown","",4,"ngFor","ngForOf"],["ngbDropdown","",1,"dropdown"],["href","javascript:void()",1,"dropdown-toggle",3,"ngClass","click"],[4,"ngFor","ngForOf"]],template:function(r,l){if(1&r&&(n.TgZ(0,"div",0),n.ALo(1,"async"),n.TgZ(2,"div",1),n.TgZ(3,"a",2),n.NdJ("click",function(a){return l.website(a,"admin/home")}),n._UZ(4,"img",3),n._UZ(5,"img",4),n.qZA(),n.TgZ(6,"div",5),n._UZ(7,"i",6),n.qZA(),n.qZA(),n.TgZ(8,"div",7),n.TgZ(9,"div",8),n.TgZ(10,"ul",9,10),n.YNc(12,b,2,1,"div",11),n.ALo(13,"async"),n.TgZ(14,"li"),n._UZ(15,"div",12),n.qZA(),n.TgZ(16,"li"),n.TgZ(17,"div",13),n._uU(18,"Extra"),n.qZA(),n.qZA(),n.TgZ(19,"li"),n.TgZ(20,"a",14),n._UZ(21,"span",15),n.TgZ(22,"span",16),n._uU(23,"Support"),n.qZA(),n.qZA(),n.TgZ(24,"ul",17),n.TgZ(25,"li"),n.TgZ(26,"a",18),n._uU(27,"How To Use"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(28,"li"),n.TgZ(29,"a",19),n.NdJ("click",function(){return l.logout()}),n._UZ(30,"span",20),n.TgZ(31,"span",16),n._uU(32,"Log out"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(33,"li"),n.TgZ(34,"a",21),n.NdJ("click",function(a){return l.website(a,"")}),n._UZ(35,"span",22),n.TgZ(36,"span",16),n._uU(37,"Our Website "),n._UZ(38,"img",23),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&r){let d;n.Udp("background-color",null==(d=n.lcZ(1,5,l.config$))?null:d.sideNavColor),n.xp6(4),n.Q6J("src","assets/img/zinder_1.svg",n.LSH),n.xp6(1),n.Q6J("src","assets/img/zinder_1.svg",n.LSH),n.xp6(7),n.Q6J("ngIf",n.lcZ(13,7,l.menu$))}},directives:[T.O5,T.sg,T.mk],pipes:[T.Ov],styles:[".lgbv[_ngcontent-%COMP%]{max-height:150px;min-width:50px;width:100%;padding-top:4px}"]}),v})()},4769:(D,P,o)=>{o.d(P,{c:()=>n});var e=o(7716),x=o(1659),A=o(1562),O=o(8583);function t(_,C){if(1&_){const h=e.EpF();e.TgZ(0,"mat-expansion-panel",1),e.NdJ("opened",function(){return e.CHM(h).$implicit.status="seen"}),e.TgZ(1,"mat-expansion-panel-header"),e.TgZ(2,"mat-panel-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-panel-description"),e._uU(5),e.ALo(6,"date"),e.qZA(),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.qZA()}if(2&_){const h=C.$implicit;e.xp6(3),e.hij(" ",h.title," "),e.xp6(2),e.AsE(" ",e.lcZ(6,4,h.created_at)," ",h.status," "),e.xp6(3),e.Oqu(h.message)}}let n=(()=>{class _{constructor(h){this._ds=h,this.panelOpenState=!1,this.notifications$=this._ds.getNotificationApi$}ngOnInit(){this.notifications$.subscribe()}}return _.\u0275fac=function(h){return new(h||_)(e.Y36(x.U))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-notification"]],decls:3,vars:3,consts:[[3,"opened",4,"ngFor","ngForOf"],[3,"opened"]],template:function(h,I){1&h&&(e.TgZ(0,"mat-accordion"),e.YNc(1,t,9,6,"mat-expansion-panel",0),e.ALo(2,"async"),e.qZA()),2&h&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,I.notifications$)))},directives:[A.pp,O.sg,A.ib,A.yz,A.yK,A.u4],pipes:[O.Ov,O.uU],styles:[""]}),_})()},8500:(D,P,o)=>{o.d(P,{f:()=>O});var e=o(7716),x=o(5947),A=o(1659);let O=(()=>{class t{constructor(_,C){this.script=_,this._device=C,this.width=100,this.perfData=window.performance.timing,this.EstimatedTime=-(this.perfData.loadEventEnd-this.perfData.navigationStart),this.time=this.EstimatedTime/1e3%60*100,this.PercentageID=$("#percent1"),this.start=0,this.end=100,this.durataion=this.time}ngOnInit(){this.animateValue(this.PercentageID,this.start,this.end,this.durataion)}animateValue(_,C,h,I){var m=C,T=h>C?1:-1,p=Math.abs(Math.floor(I/(h-C))),y=$(_),u=setInterval(function(){m+=T,$(y).text(m+"%"),$("#bar1").css("width",m+"%"),m==h&&clearInterval(u)},p);setTimeout(()=>{$(".pre-loader").fadeOut(300),this._device.showPageLoader.next(0)},this.time)}}return t.\u0275fac=function(_){return new(_||t)(e.Y36(x.x),e.Y36(A.U))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-page-loader"]],decls:10,vars:0,consts:[[1,"pre-loader"],[1,"pre-loader-box"],[1,"loader-logo"],["src","assets/img/zinder_1.svg","height","200","width","300","alt",""],["id","progress_div",1,"loader-progress"],["id","bar1",1,"bar"],["id","percent1",1,"percent"],[1,"loading-text"]],template:function(_,C){1&_&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e._uU(7,"0%"),e.qZA(),e.TgZ(8,"div",7),e._uU(9,"Loading..."),e.qZA(),e.qZA(),e.qZA())},styles:[""]}),t})()},908:(D,P,o)=>{o.d(P,{Y:()=>f});var e=o(7716),x=o(4655),A=o(4758),O=o(1659),t=o(836),n=o(8583),_=o(7613),C=o(1521),h=o(3679),I=o(1957),w=o(6627);function m(i,g){1&i&&e._UZ(0,"img",19),2&i&&e.Q6J("src","assets/img/zinder_1.svg",e.LSH)}function T(i,g){if(1&i&&e._UZ(0,"img",19),2&i){const s=g.ngIf;e.Q6J("src",null==s?null:s.logo,e.LSH)}}function p(i,g){if(1&i&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&i){const s=e.oxw().ngIf;e.xp6(1),e.hij(" ",null==s?null:s.name," ")}}function y(i,g){if(1&i&&(e.TgZ(0,"label",16),e.YNc(1,m,1,1,"img",17),e.ALo(2,"async"),e.YNc(3,T,1,1,"img",17),e.ALo(4,"async"),e.YNc(5,p,2,1,"span",18),e.qZA()),2&i){const s=g.ngIf,Z=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,3,Z.currenntCompany)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,5,Z.currenntCompany)),e.xp6(2),e.Q6J("ngIf",s.name&&s.name.length)}}function u(i,g){1&i&&(e.TgZ(0,"label",21),e._uU(1," No Company "),e.qZA())}function M(i,g){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const s=g.$implicit;e.Q6J("value",s.code),e.xp6(1),e.hij("",s.name," ")}}function b(i,g){if(1&i&&(e.TgZ(0,"select",29),e.TgZ(1,"option",30),e._uU(2,"Change Company"),e.qZA(),e.YNc(3,M,2,2,"option",31),e.qZA()),2&i){const s=e.oxw().ngIf;e.xp6(3),e.Q6J("ngForOf",s)}}function U(i,g){if(1&i&&(e.TgZ(0,"div",27),e.YNc(1,b,4,1,"select",28),e.qZA()),2&i){const s=g.ngIf;e.xp6(1),e.Q6J("ngIf",s.length>0)}}function v(i,g){if(1&i&&(e.TgZ(0,"div",22),e.TgZ(1,"div",23),e.TgZ(2,"div",24),e.TgZ(3,"div",25),e.YNc(4,U,2,1,"div",26),e.ALo(5,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const s=e.oxw();e.xp6(4),e.Q6J("ngIf",e.lcZ(5,1,s.listOfCompanies$))}}function E(i,g){if(1&i&&(e.TgZ(0,"div",37),e.TgZ(1,"p",38),e._uU(2,"Dear "),e.TgZ(3,"strong"),e.TgZ(4,"i"),e._uU(5),e.qZA(),e.qZA(),e._uU(6,","),e._UZ(7,"br"),e._uU(8,"You are running this app via "),e.TgZ(9,"strong"),e.TgZ(10,"i"),e._uU(11),e.qZA(),e.qZA(),e._uU(12," with an assigned app role of "),e.TgZ(13,"strong"),e.TgZ(14,"i"),e._uU(15),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const s=g.ngIf,Z=e.oxw().ngIf;e.xp6(5),e.AsE("",null==s?null:s.firstName," ",null==s?null:s.lastName,""),e.xp6(6),e.Oqu(null==Z?null:Z.name),e.xp6(4),e.Oqu(null==s?null:s.role)}}function r(i,g){if(1&i&&(e.TgZ(0,"div",40),e._UZ(1,"app-choose-app",41),e.qZA()),2&i){const s=g.$implicit,Z=g.index;e.xp6(1),e.Q6J("id","choseAppFrom_"+Z)("app",s)}}function l(i,g){if(1&i&&(e.TgZ(0,"div",27),e.TgZ(1,"div",23),e.YNc(2,r,2,2,"div",39),e.ALo(3,"async"),e.qZA(),e.qZA()),2&i){const s=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,1,s.apps))}}function d(i,g){if(1&i&&(e.TgZ(0,"div",23),e.YNc(1,E,16,4,"div",33),e.ALo(2,"async"),e.TgZ(3,"label",34),e.TgZ(4,"span",35),e._uU(5,"My Apps "),e.qZA(),e.qZA(),e.YNc(6,l,4,3,"div",36),e.ALo(7,"async"),e.qZA()),2&i){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,s.user$)),e.xp6(5),e.Q6J("ngIf",e.lcZ(7,4,s.user$))}}function a(i,g){if(1&i){const s=e.EpF();e.TgZ(0,"button",42),e.NdJ("click",function(){return e.CHM(s),e.oxw().logout()}),e._UZ(1,"i",43),e.TgZ(2,"small"),e._uU(3," Lock Screen"),e.qZA(),e.qZA()}}function c(i,g){if(1&i){const s=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){return e.CHM(s),e.oxw().logout()}),e.TgZ(1,"mat-icon",45),e._uU(2,"exit_to_app"),e.qZA(),e.TgZ(3,"small"),e._uU(4," Log out"),e.qZA(),e.qZA()}}let f=(()=>{class i{constructor(s,Z,S,L,q,R,N){this.router=s,this._us=Z,this._ds=S,this._app=L,this.location=q,this._company=R,this._auth=N,this.accessFullData=null,this.user$=this._us.user$,this.notifications$=this._ds.getNotificationApi$,this.config=this._ds.preference$,this.selectedApp=this._app.selectedApp.asObservable(),this.apps=this._app.apps$,this.currenntCompany=this._company.company$,this.listOfCompanies$=this._company.companys$,this.changedAppEmmiter=new e.vpe}ngOnInit(){this.currenntCompany.subscribe(),$('[data-toggle="right-sidebar"]').on("click",function(){jQuery(".right-sidebar").addClass("right-sidebar-visible")}),$('[data-toggle="right-sidebar-close"]').on("click",function(){jQuery(".right-sidebar").removeClass("right-sidebar-visible")})}ngAfterViewInit(){}changeColor(s){this._ds.setPreference(s)}showmodal(){const s=document.getElementById("close-sidebar-right-tgds"),Z=document.getElementById("showCreateCompanyModal");s&&s.click(),Z&&Z.click()}logout(){this._auth.logout().subscribe(s=>{this._us.forgetUser(),this.router.navigate([""])})}changeApp(s){console.log(s);let Z="";"ZA-001"==s.code?Z="/admin":"ZA-002"==s.code&&(Z="/accounting"),this._app.selectedApp.next(s),this._app.saveLocalApp(s),this._ds.showPageLoader.next(20),this.router.navigateByUrl(Z,{skipLocationChange:!0}).then(()=>{this.router.navigate([`${Z}/home`])})}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(x.F0),e.Y36(A.K),e.Y36(O.U),e.Y36(t.z),e.Y36(n.Ye),e.Y36(_.J),e.Y36(C.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-right-sidebar"]],inputs:{accessFullData:"accessFullData"},outputs:{changedAppEmmiter:"changedAppEmmiter"},decls:23,vars:18,consts:[[1,"right-sidebar"],[1,"sidebar-title"],[1,"container-fluid"],["class","col-sm-12 col-md-12 col-form-label f11",4,"ngIf"],["class","col-sm-12 col-md-12 col-form-label text-white f11",4,"ngIf"],["id","close-sidebar-right-tgds","data-toggle","right-sidebar-close",1,"close-sidebar","text-white"],[1,"icon-copy","ion-close-round"],[1,"right-sidebar-body","customscroll"],[1,"right-sidebar-body-content"],["class","mx-h-350 mt-10 P-2 customscroll",4,"ngIf"],["class","row",4,"ngIf"],[1,"reset-options","pt-30","text-center","border-t-2"],["data-backdrop","static","data-toggle","modal","data-target","#create-company-modal","type","button",1,"btn","btn-sm","btn-primary","border-0","weight-500","bp","m-2"],[1,"icon-copy","bi","bi-person-workspace"],["class","btn btn-danger m-2","style","background-color: #dd1212; ","id","reset-settings",3,"click",4,"ngIf"],["class","btn btn-outline-danger m-2",3,"click",4,"ngIf"],[1,"col-sm-12","col-md-12","col-form-label","f11"],["alt","","class","dark-logo lgbv mr-2",3,"src",4,"ngIf"],["class","f11 text-white wrap",4,"ngIf"],["alt","",1,"dark-logo","lgbv","mr-2",3,"src"],[1,"f11","text-white","wrap"],[1,"col-sm-12","col-md-12","col-form-label","text-white","f11"],[1,"mx-h-350","mt-10","P-2","customscroll"],[1,"row"],[1,"col-12"],[1,"form-group","row"],["class","col-sm-12 col-md-12",4,"ngIf"],[1,"col-sm-12","col-md-12"],["class","form-control custom-select","name","slectedCompanyRight","data-size","5","data-style","btn-outline-secondary","data-max-options","10",4,"ngIf"],["name","slectedCompanyRight","data-size","5","data-style","btn-outline-secondary","data-max-options","10",1,"form-control","custom-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","col-md-12",4,"ngIf"],[1,"col-sm-12","col-md-12","col-form-label","border-t-2"],[1,"btn-block","font-weight-400","font-16","weight-500"],["class","col-sm-12 col-md-12 ",4,"ngIf"],[1,"col-md-12"],[1,"font-12"],["class","col-md-4 p-2 app_item",4,"ngFor","ngForOf"],[1,"col-md-4","p-2","app_item"],[3,"id","app"],["id","reset-settings",1,"btn","btn-danger","m-2",2,"background-color","#dd1212",3,"click"],[1,"icon-copy","bi","bi-file-lock2-fill"],[1,"btn","btn-outline-danger","m-2",3,"click"],[1,"font-14"]],template:function(s,Z){1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.YNc(3,y,6,7,"label",3),e.ALo(4,"async"),e.YNc(5,u,2,0,"label",4),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"i",6),e.qZA(),e.qZA(),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.YNc(11,v,6,3,"div",9),e.ALo(12,"async"),e.YNc(13,d,8,6,"div",10),e.ALo(14,"async"),e.TgZ(15,"div",11),e.TgZ(16,"button",12),e._UZ(17,"i",13),e._uU(18," New Company "),e.qZA(),e.YNc(19,a,4,0,"button",14),e.ALo(20,"async"),e.YNc(21,c,5,0,"button",15),e.ALo(22,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&s&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,6,Z.currenntCompany)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(6,8,Z.currenntCompany)),e.xp6(6),e.Q6J("ngIf",e.lcZ(12,10,Z.currenntCompany)),e.xp6(2),e.Q6J("ngIf",e.lcZ(14,12,Z.currenntCompany)),e.xp6(6),e.Q6J("ngIf",e.lcZ(20,14,Z.user$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(22,16,Z.user$)))},directives:[n.O5,h.YN,h.Kr,n.sg,I.R,w.Hw],pipes:[n.Ov],styles:[".card-img[_ngcontent-%COMP%]{height:50px!important}.app_item[_ngcontent-%COMP%]{cursor:pointer}.app_item[_ngcontent-%COMP%]:hover{opacity:40%;cursor:pointer}.active[_ngcontent-%COMP%]{border:3px solid #2f8fc9bf}.lgbv[_ngcontent-%COMP%]{max-height:30px;min-height:20px;border-radius:50px;border:2px solid #284192;min-width:20px;width:29px;padding-top:5px}.sidebar-title[_ngcontent-%COMP%]{background:#021645}.bp[_ngcontent-%COMP%]{background-color:#127dc5}.rimg[_ngcontent-%COMP%]{max-height:75px;max-width:50px;text-align:left;margin:0}.wrap[_ngcontent-%COMP%]{word-wrap:break-word}.f11[_ngcontent-%COMP%]{font-size:11px}.border-t-2[_ngcontent-%COMP%]{border-top:2px solid}"]}),i})()},2373:(D,P,o)=>{o.d(P,{T:()=>w});var e=o(7716),x=o(836),A=o(8583),O=o(1957);function t(m,T){1&m&&(e.TgZ(0,"div",3),e.TgZ(1,"h2",4),e._uU(2,"Begin Journey"),e.qZA(),e.TgZ(3,"h4",4),e._uU(4,"Please create a company to start your journey."),e.qZA(),e.TgZ(5,"button",5),e._uU(6," Create Company "),e.qZA(),e.qZA())}function n(m,T){if(1&m&&(e.TgZ(0,"div",11),e._UZ(1,"app-choose-app",12),e.qZA()),2&m){const p=T.$implicit,y=T.index,u=e.oxw(3);e.xp6(1),e.Q6J("id","admin_choseAppFrom_"+y)("company",u.company)("app",p)("height",200)}}function _(m,T){if(1&m&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",8),e._uU(2,"Almost there!"),e.qZA(),e.TgZ(3,"h4",9),e._uU(4,"Subscribe to our Apps"),e.qZA(),e.YNc(5,n,2,4,"div",10),e.qZA()),2&m){const p=e.oxw(2);e.xp6(5),e.Q6J("ngForOf",p.apps)}}function C(m,T){if(1&m&&(e.TgZ(0,"div",11),e._UZ(1,"app-choose-app",12),e.qZA()),2&m){const p=T.$implicit,y=T.index,u=e.oxw(3);e.xp6(1),e.Q6J("id","admin_choseAppFrom_"+y)("company",u.company)("app",p)("height",200)}}function h(m,T){if(1&m&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",8),e._uU(2,"Welcome to Zinder!"),e.qZA(),e.TgZ(3,"h4",9),e._uU(4,"Proceed to platform"),e.qZA(),e.YNc(5,C,2,4,"div",10),e.qZA()),2&m){const p=e.oxw(2);e.xp6(5),e.Q6J("ngForOf",p.apps)}}function I(m,T){if(1&m&&(e.TgZ(0,"div",6),e.YNc(1,_,6,1,"div",7),e.YNc(2,h,6,1,"div",7),e.qZA()),2&m){const p=e.oxw();e.xp6(1),e.Q6J("ngIf",!p.subscriptions||p.subscriptions.length<1),e.xp6(1),e.Q6J("ngIf",p.subscriptions&&p.subscriptions.length>0)}}let w=(()=>{class m{constructor(p){this.appService=p,this.apps=[],this.ongoingApp=null,this.listOfCompanies=[],this.subscriptions=[],this.company=null}ngOnInit(){}}return m.\u0275fac=function(p){return new(p||m)(e.Y36(x.z))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-setup"]],inputs:{apps:"apps",ongoingApp:"ongoingApp",listOfCompanies:"listOfCompanies",subscriptions:"subscriptions",company:"company"},decls:3,vars:2,consts:[[1,"row"],["class","col-md-12","id","stepOneAdminSetup",4,"ngIf"],["class","col-md-12",4,"ngIf"],["id","stepOneAdminSetup",1,"col-md-12"],[1,"mb-10"],["data-backdrop","static","data-toggle","modal","data-target","#create-company-modal","type","button",1,"btn","btn-primary"],[1,"col-md-12"],["class","row",4,"ngIf"],[1,"mb-10","col-md-12"],[1,"text-center","p-2","col-md-12"],["class","col-md-4 p-2 app_item",4,"ngFor","ngForOf"],[1,"col-md-4","p-2","app_item"],[3,"id","company","app","height"]],template:function(p,y){1&p&&(e.TgZ(0,"div",0),e.YNc(1,t,7,0,"div",1),e.YNc(2,I,3,2,"div",2),e.qZA()),2&p&&(e.xp6(1),e.Q6J("ngIf",!y.listOfCompanies||y.listOfCompanies.length<1),e.xp6(1),e.Q6J("ngIf",y.listOfCompanies&&y.listOfCompanies.length>0))},directives:[A.O5,A.sg,O.R],styles:[""]}),m})()},4369:(D,P,o)=>{o.d(P,{a:()=>O});var e=o(7716),x=o(1521),A=o(4655);let O=(()=>{class t{constructor(_,C){this._auth=_,this.router=C,this.setsessionAuthToken=this._auth.sessionAuth}canActivate(_,C){return this.setsessionAuthToken=this._auth.sessionAuth,this._auth.isLoggedIn().finally(()=>{this._auth.isAuthenticated||this.router.navigate(["auth/login"])})}valid(_){let C=new Date(Date.now()),h=new Date(_);return C.getTime()-h.getTime()<1728e5}}return t.\u0275fac=function(_){return new(_||t)(e.LFG(x.e),e.LFG(A.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2619:(D,P,o)=>{o.d(P,{T:()=>T});var e=o(9773),x=o(8002),A=o(3342),O=o(5257),t=o(409),n=o(6215),_=o(7716),C=o(7613),h=o(1659);let I=(()=>{class p{constructor(u,M){this._cs=u,this.deviceService=M,this._currentCompany=localStorage.getItem("runningCompany"),this._current=new n.X(void 0)}get currentCompany(){return this._currentCompany}resolve(u,M){this.deviceService.showSpinner();const b=localStorage.getItem("_authToken");return this._cs.getUserCompanyApi$(b).pipe((0,A.b)(U=>{if(this._currentCompany){let v=U.find(E=>E.company==this._currentCompany);this._current.next(v||U.pop())}else this._current.next(U.pop());this._cs.userCompany$.next(U),this.deviceService.hideSpinner()}))}get current(){return this._current}}return p.\u0275fac=function(u){return new(u||p)(_.LFG(C.J),_.LFG(h.U))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();var w=o(836);let m=(()=>{class p{constructor(u,M,b){this._cs=u,this.deviceService=M,this.appService=b,this.resolver$=new I(this._cs,this.deviceService)}resolve(u,M){return this.deviceService.showSpinner(),this.resolver$.resolve(u,M).pipe((0,t.o)(b=>this.resolver$.currentCompany),(0,e.zg)(b=>this.appService.getAppSubscriptionApi({company:this.resolver$.currentCompany,status:"Active"}).pipe((0,x.U)(U=>({runningCompany$:this.resolver$.current,user_company:b,subscriptions:U})))),(0,A.b)(b=>{console.log(b),this.appService.listOfSubscriptions.next(b.subscriptions),this.deviceService.hideSpinner()}),(0,O.q)(1))}}return p.\u0275fac=function(u){return new(u||p)(_.LFG(C.J),_.LFG(h.U),_.LFG(w.z))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})(),T=(()=>{class p{constructor(u,M,b){this._cs=u,this.deviceService=M,this.appService=b,this.preresolver$=new m(this._cs,this.deviceService,this.appService)}resolve(u,M){this.deviceService.showSpinner();const b=this.appService.appcode;return this.preresolver$.resolve(u,M).pipe((0,e.zg)(U=>this.appService.apps$.pipe((0,x.U)(v=>({subscription:U,apps:v})))),(0,A.b)(U=>{let v=U.apps;if(b){let E=v.find(r=>r.code==b);E?(this.appService.appcode=b,this.appService.selectedApp.next(E)):(this.appService.appcode=v[0].code,this.appService.selectedApp.next(v[0]))}else this.appService.appcode=v[0].code,this.appService.selectedApp.next(v[0]);this.appService.onoingApp=this.appService.selectedApp.value,this.deviceService.hideSpinner()}),(0,O.q)(1))}}return p.\u0275fac=function(u){return new(u||p)(_.LFG(C.J),_.LFG(h.U),_.LFG(w.z))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);