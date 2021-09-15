(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-9b827330"],
    {
        "0a16": function (t, a, e) { },
        "1dde": function (t, a, e) {
            var r = e("d039"),
                s = e("b622"),
                i = e("60ae"),
                o = s("species");
            t.exports = function (t) {
                return i >= 51 || !r((function () {
                    var a = [],
                        e = a.constructor = {};
                    return e[o] = function () {
                        return {
                            foo: 1
                        }
                    }, 1 !== a[t](Boolean).foo
                }))
            }
        },
        "2d3b": function (t, a, e) {
            "use strict";
            e.r(a);
            var r = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "search-page"
                }, [e("Header", {
                    ref: "headerComponent",
                    attrs: {
                        curKeyword: t.curKeyword,
                        isSearch: !0
                    },
                    on: {
                        searchKey: t.searchKey
                    }
                }), e("div", {
                    staticClass: "container "
                }, [e("div", {
                    staticClass: "left_row fl"
                }, [e("div", {
                    staticClass: "pannel search_box clearfix"
                }, [e("div", {
                    staticClass: "pannel_head clearfix"
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v(" 搜索到与“"), e("em", [t._v(t._s(t.curKeyword))]), t._v("”相关的"), e("em", {
                    staticClass: "mac_total"
                }, [t._v(t._s(t.qty))]), t._v("条结果 ")])]), e("ul", {
                    staticClass: "vodlist clearfix"
                }, t._l(t.vodList, (function (a, r) {
                    return e("li", {
                        key: r,
                        staticClass: "searchlist_item"
                    }, [e("div", {
                        staticClass: "searchlist_img"
                    }, [e("router-link", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy:background-image",
                            value: a.VodPic,
                            expression: "i.VodPic",
                            arg: "background-image"
                        }],
                        staticClass: "vodlist_thumb lazyload",
                        attrs: {
                            to: "/details/" + a.VodID,
                            title: a.VodName
                        }
                    }, [a.VodScore ? e("span", {
                        staticClass: "pic_text text_right text_dy"
                    }, [t._v(t._s(a.VodScore) + ".0")]) : e("span", {
                        staticClass: "pic_text text_right"
                    }, [t._v(t._s(a.VodRemarks))])])], 1), e("div", {
                        staticClass: "searchlist_titbox"
                    }, [e("h4", {
                        staticClass: "vodlist_title"
                    }, [e("router-link", {
                        attrs: {
                            to: "/details/" + a.VodID,
                            title: a.VodName
                        }
                    }, [e("span", {
                        staticClass: "info_right"
                    }, [t._v(t._s(t.showType(a.TypeID)))]), t._v(t._s(a.VodName) + " ")])], 1), e("p", {
                        staticClass: "vodlist_sub"
                    }, [e("span", [t._v("主演：")]), t._v(t._s(a.VodActor ? a.VodActor.replace(/,/g, " ") : ""))]), e("p", {
                        staticClass: "vodlist_sub"
                    }, [e("span", [t._v("导演：")]), t._v(t._s(a.VodDirector ? a.VodDirector.replace(/,/g, " ") : ""))]), e("div", {
                        staticClass: "seebtn"
                    }, [e("router-link", {
                        attrs: {
                            to: "/details/" + a.VodID
                        }
                    }, [t._v("查看详情 "), e("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])])], 1)])])
                })), 0), e("ul", {
                    staticClass: "page text_center cleafix"
                }, [e("li", {
                    staticClass: "hidden_mb"
                }, [e("a", {
                    on: {
                        click: t.firstPage
                    }
                }, [t._v("首页")])]), e("li", [e("a", {
                    on: {
                        click: t.prevPage
                    }
                }, [t._v("上一页")])]), e("li", [e("a", {
                    on: {
                        click: t.nextPage
                    }
                }, [t._v("下一页")])]), e("li", {
                    staticClass: "hidden_mb"
                }, [e("a", {
                    on: {
                        click: t.lastPage
                    }
                }, [t._v("尾页")])])]), e("div", {
                    staticClass: "page_tips hidden_mb"
                }, [t._v("当前"), e("span", [t._v("第" + t._s(t.page) + "页")]), t._v(" / 共有" + t._s(t.pageQty) + "页")])])])]), e("Back2Top"), e("Footer")], 1)
            },
                s = [],
                i = (e("99af"), e("c975"), e("8bbf")),
                o = e.n(i),
                c = e("cebe"),
                n = e.n(c),
                d = e("0418"),
                l = e("fd2d"),
                u = e("c96a"),
                f = o.a.extend({
                    name: "Search",
                    props: {
                        msg: String
                    },
                    components: {
                        Header: d["a"],
                        Footer: l["a"],
                        Back2Top: u["a"]
                    },
                    data: function () {
                        return {
                            page: 1,
                            qty: 0,
                            vodList: [],
                            curKeyword: "",
                            cate: this.$route.params.cate
                        }
                    },
                    computed: {
                        pageQty: function () {
                            var t = this;
                            return Math.ceil(t.qty / 36)
                        },
                        keyword: function () {
                            return this.$route.params.keyword
                        }
                    },
                    watch: {
                        keyword: function () {
                            var t = this;
                            t.keyword && t.curKeyword !== t.keyword && (t.curKeyword = t.keyword, t.fetchData())
                        }
                    },
                    created: function () {
                        var t = this;
                        t.curKeyword = t.keyword, t.fetchData()
                    },
                    methods: {
                        searchKey: function (t) {
                            var a = this;
                            t && (a.curKeyword = t, a.fetchData())
                        },
                        fetchData: function () {
                            var t = this;
                            n.a.get("/v1/search?keyword=".concat(t.curKeyword, "&cate=").concat(t.cate, "&page=").concat(t.page), {
                                timeout: 1e4
                            }).then((function (a) {
                                t.vodList = a.data.data, t.qty = a.data.qty, window.scroll(0, 0)
                            }), (function (a) {
                                t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        showType: function (t) {
                            var a = this;
                            return a.$config.movies.indexOf(t) > -1 ? "电影" : a.$config.teleplays.indexOf(t) > -1 ? "连续剧" : a.$config.cartoons.indexOf(t) > -1 ? "动漫" : a.$config.shows.indexOf(t) > -1 ? "综艺" : ""
                        },
                        nextPage: function () {
                            var t = this;
                            t.page < t.pageQty && (t.page += 1, t.fetchData())
                        },
                        prevPage: function () {
                            var t = this;
                            t.page > 1 && (t.page -= 1, t.fetchData())
                        },
                        firstPage: function () {
                            var t = this;
                            t.page > 1 && (t.page = 1, t.fetchData())
                        },
                        lastPage: function () {
                            var t = this;
                            t.page < t.pageQty && (t.page = t.pageQty, t.fetchData())
                        }
                    }
                }),
                v = f,
                p = (e("d419"), e("2877")),
                h = Object(p["a"])(v, r, s, !1, null, "63268597", null);
            a["default"] = h.exports
        },
        "65f0": function (t, a, e) {
            var r = e("861d"),
                s = e("e8b5"),
                i = e("b622"),
                o = i("species");
            t.exports = function (t, a) {
                var e;
                return s(t) && (e = t.constructor, "function" != typeof e || e !== Array && !s(e.prototype) ? r(e) && (e = e[o], null === e && (e = void 0)) : e = void 0), new (void 0 === e ? Array : e)(0 === a ? 0 : a)
            }
        },
        8418: function (t, a, e) {
            "use strict";
            var r = e("c04e"),
                s = e("9bf2"),
                i = e("5c6c");
            t.exports = function (t, a, e) {
                var o = r(a);
                o in t ? s.f(t, o, i(0, e)) : t[o] = e
            }
        },
        "99af": function (t, a, e) {
            "use strict";
            var r = e("23e7"),
                s = e("d039"),
                i = e("e8b5"),
                o = e("861d"),
                c = e("7b0b"),
                n = e("50c4"),
                d = e("8418"),
                l = e("65f0"),
                u = e("1dde"),
                f = e("b622"),
                v = e("60ae"),
                p = f("isConcatSpreadable"),
                h = 9007199254740991,
                _ = "Maximum allowed index exceeded",
                g = v >= 51 || !s((function () {
                    var t = [];
                    return t[p] = !1, t.concat()[0] !== t
                })),
                y = u("concat"),
                w = function (t) {
                    if (!o(t)) return !1;
                    var a = t[p];
                    return void 0 !== a ? !!a : i(t)
                },
                b = !g || !y;
            r({
                target: "Array",
                proto: !0,
                forced: b
            }, {
                concat: function (t) {
                    var a, e, r, s, i, o = c(this),
                        u = l(o, 0),
                        f = 0;
                    for (a = -1, r = arguments.length; a < r; a++) if (i = -1 === a ? o : arguments[a], w(i)) {
                        if (s = n(i.length), f + s > h) throw TypeError(_);
                        for (e = 0; e < s; e++, f++) e in i && d(u, f, i[e])
                    } else {
                        if (f >= h) throw TypeError(_);
                        d(u, f++, i)
                    }
                    return u.length = f, u
                }
            })
        },
        d419: function (t, a, e) {
            "use strict";
            var r = e("0a16"),
                s = e.n(r);
            s.a
        },
        e8b5: function (t, a, e) {
            var r = e("c6b6");
            t.exports = Array.isArray ||
                function (t) {
                    return "Array" == r(t)
                }
        }
    }]);