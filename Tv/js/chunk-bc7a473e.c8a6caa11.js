(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-bc7a473e"],
    {
        "057f": function (t, e, a) {
            var r = a("fc6a"),
                n = a("241c").f,
                i = {}.toString,
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                o = function (t) {
                    try {
                        return n(t)
                    } catch (e) {
                        return s.slice()
                    }
                };
            t.exports.f = function (t) {
                return s && "[object Window]" == i.call(t) ? o(t) : n(r(t))
            }
        },
        "159b": function (t, e, a) {
            var r = a("da84"),
                n = a("fdbc"),
                i = a("17c2"),
                s = a("9112");
            for (var o in n) {
                var c = r[o],
                    u = c && c.prototype;
                if (u && u.forEach !== i) try {
                    s(u, "forEach", i)
                } catch (l) {
                    u.forEach = i
                }
            }
        },
        "17c2": function (t, e, a) {
            "use strict";
            var r = a("b727").forEach,
                n = a("b301");
            t.exports = n("forEach") ?
                function (t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                } : [].forEach
        },
        "1dde": function (t, e, a) {
            var r = a("d039"),
                n = a("b622"),
                i = a("60ae"),
                s = n("species");
            t.exports = function (t) {
                return i >= 51 || !r((function () {
                    var e = [],
                        a = e.constructor = {};
                    return a[s] = function () {
                        return {
                            foo: 1
                        }
                    }, 1 !== e[t](Boolean).foo
                }))
            }
        },
        "371b": function (t, e, a) {
            "use strict";
            var r = a("f3ab"),
                n = a.n(r);
            n.a
        },
        "4de4": function (t, e, a) {
            "use strict";
            var r = a("23e7"),
                n = a("b727").filter,
                i = a("d039"),
                s = a("1dde"),
                o = s("filter"),
                c = o && !i((function () {
                    [].filter.call({
                        length: -1,
                        0: 1
                    }, (function (t) {
                        throw t
                    }))
                }));
            r({
                target: "Array",
                proto: !0,
                forced: !o || !c
            }, {
                filter: function (t) {
                    return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        "65f0": function (t, e, a) {
            var r = a("861d"),
                n = a("e8b5"),
                i = a("b622"),
                s = i("species");
            t.exports = function (t, e) {
                var a;
                return n(t) && (a = t.constructor, "function" != typeof a || a !== Array && !n(a.prototype) ? r(a) && (a = a[s], null === a && (a = void 0)) : a = void 0), new (void 0 === a ? Array : a)(0 === e ? 0 : e)
            }
        },
        "746f": function (t, e, a) {
            var r = a("428f"),
                n = a("5135"),
                i = a("c032"),
                s = a("9bf2").f;
            t.exports = function (t) {
                var e = r.Symbol || (r.Symbol = {});
                n(e, t) || s(e, t, {
                    value: i.f(t)
                })
            }
        },
        8418: function (t, e, a) {
            "use strict";
            var r = a("c04e"),
                n = a("9bf2"),
                i = a("5c6c");
            t.exports = function (t, e, a) {
                var s = r(e);
                s in t ? n.f(t, s, i(0, a)) : t[s] = a
            }
        },
        "84e2": function (t, e, a) { },
        a4d3: function (t, e, a) {
            "use strict";
            var r = a("23e7"),
                n = a("da84"),
                i = a("d066"),
                s = a("c430"),
                o = a("83ab"),
                c = a("4930"),
                u = a("fdbf"),
                l = a("d039"),
                f = a("5135"),
                d = a("e8b5"),
                p = a("861d"),
                v = a("825a"),
                y = a("7b0b"),
                h = a("fc6a"),
                m = a("c04e"),
                b = a("5c6c"),
                g = a("7c73"),
                w = a("df75"),
                _ = a("241c"),
                O = a("057f"),
                S = a("7418"),
                N = a("06cf"),
                x = a("9bf2"),
                C = a("d1e7"),
                L = a("9112"),
                P = a("6eeb"),
                k = a("5692"),
                j = a("f772"),
                D = a("d012"),
                E = a("90e3"),
                B = a("b622"),
                T = a("c032"),
                F = a("746f"),
                I = a("d44e"),
                V = a("69f3"),
                A = a("b727").forEach,
                q = j("hidden"),
                M = "Symbol",
                $ = "prototype",
                Q = B("toPrimitive"),
                G = V.set,
                H = V.getterFor(M),
                R = Object[$],
                Y = n.Symbol,
                J = i("JSON", "stringify"),
                z = N.f,
                Z = x.f,
                W = O.f,
                K = C.f,
                U = k("symbols"),
                X = k("op-symbols"),
                tt = k("string-to-symbol-registry"),
                et = k("symbol-to-string-registry"),
                at = k("wks"),
                rt = n.QObject,
                nt = !rt || !rt[$] || !rt[$].findChild,
                it = o && l((function () {
                    return 7 != g(Z({}, "a", {
                        get: function () {
                            return Z(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ?
                    function (t, e, a) {
                        var r = z(R, e);
                        r && delete R[e], Z(t, e, a), r && t !== R && Z(R, e, r)
                    } : Z, st = function (t, e) {
                        var a = U[t] = g(Y[$]);
                        return G(a, {
                            type: M,
                            tag: t,
                            description: e
                        }), o || (a.description = e), a
                    }, ot = c && "symbol" == typeof Y.iterator ?
                        function (t) {
                            return "symbol" == typeof t
                        } : function (t) {
                            return Object(t) instanceof Y
                        }, ct = function (t, e, a) {
                            t === R && ct(X, e, a), v(t);
                            var r = m(e, !0);
                            return v(a), f(U, r) ? (a.enumerable ? (f(t, q) && t[q][r] && (t[q][r] = !1), a = g(a, {
                                enumerable: b(0, !1)
                            })) : (f(t, q) || Z(t, q, b(1, {})), t[q][r] = !0), it(t, r, a)) : Z(t, r, a)
                        }, ut = function (t, e) {
                            v(t);
                            var a = h(e),
                                r = w(a).concat(vt(a));
                            return A(r, (function (e) {
                                o && !ft.call(a, e) || ct(t, e, a[e])
                            })), t
                        }, lt = function (t, e) {
                            return void 0 === e ? g(t) : ut(g(t), e)
                        }, ft = function (t) {
                            var e = m(t, !0),
                                a = K.call(this, e);
                            return !(this === R && f(U, e) && !f(X, e)) && (!(a || !f(this, e) || !f(U, e) || f(this, q) && this[q][e]) || a)
                        }, dt = function (t, e) {
                            var a = h(t),
                                r = m(e, !0);
                            if (a !== R || !f(U, r) || f(X, r)) {
                                var n = z(a, r);
                                return !n || !f(U, r) || f(a, q) && a[q][r] || (n.enumerable = !0), n
                            }
                        }, pt = function (t) {
                            var e = W(h(t)),
                                a = [];
                            return A(e, (function (t) {
                                f(U, t) || f(D, t) || a.push(t)
                            })), a
                        }, vt = function (t) {
                            var e = t === R,
                                a = W(e ? X : h(t)),
                                r = [];
                            return A(a, (function (t) {
                                !f(U, t) || e && !f(R, t) || r.push(U[t])
                            })), r
                        };
            if (c || (Y = function () {
                if (this instanceof Y) throw TypeError("Symbol is not a constructor");
                var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                    e = E(t),
                    a = function (t) {
                        this === R && a.call(X, t), f(this, q) && f(this[q], e) && (this[q][e] = !1), it(this, e, b(1, t))
                    };
                return o && nt && it(R, e, {
                    configurable: !0,
                    set: a
                }), st(e, t)
            }, P(Y[$], "toString", (function () {
                return H(this).tag
            })), C.f = ft, x.f = ct, N.f = dt, _.f = O.f = pt, S.f = vt, o && (Z(Y[$], "description", {
                configurable: !0,
                get: function () {
                    return H(this).description
                }
            }), s || P(R, "propertyIsEnumerable", ft, {
                unsafe: !0
            }))), u || (T.f = function (t) {
                return st(B(t), t)
            }), r({
                global: !0,
                wrap: !0,
                forced: !c,
                sham: !c
            }, {
                Symbol: Y
            }), A(w(at), (function (t) {
                F(t)
            })), r({
                target: M,
                stat: !0,
                forced: !c
            }, {
                for: function (t) {
                    var e = String(t);
                    if (f(tt, e)) return tt[e];
                    var a = Y(e);
                    return tt[e] = a, et[a] = e, a
                }, keyFor: function (t) {
                    if (!ot(t)) throw TypeError(t + " is not a symbol");
                    if (f(et, t)) return et[t]
                },
                useSetter: function () {
                    nt = !0
                },
                useSimple: function () {
                    nt = !1
                }
            }), r({
                target: "Object",
                stat: !0,
                forced: !c,
                sham: !o
            }, {
                create: lt,
                defineProperty: ct,
                defineProperties: ut,
                getOwnPropertyDescriptor: dt
            }), r({
                target: "Object",
                stat: !0,
                forced: !c
            }, {
                getOwnPropertyNames: pt,
                getOwnPropertySymbols: vt
            }), r({
                target: "Object",
                stat: !0,
                forced: l((function () {
                    S.f(1)
                }))
            }, {
                getOwnPropertySymbols: function (t) {
                    return S.f(y(t))
                }
            }), J) {
                var yt = !c || l((function () {
                    var t = Y();
                    return "[null]" != J([t]) || "{}" != J({
                        a: t
                    }) || "{}" != J(Object(t))
                }));
                r({
                    target: "JSON",
                    stat: !0,
                    forced: yt
                }, {
                    stringify: function (t, e, a) {
                        var r, n = [t],
                            i = 1;
                        while (arguments.length > i) n.push(arguments[i++]);
                        if (r = e, (p(e) || void 0 !== t) && !ot(t)) return d(e) || (e = function (t, e) {
                            if ("function" == typeof r && (e = r.call(this, t, e)), !ot(e)) return e
                        }), n[1] = e, J.apply(null, n)
                    }
                })
            }
            Y[$][Q] || L(Y[$], Q, Y[$].valueOf), I(Y, M), D[q] = !0
        },
        a7a1: function (t, e, a) {
            "use strict";
            var r = a("84e2"),
                n = a.n(r);
            n.a
        },
        b0c0: function (t, e, a) {
            var r = a("83ab"),
                n = a("9bf2").f,
                i = Function.prototype,
                s = i.toString,
                o = /^\s*function ([^ (]*)/,
                c = "name";
            !r || c in i || n(i, c, {
                configurable: !0,
                get: function () {
                    try {
                        return s.call(this).match(o)[1]
                    } catch (t) {
                        return ""
                    }
                }
            })
        },
        b64b: function (t, e, a) {
            var r = a("23e7"),
                n = a("7b0b"),
                i = a("df75"),
                s = a("d039"),
                o = s((function () {
                    i(1)
                }));
            r({
                target: "Object",
                stat: !0,
                forced: o
            }, {
                keys: function (t) {
                    return i(n(t))
                }
            })
        },
        b727: function (t, e, a) {
            var r = a("f8c2"),
                n = a("44ad"),
                i = a("7b0b"),
                s = a("50c4"),
                o = a("65f0"),
                c = [].push,
                u = function (t) {
                    var e = 1 == t,
                        a = 2 == t,
                        u = 3 == t,
                        l = 4 == t,
                        f = 6 == t,
                        d = 5 == t || f;
                    return function (p, v, y, h) {
                        for (var m, b, g = i(p), w = n(g), _ = r(v, y, 3), O = s(w.length), S = 0, N = h || o, x = e ? N(p, O) : a ? N(p, 0) : void 0; O > S; S++) if ((d || S in w) && (m = w[S], b = _(m, S, g), t)) if (e) x[S] = b;
                        else if (b) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return m;
                            case 6:
                                return S;
                            case 2:
                                c.call(x, m)
                        } else if (l) return !1;
                        return f ? -1 : u || l ? l : x
                    }
                };
            t.exports = {
                forEach: u(0),
                map: u(1),
                filter: u(2),
                some: u(3),
                every: u(4),
                find: u(5),
                findIndex: u(6)
            }
        },
        b786: function (t, e, a) {
            "use strict";
            a.r(e);
            var r = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "show"
                }, [a("Header"), a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "pannel vod_all clearfix"
                }, [a("div", {
                    staticClass: "listnow"
                }, [a("div", {
                    staticClass: "list_type_title"
                }, [a("div", {
                    staticClass: "sx_title2"
                }, [t._v(t._s(t.typeName))]), a("ul", {
                    staticClass: "sx_txt"
                }, [a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "全部" !== t.className && "一周热播" !== t.className,
                        expression: "className !== '全部' && className !== '一周热播'"
                    }]
                }, [t._v(t._s(t.className))]), a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "全部" !== t.area,
                        expression: "area !== '全部'"
                    }]
                }, [t._v(t._s(t.area))]), a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "全部" !== t.year,
                        expression: "year !== '全部'"
                    }]
                }, [t._v(t._s(t.year))]), a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "全部" !== t.lang,
                        expression: "lang !== '全部'"
                    }]
                }, [t._v(t._s(t.lang))]), a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "全部" !== t.letter,
                        expression: "letter !== '全部'"
                    }]
                }, [t._v(t._s(t.letter))])]), a("span", [a("a", {
                    on: {
                        click: function (e) {
                            return t.resetCondition(1)
                        }
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v(" 重选 ")])])])]), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.types[t.typeName],
                        expression: "types[typeName]"
                    }],
                    staticClass: "wrapper_fl",
                    attrs: {
                        id: "hl01"
                    }
                }, [a("div", {
                    staticClass: "scroller",
                    staticStyle: {
                        width: "100%",
                        "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        "transition-duration": "300ms",
                        transform: "translate(0px, 0px) translateZ(0px)"
                    }
                }, [a("ul", {
                    staticClass: "screen_list clearfix"
                }, t._l(t.types[t.typeName], (function (e, r) {
                    return a("li", {
                        key: r,
                        class: {
                            "hl conch-01 cur": t.type === e.id
                        },
                        attrs: {
                            id: "hl01-" + e.id
                        }
                    }, [a("a", {
                        on: {
                            click: function (a) {
                                return t.updateType(e.id, e.name)
                            }
                        }
                    }, [t._v(t._s(e.name))])])
                })), 0)])]), a("Condition", {
                    attrs: {
                        order: "02",
                        data: t.classes[t.typeName],
                        val: t.className
                    },
                    on: {
                        updateFun: t.updateClass
                    }
                }), a("Condition", {
                    attrs: {
                        order: "03",
                        data: t.areas[t.typeName],
                        val: t.area
                    },
                    on: {
                        updateFun: t.updateArea
                    }
                }), a("Condition", {
                    attrs: {
                        order: "04",
                        data: t.years,
                        val: t.year
                    },
                    on: {
                        updateFun: t.updateYear
                    }
                }), a("Condition", {
                    attrs: {
                        order: "05",
                        data: t.languages,
                        val: t.lang
                    },
                    on: {
                        updateFun: t.updateLang
                    }
                }), a("Condition", {
                    attrs: {
                        order: "06",
                        data: t.letters,
                        val: t.letter
                    },
                    on: {
                        updateFun: t.updateLetter
                    }
                })], 1), a("div", {
                    staticClass: "pannel clearfix"
                }, [a("div", {
                    staticClass: "wrapper_fl wrapper_tm",
                    staticStyle: {
                        "border-top": "0"
                    }
                }, [a("ul", {
                    staticClass: "screen_list sx_tz clearfix",
                    staticStyle: {
                        float: "left"
                    }
                }, [a("li", {
                    class: {
                        hl_fl: "time" === t.orderBy
                    }
                }, [a("a", {
                    on: {
                        click: function (e) {
                            return t.updateOrderBy("time")
                        }
                    }
                }, [t._v("按最新")])]), a("li", {
                    class: {
                        hl_fl: "hot" === t.orderBy
                    }
                }, [a("a", {
                    on: {
                        click: function (e) {
                            return t.updateOrderBy("hot")
                        }
                    }
                }, [t._v("按最热")])]), a("li", {
                    class: {
                        hl_fl: "score" === t.orderBy
                    }
                }, [a("a", {
                    on: {
                        click: function (e) {
                            return t.updateOrderBy("score")
                        }
                    }
                }, [t._v("按评分")])])]), a("span", {
                    staticClass: "sx_total"
                }, [t._v("共有"), a("em", {
                    staticClass: "mac_total"
                }, [t._v(t._s(t.qty))]), t._v("个频道")])]), a("vod-block", {
                    attrs: {
                        vodList: t.vodList
                    }
                }), a("ul", {
                    staticClass: "page text_center cleafix"
                }, [a("li", [a("a", {
                    class: 1 == t.page ? "btns_disad" : "",
                    on: {
                        click: t.firstPage
                    }
                }, [t._v("首页")])]), a("li", [a("a", {
                    class: 1 == t.page ? "btns_disad" : "",
                    on: {
                        click: t.prevPage
                    }
                }, [t._v("上一页")])]), a("li", [a("a", {
                    class: t.page == t.pageQty ? "btns_disad" : "",
                    on: {
                        click: t.nextPage
                    }
                }, [t._v("下一页")])]), a("li", [a("a", {
                    class: t.page == t.pageQty ? "btns_disad" : "",
                    on: {
                        click: t.lastPage
                    }
                }, [t._v("尾页")])])]), a("div", {
                    staticClass: "page_tips hidden_mb"
                }, [t._v("当前"), a("span", [t._v("第" + t._s(t.page) + "页")]), t._v(" / 共有" + t._s(t.pageQty) + "页")])], 1)])]), a("Back2Top", {
                    attrs: {
                        tab: "vod"
                    }
                }), a("Footer", {
                    attrs: {
                        tab: "vod"
                    }
                })], 1)
            },
                n = [],
                i = (a("a4d3"), a("4de4"), a("b0c0"), a("a9e3"), a("e439"), a("dbb4"), a("b64b"), a("159b"), a("fc11")),
                s = a("8bbf"),
                o = a.n(s),
                c = a("cebe"),
                u = a.n(c),
                l = a("5880"),
                f = a("0613"),
                d = a("fd2d"),
                p = a("c96a"),
                v = a("0418"),
                y = a("5373"),
                h = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.data && t.data.length > 0,
                            expression: "data && data.length > 0"
                        }],
                        staticClass: "wrapper_fl",
                        attrs: {
                            id: "hl" + t.order
                        }
                    }, [a("div", {
                        staticClass: "scroller",
                        staticStyle: {
                            "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
                            "transition-duration": "300ms",
                            transform: "translate(0px, 0px) translateZ(0px)"
                        }
                    }, [a("ul", {
                        staticClass: "screen_list clearfix"
                    }, t._l(t.data, (function (e, r) {
                        return a("li", {
                            key: r,
                            class: t.val == e.name ? "hl conch-" + t.order + " cur" : "",
                            attrs: {
                                id: "hl" + t.order + "-" + e.name
                            }
                        }, [a("a", {
                            on: {
                                click: function (a) {
                                    return t.updateFun(e.name)
                                }
                            }
                        }, [t._v(t._s(e.name))])])
                    })), 0)])])
                },
                m = [],
                b = o.a.extend({
                    name: "Condition",
                    props: {
                        data: Array,
                        order: String,
                        val: String
                    },
                    methods: {
                        updateFun: function (t) {
                            this.$emit("updateFun", t)
                        }
                    }
                }),
                g = b,
                w = (a("a7a1"), a("2877")),
                _ = Object(w["a"])(g, h, m, !1, null, "0129dd9e", null),
                O = _.exports;

            function S(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }
            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? S(Object(a), !0).forEach((function (e) {
                        Object(i["a"])(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : S(Object(a)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var x = o.a.extend({
                name: "Vod",
                props: {
                    cate: String
                },
                components: {
                    Header: v["a"],
                    Footer: d["a"],
                    Back2Top: p["a"],
                    VodBlock: y["a"],
                    Condition: O
                },
                data: function () {
                    return {
                        currentYear: (new Date).getFullYear() + 1,
                        vodList: [],
                        types: {},
                        classes: {},
                        areas: {
                            "动漫": [{
                                name: "全部"
                            }],
                            "电影": [{
                                name: "全部"
                            }],
                            "综艺": [{
                                name: "全部"
                            }],
                            "连续剧": [{
                                name: "全部"
                            }]
                        },
                        languages: [],
                        years: [{
                            name: "全部"
                        }],
                        letters: [{
                            name: "全部"
                        }],
                        orderBy: "time",
                        type: 1,
                        className: "全部",
                        area: "全部",
                        year: "全部",
                        lang: "全部",
                        letter: "全部",
                        page: 1,
                        qty: 0,
                        typeName: "",
                        needFresh: !1,
                        initStatus: !1
                    }
                },
                computed: N({}, Object(l["mapState"])(["routeFrom"]), {
                    pageQty: function () {
                        var t = this;
                        return Math.ceil(t.qty / 60)
                    }
                }),
                beforeRouteEnter: function (t, e, a) {
                    f["a"].commit("setRouteFrom", e.name), a()
                },
                activated: function () {
                    "details" !== this.routeFrom && this.init()
                },
                mounted: function () {
                    this.init();
                    for (var t = 1; t < 21; t += 1) this.years.push({
                        name: "".concat(this.currentYear - t)
                    });
                    for (var e = 1; e < 27; e += 1) this.letters.push({
                        name: String.fromCharCode(64 + e)
                    });
                    this.letters.push({
                        name: "0-9"
                    })
                },
                methods: {
                    init: function () {
                        var t = this;
                        if (t.resetCondition(0), !t.initStatus) {
                            if (t.initStatus = !0, t.year = t.$route.query.year || "全部", t.area = t.$route.query.area || "全部", t.className = t.$route.query.class || "全部", t.type = Number(t.$route.query.type), t.typeName = t.$route.query.typeName || "电影", !t.type) switch (t.typeName) {
                                case "电影":
                                    t.type = 1;
                                    break;
                                case "连续剧":
                                    t.type = 2;
                                    break;
                                case "动漫":
                                    t.type = 4;
                                    break;
                                case "综艺":
                                    t.type = 3;
                                    break;
                                default:
                                    break
                            }
                            "一周热播" === t.className && (t.orderBy = "hot"), t.fetchOptions()
                        }
                    },
                    fetchOptions: function () {
                        var t = this,
                            e = t.className;
                        u.a.get("/v1/vod-list-options", {
                            timeout: 1e4
                        }).then((function (a) {
                            if (t.initStatus = !1, t.types = a.data.types, t.areas = a.data.areas, t.classes = a.data.classes, t.languages = a.data.languages, "电影" === t.typeName) {
                                var r = 0;
                                t.areas["电影"].forEach((function (e, a, n) {
                                    t.area === e.name && (r = 1)
                                })), 0 === r && (t.area = "全部")
                            }
                            if ("连续剧" === t.typeName) {
                                var n = 0;
                                t.areas["连续剧"].forEach((function (e, a, r) {
                                    t.area === e.name && (n = 1)
                                })), 0 === n && (t.area = "全部")
                            }
                            if ("综艺" === t.typeName) {
                                var i = 0;
                                t.areas["综艺"].forEach((function (a, r, n) {
                                    e === a.name && (t.area = e, t.className = "全部", i = 1)
                                })), 0 === i && (t.area = "全部")
                            }
                            t.fetchData()
                        }), (function (e) {
                            t.initStatus = !1, t.$api.Toast("网络错误，请重试!")
                        }))
                    },
                    fetchData: function () {
                        var t = this;
                        u.a.get("/v1/vod-list", {
                            timeout: 1e4,
                            params: {
                                orderBy: t.orderBy,
                                type: t.type,
                                class: t.className,
                                area: t.area,
                                year: "全部" === t.year ? "" : t.year,
                                lang: t.lang,
                                letter: t.letter,
                                page: t.page
                            }
                        }).then((function (e) {
                            t.vodList = e.data.data, t.qty = e.data.qty, t.$nextTick((function () {
                                var e = document.getElementById("hl01-".concat(t.type));
                                e && e.scrollIntoView(), e = document.getElementById("hl02-".concat(t.className)), e && e.scrollIntoView(), e = document.getElementById("hl03-".concat(t.area)), e && e.scrollIntoView(), e = document.getElementById("hl04-".concat(t.year)), e && e.scrollIntoView(), e = document.getElementById("hl05-".concat(t.lang)), e && e.scrollIntoView(), e = document.getElementById("hl06-".concat(t.letter)), e && e.scrollIntoView(), window.scroll(0, 0)
                            }))
                        }), (function (e) {
                            t.$api.Toast("网络错误，请重试!")
                        }))
                    },
                    updateOrderBy: function (t) {
                        var e = this;
                        e.orderBy = t, e.page = 1, e.fetchData()
                    },
                    updateType: function (t, e) {
                        var a = this;
                        a.type = t, a.className = e, a.page = 1, a.fetchData()
                    },
                    updateClass: function (t) {
                        var e = this;
                        e.className = t, e.page = 1, e.fetchData()
                    },
                    updateArea: function (t) {
                        var e = this;
                        e.area = t, e.page = 1, e.fetchData()
                    },
                    updateYear: function (t) {
                        var e = this;
                        e.year = t, e.page = 1, e.fetchData()
                    },
                    updateLang: function (t) {
                        var e = this;
                        e.lang = t, e.page = 1, e.fetchData()
                    },
                    updateLetter: function (t) {
                        var e = this;
                        e.letter = t, e.page = 1, e.fetchData()
                    },
                    resetCondition: function (t) {
                        var e = this;
                        e.letter = "全部", e.orderBy = "time", e.className = "全部", e.area = "全部", e.lang = "全部", e.year = "全部", e.page = 1, t && e.fetchData()
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
                        t.page = 1, t.fetchData()
                    },
                    lastPage: function () {
                        var t = this;
                        t.page = t.pageQty, t.fetchData()
                    }
                }
            }),
                C = x,
                L = (a("371b"), Object(w["a"])(C, r, n, !1, null, "ac0db54a", null));
            e["default"] = L.exports
        },
        c032: function (t, e, a) {
            var r = a("b622");
            e.f = r
        },
        dbb4: function (t, e, a) {
            var r = a("23e7"),
                n = a("83ab"),
                i = a("56ef"),
                s = a("fc6a"),
                o = a("06cf"),
                c = a("8418");
            r({
                target: "Object",
                stat: !0,
                sham: !n
            }, {
                getOwnPropertyDescriptors: function (t) {
                    var e, a, r = s(t),
                        n = o.f,
                        u = i(r),
                        l = {},
                        f = 0;
                    while (u.length > f) a = n(r, e = u[f++]), void 0 !== a && c(l, e, a);
                    return l
                }
            })
        },
        e439: function (t, e, a) {
            var r = a("23e7"),
                n = a("d039"),
                i = a("fc6a"),
                s = a("06cf").f,
                o = a("83ab"),
                c = n((function () {
                    s(1)
                })),
                u = !o || c;
            r({
                target: "Object",
                stat: !0,
                forced: u,
                sham: !o
            }, {
                getOwnPropertyDescriptor: function (t, e) {
                    return s(i(t), e)
                }
            })
        },
        e8b5: function (t, e, a) {
            var r = a("c6b6");
            t.exports = Array.isArray ||
                function (t) {
                    return "Array" == r(t)
                }
        },
        f3ab: function (t, e, a) { },
        fc11: function (t, e, a) {
            "use strict";

            function r(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            a.d(e, "a", (function () {
                return r
            }))
        },
        fdbc: function (t, e) {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }
    }]);