(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6736)}])},6736:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return T}});var r=i(5893),l=i(7294),n=i(1953),o=i(562),a=i(9144),e=i(9072),c=i(9630),u=i(5214),p=i(748),x=i(8114),b=i(918),g=i(6563),h=i(2761),m=i(3343),f=i(5400);function d(t){let{handleSearch:s,clearSearch:i,placeholder:n}=t,[a,e]=(0,l.useState)(""),c=l.useRef(t=>{s(t)}).current,u=(0,l.useMemo)(()=>(0,f.Z)(c,300),[c]),p=()=>{e(""),i()},x=t=>{e(t.target.value),u(t.target.value)};return(0,r.jsxs)(b.Z,{component:"form",elevation:0,sx:{width:"100%",p:1,my:2,display:"flex",alignItems:"center"},onSubmit(t){t.preventDefault(),c(a)},children:[(0,r.jsx)(o.Z,{"aria-label":"clear-button",onClick:p,children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(g.ZP,{autoFocus:!0,sx:{ml:1,flex:1,backgroundColor:"paper.main",p:1},placeholder:n,inputProps:{"aria-label":"search-input"},value:a,onChange:t=>x(t)}),(0,r.jsx)(o.Z,{type:"submit",onClick:()=>c(a),sx:{p:1,bgcolor:"primary.dark",color:"common.white","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}},"aria-label":"search-button",children:(0,r.jsx)(h.Z,{})})]})}var k=i(391),y=i(1944),j=i(2841),Z=i(5343),v=i(4535),S=i(6215);let C=["any","attrset","list","string","bool","int"],L=t=>{let{label:s,handleChange:i,options:a}=t,[e,c]=l.useState("any"),u=t=>{let s=t.target.value;c(s),i(s)},p=()=>{c("any"),i("any")};return(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)(v.Z,{children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(o.Z,{"aria-label":"clear-button",onClick:p,children:(0,r.jsx)(m.Z,{})}),s]})}),(0,r.jsx)(y.Z,{sx:{pl:1.5},value:e,onChange:u,children:a.map(t=>{let{value:s,label:i}=t;return(0,r.jsx)(j.Z,{value:s,control:(0,r.jsx)(k.Z,{}),label:i},s)})})]})};function w(t){let{items:s,pageCount:i=1,handleSearch:o,handleFilter:b,preview:g}=t,[h,m]=(0,l.useState)(1),[f,k]=(0,l.useState)(""),y=(t,s)=>{m(s)},j=(t,s)=>{b(t,s),m(1)},Z=t=>{o&&o(t),k(t),m(1)};return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d,{placeholder:"search nix functions",handleSearch:Z,clearSearch:()=>Z("")}),(0,r.jsx)(n.Z,{children:(0,r.jsxs)(e.ZP,{container:!0,children:[(0,r.jsx)(e.ZP,{item:!0,xs:12,lg:3,children:(0,r.jsxs)(a.Z,{direction:"row",children:[(0,r.jsx)(L,{label:"from type",handleChange(t){j(t,"from")},options:C.map(t=>({value:t,label:t}))}),(0,r.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(L,{label:"to type",handleChange(t){j(t,"to")},options:C.map(t=>({value:t,label:t}))})]})}),(0,r.jsx)(e.ZP,{item:!0,xs:12,lg:9,children:g})]})}),(0,r.jsx)(u.Z,{"aria-label":"basic-list",sx:{pt:0},children:s.map(t=>{let{item:s,key:i}=t;return(0,r.jsx)(p.ZP,{"aria-label":"item-".concat(i),sx:{px:0},children:s},i)})}),(0,r.jsx)(x.Z,{sx:{display:"flex",justifyContent:"center",mt:1,mb:10},count:i,color:"primary",page:h,onChange:y})]})}var P=i(4548);function _(t){let{name:s,info:i,selected:l}=t;return(0,r.jsx)(b.Z,{elevation:0,sx:{display:"flex",justifyContent:"left",px:2,py:1,color:l?"primary.main":void 0,borderColor:l?"action.selected":"none",borderWidth:1,borderStyle:l?"solid":"none"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(P.Z,{primary:s,secondary:i["attr-path"]}),(0,r.jsx)(c.Z,{children:"".concat(i.from," -> ").concat(i.to," ")})]})})}var E=i(9901),A=i(7825),D=i(8346),N=i(7373),z=i(3219),B=i(7302);let F=t=>{let{func:s}=t;return(0,r.jsxs)(n.Z,{sx:{p:1,width:"100%"},children:[(0,r.jsx)(c.Z,{variant:"h2",children:s.name}),(0,r.jsxs)(u.Z,{sx:{width:"100%"},children:[(0,r.jsxs)(p.ZP,{children:[(0,r.jsx)(E.Z,{children:(0,r.jsx)(N.Z,{})}),(0,r.jsx)(P.Z,{primary:s.info["attr-path"],secondary:s.info["doc-url"]}),(0,r.jsx)(A.Z,{children:(0,r.jsx)(D.Z,{href:s.info["doc-url"],children:"View Docs"})})]}),(0,r.jsxs)(p.ZP,{children:[(0,r.jsx)(E.Z,{children:(0,r.jsx)(z.Z,{})}),(0,r.jsx)(P.Z,{primary:s.info.from,secondary:"argument type"})]}),(0,r.jsxs)(p.ZP,{children:[(0,r.jsx)(E.Z,{children:(0,r.jsx)(B.Z,{})}),(0,r.jsx)(P.Z,{primary:s.info.to,secondary:"return type"})]}),(0,r.jsx)(p.ZP,{})]})]})},M=Object.entries({mapAttrs:{"attr-path":"builtins.mapAttrs","doc-url":"https://nixos.org/manual/nix/stable/language/builtins.html#builtins-mapAttrs",source:"builtin",from:"attrset",to:"attrset"},"mapAttrs'":{"attr-path":"lib.mapAttrs'","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-attrset",source:"nixpkgs",from:"attrset",to:"attrset"},genAttrs:{"attr-path":"lib.genAttrs","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-attrset",source:"nixpkgs",from:"list",to:"attrset"},forEach:{"attr-path":"lib.forEach","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},foldr:{"attr-path":"lib.foldr","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"any"},foldl:{"attr-path":"lib.foldl","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"any"},"foldl'":{"attr-path":"lib.foldl'","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"any"},imap0:{"attr-path":"lib.imap0","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},imap1:{"attr-path":"lib.imap1","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},concatMap:{"attr-path":"lib.concatMap","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},flatten:{"attr-path":"lib.flatten","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},remove:{"attr-path":"lib.remove","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},findSingle:{"attr-path":"lib.findSingle","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"any"},findFirst:{"attr-path":"lib.findFirst","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"any"},any:{"attr-path":"lib.any","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"bool"},all:{"attr-path":"lib.all","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"bool"},count:{"attr-path":"lib.count","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"int"},optional:{"attr-path":"lib.optional","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"bool",to:"list"},optionals:{"attr-path":"lib.optionals","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"bool",to:"list"},toList:{"attr-path":"lib.toList","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"any",to:"list"},toString:{"attr-path":"builtins.toString'","doc-url":"https://nixos.org/manual/nix/stable/language/builtins.html#builtins-toString",source:"builtin",from:"any",to:"string"},range:{"attr-path":"lib.range","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"int",to:"list"},partition:{"attr-path":"lib.partition","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},"groupBy'":{"attr-path":"lib.groupBy'","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},groupBy:{"attr-path":"lib.groupBy","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},zipListsWith:{"attr-path":"lib.zipListsWith","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},zipLists:{"attr-path":"lib.zipLists","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},reverseList:{"attr-path":"lib.reverseList","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},listDfs:{"attr-path":"lib.listDfs","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"attrset"},toposort:{"attr-path":"lib.toposort","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},sort:{"attr-path":"lib.sort","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},compareLists:{"attr-path":"lib.compareLists","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"int"},naturalSort:{"attr-path":"lib.naturalSort","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},take:{"attr-path":"lib.take","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},sublist:{"attr-path":"lib.sublist","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},last:{"attr-path":"lib.last","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"any"},init:{"attr-path":"lib.init","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},crossLists:{"attr-path":"lib.crossLists","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},unique:{"attr-path":"lib.unique","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},intersectLists:{"attr-path":"lib.intersectLists","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},subtractLists:{"attr-path":"lib.subtractLists","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"list"},mutuallyExclusive:{"attr-path":"lib.mutuallyExclusive","doc-url":"https://nixos.org/manual/nixpkgs/stable/#sec-functions-library-lists",source:"nixpkgs",from:"list",to:"bool"}}).map(t=>{let[s,i]=t;return{name:s,info:i}}),O=function(){for(var t=arguments.length,s=Array(t),i=0;i<t;i++)s[i]=arguments[i];return t=>s.reduce((t,s)=>s(t),t)},W=t=>s=>s.filter(s=>Object.values(s).some(s=>{let i=s.toString();return i.toLowerCase().includes(t.toLocaleLowerCase())})),q=(t,s)=>i=>i.filter(i=>{let{info:r}=i;return s.includes(r.from)&&t.includes(r.to)});function T(){let[t,s]=(0,l.useState)(null),[i,o]=(0,l.useState)(""),[a,e]=(0,l.useState)(C),[c,u]=(0,l.useState)(C),p=t=>{s(s=>s===t?null:t)},x=(0,l.useMemo)(()=>O(q(a,c),W(i))(M),[a,c,i]),b=t=>{o(t)},g=(t,s)=>{let i;i="any"===t?C:[t],"from"===s&&u(i),"to"===s&&e(i)},h=x.map(s=>{let{name:i,info:l}=s;return{item:(0,r.jsx)(n.Z,{sx:{width:"100%",height:"100%"},onClick:()=>p(i),children:(0,r.jsx)(_,{name:i,info:l,selected:t===i})}),key:i}}),m=(0,r.jsx)(F,{func:M.find(s=>s.name===t)||M[0]});return(0,r.jsx)(n.Z,{sx:{ml:2},children:(0,r.jsx)(w,{items:h,handleSearch:b,handleFilter:g,preview:t?m:null})})}}},function(t){t.O(0,[427,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);