(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{155:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},193:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a,c,s,i,r,o=n(0),d=n.n(o),l=n(34),j=n.n(l),u=(n(190),n(191),n(192),n(76)),b=n(22),h=n(24),O=n(285),m=n(290),x=n(282),v=n(284),p=n(94),g=n(178),f=n(294),S=n(276),I=n(277),k=(n(155),n(95)),N=n(286),w=Object(N.a)(a||(a=Object(k.a)(["\n{\n    teachers {\n        name,\n        email,\n        teacherId,\n        education\n    }\n}\n"]))),$=Object(N.a)(c||(c=Object(k.a)(["\n    query Teacher($teacherId: Int!) {\n        teacher (teacherId: $teacherId) {\n            name,\n            email,\n            teacherId,\n            education,\n            students {\n                _id,\n                name,\n                subjects\n            }\n        }\n    }\n"]))),y=Object(N.a)(s||(s=Object(k.a)(["\n    mutation DeleteStudent ($studentId: String!, $token: String!) {\n        deleteStudent (studentId: $studentId, token: $token) {\n            deletedCount,\n            err\n        }\n    }\n"]))),C=Object(N.a)(i||(i=Object(k.a)(["\n    query Token ($email: String!, $password: String!) {\n        token (email: $email, password: $password) {\n            token,\n            err,\n            info {\n                teacherId,\n                name\n            }\n        }\n    }\n"]))),L=Object(N.a)(r||(r=Object(k.a)(["\n    mutation AddStudent (\n        $name: String!,\n        $subjects: [String],\n        $token: String!\n    ) {\n        addStudent (\n            name: $name,\n            subjects: $subjects,\n            token: $token\n        ) {\n            err,\n            data {\n                name\n            }\n        }\n    }\n"]))),T=n(41),F=n.n(T),D=(n(193),n(8));var E=function(){var e=d.a.useState(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return d.a.useEffect((function(){F.a.get("token")&&a(!0)}),[]),n?Object(D.jsxs)(O.a,{className:"topbar-card",children:[Object(D.jsxs)("span",{className:"title",children:["Hi ",F.a.get("name")]}),Object(D.jsxs)("span",{className:"is-right",children:[Object(D.jsx)(u.b,{to:"/signin",className:"margin-x-5",children:"Teachers"}),Object(D.jsx)(u.b,{to:"/add-student",className:"margin-x-5",children:"Add Student"}),Object(D.jsx)("a",{href:"#logout",onClick:function(){F.a.remove("token"),F.a.remove("teacherId"),window.location.reload()},className:"margin-x-5",children:"Log Out"})]})]}):Object(D.jsx)(O.a,{className:"topbar-card",children:Object(D.jsxs)("span",{className:"is-right",children:[Object(D.jsx)(u.b,{to:"/signin",className:"margin-x-5",children:"Sign In"}),Object(D.jsx)(u.b,{to:"/",className:"margin-x-5",children:"Teachers"})]})})};var A=function(e){var t=Object(b.g)().id,n=Object(S.a)($,{variables:{teacherId:parseInt(t)}}),a=Object(h.a)(n,2),c=a[0],s=a[1],i=s.data,r=s.loading,o=d.a.useState(null),l=Object(h.a)(o,2),j=l[0],u=l[1],k=d.a.useState(null),N=Object(h.a)(k,2),w=N[0],C=N[1],L=Object(I.a)(y),T=Object(h.a)(L,2),A=T[0],z=T[1],M=d.a.useState(!1),P=Object(h.a)(M,2),q=P[0],B=P[1];return d.a.useEffect((function(){!1===r&&q&&u(i.teacher)}),[r,i]),d.a.useEffect((function(){c({variables:{teacherId:parseInt(t)}}),C(F.a.get("teacherId")),B(!0)}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E,{}),Object(D.jsx)("div",{className:"teachers-view-container",children:Object(D.jsxs)(O.a,{title:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h3",{children:"View Teachers"}),Object(D.jsx)("p",{children:"School Database - Teacher Details"})]}),children:[Object(D.jsxs)("div",{className:"teacher-info-container",children:[Object(D.jsx)("div",{children:Object(D.jsx)(m.a,{size:128,src:"https://joeschmoe.io/api/v1/random"})}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:null===j||void 0===j?void 0:j.name}),Object(D.jsx)("h4",{children:null===j||void 0===j?void 0:j.email}),Object(D.jsxs)("h4",{children:[null===j||void 0===j?void 0:j.education," - ",Object(D.jsxs)("i",{children:["ID: ",null===j||void 0===j?void 0:j.teacherId]})]})]})]}),Object(D.jsx)(x.a,{}),Object(D.jsx)("h2",{children:"Students"}),Object(D.jsx)(x.a,{}),Object(D.jsx)(v.b,{itemLayout:"horizontal",dataSource:(null===j||void 0===j?void 0:j.students)||[],loading:r||z.loading,renderItem:function(e){return Object(D.jsxs)(v.b.Item,{children:[Object(D.jsx)(v.b.Item.Meta,{avatar:Object(D.jsx)(m.a,{src:"https://joeschmoe.io/api/v1/random"}),title:e.name,description:e.subjects.join(", ")}),Object(D.jsx)("div",{children:Object(D.jsx)(p.a,{title:"Delete Student",children:parseInt(w)===parseInt(j.teacherId)?Object(D.jsx)(g.a,{type:"primary",className:"margin-x-5",shape:"circle",danger:!0,icon:Object(D.jsx)(f.a,{}),onClick:function(){A({variables:{studentId:e._id,token:F.a.get("token")||""}}),c({variables:{teacherId:parseInt(t)}})}}):null})})]})}})]})})]})},z=n(287),M=n(170),P=z.a.Link;var q=function(){var e=Object(M.a)(w),t=e.data,n=e.loading,a=d.a.useState([]),c=Object(h.a)(a,2),s=c[0],i=c[1];return d.a.useEffect((function(){!1===n&&i(t.teachers)}),[t,n]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E,{}),Object(D.jsx)("div",{className:"teachers-view-container",children:Object(D.jsx)(O.a,{title:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h3",{children:"View Teachers"}),Object(D.jsx)("p",{children:"School Database - List of All Teachers"})]}),children:Object(D.jsx)(v.b,{itemLayout:"horizontal",loading:n,dataSource:s,renderItem:function(e,t){return Object(D.jsxs)(v.b.Item,{children:[Object(D.jsx)(v.b.Item.Meta,{avatar:Object(D.jsx)(m.a,{src:"https://joeschmoe.io/api/v1/random"}),title:e.name,description:e.email+" - "+e.education}),Object(D.jsxs)("div",{children:[Object(D.jsx)(P,{href:"mailto:john.doe@example.com",className:"margin-x-5",children:"Contact"}),Object(D.jsx)(P,{href:"teacher/".concat(t+1),className:"margin-x-5",children:"Details"})]})]})}})})})]})},B=n(289);var J=function(){var e=Object(S.a)(C),t=Object(h.a)(e,2),n=t[0],a=t[1],c=a.loading,s=a.data,i=d.a.useState(""),r=Object(h.a)(i,2),o=r[0],l=r[1],j=d.a.useState(""),u=Object(h.a)(j,2),b=u[0],m=u[1];return d.a.useEffect((function(){var e,t,n,a,i;!1===c&&(null===s||void 0===s?void 0:s.token)&&(F.a.set("token",null===s||void 0===s||null===(e=s.token)||void 0===e?void 0:e.token),F.a.set("teacherId",null===s||void 0===s||null===(t=s.token)||void 0===t||null===(n=t.info)||void 0===n?void 0:n.teacherId),F.a.set("name",null===s||void 0===s||null===(a=s.token)||void 0===a||null===(i=a.info)||void 0===i?void 0:i.name),window.location="./")}),[c,s]),Object(D.jsx)("div",{className:"login-container",children:Object(D.jsxs)(O.a,{title:"Login",className:"login-form",children:[Object(D.jsx)(B.a,{placeholder:"Email",className:"app-input",onChange:function(e){return l(e.target.value)}}),Object(D.jsx)(B.a,{placeholder:"Password",type:"password",className:"app-input",onChange:function(e){return m(e.target.value)}}),Object(D.jsx)(g.a,{type:"primary",shape:"round",size:26,className:"login-button",onClick:function(){n({variables:{email:o,password:b}})},children:"Log In"})]})})},V=n(291);var _=function(){var e,t,n,a,c,s,i=Object(I.a)(L),r=Object(h.a)(i,2),o=r[0],l=r[1],j=l.data,u=l.loading,b=d.a.useState(""),m=Object(h.a)(b,2),x=m[0],v=m[1],p=d.a.useState(""),f=Object(h.a)(p,2),S=f[0],k=f[1],N=d.a.useState(""),w=Object(h.a)(N,2),$=w[0],y=w[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E,{}),Object(D.jsx)("div",{className:"login-container",children:Object(D.jsxs)(O.a,{title:"Add Student",className:"login-form",children:[!1===u&&(null===j||void 0===j||null===(e=j.addStudent)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.name)?Object(D.jsx)(V.a,{message:"Student Added",type:"success"}):!1===u&&(null===j||void 0===j||null===(n=j.addStudent)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.err)?Object(D.jsx)(V.a,{message:null===j||void 0===j||null===(c=j.addStudent)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.err,type:"error"}):$?Object(D.jsx)(V.a,{message:$,type:"error"}):null,Object(D.jsx)("br",{}),Object(D.jsx)(B.a,{placeholder:"Student Name",className:"app-input",onChange:function(e){return v(e.target.value)}}),Object(D.jsx)(B.a,{placeholder:"Subjects (like Maths, English)",className:"app-input",onChange:function(e){return k(e.target.value)}}),Object(D.jsx)(g.a,{type:"primary",shape:"round",size:26,className:"login-button",onClick:function(){F.a.get("token")?o({variables:{name:x,subjects:S.split(",").map((function(e){return e.trim()})),token:F.a.get("token")}}):y("Login to add student")},children:"Add"})]})})]})};var H=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(u.a,{children:Object(D.jsxs)(b.c,{children:[Object(D.jsx)(b.a,{path:"/signin",element:Object(D.jsx)(J,{})}),Object(D.jsx)(b.a,{exact:!0,path:"/",element:Object(D.jsx)(q,{})}),Object(D.jsx)(b.a,{exact:!0,path:"/teacher/:id",element:Object(D.jsx)(A,{})}),Object(D.jsx)(b.a,{exact:!0,path:"/add-student",element:Object(D.jsx)(_,{})})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},K=n(271),Q=n(288),R=n(283),U=window.location.protocol+"//"+window.location.host,W=new K.a({uri:/localhost/.test(window.location)?"http://localhost:8085/api":U+"/api",cache:new Q.a});j.a.render(Object(D.jsx)(R.a,{client:W,children:Object(D.jsx)(d.a.StrictMode,{children:Object(D.jsx)(H,{})})}),document.getElementById("root")),G()}},[[270,1,2]]]);
//# sourceMappingURL=main.d2718f51.chunk.js.map