"use strict";(self.webpackChunksparklingv2=self.webpackChunksparklingv2||[]).push([[592],{8654:(D,i,t)=>{t.d(i,{p:()=>s});var o=t(7716),v=t(4441);let s=(()=>{class r{constructor(e){this.departMentService=e}resolve(e,l){return this.departMentService.getDepartmentsApi$}}return r.\u0275fac=function(e){return new(e||r)(o.LFG(v.n))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},916:(D,i,t)=>{t.d(i,{I:()=>a});var o=t(2340),v=t(8002),s=t(7716),r=t(1841);let a=(()=>{class e{constructor(_){this.http=_,this.apiUrl=o.N.uploadApi}upload(_){return this.http.post(`${this.apiUrl}/upload`,_).pipe((0,v.U)(n=>Object.assign(Object.assign({},n),{file:`${this.apiUrl}${n.uploadPath}`})))}}return e.\u0275fac=function(_){return new(_||e)(s.LFG(r.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4441:(D,i,t)=>{t.d(i,{n:()=>_});var o=t(6215),v=t(2340),s=t(3342),r=t(9643),a=t(7716),e=t(1841),l=t(4758);let _=(()=>{class n{constructor(p,E){this.http=p,this._us=E,this._departments=new o.X([]),this.departments$=this._departments.asObservable(),this.departments$_status="yet",this.apiUrl=v.N.api,this.getDepartmentsApi$=this.getDepartmentsApi().pipe((0,s.b)(u=>{this._departments.next(u)}),(0,r.d)())}getDepartmentsApi(){return this.http.get(`${this.apiUrl}/departments`)}newDepartmentApi(p){return this.http.post(`${this.apiUrl}/departments`,p)}add(p){return this.newDepartmentApi(p).pipe((0,s.b)(E=>{this._departments.value.unshift(E)}))}get departmentsValue(){return this._departments.value}}return n.\u0275fac=function(p){return new(p||n)(a.LFG(e.eN),a.LFG(l.K))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);