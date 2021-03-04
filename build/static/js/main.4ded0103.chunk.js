(this.webpackJsonpstorysaga=this.webpackJsonpstorysaga||[]).push([[0],{15:function(t,e,n){},37:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),o=n(31),c=n.n(o),r=(n(37),n(9)),i=n(10),l=n(12),d=n(11),h=n(3),j=n(2),b=(n(15),n(17)),u=n(13),m=n.n(u),p=n(0),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).onChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var n={story:t.state.story,author:t.state.author,content:t.state.content,published_date:t.state.published_date};m.a.post("/api/",n).then((function(e){t.setState({story:"",author:"",content:"",published_date:""}),t.props.history.push("/")})).catch((function(t){console.log("Error in CreateBook!")}))},t.state={story:"",author:"",content:"",published_date:""},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"CreateBook",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)(h.b,{to:"/",className:"btn btn-outline-warning float-left",children:"Show Story List"})]}),Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Add Snippet"}),Object(p.jsx)("p",{className:"lead text-center",children:"Create Snippet"}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Name of Story",name:"story",className:"form-control",value:this.state.story,onChange:this.onChange})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("textarea",{placeholder:"Type your story",name:"content",rows:"6",className:"form-control",value:this.state.content,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]})]})]})})})}}]),n}(s.Component),x=function(t){var e=t.item;return Object(p.jsx)("div",{className:"card-container",children:Object(p.jsx)("div",{className:"desc col-md-4 col-sm-1 m-auto",children:Object(p.jsx)("h2",{children:Object(p.jsxs)(h.b,{to:"/content/".concat(e.story),children:["   ",e.story]})})})})},v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={snips:[]},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;m.a.get("/api/all").then((function(e){t.setState({snips:e.data})})).catch((function(t){console.log("Error from ShowStoryList")}))}},{key:"render",value:function(){var t,e=this.state.snips;(console.log("PrintSnip: "+e),e)?t=function(t){var e=[],n={};for(var s in t){n[t[s].story]=t[s]}for(var a in n)e.push(n[a]);return console.log(e),e}(e).map((function(t,e){return Object(p.jsx)(x,{item:t},e)})):(t="there is no snip record!",console.log("no snips"));return Object(p.jsx)("div",{className:"ShowBookList",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"Our Stories"})]}),Object(p.jsxs)("div",{className:"col-md-11",children:[Object(p.jsx)(h.b,{to:"/add-snip",className:" add btn btn-outline-warning float-right",children:"+ Add New Story"}),Object(p.jsx)(h.b,{to:"/add-exist-snip",className:" add btn btn-outline-warning float-right",children:"+ Add New Snip"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{})]})]}),Object(p.jsx)("div",{className:"list",children:t})]})})}}]),n}(s.Component);var f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={snips:[],story_name:s.props.match.params.story},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.match.params.story),m.a.get("/api/story/"+this.state.story_name).then((function(e){t.setState({snips:e.data})})).catch((function(t){console.log("Error from ShowBookList")}))}},{key:"render",value:function(){var t,e=this.state.snips;return console.log("PrintBook: "+e),e?(console.log(e),e.sort(g),console.log(e),(t=e.map((function(t,e){return Object(p.jsx)("p",{children:t.content})}))).sort()):(t="there is no snip record!",console.log("no sips")),Object(p.jsx)("div",{className:"CreateBook container-fluid",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-8 m-auto",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{class:" border-warning border-bottom",children:Object(p.jsx)("h1",{class:"story-title text-warning",children:this.props.match.params.story})}),Object(p.jsxs)("div",{className:"col-md-11",children:[Object(p.jsx)(h.b,{to:"/",className:"add btn btn-outline-warning float-right",children:"Show Story List"}),Object(p.jsx)(h.b,{to:"/add-snip",className:" add btn btn-outline-warning float-right",children:"+ Add New Story"}),Object(p.jsx)(h.b,{to:"/add-exist-snip",className:" add btn btn-outline-warning float-right",children:"+ Add New Snip"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{})]}),Object(p.jsx)("div",{className:"story",children:Object(p.jsx)("div",{className:"desc-story",children:t})})]})})})})})}}]),n}(s.Component);function g(t,e){return console.log(t.publish_date),console.log(e.publish_date),new Date(t.publish_date).getTime()-new Date(e.publish_date).getTime()}var y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).onChange=function(e){console.log(e.target.value),console.log(e.target.name),t.setState(Object(b.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),console.log(t.state);var n={story:t.state.story,author:t.state.author,content:t.state.content,published_date:t.state.published_date};m.a.post("/api/",n).then((function(e){t.setState({story:"",author:"",content:"",published_date:""}),t.props.history.push("/")})).catch((function(t){console.log("Error in CreateBook!")}))},t.state={story:"",author:"",content:"",published_date:"",snips:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;m.a.get("/api/all").then((function(e){t.setState({snips:e.data})})).catch((function(t){console.log("Error from ShowBookList")}))}},{key:"render",value:function(){var t=function(t){var e=[],n={};for(var s in t){n[t[s].story]=t[s]}for(var a in n)e.push(n[a]);return e}(this.state.snips);return console.log("PrintBook: "+t),Object(p.jsx)("div",{className:"CreateBook",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)(h.b,{to:"/",className:"btn btn-outline-warning float-left",children:"Show Story List"})]}),Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Add Snippet"}),Object(p.jsx)("p",{className:"lead text-center",children:"Create Snippet"}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control",name:"story",value:this.state.story,onChange:this.onChange,children:[Object(p.jsx)("option",{children:"Select one of our storie"}),t.map((function(t){return Object(p.jsx)("option",{value:t.story,children:t.story},t.story)}))]})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("textarea",{placeholder:"Type your story",name:"content",rows:"6",className:"form-control",value:this.state.content,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]})]})]})})})}}]),n}(s.Component);var N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(h.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Story Saga"}),Object(p.jsxs)("ul",{className:"header",children:[Object(p.jsx)("li",{children:Object(p.jsx)(h.c,{to:"/",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(h.c,{to:"/",children:"How it Works"})}),Object(p.jsx)("li",{children:Object(p.jsx)(h.c,{to:"/",children:"Contact"})})]}),Object(p.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(p.jsx)(j.a,{exact:!0,path:"/add-snip",component:O}),Object(p.jsx)(j.a,{exact:!0,path:"/story",component:x}),Object(p.jsx)(j.a,{exact:!0,path:"/content/:story",component:f}),Object(p.jsx)(j.a,{exact:!0,path:"/add-exist-snip",component:y}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"content"})})]})})}}]),n}(s.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),o(t),c(t)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.4ded0103.chunk.js.map