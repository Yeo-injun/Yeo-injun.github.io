"use strict";(self["webpackChunkbasketballdiary_frontend"]=self["webpackChunkbasketballdiary_frontend"]||[]).push([[375],{34553:function(t,e,i){var n=i(82109),a=i(42092).findIndex,s=i(51223),l="findIndex",r=!0;l in[]&&Array(1)[l]((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(l)},40561:function(t,e,i){var n=i(82109),a=i(17854),s=i(51400),l=i(19303),r=i(26244),o=i(47908),u=i(65417),h=i(86135),c=i(81194),d=c("splice"),p=a.TypeError,f=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var i,n,a,c,d,y,b=o(this),C=r(b),V=s(t,C),x=arguments.length;if(0===x?i=n=0:1===x?(i=0,n=C-V):(i=x-2,n=v(f(l(e),0),C-V)),C+i-n>m)throw p(g);for(a=u(b,n),c=0;c<n;c++)d=V+c,d in b&&h(a,c,b[d]);if(a.length=n,i<n){for(c=V;c<C-n;c++)d=c+n,y=c+i,d in b?b[y]=b[d]:delete b[y];for(c=C;c>C-n+i;c--)delete b[c-1]}else if(i>n)for(c=C-n;c>V;c--)d=c+n-1,y=c+i-1,d in b?b[y]=b[d]:delete b[y];for(c=0;c<i;c++)b[c+V]=arguments[c+2];return b.length=C-n+i,a}})},95424:function(t,e,i){i.d(e,{Z:function(){return v}});var n=i(75200),a=i(4367),s=(i(41539),i(57327),i(73325)),l=i(85827),r=i(70172),o=i(46952),u=i(17352),h=i(48085),c=i(2936),d=i(6505),p=i(19131),f=i(71824),v=(0,s.Z)(o.Z,p.Z,d.Z,h.Z,(0,u.d)("chipGroup"),(0,c.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({"v-chip":!0},d.Z.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=(0,n.Z)(e,2),a=i[0],s=i[1];t.$attrs.hasOwnProperty(a)&&(0,f.fK)(a,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.Zq,t)},genClose:function(){var t=this;return this.$createElement(r.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,s=i.data;s.attrs=(0,a.Z)((0,a.Z)({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var l=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(l,s),e)}})},24622:function(t,e,i){i.d(e,{y:function(){return u}});var n=i(4367),a=(i(9653),i(57327),i(41539),i(40561),i(54747),i(47042),i(69826),i(34553),i(34419)),s=i(41431),l=i(48085),r=i(73325),o=i(71824),u=(0,r.Z)(a.Z,s.Z,l.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return(0,n.Z)({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(i){return e.some((function(e){return t.valueComparator(e,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&(0,o.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});u.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},34419:function(t,e,i){var n=i(20144),a=i(4589);e["Z"]=n.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:a.vZ}}})}}]);
//# sourceMappingURL=375-legacy.0b2d0e46.js.map