/* eslint-disable max-len */
import { optionYandexMetrika } from "@/src/components/globals/Cookie/Cookie";

const isMetricsEnabled = process.env.NEXT_PUBLIC_METRICS_ENABLED === `true`;

export const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export const yMetricScript = `
  (function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    var z = null;m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  var isCookieAccept = document.cookie.includes('cookieAccept=true');

  if (${isMetricsEnabled} && isCookieAccept) {
    ym(${yandexId}, "init", ${JSON.stringify(optionYandexMetrika)})
  }
`;

export const gosUslugiScript = `
  (function(){
    "use strict";

    function ownKeys(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        if (t) n = n.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        });

        o.push.apply(o, n)
      }
      return o
    }

    function _objectSpread(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        if (t % 2) ownKeys(Object(o), true).forEach(function(t) {
          _defineProperty(e, t, o[t])
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(e, Object.getOwnPropertyDescriptors(o));
        else ownKeys(Object(o)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
        })
      }
      return e
    }

    function _defineProperty(e, t, o) {
      if (t in e) Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
      else e[t] = o;
      return e
    }

    var POS_PREFIX_2 = "--pos-banner-fluid-2__",
      posOptionsInitial = {
        "grid-template-columns": "100%",
        "grid-template-rows": "310px auto",
        "decor-grid-column": "initial",
        "decor-grid-row": "initial",
        "decor-padding": "30px 30px 0 30px",
        "bg-url": "url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')",
        "bg-position": "calc(10% + 64px) calc(100% - 20px)",
        "bg-size": "cover",
        "content-padding": "0 30px 30px 30px",
        "slogan-font-size": "20px",
        "slogan-line-height": "32px",
        "logo-wrap-padding": "20px 30px 30px 40px",
        "logo-wrap-top": "0",
        "logo-wrap-bottom": "initial",
        "logo-wrap-border-radius": "0 0 0 80px"
      },
      setStyles = function(e, t) {
        Object.keys(e).forEach(function(o) {
          t.style.setProperty(POS_PREFIX_2 + o, e[o])
        })
      },
      removeStyles = function(e, t) {
        Object.keys(e).forEach(function(e) {
          t.style.removeProperty(POS_PREFIX_2 + e)
        })
      };

      function changePosBannerOnResize() {
        var e = document.documentElement,
          t = _objectSpread({}, posOptionsInitial),
          o = document.getElementById("js-show-iframe-wrapper"),
          n = o ? o.offsetWidth : document.body.offsetWidth;

        if (n > 405) t["slogan-font-size"] = "24px", t["logo-wrap-padding"] = "30px 50px 30px 70px";
        if (n > 500) t["grid-template-columns"] = "min-content 1fr", t["grid-template-rows"] = "100%", t["decor-grid-column"] = "2", t["decor-grid-row"] = "1", t["decor-padding"] = "30px 30px 30px 0", t["content-padding"] = "30px", t["bg-position"] = "0% calc(100% - 70px)", t["logo-wrap-padding"] = "30px 30px 24px 40px", t["logo-wrap-top"] = "initial", t["logo-wrap-bottom"] = "0", t["logo-wrap-border-radius"] = "80px 0 0 0";
        if (n > 585) t["bg-position"] = "0% calc(100% - 6px)";
        if (n > 800) t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg')", t["bg-position"] = "0% center";
        if (n > 1020) t["slogan-font-size"] = "32px", t["line-height"] = "40px", t["logo-wrap-padding"] = "30px 30px 24px 50px";
        
        setStyles(t, e)
      }

      changePosBannerOnResize();
      window.addEventListener("resize", changePosBannerOnResize);
      window.addEventListener("pagehide", function () {
        var e = document.documentElement;
        window.removeEventListener("resize", changePosBannerOnResize);
        removeStyles(posOptionsInitial, e);
      });
  })()
`;
