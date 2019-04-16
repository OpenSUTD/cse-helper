(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(66)},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=n(7),l=n(8),s=n(10),u=n(9),d=n(11),p=n(3),f=(n(40),n(4)),h=n(19),m=n.n(h),g=n(30),b=n(16),v=n(15),x=n(5);function w(){var e=Object(p.a)(["\n  margin:20px;\n  border: none;\n  border-radius:20px;\n  height: 50px\n  width:50%;\n  background-color: ",";\n  font-size:1.5em\n  font-family: 'Raleway', sans-serif;\n  font-weight:700;\n  color:white;\n  text-align: center;\n  :focus{\n    outline: 0;\n  }\n  :active{\n    background-color: #e84118;\n  }\n  svg{\n    padding: 0px 10px\n  }\n"]);return w=function(){return e},e}var y=f.a.button(w(),function(e){return e.theme.color}),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderButtonText",value:function(e){switch(e){case"choose-file":return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:"file-signature"}),"Sign");case"signing":return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:"spinner",spin:!0}),"; Signing...");case"completed":return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:"download"}),"Sign");case"error":return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:"times"}),"Error");default:return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:"file-signature"}),"Sign")}}},{key:"render",value:function(){return r.a.createElement(y,{type:"button",onClick:this.props.uploadHandler,theme:this.props.color},this.renderButtonText(this.props.processState))}}]),t}(a.Component),E=n(23),S=n.n(E),O=n(33),k=n.n(O),C="#2f3640";function F(){var e=Object(p.a)(["\n  position: absolute;\n  top:0;\n  left:0;\n  height:300px;\n  width:100%\n  opacity:0\n  "]);return F=function(){return e},e}function T(){var e=Object(p.a)(["\n  font-family: 'Raleway', sans-serif;\n  font-weight:300;\n  font-size:1em;\n  color: ",";\n  margin-top:10px\n"]);return T=function(){return e},e}function I(){var e=Object(p.a)(["\n  height:300px;\n  width:50%\n  position:relative;\n  display:flex;\n  flex-direction:column\n  align-items:center;\n  justify-content:center;\n  flex-wrap:wrap;\n  border:2px dashed ",";\n  height:300px;\n  width:50%\n  border-color\n"]);return I=function(){return e},e}function B(){var e=Object(p.a)(["\n  grid-area: upload-area;\n  width:100%;\n  height:100%\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction:column;\n"]);return B=function(){return e},e}var N=f.a.form(B()),U=f.a.div(I(),function(e){return e.theme.color}),z=f.a.label(T(),function(e){return e.theme.color}),R=f.a.input(F()),A={processState:"error",color:"#e84118",fileIcon:"times-circle"},D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={selectedFile:{},loaded:-1,color:C,uploadText:"Upload your .csr file here",processState:"choose-file",fileIcon:"file-upload"},n.onUploadClick=n.onUploadClick.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getBtnColor",value:function(){switch(this.state.processState){case"choose-file":return{color:"#00a8ff"};case"uploading":return{color:"#fbc531"};case"completed":return{color:"#10ac84"};case"error":return{color:"#e84118"};default:return{color:"#00a8ff"}}}},{key:"onFileChange",value:function(e){this.resetState();var t=e.target.files[0];/([\d\D]+).csr/gi.test(t.name)?this.setState({selectedFile:e.target.files[0],uploadText:e.target.files[0].name,loaded:0}):(e.target.value=null,this.setState(Object(b.a)({},A,{uploadText:"You can only upload .csr files"})))}},{key:"upload",value:function(){var e=this,t=new FormData;void 0!==this.state.selectedFile?(this.setState({processState:"uploading",color:"#fbc531",fileIcon:"file-signature",uploadText:"Signing..."}),t.append("file",this.state.selectedFile),S.a.post("http://".concat("localhost",":8000/upload"),t).then(function(t){e.setState({processState:"completed",color:"#10ac84",uploadText:"Certificate has been signed, download it below",fileIcon:"check-circle",certName:t.data.fileName}),console.log(t)}).catch(function(t){console.log(t),e.setState(Object(b.a)({},A,{uploadText:"Failed to sign cert, please try again"})),document.getElementById("cert-uploader").reset(),console.log("Cert Failed to be signed.")})):this.setState(Object(b.a)({},A,{uploadText:"Please select/drag a file here"}))}},{key:"download",value:function(){var e=Object(g.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://".concat("localhost",":8000/signed?filename=").concat(this.state.certName));case 2:t=e.sent,k()(t.data,"signedCert.crt"),document.getElementById("cert-uploader").reset(),this.resetState();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"resetState",value:function(){this.setState({selectedFile:void 0,uploadText:"Upload your .csr file here",color:C,processState:"choose-file",fileIcon:"file-upload"})}},{key:"onUploadClick",value:function(){switch(this.state.processState){case"choose-file":this.upload();break;case"completed":this.download();break;case"error":this.resetState()}}},{key:"render",value:function(){return r.a.createElement(N,{method:"post",action:"#",id:"cert-uploader"},r.a.createElement(U,{theme:{color:this.state.color}},r.a.createElement(x.a,{icon:this.state.fileIcon,size:"2x",color:this.state.color}),r.a.createElement(z,{className:"uploadText",theme:{color:this.state.color}},this.state.uploadText),r.a.createElement(R,{type:"file",name:"file",onChange:this.onFileChange.bind(this)})),r.a.createElement(j,{uploadHandler:this.onUploadClick,processState:this.state.processState,color:this.getBtnColor()}))}}]),t}(a.Component),H=n(13),J=n(6);function W(){var e=Object(p.a)(['\n  display:grid;\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  height: 100%;\n  grid-template: 50px 100px 1fr / 1fr 80% 1fr;\n  grid-template-areas:\n  "l-pad c-pad r-pad"\n  "l-pad header r-pad"\n  "l-pad upload-area r-pad"\n']);return W=function(){return e},e}function L(){var e=Object(p.a)(["\n  grid-area: header;\n  font-family: 'Raleway', sans-serif;\n\n  display:flex;\n  flex-direction:column;\n  justify-content: center;\n  align-items:center;\n  text-align: center\n  .title{\n    font-weight:900;\n    font-size: 3em;\n    margin: 0px 5px\n  }\n  .subtitle{\n    font-size:1.5em\n    font-weight:700;\n    color: #576574;\n    margin: 0px 5px;\n  }\n\n"]);return L=function(){return e},e}H.b.add([J.d,J.c,J.e,J.f,J.b,J.a,J.g]);var P=f.a.div(L()),Y=f.a.div(W()),$=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={selectedFile:null,loaded:0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(P,null,r.a.createElement("h1",{className:"title"},"CSE CENTRAL"),r.a.createElement("p",{className:"subtitle"},"A SUTD Certificate Authority")),r.a.createElement(D,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.c183e099.chunk.js.map