(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{dcDe:function(e,t,n){"use strict";n.r(t),n.d(t,"IonImg",function(){return i}),n.d(t,"IonNote",function(){return c}),n.d(t,"IonText",function(){return a});var o=n("cBjU"),r=n("+/n5"),i=function(){function e(){}return e.prototype.srcChanged=function(){this.addIO()},e.prototype.componentDidLoad=function(){this.addIO()},e.prototype.addIO=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.loadSrc=e.src,e.removeIO(),e.ionImgDidLoad.emit())}),this.io.observe(this.el)):setTimeout(function(){return e.loadSrc=e.src},200))},e.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.render=function(){return Object(o.b)("img",{src:this.loadSrc,alt:this.alt,decoding:"async"})},Object.defineProperty(e,"is",{get:function(){return"ion-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionImgDidLoad",method:"ionImgDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-img-host]{display:block}img[data-ion-img]{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){}return e.prototype.hostData=function(){return{class:Object.assign({},Object(r.b)(this.color))}},e.prototype.render=function(){return Object(o.b)("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-note-ios-host]{color:var(--ion-color-base);--ion-color-base:var(--ion-text-color-step-650, #a6a6a6);font-family:var(--ion-font-family,inherit)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){}return e.prototype.hostData=function(){return{class:Object(r.b)(this.color)}},e.prototype.render=function(){return Object(o.b)("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-text"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-text-host]{--ion-color-base:currentColor;color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),e}()}}]);