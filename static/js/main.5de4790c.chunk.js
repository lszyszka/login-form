(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(66)},46:function(e,t,a){},53:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),s=a.n(r),i=(a(46),a(6)),c=a(7),l=a(9),u=a(8),m=a(10),p=a(40),d=(a(53),a(19)),h=a(39),g=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REGISTER":return localStorage.setItem("userName",e.payload.userName),localStorage.setItem("password",e.payload.password),{user:e.payload}}},f=Object(d.c)(g,Object(d.a)(h.a)),b=a(16),w=a(17),E=function(e){return Object(w.a)({},e)},O={registerUser:function(e){return{type:"REGISTER",payload:e}},loginUser:function(e){return{type:"LOGIN",payload:e}}},v=a(5),y=a(18),j=a(20),C=(a(36),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).notify=function(){return j.toast.error("Fill all input !")},a.notifySucces=function(){return j.toast.success("Register succesful")},a.state={user:{firstName:"",userName:"",password:"",confirmPassword:""}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleInput",value:function(e){this.setState({user:Object(w.a)({},this.state.user,Object(b.a)({},e.target.name,e.target.value))})}},{key:"validate",value:function(){""===this.state.user.firstName||""===this.state.user.userName||""===this.state.user.password||this.state.user.password!==this.state.user.confirmPassword?this.notify():(this.props.registerUser(this.state.user),this.notifySucces())}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("div",null,o.a.createElement(j.ToastContainer,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),o.a.createElement("label",null,"First Name: "),o.a.createElement("input",{name:"firstName",type:"text",onChange:function(t){e.handleInput(t)}}),o.a.createElement("label",null,"User Name: "),o.a.createElement("input",{name:"userName",type:"text",onChange:function(t){e.handleInput(t)}}),o.a.createElement("label",null,"Password: "),o.a.createElement("input",{name:"password",type:"password",onChange:function(t){e.handleInput(t)}}),o.a.createElement("label",null,"Confim Password: "),o.a.createElement("input",{name:"confirmPassword",type:"password",onChange:function(t){e.handleInput(t)}}),o.a.createElement("button",{onClick:function(){e.validate()}},"Send"),o.a.createElement(y.a,{to:"/"},"Back to Login"))}}]),t}(o.a.Component)),N=C=Object(v.a)(E,O)(C),k=a(22),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userLogin:{userName:"",password:""},isLogin:void 0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleInput",value:function(e){this.setState({userLogin:Object(w.a)({},this.state.userLogin,Object(b.a)({},e.target.name,e.target.value))})}},{key:"login",value:function(){this.state.userLogin.userName===localStorage.getItem("userName")&&this.state.userLogin.password===localStorage.getItem("password")?(console.log("Udalo sie zalogowac"),this.setState({isLogin:!0})):(this.setState({isLogin:!1}),console.log("Niepoprawne dane"))}},{key:"render",value:function(){var e=this;return void 0===this.state.isLogin?o.a.createElement("div",null,o.a.createElement("label",null,"User Name:"),o.a.createElement("input",{type:"text",name:"userName",onChange:function(t){e.handleInput(t)}}),o.a.createElement("label",null,"Password: "),o.a.createElement("input",{type:"password",name:"password",onChange:function(t){e.handleInput(t)}}),o.a.createElement("button",{onClick:function(){e.login()}},"Login"),o.a.createElement("button",null,o.a.createElement(y.a,{to:"/register"},"Register"))):this.state.isLogin?o.a.createElement(k.a,{to:"/logged"}):o.a.createElement("div",null,"Niepoprawne dane logowanie")}}]),t}(o.a.Component),L=I=Object(v.a)(E,O)(I),S=a(68),P=a(69),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("img",{src:"https://media.giphy.com/media/HXF45CT8cvzZC/giphy.gif"}))}}]),t}(o.a.Component),U=R=Object(v.a)(E,O)(R),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:f},o.a.createElement(S.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(P.a,{exact:!0,path:"/",component:L}),o.a.createElement(P.a,{path:"/register",component:N}),o.a.createElement(P.a,{path:"/logged",component:U}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.5de4790c.chunk.js.map