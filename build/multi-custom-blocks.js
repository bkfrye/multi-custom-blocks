!function(){"use strict";var t,o={588:function(){var t=window.wp.blocks,o=JSON.parse('{"apiVersion":2,"name":"create-block/multi-custom-blocks","version":"0.1.0","title":"Multi Custom Blocks","category":"widgets","description":"","supports":{"html":false},"textdomain":"create-block","editorScript":"file:../../../../build/multi-custom-blocks.js","editorStyle":"file:../../../../build/multi-custom-blocks.css","style":"file:../../../../build/style-multi-custom-blocks.css"}'),e=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor;const{name:i,...l}=o;(0,t.registerBlockType)(i,{...l,edit:function(){return(0,e.createElement)("p",(0,n.useBlockProps)(),(0,r.__)("Multi Custom Blocks – hello from the editor!","multi-custom-blocks"))},save:function(){return(0,e.createElement)("p",n.useBlockProps.save(),(0,r.__)("Multi Custom Blocks – hello from the saved content!","multi-custom-blocks"))}})}},e={};function r(t){var n=e[t];if(void 0!==n)return n.exports;var i=e[t]={exports:{}};return o[t](i,i.exports,r),i.exports}r.m=o,t=[],r.O=function(o,e,n,i){if(!e){var l=1/0;for(a=0;a<t.length;a++){e=t[a][0],n=t[a][1],i=t[a][2];for(var s=!0,c=0;c<e.length;c++)(!1&i||l>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(s=!1,i<l&&(l=i));if(s){t.splice(a--,1);var u=n();void 0!==u&&(o=u)}}return o}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[e,n,i]},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},function(){var t={68:0,676:0};r.O.j=function(o){return 0===t[o]};var o=function(o,e){var n,i,l=e[0],s=e[1],c=e[2],u=0;if(l.some((function(o){return 0!==t[o]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var a=c(r)}for(o&&o(e);u<l.length;u++)i=l[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(a)},e=self.webpackChunkmulti_custom_blocks=self.webpackChunkmulti_custom_blocks||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var n=r.O(void 0,[676],(function(){return r(588)}));n=r.O(n)}();