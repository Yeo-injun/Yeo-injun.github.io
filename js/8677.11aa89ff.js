"use strict";(self["webpackChunkbasketballdiary_frontend"]=self["webpackChunkbasketballdiary_frontend"]||[]).push([[8677],{9928:function(t,e,o){o.d(e,{N:function(){return r},w:function(){return n}});const n={FREE_THROW:"freeThrow",TWO_POINT:"twoPoint",THREE_POINT:"threePoint",TRY_FREE_THROW:"tryFreeThrow",TRY_TWO_POINT:"tryTwoPoint",TRY_THREE_POINT:"tryThreePoint",FOUL:"foul",TURNOVER:"turnover",REBOUND:"rebound",ASSIST:"assist",BLOCK:"block",STEAL:"steal"},r={ADD:"add",CANCEL:"cancel"}},5617:function(t,e,o){o.r(e),o.d(e,{default:function(){return y}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-card",[o("v-container",[o("v-col",[o("v-row",{attrs:{justify:"space-between"}},[o("v-col",[o("h3",[t._v(" "+t._s(this.pPlayerRecord.name)+" ( "+t._s(this.pPlayerRecord.backNumber)+" ) / "+t._s(this.pPlayerRecord.positionCodeName)+" ")])])],1),o("v-row",{attrs:{justify:"space-between"}},[o("v-col",[t._v("총득점 : "+t._s(this.pPlayerRecord.totalScore)+" 점")]),o("v-col",[t._v(" 자유투 : "+t._s(this.pPlayerRecord.freeThrow)+" / "+t._s(this.pPlayerRecord.tryFreeThrow)+" ")]),o("v-col",[t._v(" 2점 : "+t._s(this.pPlayerRecord.twoPoint)+" / "+t._s(this.pPlayerRecord.tryTwoPoint)+" ")]),o("v-col",[t._v(" 3점 : "+t._s(this.pPlayerRecord.threePoint)+" / "+t._s(this.pPlayerRecord.tryThreePoint)+" ")])],1),o("v-row",{attrs:{justify:"space-between"}},[o("v-col",[t._v("어시스트 : "+t._s(this.pPlayerRecord.assist))]),o("v-col",[t._v("리바운드 : "+t._s(this.pPlayerRecord.rebound))]),o("v-col",[t._v("턴오버 : "+t._s(this.pPlayerRecord.turnover))]),o("v-col",[t._v("스틸 : "+t._s(this.pPlayerRecord.steal))]),o("v-col",[t._v("블락 : "+t._s(this.pPlayerRecord.block))]),o("v-col",[t._v("파울 : "+t._s(this.pPlayerRecord.foul))])],1)],1)],1)],1)],1)},r=[],a={props:{pPlayerRecord:Object}},s=a,i=o(1001),c=o(3453),l=o.n(c),p=o(2371),u=o(2102),d=o(9846),v=o(2877),h=(0,i.Z)(s,n,r,!1,null,"a770dbec",null),y=h.exports;l()(h,{VCard:p.Z,VCol:u.Z,VContainer:d.Z,VRow:v.Z})},7229:function(t,e,o){o.r(e),o.d(e,{default:function(){return v}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-chip-group",t._l(t.foulInfoList,(function(e){return o("v-chip",{key:e.number,staticClass:"foulCnt",attrs:{color:e.color,"text-color":e.textColor}},[t._v(" "+t._s(e.number)+" ")])})),1)],1)},r=[],a={props:{pFoulCnt:Number},data(){return{foulCnt:this.pFoulCnt,foulInfoList:this.generateFoulInfoList()}},watch:{pFoulCnt(){this.generateFoulInfoList()}},methods:{generateFoulInfoList(){const t=[],e=5;for(let o=1;o<=e;++o){const e=o<=this.pFoulCnt;if(e){const e={number:String(o),color:"red",textColor:"white"};t.push(e);continue}const n={number:String(o),color:"",textColor:""};t.push(n)}return t}}},s=a,i=o(1001),c=o(3453),l=o.n(c),p=o(5424),u=o(6105),d=(0,i.Z)(s,n,r,!1,null,"019a1473",null),v=d.exports;l()(d,{VChip:p.Z,VChipGroup:u.Z})},3187:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{class:this.btnColor,on:{click:function(e){return t.emitStatTypeInfo()}}},[o("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(this.statBtnName)+" ")])])],1)},r=[],a=o(9928),s={props:{pType:String,pActiveMode:String},data(){return{statBtnName:this.getStatBtnName()}},computed:{btnColor(){const t=this.pActiveMode==a.N.ADD?"4":"5",e=this.pType;return this.isNegativeStat(e)?`red lighten-${t}`:`blue lighten-${t}`}},methods:{emitStatTypeInfo(){this.$emit("get-stat-type",this.pType)},isNegativeStat(t){return a.w.TRY_FREE_THROW==t||a.w.TRY_TWO_POINT==t||a.w.TRY_THREE_POINT==t||a.w.TURNOVER==t||a.w.FOUL==t},getStatBtnName(){const t=this.pType;switch(t){case a.w.FREE_THROW:return"자유투 성공";case a.w.TWO_POINT:return"2점 성공";case a.w.THREE_POINT:return"3점 성공";case a.w.TRY_FREE_THROW:return"자유투 시도";case a.w.TRY_TWO_POINT:return"2점 시도";case a.w.TRY_THREE_POINT:return"3점 시도";case a.w.FOUL:return"파울";case a.w.TURNOVER:return"턴오버";case a.w.REBOUND:return"리바운드";case a.w.ASSIST:return"어시스트";case a.w.BLOCK:return"블락";case a.w.STEAL:return"스틸"}return""}}},i=s,c=o(1001),l=o(3453),p=o.n(l),u=o(2371),d=o(7118),v=(0,c.Z)(i,n,r,!1,null,"17b344e4",null),h=v.exports;p()(v,{VCard:u.Z,VCardTitle:d.EB})},1996:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.pEntry,"item-key":"quarterPlayerRecordsSeq","hide-default-footer":""},on:{"click:row":t.clickRowButton},scopedSlots:t._u([{key:"item.foul",fn:function(t){var e=t.item;return[[o("FoulCountComp",{attrs:{pFoulCnt:e.foul}})]]}}],null,!0)})],1)},r=[],a=o(7229),s={components:{FoulCountComp:a["default"]},props:{pEntry:Array},data(){return{headers:[{text:"등번호",value:"backNumber"},{text:"선수이름",value:"name"},{text:"개인파울",value:"foul"}]}},methods:{clickRowButton(t){this.$emit("select-player",t),console.log(t)}}},i=s,c=o(1001),l=o(3453),p=o.n(l),u=o(9846),d=o(4998),v=(0,c.Z)(i,n,r,!1,null,"5002b6f6",null),h=v.exports;p()(v,{VContainer:u.Z,VDataTable:d.Z})},6804:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{class:this.btnColor,on:{click:function(e){return t.clickEmit()}}},[o("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(this.pBtnInfo.btnName)+" ")])])],1)},r=[],a=o(8510),s={props:{pBtnInfo:Object,pActiveMode:String},computed:{btnColor(){if(a.Z.isNull(this.pBtnInfo))return"";const t=this.pBtnInfo.mode,e=t==this.pActiveMode;return e?"green lighten-4":""}},methods:{clickEmit(){this.$emit("click-mode-btn",this.pBtnInfo.mode)}}},i=s,c=o(1001),l=o(3453),p=o.n(l),u=o(2371),d=o(7118),v=(0,c.Z)(i,n,r,!1,null,"4fcda821",null),h=v.exports;p()(v,{VCard:u.Z,VCardTitle:d.EB})},7531:function(t,e,o){o.r(e),o.d(e,{default:function(){return T}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-row",[o("v-col",[o("h3",[t._v("쿼터 엔트리")])]),o("v-col",[o("EntryManageModal",{attrs:{pHomeAwayCode:this.pHomeAwayCode,pHomeAwayCodeName:this.pHomeAwayCodeName},on:{"save-entry":t.emitSaveEntryEvent}})],1)],1),o("h3")],1),t._v(" // TODO 엔트리에서 선택된 선수 표시 ++ 파울갯수 실시간으로 반영시키기 "),o("EntryTable",{attrs:{pEntry:t.pEntry},on:{"select-player":t.selectPlayer}})],1)},r=[],a=o(1689),s=o(1996);const i="select-player";var c={mounted(){const t=this.pEntry.length>0;if(t){const t=this.pEntry[0];this.$emit(i,t)}},components:{EntryManageModal:a["default"],EntryTable:s["default"]},props:{pHomeAwayCode:String,pHomeAwayCodeName:String,pEntry:Array},methods:{selectPlayer(t){this.$emit(i,t)},emitSaveEntryEvent(){this.$emit("save-entry")}}},l=c,p=o(1001),u=o(3453),d=o.n(u),v=o(2102),h=o(9846),y=o(2877),f=(0,p.Z)(l,n,r,!1,null,"daf710dc",null),T=f.exports;d()(f,{VCol:v.Z,VContainer:h.Z,VRow:y.Z})},8677:function(t,e,o){o.r(e),o.d(e,{default:function(){return T}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("h3",[t._v("선수기록")]),o("PlayerRecordComp",{attrs:{pPlayerRecord:this.selectedPlayer}}),o("v-row",[o("v-col",{attrs:{cols:"5"}},[o("QuarterEntryComp",{attrs:{pHomeAwayCode:this.pHomeAwayCode,pHomeAwayCodeName:this.pHomeAwayCodeName,pEntry:this.pEntry},on:{"select-player":t.selectPlayer,"save-entry":t.emitSaveEntryEvent}})],1),o("v-col",{attrs:{cols:"7"}},[o("StatInputBoardComp",{on:{"record-stat":t.recordStat}})],1)],1)],1)},r=[],a=o(5617),s=o(7531),i=o(6925),c={components:{PlayerRecordComp:a["default"],QuarterEntryComp:s["default"],StatInputBoardComp:i["default"]},props:{pHomeAwayCode:String,pHomeAwayCodeName:String,pEntry:Array},data(){return{selectedPlayer:{}}},methods:{selectPlayer(t){this.selectedPlayer=t},emitSaveEntryEvent(){this.$emit("save-entry")},recordStat(t){const e=this.selectedPlayer,o={homeAwayCode:this.pHomeAwayCode,gameJoinPlayerSeq:e.gameJoinPlayerSeq,statType:t.statType,mode:t.mode,timeStamp:new Date};this.$emit("get-clicked-record-info",o)}}},l=c,p=o(1001),u=o(3453),d=o.n(u),v=o(2102),h=o(9846),y=o(2877),f=(0,p.Z)(l,n,r,!1,null,"b81a8daa",null),T=f.exports;d()(f,{VCol:v.Z,VContainer:h.Z,VRow:y.Z})},6925:function(t,e,o){o.r(e),o.d(e,{default:function(){return T}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",[o("AddModeBtn",{attrs:{pBtnInfo:this.addBtnInfo,pActiveMode:this.activeMode},on:{"click-mode-btn":t.changeActiveMode}})],1),o("v-col",[o("CancelModeBtn",{attrs:{pBtnInfo:this.cancelBtnInfo,pActiveMode:this.activeMode},on:{"click-mode-btn":t.changeActiveMode}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("FreeThrowInputBtn",{attrs:{pType:this.type.freeThrow,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("TwoPointInputBtn",{attrs:{pType:this.type.twoPoint,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("ThreePointInputBtn",{attrs:{pType:this.type.threePoint,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("TryFreeThrowInputBtn",{attrs:{pType:this.type.tryFreeThrow,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("TryTwoPointInputBtn",{attrs:{pType:this.type.tryTwoPoint,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("TryThreePointInputBtn",{attrs:{pType:this.type.tryThreePoint,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("AssistInputBtn",{attrs:{pType:this.type.assist,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("ReboundInputBtn",{attrs:{pType:this.type.rebound,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("TurnoverInputBtn",{attrs:{pType:this.type.turnover,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("BlockInputBtn",{attrs:{pType:this.type.block,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("StealInputBtn",{attrs:{pType:this.type.steal,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1),o("v-col",{attrs:{cols:"4"}},[o("FoulInputBtn",{attrs:{pType:this.type.foul,pActiveMode:this.activeMode},on:{"get-stat-type":t.emitInputInfo}})],1)],1),t._v(" TODO 스탯 입력창 구현 - "),o("br"),t._v("생성 데이터 형식과 어디서 데이터를 보관할지... 결정 "),o("br"),t._v("{ playerSeq : 게임참가선수 식별자, statType : 스탯의 유형 - 자유투 시도인지, 성공인지, 리바운드인지 count : 횟수 mode : 추가인지 취소인지.. } "),o("br"),t._v(" - 선택된 선수를 기준으로 스탯이 기록되어야 하니 RecordInputBoardComp에서 기록 데이터를 관리하기 "),o("br"),t._v(" - 임시데이터를 건별로 저장하고, 계속 연산해서 보여주기 "),o("br"),t._v(" 1. 스탯 입력 2. 건별 임시 저장 3. 임시저장된 데이터를 기준으로 엔트리 정보 update 4. 저장시 현재 화면의 엔트리 정보가 그대로 백엔드로 날라감 ")],1)},r=[],a=o(9928),s=o(6804),i=o(3187),c={components:{AddModeBtn:s["default"],CancelModeBtn:s["default"],FreeThrowInputBtn:i["default"],TwoPointInputBtn:i["default"],ThreePointInputBtn:i["default"],TryFreeThrowInputBtn:i["default"],TryTwoPointInputBtn:i["default"],TryThreePointInputBtn:i["default"],AssistInputBtn:i["default"],ReboundInputBtn:i["default"],TurnoverInputBtn:i["default"],BlockInputBtn:i["default"],StealInputBtn:i["default"],FoulInputBtn:i["default"]},data(){return{addBtnInfo:{btnName:"입력모드",mode:a.N.ADD},cancelBtnInfo:{btnName:"취소모드",mode:a.N.CANCEL},activeMode:a.N.ADD,type:{freeThrow:a.w.FREE_THROW,twoPoint:a.w.TWO_POINT,threePoint:a.w.THREE_POINT,tryFreeThrow:a.w.TRY_FREE_THROW,tryTwoPoint:a.w.TRY_TWO_POINT,tryThreePoint:a.w.TRY_THREE_POINT,assist:a.w.ASSIST,rebound:a.w.REBOUND,turnover:a.w.TURNOVER,block:a.w.BLOCK,steal:a.w.STEAL,foul:a.w.FOUL}}},methods:{changeActiveMode(t){this.activeMode=t},emitInputInfo(t){const e={statType:t,mode:this.activeMode};this.$emit("record-stat",e)}}},l=c,p=o(1001),u=o(3453),d=o.n(u),v=o(2102),h=o(9846),y=o(2877),f=(0,p.Z)(l,n,r,!1,null,"054cad2a",null),T=f.exports;d()(f,{VCol:v.Z,VContainer:h.Z,VRow:y.Z})}}]);
//# sourceMappingURL=8677.11aa89ff.js.map