"use strict";(self["webpackChunkbasketballdiary_frontend"]=self["webpackChunkbasketballdiary_frontend"]||[]).push([[8933],{2189:function(e,a,r){var t=r(3435);const s=t.Z.createAxiosInstance("/myTeams");a["Z"]={searchTeams(e){return s.get("",{params:e})},modifyMyTeamsProfile(e,a){return s.post(`/${e}/profile`,a,{headers:{"Content-Type":"multipart/form-data"}})},findMyTeamsProfile(e){return console.log(`findMyTeamsProfile call : /${e}/profile`),s.get(`/${e}/profile`)},searchManagers(e){return console.log(`searchManagers call : /${e}/managers`),s.get(`/${e}/managers`)},searchMembers(e,a){return console.log(`searchMembers call : /${e}/members/pageNo=${a}`),s.get(`/${e}/members`,{params:{pageNo:a}})},searchTeam(e){return s.get(`/${e}/info`)},modifyMyTeam(e,a){return s.post(`/${e}/info`,a)},searchInvitedPlayer(e){return s.get(`/${e.teamSeq}/joinRequestsTo`,{params:{state:e.state}})},inviteTeamMember(e){return s.post(`/${e.teamSeq}/joinRequestTo/${e.userSeq}`)},searchJoinRequestPlayer(e){return s.get(`/${e.teamSeq}/joinRequestsFrom`,{params:{state:e.state}})},approveJoinRequest(e){return s.patch(`/${e.teamSeq}/joinRequestFrom/${e.teamJoinRequestSeq}/approval`)},rejectJoinRequest(e){return s.patch(`/${e.teamSeq}/joinRequestFrom/${e.teamJoinRequestSeq}/rejection`)},appointManager(e){return s.patch(`/${e.teamSeq}/members/${e.teamMemberSeq}/manager`)},dismissManager(e){return s.delete(`/${e.teamSeq}/members/${e.teamMemberSeq}/manager`)},dischargeTeamMember(e){return s.delete(`/${e.teamSeq}/members/${e.teamMemberSeq}`)},searchMyTeamGames(e){return s.get(`/${e.teamSeq}/games`)},searchAllTeamMembers(e){return s.get(`/${e.teamSeq}/allTeamMembers`,{params:{pageNo:e.pageNo,playerName:e.playerName}})}}},8933:function(e,a,r){r.r(a),r.d(a,{default:function(){return q}});var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-btn",{attrs:{color:"black white--text",small:""},on:{click:function(a){return e.appointManager()}}},[e._v(" 임원임명 ")])},s=[],n=r(2189),m={props:{pTeamSeq:Number,pTeamMemberSeq:Number},methods:{async appointManager(){const e={teamSeq:this.pTeamSeq,teamMemberSeq:this.pTeamMemberSeq};try{const a=await n.Z.appointManager(e);"200"==a.status&&alert("관리자로 변경되었습니다.")}catch(a){console.log(a)}}}},o=m,l=r(1001),i=r(3453),u=r.n(i),c=r(680),p=(0,l.Z)(o,t,s,!1,null,"c5f419d6",null),q=p.exports;u()(p,{VBtn:c.Z})}}]);
//# sourceMappingURL=8933.b7c31293.js.map