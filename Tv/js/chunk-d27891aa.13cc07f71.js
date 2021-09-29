(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-d27891aa"],
    {
        "1dde": function (t, e, a) {
            var o = a("d039"),
                i = a("b622"),
                s = a("60ae"),
                n = i("species");
            t.exports = function (t) {
                return s >= 51 || !o((function () {
                    var e = [],
                        a = e.constructor = {};
                    return a[n] = function () {
                        return {
                            foo: 1
                        }
                    }, 1 !== e[t](Boolean).foo
                }))
            }
        },
        3283: function (t, e, a) {
            "use strict";
            var o = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("ul", {
                    staticClass: "vodlist vodlist_sh list_scroll clearfix"
                }, t._l(t.vodList, (function (e, o) {
                    return a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.VodID != t.id,
                            expression: "i.VodID != id"
                        }],
                        key: o,
                        class: t.hightImage ? "vodlist_item vodlist_item_height num_1" : "vodlist_item num_1"
                    }, [a("a", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy:background-image",
                            value: e.VodPic,
                            expression: "i.VodPic",
                            arg: "background-image"
                        }],
                        class: t.hightImage ? "vodlist_thumb boxload vodlist_thumb_height" : "vodlist_thumb boxload",
                        on: {
                            click: function (a) {
                                return t.newDetail(e.VodID)
                            }
                        }
                    }, [e.VodRemarks ? a("span", {
                        staticClass: "pic_text text_right"
                    }, [t._v(t._s(e.VodRemarks))]) : t._e()]), a("div", {
                        staticClass: "vodlist_titbox"
                    }, [a("p", {
                        staticClass: "vodlist_title"
                    }, [a("a", {
                        attrs: {
                            title: e.VodName
                        },
                        on: {
                            click: function (a) {
                                return t.newDetail(e.VodID)
                            }
                        }
                    }, [t._v(t._s(e.VodName))])]), e.VodActor ? a("p", {
                        staticClass: "vodlist_sub"
                    }, [t._v(t._s(e.VodActor.replace(/,/g, " ")))]) : a("p", {
                        staticClass: "vodlist_sub"
                    }, [t._v("未知")])])])
                })), 0)
            },
                i = [],
                s = a("8bbf"),
                n = a.n(s),
                r = n.a.extend({
                    name: "HorizontalList",
                    props: {
                        vodList: Array,
                        showOthers: {
                            type: Boolean,
                            default:
                                !1
                        },
                        hightImage: {
                            type: Boolean,
                            default:
                                !1
                        }
                    },
                    methods: {
                        newDetail: function (t) {
                            this.$emit("newDetail", t)
                        }
                    }
                }),
                c = r,
                l = (a("7acf"), a("2877")),
                d = Object(l["a"])(c, o, i, !1, null, "f9206076", null);
            e["a"] = d.exports
        },
        3826: function (t, e, a) {
            "use strict";
            var o = a("db60"),
                i = a.n(o);
            i.a
        },
        "4e82": function (t, e, a) {
            "use strict";
            var o = a("23e7"),
                i = a("1c0b"),
                s = a("7b0b"),
                n = a("d039"),
                r = a("b301"),
                c = [],
                l = c.sort,
                d = n((function () {
                    c.sort(void 0)
                })),
                u = n((function () {
                    c.sort(null)
                })),
                p = r("sort"),
                f = d || !u || p;
            o({
                target: "Array",
                proto: !0,
                forced: f
            }, {
                sort: function (t) {
                    return void 0 === t ? l.call(s(this)) : l.call(s(this), i(t))
                }
            })
        },
        "65f0": function (t, e, a) {
            var o = a("861d"),
                i = a("e8b5"),
                s = a("b622"),
                n = s("species");
            t.exports = function (t, e) {
                var a;
                return i(t) && (a = t.constructor, "function" != typeof a || a !== Array && !i(a.prototype) ? o(a) && (a = a[n], null === a && (a = void 0)) : a = void 0), new (void 0 === a ? Array : a)(0 === e ? 0 : e)
            }
        },
        "7acf": function (t, e, a) {
            "use strict";
            var o = a("7b70"),
                i = a.n(o);
            i.a
        },
        "7b70": function (t, e, a) { },
        8418: function (t, e, a) {
            "use strict";
            var o = a("c04e"),
                i = a("9bf2"),
                s = a("5c6c");
            t.exports = function (t, e, a) {
                var n = o(e);
                n in t ? i.f(t, n, s(0, a)) : t[n] = a
            }
        },
        "99af": function (t, e, a) {
            "use strict";
            var o = a("23e7"),
                i = a("d039"),
                s = a("e8b5"),
                n = a("861d"),
                r = a("7b0b"),
                c = a("50c4"),
                l = a("8418"),
                d = a("65f0"),
                u = a("1dde"),
                p = a("b622"),
                f = a("60ae"),
                v = p("isConcatSpreadable"),
                h = 9007199254740991,
                m = "Maximum allowed index exceeded",
                y = f >= 51 || !i((function () {
                    var t = [];
                    return t[v] = !1, t.concat()[0] !== t
                })),
                g = u("concat"),
                b = function (t) {
                    if (!n(t)) return !1;
                    var e = t[v];
                    return void 0 !== e ? !!e : s(t)
                },
                _ = !y || !g;
            o({
                target: "Array",
                proto: !0,
                forced: _
            }, {
                concat: function (t) {
                    var e, a, o, i, s, n = r(this),
                        u = d(n, 0),
                        p = 0;
                    for (e = -1, o = arguments.length; e < o; e++) if (s = -1 === e ? n : arguments[e], b(s)) {
                        if (i = c(s.length), p + i > h) throw TypeError(m);
                        for (a = 0; a < i; a++, p++) a in s && l(u, p, s[a])
                    } else {
                        if (p >= h) throw TypeError(m);
                        l(u, p++, s)
                    }
                    return u.length = p, u
                }
            })
        },
        "9f52": function (t, e, a) {
            "use strict";
            a.r(e);
            var o = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "details"
                }, [a("Header", {
                    attrs: {
                        tab: "details",
                        isDetail: !0,
                        bg: t.vod.VodPic
                    },
                    on: {
                        newDetail: t.newDetail
                    }
                }), a("van-pull-refresh", {
                    attrs: {
                        "head-height": 60
                    },
                    on: {
                        refresh: t.onRefresh
                    },
                    model: {
                        value: t.isLoading,
                        callback: function (e) {
                            t.isLoading = e
                        },
                        expression: "isLoading"
                    }
                }, [a("div", {
                    staticClass: "hot_banner "
                }, [a("div", {
                    staticClass: "bgi_box"
                }, [a("span", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy:background-image",
                        value: t.vod.VodPic,
                        expression: "vod.VodPic",
                        arg: "background-image"
                    }],
                    staticClass: "bgi",
                    staticStyle: {
                        background: "#000",
                        opacity: "0.6"
                    }
                })]), a("div", {
                    staticClass: "detail_list_box"
                }, [a("div", {
                    staticClass: "detail_list"
                }, [a("div", {
                    staticClass: "content_box clearfix flexcolumn"
                }, [a("div", {
                    staticClass: "flexrow"
                }, [a("div", {
                    staticClass: "content_thumb"
                }, [a("a", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy:background-image",
                        value: t.vod.VodPic,
                        expression: "vod.VodPic",
                        arg: "background-image"
                    }],
                    staticClass: "vodlist_thumb lazyload"
                })]), a("div", {
                    staticClass: "flexcolumn vod-detail"
                }, [a("div", {
                    staticClass: "content_detail content_top"
                }, [a("div", {
                    staticClass: "pannel_head clearfix"
                }, [a("span", {
                    staticClass: "text_muted pull_right"
                }, [a("a", {
                    staticClass: "open-share",
                    on: {
                        click: t.openShare
                    }
                }, [a("i", {
                    staticClass: "iconfont shaixuan_i"
                }, [t._v("")]), t._v(" 分享")])]), a("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.vod.VodName))])]), a("div", {
                    staticClass: "fn-clear",
                    attrs: {
                        id: "detail_rating"
                    }
                }, [a("div", {
                    staticClass: "fn-left",
                    attrs: {
                        id: "rating",
                        "data-mid": "1",
                        "data-id": "34861",
                        "data-score": "5"
                    }
                }, [t.vod.VodScore ? a("span", {
                    staticClass: "star_tips"
                }, [t._v(t._s(t.vod.VodScore) + ".0")]) : t._e(), a("ul", {
                    staticClass: "rating-s"
                }, [a("li", {
                    staticClass: "one",
                    class: {
                        "current active-b": t.vod.VodScore > 0,
                        active: t.vod.VodScore > 1
                    },
                    attrs: {
                        title: "很差"
                    }
                }, [t._v(" 很差 ")]), a("li", {
                    staticClass: "two",
                    class: {
                        "current active-b": t.vod.VodScore > 2,
                        active: t.vod.VodScore > 3
                    },
                    attrs: {
                        title: "较差"
                    }
                }, [t._v(" 较差 ")]), a("li", {
                    staticClass: "three",
                    class: {
                        "current active-b": t.vod.VodScore > 4,
                        active: t.vod.VodScore > 5
                    },
                    attrs: {
                        title: "还行"
                    }
                }, [t._v(" 还行 ")]), a("li", {
                    staticClass: "four",
                    class: {
                        "current active-b": t.vod.VodScore > 6,
                        active: t.vod.VodScore > 7
                    },
                    attrs: {
                        title: "推荐"
                    }
                }, [t._v(" 推荐 ")]), a("li", {
                    staticClass: "five",
                    class: {
                        "current active-b": t.vod.VodScore > 8,
                        active: t.vod.VodScore > 9
                    },
                    attrs: {
                        title: "力荐"
                    }
                }, [t._v(" 力荐 ")])]), t.vod.VodScore ? t._e() : a("span", {
                    staticClass: "list_tips"
                }, [t._v("暂无评分")])])])]), a("div", {
                    staticClass: "content_detail content_min"
                }, [a("ul", [a("li", {
                    staticClass: "data"
                }, [a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodYear && "0" != t.vod.VodYear,
                        expression: "vod.VodYear && vod.VodYear != '0'"
                    }],
                    staticClass: "text_muted hidden_xs"
                }, [t._v("年份：")]), a("router-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodYear && "0" != t.vod.VodYear,
                        expression: "vod.VodYear && vod.VodYear != '0'"
                    }],
                    attrs: {
                        to: "/vod?year=" + t.vod.VodYear + "&typeName=" + t.typeName
                    }
                }, [t._v(" " + t._s(t.vod.VodYear) + " ")]), t._v(" "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodYear && "0" != t.vod.VodYear,
                        expression: "vod.VodYear && vod.VodYear != '0'"
                    }],
                    staticClass: "split_line"
                }), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodArea,
                        expression: "vod.VodArea"
                    }],
                    staticClass: "text_muted hidden_xs"
                }, [t._v("地区：")]), a("router-link", {
                    attrs: {
                        to: "/vod?area=" + t.vod.VodArea + "&typeName=" + t.typeName
                    }
                }, [t._v(" " + t._s(t.vod.VodArea) + " ")]), t._v(" "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodArea,
                        expression: "vod.VodArea"
                    }],
                    staticClass: "split_line"
                }), a("span", {
                    staticClass: "text_muted hidden_xs"
                }, [t._v("类型：")]), a("router-link", {
                    attrs: {
                        to: "/vod?class=" + t.vod.VodClass.TypeName + "&typeName=" + t.typeName + "&type=" + t.vod.VodClass.TypeID
                    }
                }, [t._v(" " + t._s(t.vod.VodClass.TypeName) + " ")])], 1), a("li", {
                    staticClass: "data"
                }, [a("span", [t._v("状态：")]), a("span", {
                    staticClass: "data_style"
                }, [t._v(t._s(t.vod.VodRemarks))]), t._v(" / "), a("em", [t._v(t._s(t.transformTime(t.vod.VodTime)))])]), a("li", {
                    staticClass: "data"
                }, [a("span", [t._v("主演：")]), t._l(t.actorList, (function (e) {
                    return a("a", {
                        key: "actor-" + e,
                        on: {
                            click: function (a) {
                                return t.gotoActor(e)
                            }
                        }
                    }, [t._v(t._s(e) + " ")])
                }))], 2), a("li", {
                    staticClass: "data"
                }, [a("span", [t._v("导演：")]), a("span", {
                    staticStyle: {
                        color: "#111"
                    },
                    on: {
                        click: function (e) {
                            return t.gotoDirector(t.vod.VodDirector)
                        }
                    }
                }, [t._v(t._s(t.vod.VodDirector))])]), a("li", {
                    staticClass: "desc hidden_xs"
                }, [a("span", {
                    staticClass: "left text_muted"
                }, [t._v("简介：")]), a("p", {
                    staticClass: "hide-moretext",
                    domProps: {
                        innerHTML: t._s(t.vod.VodContent)
                    }
                }), t._v(" "), a("a", {
                    on: {
                        click: function (e) {
                            return t.showDetails()
                        }
                    }
                }, [t._v("详细 >")])])])]), a("div", {
                    staticClass: "content_detail content_btnk flexrow"
                }, [a("div", {
                    staticClass: "playbtn o_play"
                }, [a("a", {
                    staticClass: "btn btn_primary",
                    on: {
                        click: function (e) {
                            return t.playVod("/play/" + t.vod.VodID + "/0/0")
                        }
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 立即播放 ")])]), a("div", {
                    staticClass: "playbtn o_like",
                    staticStyle: {
                        "margin-right": "0"
                    }
                }, [a("a", {
                    staticClass: "btn btn_like digg_link",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: t.likeVod
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 喜欢 "), a("em", {
                    staticClass: "digg_num"
                }, [t._v(t._s(t.vod.VodUp))])])])])])]), a("div", {
                    staticClass: "content_detail content_min flexrow content_btnz"
                }, [a("div", {
                    staticClass: "playbtn o_play"
                }, [a("a", {
                    staticClass: "btn btn_primary",
                    on: {
                        click: function (e) {
                            return t.playVod("/play/" + t.vod.VodID + "/0/0")
                        }
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 立即播放 ")])]), a("div", {
                    staticClass: "playbtn o_like",
                    staticStyle: {
                        "margin-right": "0"
                    }
                }, [a("a", {
                    staticClass: "btn btn_like digg_link",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: t.likeVod
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 喜欢 "), a("em", {
                    staticClass: "digg_num"
                }, [t._v(t._s(t.vod.VodUp))])])])])])])])]), a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "left_row fl"
                }, [a("div", {
                    staticClass: "pannel clearfix"
                }, [a("div", {
                    staticClass: "tabs"
                }, [a("input", {
                    attrs: {
                        type: "radio",
                        id: "tab1",
                        name: "tab-control",
                        checked: ""
                    }
                }), a("input", {
                    attrs: {
                        type: "radio",
                        id: "tab2",
                        name: "tab-control"
                    }
                }), a("ul", {
                    staticClass: "title_nav"
                }, [a("li", {
                    ref: "vodDetails",
                    staticClass: "tab-det",
                    attrs: {
                        title: "剧情介绍",
                        id: "desc"
                    }
                }, [a("label", {
                    attrs: {
                        for: "tab1", role: "button"
                    }
                }, [a("span", [t._v("剧情介绍")])])]), a("li", {
                    staticClass: "tab-det",
                    attrs: {
                        title: "我要评分"
                    }
                }, [a("label", {
                    attrs: {
                        for: "tab2", role: "button"
                    }
                }, [a("span", [t._v("我要评分")])])])]), a("div", {
                    staticClass: "content"
                }, [a("section", [a("h2", [t._v("剧情介绍")]), a("div", {
                    staticClass: "content_desc context clearfix"
                }, [a("span", {
                    class: t.descDetails ? "fold" : "unfold",
                    domProps: {
                        innerHTML: t._s(t.vod.VodContent)
                    }
                }), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.hasMore && t.descDetails,
                        expression: "hasMore && descDetails"
                    }],
                    staticClass: "show_btn",
                    on: {
                        click: function (e) {
                            t.descDetails = !t.descDetails
                        }
                    }
                }, [a("i", {
                    staticClass: "line_bg"
                }), a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), a("em", {
                    staticClass: "hidden_xs"
                }, [t._v(" 展开全部")])]), a("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.hasMore && !t.descDetails,
                        expression: "hasMore && !descDetails"
                    }],
                    staticClass: "hidden_btn",
                    on: {
                        click: function (e) {
                            t.descDetails = !t.descDetails
                        }
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), a("em", {
                    staticClass: "hidden_xs"
                }, [t._v(" 收起全部")])])])]), a("section", [a("h2", [t._v("我要评分")]), a("div", {
                    staticClass: "content_desc clearfix"
                }, [a("div", {
                    staticClass: "rating-list",
                    attrs: {
                        id: "rating",
                        "data-mid": "1",
                        "data-id": "32608",
                        "data-score": "1"
                    }
                }, [a("span", {
                    staticClass: "label"
                }, [t._v("给【"), a("strong", [t._v(t._s(t.vod.VodName))]), t._v("】打分")]), a("ul", {
                    staticClass: "rating rating-star"
                }, [a("li", {
                    staticClass: "big-star one",
                    class: {
                        active: t.score > 1
                    },
                    on: {
                        click: function (e) {
                            return t.setScore(2)
                        }
                    }
                }, [t._v("很差")]), a("li", {
                    staticClass: "big-star two",
                    class: {
                        active: t.score > 3
                    },
                    on: {
                        click: function (e) {
                            return t.setScore(4)
                        }
                    }
                }, [t._v("较差")]), a("li", {
                    staticClass: "big-star three",
                    class: {
                        active: t.score > 5
                    },
                    on: {
                        click: function (e) {
                            return t.setScore(6)
                        }
                    }
                }, [t._v("还行")]), a("li", {
                    staticClass: "big-star four",
                    class: {
                        active: t.score > 7
                    },
                    on: {
                        click: function (e) {
                            return t.setScore(8)
                        }
                    }
                }, [t._v("推荐")]), a("li", {
                    staticClass: "big-star five",
                    class: {
                        active: t.score > 9
                    },
                    on: {
                        click: function (e) {
                            return t.setScore(10)
                        }
                    }
                }, [t._v("力荐")])]), a("span", {
                    staticClass: "label-list",
                    attrs: {
                        id: "ratewords"
                    }
                })])])])])])]), a("div", {
                    staticClass: "pannel clearfix",
                    attrs: {
                        id: "bofy"
                    }
                }, [a("div", {
                    staticClass: "pannel_head clearfix"
                }, [a("div", {
                    staticClass: "text_muted pull_right"
                }, [a("a", {
                    staticClass: "sort_btn",
                    on: {
                        click: t.updateSort
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 排序")])]), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.videoQty > 4,
                        expression: "videoQty > 4"
                    }],
                    staticClass: "showbtn"
                }, [a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.showAll,
                        expression: "!showAll"
                    }],
                    staticClass: "playlist_notfull text_muted pull_right"
                }, [a("a", {
                    on: {
                        click: t.showList
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 展开全部剧集")]), a("span", {
                    staticClass: "split_line"
                })]), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showAll,
                        expression: "showAll"
                    }],
                    staticClass: "playlist_full text_muted pull_right"
                }, [a("a", {
                    on: {
                        click: t.hideList
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 收起全部剧集")]), a("span", {
                    staticClass: "split_line"
                })])]), a("h3", {
                    staticClass: "title"
                }, [t._v("播放列表")])]), a("div", {
                    staticClass: "play_source"
                }, [a("div", {
                    staticClass: "play_source_tab list_scroll clearfix",
                    attrs: {
                        id: "NumTab"
                    }
                }, t._l(t.vod.VodPlayServer, (function (e, o) {
                    return a("a", {
                        key: "aNumtab-" + o,
                        class: {
                            active: t.player === e.Show
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function (a) {
                                return t.selectPlayer(e)
                            }
                        }
                    }, [a("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), t._v(" " + t._s(e.Show) + " ")])
                })), 0), t._l(t.vod.VodPlayServer, (function (e, o) {
                    return a("div", {
                        key: "plb-" + o,
                        staticClass: "play_list_box hide",
                        class: [t.player === e.Show ? "show" : "hide"]
                    }, [a("div", {
                        staticClass: "player_infotip"
                    }, [a("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), t._v(" 当前资源由" + t._s(e.Show) + "提供 - 在线播放,无需安装播放器 ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.showAll,
                            expression: "!showAll"
                        }],
                        staticClass: "playlist_notfull",
                        attrs: {
                            id: "playlistbox"
                        }
                    }, [a("ul", {
                        staticClass: "content_playlist list_scroll clearfix"
                    }, t._l(t.vod.VodPlayUrls[e.From], (function (i, s) {
                        return a("li", {
                            key: "lpg-" + i
                        }, ["asc" === t.sort ? a("a", {
                            on: {
                                click: function (e) {
                                    return t.playVod("/play/" + t.vod.VodID + "/" + o + "/" + s)
                                }
                            }
                        }, [t._v(" " + t._s(i[0]) + " ")]) : a("a", {
                            on: {
                                click: function (a) {
                                    return t.playVod("/play/" + t.vod.VodID + "/" + o + "/" + (t.vod.VodPlayUrls[e.From].length - s - 1))
                                }
                            }
                        }, [t._v(" " + t._s(t.vod.VodPlayUrls[e.From][t.vod.VodPlayUrls[e.From].length - s - 1][0]) + " ")])])
                    })), 0)]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showAll,
                            expression: "showAll"
                        }],
                        staticClass: "playlist_full"
                    }, [a("ul", {
                        staticClass: "content_playlist clearfix"
                    }, t._l(t.vod.VodPlayUrls[e.From], (function (i, s) {
                        return a("li", {
                            key: "lpgf-" + s
                        }, ["asc" === t.sort ? a("a", {
                            on: {
                                click: function (e) {
                                    return t.playVod("/play/" + t.vod.VodID + "/" + o + "/" + s)
                                }
                            }
                        }, [t._v(" " + t._s(i[0]) + " ")]) : a("a", {
                            on: {
                                click: function (a) {
                                    return t.playVod("/play/" + t.vod.VodID + "/" + o + "/" + (t.vod.VodPlayUrls[e.From].length - s - 1))
                                }
                            }
                        }, [t._v(" " + t._s(t.vod.VodPlayUrls[e.From][t.vod.VodPlayUrls[e.From].length - s - 1][0]) + " ")])])
                    })), 0)])])
                }))], 2)]), a("AdImage", {
                    attrs: {
                        tab: "88spa-detail"
                    }
                }), a("div", {
                    staticClass: "pannel clearfix"
                }, [a("div", {
                    staticClass: "pannel_head clearfix"
                }, [a("h3", {
                    staticClass: "title"
                }, [t._v(" 猜你喜欢 ")])]), a("HorizontalList", {
                    attrs: {
                        vodList: t.randList
                    },
                    on: {
                        newDetail: t.newDetail
                    }
                })], 1), a("div", {
                    staticClass: "pannel clearfix"
                }, [a("div", {
                    staticClass: "pannel_head clearfix"
                }, [a("h3", {
                    staticClass: "title"
                }, [t._v(" 相关推荐 ")])]), a("HorizontalList", {
                    attrs: {
                        vodList: t.relateList
                    },
                    on: {
                        newDetail: t.newDetail
                    }
                })], 1)], 1)])]), a("Back2Top"), a("Footer", {
                    attrs: {
                        tab: t.tabName
                    }
                }), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.copyDone,
                        expression: "copyDone"
                    }],
                    attrs: {
                        id: "show"
                    }
                }, [t._m(0)]), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showShare,
                        expression: "showShare"
                    }],
                    staticClass: "am-share am-modal-active"
                }, [a("div", {
                    staticClass: "am-share-url"
                }, [a("span", {
                    staticClass: "title_span"
                }, [t._v("复制下方链接，去粘贴给好友吧：")]), a("div", {
                    staticClass: "url_span shorturl",
                    staticStyle: {
                        width: "100%",
                        "font-size": "15px"
                    },
                    attrs: {
                        id: "short1"
                    }
                }, [t._v(t._s(t.shareContent) + " ")])]), a("div", {
                    staticClass: "am-share-footer"
                }, [a("span", {
                    staticClass: "share_btn",
                    on: {
                        click: t.cancelShare
                    }
                }, [t._v("取消")]), a("span", {
                    staticClass: "copy_btn",
                    attrs: {
                        id: "btn",
                        "data-clipboard-text": t.shareContent
                    },
                    on: {
                        click: t.copyShareLink
                    }
                }, [t._v("一键复制")])])]), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showShare,
                        expression: "showShare"
                    }],
                    staticClass: "sharebg sharebg-active"
                })], 1)
            },
                i = [function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "copy-tip"
                    }, [a("p", [t._v("耶～～复制成功")])])
                }],
                s = (a("99af"), a("c975"), a("4e82"), a("e25e"), a("5319"), a("1276"), a("8bbf")),
                n = a.n(s),
                r = a("cebe"),
                c = a.n(r),
                l = a("b311"),
                d = a.n(l),
                u = a("c96a"),
                p = a("fd2d"),
                f = a("0418"),
                v = a("bee7"),
                h = a("3283"),
                m = n.a.extend({
                    name: "Show",
                    props: {
                        msg: String
                    },
                    components: {
                        Back2Top: u["a"],
                        Footer: p["a"],
                        Header: f["a"],
                        AdImage: v["a"],
                        HorizontalList: h["a"]
                    },
                    data: function () {
                        var t = this;
                        return {
                            id: t.$route.params.id,
                            isLoading: !1,
                            hasMore: !1,
                            vod: {
                                VodPlayServer: [],
                                TypeID: 0,
                                VodID: 0,
                                VodYear: 0,
                                VodArea: "",
                                VodPlayUrls: [],
                                VodActor: "",
                                VodUp: 0,
                                VodContent: "",
                                VodClass: {
                                    TypeName: "",
                                    TypeID: ""
                                }
                            },
                            descDetails: !1,
                            player: "",
                            randList: [],
                            relateList: [],
                            sort: "asc",
                            showAll: !1,
                            videoQty: 0,
                            showMsg: !1,
                            copyDone: !1,
                            message: "",
                            score: 0,
                            showShare: !1,
                            domain: "",
                            shareLink: ""
                        }
                    },
                    computed: {
                        tabName: function () {
                            var t = this;
                            return t.$config.movies.indexOf(t.vod.TypeID) > -1 ? "movie" : t.$config.teleplays.indexOf(t.vod.TypeID) > -1 ? "teleplay" : t.$config.shows.indexOf(t.vod.TypeID) > -1 ? "show" : t.$config.cartoons.indexOf(t.vod.TypeID) > -1 ? "cartoon" : ""
                        },
                        typeName: function () {
                            var t = this;
                            return t.$config.movies.indexOf(t.vod.TypeID) > -1 ? "电影" : t.$config.teleplays.indexOf(t.vod.TypeID) > -1 ? "连续剧" : t.$config.shows.indexOf(t.vod.TypeID) > -1 ? "综艺" : t.$config.cartoons.indexOf(t.vod.TypeID) > -1 ? "动漫" : ""
                        },
                        actorList: function () {
                            var t = this;
                            return t.vod.VodActor.split(",")
                        },
                        shareContent: function () {
                            var t = this,
                                e = "【".concat(t.vod.VodName, "】"),
                                a = t.$config.shareContent.replace(/【】/, e);
                            return "".concat(a, "--").concat(t.shareLink)
                        }
                    },
                    created: function () {
                        var t = this;
                        t.fetchData()
                    },
                    activated: function () {
                        var t = this;
                        t.$route.params.id !== t.id && (t.id = t.$route.params.id, t.fetchData())
                    },
                    methods: {
                        onRefresh: function () {
                            var t = this;
                            t.vod = {
                                VodPlayServer: [],
                                TypeID: 0,
                                VodID: 0,
                                VodYear: 0,
                                VodArea: "",
                                VodPlayUrls: [],
                                VodActor: "",
                                VodUp: 0,
                                VodContent: "",
                                VodClass: {
                                    TypeName: "",
                                    TypeID: ""
                                }
                            }, t.fetchData()
                        },
                        newDetail: function (t) {
                            var e = this;
                            e.id = t, e.fetchData()
                        },
                        showDetails: function () {
                            var t = this;
                            t.descDetails = !1;
                            var e = t.$refs.vodDetails;
                            window.scroll(0, e.getBoundingClientRect().top - 40)
                        },
                        cancelShare: function () {
                            this.showShare = !1
                        },
                        openShare: function () {
                            this.showShare = !0
                        },
                        copyShareLink: function () {
                            var t = this,
                                e = new d.a(".copy_btn");
                            e.on("success", (function () {
                                t.showShare = !1, t.$api.Toast("耶～～复制成功"), e.destroy()
                            })), e.on("error", (function () {
                                t.showShare = !1, t.$api.Toast.fail("复制失败，请手工复制！"), t.showShare = !0, e.destroy()
                            }))
                        },
                        playVod: function (t) {
                            window.scroll(0, 0), this.$router.push(t)
                        },
                        selectPlayer: function (t) {
                            var e = this;
                            e.player = t.Show;
                            var a = e.vod.VodPlayUrls[t.From];
                            e.videoQty = a.length
                        },
                        showList: function () {
                            this.showAll = !0
                        },
                        hideList: function () {
                            this.showAll = !1
                        },
                        likeVod: function () {
                            var t = this;
                            t.$cookies.get("like-".concat(t.vod.VodID)) ? t.$api.Toast.fail("您已喜欢过！") : (t.$cookies.set("like-".concat(t.vod.VodID), 1), c.a.post("/v1/like-vod", {
                                id: t.vod.VodID
                            }, {
                                timeout: 1e4
                            }).then((function (e) {
                                t.vod.VodUp += 1, t.$api.Toast.success("感谢您的喜欢！")
                            }), (function (e) {
                                t.$api.Toast("网络错误，请重试!")
                            })))
                        },
                        updateSort: function () {
                            var t = this;
                            "asc" === t.sort ? t.sort = "desc" : t.sort = "asc"
                        },
                        reverse: function (t) {
                            return t.reverse()
                        },
                        fetchData: function () {
                            var t = this;
                            t.$api.Toast.loading({
                                message: "加载中...",
                                forbidClick: !0,
                                loadingType: "spinner"
                            }), t.score = 0, c.a.get("/v3/getDetail?id=".concat(t.id), {
                                timeout: 1e4
                            }).then((function (e) {
                                t.isLoading = !1, t.$api.Toast.clear(), t.vod = e.data.vod, t.score = t.$cookies.get("score-".concat(t.id)), t.domain = e.data.domain, t.shareLink = e.data.shareLink;
                                var a = t.vod.VodPlayServer[0],
                                    o = t.vod.VodPlayUrls[a.From];
                                t.videoQty = o.length, t.player = a.Show, t.randList = e.data.rand, t.relateList = e.data.relate, t.$cookies.get("like-".concat(t.vod.VodID)) && (t.vod.VodUp += 1), window.scroll(0, 0), t.vod.VodContent.length > 130 ? (t.descDetails = !0, t.hasMore = !0) : (t.descDetails = !1, t.hasMore = !1)
                            }), (function (e) {
                                t.isLoading = !1, t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        gotoDirector: function (t) {
                            this.$router.push("/search/".concat(t, "/director"))
                        },
                        gotoActor: function (t) {
                            this.$router.push("/search/".concat(t, "/actor"))
                        },
                        transformTime: function (t) {
                            var e = this;
                            if (t) {
                                var a = new Date(1e3 * t),
                                    o = (a.getFullYear(), a.getMonth() + 1),
                                    i = a.getDate();
                                a.getHours(), a.getMinutes(), a.getSeconds();
                                return "".concat(e.addZero(o), "-").concat(e.addZero(i))
                            }
                            return ""
                        },
                        addZero: function (t) {
                            return t < 10 ? "0".concat(t) : t
                        },
                        setScore: function (t) {
                            var e = this;
                            e.$cookies.get("score-".concat(e.vod.VodID)) ? e.$api.Toast.fail("您已评过分！") : (e.$cookies.set("score-".concat(e.vod.VodID), t), e.score = t, c.a.post("/v1/score", {
                                id: parseInt(e.$route.params.id),
                                score: t
                            }, {
                                timeout: 1e4
                            }).then((function (t) {
                                e.$api.Toast.success("感谢您的参与，评分已提交！")
                            }), (function (t) {
                                e.$api.Toast("网络错误，请重试!")
                            })))
                        }
                    }
                }),
                y = m,
                g = (a("3826"), a("2877")),
                b = Object(g["a"])(y, o, i, !1, null, "6d6f7f12", null);
            e["default"] = b.exports
        },
        b311: function (t, e, a) {
            /*!
             * clipboard.js v2.0.6
             * https://clipboardjs.com/
             *
             * Licensed MIT © Zeno Rocha
             */
            (function (e, a) {
                t.exports = a()
            })(0, (function () {
                return function (t) {
                    var e = {};

                    function a(o) {
                        if (e[o]) return e[o].exports;
                        var i = e[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return t[o].call(i.exports, i, i.exports, a), i.l = !0, i.exports
                    }
                    return a.m = t, a.c = e, a.d = function (t, e, o) {
                        a.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: o
                        })
                    }, a.r = function (t) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, a.t = function (t, e) {
                        if (1 & e && (t = a(t)), 8 & e) return t;
                        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                        var o = Object.create(null);
                        if (a.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t) for (var i in t) a.d(o, i, function (e) {
                            return t[e]
                        }.bind(null, i));
                        return o
                    }, a.n = function (t) {
                        var e = t && t.__esModule ?
                            function () {
                                return t["default"]
                            } : function () {
                                return t
                            };
                        return a.d(e, "a", e), e
                    }, a.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, a.p = "", a(a.s = 6)
                }([function (t, e) {
                    function a(t) {
                        var e;
                        if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                            var a = t.hasAttribute("readonly");
                            a || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), a || t.removeAttribute("readonly"), e = t.value
                        } else {
                            t.hasAttribute("contenteditable") && t.focus();
                            var o = window.getSelection(),
                                i = document.createRange();
                            i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
                        }
                        return e
                    }
                    t.exports = a
                }, function (t, e) {
                    function a() { }
                    a.prototype = {
                        on: function (t, e, a) {
                            var o = this.e || (this.e = {});
                            return (o[t] || (o[t] = [])).push({
                                fn: e,
                                ctx: a
                            }), this
                        },
                        once: function (t, e, a) {
                            var o = this;

                            function i() {
                                o.off(t, i), e.apply(a, arguments)
                            }
                            return i._ = e, this.on(t, i, a)
                        },
                        emit: function (t) {
                            var e = [].slice.call(arguments, 1),
                                a = ((this.e || (this.e = {}))[t] || []).slice(),
                                o = 0,
                                i = a.length;
                            for (o; o < i; o++) a[o].fn.apply(a[o].ctx, e);
                            return this
                        },
                        off: function (t, e) {
                            var a = this.e || (this.e = {}),
                                o = a[t],
                                i = [];
                            if (o && e) for (var s = 0, n = o.length; s < n; s++) o[s].fn !== e && o[s].fn._ !== e && i.push(o[s]);
                            return i.length ? a[t] = i : delete a[t], this
                        }
                    }, t.exports = a, t.exports.TinyEmitter = a
                }, function (t, e, a) {
                    var o = a(3),
                        i = a(4);

                    function s(t, e, a) {
                        if (!t && !e && !a) throw new Error("Missing required arguments");
                        if (!o.string(e)) throw new TypeError("Second argument must be a String");
                        if (!o.fn(a)) throw new TypeError("Third argument must be a Function");
                        if (o.node(t)) return n(t, e, a);
                        if (o.nodeList(t)) return r(t, e, a);
                        if (o.string(t)) return c(t, e, a);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }
                    function n(t, e, a) {
                        return t.addEventListener(e, a), {
                            destroy: function () {
                                t.removeEventListener(e, a)
                            }
                        }
                    }
                    function r(t, e, a) {
                        return Array.prototype.forEach.call(t, (function (t) {
                            t.addEventListener(e, a)
                        })), {
                            destroy: function () {
                                Array.prototype.forEach.call(t, (function (t) {
                                    t.removeEventListener(e, a)
                                }))
                            }
                        }
                    }
                    function c(t, e, a) {
                        return i(document.body, t, e, a)
                    }
                    t.exports = s
                }, function (t, e) {
                    e.node = function (t) {
                        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                    }, e.nodeList = function (t) {
                        var a = Object.prototype.toString.call(t);
                        return void 0 !== t && ("[object NodeList]" === a || "[object HTMLCollection]" === a) && "length" in t && (0 === t.length || e.node(t[0]))
                    }, e.string = function (t) {
                        return "string" === typeof t || t instanceof String
                    }, e.fn = function (t) {
                        var e = Object.prototype.toString.call(t);
                        return "[object Function]" === e
                    }
                }, function (t, e, a) {
                    var o = a(5);

                    function i(t, e, a, o, i) {
                        var s = n.apply(this, arguments);
                        return t.addEventListener(a, s, i), {
                            destroy: function () {
                                t.removeEventListener(a, s, i)
                            }
                        }
                    }
                    function s(t, e, a, o, s) {
                        return "function" === typeof t.addEventListener ? i.apply(null, arguments) : "function" === typeof a ? i.bind(null, document).apply(null, arguments) : ("string" === typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function (t) {
                            return i(t, e, a, o, s)
                        })))
                    }
                    function n(t, e, a, i) {
                        return function (a) {
                            a.delegateTarget = o(a.target, e), a.delegateTarget && i.call(t, a)
                        }
                    }
                    t.exports = s
                }, function (t, e) {
                    var a = 9;
                    if ("undefined" !== typeof Element && !Element.prototype.matches) {
                        var o = Element.prototype;
                        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
                    }
                    function i(t, e) {
                        while (t && t.nodeType !== a) {
                            if ("function" === typeof t.matches && t.matches(e)) return t;
                            t = t.parentNode
                        }
                    }
                    t.exports = i
                }, function (t, e, a) {
                    "use strict";
                    a.r(e);
                    var o = a(0),
                        i = a.n(o),
                        s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
                            function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, n = function () {
                                function t(t, e) {
                                    for (var a = 0; a < e.length; a++) {
                                        var o = e[a];
                                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                    }
                                }
                                return function (e, a, o) {
                                    return a && t(e.prototype, a), o && t(e, o), e
                                }
                            }();

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var c = function () {
                        function t(e) {
                            r(this, t), this.resolveOptions(e), this.initSelection()
                        }
                        return n(t, [{
                            key: "resolveOptions",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function () {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function () {
                                var t = this,
                                    e = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function () {
                                    return t.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                var a = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = a + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = i()(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function () {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function () {
                                this.selectedText = i()(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function () {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (e) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function (t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function () {
                                this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function () {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function (t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== ("undefined" === typeof t ? "undefined" : s(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function () {
                                return this._target
                            }
                        }]), t
                    }(),
                        l = c,
                        d = a(1),
                        u = a.n(d),
                        p = a(2),
                        f = a.n(p),
                        v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
                            function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, h = function () {
                                function t(t, e) {
                                    for (var a = 0; a < e.length; a++) {
                                        var o = e[a];
                                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                    }
                                }
                                return function (e, a, o) {
                                    return a && t(e.prototype, a), o && t(e, o), e
                                }
                            }();

                    function m(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    function y(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                    }
                    function g(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    var b = function (t) {
                        function e(t, a) {
                            m(this, e);
                            var o = y(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return o.resolveOptions(a), o.listenClick(t), o
                        }
                        return g(e, t), h(e, [{
                            key: "resolveOptions",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" === typeof t.action ? t.action : this.defaultAction, this.target = "function" === typeof t.target ? t.target : this.defaultTarget, this.text = "function" === typeof t.text ? t.text : this.defaultText, this.container = "object" === v(t.container) ? t.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function (t) {
                                var e = this;
                                this.listener = f()(t, "click", (function (t) {
                                    return e.onClick(t)
                                }))
                            }
                        }, {
                            key: "onClick",
                            value: function (t) {
                                var e = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({
                                    action: this.action(e),
                                    target: this.target(e),
                                    text: this.text(e),
                                    container: this.container,
                                    trigger: e,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function (t) {
                                return _("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function (t) {
                                var e = _("target", t);
                                if (e) return document.querySelector(e)
                            }
                        }, {
                            key: "defaultText",
                            value: function (t) {
                                return _("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    e = "string" === typeof t ? [t] : t,
                                    a = !!document.queryCommandSupported;
                                return e.forEach((function (t) {
                                    a = a && !!document.queryCommandSupported(t)
                                })), a
                            }
                        }]), e
                    }(u.a);

                    function _(t, e) {
                        var a = "data-clipboard-" + t;
                        if (e.hasAttribute(a)) return e.getAttribute(a)
                    }
                    e["default"] = b
                }])["default"]
            }))
        },
        bee7: function (t, e, a) {
            "use strict";
            var o = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return t.curImg ? a("div", {
                    staticStyle: {
                        "text-align": "center",
                        padding: "10px"
                    }
                }, [a("a", {
                    attrs: {
                        rel: "nofollow"
                    },
                    on: {
                        click: function (e) {
                            return t.openAdUrl()
                        }
                    }
                }, [a("img", {
                    staticStyle: {
                        "max-width": "100%"
                    },
                    attrs: {
                        referrerpolicy: "no-referrer",
                        src: t.curImg
                    }
                })])]) : t._e()
            },
                i = [],
                s = (a("c975"), a("8bbf")),
                n = a.n(s),
                r = n.a.extend({
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
                                e = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1;
                            e ? window.openAd(t.adUrl) : window.open(t.adUrl)
                        }
                    }
                }),
                c = r,
                l = a("2877"),
                d = Object(l["a"])(c, o, i, !1, null, null, null);
            e["a"] = d.exports
        },
        db60: function (t, e, a) { },
        e8b5: function (t, e, a) {
            var o = a("c6b6");
            t.exports = Array.isArray ||
                function (t) {
                    return "Array" == o(t)
                }
        }
    }]);