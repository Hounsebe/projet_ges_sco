import{b as me}from"./chunk-CT5RDWKN.js";import"./chunk-U5NXYBF4.js";import"./chunk-HHMBL5VP.js";import{d as Jt,e as j,f as te,h as gt}from"./chunk-4SO3Z6DF.js";import{a as X,b as Y}from"./chunk-OZACXEST.js";import{b as Zt,d as $t,e as Kt,f as Xt}from"./chunk-NEVMRMS3.js";import{E as ut,G as se,J as ce,K as le,M as de,a as P,b as _t,i as D,m as ee,p as ie,q as ne,r as ae,s as oe,w as re}from"./chunk-B2DYZSRA.js";import{j as K,l as Ht,m as Gt,n as Wt,p as Ut,q as qt,x as Yt,y as k}from"./chunk-IMYGFNXD.js";import{$a as Ft,$b as h,A as N,Aa as Tt,Ab as y,C as Ct,E as Mt,F as Dt,Fa as Lt,G as rt,Hb as ht,Lb as C,Nb as R,Ob as u,P as st,Pb as m,Qb as B,R as g,Rb as q,Sb as b,Ta as p,Tb as f,U as St,X as W,Xa as Ot,Y as x,Ya as dt,Yb as Z,Zb as _,_ as V,_a as zt,_b as jt,aa as o,ac as pt,ba as Et,bb as Rt,bc as Nt,fa as ct,ga as lt,gb as d,h as v,hb as w,hc as M,ib as mt,ic as Vt,ja as Q,jc as Qt,ka as E,kb as L,na as U,oa as A,p as kt,ra as At,rb as G,s as ot,sa as I,sb as O,ta as It,tb as z,vb as Bt,wb as Pt,wc as $,xa as H,xb as F,yb as r,z as yt,za as T,zb as c}from"./chunk-EVQ2TPZH.js";var ke="@",ye=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=o(Q);loadingSchedulerFn=o(Ce,{optional:!0});_engine;constructor(t,e,i,s,l){this.doc=t,this.delegate=e,this.zone=i,this.animationType=s,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-KR4T5OIS.js").then(i=>i),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(i=>{throw new St(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let l=new s(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new bt(i);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let we=l.createRenderer(t,e);s.use(we),this.scheduler??=this.injector.get(It,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(e){Rt()};static \u0275prov=W({token:n,factory:n.\u0275fac})}return n})(),bt=class{delegate;replay=[];\u0275type=1;constructor(a){this.delegate=a}use(a){if(this.delegate=a,this.replay!==null){for(let t of this.replay)t(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,t){return this.delegate.createElement(a,t)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,t){this.delegate.appendChild(a,t)}insertBefore(a,t,e,i){this.delegate.insertBefore(a,t,e,i)}removeChild(a,t,e,i){this.delegate.removeChild(a,t,e,i)}selectRootElement(a,t){return this.delegate.selectRootElement(a,t)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,t,e,i){this.delegate.setAttribute(a,t,e,i)}removeAttribute(a,t,e){this.delegate.removeAttribute(a,t,e)}addClass(a,t){this.delegate.addClass(a,t)}removeClass(a,t){this.delegate.removeClass(a,t)}setStyle(a,t,e,i){this.delegate.setStyle(a,t,e,i)}removeStyle(a,t,e){this.delegate.removeStyle(a,t,e)}setProperty(a,t,e){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(a,t,e)),this.delegate.setProperty(a,t,e)}setValue(a,t){this.delegate.setValue(a,t)}listen(a,t,e,i){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(a,t,e,i)),this.delegate.listen(a,t,e,i)}shouldReplay(a){return this.replay!==null&&a.startsWith(ke)}},Ce=new V("");function he(n="animations"){return Ot("NgAsyncAnimations"),Et([{provide:zt,useFactory:()=>new ye(o(E),o(Ht),o(A),n)},{provide:Lt,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pe=[{path:"dashboard",loadComponent:()=>import("./chunk-IB6NZHKK.js").then(n=>n.DashboardComponent)},{path:"etudiants",loadComponent:()=>import("./chunk-IGLMRJGX.js").then(n=>n.EtudiantListComponent)},{path:"etudiants/nouveau",loadComponent:()=>import("./chunk-EZL62ZL7.js").then(n=>n.EtudiantFormComponent)},{path:"cours",loadComponent:()=>import("./chunk-2DLXX4RV.js").then(n=>n.CoursListComponent)},{path:"cours/nouveau",loadComponent:()=>import("./chunk-OQWK7USK.js").then(n=>n.CoursFormComponent)},{path:"inscriptions",loadComponent:()=>import("./chunk-HEGXVHVA.js").then(n=>n.InscriptionListComponent)},{path:"inscriptions/nouvelle",loadComponent:()=>import("./chunk-ZLQ4F7XS.js").then(n=>n.InscriptionFormComponent)},{path:"notes",loadComponent:()=>import("./chunk-WA3LUJXN.js").then(n=>n.NoteFormComponent)},{path:"bulletins",loadComponent:()=>import("./chunk-ULAHGHTB.js").then(n=>n.BulletinViewComponent)},{path:"",redirectTo:"dashboard",pathMatch:"full"}];var J=class n{constructor(){}intercept(a,t){return t.handle(a).pipe(Ct(e=>{let i="An unknown error occurred!";return e.error instanceof ErrorEvent?i=`Error: ${e.error.message}`:(console.error(`Backend returned code ${e.status}, body was: `,e.error),e.status===400?e.error&&typeof e.error=="object"?i=this.formatValidationErrors(e.error):typeof e.error=="string"&&(i=e.error):e.status&&(i=`Error Code: ${e.status}
Message: ${e.message}`)),console.error(i),kt(()=>new Error(i))}))}formatValidationErrors(a){let t="Validation errors:";if(a.errors)a.errors.forEach(e=>{t+=`
- ${e.field}: ${e.defaultMessage}`});else if(typeof a=="object")for(let e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t+=`
- ${e}: ${a[e]}`);return t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=W({token:n,factory:n.\u0275fac})};var _e={providers:[At(),Xt(pe),Ut(qt()),he(),{provide:Wt,useClass:J,multi:!0}]};var it=["*"],De=["content"],Se=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ee=["mat-drawer","mat-drawer-content","*"];function Ae(n,a){if(n&1){let t=ht();r(0,"div",1),C("click",function(){ct(t);let i=R();return lt(i._onBackdropClicked())}),c()}if(n&2){let t=R();_("mat-drawer-shown",t._isShowingBackdrop())}}function Ie(n,a){n&1&&(r(0,"mat-drawer-content"),m(1,2),c())}var Te=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Le=["mat-sidenav","mat-sidenav-content","*"];function Oe(n,a){if(n&1){let t=ht();r(0,"div",1),C("click",function(){ct(t);let i=R();return lt(i._onBackdropClicked())}),c()}if(n&2){let t=R();_("mat-drawer-shown",t._isShowingBackdrop())}}function ze(n,a){n&1&&(r(0,"mat-sidenav-content"),m(1,2),c())}var Fe=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Re=new V("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),xt=new V("MAT_DRAWER_CONTAINER"),tt=(()=>{class n extends j{_platform=o(P);_changeDetectorRef=o($);_container=o(vt);constructor(){let t=o(T),e=o(Jt),i=o(A);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(Z("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),_("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[M([{provide:j,useExisting:n}]),L],ngContentSelectors:it,decls:1,vars:0,template:function(e,i){e&1&&(u(),m(0))},encapsulation:2,changeDetection:0})}return n})(),ft=(()=>{class n{_elementRef=o(T);_focusTrapFactory=o(oe);_focusMonitor=o(ee);_platform=o(P);_ngZone=o(A);_renderer=o(Ft);_interactivityChecker=o(ae);_doc=o(E);_container=o(xt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=D(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=D(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(D(t))}_opened=I(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new U(!0);_openedStream=this.openedChange.pipe(N(t=>t),ot(()=>{}));openedStart=this._animationStarted.pipe(N(()=>this.opened),rt(void 0));_closedStream=this.openedChange.pipe(N(t=>!t),ot(()=>{}));closedStart=this._animationStarted.pipe(N(()=>!this.opened),rt(void 0));_destroyed=new v;onPositionChanged=new U;_content;_modeChanged=new v;_injector=o(Q);_changeDetectorRef=o($);constructor(){this.openedChange.pipe(g(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!re(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{s(),l(),t.removeAttribute("tabindex")},s=this._renderer.listen(t,"blur",i),l=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":dt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(Dt(1)).subscribe(l=>s(l?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&q(De,5),e&2){let s;b(s=f())&&(i._content=s.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(G("align",null)("tabIndex",i.mode!=="side"?"-1":null),Z("visibility",!i._container&&!i.opened?"hidden":null),_("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:it,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(u(),r(0,"div",1,0),m(2),c())},dependencies:[j],encapsulation:2,changeDetection:0})}return n})(),vt=(()=>{class n{_dir=o(Yt,{optional:!0});_element=o(T);_ngZone=o(A);_changeDetectorRef=o($);_animationDisabled=se();_transitionsEnabled=!1;_allDrawers;_drawers=new Tt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=D(t)}_autosize=o(Re);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:D(t)}_backdropOverride=null;backdropClick=new U;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=o(Q);constructor(){let t=o(P),e=o(te);this._dir?.change.pipe(g(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(g(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(st(this._allDrawers),g(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(st(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Mt(10),g(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(g(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(g(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(g(this._drawers.changes)).subscribe(()=>{dt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(g(yt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,s){if(e&1&&B(s,tt,5)(s,ft,5),e&2){let l;b(l=f())&&(i._content=l.first),b(l=f())&&(i._allDrawers=l)}},viewQuery:function(e,i){if(e&1&&q(tt,5),e&2){let s;b(s=f())&&(i._userContent=s.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&_("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[M([{provide:xt,useExisting:n}])],ngContentSelectors:Ee,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(u(Se),O(0,Ae,1,2,"div",0),m(1),m(2,1),O(3,Ie,2,0,"mat-drawer-content")),e&2&&(z(i.hasBackdrop?0:-1),p(3),z(i._content?-1:3))},dependencies:[tt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),et=(()=>{class n extends tt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=H(n)))(i||n)}})();static \u0275cmp=d({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[M([{provide:j,useExisting:n}]),L],ngContentSelectors:it,decls:1,vars:0,template:function(e,i){e&1&&(u(),m(0))},encapsulation:2,changeDetection:0})}return n})(),wt=(()=>{class n extends ft{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=D(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=_t(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=_t(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=H(n)))(i||n)}})();static \u0275cmp=d({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(G("tabIndex",i.mode!=="side"?"-1":null)("align",null),Z("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),_("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[M([{provide:ft,useExisting:n}]),L],ngContentSelectors:it,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(u(),r(0,"div",1,0),m(2),c())},dependencies:[j],encapsulation:2,changeDetection:0})}return n})(),ge=(()=>{class n extends vt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=H(n)))(i||n)}})();static \u0275cmp=d({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,s){if(e&1&&B(s,et,5)(s,wt,5),e&2){let l;b(l=f())&&(i._content=l.first),b(l=f())&&(i._allDrawers=l)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&_("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[M([{provide:xt,useExisting:n},{provide:vt,useExisting:n}]),L],ngContentSelectors:Le,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(u(Te),O(0,Oe,1,2,"div",0),m(1),m(2,1),O(3,ze,2,0,"mat-sidenav-content")),e&2&&(z(i.hasBackdrop?0:-1),p(3),z(i._content?-1:3))},dependencies:[et],styles:[Fe],encapsulation:2,changeDetection:0})}return n})(),ue=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=x({imports:[gt,k,gt]})}return n})();var Pe=["*",[["mat-toolbar-row"]]],je=["*","mat-toolbar-row"],Ne=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=mt({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),be=(()=>{class n{_elementRef=o(T);_platform=o(P);_document=o(E);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,s){if(e&1&&B(s,Ne,5),e&2){let l;b(l=f())&&(i._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(jt(i.color?"mat-"+i.color:""),_("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:je,decls:2,vars:0,template:function(e,i){e&1&&(u(Pe),m(0),m(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var fe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=x({imports:[k]})}return n})();var ve=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=x({imports:[k]})}return n})();var xe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=x({imports:[ne,le,me,k,ve]})}return n})();var Ge=n=>[n],We=()=>({exact:!1}),Ue=(n,a)=>a.path;function qe(n,a){if(n&1&&(r(0,"a",4)(1,"div",5)(2,"mat-icon",6),h(3),c()(),r(4,"span",7),h(5),c(),r(6,"div",8),y(7,"div",9),c()()),n&2){let t=a.$implicit;F("routerLink",Qt(4,Ge,t.path))("routerLinkActiveOptions",Vt(6,We)),p(3),pt(t.icon),p(2),pt(t.label)}}var nt=class n{navItems=[{label:"Tableau de bord",path:"/dashboard",icon:"grid_view"},{label:"\xC9tudiants",path:"/etudiants",icon:"people"},{label:"Cours",path:"/cours",icon:"auto_stories"},{label:"Inscriptions",path:"/inscriptions",icon:"assignment"},{label:"Notes",path:"/notes",icon:"grade"},{label:"Bulletins",path:"/bulletins",icon:"description"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["app-sidebar"]],decls:7,vars:0,consts:[[1,"flex","flex-col","gap-1"],[1,"px-4","mb-5"],[1,"text-[10px]","font-extrabold","text-zinc-400","uppercase","tracking-[0.25em]","px-2"],[1,"flex","flex-col","gap-1.5"],["routerLinkActive","active-link",1,"nav-item","group","flex","items-center","gap-4","px-4","py-3.5","rounded-2xl","text-zinc-500","hover:bg-zinc-100/50","hover:text-zinc-900","transition-all","duration-300","font-bold","text-[13.5px]",3,"routerLink","routerLinkActiveOptions"],[1,"w-9","h-9","rounded-[14px]","bg-zinc-50","border","border-zinc-200/40","flex","items-center","justify-center","group-hover:bg-white","group-hover:shadow-premium","transition-all","icon-container"],[1,"scale-[0.85]","transition-transform","group-hover:scale-100"],[1,"tracking-tight"],[1,"ml-auto","opacity-0","group-hover:opacity-100","transition-opacity","active-indicator-minimal"],[1,"w-1","h-1","rounded-full","bg-zinc-300"]],template:function(t,e){t&1&&(r(0,"nav",0)(1,"div",1)(2,"span",2),h(3,"Main Menu"),c()(),r(4,"div",3),Bt(5,qe,8,7,"a",4,Ue),c()()),t&2&&(p(5),Pt(e.navItems))},dependencies:[K,$t,Kt,xe,Y,X],styles:["[_nghost-%COMP%]{display:block}.active-link[_ngcontent-%COMP%]{background-color:#2563eb!important;color:#fff!important;box-shadow:0 15px 30px -10px #2563eb4d,inset 0 1px #ffffff1a}.active-link[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{background-color:#ffffff14!important;border-color:#ffffff1a!important;box-shadow:none!important}.active-link[_ngcontent-%COMP%]     mat-icon{color:#fff!important}.active-link[_ngcontent-%COMP%]   .active-indicator-minimal[_ngcontent-%COMP%]{opacity:1!important}.active-link[_ngcontent-%COMP%]   .active-indicator-minimal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#ffffff4d!important}.nav-item[_ngcontent-%COMP%]{position:relative;overflow:hidden}.nav-item[_ngcontent-%COMP%]:active{transform:scale(.98)}"]})};var at=class n{breakpointObserver=o(ie);title=I("Gestion Scolaire");isSidenavOpen=I(!0);isMobile=I(!1);constructor(){this.breakpointObserver.observe([ut.Handset,ut.TabletPortrait]).subscribe(a=>{let t=a.matches;this.isMobile.set(t),this.isSidenavOpen.set(!t)})}toggleSidenav(){this.isSidenavOpen.update(a=>!a)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["app-root"]],decls:40,vars:4,consts:[["sidenav",""],[1,"flex","flex-col","h-[100dvh]","w-screen","overflow-hidden","bg-zinc-50","font-sans"],[1,"flex","items-center","justify-between","px-4","lg:px-8","bg-white","z-40","h-16","shrink-0","border-b","border-zinc-200/60"],[1,"flex","items-center","gap-5"],["mat-icon-button","",1,"text-zinc-400","hover:text-zinc-900","transition-all","active:scale-90","bg-zinc-50/50","rounded-xl",3,"click"],[1,"scale-90"],[1,"flex","items-center","gap-3","group","cursor-pointer"],[1,"w-10","h-10","rounded-2xl","bg-zinc-950","flex","items-center","justify-center","shadow-lg","shadow-zinc-950/20","group-hover:scale-105","transition-transform","duration-500"],[1,"text-white","text-lg","scale-90"],[1,"flex","flex-col"],[1,"text-[15px]","font-extrabold","tracking-tight","text-zinc-900","uppercase"],[1,"text-[10px]","font-bold","text-zinc-400","uppercase","tracking-widest","leading-none"],[1,"flex","items-center","gap-4"],["mat-icon-button","",1,"text-zinc-400","hover:text-zinc-900","hover:bg-zinc-50","transition-all","rounded-xl","relative","active:scale-95"],[1,"absolute","top-2.5","right-2.5","w-2","h-2","bg-brand-primary","rounded-full","border-2","border-white"],[1,"flex","items-center","gap-3","border-l","border-zinc-100","pl-5","ml-1"],[1,"flex","flex-col","items-end","hidden","lg:flex"],[1,"text-sm","font-bold","text-zinc-900","leading-tight","tracking-tight"],[1,"text-[11px]","text-zinc-400","font-medium"],[1,"w-10","h-10","rounded-2xl","bg-zinc-100","border","border-zinc-200/50","flex","items-center","justify-center","text-zinc-900","font-extrabold","text-xs","shadow-sm","hover:border-zinc-300","transition-colors","cursor-pointer"],[1,"flex-1","w-full","bg-zinc-50","overflow-hidden",3,"hasBackdrop"],[1,"w-[280px]","bg-white","border-r","border-zinc-200/60","flex","flex-col","shrink-0","h-full",3,"closed","mode","opened"],[1,"px-5","py-8","flex-1","overflow-hidden"],[1,"w-full"],[1,"p-6","shrink-0"],[1,"p-4","rounded-2xl","bg-zinc-50/80","border","border-zinc-200/40","flex","flex-col","gap-3"],[1,"text-[10px]","text-zinc-400","font-bold","uppercase","tracking-widest","text-center","leading-normal"],[1,"bg-zinc-50","overflow-y-auto","h-full"],[1,"p-8","lg:p-12"]],template:function(t,e){t&1&&(r(0,"div",1)(1,"mat-toolbar",2)(2,"div",3)(3,"button",4),C("click",function(){return e.toggleSidenav()}),r(4,"mat-icon",5),h(5,"menu"),c()(),r(6,"div",6)(7,"div",7)(8,"mat-icon",8),h(9,"school"),c()(),r(10,"div",9)(11,"span",10),h(12),c(),r(13,"span",11),h(14,"Management System"),c()()()(),r(15,"div",12)(16,"button",13)(17,"mat-icon",5),h(18,"notifications"),c(),y(19,"span",14),c(),r(20,"div",15)(21,"div",16)(22,"span",17),h(23,"Administrateur"),c(),r(24,"span",18),h(25,"Full Access Mode"),c()(),r(26,"div",19),h(27," AD "),c()()()(),r(28,"mat-sidenav-container",20)(29,"mat-sidenav",21,0),C("closed",function(){return e.isSidenavOpen.set(!1)}),r(31,"div",22),y(32,"app-sidebar",23),c(),r(33,"div",24)(34,"div",25)(35,"p",26),h(36,"Version 1.0.0 Stable Build"),c()()()(),r(37,"mat-sidenav-content",27)(38,"main",28),y(39,"router-outlet"),c()()()()),t&2&&(p(12),Nt(" ",e.title()," "),p(16),F("hasBackdrop",e.isMobile()),p(),F("mode",e.isMobile()?"over":"side")("opened",e.isSidenavOpen()))},dependencies:[K,Zt,ue,wt,ge,et,fe,be,Y,X,de,ce,nt],styles:["mat-sidenav-container[_ngcontent-%COMP%]{height:100%;min-height:0}mat-sidenav[_ngcontent-%COMP%]{background-color:#fff!important;border-right:1px solid var(--color-zinc-200, #e4e4e7)!important;overflow:hidden!important}  .mat-drawer-inner-container{overflow:hidden!important;scrollbar-width:none!important;-ms-overflow-style:none!important}  .mat-drawer-inner-container::-webkit-scrollbar{display:none!important}  .mat-drawer-inner-container>div{overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}  .mat-drawer-inner-container>div::-webkit-scrollbar{display:none}  .scrollbar-hide::-webkit-scrollbar{display:none!important}  .scrollbar-hide{-ms-overflow-style:none!important;scrollbar-width:none!important}"]})};Gt(at,_e).catch(n=>console.error(n));
