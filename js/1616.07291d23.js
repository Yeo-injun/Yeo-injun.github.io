"use strict";(self["webpackChunkbasketballdiary_frontend"]=self["webpackChunkbasketballdiary_frontend"]||[]).push([[1616],{5309:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-btn",{attrs:{color:"error"},on:{click:e.deleteGame}},[e._v("게임삭제")])],1)],1)],1)},o=[],s=t(5855),m={props:{pGameSeq:Number},data(){return{gameSeq:this.pGameSeq,eventEmitName:"delete-game"}},methods:{async deleteGame(){if(!confirm("게임을 삭제하겠습니까?"))return;const e={gameSeq:this.gameSeq};await s.Z.deleteGame(e),this.$emit(this.eventEmitName)}}},n=m,i=t(1001),l=t(3453),d=t.n(l),c=t(680),u=t(2102),h=t(9846),p=t(2877),f=(0,i.Z)(n,r,o,!1,null,"3627ebf8",null),g=f.exports;d()(f,{VBtn:c.Z,VCol:u.Z,VContainer:h.Z,VRow:p.Z})},6390:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("h2",[e._v("경기 정보")]),t("v-container",[t("v-card",[t("v-row",[t("v-col",{attrs:{"no-gutters":""}},[t("v-row",{attrs:{"no-gutters":""}},[e._v("경기일자 : "+e._s(this.gameBasicInfo.gameYmd))]),t("v-row",{attrs:{"no-gutters":""}},[e._v("경기시간 : "+e._s(this.gameBasicInfo.gameTime))])],1),t("v-col",{attrs:{"no-gutters":""}},[t("v-row",{attrs:{"no-gutters":""}},[e._v("주소 : "+e._s(this.gameBasicInfo.gamePlaceAddress))]),t("v-row",{attrs:{"no-gutters":""}},[e._v("경기장명 : "+e._s(this.gameBasicInfo.gamePlaceName))])],1)],1)],1)],1)],1)},o=[],s=t(5855),m=t(5075),n={props:{pGameSeq:Number},data(){return{gameBasicInfo:function(){console.log("data가 호출되는 시점 ")}}},methods:{async getGameBasicInfo(){console.log("getGameInfo 호출되는 시점");const e={gameSeq:this.pGameSeq},a=await s.Z.getGameBasicInfo(e),t=a.data.gameInfo,r=m.Z.Format.toTime(t.gameStartTime),o=m.Z.Format.toTime(t.gameEndTime);this.gameBasicInfo={gameYmd:m.Z.Format.toYmd(t.gameYmd),gameTime:`${r} ~ ${o}`,gamePlaceAddress:t.gamePlaceAddress,gamePlaceName:t.gamePlaceName}}},mounted(){console.log("마운트되는 시점"),this.getGameBasicInfo()}},i=n,l=t(1001),d=t(3453),c=t.n(d),u=t(2371),h=t(2102),p=t(9846),f=t(2877),g=(0,l.Z)(i,r,o,!1,null,"41cc6222",null),y=g.exports;c()(g,{VCard:u.Z,VCol:h.Z,VContainer:p.Z,VRow:f.Z})},6739:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:this.pGameJoinPlayers,"hide-default-footer":""}})},o=[],s={props:{pGameJoinPlayers:Array},data(){return{headers:[{text:"등번호",value:"backNumber"},{text:"포지션",value:"positionCodeName"},{text:"이름",value:"userName"},{text:"팀원 구분",value:"playerTypeCodeName"}]}}},m=s,n=t(1001),i=t(3453),l=t.n(i),d=t(4998),c=(0,n.Z)(m,r,o,!1,null,"0e6979e8",null),u=c.exports;l()(c,{VDataTable:d.Z})},2200:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("h2",[e._v("게임참가선수")]),this.isLoadingComplete?t("v-container",[t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"6"}},[t("HomeTeamPlayersManageModal",{attrs:{pModalTitlePrefix:"홈팀",pHomeAwayCode:this.homeTeamCode,pGameJoinTeamInfo:this.homeTeamInfo},on:{"register-complete":e.setSelectedPlayers}}),t("HomeTeamPlayerList",{attrs:{pGameJoinPlayers:this.homeTeamPlayers}})],1),t("v-col",{attrs:{cols:"6"}},[t("AwayTeamPlayersManageModal",{attrs:{pModalTitlePrefix:"어웨이팀",pHomeAwayCode:this.awayTeamCode,pGameJoinTeamInfo:this.awayTeamInfo},on:{"register-complete":e.setSelectedPlayers}}),t("AwayTeamPlayerList",{attrs:{pGameJoinPlayers:this.awayTeamPlayers}})],1)],1)],1):e._e()],1)},o=[],s=t(5855),m=t(357),n=t(6739),i=t(6071),l={components:{HomeTeamPlayerList:n["default"],HomeTeamPlayersManageModal:i["default"],AwayTeamPlayerList:n["default"],AwayTeamPlayersManageModal:i["default"]},props:{pGameSeq:Number},data(){return{isLoadingComplete:!1,homeTeamCode:m.Xh.HOME_TEAM,awayTeamCode:m.Xh.AWAY_TEAM,homeTeamInfo:{},awayTeamInfo:{},homeTeamPlayers:[],awayTeamPlayers:[]}},methods:{async getAllGameJoinPlayers(){const e={gameSeq:this.pGameSeq},a=await s.Z.getGameJoinPlayers(e),t=a.data.homeTeam;this.homeTeamInfo={homeAwayCode:m.Xh.HOME_TEAM,gameJoinTeamSeq:t.gameJoinTeamSeq,teamSeq:t.teamSeq},this.homeTeamPlayers=t.players;const r=a.data.awayTeam;this.awayTeamInfo={homeAwayCode:m.Xh.AWAY_TEAM,gameJoinTeamSeq:r.gameJoinTeamSeq,teamSeq:r.teamSeq},this.awayTeamPlayers=r.players,this.isLoadingComplete=!0},async setSelectedPlayers(e){console.log(e);const a=e.homeAwayCode,t={gameSeq:this.pGameSeq,homeAwayCode:a},r=await s.Z.getGameJoinPlayers(t);m.Xh.HOME_TEAM!=a?this.awayTeamPlayers=r.data.awayTeam.players:this.homeTeamPlayers=r.data.homeTeam.players}},mounted(){this.getAllGameJoinPlayers()}},d=l,c=t(1001),u=t(3453),h=t.n(u),p=t(2102),f=t(9846),g=t(2877),y=(0,c.Z)(d,r,o,!1,null,"67a61f71",null),T=y.exports;h()(y,{VCol:p.Z,VContainer:f.Z,VRow:g.Z})},1271:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{attrs:{cols:"6"}},[t("v-card",[t("v-card-title",{class:this.titleColor},[t("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(this.pGameJoinTeamInfo.teamName)+" ( "+e._s(this.pGameJoinTeamInfo.homeAwayCodeName)+" ) ")])]),t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"5"}},[e._v(" 사진 넣기 "+e._s(this.pGameJoinTeamInfo.imagePath)+" ")]),t("v-col",{attrs:{cols:"7"}},[t("div",[e._v("팀장이름 : "+e._s(this.pGameJoinTeamInfo.leaderName))]),t("div",[e._v("연고지 : "+e._s(this.pGameJoinTeamInfo.hometown))])])],1)],1)],1)},o=[],s=t(8510),m=t(357),n={props:{pGameJoinTeamInfo:Object},computed:{titleColor(){if(s.Z.isNull(this.pGameJoinTeamInfo))return"";const e=this.pGameJoinTeamInfo.homeAwayCode;return m.Xh.HOME_TEAM==e?"red lighten-4":m.Xh.AWAY_TEAM==e?"blue lighten-4":""}}},i=n,l=t(1001),d=t(3453),c=t.n(d),u=t(2371),h=t(7118),p=t(2102),f=t(2877),g=(0,l.Z)(i,r,o,!1,null,"45086ad6",null),y=g.exports;c()(g,{VCard:u.Z,VCardTitle:h.EB,VCol:p.Z,VRow:f.Z})},8266:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("h2",[e._v("팀 정보")]),this.isLoadingComplete?t("v-container",[t("v-row",{attrs:{dense:""}},[t("HomeTeamInfoComp",{attrs:{pGameJoinTeamInfo:this.gameJoinTeamsInfo.homeTeamInfo}}),t("AwayTeamInfoComp",{attrs:{pGameJoinTeamInfo:this.gameJoinTeamsInfo.awayTeamInfo}})],1)],1):e._e()],1)},o=[],s=t(5855),m=t(1271),n={components:{HomeTeamInfoComp:m["default"],AwayTeamInfoComp:m["default"]},props:{pGameJoinTeamsInfo:Object,pGameSeq:Number},data(){return{isLoadingComplete:!1,gameJoinTeamsInfo:{}}},methods:{async getGameJoinTeamsInfo(){const e={gameSeq:this.pGameSeq},a=await s.Z.getGameJoinTeamsInfo(e);this.gameJoinTeamsInfo={homeTeamInfo:a.data.homeTeamInfo,awayTeamInfo:a.data.awayTeamInfo},this.isLoadingComplete=!0}},mounted(){this.getGameJoinTeamsInfo()}},i=n,l=t(1001),d=t(3453),c=t.n(d),u=t(9846),h=t(2877),p=(0,l.Z)(i,r,o,!1,null,"3043202d",null),f=p.exports;c()(p,{VContainer:u.Z,VRow:h.Z})},9485:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("h2",[e._v("경기기록")]),t("GameRecordAuthManageModal"),this.isLoadingComplete?t("div",[t("GameQuarterComp",{attrs:{pGameRecordStateCode:this.gameRecordStateCode,pQuarterCode:this.quarter1st,pTeamsQuarterRecords:this.teamsRecords1stQuarter}}),t("GameQuarterComp",{attrs:{pGameRecordStateCode:this.gameRecordStateCode,pQuarterCode:this.quarter2nd,pTeamsQuarterRecords:this.teamsRecords2ndQuarter}}),t("GameQuarterComp",{attrs:{pGameRecordStateCode:this.gameRecordStateCode,pQuarterCode:this.quarter3rd,pTeamsQuarterRecords:this.teamsRecords3rdQuarter}}),t("GameQuarterComp",{attrs:{pGameRecordStateCode:this.gameRecordStateCode,pQuarterCode:this.quarter4th,pTeamsQuarterRecords:this.teamsRecords4thQuarter}})],1):e._e()],1)},o=[],s=t(357),m=t(5855),n=t(690),i=t(3087),l={components:{GameRecordAuthManageModal:n["default"],GameQuarterComp:i["default"]},props:{pGameSeq:Number},data(){return{isLoadingComplete:!1,quarter1st:s.I0.QUARTER_1ST,quarter2nd:s.I0.QUARTER_2ND,quarter3rd:s.I0.QUARTER_3RD,quarter4th:s.I0.QUARTER_4TH,gameRecordStateCode:"",teamsRecords1stQuarter:{},teamsRecords2ndQuarter:{},teamsRecords3rdQuarter:{},teamsRecords4thQuarter:{}}},methods:{async getGameAllQuartersRecords(){const e={gameSeq:this.pGameSeq},a=await m.Z.getGameAllQuartersRecords(e);this.gameRecordStateCode=a.data.gameRecordStateCode,this.teamsRecords1stQuarter=a.data.teamsRecords1stQuarter,this.teamsRecords2ndQuarter=a.data.teamsRecords2ndQuarter,this.teamsRecords3rdQuarter=a.data.teamsRecords3rdQuarter,this.teamsRecords4thQuarter=a.data.teamsRecords4thQuarter,this.isLoadingComplete=!0}},mounted(){this.getGameAllQuartersRecords()}},d=l,c=t(1001),u=t(3453),h=t.n(u),p=t(9846),f=(0,c.Z)(d,r,o,!1,null,"cb4ce6e0",null),g=f.exports;h()(f,{VContainer:p.Z})},989:function(e,a,t){t.r(a),t.d(a,{default:function(){return G}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("GameInfoComp",{attrs:{pGameSeq:this.gameSeq}}),t("GameJoinTeamsInfoComp",{attrs:{pGameSeq:this.gameSeq}}),t("GameJoinPlayersInfoComp",{attrs:{pGameSeq:this.gameSeq}}),t("GameQuartersComp",{attrs:{pGameSeq:this.gameSeq}}),e.isShowGameManageBtn()?t("v-row",[t("v-col",[t("GameConfirmBtn",{attrs:{pGameSeq:this.gameSeq},on:{"confirm-game":e.moveMyTeamPage}})],1),t("v-col",[t("GameDeletionBtn",{attrs:{pGameSeq:this.gameSeq},on:{"delete-game":e.moveMyTeamPage}})],1)],1):e._e()],1)},o=[],s=t(357),m=t(6390),n=t(8266),i=t(2200),l=t(9485),d=t(9390),c=t(5309),u={components:{GameInfoComp:m["default"],GameJoinTeamsInfoComp:n["default"],GameJoinPlayersInfoComp:i["default"],GameQuartersComp:l["default"],GameConfirmBtn:d["default"],GameDeletionBtn:c["default"]},data(){const e=this.$route.query;return{gameSeq:e.gameSeq,gameRecordState:e.gameRecordState,teamSeq:e.teamSeq,teamName:e.teamName}},methods:{isShowGameManageBtn(){const e=s.lR.CONFIRMATION==this.gameRecordState;return!e},moveMyTeamPage(){this.$router.push({name:"MyTeamPage",params:{teamSeq:this.teamSeq,teamName:this.teamName}})}}},h=u,p=t(1001),f=t(3453),g=t.n(f),y=t(2102),T=t(9846),v=t(2877),C=(0,p.Z)(h,r,o,!1,null,"1248a9f0",null),G=C.exports;g()(C,{VCol:y.Z,VContainer:T.Z,VRow:v.Z})},9390:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-btn",{attrs:{color:"primary"},on:{click:e.confirmGame}},[e._v("게임확정")])],1)],1)],1)},o=[],s=t(5855),m={props:{pGameSeq:Number},data(){return{gameSeq:this.pGameSeq,eventEmitName:"confirm-game"}},methods:{async confirmGame(){if(!confirm("게임을 확정하시겠습니까? 게임확정후에는 게임기록을 수정할 수 없습니다."))return;const e={gameSeq:this.gameSeq};await s.Z.confirmGame(e),this.$emit(this.eventEmitName)}}},n=m,i=t(1001),l=t(3453),d=t.n(l),c=t(680),u=t(2102),h=t(9846),p=t(2877),f=(0,i.Z)(n,r,o,!1,null,"d394a03e",null),g=f.exports;d()(f,{VBtn:c.Z,VCol:u.Z,VContainer:h.Z,VRow:p.Z})},3087:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[e.hasQuarterRecords(this.pTeamsQuarterRecords)?t("div",{on:{click:function(a){return e.moveQuarterRecordInputBoardPage()}}},[t("GameQuarterInfoFrame",{attrs:{pQuarterCodeName:this.pTeamsQuarterRecords.quarterCodeName,pQuarterTime:this.pTeamsQuarterRecords.quarterTime,pHomeTeamRecords:this.pTeamsQuarterRecords.homeTeamRecords,pAwayTeamRecords:this.pTeamsQuarterRecords.awayTeamRecords}})],1):t("div",[t("v-card",[t("div",{staticClass:"text-center"},[t("QuarterCreateBtn",{attrs:{pBtnName:"쿼터 입력"},on:{"do-save":e.createGameQuarterBasicInfo}})],1)])],1)])},o=[],s=t(357),m=t(8510),n=t(5855),i=t(4206),l=t(1526),d={components:{GameQuarterInfoFrame:i["default"],QuarterCreateBtn:l["default"]},props:{pQuarterCode:String,pGameRecordStateCode:String,pTeamsQuarterRecords:Object},data(){const e=this.$route.query;return{gameSeq:e.gameSeq}},methods:{hasQuarterRecords(e){return!m.Z.isNull(e)},moveQuarterRecordInputBoardPage(){switch(this.pGameRecordStateCode){case s.lR.JOIN_TEAM_CONFIRMATION:this.$router.push({name:"QuarterRecordInputBoardPage",query:{gameSeq:this.gameSeq,quarterCode:this.pQuarterCode}});break;case s.lR.CONFIRMATION:this.$router.push({name:"QuarterRecordDetailPage",query:{gameSeq:this.gameSeq,quarterCode:this.pQuarterCode}})}},async createGameQuarterBasicInfo(){const e={gameSeq:this.gameSeq,quarterCode:this.pQuarterCode};await n.Z.createGameQuarterBasicInfo(e),this.moveQuarterRecordInputBoardPage()}}},c=d,u=t(1001),h=t(3453),p=t.n(h),f=t(2371),g=t(9846),y=(0,u.Z)(c,r,o,!1,null,"5155876c",null),T=y.exports;p()(y,{VCard:f.Z,VContainer:g.Z})},6071:function(e,a,t){t.r(a),t.d(a,{default:function(){return P}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on,o=a.attrs;return[t("div",e._g(e._b({staticClass:"text-right"},"div",o,!1),r),[t("v-container",[t("GameJoinPlayerManageBtn",{attrs:{pBtnName:"참가선수관리"}})],1)],1)]}}]),model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",[e._v(" "+e._s(e.pModalTitlePrefix)+" 참가선수관리")]),t("div",{staticClass:"text-right"},[t("GameJoinPlayerSaveBtn",{attrs:{pBtnName:"등록"},on:{"do-save":e.registerPlayers}})],1),t("v-container",[t("div",[e._v("참가선수 목록")]),e.isGetGameJoinPlayersLoadOk?t("PlayerDataTable",{attrs:{pPlayers:e.gameJoinPlayers,pRowBtnName:"삭제"},on:{"get-row-player-info":e.deleteGameJoinPlayer}}):e._e()],1),t("GameJoinPlayerSelectionComp",{on:{"add-game-join-player":e.addGameJoinPlayer}})],1)],1)},o=[],s=t(5855),m=t(357),n=t(3596),i=t(1526),l=t(1467),d=t(6772),c=t(7917),u=t(8626),h={mounted(){this.getGameJoinPlayers()},components:{GameJoinPlayerSaveBtn:i["default"],GameJoinPlayerManageBtn:l["default"],PlayerDataTable:d["default"],GameJoinPlayerSelectionComp:c["default"]},props:{pModalTitlePrefix:String,pGameJoinTeamInfo:Object,pHomeAwayCode:String},data(){const e=this.$route.query;return{gameSeq:e.gameSeq,dialog:!1,isGetGameJoinPlayersLoadOk:!1,gameJoinPlayers:[]}},methods:{async registerPlayers(){const e={gameSeq:this.gameSeq,homeAwayCode:this.pHomeAwayCode},a={gameJoinPlayers:this.gameJoinPlayers};await s.Z.registerGameJoinPlayers(e,a),this.dialog=!1,this.$emit("register-complete",{homeAwayCode:this.pHomeAwayCode})},async getGameJoinPlayers(){const e={gameSeq:this.gameSeq,homeAwayCode:this.pHomeAwayCode},a=await s.Z.getGameJoinPlayers(e);switch(this.isGetGameJoinPlayersLoadOk=!0,this.pHomeAwayCode){case m.Xh.HOME_TEAM:this.gameJoinPlayers=a.data.homeTeam.players;break;case m.Xh.AWAY_TEAM:this.gameJoinPlayers=a.data.awayTeam.players;break}},deleteGameJoinPlayer(e){this.isUnauthGuest(e.playerTypeCode)?this.gameJoinPlayers=n.Z.deleteItemById(this.gameJoinPlayers,e,"email"):this.gameJoinPlayers=n.Z.deleteItemById(this.gameJoinPlayers,e,"userSeq")},addGameJoinPlayer(e){this.checkDuplicate(e)||this.validateDataFormat(e)&&this.gameJoinPlayers.unshift(e)},checkDuplicate(e){if(this.isUnauthGuest(e.playerTypeCode)){if(n.Z.hasItem(this.gameJoinPlayers,e,"email"))return alert("선수 등록시 이메일이 중복되면 안됩니다."),!0}else if(n.Z.hasItem(this.gameJoinPlayers,e,"userSeq"))return alert("이미 등록되어 있는 선수입니다."),!0;return!!n.Z.hasItem(this.gameJoinPlayers,e,"backNumber")&&(alert("등번호가 중복됩니다. 등번호를 수정해주세요."),!0)},isUnauthGuest(e){return u.a.UNAUTH_GUEST.code==e},validateDataFormat(e){const a=e.backNumber;return!(a>=1e3)||(alert("선수의 등번호는 3자리까지만 입력가능합니다."),!1)}}},p=h,f=t(1001),g=t(3453),y=t.n(g),T=t(2371),v=t(7118),C=t(9846),G=t(7336),S=(0,f.Z)(p,r,o,!1,null,"eda37716",null),P=S.exports;y()(S,{VCard:T.Z,VCardTitle:v.EB,VContainer:C.Z,VDialog:G.Z})}}]);
//# sourceMappingURL=1616.07291d23.js.map