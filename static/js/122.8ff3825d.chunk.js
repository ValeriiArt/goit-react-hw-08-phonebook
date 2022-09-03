"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[122],{4122:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var a=n(1413),r=n(2791),s=n(3793),o=n(277),c=n(803),i=n(9434),l=n(4903),u={getLoading:function(t){return t.contacts.loading},getFilter:function(t){return t.contacts.filter},getContacts:function(t){return t.contacts.items}},d=n(9652),m=n(9369),f=n(3329),h=function(){var t=(0,i.I0)();return(0,f.jsx)("div",{children:(0,f.jsx)(m.Z,{id:"standard-basic",label:"Find contacts by name",variant:"standard",component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",name:"filter",type:"text",onChange:function(e){return t((0,d.W)(e.target.value))}})})},p=n(5861),x=n(7757),j=n.n(x),b="ContactItem_contactItem__Z4FuP",g="ContactItem_itemText__1lmp+",v="ContactItem_delete__jQlZo",C=function(t){var e=t.id,n=t.name,a=t.number,r=(0,i.I0)(),s=function(){var t=(0,p.Z)(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r((0,l.GK)(e)).unwrap();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,f.jsxs)("li",{className:b,children:[(0,f.jsxs)("p",{className:g,children:[n,":"]}),(0,f.jsx)("p",{className:g,children:a}),(0,f.jsx)("span",{className:v,onClick:function(){return s(e)},children:"\xd7"})]})},_="ContactList_contactList__UFVCg",y="ContactList_contactListTitle__-6FRG",Z=function(){var t=u.getContacts,e=u.getFilter,n=(0,i.I0)(),s=(0,i.v9)(t),o=(0,i.v9)(e);(0,r.useEffect)((function(){n((0,l.yF)())}),[n]);var c=(0,r.useMemo)((function(){var t=null===s||void 0===s?void 0:s.filter((function(t){return t.name.toLowerCase().trim().includes(o.toLowerCase().trim())}));return null!==t&&void 0!==t?t:[]}),[s,o]);return(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)(h,{}),(0,f.jsx)("h3",{className:y,children:"My contacts"}),c.length>0?(0,f.jsx)("ul",{children:c.map((function(t){return(0,f.jsx)(C,(0,a.Z)({},t),t.id)}))}):(0,f.jsx)("p",{children:"\ud83e\udee5 "})]})},w=n(885),k=n(4221),F={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function L(){var t=u.getContacts,e=(0,r.useState)(""),n=(0,w.Z)(e,2),a=n[0],s=n[1],o=(0,r.useState)(""),c=(0,w.Z)(o,2),d=c[0],m=c[1],h=(0,i.I0)(),p=(0,i.v9)(t),x=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:return}};return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?k.fn.info("".concat(a," \u0432\u0436\u0435 \u0454 \u0443 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445")):h((0,l.uK)({name:a,number:d})),s(""),m("")},style:F.form,autoComplete:"off",children:[(0,f.jsxs)("label",{style:F.label,children:["Name",(0,f.jsx)("input",{type:"text",name:"name",onChange:x,value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{style:F.label,children:["Number",(0,f.jsx)("input",{type:"tel",name:"number",onChange:x,value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",children:"Add Contact"})]})})}var N=n(6650),A=n(5953),I=(0,o.ZP)(N.Z)((function(t){var e=t.theme;return(0,a.Z)((0,a.Z)({backgroundColor:"dark"===e.palette.mode?"#1A2027":"#fff"},e.typography.body2),{},{padding:e.spacing(1),color:e.palette.text.secondary})})),P={contactTitle:{textAlign:"center",marginBottom:25}};function T(){return(0,f.jsxs)(r.Fragment,{children:[(0,f.jsx)(s.ZP,{}),(0,f.jsxs)(c.Z,{maxWidth:"sx",children:[(0,f.jsx)("h1",{style:P.contactTitle,children:"Welcom to phonebook\ud83d\udc7b"}),(0,f.jsxs)(A.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(L,{}),(0,f.jsx)(A.ZP,{item:!0,md:6,children:(0,f.jsx)(I,{children:(0,f.jsx)(Z,{})})})]})]})]})}}}]);
//# sourceMappingURL=122.8ff3825d.chunk.js.map