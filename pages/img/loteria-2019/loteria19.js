(function () {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l, aa = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    }, ca = function (a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("a");
    }, da =
        ca(this), n = function (a, b) {
        if (b) a:{
            var c = da;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, {configurable: !0, writable: !0, value: b})
        }
    };
    n("Symbol", function (a) {
        if (a) return a;
        var b = function (e, f) {
            this.g = e;
            ba(this, "description", {configurable: !0, writable: !0, value: f})
        };
        b.prototype.toString = function () {
            return this.g
        };
        var c = 0, d = function (e) {
            if (this instanceof d) throw new TypeError("b");
            return new b("jscomp_symbol_" + (e || "") + "_" + c++, e)
        };
        return d
    });
    n("Symbol.iterator", function (a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function (a) {
        a = {next: a};
        a[Symbol.iterator] = function () {
            return this
        };
        return a
    }, p = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: aa(a)}
    }, fa = function (a) {
        if (!(a instanceof Array)) {
            a = p(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }, ia = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf; else {
        var ka;
        a:{
            var ma = {a: !0}, na = {};
            try {
                na.__proto__ = ma;
                ka = na.a;
                break a
            } catch (a) {
            }
            ka = !1
        }
        ja = ka ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("c`" + a);
            return a
        } : null
    }
    var oa = ja, r = function (a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (oa) oa(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.ub = b.prototype
    }, pa = function () {
        this.o = !1;
        this.i = null;
        this.j = void 0;
        this.g = 1;
        this.V = this.$ = 0;
        this.s = null
    }, qa = function (a) {
        if (a.o) throw new TypeError("e");
        a.o = !0
    };
    pa.prototype.S = function (a) {
        this.j = a
    };
    var ra = function (a, b) {
        a.s = {Ic: b, Me: !0};
        a.g = a.$ || a.V
    };
    pa.prototype.return = function (a) {
        this.s = {return: a};
        this.g = this.V
    };
    var t = function (a, b, c) {
        a.g = c;
        return {value: b}
    }, sa = function (a) {
        this.g = new pa;
        this.j = a
    }, va = function (a, b) {
        qa(a.g);
        var c = a.g.i;
        if (c) return ta(a, "return" in c ? c["return"] : function (d) {
            return {value: d, done: !0}
        }, b, a.g.return);
        a.g.return(b);
        return ua(a)
    }, ta = function (a, b, c, d) {
        try {
            var e = b.call(a.g.i, c);
            if (!(e instanceof Object)) throw new TypeError("d`" + e);
            if (!e.done) return a.g.o = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.i = null, ra(a.g, g), ua(a)
        }
        a.g.i = null;
        d.call(a.g, f);
        return ua(a)
    }, ua = function (a) {
        for (; a.g.g;) try {
            var b =
                a.j(a.g);
            if (b) return a.g.o = !1, {value: b.value, done: !1}
        } catch (c) {
            a.g.j = void 0, ra(a.g, c)
        }
        a.g.o = !1;
        if (a.g.s) {
            b = a.g.s;
            a.g.s = null;
            if (b.Me) throw b.Ic;
            return {value: b.return, done: !0}
        }
        return {value: void 0, done: !0}
    }, wa = function (a) {
        this.next = function (b) {
            qa(a.g);
            a.g.i ? b = ta(a, a.g.i.next, b, a.g.S) : (a.g.S(b), b = ua(a));
            return b
        };
        this.throw = function (b) {
            qa(a.g);
            a.g.i ? b = ta(a, a.g.i["throw"], b, a.g.S) : (ra(a.g, b), b = ua(a));
            return b
        };
        this.return = function (b) {
            return va(a, b)
        };
        this[Symbol.iterator] = function () {
            return this
        }
    }, xa = function (a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }

        return new Promise(function (d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }

            f(a.next())
        })
    }, u = function (a) {
        return xa(new wa(new sa(a)))
    };
    n("Promise", function (a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function (h) {
                h(g)
            })
        }

        if (a) return a;
        b.prototype.j = function (g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function () {
                    h.o()
                })
            }
            this.g.push(g)
        };
        var d = da.setTimeout;
        b.prototype.i = function (g) {
            d(g, 0)
        };
        b.prototype.o = function () {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.s(m)
                    }
                }
            }
            this.g = null
        };
        b.prototype.s = function (g) {
            this.i(function () {
                throw g;
            })
        };
        var e = function (g) {
            this.g = 0;
            this.i = void 0;
            this.j = [];
            this.$ = !1;
            var h = this.s();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.s = function () {
            function g(m) {
                return function (q) {
                    k || (k = !0, m.call(h, q))
                }
            }

            var h = this, k = !1;
            return {resolve: g(this.T), reject: g(this.o)}
        };
        e.prototype.T = function (g) {
            if (g === this) this.o(new TypeError("f")); else if (g instanceof e) this.W(g); else {
                a:switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.U(g) : this.S(g)
            }
        };
        e.prototype.U =
            function (g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.o(k);
                    return
                }
                "function" == typeof h ? this.ha(h, g) : this.S(g)
            };
        e.prototype.o = function (g) {
            this.V(2, g)
        };
        e.prototype.S = function (g) {
            this.V(1, g)
        };
        e.prototype.V = function (g, h) {
            if (0 != this.g) throw Error("g`" + g + "`" + h + "`" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.ka();
            this.H()
        };
        e.prototype.ka = function () {
            var g = this;
            d(function () {
                if (g.v()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        e.prototype.v = function () {
            if (this.$) return !1;
            var g = da.CustomEvent, h =
                da.Event, k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {cancelable: !0}) : "function" === typeof h ? g = new h("unhandledrejection", {cancelable: !0}) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.i;
            return k(g)
        };
        e.prototype.H = function () {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.W = function (g) {
            var h = this.s();
            g.Ib(h.resolve,
                h.reject)
        };
        e.prototype.ha = function (g, h) {
            var k = this.s();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        };
        e.prototype.then = function (g, h) {
            function k(C, H) {
                return "function" == typeof C ? function (J) {
                    try {
                        m(C(J))
                    } catch (O) {
                        q(O)
                    }
                } : H
            }

            var m, q, z = new e(function (C, H) {
                m = C;
                q = H
            });
            this.Ib(k(g, m), k(h, q));
            return z
        };
        e.prototype.catch = function (g) {
            return this.then(void 0, g)
        };
        e.prototype.Ib = function (g, h) {
            function k() {
                switch (m.g) {
                    case 1:
                        g(m.i);
                        break;
                    case 2:
                        h(m.i);
                        break;
                    default:
                        throw Error("h`" + m.g);
                }
            }

            var m = this;
            null ==
            this.j ? f.j(k) : this.j.push(k);
            this.$ = !0
        };
        e.resolve = c;
        e.reject = function (g) {
            return new e(function (h, k) {
                k(g)
            })
        };
        e.race = function (g) {
            return new e(function (h, k) {
                for (var m = p(g), q = m.next(); !q.done; q = m.next()) c(q.value).Ib(h, k)
            })
        };
        e.all = function (g) {
            var h = p(g), k = h.next();
            return k.done ? c([]) : new e(function (m, q) {
                function z(J) {
                    return function (O) {
                        C[J] = O;
                        H--;
                        0 == H && m(C)
                    }
                }

                var C = [], H = 0;
                do C.push(void 0), H++, c(k.value).Ib(z(C.length - 1), q), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    var ya = function (a, b, c) {
        if (null == a) throw new TypeError("i`" + c);
        if (b instanceof RegExp) throw new TypeError("j`" + c);
        return a + ""
    };
    n("Array.prototype.find", function (a) {
        return a ? a : function (b, c) {
            a:{
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    n("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            var d = ya(this, b, "startsWith");
            b += "";
            var e = d.length, f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;) if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    n("Promise.prototype.finally", function (a) {
        return a ? a : function (b) {
            return this.then(function (c) {
                return Promise.resolve(b()).then(function () {
                    return c
                })
            }, function (c) {
                return Promise.resolve(b()).then(function () {
                    throw c;
                })
            })
        }
    });
    n("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    n("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    n("String.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            return -1 !== ya(this, b, "includes").indexOf(b, c || 0)
        }
    });
    n("Array.prototype.fill", function (a) {
        return a ? a : function (b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var za = function (a) {
        return a ? a : Array.prototype.fill
    };
    n("Int8Array.prototype.fill", za);
    n("Uint8Array.prototype.fill", za);
    n("Uint8ClampedArray.prototype.fill", za);
    n("Int16Array.prototype.fill", za);
    n("Uint16Array.prototype.fill", za);
    n("Int32Array.prototype.fill", za);
    n("Uint32Array.prototype.fill", za);
    n("Float32Array.prototype.fill", za);
    n("Float64Array.prototype.fill", za);
    var Aa = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    n("WeakMap", function (a) {
        function b() {
        }

        function c(k) {
            var m = typeof k;
            return "object" === m && null !== k || "function" === m
        }

        function d(k) {
            if (!Aa(k, f)) {
                var m = new b;
                ba(k, f, {value: m})
            }
        }

        function e(k) {
            var m = Object[k];
            m && (Object[k] = function (q) {
                if (q instanceof b) return q;
                Object.isExtensible(q) && d(q);
                return m(q)
            })
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}), m = Object.seal({}), q = new a([[k, 2], [m, 3]]);
                if (2 != q.get(k) || 3 != q.get(m)) return !1;
                q.delete(k);
                q.set(m, 4);
                return !q.has(k) && 4 == q.get(m)
            } catch (z) {
                return !1
            }
        }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0, h = function (k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = p(k);
                for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        };
        h.prototype.set = function (k, m) {
            if (!c(k)) throw Error("k");
            d(k);
            if (!Aa(k, f)) throw Error("l`" + k);
            k[f][this.g] = m;
            return this
        };
        h.prototype.get = function (k) {
            return c(k) && Aa(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function (k) {
            return c(k) && Aa(k, f) && Aa(k[f], this.g)
        };
        h.prototype.delete = function (k) {
            return c(k) &&
            Aa(k, f) && Aa(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    n("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({x: 4}), k = new a(p([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({x: 4}) || k.set({x: 4}, "t") != k || 2 != k.size) return !1;
                var m = k.entries(), q = m.next();
                if (q.done || q.value[0] != h || "s" != q.value[1]) return !1;
                q = m.next();
                return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
            } catch (z) {
                return !1
            }
        }()) return a;
        var b = new WeakMap, c = function (h) {
            this.j = {};
            this.g = f();
            this.size = 0;
            if (h) {
                h = p(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
        c.prototype.set = function (h, k) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.j[m.id] = []);
            m.Fa ? m.Fa.value = k : (m.Fa = {
                next: this.g,
                Va: this.g.Va,
                head: this.g,
                key: h,
                value: k
            }, m.list.push(m.Fa), this.g.Va.next = m.Fa, this.g.Va = m.Fa, this.size++);
            return this
        };
        c.prototype.delete = function (h) {
            h = d(this, h);
            return h.Fa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.j[h.id], h.Fa.Va.next = h.Fa.next, h.Fa.next.Va = h.Fa.Va,
                h.Fa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.j = {};
            this.g = this.g.Va = f();
            this.size = 0
        };
        c.prototype.has = function (h) {
            return !!d(this, h).Fa
        };
        c.prototype.get = function (h) {
            return (h = d(this, h).Fa) && h.value
        };
        c.prototype.entries = function () {
            return e(this, function (h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function () {
            return e(this, function (h) {
                return h.key
            })
        };
        c.prototype.values = function () {
            return e(this, function (h) {
                return h.value
            })
        };
        c.prototype.forEach = function (h, k) {
            for (var m = this.entries(),
                     q; !(q = m.next()).done;) q = q.value, h.call(k, q[1], q[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function (h, k) {
            var m = k && typeof k;
            "object" == m || "function" == m ? b.has(k) ? m = b.get(k) : (m = "" + ++g, b.set(k, m)) : m = "p_" + k;
            var q = h.j[m];
            if (q && Aa(h.j, m)) for (h = 0; h < q.length; h++) {
                var z = q[h];
                if (k !== k && z.key !== z.key || k === z.key) return {id: m, list: q, index: h, Fa: z}
            }
            return {id: m, list: q, index: -1, Fa: void 0}
        }, e = function (h, k) {
            var m = h.g;
            return ea(function () {
                if (m) {
                    for (; m.head != h.g;) m = m.Va;
                    for (; m.next != m.head;) return m =
                        m.next, {done: !1, value: k(m)};
                    m = null
                }
                return {done: !0, value: void 0}
            })
        }, f = function () {
            var h = {};
            return h.Va = h.next = h.head = h
        }, g = 0;
        return c
    });
    n("Number.MAX_SAFE_INTEGER", function () {
        return 9007199254740991
    });
    n("Number.MIN_SAFE_INTEGER", function () {
        return -9007199254740991
    });
    var Ba = function (a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function () {
                if (!d && c < a.length) {
                    var f = c++;
                    return {value: b(f, a[f]), done: !1}
                }
                d = !0;
                return {done: !0, value: void 0}
            }
        };
        e[Symbol.iterator] = function () {
            return e
        };
        return e
    };
    n("Array.prototype.keys", function (a) {
        return a ? a : function () {
            return Ba(this, function (b) {
                return b
            })
        }
    });
    n("Array.prototype.values", function (a) {
        return a ? a : function () {
            return Ba(this, function (b, c) {
                return c
            })
        }
    });
    var Ca = "function" == typeof Object.assign ? Object.assign : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Aa(d, e) && (a[e] = d[e])
        }
        return a
    };
    n("Object.assign", function (a) {
        return a || Ca
    });
    n("Object.entries", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) Aa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    var Da = Da || {}, v = this || self, Ga = function (a) {
        if (a && a != v) return Ea(a.document);
        null === Fa && (Fa = Ea(v.document));
        return Fa
    }, Ha = /^[\w+/_-]+[=]{0,2}$/, Fa = null, Ea = function (a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ha.test(a) ? a : ""
    }, Ia = function (a, b) {
        a = a.split(".");
        b = b || v;
        for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
        return b
    }, Ja = function () {
    }, Ka = function (a) {
        a.kc = void 0;
        a.va = function () {
            return a.kc ? a.kc : a.kc = new a
        }
    }, La = function (a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }, Ma = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, Na = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, Oa = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b,
                arguments)
        }
    }, Pa = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Pa = Na : Pa = Oa;
        return Pa.apply(null, arguments)
    }, Qa = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }, Ra = function (a, b) {
        a = a.split(".");
        var c = v;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ?
            c = c[d] : c = c[d] = {} : c[d] = b
    }, Sa = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.ub = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ze = function (d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }, Ta = function (a) {
        return a
    };
    var Ua = function () {
    };
    Ua.prototype.S = function () {
        return !0
    };
    var Va;
    var Wa = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Xa = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };

    function Ya(a) {
        a:{
            var b = Za;
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function $a(a, b) {
        b = Wa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function ab(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function bb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function cb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function db(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d)) for (var e = 0; e < d.length; e += 8192) for (var f = db.apply(null, cb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]); else b.push(d)
        }
        return b
    };var eb = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        }, fb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        gb = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < fb.length; f++) c = fb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var hb, ib = function () {
        if (void 0 === hb) {
            var a = null, b = v.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: Ta, createScript: Ta, createScriptURL: Ta})
                } catch (c) {
                    v.console && v.console.error(c.message)
                }
                hb = a
            } else hb = a
        }
        return hb
    };
    var lb = function (a, b) {
        this.j = a === jb && b || "";
        this.i = kb
    };
    lb.prototype.Ab = !0;
    lb.prototype.g = function () {
        return this.j
    };
    var mb = function () {
        var a = new lb(jb, "https://www.gstatic.com/support/help/staging/main_frame/help_panel_staging_binary.js");
        return a instanceof lb && a.constructor === lb && a.i === kb ? a.j : "type_error:Const"
    }, kb = {}, jb = {};
    var nb = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        ob = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        pb = /^http:\/\/.*/, qb = /\s+/, rb = /[\d\u06f0-\u06f9]/;
    var tb = function (a, b) {
        this.i = b === sb ? a : ""
    };
    tb.prototype.Ab = !0;
    tb.prototype.g = function () {
        return this.i.toString()
    };
    tb.prototype.jc = !0;
    tb.prototype.j = function () {
        return 1
    };
    var sb = {}, ub = function (a) {
        var b = ib();
        a = b ? b.createScriptURL(a) : a;
        return new tb(a, sb)
    };
    var vb = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }, Db = function (a, b) {
        if (b) a = a.replace(wb, "&amp;").replace(xb, "&lt;").replace(yb, "&gt;").replace(zb, "&quot;").replace(Ab, "&#39;").replace(Bb, "&#0;"); else {
            if (!Cb.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(wb, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(xb, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(yb, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(zb, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Ab,
                "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Bb, "&#0;"))
        }
        return a
    }, wb = /&/g, xb = /</g, yb = />/g, zb = /"/g, Ab = /'/g, Bb = /\x00/g, Cb = /[\x00&<>"']/, Eb = function (a, b) {
        return -1 != a.indexOf(b)
    }, Fb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Hb = function (a, b) {
        this.i = b === Gb ? a : ""
    };
    Hb.prototype.Ab = !0;
    Hb.prototype.g = function () {
        return this.i.toString()
    };
    Hb.prototype.jc = !0;
    Hb.prototype.j = function () {
        return 1
    };
    var Ib = function (a) {
        return a instanceof Hb && a.constructor === Hb ? a.i : "type_error:SafeUrl"
    }, Jb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Kb = function (a) {
        if (a instanceof Hb) return a;
        a = "object" == typeof a && a.Ab ? a.g() : String(a);
        Jb.test(a) || (a = "about:invalid#zClosurez");
        return new Hb(a, Gb)
    }, Gb = {};
    var w;
    a:{
        var Lb = v.navigator;
        if (Lb) {
            var Mb = Lb.userAgent;
            if (Mb) {
                w = Mb;
                break a
            }
        }
        w = ""
    }
    ;var Ob = function (a, b, c) {
        this.i = c === Nb ? a : "";
        this.s = b
    };
    Ob.prototype.jc = !0;
    Ob.prototype.j = function () {
        return this.s
    };
    Ob.prototype.Ab = !0;
    Ob.prototype.g = function () {
        return this.i.toString()
    };
    var Pb = function (a) {
        return a instanceof Ob && a.constructor === Ob ? a.i : "type_error:SafeHtml"
    }, Rb = function (a) {
        if (a instanceof Ob) return a;
        var b = "object" == typeof a, c = null;
        b && a.jc && (c = a.j());
        return Qb(Db(b && a.Ab ? a.g() : String(a)), c)
    }, Nb = {}, Qb = function (a, b) {
        var c = ib();
        a = c ? c.createHTML(a) : a;
        return new Ob(a, b, Nb)
    }, Sb = new Ob(v.trustedTypes && v.trustedTypes.emptyHTML || "", 0, Nb);
    var Tb = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }(function () {
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Pb(Sb);
        return !b.parentElement
    }), Ub = function (a, b) {
        a.src = b instanceof tb && b.constructor === tb ? b.i : "type_error:TrustedResourceUrl";
        (b = Ga(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }, Vb = function (a) {
        a = a instanceof Hb ? a : Kb(a);
        v.open(Ib(a), "", void 0, void 0)
    };
    var Wb = function (a, b, c) {
        return Math.min(Math.max(a, b), c)
    }, x = function (a, b, c) {
        return a + c * (b - a)
    };
    var Xb = function (a, b) {
        this.j = {};
        this.g = [];
        this.i = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("m");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) if (a instanceof Xb) for (c = a.Ta(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d])
    };
    Xb.prototype.Qa = function () {
        Yb(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
        return a
    };
    Xb.prototype.Ta = function () {
        Yb(this);
        return this.g.concat()
    };
    var Yb = function (a) {
        if (a.i != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                Zb(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.i != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], Zb(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    Xb.prototype.get = function (a, b) {
        return Zb(this.j, a) ? this.j[a] : b
    };
    Xb.prototype.set = function (a, b) {
        Zb(this.j, a) || (this.i++, this.g.push(a));
        this.j[a] = b
    };
    Xb.prototype.forEach = function (a, b) {
        for (var c = this.Ta(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var Zb = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var $b = function (a) {
        if (a.Qa && "function" == typeof a.Qa) return a.Qa();
        if ("string" === typeof a) return a.split("");
        if (La(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }, ac = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0); else if (La(a) || "string" === typeof a) Xa(a, b, void 0); else {
            if (a.Ta && "function" == typeof a.Ta) var c = a.Ta(); else if (a.Qa && "function" == typeof a.Qa) c = void 0; else if (La(a) || "string" === typeof a) {
                c = [];
                for (var d = a.length,
                         e = 0; e < d; e++) c.push(e)
            } else for (e in c = [], d = 0, a) c[d++] = e;
            d = $b(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
    var bc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        cc = function (a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="), e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var dc = function (a) {
        this.i = this.$ = this.o = "";
        this.V = null;
        this.s = this.j = "";
        this.S = !1;
        var b;
        a instanceof dc ? (this.S = a.S, ec(this, a.o), this.$ = a.$, this.i = a.i, fc(this, a.V), this.j = a.j, gc(this, hc(a.g)), this.s = a.s) : a && (b = String(a).match(bc)) ? (this.S = !1, ec(this, b[1] || "", !0), this.$ = ic(b[2] || ""), this.i = ic(b[3] || "", !0), fc(this, b[4]), this.j = ic(b[5] || "", !0), gc(this, b[6] || "", !0), this.s = ic(b[7] || "")) : (this.S = !1, this.g = new jc(null, this.S))
    };
    dc.prototype.toString = function () {
        var a = [], b = this.o;
        b && a.push(kc(b, lc, !0), ":");
        var c = this.i;
        if (c || "file" == b) a.push("//"), (b = this.$) && a.push(kc(b, lc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.V, null != c && a.push(":", String(c));
        if (c = this.j) this.i && "/" != c.charAt(0) && a.push("/"), a.push(kc(c, "/" == c.charAt(0) ? mc : nc, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.s) && a.push("#", kc(c, oc));
        return a.join("")
    };
    dc.prototype.resolve = function (a) {
        var b = new dc(this), c = !!a.o;
        c ? ec(b, a.o) : c = !!a.$;
        c ? b.$ = a.$ : c = !!a.i;
        c ? b.i = a.i : c = null != a.V;
        var d = a.j;
        if (c) fc(b, a.V); else if (c = !!a.j) {
            if ("/" != d.charAt(0)) if (this.i && !this.j) d = "/" + d; else {
                var e = b.j.lastIndexOf("/");
                -1 != e && (d = b.j.substr(0, e + 1) + d)
            }
            e = d;
            if (".." == e || "." == e) d = ""; else if (Eb(e, "./") || Eb(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.j = d : c = "" !== a.g.toString();
        c ? gc(b, hc(a.g)) : c = !!a.s;
        c && (b.s = a.s);
        return b
    };
    var ec = function (a, b, c) {
        a.o = c ? ic(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }, fc = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("n`" + b);
            a.V = b
        } else a.V = null
    }, gc = function (a, b, c) {
        b instanceof jc ? (a.g = b, pc(a.g, a.S)) : (c || (b = kc(b, qc)), a.g = new jc(b, a.S))
    }, ic = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, kc = function (a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, rc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, rc = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, lc = /[#\/\?@]/g, nc = /[#\?:]/g, mc = /[#\?]/g, qc = /[#\?@]/g, oc = /#/g, jc = function (a, b) {
        this.j = this.g = null;
        this.i = a || null;
        this.s = !!b
    }, sc = function (a) {
        a.g || (a.g = new Xb, a.j = 0, a.i && cc(a.i, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    };
    jc.prototype.add = function (a, b) {
        sc(this);
        this.i = null;
        a = tc(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    };
    var uc = function (a, b) {
        sc(a);
        b = tc(a, b);
        Zb(a.g.j, b) && (a.i = null, a.j -= a.g.get(b).length, a = a.g, Zb(a.j, b) && (delete a.j[b], a.i--, a.g.length > 2 * a.i && Yb(a)))
    }, vc = function (a, b) {
        sc(a);
        b = tc(a, b);
        return Zb(a.g.j, b)
    };
    l = jc.prototype;
    l.forEach = function (a, b) {
        sc(this);
        this.g.forEach(function (c, d) {
            Xa(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    l.Ta = function () {
        sc(this);
        for (var a = this.g.Qa(), b = this.g.Ta(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    l.Qa = function (a) {
        sc(this);
        var b = [];
        if ("string" === typeof a) vc(this, a) && (b = ab(b, this.g.get(tc(this, a)))); else {
            a = this.g.Qa();
            for (var c = 0; c < a.length; c++) b = ab(b, a[c])
        }
        return b
    };
    l.set = function (a, b) {
        sc(this);
        this.i = null;
        a = tc(this, a);
        vc(this, a) && (this.j -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.j += 1;
        return this
    };
    l.get = function (a, b) {
        if (!a) return b;
        a = this.Qa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    l.toString = function () {
        if (this.i) return this.i;
        if (!this.g) return "";
        for (var a = [], b = this.g.Ta(), c = 0; c < b.length; c++) {
            var d = b[c], e = encodeURIComponent(String(d));
            d = this.Qa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.i = a.join("&")
    };
    var hc = function (a) {
        var b = new jc;
        b.i = a.i;
        a.g && (b.g = new Xb(a.g), b.j = a.j);
        return b
    }, tc = function (a, b) {
        b = String(b);
        a.s && (b = b.toLowerCase());
        return b
    }, pc = function (a, b) {
        b && !a.s && (sc(a), a.i = null, a.g.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (uc(this, d), uc(this, e), 0 < c.length && (this.i = null, this.g.set(tc(this, e), bb(c)), this.j += c.length))
        }, a));
        a.s = b
    };
    var wc = function (a, b, c, d) {
        this.g = 0;
        this.j = a;
        this.s = void 0 === c ? 3 : c;
        this.i = b;
        this.o = void 0 === d ? 2E3 : d
    }, yc = function (a, b, c, d) {
        c = void 0 === c ? function () {
        } : c;
        d = (void 0 === d ? 0 : d) ? "//www.google.com" : "";
        d = new dc(a.j.startsWith("/") ? "" + d + a.j : d + "/async/" + a.j);
        gc(d, b);
        d = d.toString();
        a.g++;
        c(a.g);
        return xc(a, d).catch(function (e) {
            return a.g < a.s ? a.i(a.o * Math.pow(2, a.g - 1)).then(function () {
                return yc(a, b, c)
            }) : Promise.reject(e)
        }).finally(function () {
            return a.g = 0
        })
    }, xc = function (a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", b);
        return new Promise(function (d, e) {
            c.send();
            c.onreadystatechange = function () {
                if (4 == c.readyState) if (200 == c.status && c.responseText) a:{
                    var f = c.responseText;
                    f.startsWith(")]}'\n") && (f = f.substring(5));
                    var g = {};
                    try {
                        g = JSON.parse(f)
                    } catch (h) {
                        e(f);
                        break a
                    }
                    g.hasOwnProperty(a.j) && (g = g[a.j]);
                    g.hasOwnProperty("__err__") ? e(g.__err__) : d(g)
                } else e(c)
            }
        })
    };
    var zc = function (a, b, c) {
        wc.call(this, a, function (d) {
            return new Promise(function (e) {
                return setTimeout(e, d)
            })
        }, void 0 === b ? 3 : b, void 0 === c ? 2E3 : c)
    };
    r(zc, wc);
    var Ac = function (a) {
        this.mb = a;
        this.i = !1;
        this.o = []
    };
    Ac.prototype.j = function () {
        if (!this.i) {
            this.i = !0;
            for (var a = p(this.o), b = a.next(); !b.done; b = a.next()) b = b.value, b()
        }
    };
    Ac.prototype.preload = function () {
    };
    Ac.prototype.Ob = function () {
        return this.i
    };
    var Bc = function (a, b) {
        a.i ? b() : a.o.push(b)
    };
    var Cc = function (a) {
        Cc[" "](a);
        return a
    };
    Cc[" "] = Ja;
    var Ec = function (a, b) {
        var c = Dc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Fc = Eb(w, "Opera"), Gc = Eb(w, "Trident") || Eb(w, "MSIE"), Hc = Eb(w, "Edge"),
        Ic = Eb(w, "Gecko") && !(Eb(w.toLowerCase(), "webkit") && !Eb(w, "Edge")) && !(Eb(w, "Trident") || Eb(w, "MSIE")) && !Eb(w, "Edge"),
        Jc = Eb(w.toLowerCase(), "webkit") && !Eb(w, "Edge"), Kc = function () {
            var a = v.document;
            return a ? a.documentMode : void 0
        }, Lc;
    a:{
        var Mc = "", Nc = function () {
            var a = w;
            if (Ic) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Hc) return /Edge\/([\d\.]+)/.exec(a);
            if (Gc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Jc) return /WebKit\/(\S+)/.exec(a);
            if (Fc) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Nc && (Mc = Nc ? Nc[1] : "");
        if (Gc) {
            var Oc = Kc();
            if (null != Oc && Oc > parseFloat(Mc)) {
                Lc = String(Oc);
                break a
            }
        }
        Lc = Mc
    }
    var Pc = Lc, Dc = {}, Qc = function (a) {
        return Ec(a, function () {
            for (var b = 0, c = vb(String(Pc)).split("."), d = vb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = Fb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Fb(0 == g[2].length, 0 == h[2].length) || Fb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, Rc;
    if (v.document && Gc) {
        var Sc = Kc();
        Rc = Sc ? Sc : parseInt(Pc, 10) || void 0
    } else Rc = void 0;
    var Tc = Rc;
    var Uc = !Gc || 9 <= Number(Tc), Vc = Gc && !Qc("9");
    !Jc || Qc("528");
    Ic && Qc("1.9b") || Gc && Qc("8") || Fc && Qc("9.5") || Jc && Qc("528");
    Ic && !Qc("8") || Gc && Qc("9");
    var Wc = function () {
        if (!v.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            v.addEventListener("test", Ja, b), v.removeEventListener("test", Ja, b)
        } catch (c) {
        }
        return a
    }();
    var y = function () {
        this.$ = this.$;
        this.S = this.S
    };
    y.prototype.$ = !1;
    y.prototype.Jb = function () {
        this.$ || (this.$ = !0, this.j())
    };
    var Xc = function (a, b) {
        a.$ ? b() : (a.S || (a.S = []), a.S.push(b))
    };
    y.prototype.j = function () {
        if (this.S) for (; this.S.length;) this.S.shift()()
    };
    var Yc = function (a) {
        a && "function" == typeof a.Jb && a.Jb()
    };
    var Zc = function (a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = this.j = !1
    };
    Zc.prototype.stopPropagation = function () {
        this.j = !0
    };
    Zc.prototype.preventDefault = function () {
        this.defaultPrevented = !0
    };
    var ad = function (a, b) {
        Zc.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            if (b = a.relatedTarget) {
                if (Ic) {
                    a:{
                        try {
                            Cc(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {
                        }
                        e =
                            !1
                    }
                    e || (b = null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : $c[a.pointerType] || "";
            this.state = a.state;
            this.i = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    Sa(ad, Zc);
    var $c = {2: "touch", 3: "pen", 4: "mouse"};
    ad.prototype.stopPropagation = function () {
        ad.ub.stopPropagation.call(this);
        this.i.stopPropagation ? this.i.stopPropagation() : this.i.cancelBubble = !0
    };
    ad.prototype.preventDefault = function () {
        ad.ub.preventDefault.call(this);
        var a = this.i;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, Vc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var bd = "closure_listenable_" + (1E6 * Math.random() | 0), cd = 0;
    var dd = function (a, b, c, d, e) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Nb = e;
        this.key = ++cd;
        this.tb = this.Hb = !1
    }, ed = function (a) {
        a.tb = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.Nb = null
    };
    var fd = function (a) {
        this.src = a;
        this.g = {};
        this.j = 0
    };
    fd.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.j++);
        var g = gd(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Hb = !1)) : (b = new dd(b, this.src, f, !!d, e), b.Hb = c, a.push(b));
        return b
    };
    var hd = function (a, b) {
        var c = b.type;
        c in a.g && $a(a.g[c], b) && (ed(b), 0 == a.g[c].length && (delete a.g[c], a.j--))
    }, gd = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.tb && f.listener == b && f.capture == !!c && f.Nb == d) return e
        }
        return -1
    };
    var id = "closure_lm_" + (1E6 * Math.random() | 0), jd = {}, kd = 0, A = function (a, b, c, d, e) {
        if (d && d.once) return ld(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) A(a, b[f], c, d, e);
            return null
        }
        c = md(c);
        return a && a[bd] ? nd(a, b, c, Ma(d) ? !!d.capture : !!d, e) : od(a, b, c, !1, d, e)
    }, od = function (a, b, c, d, e, f) {
        if (!b) throw Error("p");
        var g = Ma(e) ? !!e.capture : !!e, h = pd(a);
        h || (a[id] = h = new fd(a));
        c = h.add(b, c, d, g, f);
        if (c.g) return c;
        d = qd();
        c.g = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Wc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
            d, e); else if (a.attachEvent) a.attachEvent(rd(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("q");
        kd++;
        return c
    }, qd = function () {
        var a = sd, b = Uc ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }, ld = function (a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) ld(a, b[f], c, d, e);
            return null
        }
        c = md(c);
        return a && a[bd] ? a.i.add(String(b), c, !0, Ma(d) ? !!d.capture : !!d, e) : od(a, b, c, !0, d, e)
    }, td = function (a,
                      b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) td(a, b[f], c, d, e); else (d = Ma(d) ? !!d.capture : !!d, c = md(c), a && a[bd]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = gd(f, c, d, e), -1 < c && (ed(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.j--)))) : a && (a = pd(a)) && (b = a.g[b.toString()], a = -1, b && (a = gd(b, c, d, e)), (c = -1 < a ? b[a] : null) && ud(c))
    }, ud = function (a) {
        if ("number" !== typeof a && a && !a.tb) {
            var b = a.src;
            if (b && b[bd]) hd(b.i, a); else {
                var c = a.type, d = a.g;
                b.removeEventListener ? b.removeEventListener(c,
                    d, a.capture) : b.detachEvent ? b.detachEvent(rd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                kd--;
                (c = pd(b)) ? (hd(c, a), 0 == c.j && (c.src = null, b[id] = null)) : ed(a)
            }
        }
    }, rd = function (a) {
        return a in jd ? jd[a] : jd[a] = "on" + a
    }, wd = function (a, b, c, d) {
        var e = !0;
        if (a = pd(a)) if (b = a.g[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.tb && (f = vd(f, d), e = e && !1 !== f)
        }
        return e
    }, vd = function (a, b) {
        var c = a.listener, d = a.Nb || a.src;
        a.Hb && ud(a);
        return c.call(d, b)
    }, sd = function (a, b) {
        if (a.tb) return !0;
        if (!Uc) {
            var c = b || Ia("window.event");
            b = new ad(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a:{
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.g; e; e = e.parentNode) c.push(e);
                a = a.type;
                for (e = c.length - 1; !b.j && 0 <= e; e--) {
                    b.g = c[e];
                    var f = wd(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.j && e < c.length; e++) b.g = c[e], f = wd(c[e], a, !1, b), d = d && f
            }
            return d
        }
        return vd(a, new ad(b, this))
    }, pd = function (a) {
        a = a[id];
        return a instanceof fd ? a : null
    }, xd = "__closure_events_fn_" +
        (1E9 * Math.random() >>> 0), md = function (a) {
        if ("function" === typeof a) return a;
        a[xd] || (a[xd] = function (b) {
            return a.handleEvent(b)
        });
        return a[xd]
    };
    var yd = function () {
        y.call(this);
        this.i = new fd(this);
        this.Xa = this;
        this.ha = null
    };
    Sa(yd, y);
    yd.prototype[bd] = !0;
    yd.prototype.addEventListener = function (a, b, c, d) {
        A(this, a, b, c, d)
    };
    yd.prototype.removeEventListener = function (a, b, c, d) {
        td(this, a, b, c, d)
    };
    var Ad = function (a, b) {
        var c, d = a.ha;
        if (d) for (c = []; d; d = d.ha) c.push(d);
        a = a.Xa;
        d = b.type || b;
        if ("string" === typeof b) b = new Zc(b, a); else if (b instanceof Zc) b.target = b.target || a; else {
            var e = b;
            b = new Zc(d, a);
            gb(b, e)
        }
        e = !0;
        if (c) for (var f = c.length - 1; !b.j && 0 <= f; f--) {
            var g = b.g = c[f];
            e = zd(g, d, !0, b) && e
        }
        b.j || (g = b.g = a, e = zd(g, d, !0, b) && e, b.j || (e = zd(g, d, !1, b) && e));
        if (c) for (f = 0; !b.j && f < c.length; f++) g = b.g = c[f], e = zd(g, d, !1, b) && e
    };
    yd.prototype.j = function () {
        yd.ub.j.call(this);
        if (this.i) {
            var a = this.i, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ed(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.ha = null
    };
    var nd = function (a, b, c, d, e) {
        return a.i.add(String(b), c, !1, d, e)
    }, zd = function (a, b, c, d) {
        b = a.i.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.tb && g.capture == c) {
                var h = g.listener, k = g.Nb || g.src;
                g.Hb && hd(a.i, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    var Bd = function () {
    };
    Bd.prototype.g = null;
    Bd.prototype.getOptions = function () {
        var a;
        (a = this.g) || (a = {}, Cd(this) && (a[0] = !0, a[1] = !0), a = this.g = a);
        return a
    };
    var Dd, Ed = function () {
    };
    Sa(Ed, Bd);
    var Fd = function (a) {
        return (a = Cd(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, Cd = function (a) {
        if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.j = d
                } catch (e) {
                }
            }
            throw Error("r");
        }
        return a.j
    };
    Dd = new Ed;
    !Ic && !Gc || Gc && 9 <= Number(Tc) || Ic && Qc("1.9.1");
    Gc && Qc("9");
    var B = function (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    B.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    B.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    B.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var Gd = function (a, b) {
        this.width = a;
        this.height = b
    };
    Gd.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    Gd.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Gd.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Gd.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Hd = function (a) {
        var b = "SCRIPT";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }, Id = function (a) {
        this.g = a || v.document || document
    };
    var Jd = function (a, b, c) {
        if ("function" === typeof a) c && (a = Pa(a, c)); else if (a && "function" == typeof a.handleEvent) a = Pa(a.handleEvent, a); else throw Error("t");
        return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0)
    };
    var Kd = function (a) {
        yd.call(this);
        this.headers = new Xb;
        this.U = a || null;
        this.s = !1;
        this.v = this.g = null;
        this.W = "";
        this.o = this.ka = this.V = this.T = !1;
        this.Ea = 0;
        this.H = null;
        this.wa = "";
        this.Ja = this.Da = !1
    };
    Sa(Kd, yd);
    var Ld = /^https?$/i, Md = ["POST", "PUT"], Nd = [], Pd = function (a, b) {
        var c = new Kd;
        Nd.push(c);
        b && nd(c, "complete", b);
        c.i.add("ready", c.Ca, !0, void 0, void 0);
        Od(c, a, void 0, void 0, void 0);
        return c
    };
    Kd.prototype.Ca = function () {
        this.Jb();
        $a(Nd, this)
    };
    var Od = function (a, b, c, d, e) {
        if (a.g) throw Error("u`" + a.W + "`" + b);
        c = c ? c.toUpperCase() : "GET";
        a.W = b;
        a.T = !1;
        a.s = !0;
        a.g = a.U ? Fd(a.U) : Fd(Dd);
        a.v = a.U ? a.U.getOptions() : Dd.getOptions();
        a.g.onreadystatechange = Pa(a.ya, a);
        try {
            a.ka = !0, a.g.open(c, String(b), !0), a.ka = !1
        } catch (g) {
            Qd(a);
            return
        }
        b = d || "";
        var f = new Xb(a.headers);
        e && ac(e, function (g, h) {
            f.set(h, g)
        });
        e = Ya(f.Ta());
        d = v.FormData && b instanceof v.FormData;
        !(0 <= Wa(Md, c)) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function (g,
                            h) {
            this.g.setRequestHeader(h, g)
        }, a);
        a.wa && (a.g.responseType = a.wa);
        "withCredentials" in a.g && a.g.withCredentials !== a.Da && (a.g.withCredentials = a.Da);
        try {
            Rd(a), 0 < a.Ea && (a.Ja = Sd(a.g), a.Ja ? (a.g.timeout = a.Ea, a.g.ontimeout = Pa(a.Ga, a)) : a.H = Jd(a.Ga, a.Ea, a)), a.V = !0, a.g.send(b), a.V = !1
        } catch (g) {
            Qd(a)
        }
    }, Sd = function (a) {
        return Gc && Qc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }, Za = function (a) {
        return "content-type" == a.toLowerCase()
    };
    Kd.prototype.Ga = function () {
        "undefined" != typeof Da && this.g && (Ad(this, "timeout"), this.abort(8))
    };
    var Qd = function (a) {
        a.s = !1;
        a.g && (a.o = !0, a.g.abort(), a.o = !1);
        Td(a);
        Ud(a)
    }, Td = function (a) {
        a.T || (a.T = !0, Ad(a, "complete"), Ad(a, "error"))
    };
    Kd.prototype.abort = function () {
        this.g && this.s && (this.s = !1, this.o = !0, this.g.abort(), this.o = !1, Ad(this, "complete"), Ad(this, "abort"), Ud(this))
    };
    Kd.prototype.j = function () {
        this.g && (this.s && (this.s = !1, this.o = !0, this.g.abort(), this.o = !1), Ud(this, !0));
        Kd.ub.j.call(this)
    };
    Kd.prototype.ya = function () {
        this.$ || (this.ka || this.V || this.o ? Vd(this) : this.Oa())
    };
    Kd.prototype.Oa = function () {
        Vd(this)
    };
    var Vd = function (a) {
        if (a.s && "undefined" != typeof Da && (!a.v[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != Wd(a))) if (a.V && 4 == (a.g ? a.g.readyState : 0)) Jd(a.ya, 0, a); else if (Ad(a, "readystatechange"), 4 == (a.g ? a.g.readyState : 0)) {
            a.s = !1;
            try {
                Xd(a) ? (Ad(a, "complete"), Ad(a, "success")) : Td(a)
            } finally {
                Ud(a)
            }
        }
    }, Ud = function (a, b) {
        if (a.g) {
            Rd(a);
            var c = a.g, d = a.v[0] ? Ja : null;
            a.g = null;
            a.v = null;
            b || Ad(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }, Rd = function (a) {
        a.g && a.Ja && (a.g.ontimeout = null);
        a.H && (v.clearTimeout(a.H), a.H = null)
    }, Xd = function (a) {
        var b =
            Wd(a);
        a:switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.W).match(bc)[1] || null, !a && v.self && v.self.location && (a = v.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Ld.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }, Wd = function (a) {
        try {
            return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }, Yd = function (a) {
        try {
            return a.g ? a.g.responseXML : null
        } catch (b) {
            return null
        }
    };
    var Zd = function (a, b) {
        this.o = a;
        this.s = b;
        this.i = this.g = null;
        this.$ = this.S = !1;
        this.V = [];
        this.j = null
    }, de = function (a) {
        var b = D.va();
        if ($d && !b.g) {
            b.g = new (window.AudioContext || window.webkitAudioContext);
            b.i = b.g.createGain();
            b.i.connect(b.g.destination);
            for (var c in b.o) b.o[c].s = b.g;
            for (var d in b.s) ae(b.s[d], b.g, b.i);
            b.g.onstatechange = function () {
                be(b)
            };
            be(b);
            ce(b);
            ld(a, ["click", "pointerup", "mouseup", "touchend"], function () {
                b.g.resume();
                ce(b)
            }, !0)
        }
    }, be = function (a) {
        if ("running" == a.g.state && !a.$) {
            a.$ = !0;
            for (var b =
                0; b < a.V.length; b++) a.V[b]()
        }
    }, ee = function (a) {
        a.j = a.g.createBufferSource();
        a.j.buffer = a.g.createBuffer(1, 1, 22050);
        a.j.connect(a.g.destination);
        a.j.start(0)
    }, ce = function (a) {
        a.g && (null == a.j ? ee(a) : void 0 === a.j.playbackState ? ee(a) : a.j.playbackState !== a.j.PLAYING_STATE && a.j.playbackState !== a.j.FINISHED_STATE && ee(a))
    };
    Zd.prototype.getContext = function () {
        return this.g
    };
    Zd.prototype.destroy = function () {
        this.g.close();
        this.g = null
    };
    Zd.prototype.reset = function () {
        for (var a in this.o) this.o[a].o = [];
        for (var b in this.s) fe(this.s[b])
    };
    var ge = function () {
        var a = D.va();
        a.i && a.i.gain.setValueAtTime(1, a.g.currentTime);
        a.S = !1
    };
    Zd.prototype.isMuted = function () {
        return this.S && !!this.i && 0 == this.i.gain.value
    };
    var $d = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode, E = function (a, b, c) {
        this.S = a;
        this.V = b;
        this.$ = c;
        this.j = {};
        this.i = this.o = this.g = this.s = null;
        this.H = 0
    }, ae = function (a, b, c) {
        a.g = b;
        a.o = c
    };
    E.prototype.getContext = function () {
        return this.g
    };
    var he = function (a) {
        if (a.g) for (var b in a.j) {
            var c = a.j[b];
            !c.Pe && 1E3 * a.g.currentTime > c.Tc + a.$ && delete a.j[b]
        }
    }, F = function (a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? !1 : c;
        var d = void 0 === d ? 0 : d;
        var e = void 0 === e ? !1 : e;
        if (a.g && a.o) {
            he(a);
            var f = void 0 === f ? a.g.currentTime + b / 1E3 : f;
            if (!g) {
                var g = a.g.createBufferSource();
                g.playbackRate.setValueAtTime(1, a.g.currentTime)
            }
            !a.s && a.g.createGain && (a.s = a.g.createGain());
            a.i && g.connect(a.i);
            a.s ? (a.i ? a.i.connect(a.s) : g.connect(a.s), a.s.connect(a.o)) : a.i ? a.i.connect(a.o) : g.connect(a.o);
            a.i = null;
            g.loop = c;
            try {
                g.buffer = a.S.S
            } catch (k) {
                return
            }
            b = a.V / 1E3;
            var h = a.$ / 1E3 / g.playbackRate.value;
            c ? (g.loopStart = b + (e ? d / 1E3 : 0), g.loopEnd = b + h, g.start(f, b + d / 1E3)) : g.start(f, b + d / 1E3, h);
            e = a.H++;
            a.j[e] = {node: g, Tc: 1E3 * f - d, Pe: c}
        }
    }, fe = function (a, b) {
        he(a);
        if (void 0 !== b) {
            if (a.j[b]) {
                try {
                    a.j[b].node.stop(0)
                } catch (d) {
                }
                var c = (1E3 * a.g.currentTime - a.j[b].Tc) % a.$;
                delete a.j[b];
                return [c]
            }
            return []
        }
        b = [];
        for (c in a.j) b = b.concat(fe(a, c));
        return b
    }, ie = document.createElement("audio"), je = "function" === typeof ie.canPlayType &&
    "" != ie.canPlayType("audio/mpeg") ? ".mp3" : ".ogg", ke = function (a, b) {
        Ac.call(this, a + b + je);
        this.s = this.S = null;
        this.g = 0
    };
    r(ke, Ac);
    ke.prototype.preload = function (a, b) {
        var c = this, d = new Promise(function (f) {
            Bc(c, f)
        });
        a && Bc(this, a);
        if (0 != this.g) return Promise.resolve();
        if (!this.s) return Promise.reject();
        var e = new XMLHttpRequest;
        e.open("GET", this.mb, !0);
        e.responseType = "arraybuffer";
        e.onload = function () {
            c.s.decodeAudioData(e.response, function (f) {
                f && (c.S = f, c.g = 3, c.j())
            });
            c.g = 2
        };
        b && (e.onprogress = function (f) {
            f.lengthComputable && b(f.loaded / f.total)
        });
        e.send();
        this.g = 1;
        return d
    };
    var le = function (a, b, c, d) {
        this.g = a;
        this.j = b;
        this.i = Math.abs(c);
        this.o = void 0 === d ? !1 : d;
        this.o || (this.g += this.i, this.j += this.i)
    };
    r(le, Ua);
    le.prototype.moveTo = function (a, b) {
        this.g = a;
        this.j = b;
        this.o || (this.g += this.i, this.j += this.i)
    };
    le.prototype.s = function (a, b) {
        return Math.sqrt((this.g - a) * (this.g - a) + (this.j - b) * (this.j - b)) <= this.i
    };
    var oe = function (a) {
        var b = new Image;
        b.onerror = b.onload = b.onabort = function () {
            delete me[ne]
        };
        me[ne] = b;
        b.src = "/gen_204?atyp=i&ct=doodle&cad=" + a + "&zx=" + Date.now();
        ne++
    }, me = [], ne = 0;
    var pe = navigator.userAgent, G = new dc(location.href),
        qe = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
        re = pe.includes("iPad") || pe.includes("iPhone") || pe.includes("iPod") || qe,
        se = pe.toLowerCase().includes("gsa") || pe.includes("GoogleApp"), te = se && re, ue = se && !re,
        ve = re || pe.includes("Android") || pe.includes("Mobile") || pe.includes("Silk") || pe.includes("UCBrowser") || pe.includes("UCWEB"),
        we = !!document.querySelector("body.hp");
    pe.includes("GT-I9300") && pe.includes("Chrome");
    var xe = G.j.includes("/pages/") && G.j.includes(".html"), ze = function () {
        return !!document.getElementById("fkbx") || ye()
    }, ye = function () {
        var a = G.g.get("ntp");
        return "1" == a || "2" == a
    }, Ae = function () {
        return "1" == G.g.get("fpdoodle") && !!document.getElementById("fpdoodle")
    }, Be = function () {
        return !!document.querySelector("body#iframedoodle")
    };
    var I = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (a) for (d = 0; d < c.length; d += 2) {
            var e = c[d], f = c[d + 1], g = a.style;
            g && e in g ? g[e] = f : e in a && (a[e] = f)
        }
    }, Ce = Date.now, De = function () {
        return self.performance.now()
    }, Ee = ["Moz", "ms", "O", "webkit"], Fe = function (a, b, c) {
        if (a) {
            for (var d = p(Ee), e = d.next(); !e.done; e = d.next()) a.style[e.value + b] = c;
            a.style[b.charAt(0).toLowerCase() + b.substr(1)] = c
        }
    }, Ge = ["", "moz", "ms", "o", "webkit"], He = function (a, b) {
        if (!a) return null;
        for (var c = p(Ge), d = c.next(); !d.done; d =
            c.next()) {
            d = d.value;
            var e = b;
            0 < d.length && (e = b.charAt(0).toUpperCase() + b.substr(1));
            d += e;
            if ("undefined" != typeof a[d]) return d
        }
        return null
    }, Ie = function (a, b) {
        var c;
        return (c = window.google && void 0 !== window.google.doodle ? window.google.doodle : null) && void 0 != c[a] ? c[a] : b
    }, Je = function (a) {
        return 0 == a.indexOf("//") ? "https:" + a : a
    }, Ke = function () {
        return Je(Ie("shortlink", null) || "//www.google.com/?doodle=138397252")
    }, Le = function (a) {
        return Je(Ie(a, null) || Ke())
    }, Me = function (a, b) {
        a = Ie("doodle_args", {})[a];
        return null !=
        a ? a : b
    }, Ne = function () {
        return !!Me("is_dogfood", !1)
    }, Oe = Ie("alt", ""), Pe = Ie("hl", "en"), Qe = Ie("gl", ""), Se = function (a, b, c) {
        var d = Math.max(0, c - 230) + (document.querySelector("div.og-pdp") ? 36 : 12);
        I(a, "width", b + "px", "height", c + "px");
        Re(d)
    }, Re = function (a) {
        a += "px";
        var b = document.getElementById("lga");
        b && I(b, "marginBottom", a);
        ze() || ((b = document.getElementById("searchform")) && I(b, "transform", "translateY(" + a + ")"), a = new UIEvent("resize", {
            bubbles: !1,
            $e: !1,
            view: window,
            detail: 0
        }), window.dispatchEvent(a))
    }, Te = null, Ue =
        null, Ve = null, We = function () {
        Ve || (window.google && window.google.kEI && window.google.kEI.length ? Ve = window.google.kEI : Be() && vc(G.g, "ei") && (Ve = G.g.get("ei")));
        return Ve
    }, Xe = function () {
        if (!Te) {
            var a = document.getElementById("hplogoved");
            a ? Te = a.getAttribute("data-ved") : Be() && vc(G.g, "ved") && (Te = G.g.get("ved"))
        }
        return Te
    };
    var af = function (a, b) {
            var c = void 0 === c ? !0 : c;
            var d, e, f, g;
            return u(function (h) {
                switch (h.g) {
                    case 1:
                        return d = "string" === typeof a ? a : a.value, t(h, Ye(d), 2);
                    case 2:
                        var k;
                        if (!(k = h.j)) if (document.execCommand) {
                            "string" === typeof a ? (Ze || (Ze = document.createElement("input"), Ze.readOnly = !0, I(Ze, "position", "absolute", "opacity", 0, "left", 0, "top", 0, "pointerEvents", "none"), document.body.appendChild(Ze)), Ze.value = a, k = Ze) : k = a;
                            k !== document.activeElement && k.focus();
                            var m = k.contentEditable, q = k.readOnly;
                            k.contentEditable = !0;
                            k.readOnly = !1;
                            var z = document.createRange();
                            z.selectNodeContents(k);
                            var C = window.getSelection();
                            C.removeAllRanges();
                            C.addRange(z);
                            try {
                                k.select(), k.setSelectionRange(0, k.value.length)
                            } catch (J) {
                            }
                            k.contentEditable = m;
                            k.readOnly = q;
                            try {
                                var H = document.execCommand("copy")
                            } catch (J) {
                                H = !1
                            }
                            window.getSelection().removeAllRanges();
                            k.blur();
                            b && b !== document.activeElement && b.focus();
                            Ze && Ze.remove();
                            k = H
                        } else k = !1;
                        if (e = k) {
                            h.g = 3;
                            break
                        }
                        if (!(f = c)) {
                            h.g = 4;
                            break
                        }
                        return t(h, $e(), 5);
                    case 5:
                        f = h.j;
                    case 4:
                        if (!(g = f)) {
                            h.g = 6;
                            break
                        }
                        return t(h,
                            Ye(d), 7);
                    case 7:
                        g = h.j;
                    case 6:
                        e = g;
                    case 3:
                        return e ? h.return(Promise.resolve()) : h.return(Promise.reject())
                }
            })
        }, Ye = function (a) {
            return u(function (b) {
                return navigator.clipboard && navigator.clipboard.writeText ? b.return(navigator.clipboard.writeText(a).then(function () {
                    return !0
                }, function () {
                    return !1
                })) : b.return(!1)
            })
        }, bf = function (a) {
            return u(function (b) {
                switch (a.state) {
                    case "granted":
                        return b.return(!0);
                    case "denied":
                        return b.return(!1)
                }
                return b.return(new Promise(function (c) {
                    a.onchange = function () {
                        return c(bf(a))
                    }
                }))
            })
        },
        $e = function () {
            var a;
            return u(function (b) {
                if (1 == b.g) {
                    if (!navigator.permissions || !navigator.permissions.query) return b.return(!1);
                    a = bf;
                    return t(b, navigator.permissions.query({name: "clipboard-write"}), 2)
                }
                return b.return(a(b.j))
            })
        }, Ze = null;
    var cf = function (a, b) {
        var c = void 0 === c ? 52 : c;
        var d = c * (window.devicePixelRatio || 1), e = document.createElement("canvas");
        e.width = d;
        e.height = d;
        var f = e.getContext("2d");
        f.fillStyle = "rgba(0,0,0,.3)";
        f.arc(d / 2, d / 2, d / 2, 0, 2 * Math.PI);
        f.fill();
        f.strokeStyle = "#fff";
        f.lineWidth = d / 52 * 3.5;
        var g = d / 52 * 2;
        f.beginPath();
        f.moveTo(d / 4 + g, d / 4 + g);
        f.lineTo(3 * d / 4 - g, 3 * d / 4 - g);
        f.stroke();
        f.beginPath();
        f.moveTo(3 * d / 4 - g, d / 4 + g);
        f.lineTo(d / 4 + g, 3 * d / 4 - g);
        f.stroke();
        this.g = e;
        this.g.style.top = "10px";
        this.g.style.right = "10px";
        this.g.style.width =
            c + "px";
        this.g.style.height = c + "px";
        this.g.style.cursor = "pointer";
        this.g.style.position = "absolute";
        this.g.style.pointerEvents = "all";
        this.g.style.background = "transparent";
        this.g.style.display = "none";
        this.g.setAttribute("role", "button");
        A(this.g, "click", b);
        a.appendChild(this.g)
    };
    var df = function (a, b, c) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0;
        this.z = void 0 !== c ? c : 0
    };
    df.prototype.g = function () {
        return new df(this.x, this.y, this.z)
    };
    var K = function (a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c
    };
    Sa(K, df);
    K.prototype.g = function () {
        return new K(this.x, this.y, this.z)
    };
    var ef = function (a, b) {
        a.x *= b;
        a.y *= b;
        a.z *= b;
        return a
    };
    K.prototype.add = function (a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    };
    var ff = function (a, b, c) {
        return new K(x(a.x, b.x, c), x(a.y, b.y, c), x(a.z, b.z, c))
    };
    var L = function (a, b, c) {
        a = void 0 === a ? 0 : a;
        this.Ja = [];
        this.s = null;
        this.V = a instanceof K ? a : new K(a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.Ea = new K(0, 0, 0);
        this.Ac = new K(0, 0, 0);
        this.zc = this.Wb = 1;
        this.Vb = this.Ub = this.Xa = !0;
        this.Sb = new gf;
        this.$ = 0
    }, hf = function (a, b) {
        a.Ub = !0;
        a = p(a.Ja);
        for (var c = a.next(); !c.done; c = a.next()) hf(c.value, b)
    }, jf = function (a, b) {
        a.Vb = !0;
        a = p(a.Ja);
        for (var c = a.next(); !c.done; c = a.next()) jf(c.value, b)
    };
    L.prototype.g = function (a) {
        hf(this, !0);
        jf(this, !0);
        this.s && $a(this.s.Ja, this);
        (this.s = a) && this.s.Ja.push(this)
    };
    var lf = function (a) {
        var b = kf.va().g;
        a.g(b)
    };
    L.prototype.S = function () {
        this.g(null)
    };
    L.prototype.Ba = function (a, b, c) {
        hf(this, !0);
        a instanceof K ? (this.V.x = a.x, this.V.y = a.y, this.V.z = a.z) : (this.V.x = void 0 === a ? this.V.x : a, this.V.y = void 0 === b ? this.V.y : b, this.V.z = void 0 === c ? this.V.z : c)
    };
    var M = function (a, b) {
        jf(a, !0);
        hf(a, !0);
        a.Wb = b
    };
    L.prototype.Na = function () {
        return this.V
    };
    var nf = function (a) {
        a.Ub && (a.Ea.x = a.V.x, a.Ea.y = a.V.y, a.Ea.z = a.V.z, a.s && ef(a.Ea, mf(a.s)).add(nf(a.s)), a.Ac = a.Ea, a.Ub = !1);
        return a.Ac
    }, mf = function (a) {
        if (a.Vb) {
            var b = a.s ? a.Wb * mf(a.s) : a.Wb;
            a.zc = b;
            a.Vb = !1
        }
        return a.zc
    }, of = function (a, b) {
        if (!a.Xa) return !1;
        var c = b(a);
        if (c) return c;
        a = p(a.Ja);
        for (c = a.next(); !c.done; c = a.next()) if (c = of(c.value, b)) return c;
        return !1
    };
    L.prototype.j = function () {
        return new Gd(0, 0)
    };
    L.prototype.Aa = function () {
    };
    var pf = function (a) {
        return a.s ? a.$ + pf(a.s) : a.$
    }, gf = function () {
        this.g = 0
    };
    var qf = function () {
        L.call(this);
        this.U = !1
    };
    r(qf, L);
    l = qf.prototype;
    l.Aa = function (a) {
        this.U || (this.U = !0, this.Qb());
        this.tc(a);
        this.Ua() && this.Sa()
    };
    l.tc = function () {
    };
    l.Qb = function () {
    };
    l.Sa = function () {
    };
    l.Ua = function () {
        return !1
    };
    var rf = function (a, b, c) {
        b = void 0 === b ? function () {
        } : b;
        c = void 0 === c ? function () {
        } : c;
        qf.call(this);
        this.i = 0;
        this.H = a;
        b && (this.tc = b);
        this.Sa = c
    };
    r(rf, qf);
    rf.prototype.Ua = function () {
        return this.i >= this.H
    };
    rf.prototype.Aa = function (a) {
        this.i += a;
        qf.prototype.Aa.call(this, a)
    };
    var sf = function (a) {
        qf.call(this);
        this.i = a
    };
    r(sf, qf);
    sf.prototype.Aa = function (a) {
        for (var b = p(this.i), c = b.next(); !c.done; c = b.next()) c = c.value, c.Ua() || c.Aa(a);
        qf.prototype.Aa.call(this, a)
    };
    sf.prototype.Ua = function () {
        for (var a = p(this.i), b = a.next(); !b.done; b = a.next()) if (!b.value.Ua()) return !1;
        return !0
    };
    var tf = function (a) {
        qf.call(this);
        this.i = !1;
        this.o = a
    };
    r(tf, qf);
    tf.prototype.Qb = function () {
        var a = this;
        qf.prototype.Qb.call(this);
        this.o().then(function () {
            return a.i = !0
        })
    };
    tf.prototype.Ua = function () {
        return this.i
    };
    var uf = function () {
        L.call(this);
        this.i = [];
        this.o = []
    };
    r(uf, L);
    uf.prototype.Xc = function () {
        this.i.length && !this.i[0].Ua() && this.i.shift().Sa()
    };
    uf.prototype.Aa = function (a) {
        if (0 < this.i.length && 0 < a) {
            var b = this.i[0];
            b.Aa(a);
            b.Ua() && this.i.length && this.i[0] === b && this.i.shift()
        }
        for (b = 0; b < this.o.length; b++) this.o[b].Aa(a), this.o[b].Ua() && this.o.splice(b--, 1)
    };
    var vf = function (a, b) {
        Array.isArray(b) ? a.i.push(new sf(b)) : a.i.push(b)
    }, wf = function (a, b) {
        vf(a, new tf(b))
    }, xf = function (a, b, c) {
        vf(a, new rf(b, function () {
        }, void 0 === c ? function () {
        } : c))
    }, yf = function (a, b) {
        Array.isArray(b) ? a.o.push(new sf(b)) : a.o.push(b)
    };
    var zf = function (a, b, c, d) {
        this.top = a;
        this.j = b;
        this.g = c;
        this.left = d
    };
    zf.prototype.ceil = function () {
        this.top = Math.ceil(this.top);
        this.j = Math.ceil(this.j);
        this.g = Math.ceil(this.g);
        this.left = Math.ceil(this.left);
        return this
    };
    zf.prototype.floor = function () {
        this.top = Math.floor(this.top);
        this.j = Math.floor(this.j);
        this.g = Math.floor(this.g);
        this.left = Math.floor(this.left);
        return this
    };
    zf.prototype.round = function () {
        this.top = Math.round(this.top);
        this.j = Math.round(this.j);
        this.g = Math.round(this.g);
        this.left = Math.round(this.left);
        return this
    };
    var Af = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }, Cf = function () {
        var a = Bf;
        return new Af(a.left, a.top, a.width, a.height)
    }, Df = function (a) {
        return new B(a.left + a.width / 2, a.top + a.height / 2)
    };
    Af.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Af.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Af.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ef = 1 / 76, Bf = new Af(0, 0, 1E3, 1E3), Ff = new K(0, 0, 0), Gf = Ff;
    Object.isFrozen && !Object.isFrozen(Ff) && (Gf = Object.create(Ff), Object.freeze(Gf));
    var If = function (a, b, c, d, e, f) {
        if (6 == arguments.length) Hf(this, a, b, c, d, e, f); else {
            if (0 != arguments.length) throw Error("v");
            this.g = this.s = 1;
            this.i = this.j = this.o = this.S = 0
        }
    }, Hf = function (a, b, c, d, e, f, g) {
        if ("number" !== typeof b || "number" !== typeof c || "number" !== typeof d || "number" !== typeof e || "number" !== typeof f || "number" !== typeof g) throw Error("w");
        a.g = b;
        a.i = c;
        a.j = d;
        a.s = e;
        a.o = f;
        a.S = g;
        return a
    };
    If.prototype.toString = function () {
        return "matrix(" + [this.g, this.i, this.j, this.s, this.o, this.S].join() + ")"
    };
    If.prototype.transform = function (a, b, c, d, e) {
        var f = b;
        for (b += 2 * e; f < b;) {
            e = a[f++];
            var g = a[f++];
            c[d++] = e * this.g + g * this.j + this.o;
            c[d++] = e * this.i + g * this.s + this.S
        }
    };
    var Jf = function (a) {
        a = void 0 === a ? new K(0, 0, 0) : a;
        L.call(this, a);
        var b = this;
        this.i = Cf();
        this.o = new Map;
        this.H = 1.05 * this.i.height;
        this.v = function (c) {
            return 2 >= c.z || Math.abs(c.x) >= b.i.width / b.i.height * c.z * .8
        }
    };
    r(Jf, L);
    var Kf = function (a, b) {
        a.v = b
    }, Lf = function (a, b) {
        var c = new L;
        c.Aa = function () {
            var d = b.height;
            a.i.width = b.width;
            a.i.height = d;
            a.H = 1.05 * a.i.height
        };
        c.Aa(0);
        c.g(a)
    };
    Jf.prototype.Aa = function () {
        this.H = 1.05 * this.i.height
    };
    Jf.prototype.Ba = function (a, b, c) {
        L.prototype.Ba.call(this, a, b, c);
        this.o.clear()
    };
    var Nf = function (a, b) {
        var c, d = (c = void 0 === c ? !0 : c) ? a.o.get(173 * (103 * Mf(b.x) + Mf(b.y)) + Mf(b.z)) : null;
        if (!d) {
            d = nf(a);
            d = new K(b.x - d.x, b.y - d.y, b.z - d.z);
            var e = d.y, f = d.z;
            d.x = d.x;
            d.y = e;
            d.z = f;
            c && 1E3 > a.o.size && a.o.set(173 * (103 * Mf(b.x) + Mf(b.y)) + Mf(b.z), d)
        }
        return d
    }, Mf = function (a) {
        return Math.round(1E4 * a) / 1E4
    };
    var Of = function (a, b, c, d) {
        a.beginPath();
        a.moveTo(d, 0);
        a.lineTo(b - d, 0);
        a.quadraticCurveTo(b, 0, b, d);
        a.lineTo(b, c - d);
        a.quadraticCurveTo(b, c, b - d, c);
        a.lineTo(d, c);
        a.quadraticCurveTo(0, c, 0, c - d);
        a.lineTo(0, d);
        a.quadraticCurveTo(0, 0, d, 0);
        a.closePath()
    };
    var Pf = function () {
    };
    Pf.prototype.clip = function () {
    };
    var Qf = function (a, b, c) {
        this.g = a;
        this.j = b;
        this.i = c
    };
    r(Qf, Pf);
    Qf.prototype.clip = function (a, b) {
        a.beginPath();
        var c = b ? b.width : 1;
        b = b ? b.height : 1;
        a.translate(c * this.g, b * this.j);
        Of(a, c, b, this.i * c);
        a.clip();
        a.translate(-c * this.g, -b * this.j)
    };
    var N = function (a, b, c) {
        L.call(this, void 0 === a ? 0 : a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.o = new If;
        this.ka = new Af(0, 0, 0, 0);
        this.La = new Gd(0, 0);
        this.$a = 0;
        this.Ec = 1;
        this.Ga = null;
        this.H = new B(.5, .5);
        this.kb = "source-over"
    };
    r(N, L);
    N.prototype.isVisible = function (a) {
        a = a.i;
        var b = this.U();
        return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
    };
    N.prototype.Ka = function (a) {
        if ((this.o = a) && Rf(this)) {
            a = this.o;
            var b = -Rf(this);
            var c = new If;
            var d = Math.cos(b);
            b = Math.sin(b);
            c = Hf(c, d, b, -b, d, -(0 * d) + 0 * b, -(0 * b) - 0 * d);
            d = a.g;
            b = a.j;
            a.g = c.g * d + c.i * b;
            a.j = c.j * d + c.s * b;
            a.o += c.o * d + c.S * b;
            d = a.i;
            b = a.s;
            a.i = c.g * d + c.i * b;
            a.s = c.j * d + c.s * b;
            a.S += c.o * d + c.S * b
        }
    };
    var Sf = function (a, b) {
        if (!a.o) return null;
        var c = [0, 0];
        a = a.o;
        var d = a.g * a.s - a.j * a.i;
        (new If(a.s / d, -a.i / d, -a.j / d, a.g / d, (a.j * a.S - a.s * a.o) / d, (a.i * a.o - a.g * a.S) / d)).transform([b.x, b.y], 0, c, 0, 1);
        return new B(c[0], -c[1])
    }, Tf = function (a, b, c, d, e) {
        a.ka.left = b;
        a.ka.top = c;
        a.ka.width = d;
        a.ka.height = e;
        a = a.ka;
        0 > a.width && (a.width *= -1, a.left -= a.width);
        0 > a.height && (a.height *= -1, a.top -= a.height)
    };
    N.prototype.U = function () {
        return this.ka
    };
    N.prototype.Da = function () {
        return nf(this).z
    };
    N.prototype.j = function () {
        return this.La
    };
    N.prototype.setSize = function (a, b) {
        a instanceof Gd ? this.La = new Gd(a.width, a.height) : (this.La.width = a, this.La.height = void 0 === b ? a : b)
    };
    var Rf = function (a) {
        return a.s && a.s instanceof N ? a.$a + Rf(a.s) : a.$a
    }, Uf = function (a, b) {
        a.Ec = Wb(b, 0, 1)
    }, Vf = function (a, b) {
        of(a, function (c) {
            c instanceof N && Uf(c, b)
        })
    }, Xf = function (a, b) {
        if (!a.vb(b)) return !1;
        Wf(a);
        return a.isVisible(b)
    };
    N.prototype.vb = function (a) {
        var b = nf(this);
        a = new B(b.x + a.i.width / 2, b.y + a.i.height / 2);
        this.o ? Hf(this.o, mf(this), 0, 0, mf(this), a.x, a.y) : this.o = new If(mf(this), 0, 0, mf(this), a.x, a.y);
        this.Ka(this.o);
        return !0
    };
    var Wf = function (a) {
        var b = a.j().width, c = a.j().height, d = -a.H.x * b, e = -a.H.y * c, f = [];
        a.o.transform([d, e, d + b, e, d + b, e + c, d, e + c], 0, f, 0, 4);
        c = p([f[0], f[2], f[4], f[6]].reduce(function (g, h) {
            return [Math.min(g[0], h), Math.max(g[1], h)]
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]));
        b = c.next().value;
        c = c.next().value;
        d = p([f[1], f[3], f[5], f[7]].reduce(function (g, h) {
            return [Math.min(g[0], h), Math.max(g[1], h)]
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]));
        f = d.next().value;
        d = d.next().value;
        Tf(a, b, f, c - b, d - f)
    };
    N.prototype.Ra = function () {
    };
    var Yf = function (a) {
        this.g = a
    };
    r(Yf, Ua);
    Yf.prototype.s = function (a, b) {
        var c = this.g;
        if (6 > c.length) return !1;
        for (var d = !1, e = 0, f = c.length - 2; e < c.length; f = e, e += 2) {
            var g = c[e], h = c[e + 1], k = c[f];
            f = c[f + 1];
            a < g != a < k && b > h + (a - g) * (f - h) / (k - g) && (d = !d)
        }
        return d
    };
    var Zf = function (a, b) {
        b = void 0 === b ? 0 : b;
        L.call(this);
        this.o = a;
        this.H = b;
        var c;
        0 == this.H ? c = new Yf([0, 0, 0, 0, 0, 0, 0, 0]) : c = new le(1, 1, 1, !0);
        this.i = c
    };
    r(Zf, L);
    Zf.prototype.Aa = function () {
        var a = this.o.U();
        if (0 == this.H) {
            var b = new zf(a.top, a.left + a.width, a.top + a.height, a.left);
            this.i.g = [b.left, b.top, b.left, b.g, b.j, b.g, b.j, b.top]
        } else {
            b = this.i;
            var c = Df(a);
            b.moveTo(c.x, c.y);
            a = new Gd(a.width, a.height);
            a = Math.max(a.width, a.height) / 2;
            b.o || (b.g -= b.i, b.j -= b.i);
            b.i = a;
            b.moveTo(b.g, b.j)
        }
    };
    var $f = function (a) {
        Ac.call(this, a);
        this.image = new Image
    };
    r($f, Ac);
    $f.prototype.preload = function () {
        var a = this;
        if (this.image.src) return Promise.resolve(this.image);
        var b, c = new Promise(function (e) {
            return b = e
        }), d = function () {
            a.j();
            b(a.image)
        };
        this.image.decode ? (this.image.src = this.mb, this.image.decode().then(d, function (e) {
            console.error(e);
            d()
        })) : (this.image.onload = d, this.image.src = this.mb);
        (this.image.complete || "complete" == this.image.readyState) && d();
        return c
    };
    var ag = function (a, b) {
        this.g = [];
        this.j = [];
        b = p(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = new $f(a + d.filename);
            d = d.size;
            this.g.push(c);
            this.j.push(d)
        }
    }, bg = function (a) {
        return "number" === typeof a ? a : a[0]
    };
    l = ag.prototype;
    l.preload = function (a, b) {
        var c = this.g[bg(a)];
        return (new Promise(function (d) {
            Bc(c, d);
            c.preload()
        })).then(function () {
            return b && b()
        })
    };
    l.Ob = function () {
        return this.g[bg(void 0)].Ob()
    };
    l.Lb = function () {
        return this.g[bg(void 0)].image
    };
    l.rb = function (a) {
        return a[3]
    };
    l.Bb = function (a) {
        return a[4]
    };
    l.drawImage = function (a, b, c, d, e, f, g, h, k, m) {
        var q = b[1], z = b[2], C = b[3], H = b[4];
        if (void 0 == e) {
            var J = q;
            var O = z;
            var la = C;
            var ha = H;
            e = C;
            f = H
        } else void 0 == g ? (J = q, O = z, la = C, ha = H) : (J = q + c, O = z + d, la = e, ha = f, c = g, d = h, e = k, f = m);
        J < q && (m = q - J, J = q, la -= m, c += m, e -= m);
        O < z && (m = z - O, O = z, ha -= m, d += m, f -= m);
        J + la > q + C && (q = J + la - (q + C), la -= q, e -= q);
        O + ha > z + H && (z = O + ha - (z + H), ha -= z, f -= z);
        b = this.g[bg(b)];
        if (!b.Ob()) throw Error("x");
        0 < la && 0 < ha && a.drawImage(b.image, J, O, la, ha, c, d, e, f)
    };
    var dg = function (a) {
        var b = cg.va(), c = 216 / Math.max(b.rb(a), b.Bb(a));
        c = void 0 === c ? 1 : c;
        var d = c;
        d = void 0 === d ? 1 : d;
        var e = a[5] || 1;
        d = -(d * a[1] / e) + "px " + -(d * a[2] / e) + "px";
        c = void 0 === c ? 1 : c;
        e = a[5] || 1;
        var f = b.j[bg(a)];
        return "url(" + b.g[bg(a)].mb + ") " + d + "/" + (c * f[0] / e + "px " + c * f[1] / e + "px no-repeat")
    };
    var eg = function (a) {
        Ac.call(this, a);
        this.s = this.g = this.S = null
    };
    r(eg, Ac);
    eg.prototype.preload = function () {
        var a = this, b, c = new Promise(function (d) {
            return b = d
        });
        if (this.S || this.g) return Promise.resolve();
        this.g = Pd(this.mb, function () {
            a.j();
            b()
        });
        return c
    };
    eg.prototype.j = function () {
        var a = this;
        this.g && Xd(this.g) && (this.S = Yd(this.g), this.g.Jb(), this.g = null, this.s = new Image, this.s.onload = function () {
            return Ac.prototype.j.call(a)
        }, this.s.src = "data:image/svg+xml;utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(this.S)))
    };
    eg.prototype.Lb = function () {
        return this.s
    };
    var fg = function (a, b) {
        this.j = b.map(function (c) {
            return new eg(a + c)
        });
        this.g = new Map
    }, gg = function (a, b, c) {
        b = b.toString();
        return a.g.has(b) ? [].concat(fa(a.g.get(b).keys())).map(function (d) {
            return parseFloat(d)
        }).sort(function (d, e) {
            return Math.abs(parseFloat(d) - c) - Math.abs(parseFloat(e) - c)
        })[0] : null
    };
    fg.prototype.preload = function (a, b) {
        var c = hg(this, a);
        return (new Promise(function (d) {
            Bc(c, d);
            c.preload()
        })).then(function () {
            return b && b()
        })
    };
    var hg = function (a, b) {
        return "number" == typeof b ? a.j[b] : a.j[b[0]]
    };
    fg.prototype.Bb = function (a) {
        return a[4]
    };
    fg.prototype.rb = function (a) {
        return a[3]
    };
    var ig = function (a, b, c) {
        var d = document.createElement("canvas"), e = a[3] + 10, f = a[4] + 10;
        d.width = Math.ceil(e * c);
        d.height = Math.ceil(f * c);
        var g = d.getContext("2d");
        g.scale(c, c);
        g.drawImage(b, a[1] - 5, a[2] - 5, e, f, 0, 0, e, f);
        return d
    };
    var jg = function () {
    };
    jg.prototype.g = function () {
    };
    jg.prototype.j = function () {
    };
    var kg = null;
    var lg = function () {
        this.j = [];
        this.g = new Map
    };
    lg.prototype.addListener = function (a, b) {
        void 0 === b ? this.j.push(a) : (this.g.has(b) || this.g.set(b, []), this.g.get(b).push(a))
    };
    lg.prototype.removeListener = function (a, b) {
        if (void 0 !== b) mg(a, this.g.get(b) || []); else {
            mg(a, this.j);
            b = p(this.g.values());
            for (var c = b.next(); !c.done; c = b.next()) mg(a, c.value)
        }
    };
    var mg = function (a, b) {
        for (var c = b.indexOf(a); -1 != c;) b.splice(c, 1), c = b.indexOf(a)
    };
    Ka(lg);
    var ng = function (a, b, c, d) {
        this.g = a;
        this.i = b;
        this.j = c;
        this.s = d
    }, og = function (a, b) {
        if (0 == b) return 0;
        if (1 == b) return 1;
        var c = x(0, a.g, b), d = x(a.g, a.j, b);
        a = x(a.j, 1, b);
        c = x(c, d, b);
        d = x(d, a, b);
        return x(c, d, b)
    }, pg = function (a, b) {
        if (0 == b) return 0;
        if (1 == b) return 1;
        var c = x(0, a.i, b), d = x(a.i, a.s, b);
        a = x(a.s, 1, b);
        c = x(c, d, b);
        d = x(d, a, b);
        return x(c, d, b)
    };
    ng.prototype.Na = function () {
        return new B(og(this, void 0), pg(this, void 0))
    };
    var qg = function (a, b) {
        var c = b - 0;
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
            f = og(a, c);
            var h = (og(a, c + 1E-6) - f) / 1E-6;
            if (1E-6 > Math.abs(f - b)) return c;
            if (1E-6 > Math.abs(h)) break; else f < b ? d = c : e = c, c -= (f - b) / h
        }
        for (g = 0; 1E-6 < Math.abs(f - b) && 8 > g; g++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = og(a, c);
        return c
    };
    var rg = function (a, b, c, d) {
        var e = new ng(a, b, c, d);
        return function (f) {
            return pg(e, qg(e, f))
        }
    }(.25, .1, .25, 1), sg = function (a) {
        return a
    };
    var tg = function (a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        var f = void 0 === e.Nc ? x : e.Nc, g = void 0 === e.Kb ? sg : e.Kb, h = void 0 === e.Kc ? void 0 : e.Kc;
        rf.call(this, a, null, void 0 === e.Sa ? function () {
        } : e.Sa);
        this.W = d;
        this.v = h;
        this.o = b;
        if (null === this.o && void 0 === this.v) throw Error("y");
        this.ha = c;
        this.T = f;
        this.ka = g
    };
    r(tg, rf);
    tg.prototype.Qb = function () {
        null === this.o && (this.o = this.v())
    };
    tg.prototype.tc = function () {
        this.W(this.T(this.o, this.ha, this.ka(Wb(this.i / this.H, 0, 1))))
    };
    var ug = function (a, b, c, d) {
        d = void 0 === d ? {} : d;
        tg.call(this, b, null, c.g(), function (e) {
            return a.Ba(e)
        }, {
            Sa: void 0 === d.Sa ? function () {
            } : d.Sa, Kb: void 0 === d.Kb ? sg : d.Kb, Kc: function () {
                return a.Na().g()
            }, Nc: ff
        })
    };
    r(ug, tg);
    var vg = function (a, b) {
        a = void 0 === a ? new K(0, 0, 0) : a;
        b = void 0 === b ? new K(0, 0, 0) : b;
        L.call(this);
        this.o = b;
        this.i = a;
        this.H = new K(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        this.v = new K(1, 1, 1);
        this.U = new K(1, 1, 1)
    };
    r(vg, L);
    vg.prototype.Aa = function (a) {
        L.prototype.Aa.call(this, a);
        a /= 1E3;
        this.s && this.s.Ba(wg(this, this.s.Na(), a));
        xg(this, this.i, a);
        var b = this.i;
        b.x += this.o.x * a;
        b.y += this.o.y * a;
        b.z += this.o.z * a;
        yg(this, this.i);
        b = this.o;
        b.x = zg(b.x, this.U.x, a);
        b.y = zg(b.y, this.U.y, a);
        b.z = zg(b.z, this.U.z, a)
    };
    var xg = function (a, b, c) {
        b.x = zg(b.x, a.v.x, c);
        b.y = zg(b.y, a.v.y, c);
        b.z = zg(b.z, a.v.z, c);
        return b
    }, zg = function (a, b, c) {
        return .01 > Math.abs(a) && 1 > b ? 0 : a - (a - a * b) * c
    }, yg = function (a, b) {
        b.x = Wb(b.x, -a.H.x, a.H.x);
        b.y = Wb(b.y, -a.H.y, a.H.y);
        b.z = Wb(b.z, -a.H.z, a.H.z);
        return b
    }, Ag = function (a) {
        var b = -3 + 6 * Math.random(), c = 10 + 10 * Math.random();
        b instanceof K ? (a.i.x = b.x, a.i.y = b.y, a.i.z = b.z) : (a.i.x = b, a.i.y = void 0 === c ? a.i.y : c, a.i.z = 0)
    }, Bg = function (a, b) {
        return yg(a, ef(a.o.g(), .5 * b).add(xg(a, a.i, .5 * b)))
    }, wg = function (a, b, c) {
        return ef(Bg(a,
            c), c).add(b)
    }, Cg = function (a) {
        var b = -9.8, c = 0;
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? 0 : c;
        a.o.x = 0;
        a.o.y = void 0 === b ? a.o.y : b;
        a.o.z = void 0 === c ? a.o.z : c
    };
    var P = function (a, b, c) {
        N.call(this, void 0 === a ? 0 : a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.Oa = !0;
        this.Bc = 0
    };
    r(P, N);
    P.prototype.Da = function (a) {
        return this.Oa ? this.Bc : N.prototype.Da.call(this, a)
    };
    P.prototype.wa = function (a) {
        this.Oa = a
    };
    P.prototype.vb = function (a) {
        if (!this.Oa) return N.prototype.vb.call(this, a);
        this.Bc = Nf(a, nf(this)).z;
        var b = nf(this), c = mf(this);
        c = void 0 === c ? 1 : c;
        b = Nf(a, b);
        c = void 0 === c ? 1 : c;
        if (a.v(b)) a = null; else {
            var d = Math.abs(a.H / b.z);
            a = new If(d * c, 0, 0, d * c, d * b.x + a.i.width / 2, -1 * d * b.y + a.i.height / 2)
        }
        this.Ka(a);
        return !!a
    };
    P.prototype.Ra = function () {
    };
    var Dg = [0, 0, 0, 0, 0, 0], Gg = function (a, b, c, d) {
        a = void 0 === a ? Dg : a;
        P.call(this, void 0 === b ? 0 : b, void 0 === c ? 0 : c, void 0 === d ? 0 : d);
        this.v = (this.T = "number" == typeof a[0] ? null : a) ? this.T[0] : a;
        this.W = this.ha = 0;
        this.Ca = !1;
        this.Eb = !0;
        this.ya = new Gd(1, 1);
        this.Ia = new Gd(0, 0);
        this.Fc = new Gd(0, 0);
        Eg(this, 0, -.5);
        Fg(this)
    };
    r(Gg, P);
    Gg.prototype.i = function () {
    };
    Gg.prototype.j = function () {
        var a = P.prototype.j.call(this);
        return new Gd(a.width * this.ya.width, a.height * this.ya.height)
    };
    var Fg = function (a) {
        var b = a.Oa ? Ef : 1;
        a.setSize(b * a.i().rb(a.v), b * a.i().Bb(a.v))
    }, Eg = function (a, b, c) {
        a.Ia.width = b;
        a.Ia.height = c;
        a.H.x = -1 * b + .5;
        a.H.y = -c + .5
    };
    Gg.prototype.wa = function (a) {
        P.prototype.wa.call(this, a);
        Fg(this)
    };
    var Hg = function (a, b) {
        var c = P.prototype.j.call(a);
        b = Math.min(b / c.width, b / c.height);
        a.ya.width = b;
        a.ya.height = b
    };
    l = Gg.prototype;
    l.setLoop = function (a) {
        this.Eb = a
    };
    l.getDuration = function () {
        return this.T ? 42 * this.T.length : 0
    };
    l.reset = function () {
        this.ha = this.W = 0;
        this.v = this.T[this.W];
        this.Ca = !1
    };
    l.Aa = function (a) {
        P.prototype.Aa.call(this, a);
        this.Ca && (this.ha += a, this.T && 42 < this.ha && (this.ha -= 42, this.W >= this.T.length - 1 ? (this.Ca = this.Ca && this.Eb, a = 0) : a = this.W + 1, this.W = a, this.v = this.T[this.W]))
    };
    l.Ra = function (a) {
        P.prototype.Ra.call(this, a);
        var b = this.j();
        this.$b(a, this.Fc.width + this.Ia.width * b.width, -this.Fc.height + this.Ia.height * b.height, b.width, b.height, !1)
    };
    l.$b = function () {
    };
    var Ig = function () {
        Gg.apply(this, arguments)
    };
    r(Ig, Gg);
    Ig.prototype.i = function () {
        return kg.j()
    };
    Ig.prototype.$b = function (a, b, c, d, e, f) {
        f && a.scale(-1, 1);
        this.i().drawImage(a, this.v, b - d / 2, c - e / 2, d, e);
        f && a.scale(-1, 1)
    };
    var Jg = function (a, b, c, d, e, f, g, h) {
        c = void 0 === c ? 1 : c;
        d = void 0 === d ? 1 : d;
        e = void 0 === e ? .1 : e;
        f = void 0 === f ? "#000" : f;
        g = void 0 === g ? null : g;
        h = void 0 === h ? 1 : h;
        P.call(this, void 0 === a ? 0 : a, void 0 === b ? 0 : b);
        this.W = e;
        this.i = f;
        this.v = g;
        this.T = h;
        this.setSize(c, d)
    };
    r(Jg, P);
    Jg.prototype.Ra = function (a) {
        var b = this.j().width, c = this.j().height, d = Math.min(this.W, Math.min(c / 2, b / 2));
        a.translate(-b * this.H.x, -c * this.H.y);
        0 < this.T && (a.lineWidth = this.T);
        Of(a, b, c, d);
        this.i && (a.fillStyle = this.i, a.fill());
        this.v && (a.strokeStyle = this.v, a.stroke())
    };
    var kf = function () {
        this.S = [];
        this.g = new L;
        this.j = [];
        this.s = [];
        this.i = [];
        this.o = !0
    };
    kf.prototype.reset = function () {
        this.S = [];
        this.g = new L;
        this.j = [];
        this.s = [];
        this.i = []
    };
    var Kg = function (a, b) {
        a.s = [];
        for (var c = p(a.S), d = c.next(); !d.done; d = c.next()) of(d.value, function (f) {
            a.s.push(f);
            f.Aa(b)
        });
        a.i = [];
        var e = 0;
        of(a.g, function (f) {
            a.i.push(f);
            var g = e++;
            f.Sb.g = g;
            f.Aa(b)
        })
    }, Lg = function (a, b) {
        a.j = [];
        for (var c = p(a.s), d = c.next(); !d.done; d = c.next()) d = d.value, d.Xa && d instanceof N && Xf(d, b) && a.j.push(d);
        c = [];
        var e = p(a.i);
        for (d = e.next(); !d.done; d = e.next()) d = d.value, d.Xa && d instanceof N && Xf(d, b) && c.push(d);
        c.sort(function (f, g) {
            var h;
            return (h = g.Da(b) + pf(g) - (f.Da(b) + pf(f))) ? h : f.Sb.g - g.Sb.g
        });
        c.forEach(function () {
        });
        a.j.push.apply(a.j, fa(c))
    }, Mg = function (a, b) {
        a.o && (b.setTransform(1, 0, 0, 1, 0, 0), b.clearRect(0, 0, b.canvas.width, b.canvas.height));
        a = p(a.j);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = b;
            c.o && (d.globalAlpha = c.Ec, d.setTransform(c.o.g, c.o.j, c.o.i, c.o.s, c.o.o, c.o.S), d.globalCompositeOperation = c.kb, c.Ga && (d.save(), c.Ga.clip(d, c.j())), c.Ra(d), c.Ga && d.restore(), d.globalCompositeOperation = "source-over")
        }
    };
    Ka(kf);
    var Ng = function (a) {
        L.call(this);
        this.i = new kf;
        this.o = new Jf;
        Lf(this.o, a);
        this.o.g(this.i.g);
        this.H = a.getContext("2d")
    };
    r(Ng, L);
    Ng.prototype.Aa = function (a) {
        var b = this.i, c = this.H, d = this.o;
        Kg(b, a);
        Lg(b, d);
        Mg(b, c)
    };
    var Og = function (a, b, c, d) {
        Gg.call(this, a, void 0 === b ? 0 : b, void 0 === c ? 0 : c, void 0 === d ? 0 : d);
        this.Pa = 0
    };
    r(Og, Gg);
    Og.prototype.i = function () {
        return kg.g()
    };
    Og.prototype.Ka = function (a) {
        Gg.prototype.Ka.call(this, a);
        if (a && (a = Math.max(.2, Math.abs(this.ya.width * this.j().width * this.o.g / this.i().rb(this.v))), Pg(this.Pa, a))) {
            var b = gg(this.i(), this.v, a);
            this.Pa = b && !Pg(parseFloat(b), a) ? parseFloat(b) : a
        }
    };
    Og.prototype.$b = function (a, b, c, d, e, f) {
        var g = this.i(), h = this.v, k = this.Pa;
        f = void 0 === f ? !1 : f;
        a:{
            k = void 0 === k ? 1 : k;
            k = void 0 === k ? 1 : k;
            var m = h.toString(), q = "" + Math.round(1E3 * k) / 1E3;
            g.g.has(m) || g.g.set(m, new Map);
            var z = g.g.get(m);
            if (!z.has(q)) {
                var C = hg(g, h[0]);
                if (!C.Ob()) {
                    g = null;
                    break a
                }
                z.set(q, ig(h, C.Lb(), k))
            }
            g = g.g.get(m).get(q)
        }
        g && (f && a.scale(-1, 1), h = 10 * d / h[3], a.drawImage(g, b - (d + h) / 2, c - (e + h) / 2, d + h, e + h), f && a.scale(-1, 1))
    };
    var Pg = function (a, b) {
        return a ? .5 < Math.max(a, b) / Math.min(a, b) - 1 : !0
    };
    var Qg = function (a, b) {
        var c = void 0 === c ? !0 : c;
        return new tg(b, 0, 1, function (d) {
            c ? Vf(a, d) : Uf(a, d)
        })
    };
    var Rg = function () {
        return Be() ? "1" != G.g.get("scta") : !ze()
    }, Sg = function () {
        if (Be()) throw"";
        return we || ze()
    }, Tg = function () {
        if (Be()) throw"";
        return Ae() || xe || ve && !qe
    }, Ug = function () {
        return Be() ? "1" == G.g.get("ccta") : Ae() && !ze() || xe && ve && !we
    };
    var Vg = function () {
    };
    r(Vg, Ua);
    Vg.prototype.s = function () {
        return !1
    };
    var Xg = function (a) {
        var b = this;
        this.s = a;
        this.j = [];
        this.g = null;
        this.V = !0;
        this.S = this.o = 0;
        this.T = this.$ = !1;
        this.H = [];
        this.v = this.ka = 1;
        this.W = [this.s];
        this.U = !1;
        A(window, "resize", function () {
            Wg(b)
        });
        Wg(this)
    }, Wg = function (a, b) {
        void 0 !== b && (a.U = b);
        a.ka = a.s.width / a.s.clientWidth;
        a.v = a.s.height / a.s.clientHeight
    }, Zg = function (a, b, c) {
        a.j.push(new Yg(b, c))
    }, bh = function (a, b) {
        for (var c = a.j.length - 1; 0 <= c; c--) a.j[c].j === b && a.j.splice(c, 1);
        a.g && b === a.g.j && (a.g = null, $g(a));
        a.i && b === a.i.j && (a.i = null);
        ah(a, "areamove",
            a.o, a.S)
    }, ch = function (a, b) {
        for (var c = null, d = 0; d < a.j.length; d++) a.j[d].j === b && (c = a.j[d]);
        c && ($a(a.j, c), a.j.unshift(c))
    };
    Xg.prototype.handleEvent = function (a) {
        var b = a.i;
        var c = void 0;
        b = (b = b || window.event) ? (c = c || b.targetTouches && b.targetTouches[0] || b.changedTouches && b.changedTouches[0]) && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== b.clientX ? [b.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), b.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== b.pageX ? [b.pageX, b.pageY] : [0, 0] : [0, 0];
        c = this.s;
        var d = 0, e = 0;
        if (c) {
            do d += c.offsetLeft, e += c.offsetTop;
            while (c = c.offsetParent)
        }
        c = [d, e];
        b = [b[0] - c[0], b[1] - c[1]];
        this.U && (c = b[0], b[0] = b[1], b[1] = 0 - c);
        b[0] *= this.ka;
        b[1] *= this.v;
        c = b[1];
        this.o = b[0];
        this.S = c;
        a = a.type;
        this.T && 0 == a.indexOf("mouse") || (b = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove"
        }, a in b && (this.T = !0, a = b[a]), ah(this, a, this.o, this.S))
    };
    var ah = function (a, b, c, d) {
        if (!a.$ && "mousedown" == b) {
            a.$ = !0;
            for (var e = 0; e < a.H.length; e++) a.H[e]()
        }
        if ("mousedown" == b) {
            if (!a.i) for (b = 0; b < a.j.length; b++) if (e = a.j[b], e.j.s(c, d)) {
                a.i = e;
                e.g("mousedown", c, d);
                break
            }
        } else if ("mouseup" == b) a.i ? (a.i.g("mouseup", c, d), a.i = null) : a.g && a.g.g("mouseup", c, d); else if ("mousemove" == b || "areamove" == b) {
            e = null;
            for (var f = 0; f < a.j.length; f++) {
                var g = a.j[f];
                if (g.j.s(c, d)) {
                    e = g;
                    break
                }
            }
            a.g != e && (a.g && a.g.g("mouseout", c, d), e && e.g("mouseover", c, d), a.g = e);
            if ("mousemove" == b) for (a.i && a.i.g("mousemove",
                c, d), b = 0; b < a.j.length; b++) e = a.j[b], e != a.i && e.j.s(c, d) && e.g("mousemove", c, d)
        } else "mouseout" == b ? (a.g && a.g.g("mouseout", c, d), a.i = null, a.g = null) : "contextmenu" == b && a.g && a.g.g("contextmenu", c, d);
        $g(a)
    }, $g = function (a) {
        if (a.V) for (var b = a.g && a.g.j.S() ? "pointer" : "default", c = 0, d; d = a.W[c]; c++) I(d, "cursor", b)
    }, Yg = function (a, b) {
        this.j = a;
        this.g = b
    }, dh = function () {
        var a = new Vg;
        a.s = function () {
            return !0
        };
        a.S = function () {
            return !1
        };
        return a
    }();
    var fh = function () {
        y.call(this);
        this.U = !0;
        this.v = !1;
        this.s = [];
        this.H = !1;
        this.i = this.V = this.g = 0;
        this.o = eh
    };
    r(fh, y);
    var ih = function (a, b) {
        b = new gh(b);
        hh(a, b)
    }, hh = function (a, b) {
        a.s.push(b);
        a.H = !0
    }, lh = function (a) {
        if (a.U) a.v = !1; else {
            a.v = !0;
            jh(a);
            a.H && (a.s.sort(function (e, f) {
                return e.g == f.g ? f.j - e.j : e.g - f.g
            }), a.H = !1);
            for (var b = 0, c, d = 0; c = a.s[d]; d++) if (c.g <= a.g) kh(c) && hh(a, c), b++; else break;
            a.s.splice(0, b);
            a.g++;
            requestAnimationFrame(function () {
                lh(a)
            })
        }
    }, jh = function (a) {
        var b = (new Date).getTime();
        30 < a.g && a.V && (b - a.V >= 1.05 * a.o ? a.i++ : a.i >>= 1, 20 < a.i && (a.o = Math.min(50, 1.2 * a.o), a.i = 0));
        a.V = b
    };
    fh.prototype.start = function () {
        this.U = !1;
        this.v || lh(this)
    };
    fh.prototype.j = function () {
        this.reset();
        y.prototype.j.call(this)
    };
    fh.prototype.reset = function () {
        this.U = !0;
        this.s = [];
        this.g = 0;
        this.H = !1;
        this.o = eh;
        this.V = this.i = 0
    };
    Ka(fh);
    var eh = 1E3 / 60, gh = function (a) {
        var b = void 0;
        b = void 0 === b ? null : b;
        this.j = 1E3 / 60;
        this.i = a;
        this.g = fh.va().g;
        this.o = 0;
        this.s = b
    }, kh = function (a) {
        var b = a.i(a.o);
        a.o++;
        a.g = fh.va().g + a.j / fh.va().o;
        !b && a.s && a.s();
        return b
    };
    gh.prototype.cancel = function () {
        this.i = function () {
            return !1
        }
    };
    var nh = function (a, b, c) {
        var d = mh;
        d = void 0 === d ? rg : d;
        c = void 0 === c ? De : c;
        this.j = a;
        this.o = b;
        this.S = {};
        this.duration = 400;
        this.$ = d;
        this.i = c;
        this.g = null;
        this.s = !1
    }, ph = function (a) {
        var b = Math.min(Math.max(oh(a) / a.duration, 0), 1);
        a.s && (b = 1 - b);
        for (var c in a.j) if (a.o.hasOwnProperty(c)) {
            var d = a.S, e = c;
            var f = a.j[c];
            var g = a.o[c], h = a.$;
            h = void 0 === h ? rg : h;
            f += h(b) * (g - f);
            d[e] = f
        }
        return a.S
    }, oh = function (a) {
        return null === a.g ? 0 : a.i() - a.g
    };
    nh.prototype.start = function () {
        this.g = this.i();
        this.s = !1
    };
    nh.prototype.reset = function () {
        this.g = null
    };
    var mh = function (a) {
        return 3 * a * a - 2 * a * a * a
    };
    var qh = function (a, b) {
        b = void 0 === b ? function () {
        } : b;
        y.call(this);
        this.i = !1;
        this.H = b;
        this.g = a;
        this.V = "1" == G.g.get("ntp");
        this.o = function () {
            return !1
        };
        this.s = null;
        Sg() && (this.g.style.willChange = "width,height")
    };
    r(qh, y);
    var sh = function (a) {
        var b = 540 * .81;
        var c = void 0 === c ? function () {
        } : c;
        var d = void 0 === d ? !1 : d;
        var e = void 0 === e ? 0 : e;
        var f = void 0 === f ? !1 : f;
        if (a.g && Sg() && !a.i) {
            var g = a.g;
            if (ye()) rh(a, b, c); else {
                document.getElementById("fkbx") && I(g.parentElement, "width", "100%");
                var h = g.offsetHeight, k = g.offsetWidth;
                e = Math.min(777.6, g.parentElement.clientWidth) - 2 * e;
                b = f ? b : e / (777.6 / b);
                f = fh.va();
                var m = De(), q = new nh({height: h, width: k}, {height: b, width: e}, function () {
                    return m
                });
                q.start();
                a.i = !0;
                a.o = function (z) {
                    m = void 0 !== z ? m + z : De();
                    z =
                        ph(q);
                    Se(g, Math.round(z.width), Math.round(z.height));
                    a.H();
                    return oh(q) >= q.duration ? (c(), a.g.style.willChange = "unset", a.o = function () {
                        return !1
                    }, !1) : !0
                };
                d || ih(f, function () {
                    return a.o()
                })
            }
        }
    }, rh = function (a, b, c) {
        var d, e, f;
        u(function (g) {
            if (1 == g.g) return t(g, th(a), 2);
            d = {cmd: "resizeDoodle", width: "777.6px", height: b + "px", duration: "400ms"};
            "1" == G.g.get("ntp") ? window.parent.postMessage(d, "chrome-search://local-ntp") : window.top.postMessage(d, "chrome://new-tab-page");
            a.i = !0;
            e = !1;
            f = function () {
                a.V && a.g.classList.remove("expanderHide");
                e = !0;
                c()
            };
            a.s = setTimeout(f, 500);
            window.addEventListener("message", function (h) {
                "resizeComplete" === h.data.df && (null !== a.s && (clearTimeout(a.s), a.s = null), e || f())
            });
            return g.return()
        })
    }, th = function (a) {
        if (!a.V) return Promise.resolve();
        a.g.classList.add("expanderHide");
        return new Promise(function (b) {
            setTimeout(b, 200)
        })
    };
    qh.prototype.j = function () {
        y.prototype.j.call(this);
        this.reset();
        this.g = null
    };
    qh.prototype.reset = function () {
        this.i && (I(this.g, "width", "", "height", ""), Re(0), this.g.style.width = "", this.g.style.height = "");
        this.i = !1
    };
    var vh = function () {
        var a = ["Josefin Sans", "Roboto Mono", "Lilita One", "Noto Sans"], b, c, d = new Promise(function (f, g) {
            b = f;
            c = g
        });
        if (window.WebFontConfig && a) {
            a = p(a);
            for (var e = a.next(); !e.done; e = a.next()) uh(e.value);
            return d
        }
        Ra("WebFontConfig.active", b);
        Ra("WebFontConfig.inactive", c);
        Ra("WebFontConfig.google.families", a);
        a = document.createElement("script");
        a.src = ("https:" == document.location.protocol ? "" : "") + "img/loteria-2019/webfont.js";
        a.type = "text/javascript";
        a.async = !0;
        (document.getElementById("xjsc") || document.body).appendChild(a);
        return d
    }, uh = function (a) {
        a = a.toLowerCase().replace(/ /g, "");
        for (var b = p(document.documentElement.classList.values()), c = b.next(); !c.done && !c.value.search("wf-" + a + "-w+-active"); c = b.next()) ;
    };
    var wh = function (a) {
        y.call(this);
        this.i = a;
        this.g = {}
    };
    Sa(wh, y);
    var xh = [], yh = function (a, b, c, d, e) {
        Array.isArray(c) || (c && (xh[0] = c.toString()), c = xh);
        for (var f = 0; f < c.length; f++) {
            var g = A(b, c[f], d || a.handleEvent, e || !1, a.i || a);
            if (!g) break;
            a.g[g.key] = g
        }
    }, zh = function (a) {
        eb(a.g, function (b, c) {
            this.g.hasOwnProperty(c) && ud(b)
        }, a);
        a.g = {}
    };
    wh.prototype.j = function () {
        wh.ub.j.call(this);
        zh(this)
    };
    wh.prototype.handleEvent = function () {
        throw Error("z");
    };
    var Ah = re && navigator.userAgent.includes("OS 12_"), Bh = function () {
        this.T = this.ka = this.W = this.s = this.j = null;
        this.ha = !1;
        this.V = null;
        this.$ = this.H = this.o = this.S = !1;
        this.g = !0;
        this.v = this.U = !1;
        this.i = null
    };
    Bh.prototype.reset = function () {
        this.T = this.ka = this.W = this.s = this.j = null;
        this.ha = !1;
        this.V = null;
        this.$ = this.H = this.o = this.S = !1;
        this.g = !0;
        this.v = this.U = !1;
        this.i = null
    };
    var Eh = function (a) {
        a.i = "portrait-primary";
        document[Ch] && Dh(a)
    }, Dh = function (a) {
        a.i && (window.screen.lockOrientation && window.screen.lockOrientation(a.i), window.screen.orientation && window.screen.orientation.lock && window.screen.orientation.lock(a.i).catch(Ja))
    }, Hh = function (a, b, c, d, e) {
        var f = void 0 === f ? !0 : f;
        a.s = b;
        a.j = c;
        a.W = void 0 === e ? function () {
        } : e;
        a.$ = !1;
        a.V = b[He(b, "requestFullscreen")];
        b = !!(document[He(document, "fullscreenEnabled")] && a.V && Fh);
        if (Be()) throw"";
        c = re ? !1 : Ae() && !(te || ue) || xe && ve;
        a.S = c && b;
        a.o =
            f && Tg();
        a.H = !f && Tg();
        a.g = !0;
        if (a.S || a.o) I(document.body, "margin", "0"), I(a.s, "overflow", "visible", "width", "100%", "height", "100%"), document.body.scrollLeft = 0, d ? yh(d, window, "scroll", Gh) : A(window, "scroll", Gh, !0)
    }, Ih = function (a, b) {
        a.j.push(b);
        a.g = !0
    };
    Bh.prototype.close = function () {
        this.v = !0;
        this.S && (this.v ? (Fh.call(document), this.v = !1) : (this.V.call(this.s), Dh(this)))
    };
    var Jh = function (a, b) {
        var c = document.createElement("div");
        c.style.pointerEvents = "none";
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        c.style.width = "100%";
        c.style.height = "100%";
        c.style.direction = "ltr";
        c.dataset.width = a.toString();
        c.dataset.height = b.toString();
        return c
    };
    Ka(Bh);
    var Ch = He(document, "fullscreenElement"), Fh = document[He(document, "exitFullscreen")], Gh = function (a) {
        a.preventDefault();
        a.stopPropagation();
        return !1
    };
    var Kh = [5, 6, 7, 8, 9, 11, 12, 16], Lh = 0, Mh = 0, Nh = !1, Q = {}, Oh = [], Qh = function (a) {
        Q.c = a;
        Ph(1)
    }, Ph = function (a) {
        var b = Date.now();
        Q.dt = b - Mh;
        Mh = b;
        0 == a && (Lh = b);
        Q.e = a;
        Q.t = 0 == Lh ? -1 : Math.floor(b - Lh);
        Q.m = ve ? 1 : 0;
        b = window.document;
        b = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
        b = new Gd(b.clientWidth, b.clientHeight);
        Q.w = b.width > b.height ? 1 : 0;
        b = [];
        for (var c in Q) Q.hasOwnProperty(c) && b.push(c + ":" + Q[c]);
        c = b.join(",");
        b = 10 == a;
        var d = 0 <= Kh.indexOf(a);
        ze() && (c += "&ntp=1");
        b ? (b = Xe()) && (c += "&ved=" + b) : d && (Ue || ((b = document.getElementById("hplogoshareved")) ?
            Ue = b.getAttribute("data-ved") : Be() && vc(G.g, "sved") && (Ue = G.g.get("sved"))), (b = Ue) && (c += "&ved=" + b));
        -1 == c.search("&ei=") && (c += "&ei=", (b = We()) && (c += b));
        for (window.google && window.google.log ? window.google.log("doodle", c) : oe(c); 0 < Oh.length;) delete Q[Oh.pop()];
        Nh || 0 != a || Ug() || (Nh = !0, Ph(10))
    };
    var Vh = function (a, b, c) {
        y.call(this);
        this.ka = a;
        this.wa = b;
        this.Ea = c;
        this.U = Ce();
        this.W = He(document, "hidden");
        this.i = (this.v = He(document, "visibilityState")) ? this.v.replace(/state$/i, "change").toLowerCase() : null;
        this.s = Rh(this);
        this.o = !1;
        this.V = this.s;
        this.T = new wh;
        Xc(this, Qa(Yc, this.T));
        Sh(this);
        Th(this);
        Uh(this)
    };
    r(Vh, y);
    var Th = function (a) {
            yh(a.T, document, "mousedown mouseout touchstart mouseup mousemove touchend touchmove contextmenu keypress keydown keyup".split(" "), function () {
                return Wh(a)
            }, !0)
        }, Sh = function (a) {
            a.i ? Xh(a) : ue && Yh(a, function () {
                Xh(a)
            })
        }, Xh = function (a) {
            a.g = function () {
                a.s = Rh(a);
                a.s ? Zh(a) : Wh(a)
            };
            var b = window.agsa_ext;
            a.i ? document.addEventListener(a.i, a.g, !1) : b && b.registerPageVisibilityListener && (google.doodle || (google.doodle = {}), google.doodle.pvc = function () {
                a.g && a.g()
            }, b.registerPageVisibilityListener("google.doodle.pvc();"))
        },
        Yh = function (a, b) {
            window.agsa_ext ? b() : a.ha = setTimeout(function () {
                Sh(a)
            }, 100)
        };
    Vh.prototype.j = function () {
        clearTimeout(this.H);
        clearTimeout(this.ha);
        this.g && (this.i && document.removeEventListener ? document.removeEventListener(this.i, this.g, !1) : window.agsa_ext && window.agsa_ext.registerPageVisibilityListener && (this.g = null));
        y.prototype.j.call(this)
    };
    var Rh = function (a) {
        if (!a.W && !a.v && window.agsa_ext && window.agsa_ext.getPageVisibility) return "hidden" == window.agsa_ext.getPageVisibility();
        var b = document[a.v];
        return document[a.W] || "hidden" == b
    }, Zh = function (a) {
        var b = a.s || a.o;
        a.V && !b ? (a.V = !1, a.Ea(), Uh(a)) : !a.V && b && (a.V = !0, a.wa())
    }, Uh = function (a) {
        a.H && clearTimeout(a.H);
        var b = Math.max(100, a.ka - $h(a));
        a.H = setTimeout(function () {
            a.H = null;
            a.o = $h(a) >= a.ka;
            a.o || Uh(a);
            Zh(a)
        }, b)
    }, $h = function (a) {
        return Ce() - a.U
    }, Wh = function (a) {
        a.U = Ce();
        a.o = !1;
        Zh(a)
    };
    var ai = function (a, b) {
        window.google && google.doodle && (b && Ra("google.doodle.cpDestroy", b), Ra("google.doodle.cpInit", function () {
            b && b();
            a()
        }))
    };
    var bi = {}, ci = null, ei = function (a) {
        var b = "";
        di(a, function (c) {
            b += String.fromCharCode(c)
        });
        return b
    }, di = function (a, b) {
        function c(k) {
            for (; d < a.length;) {
                var m = a.charAt(d++), q = ci[m];
                if (null != q) return q;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("A`" + m);
            }
            return k
        }

        fi();
        for (var d = 0; ;) {
            var e = c(-1), f = c(0), g = c(64), h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }, fi = function () {
        if (!ci) {
            ci = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                     b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                bi[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === ci[f] && (ci[f] = e)
                }
            }
        }
    };
    var gi = function () {
    }, hi = "function" == typeof Uint8Array, ii = [], ji = function (a, b) {
        if (b < a.i) {
            b += a.s;
            var c = a.g[b];
            return c === ii ? a.g[b] = [] : c
        }
        if (a.j) return c = a.j[b], c === ii ? a.j[b] = [] : c
    };
    gi.prototype.toString = function () {
        return this.g.toString()
    };
    var ki = function (a) {
        a || (a = []);
        this.s = -1;
        this.g = a;
        a:{
            if (a = this.g.length) {
                --a;
                var b = this.g[a];
                if (!(null === b || "object" != typeof b || Array.isArray(b) || hi && b instanceof Uint8Array)) {
                    this.i = a - -1;
                    this.j = b;
                    break a
                }
            }
            this.i = Number.MAX_VALUE
        }
    };
    Sa(ki, gi);
    var li = function () {
        var a = void 0 === a ? !1 : a;
        if (Xe() && We()) return Promise.resolve();
        var b = "_fmt:jspb,doodle:138397252,slot:0,type:3,cta:1";
        ze() && (b += ",ntp:1");
        if (Xe() || a) b += ",impr:0";
        a = new jc;
        a.add("async", b);
        return yc(new zc("ddllog", 1), a, void 0, !1).then(function (c) {
            c = new ki(c);
            if (!Xe() && ji(c, 2)) {
                var d = ji(c, 2);
                Te = (new dc(d)).g.get("ved", "")
            }
            !We() && ji(c, 3) && (Ve = ji(c, 3))
        }).catch(function () {
            return Promise.resolve()
        })
    };
    var mi = {
        ad: ["ca"],
        ae: ["ar", "en", "fa", "hi", "ur"],
        af: ["ps", "fa"],
        ag: ["en"],
        ai: ["en"],
        al: ["sq", "en"],
        am: ["hy", "ru"],
        ao: ["pt-PT"],
        ar: ["es-419", "es"],
        as: ["en"],
        at: ["de"],
        au: ["en"],
        az: ["az", "ru"],
        ba: ["bs", "hr", "sr"],
        bd: ["bn", "en"],
        be: ["nl", "de", "en", "fr"],
        bf: ["fr"],
        bg: ["bg"],
        bh: ["ar", "en"],
        bi: ["fr"],
        bj: ["fr"],
        bn: ["ms", "en", "zh-CN"],
        bo: ["es-419", "es"],
        br: ["pt-BR", "en"],
        bs: ["en"],
        bt: ["en"],
        bw: ["tn", "en"],
        by: ["be", "ru"],
        bz: ["en", "es", "es-419"],
        ca: ["en", "fr", "fr-CA"],
        cd: ["fr", "sw"],
        cf: ["fr"],
        cg: ["fr"],
        ch: ["de",
            "en", "fr", "it"],
        ci: ["fr"],
        ck: ["en"],
        cl: ["es-419", "es"],
        cm: ["fr", "en"],
        cn: ["zh-CN"],
        co: ["es-419", "es"],
        cr: ["es-419", "en", "es"],
        cu: ["es-419", "es"],
        cv: ["pt-PT"],
        cy: ["en", "el", "tr"],
        cz: ["cs"],
        de: ["de", "en", "fr"],
        dj: ["fr", "ar", "so"],
        dk: ["da"],
        dm: ["en"],
        "do": ["es-419", "es"],
        dz: ["fr", "ar"],
        ec: ["es-419", "es"],
        ee: ["et", "ru"],
        eg: ["ar", "en"],
        es: ["es", "ca", "en", "eu", "gl"],
        et: ["am", "en", "so"],
        fi: ["fi", "sv"],
        fj: ["en"],
        fr: ["fr"],
        ga: ["fr"],
        ge: ["ka", "en"],
        gg: ["en", "fr"],
        gh: ["en"],
        gi: ["en", "es", "it", "pt-PT"],
        gl: ["da",
            "en"],
        gm: ["en", "wo"],
        gr: ["el"],
        gt: ["es-419", "es"],
        gy: ["en"],
        hk: ["zh-TW", "en", "zh-CN", "zh-HK"],
        hn: ["es-419", "es"],
        hr: ["hr"],
        ht: ["fr", "en", "ht"],
        hu: ["hu"],
        id: ["id", "en", "nl"],
        ie: ["en-GB", "ga"],
        il: ["iw", "ar", "en"],
        im: ["en"],
        "in": "en bn gu hi kn ml mr ne or pa ta te".split(" "),
        iq: ["ar", "en"],
        is: ["is", "en"],
        it: ["it", "en"],
        je: ["en", "fr"],
        jm: ["en"],
        jo: ["ar", "en"],
        jp: ["ja"],
        ke: ["sw", "en"],
        kg: ["ky", "ru"],
        kh: ["km", "en"],
        ki: ["en"],
        kr: ["ko"],
        kw: ["ar", "en"],
        kz: ["kk", "ru"],
        la: ["lo", "en"],
        lb: ["ar", "en", "fr", "hy"],
        lk: ["en", "si", "ta"],
        ls: ["st", "en", "zu"],
        lt: ["lt"],
        lu: ["de", "fr"],
        lv: ["lv", "lt", "ru"],
        ly: ["ar", "en", "it"],
        ma: ["fr", "ar"],
        md: ["ro", "ro-MD", "ru"],
        me: ["sr-ME", "bs", "sr"],
        mg: ["mg", "fr"],
        mk: ["mk"],
        ml: ["fr"],
        mm: ["my", "en"],
        mn: ["mn"],
        mt: ["mt", "en"],
        mu: ["en", "fr"],
        mv: ["en"],
        mw: ["ny", "en"],
        mx: ["es-419", "es"],
        my: ["en", "ms"],
        mz: ["pt-PT", "ny", "sn", "sw"],
        na: ["en", "af", "de"],
        ne: ["fr"],
        ng: ["en"],
        ni: ["es-419", "en", "es"],
        nl: ["nl", "en"],
        no: ["no", "nn"],
        np: ["ne", "en"],
        nr: ["en"],
        nu: ["en"],
        nz: ["en-GB"],
        om: ["ar", "en"],
        pa: ["es-419",
            "en", "es"],
        pe: ["es-419", "es"],
        pg: ["en"],
        ph: ["en"],
        pk: ["en", "pa", "ur"],
        pl: ["pl"],
        pn: ["en"],
        pr: ["es-419", "en", "es"],
        ps: ["ar", "en"],
        pt: ["pt-PT"],
        py: ["es-419", "es"],
        qa: ["ar", "en"],
        ro: ["ro", "de", "hu"],
        rs: ["sr", "sr-Latn"],
        ru: ["ru"],
        rw: ["en", "fr", "sw"],
        sa: ["ar", "en"],
        sb: ["en"],
        sc: ["crs", "en", "fr"],
        se: ["sv"],
        sg: ["en", "ms", "ta", "zh-CN"],
        si: ["sl"],
        sk: ["sk", "hu"],
        sl: ["en"],
        sm: ["it"],
        sn: ["fr", "wo"],
        so: ["so", "ar", "en"],
        sr: ["nl", "en"],
        st: ["pt-PT"],
        sv: ["es-419", "es"],
        td: ["fr", "ar"],
        tg: ["fr"],
        th: ["th", "en"],
        tj: ["tg",
            "ru"],
        tl: ["pt-PT", "en", "id"],
        tm: ["tk", "ru", "uz"],
        tn: ["ar", "fr"],
        to: ["en"],
        tr: ["tr"],
        tt: "en es es-419 fr hi zh-TW".split(" "),
        tw: ["zh-TW", "en"],
        tz: ["sw", "en"],
        ua: ["uk", "ru"],
        ug: ["en"],
        uk: ["en-GB"],
        us: ["en", "es", "es-419", "zh-CN"],
        uy: ["es-419", "es"],
        uz: ["uz", "ru"],
        vc: ["en"],
        ve: ["es-419", "es"],
        vi: ["en"],
        vn: ["vi", "en", "fr", "zh-TW"],
        vu: ["en", "fr"],
        ws: ["en"],
        za: ["en", "af", "st", "tn", "zu"],
        zm: ["en", "ny", "sn"],
        zw: ["en", "ny", "sn", "tn", "zu"]
    };
    var R = function () {
        this.g = this.j = null
    };
    R.prototype.load = function (a, b, c, d) {
        var e = this;
        a = ni(this, a, b, c);
        if (null == a) return Promise.resolve();
        var f = d + "messages." + a + ".nocache.json", g = new Kd;
        g.wa = "text";
        return new Promise(function (h, k) {
            nd(g, "success", function () {
                try {
                    var m = g.g ? g.g.responseText : ""
                } catch (q) {
                    m = ""
                }
                e.j = JSON.parse(m.substring(5));
                h()
            });
            nd(g, "error", k);
            Od(g, f)
        })
    };
    var S = function (a, b) {
        a = oi(a, b);
        for (var c = b = 0, d = !1, e = a.split(qb), f = 0; f < e.length; f++) {
            var g = e[f];
            ob.test(g) ? (b++, c++) : pb.test(g) ? d = !0 : nb.test(g) ? c++ : rb.test(g) && (d = !0)
        }
        b = 0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1;
        return 1 == b ? "\u202a" + a + "\u202c" : -1 == b ? "\u202b" + a + "\u202c" : a
    }, oi = function (a, b) {
        if (null == a.j) throw Error("B");
        return void 0 === a.j[b] ? "" : a.j[b]
    }, ni = function (a, b, c, d) {
        var e = b + "-" + c;
        if (d.includes(e)) return a.g = b, e;
        if (b && d.includes(b)) return a.g = b;
        if (c && mi[c]) for (b = p(mi[c]), c = b.next(); !c.done; c = b.next()) if (c = c.value,
            d.includes(c)) return a.g = c, a.g;
        return d.includes("en") ? (a.g = "en", a.g) : a.g = null
    };
    Ka(R);
    var pi = function (a, b) {
        b = void 0 === b ? 50 : b;
        y.call(this);
        this.o = a;
        this.s = 0;
        this.i = this.g = !1;
        this.V = b
    };
    r(pi, y);
    pi.prototype.start = function () {
        this.s = Date.now();
        var a = !this.i && !this.g;
        this.i = !1;
        this.g = !0;
        a && qi(this)
    };
    var qi = function (a) {
        a.i ? a.i = !1 : (requestAnimationFrame(function () {
            return qi(a)
        }), ti(a))
    }, ti = function (a) {
        var b = Date.now(), c = b - a.s;
        0 > c || (c = a.V ? Math.min(c, a.V) : c, a.s = b, a.o(c))
    };
    pi.prototype.j = function () {
        this.g && (this.i = !0, this.g = !1);
        y.prototype.j.call(this)
    };
    var ui = function (a) {
        return 0 == a.indexOf("//") ? "https:" + a : a
    }, vi = function (a, b) {
        var c = new jc, d;
        for (d in b) c.add(d, b[d]);
        a = new dc(a);
        gc(a, c);
        return a.toString()
    }, wi = function (a, b) {
        return u(function (c) {
            if (Ne()) return c.return(Promise.reject());
            Ph(16);
            return c.return(af(a, b))
        })
    };
    var xi = function () {
        this.g = {};
        this.j = 0;
        this.i = document.body
    };
    xi.prototype.reset = function () {
        for (var a in this.g) yi(this, a);
        this.g = {}
    };
    var yi = function (a, b) {
        if (a = a.g[b]) a.Db && (clearTimeout(a.Db), a.Db = 0), a.Wa && (a.Wa.parentNode && a.Wa.parentNode.removeChild(a.Wa), a.Wa = null), a.uc = null, a.yb = null
    }, Ai = function (a, b, c) {
        var d = xi.va(), e = 2E3;
        e = void 0 === e ? 4E3 : e;
        var f = d.g[a];
        if (f) {
            if (f.Cb) {
                b && b(f.Cb);
                return
            }
            if (f.Db) return
        } else f = {yb: c, Oe: a, Wa: null, uc: b, Db: 0, Cb: null};
        f.Wa || (f.Wa = document.createElement("script"));
        b = "c" + ++d.j;
        zi[b] = function (g) {
            var h = xi.va(), k = f;
            k.Cb = g.id;
            k.Cb ? k.uc && k.uc(k.Cb) : k.yb && k.yb();
            yi(h, k.Oe)
        };
        b = "//google-doodles.appspot.com/?callback=google.doodle.lsc." +
            b + "&url=" + encodeURIComponent(a);
        f.Wa.src = b;
        f.Db = setTimeout(function () {
            f.yb && f.yb();
            yi(xi.va(), a)
        }, e);
        d.i.appendChild(f.Wa);
        d.g[a] = f
    };
    Ka(xi);
    var zi = {};
    Ra("google.doodle.lsc", zi);
    var Bi = "en af sq am ar hy az eu be bn bs bg my ca zh-HK zh-CN zh-TW hr cs da nl en-GB et fa fil fi fr fr-CA gl ka de el gu iw hi hu is id it ja kn kk km ko ky lo lv lt mk ms ml mr mn ne no pl pt-BR pt-PT pa ro ru sr si-LK sk sl es-419 es sw sv ta te th tr uk ur uz vi zu".split(" ");
    var Ci = function (a, b) {
        L.call(this);
        this.W = b;
        this.i = new Og(a);
        Hg(this.i, .7);
        this.i.$a = 360 * Math.random() * Math.PI / 180;
        Eg(this.i, 0, 0);
        this.i.g(this);
        this.o = new Zf(this.i, 1);
        this.o.g(this);
        this.H = null;
        this.ka = this.Na().g();
        this.U = !0;
        this.v = new uf;
        this.v.g(this);
        var c = document.getElementById("hpcanvas");
        this.T = new N;
        this.T.U = function () {
            return new Af(.5 * -c.width, .5 * -c.height, 2 * c.width, 2 * c.height)
        }
    };
    r(Ci, L);
    Ci.prototype.j = function () {
        return this.i.j()
    };
    var Di = function (a, b) {
        a.U = !1;
        vf(a.v, new ug(a, 200, b));
        xf(a.v, 0, function () {
            a.U = !0
        })
    };
    Ci.prototype.Aa = function () {
    };
    var cg = function () {
        ag.call(this, "img/loteria-2019/", Ei)
    };
    r(cg, ag);
    Ka(cg);
    var Ei = [{filename: "main-sprite.png", size: [381, 243]}, {
            filename: "initial-sprite.png",
            size: [226, 113]
        }, {filename: "cards-sprite.png", size: [7081, 753]}], Fi = [1, 166, 0, 60, 60], Gi = [1, 166, 63, 52, 50],
        Hi = [1, 103, 0, 60, 70], Ii = [2, 1265, 0, 250, 375], Ji = [1, 0, 0, 100, 107], Ki = [0, 0, 0, 326, 243];
    var Li = new Map([["ajolote", [2, 0, 0, 250, 375]], ["alacran", [2, 253, 0, 250, 375]], ["arana", [2, 506, 0, 250, 375]], ["arbol", [2, 759, 0, 250, 375]], ["arpa", [2, 1012, 0, 250, 375]], ["back", Ii], ["bandera", [2, 1518, 0, 250, 375]], ["bandolon", [2, 1771, 0, 250, 375]], ["barril", [2, 2024, 0, 250, 375]], ["bota", [2, 2277, 0, 250, 375]], ["botella", [2, 2530, 0, 250, 375]], ["buscador", [2, 2783, 0, 250, 375]], ["calavera", [2, 3036, 0, 250, 375]], ["camaron", [2, 3289, 0, 250, 375]], ["campana", [2, 3542, 0, 250, 375]], ["cantarito", [2, 3795, 0, 250, 375]], ["catrin", [2, 4048, 0,
        250, 375]], ["cazo", [2, 4301, 0, 250, 375]], ["chalupa", [2, 4554, 0, 250, 375]], ["concha", [2, 4807, 0, 250, 375]], ["corazon", [2, 5060, 0, 250, 375]], ["corona", [2, 5313, 0, 250, 375]], ["cotorro", [2, 5566, 0, 250, 375]], ["dama", [2, 5819, 0, 250, 375]], ["elote", [2, 6072, 0, 250, 375]], ["emoji", [2, 6325, 0, 250, 375]], ["escalera", [2, 6578, 0, 250, 375]], ["estrella", [2, 6831, 0, 250, 375]], ["gallo", [2, 0, 378, 250, 375]], ["garza", [2, 253, 378, 250, 375]], ["gorro", [2, 506, 378, 250, 375]], ["guacamole", [2, 759, 378, 250, 375]], ["jaras", [2, 1012, 378, 250, 375]], ["luna",
        [2, 1265, 378, 250, 375]], ["maceta", [2, 1518, 378, 250, 375]], ["mano", [2, 1771, 378, 250, 375]], ["melon", [2, 2024, 378, 250, 375]], ["mundo", [2, 2277, 378, 250, 375]], ["musico", [2, 2530, 378, 250, 375]], ["nopal", [2, 2783, 378, 250, 375]], ["pajaro", [2, 3036, 378, 250, 375]], ["palma", [2, 3289, 378, 250, 375]], ["paraguas", [2, 3542, 378, 250, 375]], ["pera", [2, 3795, 378, 250, 375]], ["pescado", [2, 4048, 378, 250, 375]], ["pino", [2, 4301, 378, 250, 375]], ["rana", [2, 4554, 378, 250, 375]], ["rosa", [2, 4807, 378, 250, 375]], ["sandia", [2, 5060, 378, 250, 375]], ["sirena",
        [2, 5313, 378, 250, 375]], ["sol", [2, 5566, 378, 250, 375]], ["tambor", [2, 5819, 378, 250, 375]], ["venado", [2, 6072, 378, 250, 375]], ["violoncello", [2, 6325, 378, 250, 375]], ["xoloitzcuintle", [2, 6578, 378, 250, 375]]]);
    var Mi = function (a) {
        return Li.get(a.displayName.split(" ")[1].toLowerCase())
    }, Ni = function () {
        var a = [].concat(fa(Li.values()));
        return a[Math.floor(Math.random() * a.length)]
    };
    var Pi = function () {
        fg.call(this, "img/loteria-2019/", Oi)
    };
    r(Pi, fg);
    Ka(Pi);
    var Oi = ["svg-sprite.svg"], Qi = [0, 20, 20, 71, 67], Ri = [0, 20, 735, 292, 292], Si = [0, 20, 1047, 645, 169],
        Ti = [0, 20, 1236, 113, 113], Ui = [0, 20, 9524, 80, 80], Vi = [0, 20, 9624, 80, 80],
        Wi = [0, 20, 9724, 417.1000061035156, 421.3999938964844],
        Xi = [0, 20, 10166, 321.3900146484375, 449.94000244140625], Yi = [0, 20, 1921, 1668, 2232],
        Zi = [0, 20, 10636, 80, 80], $i = [0, 20, 4173, 1004, 344], aj = [0, 20, 4537, 1006, 295],
        bj = [0, 20, 10736, 127.19999694824219, 1340.800048828125], cj = [0, 20, 5372, 113, 113],
        dj = [0, 20, 12097, 80, 80], ej = [0, 20, 6729, 239.13999938964844, 239.13999938964844],
        fj = [0, 20, 7480, 1006, 295], gj = [0, 20, 8140, 320.20001220703125, 442.8800048828125],
        hj = [0, 20, 8603, 420, 630], ij = [0, 20, 9253, 250.1999969482422, 250.1999969482422];
    var jj = function (a) {
        P.call(this);
        this.Eb = a;
        this.i = new Ig(Mi(a));
        Eg(this.i, 0, 0);
        Hg(this.i, 1.6);
        this.i.$ = -1;
        this.H.x = 0;
        this.H.y = 1;
        this.i.g(this);
        this.setSize(this.i.j().width + .05, this.i.j().height + .05);
        this.i.Ba(this.j().width / 2, this.j().height / 2);
        this.T = new Og(gj);
        Hg(this.T, this.j().width);
        Eg(this.T, 0, 0);
        Uf(this.T, 0);
        M(this.T, .8);
        this.T.g(this.i);
        this.ha = new Jg(0, 0, this.j().width, this.j().height, .05, "#fff");
        this.ha.$ = 1;
        this.ha.g(this.i);
        this.Ca = new Jg(0, 0, this.j().width, this.j().height, .05, "rgba(255, 255, 255, 0.8)");
        this.Ca.$ = -1;
        Uf(this.Ca, 0);
        this.Ca.g(this.i);
        this.Pa = {col: 0, row: 0};
        this.ya = !1;
        this.Ia = new Zf(this);
        this.Ia.g(this);
        this.v = new uf;
        this.v.g(this);
        this.W = null
    };
    r(jj, P);
    var kj = function (a) {
        a.ya || (a.v.o = [], a.$ = -2, a.ha.i = "rgb(44, 112, 171)", yf(a.v, new tg(100, 0, 1, function (b) {
            M(a.i, 1 + .05 * b);
            M(a.ha, 1 + .05 * b)
        })))
    }, lj = function (a) {
        a.ya || (a.v.o = [], yf(a.v, new tg(100, 1, 0, function (b) {
            M(a.i, 1 + .05 * b);
            M(a.ha, 1 + .05 * b)
        }, {
            Sa: function () {
                a.$ = 0;
                a.ha.i = "#fff"
            }
        })))
    }, mj = function (a) {
        lj(a);
        a.v.i = [];
        vf(a.v, new tg(200, 0, 1, function (b) {
            Uf(a.T, b);
            M(a.T, .8 + .3 * b)
        }));
        xf(a.v, 200);
        vf(a.v, new tg(200, 1, 0, function (b) {
            Uf(a.T, b);
            M(a.T, .8 + .3 * b)
        }))
    }, nj = function (a) {
        if (a.W) {
            var b = new Og(Wi);
            b.g(a.W);
            Hg(b, 1.35 *
                a.W.j().width);
            Eg(b, 0, 0);
            b.$ = .1;
            M(b, .5);
            yf(a.v, new tg(300, 0, 1, function (c) {
                M(b, .5 + .5 * c);
                Uf(a.Ca, c)
            }));
            yf(a.v, new tg(1E4, 0, 1440, function (c) {
                b.$a = c * Math.PI / 180
            }))
        }
    };
    jj.prototype.Ra = function (a) {
        a.fillStyle = "#fff";
        a.fillRect(0, 0, this.j().width, -this.j().height)
    };
    var oj = [{id: 0, displayName: "El Corazon"}, {id: 1, displayName: "El Pescado"}, {
        id: 2,
        displayName: "El Paraguas"
    }, {id: 3, displayName: "La Escalera"}, {id: 4, displayName: "El Barril"}, {id: 5, displayName: "El Arbol"}, {
        id: 6,
        displayName: "El Melon"
    }, {id: 7, displayName: "El Gorro"}, {id: 8, displayName: "La Pera"}, {id: 9, displayName: "La Bandera"}, {
        id: 10,
        displayName: "El Bandolon"
    }, {id: 11, displayName: "El Camaron"}, {id: 12, displayName: "La Luna"}, {id: 13, displayName: "La Mano"}, {
        id: 14,
        displayName: "El Nopal"
    }, {id: 15, displayName: "La Rosa"},
        {id: 16, displayName: "El Sol"}, {id: 17, displayName: "El Venado"}, {
            id: 18,
            displayName: "El Violoncello"
        }, {id: 19, displayName: "La Botella"}, {id: 20, displayName: "La Garza"}, {
            id: 21,
            displayName: "El Pajaro"
        }, {id: 22, displayName: "El Alacran"}, {id: 23, displayName: "El Arpa"}, {
            id: 24,
            displayName: "La Calavera"
        }, {id: 25, displayName: "La Campana"}, {id: 26, displayName: "El Cantarito"}, {
            id: 27,
            displayName: "La Chalupa"
        }, {id: 28, displayName: "La Corona"}, {id: 29, displayName: "La Maceta"}, {
            id: 30,
            displayName: "La Palma"
        }, {id: 31, displayName: "El Pino"},
        {id: 32, displayName: "La Rana"}, {id: 33, displayName: "La Arana"}, {id: 34, displayName: "La Bota"}, {
            id: 35,
            displayName: "El Cazo"
        }, {id: 36, displayName: "El Cotorro"}, {id: 37, displayName: "La Estrella"}, {
            id: 38,
            displayName: "El Mundo"
        }, {id: 39, displayName: "El Musico"}, {id: 40, displayName: "La Sandia"}, {
            id: 41,
            displayName: "El Tambor"
        }, {id: 42, displayName: "El Elote"}, {id: 43, displayName: "El Emoji"}, {
            id: 44,
            displayName: "El Xoloitzcuintle"
        }, {id: 45, displayName: "El Gallo"}, {id: 46, displayName: "La Dama"}, {id: 47, displayName: "Las Jaras"},
        {id: 48, displayName: "El Catrin"}, {id: 49, displayName: "La Concha"}, {
            id: 50,
            displayName: "El Ajolote"
        }, {id: 51, displayName: "El Buscador"}], pj = function (a) {
        var b = oj.find(function (c) {
            return c.id == a
        });
        return b ? b : (console.error("missing card: " + a), oj[0])
    }, qj = function () {
        for (var a = [], b = oj.slice(0), c = 0; 40 > c; c++) {
            var d = Math.floor(Math.random() * b.length), e = b[d];
            b.splice(d, 1);
            a.push(e)
        }
        return a
    };
    var T = function (a) {
        return new Promise(function (b) {
            return setTimeout(b, a)
        })
    }, rj = function () {
        return Array(4).fill(0).map(function () {
            return Array(4).fill(0).map(function () {
                return {state: Math.round(Math.random()), card: 0}
            })
        })
    }, sj = function () {
        var a = R.va().g;
        return "es" == a || "es-419" == a
    };
    var uj = function (a) {
        N.call(this);
        this.i = [];
        this.ha = new L;
        this.ha.g(this);
        ve && !we ? M(this, .44) : M(this, .65);
        this.ya = [Ri, ej, ij][Math.floor(3 * Math.random())];
        for (var b = 0; b < a.length; b++) {
            for (var c = [], d = 0; d < a[b].length; d++) {
                var e = pj(a[b][d].card);
                e = new jj(e);
                e.Ba(1.07 * d, b * e.j().height);
                var f = b;
                e.Pa.col = d;
                e.Pa.row = f;
                e.g(this.ha);
                c.push(e)
            }
            this.i.push(c)
        }
        a = this.i[0][0].j();
        this.ha.Ba(-.535 * this.i[0].length, -.5 * this.i.length * a.height);
        this.T = new Jg(0, 0, 1.07 * this.i[0].length + .15, a.height * this.i.length + .3, .1,
            "#fff");
        this.T.$ = 1;
        this.T.Ba(0, 0);
        a = this.T;
        a.H.x = .5;
        a.H.y = .5;
        this.T.g(this);
        this.W = new Jg(0, 0, this.T.j().width + .1, this.T.j().height + .1, .1, "#bd311b");
        this.W.$ = 1.1;
        this.W.Ba(0, 0);
        a = this.W;
        a.H.x = .5;
        a.H.y = .5;
        Uf(this.W, .5);
        this.W.g(this);
        this.v = [];
        this.wa = new P(ve && !we ? 0 : 4.3);
        this.wa.g(this);
        for (a = 0; 10 > a; a++) tj(this, a)
    };
    r(uj, N);
    uj.prototype.U = function () {
        return this.T.U()
    };
    var tj = function (a, b) {
        var c = new Ci(a.ya, b), d = 5 > b ? 1 : -1;
        c.$ = -6;
        ve && !we ? c.Ba(2.7 * d + -.1 + .2 * Math.random(), b % 5 * .95 + -2.1 + .2 * Math.random()) : c.Ba(b % 5 * .6 + -1.6 + .2 * Math.random(), 2.5 * d + (b + (0 > d ? 1 : 0)) % 2 * d * .6 + -.1 + .2 * Math.random());
        a.v.push(c);
        c.g(a.wa);
        return c
    }, vj = function (a, b) {
        var c, d;
        return u(function (e) {
            if (1 == e.g) return c = a.v.indexOf(b), a.v.splice(c, 1), t(e, T(500), 2);
            d = tj(a, b.W);
            Uf(d.i, 0);
            yf(d.v, Qg(d.i, 300));
            return e.return(d)
        })
    }, wj = function (a) {
        return [].concat(fa(a.v), fa(db(a.i).map(function (b) {
            return b.W
        }).filter(function (b) {
            return !!b
        })))
    };
    var U = function () {
        Zd.call(this, U.j, U.g)
    };
    r(U, Zd);
    U.j = {};
    U.j.Ma = new ke("img/loteria-2019/", "sounds");
    U.j.ta = new ke("img/loteria-2019/", "cards");
    U.j.Fb = new ke("img/loteria-2019/", "tutorial_en");
    U.j.Gb = new ke("img/loteria-2019/", "tutorial_es");
    var V = U.j;
    U.g = {};
    U.g.Ye = new E(V.Ma, 0, 6120.8330078125);
    U.g.Yc = new E(V.ta, 0, 1789.625);
    U.g.Zc = new E(V.ta, 2789.625, 1061.10400390625);
    U.g.$c = new E(V.ta, 4850.72900390625, 1730.18701171875);
    U.g.hd = new E(V.ta, 7580.9169921875, 1075.0830078125);
    U.g.jd = new E(V.ta, 9656, 1257.6669921875);
    U.g.kd = new E(V.ta, 11913.6669921875, 1492.875);
    U.g.ld = new E(V.ta, 14406.5419921875, 1038.35400390625);
    U.g.nd = new E(V.ta, 16444.896484375, 1145.5);
    U.g.od = new E(V.ta, 18590.396484375, 1298.64599609375);
    U.g.qd = new E(V.ta, 20889.04296875, 1376.77099609375);
    U.g.rd = new E(V.ta, 23265.8125, 1395);
    U.g.sd = new E(V.ta, 25660.8125, 1798.9580078125);
    U.g.ud = new E(V.ta, 28459.771484375, 1433.5419921875);
    U.g.vd = new E(V.ta, 30893.3125, 1462.0419921875);
    U.g.wd = new E(V.ta, 33355.35546875, 1154.2919921875);
    U.g.xd = new E(V.ta, 35509.64453125, 1215.81201171875);
    U.g.yd = new E(V.ta, 37725.45703125, 1247.60400390625);
    U.g.zd = new E(V.ta, 39973.0625, 1078.625);
    U.g.Ad = new E(V.ta, 42051.6875, 1401.02099609375);
    U.g.Bd = new E(V.ta, 44452.70703125, 1304.43701171875);
    U.g.Cd = new E(V.ta, 46757.14453125, 1005.7080078125);
    U.g.Dd = new E(V.ta, 48762.85546875, 1133.3330078125);
    U.g.Ed = new E(V.ta, 50896.1875, 1303.56201171875);
    U.g.Fd = new E(V.ta, 53199.75, 2188.22900390625);
    U.g.Gd = new E(V.ta, 56387.98046875, 1534.3330078125);
    U.g.Hd = new E(V.ta, 58922.3125, 1359.4580078125);
    U.g.wc = new E(V.ta, 61281.76953125, 1703.5419921875);
    U.g.Id = new E(V.ta, 63985.3125, 1444.64599609375);
    U.g.Jd = new E(V.ta, 66429.9609375, 843.39599609375);
    U.g.Kd = new E(V.ta, 68273.3515625, 1168.3330078125);
    U.g.Ld = new E(V.ta, 70441.6875, 1887.14599609375);
    U.g.Md = new E(V.ta, 73328.8359375, 1179.68798828125);
    U.g.Nd = new E(V.ta, 75508.5234375, 806.35400390625);
    U.g.Od = new E(V.ta, 77314.875, 1202.39599609375);
    U.g.Pd = new E(V.ta, 79517.2734375, 1417.0419921875);
    U.g.Qd = new E(V.ta, 81934.3125, 924.7080078125);
    U.g.Rd = new E(V.ta, 83859.0234375, 2078.14599609375);
    U.g.Sd = new E(V.ta, 86937.1640625, 1376.64599609375);
    U.g.Td = new E(V.ta, 89313.8125, 1567.75);
    U.g.Ud = new E(V.ta, 91881.5625, 1770.47900390625);
    U.g.Vd = new E(V.ta, 94652.0390625, 1374.56201171875);
    U.g.Wd = new E(V.ta, 97026.6015625, 1714.39599609375);
    U.g.Xd = new E(V.ta, 99741, 784.14599609375);
    U.g.Yd = new E(V.ta, 101525.1484375, 1413.22900390625);
    U.g.Zd = new E(V.ta, 103938.375, 1180.5);
    U.g.$d = new E(V.ta, 106118.875, 1321.4580078125);
    U.g.fe = new E(V.Ma, 7120.8330078125, 511.97900390625);
    U.g.he = new E(V.ta, 108440.3359375, 2124.8330078125);
    U.g.le = new E(V.ta, 111565.1640625, 1556.0419921875);
    U.g.oe = new E(V.ta, 114121.2109375, 1514.8330078125);
    U.g.qe = new E(V.ta, 116636.0390625, 1268.5419921875);
    U.g.re = new E(V.ta, 118904.5859375, 1465.81201171875);
    U.g.te = new E(V.ta, 121370.3984375, 1265.375);
    U.g.ue = new E(V.ta, 123635.7734375, 1670.43798828125);
    U.g.we = new E(V.ta, 126306.2109375, 2097.7080078125);
    U.g.xe = new E(V.Ma, 8632.8115234375, 1500);
    U.g.xc = new E(V.Ma, 11132.8115234375, 13714.2919921875);
    U.g.Tb = new E(V.Ma, 25847.103515625, 25352.125);
    U.g.yc = new E(V.Ma, 52199.23046875, 8648.646484375);
    U.g.ye = new E(V.Ma, 61847.875, 3627.35400390625);
    U.g.ze = new E(V.Ma, 66475.2265625, 2E3);
    U.g.Ae = new E(V.Ma, 69475.2265625, 1500);
    U.g.Be = new E(V.Ma, 71975.2265625, 5595.8330078125);
    U.g.Cc = new E(V.Fb, 0, 5371.18701171875);
    U.g.Ce = new E(V.Fb, 6371.18701171875, 7266.375);
    U.g.De = new E(V.Fb, 14637.5615234375, 5507.60400390625);
    U.g.Ee = new E(V.Fb, 21145.16796875, 9849.9580078125);
    U.g.Dc = new E(V.Gb, 0, 6083.02099609375);
    U.g.Fe = new E(V.Gb, 7083.02099609375, 6773.27099609375);
    U.g.Ge = new E(V.Gb, 14856.2919921875, 6497.72900390625);
    U.g.He = new E(V.Gb, 22354.021484375, 9301.0634765625);
    U.g.Gc = new E(V.Ma, 78571.0625, 12800);
    U.g.Ie = new E(V.Ma, 92371.0625, 4400);
    Ka(U);
    var D = U;
    var xj = new Map([["ajolote", D.g.Yc], ["alacran", D.g.Zc], ["arana", D.g.$c], ["arbol", D.g.hd], ["arpa", D.g.jd], ["bandera", D.g.kd], ["bandolon", D.g.ld], ["barril", D.g.nd], ["bota", D.g.od], ["botella", D.g.qd], ["buscador", D.g.rd], ["calavera", D.g.sd], ["camaron", D.g.ud], ["campana", D.g.vd], ["cantarito", D.g.wd], ["catrin", D.g.xd], ["cazo", D.g.yd], ["chalupa", D.g.zd], ["concha", D.g.Ad], ["corazon", D.g.Bd], ["corona", D.g.Cd], ["cotorro", D.g.Dd], ["dama", D.g.Ed], ["elote", D.g.Fd], ["emoji", D.g.Gd], ["escalera", D.g.Hd], ["estrella",
        D.g.wc], ["gallo", D.g.Id], ["garza", D.g.Jd], ["gorro", D.g.Kd], ["guacamole", D.g.Ld], ["jaras", D.g.Md], ["luna", D.g.Nd], ["maceta", D.g.Od], ["mano", D.g.Pd], ["melon", D.g.Qd], ["mundo", D.g.Rd], ["musico", D.g.Sd], ["nopal", D.g.Td], ["pajaro", D.g.Ud], ["palma", D.g.Vd], ["paraguas", D.g.Wd], ["pera", D.g.Xd], ["pescado", D.g.Yd], ["pino", D.g.Zd], ["rana", D.g.$d], ["rosa", D.g.he], ["sandia", D.g.le], ["sirena", D.g.oe], ["sol", D.g.qe], ["tambor", D.g.re], ["venado", D.g.te], ["violoncello", D.g.ue], ["xoloitzcuintle", D.g.we]]);
    var yj = "bs cs hr lv lt sl vi pl ro hu".split(" ");
    var Aj = function (a) {
        L.call(this);
        this.i = new Ig(Ji);
        this.i.wa(!1);
        this.o = document.getElementById("hpcanvas");
        Eg(this.i, 0, 0);
        this.i.g(this);
        a && (Uf(this.i, 0), a = new uf, a.g(this), yf(a, Qg(this.i, 150)));
        this.H = 0;
        zj(this)
    };
    r(Aj, L);
    var zj = function (a) {
        a.i.Ba(-.1875 * a.o.width, -5 * a.o.height / 540);
        Hg(a.i, 120 * a.o.width / 960)
    };
    Aj.prototype.Aa = function (a) {
        this.H += a / 1500;
        M(this.i, 1 + .15 * Math.sin(this.H % 1 * Math.PI * 2));
        zj(this)
    };
    var W = function (a, b) {
        var c = Pi.va().rb(b), d = Pi.va().Bb(b);
        var e = c / d;
        c > d ? (a.style.height = Math.round(a.clientWidth / e) + "px", c = a.clientWidth / c) : (a.style.width = Math.round(a.clientHeight * e) + "px", c = a.clientHeight / d);
        a = a.style;
        d = Pi.va();
        c = void 0 === c ? 1 : c;
        d = hg(d, b);
        a.background = "url(" + d.mb + ") " + (-b[1] * c + "px " + -b[2] * c + "px/") + (d.Lb().width * c + "px " + (d.Lb().height * c + "px no-repeat"))
    }, X = function (a, b) {
        return a.querySelectorAll("." + b)[0]
    };
    var Bj = function (a, b) {
        L.call(this);
        var c = this, d = Mi(oj[0]);
        this.T = b;
        this.o = X(a, "ddlltr-V");
        this.o.style.height = "216px";
        this.o.style.width = Math.floor(216 * cg.va().rb(d) / cg.va().Bb(d)) + "px";
        this.o.style.background = dg(Ii);
        this.v = X(a, "ddlltr-cb");
        this.v.style.width = this.o.style.width;
        this.v.style.height = this.o.style.height;
        this.H = 0;
        this.U = 2E3;
        this.i = new P;
        ve && !we ? (this.i.Ba(0, 1.13), M(this.i, .8), this.i.setSize(1.5, .15)) : (this.i.setSize(2, .15), this.i.Ba(2.22, -1.1));
        this.i.Ra = function (e) {
            if (c.H) {
                var f = c.i.j();
                e.fillStyle = "rgb(247, 212, 135)";
                e.fillRect(-f.width / 2, 0, f.width, f.height);
                e.fillStyle = "rgb(173, 60, 39)";
                e.fillRect(f.width / 2, 0, -(c.H / c.U) * f.width, f.height)
            }
        };
        this.i.g(this)
    };
    r(Bj, L);
    var Cj = function (a) {
        a.o.style.background = dg(Ii);
        a.H = 0
    };
    Bj.prototype.Aa = function (a) {
        this.H = Math.max(this.H - a, 0)
    };
    var Dj = function (a, b, c) {
        a.U = c;
        a.H = c;
        var d = pj(b);
        a.v.style.background = dg(Mi(d));
        a.v.classList.add("ddlltr-db");
        setTimeout(function () {
            a.T && F(xj.get(d.displayName.split(" ")[1].toLowerCase()));
            a.v.classList.remove("ddlltr-db");
            a.o.style.background = dg(Mi(d))
        }, 600)
    };
    var Ej = ["Lose5", "Lose2", "Lose3", "Lose6", "Lose4"], Fj = function (a, b) {
        return Object.keys(a).map(function (c) {
            return {playerId: c, playerIndex: a[c], isMe: c == b, name: Ej[a[c]], winPattern: null, wb: null}
        }).sort(function (c, d) {
            return c.playerIndex - d.playerIndex
        })
    };
    var Gj = [[0, 20, 6125, 130.17999267578125, 130.11000061035156], [0, 20, 5505, 130.25999450683594, 134.39999389648438], [0, 20, 4852, 105.45999908447266, 109.7699966430664], [0, 20, 1369, 129.7899932861328, 117.86000061035156], [0, 20, 107, 121.9800033569336, 136.07000732421875]],
        Hj = [[0, 20, 6276, 130.17999267578125, 130.11000061035156], [0, 20, 5660, 130.25999450683594, 134.39999389648438], [0, 20, 4982, 105.45999908447266, 109.7699966430664], [0, 20, 1507, 129.7899932861328, 117.86000061035156], [0, 20, 264, 121.9800033569336, 136.07000732421875]],
        Ij = [[0, 20, 6578, 130.17999267578125, 130.11000061035156], [0, 20, 5970, 130.25999450683594, 134.39999389648438], [0, 20, 5242, 105.45999908447266, 109.7699966430664], [0, 20, 1783, 129.7899932861328, 117.86000061035156], [0, 20, 578, 121.9800033569336, 136.07000732421875]],
        Jj = [[0, 20, 6427, 130.1999969482422, 130.10000610351562], [0, 20, 5815, 130.3000030517578, 134.39999389648438], [0, 20, 5112, 105.5, 109.80000305175781], [0, 20, 1645, 129.8000030517578, 117.9000015258789], [0, 20, 421, 122, 136.10000610351562]],
        Kj = ["sun", "ddlltr-pb", "ddlltr-ob",
            "heart", "ddlltr-qb"];
    var Mj = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        N.call(this);
        var d = this;
        this.i = null;
        this.ya = b;
        this.ha = c;
        this.T = null;
        b = new Qf(-.5, -.5, .1);
        var e = new N;
        e.setSize(this.j());
        e.Ra = function (f) {
            f.fillStyle = "#fff";
            f.fillRect(-e.j().width / 2, -e.j().height / 2, e.j().width, e.j().height)
        };
        e.Ga = b;
        e.g(this);
        this.v = e;
        a = new Og(a);
        a.wa(!1);
        Eg(a, 0, 0);
        a.kb = "luminosity";
        a.$ = -1;
        a.g(this);
        this.W = a;
        a = new N;
        a.Ra = function (f) {
            var g = Math.round(d.j().width + 1), h = Math.round(d.j().height + 1);
            f.translate(-g / 2, -h / 2);
            for (var k = g / 4, m = h / 4, q = d.ya ?
                "#ffd37a" : "lightgrey", z = 0; 4 > z; z++) for (var C = 0; 4 > C; C++) f.fillStyle = Lj(d, z, C) || q, f.fillRect(C * k, z * m, k - 1, m - 1);
            d.ha && (f.globalCompositeOperation = "source-over", Of(f, g + 1, h + 1, Math.round(.1 * g)), f.lineWidth = Math.round(.1 * g), f.strokeStyle = "#222", f.stroke())
        };
        a.kb = "multiply";
        a.$ = -2;
        a.Ga = b;
        a.g(this);
        this.wa = a
    };
    r(Mj, N);
    Mj.prototype.setSize = function (a, b) {
        N.prototype.setSize.call(this, a, b);
        this.v.setSize(this.j().width, 1.1 * this.j().height);
        this.wa.setSize(this.j());
        Hg(this.W, .88 * this.j().width)
    };
    var Lj = function (a, b, c) {
        return a.T && a.T.find(function (d) {
            return d.row == 3 - b && d.col == c
        }) ? "#0070af" : a.i && 1 == a.i[3 - b][c].state ? "#ea3e22" : null
    };
    var Nj = function (a) {
        L.call(this);
        this.H = [];
        this.i = new Ng(X(a, "ddlltr-w"));
        this.i.g(this)
    };
    r(Nj, L);
    Nj.prototype.o = function (a) {
        for (var b = 0, c = 0; 5 > c; c++) {
            var d = c < a.length ? a[c] : {playerIndex: c, isMe: !1}, e = new Mj(Hj[d.playerIndex], c < a.length);
            e.setSize(45, 65);
            this.H[d.playerIndex] = e;
            d.isMe || (e.Ba(b % 2 ? 30 : -30, Math.floor(b / 2) ? 2 : -72), e.g(this.i.i.g), b++)
        }
    };
    var Oj = function (a, b) {
        Nj.call(this, a);
        this.v = b;
        M(this.i.i.g, .93)
    };
    r(Oj, Nj);
    Oj.prototype.o = function (a) {
        for (var b = 0, c = 0; 5 > c; c++) {
            var d = c < a.length ? a[c] : {playerId: "", playerIndex: c, isMe: !1},
                e = new Mj(Hj[d.playerIndex], c < a.length, d.isMe);
            this.H[d.playerIndex] = e;
            d.playerId == this.v.playerId ? (e.setSize(138, 200), M(e, 1.15), e.Ba(0, -65), e.T = this.v.winPattern, e.v.setSize(1.1 * e.j().width, 1.2 * e.j().height)) : (e.setSize(45, 65), M(e, 1.7), e.Ba(-135 + 90 * b, 123), e.v.setSize(1.3 * e.j().width, 1.2 * e.j().height), b++);
            d.wb && (e.i = d.wb);
            e.g(this.i.i.g)
        }
    };
    var Pj = {}, Qj = function () {
        throw Error("C");
    };
    Qj.prototype.Yb = null;
    Qj.prototype.toString = function () {
        return this.Mc
    };
    var Rj = function () {
        Qj.call(this)
    };
    Sa(Rj, Qj);
    Rj.prototype.Zb = Pj;
    Gc && Qc(8);
    var Sj = function (a) {
            if (null != a) switch (a.Yb) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        }, Y = function (a) {
            return null != a && a.Zb === Pj ? a : a instanceof Ob ? Tj(Pb(a).toString(), a.j()) : Tj(Uj(String(a)), Sj(a))
        }, Tj = function (a) {
            function b(c) {
                this.Mc = c
            }

            b.prototype = a.prototype;
            return function (c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Yb = d);
                return c
            }
        }(Rj), Z = function (a) {
            return null != a && a.Zb === Pj ? String(String(a.Mc).replace(Vj, "").replace(Wj, "&lt;")).replace(Xj, Yj) : Uj(a)
        }, Uj = function (a) {
            a = String(a);
            return a =
                Db(a, void 0)
        }, Zj = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        }, Yj = function (a) {
            return Zj[a]
        }, Xj = /[\x00\x22\x27\x3c\x3e]/g, Vj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Wj = /</g;
    var bk = function (a, b, c) {
        b = b(c || ak, void 0);
        if (Ma(b)) if (b instanceof Qj) {
            if (b.Zb !== Pj) throw Error("D");
            b = Qb(b.toString(), b.Yb || null)
        } else b = Rb("zSoyz"); else b = Rb(String(b));
        if (Tb()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Pb(b)
    }, ak = {};
    var ck = function () {
        return Tj('<a id="hplogodf"></a><div class="' + Z("ddlltr-k") + '"></div><div class="' + Z("sceneContainer") + '"></div>')
    }, dk = function (a) {
        var b = a.Le, c = a.Te;
        a = a.winCondition;
        return Tj('<div class="' + Z("ddlltr-Q") + '"><div class="' + Z("ddlltr-U") + '"><div class="' + Z("ddlltr-cb") + '"></div><div class="' + Z("ddlltr-V") + " " + Z("ddlltr-c") + '"></div></div><div class="' + Z("ddlltr-S") + " " + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-T") + '"></div><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-eb") +
            '"></div></div><div class="' + Z("ddlltr-Z") + " " + Z("ddlltr-W") + '"><div class="' + Z("ddlltr-X") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-p") + '">' + Y(b) + '</div></div><div class="' + Z("ddlltr-ab") + '"></div><div class="' + Z("ddlltr-Y") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-p") + '">' + Y(a) + '</div></div></div><div class="' + Z("ddlltr-bb") + " " + Z("ddlltr-W") + '"><div class="' + Z("ddlltr-X") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-p") + '">' + Y(c) + '</div></div><canvas width=156 height=215 class="' + Z("ddlltr-w") +
            '"></canvas></div><div class="' + Z("ddlltr-gb") + '"></div></div>')
    }, ek = function (a) {
        var b = a.Se;
        a = a.ok;
        return Tj('<div class="' + Z("ddlltr-o") + " " + Z("ddlltr-ac") + '"><div class="' + Z("ddlltr-m") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-n") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") + '">' + Y(b) + '</div></div></div><div class="' + Z("ddlltr-cc") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-p") + '"></div></div><div class="' + Z("ddlltr-bc") + " " + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-q") +
            '"></div><div class="' + Z("ddlltr-p") + '">' + Y(a) + "</div></div></div>")
    }, fk = function (a) {
        var b = a.title, c = a.Ne, d = a.back;
        a = a.mc;
        return Tj('<div class="' + Z("ddlltr-Rb") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-Sb") + '"></div></div><span>' + Y(d) + '</span></div><div class="' + Z("ddlltr-o") + " " + Z("ddlltr-Fb") + '"><div class="' + Z("ddlltr-m") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-n") + '"><div class="' + Z("ddlltr-p") + '">' + Y(b) + '</div><div class="' + Z("ddlltr-q") + '"></div></div></div><div class="' +
            Z("ddlltr-Mb") + '"><div class="' + Z("ddlltr-Nb") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-Ob") + " " + Z("ddlltr-p") + '"></div></div><div class="' + Z("ddlltr-s") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") + '">' + Y(a) + '</div></div></div><div class="' + Z("ddlltr-Tb") + '"><div class="' + Z("ddlltr-Ub") + " " + Z("ddlltr-Vb") + '"></div><div class="' + Z("ddlltr-Ub") + " " + Z("ddlltr-Wb") + '"></div><div class="' + Z("ddlltr-Ub") + " " + Z("ddlltr-Xb") + '"></div><div class="' +
            Z("ddlltr-Ub") + " " + Z("ddlltr-Yb") + '"></div><div class="' + Z("ddlltr-Ub") + " " + Z("ddlltr-Zb") + '"></div><div class="' + Z("ddlltr-Ib") + '"><div class="' + Z("players") + " " + Z("ddlltr-b") + '">1</div><div class="' + Z("ddlltr-Hb") + " " + Z("ddlltr-b") + '"><div class="' + Z("ddlltr-p") + '">' + Y(c) + '</div></div></div></div><div class="' + Z("ddlltr-Jb") + " " + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-Lb") + '"><div class="' + Z("ddlltr-p") + '"></div></div></div></div>')
    }, gk = function (a) {
        var b = a.title, c = a.Ue, d = a.Qe, e = a.Re;
        a = a.mc;
        return Tj('<div class="' +
            Z("ddlltr-u") + '"><canvas class="' + Z("ddlltr-B") + '"></canvas><canvas class="' + Z("ddlltr-C") + '"></canvas><div class="' + Z("ddlltr-o") + '"><div class="' + Z("ddlltr-v") + '"><div class="' + Z("ddlltr-m") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-n") + '"><div class="' + Z("ddlltr-p") + '">' + Y(b) + '</div><div class="' + Z("ddlltr-q") + '"></div></div></div><div class="' + Z("ddlltr-x") + '"><div class="' + Z("ddlltr-y") + '"><div class="' + Z("ddlltr-D") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' +
            Z("ddlltr-p") + '">' + Y(d) + '</div></div><div class="' + Z("ddlltr-E") + '"><div class="' + Z("ddlltr-O") + " " + Z("winnerIcon") + '"></div><div class="' + Z("ddlltr-N") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") + '">' + Y(e) + '</div></div><div class="' + Z("ddlltr-P") + " " + Z("winnerIcon") + '"></div></div><canvas width=400 height=360 class="' + Z("ddlltr-w") + '"></canvas><div class="' + Z("ddlltr-F") + " " + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-r") + '"><div class="' + Z("ddlltr-p") + '">' +
            Y(c) + '</div></div></div><div class="' + Z("ddlltr-M") + '"><div class="' + Z("ddlltr-G") + " " + Z("ddlltr-L") + '"></div><div class="' + Z("ddlltr-G") + " " + Z("shareLink") + '"></div><div class="' + Z("ddlltr-G") + " " + Z("ddlltr-K") + '"></div><div class="' + Z("ddlltr-G") + " " + Z("ddlltr-J") + '"></div><div class="' + Z("ddlltr-G") + " " + Z("ddlltr-I") + '"></div><div class="' + Z("ddlltr-G") + " " + Z("search") + '"></div></div><div class="' + Z("ddlltr-s") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") +
            '">' + Y(a) + "</div></div></div></div></div></div></div>")
    }, hk = function (a) {
        a = a.Xc;
        return Tj('<div class="' + Z("ddlltr-rb") + '"><div class="' + Z("gameContainer") + '"></div><div class="' + Z("ddlltr-sb") + '"><div class="' + Z("ddlltr-tb") + '"></div></div><div class="' + Z("ddlltr-zb") + '"><div class="' + Z("ddlltr-Cb") + " " + Z("ddlltr-c") + '"></div><div class="' + Z("ddlltr-Db") + " " + Z("ddlltr-f") + '">\u25b6\ufe0e</div></div><canvas class="' + Z("ddlltr-Eb") + '"></canvas><div class="' + Z("ddlltr-Bb") + " " + Z("ddlltr-f") + '">' + Y(a) +
            "</div></div>")
    }, ik = function (a) {
        var b = a.title;
        a = a.Je;
        return Tj('<div class="' + Z("ddlltr-hb") + '"></div><div class="' + Z("ddlltr-o") + " " + Z("ddlltr-ib") + '"><div class="' + Z("ddlltr-m") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-n") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") + '">' + Y(b) + '</div></div></div><div class="' + Z("ddlltr-kb") + '"></div><div class="' + Z("ddlltr-lb") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-p") + '">' + Y(a) + '</div></div><div class="' + Z("ddlltr-mb") + " " + Z("ddlltr-e") +
            '"><div class="' + Z("ddlltr-nb") + '"></div><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") + '">3</div></div></div>')
    }, jk = function (a) {
        var b = a.title, c = a.Ve;
        a = a.We;
        return Tj('<div class="' + Z("ddlltr-o") + " " + Z("ddlltr-oc") + '"><div class="' + Z("ddlltr-m") + " " + Z("ddlltr-c") + '"><div class="' + Z("ddlltr-n") + '"><div class="' + Z("ddlltr-q") + '"></div><div class="' + Z("ddlltr-p") + '">' + Y(b) + '</div></div></div><div class="' + Z("ddlltr-pc") + " " + Z("ddlltr-c") + " " + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-r") +
            '"><div class="' + Z("ddlltr-p") + '">' + Y(a) + '</div></div></div><div class="' + Z("ddlltr-Gb") + " " + Z("ddlltr-c") + " " + Z("ddlltr-f") + '"><div class="' + Z("ddlltr-r") + '"><div class="' + Z("ddlltr-p") + '">' + Y(c) + "</div></div></div></div>")
    };
    var lk = function (a) {
        L.call(this);
        this.vb = a.querySelectorAll(".ddlltr-p");
        kk(this);
        a = p(a.querySelectorAll(".ddlltr-r"));
        for (var b = a.next(); !b.done; b = a.next()) W(b.value, Si)
    };
    r(lk, L);
    var kk = function (a) {
        a = p(a.vb);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.parentElement.clientWidth, d = b.parentElement.clientHeight, e = 8;
            e = void 0 === e ? 10 : e;
            var f = 60;
            for (b.style.fontSize = f + "px"; (b.offsetWidth > c || b.offsetHeight > d) && f > e;) f--, b.style.fontSize = f + "px"
        }
    };
    lk.prototype.g = function (a) {
        L.prototype.g.call(this, a);
        a ? this.Oa() : this.Ga()
    };
    lk.prototype.Oa = function () {
    };
    lk.prototype.Ga = function () {
    };
    var mk = function (a, b) {
        b = void 0 === b ? $i : b;
        var c = X(a, "ddlltr-m");
        W(c, b);
        lk.call(this, a);
        this.wa = X(a, "ddlltr-o");
        this.title = X(c, "ddlltr-p")
    };
    r(mk, lk);
    mk.prototype.Oa = function () {
        this.wa.classList.add("ddlltr-l")
    };
    mk.prototype.Ga = function () {
        this.wa.classList.remove("ddlltr-l")
    };
    Ra("GAME_SIZE", 5);
    var nk = function () {
        return oi(R.va(), "share")
    };
    var ok = function (a, b) {
        var c = X(a, "search");
        W(c, cj);
        A(c, "click", function () {
            var f = google.doodle ? google.doodle.url : "";
            if (f) {
                var g;
                (g = (g = !te) || ye()) ? Vb(f) : (g = window.top.location, f = f instanceof Hb ? f : Kb(f), g.assign(Ib(f)))
            }
        });
        if (te && !xe) a.classList.add("ddlltr-H"), a = X(a, "ddlltr-L"), W(a, Zi), A(a, "click", function () {
            var f = Ke(), g = nk();
            Ne() || (Ph(9), f = ui(f), window.location = "http://www.google.com/doodles/_SHARE?description=" + encodeURIComponent(g) + "&url=" + encodeURIComponent(f))
        }); else {
            c = X(a, "shareLink");
            var d = X(a,
                "ddlltr-K"), e = X(a, "ddlltr-J");
            a = X(a, "ddlltr-I");
            W(c, Ti);
            A(c, "click", function () {
                wi(Le("copy_link"));
                b()
            });
            W(d, Ui);
            A(d, "click", function () {
                var f = Le("email_link"), g = nk();
                if (!Ne()) {
                    Ph(8);
                    var h = window.top.location, k = void 0;
                    k = void 0 === k ? Oe : k;
                    f = ui(f);
                    g = vi("mailto:", {subject: k, body: g + "\n" + f});
                    h.href = g
                }
            });
            W(e, Vi);
            A(e, "click", function () {
                var f = Le("facebook_link");
                Ne() || (f = ui(f), f = vi("https://www.facebook.com/dialog/share", {
                    app_id: "738026486351791",
                    href: f,
                    hashtag: "#GoogleDoodle"
                }), Vb(f), Ph(5))
            });
            W(a, dj);
            A(a, "click",
                function () {
                    var f = Le("twitter_link"), g = nk();
                    Ne() || (f = ui(f), f = "text=" + encodeURIComponent(g + "\n" + f), Vb("http://twitter.com/intent/tweet?" + f), Ph(6))
                })
        }
    };
    var pk = function () {
        N.call(this);
        var a = this;
        this.wa = new uf;
        this.wa.g(this);
        var b = document.getElementById("hpcanvas"), c = document.querySelector(".ddlltr-B");
        c.width = b.width;
        c.height = b.height;
        this.v = document.querySelector(".ddlltr-C");
        this.v.width = b.width;
        this.v.height = b.height;
        this.ya = new Ng(this.v);
        this.ya.g(this);
        b = new Ng(c);
        b.i.o = !1;
        b.g(this);
        this.T = 0;
        this.W = !1;
        this.ha = 0;
        this.i = null;
        c = new N;
        c.g(b.i.g);
        c.Ra = function (d) {
            a.W && (a.W = !1, d.setTransform(1, 0, 0, 1, 0, 0), d.drawImage(a.v, 0, 0, a.v.width, a.v.height))
        }
    };
    r(pk, N);
    pk.prototype.Aa = function (a) {
        this.T += a;
        75 < this.T && (this.W = !0, this.ha += this.T, this.T = 0);
        this.i && (this.i.card.Ba(this.i.card.Na().x + this.i.dx * a / 1E3, this.i.card.Na().y + this.i.dy * a / 1E3), this.i.card.$a = (180 * this.i.card.$a / Math.PI + (Math.abs(this.i.dx) + Math.abs(this.i.dy)) / 4 * this.i.Wc * a / 1E3) * Math.PI / 180, this.i.dx += 100 * this.i.Wc * a / 1E3, this.i.dy += Math.sin(Math.PI * this.ha / 1E3) + 100 * this.i.Xe * a / 1E3)
    };
    var qk = function (a) {
        a.ha = 0;
        var b = new Ig(Ni());
        b.wa(!1);
        Eg(b, 0, 0);
        var c = 800 + 300 * Math.random(), d = Math.random() * Math.PI * 2, e = c * Math.cos(d);
        c *= Math.sin(d);
        a.i = {card: b, dx: e, dy: c, Wc: 0 < e ? -1 : 1, Xe: 0 < c ? -1 : 1};
        e = -200 + 400 * Math.random();
        c = -200 + 400 * Math.random();
        Hg(b, 400);
        b.Ba(Wb(e - a.i.dx * (2 + Math.random()), -a.v.width / 2, a.v.width / 2), Wb(c - a.i.dy * (2 + Math.random()), -a.v.height / 2, a.v.height / 2));
        b.g(a.ya.i.g);
        xf(a.wa, 1E3 + 1E3 * Math.random(), function () {
            a.W = !0
        });
        xf(a.wa, 0, function () {
            b.S();
            qk(a)
        })
    };
    var rk = function (a, b, c) {
        var d = b.isMe, e = R.va();
        bk(a, gk, {
            title: S(e, d ? "WinHeader" : "LoseHeader"),
            Ue: S(e, "Replay"),
            Qe: S(e, d ? "Win1" : "Lose1"),
            Re: d ? "" : S(e, b.name),
            mc: S(e, "Link copy")
        });
        mk.call(this, a, d ? fj : aj);
        var f = this;
        this.i = X(a, "ddlltr-u");
        this.o = null;
        a = X(this.i, "ddlltr-E");
        if (d) this.o = new pk, this.o.g(this), this.i.classList.add("ddlltr-z"); else {
            this.i.classList.add("ddlltr-A");
            var g = Ij[b.playerIndex];
            [].concat(fa(a.querySelectorAll(".winnerIcon"))).map(function (h) {
                return W(h, g)
            })
        }
        this.v = new Oj(this.i, b);
        this.v.g(this);
        this.v.o(c);
        this.U = X(this.i, "ddlltr-F");
        this.H = X(this.i, "ddlltr-s");
        new ok(this.i, function () {
            f.H.classList.add("ddlltr-t");
            setTimeout(function () {
                f.H.classList.remove("ddlltr-t")
            }, 1600)
        })
    };
    r(rk, mk);
    rk.prototype.start = function () {
        var a = this;
        this.o && qk(this.o);
        var b, c = new Promise(function (d) {
            return b = d
        });
        c.then(function () {
            a.i.parentElement.removeChild(a.i)
        });
        ld(this.U, "mouseup", function () {
            b()
        });
        return c
    };
    var sk = function (a) {
        var b = R.va();
        bk(a, ek, {ok: S(b, "Ok"), Se: S(b, "oops")});
        mk.call(this, a);
        this.i = X(a, "ddlltr-ac");
        this.H = a.querySelectorAll(".ddlltr-cc .ddlltr-p")[0];
        this.o = X(a, "ddlltr-bc")
    };
    r(sk, mk);
    var tk = function (a, b) {
        var c;
        a.H.textContent = S(R.va(), b);
        b = new Promise(function (d) {
            return c = d
        });
        ld(a.o, "mouseup", function () {
            return c()
        });
        b.then(function () {
            a.i.parentElement.removeChild(a.i)
        });
        setTimeout(function () {
            return kk(a)
        }, 1);
        return b
    };
    var uk = function (a) {
        P.call(this);
        var b = this;
        this.ya = a;
        this.setSize(a.j());
        this.$ = -20;
        this.v = 0;
        this.T = -1;
        this.i = null;
        this.ha = 1;
        this.W = function () {
        };
        this.Ca = new Promise(function (c) {
            return b.W = c
        })
    };
    r(uk, P);
    uk.prototype.start = function (a) {
        this.i = a;
        this.ha = 1 / this.i.length
    };
    uk.prototype.Aa = function (a) {
        this.i && (this.v = Math.min(1.2, this.v + a / 2500), 1.2 <= this.v && this.W(), a = Math.floor(this.v / this.ha) % this.i.length, a > this.T && (nj(this.ya.i[this.i[a].row][this.i[a].col]), this.T = a))
    };
    uk.prototype.wait = function () {
        return this.Ca
    };
    var vk = {
        apiKey: "AIzaSyC0xQOvlcP3ZMpwzNaCa7QS0obZVJGvrG4",
        authDomain: "loteria-ddl-test.firebaseapp.com",
        projectId: "loteria-ddl-test",
        storageBucket: "loteria-ddl-test.appspot.com",
        messagingSenderId: "587597131536",
        appId: "1:587597131536:web:b680feebd0aab858153f95"
    }, wk = [{
        apiKey: "AIzaSyAVXWltpuvPwSD0PSsrWrr_yFq0NEdRt4U",
        authDomain: "loteria-ddl.firebaseapp.com",
        projectId: "loteria-ddl",
        storageBucket: "",
        messagingSenderId: "505233708097",
        appId: "1:505233708097:web:d610a27579358cb1"
    }, {
        apiKey: "AIzaSyBuRTxX7zyW_pCJUPMAQNMff9BL4BAfn34",
        authDomain: "loteria-ddl-bu1.firebaseapp.com",
        databaseURL: "https://loteria-ddl-bu1.firebaseio.com",
        projectId: "loteria-ddl-bu1",
        storageBucket: "loteria-ddl-bu1.appspot.com",
        messagingSenderId: "197351612465",
        appId: "1:197351612465:web:b4ce85c86fa479a3b63510"
    }, {
        apiKey: "AIzaSyDIsPDDmhSL1qJDmw9FeIyLFNhz8tnuTJc",
        authDomain: "loteria-ddl-bu2.firebaseapp.com",
        databaseURL: "https://loteria-ddl-bu2.firebaseio.com",
        projectId: "loteria-ddl-bu2",
        storageBucket: "loteria-ddl-bu2.appspot.com",
        messagingSenderId: "822846393947",
        appId: "1:822846393947:web:0971b75fce0e2c2ed0b97e"
    }, {
        apiKey: "AIzaSyC19mm-qMGT6h5OxO5FZYmsWpVRAfO-70I",
        authDomain: "loteria-ddl-bu3.firebaseapp.com",
        databaseURL: "https://loteria-ddl-bu3.firebaseio.com",
        projectId: "loteria-ddl-bu3",
        storageBucket: "loteria-ddl-bu3.appspot.com",
        messagingSenderId: "379954492523",
        appId: "1:379954492523:web:608c3edafd35ad45746d2e"
    }, {
        apiKey: "AIzaSyD3Cg30j31DHWGFlkDXSPDR6Y-dd5sUra4",
        authDomain: "loteria-ddl-bu4.firebaseapp.com",
        databaseURL: "https://loteria-ddl-bu4.firebaseio.com",
        projectId: "loteria-ddl-bu4",
        storageBucket: "loteria-ddl-bu4.appspot.com",
        messagingSenderId: "371897625479",
        appId: "1:371897625479:web:ccfbd1514b672f7318c122"
    }];
    Ra("getAppByName", function (a) {
        for (var b = p([vk].concat(fa(wk))), c = b.next(); !c.done; c = b.next()) if (c = c.value, c.projectId == a) return c;
        return vk
    });
    var xk = function (a, b) {
        a = -1 == a ? vk : wk[a];
        var c = a.projectId;
        a.databaseURL = "https://" + (void 0 === b ? c : c + "-" + b) + ".firebaseio.com";
        return a
    }, yk = function (a) {
        var b, c, d, e;
        return u(function (f) {
            if (1 == f.g) return b = xk(a), c = firebase.initializeApp(b, "default"), d = firebase.database(c), t(f, d.ref("shards").once("value"), 2);
            e = f.j.val() || 300;
            return f.return(Math.floor(Math.random() * e))
        })
    };
    var zk = function (a, b, c) {
        var d = {}, e = 0;
        d["games/" + a] = {
            host: c, players: b.reduce(function (f, g) {
                f[g] = e++;
                return f
            }, {}), winCondition: Math.floor(4 * Math.random()), deck: qj()
        };
        b = p(b);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, d["players/" + c + "/gameId"] = a, d["players/" + c + "/requestStart"] = a;
        return d
    };
    Ra("initGame", zk);
    var Ak = function (a, b) {
        b = void 0 === b ? 0 : b;
        var c = xk(b, a);
        this.j = firebase.initializeApp(c, "shard");
        this.Rb = a;
        this.s = b;
        this.g = firebase.database(this.j);
        this.i = (a = (new dc(location.href)).g.get("game_size", null)) ? parseInt(a, 10) : null
    }, Bk = function (a, b) {
        var c = a.g.ref(".info/connected");
        c.on("value", function (d) {
            d.val() || (c.off(), b())
        })
    }, Ck = function (a) {
        var b, c, d = new Promise(function (e, f) {
            b = e;
            c = f
        });
        a = firebase.auth(a.j);
        a.setPersistence(firebase.auth.Auth.Persistence.NONE);
        a.signInAnonymously().catch(function () {
            return c()
        });
        a.onAuthStateChanged(function (e) {
            e && b(e.uid)
        });
        return d
    }, Dk = function (a) {
        var b, c, d;
        return u(function (e) {
            switch (e.g) {
                case 1:
                    return t(e, Ck(a), 2);
                case 2:
                    b = e.j;
                    if (!b) return e.return(Promise.reject());
                    c = a.g.ref("players/" + b);
                    d = {playerId: b, playerIndex: -1, requestStart: !1};
                    return t(e, c.onDisconnect().remove(), 3);
                case 3:
                    return t(e, c.set(d), 4);
                case 4:
                    return e.return(b)
            }
        })
    }, Ek = function (a, b) {
        var c, d, e, f;
        return u(function (g) {
            if (1 == g.g) return c = a.g.ref("queue/"), d = {playerId: b}, a.i && (d.ef = a.i), e = c.push(d), e.onDisconnect().remove(),
                t(g, e, 2);
            f = g.j;
            return g.return(f)
        })
    };
    Ak.prototype.requestStart = function (a) {
        this.g.ref("players/" + a + "/requestStart").set(!0)
    };
    var Fk = function (a, b) {
        var c;
        return u(function (d) {
            if (1 == d.g) return t(d, a.g.ref("players/" + b).once("value"), 2);
            c = d.j;
            return d.return(c.val())
        })
    }, Gk = function (a, b) {
        var c = a.g.ref("games/" + b + "/deck");
        return new Promise(function (d) {
            c.on("value", function (e) {
                (e = e.val()) && e.length && (c.off(), d(e))
            })
        })
    }, Hk = function (a, b) {
        var c, d;
        return u(function (e) {
            c = a.g.ref("games/" + b);
            d = null;
            return e.return(Promise.race([new Promise(function (f) {
                c.on("value", function (g) {
                    g.exists() && f(g.val())
                })
            }), new Promise(function (f) {
                d = setTimeout(function () {
                        f(null)
                    },
                    1E4)
            })]).then(function (f) {
                clearTimeout(d);
                c.off();
                return f
            }))
        })
    }, Ik = function (a, b, c) {
        a = a.g.ref("games/" + b);
        a.on("value", function (d) {
            d = d.val();
            c(d)
        });
        return a
    }, Jk = function (a, b, c) {
        a = a.g.ref("games/" + b + "/deal");
        a.on("value", function (d) {
            d.exists() && c(d.val())
        });
        return a
    }, Kk = function (a, b, c, d) {
        var e, f;
        return u(function (g) {
            return 1 == g.g ? (e = a.g.ref("games/" + b + "/dealt").push().key, f = {}, f["games/" + b + "/deal"] = {
                card: c,
                time: d,
                countDown: null
            }, f["games/" + b + "/dealt/" + e] = c, t(g, a.g.ref().update(f), 2)) : g.return(g.j)
        })
    };
    Ak.prototype.countDown = function (a, b) {
        this.g.ref("games/" + a + "/deal").set({countDown: b})
    };
    var Lk = function (a, b) {
        var c = a.g.ref("winners/" + b), d;
        a = new Promise(function (e) {
            return d = e
        });
        c.on("value", function (e) {
            (e = e.val()) && e.playerId && (c.off(), d(e))
        });
        return a
    }, Mk = function (a, b, c) {
        a = a.g.ref("games/" + b + "/host");
        a.on("value", function (d) {
            (d = d.val()) && c(d)
        });
        return a
    }, Nk = function (a, b, c, d) {
        return new Promise(function (e, f) {
            a.g.ref("winners/" + c).transaction(function (g) {
                if (!g) return {playerId: b, winPattern: d}
            }, function (g, h) {
                g && f();
                h && a.g.ref("games/" + c).remove();
                e(h)
            })
        })
    }, Ok = function (a, b, c) {
        var d = a.g.ref("games/").push();
        b = zk(d.key, b, c);
        a.g.ref().update(b);
        return d
    }, Pk = function (a, b, c) {
        a = a.g.ref("players/" + b).child("board");
        a.on("value", function (d) {
            d.exists() && (d = d.val(), c(d))
        });
        return a
    }, Qk = function (a, b, c, d) {
        a.g.ref("games/" + b + "/host").transaction(function (e) {
            if (!e || e == d) return c
        }, function () {
        }, !1)
    }, Rk = function (a, b, c) {
        a.g.ref("players/" + b + "/state").set(c);
        "game_over" == c && a.g.ref("players/" + b + "/requestStart").set(!1)
    };
    var Sk = function (a, b, c) {
        this.g = b;
        this.o = a;
        this.j = null;
        this.S = c;
        this.s = 0;
        this.i = !1
    };
    Sk.prototype.start = function (a, b) {
        b = void 0 === b ? 1 : b;
        a ? Tk(this, 3) : Uk(this, b)
    };
    var Vk = function (a) {
        clearTimeout(a.j);
        a.j = null
    }, Uk = function (a, b) {
        Vk(a);
        a.j = setTimeout(function () {
            Wk(a)
        }, b)
    }, Tk = function (a, b) {
        a.o.countDown(a.S, b);
        var c = b - 1;
        0 > c ? Uk(a, 200) : setTimeout(function () {
            Tk(a, c)
        }, 1E3)
    }, Wk = function (a) {
        var b, c, d, e, f;
        u(function (g) {
            if (1 == g.g) {
                if (!a.g.length) return g.return();
                b = Math.max(3E3, Xk - 120 * a.s);
                c = Math.floor(Math.random() * a.g.length);
                d = a.g[c];
                a.g.splice(c, 1);
                e = Date.now();
                return t(g, Kk(a.o, a.S, d.id, b), 2)
            }
            if (a.i) return g.return();
            a.s++;
            f = Date.now() - e;
            Uk(a, b - f);
            g.g = 0
        })
    }, Yk = (new dc(location.href)).g.get("deal_time",
        0), Xk = parseInt(Yk, 10) || 4E3;
    var Zk = function (a, b, c) {
        this.g = null;
        this.i = a;
        this.s = b;
        this.o = c;
        this.j = null
    }, al = function (a) {
        clearTimeout(a.g);
        a.g = setTimeout(function () {
            a.j && $k && Qk(a.i, a.s, a.o, a.j)
        }, 6E3)
    }, $k = !vc((new dc(location.href)).g, "deal_time");
    var bl = function (a, b, c) {
        return a.reduce(function (d, e) {
            d && (e = b[e.row][e.col], d = 1 == e.state && -1 != c.indexOf(e.card));
            return d
        }, !0)
    }, cl = function (a, b, c) {
        if (0 == c) for (c = 0; c < a.length; c++) {
            var d = [{row: 0, col: c}, {row: 1, col: c}, {row: 2, col: c}, {row: 3, col: c}];
            if (bl(d, a, b)) return d
        } else if (1 == c) for (c = 0; c < a.length; c++) {
            if (d = [{row: c, col: 0}, {row: c, col: 1}, {row: c, col: 2}, {row: c, col: 3}], bl(d, a, b)) return d
        } else if (2 == c) for (c = p([0, 2]), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = p([0, 2]), f = e.next(); !f.done; f = e.next()) if (f =
                f.value, f = [{row: d, col: f}, {row: d + 1, col: f}, {row: d + 1, col: f + 1}, {
                row: d,
                col: f + 1
            }], bl(f, a, b)) return f
        } else if (3 == c) {
            c = [{row: 1, col: 1}, {row: 2, col: 1}, {row: 2, col: 2}, {row: 1, col: 2}];
            if (bl(c, a, b)) return c;
            c = [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 2, col: 3}, {
                row: 1,
                col: 3
            }, {row: 0, col: 3}, {row: 0, col: 2}, {row: 0, col: 1}, {row: 0, col: 0}, {row: 1, col: 0}, {
                row: 2,
                col: 0
            }];
            if (bl(c, a, b)) return c
        }
        return null
    };
    Ra("checkWinCondition", cl);
    var fl = function (a, b, c, d, e, f, g, h) {
        var k = this;
        this.g = a;
        Rk(this.g, g, "in_game");
        this.Ea = b;
        this.ka = !1;
        this.s = e;
        this.o = g;
        this.S = dl(d);
        this.W = f.winCondition;
        this.v = h;
        this.wa = this.v.find(function (m) {
            return m.isMe
        });
        this.j = c;
        this.i = null;
        this.j || (this.i = new Zk(this.g, this.s, this.o));
        this.T = null;
        this.V = d.slice();
        this.H = [];
        this.$ = [];
        this.U = function () {
        };
        this.ha = new Promise(function (m) {
            return k.U = m
        });
        this.g.g.ref("games/" + this.s + "/players/" + this.o).onDisconnect().remove();
        el(this)
    };
    fl.prototype.Rc = function (a) {
        var b = this, c = this.v.map(function (d) {
            return Pk(b.g, d.playerId, function (e) {
                d.wb = e;
                a(d.playerIndex, e)
            })
        });
        this.$ = [].concat(fa(this.$), fa(c))
    };
    var el = function (a) {
        var b = Mk(a.g, a.s, function (c) {
            if (!a.ka) {
                if (a.j || c != a.o) a.j && c != a.o && (d = a.j, d.i = !0, Vk(d), a.j = null); else {
                    for (var d = a.V.length - 1; 0 <= d; d--) -1 != a.H.indexOf(a.V[d].id) && a.V.splice(d, 1);
                    a.j = new Sk(a.g, a.V, a.s);
                    a.j.start(!1, 2E3);
                    a.i && (d = a.i, clearTimeout(d.g), d.g = null, a.i = null)
                }
                a.i && (d = a.i, al(d), d.j = c)
            }
        });
        a.$.push(b)
    };
    l = fl.prototype;
    l.Mb = function () {
        return this.W
    };
    l.start = function () {
        var a = this.S;
        this.g.g.ref("players/" + this.o + "/board").set(a);
        this.j && this.j.start(!0);
        gl(this)
    };
    l.Xb = function (a, b, c) {
        this.S[b][c].state = 1;
        a = this.S;
        this.g.g.ref("players/" + this.o + "/board").set(a)
    };
    l.Oc = function (a, b, c) {
        return this.lc(a) ? (this.Xb(a, b, c), !0) : !1
    };
    l.Jc = function () {
        return this.S
    };
    l.hb = function () {
        return this.v
    };
    l.Lc = function () {
        return this.wa
    };
    l.lc = function (a) {
        return this.T.card == a || -1 != this.H.indexOf(a)
    };
    l.Qc = function (a) {
        var b = this, c = Jk(this.g, this.s, function (d) {
            b.T = d;
            null != d.card && b.H.push(d.card);
            b.i && al(b.i);
            a(d)
        });
        this.$.push(c)
    };
    l.nc = function () {
        return this.ha
    };
    l.Pc = function () {
        var a = this, b, c;
        return u(function (d) {
            return 1 == d.g ? (b = cl(a.S, a.H, a.W)) ? t(d, Nk(a.g, a.o, a.s, b), 2) : d.return(null) : (c = d.j) ? d.return(b) : d.return(null)
        })
    };
    var gl = function (a) {
        var b;
        u(function (c) {
            if (1 == c.g) return t(c, Lk(a.g, a.s), 2);
            b = c.j;
            Rk(a.g, a.o, "game_over");
            a.ka = !0;
            if (a.i) {
                var d = a.i;
                clearTimeout(d.g);
                d.g = null;
                a.i = null
            }
            a.j && (d = a.j, d.i = !0, Vk(d), a.g.g.ref("games/" + a.s + "/host").remove());
            d = p(a.$);
            for (var e = d.next(); !e.done; e = d.next()) e.value.off();
            d = a.g;
            e = a.o;
            d.g.ref("games/" + a.s + "/players/" + e).remove();
            d.g.ref("players/" + e + "/board").remove();
            a.U(b);
            c.g = 0
        })
    }, dl = function (a) {
        a = a.slice(0);
        for (var b = [], c = 0; 4 > c; c++) {
            for (var d = [], e = 0; 4 > e; e++) {
                var f = Math.floor(Math.random() *
                    a.length), g = a[f];
                a.splice(f, 1);
                d[e] = {state: 0, card: g.id}
            }
            b.push(d)
        }
        return b
    }, hl = function (a, b, c, d) {
        var e, f, g, h;
        return u(function (k) {
            if (1 == k.g) return t(k, Hk(a, d), 2);
            if (3 != k.g) {
                e = k.j;
                if (!e) return k.return(null);
                f = Fj(e.players, c);
                g = null;
                return t(k, Gk(a, d), 3)
            }
            g = k.j;
            h = null;
            e.host == c && (h = new Sk(a, g, d));
            return k.return(new fl(a, b, h, g, d, e, c, f))
        })
    };
    fl.prototype.hc = function () {
        return this.Ea
    };
    fl.prototype.bc = function () {
        return this.s
    };
    var il = function (a) {
        this.Ha = a
    };
    il.prototype.$ = function () {
    };
    il.prototype.V = function () {
    };
    il.prototype.v = function () {
        return Promise.resolve()
    };
    var jl = function (a, b) {
        Bk(a.Ha, b)
    };
    var kl = function (a, b, c, d) {
        this.Ha = a;
        var e = this;
        this.i = d;
        this.S = c;
        this.g = b;
        this.H = null;
        this.W = new Promise(function (f) {
            e.g.child("shortLink").once("value").then(function (g) {
                g ? f(g.val()) : f(null)
            })
        });
        this.U = this.g.child("players/" + c);
        this.U.onDisconnect().remove();
        this.U.set(!0);
        this.j = null;
        this.s = [];
        this.ka = function () {
        };
        this.T = this.g.child("host");
        this.T.on("value", function (f) {
            f = f.val();
            !e.i && f && f == e.S && (e.i = !0, e.ka())
        });
        this.o = d ? 0 : null
    };
    r(kl, il);
    var ll = function (a, b) {
        a.ka = b
    };
    kl.prototype.isHost = function () {
        return this.i
    };
    kl.prototype.V = function (a) {
        var b = this, c = this.g.child("readyPlayers");
        c.on("value", function (d) {
            d = d.numChildren();
            0 != d && (null == b.o ? (b.o = d - 1, b.j && b.j.set({index: b.o})) : b.j && b.o >= d && b.j.set({index: b.o}), a(d, b.o))
        });
        this.s.push(c)
    };
    var ml = function (a) {
        var b, c, d;
        u(function (e) {
            if (1 == e.g) return a.i ? t(e, a.g.child("readyPlayers").once("value"), 2) : e.return();
            b = e.j;
            c = Object.entries(b.val()).sort(function (f, g) {
                return f[1] - g[1]
            }).map(function (f) {
                return f[0]
            });
            d = Ok(a.Ha, c, a.S);
            a.g.child("gameId").set(d.key);
            e.g = 0
        })
    }, nl = function (a) {
        return u(function (b) {
            return 1 == b.g ? a.i ? b.return(Promise.resolve(!1)) : t(b, a.g.child("gameId").once("value").then(function (c) {
                return c.exists()
            }), 2) : b.return(b.j)
        })
    }, rl = function (a) {
        var b, c, d;
        return u(function (e) {
            ol(a);
            c = new Promise(function (f) {
                return b = f
            });
            d = pl(a, function () {
                ql(a, d);
                b()
            });
            a.s.push(d);
            return e.return(c)
        })
    }, pl = function (a, b) {
        var c = a.g.child("gameId"), d = null;
        c.on("value", function (e) {
            ql(a, d);
            (e = e.val()) ? d = sl(a, e, function (f) {
                f || (ql(a, d), a.g.child("gameId").remove())
            }) : b()
        });
        return c
    }, sl = function (a, b, c) {
        b = Ik(a.Ha, b, function (d) {
            d && d.players ? c(Object.keys(d.players).length) : c(0)
        });
        a.s.push(b);
        return b
    }, ql = function (a, b) {
        b && (b.off(), $a(a.s, b))
    }, ol = function (a) {
        a.j || (Rk(a.Ha, a.S, "private_lobby"), a.j = a.g.child("readyPlayers/" +
            a.S), a.j.set({index: -1}), a.j.onDisconnect().remove())
    };
    kl.prototype.v = function () {
        var a = this, b, c, d;
        return u(function (e) {
            ol(a);
            c = new Promise(function (f) {
                return b = f
            });
            d = a.g.child("gameId");
            d.on("value", function (f) {
                var g, h;
                return u(function (k) {
                    if (1 == k.g) {
                        g = f.val();
                        if (!g) {
                            k.g = 0;
                            return
                        }
                        a.g.off();
                        ql(a, d);
                        return t(k, Fk(a.Ha, a.S), 3)
                    }
                    if (4 != k.g) return t(k, hl(a.Ha, "private", a.S, g), 4);
                    h = k.j;
                    if (!h) return b(null), k.return();
                    h.nc().then(function () {
                        a.j && a.j.remove();
                        a.j = null;
                        a.i && a.g.child("gameId").remove()
                    });
                    b(h);
                    k.g = 0
                })
            });
            a.s.push(d);
            return e.return(c)
        })
    };
    kl.prototype.$ = function () {
        for (var a = p(this.s), b = a.next(); !b.done; b = a.next()) b.value.off();
        this.g.off();
        this.U.remove();
        this.T.off();
        this.j && this.j.remove()
    };
    var tl = function (a) {
        var b = window.location.href;
        b = new dc(-1 != b.indexOf(".sandbox.google.com") ? b : "https://www.google.com/webhp");
        gc(b, "", void 0);
        b.s = "";
        var c = a.Ha.Rb;
        void 0 === c && (c = "default");
        var d = a.Ha.s;
        -1 == d && (d = "test");
        c = a.g.key + "|" + c + "|" + d;
        a = [];
        for (var e = d = 0; e < c.length; e++) {
            var f = c.charCodeAt(e);
            255 < f && (a[d++] = f & 255, f >>= 8);
            a[d++] = f
        }
        c = 3;
        void 0 === c && (c = 0);
        fi();
        c = bi[c];
        d = [];
        for (e = 0; e < a.length; e += 3) {
            var g = a[e], h = (f = e + 1 < a.length) ? a[e + 1] : 0, k = e + 2 < a.length, m = k ? a[e + 2] : 0,
                q = g >> 2;
            g = (g & 3) << 4 | h >> 4;
            h = (h & 15) <<
                2 | m >> 6;
            m &= 63;
            k || (m = 64, f || (h = 64));
            d.push(c[q], c[g], c[h] || "", c[m] || "")
        }
        b.g.set("doodle", "138397252_" + d.join(""));
        return b.toString()
    }, ul = function (a) {
        var b, c, d, e, f;
        return u(function (g) {
            if (1 == g.g) return a.H ? g.return(Promise.resolve(a.H)) : t(g, a.W, 2);
            if (3 != g.g) {
                if (b = g.j) return g.return(Promise.resolve(b));
                c = tl(a);
                if (!a.i) return g.return(Promise.resolve(c));
                e = new Promise(function (h) {
                    return d = h
                });
                Ai(c, function (h) {
                    h.startsWith("http") || (h = "https:" + h);
                    d(h)
                }, function () {
                    return d(c)
                });
                f = a;
                return t(g, e, 3)
            }
            f.H =
                g.j;
            return g.return(a.H)
        })
    }, vl = function () {
        var a = G.g.get("doodle", null);
        if (!a) return null;
        a = a.split("_");
        if (2 != a.length || !a[1]) return null;
        a = ei(a[1]).split("|");
        if (2 > a.length || !a[0] || !a[1]) return null;
        var b = a[2];
        b = "test" == b ? -1 : void 0 == b ? 0 : parseInt(b, 10);
        return {id: a[0], Vc: "default" == a[1] ? void 0 : parseInt(a[1], 10), Hc: b}
    };
    var wl = function (a, b, c) {
        this.Ha = a;
        this.Pb = c;
        Rk(a, this.Pb, "public_lobby");
        this.S = b;
        this.Uc = this.Ha.g.ref("players/" + c);
        this.j = null;
        this.qc = this.S.parent;
        this.g = null;
        this.i = this.ac = this.s = !1;
        this.nb = this.o = null
    };
    r(wl, il);
    wl.prototype.V = function (a) {
        var b = this;
        this.qc.on("value", function (c) {
            b.ac || b.i || (c = c.numChildren(), 0 != c && (5 == c && (b.i = !0, b.o = setTimeout(function () {
                return b.i = !1
            }, 3E3)), null == b.g ? b.g = c - 1 : b.g >= c && b.g--, a(c, b.g)))
        })
    };
    wl.prototype.v = function () {
        var a = this, b, c = new Promise(function (d) {
            return b = d
        });
        this.j = setTimeout(function () {
            a.s || a.Ha.requestStart(a.Pb)
        }, 15E3);
        this.nb = this.Uc.child("gameId");
        this.nb.on("value", function (d) {
            var e, f;
            return u(function (g) {
                if (1 == g.g) {
                    if (a.ac) return g.return();
                    e = d.val();
                    if (!e) {
                        g.g = 0;
                        return
                    }
                    a.nb.off();
                    a.nb = null;
                    var h = e;
                    Rk(a.Ha, a.Pb, "joining_game");
                    a.qc.off();
                    a.ac = !0;
                    xl(a);
                    a.Uc.child("gameId").remove();
                    h = hl(a.Ha, "public", a.Pb, h);
                    return t(g, h, 3)
                }
                f = g.j;
                b && b(f);
                g.g = 0
            })
        });
        c.then(function (d) {
            a.$();
            return d
        });
        return c
    };
    var xl = function (a) {
        a.s = !0;
        null != a.j && clearTimeout(a.j);
        a.j = null
    };
    wl.prototype.$ = function () {
        this.nb && this.nb.off();
        clearTimeout(this.o);
        this.S.remove();
        this.qc.off();
        xl(this)
    };
    var yl = function (a, b) {
        this.g = new Ak(a, void 0 === b ? 0 : b);
        this.Vc = a;
        this.playerId = Dk(this.g)
    }, zl = function (a) {
        var b, c;
        return u(function (d) {
            if (1 == d.g) return t(d, a.playerId, 2);
            if (3 != d.g) return b = d.j, t(d, Ek(a.g, b), 3);
            c = d.j;
            return d.return(new wl(a.g, c, b))
        })
    }, Al = function (a) {
        var b, c;
        return u(function (d) {
            if (1 == d.g) return t(d, a.playerId, 2);
            b = d.j;
            var e = a.g.g.ref("privateQueues/").push();
            e.set({host: b, readyPlayers: [], players: []});
            c = e;
            return d.return(new kl(a.g, c, b, !0))
        })
    }, Bl = function (a, b) {
        var c, d, e;
        return u(function (f) {
            if (1 ==
                f.g) return t(f, a.playerId, 2);
            if (3 != f.g) return c = f.j, d = a.g.g.ref("privateQueues/" + b), t(f, d.once("value"), 3);
            e = f.j;
            return e.exists() ? 5 <= e.child("players").numChildren() ? f.return(Promise.reject("full")) : f.return(new kl(a.g, d, c, !1)) : f.return(Promise.reject("not found"))
        })
    };
    var Dl = function () {
        L.call(this);
        var a = this;
        this.i = new uf;
        this.i.g(this);
        xf(this.i, 0, function () {
            return Cl(a)
        });
        M(this, .7)
    };
    r(Dl, L);
    var Cl = function (a) {
        for (var b = [ij, ej, Ri], c = Math.ceil(5 * Math.random()), d = 0; d < c; d++) {
            var e = new Og(b[Math.floor(3 * Math.random())]), f = new vg;
            Ag(f);
            Cg(f);
            Hg(e, .85);
            Eg(e, 0, 0);
            e.$ = -20;
            f.g(e);
            e.Ba(-10 + 20 * Math.random(), -13, 0);
            e.g(a)
        }
        setTimeout(function () {
            xf(a.i, 200 * Math.random(), function () {
                return Cl(a)
            })
        }, 0)
    };
    var El = function (a, b, c, d) {
        this.g = a;
        this.i = b;
        this.j = c;
        this.s = d
    }, Fl = function (a) {
        var b = a.j - a.g;
        a = a.s - a.i;
        return b * b + a * a
    };
    var Il = function (a, b, c) {
        L.call(this);
        var d = this;
        this.i = document.createElement("div");
        a.appendChild(this.i);
        var e = Gl([new Hl(new B(c.left, c.top), new B(c.left + c.width, c.top), new B(c.left, c.top + c.height)), new Hl(new B(c.left + c.width, c.top + c.height), new B(c.left + c.width, c.top), new B(c.left, c.top + c.height))]);
        "ddlltr-ec ddlltr-fc ddlltr-gc ddlltr-hc ddlltr-ic ddlltr-jc ddlltr-kc ddlltr-lc ddlltr-mc ddlltr-nc".split(" ").map(function (f) {
            var g = document.createElement("canvas");
            g.classList.add("ddlltr-dc");
            g.classList.add(f);
            g.width = b.width;
            g.height = b.height;
            d.i.appendChild(g);
            return g
        }).forEach(function (f, g) {
            var h = f.getContext("2d");
            h.beginPath();
            e.forEach(function (k, m) {
                (m - g) % 10 || (h.moveTo(k.g.x, k.g.y), h.lineTo(k.j.x, k.j.y), h.lineTo(k.i.x, k.i.y), h.lineTo(k.g.x, k.g.y))
            });
            h.clip();
            h.drawImage(b, c.left, c.top, c.width, c.height, c.left, c.top, c.width, c.height)
        })
    };
    r(Il, L);
    var Hl = function (a, b, c) {
        this.g = a;
        this.j = b;
        this.i = c;
        this.s = new El(a.x, a.y, b.x, b.y);
        this.o = new El(a.x, a.y, c.x, c.y);
        this.S = new El(b.x, b.y, c.x, c.y)
    }, Jl = function (a) {
        return [a.s, a.o, a.S].reduce(function (b, c) {
            return b && Math.sqrt(Fl(b)) > Math.sqrt(Fl(c)) ? b : c
        })
    };
    Hl.prototype.split = function () {
        var a = Jl(this);
        var b = a == this.s ? this.i : a == this.o ? this.j : this.g;
        var c = [.4, .5, .6][Math.floor(3 * Math.random())];
        c = new B(x(a.g, a.j, c), x(a.i, a.s, c));
        return [new Hl(b, c, new B(a.g, a.i)), new Hl(b, c, new B(a.j, a.s))]
    };
    var Gl = function (a, b) {
        b = void 0 === b ? 0 : b;
        return 7 == b ? a : [].concat(fa(Gl(a[0].split(), b + 1)), fa(Gl(a[1].split(), b + 1)))
    };
    var Ll = function (a, b) {
        L.call(this);
        W(X(a, "ddlltr-Z"), Xi);
        W(X(a, "ddlltr-ab"), Kl[b])
    };
    r(Ll, L);
    var Kl = [[0, 20, 7235, 42, 225], [0, 20, 8041, 206, 79], [0, 20, 6989, 155, 226], [0, 20, 7795, 155, 226]],
        Ml = ["Wincon2", "Wincon1", "Wincon3", "Wincon4"];
    var Nl = function (a, b, c, d) {
        var e = R.va();
        bk(a, ik, {title: S(e, "Win Condition"), Je: S(e, Ml[b])});
        e = X(a, "ddlltr-ib");
        W(e, Yi);
        mk.call(this, a);
        this.i = a;
        W(X(e, "ddlltr-kb"), Kl[b]);
        a = X(e, "ddlltr-nb");
        W(a, c);
        a.classList.add(d);
        this.o = X(X(e, "ddlltr-mb"), "ddlltr-p")
    };
    r(Nl, mk);
    Nl.prototype.S = function () {
        var a = this;
        mk.prototype.S.call(this);
        this.i.classList.add("ddlltr-jb");
        setTimeout(function () {
            return a.i.parentElement.removeChild(a.i)
        }, 1E3)
    };
    var Ol = function (a, b, c, d, e) {
        var f = R.va();
        bk(d, dk, {Le: S(f, "Win Condition"), Te: S(f, "Opponent"), winCondition: S(f, Ml[a.Mb()])});
        lk.call(this, d);
        this.Da = b;
        this.T = c;
        this.H = X(d, "ddlltr-Q");
        this.o = a;
        this.Ia = X(this.H, "ddlltr-S");
        b = X(this.Ia, "ddlltr-T");
        ve && !we ? b.innerText = "\u00a1LOTER\u00cdA!" : W(b, bj);
        this.i = new uj(this.o.Jc());
        ve && !we ? this.i.Ba(0, -.45) : this.i.Ba(-.33, 0);
        this.i.g(this);
        this.ya = new Bj(d, e);
        this.ya.g(this);
        this.Ca = !0;
        this.W = !1;
        this.La = new Nj(this.H);
        this.La.o(a.hb());
        this.La.g(this);
        W(X(this.H,
            "ddlltr-bb"), Xi);
        this.ka = new uf;
        this.ka.g(this);
        this.v = this.U = this.ha = this.kb = null;
        this.wa = new uk(this.i);
        this.Pa = !1;
        this.Ka = X(d, "ddlltr-eb");
        W(this.Ka, hj);
        (new Ll(this.H, this.o.Mb())).g(this)
    };
    r(Ol, lk);
    var Ql = function (a, b) {
        if (b.ya) return !1;
        var c = b.Pa;
        if (a.o.Oc(b.Eb.id, c.row, c.col)) {
            F(D.g.Ae);
            lj(b);
            b.ya = !0;
            c = a.i.v;
            c = a.U || c[Math.floor(Math.random() * c.length)];
            var d = Sf(c.s, Df(b.U()));
            Di(c, new K(d.x, d.y, 0));
            Pl(a, c, b);
            return !0
        }
        F(D.g.ze);
        mj(b);
        return !1
    };
    Ol.prototype.start = function (a) {
        var b = this;
        (void 0 === a || a) && Rl(this);
        this.o.start();
        this.o.Qc(function (e) {
            null != e.countDown && b.v ? (b.v.o.textContent = "" + e.countDown, 0 == e.countDown && (Sl(b), F(D.g.xc, 0, !0))) : (Sl(b), F(D.g.fe), Dj(b.ya, e.card, e.time))
        });
        this.o.Rc(function (e, f) {
            b.La.H[e].i = f
        });
        A(this.Ia, ["click", "touchend"], function () {
            return Tl(b)
        });
        a = {};
        for (var c = p(db(this.i.i)), d = c.next(); !d.done; a = {ab: a.ab}, d = c.next()) a.ab = d.value, Zg(this.Da, a.ab.Ia.i, function (e) {
            return function (f) {
                b.Ca && ("mouseup" == f ? (!Ql(b,
                    e.ab) && b.U && (f = b.U, Di(f, f.ka)), b.U = null) : "mouseover" == f ? (b.kb = e.ab, kj(e.ab)) : "mouseout" == f && (b.kb = null, lj(e.ab)))
            }
        }(a));
        a = p(this.i.v);
        for (c = a.next(); !c.done; c = a.next()) Ul(this, c.value)
    };
    var Wl = function (a) {
        var b, c, d, e;
        return u(function (f) {
            switch (f.g) {
                case 1:
                    if (-1 != window.location.href.indexOf("forcewin")) return t(f, T(2E3), 6);
                    if (-1 == window.location.href.indexOf("forcelose")) {
                        f.g = 3;
                        break
                    }
                    return t(f, T(2E3), 5);
                case 5:
                    return f.return({
                        playerId: "test",
                        name: "Lose2",
                        playerIndex: 0,
                        isMe: !1,
                        wb: rj(),
                        winPattern: [{row: 0, col: 0}]
                    });
                case 6:
                    return f.return({
                        playerId: a.o.hb().find(function (g) {
                            return g.isMe
                        }).playerId, name: "Lose2", playerIndex: 0, isMe: !0, wb: rj(), winPattern: null
                    });
                case 3:
                    return t(f, a.o.nc(),
                        7);
                case 7:
                    b = f.j;
                    a.Pa = !0;
                    fe(D.g.xc);
                    c = b.playerId;
                    Cj(a.ya);
                    d = a.o.hb().find(function (g) {
                        return g.playerId == c
                    });
                    d.winPattern = b.winPattern;
                    if (e = d && d.isMe) return F(D.g.Ie), t(f, a.wa.wait(), 9);
                    F(D.g.ye);
                    return t(f, Vl(a), 9);
                case 9:
                    return f.return(d)
            }
        })
    }, Tl = function (a) {
        var b;
        return u(function (c) {
            if (1 == c.g) {
                if (a.W) return c.return();
                a.W = !0;
                return t(c, a.o.Pc(), 2)
            }
            b = c.j;
            a.W = !1;
            b ? (a.wa.g(a.i), a.wa.start(b), (new Dl).g(a)) : a.Pa || Xl(a);
            c.g = 0
        })
    }, Vl = function (a) {
        var b;
        return u(function (c) {
            a.i.Xa = !1;
            b = new Il(a.H, document.getElementById("hpcanvas"),
                a.i.U());
            b.g(a);
            return t(c, T(1E3), 0)
        })
    }, Yl = function (a, b) {
        a.Da.V = b;
        b || (document.getElementById("hpcanvas").style.cursor = "unset");
        a.Ca = b
    }, Ul = function (a, b) {
        Zg(a.T, b.o.i, function (c, d, e) {
            if (a.Ca) {
                d = void 0 === d ? 0 : d;
                e = void 0 === e ? 0 : e;
                if (b.U) if ("mousedown" == c || "mousemove" == c) e = Sf(b.s, new B(d, e)), "mousedown" == c ? (b.ka = b.Na().g(), b.H = new B(e.x - b.Na().x, e.y - b.Na().y), c = b.o, c.o = b.T, c.Aa(0)) : "mousemove" == c && b.H && b.Ba(e.x - b.H.x, e.y - b.H.y); else if ("mouseup" == c || "mouseout" == c) b.H = null, c = b.o, c.o = b.i, c.Aa(0);
                b.H ? (ch(a.T,
                    b.o.i), a.ha = b) : a.ha == b && (a.U = b, a.ha = null)
            }
        });
        ch(a.T, b.o.i)
    }, Sl = function (a) {
        a.v && (Yl(a, !0), a.v.S(), a.v = null)
    }, Xl = function (a) {
        a.ka.i = [];
        Yl(a, !1);
        var b = document.getElementById("hpcanvas");
        a.Ka.classList.add("ddlltr-db");
        xf(a.ka, 200, function () {
            F(D.g.xe);
            b.classList.add("ddlltr-fb");
            for (var c = p(wj(a.i)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d.Na(), f = new K(-.25 + .5 * Math.random(), -.25 + .5 * Math.random(), 0);
                Di(d, new K(e.x + f.x, e.y + f.y, e.z + f.z))
            }
        });
        xf(a.ka, 800, function () {
            Yl(a, !0);
            b.classList.remove("ddlltr-fb");
            a.Ka.classList.remove("ddlltr-db")
        })
    }, Pl = function (a, b, c) {
        var d;
        u(function (e) {
            if (1 == e.g) return c.W = b, bh(a.T, b.o.i), t(e, vj(a.i, b), 2);
            d = e.j;
            Ul(a, d);
            e.g = 0
        })
    }, Rl = function (a) {
        var b = a.o.Lc().playerIndex;
        a.v = new Nl(a.H.querySelectorAll(".ddlltr-gb")[0], a.o.Mb(), Ij[b], Kj[b]);
        Yl(a, !1);
        a.v.g(a);
        F(D.g.Be)
    };
    Ol.prototype.Oa = function () {
        document.querySelectorAll(".ddlltr-k")[0].classList.remove("ddlltr-l");
        this.H.classList.add("ddlltr-R")
    };
    Ol.prototype.Ga = function () {
        document.querySelectorAll(".ddlltr-k")[0].classList.add("ddlltr-l");
        this.H.classList.remove("ddlltr-R");
        for (var a = p(db(this.i.i)), b = a.next(); !b.done; b = a.next()) bh(this.Da, b.value.Ia.i);
        a = p(this.i.v);
        for (b = a.next(); !b.done; b = a.next()) bh(this.T, b.value.o.i);
        this.H.parentElement.removeChild(this.H)
    };
    var Zl = 0, $l = function () {
        Qh(2);
        Zl = Date.now()
    };
    var am = function (a, b, c) {
        c = void 0 === c ? "Lobby Wait" : c;
        var d = R.va();
        bk(a, fk, {title: S(d, c), Ne: S(d, "Joined"), back: S(d, "Back"), mc: S(d, "Link copy")});
        mk.call(this, a);
        var e = this;
        this.v = b;
        this.W = X(a, "ddlltr-Fb");
        this.Ia = X(this.W, "players");
        W(X(a, "ddlltr-Sb"), Qi);
        b = X(a, "ddlltr-Rb");
        var f;
        this.ka = new Promise(function (g) {
            return f = g
        });
        this.ka.then(function () {
            return e.v.$()
        });
        this.ha = ld(b, "mouseup", function () {
            f()
        });
        this.T = a.querySelectorAll(".ddlltr-Ub");
        for (a = 0; a < this.T.length; a++) W(this.T[a], Hj[a]);
        this.Ca = !1;
        jl(this.v, function () {
            return f()
        })
    };
    r(am, mk);
    am.prototype.U = function () {
        var a = this;
        return u(function (b) {
            a.v.V(function (c, d) {
                return bm(a, c, d)
            });
            return b.return(a.v.v())
        })
    };
    am.prototype.S = function () {
        mk.prototype.S.call(this);
        this.ha && ud(this.ha);
        this.W.display = "none"
    };
    var bm = function (a, b, c) {
        a.Ca || (a.W.classList.add("ddlltr-Pb"), a.Ca = !0);
        for (var d = 0; d < a.T.length; d++) {
            var e = Hj[d];
            d == c ? e = Jj[d] : d < b && (e = Gj[d]);
            W(a.T[d], e)
        }
        a.Ia.innerText = "" + b
    };
    var dm = function (a, b) {
        am.call(this, a, b, b.i ? "Private Link Share" : "Lobby Wait");
        this.i = b;
        X(a, "ddlltr-Fb").classList.add("ddlltr-Gb");
        this.H = X(a, "ddlltr-Jb");
        this.H.style.display = "block";
        this.Ka = X(a, "ddlltr-Lb");
        this.La = X(this.H, "ddlltr-p");
        this.ya = X(a, "ddlltr-Mb");
        this.ya.style.display = "block";
        this.o = X(a, "ddlltr-Ob");
        this.Da = X(a, "ddlltr-s");
        cm(this)
    };
    r(dm, am);
    dm.prototype.U = function () {
        var a = this, b;
        return u(function (c) {
            switch (c.g) {
                case 1:
                    return ol(a.i), a.i.V(function (d, e) {
                        return bm(a, d, e)
                    }), t(c, nl(a.i), 2);
                case 2:
                    b = c.j;
                    if (!b) {
                        c.g = 3;
                        break
                    }
                    em(a, "GameinProgress");
                    return t(c, rl(a.i), 4);
                case 4:
                    em(a, "waiting");
                case 3:
                    return c.return(am.prototype.U.call(a))
            }
        })
    };
    var em = function (a, b) {
        a.La.innerText = S(R.va(), b);
        kk(a)
    }, cm = function (a) {
        fm(a);
        gm(a);
        ll(a.i, function () {
            a.H.classList.remove("ddlltr-Kb");
            gm(a)
        })
    }, gm = function (a) {
        u(function (b) {
            a.i.i ? (em(a, "Start"), W(a.Ka, Si), ld(a.H, "click", function () {
                ml(a.i)
            })) : (a.H.classList.add("ddlltr-Kb"), em(a, "waiting"));
            b.g = 0
        })
    }, fm = function (a) {
        var b, c;
        u(function (d) {
            if (1 == d.g) return a.o.readOnly = !0, a.o.textContent = tl(a.i), b = hm(), b.onclick = function () {
                wi(a.o.textContent, b).then(function () {
                    a.Da.classList.add("ddlltr-t");
                    setTimeout(function () {
                            a.Da.classList.remove("ddlltr-t")
                        },
                        2E3)
                })
            }, b.classList.add("ddlltr-Qb"), a.ya.appendChild(b), t(d, ul(a.i), 2);
            c = d.j;
            a.o.textContent = c;
            setTimeout(function () {
                kk(a);
                a.o.classList.add("ddlltr-Pb")
            }, 0);
            d.g = 0
        })
    }, hm = function () {
        var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.setAttribute("viewBox", "0 0 24 24");
        a.setAttribute("width", "24");
        a.setAttribute("height", "24");
        var b = document.createElementNS("http://www.w3.org/2000/svg", "path");
        b.setAttribute("transform", "translate(4, 4) scale(0.66)");
        b.setAttribute("d", "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z");
        a.appendChild(b);
        return a
    };
    var im = function (a) {
        var b = R.va();
        bk(a, jk, {title: S(b, "Match Header"), Ve: S(b, "Alt Private Match"), We: S(b, "Random Match")});
        mk.call(this, a);
        this.i = X(a, "ddlltr-Gb");
        this.o = X(a, "ddlltr-pc")
    };
    r(im, mk);
    var jm = function (a) {
        var b, c = new Promise(function (f) {
            return b = f
        }), d = A(a.i, "click", function () {
            b(!0)
        }), e = A(a.o, "click", function () {
            b(!1)
        });
        c.then(function (f) {
            ud(d);
            ud(e);
            return f
        });
        return c
    };
    var nm = function (a, b, c) {
        var d = document.createElement("div");
        c.appendChild(d);
        var e = R.va();
        bk(d, hk, {Xc: S(e, "Skip Instructions")});
        lk.call(this, d);
        this.Ka = a;
        this.Ca = b;
        this.H = new uf;
        this.H.g(this);
        this.ya = c;
        this.T = d;
        this.Da = X(this.T, "gameContainer");
        this.ka = new km;
        this.U = X(this.T, "ddlltr-rb");
        this.La = X(this.T, "ddlltr-Cb");
        this.W = X(this.T, "ddlltr-zb");
        this.i = this.ha = null;
        this.o = sj() ? lm : mm;
        this.v = null;
        a = X(this.T, "ddlltr-Eb");
        b = document.getElementById("hpcanvas");
        a.width = b.width;
        a.height = b.height;
        this.wa =
            new Ng(a);
        this.wa.g(this)
    };
    r(nm, lk);
    var om = function (a) {
            ld(a.T.querySelectorAll(".ddlltr-Bb")[0], ["click", "touchend"], function () {
                a.H.i = [];
                a.ha()
            });
            a.i = new Ol(a.ka, a.Ka, a.Ca, a.Da, !1);
            a.i.g(a)
        }, um = function (a) {
            var b = new Promise(function (c) {
                return a.ha = c
            });
            b.then(function () {
                a.v && fe(a.v);
                a.i.S();
                a.ya.removeChild(a.T)
            });
            om(a);
            a.i.start(!1);
            wf(a.H, function () {
                return pm(a)
            });
            wf(a.H, function () {
                return qm(a)
            });
            wf(a.H, function () {
                return rm(a)
            });
            wf(a.H, function () {
                return sm(a)
            });
            wf(a.H, function () {
                return tm(a)
            });
            xf(a.H, 0, function () {
                return a.ha()
            });
            return b
        },
        wm = function (a, b) {
            var c, d = new Promise(function (e) {
                return c = e
            });
            vm(a, b);
            d.then(function () {
                a.W.classList.remove("ddlltr-t")
            });
            ld(a.W, "mouseup", function () {
                c()
            });
            return d
        }, vm = function (a, b) {
            a.La.textContent = S(R.va(), b);
            a.W.classList.add("ddlltr-t")
        }, pm = function (a) {
            return u(function (b) {
                if (1 == b.g) return a.U.classList.add("ddlltr-ub"), Yl(a.i, !1), a.v = a.o[0], F(a.o[0]), t(b, wm(a, "Loteria Explanation"), 2);
                fe(a.o[0]);
                a.v = null;
                b.g = 0
            })
        }, qm = function (a) {
            var b, c, d, e, f, g;
            return u(function (h) {
                switch (h.g) {
                    case 1:
                        return a.ka.deal(6),
                            Yl(a.i, !0), a.U.classList.remove("ddlltr-ub"), a.U.classList.add("ddlltr-vb"), b = new Ig(Ki), Eg(b, .5, .5), b.wa(!1), Hg(b, 250), b.$ = -20, b.g(a.wa.i.g), Uf(b, 0), t(h, T(1), 2);
                    case 2:
                        return c = a.i.i.v[3], d = Sf(b, Df(c.i.U())), e = a.i.i.i[2][1], f = Sf(b, Df(e.U())), b.Ba(new K(d.x, -d.y, 0)), yf(a.H, Qg(b, 200)), g = function () {
                            var k;
                            return u(function (m) {
                                if (1 == m.g) return k = new ug(b, 1E3, new K(f.x, -f.y, 0), {
                                    Sa: function () {
                                        return g()
                                    }
                                }), t(m, T(500), 2);
                                if (3 != m.g) return b.Ba(d.x, -d.y), t(m, T(500), 3);
                                yf(a.H, k);
                                m.g = 0
                            })
                        }, g(), a.v = a.o[1], F(a.o[1]),
                            t(h, Promise.race([xm(a.ka), wm(a, "Tutorial 1")]), 3);
                    case 3:
                        return fe(a.o[1]), a.v = null, a.i.i.i[2][1].W || Ql(a.i, a.i.i.i[2][1]), b.S(), a.H.o = [], t(h, T(1E3), 4);
                    case 4:
                        return h.return(h.j)
                }
            })
        }, rm = function (a) {
            return u(function (b) {
                if (1 == b.g) return Yl(a.i, !1), a.U.classList.remove("ddlltr-vb"), a.U.classList.add("ddlltr-wb"), a.v = a.o[2], F(a.o[2]), t(b, wm(a, "Tutorial 2"), 2);
                fe(a.o[2]);
                a.v = null;
                b.g = 0
            })
        }, sm = function (a) {
            return u(function (b) {
                switch (b.g) {
                    case 1:
                        return a.W.classList.remove("ddlltr-t"), a.U.classList.remove("ddlltr-wb"),
                            a.U.classList.add("ddlltr-xb"), t(b, T(1E3), 2);
                    case 2:
                        return a.ka.deal(3), t(b, T(500), 3);
                    case 3:
                        return Ql(a.i, a.i.i.i[2][0]), t(b, T(1E3), 4);
                    case 4:
                        return a.ka.deal(11), t(b, T(500), 5);
                    case 5:
                        return Ql(a.i, a.i.i.i[2][2]), t(b, T(1E3), 6);
                    case 6:
                        return a.ka.deal(14), t(b, T(500), 7);
                    case 7:
                        return Ql(a.i, a.i.i.i[2][3]), t(b, T(1E3), 8);
                    case 8:
                        return b.return(b.j)
                }
            })
        }, tm = function (a) {
            return u(function (b) {
                if (1 == b.g) return Yl(a.i, !0), a.U.classList.remove("ddlltr-xb"), a.U.classList.add("ddlltr-yb"), a.v = a.o[3], F(a.o[3]),
                    vm(a, "Tutorial 3"), t(b, ym(a.ka), 2);
                fe(a.o[3]);
                a.v = null;
                b.g = 0
            })
        }, km = function () {
            this.o = null;
            this.i = !1;
            this.j = this.g = null;
            for (var a = [], b = p([[1, 8, 18, 16], [2, 17, 10, 15], [3, 6, 11, 14], [4, 5, 13, 12]]), c = b.next(); !c.done; c = b.next()) {
                var d = [];
                c = p(c.value);
                for (var e = c.next(); !e.done; e = c.next()) d.push({card: e.value, state: 0});
                a.push(d)
            }
            this.S = a;
            this.s = []
        };
    l = km.prototype;
    l.Mb = function () {
        return 1
    };
    l.Xb = function (a) {
        this.j && a == this.j && (this.g && this.g(), this.j = this.g = null)
    };
    l.Oc = function (a, b, c) {
        return this.lc(a) ? (this.Xb(a, b, c), !0) : !1
    };
    l.Jc = function () {
        return this.S
    };
    l.hb = function () {
        return [{playerIndex: 0, playerId: "tutorial", isMe: !0}]
    };
    l.lc = function (a) {
        return -1 != this.s.indexOf(a)
    };
    l.Qc = function (a) {
        this.o = a
    };
    l.Pc = function () {
        var a = this;
        return u(function (b) {
            a.i && a.g && (a.g(), a.g = null);
            return b.return(null)
        })
    };
    l.deal = function (a) {
        this.s.push(a);
        this.o({card: a, time: -1, countDown: null})
    };
    l.nc = function () {
        return new Promise(function () {
            return null
        })
    };
    var xm = function (a) {
        var b = new Promise(function (c) {
            return a.g = c
        });
        a.j = 6;
        return b
    }, ym = function (a) {
        var b = new Promise(function (c) {
            return a.g = c
        });
        a.i = !0;
        return b
    };
    l = km.prototype;
    l.Rc = function () {
    };
    l.start = function () {
    };
    l.bc = function () {
    };
    l.hc = function () {
    };
    l.Lc = function () {
    };
    var mm = [D.g.Cc, D.g.Ce, D.g.De, D.g.Ee], lm = [D.g.Dc, D.g.Fe, D.g.Ge, D.g.He];
    var Am = function (a) {
        zm();
        return ub(a)
    }, zm = Ja;
    var Bm = function (a) {
        var b;
        a.timeOfStartCall = (new Date).getTime();
        var c = v.document, d = a.nonce || Ga(v);
        d && !a.nonce && (a.nonce = d);
        if ("help" == a.flow) {
            var e = Ia("document.location.href", v);
            !a.helpCenterContext && e && (a.helpCenterContext = e.substring(0, 1200));
            e = !0;
            if (b && JSON && JSON.stringify) {
                var f = JSON.stringify(b);
                (e = 1200 >= f.length) && (a.psdJson = f)
            }
            e || (b = {invalidPsd: !0})
        }
        b = [a, b, void 0];
        v.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
        e = a.serverUri || "//www.google.com/tools/feedback";
        f = v.GOOGLE_FEEDBACK_START;
        if (a.forceNewHelpPanel) {
            var g =
                Hd((c ? new Id(9 == c.nodeType ? c : c.ownerDocument || c.document) : Va || (Va = new Id)).g);
            d && g.setAttribute("nonce", d);
            g.onload = function () {
                v.startHelpPanel({helpcenter: a.helpCenterPath.split("/")[1], apiKey: "testpage", locale: a.locale})
            };
            Ub(g, ub(mb()));
            c.body.appendChild(g)
        } else if (f) f.apply(v, b); else {
            b = e + "/load.js?";
            for (g in a) e = a[g], null == e || Ma(e) || (b += encodeURIComponent(g) + "=" + encodeURIComponent(e) + "&");
            g = Hd((c ? new Id(9 == c.nodeType ? c : c.ownerDocument || c.document) : Va || (Va = new Id)).g);
            d && g.setAttribute("nonce",
                d);
            Ub(g, Am(b));
            c.body.appendChild(g)
        }
    };
    var Dm = function (a, b, c) {
        L.call(this);
        bk(c, ck);
        this.T = a;
        this.U = b;
        this.Za = vl();
        this.H = null;
        this.Sc = Cm(this);
        this.Rb = 0;
        this.i = X(c, "sceneContainer");
        (a = c.querySelectorAll("#hplogodf")[0]) && Ne() ? a.onclick = function () {
            return Bm({
                productId: "5088196", locale: Pe, bucket: "loteria-dogfood", onLoadCallback: function () {
                    return Bh.va().close()
                }, productVersion: "dev2"
            })
        } : a && (a.style.display = "none");
        this.o = null;
        this.v = !1
    };
    r(Dm, L);
    Dm.prototype.start = function () {
        var a = this, b;
        return u(function (c) {
            return 1 == c.g ? (a.H = new yl(a.Rb, a.Sc), Qh(0), b = document.getElementById("hpcanvas"), b.classList.remove("ddlltr-g"), b.classList.add("ddlltr-i"), Em(a), t(c, Fm(a), 2)) : t(c, Gm(a), 0)
        })
    };
    var Gm = function (a) {
        var b, c;
        return u(function (d) {
            switch (d.g) {
                case 1:
                    return Em(a), t(d, Hm(a), 2);
                case 2:
                    return (b = d.j) ? t(d, Im(a, b), 3) : d.return(Gm(a));
                case 3:
                    return c = d.j, t(d, Jm(a, c, b.hb()), 4);
                case 4:
                    setTimeout(function () {
                        return Gm(a)
                    }, 1), d.g = 0
            }
        })
    }, Hm = function (a) {
        var b, c, d;
        return u(function (e) {
            switch (e.g) {
                case 1:
                    if (a.Za) return b = a.Za.id, a.Za = null, e.$ = 6, t(e, Km(a, b), 8);
                    if (!a.o) {
                        e.g = 3;
                        break
                    }
                    return t(e, Lm(a, a.o), 5);
                case 5:
                    return e.return(e.j);
                case 8:
                    return e.return(e.j);
                case 6:
                    e.$ = 0;
                    var f = e.s.Ic;
                    e.s = null;
                    c =
                        f;
                    return t(e, Mm(a, c), 3);
                case 3:
                    return t(e, Nm(a), 10);
                case 10:
                    return d = e.j, e.return(d ? Om(a) : Pm(a))
            }
        })
    };
    Dm.prototype.load = function () {
        var a = this;
        return Promise.all([new Promise(function (b) {
            var c;
            return u(function (d) {
                if (1 == d.g) {
                    c = a;
                    var e = G.g.get("shard", void 0);
                    e = void 0 != e ? "default" == e ? Promise.resolve(void 0) : Promise.resolve(parseInt(e, 10)) : a.Za ? Promise.resolve(a.Za.Vc) : -1 != window.location.href.indexOf(".sandbox") ? Promise.resolve(0) : yk(a.Sc);
                    return t(d, e, 2)
                }
                c.Rb = d.j;
                b();
                d.g = 0
            })
        }), new Promise(function (b) {
            return setTimeout(b, 3E3)
        }), Pi.va().preload(0), cg.va().preload(2), cg.va().preload(0)])
    };
    var Fm = function (a) {
        var b;
        return u(function (c) {
            if (1 == c.g) return b = new nm(a.T, a.U, a.i), b.g(a), t(c, um(b), 2);
            Qh(1);
            b.S();
            c.g = 0
        })
    }, Nm = function (a) {
        var b, c;
        return u(function (d) {
            if (1 == d.g) return b = new im(a.i), b.g(a), t(d, jm(b), 2);
            c = d.j;
            b.S();
            return d.return(c)
        })
    }, Pm = function (a) {
        var b, c, d;
        return u(function (e) {
            if (1 == e.g) return $l(), t(e, zl(a.H), 2);
            if (3 != e.g) return b = e.j, c = new am(a.i, b), c.g(a), t(e, Promise.race([c.ka, c.U()]), 3);
            d = e.j;
            c.S();
            return e.return(d)
        })
    }, Km = function (a, b) {
        var c, d;
        return u(function (e) {
            if (1 ==
                e.g) return $l(), Ph(104), t(e, Bl(a.H, b), 2);
            if (3 != e.g) return c = e.j, t(e, Lm(a, c), 3);
            d = e.j;
            return e.return(d)
        })
    }, Om = function (a) {
        var b, c;
        return u(function (d) {
            if (1 == d.g) return $l(), Ph(103), t(d, Al(a.H), 2);
            if (3 != d.g) return b = d.j, t(d, Lm(a, b), 3);
            c = d.j;
            return d.return(c)
        })
    }, Lm = function (a, b) {
        var c, d;
        return u(function (e) {
            if (1 == e.g) return a.o = b, c = new dm(a.i, b), c.g(a), t(e, Promise.race([c.ka, c.U()]), 2);
            d = e.j;
            d || (a.o = null);
            c.S();
            return e.return(d)
        })
    }, Im = function (a, b) {
        var c, d;
        return u(function (e) {
            if (1 == e.g) {
                fe(D.g.Tb);
                a.v = !1;
                var f = b.bc(), g = b.hc(), h = b.hb().length, k = a.o ? a.o.g.key : void 0;
                k = void 0 === k ? null : k;
                var m = Date.now();
                Qh(3);
                Q.d1 = f;
                Q.d2 = g;
                Q.d3 = h;
                "private" == g && k && (Q.d4 = k);
                Ph(101);
                f = m - Zl;
                h = new dc("https://doodle-mon.appspot.com");
                h.g.set("a", "l19");
                h.g.set("e", 101);
                h.g.set("gs", f);
                h.g.set("t", g);
                (new Image).src = h.toString();
                c = new Ol(b, a.T, a.U, a.i, !0);
                c.g(a);
                c.start();
                return t(e, Wl(c), 2)
            }
            d = e.j;
            c.S();
            g = b.bc();
            f = b.hc();
            h = b.hb().length;
            Qh(4);
            Q.d1 = g;
            Q.d2 = f;
            Q.d3 = h;
            Ph(102);
            return e.return(d)
        })
    }, Jm = function (a, b, c) {
        var d;
        return u(function (e) {
            if (1 == e.g) return b.isMe ? F(D.g.Gc, 0, !0) : F(D.g.yc, 0, !0), d = new rk(a.i, b, c), d.g(a), t(e, d.start(), 2);
            Qh(5);
            fe(D.g.Gc);
            fe(D.g.yc);
            d.S();
            e.g = 0
        })
    }, Mm = function (a, b) {
        var c;
        return u(function (d) {
            c = new sk(a.i);
            c.g(a);
            return t(d, tk(c, b), 0)
        })
    }, Em = function (a) {
        a.v || (F(D.g.Tb, 0, !0), a.v = !0)
    }, Cm = function (a) {
        var b = G.g.get("app_index", void 0);
        return void 0 != b ? "test" == b ? -1 : parseInt(b, 10) : (b = Me("number_of_apps", void 0)) ? Wb(Math.floor(Math.random() * parseInt(b, 10)), 0, wk.length) : a.Za && void 0 != a.Za.Hc ? a.Za.Hc :
            0
    };
    var Qm = function () {
        L.call(this);
        this.i = [];
        for (var a = this.e = 0; 20 > a; a++) {
            var b = 1 + 2 * Math.random(), c = {Ya: new Ig([Fi, Gi, Hi][Math.floor(3 * Math.random())])};
            Eg(c.Ya, 0, 0);
            var d = Math.random() * Math.PI * 2;
            c.dx = b * Math.cos(d);
            c.dy = b * Math.sin(d);
            c.e = 0;
            c.Ke = 1 - .3 * Math.random();
            c.Ya.Ba(-2 + 4 * Math.random() + 4 * -c.dx, -3.5 + 7 * Math.random() + 7 * -c.dy);
            this.i.push(c);
            c.Ya.g(this)
        }
    };
    r(Qm, L);
    Qm.prototype.Aa = function (a) {
        for (var b = p(this.i), c = b.next(); !c.done; c = b.next()) c = c.value, c.e += c.Ke * a, 4E3 < c.e && (c.e = 0, c.dx *= -1, c.dy *= -1), c.Ya.$a = (180 * c.Ya.$a / Math.PI + 100 * c.dx * a / 1E3) * Math.PI / 180, c.Ya.Ba(c.Ya.Na().x + 3 * c.dx * a / 1E3, c.Ya.Na().y + 3 * c.dy * a / 1E3)
    };
    var Rm = kf.va(), Sm = function () {
    };
    r(Sm, jg);
    Sm.prototype.g = function () {
        return Pi.va()
    };
    Sm.prototype.j = function () {
        return cg.va()
    };
    var Um = function (a, b) {
        y.call(this);
        var c = this;
        this.T = a;
        this.Ea = b;
        this.Ea.classList.add("showPlayButton");
        -1 != yj.indexOf(R.va().g || "") && this.T.classList.add("ddlltr-d");
        this.Ga = !1;
        this.g = b.getContext("2d");
        this.wa = new Vh(6E4, function () {
            var f = c.o;
            f.g && (f.g = !1, f.i = !0);
            f = D.va();
            f.i && f.i.gain.setValueAtTime(0, f.g.currentTime);
            f.S = !0
        }, function () {
            Tm(c)
        });
        Xc(this, Qa(Yc, this.wa));
        this.o = new pi(function (f) {
            c.Da();
            Bf.width = c.g.canvas.width;
            Bf.height = c.g.canvas.height;
            var g = c.V;
            if (g.S || g.o || g.H) {
                var h = !!document[Ch],
                    k = window.innerWidth, m = window.innerHeight;
                0 == window.scrollX && 0 == window.scrollY || window.scrollTo(0, 0);
                if (k != g.ka || m != g.T || h != g.ha || g.g) {
                    g.U = k < m;
                    for (var q = !1, z = 0; z < g.j.length; ++z) {
                        var C = g.j[z], H = C.width || parseInt(C.dataset.width, 10),
                            J = C.height || parseInt(C.dataset.height, 10);
                        if (g.o) {
                            if (Be()) throw"";
                            Tg() && ve && !we && !te && 0 == z && (q = H < J != g.U);
                            var O = q ? Math.min(k / J, m / H) : Math.min(k / H, m / J), la = O * H, ha = O * J,
                                ri = g.$ ? "scale(" + O + ") " : "";
                            if (q) {
                                O = (k - ha) / 2 + ha;
                                var si = (m - la) / 2;
                                ri += "rotate(90deg)"
                            } else O = (k - la) / 2, si = (m - ha) /
                                2;
                            H = g.$ ? H : la;
                            J = g.$ ? J : ha;
                            Fe(C, "TransformOrigin", "0 0");
                            Fe(C, "Transform", ri);
                            I(C, "position", "absolute", "width", H + "px", "height", J + "px", "left", O + "px", "top", si + "px")
                        } else re && I(C, "height", m + "px")
                    }
                    Ah && (z = document.documentElement, C = z.getBoundingClientRect(), C.width == k && C.height == m || I(z, "width", k + "px", "height", m + "px"));
                    !g.H && !pe.includes("CriOS") && 0 < k && document.body.clientWidth !== k && (document.body.clientWidth < document.body.scrollWidth && I(document.body, "width", Math.min(document.body.scrollWidth, k) + "px"), document.body.clientWidth >
                    k && I(document.body, "width", k + "px"));
                    I(g.s, "height", "100%", "width", "100%");
                    g.W(q);
                    g.ka = k;
                    g.T = m;
                    g.ha = h;
                    g.g = !1
                }
            }
            c.ha.o(void 0);
            c.g.save();
            c.g.setTransform(1, 0, 0, 1, 0, 0);
            c.g.clearRect(0, 0, c.g.canvas.width, c.g.canvas.height);
            g = c.g;
            h = c.v;
            Kg(Rm, f);
            Lg(Rm, h);
            Mg(Rm, g);
            c.g.restore();
            f = c.Xa;
            Bh.va();
            f.g.style.display = document[Ch] ? "block" : "none"
        });
        Xc(this, Qa(Yc, this.o));
        this.ya = function () {
            Wh(c.wa)
        };
        window.addEventListener("orientationchange", this.ya, !1);
        this.s = new Xg(b);
        this.H = new Xg(b);
        this.Ja = new wh(this);
        yh(this.Ja,
            this.Ea, ["mousedown", "mouseout", "touchstart"], function (f) {
                c.H.handleEvent(f);
                c.s.handleEvent(f)
            }, !0);
        yh(this.Ja, document, ["mouseup", "mousemove", "touchend", "touchmove", "contextmenu"], function (f) {
            c.H.handleEvent(f);
            c.s.handleEvent(f)
        }, !0);
        this.V = Bh.va();
        Hh(this.V, a, [b], this.Ja, function (f) {
            Wg(c.H, f);
            Wg(c.s, f)
        });
        Eh(this.V);
        this.U = Jh(b.width, b.height);
        a.appendChild(this.U);
        Ih(this.V, this.U);
        var d = ve && !we ? 960 : 540, e = ve && !we ? 540 : 960;
        this.i = document.createElement("div");
        this.i.className = "ddlltr-a";
        this.i.style.width =
            e + "px";
        this.i.style.height = d + "px";
        this.U.appendChild(this.i);
        this.Da = function () {
            var f = c.U.offsetHeight / d;
            c.i.style.transform = "scale(" + f + "," + f + ") translate3d(-50%,-50%,0)";
            Wg(c.H, !1);
            Wg(c.s, !1)
        };
        this.Da();
        this.ha = new qh(a);
        a.title = "";
        this.v = new Jf;
        Lf(this.v, b);
        this.v.Ba(new K(0, 0, -5));
        Kf(this.v, function (f) {
            return 0 >= f.z
        });
        this.v.g(Rm.g);
        b = document.createElement("style");
        b.innerText = ".ddlltr-a{left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0}.ddlltr-b{font-family:Josefin Sans,Helvetica,Arial,sans-serif}.ddlltr-c{font-family:Lilita One,Helvetica,Arial,sans-serif}.ddlltr-d .ddlltr-c{font-family:Noto Sans,Helvetica,Arial,sans-serif}.ddlltr-e{font-family:Lilita One,Helvetica,Arial,sans-serif}.ddlltr-f{padding:0 10px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-family:Lilita One,Helvetica,Arial,sans-serif;font-size:16pt;cursor:pointer;pointer-events:all;color:#f8f13f;background:#0070af;-webkit-box-shadow:0 6px 0px 0px #fdd482;-moz-box-shadow:0 6px 0px 0px #fdd482;box-shadow:0 6px 0px 0px #fdd482;-webkit-transition:background 100ms,color 100ms;-o-transition:background 100ms,color 100ms;-moz-transition:background 100ms,color 100ms;transition:background 100ms,color 100ms}.ddlltr-d .ddlltr-f{font-family:Noto Sans,Helvetica,Arial,sans-serif}.ddlltr-f:hover{color:#f5e882;background:#4a61a3;-webkit-transform:translate(0,1px);-moz-transform:translate(0,1px);-ms-transform:translate(0,1px);-o-transform:translate(0,1px);transform:translate(0,1px);-webkit-box-shadow:0px 5px 0px 0px #f5e882;-moz-box-shadow:0px 5px 0px 0px #f5e882;box-shadow:0px 5px 0px 0px #f5e882}#hpcanvas.ddlltr-g.ddlltr-h{-webkit-transition:background 500ms,opacity 500ms;-o-transition:background 500ms,opacity 500ms;-moz-transition:background 500ms,opacity 500ms;transition:background 500ms,opacity 500ms;background:none}#hpcanvas.ddlltr-i{background:url(img/loteria-2019/HorizontalBG.svg) center/contain no-repeat}.ddlltr-j #hpcanvas.ddlltr-i{background:url(img/loteria-2019/VerticalBG.svg) center/cover no-repeat}.ddlltr-k{overflow:hidden;position:absolute;width:100%;height:100%;top:0;left:0;background:#3a2d2b;opacity:0;-webkit-transition:opacity 200ms;-o-transition:opacity 200ms;-moz-transition:opacity 200ms;transition:opacity 200ms}.ddlltr-k.ddlltr-l{position:absolute;width:100%;height:100%;top:0;left:0;background:#3a2d2b;opacity:0.78}.ddlltr-m{position:relative;z-index:1;color:#fff;width:124%;font-size:22pt;margin-left:-12%;margin-top:-22px;text-align:center;height:126px}.ddlltr-n{width:80%;height:50%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ddlltr-o{position:absolute;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fff;width:297px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) scale(0.8);-moz-transform:translate(-50%,-50%) scale(0.8);-ms-transform:translate(-50%,-50%) scale(0.8);-o-transform:translate(-50%,-50%) scale(0.8);transform:translate(-50%,-50%) scale(0.8);opacity:0;-webkit-transition:opacity 200ms,-webkit-transform 200ms;transition:opacity 200ms,-webkit-transform 200ms;-o-transition:opacity 200ms,-o-transform 200ms;-moz-transition:transform 200ms,opacity 200ms,-moz-transform 200ms;transition:transform 200ms,opacity 200ms;transition:transform 200ms,opacity 200ms,-webkit-transform 200ms,-moz-transform 200ms,-o-transform 200ms}.ddlltr-o.ddlltr-l{-webkit-transform:translate(-50%,-50%) scale(1);-moz-transform:translate(-50%,-50%) scale(1);-ms-transform:translate(-50%,-50%) scale(1);-o-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}.ddlltr-j .ddlltr-o.ddlltr-l{-webkit-transform:translate(-50%,-50%) scale(1.2);-moz-transform:translate(-50%,-50%) scale(1.2);-ms-transform:translate(-50%,-50%) scale(1.2);-o-transform:translate(-50%,-50%) scale(1.2);transform:translate(-50%,-50%) scale(1.2)}.ddlltr-p{display:inline-block;vertical-align:middle}.ddlltr-q{display:inline-block;height:100%;width:0;vertical-align:middle}#hplogodf{background:url(https://www.google.com/logos/doodles/paw.png) top left/contain no-repeat;cursor:pointer;display:block;width:100px;height:100px;bottom:10px;left:10px;pointer-events:all;position:absolute;-webkit-transition:-webkit-transform 100ms;transition:-webkit-transform 100ms;-o-transition:-o-transform 100ms;-moz-transition:transform 100ms, -moz-transform 100ms;transition:transform 100ms;transition:transform 100ms, -webkit-transform 100ms, -moz-transform 100ms, -o-transform 100ms;z-index:10}#hplogodf:hover{-webkit-transform:scale(1.1,1.1);-moz-transform:scale(1.1,1.1);-ms-transform:scale(1.1,1.1);-o-transform:scale(1.1,1.1);transform:scale(1.1,1.1)}#hplogodf:active{-webkit-transform:scale(.9,.9);-moz-transform:scale(.9,.9);-ms-transform:scale(.9,.9);-o-transform:scale(.9,.9);transform:scale(.9,.9)}.ddlltr-j #hplogodf{width:60px;height:60px}.ddlltr-r{width:100%;height:100%}.ddlltr-s{opacity:0;pointer-events:none;position:absolute;left:50%;bottom:-6px;-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);-o-transform:translate(-50%,0);transform:translate(-50%,0);background:#fff;padding:5px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;width:80%;height:35px;-webkit-transition:opacity 200ms;-o-transition:opacity 200ms;-moz-transition:opacity 200ms;transition:opacity 200ms;vertical-align:middle;text-align:center}.ddlltr-s.ddlltr-t{opacity:1}.ddlltr-u .ddlltr-o{z-index:1;margin:0 auto;padding:10px;height:470px}.ddlltr-u .ddlltr-m{top:-10px}.ddlltr-v{position:relative;height:100%;margin-top:-1px;padding-top:1px;text-align:center}.ddlltr-u .ddlltr-w{width:200px;height:180px;margin:0 auto}.ddlltr-x{position:absolute;left:0;top:0;width:100%;height:100%}.ddlltr-y{position:absolute;left:0;top:0;width:100%;height:100%}.ddlltr-z .ddlltr-x{background:#f9f000}.ddlltr-A .ddlltr-x{background:#ea3e22}.ddlltr-z .ddlltr-y{background:url(img/loteria-2019/WinPattern.svg) center/cover no-repeat;color:#ea3e22}.ddlltr-A .ddlltr-y{background:url(img/loteria-2019/LosePattern.svg) center/cover no-repeat;color:#fff}.ddlltr-A .ddlltr-m{color:#ea3e22}.ddlltr-B,.ddlltr-C{position:absolute;left:0;top:0;width:100%;height:100%}.ddlltr-D{text-align:center;height:33px;width:95%;margin:70px auto 0 auto;font-size:22pt}.ddlltr-E{text-align:center;height:44px;width:95%;margin:5px auto 6px auto;font-size:14pt}.ddlltr-F{margin:6px auto;width:220px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:58px;line-height:58px;text-align:center;font-size:22pt}.ddlltr-G{width:40px;height:40px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;pointer-events:all;margin:0 7px}.ddlltr-G:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.ddlltr-H .ddlltr-I,.ddlltr-H .ddlltr-J,.ddlltr-H .ddlltr-K{display:none}.ddlltr-L{display:none}.ddlltr-H .ddlltr-L{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ddlltr-M{margin-top:13px}.ddlltr-N{display:inline-block;text-align:center;vertical-align:middle;width:190px;height:100%;padding:0 5px}.ddlltr-O,.ddlltr-P{display:inline-block;vertical-align:middle;width:40px;height:40px}.ddlltr-Q{opacity:0;-webkit-transition:opacity 200ms;-o-transition:opacity 200ms;-moz-transition:opacity 200ms;transition:opacity 200ms}.ddlltr-Q.ddlltr-R{opacity:1}.ddlltr-S{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:56px;height:400px;position:absolute;right:50px;text-align:center;top:60px;padding:15px 10px;color:#f9f000;background:#2f3d67;-webkit-box-shadow:6px 6px 0px 0px #f5e882;-moz-box-shadow:6px 6px 0px 0px #f5e882;box-shadow:6px 6px 0px 0px #f5e882}.ddlltr-j .ddlltr-S{width:90%;height:65px;top:unset;left:unset;right:unset;bottom:5px;margin:5%;font-size:30pt;padding:5px 10px;vertical-align:middle}.ddlltr-T{width:100%;height:100%}.ddlltr-j .ddlltr-T{letter-spacing:0.3em;display:inline-block;height:unset}.ddlltr-S:hover{color:#f5e882;background:#4a61a3;-webkit-transform:translate(1px,1px);-moz-transform:translate(1px,1px);-ms-transform:translate(1px,1px);-o-transform:translate(1px,1px);transform:translate(1px,1px);-webkit-box-shadow:5px 5px 0px 0px #f5e882;-moz-box-shadow:5px 5px 0px 0px #f5e882;box-shadow:5px 5px 0px 0px #f5e882}.ddlltr-U{pointer-events:all;width:151px;height:216px;right:152px;top:50%;position:absolute;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-ms-transform:translate(0,-50%);-o-transform:translate(0,-50%);transform:translate(0,-50%);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#0470af;-webkit-box-shadow:0 7px 0 0 #1a4d6c,0 14px 0 0 #01253b;-moz-box-shadow:0 7px 0 0 #1a4d6c,0 14px 0 0 #01253b;box-shadow:0 7px 0 0 #1a4d6c,0 14px 0 0 #01253b;border-radius:10px}.ddlltr-j .ddlltr-U{-webkit-transform:translateX(-50%) scale(1.05);-moz-transform:translateX(-50%) scale(1.05);-ms-transform:translateX(-50%) scale(1.05);-o-transform:translateX(-50%) scale(1.05);transform:translateX(-50%) scale(1.05);left:50%;top:15px}.ddlltr-V{line-height:216px;font-size:80pt;color:#fff;left:50%;top:50%;position:absolute;-webkit-transform:translate(-50%,-50%) scale(0.95);-moz-transform:translate(-50%,-50%) scale(0.95);-ms-transform:translate(-50%,-50%) scale(0.95);-o-transform:translate(-50%,-50%) scale(0.95);transform:translate(-50%,-50%) scale(0.95)}.ddlltr-W{pointer-events:all;color:#fff;width:156px;height:230px}.ddlltr-W .ddlltr-X{margin:30px auto 0 auto;height:30px;width:75%;text-align:center}.ddlltr-W .ddlltr-Y{margin:0 auto;bottom:20px;position:absolute;width:75%;left:12.5%;height:30px;text-align:center}.ddlltr-Z{position:absolute;top:25px;left:60px;-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1)}.ddlltr-j .ddlltr-Z{top:20px;left:20px}.ddlltr-ab{width:85px;height:120px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ddlltr-bb{position:absolute;bottom:25px;left:60px;text-align:center}.ddlltr-j .ddlltr-bb{top:20px;right:20px;left:unset}.ddlltr-Z .ddlltr-X,.ddlltr-Z .ddlltr-Y{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1)}.ddlltr-Z>canvas{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1)}.ddlltr-w{width:156px;height:215px}.ddlltr-j .ddlltr-w{margin:0 0 0 4px}.ddlltr-cb{z-index:1;opacity:0;left:50%;top:50%;position:absolute;-webkit-transform:translate(-200%,-200%) rotate(60deg) scale(0.95);-moz-transform:translate(-200%,-200%) rotate(60deg) scale(0.95);-ms-transform:translate(-200%,-200%) rotate(60deg) scale(0.95);-o-transform:translate(-200%,-200%) rotate(60deg) scale(0.95);transform:translate(-200%,-200%) rotate(60deg) scale(0.95)}.ddlltr-cb.ddlltr-db{-webkit-transition:opacity 300ms,-webkit-transform 300ms;transition:opacity 300ms,-webkit-transform 300ms;-o-transition:opacity 300ms,-o-transform 300ms;-moz-transition:opacity 300ms,transform 300ms,-moz-transform 300ms;transition:opacity 300ms,transform 300ms;transition:opacity 300ms,transform 300ms,-webkit-transform 300ms,-moz-transform 300ms,-o-transform 300ms;opacity:1;-webkit-transform:translate(-50%,-50%) scale(0.95);-moz-transform:translate(-50%,-50%) scale(0.95);-ms-transform:translate(-50%,-50%) scale(0.95);-o-transform:translate(-50%,-50%) scale(0.95);transform:translate(-50%,-50%) scale(0.95)}.ddlltr-eb{z-index:1;opacity:0;width:150px;height:200px;left:50%;top:50%;position:absolute;-webkit-transform:translate(80%,10%) rotate(60deg) scale(1.3);-moz-transform:translate(80%,10%) rotate(60deg) scale(1.3);-ms-transform:translate(80%,10%) rotate(60deg) scale(1.3);-o-transform:translate(80%,10%) rotate(60deg) scale(1.3);transform:translate(80%,10%) rotate(60deg) scale(1.3);-webkit-transition:opacity 300ms,-webkit-transform 300ms;transition:opacity 300ms,-webkit-transform 300ms;-o-transition:opacity 300ms,-o-transform 300ms;-moz-transition:opacity 300ms,transform 300ms,-moz-transform 300ms;transition:opacity 300ms,transform 300ms;transition:opacity 300ms,transform 300ms,-webkit-transform 300ms,-moz-transform 300ms,-o-transform 300ms}.ddlltr-eb.ddlltr-db{opacity:1;-webkit-transform:translate(-50%,-50%) rotate(-10deg) scale(1);-moz-transform:translate(-50%,-50%) rotate(-10deg) scale(1);-ms-transform:translate(-50%,-50%) rotate(-10deg) scale(1);-o-transform:translate(-50%,-50%) rotate(-10deg) scale(1);transform:translate(-50%,-50%) rotate(-10deg) scale(1)}@-webkit-keyframes shaking{0%{-webkit-transform:translate(0,0);transform:translate(0,0)}25%{-webkit-transform:translate(5px,5px);transform:translate(5px,5px)}50%{-webkit-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}75%{-webkit-transform:translate(-5px,5px);transform:translate(-5px,5px)}100%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@-moz-keyframes shaking{0%{-moz-transform:translate(0,0);transform:translate(0,0)}25%{-moz-transform:translate(5px,5px);transform:translate(5px,5px)}50%{-moz-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}75%{-moz-transform:translate(-5px,5px);transform:translate(-5px,5px)}100%{-moz-transform:translate(0,0);transform:translate(0,0)}}@-o-keyframes shaking{0%{-o-transform:translate(0,0);transform:translate(0,0)}25%{-o-transform:translate(5px,5px);transform:translate(5px,5px)}50%{-o-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}75%{-o-transform:translate(-5px,5px);transform:translate(-5px,5px)}100%{-o-transform:translate(0,0);transform:translate(0,0)}}@keyframes shaking{0%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}25%{-webkit-transform:translate(5px,5px);-moz-transform:translate(5px,5px);-o-transform:translate(5px,5px);transform:translate(5px,5px)}50%{-webkit-transform:translate(-5px,-5px);-moz-transform:translate(-5px,-5px);-o-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}75%{-webkit-transform:translate(-5px,5px);-moz-transform:translate(-5px,5px);-o-transform:translate(-5px,5px);transform:translate(-5px,5px)}100%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}}.ddlltr-fb{-webkit-animation:200ms 2 alternate shaking;-moz-animation:200ms 2 alternate shaking;-o-animation:200ms 2 alternate shaking;animation:200ms 2 alternate shaking;-webkit-animation-timing-function:ease-in;-moz-animation-timing-function:ease-in;-o-animation-timing-function:ease-in;animation-timing-function:ease-in}.ddlltr-gb .ddlltr-hb{position:absolute;top:0;left:0;width:100%;height:100%;background:#3a2d2b;opacity:0.45;-webkit-transition:opacity 500ms;-o-transition:opacity 500ms;-moz-transition:opacity 500ms;transition:opacity 500ms}.ddlltr-gb .ddlltr-ib{-webkit-box-shadow:0 0 0 10px #fff;-moz-box-shadow:0 0 0 10px #fff;box-shadow:0 0 0 10px #fff;position:absolute;height:410px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ddlltr-gb.ddlltr-jb .ddlltr-hb{opacity:0}.ddlltr-gb.ddlltr-jb .ddlltr-ib{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0.4);-moz-transform:translate(-50%,-50%) scale(0.4);-ms-transform:translate(-50%,-50%) scale(0.4);-o-transform:translate(-50%,-50%) scale(0.4);transform:translate(-50%,-50%) scale(0.4)}.ddlltr-gb .ddlltr-m{margin-top:-40px}.ddlltr-gb .ddlltr-kb{width:250px;height:140px;margin:10px auto}.ddlltr-gb .ddlltr-lb{color:#f3ed62;text-align:center;font-size:36pt;width:95%;margin:0 auto}.ddlltr-gb .ddlltr-mb{color:#ea3e22;position:absolute;left:50%;bottom:-5px;height:100px;text-align:center;width:100px;-webkit-transform:translate(-50%,50%);-moz-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);-o-transform:translate(-50%,50%);transform:translate(-50%,50%)}.ddlltr-nb{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;height:100%}.ddlltr-nb.ddlltr-ob{margin-left:-20px;margin-top:-4px;-webkit-transform:translate(-50%,-50%) scale(1.2);-moz-transform:translate(-50%,-50%) scale(1.2);-ms-transform:translate(-50%,-50%) scale(1.2);-o-transform:translate(-50%,-50%) scale(1.2);transform:translate(-50%,-50%) scale(1.2)}.ddlltr-nb.ddlltr-pb{margin-top:-5px}.ddlltr-nb.ddlltr-qb{margin-top:-10px}.ddlltr-gb .ddlltr-mb .ddlltr-p{vertical-align:middle;position:relative}.ddlltr-rb .ddlltr-sb{width:100%;height:100%;position:absolute}.ddlltr-rb .ddlltr-tb{position:absolute;-webkit-box-shadow:0 0 0 960px rgba(58,45,43,0.78);-moz-box-shadow:0 0 0 960px rgba(58,45,43,0.78);box-shadow:0 0 0 960px rgba(58,45,43,0.78);-webkit-transition:500ms;-o-transition:500ms;-moz-transition:500ms;transition:500ms;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px}.ddlltr-ub .ddlltr-tb{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ddlltr-vb .ddlltr-tb{top:10px;left:250px;width:600px;height:385px}.ddlltr-j .ddlltr-vb .ddlltr-tb{top:20px;left:2.5%;width:95%;height:600px}.ddlltr-wb .ddlltr-tb{top:19px;left:40px;width:200px;height:244px}.ddlltr-j .ddlltr-wb .ddlltr-tb{top:20px;left:10px;width:175px;height:260px}.ddlltr-xb .ddlltr-tb,.ddlltr-yb .ddlltr-tb{top:10px;left:250px;width:690px;height:470px}.ddlltr-j .ddlltr-xb .ddlltr-tb,.ddlltr-j .ddlltr-yb .ddlltr-tb{top:275px;left:2%;width:96%;height:675px}.ddlltr-zb{text-align:center;visibility:hidden;opacity:0;pointer-events:auto;position:absolute;left:50%;top:50%;background:#fff;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:20px 35px 40px 20px;-webkit-box-shadow:0 0 0 10px #0070af;-moz-box-shadow:0 0 0 10px #0070af;box-shadow:0 0 0 10px #0070af;width:400px;-webkit-transition:500ms;-o-transition:500ms;-moz-transition:500ms;transition:500ms;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ddlltr-zb.ddlltr-t{visibility:visible;opacity:1}.ddlltr-ub .ddlltr-zb{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ddlltr-Ab .ddlltr-vb .ddlltr-zb{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-ms-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);left:160px;top:281px}.ddlltr-j .ddlltr-vb .ddlltr-zb{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);left:50%;top:650px}.ddlltr-Ab .ddlltr-wb .ddlltr-zb{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-ms-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);left:228px;top:80px}.ddlltr-Ab .ddlltr-xb .ddlltr-zb,.ddlltr-Ab .ddlltr-yb .ddlltr-zb{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-ms-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);top:320px;left:150px;width:360px;padding:20px 30px}.ddlltr-j .ddlltr-xb .ddlltr-zb,.ddlltr-j .ddlltr-yb .ddlltr-zb{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);top:100px}.ddlltr-j .ddlltr-xb .ddlltr-Bb,.ddlltr-j .ddlltr-yb .ddlltr-Bb{visibility:hidden}.ddlltr-ub .ddlltr-S,.ddlltr-vb .ddlltr-S,.ddlltr-wb .ddlltr-S{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ddlltr-Cb{font-size:17pt}.ddlltr-Db{text-align:center;position:absolute;right:10px;bottom:10px;width:1.3em;height:1.3em;line-height:1.4em;color:#f9f000;background:#0070af}.ddlltr-Bb{position:absolute;right:10px;bottom:10px;padding:15px;color:#f9f000;background:#0070af}.ddlltr-xb .ddlltr-Db,.ddlltr-yb .ddlltr-Db{visibility:hidden}.ddlltr-yb .ddlltr-S{-webkit-animation:infinite alternate pulse 500ms;-moz-animation:infinite alternate pulse 500ms;-o-animation:infinite alternate pulse 500ms;animation:infinite alternate pulse 500ms}@-webkit-keyframes pulse{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.05);transform:scale(1.05)}}@-moz-keyframes pulse{from{-moz-transform:scale(1);transform:scale(1)}to{-moz-transform:scale(1.05);transform:scale(1.05)}}@-o-keyframes pulse{from{-o-transform:scale(1);transform:scale(1)}to{-o-transform:scale(1.05);transform:scale(1.05)}}@keyframes pulse{from{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}}.ddlltr-Eb{overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%}.ddlltr-Fb{height:350px;background:#fff;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ddlltr-Fb.ddlltr-Gb{height:493px}.ddlltr-Fb .ddlltr-Hb{margin:0 auto;width:100px;height:40px}.ddlltr-Fb .ddlltr-Ib{position:absolute;bottom:0;margin-bottom:20px;text-align:center;width:100%;font-size:24pt}.ddlltr-Jb{display:none;margin:0 auto 20px auto;width:220px;height:58px;line-height:58px;text-align:center;font-size:22pt}.ddlltr-Jb.ddlltr-Kb{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background:lightgrey;color:#0070af}.ddlltr-Lb{width:100%;height:100%}.ddlltr-Kb .ddlltr-Lb{background:none}.ddlltr-Mb{-webkit-box-shadow:0 0 0 10px #0070af;-moz-box-shadow:0 0 0 10px #0070af;box-shadow:0 0 0 10px #0070af;color:rgb(44,112,171);background:rgb(246,238,80);padding:25px 2px 8px 2px;margin:-30px 20px 0 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;display:none}.ddlltr-Nb{height:60px;text-align:left;font-size:10pt;width:70%;position:relative;vertical-align:middle;display:inline-block;font-family:\'Roboto Mono\',monospace;margin:0 auto 0 10px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;pointer-events:all;word-break:break-all}.ddlltr-Ob{width:100%;vertical-align:middle;opacity:0;-webkit-transition:opacity 100ms;-o-transition:opacity 100ms;-moz-transition:opacity 100ms;transition:opacity 100ms}.ddlltr-Ob.ddlltr-Pb{opacity:1}.ddlltr-Qb{display:inline-block;background:#0070af;fill:#fff;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;height:50px;width:50px;margin:5px;vertical-align:middle;pointer-events:all;cursor:pointer}.ddlltr-Rb{position:absolute;top:0;left:0;margin:20px;color:#f4ee67;height:45px;font-size:24pt;font-family:Lilita One,Helvetica,Arial,sans-serif;pointer-events:all}.ddlltr-d .ddlltr-Rb{font-family:Noto Sans,Helvetica,Arial,sans-serif}.ddlltr-Rb .ddlltr-f{margin-right:10px;width:35px;height:35px;float:left;padding:5px}.ddlltr-Rb>span{float:left;line-height:45px}.ddlltr-Sb{width:100%;height:100%}.ddlltr-Fb .ddlltr-Tb{width:180px;height:180px;position:relative;margin:30px auto 20px auto;-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;background:#f5ef63;opacity:0;-webkit-transition:opacity 200ms;-o-transition:opacity 200ms;-moz-transition:opacity 200ms;transition:opacity 200ms}.ddlltr-Pb .ddlltr-Tb{opacity:1}.ddlltr-Fb .ddlltr-Ub{width:35px;height:35px;position:absolute}.ddlltr-Fb .ddlltr-Vb{position:relative;top:5px;margin:0 auto}.ddlltr-Fb .ddlltr-Wb{left:25px;top:30px}.ddlltr-Fb .ddlltr-Xb{right:25px;top:30px}.ddlltr-Fb .ddlltr-Yb{left:30px;top:75px}.ddlltr-Fb .ddlltr-Zb{right:30px;top:75px}.ddlltr-ac .ddlltr-m{margin-top:-40px}.ddlltr-ac{padding:10px}.ddlltr-bc{width:80%;margin:20px;height:30px}.ddlltr-cc{width:80%;font-size:16pt;margin:20px}.ddlltr-dc{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-animation-duration:1s;-moz-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:cubic-bezier(0.550,0.085,0.680,0.530);-moz-animation-timing-function:cubic-bezier(0.550,0.085,0.680,0.530);-o-animation-timing-function:cubic-bezier(0.550,0.085,0.680,0.530);animation-timing-function:cubic-bezier(0.550,0.085,0.680,0.530);-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-o-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes anim1{from{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,600px);transform:translate(0px,600px)}}@-moz-keyframes anim1{from{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-moz-transform:translate(0px,600px);transform:translate(0px,600px)}}@-o-keyframes anim1{from{-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-o-transform:translate(0px,600px);transform:translate(0px,600px)}}@keyframes anim1{from{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,600px);-moz-transform:translate(0px,600px);-o-transform:translate(0px,600px);transform:translate(0px,600px)}}@-webkit-keyframes anim2{from{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,700px);transform:translate(0px,700px)}}@-moz-keyframes anim2{from{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-moz-transform:translate(0px,700px);transform:translate(0px,700px)}}@-o-keyframes anim2{from{-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-o-transform:translate(0px,700px);transform:translate(0px,700px)}}@keyframes anim2{from{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,700px);-moz-transform:translate(0px,700px);-o-transform:translate(0px,700px);transform:translate(0px,700px)}}@-webkit-keyframes anim3{from{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,750px);transform:translate(0px,750px)}}@-moz-keyframes anim3{from{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-moz-transform:translate(0px,750px);transform:translate(0px,750px)}}@-o-keyframes anim3{from{-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-o-transform:translate(0px,750px);transform:translate(0px,750px)}}@keyframes anim3{from{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,750px);-moz-transform:translate(0px,750px);-o-transform:translate(0px,750px);transform:translate(0px,750px)}}@-webkit-keyframes anim4{from{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,620px) scale(1.1);transform:translate(0px,620px) scale(1.1)}}@-moz-keyframes anim4{from{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-moz-transform:translate(0px,620px) scale(1.1);transform:translate(0px,620px) scale(1.1)}}@-o-keyframes anim4{from{-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-o-transform:translate(0px,620px) scale(1.1);transform:translate(0px,620px) scale(1.1)}}@keyframes anim4{from{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(0px,620px) scale(1.1);-moz-transform:translate(0px,620px) scale(1.1);-o-transform:translate(0px,620px) scale(1.1);transform:translate(0px,620px) scale(1.1)}}@-webkit-keyframes anim5{from{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(10px,680px) scale(1.05);transform:translate(10px,680px) scale(1.05)}}@-moz-keyframes anim5{from{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-moz-transform:translate(10px,680px) scale(1.05);transform:translate(10px,680px) scale(1.05)}}@-o-keyframes anim5{from{-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-o-transform:translate(10px,680px) scale(1.05);transform:translate(10px,680px) scale(1.05)}}@keyframes anim5{from{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}to{-webkit-transform:translate(10px,680px) scale(1.05);-moz-transform:translate(10px,680px) scale(1.05);-o-transform:translate(10px,680px) scale(1.05);transform:translate(10px,680px) scale(1.05)}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeOut{from{opacity:1}to{opacity:0}}@-o-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.ddlltr-dc.ddlltr-ec{-webkit-animation-name:anim1,fadeOut;-moz-animation-name:anim1,fadeOut;-o-animation-name:anim1,fadeOut;animation-name:anim1,fadeOut}.ddlltr-dc.ddlltr-fc{-webkit-animation-name:anim2,fadeOut;-moz-animation-name:anim2,fadeOut;-o-animation-name:anim2,fadeOut;animation-name:anim2,fadeOut}.ddlltr-dc.ddlltr-gc{-webkit-animation-name:anim3,fadeOut;-moz-animation-name:anim3,fadeOut;-o-animation-name:anim3,fadeOut;animation-name:anim3,fadeOut}.ddlltr-dc.ddlltr-hc{-webkit-animation-name:anim4,fadeOut;-moz-animation-name:anim4,fadeOut;-o-animation-name:anim4,fadeOut;animation-name:anim4,fadeOut}.ddlltr-dc.ddlltr-ic{-webkit-animation-name:anim5,fadeOut;-moz-animation-name:anim5,fadeOut;-o-animation-name:anim5,fadeOut;animation-name:anim5,fadeOut}.ddlltr-dc.ddlltr-jc{-webkit-animation-name:anim1,fadeOut;-moz-animation-name:anim1,fadeOut;-o-animation-name:anim1,fadeOut;animation-name:anim1,fadeOut}.ddlltr-kc,.ddlltr-lc,.ddlltr-mc,.ddlltr-nc{-webkit-animation-duration:1.1s;-moz-animation-duration:1.1s;-o-animation-duration:1.1s;animation-duration:1.1s}.ddlltr-dc.ddlltr-kc{-webkit-animation-name:anim4,fadeOut;-moz-animation-name:anim4,fadeOut;-o-animation-name:anim4,fadeOut;animation-name:anim4,fadeOut}.ddlltr-dc.ddlltr-lc{-webkit-animation-name:anim1,fadeOut;-moz-animation-name:anim1,fadeOut;-o-animation-name:anim1,fadeOut;animation-name:anim1,fadeOut}.ddlltr-dc.ddlltr-mc{-webkit-animation-name:anim2,fadeOut;-moz-animation-name:anim2,fadeOut;-o-animation-name:anim2,fadeOut;animation-name:anim2,fadeOut}.ddlltr-dc.ddlltr-nc{-webkit-animation-name:anim3,fadeOut;-moz-animation-name:anim3,fadeOut;-o-animation-name:anim3,fadeOut;animation-name:anim3,fadeOut}.ddlltr-oc .ddlltr-pc,.ddlltr-oc .ddlltr-Gb{margin:20px auto;width:256px;height:67px;line-height:67px;text-align:center}";
        a.appendChild(b);
        this.Xa = new cf(this.i, function () {
            return c.V.close()
        });
        A(a, ["click", "touchend"],
            function () {
                Wh(c.wa)
            }, !0);
        this.W = this.ka = null
    };
    r(Um, y);
    var Wm = function (a) {
        Rg() || a.o.start();
        a.Ga = !0;
        a.ka = new Dm(a.s, a.H, a.i);
        Sg() && sh(a.ha);
        var b = new Qm;
        lf(b);
        a.Ea.classList.add("ddlltr-h");
        var c = ["VerticalBG.svg", "HorizontalBG.svg", "svg-sprite.svg", "LosePattern.svg", "WinPattern.svg"].map(function (e) {
            var f = document.createElement("div");
            a.T.appendChild(f);
            f.style.background = "url(img/loteria-2019/" + e + ") no-repeat -9999px -9999px";
            return f
        }), d = sj() ? D.g.Dc.S : D.g.Cc.S;
        Promise.all([D.g.Tb.S.preload(), D.g.wc.S.preload(), d.preload(), new Promise(function (e) {
            return setTimeout(e,
                2E3)
        }), a.ka.load()]).then(function () {
            b.S();
            for (var e = p(c), f = e.next(); !f.done; f = e.next()) a.T.removeChild(f.value);
            Vm(a)
        })
    };
    Um.prototype.start = function () {
        var a = this;
        this.T.classList.add("fpdoodleready");
        var b = new Aj(Rg());
        lf(b);
        Zg(this.s, dh, function (c) {
            "mousedown" == c && (b.S(), bh(a.s, dh), Wm(a))
        });
        Tm(this)
    };
    var Tm = function (a) {
        a.Ga || Rg() ? (a.W && (ud(a.W), a.W = null), a.o.start()) : (a.o.o(50), a.W = A(window, "resize", function () {
            a.o.o(50)
        }));
        ge()
    }, Vm = function (a) {
        lf(a.ka);
        a.ka.start().catch(function (b) {
            throw b;
        })
    };
    Um.prototype.j = function () {
        window.removeEventListener("orientationchange", this.ya, !1);
        this.ha.reset();
        kf.va().reset();
        var a = lg.va();
        a.j = [];
        a.g = new Map;
        y.prototype.j.call(this)
    };
    var Xm = null;
    (function (a, b) {
        ai(function () {
            a()
        }, b);
        a()
    })(function () {
        var a = document.getElementById("hplogo"), b = document.getElementById("hpcanvas");
        if (a && b) {
            Mh = Date.now();
            Q.d = "138397252";
            !Nh && Ug() && (Nh = !0, Ph(10));
            var c = li();
            new URL(window.location.href);
            b.classList.add("cta");
            b.classList.add("ddlltr-g");
            de(a);
            ve && !we ? (b.width = 1080, b.height = 1920, a.classList.add("ddlltr-j")) : (b.width = 1920, b.height = 1080, a.classList.add("ddlltr-Ab"));
            c = [c, vh(), cg.va().preload(1), R.va().load(Pe, Qe, Bi, "img/loteria-2019/")];
            Promise.all(c).catch(function () {
                return console.error("Error loading assets.")
            }).then(function () {
                var d =
                    [];
                kg = new Sm;
                a && b && (Xm = new Um(a, b, d), Xm.start())
            })
        }
    }, function () {
        var a = cg.va();
        a = p(a.g);
        for (var b = a.next(); !b.done; b = a.next()) b.value.o = [];
        Yc(Xm)
    });
}).call(this);
