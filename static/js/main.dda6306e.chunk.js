(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{14:function(e,n,t){e.exports={form:"ContactForm_form__2i_SD",form_field:"ContactForm_form_field__1xh39",form_label:"ContactForm_form_label__35YcD",error_message:"ContactForm_error_message__Yscce"}},173:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),c=t.n(o),a=t(59),i=t.n(a),s=(t(70),t(5)),l=t(175),m=(t(71),t(25)),u=t(27),d=t(63),b=t(14),j=t.n(b),f={name:"",number:""};var h=function(e){var n,t,o=e.onSubmit,c=u.a().shape({name:u.b().min(2,"Too Short!").max(25,"Too Long!").required("Requerid"),number:u.b().length(9,"Wrong length!").required("Requerid")}),a=Object(m.b)({resolver:Object(d.yupResolver)(c),defaultValues:f}),i=a.register,s=a.reset,l=a.handleSubmit,b=a.errors;return Object(r.jsxs)("form",{onSubmit:l((function(e){s(f),o(e)})),children:[Object(r.jsxs)("div",{className:j.a.form_field,children:[Object(r.jsx)("label",{htmlFor:"name",className:j.a.form_label,children:"Name"}),Object(r.jsx)("input",{type:"text",name:"name",ref:i({required:!0}),className:"form_input",placeholder:"Input name..."}),Object(r.jsx)("p",{children:null===(n=b.name)||void 0===n?void 0:n.message})]}),Object(r.jsxs)("div",{className:j.a.form_field,children:[Object(r.jsx)("label",{htmlFor:"number",className:j.a.form_label,children:"Number"}),Object(r.jsx)("input",{type:"tel",name:"number",ref:i({required:!0}),className:"form_input",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"555-55-55"}),Object(r.jsx)("p",{children:null===(t=b.number)||void 0===t?void 0:t.message})]}),Object(r.jsx)("button",{type:"submit",className:j.a.form_field,children:"Add contact"})]})},O=t(64),p=t.n(O);function x(e){var n=e.id,t=e.name,o=e.number,c=e.onDeleteContact;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("p",{className:p.a.element,children:[t,": ",o]}),Object(r.jsx)("button",{onClick:function(){return c(n)},children:"Delete"})]})}function _(e){var n=e.contacts,t=e.filter,o=void 0===t?"":t,c=e.onDeleteContact;return Object(r.jsx)("ul",{children:n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(o.toLowerCase())})).map((function(e){return Object(r.jsx)(x,{id:e.id,name:e.name,number:e.number,onDeleteContact:c},e.id)}))})}function v(e){var n=e.handleInput;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Find contacts by name"}),Object(r.jsx)("input",{className:"form_input",type:"text",name:"filter",onInput:n})]})}var g=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var C=function(){var e=Object(o.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:g})),n=Object(s.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),m=i[0],u=i[1];return Object(o.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(t))}),[t]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(h,{onSubmit:function(e){if(t.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts")),t;c((function(n){return e.id=Object(l.a)(),n.concat(e)}))}}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(v,{handleInput:function(e){u(e.target.value)}}),Object(r.jsx)(_,{contacts:t,filter:m,onDeleteContact:function(e){c((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))},64:function(e,n,t){e.exports={element:"ContactElement_element__2ln8g"}},70:function(e,n,t){},71:function(e,n,t){}},[[173,1,2]]]);
//# sourceMappingURL=main.dda6306e.chunk.js.map