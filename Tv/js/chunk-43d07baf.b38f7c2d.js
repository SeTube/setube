(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-43d07baf"],
    {
        "159b": function (t, e, a) {
            var r = a("da84"),
                i = a("fdbc"),
                o = a("17c2"),
                n = a("9112");
            for (var s in i) {
                var c = r[s],
                    l = c && c.prototype;
                if (l && l.forEach !== o) try {
                    n(l, "forEach", o)
                } catch (d) {
                    l.forEach = o
                }
            }
        },
        "17c2": function (t, e, a) {
            "use strict";
            var r = a("b727").forEach,
                i = a("b301");
            t.exports = i("forEach") ?
                function (t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                } : [].forEach
        },
        "1dde": function (t, e, a) {
            var r = a("d039"),
                i = a("b622"),
                o = a("60ae"),
                n = i("species");
            t.exports = function (t) {
                return o >= 51 || !r((function () {
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
            var r = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("ul", {
                    staticClass: "vodlist vodlist_sh list_scroll clearfix"
                }, t._l(t.vodList, (function (e, r) {
                    return a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.VodID != t.id,
                            expression: "i.VodID != id"
                        }],
                        key: r,
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
                o = a("8bbf"),
                n = a.n(o),
                s = n.a.extend({
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
                c = s,
                l = (a("7acf"), a("2877")),
                d = Object(l["a"])(c, r, i, !1, null, "f9206076", null);
            e["a"] = d.exports
        },
        "3c35": function (t, e) {
            (function (e) {
                t.exports = e
            }).call(this, {})
        },
        4362: function (t, e, a) {
            e.nextTick = function (t) {
                var e = Array.prototype.slice.call(arguments);
                e.shift(), setTimeout((function () {
                    t.apply(null, e)
                }), 0)
            }, e.platform = e.arch = e.execPath = e.title = "browser", e.pid = 1, e.browser = !0, e.env = {}, e.argv = [], e.binding = function (t) {
                throw new Error("No such module. (Possibly not yet loaded)")
            }, function () {
                var t, r = "/";
                e.cwd = function () {
                    return r
                }, e.chdir = function (e) {
                    t || (t = a("df7c")), r = t.resolve(e, r)
                }
            }(), e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function () { }, e.features = {}
        },
        "4e82": function (t, e, a) {
            "use strict";
            var r = a("23e7"),
                i = a("1c0b"),
                o = a("7b0b"),
                n = a("d039"),
                s = a("b301"),
                c = [],
                l = c.sort,
                d = n((function () {
                    c.sort(void 0)
                })),
                u = n((function () {
                    c.sort(null)
                })),
                f = s("sort"),
                p = d || !u || f;
            r({
                target: "Array",
                proto: !0,
                forced: p
            }, {
                sort: function (t) {
                    return void 0 === t ? l.call(o(this)) : l.call(o(this), i(t))
                }
            })
        },
        "5de6": function (t, e, a) { },
        "65f0": function (t, e, a) {
            var r = a("861d"),
                i = a("e8b5"),
                o = a("b622"),
                n = o("species");
            t.exports = function (t, e) {
                var a;
                return i(t) && (a = t.constructor, "function" != typeof a || a !== Array && !i(a.prototype) ? r(a) && (a = a[n], null === a && (a = void 0)) : a = void 0), new (void 0 === a ? Array : a)(0 === e ? 0 : e)
            }
        },
        "7acf": function (t, e, a) {
            "use strict";
            var r = a("7b70"),
                i = a.n(r);
            i.a
        },
        "7b70": function (t, e, a) { },
        8237: function (module, exports, __webpack_require__) {
            (function (process, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                /**
                 * [js-md5]{@link https://github.com/emn178/js-md5}
                 *
                 * @namespace md5
                 * @version 0.7.3
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2014-2017
                 * @license MIT
                 */
                (function () {
                    "use strict";
                    var ERROR = "input is invalid type",
                        WINDOW = "object" === typeof window,
                        root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" === typeof self,
                        NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
                    NODE_JS ? root = global : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === typeof module && module.exports,
                        AMD = __webpack_require__("3c35"),
                        ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                        HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [128, 32768, 8388608, -2147483648],
                        SHIFT = [0, 8, 16, 24],
                        OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
                        BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                        blocks = [],
                        buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer)
                    } !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
                        return "object" === typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                    });
                    var createOutputMethod = function (t) {
                        return function (e) {
                            return new Md5(!0).update(e)[t]()
                        }
                    },
                        createMethod = function () {
                            var t = createOutputMethod("hex");
                            NODE_JS && (t = nodeWrap(t)), t.create = function () {
                                return new Md5
                            }, t.update = function (e) {
                                return t.create().update(e)
                            };
                            for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                                var a = OUTPUT_TYPES[e];
                                t[a] = createOutputMethod(a)
                            }
                            return t
                        },
                        nodeWrap = function (method) {
                            var crypto = eval("require('crypto')"),
                                Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function (t) {
                                    if ("string" === typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
                                    if (null === t || void 0 === t) throw ERROR;
                                    return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t)
                                };
                            return nodeMethod
                        };

                    function Md5(t) {
                        if (t) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8;
                        else if (ARRAY_BUFFER) {
                            var e = new ArrayBuffer(68);
                            this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e)
                        } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    Md5.prototype.update = function (t) {
                        if (!this.finalized) {
                            var e, a = typeof t;
                            if ("string" !== a) {
                                if ("object" !== a) throw ERROR;
                                if (null === t) throw ERROR;
                                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t))) throw ERROR;
                                e = !0
                            }
                            var r, i, o = 0,
                                n = t.length,
                                s = this.blocks,
                                c = this.buffer8;
                            while (o < n) {
                                if (this.hashed && (this.hashed = !1, s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), e) if (ARRAY_BUFFER) for (i = this.start; o < n && i < 64; ++o) c[i++] = t[o];
                                else for (i = this.start; o < n && i < 64; ++o) s[i >> 2] |= t[o] << SHIFT[3 & i++];
                                else if (ARRAY_BUFFER) for (i = this.start; o < n && i < 64; ++o) r = t.charCodeAt(o), r < 128 ? c[i++] = r : r < 2048 ? (c[i++] = 192 | r >> 6, c[i++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (c[i++] = 224 | r >> 12, c[i++] = 128 | r >> 6 & 63, c[i++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++o)), c[i++] = 240 | r >> 18, c[i++] = 128 | r >> 12 & 63, c[i++] = 128 | r >> 6 & 63, c[i++] = 128 | 63 & r);
                                else for (i = this.start; o < n && i < 64; ++o) r = t.charCodeAt(o), r < 128 ? s[i >> 2] |= r << SHIFT[3 & i++] : r < 2048 ? (s[i >> 2] |= (192 | r >> 6) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]) : r < 55296 || r >= 57344 ? (s[i >> 2] |= (224 | r >> 12) << SHIFT[3 & i++], s[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++o)), s[i >> 2] |= (240 | r >> 18) << SHIFT[3 & i++], s[i >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]);
                                this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, Md5.prototype.finalize = function () {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var t = this.blocks,
                                e = this.lastByteIndex;
                            t[e >> 2] |= EXTRA[3 & e], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash()
                        }
                    }, Md5.prototype.hash = function () {
                        var t, e, a, r, i, o, n = this.blocks;
                        this.first ? (t = n[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, r = (-1732584194 ^ 2004318071 & t) + n[1] - 117830708, r = (r << 12 | r >>> 20) + t << 0, a = (-271733879 ^ r & (-271733879 ^ t)) + n[2] - 1126478375, a = (a << 17 | a >>> 15) + r << 0, e = (t ^ a & (r ^ t)) + n[3] - 1316259209, e = (e << 22 | e >>> 10) + a << 0) : (t = this.h0, e = this.h1, a = this.h2, r = this.h3, t += (r ^ e & (a ^ r)) + n[0] - 680876936, t = (t << 7 | t >>> 25) + e << 0, r += (a ^ t & (e ^ a)) + n[1] - 389564586, r = (r << 12 | r >>> 20) + t << 0, a += (e ^ r & (t ^ e)) + n[2] + 606105819, a = (a << 17 | a >>> 15) + r << 0, e += (t ^ a & (r ^ t)) + n[3] - 1044525330, e = (e << 22 | e >>> 10) + a << 0), t += (r ^ e & (a ^ r)) + n[4] - 176418897, t = (t << 7 | t >>> 25) + e << 0, r += (a ^ t & (e ^ a)) + n[5] + 1200080426, r = (r << 12 | r >>> 20) + t << 0, a += (e ^ r & (t ^ e)) + n[6] - 1473231341, a = (a << 17 | a >>> 15) + r << 0, e += (t ^ a & (r ^ t)) + n[7] - 45705983, e = (e << 22 | e >>> 10) + a << 0, t += (r ^ e & (a ^ r)) + n[8] + 1770035416, t = (t << 7 | t >>> 25) + e << 0, r += (a ^ t & (e ^ a)) + n[9] - 1958414417, r = (r << 12 | r >>> 20) + t << 0, a += (e ^ r & (t ^ e)) + n[10] - 42063, a = (a << 17 | a >>> 15) + r << 0, e += (t ^ a & (r ^ t)) + n[11] - 1990404162, e = (e << 22 | e >>> 10) + a << 0, t += (r ^ e & (a ^ r)) + n[12] + 1804603682, t = (t << 7 | t >>> 25) + e << 0, r += (a ^ t & (e ^ a)) + n[13] - 40341101, r = (r << 12 | r >>> 20) + t << 0, a += (e ^ r & (t ^ e)) + n[14] - 1502002290, a = (a << 17 | a >>> 15) + r << 0, e += (t ^ a & (r ^ t)) + n[15] + 1236535329, e = (e << 22 | e >>> 10) + a << 0, t += (a ^ r & (e ^ a)) + n[1] - 165796510, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ a & (t ^ e)) + n[6] - 1069501632, r = (r << 9 | r >>> 23) + t << 0, a += (t ^ e & (r ^ t)) + n[11] + 643717713, a = (a << 14 | a >>> 18) + r << 0, e += (r ^ t & (a ^ r)) + n[0] - 373897302, e = (e << 20 | e >>> 12) + a << 0, t += (a ^ r & (e ^ a)) + n[5] - 701558691, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ a & (t ^ e)) + n[10] + 38016083, r = (r << 9 | r >>> 23) + t << 0, a += (t ^ e & (r ^ t)) + n[15] - 660478335, a = (a << 14 | a >>> 18) + r << 0, e += (r ^ t & (a ^ r)) + n[4] - 405537848, e = (e << 20 | e >>> 12) + a << 0, t += (a ^ r & (e ^ a)) + n[9] + 568446438, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ a & (t ^ e)) + n[14] - 1019803690, r = (r << 9 | r >>> 23) + t << 0, a += (t ^ e & (r ^ t)) + n[3] - 187363961, a = (a << 14 | a >>> 18) + r << 0, e += (r ^ t & (a ^ r)) + n[8] + 1163531501, e = (e << 20 | e >>> 12) + a << 0, t += (a ^ r & (e ^ a)) + n[13] - 1444681467, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ a & (t ^ e)) + n[2] - 51403784, r = (r << 9 | r >>> 23) + t << 0, a += (t ^ e & (r ^ t)) + n[7] + 1735328473, a = (a << 14 | a >>> 18) + r << 0, e += (r ^ t & (a ^ r)) + n[12] - 1926607734, e = (e << 20 | e >>> 12) + a << 0, i = e ^ a, t += (i ^ r) + n[5] - 378558, t = (t << 4 | t >>> 28) + e << 0, r += (i ^ t) + n[8] - 2022574463, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, a += (o ^ e) + n[11] + 1839030562, a = (a << 16 | a >>> 16) + r << 0, e += (o ^ a) + n[14] - 35309556, e = (e << 23 | e >>> 9) + a << 0, i = e ^ a, t += (i ^ r) + n[1] - 1530992060, t = (t << 4 | t >>> 28) + e << 0, r += (i ^ t) + n[4] + 1272893353, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, a += (o ^ e) + n[7] - 155497632, a = (a << 16 | a >>> 16) + r << 0, e += (o ^ a) + n[10] - 1094730640, e = (e << 23 | e >>> 9) + a << 0, i = e ^ a, t += (i ^ r) + n[13] + 681279174, t = (t << 4 | t >>> 28) + e << 0, r += (i ^ t) + n[0] - 358537222, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, a += (o ^ e) + n[3] - 722521979, a = (a << 16 | a >>> 16) + r << 0, e += (o ^ a) + n[6] + 76029189, e = (e << 23 | e >>> 9) + a << 0, i = e ^ a, t += (i ^ r) + n[9] - 640364487, t = (t << 4 | t >>> 28) + e << 0, r += (i ^ t) + n[12] - 421815835, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, a += (o ^ e) + n[15] + 530742520, a = (a << 16 | a >>> 16) + r << 0, e += (o ^ a) + n[2] - 995338651, e = (e << 23 | e >>> 9) + a << 0, t += (a ^ (e | ~r)) + n[0] - 198630844, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~a)) + n[7] + 1126891415, r = (r << 10 | r >>> 22) + t << 0, a += (t ^ (r | ~e)) + n[14] - 1416354905, a = (a << 15 | a >>> 17) + r << 0, e += (r ^ (a | ~t)) + n[5] - 57434055, e = (e << 21 | e >>> 11) + a << 0, t += (a ^ (e | ~r)) + n[12] + 1700485571, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~a)) + n[3] - 1894986606, r = (r << 10 | r >>> 22) + t << 0, a += (t ^ (r | ~e)) + n[10] - 1051523, a = (a << 15 | a >>> 17) + r << 0, e += (r ^ (a | ~t)) + n[1] - 2054922799, e = (e << 21 | e >>> 11) + a << 0, t += (a ^ (e | ~r)) + n[8] + 1873313359, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~a)) + n[15] - 30611744, r = (r << 10 | r >>> 22) + t << 0, a += (t ^ (r | ~e)) + n[6] - 1560198380, a = (a << 15 | a >>> 17) + r << 0, e += (r ^ (a | ~t)) + n[13] + 1309151649, e = (e << 21 | e >>> 11) + a << 0, t += (a ^ (e | ~r)) + n[4] - 145523070, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~a)) + n[11] - 1120210379, r = (r << 10 | r >>> 22) + t << 0, a += (t ^ (r | ~e)) + n[2] + 718787259, a = (a << 15 | a >>> 17) + r << 0, e += (r ^ (a | ~t)) + n[9] - 343485551, e = (e << 21 | e >>> 11) + a << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = a - 1732584194 << 0, this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + a << 0, this.h3 = this.h3 + r << 0)
                    }, Md5.prototype.hex = function () {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            a = this.h2,
                            r = this.h3;
                        return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15]
                    }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function () {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            a = this.h2,
                            r = this.h3;
                        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]
                    }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function () {
                        this.finalize();
                        var t = new ArrayBuffer(16),
                            e = new Uint32Array(t);
                        return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t
                    }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function () {
                        for (var t, e, a, r = "", i = this.array(), o = 0; o < 15;) t = i[o++], e = i[o++], a = i[o++], r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | a >>> 6)] + BASE64_ENCODE_CHAR[63 & a];
                        return t = i[o], r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==", r
                    };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return exports
                    }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                })()
            }).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"))
        },
        8363: function (t, e, a) {
            "use strict";
            a.r(e);
            var r = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "play_page"
                    }
                }, [t.IAmIOS ? a("div", {
                    staticClass: "hot_banner"
                }, [a("Header", {
                    ref: "header",
                    attrs: {
                        playPage: !0,
                        detailVid: t.id,
                        tab: "play"
                    },
                    on: {
                        openShare: t.openShare
                    }
                })], 1) : t._e(), a("div", {
                    staticClass: "play_boxbg"
                }, [a("div", {
                    staticClass: "container",
                    staticStyle: {
                        padding: "0 !important"
                    }
                }, [a("div", {
                    staticClass: "play_box play_video"
                }, [a("div", {
                    staticClass: "left_row fl"
                }, [a("Player", {
                    attrs: {
                        targetUrl: t.iframeUrl,
                        category: t.category,
                        episode: t.nextEpisode,
                        getUrlT: t.getUrlT,
                        setUrlT: t.setUrlT
                    }
                }), a("div", {
                    staticClass: "play_but bline"
                }, [a("ul", [a("li", [a("a", {
                    on: {
                        click: t.gotoBofy
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v("线路")]), a("a", {
                    attrs: {
                        href: "javascript:"
                    },
                    on: {
                        click: function (e) {
                            return t.reloadPage()
                        }
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v("刷新 ")]), a("router-link", {
                    class: {
                        btns_disad: parseInt(t.p) < 1
                    },
                    attrs: {
                        to: "/play/" + t.vod.VodID + "/" + t.u + "/" + (parseInt(t.p) - 1)
                    }
                }, [a("i", {
                    staticClass: "iconfont pre-t"
                }, [t._v("")]), t._v("上集 ")]), a("router-link", {
                    class: {
                        btns_disad: t.disableNext()
                    },
                    attrs: {
                        to: "/play/" + t.vod.VodID + "/" + t.u + "/" + (parseInt(t.p) + 1)
                    }
                }, [t._v(" 下集 "), a("i", {
                    staticClass: "iconfont next-p next-t"
                }, [t._v("")])]), t.IAmIOS ? t._e() : a("a", {
                    attrs: {
                        title: "全屏"
                    },
                    on: {
                        click: t.h52Native
                    }
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")]), t._v("投屏")])], 1)])])], 1)]), a("div", {
                    staticClass: "play_box"
                }, [a("div", {
                    staticClass: "left_row fl"
                }, [a("div", {
                    staticClass: "pannel play_pan clearfix"
                }, [a("div", {
                    staticClass: "player"
                }, [a("div", {
                    staticClass: "player_detail detail cblock"
                }, [a("div", {
                    staticClass: "video_title fl"
                }, [a("h2", {
                    staticClass: "title margin_0"
                }, [t._v(t._s(t.vod.VodName))])]), a("div", {
                    staticClass: "play_now"
                }, [a("a", {
                    staticClass: "flip",
                    on: {
                        click: function (e) {
                            t.showPlayContent = !t.showPlayContent
                        }
                    }
                }, [t._v("简介 "), t.showPlayContent ? a("span", {
                    staticClass: "xs2"
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")])]) : a("span", {
                    staticClass: "xs1"
                }, [a("i", {
                    staticClass: "iconfont"
                }, [t._v("")])])])])]), a("div", {
                    staticClass: "play_text"
                }, [a("p", {
                    staticClass: "nstem data ms_p margin_0"
                }, [a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodScore,
                        expression: "vod.VodScore"
                    }],
                    staticClass: "text_score"
                }, [t._v(t._s(t.vod.VodScore) + ".0"), a("span", {
                    staticClass: "split_line"
                })]), a("router-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodYear && "0" != t.vod.VodYear,
                        expression: "vod.VodYear && vod.VodYear!='0'"
                    }],
                    attrs: {
                        to: "/vod?typeName=" + t.typeName + "&year=" + t.vod.VodYear
                    }
                }, [t._v(t._s(t.vod.VodYear))]), t._v(" "), a("router-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodArea,
                        expression: "vod.VodArea"
                    }],
                    attrs: {
                        to: "/vod?typeName=" + t.typeName + "&area=" + t.vod.VodArea
                    }
                }, [t._v(t._s(t.vod.VodArea))]), t._v(" "), a("router-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.vod.VodClass,
                        expression: "vod.VodClass"
                    }],
                    attrs: {
                        to: "/vod?typeName=" + t.typeName + "&class=" + t.vod.VodClass.TypeName + "&type=" + t.vod.TypeID
                    }
                }, [t._v(t._s(t.vod.VodClass.TypeName))])], 1)]), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showPlayContent,
                        expression: "showPlayContent"
                    }],
                    staticClass: "panel play_content"
                }, [t.vod.VodDirector ? a("p", [t._v("导演："), a("a", [t._v(t._s(t.vod.VodDirector.replace(/,/g, " ")))])]) : t._e(), t.vod.VodActor ? a("p", [t._v("主演："), a("a", [t._v(t._s(t.vod.VodActor.replace(/,/g, " ")))])]) : t._e(), a("p", {
                    domProps: {
                        innerHTML: t._s(t.vod.VodContent)
                    }
                })])])])])])])]), a("div", {
                    staticClass: "container",
                    staticStyle: {
                        "margin-top": "0 !important"
                    }
                }, [a("div", {
                    staticClass: "left_row fl"
                }, [a("div", {
                    staticClass: "pannel clearfix",
                    attrs: {
                        id: "bofy"
                    }
                }, [a("div", {
                    staticClass: "pannel_head clearfix",
                    staticStyle: {
                        margin: "0.1rem 0"
                    }
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
                    staticClass: "tabs playlist"
                }, [a("div", {
                    staticClass: "wrapper_fl xl",
                    staticStyle: {
                        overflow: "scroll"
                    },
                    attrs: {
                        id: "hl01"
                    }
                }, [a("div", {
                    ref: "playFroms",
                    staticClass: "scroller",
                    staticStyle: {
                        "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        "transition-duration": "0ms",
                        transform: "translate(0px, 0px) translateZ(0px)"
                    },
                    attrs: {
                        id: "playFroms"
                    }
                }, [a("div", {
                    staticClass: "title_nav"
                }, t._l(t.vod.VodPlayServer, (function (e, r) {
                    return a("div", {
                        key: r,
                        staticClass: "tab-play",
                        staticStyle: {
                            "margin-left": "0",
                            "margin-right": "0"
                        },
                        attrs: {
                            title: e.Show,
                            id: "l-" + r
                        },
                        on: {
                            click: function (e) {
                                return t.tabClick(r)
                            }
                        }
                    }, [a("a", {
                        class: {
                            playnow_info: t.player === e.Show
                        },
                        on: {
                            click: function (a) {
                                return t.changeCategory(e.From)
                            }
                        }
                    }, [a("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), t._v(" " + t._s(e.Show) + " ")])])
                })), 0)])]), t._l(t.vod.VodPlayServer, (function (e, r) {
                    return a("div", {
                        key: r,
                        staticClass: "play_list_box",
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
                    }, t._l(t.vod.VodPlayUrls[e.From], (function (i, o) {
                        return a("li", {
                            key: "pl-" + o,
                            class: {
                                "active conch-02 cur": t.hp(o, t.vod.VodPlayUrls[e.From])
                            },
                            staticStyle: {
                                float: "none"
                            },
                            attrs: {
                                id: "asc" === t.sort ? "s-play-" + t.vod.VodID + "-" + r + "-" + o : "s-play-" + t.vod.VodID + "-" + r + "-" + (t.vod.VodPlayUrls[e.From].length - o - 1)
                            }
                        }, ["asc" === t.sort ? a("router-link", {
                            attrs: {
                                to: "/play/" + t.vod.VodID + "/" + r + "/" + o
                            }
                        }, [t._v(" " + t._s(i[0]) + " ")]) : a("router-link", {
                            attrs: {
                                to: "/play/" + t.vod.VodID + "/" + r + "/" + (t.vod.VodPlayUrls[e.From].length - o - 1)
                            }
                        }, [t._v(" " + t._s(t.vod.VodPlayUrls[e.From][t.vod.VodPlayUrls[e.From].length - o - 1][0]) + " ")])], 1)
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
                    }, t._l(t.vod.VodPlayUrls[e.From], (function (i, o) {
                        return a("li", {
                            key: "plf-" + o,
                            class: {
                                "active conch-02 cur": t.hp(o, t.vod.VodPlayUrls[e.From])
                            }
                        }, ["asc" === t.sort ? a("router-link", {
                            attrs: {
                                to: "/play/" + t.vod.VodID + "/" + r + "/" + o
                            }
                        }, [t._v(" " + t._s(i[0]) + " ")]) : a("router-link", {
                            attrs: {
                                to: "/play/" + t.vod.VodID + "/" + r + "/" + (t.vod.VodPlayUrls[e.From].length - o - 1)
                            }
                        }, [t._v(" " + t._s(t.vod.VodPlayUrls[e.From][t.vod.VodPlayUrls[e.From].length - o - 1][0]) + " ")])], 1)
                    })), 0)])])
                }))], 2)]), a("AdImage", {
                    attrs: {
                        tab: "88spa-detail"
                    }
                }), a("div", {
                    staticClass: "pannel hidden_mb clearfix"
                }, [t._m(0), a("div", {
                    staticClass: "play_vlist_box"
                }, t._l(t.randList, (function (e, r) {
                    return a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r < 4,
                            expression: "k < 4"
                        }],
                        key: r,
                        staticClass: "play_vlist cblock"
                    }, [a("router-link", {
                        attrs: {
                            to: "/details/" + e.VodID,
                            title: e.VodName
                        }
                    }, [a("div", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy:background-image",
                            value: e.VodPic,
                            expression: "i.VodPic",
                            arg: "background-image"
                        }],
                        staticClass: "play_vlist_thumb lazyload"
                    }), a("div", {
                        staticClass: "play_vlist_text"
                    }, [a("div", {
                        staticClass: "play_vlist_title"
                    }, [a("p", [t._v(t._s(e.VodName))]), e.VodYear && "0" != e.VodYear ? a("p", {
                        staticClass: "play_vlist_tag"
                    }, [t._v("类型：" + t._s(e.VodClass.TypeName) + " / 年份：" + t._s(e.VodYear))]) : a("p", {
                        staticClass: "play_vlist_tag"
                    }, [t._v("类型：" + t._s(e.VodClass.TypeName) + " ")])]), a("p", {
                        staticClass: "play_vlist_now"
                    }, [t._v(t._s(e.VodRemarks))])])])], 1)
                })), 0)]), a("div", {
                    staticClass: "pannel clearfix"
                }, [t._m(1), a("HorizontalList", {
                    attrs: {
                        vodList: t.relateList,
                        hideId: t.id,
                        hightImage: !0
                    },
                    on: {
                        newDetail: t.newDetail
                    }
                })], 1), a("div", {
                    staticClass: "pannel clearfix",
                    staticStyle: {
                        "margin-bottom": "1.5rem"
                    },
                    attrs: {
                        id: "pinglun"
                    }
                }, [a("div", {
                    staticClass: "pannel_head clearfix"
                }, [a("span", {
                    staticClass: "pull_right"
                }, [t._v("共 "), a("font", {
                    attrs: {
                        color: "#ff5f00"
                    }
                }, [a("em", {
                    staticClass: "mac_total"
                }, [t._v(t._s(t.qty))])]), t._v(" 条评论")], 1), a("h3", {
                    staticClass: "title"
                }, [t._v("评论")])]), a("div", {
                    staticClass: "mac_comment comm_list comm_list_box"
                }, [a("div", {
                    staticClass: "part_rows_fa"
                }, [a("form", {
                    staticClass: "comment_form cmt_form clearfix"
                }, [a("input", {
                    attrs: {
                        type: "hidden",
                        name: "comment_pid",
                        value: "0"
                    }
                }), a("div", {
                    staticClass: "input_wrap clearfix"
                }, [a("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.comment,
                        expression: "comment"
                    }],
                    staticClass: "comment_content",
                    attrs: {
                        name: "comment_content",
                        placeholder: "文明发言，共建和谐社会",
                        maxlength: "200"
                    },
                    domProps: {
                        value: t.comment
                    },
                    on: {
                        click: function (e) {
                            return t.hitComment()
                        },
                        input: function (e) {
                            e.target.composing || (t.comment = e.target.value)
                        }
                    }
                }), t._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showCode,
                        expression: "showCode"
                    }],
                    staticClass: "smt fr clearfix smt_hidn"
                }, [a("div", {
                    staticClass: "comm_tips fl"
                }, [t._v("还可以输入"), a("span", {
                    staticClass: "comment_remaining"
                }, [t._v(" " + t._s(200 - t.comment.length) + " ")]), t._v("字 ")]), a("input", {
                    staticClass: "comment_submit cmt_post fr",
                    attrs: {
                        type: "button",
                        value: "发布"
                    },
                    on: {
                        click: t.submitComment
                    }
                }), a("img", {
                    staticClass: "comm-code fr",
                    attrs: {
                        title: "看不清楚? 换一张！",
                        src: t.captcha
                    },
                    on: {
                        click: t.fetchCaptcha
                    }
                }), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.captchaValue,
                        expression: "captchaValue"
                    }],
                    staticClass: "verify fr",
                    attrs: {
                        type: "text",
                        name: "verify",
                        placeholder: "验证码"
                    },
                    domProps: {
                        value: t.captchaValue
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.captchaValue = e.target.value)
                        }
                    }
                })])])])]), a("ul", {
                    staticClass: "part_rows"
                }, t._l(t.commentList, (function (e, r) {
                    return a("li", {
                        key: r,
                        staticClass: "comm_each line_top margin"
                    }, [a("div", {
                        staticClass: "comm_head"
                    }, [a("strong", {
                        staticClass: "text_line"
                    }, [t._v("游客")]), a("span", {
                        staticClass: "part_tips hidden_mb"
                    }, [t._v(t._s(t._f("transformTime")(1e3 * e.CommentTime)) + " "), a("span", {
                        staticClass: "split_line"
                    }), a("span", {
                        staticClass: "mycol"
                    }, [t._v(t._s(t.qty - 10 * (t.page - 1) - r) + "#")])])]), a("div", {
                        staticClass: "comm_cont"
                    }, [a("div", {
                        staticClass: "comm_content"
                    }, [t._v(t._s(e.CommentContent))]), e.CommentReply ? a("div", {
                        staticClass: "comm_reply back_ashen comm_tops"
                    }, [a("div", {
                        staticClass: "comm_rp_head"
                    }, [a("span", {
                        staticClass: "text_line"
                    }, [t._m(2, !0), t._v(t._s(e.CommentReply))])])]) : t._e()])])
                })), 0)]), a("ul", {
                    staticClass: "page text_center cleafix"
                }, [a("li", [a("a", {
                    class: 1 == t.page || t.qty < 1 ? "btns_disad" : "",
                    on: {
                        click: t.firstPage
                    }
                }, [t._v("首页")])]), a("li", [a("a", {
                    class: 1 == t.page || t.qty < 1 ? "btns_disad" : "",
                    on: {
                        click: t.prevPage
                    }
                }, [t._v("上一页")])]), a("li", [a("a", {
                    class: t.page == t.pageQty || t.qty < 1 ? "btns_disad" : "",
                    on: {
                        click: t.nextPage
                    }
                }, [t._v("下一页")])]), a("li", [a("a", {
                    class: t.page == t.pageQty || t.qty < 1 ? "btns_disad" : "",
                    on: {
                        click: t.lastPage
                    }
                }, [t._v("尾页")])])]), a("div", {
                    staticClass: "page_tips hidden_mb"
                }, [t._v("当前"), a("span", [t._v("第" + t._s(t.page) + "页")]), t._v(" / 共有" + t._s(t.pageQty) + "页")])])], 1)]), a("Back2Top"), a("Footer", {
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
                }, [t._m(3)]), a("div", {
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
                        id: "short"
                    }
                }, [t._v(t._s(t.shareContent))])]), a("div", {
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
                        value: t.showShare || t.showLogin,
                        expression: "showShare || showLogin"
                    }],
                    staticClass: "sharebg sharebg-active"
                })], 1)
            },
                i = [function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "pannel_head clearfix"
                    }, [a("h3", {
                        staticClass: "title"
                    }, [t._v(" 猜你喜欢 ")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "pannel_head clearfix"
                    }, [a("h3", {
                        staticClass: "title"
                    }, [t._v(" 相关推荐 ")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("strong", [a("span", {
                        staticClass: "mycol"
                    }, [t._v("编辑小姐姐: ")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "copy-tip"
                    }, [a("p", [t._v("耶～～复制成功")])])
                }],
                o = (a("99af"), a("c975"), a("4e82"), a("a434"), a("e25e"), a("466d"), a("5319"), a("1276"), a("8bbf")),
                n = a.n(o),
                s = a("cebe"),
                c = a.n(s),
                l = a("b311"),
                d = a.n(l),
                u = a("8237"),
                f = a.n(u),
                p = a("c96a"),
                h = a("0418"),
                m = a("fd2d"),
                v = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "player_video embed-responsive embed-responsive-16by9 clearfix"
                    }, [a("iframe", {
                        style: t.loaded && t.iframeLoaded ? "position:absolute;z-index:99998;display:none;" : "position:absolute;z-index:99998;",
                        attrs: {
                            id: "install",
                            src: "",//播放器广告
                            frameborder: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    }), t._m(0)])
                },
                y = [function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("table", {
                        attrs: {
                            border: "0",
                            cellpadding: "0",
                            cellspacing: "0",
                            width: "100%"
                        }
                    }, [a("tbody", [a("tr", [a("td", {
                        attrs: {
                            id: "playleft",
                            valign: "top"
                        }
                    })])])])
                }],
                g = (a("b64b"), a("159b"), n.a.extend({
                    name: "Player",
                    props: {
                        targetUrl: String,
                        getUrlT: Function,
                        episode: Function,
                        setUrlT: Function
                    },
                    data: function () {
                        return {
                            parentIframeSrc: "",
                            loaded: !1,
                            iframeLoaded: !1,
                            curIv: !1,
                            fullUrl: "",
                            t: 0,
                            inte0: !1,
                            inte1: !1,
                            inte2: !1
                        }
                    },
                    mounted: function () {
                        var t = this;
                        t.fillIframe()
                    },
                    created: function () {
                        var t = this;
                        window.addEventListener("message", t.getPostMessage, !0);
                        var e = window.localStorage.getItem("urlHistory");
                        if (e) {
                            e = JSON.parse(e);
                            var a = (new Date).getTime() - 2592e6;
                            Object.keys(e).forEach((function (t) {
                                e[t].ts < a && delete e[t]
                            })), window.localStorage.setItem("urlHistory", JSON.stringify(e))
                        }
                    },
                    destroyed: function () {
                        window.removeEventListener("message", this.getPostMessage, !0), this.inte0 && clearInterval(this.inte0), clearInterval(this.inte1), clearInterval(this.inte2)
                    },
                    watch: {
                        targetUrl: function () {
                            var t = this;
                            if (t.loaded = !1, t.iframeLoaded = !1, clearInterval(t.inte1), clearInterval(t.inte2), t.targetUrl) t.fillIframe();
                            else {
                                var e = document.getElementById("playingIframe");
                                e && e.remove()
                            }
                        }
                    },
                    computed: {
                        playerH: function () {
                            return "".concat(9 * document.body.clientWidth / 16, "px")
                        }
                    },
                    methods: {
                        getPostMessage: function (t) {
                            var e = this;
                            try {
                                if ("string" === typeof t.data) {
                                    var a = JSON.parse(t.data);
                                    if ("next" === a.action) {
                                        var r = window.localStorage.getItem("urlHistory");
                                        if (r) {
                                            r = JSON.parse(r);
                                            var i = f()(e.targetUrl);
                                            delete r[i], window.localStorage.setItem("urlHistory", JSON.stringify(r))
                                        }
                                        e.episode()
                                    } else if ("current" === a.action) e.setUrlT(a.t);
                                    else if ("continue" === a.action) {
                                        var o = 0;
                                        e.inte0 = setInterval((function () {
                                            e.loaded && e.iframeLoaded && (clearInterval(e.inte0), e.$api.Toast({
                                                message: '您上次观看至 <span style="color:red;">'.concat(e.formatSeconds(), "</span> 处，正在为您续播"),
                                                duration: 3e3,
                                                type: "html"
                                            })), o += 1, o > 10 && e.inte0 && clearInterval(e.inte0)
                                        }), 300)
                                    }
                                }
                            } catch (n) { }
                        },
                        formatSeconds: function () {
                            var t = this;
                            if (t.t > 0) {
                                var e = t.t,
                                    a = 0,
                                    r = 0;
                                e > 60 && (a = Math.floor(e / 60), e %= 60, a > 60 && (r = Math.floor(a / 60), a %= 60));
                                var i = "".concat(e);
                                return e < 10 && e > 0 && (i = "0".concat(i)), i = a < 10 ? "0".concat(a, ":").concat(i) : "".concat(a, ":").concat(i), r > 0 && (i = "".concat(r, ":").concat(i)), i
                            }
                            return ""
                        },
                        iframeHtml: function () {
                            var t = this;
                            t.t = t.getUrlT();
                            var e = t.t > 0 ? "".concat(t.targetUrl, "&t=").concat(t.t) : t.targetUrl;
                            return '<iframe width="100%" id="playingIframe" allowfullscreen="true" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" height="'.concat(t.playerH, '" class="embed-responsive-item" src="').concat(e, '" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>')
                        },
                        fillIframe: function () {
                            var t = this;
                            t.curIv = !1, t.inte1 = setInterval((function () {
                                if (t.targetUrl) {
                                    var e = document.getElementById("playleft");
                                    if (!t.curIv && e) {
                                        e.innerHTML = t.iframeHtml();
                                        var a = document.getElementById("playingIframe");
                                        t.curIv = !0, a.onload = function () {
                                            t.iframeLoaded = !0
                                        }, setTimeout((function () {
                                            t.loaded = !0
                                        }), 3e3)
                                    }
                                    clearInterval(t.inte1)
                                }
                            }), 100), t.inte2 = setInterval((function () {
                                t.curIv && t.loaded && !t.iframeLoaded && (t.curIv = !1, t.$api.Toast("响应超时，请换源或刷新页面重试！", 3e3)), clearInterval(t.inte2)
                            }), 1e4)
                        }
                    }
                })),
                _ = g,
                b = a("2877"),
                w = Object(b["a"])(_, v, y, !1, null, null, null),
                C = w.exports,
                S = a("bee7"),
                A = a("3283"),
                k = n.a.extend({
                    name: "Play",
                    components: {
                        Back2Top: p["a"],
                        Header: h["a"],
                        Footer: m["a"],
                        Player: C,
                        AdImage: S["a"],
                        HorizontalList: A["a"]
                    },
                    props: {
                        msg: String
                    },
                    data: function () {
                        var t = this;
                        return {
                            qty: 0,
                            page: 1,
                            id: t.$route.params.id,
                            vod: {
                                VodPlayServer: [],
                                VodPlayUrls: [],
                                TypeID: 0,
                                VodPic: "",
                                VodName: "",
                                VodRemarks: "",
                                VodClass: {
                                    TypeName: ""
                                }
                            },
                            player: "",
                            iframeUrl: "",
                            iframeUrlBak: "",
                            realUrl: "",
                            category: "",
                            randList: [],
                            relateList: [],
                            commentList: [],
                            sort: "asc",
                            comment: "",
                            captchaId: "",
                            captcha: "",
                            captchaValue: "",
                            showAll: !1,
                            showPlayContent: !1,
                            showCode: !1,
                            videoQty: 0,
                            showShare: !1,
                            copyDone: !1,
                            showLogin: !1,
                            domain: "",
                            shareLink: "",
                            IAmIOS: !1,
                            inte: !1
                        }
                    },
                    created: function () {
                        var t = this;
                        t.fetchData(), t.appSource()
                    },
                    destroyed: function () {
                        clearInterval(this.inte)
                    },
                    computed: {
                        pageQty: function () {
                            var t = this;
                            return Math.ceil(t.qty / 10)
                        },
                        tabName: function () {
                            var t = this;
                            return t.$config.movies.indexOf(t.vod.TypeID) > -1 ? "movie" : t.$config.teleplays.indexOf(t.vod.TypeID) > -1 ? "teleplay" : t.$config.shows.indexOf(t.vod.TypeID) > -1 ? "show" : t.$config.cartoons.indexOf(t.vod.TypeID) > -1 ? "cartoon" : ""
                        },
                        typeName: function () {
                            var t = this;
                            return t.$config.movies.indexOf(t.vod.TypeID) > -1 ? "电影" : t.$config.teleplays.indexOf(t.vod.TypeID) > -1 ? "连续剧" : t.$config.shows.indexOf(t.vod.TypeID) > -1 ? "综艺" : t.$config.cartoons.indexOf(t.vod.TypeID) > -1 ? "动漫" : ""
                        },
                        p: function () {
                            return this.$route.params.p
                        },
                        u: function () {
                            return this.$route.params.u
                        },
                        shareContent: function () {
                            var t = this,
                                e = "【".concat(t.vod.VodName, "】"),
                                a = t.$config.shareContent.replace(/【】/, e);
                            return "".concat(a, "--").concat(t.shareLink)
                        }
                    },
                    watch: {
                        $route: function () {
                            this.iframeUrlBak = "", this.realUrl = "", this.fetchData(), window.scroll(0, 0)
                        }
                    },
                    filters: {
                        transformTime: function (t) {
                            var e = new Date(t),
                                a = e.getFullYear(),
                                r = e.getMonth() + 1 > 9 ? e.getMonth() + 1 : "0".concat(e.getMonth() + 1),
                                i = e.getDate() > 9 ? e.getDate() : "0".concat(e.getDate()),
                                o = e.getHours() > 9 ? e.getHours() : "0".concat(e.getHours()),
                                n = e.getMinutes() > 9 ? e.getMinutes() : "0".concat(e.getMinutes()),
                                s = e.getSeconds() > 9 ? e.getSeconds() : "0".concat(e.getSeconds());
                            return "".concat(a, "-").concat(r, "-").concat(i, " ").concat(o, ":").concat(n, ":").concat(s)
                        }
                    },
                    mounted: function () {
                        var t = this;
                        window.playComplete = function () {
                            t.nextEpisode()
                        }, window.playCurProcess = function () {
                            var e = t.getUrlT();
                            return e
                        }, window.playProcess = function (e) {
                            t.setUrlT(e), t.iframeUrlBak && (t.iframeUrl = t.iframeUrlBak)
                        }
                    },
                    methods: {
                        setUrlT: function (t) {
                            var e = this;
                            if (e.iframeUrl || e.iframeUrlBak) {
                                var a = e.iframeUrl ? e.iframeUrl : e.iframeUrlBak,
                                    r = window.localStorage.getItem("urlHistory"),
                                    i = f()(a);
                                r = r ? JSON.parse(r) : {}, r[i] = {
                                    t: Math.floor(t),
                                    ts: (new Date).getTime()
                                }, window.localStorage.setItem("urlHistory", JSON.stringify(r))
                            }
                        },
                        h52Native: function () {
                            var t = this;
                            if (t.iframeUrl && !t.realUrl) {
                                var e = t.iframeUrl.split("?v=")[1],
                                    a = f()("".concat(e, "zidingyikey")),
                                    r = new FormData;
                                r.append("sign", a), r.append("url", e), t.$api.Toast.loading({
                                    message: "获取地址...",
                                    forbidClick: !0,
                                    loadingType: "spinner"
                                }), c.a.post("https://v1.shankuwang.com/App.php", r).then((function (e) {
                                    t.$api.Toast.clear(), 200 === e.data.code ? (t.realUrl = e.data.url, window.H52NativePlay(t.realUrl, t.getUrlT())) : "404" === e.data.code ? t.$api.Toast("未定义的解析源，或酷云源不支持全屏投屏！") : t.$api.Toast(e.data.msg)
                                }), (function () {
                                    t.$api.Toast.clear(), t.$api.Toast("解析错误，请重试或切换播放!")
                                })), t.iframeUrlBak = t.iframeUrl, t.iframeUrl = ""
                            } else t.realUrl ? window.H52NativePlay(t.realUrl, t.getUrlT()) : t.$api.Toast("本视频不支持全屏。")
                        },
                        getUrlT: function () {
                            var t = this;
                            if (t.iframeUrl || t.iframeUrlBak) {
                                var e = t.iframeUrl ? t.iframeUrl : t.iframeUrlBak,
                                    a = window.localStorage.getItem("urlHistory"),
                                    r = f()(e);
                                if (a) return a = JSON.parse(a), a[r] ? a[r].t : 0
                            }
                            return 0
                        },
                        appSource: function () {
                            var t = this,
                                e = navigator.userAgent,
                                a = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                            t.IAmIOS = !!a
                        },
                        newDetail: function (t) {
                            this.$router.push("/details/".concat(t))
                        },
                        hitComment: function () {
                            var t = this;
                            t.showCode || (t.fetchCaptcha(), t.showCode = !0)
                        },
                        reloadPage: function () {
                            window.scroll(0, 0), this.iframeUrl = "", this.fetchData()
                        },
                        hp: function (t, e) {
                            var a = this;
                            return "asc" === a.sort ? parseInt(a.p, 0) === parseInt(t, 0) : parseInt(a.p, 0) === e.length - parseInt(t, 0) - 1
                        },
                        copyShareLink: function () {
                            var t = this,
                                e = new d.a(".copy_btn");
                            e.on("success", (function () {
                                t.showShare = !1, t.$api.Toast("耶～～复制成功", 1500), e.destroy()
                            })), e.on("error", (function () {
                                t.showShare = !1, t.$api.Toast("复制失败，请手工复制！", 1500), t.showShare = !0, e.destroy()
                            }))
                        },
                        cancelShare: function () {
                            this.showShare = !1
                        },
                        openShare: function () {
                            this.showShare = !0
                        },
                        showList: function () {
                            this.showAll = !0
                        },
                        hideList: function () {
                            this.showAll = !1
                        },
                        addHistory: function () {
                            var t = this,
                                e = window.localStorage.getItem("history");
                            e = e ? JSON.parse(e) : [];
                            for (var a = 0; a < e.length; a += 1) e[a].id === t.id && e.splice(a, 1);
                            e.push({
                                id: t.id,
                                img: t.vod.VodPic,
                                name: t.vod.VodName,
                                item: t.vod.VodPlayUrls[t.category][t.p][0],
                                url: "/play/".concat(t.id, "/").concat(t.u, "/").concat(t.p)
                            }), window.localStorage.setItem("history", JSON.stringify(e.reverse()))
                        },
                        gotoBofy: function () {
                            var t = this,
                                e = t.$refs.playFroms;
                            window.scroll(0, e.getBoundingClientRect().top - 40)
                        },
                        fetchCaptcha: function () {
                            var t = this;
                            c.a.get("/v1/verify-code", {
                                timeout: 1e4
                            }).then((function (e) {
                                t.captcha = e.data.data, t.captchaId = e.data.captchaId
                            }), (function (e) {
                                t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        fetchData: function () {
                            var t = this;
                            t.$api.Toast.loading({
                                message: "加载中...",
                                forbidClick: !0,
                                loadingType: "spinner"
                            }), c.a.get("https://setube.cc/v3/getDetail?id=".concat(t.id, "&u=").concat(t.u, "&p=").concat(t.p), {
                                timeout: 1e4
                            }).then((function (e) {
                                t.$api.Toast.clear(), t.vod = e.data.vod, t.qty = e.data.count, t.page = 1, t.domain = e.data.domain, t.shareLink = e.data.shareLink, t.commentList = e.data.comments;
                                var a = t.vod.VodPlayServer[t.u],
                                    r = t.vod.VodPlayUrls[a.From];
                                t.videoQty = r.length, t.player = t.vod.VodPlayServer[t.u].Show, t.category = t.vod.VodPlayServer[t.u].From;
                                var i = "".concat(t.vod.VodPlayUrls[t.category]);
                                i && (t.iframeUrl = i.split(",")[2 * (parseInt(t.p, 0) + 1) - 1]), t.randList = e.data.rand, t.relateList = e.data.relate, t.addHistory(), t.showAll || t.$nextTick((function () {
                                    var e = document.getElementById("s-play-".concat(t.id, "-").concat(t.u, "-").concat(t.p));
                                    e.scrollIntoView();
                                    var a = document.getElementById("l-".concat(t.u));
                                    a.scrollIntoView(), document.documentElement.scrollTop = 0, document.body.scrollTop = 0
                                }))
                            }), (function (e) {
                                t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        changeCategory: function (t) {
                            var e = this;
                            e.category = t;
                            var a = "".concat(e.vod.VodPlayUrls[e.category]);
                            a && (e.iframeUrl = a.split(",")[1])
                        },
                        tabClick: function (t) {
                            var e = this;
                            e.$router.push("/play/".concat(e.id, "/").concat(t, "/").concat(e.p))
                        },
                        collect: function (t, e) {
                            var a = this,
                                r = a.$cookies.get("userName");
                            r ? c.a.post("/v1/collect", {
                                target: t,
                                type: e
                            }, {
                                timeout: 1e4
                            }).then((function (t) {
                                a.$api.Toast("收藏成功!")
                            }), (function (t) {
                                a.$api.Toast("网络错误，请重试!")
                            })) : a.showLogin = !0
                        },
                        disableNext: function () {
                            var t = this;
                            if (t.vod.VodPlayServer[t.$route.params.u] && t.vod.VodPlayServer[t.$route.params.u].From) {
                                var e = t.vod.VodPlayUrls[t.vod.VodPlayServer[t.$route.params.u].From];
                                return e.length <= parseInt(t.$route.params.p, 0) + 1
                            }
                            return !0
                        },
                        nextEpisode: function () {
                            var t = this;
                            if (t.iframeUrl = t.iframeUrlBak, !t.disableNext()) {
                                var e = t.$api.Toast.loading({
                                    duration: 0,
                                    forbidClick: !0,
                                    message: "3s 后自动切换下一集!"
                                }),
                                    a = 3;
                                t.inte = setInterval((function () {
                                    a -= 1, a ? e.message = "".concat(a, "s 后自动切换下一集!") : (clearInterval(t.inte), t.$router.push("/play/".concat(t.id, "/").concat(t.u, "/").concat(parseInt(t.p, 0) + 1)), t.$api.Toast.clear())
                                }), 1e3)
                            }
                        },
                        updateSort: function () {
                            var t = this;
                            "asc" === t.sort ? t.sort = "desc" : t.sort = "asc"
                        },
                        reverse: function (t) {
                            return t.reverse()
                        },
                        submitComment: function () {
                            var t = this;
                            return t.captchaValue ? t.comment ? (c.a.post("/v1/comment", {
                                captcha: t.captchaValue,
                                captchaId: t.captchaId,
                                comment: t.comment,
                                rid: t.id,
                                commentName: t.$cookies.get("userName")
                            }, {
                                timeout: 1e4
                            }).then((function (e) {
                                0 !== e.data.status ? (t.fetchCaptcha(), t.$api.Toast(e.data.msg, 1500)) : (t.$api.Toast("谢谢，我们会尽快审核你的发言！", 1500), t.comment = "", t.captchaValue = "", t.fetchCaptcha())
                            }), (function (e) {
                                t.$api.Toast("网络错误，请重试!")
                            })), !0) : (t.$api.Toast("请填写留言！", 1500), !1) : (t.$api.Toast("请填写验证码！", 1500), !1)
                        },
                        fetchComments: function () {
                            var t = this;
                            c.a.get("/v1/vod-comments?id=".concat(t.id, "&page=").concat(t.page), {
                                timeout: 1e4
                            }).then((function (e) {
                                t.commentList = e.data.comments
                            }), (function (e) {
                                t.$api.Toast("网络错误，请重试!")
                            }))
                        },
                        nextPage: function () {
                            var t = this;
                            t.page < t.pageQty && (t.page += 1, t.fetchComments(), this.$nextTick((function () {
                                document.getElementById("pinglun").scrollIntoView()
                            })))
                        },
                        prevPage: function () {
                            var t = this;
                            t.page > 1 && (t.page -= 1, t.fetchComments(), this.$nextTick((function () {
                                document.getElementById("pinglun").scrollIntoView()
                            })))
                        },
                        firstPage: function () {
                            var t = this;
                            t.page = 1, t.fetchComments(), this.$nextTick((function () {
                                document.getElementById("pinglun").scrollIntoView()
                            }))
                        },
                        lastPage: function () {
                            var t = this;
                            t.page = t.pageQty, t.fetchComments(), this.$nextTick((function () {
                                document.getElementById("pinglun").scrollIntoView()
                            }))
                        }
                    }
                }),
                E = k,
                x = (a("e2db"), Object(b["a"])(E, r, i, !1, null, "091f5826", null));
            e["default"] = x.exports
        },
        8418: function (t, e, a) {
            "use strict";
            var r = a("c04e"),
                i = a("9bf2"),
                o = a("5c6c");
            t.exports = function (t, e, a) {
                var n = r(e);
                n in t ? i.f(t, n, o(0, a)) : t[n] = a
            }
        },
        "99af": function (t, e, a) {
            "use strict";
            var r = a("23e7"),
                i = a("d039"),
                o = a("e8b5"),
                n = a("861d"),
                s = a("7b0b"),
                c = a("50c4"),
                l = a("8418"),
                d = a("65f0"),
                u = a("1dde"),
                f = a("b622"),
                p = a("60ae"),
                h = f("isConcatSpreadable"),
                m = 9007199254740991,
                v = "Maximum allowed index exceeded",
                y = p >= 51 || !i((function () {
                    var t = [];
                    return t[h] = !1, t.concat()[0] !== t
                })),
                g = u("concat"),
                _ = function (t) {
                    if (!n(t)) return !1;
                    var e = t[h];
                    return void 0 !== e ? !!e : o(t)
                },
                b = !y || !g;
            r({
                target: "Array",
                proto: !0,
                forced: b
            }, {
                concat: function (t) {
                    var e, a, r, i, o, n = s(this),
                        u = d(n, 0),
                        f = 0;
                    for (e = -1, r = arguments.length; e < r; e++) if (o = -1 === e ? n : arguments[e], _(o)) {
                        if (i = c(o.length), f + i > m) throw TypeError(v);
                        for (a = 0; a < i; a++, f++) a in o && l(u, f, o[a])
                    } else {
                        if (f >= m) throw TypeError(v);
                        l(u, f++, o)
                    }
                    return u.length = f, u
                }
            })
        },
        a434: function (t, e, a) {
            "use strict";
            var r = a("23e7"),
                i = a("23cb"),
                o = a("a691"),
                n = a("50c4"),
                s = a("7b0b"),
                c = a("65f0"),
                l = a("8418"),
                d = a("1dde"),
                u = Math.max,
                f = Math.min,
                p = 9007199254740991,
                h = "Maximum allowed length exceeded";
            r({
                target: "Array",
                proto: !0,
                forced: !d("splice")
            }, {
                splice: function (t, e) {
                    var a, r, d, m, v, y, g = s(this),
                        _ = n(g.length),
                        b = i(t, _),
                        w = arguments.length;
                    if (0 === w ? a = r = 0 : 1 === w ? (a = 0, r = _ - b) : (a = w - 2, r = f(u(o(e), 0), _ - b)), _ + a - r > p) throw TypeError(h);
                    for (d = c(g, r), m = 0; m < r; m++) v = b + m, v in g && l(d, m, g[v]);
                    if (d.length = r, a < r) {
                        for (m = b; m < _ - r; m++) v = m + r, y = m + a, v in g ? g[y] = g[v] : delete g[y];
                        for (m = _; m > _ - r + a; m--) delete g[m - 1]
                    } else if (a > r) for (m = _ - r; m > b; m--) v = m + r - 1, y = m + a - 1, v in g ? g[y] = g[v] : delete g[y];
                    for (m = 0; m < a; m++) g[m + b] = arguments[m + 2];
                    return g.length = _ - r + a, d
                }
            })
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

                    function a(r) {
                        if (e[r]) return e[r].exports;
                        var i = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(i.exports, i, i.exports, a), i.l = !0, i.exports
                    }
                    return a.m = t, a.c = e, a.d = function (t, e, r) {
                        a.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
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
                        var r = Object.create(null);
                        if (a.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t) for (var i in t) a.d(r, i, function (e) {
                            return t[e]
                        }.bind(null, i));
                        return r
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
                            var r = window.getSelection(),
                                i = document.createRange();
                            i.selectNodeContents(t), r.removeAllRanges(), r.addRange(i), e = r.toString()
                        }
                        return e
                    }
                    t.exports = a
                }, function (t, e) {
                    function a() { }
                    a.prototype = {
                        on: function (t, e, a) {
                            var r = this.e || (this.e = {});
                            return (r[t] || (r[t] = [])).push({
                                fn: e,
                                ctx: a
                            }), this
                        },
                        once: function (t, e, a) {
                            var r = this;

                            function i() {
                                r.off(t, i), e.apply(a, arguments)
                            }
                            return i._ = e, this.on(t, i, a)
                        },
                        emit: function (t) {
                            var e = [].slice.call(arguments, 1),
                                a = ((this.e || (this.e = {}))[t] || []).slice(),
                                r = 0,
                                i = a.length;
                            for (r; r < i; r++) a[r].fn.apply(a[r].ctx, e);
                            return this
                        },
                        off: function (t, e) {
                            var a = this.e || (this.e = {}),
                                r = a[t],
                                i = [];
                            if (r && e) for (var o = 0, n = r.length; o < n; o++) r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
                            return i.length ? a[t] = i : delete a[t], this
                        }
                    }, t.exports = a, t.exports.TinyEmitter = a
                }, function (t, e, a) {
                    var r = a(3),
                        i = a(4);

                    function o(t, e, a) {
                        if (!t && !e && !a) throw new Error("Missing required arguments");
                        if (!r.string(e)) throw new TypeError("Second argument must be a String");
                        if (!r.fn(a)) throw new TypeError("Third argument must be a Function");
                        if (r.node(t)) return n(t, e, a);
                        if (r.nodeList(t)) return s(t, e, a);
                        if (r.string(t)) return c(t, e, a);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }
                    function n(t, e, a) {
                        return t.addEventListener(e, a), {
                            destroy: function () {
                                t.removeEventListener(e, a)
                            }
                        }
                    }
                    function s(t, e, a) {
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
                    t.exports = o
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
                    var r = a(5);

                    function i(t, e, a, r, i) {
                        var o = n.apply(this, arguments);
                        return t.addEventListener(a, o, i), {
                            destroy: function () {
                                t.removeEventListener(a, o, i)
                            }
                        }
                    }
                    function o(t, e, a, r, o) {
                        return "function" === typeof t.addEventListener ? i.apply(null, arguments) : "function" === typeof a ? i.bind(null, document).apply(null, arguments) : ("string" === typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function (t) {
                            return i(t, e, a, r, o)
                        })))
                    }
                    function n(t, e, a, i) {
                        return function (a) {
                            a.delegateTarget = r(a.target, e), a.delegateTarget && i.call(t, a)
                        }
                    }
                    t.exports = o
                }, function (t, e) {
                    var a = 9;
                    if ("undefined" !== typeof Element && !Element.prototype.matches) {
                        var r = Element.prototype;
                        r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
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
                    var r = a(0),
                        i = a.n(r),
                        o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
                            function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, n = function () {
                                function t(t, e) {
                                    for (var a = 0; a < e.length; a++) {
                                        var r = e[a];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                    }
                                }
                                return function (e, a, r) {
                                    return a && t(e.prototype, a), r && t(e, r), e
                                }
                            }();

                    function s(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var c = function () {
                        function t(e) {
                            s(this, t), this.resolveOptions(e), this.initSelection()
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
                                    if (!t || "object" !== ("undefined" === typeof t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
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
                        f = a(2),
                        p = a.n(f),
                        h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
                            function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, m = function () {
                                function t(t, e) {
                                    for (var a = 0; a < e.length; a++) {
                                        var r = e[a];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                    }
                                }
                                return function (e, a, r) {
                                    return a && t(e.prototype, a), r && t(e, r), e
                                }
                            }();

                    function v(t, e) {
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
                    var _ = function (t) {
                        function e(t, a) {
                            v(this, e);
                            var r = y(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return r.resolveOptions(a), r.listenClick(t), r
                        }
                        return g(e, t), m(e, [{
                            key: "resolveOptions",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" === typeof t.action ? t.action : this.defaultAction, this.target = "function" === typeof t.target ? t.target : this.defaultTarget, this.text = "function" === typeof t.text ? t.text : this.defaultText, this.container = "object" === h(t.container) ? t.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function (t) {
                                var e = this;
                                this.listener = p()(t, "click", (function (t) {
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
                                return b("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function (t) {
                                var e = b("target", t);
                                if (e) return document.querySelector(e)
                            }
                        }, {
                            key: "defaultText",
                            value: function (t) {
                                return b("text", t)
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

                    function b(t, e) {
                        var a = "data-clipboard-" + t;
                        if (e.hasAttribute(a)) return e.getAttribute(a)
                    }
                    e["default"] = _
                }])["default"]
            }))
        },
        b64b: function (t, e, a) {
            var r = a("23e7"),
                i = a("7b0b"),
                o = a("df75"),
                n = a("d039"),
                s = n((function () {
                    o(1)
                }));
            r({
                target: "Object",
                stat: !0,
                forced: s
            }, {
                keys: function (t) {
                    return o(i(t))
                }
            })
        },
        b727: function (t, e, a) {
            var r = a("f8c2"),
                i = a("44ad"),
                o = a("7b0b"),
                n = a("50c4"),
                s = a("65f0"),
                c = [].push,
                l = function (t) {
                    var e = 1 == t,
                        a = 2 == t,
                        l = 3 == t,
                        d = 4 == t,
                        u = 6 == t,
                        f = 5 == t || u;
                    return function (p, h, m, v) {
                        for (var y, g, _ = o(p), b = i(_), w = r(h, m, 3), C = n(b.length), S = 0, A = v || s, k = e ? A(p, C) : a ? A(p, 0) : void 0; C > S; S++) if ((f || S in b) && (y = b[S], g = w(y, S, _), t)) if (e) k[S] = g;
                        else if (g) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return y;
                            case 6:
                                return S;
                            case 2:
                                c.call(k, y)
                        } else if (d) return !1;
                        return u ? -1 : l || d ? d : k
                    }
                };
            t.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6)
            }
        },
        bee7: function (t, e, a) {
            "use strict";
            var r = function () {
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
                o = (a("c975"), a("8bbf")),
                n = a.n(o),
                s = n.a.extend({
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
                c = s,
                l = a("2877"),
                d = Object(l["a"])(c, r, i, !1, null, null, null);
            e["a"] = d.exports
        },
        df7c: function (t, e, a) {
            (function (t) {
                function a(t, e) {
                    for (var a = 0, r = t.length - 1; r >= 0; r--) {
                        var i = t[r];
                        "." === i ? t.splice(r, 1) : ".." === i ? (t.splice(r, 1), a++) : a && (t.splice(r, 1), a--)
                    }
                    if (e) for (; a--; a) t.unshift("..");
                    return t
                }
                function r(t) {
                    "string" !== typeof t && (t += "");
                    var e, a = 0,
                        r = -1,
                        i = !0;
                    for (e = t.length - 1; e >= 0; --e) if (47 === t.charCodeAt(e)) {
                        if (!i) {
                            a = e + 1;
                            break
                        }
                    } else - 1 === r && (i = !1, r = e + 1);
                    return -1 === r ? "" : t.slice(a, r)
                }
                function i(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var a = [], r = 0; r < t.length; r++) e(t[r], r, t) && a.push(t[r]);
                    return a
                }
                e.resolve = function () {
                    for (var e = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                        var n = o >= 0 ? arguments[o] : t.cwd();
                        if ("string" !== typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                        n && (e = n + "/" + e, r = "/" === n.charAt(0))
                    }
                    return e = a(i(e.split("/"), (function (t) {
                        return !!t
                    })), !r).join("/"), (r ? "/" : "") + e || "."
                }, e.normalize = function (t) {
                    var r = e.isAbsolute(t),
                        n = "/" === o(t, -1);
                    return t = a(i(t.split("/"), (function (t) {
                        return !!t
                    })), !r).join("/"), t || r || (t = "."), t && n && (t += "/"), (r ? "/" : "") + t
                }, e.isAbsolute = function (t) {
                    return "/" === t.charAt(0)
                }, e.join = function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return e.normalize(i(t, (function (t, e) {
                        if ("string" !== typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t
                    })).join("/"))
                }, e.relative = function (t, a) {
                    function r(t) {
                        for (var e = 0; e < t.length; e++) if ("" !== t[e]) break;
                        for (var a = t.length - 1; a >= 0; a--) if ("" !== t[a]) break;
                        return e > a ? [] : t.slice(e, a - e + 1)
                    }
                    t = e.resolve(t).substr(1), a = e.resolve(a).substr(1);
                    for (var i = r(t.split("/")), o = r(a.split("/")), n = Math.min(i.length, o.length), s = n, c = 0; c < n; c++) if (i[c] !== o[c]) {
                        s = c;
                        break
                    }
                    var l = [];
                    for (c = s; c < i.length; c++) l.push("..");
                    return l = l.concat(o.slice(s)), l.join("/")
                }, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
                    if ("string" !== typeof t && (t += ""), 0 === t.length) return ".";
                    for (var e = t.charCodeAt(0), a = 47 === e, r = -1, i = !0, o = t.length - 1; o >= 1; --o) if (e = t.charCodeAt(o), 47 === e) {
                        if (!i) {
                            r = o;
                            break
                        }
                    } else i = !1;
                    return -1 === r ? a ? "/" : "." : a && 1 === r ? "/" : t.slice(0, r)
                }, e.basename = function (t, e) {
                    var a = r(t);
                    return e && a.substr(-1 * e.length) === e && (a = a.substr(0, a.length - e.length)), a
                }, e.extname = function (t) {
                    "string" !== typeof t && (t += "");
                    for (var e = -1, a = 0, r = -1, i = !0, o = 0, n = t.length - 1; n >= 0; --n) {
                        var s = t.charCodeAt(n);
                        if (47 !== s) - 1 === r && (i = !1, r = n + 1), 46 === s ? -1 === e ? e = n : 1 !== o && (o = 1) : -1 !== e && (o = -1);
                        else if (!i) {
                            a = n + 1;
                            break
                        }
                    }
                    return -1 === e || -1 === r || 0 === o || 1 === o && e === r - 1 && e === a + 1 ? "" : t.slice(e, r)
                };
                var o = "b" === "ab".substr(-1) ?
                    function (t, e, a) {
                        return t.substr(e, a)
                    } : function (t, e, a) {
                        return e < 0 && (e = t.length + e), t.substr(e, a)
                    }
            }).call(this, a("4362"))
        },
        e2db: function (t, e, a) {
            "use strict";
            var r = a("5de6"),
                i = a.n(r);
            i.a
        },
        e8b5: function (t, e, a) {
            var r = a("c6b6");
            t.exports = Array.isArray ||
                function (t) {
                    return "Array" == r(t)
                }
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