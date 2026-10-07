import './polyfills.server.mjs';
import{a as Y}from"./chunk-ZUUOQDTV.mjs";import{a as $,b as J,c as K,d as Q}from"./chunk-PG2W3C5Y.mjs";import{a as X,b as q}from"./chunk-XCMP7UFW.mjs";import{a as W}from"./chunk-6UTWTBS3.mjs";import{$a as F,Ac as z,B as T,C as V,E as b,Ia as S,J as f,Ja as g,K as v,La as p,Ma as A,Na as L,Oa as P,Pa as u,Q as C,Qa as i,Ra as o,V as _,Wa as h,Ya as y,_a as l,_c as R,ab as O,ad as G,dd as H,ib as j,jb as w,kb as k,la as n,mb as d,nb as s,ob as D,xa as x,ya as B,yb as N,za as M,zc as U}from"./chunk-UOKWFVGO.mjs";import{a as I,b as E}from"./chunk-KYQQYI4M.mjs";var rt=["*"];var ot=new V("MAT_CARD_CONFIG"),Z=(()=>{class e{appearance;constructor(){let t=b(ot,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=x({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,c){a&2&&k("mat-mdc-card-outlined",c.appearance==="outlined")("mdc-card--outlined",c.appearance==="outlined")("mat-mdc-card-filled",c.appearance==="filled")("mdc-card--filled",c.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:rt,decls:1,vars:0,template:function(a,c){a&1&&(F(),O(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return e})();var tt=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275dir=M({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var et=(()=>{class e{align="start";static \u0275fac=function(a){return new(a||e)};static \u0275dir=M({type:e,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(a,c){a&2&&k("mat-mdc-card-actions-align-end",c.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return e})();var at=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=B({type:e});static \u0275inj=T({imports:[G]})}return e})();var ct=e=>["/blogs",e],lt=e=>["/blogs",e,"edit"];function st(e,r){if(e&1){let t=h();i(0,"a",15),y("click",function(c){f(t);let m=l(2);return v(m.stopCardNavigation(c))}),i(1,"mat-icon",16),d(2,"edit"),o(),i(3,"span"),d(4,"Edit blog"),o()()}if(e&2){let t=l(2);u("routerLink",N(1,lt,t.blog.id))}}function mt(e,r){if(e&1){let t=h();i(0,"button",17),y("click",function(c){f(t);let m=l(2);return v(m.toggleVisibility(c))}),i(1,"mat-icon",16),d(2),o(),i(3,"span"),d(4),o()()}if(e&2){let t=l(2);u("disabled",t.isUpdatingVisibility),n(2),s(t.blog.is_public?"visibility_off":"visibility"),n(2),s(t.blog.is_public?"Make private":"Make public")}}function gt(e,r){if(e&1){let t=h();i(0,"button",17),y("click",function(c){f(t);let m=l(2);return v(m.deleteBlog(c))}),i(1,"mat-icon",18),d(2,"delete"),o(),i(3,"span"),d(4,"Delete blog"),o()()}if(e&2){let t=l(2);u("disabled",t.isDeleting)}}function pt(e,r){if(e&1){let t=h();i(0,"button",11),y("click",function(c){f(t);let m=l();return v(m.stopCardNavigation(c))}),i(1,"mat-icon"),d(2),o()(),i(3,"mat-menu",12,0),g(5,st,5,3,"a",13),g(6,mt,5,3,"button",14),g(7,gt,5,1,"button",14),o()}if(e&2){let t=j(4),a=l();u("matMenuTriggerFor",t),n(2),s(a.auth.canEdit(a.blog.created_by)?"edit":"more_vert"),n(3),p(a.auth.canEdit(a.blog.created_by)?5:-1),n(),p(a.showVisibilityToggle&&a.auth.canManageVisibility(a.blog.created_by)?6:-1),n(),p(a.auth.canDeleteBlog(a.blog.created_by)?7:-1)}}function ut(e,r){e&1&&(i(0,"p",7),d(1,"Private"),o())}function bt(e,r){if(e&1&&(i(0,"span",19),d(1),o()),e&2){let t=r.$implicit;n(),D("#",t)}}function ft(e,r){if(e&1&&(i(0,"div",8),L(1,bt,2,1,"span",19,A),o()),e&2){let t=l();n(),P(t.blog.tags)}}function vt(e,r){if(e&1){let t=h();i(0,"mat-card-actions",9)(1,"button",20),y("click",function(c){f(t);let m=l();return v(m.toggleLike(c))}),i(2,"mat-icon"),d(3),o(),i(4,"span"),d(5),o()(),i(6,"span",21)(7,"mat-icon"),d(8,"chat_bubble_outline"),o(),i(9,"span"),d(10),o()()()}if(e&2){let t=l();n(),u("disabled",t.isUpdatingLike),S("aria-label",(t.isLiked()?"Unlike":"Like")+" this blog. "+t.likeCount()+" likes")("aria-pressed",t.isLiked()),n(),w("font-family",t.isLiked()?"Material Icons":"Material Symbols Outlined")("color",t.isLiked()?"#d32f2f":"#087ea4"),n(),s(t.isLiked()?"favorite":"favorite_border"),n(),w("color",t.isLiked()?"#d32f2f":null),n(),s(t.likeCount()),n(),S("aria-label",t.blog.comment_count+" comments"),n(4),s(t.blog.comment_count)}}function ht(e,r){if(e&1&&(i(0,"p",10),d(1),o()),e&2){let t=l();n(),s(t.likeErrorMessage)}}var it=class e{auth=b(W);blogService=b(Y);router=b(U);blogValue;isLiked=_(!1);likeCount=_(0);likeErrorMessage="";set blog(r){this.blogValue=r,this.isLiked.set(r.liked_by_me),this.likeCount.set(r.like_count)}get blog(){return this.blogValue}showVisibilityToggle=!1;deleted=new C;visibilityChanged=new C;isDeleting=!1;isUpdatingVisibility=!1;isUpdatingLike=!1;stopCardNavigation(r){r.stopPropagation()}deleteBlog(r){r.stopPropagation(),!(!this.auth.canDeleteBlog(this.blog.created_by)||!window.confirm("Delete this blog?"))&&(this.isDeleting=!0,this.blogService.delete(this.blog.id).subscribe({next:()=>this.deleted.emit(this.blog.id),error:()=>{this.isDeleting=!1}}))}toggleVisibility(r){r.stopPropagation(),!(!this.showVisibilityToggle||!this.auth.canManageVisibility(this.blog.created_by)||this.isUpdatingVisibility)&&(this.isUpdatingVisibility=!0,this.blogService.updateVisibility(this.blog.id,!this.blog.is_public).subscribe({next:t=>{this.blog=t,this.visibilityChanged.emit(t),this.isUpdatingVisibility=!1},error:()=>{this.isUpdatingVisibility=!1}}))}toggleLike(r){if(r.stopPropagation(),this.isUpdatingLike)return;if(!this.auth.isLoggedIn()){this.router.navigate(["/login"],{queryParams:{returnUrl:`/blogs/${this.blog.id}`}});return}this.isUpdatingLike=!0,this.likeErrorMessage="",(this.blog.liked_by_me?this.blogService.unlike(this.blog.id):this.blogService.like(this.blog.id)).subscribe({next:a=>{this.blog=E(I({},this.blog),{liked_by_me:a.liked,like_count:a.like_count}),this.isUpdatingLike=!1},error:a=>{this.likeErrorMessage=a.error?.detail??"Unable to update like. Please try again.",this.isUpdatingLike=!1}})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-blog-card"]],inputs:{blog:"blog",showVisibilityToggle:"showVisibilityToggle"},outputs:{deleted:"deleted",visibilityChanged:"visibilityChanged"},decls:15,vars:11,consts:[["blogActions","matMenu"],["appearance","outlined","tabindex","0",1,"blog-card",3,"routerLink"],[1,"blog-card-header"],[1,"blog-card-heading"],[1,"blog-card-title"],[1,"blog-card-author"],[1,"!flex-1"],[1,"mb-2","text-xs","font-semibold","uppercase","text-[#a34b18]"],["aria-label","Blog tags",1,"mt-3.5","flex","flex-wrap","gap-1.5"],[1,"!mt-auto","!flex","!w-full","!flex-row","!flex-nowrap","!items-center","!gap-4","!px-4","!pb-4"],["role","alert",1,"px-4","pb-2","text-sm","text-[#b3261e]"],["mat-icon-button","","type","button","aria-label","Blog actions","title","Blog actions",1,"actions-trigger",3,"click","matMenuTriggerFor"],["panelClass","!rounded-lg !border !border-[#b9e3f5] !bg-[#eaf7fb]"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","","type","button",3,"disabled"],["mat-menu-item","",3,"click","routerLink"],[1,"!text-[#087ea4]"],["mat-menu-item","","type","button",3,"click","disabled"],[1,"!text-[#123447]"],[1,"rounded-full","border","border-[#c8e8f5]","bg-[#eef8fc]","px-2.5","py-1","text-xs","font-semibold","text-[#087ea4]"],["type","button",1,"!inline-flex","!shrink-0","!flex-row","!items-center","!gap-1.5","whitespace-nowrap","rounded-full","px-2","py-1","text-[#087ea4]","hover:bg-[#eef8fc]","disabled:opacity-60",3,"click","disabled"],[1,"inline-flex","shrink-0","flex-row","items-center","gap-1.5","whitespace-nowrap","text-[#527080]"]],template:function(t,a){t&1&&(i(0,"mat-card",1)(1,"header",2)(2,"div",3)(3,"h2",4),d(4),o(),i(5,"p",5),d(6),o()(),g(7,pt,8,5),o(),i(8,"mat-card-content",6),g(9,ut,2,0,"p",7),i(10,"p"),d(11),o(),g(12,ft,3,0,"div",8),o(),g(13,vt,11,13,"mat-card-actions",9),g(14,ht,2,1,"p",10),o()),t&2&&(u("routerLink",N(9,ct,a.blog.id)),n(4),s(a.blog.title),n(2),D("By ",a.blog.author_name||"Author #"+a.blog.created_by),n(),p(a.auth.canEdit(a.blog.created_by)||a.auth.canDeleteBlog(a.blog.created_by)||a.showVisibilityToggle&&a.auth.canManageVisibility(a.blog.created_by)?7:-1),n(2),p(a.blog.is_public?-1:9),n(2),s(a.blog.description),n(),p(a.blog.tags?.length?12:-1),n(),p(a.auth.isLoggedIn()?13:-1),n(),p(a.likeErrorMessage?14:-1))},dependencies:[at,Z,et,tt,H,R,q,X,Q,J,$,K,z],styles:[".blog-card[_ngcontent-%COMP%]{position:relative;height:100%;cursor:pointer;border-color:#c8e8f5;background:#fff}.blog-card[_ngcontent-%COMP%]:focus-visible{outline:3px solid #1688b0;outline-offset:3px}.blog-card[_ngcontent-%COMP%]:hover{border-color:#1688b0;box-shadow:0 8px 20px #1234471a}.blog-card-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;padding:16px 16px 0}.blog-card-heading[_ngcontent-%COMP%]{min-width:0;flex:1 1 auto}.blog-card-title[_ngcontent-%COMP%]{margin:0;color:#123447;overflow-wrap:anywhere;font-size:1.15rem;font-weight:700;line-height:1.35}.blog-card-author[_ngcontent-%COMP%]{margin:5px 0 0;color:#087ea4;font-size:.85rem}.blog-card[_ngcontent-%COMP%]   .actions-trigger[_ngcontent-%COMP%]{flex:0 0 32px;width:32px;height:32px;padding:4px;margin:-4px -8px 0 0}.blog-card[_ngcontent-%COMP%]   .actions-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:20px;line-height:20px}.blog-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{margin-top:16px;color:#527080}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:-webkit-box;margin:0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;line-height:1.6}"]})};export{it as a};
