(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={link:"header_link__23W5L",active:"header_active__1snxj",block:"header_block__2DfCJ",header:"header_header__32qr7"}},function(e,t,n){e.exports={sms:"Message_sms__Je5VA",avatar:"Message_avatar__3l1we",content:"Message_content__2cJNF",name:"Message_name__WKQwp",massage:"Message_massage__MTfrK",time:"Message_time__F_ySY",block:"Message_block__1ZB9o"}},,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__iphb4",errorInput:"SuperInputText_errorInput__2cCoX",error:"SuperInputText_error__Ep6VA",input:"SuperInputText_input__2WLg1"}},,function(e,t,n){e.exports={blue:"HW4_blue__2INfC",column:"HW4_column__FC9BA",testSpanError:"HW4_testSpanError__2HGfF"}},function(e,t,n){e.exports={default:"SuperButton_default__20904",red:"SuperButton_red__1IzkH",button:"SuperButton_button__3JeVR",blink:"SuperButton_blink__2dEnR"}},,,function(e,t,n){e.exports={someClass:"Greeting_someClass__1ZspI",error:"Greeting_error__2NEDW"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__28sBS",checkbox:"SuperCheckbox_checkbox__mdP2I",spanClassName:"SuperCheckbox_spanClassName__26MUw"}},function(e,t,n){e.exports={select:"s_select__2RhXv",option:"s_option__2dY9R"}},function(e,t,n){e.exports={radio:"s_radio__2z1tC",label:"s_label__30Xl4"}},,,,,,function(e,t,n){e.exports={App:"App_App__2P83I"}},function(e,t,n){e.exports={span:"s_span__3cXMU"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(27),s=n.n(r),o=(n(36),n(28)),i=n.n(o),j=n(10),l=n(8),u=n.n(l),b=n(2),d=n(9),h=n.n(d),O=n(0);function x(e){return Object(O.jsxs)("div",{className:h.a.sms,children:[Object(O.jsx)("img",{src:e.avatar,className:h.a.avatar}),Object(O.jsx)("div",{className:h.a.block}),Object(O.jsxs)("div",{className:h.a.content,children:[Object(O.jsx)("div",{className:h.a.name,children:e.name}),Object(O.jsx)("div",{className:h.a.massage,children:e.message}),Object(O.jsxs)("div",{className:h.a.time,children:["  ",e.time]})]})]})}var p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",_="some text",v="22:00";var f=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(O.jsx)(x,{avatar:p,name:m,message:_,time:v}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},g=n(3);var C=function(e){return Object(O.jsxs)("div",{children:[e.affair.name,Object(O.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(O.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(N),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(g.a)(r,2),o=s[0],i=s[1],j=function(e,t){return"high"===t||"low"===t||"middle"===t?e.filter((function(e){return e.priority===t})):e}(n,o);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(k,{data:j,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},w=n(31),y=n(19),I=n.n(y),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c?I.a.error:I.a.someClass;return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:t,onChange:n,className:s}),Object(O.jsx)("span",{children:c}),Object(O.jsx)("button",{onClick:a,children:"add"}),Object(O.jsx)("span",{children:r})]})};var E=function(e){var t=Object(a.useState)("ff"),n=Object(g.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(g.a)(s,2),i=o[0],j=o[1],l=e.users.length;return Object(O.jsx)(A,{name:c,setNameCallback:function(e){r(e.currentTarget.value)},addUser:function(){e.addUserCallback(c),c?alert("Hello  "+c):j("NO NAME")},error:i,totalUsers:l})},F=n(45);var T=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};c([].concat(Object(w.a)(n),[t]))}})]})},B=n(4),M=n(5),J=n(13),P=n.n(J),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(o||""),l="".concat(P.a.input," ").concat(r?P.a.errorInput:P.a.superInput," ").concat(s);return console.log(l),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(B.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},i)),r&&Object(O.jsx)("span",{className:j,children:r})]})},H=n(15),U=n.n(H),X=n(16),D=n.n(X),K=function(e){var t=e.red,n=e.className,a=Object(M.a)(e,["red","className"]),c="".concat(D.a.button," ").concat(t?D.a.red:D.a.default," ").concat(n);return Object(O.jsx)("button",Object(B.a)({className:c},a))},R=n(20),G=n.n(R),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(B.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(O.jsx)("span",{className:G.a.spanClassName,children:c})]})};var L=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(g.a)(o,2),j=i[0],l=i[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:U.a.column,children:[Object(O.jsx)(W,{value:n,onChangeText:c,onEnter:s,error:r,spanClassName:U.a.testSpanError}),Object(O.jsx)(W,{className:U.a.blue}),Object(O.jsx)(K,{children:"default"}),Object(O.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(K,{disabled:!0,children:"disabled"}),Object(O.jsx)(z,{checked:j,onChangeChecked:l,children:"some text "}),Object(O.jsx)(z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},V=n(29),Y=n.n(V),Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(g.a)(s,2),i=o[0],j=o[1],l=c||{},u=l.children,b=l.onDoubleClick,d=l.className,h=Object(M.a)(l,["children","onDoubleClick","className"]),x="".concat(Y.a.span," ").concat(d);return Object(O.jsx)(O.Fragment,{children:i?Object(O.jsx)(W,Object(B.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(O.jsx)("span",Object(B.a)(Object(B.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:u||r.value}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Q(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}q("test",{x:"A",y:1});Q("test",{x:"",y:0});var $=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(Z,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(K,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(O.jsx)(K,{onClick:function(){c(Q("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{})]})},ee=n(21),te=n.n(ee),ne=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(M.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(O.jsx)("option",{className:te.a.option,value:e,children:e},e+"-"+t)})):[],o=te.a.select+(n?""+n:"");return Object(O.jsx)("select",Object(B.a)(Object(B.a)({className:o,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},ae=n(22),ce=n.n(ae),re=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){c&&c(e),r&&r(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(O.jsxs)("label",{className:ce.a.label,children:[Object(O.jsx)("input",Object(B.a)({className:ce.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:o},s)),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},se=["x","y","z"];var oe=function(){var e=Object(a.useState)(se[1]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(ne,{options:se,value:n,onChangeOption:c})}),Object(O.jsx)("div",{children:Object(O.jsx)(re,{name:"radio",options:se,value:n,onChangeOption:c})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(a.useState)(ie),t=Object(g.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(O.jsx)("div",{children:"some name, age"},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 8",r,Object(O.jsx)("div",{children:Object(O.jsx)(K,{onClick:function(){return c(function(e,t){switch(t.type){case"sort":case"check":default:return e}}(ie,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(O.jsx)("div",{children:"sort down"}),"check 18",Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var le=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)(T,{}),Object(O.jsx)(L,{}),Object(O.jsx)($,{}),Object(O.jsx)(oe,{}),Object(O.jsx)(je,{})]})};var ue=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var be=function(){return Object(O.jsx)("div",{children:"Junior"})};var de=function(){return Object(O.jsx)("div",{children:"JuniorPlus"})},he="/pre-junior",Oe="/junior",xe="/junior-plus";var pe=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(b.a,{to:he})}}),Object(O.jsx)(b.b,{path:he,render:function(){return Object(O.jsx)(le,{})}}),Object(O.jsx)(b.b,{path:Oe,render:function(){return Object(O.jsx)(be,{})}}),Object(O.jsx)(b.b,{path:xe,render:function(){return Object(O.jsx)(de,{})}}),Object(O.jsx)(b.b,{render:function(){return Object(O.jsx)(ue,{})}})]})})};var me=function(){return Object(O.jsxs)("div",{className:u.a.header,children:[Object(O.jsx)(j.b,{to:he,className:u.a.link,activeClassName:u.a.active,children:"pre-junior"}),Object(O.jsx)(j.b,{to:Oe,className:u.a.link,activeClassName:u.a.active,children:"junior"}),Object(O.jsx)(j.b,{to:xe,className:u.a.link,activeClassName:u.a.active,children:"junior+"}),Object(O.jsx)("div",{className:u.a.block})]})};var _e=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(me,{}),Object(O.jsx)(pe,{})]})})};var ve=function(){return Object(O.jsxs)("div",{className:i.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(_e,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.86084703.chunk.js.map