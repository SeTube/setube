(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-29da5462"],
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
                }, [t._v("")]), t._v(" " + t._s(t.en2zh[t.tab]) + "片库 ")])], 1), t._l(t.d, (function (a, i) {
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
                    }, [t._v(" 更多 "), e("i", {
                        staticClass: "iconfont more_i"
                    }, [t._v("")])])], 1), e("VodBlock", {
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
                                movie: "电影",
                                teleplay: "连续剧",
                                show: "综艺",
                                cartoon: "动漫",
                                bomb: "福利区"
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
                            return "show" === t.tab && (a = "综艺"), a
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
                                t.isLoading = !1, t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        getType: function () {
                            var t = this;
                            return "bomb" === t.tab ? 20 : t.tabList.indexOf(t.tab)
                        }
                    }
                }),
                m = f,
                l = (e("4f4c"), e("2877")),
                b = Object(l["a"])(m, i, s, !1, null, "cc117956", null);
            a["a"] = b.exports
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
                            imgs: [""],//广告
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
        def6: function (t, a, e) {
            "use strict";
            e.r(a);
            var i = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "movie"
                }, [e("Header", {
                    attrs: {
                        tab: "movie"
                    }
                }), e("VideoList", {
                    attrs: {
                        tab: "movie"
                    }
                }), e("Back2Top"), e("Footer", {
                    attrs: {
                        tab: "movie"
                    }
                })], 1)
            },
                s = [],
                o = e("8bbf"),
                p = e.n(o),
                n = e("c96a"),
                c = e("fd2d"),
                r = e("0418"),
                d = e("0d52"),
                f = p.a.extend({
                    name: "Movie",
                    props: {
                        msg: String
                    },
                    data: function () {
                        return {}
                    },
                    methods: {},
                    components: {
                        Footer: c["a"],
                        Back2Top: n["a"],
                        Header: r["a"],
                        VideoList: d["a"]
                    }
                }),
                m = f,
                l = e("2877"),
                b = Object(l["a"])(m, i, s, !1, null, "023508ba", null);
            a["default"] = b.exports
        },
        fae9: function (t, a, e) { }
    }]);