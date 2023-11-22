(()=>{"use strict";var e,r={974:()=>{const e=window.React,r=window.wp.i18n,o=window.wp.compose,t=window.wp.url,l=window.wp.blocks,n=window.wp.components,a=window.wp.data,c=window.wp.reusableBlocks,i=window.wp.hooks,s=(0,o.createHigherOrderComponent)((o=>i=>{const{attributes:s,clientId:b}=i;if(i.isSelected&&(0,l.isReusableBlock)(i)&&s.ref){let l=!0,d=!0;"undefined"!=typeof lrb&&(lrb.hide_convert_button&&"1"===lrb.hide_convert_button&&(l=!1),lrb.hide_edit_button&&"1"===lrb.hide_edit_button&&(d=!1));const{__experimentalConvertBlockToStatic:p}=(0,a.useDispatch)(c.store);return(0,e.createElement)("div",{className:"wp-block wp-reusable-block-locked"},(0,e.createElement)("div",{className:"wp-reusable-block-locked__wrapper"},d&&(0,e.createElement)(n.Button,{variant:"primary",className:"wp-reusable-block-locked__edit-link",href:(0,t.addQueryArgs)("post.php",{post:s.ref,action:"edit"}),target:"_blank",rel:"noopener noreferrer"},(0,r.__)("Edit reusable block","lock-reusable-blocks")),l&&(0,e.createElement)(n.Button,{onClick:()=>p(b),variant:"primary",className:"wp-reusable-block-locked__convert-link"},(0,r.__)("Convert to regular blocks","lock-reusable-blocks"))),(0,e.createElement)(o,{...i}))}return(0,e.createElement)(o,{...i})}),"withLockedReusableBlock");(0,i.addFilter)("editor.BlockEdit","lock-reusable-blocks/with-locked-reusable-blocks",s)}},o={};function t(e){var l=o[e];if(void 0!==l)return l.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,t),n.exports}t.m=r,e=[],t.O=(r,o,l,n)=>{if(!o){var a=1/0;for(b=0;b<e.length;b++){for(var[o,l,n]=e[b],c=!0,i=0;i<o.length;i++)(!1&n||a>=n)&&Object.keys(t.O).every((e=>t.O[e](o[i])))?o.splice(i--,1):(c=!1,n<a&&(a=n));if(c){e.splice(b--,1);var s=l();void 0!==s&&(r=s)}}return r}n=n||0;for(var b=e.length;b>0&&e[b-1][2]>n;b--)e[b]=e[b-1];e[b]=[o,l,n]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,431:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var l,n,[a,c,i]=o,s=0;if(a.some((r=>0!==e[r]))){for(l in c)t.o(c,l)&&(t.m[l]=c[l]);if(i)var b=i(t)}for(r&&r(o);s<a.length;s++)n=a[s],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(b)},o=globalThis.webpackChunklock_reusable_blocks=globalThis.webpackChunklock_reusable_blocks||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var l=t.O(void 0,[431],(()=>t(974)));l=t.O(l)})();