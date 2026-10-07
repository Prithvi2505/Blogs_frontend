import{$t as ds,An as lu,Bt as b,Et as Y,Gt as cD,Hn as ps,Jt as d7,Ot as Ye,Ut as bn,V as Lg,W as MA,Wn as qA,Y as NA,Zn as ss,_r as yl,at as Qn,b as Ee,br as zp,dn as h,f as BE,ft as Tx,i as $e,kn as ls,m as Bp,mn as hx,mt as Ue,n as $A,nn as eD,nt as Pg,o as $r,ot as Qw,qn as ri,s as AA,sr as v,t as $,tt as PP,yn as jA,yt as Vc,zn as ot$1}from"./chunk-C4oZ3UsX.js";import{a as D,i as Bt,n as Nt,o as G,r as wt,s as Lt,t as g}from"./main-RNUFPXOA.js";import{t as g$1}from"./chunk-DxVT0GRL.js";var rt=[`*`];var ot=new b(`MAT_CARD_CONFIG`);var Z=(()=>{class e{appearance;constructor(){let t=h(ot,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(a){return new(a||e)};static ɵcmp=ot$1({type:e,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(a,c){a&2&&Qn(`mat-mdc-card-outlined`,c.appearance===`outlined`)(`mdc-card--outlined`,c.appearance===`outlined`)(`mat-mdc-card-filled`,c.appearance===`filled`)(`mdc-card--filled`,c.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:rt,decls:1,vars:0,template:function(a,c){a&1&&(ps(),bn(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return e})();var tt=(()=>{class e{static ɵfac=function(a){return new(a||e)};static ɵdir=$e({type:e,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return e})();var et=(()=>{class e{align=`start`;static ɵfac=function(a){return new(a||e)};static ɵdir=$e({type:e,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(a,c){a&2&&Qn(`mat-mdc-card-actions-align-end`,c.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return e})();var at=(()=>{class e{static ɵfac=function(a){return new(a||e)};static ɵmod=Ye({type:e});static ɵinj=Ue({imports:[yl]})}return e})();var ct=e=>[`/blogs`,e];var lt=e=>[`/blogs`,e,`edit`];function st(e,r){if(e&1){let t=jA();Vc(0,`a`,15),lu(`click`,function(c){Pg(t);return Lg($A(2).stopCardNavigation(c))}),Vc(1,`mat-icon`,16),hx(2,`edit`),Bp(),Vc(3,`span`),hx(4,`Edit blog`),Bp()()}if(e&2)BE(`routerLink`,Tx(1,lt,$A(2).blog.id))}function mt(e,r){if(e&1){let t=jA();Vc(0,`button`,17),lu(`click`,function(c){Pg(t);return Lg($A(2).toggleVisibility(c))}),Vc(1,`mat-icon`,16),hx(2),Bp(),Vc(3,`span`),hx(4),Bp()()}if(e&2){let t=$A(2);BE(`disabled`,t.isUpdatingVisibility),ss(2),cD(t.blog.is_public?`visibility_off`:`visibility`),ss(2),cD(t.blog.is_public?`Make private`:`Make public`)}}function gt(e,r){if(e&1){let t=jA();Vc(0,`button`,17),lu(`click`,function(c){Pg(t);return Lg($A(2).deleteBlog(c))}),Vc(1,`mat-icon`,18),hx(2,`delete`),Bp(),Vc(3,`span`),hx(4,`Delete blog`),Bp()()}if(e&2)BE(`disabled`,$A(2).isDeleting)}function pt(e,r){if(e&1){let t=jA();Vc(0,`button`,11),lu(`click`,function(c){Pg(t);return Lg($A().stopCardNavigation(c))}),Vc(1,`mat-icon`),hx(2),Bp()(),Vc(3,`mat-menu`,12,0),ls(5,st,5,3,`a`,13),ls(6,mt,5,3,`button`,14),ls(7,gt,5,1,`button`,14),Bp()}if(e&2){let t=qA(4),a=$A();BE(`matMenuTriggerFor`,t),ss(2),cD(a.auth.canEdit(a.blog.created_by)?`edit`:`more_vert`),ss(3),ds(a.auth.canEdit(a.blog.created_by)?5:-1),ss(),ds(a.showVisibilityToggle&&a.auth.canManageVisibility(a.blog.created_by)?6:-1),ss(),ds(a.auth.canDeleteBlog(a.blog.created_by)?7:-1)}}function ut(e,r){e&1&&(Vc(0,`p`,7),hx(1,`Private`),Bp())}function bt(e,r){if(e&1&&(Vc(0,`span`,19),hx(1),Bp()),e&2){let t=r.$implicit;ss(),zp(`#`,t)}}function ft(e,r){if(e&1&&(Vc(0,`div`,8),MA(1,bt,2,1,`span`,19,NA),Bp()),e&2){let t=$A();ss(),AA(t.blog.tags)}}function vt(e,r){if(e&1){let t=jA();Vc(0,`mat-card-actions`,9)(1,`button`,20),lu(`click`,function(c){Pg(t);return Lg($A().toggleLike(c))}),Vc(2,`mat-icon`),hx(3),Bp(),Vc(4,`span`),hx(5),Bp()(),Vc(6,`span`,21)(7,`mat-icon`),hx(8,`chat_bubble_outline`),Bp(),Vc(9,`span`),hx(10),Bp()()()}if(e&2){let t=$A();ss(),BE(`disabled`,t.isUpdatingLike),$r(`aria-label`,(t.isLiked()?`Unlike`:`Like`)+` this blog. `+t.likeCount()+` likes`)(`aria-pressed`,t.isLiked()),ss(),eD(`font-family`,t.isLiked()?`Material Icons`:`Material Symbols Outlined`)(`color`,t.isLiked()?`#d32f2f`:`#087ea4`),ss(),cD(t.isLiked()?`favorite`:`favorite_border`),ss(),eD(`color`,t.isLiked()?`#d32f2f`:null),ss(),cD(t.likeCount()),ss(),$r(`aria-label`,t.blog.comment_count+` comments`),ss(4),cD(t.blog.comment_count)}}function ht(e,r){if(e&1&&(Vc(0,`p`,10),hx(1),Bp()),e&2){let t=$A();ss(),cD(t.likeErrorMessage)}}var it=class e{auth=h(g);blogService=h(g$1);router=h(ri);blogValue;isLiked=Y(!1);likeCount=Y(0);likeErrorMessage=``;set blog(r){this.blogValue=r,this.isLiked.set(r.liked_by_me),this.likeCount.set(r.like_count)}get blog(){return this.blogValue}showVisibilityToggle=!1;deleted=new Ee;visibilityChanged=new Ee;isDeleting=!1;isUpdatingVisibility=!1;isUpdatingLike=!1;stopCardNavigation(r){r.stopPropagation()}deleteBlog(r){r.stopPropagation(),!(!this.auth.canDeleteBlog(this.blog.created_by)||!window.confirm(`Delete this blog?`))&&(this.isDeleting=!0,this.blogService.delete(this.blog.id).subscribe({next:()=>this.deleted.emit(this.blog.id),error:()=>{this.isDeleting=!1}}))}toggleVisibility(r){r.stopPropagation(),!(!this.showVisibilityToggle||!this.auth.canManageVisibility(this.blog.created_by)||this.isUpdatingVisibility)&&(this.isUpdatingVisibility=!0,this.blogService.updateVisibility(this.blog.id,!this.blog.is_public).subscribe({next:t=>{this.blog=t,this.visibilityChanged.emit(t),this.isUpdatingVisibility=!1},error:()=>{this.isUpdatingVisibility=!1}}))}toggleLike(r){if(r.stopPropagation(),this.isUpdatingLike)return;if(!this.auth.isLoggedIn()){this.router.navigate([`/login`],{queryParams:{returnUrl:`/blogs/${this.blog.id}`}});return}this.isUpdatingLike=!0,this.likeErrorMessage=``,(this.blog.liked_by_me?this.blogService.unlike(this.blog.id):this.blogService.like(this.blog.id)).subscribe({next:a=>{this.blog=$(v({},this.blog),{liked_by_me:a.liked,like_count:a.like_count}),this.isUpdatingLike=!1},error:a=>{this.likeErrorMessage=a.error?.detail??`Unable to update like. Please try again.`,this.isUpdatingLike=!1}})}static ɵfac=function(t){return new(t||e)};static ɵcmp=ot$1({type:e,selectors:[[`app-blog-card`]],inputs:{blog:`blog`,showVisibilityToggle:`showVisibilityToggle`},outputs:{deleted:`deleted`,visibilityChanged:`visibilityChanged`},decls:15,vars:11,consts:[[`blogActions`,`matMenu`],[`appearance`,`outlined`,`tabindex`,`0`,1,`blog-card`,3,`routerLink`],[1,`blog-card-header`],[1,`blog-card-heading`],[1,`blog-card-title`],[1,`blog-card-author`],[1,`!flex-1`],[1,`mb-2`,`text-xs`,`font-semibold`,`uppercase`,`text-[#a34b18]`],[`aria-label`,`Blog tags`,1,`mt-3.5`,`flex`,`flex-wrap`,`gap-1.5`],[1,`!mt-auto`,`!flex`,`!w-full`,`!flex-row`,`!flex-nowrap`,`!items-center`,`!gap-4`,`!px-4`,`!pb-4`],[`role`,`alert`,1,`px-4`,`pb-2`,`text-sm`,`text-[#b3261e]`],[`mat-icon-button`,``,`type`,`button`,`aria-label`,`Blog actions`,`title`,`Blog actions`,1,`actions-trigger`,3,`click`,`matMenuTriggerFor`],[`panelClass`,`!rounded-lg !border !border-[#b9e3f5] !bg-[#eaf7fb]`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,`type`,`button`,3,`disabled`],[`mat-menu-item`,``,3,`click`,`routerLink`],[1,`!text-[#087ea4]`],[`mat-menu-item`,``,`type`,`button`,3,`click`,`disabled`],[1,`!text-[#123447]`],[1,`rounded-full`,`border`,`border-[#c8e8f5]`,`bg-[#eef8fc]`,`px-2.5`,`py-1`,`text-xs`,`font-semibold`,`text-[#087ea4]`],[`type`,`button`,1,`!inline-flex`,`!shrink-0`,`!flex-row`,`!items-center`,`!gap-1.5`,`whitespace-nowrap`,`rounded-full`,`px-2`,`py-1`,`text-[#087ea4]`,`hover:bg-[#eef8fc]`,`disabled:opacity-60`,3,`click`,`disabled`],[1,`inline-flex`,`shrink-0`,`flex-row`,`items-center`,`gap-1.5`,`whitespace-nowrap`,`text-[#527080]`]],template:function(t,a){t&1&&(Vc(0,`mat-card`,1)(1,`header`,2)(2,`div`,3)(3,`h2`,4),hx(4),Bp(),Vc(5,`p`,5),hx(6),Bp()(),ls(7,pt,8,5),Bp(),Vc(8,`mat-card-content`,6),ls(9,ut,2,0,`p`,7),Vc(10,`p`),hx(11),Bp(),ls(12,ft,3,0,`div`,8),Bp(),ls(13,vt,11,13,`mat-card-actions`,9),ls(14,ht,2,1,`p`,10),Bp()),t&2&&(BE(`routerLink`,Tx(9,ct,a.blog.id)),ss(4),cD(a.blog.title),ss(2),zp(`By `,a.blog.author_name||`Author #`+a.blog.created_by),ss(),ds(a.auth.canEdit(a.blog.created_by)||a.auth.canDeleteBlog(a.blog.created_by)||a.showVisibilityToggle&&a.auth.canManageVisibility(a.blog.created_by)?7:-1),ss(2),ds(a.blog.is_public?-1:9),ss(2),cD(a.blog.description),ss(),ds(a.blog.tags?.length?12:-1),ss(),ds(a.auth.isLoggedIn()?13:-1),ss(),ds(a.likeErrorMessage?14:-1))},dependencies:[at,Z,et,tt,d7,PP,Nt,wt,Lt,D,G,Bt,Qw],styles:[`.blog-card[_ngcontent-%COMP%]{position:relative;height:100%;cursor:pointer;border-color:#c8e8f5;background:#fff}.blog-card[_ngcontent-%COMP%]:focus-visible{outline:3px solid #1688b0;outline-offset:3px}.blog-card[_ngcontent-%COMP%]:hover{border-color:#1688b0;box-shadow:0 8px 20px #1234471a}.blog-card-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;padding:16px 16px 0}.blog-card-heading[_ngcontent-%COMP%]{min-width:0;flex:1 1 auto}.blog-card-title[_ngcontent-%COMP%]{margin:0;color:#123447;overflow-wrap:anywhere;font-size:1.15rem;font-weight:700;line-height:1.35}.blog-card-author[_ngcontent-%COMP%]{margin:5px 0 0;color:#087ea4;font-size:.85rem}.blog-card[_ngcontent-%COMP%]   .actions-trigger[_ngcontent-%COMP%]{flex:0 0 32px;width:32px;height:32px;padding:4px;margin:-4px -8px 0 0}.blog-card[_ngcontent-%COMP%]   .actions-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:20px;line-height:20px}.blog-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{margin-top:16px;color:#527080}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:-webkit-box;margin:0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;line-height:1.6}`]})};export{it as t};