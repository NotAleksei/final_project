(this.webpackJsonpbarbershop=this.webpackJsonpbarbershop||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={Services:"Services_Services__6WnCR",background:"Services_background__2u4D1",background1:"Services_background1__2vIZf",background2:"Services_background2__1b81C",background3:"Services_background3__3Alpk",firstPhoto:"Services_firstPhoto__CyLTT",secondPhoto:"Services_secondPhoto__1wz2V",thirdPhoto:"Services_thirdPhoto__2BOBF",forthPhoto:"Services_forthPhoto__2_H3u",fifthPhoto:"Services_fifthPhoto__1-9FV"}},,,,function(e,t,a){e.exports={Appointment:"Appointment_Appointment__15J_o",inputInfo:"Appointment_inputInfo__-AhB2",user:"Appointment_user__1YJIu",date:"Appointment_date__1hLp3",button:"Appointment_button__2FKdT"}},function(e,t,a){e.exports={UserEdit:"UserEdit_UserEdit__1MJgv",inputBlock:"UserEdit_inputBlock__3jvPB",button:"UserEdit_button__1gAVb"}},function(e,t,a){e.exports={Auth:"Auth_Auth__35650",AuthForm:"Auth_AuthForm__1a_mO",error:"Auth_error__2kJqg",BtnWrap:"Auth_BtnWrap__21AWh",button:"Auth_button__7idM1"}},,,function(e,t,a){e.exports={LeftNav:"LeftNav_LeftNav__2r7W5",closed:"LeftNav_closed__D6WJN",Leftnav:"LeftNav_Leftnav__3l7EX",active:"LeftNav_active__1OQDj",button:"LeftNav_button__1Ejl4"}},,function(e,t,a){e.exports={AboutPage:"AboutPage_AboutPage__3IUnH",articles:"AboutPage_articles__2c3Sp",principles:"AboutPage_principles__3cL3t",mission:"AboutPage_mission__2rxb1"}},function(e,t,a){e.exports={ContactsPage:"ContactsPage_ContactsPage__3IEqj",articles:"ContactsPage_articles__10XWq",contacts:"ContactsPage_contacts__bnKxi"}},function(e,t,a){e.exports={ServicePage:"ServicePage_ServicePage__1o1cS",leftSide:"ServicePage_leftSide__2dzm_",wrap:"ServicePage_wrap__2wMWt"}},function(e,t,a){e.exports={UserServices:"UserServices_UserServices__3kMiU",servicesList:"UserServices_servicesList__12Mjo",button:"UserServices_button__2TSF-"}},,,,function(e,t,a){e.exports={MenuToggle:"MenuToggle_MenuToggle__1M-HZ",closed:"MenuToggle_closed__2sRFP"}},function(e,t,a){e.exports={HomePage:"HomePage_HomePage__3__mc",logo:"HomePage_logo__3X7F_"}},function(e,t,a){e.exports={SuccessModal:"SuccessModal_SuccessModal__Wq9zn",modal:"SuccessModal_modal__1Upp9"}},function(e,t,a){e.exports={LeftNavUser:"LeftNavUser_LeftNavUser__Bq4__",active:"LeftNavUser_active__1D_LO",UserImg:"LeftNavUser_UserImg__50Rlq"}},,,,function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2oRo2"}},,,function(e,t,a){e.exports={ServiceInfo:"ServiceInfo_ServiceInfo__1iSaX"}},function(e,t,a){e.exports={Select:"Select_Select__1KNmI"}},function(e,t,a){e.exports={button:"UserInfo_button__cbAzk"}},function(e,t,a){e.exports={UserProfile:"UserProfile_UserProfile__eMOSa"}},function(e,t,a){e.exports={UserModal:"UserModal_UserModal__ATgP7"}},function(e,t,a){e.exports={UserPage:"UserPage_UserPage__1Zj7X"}},function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Logo.790e8902.png"},function(e,t,a){e.exports=a.p+"static/media/1.e2661c13.png"},function(e,t,a){e.exports=a.p+"static/media/2.5c481252.png"},function(e,t,a){e.exports=a.p+"static/media/3.b899110c.png"},function(e,t,a){e.exports=a.p+"static/media/4.82a3a213.png"},function(e,t,a){e.exports=a.p+"static/media/5.11a189ea.png"},function(e,t,a){e.exports=a.p+"static/media/default-user.0f8e789e.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),s=(a(48),a(1)),o=a(2),i=a(4),u=a(3),m=a(5),p=a(18),h=a.n(p),g=a(34),v=a.n(g),d=function(e){return l.a.createElement("div",{className:v.a.Backdrop,onClick:e.onclick})},E=a(10),f=function(e){var t=[{to:"/final_project/",label:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f",exact:!0},{to:"/final_project/about",label:"\u041e \u041d\u0410\u0421",exact:!1},{to:"/services",label:"\u0423\u0421\u041b\u0423\u0413\u0418",exact:!1},{to:"/contacts",label:"\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b",exact:!1}],a=[h.a.LeftNav];return e.isOpen||a.push(h.a.closed),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:a.join(" ")},l.a.createElement("ul",null,t.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(E.c,{to:t.to,exact:t.exact,activeClassName:h.a.active,onClick:e.onClose},t.label))})),localStorage.getItem("logIn")?l.a.createElement("li",null,l.a.createElement(E.c,{to:"/user",activeClassName:h.a.active,onClick:e.onClose},"\u041c\u041e\u0419 \u041a\u0410\u0411\u0418\u041d\u0415\u0422")):null),localStorage.getItem("logIn")?l.a.createElement(E.c,{to:"/auth",onClick:function(){localStorage.removeItem("logIn"),e.onClose()},className:h.a.button},"\u0412\u044b\u0439\u0442\u0438"):l.a.createElement(E.c,{to:"/auth",onClick:e.onClose,className:h.a.button},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),e.isOpen?l.a.createElement(d,{onclick:e.onClose}):null)},_=a(27),b=a.n(_),S=function(e){var t=[b.a.MenuToggle,"fas"];return e.isOpen?(t.push("fa-times"),t.push(b.a.closed)):t.push("fa-bars"),l.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},N=(a(54),function(e){return l.a.createElement("p",null,"404: \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 ",e.userName)}),I=(a(55),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={menu:!1},a.toggleMenuHandler=function(){a.setState({menu:!a.state.menu})},a.closeMenu=function(){a.setState({menu:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{isOpen:this.state.menu,onClose:this.closeMenu}),l.a.createElement(S,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),l.a.createElement("main",null,this.props.children))}}]),t}(l.a.Component)),O=a(28),C=a.n(O),j=function(){return l.a.createElement("div",{className:C.a.HomePage},l.a.createElement("img",{className:C.a.logo,src:a(56),alt:""}))},k=a(37),P=a.n(k),y=function(e){return l.a.createElement(E.b,{to:"/service/"+e.serviceId},l.a.createElement("div",{className:P.a.ServiceInfo},l.a.createElement("h2",null,e.serviceName)))},A=a(9),x=a.n(A),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={HairCut:["\u0421\u0422\u0420\u0418\u0416\u041a\u0410","HairCut"],Shave:["\u0411\u0420\u0418\u0422\u042c\u0415","Shave"],CutAndShave:["\u0421\u0422\u0420\u0418\u0416\u041a\u0410 \u0418 \u0411\u0420\u0418\u0422\u042c\u0415","CutAndShave"],ShapeUp:["\u041c\u041e\u0414\u0415\u041b\u0418\u0420\u041e\u0412\u0410\u041d\u0418\u0415 \u0411\u041e\u0420\u041e\u0414\u042b","ShapeUp"],Style:["\u0421\u0422\u0410\u0419\u041b\u0418\u041d\u0413","style"]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:x.a.Services},l.a.createElement("article",{className:x.a.firstPhoto},l.a.createElement("div",{className:x.a.background},l.a.createElement("img",{src:a(57),alt:""})),l.a.createElement(y,{serviceName:this.state.HairCut[0],serviceId:this.state.HairCut[1]})),l.a.createElement("article",{className:x.a.secondPhoto},l.a.createElement("div",{className:x.a.background1},l.a.createElement("img",{src:a(58),alt:""})),l.a.createElement(y,{serviceName:this.state.Shave[0],serviceId:this.state.Shave[1]})),l.a.createElement("article",{className:x.a.thirdPhoto},l.a.createElement("div",{className:x.a.background2},l.a.createElement("img",{src:a(59),alt:""})),l.a.createElement(y,{serviceName:this.state.CutAndShave[0],serviceId:this.state.CutAndShave[1]})),l.a.createElement("article",{className:x.a.forthPhoto},l.a.createElement("div",{className:x.a.background3},l.a.createElement("img",{src:a(60),alt:""})),l.a.createElement(y,{serviceName:this.state.ShapeUp[0],serviceId:this.state.ShapeUp[1]})),l.a.createElement("article",{className:x.a.fifthPhoto},l.a.createElement("div",{className:x.a.background},l.a.createElement("img",{src:a(61),alt:""})),l.a.createElement(y,{serviceName:this.state.Style[0],serviceId:this.state.Style[1]})))}}]),t}(l.a.Component),H=a(16),M=a(38),w=a.n(M),L=function(e){var t="".concat(e.label,"-").concat(Math.random());return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{className:w.a.Select,id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return l.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))},B=a(13),T=a.n(B),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",phone:"",date:"",time:"9:00"},a.changeHandler=function(e){var t=e.target.name;a.setState(Object(H.a)({},t,e.target.value))},a.selectChangeHandler=function(e){console.log(e.target.value),a.setState({time:e.target.value})},a.saveAppointment=function(e){if(e.preventDefault(),""===a.state.name||""===a.state.phone||""===a.state.date)alert("\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u043b\u044f");else if(localStorage.getItem("logIn")){var t=localStorage.getItem("logIn"),n=JSON.parse(localStorage.getItem(t));n[1].push({name:a.state.name,phone:a.state.phone,date:a.state.date,time:a.state.time,serviceName:a.props.serviceName}),localStorage.setItem(t,JSON.stringify(n)),a.props.showSuccessModal(),a.setState({name:"",phone:"",date:"",time:"9:00"}),setTimeout((function(){a.props.showSuccessModal()}),1e3)}else a.props.showSuccessModal(),a.setState({name:"",phone:"",date:"",time:"9:00"}),setTimeout((function(){a.props.showSuccessModal()}),1e3)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:T.a.Appointment},l.a.createElement("div",{className:T.a.inputInfo},l.a.createElement("div",{className:T.a.user},l.a.createElement("label",null,"\u0418\u043c\u044f:"),l.a.createElement("input",{name:"name",value:this.state.name,onChange:this.changeHandler})),l.a.createElement("div",{className:T.a.user},l.a.createElement("label",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"),l.a.createElement("input",{name:"phone",value:this.state.phone,onChange:this.changeHandler})),l.a.createElement("div",{className:T.a.date},l.a.createElement("label",null,"\u0414\u0430\u0442\u0430:"),l.a.createElement("input",{name:"date",value:this.state.date,onChange:this.changeHandler,type:"date"})),l.a.createElement("div",{className:T.a.date},l.a.createElement("label",null,"\u0412\u0440\u0435\u043c\u044f:"),l.a.createElement(L,{value:this.state.time,onChange:this.selectChangeHandler,options:[{text:"9:00",value:"9:00"},{text:"10:00",value:"10:00"},{text:"11:00",value:"11:00"},{text:"12:00",value:"12:00"},{text:"13:00",value:"13:00"},{text:"14:00",value:"14:00"},{text:"15:00",value:"15:00"},{text:"16:00",value:"16:00"},{text:"17:00",value:"17:00"},{text:"18:00",value:"18:00"}]}))),l.a.createElement("a",{className:T.a.button,onClick:this.saveAppointment},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"))}}]),t}(l.a.Component),F=a(22),V=a.n(F),W=a(29),q=a.n(W),D=function(e){return l.a.createElement("div",{className:q.a.SuccessModal},l.a.createElement("div",{className:q.a.modal},l.a.createElement("h2",null,"\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u0430!")))},X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={HairCut:["\u0421\u0422\u0420\u0418\u0416\u041a\u0410","HairCut","1200\u0440","\u041f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u0431\u0448\u0438\u0440\u043d\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0431\u0430\u0440\u0431\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u0441\u0442\u0440\u0438\u0436\u043a\u0443 \u043b\u044e\u0431\u043e\u0433\u043e \u0432\u0438\u0434\u0430: Undercut, French Crop, \u0438 \u0442.\u043f."],Shave:["\u0411\u0420\u0418\u0422\u042c\u0415","Shave","1000\u0440","\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0440\u0438\u0442\u0443\u0430\u043b \u0431\u0440\u0438\u0442\u044c\u044f \u043e\u043f\u0430\u0441\u043d\u043e\u0439 \u0431\u0440\u0438\u0442\u0432\u043e\u0439, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0438\u0439 \u0440\u0430\u0441\u043f\u0430\u0440\u0438\u0432\u0430\u043d\u0438\u0435, \u043c\u0430\u0441\u0441\u0430\u0436 \u0438 \u0443\u0432\u043b\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u0436\u0438 \u043b\u0438\u0446\u0430"],CutAndShave:["\u0421\u0422\u0420\u0418\u0416\u041a\u0410 \u0418 \u0411\u0420\u0418\u0422\u042c\u0415","CutAndShave","1500\u0440","\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 2 \u0432 1: \u0424\u0438\u0440\u043c\u0435\u043d\u043d\u0430\u044f \u043c\u0443\u0436\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0438\u0436\u043a\u0430 + \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0431\u043e\u0440\u043e\u0434\u044b \u043e\u043f\u0430\u0441\u043d\u043e\u0439 \u0431\u0440\u0438\u0442\u0432\u043e\u0439"],ShapeUp:["\u041c\u041e\u0414\u0415\u041b\u0418\u0420\u041e\u0412\u0410\u041d\u0418\u0415 \u0411\u041e\u0420\u041e\u0414\u042b","ShapeUp","700\u0440","\u0411\u043e\u0440\u043e\u0434\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0448\u0438\u043d\u043a\u043e\u0439, \u043b\u0438\u0446\u043e \u0440\u0430\u0441\u043f\u0430\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0433\u043e\u0440\u044f\u0447\u0438\u043c \u043f\u043e\u043b\u043e\u0442\u0435\u043d\u0446\u0435\u043c. \u0414\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0443\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0430\u0432\u0435\u0442\u043a\u0438, \u043f\u0440\u0438\u0434\u0430\u0451\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430 \u0431\u043e\u0440\u043e\u0434\u0435."],style:["\u0421\u0422\u0410\u0419\u041b\u0418\u041d\u0413","style","500\u0440","\u0421\u043f\u0440\u0430\u0432\u0438\u043c\u0441\u044f \u0434\u0430\u0436\u0435 \u0441 \u0441\u0430\u043c\u044b\u043c\u0438 \u0434\u043b\u0438\u043d\u043d\u044b\u043c\u0438 \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438, \u043f\u0440\u0438\u0434\u0430\u0432 \u0438\u043c \u043d\u0443\u0436\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443 \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e \u0435\u0435 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0432"],successModal:!1},a.showSuccessModal=function(){a.setState({successModal:!a.state.successModal})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return l.a.createElement("div",{className:V.a.ServicePage},l.a.createElement("div",{className:V.a.leftSide},l.a.createElement("div",{className:V.a.wrap},l.a.createElement("h1",null,this.state[e][0]),l.a.createElement("p",null,"".concat(this.state[e][3])),l.a.createElement("p",null,"\u0446\u0435\u043d\u0430: ".concat(this.state[e][2])))),l.a.createElement(J,{showSuccessModal:this.showSuccessModal,serviceName:this.state[e][0]}),this.state.successModal?l.a.createElement(D,null):null)}}]),t}(l.a.Component),z=a(20),R=a.n(z),K=function(e){return l.a.createElement("div",{className:R.a.AboutPage},l.a.createElement("div",{className:R.a.articles},l.a.createElement("div",null,l.a.createElement("h1",null,"\u041e \u041d\u0410\u0421"),l.a.createElement("p",null,"\u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0431\u0430\u0440\u0431\u0435\u0440\u0448\u043e\u043f, \u043c\u044b \u2014 \u0441\u0442\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0443\u0431 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u043c\u0443\u0436\u0447\u0438\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0446\u0435\u043d\u044f\u0442 \u0442\u0432\u043e\u044e \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u041a\u0430\u0436\u0434\u044b\u0439 \u0433\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u043d\u0430\u0441 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442, \u0430 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0434\u0440\u0443\u0433, \u0430 \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0441\u0442\u0435\u0441\u043d\u044f\u0442\u044c\u0441\u044f \u0431\u044b\u0442\u044c \u0441\u0430\u043c\u0438\u043c \u0441\u043e\u0431\u043e\u0439. \u041c\u044b \u0441\u043b\u0435\u0434\u0443\u0435\u043c \u0432\u044b\u0441\u043e\u0447\u0430\u0439\u0448\u0438\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0430\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432 \u0440\u0430\u0431\u043e\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043e\u0440\u043e\u0433\u0443\u044e \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0443 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b, \u0432\u044b\u0439\u0434\u044f \u043e\u0442 \u043d\u0430\u0441, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u044b \u043a \u043d\u0430\u043c \u0432\u0435\u0440\u043d\u0443\u043b\u0438\u0441\u044c.")),l.a.createElement("div",{className:R.a.mission},l.a.createElement("h1",null,"\u041d\u0410\u0428\u0410 \u041c\u0418\u0421\u0421\u0418\u042f"),l.a.createElement("p",null,"\u041c\u044b \u0441\u0442\u0440\u0435\u043c\u0438\u043c\u0441\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0448 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434, \u043d\u043e \u0438 \u0432\u0430\u0448 \u043e\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043d\u0438, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0432 \u043d\u0435\u0433\u043e \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f \u0438 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432 \u0441\u0435\u0431\u0435.")),l.a.createElement("div",{className:R.a.principles},l.a.createElement("h1",null,"\u041d\u0410\u0428\u0418 \u041f\u0420\u0418\u041d\u0426\u0418\u041f\u042b"),l.a.createElement("p",null,"\u0423 \u043d\u0430\u0441 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u044b\u0442\u043d\u044b\u0435 \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0441\u0442\u0430\u0436\u0435\u043c, \u043e\u0431\u0443\u0447\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043f\u043e \u0432\u0441\u0435\u0439 \u0420\u043e\u0441\u0441\u0438\u0438 \u0438 \u043f\u043e \u043c\u0438\u0440\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0442 \u0441\u0432\u043e\u0435 \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043e. \u0423 \u043d\u0430\u0441 \u0432 \u0440\u0430\u0431\u043e\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0443\u0447\u0448\u0430\u044f \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0430 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u043b\u0438\u0446\u043e\u043c \u0438 \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438. \u0423 \u043d\u0430\u0441 \u0432\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u043f\u044b\u043b\u0438\u043d\u043a\u0438, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043c\u044b \u043f\u043e\u043c\u0435\u0448\u0430\u043d\u044b \u043d\u0430 \u0447\u0438\u0441\u0442\u043e\u0442\u0435 \u2014 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u0443\u0431\u0438\u0440\u0430\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b."))))},Z=a(21),Q=a.n(Z),Y=function(e){return l.a.createElement("div",{className:Q.a.ContactsPage},l.a.createElement("div",{className:Q.a.articles},l.a.createElement("div",{className:Q.a.contacts},l.a.createElement("h1",null,"\u041d\u0410\u0428\u0418 \u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b"),l.a.createElement("p",null,"\u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"),l.a.createElement("p",null,"\u0442\u0435\u043b: 8(812)505-35-35"),l.a.createElement("p",null,"email: taksebeBarbershop@info.ru")),l.a.createElement("div",{className:Q.a.contacts},l.a.createElement("h1",null,"\u0412\u0420\u0415\u041c\u042f \u0420\u0410\u0411\u041e\u0422\u042b"),l.a.createElement("p",null,"\u041f\u041d: 9:00 - 18:00"),l.a.createElement("p",null,"\u0412\u0422: 9:00 - 18:00"),l.a.createElement("p",null,"\u0421\u0420: 9:00 - 18:00"),l.a.createElement("p",null,"\u0427\u0422: 9:00 - 18:00"),l.a.createElement("p",null,"\u041f\u0422: 9:00 - 18:00"),l.a.createElement("p",null,"\u0421\u0411: 9:00 - 18:00"),l.a.createElement("p",null,"\u0412\u0421: 9:00 - 18:00"))))},G=a(30),$=a.n(G),ee=function(e){var t=[["\u041f\u0440\u043e\u0444\u0438\u043b\u044c","Profile"],["\u0423\u0441\u043b\u0443\u0433\u0438","Services"],["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","Statistic"]];return l.a.createElement("div",{className:$.a.LeftNavUser},l.a.createElement("nav",null,l.a.createElement("ul",null,t.map((function(t){return l.a.createElement("li",{key:t[1]},l.a.createElement("a",{onClick:function(){e.click(t[1])}},t[0]))})))),l.a.createElement("img",{src:a(62),className:$.a.UserImg}))},te=a(39),ae=a.n(te),ne=function(e){var t=e.user;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"\u0418\u043c\u044f: ",t.name||null),l.a.createElement("p",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",t.age||null),l.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434: ",t.city||null),l.a.createElement("p",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",t.phone||null),l.a.createElement("p",null,"Email: ",t.email||null)),l.a.createElement("a",{className:ae.a.button,onClick:e.userEditToggle},"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))},le=a(14),re=a.n(le),ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:a.props.user.name,age:a.props.user.age,city:a.props.user.city,phone:a.props.user.phone,email:a.props.user.email},a.changeHandler=function(e){var t=e.target.name;a.setState(Object(H.a)({},t,e.target.value))},a.saveProfile=function(){var e=JSON.parse(localStorage.getItem(a.props.userName));e[0]={pass:a.props.user.pass,name:a.state.name,age:a.state.age,city:a.state.city,phone:a.state.phone,email:a.state.email},localStorage.setItem(a.props.userName,JSON.stringify(e)),a.props.userEditToggle()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:re.a.UserEdit},l.a.createElement("form",null,l.a.createElement("div",{className:re.a.inputBlock},l.a.createElement("label",null,"\u0418\u043c\u044f:"),l.a.createElement("input",{name:"name",value:this.state.name,onChange:this.changeHandler})),l.a.createElement("div",{className:re.a.inputBlock},l.a.createElement("label",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442:"),l.a.createElement("input",{name:"age",value:this.state.age,onChange:this.changeHandler})),l.a.createElement("div",{className:re.a.inputBlock},l.a.createElement("label",null,"\u0413\u043e\u0440\u043e\u0434:"),l.a.createElement("input",{name:"city",value:this.state.city,onChange:this.changeHandler})),l.a.createElement("div",{className:re.a.inputBlock},l.a.createElement("label",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"),l.a.createElement("input",{name:"phone",value:this.state.phone,onChange:this.changeHandler})),l.a.createElement("div",{className:re.a.inputBlock},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{name:"email",value:this.state.email,onChange:this.changeHandler}))),l.a.createElement("a",{className:re.a.button,onClick:this.saveProfile},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}}]),t}(l.a.Component),se=a(40),oe=a.n(se),ie=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={userEdit:!1},a.userEditToggle=function(){a.setState({userEdit:!a.state.userEdit})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("logIn"),t=JSON.parse(localStorage.getItem(e))[0];return l.a.createElement("div",{className:oe.a.UserProfile},l.a.createElement("h1",null,"\u043f\u0440\u043e\u0444\u0438\u043b\u044c"),this.state.userEdit?l.a.createElement(ce,{user:t,userEditToggle:this.userEditToggle,userName:e}):l.a.createElement(ne,{user:t,userEditToggle:this.userEditToggle}))}}]),t}(l.a.Component),ue=a(23),me=a.n(ue),pe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={service:a.props.services},a.renderServices=function(){return a.state.service.map((function(e,t){return l.a.createElement("li",{key:t},"".concat(e.serviceName.toLowerCase()," ").concat(e.date," \u0432 ").concat(e.time),l.a.createElement("a",{className:me.a.button,onClick:function(){return a.cancelAppointment(t)}},"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))}))},a.cancelAppointment=function(e){var t=a.state.service;t.splice(e,1);var n=localStorage.getItem("logIn"),l=JSON.parse(localStorage.getItem(n));l[1]=t,localStorage.setItem(n,JSON.stringify(l)),a.setState({service:t})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:me.a.UserServices},l.a.createElement("h1",null,"\u0443\u0441\u043b\u0443\u0433\u0438"),l.a.createElement("div",{className:me.a.servicesList},this.state.service[0]?l.a.createElement("ul",null,this.renderServices()):l.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0441\u0438 \u043d\u0435\u0442")))}}]),t}(l.a.Component),he=a(41),ge=a.n(he),ve=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={currentInterface:"Profile"},a.leftNavHandler=function(e){a.setState({currentInterface:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("logIn"),t=JSON.parse(localStorage.getItem(e))[1];return l.a.createElement("div",{className:ge.a.UserModal},l.a.createElement(ee,{click:this.leftNavHandler}),"Profile"===this.state.currentInterface?l.a.createElement(ie,null):null,"Services"===this.state.currentInterface?l.a.createElement(pe,{services:t}):null)}}]),t}(l.a.Component),de=a(42),Ee=a.n(de),fe=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.UserPage},l.a.createElement(ve,null)))},_e=a(12),be=a(15),Se=a.n(be),Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={logIn:"",password:"",loggedIn:!1,isLoginValid:!1},a.loginHandler=function(){JSON.parse(localStorage.getItem(a.state.logIn))&&JSON.parse(localStorage.getItem(a.state.logIn))[0].pass===a.state.password?(localStorage.setItem("logIn",a.state.logIn),a.setState({loggedIn:!0})):alert("\u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d/\u043f\u0430\u0440\u043e\u043b\u044c")},a.registerHandler=function(){if(""===a.state.logIn||""===a.state.password)a.setState({isLoginValid:!0});else if(localStorage.getItem(a.state.logIn))alert("\u0442\u0430\u043a\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"),a.setState({isLoginValid:!1,isPasswordValid:!1});else{var e=[],t={pass:a.state.password,name:"",age:"",city:"",phone:"",email:""};e[0]=t,e[1]=[],localStorage.setItem(a.state.logIn,JSON.stringify(e)),localStorage.setItem("logIn",a.state.logIn),a.setState({loggedIn:!0})}},a.changeHandler=function(e){var t,n=e.target.name;a.setState((t={},Object(H.a)(t,n,e.target.value),Object(H.a)(t,"isLoginValid",!1),t))},a.submitHandler=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:Se.a.Auth},l.a.createElement(_e.b,null,this.state.loggedIn?l.a.createElement(_e.a,{to:"/user"}):null),l.a.createElement("div",{className:Se.a.AuthForm},l.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("div",null,l.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d"),l.a.createElement("input",{name:"logIn",value:this.state.logIn,onChange:this.changeHandler}),l.a.createElement("div",{className:Se.a.error},this.state.isLoginValid&&!this.state.logIn?l.a.createElement("span",null,"\u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):null)),l.a.createElement("div",null,l.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement("input",{name:"password",value:this.state.password,onChange:this.changeHandler}),l.a.createElement("div",{className:Se.a.error},this.state.isLoginValid&&!this.state.password?l.a.createElement("span",null,"\u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):null)),l.a.createElement("div",{className:Se.a.BtnWrap},l.a.createElement("a",{className:Se.a.button,onClick:this.loginHandler},"\u0432\u043e\u0439\u0442\u0438"),l.a.createElement("a",{className:Se.a.button,onClick:this.registerHandler},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))))}}]),t}(l.a.Component),Ie=!1,Oe=null,Ce=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(Oe,Ie),l.a.createElement(I,null,l.a.createElement(_e.d,null,l.a.createElement(_e.b,{path:"/final_project/",exact:!0,component:j}),l.a.createElement(_e.b,{path:"/services",component:U}),l.a.createElement(_e.b,{path:"/service/:id",component:X}),l.a.createElement(_e.b,{path:"/contacts",component:Y}),l.a.createElement(_e.b,{path:"/auth",component:Ne}),l.a.createElement(_e.b,{path:"/final_project/about",component:K}),l.a.createElement(_e.b,{path:"/user",render:function(){return localStorage.getItem("logIn")?l.a.createElement(fe,null):l.a.createElement(N,null)}}),l.a.createElement(_e.b,{component:N})))}}]),t}(l.a.Component),je=l.a.createElement(E.a,null,l.a.createElement(Ce,null));c.a.render(je,document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.f2a272aa.chunk.js.map