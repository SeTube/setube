(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6c1ad768"],
    {
        "1dde": function (t, a, e) {
            var s = e("d039"),
                c = e("b622"),
                n = e("60ae"),
                i = c("species");
            t.exports = function (t) {
                return n >= 51 || !s((function () {
                    var a = [],
                        e = a.constructor = {};
                    return e[i] = function () {
                        return {
                            foo: 1
                        }
                    }, 1 !== a[t](Boolean).foo
                }))
            }
        },
        "2d0c": function (t, a, e) {
            "use strict";
            e.r(a);
            var s = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "comment"
                }, [e("Header", {
                    attrs: {
                        tab: "comment"
                    }
                }), e("van-pull-refresh", {
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
                }, [e("div", {
                    staticClass: "container white_pal"
                }, [t.tips ? e("div", {
                    staticClass: "tbmov-notice",
                    domProps: {
                        innerHTML: t._s(t.tips)
                    }
                }) : t._e(), e("div", {
                    staticClass: "input_row"
                }, [e("div", {
                    staticClass: "pannel clearfix"
                }, [e("div", {
                    staticClass: "mac_msg_r"
                }, [e("form", {
                    staticClass: "gbook_form gbook_font"
                }, [e("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.comment,
                        expression: "comment"
                    }],
                    staticClass: "gbook_content",
                    attrs: {
                        name: "gbook_content",
                        maxlength: "200",
                        placeholder: "输入留言内容"
                    },
                    domProps: {
                        value: t.comment
                    },
                    on: {
                        click: function (a) {
                            return t.hitComment()
                        },
                        input: function (a) {
                            a.target.composing || (t.comment = a.target.value)
                        }
                    }
                }), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showCaptcha,
                        expression: "showCaptcha"
                    }],
                    staticClass: "msg_code"
                }, [e("div", {
                    staticClass: "remaining_w"
                }, [t._v("提示：还可输入 "), e("span", {
                    staticClass: "gbook_remaining remaining"
                }, [t._v(t._s(200 - t.comment.length))]), t._v("字")]), e("div", {
                    staticClass: "remaining_btns"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.captchaValue,
                        expression: "captchaValue"
                    }],
                    staticClass: "verify",
                    attrs: {
                        type: "text",
                        name: "verify",
                        placeholder: "验证码"
                    },
                    domProps: {
                        value: t.captchaValue
                    },
                    on: {
                        input: function (a) {
                            a.target.composing || (t.captchaValue = a.target.value)
                        }
                    }
                }), e("img", {
                    staticClass: "comm-code fr",
                    attrs: {
                        title: "看不清楚? 换一张！",
                        src: t.captcha
                    },
                    on: {
                        click: t.fetchCaptcha
                    }
                }), e("input", {
                    staticClass: "gbook_submit submit_btn",
                    attrs: {
                        type: "button",
                        value: "提交留言"
                    },
                    on: {
                        click: t.submitComment
                    }
                })])])])])])]), e("div", {
                    staticClass: "commlist_row"
                }, [e("div", {
                    staticClass: "comm_list pannel clearfix"
                }, [e("div", {
                    staticClass: "pannel_head clearfix"
                }, [e("span", {
                    staticClass: "pull_right"
                }, [t._v("共 "), e("span", {
                    staticClass: "mycol"
                }, [t._v(t._s(t.qty))]), t._v(" 条留言，当前第 "), e("span", {
                    staticClass: "mycol"
                }, [t._v(t._s(t.page))]), t._v(" 页")]), e("h2", {
                    staticClass: "title"
                }, [t._v("留言")])]), e("ul", {
                    staticClass: "part_rows"
                }, t._l(t.commentList, (function (a, s) {
                    return e("li", {
                        key: s,
                        staticClass: "comm_each line_top margin"
                    }, [e("img", {
                        staticClass: "comm_avat part_roun",
                        attrs: {
                            src: "https://vip.cqkeb.com/88ys/img/touxiang.png?v=0626"
                        }
                    }), e("div", {
                        staticClass: "comm_head"
                    }, [e("strong", {
                        staticClass: "text_line"
                    }, [t._v("88影视网友")]), e("span", {
                        staticClass: "part_tips hidden_mb"
                    }, [t._v(t._s(t._f("transformTime")(1e3 * a.CommentTime)) + " "), e("span", {
                        staticClass: "split_line"
                    }), e("span", {
                        staticClass: "mycol"
                    }, [t._v(t._s(a.CommentID) + "#")])])]), e("div", {
                        staticClass: "comm_cont"
                    }, [e("div", {
                        staticClass: "comm_content"
                    }, [t._v(t._s(a.CommentContent))]), a.CommentReply ? e("div", {
                        staticClass: "comm_reply back_ashen comm_tops"
                    }, [e("div", {
                        staticClass: "comm_rp_head"
                    }, [e("span", {
                        staticClass: "text_line"
                    }, [e("strong", [e("span", {
                        staticClass: "mycol"
                    }, [t._v("编辑小姐姐: ")])]), t._v(t._s(a.CommentReply))])])]) : t._e()])])
                })), 0), e("ul", {
                    staticClass: "page text_center cleafix"
                }, [e("li", [e("a", {
                    class: 1 == t.page ? "btns_disad" : "",
                    on: {
                        click: t.firstPage
                    }
                }, [t._v("首页")])]), e("li", [e("a", {
                    class: 1 == t.page ? "btns_disad" : "",
                    on: {
                        click: t.prevPage
                    }
                }, [t._v("上一页")])]), e("li", [e("a", {
                    class: t.page == t.pageQty ? "btns_disad" : "",
                    on: {
                        click: t.nextPage
                    }
                }, [t._v("下一页")])]), e("li", [e("a", {
                    class: t.page == t.pageQty ? "btns_disad" : "",
                    on: {
                        click: t.lastPage
                    }
                }, [t._v("尾页")])])]), e("div", {
                    staticClass: "page_tips hidden_mb"
                }, [t._v("当前"), e("span", [t._v("第" + t._s(t.page) + "页")]), t._v(" / 共有" + t._s(t.pageQty) + "页")])])])])]), e("Back2Top"), e("Footer", {
                    attrs: {
                        tab: "comment"
                    }
                })], 1)
            },
                c = [],
                n = (e("99af"), e("8bbf")),
                i = e.n(n),
                o = e("cebe"),
                r = e.n(o),
                l = e("c96a"),
                m = e("fd2d"),
                p = e("0418"),
                u = i.a.extend({
                    name: "Comment",
                    props: {
                        msg: String
                    },
                    components: {
                        Back2Top: l["a"],
                        Footer: m["a"],
                        Header: p["a"]
                    },
                    computed: {
                        pageQty: function () {
                            var t = this;
                            return Math.ceil(t.qty / 10)
                        }
                    },
                    data: function () {
                        return {
                            showCaptcha: !1,
                            comment: "",
                            captchaId: "",
                            captcha: "",
                            captchaValue: "",
                            commentList: [],
                            tips: "",
                            page: 1,
                            qty: 0,
                            scrollHight: 290,
                            isLoading: !1
                        }
                    },
                    mounted: function () {
                        var t = this;
                        t.fetchData()
                    },
                    methods: {
                        onRefresh: function () {
                            var t = this;
                            t.commentList = [], t.tips = "", t.qty = 0, t.fetchData()
                        },
                        fetchData: function () {
                            var t = this;
                            r.a.get("https://setube.cc/v3/getRecommend", {
                                timeout: 1e4,
                                params: {
                                    page: t.page
                                }
                            }).then((function (a) {
                                t.isLoading = !1, t.commentList = a.data.comments, t.tips = a.data.tips, t.qty = a.data.qty
                            }), (function (a) {
                                t.$api.Toast("网络错误，请重试!"), t.isLoading = !1
                            }))
                        },
                        fetchCaptcha: function () {
                            var t = this;
                            r.a.get("/v1/verify-code", {
                                timeout: 1e4
                            }).then((function (a) {
                                t.captcha = a.data.data, t.captchaId = a.data.captchaId
                            }), (function (a) {
                                t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        hitComment: function () {
                            var t = this;
                            t.showCaptcha || (t.fetchCaptcha(), t.scrollHight = 400, t.showCaptcha = !0)
                        },
                        submitComment: function () {
                            var t = this;
                            return t.captchaValue ? t.comment ? (r.a.post("/v1/comment", {
                                captcha: t.captchaValue,
                                captchaId: t.captchaId,
                                comment: t.comment,
                                commentName: t.$cookies.get("userName")
                            }, {
                                timeout: 1e4
                            }).then((function (a) {
                                0 !== a.data.status ? (t.fetchCaptcha(), t.$api.Toast(a.data.msg), t.captchaValue = "") : (t.$api.Toast.success("谢谢，我们会尽快审核你的发言！"), t.comment = "", t.captchaValue = "", t.fetchCaptcha())
                            }), (function (a) {
                                t.$api.Toast("网络错误，请重试!")
                            })), !0) : (t.$api.Toast.fail("请填写留言"), !1) : (t.$api.Toast.fail("请填写验证码"), !1)
                        },
                        nextPage: function () {
                            var t = this;
                            t.page < t.pageQty && (t.page += 1, t.fetchData(), this.$nextTick((function () {
                                window.scroll(0, t.scrollHight)
                            })))
                        },
                        prevPage: function () {
                            var t = this;
                            t.page > 1 && (t.page -= 1, t.fetchData(), this.$nextTick((function () {
                                window.scroll(0, t.scrollHight)
                            })))
                        },
                        firstPage: function () {
                            var t = this;
                            t.page = 1, t.fetchData(), this.$nextTick((function () {
                                window.scroll(0, t.scrollHight)
                            }))
                        },
                        lastPage: function () {
                            var t = this;
                            t.page = t.pageQty, t.fetchData(), this.$nextTick((function () {
                                window.scroll(0, t.scrollHight)
                            }))
                        }
                    },
                    filters: {
                        transformTime: function (t) {
                            var a = new Date(t),
                                e = a.getFullYear(),
                                s = a.getMonth() + 1 > 9 ? a.getMonth() + 1 : "0".concat(a.getMonth() + 1),
                                c = a.getDate() > 9 ? a.getDate() : "0".concat(a.getDate()),
                                n = a.getHours() > 9 ? a.getHours() : "0".concat(a.getHours()),
                                i = a.getMinutes() > 9 ? a.getMinutes() : "0".concat(a.getMinutes()),
                                o = a.getSeconds() > 9 ? a.getSeconds() : "0".concat(a.getSeconds());
                            return "".concat(e, "-").concat(s, "-").concat(c, " ").concat(n, ":").concat(i, ":").concat(o)
                        },
                        transformHI: function (t) {
                            var a = new Date(t),
                                e = a.getHours(),
                                s = a.getMinutes();
                            return "".concat(e, ":").concat(s)
                        }
                    }
                }),
                d = u,
                h = (e("5314"), e("2877")),
                f = Object(h["a"])(d, s, c, !1, null, "6111e20b", null);
            a["default"] = f.exports
        },
        5314: function (t, a, e) {
            "use strict";
            var s = e("e5d3"),
                c = e.n(s);
            c.a
        },
        "65f0": function (t, a, e) {
            var s = e("861d"),
                c = e("e8b5"),
                n = e("b622"),
                i = n("species");
            t.exports = function (t, a) {
                var e;
                return c(t) && (e = t.constructor, "function" != typeof e || e !== Array && !c(e.prototype) ? s(e) && (e = e[i], null === e && (e = void 0)) : e = void 0), new (void 0 === e ? Array : e)(0 === a ? 0 : a)
            }
        },
        8418: function (t, a, e) {
            "use strict";
            var s = e("c04e"),
                c = e("9bf2"),
                n = e("5c6c");
            t.exports = function (t, a, e) {
                var i = s(a);
                i in t ? c.f(t, i, n(0, e)) : t[i] = e
            }
        },
        "99af": function (t, a, e) {
            "use strict";
            var s = e("23e7"),
                c = e("d039"),
                n = e("e8b5"),
                i = e("861d"),
                o = e("7b0b"),
                r = e("50c4"),
                l = e("8418"),
                m = e("65f0"),
                p = e("1dde"),
                u = e("b622"),
                d = e("60ae"),
                h = u("isConcatSpreadable"),
                f = 9007199254740991,
                g = "Maximum allowed index exceeded",
                v = d >= 51 || !c((function () {
                    var t = [];
                    return t[h] = !1, t.concat()[0] !== t
                })),
                _ = p("concat"),
                C = function (t) {
                    if (!i(t)) return !1;
                    var a = t[h];
                    return void 0 !== a ? !!a : n(t)
                },
                b = !v || !_;
            s({
                target: "Array",
                proto: !0,
                forced: b
            }, {
                concat: function (t) {
                    var a, e, s, c, n, i = o(this),
                        p = m(i, 0),
                        u = 0;
                    for (a = -1, s = arguments.length; a < s; a++) if (n = -1 === a ? i : arguments[a], C(n)) {
                        if (c = r(n.length), u + c > f) throw TypeError(g);
                        for (e = 0; e < c; e++, u++) e in n && l(p, u, n[e])
                    } else {
                        if (u >= f) throw TypeError(g);
                        l(p, u++, n)
                    }
                    return p.length = u, p
                }
            })
        },
        e5d3: function (t, a, e) { },
        e8b5: function (t, a, e) {
            var s = e("c6b6");
            t.exports = Array.isArray ||
                function (t) {
                    return "Array" == s(t)
                }
        }
    }]);