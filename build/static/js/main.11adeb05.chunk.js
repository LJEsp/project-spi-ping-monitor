(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),m=a(7),c=a.n(m),r=(a(14),a(1)),i=a(2),l=a(4),d=a(3),u=a(5),s=(a(16),a(8)),E=a.n(s),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).p=new E.a,a.state={pingState:"-",pingData:"-"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.useUrl?this.p.ping(this.props.url,function(t,a){if(t)return e.setState({pingState:"DOWN",pingData:""});e.setState({pingState:"UP",pingData:a})}):this.p.ping("http://www.".concat(this.props.domain),function(t,a){if(t)return e.setState({pingState:"DOWN",pingData:""});e.setState({pingState:"UP",pingData:a})})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},this.props.domain)," ",n.a.createElement("span",{style:"DOWN"===this.state.pingState?{color:"red"}:{color:"green"}},this.state.pingState," "),this.state.pingData)}}]),t}(o.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,{domain:"google.com",url:"http://www.google.com",name:"Google"}),n.a.createElement(g,{domain:"facebook.com",url:"http://www.facebook.com",name:"Facebook"}),n.a.createElement(g,{domain:"github.com",url:"http://www.github.com",name:"Github"}),n.a.createElement(g,{domain:"tinypic.com",url:"http://www.tinypic.com",name:"TinyPic"}),n.a.createElement(g,{domain:"youtube.com",url:"http://www.youtube.com",name:"YouTube"}),n.a.createElement(g,{domain:"baidu.com",url:"http://www.baidu.com",name:"Baidu"}),n.a.createElement(g,{domain:"reddit.com"}),n.a.createElement(g,{domain:"yahoo.com"}),n.a.createElement(g,{domain:"qq.com\t"}),n.a.createElement(g,{domain:"taobao.com"}),n.a.createElement(g,{domain:"google.co.in"}),n.a.createElement(g,{domain:"amazon.com"}),n.a.createElement(g,{domain:"tmall.com",url:"https://www.tmall.com",useUrl:!0}),n.a.createElement(g,{domain:"sohu.com",url:"http://www.sohu.com",useUrl:!0}),n.a.createElement(g,{domain:"instagram.com"}),n.a.createElement(g,{domain:"vk.com"}),n.a.createElement(g,{domain:"live.com",url:"https://outlook.live.com/owa",useUrl:!0}),n.a.createElement(g,{domain:"jd.com"}),n.a.createElement(g,{domain:"sina.com.cn"}),n.a.createElement(g,{domain:"weibo.com"}),n.a.createElement(g,{domain:"yandex.ru"}),n.a.createElement(g,{domain:"360.cn"}),n.a.createElement(g,{domain:"google.co.jp"}),n.a.createElement(g,{domain:"google.co.uk"}),n.a.createElement(g,{domain:"list.tmall.com",url:"https://www.tmall.com",useUrl:!0}),n.a.createElement(g,{domain:"google.ru"}),n.a.createElement(g,{domain:"google.com.br"}),n.a.createElement(g,{domain:"netflix.com"}),n.a.createElement(g,{domain:"google.com.hk"}),n.a.createElement(g,{domain:"pornhub.com"}),n.a.createElement(g,{domain:"twitch.tv"}),n.a.createElement(g,{domain:"google.fr"}),n.a.createElement(g,{domain:"linkedin.com"}),n.a.createElement(g,{domain:"yahoo.co.jp"}),n.a.createElement(g,{domain:"t.co",url:"http://t.co",useUrl:!0}),n.a.createElement(g,{domain:"csdn.net",url:"https://www.csdn.net",useUrl:!0}),n.a.createElement(g,{domain:"microsoft.com"}),n.a.createElement(g,{domain:"bing.com"}),n.a.createElement(g,{domain:"office.com",url:"https://www.office.com",useUrl:!0}),n.a.createElement(g,{domain:"ebay.com"}),n.a.createElement(g,{domain:"google.it"}),n.a.createElement(g,{domain:"google.ca"}),n.a.createElement(g,{domain:"mail.ru"}),n.a.createElement(g,{domain:"ok.ru"}),n.a.createElement(g,{domain:"google.es"}),n.a.createElement(g,{domain:"msn.com"}),n.a.createElement(g,{domain:"google.com.tr"}),n.a.createElement(g,{domain:"google.com.au"}),n.a.createElement(g,{domain:"whatsapp.com"}),n.a.createElement(g,{domain:"spotify.com"}),n.a.createElement(g,{domain:"google.pl"}),n.a.createElement(g,{domain:"google.co.id"}),n.a.createElement(g,{domain:"xhamster.com"}),n.a.createElement(g,{domain:"google.com.ar"}),n.a.createElement(g,{domain:"xnxx.com",url:"https://www.xnxx.com",useUrl:!0}),n.a.createElement(g,{domain:"google.co.th"}),n.a.createElement(g,{domain:"Naver.com"}),n.a.createElement(g,{domain:"sogou.com"}),n.a.createElement(g,{domain:"samsung.com",url:"https://www.samsung.com/ph",useUrl:!0}),n.a.createElement(g,{domain:"accuweather.com"}),n.a.createElement(g,{domain:"goo.gl"}),n.a.createElement(g,{domain:"sm.cn"}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.11adeb05.chunk.js.map