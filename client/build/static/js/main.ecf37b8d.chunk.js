(this.webpackJsonplocalhero=this.webpackJsonplocalhero||[]).push([[0],{49:function(e,t,n){e.exports=n(78)},54:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(43),i=n.n(o),c=(n(54),n(28)),s=n(19),l=n.n(s),u=n(23),d=n(5),p=n(6),f=n(13),m=n(8),h=n(7),g=n(4),E=n.n(g),x=n(25),v=n(18),b={baseUrl:"https://api-dot-localhero.ew.r.appspot.com",production:!0},y=r.a.createContext(),O=y.Provider,j=y.Consumer,w=function(e){return function(t){return r.a.createElement(j,null,(function(n){return r.a.createElement(e,Object.assign({},t,{activeUser:n}))}))}},S=n(1),U=n(2);function k(){var e=Object(S.a)(["\n\n    color: black; \n\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return k=function(){return e},e}var I=Object(U.a)(x.b)(k()),C=function(e){return r.a.createElement(I,e)},D=n(10),z=n(11);function L(){var e=Object(S.a)(["\n    display: flex; \n    flex: 1;\n    justify-content: flex-end;\n    padding: 10px;\n"]);return L=function(){return e},e}function T(){var e=Object(S.a)(["\n    display: flex; \n    flex: 1;\n    justify-content: flex-start;\n    padding: 10px;\n    font-size: 12px;\n"]);return T=function(){return e},e}function A(){var e=Object(S.a)(["\n    display: flex; \n    flex: 3;\n    justify-content: center;\n    padding: 10px;\n"]);return A=function(){return e},e}function R(){var e=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 800;\n    height: 60px;\n    background: #31D285;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n"]);return R=function(){return e},e}var N=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).renderLeftButton=function(e,t){return"back"===e?r.a.createElement(C,{to:t},r.a.createElement(D.a,{icon:z.b,style:{fontSize:"24px"}})):null},e.renderRightButton=function(e,t){return"profile"===e?r.a.createElement(C,{to:t},r.a.createElement(D.a,{icon:z.j,style:{fontSize:"24px"}})):null},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(F,null,this.renderLeftButton(this.props.leftButtonType,this.props.leftButtonLink)),r.a.createElement(B,null,r.a.createElement(C,{to:"/home",style:{color:"black"}},r.a.createElement(D.a,{icon:z.g,style:{fontSize:"32px"}}))),r.a.createElement(M,null,this.renderRightButton(this.props.rightButtonType,this.props.rightButtonLink)))}}]),n}(a.Component),P=U.a.div(R()),B=U.a.div(A()),F=U.a.div(T()),M=U.a.div(L()),H=N,W=n(20);function V(){var e=Object(S.a)(["\n    margin: auto;\n    display: flex;\n\n    justify-content: center;\n    align-items: center;\n    font-size: 1em;\n    font-family: 'Arial', Helvetica, sans-serif;\n\n    height: ",";\n    width: ",";\n    margin-top: ",";\n    margin-bottom: ",";\n\n    background: #31D285;\n    box-shadow: 1px;\n    border-radius: 4px;\n\n\n    &:hover {\n      cursor: pointer;\n\n      text-shadow: 0 0 2em rgba(250,250,250,1);\n      color:#FFFFFF;\n      border-color:#FFFFFF;\n    }\n"]);return V=function(){return e},e}var G=U.a.button(V(),(function(e){return e.height||"42px"}),(function(e){return e.width||"18em"}),(function(e){return e.marginTop||"30px"}),(function(e){return e.marginBottom||"30px"})),J=function(e){return r.a.createElement(G,e,e.description)};function q(){var e=Object(S.a)(["\n    display: flex; \n    justify-content: center; \n    align-items: center; \n    font-size: 14px;\n    color: red;\n"]);return q=function(){return e},e}function Y(){var e=Object(S.a)(["\n    display: flex; \n    justify-content: center; \n    align-items: center; \n    font-size: 14px;\n    color: #31D285;\n"]);return Y=function(){return e},e}var _=U.a.div(Y()),K=U.a.div(q()),Z=function(e){switch(e.success){case!0:return r.a.createElement(_,null,e.successResponse);case!1:return r.a.createElement(K,null,e.failResponse);default:return null}};function Q(){var e=Object(S.a)(["\n    display: flex;\n    justify-content: center;\n    font-size: 8px;\n    padding-top: 4px;\n"]);return Q=function(){return e},e}function $(){var e=Object(S.a)(["\n    display: flex;\n    flex: 1;\n    width: 20%;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    flex-direction: end;\n    font-weight: 700;\n    font-size: 10px;\n    padding-top: 4px;\n"]);return $=function(){return e},e}function X(){var e=Object(S.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return X=function(){return e},e}function ee(){var e=Object(S.a)(["\n    font-weight: 500;\n    font-size: 10px;\n    padding: 4px;\n"]);return ee=function(){return e},e}function te(){var e=Object(S.a)(["\n    font-weight: 700;\n    font-size: 12px;\n    padding: 4px;\n"]);return te=function(){return e},e}function ne(){var e=Object(S.a)(["\n    display: flex;\n    flex: 3;\n    flex-direction: column;\n    justify-content: start;\n    padding-left: 8px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(S.a)(["\n    font-weight: 800;\n    padding: 4px;\n"]);return ae=function(){return e},e}function re(){var e=Object(S.a)(["\n    padding: 20px;\n    font-size: 10px;\n"]);return re=function(){return e},e}function oe(){var e=Object(S.a)(["\n   display: flex;\n   flex-direction: column;\n   padding: 12px;\n   margin: 6px;\n"]);return oe=function(){return e},e}function ie(){var e=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return ie=function(){return e},e}function ce(){var e=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 12px;\n    margin: 6px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n"]);return ce=function(){return e},e}var se=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).toggleView=function(){a.setState({fullView:!a.state.fullView})},a.handleMarkAsDone=function(){console.log("handleMarkAsDone"),E.a.post(b.baseUrl+"/updateErrand",{errandID:a.state.errand._id,newErrandData:{status:"done",helper:a.state.errand.helper?a.state.errand.helper:"unknown"}}).then((function(e){console.log("Errand marked as done successfully!",e)})).catch((function(e){console.log("EventItem, handleMarkAsDone: Got error while updating errand",e)}))},a.handleDeleteErrand=function(){console.log("handleDeleteErrand"),E.a.post(b.baseUrl+"/deleteErrand",{errandID:a.state.errand._id}).then((function(e){console.log("Errand deleted successfully",e)})).catch((function(e){console.log("EventItem, handleDeleteErrand: Got error while deleting errand",e)}))},a.renderResponse=function(){return r.a.createElement(Z,{success:a.state.success,successResponse:"Thank you for helping out!",failResponse:"Something went wrong, try again."})},a.renderTypeIcon=function(){var e={display:"flex",justifyContent:"center",padding:"4px",fontSize:"18px",color:"#31D285"};switch(a.state.errand.type){case"carrying":return r.a.createElement(D.a,{icon:z.f,style:e});case"shopping":return r.a.createElement(D.a,{icon:z.h,style:e});case"repair":return r.a.createElement(D.a,{icon:z.i,style:e});case"socialising":return r.a.createElement(D.a,{icon:z.k,style:e});default:return r.a.createElement(D.a,{icon:z.d,style:e})}},a.renderStatusMarker=function(){switch(a.state.errand.status){case"waiting":return r.a.createElement("div",{style:{color:"red"}},"WAITING FOR HELP");case"inProgress":return r.a.createElement("div",{style:{color:"#31D285"}},"HELP UNDER WAY!");case"done":return r.a.createElement("div",null,"DONE");default:return r.a.createElement("div",null,"STATUS UNKOWN")}},a.renderActionButton=function(e){return a.props.disableAction?null:a.state.errand.requester===e?r.a.createElement("div",null,"done"!==a.state.errand.status?r.a.createElement(J,{onClick:a.handleMarkAsDone,description:"MARK AS DONE"}):null,r.a.createElement(J,{onClick:a.handleDeleteErrand,description:"DELETE ERRAND"})):"waiting"===a.state.errand.status?r.a.createElement(C,{to:{pathname:"/help-notice",state:{errand:a.state.errand}}},r.a.createElement(J,{description:"I WANT TO HELP"})):null},a.renderExpandedView=function(){return a.state.fullView?r.a.createElement(de,null,r.a.createElement(pe,{onClick:a.toggleView},r.a.createElement(fe,null,"Requested by"),r.a.createElement(ge,null,a.state.errand.requester),"waiting"!==a.state.errand.status?r.a.createElement("div",null,r.a.createElement(fe,null,"Helper"),r.a.createElement(ge,null,a.state.errand.helper)):null,r.a.createElement(fe,null,"Adress"),r.a.createElement(ge,null,a.state.errand.adress),r.a.createElement(fe,null,"Phone number"),r.a.createElement(ge,null,a.state.errand.mobile),r.a.createElement(fe,null,"E-mail address"),r.a.createElement(ge,null,a.state.errand.email)),r.a.createElement(j,null,(function(e){return a.renderActionButton(e.username)})),a.renderResponse()):null},a.state={fullView:!1,errand:{},success:null},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({fullView:this.props.fullView,errand:this.props.errand})}},{key:"componentWillReceiveProps",value:function(e){console.log("--------- EVENT ITEM WILL RECEIVE PROPS ----------- "),this.setState({errand:e.errand})}},{key:"render",value:function(){return r.a.createElement(le,null,r.a.createElement(ue,{onClick:this.toggleView},r.a.createElement(Ee,null,this.renderTypeIcon(),r.a.createElement(ve,null,this.state.errand.createdAt)),r.a.createElement(me,null,r.a.createElement(he,null,this.state.errand.title),r.a.createElement(ge,null,this.state.errand.description)),r.a.createElement(xe,null,this.renderStatusMarker())),this.renderExpandedView())}}]),n}(a.Component),le=U.a.div(ce()),ue=U.a.div(ie()),de=U.a.div(oe()),pe=U.a.div(re()),fe=U.a.div(ae()),me=U.a.div(ne()),he=U.a.div(te()),ge=U.a.div(ee()),Ee=U.a.div(X()),xe=U.a.div($()),ve=U.a.div(Q()),be=se;var ye=function(e){return e.errands.map((function(e,t){return r.a.createElement(be,{key:t,fullView:!1,errand:e})}))};function Oe(){var e=Object(S.a)(["\n  display: flex; \n  justify-content: center; \n  padding: 30px; \n  font-size: 14px; \n  font-style: italic;\n"]);return Oe=function(){return e},e}function je(){var e=Object(S.a)(["\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: ","; \n  opacity: ","\n"]);return je=function(){return e},e}function we(){var e=Object(S.a)(["\n  display: flex; \n  justify-content: space-between;\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n"]);return we=function(){return e},e}var Se=U.a.div(we()),Ue=U.a.button(je(),(function(e){return e.active?"700":"500"}),(function(e){return e.active?"1":"0.5"})),ke=U.a.div(Oe()),Ie=function(e){var t=Object(a.useState)("all"),n=Object(W.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(Se,null,r.a.createElement(Ue,{active:"all"===o,onClick:function(){i("all")}},"All"),r.a.createElement(Ue,{active:"waiting"===o,onClick:function(){i("waiting")}},"Waiting"),r.a.createElement(Ue,{active:"inProgress"===o,onClick:function(){i("inProgress")}},"In progress"),r.a.createElement(Ue,{active:"done"===o,onClick:function(){i("done")}},"Done")),0===e.errands.length?r.a.createElement(ke,null,e.emptyStateMessage):r.a.createElement(ye,{errands:"all"===o?e.errands:e.errands.filter((function(e){return e.status===o}))}))};function Ce(){var e=Object(S.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: space-around;\n    text-align: center;\n    align-items: center;\n    margin: 6px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n"]);return Ce=function(){return e},e}function De(){var e=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return De=function(){return e},e}function ze(){var e=Object(S.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-top: 8px;\n"]);return ze=function(){return e},e}function Le(){var e=Object(S.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n"]);return Le=function(){return e},e}var Te=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(Ae,null,r.a.createElement(C,{to:"zipcode"},r.a.createElement(Re,null,r.a.createElement(D.a,{icon:z.e,style:{color:"#31D285",fontSize:"12px",padding:"4px"}}),r.a.createElement("div",{style:{fontSize:"14px",padding:"4px"}},this.props.areaID))),r.a.createElement(Ne,null,r.a.createElement(Pe,null,r.a.createElement("p",null,"ACTIVE ERRANDS IN YOUR LOCAL AREA"),r.a.createElement("p",{style:{fontWeight:"700"}},this.props.activeErrands)),r.a.createElement(Pe,null,r.a.createElement("p",null,"ACTIVE USERS IN YOUR LOCAL AREA"),r.a.createElement("p",{style:{fontWeight:"700"}},this.props.activeUsers))))}}]),n}(a.Component),Ae=U.a.div(Le()),Re=U.a.div(ze()),Ne=U.a.div(De()),Pe=U.a.div(Ce()),Be=Te,Fe=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).fetchErrands=function(){console.log("fetchErrands"),E.a.post(b.baseUrl+"/getErrandsArea",{areaID:a.state.areaID}).then((function(e){console.log("Errands fetched successfully!",e),a.setState({fetchErrandsSuccess:!0,errands:e.data.errands})})).catch((function(e){console.log("Got error while fetching errands",e),a.setState({fetchErrandsSuccess:!1})})),a.fetchErrandsTimeout=setTimeout(a.fetchErrands,2e3)},a.fetchUsers=function(){console.log("fetchUsers"),E.a.post(b.baseUrl+"/getUsersArea",{areaID:a.state.areaID}).then((function(e){console.log("Users fetched successfully!",e),a.setState({fetchUsersSuccess:!0,users:e.data.users})})).catch((function(e){console.log("Got error while fetching users",e),a.setState({fetchUsersSuccess:!1})})),a.fetchUsersTimeout=setTimeout(a.fetchUsers,2e3)},a.state={areaID:a.props.activeUser.areaID,users:[],errands:[],fetchErrandsSuccess:null,fetchUsersSuccess:null},a.fetchErrands=a.fetchErrands.bind(Object(f.a)(a)),a.fetchUsers=a.fetchUsers.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("---------- HOME.JS DID MOUNT ----------------"),this.fetchErrands(),this.fetchUsers()}},{key:"componentWillUnmount",value:function(){console.log("---------- HOME.JS WILL UNMOUNT ----------------"),clearTimeout(this.fetchErrandsTimeout),clearTimeout(this.fetchUsersTimeout)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{rightButtonType:"profile",rightButtonLink:"/profile-page"}),r.a.createElement(Be,{activeUsers:this.state.users.length,activeErrands:this.state.errands.filter((function(e){return"done"!==e.status})).length,areaID:this.state.areaID}),r.a.createElement(C,{to:"/help-request"},r.a.createElement(J,{description:"ASK FOR HELP"})),r.a.createElement(Ie,{errands:this.state.errands,emptyStateMessage:"No errands in this area"}))}}]),n}(a.Component),Me=n(15);function He(){var e=Object(S.a)(["\n    font-size: ",";\n    text-align: center;\n    text-transform: uppercase;\n    padding-top: ",";\n    padding-bottom: 10px;\n"]);return He=function(){return e},e}var We=U.a.div(He(),(function(e){return e.fontSize||"18px"}),(function(e){return e.paddingTop||"20px"})),Ve=function(e){return r.a.createElement(We,{paddingTop:e.paddingTop,fontSize:e.fontSize},e.text)};function Ge(){var e=Object(S.a)(["\n    margin: auto;\n    display: flex;\n\n    font-family: 'Helvetica';\n    font-size: 14px;\n\n    border:  1px solid #31D285;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);\n\n    height: ",";\n    width: ",";\n"]);return Ge=function(){return e},e}function Je(){var e=Object(S.a)(["\n    margin: auto;\n    display: flex;\n\n    font-family: 'Helvetica';\n    font-size: 14px;\n\n    border:  1px solid #31D285;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);\n\n    height: ",";\n    width: ",";\n    \n    resize: ",";\n\n"]);return Je=function(){return e},e}var qe=U.a.textarea(Je(),(function(e){return e.height||"24em"}),(function(e){return e.width||"18em"}),(function(e){return e.resize||"none"})),Ye=U.a.input(Ge(),(function(e){return e.height||"24em"}),(function(e){return e.width||"18em"})),_e=function(e){switch(e.type){case"number":return r.a.createElement(Ye,Object.assign({type:"number",autocomplete:"on",height:e.height,width:e.width},e,{min:"0"}));case"password":return r.a.createElement(Ye,Object.assign({type:"password",autocomplete:"on",height:e.height,width:e.width},e));default:return r.a.createElement(qe,Object.assign({type:"text",autocomplete:"on",height:e.height,width:e.width},e))}};function Ke(){var e=Object(S.a)(["\n    margin: auto;\n    display: flex;\n\n    font-family: 'Helvetica';\n\n    font-size: 14px;\n\n    border:  1px solid #31D285;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);\n\n    height: 4em;\n    width: 18em;\n"]);return Ke=function(){return e},e}var Ze=U.a.select(Ke()),Qe=function(e){return r.a.createElement(Ze,Object.assign({onChange:e.onChange},e,{value:e.value}),r.a.createElement("option",{value:"DEFAULT",disabled:!0},"Choose here"),e.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.text)})))};function $e(){var e=Object(S.a)(["\n    padding: 5px;\n"]);return $e=function(){return e},e}var Xe=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(Me.a)({},e.target.name,e.target.value))},a.handlePublish=function(){console.log("handlePublish"),E.a.post(b.baseUrl+"/insertErrand",{title:a.state.title,description:a.state.description,requester:a.state.requester,type:a.state.type,adress:a.state.adress,number:a.state.number,email:a.state.email,areaID:a.state.areaID}).then((function(e){console.log("Data submitted successfully!",e),a.setState({success:!0}),a.props.history.push("/home")})).catch((function(e){console.log("Got error while posting data",e),a.setState({success:!1})}))},a.renderResponse=function(){return r.a.createElement(Z,{success:a.state.success,successResponse:"Your help request was published.",failResponse:"Something went wrong, try again."})},a.state={title:"",description:"",requester:a.props.activeUser.username,type:"DEFAULT",number:a.props.activeUser.mobile,email:a.props.activeUser.email,adress:a.props.activeUser.address,areaID:a.props.activeUser.areaID,success:null},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(Ve,{fontSize:"14px",text:"Name your help request"}),r.a.createElement(et,null,r.a.createElement(_e,{type:"text",height:"3em",onChange:this.handleChange,value:this.state.title,name:"title"})),r.a.createElement(Ve,{fontSize:"14px",text:"What do you need help with?"}),r.a.createElement(et,null,r.a.createElement(Qe,{options:[{text:"Carrying",value:"carrying"},{text:"Shopping",value:"shopping"},{text:"Repair work",value:"repair"},{text:"Social stimuli",value:"socialising"}],onChange:this.handleChange,value:this.state.type,name:"type"})),r.a.createElement(Ve,{fontSize:"14px",text:"Describe more in detail please"}),r.a.createElement(et,null,r.a.createElement(_e,{type:"text",height:"8em",onChange:this.handleChange,value:this.state.description,name:"description"})),r.a.createElement(Ve,{fontSize:"14px",text:"Phone Number"}),r.a.createElement(_e,{type:"text",height:"32px",width:"240px",onChange:this.handleChange,value:this.state.number,name:"number"}),r.a.createElement(Ve,{fontSize:"14px",text:"E-mail"}),r.a.createElement(_e,{type:"text",height:"32px",width:"240px",onChange:this.handleChange,value:this.state.email,name:"email"}),r.a.createElement(J,{onClick:this.handlePublish,description:"PUBLISH HELP REQUEST"}),this.renderResponse())}}]),n}(a.Component),et=U.a.div($e()),tt=Xe,nt=function(e){var t=Object(a.useState)(null),n=Object(W.a)(t,2),o=n[0],i=n[1],c=e.location.state.errand;return r.a.createElement("div",null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(Ve,{text:"ERRAND INFORMATION",paddingTop:"30px",fontSize:"16px"}),r.a.createElement(be,{fullView:!0,errand:c,disableAction:!0}),r.a.createElement(J,{description:"GIVE NOTICE",onClick:function(){console.log("handleHelpNotice"),console.log("ErrandID: "+c._id),E.a.post(b.baseUrl+"/updateErrand",{errandID:c._id,newErrandData:{status:"inProgress",helper:e.activeUser.username}}).then((function(t){console.log("Help notice submitted successfully!",t),console.log("response.data: "+JSON.stringify(t.data)),i(!0),e.history.push("/home")})).catch((function(e){console.log("Got error while handling help notice",e),i(!1)}))}}),r.a.createElement(Z,{success:o,successResponse:"Thank you for helping out!",failResponse:"Something went wrong, try again."}))};function at(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 24px;\n  font-weight: 800;\n  align-items: center;\n  justify-content: center;\n  padding-top: 80px;\n  padding-bottom: 10px;\n"]);return at=function(){return e},e}function rt(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return rt=function(){return e},e}function ot(){var e=Object(S.a)(["\n  border: #4caf50;\n  color: red;\n  font-size: 20px;\n  border-radius: 100%;\n  margin: auto;\n  padding-top: 0.8em;\n"]);return ot=function(){return e},e}var it=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(Me.a)({},e.target.name,e.target.value))},a.checkLogin=function(e){e.preventDefault(),E.a.post(b.baseUrl+"/loginUser",{username:a.state.username,password:a.state.password}).then((function(e){if(e.data.login){var t=e.data.user;window.localStorage.setItem("loggedInUser",JSON.stringify(t)),a.props.activeUser.onSetLoggedInUser(t),a.props.history.push("/home")}else a.setState({text:"Wrong Username or Password"})}))},a.state={username:"",password:"",text:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(st,null,r.a.createElement(lt,null,r.a.createElement(D.a,{icon:z.g,style:{fontSize:"72px",color:"#31D285"}}),r.a.createElement("p",null,"Welcome to LocalHero!")),r.a.createElement(Ve,{text:"USERNAME"}),r.a.createElement(_e,{name:"username",height:"32px",width:"240px",onChange:this.saveInput,autocomplete:"username"}),r.a.createElement(Ve,{text:"PASSWORD"}),r.a.createElement(_e,{name:"password",type:"password",height:"32px",width:"240px",onChange:this.saveInput,autocomplete:"new-password"}),r.a.createElement(J,{onClick:this.checkLogin,description:"LOGIN",marginTop:"40px",marginBottom:"10px",height:"32px",width:"240px"}),r.a.createElement(C,{to:"profile-creation"},r.a.createElement(J,{description:"SIGN UP",marginTop:"10px",marginBottom:"10px",height:"32px",width:"240px"})),r.a.createElement(ct,null,this.state.text))}}]),n}(a.Component),ct=U.a.div(ot()),st=U.a.div(rt()),lt=U.a.div(at()),ut=it;function dt(){var e=Object(S.a)(["\n  margin: 2em;\n  width: 7em;\n  height: 7em;\n"]);return dt=function(){return e},e}function pt(){var e=Object(S.a)(["\n  display: flex; \n  justify-content: center;\n  font-size: 18px;\n  padding-bottom: 20px;\n"]);return pt=function(){return e},e}function ft(){var e=Object(S.a)(["\n\n"]);return ft=function(){return e},e}function mt(){var e=Object(S.a)(["\n  font-weight: 700;\n  text-transform: uppercase;\n  padding-right: 10px;\n"]);return mt=function(){return e},e}function ht(){var e=Object(S.a)(["\n  display: flex; \n  flex-direction: row;\n  margin: 0.5em;\n  font-size: 18px;\n"]);return ht=function(){return e},e}function gt(){var e=Object(S.a)(["\n  display: flex; \n  justify-content: center; \n  padding-left: 10px;\n  flex-direction: column;\n"]);return gt=function(){return e},e}var Et=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getUserErrands=function(){E.a.post(b.baseUrl+"/getUserErrand",{username:a.state.user.username}).then((function(e){a.setState({fetchErrandsSuccess:!0,errands:e.data.errands})})).catch((function(e){console.log("You have no errands!",e),a.setState({fetchErrandsSuccess:!1})})),a.getUserErrandsTimeout=setTimeout(a.getUserErrands,2e3)},a.state={user:a.props.activeUser,errands:[],fetchErrandsSuccess:null,profilePic:"https://image.flaticon.com/icons/png/512/37/37943.png"},a.getUserErrands=a.getUserErrands.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("---------- PROFILEPAGE.JS DID MOUNT ----------------"),this.getUserErrands()}},{key:"componentWillUnmount",value:function(){console.log("---------- PROFILEPAGE.JS WILL UNMOUNT ----------------"),clearTimeout(this.getUserErrandsTimeout)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(xt,null,r.a.createElement(jt,{src:this.state.profilePic}),r.a.createElement(vt,null,r.a.createElement(bt,null,"Name"),r.a.createElement(yt,null,this.state.user.name)),r.a.createElement(vt,null,r.a.createElement(bt,null,"Area"),r.a.createElement(yt,null,this.state.user.areaID)),r.a.createElement(vt,null,r.a.createElement(bt,null,"E-mail"),r.a.createElement(yt,null,this.state.user.email))),r.a.createElement(C,{to:"/"},r.a.createElement(J,{onClick:function(){return localStorage.clear()},description:"LOG OUT"})),r.a.createElement(Ot,null,"MY ERRANDS"),r.a.createElement(Ie,{errands:this.state.errands,emptyStateMessage:"You currently have no errands"}))}}]),n}(a.Component),xt=U.a.div(gt()),vt=U.a.div(ht()),bt=U.a.div(mt()),yt=U.a.div(ft()),Ot=U.a.div(pt()),jt=U.a.img(dt()),wt=Et;function St(){var e=Object(S.a)(["\n    background-color: white;\n    border: #4CAF50;\n    color: #4CAF50;\n    padding: 40px;\n    font-size: 48px;\n    border-radius: 100%;\n\n    &:hover {\n      cursor: pointer;\n    }\n"]);return St=function(){return e},e}var Ut=U.a.button(St()),kt=function(e){return r.a.createElement(Ut,Object.assign({type:"button"},e),r.a.createElement(D.a,{icon:z.a}))};function It(){var e=Object(S.a)(["\n    display: flex; \n    flex-direction: column; \n    justify-content: center; \n    align-items: center;\n"]);return It=function(){return e},e}var Ct=U.a.form(It()),Dt=function(e){return r.a.createElement(Ct,null,e.children)};function zt(){var e=Object(S.a)(["\n    border: #4CAF50;\n    color: red;\n    margin-top: 1em;\n    font-size: 20px;\n    border-radius: 100%;\n"]);return zt=function(){return e},e}var Lt=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(Me.a)({},e.target.name,e.target.value))},a.storeUser=function(e){e.preventDefault(),window.sessionStorage.setItem("stateProfileCreation",JSON.stringify(a.state)),a.props.history.push("/residence-info")},a.checkForUniqueUser=function(e){E.a.post(b.baseUrl+"/check-user",{username:a.state.username,email:a.state.email}).then((function(t){var n=t.data.uniqueUser,r=t.data.uniqueEmail;n&&r?a.setState({text:"Username and Email already taken"}):n?a.setState({text:"Username already taken"}):r?a.setState({text:"Email already taken"}):a.storeUser(e)}))},a.state={username:"",password:"",name:"",age:"",email:"",mobile:"",text:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/signup"}),r.a.createElement(Dt,null,r.a.createElement(Ve,{text:"Profile Creation"}),r.a.createElement(Ve,{id:"username",fontSize:"14px",text:"Username"}),r.a.createElement(_e,{height:"24px",name:"username",onChange:this.saveInput,autocomplete:"username"}),r.a.createElement(Ve,{fontSize:"14px",text:"Password"}),r.a.createElement(_e,{type:"password",height:"24px",name:"password",value:this.password,onChange:this.saveInput,autocomplete:"new-password"}),r.a.createElement(Ve,{fontSize:"14px",text:"Full Name"}),r.a.createElement(_e,{height:"24px",name:"name",value:this.name,onChange:this.saveInput}),r.a.createElement(Ve,{fontSize:"14px",text:"Age"}),r.a.createElement(_e,{height:"24px",name:"age",type:"number",value:this.age,onChange:this.saveInput}),r.a.createElement(Ve,{fontSize:"14px",text:"Mobile number"}),r.a.createElement(_e,{height:"24px",name:"mobile",type:"number",value:this.mobile,onChange:this.saveInput}),r.a.createElement(Ve,{fontSize:"14px",text:"E-mail address"}),r.a.createElement(_e,{height:"24px",name:"email",value:this.email,onChange:this.saveInput}),r.a.createElement(Tt,null,this.state.text),r.a.createElement(kt,{onClick:this.checkForUniqueUser})))}}]),n}(a.Component),Tt=U.a.div(zt()),At=Lt,Rt=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(Me.a)({},e.target.name,e.target.value))},a.storeSession=function(e){window.sessionStorage.setItem("stateResidenceInfo",JSON.stringify(a.state)),a.props.history.push("/insert-image")},a.state={address:"",area:"",city:""},a}return Object(p.a)(n,[{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/profile-creation"}),r.a.createElement(Ve,{text:"Residence Info"}),r.a.createElement(Dt,null,r.a.createElement(Ve,{text:"Address",fontSize:"14px"}),r.a.createElement(_e,{height:"24px",name:"address",value:this.address,onChange:this.saveInput}),r.a.createElement(Ve,{text:"Area Code",fontSize:"14px"}),r.a.createElement(_e,{type:"number",pattern:"[0-9]",height:"24px",name:"area",value:this.area,onChange:this.saveInput}),r.a.createElement(Ve,{text:"City",fontSize:"14px"}),r.a.createElement(_e,{height:"24px",name:"city",value:this.city,onChange:this.saveInput}),r.a.createElement(kt,{onClick:this.storeSession})))}}]),n}(a.Component);function Nt(){var e=Object(S.a)(["\n    background-color: white;\n    border: #4CAF50;\n    color: #4CAF50;\n    padding: 40px;\n    font-size: 48px;\n    border-radius: 100%;\n\n    &:hover {\n      cursor: pointer;\n    }\n"]);return Nt=function(){return e},e}var Pt=U.a.button(Nt()),Bt=function(e){return r.a.createElement(Pt,e,r.a.createElement(D.a,{icon:z.c}))};function Ft(){var e=Object(S.a)(["\n    font-size: 14px;\n    border-style: solid;\n    border-width: 3px;\n    border-color: #31D285;\n"]);return Ft=function(){return e},e}function Mt(){var e=Object(S.a)(["\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n"]);return Mt=function(){return e},e}function Ht(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ht=function(){return e},e}var Wt=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(Me.a)({},e.target.name,e.target.value))},a.sendProfiletoBackend=function(e,t){var n=a.state;E.a.post(b.baseUrl+"/insertUser",{username:n.username,password:n.password,email:n.email,name:n.name,age:n.age,address:n.address,description:n.description,virtuePoints:0,areaId:n.area,mobile:n.mobile,city:n.city,image:""}).then((function(e){console.log(e)})),a.props.history.push("/signup")},a.fileSelectHandler=function(e){a.setState({selectedFile:e.target.files[0]})},a.fileUploadHandler=function(){var e=new FormData;e.append("image",a.state.selectedFile,a.state.selectedFile.name),E.a.post("/uploadImage",e,{onUploadProgress:function(e){console.log("Upload Progress"+e.loaded/e.total*100+"%")}}).then((function(e){console.log("Inside response"),console.log(e)})).catch((function(e){console.log(e.response)}))},a.state={username:"",password:"",name:"",age:"",email:"",mobile:"",description:"",address:"",area:"",city:"",image:""},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("stateProfileCreation")),t=e.username,n=e.password,a=e.name,r=e.age,o=e.email,i=e.mobile,c=JSON.parse(sessionStorage.getItem("stateResidenceInfo")),s=c.address,l=c.area,u=c.city;this.setState({username:t,password:n,name:a,age:r,email:o,mobile:i,address:s,area:l,city:u})}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(Vt,null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/residence-info"}),r.a.createElement(Ve,{text:"Please insert a profile picture"}),r.a.createElement(Gt,null,r.a.createElement(Jt,{type:"file",onChange:this.fileSelectHandler})),r.a.createElement(Bt,{onClick:this.sendProfiletoBackend}))}}]),n}(a.Component),Vt=U.a.div(Ht()),Gt=U.a.div(Mt()),Jt=U.a.input(Ft()),qt=Wt,Yt=function(e){var t=Object(a.useState)(""),n=Object(W.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(null),s=Object(W.a)(c,2),d=s[0],p=s[1];function f(){return(f=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.post(b.baseUrl+"/updateUser",{userID:e.activeUser._id,newUserData:{areaID:o}}).then(function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Zip code updated successfully!",n),p(!0),t.next=4,m();case 4:console.log("switching route from zipcode to home"),e.history.push("/home");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("Got error while updating zip code",e),p(!1)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){console.log("updateLoggedInUser"),E.a.post(b.baseUrl+"/getUser",{username:e.activeUser.username}).then((function(t){console.log("User updated successfully!",t),console.log("updateUserContext with: "+JSON.stringify(t.data)),e.activeUser.onSetLoggedInUser(t.data)})).catch((function(e){console.log("Got error while updating logged in user",e)})),console.log("finished updatingUserContext in ZipCode")}return r.a.createElement("div",null,r.a.createElement(H,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(Ve,{text:"Change Location (Zip Code)",paddingTop:"30px",fontSize:"16px"}),r.a.createElement(_e,{height:"32px",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement(J,{description:"Update zip code",onClick:function(){return f.apply(this,arguments)}}),r.a.createElement(Z,{success:d,successResponse:"Sucessfully updated zip code.",failResponse:"Something went wrong, try again."}))},_t=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).setLoggedInUser=function(e){console.log("setLoggedInUser in App.js"),a.setState({userData:e})},a.checkInitialLogin=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checkInitialLogin in App.js"),e.next=3,JSON.parse(window.localStorage.getItem("loggedInUser"));case 3:return t=e.sent,e.next=6,a.setState({fetchLoggedInUser:t});case 6:null!==t?a.updateUserContext():console.log("No user logged in");case 7:case"end":return e.stop()}}),e)}))),a.updateUserContext=function(){E.a.post(b.baseUrl+"/getUser",{username:a.state.fetchLoggedInUser.username}).then((function(e){console.log("User context updated successfully!",e),a.setState({userData:e.data})})).catch((function(e){console.log("Got error while updating user data",e)}))},a.state={fetchLoggedInUser:{},userData:{}},a.updateUserContext=a.updateUserContext.bind(Object(f.a)(a)),a.setLoggedInUser=a.setLoggedInUser.bind(Object(f.a)(a)),a.checkInitialLogin=a.checkInitialLogin.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("---------- APP.JS DID MOUNT --------------"),this.checkInitialLogin()}},{key:"render",value:function(){return r.a.createElement(x.a,{basename:""},r.a.createElement(O,{value:Object(c.a)(Object(c.a)({},this.state.userData),{},{onSetLoggedInUser:this.setLoggedInUser})},r.a.createElement("div",{className:"App",style:{fontFamily:"Helvetica"}},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:w(ut)}),r.a.createElement(v.a,{path:"/signup",component:w(ut)}),r.a.createElement(v.a,{path:"/home",component:w(Fe)}),r.a.createElement(v.a,{path:"/profile-page",component:w(wt)}),r.a.createElement(v.a,{path:"/help-request",component:w(tt)}),r.a.createElement(v.a,{path:"/help-notice",component:w(nt)}),r.a.createElement(v.a,{path:"/profile-creation",component:At}),r.a.createElement(v.a,{path:"/residence-info",component:Rt}),r.a.createElement(v.a,{path:"/insert-image",component:qt}),r.a.createElement(v.a,{path:"/zipcode",component:w(Yt)})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_t,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.ecf37b8d.chunk.js.map