import React, { Component } from "react";
import "./App.css";
import PingItem from "./components/ping-item/ping-item";

class App extends Component {
  render() {
    return (
      <div>
        <PingItem
          domain="google.com"
          url="http://www.google.com"
          name="Google"
        />
        <PingItem
          domain="facebook.com"
          url="http://www.facebook.com"
          name="Facebook"
        />
        <PingItem
          domain="github.com"
          url="http://www.github.com"
          name="Github"
        />
        <PingItem
          domain="tinypic.com"
          url="http://www.tinypic.com"
          name="TinyPic"
        />
        <PingItem
          domain="youtube.com"
          url="http://www.youtube.com"
          name="YouTube"
        />
        <PingItem domain="baidu.com" url="http://www.baidu.com" name="Baidu" />
        <PingItem domain="reddit.com" />
        <PingItem domain="yahoo.com" />
        <PingItem domain="qq.com	" />
        <PingItem domain="taobao.com" />
        <PingItem domain="google.co.in" />
        <PingItem domain="amazon.com" />
        <PingItem domain="tmall.com" url="https://www.tmall.com" useUrl />
        <PingItem domain="sohu.com" url="http://www.sohu.com" useUrl />
        <PingItem domain="instagram.com" />
        <PingItem domain="vk.com" />
        <PingItem
          domain="live.com"
          url="https://outlook.live.com/owa"
          useUrl
        />
        <PingItem domain="jd.com" />
        <PingItem domain="sina.com.cn" />
        <PingItem domain="weibo.com" />
        <PingItem domain="yandex.ru" />
        <PingItem domain="360.cn" />
        <PingItem domain="google.co.jp" />
        <PingItem domain="google.co.uk" />
        <PingItem domain="list.tmall.com" url="https://www.tmall.com" useUrl />
        <PingItem domain="google.ru" />
        <PingItem domain="google.com.br" />
        <PingItem domain="netflix.com" />
        <PingItem domain="google.com.hk" />
        <PingItem domain="pornhub.com" />
        <PingItem domain="twitch.tv" />
        <PingItem domain="google.fr" />
        <PingItem domain="linkedin.com" />
        <PingItem domain="yahoo.co.jp" />
        <PingItem domain="t.co" url="http://t.co" useUrl />
        <PingItem domain="csdn.net" url="https://www.csdn.net" useUrl />
        <PingItem domain="microsoft.com" />
        <PingItem domain="bing.com" />
        <PingItem domain="office.com" url="https://www.office.com" useUrl />
        <PingItem domain="ebay.com" />
        <PingItem domain="google.it" />
        <PingItem domain="google.ca" />
        <PingItem domain="mail.ru" />
        <PingItem domain="ok.ru" />
        <PingItem domain="google.es" />
        <PingItem domain="msn.com" />
        <PingItem domain="google.com.tr" />
        <PingItem domain="google.com.au" />
        <PingItem domain="whatsapp.com" />
        <PingItem domain="spotify.com" />
        <PingItem domain="google.pl" />
        <PingItem domain="google.co.id" />
        <PingItem domain="xhamster.com" />
        <PingItem domain="google.com.ar" />
        <PingItem domain="xnxx.com" url="https://www.xnxx.com" useUrl />
        <PingItem domain="google.co.th" />
        <PingItem domain="Naver.com" />
        <PingItem domain="sogou.com" />
        <PingItem domain="samsung.com" url="https://www.samsung.com/ph" useUrl />
        <PingItem domain="accuweather.com" />
        <PingItem domain="goo.gl" />
        <PingItem domain="sm.cn" />
      </div>
    );
  }
}

export default App;
