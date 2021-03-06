(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1c04a1b4"],
    {
        "0d52": function (t, a, e) {
            "use strict";
            var i = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "container "
                }, [e("van-pull-refresh", {
                    attrs: {
                        "head-height": 60
                    },
                    on: {
                        refresh: t.onRefresh
                    },
                    model: {
                        value: t.isLoading,
                        callback: function (a) {
                            t.isLoading = a
                        },
                        expression: "isLoading"
                    }
                }, [e("AdImage", {
                    attrs: {
                        tab: "88spa-category"
                    }
                }), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "bomb" !== t.tab,
                        expression: "tab !== 'bomb'"
                    }],
                    staticClass: "pannel clearfix"
                }, [e("div", {
                    staticClass: "type_list_menu"
                }, [e("ul", {
                    staticClass: "clearfix"
                }, [e("li", {
                    staticClass: "type_all"
                }, [e("router-link", {
                    attrs: {
                        to: "/vod?typeName=" + t.en2zh[t.tab]
                    }
                }, [e("i", {
                    staticClass: "iconfont vtop_i"
                }, [t._v("ξ")]), t._v(" " + t._s(t.en2zh[t.tab]) + "ηεΊ ")])], 1), t._l(t.d, (function (a, i) {
                    return e("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: i > 0,
                            expression: "k > 0"
                        }],
                        key: i
                    }, [e("router-link", {
                        attrs: {
                            to: "/vod?typeName=" + t.en2zh[t.tab] + "&type=" + a.ID + "&class=" + a.Name
                        }
                    }, [t._v(" " + t._s(a.Name + t.postfix) + " ")])], 1)
                }))], 2)])]), e("div", {
                    staticClass: "vod_row tit_up"
                }, [e("div", {
                    staticClass: "pannel clearfix",
                    staticStyle: {
                        display: "block"
                    },
                    attrs: {
                        id: "vod_level"
                    }
                }, t._l(t.d, (function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "pannel clearfix"
                    }, [e("div", {
                        staticClass: "pannel_head clearfix"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(a.Name))]), e("router-link", {
                        staticClass: "text_muted pull_left",
                        attrs: {
                            to: "/vod?type=" + a.ID + "&typeName=" + t.en2zh[t.tab] + "&class=" + a.Name
                        }
                    }, [t._v(" ζ΄ε€ "), e("i", {
                        staticClass: "iconfont more_i"
                    }, [t._v("ξ£")])])], 1), e("VodBlock", {
                        attrs: {
                            vodList: a.Items
                        }
                    })], 1)
                })), 0)])], 1)], 1)
            },
                s = [],
                o = (e("c975"), e("8bbf")),
                p = e.n(o),
                n = e("cebe"),
                c = e.n(n),
                r = e("bee7"),
                d = e("5373"),
                f = p.a.extend({
                    name: "VideoList",
                    props: {
                        tab: String
                    },
                    components: {
                        AdImage: r["a"],
                        VodBlock: d["a"]
                    },
                    data: function () {
                        return {
                            d: [],
                            isLoading: !1,
                            tabList: ["", "movie", "teleplay", "show", "cartoon", "bomb"],
                            en2zh: {
                                movie: "η΅ε½±",
                                teleplay: "θΏη»­ε§",
                                show: "η»ΌθΊ",
                                cartoon: "ε¨ζΌ«",
                                bomb: "η¦ε©εΊ"
                            },
                            movieNameId: {}
                        }
                    },
                    mounted: function () {
                        var t = this;
                        t.fetchData()
                    },
                    computed: {
                        postfix: function () {
                            var t = this,
                                a = "";
                            return "show" === t.tab && (a = "η»ΌθΊ"), a
                        }
                    },
                    methods: {
                        onRefresh: function () {
                            var t = this;
                            t.d = [], t.fetchData()
                        },
                        fetchData: function () {
                            var t = this;
                            c.a.get("/v1/list-by-type?type=".concat(t.getType()), {
                                timeout: 1e4
                            }).then((function (a) {
                                t.isLoading = !1, t.d = a.data.data
                            }), (function (a) {
                                t.isLoading = !1, t.$api.Toast("η½η»ιθ――οΌθ―·ιθ―!")
                            }))
                        },
                        getType: function () {
                            var t = this;
                            return "bomb" === t.tab ? 20 : t.tabList.indexOf(t.tab)
                        }
                    }
                }),
                l = f,
                m = (e("4f4c"), e("2877")),
                b = Object(m["a"])(l, i, s, !1, null, "cc117956", null);
            a["a"] = b.exports
        },
        "3f60": function (t, a, e) {
            "use strict";
            e.r(a);
            var i = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "cartoon"
                }, [e("Header"), e("VideoList", {
                    attrs: {
                        tab: "cartoon"
                    }
                }), e("Back2Top"), e("Footer", {
                    attrs: {
                        tab: "cartoon"
                    }
                })], 1)
            },
                s = [],
                o = e("8bbf"),
                p = e.n(o),
                n = e("fd2d"),
                c = e("c96a"),
                r = e("0418"),
                d = e("0d52"),
                f = p.a.extend({
                    name: "Cartoon",
                    props: {
                        msg: String
                    },
                    components: {
                        Back2Top: c["a"],
                        Footer: n["a"],
                        Header: r["a"],
                        VideoList: d["a"]
                    }
                }),
                l = f,
                m = e("2877"),
                b = Object(m["a"])(l, i, s, !1, null, "9e290ac0", null);
            a["default"] = b.exports
        },
        "4f4c": function (t, a, e) {
            "use strict";
            var i = e("fae9"),
                s = e.n(i);
            s.a
        },
        bee7: function (t, a, e) {
            "use strict";
            var i = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return t.curImg ? e("div", {
                    staticStyle: {
                        "text-align": "center",
                        padding: "10px"
                    }
                }, [e("a", {
                    attrs: {
                        rel: "nofollow"
                    },
                    on: {
                        click: function (a) {
                            return t.openAdUrl()
                        }
                    }
                }, [e("img", {
                    staticStyle: {
                        "max-width": "100%"
                    },
                    attrs: {
                        referrerpolicy: "no-referrer",
                        src: t.curImg
                    }
                })])]) : t._e()
            },
                s = [],
                o = (e("c975"), e("8bbf")),
                p = e.n(o),
                n = p.a.extend({
                    name: "AdImage",
                    props: {
                        tab: String
                    },
                    data: function () {
                        return {
                            imgs: [""],//εΉΏε
                            adUrl: this.$config.adUrl,
                            curImg: ""
                        }
                    },
                    created: function () {
                        var t = this;
                        t.curImg = t.imgs[Math.round(Math.random() * (t.imgs.length - 1))]
                    },
                    computed: {},
                    methods: {
                        openAdUrl: function () {
                            var t = this,
                                a = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1;
                            a ? window.openAd(t.adUrl) : window.open(t.adUrl)
                        }
                    }
                }),
                c = n,
                r = e("2877"),
                d = Object(r["a"])(c, i, s, !1, null, null, null);
            a["a"] = d.exports
        },
        fae9: function (t, a, e) { }
    }]);