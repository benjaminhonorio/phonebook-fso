(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(17),a=t.n(r),o=t(8),u=t(3),i=t(0),s=function(e){var n=e.handleSearch,t=e.searchValue;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:n,value:t})]})},l=function(e){var n=e.addNewPerson,t=e.handleName,c=e.handleNumber,r=e.newName,a=e.newNumber;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:t,value:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:c,value:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})};function d(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("div",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:t,children:"delete"})]})}var f=function(e){var n=e.persons,t=e.handleDelete;return 0!==n.length?n.map((function(e){return Object(i.jsx)(d,{person:e,deletePerson:function(){return t(e.id,e.name)}},e.id)})):Object(i.jsx)("div",{children:"No names found"})};function h(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"message ".concat(n.type),children:n.content})}var j=t(4),b=t.n(j),m="http://localhost:3001/api/persons",O={getAll:function(){return b.a.get(m).then((function(e){return e.data}))},create:function(e){return b.a.post(m,e).then((function(e){return e.data}))},deletePerson:function(e){return b.a.delete("".concat(m,"/").concat(e))},update:function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))}},p=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)([]),d=Object(u.a)(a,2),j=d[0],b=d[1],m=Object(c.useState)(""),p=Object(u.a)(m,2),v=p[0],x=p[1],w=Object(c.useState)(""),g=Object(u.a)(w,2),y=g[0],N=g[1],S=Object(c.useState)(""),k=Object(u.a)(S,2),P=k[0],T=k[1],A=Object(c.useState)(null),C=Object(u.a)(A,2),J=C[0],D=C[1];Object(c.useEffect)((function(){O.getAll().then((function(e){b(e),r(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(h,{message:J}),Object(i.jsx)(s,{handleSearch:function(e){var n=e.target.value;if(T(n),n){var c=new RegExp(n,"i"),a=j.filter((function(e){return c.test(e.name)}));0!==t.length?r(a):r([])}else r(j)},searchValue:P}),Object(i.jsx)("h3",{children:"add a new"}),Object(i.jsx)(l,{addNewPerson:function(e){e.preventDefault();var n={name:v,number:y},c=j.filter((function(e){return e.name===v}));if(0===c.length)O.create(n).then((function(e){r(t.concat(e)),b(j.concat(e)),D({type:"success",content:"Added ".concat(e.name)}),setTimeout((function(){D(null)}),4e3)})).catch((function(e){D({type:"error",content:JSON.stringify(e.response.data.error)}),setTimeout((function(){D(null)}),4e3)}));else if(window.confirm("".concat(v," is already added to phonebook, replace the old number with the new one?"))){var a=Object(o.a)(Object(o.a)({},c[0]),{},{number:y});O.update(c[0].id,a).then((function(e){var n=j.map((function(n){return n.id!==c[0].id?n:e}));b(n),r(n),D({type:"success",content:"The number of ".concat(e.name," was updated successfully")}),setTimeout((function(){D(null)}),4e3)})).catch((function(e){D({type:"error",content:JSON.stringify(e.response.data.error)}),setTimeout((function(){D(null)}),4e3)}))}x(""),N("")},handleName:function(e){x(e.target.value)},handleNumber:function(e){N(e.target.value)},newName:v,newNumber:y}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(f,{persons:t,handleDelete:function(e,n){window.confirm("Are you sure you want to delete this person?")&&(O.deletePerson(e).catch((function(e){D({type:"error",content:"Information of ".concat(n," has already been removed from server")}),setTimeout((function(){D(null)}),4e3)})),r(j.filter((function(n){return n.id!==e}))),b(j.filter((function(n){return n.id!==e}))),T(""))}})]})};t(41);a.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0c5bc6a0.chunk.js.map