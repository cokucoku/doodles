(function () {
    var aa = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
            }
        }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ca = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        da = function () {
            da = function () {
            };
            ca.Symbol || (ca.Symbol = ea)
        }, fa = function (a, b) {
            this.g = a;
            ba(this, "description", {configurable: !0, writable: !0, value: b})
        };
    fa.prototype.toString = function () {
        return this.g
    };
    var ea = function () {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new fa("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }

            var b = 0;
            return a
        }(), ia = function () {
            da();
            var a = ca.Symbol.iterator;
            a || (a = ca.Symbol.iterator = ca.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return ha(aa(this))
                }
            });
            ia = function () {
            }
        }, ha = function (a) {
            ia();
            a = {next: a};
            a[ca.Symbol.iterator] = function () {
                return this
            };
            return a
        },
        p = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {next: aa(a)}
        }, ja = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {
            };
            b.prototype = a;
            return new b
        }, ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf; else {
        var la;
        a:{
            var ma = {a: !0}, na = {};
            try {
                na.__proto__ = ma;
                la = na.a;
                break a
            } catch (a) {
            }
            la = !1
        }
        ka = la ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ka, t = function (a, b) {
        a.prototype = ja(b.prototype);
        a.prototype.constructor = a;
        if (oa) oa(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.kb = b.prototype
    }, v = function (a, b) {
        if (b) {
            for (var c = ca, d = a.split("."), e = 0; e < d.length - 1; e++) {
                var f = d[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            e = c[d];
            f = b(e);
            f != e && null != f && ba(c, d, {configurable: !0, writable: !0, value: f})
        }
    };
    v("Promise", function (a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function (h) {
                h(g)
            })
        }

        if (a) return a;
        b.prototype.i = function (g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.j(function () {
                    h.s()
                })
            }
            this.g.push(g)
        };
        var d = ca.setTimeout;
        b.prototype.j = function (g) {
            d(g, 0)
        };
        b.prototype.s = function () {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.o(l)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function (g) {
            this.j(function () {
                throw g;
            })
        };
        var e = function (g) {
            this.i = 0;
            this.j = void 0;
            this.g = [];
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function () {
            function g(l) {
                return function (m) {
                    k || (k = !0, l.call(h, m))
                }
            }

            var h = this, k = !1;
            return {resolve: g(this.T), reject: g(this.s)}
        };
        e.prototype.T = function (g) {
            if (g === this) this.s(new TypeError("A Promise cannot resolve to itself")); else if (g instanceof e) this.V(g); else {
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
                h ? this.S(g) :
                    this.H(g)
            }
        };
        e.prototype.S = function (g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.s(k);
                return
            }
            "function" == typeof h ? this.W(h, g) : this.H(g)
        };
        e.prototype.s = function (g) {
            this.U(2, g)
        };
        e.prototype.H = function (g) {
            this.U(1, g)
        };
        e.prototype.U = function (g, h) {
            if (0 != this.i) throw Error("a`" + g + "`" + h + "`" + this.i);
            this.i = g;
            this.j = h;
            this.v()
        };
        e.prototype.v = function () {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.i(this.g[g]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.V = function (g) {
            var h = this.o();
            g.Ob(h.resolve, h.reject)
        };
        e.prototype.W =
            function (g, h) {
                var k = this.o();
                try {
                    g.call(h, k.resolve, k.reject)
                } catch (l) {
                    k.reject(l)
                }
            };
        e.prototype.then = function (g, h) {
            function k(n, q) {
                return "function" == typeof n ? function (w) {
                    try {
                        l(n(w))
                    } catch (u) {
                        m(u)
                    }
                } : q
            }

            var l, m, r = new e(function (n, q) {
                l = n;
                m = q
            });
            this.Ob(k(g, l), k(h, m));
            return r
        };
        e.prototype["catch"] = function (g) {
            return this.then(void 0, g)
        };
        e.prototype.Ob = function (g, h) {
            function k() {
                switch (l.i) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("b`" + l.i);
                }
            }

            var l = this;
            null == this.g ? f.i(k) : this.g.push(k)
        };
        e.resolve = c;
        e.reject = function (g) {
            return new e(function (h, k) {
                k(g)
            })
        };
        e.race = function (g) {
            return new e(function (h, k) {
                for (var l = p(g), m = l.next(); !m.done; m = l.next()) c(m.value).Ob(h, k)
            })
        };
        e.all = function (g) {
            var h = p(g), k = h.next();
            return k.done ? c([]) : new e(function (l, m) {
                function r(w) {
                    return function (u) {
                        n[w] = u;
                        q--;
                        0 == q && l(n)
                    }
                }

                var n = [], q = 0;
                do n.push(void 0), q++, c(k.value).Ob(r(n.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    var pa = function () {
        this.j = !1;
        this.g = null;
        this.U = void 0;
        this.i = 1;
        this.H = 0;
        this.o = null
    }, qa = function (a) {
        if (a.j) throw new TypeError("Generator is already running");
        a.j = !0
    };
    pa.prototype.s = function (a) {
        this.U = a
    };
    var ra = function (a, b) {
        a.o = {Hc: b, Ic: !0};
        a.i = a.H
    };
    pa.prototype["return"] = function (a) {
        this.o = {"return": a};
        this.i = this.H
    };
    var sa = function (a) {
            this.g = new pa;
            this.i = a
        }, va = function (a, b) {
            qa(a.g);
            var c = a.g.g;
            if (c) return ta(a, "return" in c ? c["return"] : function (d) {
                return {value: d, done: !0}
            }, b, a.g["return"]);
            a.g["return"](b);
            return ua(a)
        }, ta = function (a, b, c, d) {
            try {
                var e = b.call(a.g.g, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.j = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.g = null, ra(a.g, g), ua(a)
            }
            a.g.g = null;
            d.call(a.g, f);
            return ua(a)
        }, ua = function (a) {
            for (; a.g.i;) try {
                var b =
                    a.i(a.g);
                if (b) return a.g.j = !1, {value: b.value, done: !1}
            } catch (c) {
                a.g.U = void 0, ra(a.g, c)
            }
            a.g.j = !1;
            if (a.g.o) {
                b = a.g.o;
                a.g.o = null;
                if (b.Ic) throw b.Hc;
                return {value: b["return"], done: !0}
            }
            return {value: void 0, done: !0}
        }, wa = function (a) {
            this.next = function (b) {
                qa(a.g);
                a.g.g ? b = ta(a, a.g.g.next, b, a.g.s) : (a.g.s(b), b = ua(a));
                return b
            };
            this["throw"] = function (b) {
                qa(a.g);
                a.g.g ? b = ta(a, a.g.g["throw"], b, a.g.s) : (ra(a.g, b), b = ua(a));
                return b
            };
            this["return"] = function (b) {
                return va(a, b)
            };
            ia();
            this[Symbol.iterator] = function () {
                return this
            }
        },
        xa = function (a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a["throw"](d)
            }

            return new Promise(function (d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }

                f(a.next())
            })
        };
    v("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this + "";
            b += "";
            for (var e = d.length, f = b.length, g = Math.max(0, Math.min(c | 0, d.length)), h = 0; h < f && g < e;) if (d[g++] != b[h++]) return !1;
            return h >= f
        }
    });
    v("Array.prototype.fill", function (a) {
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
    var ya = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    v("WeakMap", function (a) {
        function b() {
        }

        function c(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function d(k) {
            if (!ya(k, f)) {
                var l = new b;
                ba(k, f, {value: l})
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function (m) {
                if (m instanceof b) return m;
                d(m);
                return l(m)
            })
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}), l = Object.seal({}), m = new a([[k, 2], [l, 3]]);
                if (2 != m.get(k) || 3 != m.get(l)) return !1;
                m["delete"](k);
                m.set(l, 4);
                return !m.has(k) && 4 == m.get(l)
            } catch (r) {
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
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
        h.prototype.set = function (k, l) {
            if (!c(k)) throw Error("c");
            d(k);
            if (!ya(k, f)) throw Error("d`" + k);
            k[f][this.g] = l;
            return this
        };
        h.prototype.get = function (k) {
            return c(k) && ya(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function (k) {
            return c(k) && ya(k, f) && ya(k[f], this.g)
        };
        h.prototype["delete"] = function (k) {
            return c(k) &&
            ya(k, f) && ya(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    v("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({x: 4}), k = new a(p([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({x: 4}) || k.set({x: 4}, "t") != k || 2 != k.size) return !1;
                var l = k.entries(), m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                m = l.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }()) return a;
        ia();
        var b = new WeakMap, c = function (h) {
            this.i = {};
            this.g =
                f();
            this.size = 0;
            if (h) {
                h = p(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
        c.prototype.set = function (h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.Ea ? l.Ea.value = k : (l.Ea = {
                next: this.g,
                Ta: this.g.Ta,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.Ea), this.g.Ta.next = l.Ea, this.g.Ta = l.Ea, this.size++);
            return this
        };
        c.prototype["delete"] = function (h) {
            h = d(this, h);
            return h.Ea && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.Ea.Ta.next = h.Ea.next, h.Ea.next.Ta =
                h.Ea.Ta, h.Ea.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.i = {};
            this.g = this.g.Ta = f();
            this.size = 0
        };
        c.prototype.has = function (h) {
            return !!d(this, h).Ea
        };
        c.prototype.get = function (h) {
            return (h = d(this, h).Ea) && h.value
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
            for (var l = this.entries(),
                     m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function (h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ya(h.i, l)) for (var r = 0; r < m.length; r++) {
                var n = m[r];
                if (k !== k && n.key !== n.key || k === n.key) return {id: l, list: m, index: r, Ea: n}
            }
            return {id: l, list: m, index: -1, Ea: void 0}
        }, e = function (h, k) {
            var l = h.g;
            return ha(function () {
                if (l) {
                    for (; l.head != h.g;) l = l.Ta;
                    for (; l.next != l.head;) return l =
                        l.next, {done: !1, value: k(l)};
                    l = null
                }
                return {done: !0, value: void 0}
            })
        }, f = function () {
            var h = {};
            return h.Ta = h.next = h.head = h
        }, g = 0;
        return c
    });
    v("Set", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({x: 4}), d = new a(p([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({x: 4}) != d || 2 != d.size) return !1;
                var e = d.entries(), f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
        ia();
        var b = function (c) {
            this.g = new Map;
            if (c) {
                c =
                    p(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function (c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype["delete"] = function (c) {
            c = this.g["delete"](c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function () {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function (c) {
            return this.g.has(c)
        };
        b.prototype.entries = function () {
            return this.g.entries()
        };
        b.prototype.values = function () {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function (c, d) {
            var e = this;
            this.g.forEach(function (f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    v("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    v("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length, f = c || 0;
            for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
                var g = d[f];
                if (g === b || Object.is(g, b)) return !0
            }
            return !1
        }
    });
    v("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (h) {
                return h
            };
            var e = [], f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    v("Promise.prototype.finally", function (a) {
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
    var za = za || {}, x = this || self, Aa = function () {
    }, y = function (a) {
        a.Yb = void 0;
        a.$ = function () {
            return a.Yb ? a.Yb : a.Yb = new a
        }
    }, Ba = function (a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" ==
                c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }, Ca = function (a) {
        return "array" == Ba(a)
    }, Da = function (a) {
        var b = Ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, Ea = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, Fa = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, Ga = function (a, b, c) {
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
            return a.apply(b, arguments)
        }
    }, Ha = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ha = Fa : Ha = Ga;
        return Ha.apply(null, arguments)
    }, Ia = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }, z = Date.now || function () {
        return +new Date
    }, Ja = function (a, b) {
        var c = a.split("."), d = x;
        c[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    }, A = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.kb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var B = function (a) {
        this.Kb = a;
        this.j = !1;
        this.s = []
    };
    B.prototype.i = function () {
        if (!this.j) {
            this.j = !0;
            for (var a = 0, b; b = this.s[a]; a++) b()
        }
    };
    B.prototype.isLoaded = function () {
        return this.j
    };
    var Ka = function (a, b) {
        a.j ? b() : a.s.push(b)
    }, La = function (a) {
        B.call(this, a);
        this.image = new Image
    };
    A(La, B);
    La.prototype.preload = function () {
        if (!this.image.src) {
            var a = this;
            this.image.onload = function () {
                a.i()
            };
            this.image.src = this.Kb;
            (this.image.complete || "complete" == this.image.readyState) && this.i()
        }
    };
    var Ma = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Na = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, Pa = function (a) {
        a:{
            var b = Oa;
            for (var c = a.length, d = "string" ===
            typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }, Qa = function (a, b) {
        var c = Ma(a, b), d;
        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    }, Ra = function (a) {
        return Array.prototype.concat.apply([], arguments)
    }, Sa = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }, Ua = function (a, b) {
        a.sort(b || Ta)
    }, Ta = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var Va = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }, C = function (a, b) {
        return -1 != a.indexOf(b)
    }, Wa = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var D;
    a:{
        var Xa = x.navigator;
        if (Xa) {
            var Ya = Xa.userAgent;
            if (Ya) {
                D = Ya;
                break a
            }
        }
        D = ""
    }
    ;var Za = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        }, $a = function (a) {
            var b = [], c = 0, d;
            for (d in a) b[c++] = a[d];
            return b
        }, ab = function (a) {
            var b = [], c = 0, d;
            for (d in a) b[c++] = d;
            return b
        }, bb = function (a) {
            var b = {}, c;
            for (c in a) b[c] = a[c];
            return b
        }, cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        db = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < cb.length; f++) c = cb[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        };
    var eb = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        fb = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"),
        gb = /^http:\/\/.*/, hb = /\s+/, ib = /[\d\u06f0-\u06f9]/, jb = function (a) {
            var b =
                0, c = 0, d = !1;
            a = a.split(hb);
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                fb.test(f) ? (b++, c++) : gb.test(f) ? d = !0 : eb.test(f) ? c++ : ib.test(f) && (d = !0)
            }
            return 0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1
        };
    var mb = function (a, b) {
        this.g = a === kb && b || "";
        this.i = lb
    };
    mb.prototype.o = !0;
    mb.prototype.j = function () {
        return this.g.toString()
    };
    var ob = function (a) {
        if (a instanceof mb && a.constructor === mb && a.i === lb) return a.g;
        Ba(a);
        return "type_error:SafeUrl"
    }, pb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, qb = function (a) {
        if (a instanceof mb) return a;
        a = "object" == typeof a && a.o ? a.j() : String(a);
        pb.test(a) || (a = "about:invalid#zClosurez");
        return new mb(kb, a)
    }, lb = {}, kb = {};
    var rb = function (a) {
        a = a instanceof mb ? a : qb(a);
        x.open(ob(a), "", void 0, void 0)
    };
    var sb = function (a) {
        sb[" "](a);
        return a
    };
    sb[" "] = Aa;
    var ub = function (a, b) {
        var c = tb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var vb = C(D, "Opera"), wb = C(D, "Trident") || C(D, "MSIE"), xb = C(D, "Edge"),
        yb = C(D, "Gecko") && !(C(D.toLowerCase(), "webkit") && !C(D, "Edge")) && !(C(D, "Trident") || C(D, "MSIE")) && !C(D, "Edge"),
        zb = C(D.toLowerCase(), "webkit") && !C(D, "Edge"), Ab = function () {
            var a = x.document;
            return a ? a.documentMode : void 0
        }, Bb;
    a:{
        var Cb = "", Db = function () {
            var a = D;
            if (yb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (xb) return /Edge\/([\d\.]+)/.exec(a);
            if (wb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (zb) return /WebKit\/(\S+)/.exec(a);
            if (vb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Db && (Cb = Db ? Db[1] : "");
        if (wb) {
            var Eb = Ab();
            if (null != Eb && Eb > parseFloat(Cb)) {
                Bb = String(Eb);
                break a
            }
        }
        Bb = Cb
    }
    var Fb = Bb, tb = {}, Gb = function (a) {
        return ub(a, function () {
            for (var b = 0, c = Va(String(Fb)).split("."), d = Va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = Wa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Wa(0 == g[2].length, 0 == h[2].length) || Wa(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, Hb;
    Hb = x.document && wb ? Ab() : void 0;
    var Ib;
    (Ib = !wb) || (Ib = 9 <= Number(Hb));
    var Jb = Ib, Kb = wb && !Gb("9"), Lb = function () {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            x.addEventListener("test", Aa, b), x.removeEventListener("test", Aa, b)
        } catch (c) {
        }
        return a
    }();
    var E = function () {
        this.U = this.U;
        this.H = this.H
    };
    E.prototype.U = !1;
    E.prototype.Qb = function () {
        this.U || (this.U = !0, this.i())
    };
    var Mb = function (a, b) {
        a.U ? b() : (a.H || (a.H = []), a.H.push(b))
    };
    E.prototype.i = function () {
        if (this.H) for (; this.H.length;) this.H.shift()()
    };
    var Nb = function (a) {
        a && "function" == typeof a.Qb && a.Qb()
    };
    var Ob = function (a, b) {
        this.type = a;
        this.g = this.target = b;
        this.i = !1;
        this.kc = !0
    };
    Ob.prototype.stopPropagation = function () {
        this.i = !0
    };
    Ob.prototype.preventDefault = function () {
        this.kc = !1
    };
    var Qb = function (a, b) {
        Ob.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.j = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            var e = a.relatedTarget;
            if (e) {
                if (yb) {
                    a:{
                        try {
                            sb(e.nodeName);
                            var f = !0;
                            break a
                        } catch (g) {
                        }
                        f = !1
                    }
                    f ||
                    (e = null)
                }
            } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.relatedTarget = e;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Pb[a.pointerType] || "";
            this.j = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    A(Qb, Ob);
    var Pb = {2: "touch", 3: "pen", 4: "mouse"};
    Qb.prototype.stopPropagation = function () {
        Qb.kb.stopPropagation.call(this);
        this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = !0
    };
    Qb.prototype.preventDefault = function () {
        Qb.kb.preventDefault.call(this);
        var a = this.j;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, Kb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var Rb = "closure_listenable_" + (1E6 * Math.random() | 0), Sb = 0;
    var Tb = function (a, b, c, d, e) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Rb = e;
        this.key = ++Sb;
        this.Eb = this.Nb = !1
    }, Ub = function (a) {
        a.Eb = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.Rb = null
    };
    var Vb = function (a) {
        this.src = a;
        this.g = {};
        this.i = 0
    };
    Vb.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.i++);
        var g = Wb(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Nb = !1)) : (b = new Tb(b, this.src, f, !!d, e), b.Nb = c, a.push(b));
        return b
    };
    var Xb = function (a, b) {
        var c = b.type;
        c in a.g && Qa(a.g[c], b) && (Ub(b), 0 == a.g[c].length && (delete a.g[c], a.i--))
    }, Wb = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Eb && f.listener == b && f.capture == !!c && f.Rb == d) return e
        }
        return -1
    };
    var Yb = "closure_lm_" + (1E6 * Math.random() | 0), Zb = {}, $b = 0, bc = function (a, b, c, d, e) {
        if (d && d.once) return ac(a, b, c, d, e);
        if (Ca(b)) {
            for (var f = 0; f < b.length; f++) bc(a, b[f], c, d, e);
            return null
        }
        c = cc(c);
        return a && a[Rb] ? a.j.add(String(b), c, !1, Ea(d) ? !!d.capture : !!d, e) : dc(a, b, c, !1, d, e)
    }, dc = function (a, b, c, d, e, f) {
        if (!b) throw Error("e");
        var g = Ea(e) ? !!e.capture : !!e, h = ec(a);
        h || (a[Yb] = h = new Vb(a));
        c = h.add(b, c, d, g, f);
        if (c.g) return c;
        d = fc();
        c.g = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Lb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
            d, e); else if (a.attachEvent) a.attachEvent(gc(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("f");
        $b++;
        return c
    }, fc = function () {
        var a = hc, b = Jb ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }, ac = function (a, b, c, d, e) {
        if (Ca(b)) {
            for (var f = 0; f < b.length; f++) ac(a, b[f], c, d, e);
            return null
        }
        c = cc(c);
        return a && a[Rb] ? a.j.add(String(b), c, !0, Ea(d) ? !!d.capture : !!d, e) : dc(a, b, c, !0, d, e)
    }, ic = function (a, b, c, d, e) {
        if (Ca(b)) for (var f =
            0; f < b.length; f++) ic(a, b[f], c, d, e); else (d = Ea(d) ? !!d.capture : !!d, c = cc(c), a && a[Rb]) ? (a = a.j, b = String(b).toString(), b in a.g && (f = a.g[b], c = Wb(f, c, d, e), -1 < c && (Ub(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.i--)))) : a && (a = ec(a)) && (b = a.g[b.toString()], a = -1, b && (a = Wb(b, c, d, e)), (c = -1 < a ? b[a] : null) && jc(c))
    }, jc = function (a) {
        if ("number" !== typeof a && a && !a.Eb) {
            var b = a.src;
            if (b && b[Rb]) Xb(b.j, a); else {
                var c = a.type, d = a.g;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ?
                    b.detachEvent(gc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                $b--;
                (c = ec(b)) ? (Xb(c, a), 0 == c.i && (c.src = null, b[Yb] = null)) : Ub(a)
            }
        }
    }, gc = function (a) {
        return a in Zb ? Zb[a] : Zb[a] = "on" + a
    }, lc = function (a, b, c, d) {
        var e = !0;
        if (a = ec(a)) if (b = a.g[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.Eb && (f = kc(f, d), e = e && !1 !== f)
        }
        return e
    }, kc = function (a, b) {
        var c = a.listener, d = a.Rb || a.src;
        a.Nb && jc(a);
        return c.call(d, b)
    }, hc = function (a, b) {
        if (a.Eb) return !0;
        if (!Jb) {
            var c;
            if (!(c = b)) a:{
                c =
                    ["window", "event"];
                for (var d = x, e = 0; e < c.length; e++) if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
                c = d
            }
            e = c;
            c = new Qb(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a:{
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (k) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.g; f; f = f.parentNode) e.push(f);
                f = a.type;
                for (var g = e.length - 1; !c.i && 0 <= g; g--) {
                    c.g = e[g];
                    var h = lc(e[g], f, !0, c);
                    d = d && h
                }
                for (g = 0; !c.i && g < e.length; g++) c.g = e[g], h = lc(e[g], f, !1, c), d = d && h
            }
            return d
        }
        return kc(a, new Qb(b, this))
    }, ec =
        function (a) {
            a = a[Yb];
            return a instanceof Vb ? a : null
        }, mc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), cc = function (a) {
        if ("function" == Ba(a)) return a;
        a[mc] || (a[mc] = function (b) {
            return a.handleEvent(b)
        });
        return a[mc]
    };
    var nc = function () {
        E.call(this);
        this.j = new Vb(this);
        this.Xa = this;
        this.ta = null
    };
    A(nc, E);
    nc.prototype[Rb] = !0;
    nc.prototype.addEventListener = function (a, b, c, d) {
        bc(this, a, b, c, d)
    };
    nc.prototype.removeEventListener = function (a, b, c, d) {
        ic(this, a, b, c, d)
    };
    var F = function (a, b) {
        var c, d = a.ta;
        if (d) for (c = []; d; d = d.ta) c.push(d);
        d = a.Xa;
        var e = b, f = e.type || e;
        if ("string" === typeof e) e = new Ob(e, d); else if (e instanceof Ob) e.target = e.target || d; else {
            var g = e;
            e = new Ob(f, d);
            db(e, g)
        }
        g = !0;
        if (c) for (var h = c.length - 1; !e.i && 0 <= h; h--) {
            var k = e.g = c[h];
            g = oc(k, f, !0, e) && g
        }
        e.i || (k = e.g = d, g = oc(k, f, !0, e) && g, e.i || (g = oc(k, f, !1, e) && g));
        if (c) for (h = 0; !e.i && h < c.length; h++) k = e.g = c[h], g = oc(k, f, !1, e) && g
    };
    nc.prototype.i = function () {
        nc.kb.i.call(this);
        if (this.j) {
            var a = this.j, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Ub(d[e]);
                delete a.g[c];
                a.i--
            }
        }
        this.ta = null
    };
    var oc = function (a, b, c, d) {
        b = a.j.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Eb && g.capture == c) {
                var h = g.listener, k = g.Rb || g.src;
                g.Nb && Xb(a.j, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && 0 != d.kc
    };
    var pc = function () {
    };
    pc.prototype.g = null;
    pc.prototype.getOptions = function () {
        var a;
        (a = this.g) || (a = {}, qc(this) && (a[0] = !0, a[1] = !0), a = this.g = a);
        return a
    };
    var rc, sc = function () {
    };
    A(sc, pc);
    var tc = function (a) {
        return (a = qc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, qc = function (a) {
        if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.i = d
                } catch (e) {
                }
            }
            throw Error("g");
        }
        return a.i
    };
    rc = new sc;
    var G = function (a, b, c) {
        return a + c * (b - a)
    };
    var H = function (a, b) {
        this.i = {};
        this.g = [];
        this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("h");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) if (a instanceof H) for (c = a.La(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d])
    };
    H.prototype.Ha = function () {
        uc(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
        return a
    };
    H.prototype.La = function () {
        uc(this);
        return this.g.concat()
    };
    var uc = function (a) {
        if (a.j != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                vc(a.i, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.j != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], vc(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    H.prototype.get = function (a, b) {
        return vc(this.i, a) ? this.i[a] : b
    };
    H.prototype.set = function (a, b) {
        vc(this.i, a) || (this.j++, this.g.push(a));
        this.i[a] = b
    };
    H.prototype.forEach = function (a, b) {
        for (var c = this.La(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var vc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var wc = function (a) {
        if (a.Ha && "function" == typeof a.Ha) return a.Ha();
        if ("string" === typeof a) return a.split("");
        if (Da(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return $a(a)
    }, xc = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0); else if (Da(a) || "string" === typeof a) Na(a, b, void 0); else {
            if (a.La && "function" == typeof a.La) var c = a.La(); else if (a.Ha && "function" == typeof a.Ha) c = void 0; else if (Da(a) || "string" === typeof a) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c =
                ab(a);
            d = wc(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
    var yc = function (a, b) {
        this.width = a;
        this.height = b
    };
    yc.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    yc.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    yc.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    yc.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var zc = function (a, b, c) {
        if ("function" == Ba(a)) c && (a = Ha(a, c)); else if (a && "function" == typeof a.handleEvent) a = Ha(a.handleEvent, a); else throw Error("i");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    };
    var Ac = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Bc = function (a, b) {
            if (a) for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("="), f = null;
                if (0 <= e) {
                    var g = c[d].substring(0, e);
                    f = c[d].substring(e + 1)
                } else g = c[d];
                b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
        };
    var I = function (a) {
        nc.call(this);
        this.headers = new H;
        this.V = a || null;
        this.o = !1;
        this.T = this.g = null;
        this.ka = "";
        this.s = this.ha = this.v = this.W = !1;
        this.Fa = 0;
        this.S = null;
        this.va = "";
        this.Ca = this.Oa = !1
    };
    A(I, nc);
    var Cc = /^https?$/i, Dc = ["POST", "PUT"], Ec = [], Fc = function (a, b) {
        var c = new I;
        Ec.push(c);
        b && c.j.add("complete", b, !1, void 0, void 0);
        c.j.add("ready", c.Ya, !0, void 0, void 0);
        c.send(a, void 0, void 0, void 0);
        return c
    };
    I.prototype.Ya = function () {
        this.Qb();
        Qa(Ec, this)
    };
    I.prototype.send = function (a, b, c, d) {
        if (this.g) throw Error("j`" + this.ka + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.ka = a;
        this.W = !1;
        this.o = !0;
        this.g = this.V ? tc(this.V) : tc(rc);
        this.T = this.V ? this.V.getOptions() : rc.getOptions();
        this.g.onreadystatechange = Ha(this.Ia, this);
        try {
            this.ha = !0, this.g.open(b, String(a), !0), this.ha = !1
        } catch (f) {
            Gc(this);
            return
        }
        a = c || "";
        var e = new H(this.headers);
        d && xc(d, function (f, g) {
            e.set(g, f)
        });
        d = Pa(e.La());
        c = x.FormData && a instanceof x.FormData;
        !(0 <= Ma(Dc, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, g) {
            this.g.setRequestHeader(g, f)
        }, this);
        this.va && (this.g.responseType = this.va);
        "withCredentials" in this.g && this.g.withCredentials !== this.Oa && (this.g.withCredentials = this.Oa);
        try {
            Hc(this), 0 < this.Fa && ((this.Ca = Ic(this.g)) ? (this.g.timeout = this.Fa, this.g.ontimeout = Ha(this.Ga, this)) : this.S = zc(this.Ga, this.Fa, this)), this.v = !0, this.g.send(a), this.v = !1
        } catch (f) {
            Gc(this)
        }
    };
    var Ic = function (a) {
        return wb && Gb(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }, Oa = function (a) {
        return "content-type" == a.toLowerCase()
    };
    I.prototype.Ga = function () {
        "undefined" != typeof za && this.g && (F(this, "timeout"), this.abort(8))
    };
    var Gc = function (a) {
        a.o = !1;
        a.g && (a.s = !0, a.g.abort(), a.s = !1);
        Jc(a);
        Kc(a)
    }, Jc = function (a) {
        a.W || (a.W = !0, F(a, "complete"), F(a, "error"))
    };
    I.prototype.abort = function () {
        this.g && this.o && (this.o = !1, this.s = !0, this.g.abort(), this.s = !1, F(this, "complete"), F(this, "abort"), Kc(this))
    };
    I.prototype.i = function () {
        this.g && (this.o && (this.o = !1, this.s = !0, this.g.abort(), this.s = !1), Kc(this, !0));
        I.kb.i.call(this)
    };
    I.prototype.Ia = function () {
        this.U || (this.ha || this.v || this.s ? Lc(this) : this.Za())
    };
    I.prototype.Za = function () {
        Lc(this)
    };
    var Lc = function (a) {
        if (a.o && "undefined" != typeof za && (!a.T[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != Mc(a))) if (a.v && 4 == (a.g ? a.g.readyState : 0)) zc(a.Ia, 0, a); else if (F(a, "readystatechange"), 4 == (a.g ? a.g.readyState : 0)) {
            a.o = !1;
            try {
                Nc(a) ? (F(a, "complete"), F(a, "success")) : Jc(a)
            } finally {
                Kc(a)
            }
        }
    }, Kc = function (a, b) {
        if (a.g) {
            Hc(a);
            var c = a.g, d = a.T[0] ? Aa : null;
            a.g = null;
            a.T = null;
            b || F(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }, Hc = function (a) {
        a.g && a.Ca && (a.g.ontimeout = null);
        a.S && (x.clearTimeout(a.S), a.S = null)
    }, Nc = function (a) {
        var b =
            Mc(a);
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
            if (b = 0 === b) a = String(a.ka).match(Ac)[1] || null, !a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Cc.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }, Mc = function (a) {
        try {
            return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }, Oc = function (a) {
        try {
            return a.g ? a.g.responseXML : null
        } catch (b) {
            return null
        }
    };
    var Pc = function (a, b) {
        this.o = a;
        this.j = b;
        this.H = this.g = null;
        this.U = this.s = !1;
        this.v = [];
        this.i = null
    }, Vc = function () {
        var a = Qc, b = document.getElementById("hplogo");
        if (Rc && !a.g) {
            a.g = new (window.AudioContext || window.webkitAudioContext);
            a.H = a.g.createGain();
            a.H.connect(a.g.destination);
            for (var c in a.o) a.o[c].o = a.g;
            for (var d in a.j) Sc(a.j[d], a.g, a.H);
            a.g.onstatechange = function () {
                Tc(a)
            };
            Tc(a);
            Uc(a);
            ac(b, ["click", "pointerup", "mouseup", "touchend"], function () {
                a.g.resume();
                Uc(a)
            }, !0)
        }
    }, Tc = function (a) {
        if ("running" ==
            a.g.state && !a.U) {
            a.U = !0;
            for (var b = 0; b < a.v.length; b++) a.v[b]()
        }
    }, Wc = function (a) {
        a.i = a.g.createBufferSource();
        a.i.buffer = a.g.createBuffer(1, 1, 22050);
        a.i.connect(a.g.destination);
        a.i.start(0)
    }, Uc = function (a) {
        a.g && (null == a.i ? Wc(a) : void 0 === a.i.playbackState ? Wc(a) : a.i.playbackState !== a.i.PLAYING_STATE && a.i.playbackState !== a.i.FINISHED_STATE && Wc(a))
    };
    Pc.prototype.destroy = function () {
        this.g.close();
        this.g = null
    };
    Pc.prototype.reset = function () {
        for (var a in this.o) this.o[a].s = [];
        for (var b in this.j) J(this.j[b])
    };
    Pc.prototype.isMuted = function () {
        return !1
    };
    var Rc = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode, K = function (a, b) {
            this.S = Xc.bc;
            this.U = a;
            this.H = b;
            this.j = {};
            this.o = this.s = this.g = this.i = null;
            this.v = 0
        }, Sc = function (a, b, c) {
            a.g = b;
            a.s = c
        }, Yc = function (a) {
            if (a.g) {
                var b = 1E3 * a.g.currentTime, c;
                for (c in a.j) {
                    var d = a.j[c];
                    !d.Jc && d.jc + a.H < b && delete a.j[c]
                }
            }
        }, Zc = function (a) {
            !a.i && a.g.createGain && (a.i = a.g.createGain())
        }, $c = function (a, b, c) {
            var d = 0;
            d = void 0 === d ? 0 : d;
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? 0 : c;
            var e = void 0 === e ? !1 : e;
            if (a.g && a.s) {
                Yc(a);
                var f = void 0 === f ? a.g.currentTime + d / 1E3 : f;
                if (!g) {
                    var g = a.g.createBufferSource();
                    g.playbackRate.setValueAtTime(1, a.g.currentTime)
                }
                Zc(a);
                a.o && g.connect(a.o);
                a.i ? (a.o ? a.o.connect(a.i) : g.connect(a.i), a.i.connect(a.s)) : a.o ? a.o.connect(a.s) : g.connect(a.s);
                a.o = null;
                g.loop = b;
                try {
                    g.buffer = a.S.H
                } catch (k) {
                    return
                }
                d = a.U / 1E3;
                var h = a.H / 1E3 / g.playbackRate.value;
                b ? (g.loopStart = d + (e ? c / 1E3 : 0), g.loopEnd = d + h, g.start(f, d + c / 1E3)) : g.start(f, d + c / 1E3, h);
                e = a.v++;
                a.j[e] = {node: g, jc: 1E3 * f - c, Jc: b}
            }
        }, ad = function (a, b) {
            Zc(a);
            a.i &&
            a.i.gain.setValueAtTime(b, a.g.currentTime)
        }, bd = function (a, b) {
            Zc(a);
            a.i && (a.i.gain.setValueAtTime(a.i.gain.value, a.g.currentTime), a.i.gain.exponentialRampToValueAtTime(b, a.g.currentTime + 1))
        }, J = function (a, b) {
            Yc(a);
            if (void 0 !== b) {
                if (a.j[b]) {
                    try {
                        a.j[b].node.stop(0)
                    } catch (e) {
                    }
                    var c = (1E3 * a.g.currentTime - a.j[b].jc) % a.H;
                    delete a.j[b];
                    return [c]
                }
                return []
            }
            c = [];
            for (var d in a.j) c = c.concat(J(a, d));
            return c
        }, cd = document.createElement("audio"),
        dd = "function" == Ba(cd.canPlayType) && "" != cd.canPlayType("audio/mpeg") ?
            ".mp3" : ".ogg", ed = function (a, b) {
            B.call(this, a + b + dd);
            this.o = this.H = null;
            this.g = 0
        };
    t(ed, B);
    ed.prototype.preload = function (a, b) {
        var c = this, d = new Promise(function (f) {
            Ka(c, f)
        });
        a && Ka(this, a);
        if (0 != this.g) return Promise.resolve();
        if (!this.o) return Promise.reject();
        var e = new XMLHttpRequest;
        e.open("GET", this.Kb, !0);
        e.responseType = "arraybuffer";
        e.onload = function () {
            c.o.decodeAudioData(e.response, function (f) {
                f && (c.H = f, c.g = 3, c.i())
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
    var L = function () {
        Pc.call(this, L.i, L.g)
    };
    t(L, Pc);
    L.i = {};
    L.i.bc = new ed("img/halloween-2019/", "sounds");
    var Xc = L.i;
    L.g = {};
    L.g.lc = new K(0, 4768.229);
    L.g.mc = new K(5768.229, 2485.417);
    L.g.nc = new K(9253.646, 6478.854);
    L.g.qc = new K(16732.5, 59076.937);
    L.g.Zb = new K(76809.438, 28800);
    L.g.tc = new K(106609.44, 9078.958);
    L.g.uc = new K(116688.4, 1280);
    L.g.yc = new K(118968.4, 7480.021);
    L.g.zc = new K(127448.42, 4E3);
    L.g.Ac = new K(132448.42, 7111.104);
    L.g.Bc = new K(140559.52, 3250);
    L.g.Cc = new K(144809.52, 3500);
    L.g.Dc = new K(149309.52, 7884.75);
    L.g.Ec = new K(158194.27, 2880);
    L.g.Fc = new K(162074.27, 10102.042);
    L.g.Gc = new K(173176.31, 9000.917);
    y(L);
    var M = L;
    var hd = function (a) {
        var b = new Image;
        b.onerror = b.onload = b.onabort = function () {
            delete fd[gd]
        };
        fd[gd] = b;
        b.src = "/gen_204?atyp=i&ct=doodle&cad=" + a + "&zx=" + z();
        gd++
    }, fd = [], gd = 0;
    var id = function (a) {
        this.j = this.U = this.o = "";
        this.v = null;
        this.s = this.i = "";
        this.H = !1;
        var b;
        a instanceof id ? (this.H = a.H, jd(this, a.o), this.U = a.U, this.j = a.j, kd(this, a.v), this.i = a.i, ld(this, md(a.g)), this.s = a.s) : a && (b = String(a).match(Ac)) ? (this.H = !1, jd(this, b[1] || "", !0), this.U = nd(b[2] || ""), this.j = nd(b[3] || "", !0), kd(this, b[4]), this.i = nd(b[5] || "", !0), ld(this, b[6] || "", !0), this.s = nd(b[7] || "")) : (this.H = !1, this.g = new N(null, this.H))
    };
    id.prototype.toString = function () {
        var a = [], b = this.o;
        b && a.push(od(b, pd, !0), ":");
        var c = this.j;
        if (c || "file" == b) a.push("//"), (b = this.U) && a.push(od(b, pd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.v, null != c && a.push(":", String(c));
        if (c = this.i) this.j && "/" != c.charAt(0) && a.push("/"), a.push(od(c, "/" == c.charAt(0) ? qd : rd, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.s) && a.push("#", od(c, sd));
        return a.join("")
    };
    id.prototype.resolve = function (a) {
        var b = new id(this), c = !!a.o;
        c ? jd(b, a.o) : c = !!a.U;
        c ? b.U = a.U : c = !!a.j;
        c ? b.j = a.j : c = null != a.v;
        var d = a.i;
        if (c) kd(b, a.v); else if (c = !!a.i) {
            if ("/" != d.charAt(0)) if (this.j && !this.i) d = "/" + d; else {
                var e = b.i.lastIndexOf("/");
                -1 != e && (d = b.i.substr(0, e + 1) + d)
            }
            e = d;
            if (".." == e || "." == e) d = ""; else if (C(e, "./") || C(e, "/.")) {
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
        c ? b.i = d : c = "" !== a.g.toString();
        c ? ld(b, md(a.g)) : c = !!a.s;
        c && (b.s = a.s);
        return b
    };
    var jd = function (a, b, c) {
        a.o = c ? nd(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }, kd = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("k`" + b);
            a.v = b
        } else a.v = null
    }, ld = function (a, b, c) {
        b instanceof N ? (a.g = b, td(a.g, a.H)) : (c || (b = od(b, ud)), a.g = new N(b, a.H))
    }, nd = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, od = function (a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, vd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, vd = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, pd = /[#\/\?@]/g, rd = /[#\?:]/g, qd = /[#\?]/g, ud = /[#\?@]/g, sd = /#/g, N = function (a, b) {
        this.i = this.g = null;
        this.j = a || null;
        this.o = !!b
    }, wd = function (a) {
        a.g || (a.g = new H, a.i = 0, a.j && Bc(a.j, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    };
    N.prototype.add = function (a, b) {
        wd(this);
        this.j = null;
        a = xd(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.i += 1;
        return this
    };
    var yd = function (a, b) {
        wd(a);
        b = xd(a, b);
        if (vc(a.g.i, b)) {
            a.j = null;
            a.i -= a.g.get(b).length;
            var c = a.g, d = b;
            vc(c.i, d) && (delete c.i[d], c.j--, c.g.length > 2 * c.j && uc(c))
        }
    }, zd = function (a, b) {
        wd(a);
        b = xd(a, b);
        return vc(a.g.i, b)
    };
    N.prototype.forEach = function (a, b) {
        wd(this);
        this.g.forEach(function (c, d) {
            Na(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    N.prototype.La = function () {
        wd(this);
        for (var a = this.g.Ha(), b = this.g.La(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    N.prototype.Ha = function (a) {
        wd(this);
        var b = [];
        if ("string" === typeof a) zd(this, a) && (b = Ra(b, this.g.get(xd(this, a)))); else {
            a = this.g.Ha();
            for (var c = 0; c < a.length; c++) b = Ra(b, a[c])
        }
        return b
    };
    N.prototype.set = function (a, b) {
        wd(this);
        this.j = null;
        a = xd(this, a);
        zd(this, a) && (this.i -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.i += 1;
        return this
    };
    N.prototype.get = function (a, b) {
        if (!a) return b;
        var c = this.Ha(a);
        return 0 < c.length ? String(c[0]) : b
    };
    N.prototype.toString = function () {
        if (this.j) return this.j;
        if (!this.g) return "";
        for (var a = [], b = this.g.La(), c = 0; c < b.length; c++) {
            var d = b[c], e = encodeURIComponent(String(d));
            d = this.Ha(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.j = a.join("&")
    };
    var md = function (a) {
        var b = new N;
        b.j = a.j;
        a.g && (b.g = new H(a.g), b.i = a.i);
        return b
    }, xd = function (a, b) {
        var c = String(b);
        a.o && (c = c.toLowerCase());
        return c
    }, td = function (a, b) {
        b && !a.o && (wd(a), a.j = null, a.g.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (yd(this, d), yd(this, e), 0 < c.length && (this.j = null, this.g.set(xd(this, e), Sa(c)), this.i += c.length))
        }, a));
        a.o = b
    };
    var O = navigator.userAgent, P = new id(location.href), Ad = C(O, "iPad") || C(O, "iPhone") || C(O, "iPod"),
        Bd = C(O.toLowerCase(), "gsa"), Cd = Bd && Ad, Dd = Bd && !Ad, Ed = C(O, "Gbot"),
        Fd = Ad || C(O, "Android") || C(O, "Mobile") || C(O, "Silk") || C(O, "UCBrowser") || C(O, "UCWEB"),
        Gd = !!document.querySelector("body.hp"), Hd = C(O, "MSIE"), Id = Hd && C(O, "MSIE 8."),
        Jd = C(P.i, "/pages/") && C(P.i, ".html"), Ld = function () {
            return !!document.getElementById("fkbx") || Kd()
        }, Kd = function () {
            return "1" == P.g.get("ntp")
        }, Md = function () {
            return "1" == P.g.get("fpdoodle") && !!document.getElementById("fpdoodle")
        },
        Q = function () {
            return !!document.querySelector("body#iframedoodle")
        };
    var R = function (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            if (a) for (d = 0; d < c.length; d += 2) {
                var e = c[d], f = c[d + 1], g = a.style;
                g && e in g ? g[e] = f : e in a ? a[e] = f : Hd && g && "opacity" == e && (a.zoom = 1, e = (g.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(f)) || (e += "alpha(opacity=" + 100 * f + ")"), g.filter = e)
            }
        }, Nd = self.performance && self.performance.now ? function () {
            return self.performance.now()
        } : z, Pd = function (a) {
            var b = ["McLaren", "Noto Sans"], c, d;
            new Promise(function (f, g) {
                c = f;
                d = g
            });
            if (window.WebFontConfig &&
                b) {
                b = p(b);
                for (var e = b.next(); !e.done; e = b.next()) e = e.value, Od(e) && a && a(e, "")
            } else Ja("WebFontConfig.active", c), Ja("WebFontConfig.inactive", d), Ja("WebFontConfig.google.families", b), a && Ja("WebFontConfig.fontactive", a), a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "" : "") + "img/halloween-2019/webfont.js", a.type = "text/javascript", a.async = "true", (document.getElementById("xjsc") || document.body).appendChild(a)
        }, Od = function (a) {
            a = a.toLowerCase().replace(/ /g,
                "");
            var b = document.documentElement;
            b = b.classList ? b.classList : ("string" == typeof b.className ? b.className : b.getAttribute && b.getAttribute("class") || "").match(/\S+/g) || [];
            for (var c = 0; c < b.length; c++) if (b[c].search("wf-" + a + "-w+-active")) return !0;
            return !1
        }, Qd = ["Moz", "ms", "O", "webkit"], Rd = function (a, b, c) {
            if (a) {
                for (var d = p(Qd), e = d.next(); !e.done; e = d.next()) a.style[e.value + b] = c;
                a.style[b.charAt(0).toLowerCase() + b.substr(1)] = c
            }
        }, Sd = ["", "moz", "ms", "o", "webkit"], Td = function (a, b) {
            if (!a) return null;
            for (var c = p(Sd),
                     d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = b;
                0 < d.length && (e = b.charAt(0).toUpperCase() + b.substr(1));
                d += e;
                if ("undefined" != typeof a[d]) return d
            }
            return null
        }, Ud = function (a, b) {
            var c;
            return (c = window.google && void 0 !== window.google.doodle ? window.google.doodle : null) && void 0 != c[a] ? c[a] : b
        }, Vd = function () {
            var a = Ud("doodle_args", {}).is_dogfood;
            return null != a ? a : !1
        }, Wd = Ud("alt", ""), Xd = Ud("hl", "en"), Yd = Ud("gl", ""),
        Zd = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i.test(Xd),
        ae = function (a, b, c) {
            var d = Math.max(0, c - 230) + (document.querySelector("div.og-pdp") ? 36 : 12);
            R(a, "width", b + "px", "height", c + "px");
            $d(d)
        }, $d = function (a) {
            a += "px";
            var b = document.getElementById("lga");
            b && R(b, "marginBottom", a);
            Ld() || ((b = document.getElementById("searchform")) && R(b, "transform", "translateY(" + a + ")"), a = document.createEvent("UIEvents"), a.initUIEvent("resize", !1, !1, window, 0), window.dispatchEvent(a))
        }, be = null, ce = null, de = null, ee = function () {
            de || (window.google && window.google.kEI && window.google.kEI.length ?
                de = window.google.kEI : Q() && zd(P.g, "ei") && (de = P.g.get("ei")));
            return de
        }, fe = function () {
            if (!be) {
                var a = document.getElementById("hplogoved");
                a ? be = a.getAttribute("data-ved") : Q() && zd(P.g, "ved") && (be = P.g.get("ved"))
            }
            return be
        };
    var ge = function (a, b) {
        this.g = [];
        this.i = [];
        for (var c = p(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = new La(a + e.filename);
            e = e.size;
            this.g.push(d);
            this.i.push(e)
        }
    }, he = function (a) {
        return "number" === typeof a ? a : a[0]
    };
    ge.prototype.preload = function (a, b) {
        var c = this.g[he(a)];
        return (new Promise(function (d) {
            Ka(c, d);
            c.preload()
        })).then(function () {
            return b && b()
        })
    };
    var ie = function (a, b, c) {
        return Promise.all(b.map(function (d) {
            return a.preload(d)
        })).then(function () {
            return c && c()
        })
    };
    ge.prototype.isLoaded = function (a) {
        return this.g[he(a)].isLoaded()
    };
    ge.prototype.hb = function (a) {
        return this.g[he(a)].image
    };
    var je = function (a) {
        return {x: a[1], y: a[2]}
    }, ke = function (a, b, c) {
        c = void 0 === c ? 1 : c;
        var d = b[5] || 1;
        a = a.i[he(b)];
        return c * a[0] / d + "px " + c * a[1] / d + "px"
    }, ne = function () {
        var a = le;
        var b = me, c = document.createElement("div");
        R(c, "position", "absolute");
        Hd && !Id && R(c, "background-color", "rgba(255,255,255,.01)");
        R(c, "userSelect", "none", "MozUserSelect", "none", "webkitUserSelect", "none", "webkitTapHighlightColor", "rgba(0,0,0,0)");
        c.unselectable = "on";
        var d = b[3], e = b[4], f = b[5] || 1;
        f && 1 != f && a.i[he(b)] && (d = Math.floor(d / f), e = Math.floor(e /
            f));
        R(c, "width", d + "px", "height", e + "px");
        var g;
        d = g = void 0 === g ? 1 : g;
        d = void 0 === d ? 1 : d;
        e = b[5] || 1;
        a = [c, "url(" + a.g[he(b)].Kb + ") " + (-(d * b[1] / e) + "px " + -(d * b[2] / e) + "px/") + ke(a, b, g) + " no-repeat", ke(a, b)];
        b = a[0];
        c = a[2];
        R(b, "background", a[1]);
        c && R(b, "backgroundSize", c);
        return b
    };
    var S = function () {
        ge.call(this, "img/halloween-2019/", oe)
    };
    t(S, ge);
    var oe = [{filename: "cta-sprite.png", size: [395, 507]}, {
            filename: "main-sprite.png",
            size: [2498, 2180]
        }, {filename: "treat-unwrap-sprite.png", size: [4427, 849]}, {
            filename: "bat-trick-sprite.png",
            size: [2045, 2496]
        }, {filename: "bat-choice-sprite.png", size: [1928, 229]}, {
            filename: "bat-treat-sprite.png",
            size: [2045, 1305]
        }, {filename: "end-scene-sprite.png", size: [2047, 4298]}, {
            filename: "jaguar-trick-sprite.png",
            size: [2048, 5230]
        }, {filename: "jaguar-treat-sprite.png", size: [1921, 3639]}, {
            filename: "jaguar-choice-sprite.png", size: [1730,
                540]
        }, {filename: "octopus-trick-sprite.png", size: [2048, 7027]}, {
            filename: "octopus-treat-sprite.png",
            size: [2048, 2673]
        }, {filename: "octopus-choice-sprite.png", size: [1085, 380]}, {
            filename: "owl-trick-sprite.png",
            size: [2037, 3364]
        }, {filename: "owl-treat-sprite.png", size: [2047, 1335]}, {
            filename: "owl-choice-sprite.png",
            size: [1842, 441]
        }, {filename: "spider-trick-sprite.png", size: [2048, 5992]}, {
            filename: "spider-treat-sprite.png",
            size: [2048, 652]
        }, {filename: "spider-choice-sprite.png", size: [2047, 1289]}, {
            filename: "wolf-trick-sprite.png",
            size: [2047, 4179]
        }, {filename: "wolf-treat-sprite.png", size: [2047, 889]}, {filename: "wolf-choice-sprite.png", size: [2047, 540]}],
        pe = [1, 2382, 1794, 99, 132], me = [0, 0, 0, 395, 507], qe = [6, 0, 0, 2047, 4298], re = [1, 0, 0, 960, 540],
        se = [1, 963, 0, 960, 540], te = [1, 1926, 0, 440, 423],
        ue = [[1, 2369, 346, 115, 49], [1, 890, 1753, 115, 49], [1, 1008, 1774, 115, 49], [1, 1126, 1774, 115, 49], [1, 1244, 1774, 115, 49], [1, 1362, 1774, 115, 49], [1, 1480, 1774, 115, 49], [1, 0, 1775, 115, 49], [1, 118, 1786, 115, 49], [1, 236, 1786, 115, 49], [1, 354, 1786, 115, 49], [1, 1795, 1794, 115, 49], [1, 1913,
            1794, 115, 49], [1, 2031, 1794, 115, 49], [1, 2149, 1794, 115, 49]],
        ve = [[1, 2369, 0, 128, 170], [1, 2369, 0, 128, 170], [1, 2369, 173, 128, 170], [1, 2369, 173, 128, 170], [1, 710, 1356, 128, 170], [1, 710, 1356, 128, 170], [1, 841, 1356, 128, 170], [1, 841, 1356, 128, 170], [1, 1141, 1391, 128, 170], [1, 1141, 1391, 128, 170], [1, 1272, 1391, 128, 170], [1, 1272, 1391, 128, 170], [1, 1403, 1391, 128, 170], [1, 1403, 1391, 128, 170], [1, 1534, 1391, 128, 170], [1, 1534, 1391, 128, 170], [1, 1665, 1391, 128, 170], [1, 1665, 1391, 128, 170], [1, 0, 1392, 128, 170], [1, 0, 1392, 128, 170]],
        we = [[2, 0, 0, 440, 423],
            [2, 443, 0, 440, 423], [2, 886, 0, 440, 423], [2, 1329, 0, 440, 423], [2, 1772, 0, 440, 423], [2, 2215, 0, 440, 423], [2, 2658, 0, 440, 423], [2, 3101, 0, 440, 423], [2, 3544, 0, 440, 423], [2, 3987, 0, 440, 423], [2, 0, 426, 440, 423], [2, 443, 426, 440, 423], [2, 3544, 0, 440, 423], [2, 886, 426, 440, 423], [2, 1329, 426, 440, 423], [2, 1772, 426, 440, 423], [2, 2215, 426, 440, 423], [2, 2658, 426, 440, 423], [2, 3101, 426, 440, 423], [2, 3544, 426, 440, 423]],
        xe = [[1, 2324, 889, 132, 28], [1, 2324, 889, 132, 28], [1, 1147, 1079, 132, 28], [1, 1147, 1079, 132, 28], [1, 1147, 1110, 132, 28], [1, 1147, 1110, 132, 28],
            [1, 1147, 1141, 132, 28], [1, 1147, 1141, 132, 28], [1, 1147, 1172, 132, 28], [1, 1147, 1172, 132, 28], [1, 1147, 1203, 132, 28], [1, 1147, 1203, 132, 28], [1, 1147, 1234, 132, 28], [1, 1147, 1234, 132, 28], [1, 710, 1325, 132, 28], [1, 710, 1325, 132, 28], [1, 845, 1325, 132, 28], [1, 845, 1325, 132, 28]];
    y(S);
    var ye = function () {
    };
    ye.prototype.hc = function () {
        return !0
    };
    var ze = function (a, b, c, d) {
        this.g = a;
        this.i = b;
        this.j = Math.abs(c);
        this.s = void 0 === d ? !1 : d;
        this.s || (this.g += this.j, this.i += this.j)
    };
    t(ze, ye);
    ze.prototype.moveTo = function (a, b) {
        this.g = a;
        this.i = b;
        this.s || (this.g += this.j, this.i += this.j)
    };
    ze.prototype.contains = function (a, b) {
        return Math.sqrt((this.g - a) * (this.g - a) + (this.i - b) * (this.i - b)) <= this.j
    };
    ze.prototype.o = function (a) {
        a.beginPath();
        a.arc(this.g, this.i, this.j, 0, 2 * Math.PI, !0);
        a.fill();
        a.stroke()
    };/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var Ae = function (a, b) {
        this.H = b ? 1E3 / b : 0;
        this.i = null;
        this.j = a;
        this.s = !1;
        this.g = this.o = 0
    };
    Ae.prototype.reset = function () {
        this.i = null;
        this.s = !1
    };
    Ae.prototype.call = function (a, b) {
        if (0 == this.H) b++; else {
            var c = 0 == this.g ? Date.now() : this.o;
            null == this.i && (this.i = c);
            b = Math.floor((c - this.i) / this.H)
        }
        b >= a && (0 <= this.j ? b = b % (a - this.j) + this.j : (b = a - 1, this.s = !0));
        return b
    };
    var Ce = function (a) {
        a.o += Be.i
    };
    var De = function (a) {
        return new Ae(void 0 === a ? 0 : a, 12)
    };
    var Ee = function (a, b, c, d, e, f, g) {
        this.o = a;
        this.j = b;
        this.S = c;
        this.U = d || {x: 0, y: 0};
        this.V = void 0 === f ? !1 : f;
        this.v = void 0 === g ? !1 : g;
        this.i = -1;
        this.g = 0;
        this.s = e || new Ae(-1, void 0)
    }, Ge = function (a, b) {
        (0 == b || a.v) && Fe(a);
        for (var c = p(a.j.frames[b]), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e[0];
            var f = e[1], g = e[2] + a.U.x, h = e[3] + a.U.y, k = e[4];
            e = e[5];
            a.V && a.o.clearRect(d, f, k, e);
            a.o.drawImage(a.S, g, h, k, e, d, f, k, e)
        }
    };
    Ee.prototype.H = function () {
        this.i > this.g && (this.i = -1);
        for (this.i == this.g && Ge(this, this.g); this.i < this.g;) Ge(this, ++this.i)
    };
    var He = function (a) {
        a.H();
        a.g = a.s.call(a.j.frames.length, a.i)
    }, Fe = function (a) {
        a.o.clearRect(0, 0, a.j.width, a.j.height)
    };
    Ee.prototype.reset = function () {
        Fe(this);
        this.g = 0;
        this.i = -1;
        this.s.reset()
    };
    var Ie = function (a) {
        this.g = a
    };
    t(Ie, ye);
    var T = function (a, b, c, d) {
        return new Ie([a, b, a + c, b, a + c, b + d, a, b + d])
    };
    Ie.prototype.contains = function (a, b) {
        var c = this.g;
        if (6 > c.length) return !1;
        for (var d = !1, e = 0, f = c.length - 2; e < c.length; f = e, e += 2) {
            var g = c[e], h = c[e + 1], k = c[f];
            f = c[f + 1];
            a < g != a < k && b > h + (a - g) * (f - h) / (k - g) && (d = !d)
        }
        return d
    };
    Ie.prototype.o = function (a) {
        a.beginPath();
        for (var b = 0; b < this.g.length; b += 2) a.lineTo(this.g[b], this.g[b + 1]);
        a.lineTo(this.g[0], this.g[1]);
        a.fill();
        a.stroke()
    };
    var Je = [{
        Jb: 19,
        Hb: 20,
        rb: 21,
        Pa: {x: 64, y: 271},
        Ra: [1, 2324, 426, 164, 240],
        ab: {x: 60, y: 269},
        Qa: [[1, 1367, 543, 198, 243], [1, 1568, 543, 198, 243], [1, 883, 587, 198, 243], [1, 1084, 587, 198, 243], [1, 1285, 789, 198, 243], [1, 1486, 789, 198, 243], [1, 1687, 789, 198, 243], [1, 883, 833, 198, 243], [1, 1084, 833, 198, 243], [1, 1888, 936, 198, 243], [1, 1888, 936, 198, 243], [1, 2089, 936, 198, 243], [1, 2290, 936, 198, 243], [1, 1285, 1035, 198, 243], [1, 1486, 1035, 198, 243], [1, 1687, 1035, 198, 243], [1, 0, 1036, 198, 243], [1, 0, 1036, 198, 243], [1, 0, 1036, 198, 243], [1, 201, 1036, 198, 243],
            [1, 402, 1036, 198, 243], [1, 603, 1036, 198, 243], [1, 804, 1079, 198, 243], [1, 804, 1079, 198, 243]],
        vb: 5E3,
        Sa: {x: 122, y: 229},
        Db: [1, 804, 1036, 54, 39],
        Cb: [1, 710, 1282, 54, 39],
        Ab: {x: 92, y: 265},
        Bb: ue,
        Lb: 1,
        yb: T(50, 127, 198, 382),
        Ka: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 0, 0, 0, 960, 540, 0]], [[132, 262, 1950, 0, 97, 210, 0]], [[124, 267, 1562, 191, 105, 206, 0]], [[116, 271, 1334, 187, 113, 203, 0]], [[109, 276, 1090, 182, 121, 199, 0]], [[101, 281, 1821, 0, 128, 194, 0]], [[94, 286, 1547, 0, 136, 190, 0]], [[87, 291, 1261, 0, 142, 186, 0]], [[80, 296, 961, 0, 149, 181, 0]], [[80, 296,
                    1111, 0, 149, 181, 0]], [[87, 291, 1404, 0, 142, 186, 0]], [[94, 286, 1684, 0, 136, 190, 0]], [[101, 281, 961, 182, 128, 194, 0]], [[109, 276, 1212, 187, 121, 199, 0]], [[116, 271, 1448, 191, 113, 203, 0]], [[124, 267, 1668, 191, 105, 206, 0]]]
            }, wa: [21, 0, 0, 2047, 540], bg: "rgba(255,35,175,1)", loop: !0, Ba: 0
        },
        Ma: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 0, 0, 0, 960, 540, 0]], [], [], [], [], [], [], [], [], [[286, 56, 509, 701, 168, 186, 0]], [[289, 53, 340, 697, 168, 189, 0]], [[292, 50, 171, 697, 168, 192, 0], [177, 310, 961, 381, 241, 205, 0]], [[293, 49, 0, 696, 170, 191, 0], [181, 310, 1722, 415,
                    237, 204, 0]], [[139, 262, 1034, 587, 129, 248, 0]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[41, 262, 1853, 620, 188, 218, 0], [232, 454, 2041, 0, 3, 3, 0], [246, 453, 2030, 11, 10, 5, 0], [257, 446, 1365, 491, 18, 11, 0], [279, 49, 1203, 515, 235, 340, 0], [305, 390, 2030, 17, 9, 14, 0], [304, 407, 1372, 453, 28, 15, 0], [327, 469, 2030, 0, 10, 10, 0]], [[363, 310, 678, 701, 54, 169, 0]], [], [], [], [], [[409, 190, 1327, 482, 18, 18, 0], [441, 190, 1346, 482, 18, 18, 0]], [[408, 189, 1287, 482, 19, 19, 0], [441, 189, 1307, 482, 19, 19, 0]], [[408, 189, 1225, 482, 20, 20, 0], [441, 189, 1267, 482,
                    19, 20, 0]], [[407, 188, 2026, 415, 21, 21, 0], [440, 188, 2026, 437, 21, 21, 0]], [[407, 188, 2026, 459, 21, 21, 0], [440, 188, 1372, 469, 21, 21, 0]], [], [], [], [], [], [], [], [[41, 100, 961, 0, 473, 380, 0]], [[348, 122, 1960, 487, 63, 75, 0], [406, 205, 1394, 475, 21, 19, 0], [429, 123, 1960, 415, 65, 71, 0], [439, 205, 1246, 482, 20, 19, 0], [451, 246, 1372, 381, 59, 21, 0]], [[406, 207, 2026, 481, 21, 15, 0], [438, 207, 1203, 482, 21, 15, 0]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[216, 66, 1733, 0, 296, 414, 0]], [[368, 107, 1401, 453, 26, 21, 0], [425, 100, 1647,
                    515, 46, 61, 0]], [[425, 116, 1372, 403, 49, 49, 0]], [], [[41, 415, 1435, 0, 297, 99, 0]], [[177, 415, 1203, 381, 168, 100, 0]], [[267, 64, 1439, 515, 207, 154, 0]], [[265, 62, 208, 541, 206, 155, 0]], [[263, 61, 1647, 620, 205, 156, 0]], [[261, 59, 622, 541, 205, 159, 0]], [[261, 59, 828, 587, 205, 159, 0]], [[263, 61, 1439, 670, 205, 156, 0]], [[265, 62, 415, 541, 206, 155, 0]], [[267, 64, 0, 541, 207, 154, 0]], [], [], [], [], [], [], [], [], [], [], [], [[217, 66, 1435, 100, 286, 414, 0]], [], [], [], [], [], []]
            }, wa: [20, 0, 0, 2047, 889], bg: "rgba(255,35,175,1)", loop: !0, Ba: 0
        },
        Na: {
            ya: {
                width: 960, height: 540,
                frames: [[[306, 163, 1626, 3403, 256, 349, 0]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[0, 170, 752, 449, 30, 86, 0], [306, 163, 781, 3439, 256, 348, 0]], [[0, 170, 752, 536, 30, 86, 0], [56, 89, 1932, 2475, 86, 83, 0], [305, 163, 1354, 3428, 256, 349, 0]], [[56, 89, 1845, 2476, 86, 83, 0], [163, 47, 1104, 2730, 85, 84, 0], [305, 162, 1097, 3361, 256, 350, 0]], [[163, 47, 1104, 2815, 85, 84, 0], [265, 32, 1937, 2301, 87, 84, 0], [306, 159, 524, 3356, 256, 352, 0]], [[265, 32, 1841, 588, 188, 88, 0], [306, 158, 839, 3085, 257, 353, 0]], [[364, 37, 1841, 677, 183, 109, 0], [307, 156, 0, 3106, 256, 356,
                    0]], [[307, 333, 681, 874, 60, 169, 0], [370, 62, 0, 2656, 264, 449, 0]], [[307, 333, 681, 1044, 58, 164, 0], [367, 109, 0, 489, 346, 402, 0]], [[307, 157, 1626, 3047, 259, 355, 0], [631, 186, 1886, 3135, 82, 85, 0], [709, 322, 1104, 2900, 83, 87, 0]], [[307, 158, 842, 2730, 261, 354, 0], [709, 322, 1886, 3047, 83, 87, 0], [781, 443, 1928, 2215, 91, 85, 0]], [[307, 162, 577, 3005, 261, 350, 0], [854, 348, 1937, 2386, 86, 88, 0], [781, 443, 1845, 2301, 91, 85, 0]], [[308, 177, 1104, 3025, 261, 335, 0], [921, 262, 347, 661, 39, 83, 0], [854, 348, 1845, 2387, 86, 88, 0]], [[311, 184, 577, 2675, 264, 329, 0], [921, 262,
                    347, 745, 39, 83, 0]], [[313, 177, 1260, 2259, 292, 336, 0]], [[322, 153, 1749, 1020, 298, 359, 0]], [[336, 138, 1553, 2265, 291, 374, 0]], [[358, 129, 1493, 2640, 272, 385, 0]], [[372, 116, 265, 3056, 258, 398, 0]], [[373, 95, 331, 1293, 318, 418, 0]], [[330, 88, 1163, 0, 375, 425, 0]], [[330, 88, 785, 0, 377, 424, 0]], [[334, 88, 785, 425, 373, 424, 0]], [[334, 88, 1539, 0, 373, 425, 0]], [[458, 272, 2039, 265, 7, 4, 0], [349, 361, 1928, 1967, 114, 123, 0], [541, 123, 2041, 87, 5, 4, 0], [531, 128, 1901, 460, 10, 7, 0], [545, 136, 2041, 92, 5, 4, 0], [542, 216, 2005, 520, 34, 7, 0], [588, 195, 2041, 44, 5, 6, 0], [582,
                    202, 2039, 245, 7, 7, 0]], [[458, 271, 2041, 51, 5, 5, 0], [352, 362, 1934, 1380, 110, 123, 0], [532, 497, 2041, 57, 5, 5, 0], [527, 508, 2041, 21, 6, 4, 0], [541, 123, 2041, 97, 5, 4, 0], [542, 218, 2039, 270, 7, 3, 0], [551, 217, 2041, 117, 5, 3, 0], [557, 216, 1975, 556, 19, 7, 0]], [[416, 362, 1995, 556, 18, 8, 0], [354, 376, 1934, 1504, 99, 109, 0], [458, 271, 2041, 15, 6, 5, 0], [542, 218, 2041, 189, 3, 3, 0], [546, 216, 2005, 528, 28, 6, 0]], [], [[538, 129, 2014, 556, 17, 7, 0], [484, 139, 1901, 546, 71, 9, 0], [565, 185, 2041, 63, 5, 5, 0], [334, 216, 1159, 426, 372, 116, 0], [516, 333, 1901, 426, 10, 33, 0], [524, 372,
                    2041, 193, 3, 3, 0], [459, 390, 2041, 164, 3, 4, 0], [452, 507, 2041, 26, 6, 4, 0]], [[538, 131, 2032, 535, 15, 5, 0], [484, 139, 1973, 546, 71, 9, 0], [565, 185, 2041, 69, 5, 5, 0], [337, 216, 1532, 426, 368, 161, 0], [459, 390, 2041, 169, 3, 4, 0], [532, 497, 2041, 75, 5, 5, 0], [452, 507, 1901, 540, 81, 5, 0]], [[355, 480, 2041, 81, 5, 5, 0], [374, 88, 1006, 1389, 311, 423, 0]], [[355, 88, 1626, 1839, 301, 425, 0], [879, 166, 1886, 3221, 81, 89, 0]], [[355, 88, 1626, 1414, 307, 424, 0], [707, 183, 1841, 922, 98, 82, 0], [879, 166, 1886, 3311, 81, 89, 0]], [[355, 88, 1318, 1414, 307, 425, 0], [707, 183, 1940, 922, 98, 82,
                    0]], [[355, 88, 293, 2630, 283, 425, 0]], [[355, 88, 306, 2205, 292, 424, 0]], [[355, 88, 0, 2231, 292, 424, 0]], [[355, 478, 1901, 565, 16, 7, 0], [465, 171, 2041, 174, 3, 4, 0], [455, 215, 1983, 540, 20, 5, 0], [460, 279, 2041, 31, 5, 12, 0], [482, 145, 2041, 179, 3, 4, 0], [485, 179, 1841, 787, 161, 134, 0], [511, 314, 2041, 0, 6, 7, 0], [516, 323, 2030, 611, 11, 48, 0]], [[465, 171, 2041, 184, 3, 4, 0], [455, 215, 1953, 556, 21, 5, 0], [550, 130, 2041, 130, 4, 4, 0], [579, 261, 2041, 197, 3, 3, 0], [587, 187, 2034, 528, 11, 5, 0]], [[355, 85, 915, 2301, 290, 428, 0]], [[359, 85, 1206, 2596, 286, 428, 0]], [[375, 105, 511,
                    3709, 240, 407, 0]], [[382, 119, 1611, 3753, 229, 393, 0]], [[411, 129, 1841, 3753, 183, 383, 0], [894, 264, 2041, 102, 5, 4, 0]], [[376, 112, 1279, 3778, 218, 401, 0], [894, 264, 2041, 107, 5, 4, 0]], [[376, 112, 1366, 3026, 259, 401, 0]], [[403, 112, 1038, 3712, 240, 400, 0]], [[373, 105, 1766, 2640, 270, 406, 0]], [[355, 94, 1260, 1840, 297, 418, 0], [690, 312, 2041, 135, 4, 4, 0]], [[352, 92, 0, 1810, 305, 420, 0], [690, 312, 2041, 140, 4, 4, 0]], [[350, 92, 681, 1283, 324, 420, 0]], [[350, 94, 347, 874, 333, 418, 0]], [[353, 99, 1087, 975, 330, 413, 0]], [[352, 119, 1418, 1020, 330, 393, 0]], [[352, 91, 0, 892,
                    330, 423, 0]], [[366, 21, 0, 1316, 313, 493, 0]], [[307, 19, 620, 2189, 294, 485, 0]], [[291, 19, 650, 1704, 306, 484, 0]], [[289, 19, 957, 1813, 302, 487, 0]], [[286, 22, 314, 1712, 305, 492, 0]], [[286, 26, 0, 0, 400, 488, 0], [723, 18, 1934, 1614, 92, 78, 0]], [[303, 77, 401, 0, 383, 436, 0], [723, 18, 1934, 1693, 92, 78, 0], [857, 0, 1934, 1772, 84, 57, 0]], [[309, 77, 401, 437, 350, 436, 0], [857, 0, 1901, 482, 103, 57, 0]], [[430, 244, 387, 661, 10, 24, 0], [324, 359, 1928, 2091, 114, 123, 0], [495, 121, 2005, 535, 26, 6, 0], [513, 128, 2041, 145, 4, 4, 0], [518, 134, 2041, 201, 3, 3, 0], [521, 205, 1901, 556, 25,
                    8, 0], [532, 254, 1931, 565, 9, 11, 0], [484, 266, 347, 489, 49, 44, 0], [493, 402, 752, 665, 10, 23, 0], [549, 174, 2039, 253, 7, 5, 0], [556, 197, 1918, 565, 12, 7, 0], [932, 0, 1500, 543, 28, 44, 0]], [[430, 244, 2030, 660, 10, 24, 0], [324, 359, 1928, 1839, 114, 127, 0], [427, 507, 2041, 112, 5, 4, 0], [490, 121, 752, 437, 31, 11, 0], [518, 134, 2041, 205, 3, 3, 0], [521, 205, 1927, 556, 25, 8, 0], [483, 254, 1087, 850, 58, 56, 0], [493, 402, 763, 665, 10, 23, 0], [549, 174, 2039, 259, 7, 5, 0], [556, 199, 1901, 468, 10, 5, 0]], [[332, 81, 752, 850, 334, 432, 0]], [], [], [], [], [[332, 81, 1159, 543, 340, 431, 0]], [], [[332,
                    81, 1500, 588, 340, 431, 0]], [], [[392, 46, 257, 3455, 253, 467, 0]], [[332, 46, 0, 3463, 252, 466, 0]], [[381, 55, 1913, 213, 125, 268, 0], [494, 324, 2032, 556, 13, 54, 0], [514, 124, 2041, 8, 6, 6, 0], [523, 121, 2041, 150, 4, 4, 0], [524, 129, 2041, 160, 4, 3, 0], [524, 133, 2039, 274, 3, 3, 0], [539, 52, 347, 534, 48, 126, 0], [563, 179, 2041, 155, 4, 4, 0], [549, 187, 1970, 564, 16, 9, 0], [544, 201, 752, 623, 21, 41, 0], [551, 243, 2039, 213, 8, 15, 0]], [[379, 56, 1913, 0, 127, 212, 0], [446, 309, 2041, 121, 4, 8, 0], [515, 53, 1970, 3047, 73, 125, 0], [548, 185, 1953, 562, 16, 11, 0], [527, 201, 2005, 482, 37, 37, 0],
                    [549, 239, 2043, 274, 3, 3, 0], [551, 243, 2039, 229, 8, 15, 0]], [], [], [], [], [], [], [], [], [], []]
            }, wa: [19, 0, 0, 2047, 4179], bg: "rgba(252,46,174,1)", loop: !1, Ba: 0
        },
        mb: "Wolf Fact",
        Ib: M.g.Fc,
        Gb: M.g.Gc,
        Va: T(68, 271, 160, 240),
        Ua: {x: 0, y: 540},
        Mb: 1.5,
        $a: "#ce0c94",
        backgroundColor: "#fc2eae",
        nb: "wolf"
    }, {
        Jb: 10,
        Hb: 11,
        rb: 12,
        Pa: {x: 271, y: 105},
        Ra: [1, 1670, 1744, 122, 87],
        ab: {x: 271, y: 105},
        Qa: [[1, 1670, 1564, 122, 87], [1, 1670, 1654, 122, 87], [1, 1795, 1704, 122, 87], [1, 1920, 1704, 122, 87], [1, 2045, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1,
            2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2170, 1704, 122, 87], [1, 2295, 1704, 122, 87], [1, 640, 1739, 122, 87], [1, 765, 1739, 122, 87], [1, 1670, 1564, 122, 87]],
        vb: 12E3,
        Sa: {x: 295, y: 26},
        Db: [1, 2430, 2018, 65, 68],
        Cb: [1, 2430, 2089, 65, 68],
        Ab: {x: 289, y: 61},
        Bb: ue,
        Lb: .8,
        yb: T(265, 95, 138, 104),
        Ka: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[32, 87, 0, 0, 417, 380, 0]], [], [], [], [], [], [], [], [], [[302, 91, 418, 0, 166, 172, 0]], [],
                    [], [[302, 127, 752, 0, 166, 131, 0]], [], [[302, 127, 919, 0, 166, 131, 0]], [], [[302, 91, 585, 0, 166, 172, 0]], [], [], [], [], [], [], [], []]
            }, wa: [12, 0, 0, 1085, 380], bg: "rgba(0,0,0,1)", loop: !0, Ba: 0
        },
        Ma: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 162, 0, 0, 960, 378, 0]], [[0, 396, 948, 478, 12, 6, 0], [16, 392, 1985, 100, 61, 10, 0], [83, 392, 1922, 111, 61, 10, 0], [256, 392, 933, 448, 22, 10, 0], [332, 396, 2026, 487, 13, 6, 0], [352, 392, 1984, 111, 61, 10, 0], [419, 392, 1922, 122, 61, 10, 0], [487, 392, 1984, 199, 60, 10, 0], [554, 392, 1922, 210, 60, 10, 0], [621, 392, 1983, 210, 60, 10, 0], [688,
                    392, 1984, 122, 61, 10, 0], [755, 392, 1922, 133, 61, 10, 0], [823, 392, 1922, 221, 60, 10, 0], [890, 392, 1983, 221, 60, 10, 0], [957, 398, 2044, 214, 3, 4, 0]], [[0, 393, 2029, 309, 18, 9, 0], [22, 162, 1494, 364, 531, 347, 0], [560, 392, 1922, 210, 60, 10, 0], [627, 392, 1983, 210, 60, 10, 0], [694, 392, 1984, 122, 61, 10, 0], [761, 392, 1922, 133, 61, 10, 0], [829, 392, 1922, 221, 60, 10, 0], [896, 392, 1983, 221, 60, 10, 0]], [[0, 393, 933, 419, 24, 9, 0], [28, 392, 1985, 100, 61, 10, 0], [95, 392, 1981, 265, 57, 10, 0], [270, 393, 946, 492, 11, 7, 0], [341, 395, 2026, 440, 16, 7, 0], [364, 392, 1984, 111, 61, 10, 0], [431,
                    392, 1922, 122, 61, 10, 0], [499, 392, 1984, 199, 60, 10, 0], [566, 392, 1922, 210, 60, 10, 0], [633, 392, 1983, 210, 60, 10, 0], [700, 392, 1984, 122, 61, 10, 0], [767, 392, 1922, 133, 61, 10, 0], [835, 392, 1922, 221, 60, 10, 0], [902, 392, 1982, 254, 58, 10, 0]], [[0, 393, 674, 746, 30, 9, 0], [34, 92, 0, 1468, 464, 414, 0], [505, 392, 1984, 199, 60, 10, 0], [572, 392, 1922, 210, 60, 10, 0], [639, 392, 1983, 210, 60, 10, 0], [706, 392, 1984, 122, 61, 10, 0], [773, 392, 1922, 133, 61, 10, 0], [841, 392, 1922, 221, 60, 10, 0], [908, 392, 1976, 309, 52, 10, 0]], [[0, 393, 569, 746, 36, 9, 0], [40, 86, 0, 2264, 397, 409, 0], [443,
                    392, 1922, 122, 61, 10, 0], [511, 392, 1984, 199, 60, 10, 0], [578, 392, 1922, 210, 60, 10, 0], [645, 392, 1983, 210, 60, 10, 0], [712, 392, 1984, 122, 61, 10, 0], [779, 392, 1922, 133, 61, 10, 0], [847, 392, 1922, 221, 60, 10, 0], [914, 392, 1878, 353, 46, 10, 0]], [[0, 393, 1398, 1113, 42, 9, 0], [46, 392, 1980, 287, 56, 10, 0], [127, 392, 1782, 353, 47, 10, 0], [236, 398, 2043, 420, 5, 4, 0], [248, 392, 2015, 821, 28, 10, 0], [324, 392, 530, 746, 38, 8, 0], [382, 392, 1984, 111, 61, 10, 0], [449, 392, 1922, 122, 61, 10, 0], [517, 392, 1984, 199, 60, 10, 0], [584, 392, 1922, 210, 60, 10, 0], [651, 392, 1983, 210, 60, 10, 0],
                    [718, 392, 1984, 122, 61, 10, 0], [785, 392, 1922, 133, 61, 10, 0], [853, 392, 1922, 221, 60, 10, 0], [920, 392, 1907, 1134, 40, 10, 0]], [[0, 86, 921, 2253, 449, 393, 0], [455, 392, 1922, 122, 61, 10, 0], [523, 392, 1984, 199, 60, 10, 0], [590, 392, 1922, 210, 60, 10, 0], [657, 392, 1983, 210, 60, 10, 0], [724, 392, 1984, 122, 61, 10, 0], [791, 392, 1922, 133, 61, 10, 0], [859, 392, 1922, 221, 60, 10, 0], [926, 392, 1936, 1156, 34, 10, 0]], [[0, 104, 465, 2251, 455, 375, 0], [203, 480, 2044, 219, 3, 3, 0], [461, 392, 1922, 122, 61, 10, 0], [529, 392, 1984, 199, 60, 10, 0], [596, 392, 1922, 210, 60, 10, 0], [663, 392, 1983,
                    210, 60, 10, 0], [730, 392, 1984, 122, 61, 10, 0], [797, 392, 1922, 133, 61, 10, 0], [865, 392, 1922, 221, 60, 10, 0], [932, 392, 2015, 832, 28, 10, 0]], [[0, 104, 1395, 1892, 461, 381, 0], [467, 392, 1922, 122, 61, 10, 0], [535, 392, 1984, 199, 60, 10, 0], [602, 392, 1922, 210, 60, 10, 0], [669, 392, 1983, 210, 60, 10, 0], [736, 392, 1984, 122, 61, 10, 0], [803, 392, 1922, 133, 61, 10, 0], [871, 392, 1922, 221, 60, 10, 0], [938, 392, 933, 459, 22, 10, 0]], [[0, 392, 1857, 1892, 185, 11, 0], [233, 392, 1948, 1134, 39, 10, 0], [308, 392, 933, 438, 23, 9, 0], [339, 392, 961, 353, 621, 10, 0]], [[0, 395, 2034, 298, 13, 7, 0],
                    [16, 113, 1398, 1123, 465, 372, 0], [487, 392, 1984, 133, 61, 10, 0], [554, 392, 1922, 144, 61, 10, 0], [621, 392, 1984, 144, 61, 10, 0], [688, 392, 1922, 67, 62, 10, 0], [755, 392, 1986, 12, 62, 10, 0], [823, 392, 1922, 155, 61, 10, 0], [890, 392, 1984, 155, 61, 10, 0], [957, 398, 2044, 214, 3, 4, 0]], [[0, 393, 2027, 331, 19, 9, 0], [23, 392, 1985, 100, 61, 10, 0], [90, 392, 1922, 166, 61, 10, 0], [157, 392, 2015, 744, 31, 10, 0], [261, 392, 933, 470, 14, 9, 0], [334, 393, 2026, 363, 18, 9, 0], [359, 392, 1984, 111, 61, 10, 0], [426, 392, 1922, 122, 61, 10, 0], [494, 392, 1984, 199, 60, 10, 0], [561, 392, 1922, 210, 60, 10,
                    0], [628, 392, 1983, 210, 60, 10, 0], [695, 392, 1984, 122, 61, 10, 0], [762, 392, 1922, 133, 61, 10, 0], [830, 392, 1922, 221, 60, 10, 0], [897, 392, 1983, 221, 60, 10, 0]], [[0, 393, 933, 379, 26, 9, 0], [29, 122, 466, 1112, 465, 386, 0], [500, 392, 1984, 133, 61, 10, 0], [567, 392, 1922, 144, 61, 10, 0], [634, 392, 1984, 144, 61, 10, 0], [701, 392, 1922, 67, 62, 10, 0], [768, 392, 1986, 12, 62, 10, 0], [836, 392, 1922, 155, 61, 10, 0], [903, 392, 1922, 276, 57, 10, 0]], [[0, 393, 2015, 734, 32, 9, 0], [36, 392, 1985, 100, 61, 10, 0], [103, 392, 1984, 166, 61, 10, 0], [238, 397, 2039, 265, 9, 5, 0], [308, 392, 2026, 400, 17,
                    10, 0], [350, 395, 2026, 458, 15, 7, 0], [372, 392, 1984, 111, 61, 10, 0], [439, 392, 1922, 122, 61, 10, 0], [507, 392, 1984, 199, 60, 10, 0], [574, 392, 1922, 210, 60, 10, 0], [641, 392, 1983, 210, 60, 10, 0], [708, 392, 1984, 122, 61, 10, 0], [775, 392, 1922, 133, 61, 10, 0], [843, 392, 1922, 221, 60, 10, 0], [910, 392, 1922, 331, 50, 10, 0]], [[0, 393, 1441, 1113, 39, 9, 0], [42, 126, 932, 1113, 465, 385, 0], [513, 392, 1984, 133, 61, 10, 0], [580, 392, 1922, 144, 61, 10, 0], [647, 392, 1984, 144, 61, 10, 0], [714, 392, 1922, 67, 62, 10, 0], [781, 392, 1986, 12, 62, 10, 0], [849, 392, 1922, 155, 61, 10, 0], [916, 392, 466,
                    1099, 44, 10, 0]], [[0, 393, 466, 1089, 45, 9, 0], [49, 392, 1985, 100, 61, 10, 0], [116, 392, 1975, 330, 51, 10, 0], [341, 392, 2043, 430, 5, 3, 0], [372, 398, 2040, 479, 6, 4, 0], [385, 392, 1984, 111, 61, 10, 0], [452, 392, 1922, 122, 61, 10, 0], [520, 392, 1984, 199, 60, 10, 0], [587, 392, 1922, 210, 60, 10, 0], [654, 392, 1983, 210, 60, 10, 0], [721, 392, 1984, 122, 61, 10, 0], [788, 392, 1922, 133, 61, 10, 0], [856, 392, 1922, 221, 60, 10, 0], [923, 392, 1864, 1145, 37, 10, 0]], [[0, 101, 1494, 712, 520, 410, 0], [526, 392, 1984, 133, 61, 10, 0], [593, 392, 1922, 144, 61, 10, 0], [660, 392, 1984, 144, 61, 10, 0], [727,
                    392, 1922, 67, 62, 10, 0], [794, 392, 1986, 12, 62, 10, 0], [862, 392, 1922, 155, 61, 10, 0], [929, 392, 2015, 755, 31, 10, 0]], [[0, 393, 1922, 265, 58, 10, 0], [62, 392, 1985, 100, 61, 10, 0], [129, 392, 1902, 1145, 37, 10, 0], [198, 392, 2015, 810, 29, 10, 0], [251, 398, 2040, 484, 6, 4, 0], [264, 398, 2041, 474, 7, 4, 0], [300, 392, 933, 397, 24, 10, 0], [331, 398, 2043, 425, 5, 4, 0], [360, 392, 2015, 766, 31, 10, 0], [398, 392, 1984, 111, 61, 10, 0], [465, 392, 1922, 122, 61, 10, 0], [533, 392, 1984, 199, 60, 10, 0], [600, 392, 1922, 210, 60, 10, 0], [667, 392, 1983, 210, 60, 10, 0], [734, 392, 1984, 122, 61, 10, 0], [801,
                    392, 1922, 133, 61, 10, 0], [869, 392, 1922, 221, 60, 10, 0], [936, 392, 933, 408, 24, 10, 0]], [[4, 101, 0, 698, 529, 369, 0], [539, 392, 1984, 133, 61, 10, 0], [606, 392, 1922, 144, 61, 10, 0], [673, 392, 1984, 144, 61, 10, 0], [740, 392, 1922, 67, 62, 10, 0], [807, 392, 1986, 12, 62, 10, 0], [875, 392, 1922, 155, 61, 10, 0], [942, 393, 2026, 373, 18, 9, 0]], [[0, 392, 1922, 0, 71, 11, 0], [75, 392, 1922, 177, 61, 10, 0], [161, 392, 1864, 1123, 44, 10, 0], [247, 392, 2026, 392, 18, 7, 0], [278, 392, 1830, 353, 47, 10, 0], [359, 392, 1684, 353, 48, 10, 0], [411, 392, 1864, 1134, 42, 10, 0], [478, 392, 1922, 12, 63, 10, 0], [546,
                    392, 1986, 23, 62, 10, 0], [613, 392, 1986, 34, 62, 10, 0], [680, 392, 1922, 23, 63, 10, 0], [747, 392, 1922, 34, 63, 10, 0], [814, 392, 1922, 45, 63, 10, 0], [882, 392, 1986, 45, 62, 10, 0], [949, 395, 933, 494, 11, 7, 0]], [[0, 396, 948, 478, 12, 6, 0], [16, 101, 1005, 756, 466, 356, 0], [487, 392, 1984, 199, 60, 10, 0], [554, 392, 1922, 210, 60, 10, 0], [621, 392, 1983, 210, 60, 10, 0], [688, 392, 1984, 122, 61, 10, 0], [755, 392, 1922, 133, 61, 10, 0], [823, 392, 1922, 221, 60, 10, 0], [890, 392, 1983, 221, 60, 10, 0], [957, 398, 2044, 214, 3, 4, 0]], [[0, 393, 2029, 309, 18, 9, 0], [22, 392, 1985, 100, 61, 10, 0], [89, 392,
                    1909, 1123, 44, 10, 0], [162, 392, 1971, 1156, 34, 10, 0], [239, 392, 466, 1078, 45, 10, 0], [291, 392, 2020, 352, 27, 10, 0], [358, 392, 1984, 111, 61, 10, 0], [425, 392, 1984, 177, 61, 10, 0], [493, 392, 1984, 199, 60, 10, 0], [560, 392, 1922, 210, 60, 10, 0], [627, 392, 1983, 210, 60, 10, 0], [694, 392, 1984, 122, 61, 10, 0], [761, 392, 1922, 133, 61, 10, 0], [829, 392, 1922, 221, 60, 10, 0], [896, 392, 1983, 221, 60, 10, 0]], [[0, 393, 933, 419, 24, 9, 0], [28, 103, 1398, 1496, 464, 395, 0], [499, 392, 1984, 199, 60, 10, 0], [566, 392, 1922, 210, 60, 10, 0], [633, 392, 1983, 210, 60, 10, 0], [700, 392, 1984, 122, 61, 10,
                    0], [767, 392, 1922, 133, 61, 10, 0], [835, 392, 1922, 221, 60, 10, 0], [902, 392, 1982, 254, 58, 10, 0]], [[0, 393, 674, 746, 30, 9, 0], [34, 392, 1985, 100, 61, 10, 0], [101, 392, 1980, 276, 57, 10, 0], [207, 393, 2039, 271, 8, 6, 0], [256, 392, 606, 746, 33, 9, 0], [313, 392, 1973, 341, 50, 10, 0], [370, 392, 1984, 111, 61, 10, 0], [437, 392, 1922, 122, 61, 10, 0], [505, 392, 1984, 199, 60, 10, 0], [572, 392, 1922, 210, 60, 10, 0], [639, 392, 1983, 210, 60, 10, 0], [706, 392, 1984, 122, 61, 10, 0], [773, 392, 1922, 133, 61, 10, 0], [841, 392, 1922, 221, 60, 10, 0], [908, 392, 1976, 309, 52, 10, 0]], [[0, 393, 569, 746, 36,
                    9, 0], [40, 119, 465, 1499, 464, 385, 0], [511, 392, 1984, 199, 60, 10, 0], [578, 392, 1922, 210, 60, 10, 0], [645, 392, 1983, 210, 60, 10, 0], [712, 392, 1984, 122, 61, 10, 0], [779, 392, 1922, 133, 61, 10, 0], [847, 392, 1922, 221, 60, 10, 0], [914, 392, 1878, 353, 46, 10, 0]], [[0, 393, 1398, 1113, 42, 9, 0], [46, 392, 1985, 100, 61, 10, 0], [113, 392, 1922, 166, 61, 10, 0], [223, 394, 2026, 383, 18, 8, 0], [248, 394, 2026, 411, 17, 8, 0], [295, 395, 2041, 254, 6, 6, 0], [304, 399, 2044, 223, 3, 3, 0], [329, 392, 1925, 353, 46, 10, 0], [382, 392, 1984, 111, 61, 10, 0], [449, 392, 1922, 122, 61, 10, 0], [517, 392, 1984, 199,
                    60, 10, 0], [584, 392, 1922, 210, 60, 10, 0], [651, 392, 1983, 210, 60, 10, 0], [718, 392, 1984, 122, 61, 10, 0], [785, 392, 1922, 133, 61, 10, 0], [853, 392, 1922, 221, 60, 10, 0], [920, 392, 1907, 1134, 40, 10, 0]], [[0, 393, 1733, 353, 48, 9, 0], [52, 120, 930, 1499, 464, 384, 0], [523, 392, 1984, 199, 60, 10, 0], [590, 392, 1922, 210, 60, 10, 0], [657, 392, 1983, 210, 60, 10, 0], [724, 392, 1984, 122, 61, 10, 0], [791, 392, 1922, 133, 61, 10, 0], [859, 392, 1922, 221, 60, 10, 0], [926, 392, 1936, 1156, 34, 10, 0]], [[0, 393, 1979, 298, 54, 10, 0], [58, 392, 1985, 100, 61, 10, 0], [125, 392, 1988, 1134, 38, 10, 0], [328,
                    392, 1983, 243, 59, 10, 0], [394, 392, 1984, 111, 61, 10, 0], [461, 392, 1922, 122, 61, 10, 0], [529, 392, 1984, 199, 60, 10, 0], [596, 392, 1922, 210, 60, 10, 0], [663, 392, 1983, 210, 60, 10, 0], [730, 392, 1984, 122, 61, 10, 0], [797, 392, 1922, 133, 61, 10, 0], [865, 392, 1922, 221, 60, 10, 0], [932, 392, 2015, 832, 28, 10, 0]], [[0, 393, 1922, 232, 60, 10, 0], [64, 392, 1985, 100, 61, 10, 0], [131, 392, 2015, 777, 31, 10, 0], [333, 392, 1983, 232, 60, 10, 0], [400, 392, 1984, 111, 61, 10, 0], [467, 392, 1922, 122, 61, 10, 0], [535, 392, 1984, 199, 60, 10, 0], [602, 392, 1922, 210, 60, 10, 0], [669, 392, 1983, 210, 60,
                    10, 0], [736, 392, 1984, 122, 61, 10, 0], [803, 392, 1922, 133, 61, 10, 0], [871, 392, 1922, 221, 60, 10, 0], [938, 392, 933, 459, 22, 10, 0]], [[0, 151, 961, 0, 960, 352, 0]], [[0, 395, 2034, 298, 13, 7, 0], [16, 392, 1986, 56, 62, 10, 0], [83, 392, 1985, 67, 62, 10, 0], [150, 392, 2015, 712, 32, 10, 0], [268, 396, 2038, 278, 8, 6, 0], [335, 397, 945, 500, 11, 5, 0], [352, 392, 1922, 78, 62, 10, 0], [419, 392, 1985, 78, 62, 10, 0], [487, 392, 1984, 133, 61, 10, 0], [554, 392, 1922, 144, 61, 10, 0], [621, 392, 1984, 144, 61, 10, 0], [688, 392, 1922, 67, 62, 10, 0], [755, 392, 1986, 12, 62, 10, 0], [823, 392, 1922, 155, 61, 10,
                    0], [890, 392, 1984, 155, 61, 10, 0], [957, 398, 2044, 214, 3, 4, 0]], [[0, 393, 2027, 331, 19, 9, 0], [23, 185, 0, 379, 531, 318, 0], [561, 392, 1922, 210, 60, 10, 0], [628, 392, 1983, 210, 60, 10, 0], [695, 392, 1984, 122, 61, 10, 0], [762, 392, 1922, 133, 61, 10, 0], [830, 392, 1922, 221, 60, 10, 0], [897, 392, 1983, 221, 60, 10, 0]], [[0, 393, 933, 379, 26, 9, 0], [29, 112, 961, 364, 532, 391, 0], [567, 392, 1922, 144, 61, 10, 0], [634, 392, 1984, 144, 61, 10, 0], [701, 392, 1922, 67, 62, 10, 0], [768, 392, 1986, 12, 62, 10, 0], [836, 392, 1922, 155, 61, 10, 0], [903, 392, 1922, 276, 57, 10, 0]], [[0, 393, 2015, 734, 32,
                    9, 0], [36, 392, 1985, 100, 61, 10, 0], [103, 392, 1922, 166, 61, 10, 0], [170, 392, 1864, 1156, 35, 10, 0], [239, 395, 948, 470, 12, 7, 0], [342, 392, 2026, 420, 16, 9, 0], [372, 392, 1922, 188, 61, 10, 0], [439, 392, 1922, 122, 61, 10, 0], [507, 392, 1984, 199, 60, 10, 0], [574, 392, 1922, 210, 60, 10, 0], [641, 392, 1983, 210, 60, 10, 0], [708, 392, 1984, 122, 61, 10, 0], [775, 392, 1922, 133, 61, 10, 0], [843, 392, 1922, 221, 60, 10, 0], [910, 392, 1922, 331, 50, 10, 0]], [[0, 393, 1441, 1113, 39, 9, 0], [42, 85, 0, 1068, 465, 399, 0], [513, 392, 1984, 133, 61, 10, 0], [580, 392, 1922, 144, 61, 10, 0], [647, 392, 1984, 144,
                    61, 10, 0], [714, 392, 1922, 67, 62, 10, 0], [781, 392, 1986, 12, 62, 10, 0], [849, 392, 1922, 155, 61, 10, 0], [916, 392, 466, 1099, 44, 10, 0]], [[0, 393, 466, 1089, 45, 9, 0], [49, 81, 1371, 2274, 397, 395, 0], [452, 392, 1922, 122, 61, 10, 0], [520, 392, 1984, 199, 60, 10, 0], [587, 392, 1922, 210, 60, 10, 0], [654, 392, 1983, 210, 60, 10, 0], [721, 392, 1984, 122, 61, 10, 0], [788, 392, 1922, 133, 61, 10, 0], [856, 392, 1922, 221, 60, 10, 0], [923, 392, 1864, 1145, 37, 10, 0]], [[0, 393, 1975, 320, 52, 9, 0], [55, 392, 1986, 56, 62, 10, 0], [122, 392, 1922, 89, 62, 10, 0], [207, 392, 2038, 285, 8, 5, 0], [216, 392, 2044,
                    227, 3, 3, 0], [281, 392, 2043, 434, 5, 3, 0], [329, 392, 1900, 1156, 35, 10, 0], [374, 396, 2026, 494, 11, 6, 0], [392, 398, 2044, 231, 3, 3, 0], [409, 392, 1954, 1123, 44, 10, 0], [458, 392, 1985, 78, 62, 10, 0], [526, 392, 1984, 133, 61, 10, 0], [593, 392, 1922, 144, 61, 10, 0], [660, 392, 1984, 144, 61, 10, 0], [727, 392, 1922, 67, 62, 10, 0], [794, 392, 1986, 12, 62, 10, 0], [862, 392, 1922, 155, 61, 10, 0], [929, 392, 2015, 755, 31, 10, 0]], [[0, 393, 1922, 265, 58, 10, 0], [59, 81, 532, 379, 400, 366, 0], [465, 392, 1922, 122, 61, 10, 0], [533, 392, 1984, 199, 60, 10, 0], [600, 392, 1922, 210, 60, 10, 0], [667, 392, 1983,
                    210, 60, 10, 0], [734, 392, 1984, 122, 61, 10, 0], [801, 392, 1922, 133, 61, 10, 0], [869, 392, 1922, 221, 60, 10, 0], [936, 392, 933, 408, 24, 10, 0]], [[4, 393, 1984, 188, 61, 10, 0], [68, 392, 1986, 56, 62, 10, 0], [135, 392, 2015, 723, 32, 10, 0], [281, 392, 933, 389, 25, 7, 0], [368, 392, 2015, 788, 30, 10, 0], [414, 392, 947, 485, 12, 6, 0], [430, 392, 1978, 1145, 36, 10, 0], [471, 392, 1985, 78, 62, 10, 0], [539, 392, 1984, 133, 61, 10, 0], [606, 392, 1922, 144, 61, 10, 0], [673, 392, 1984, 144, 61, 10, 0], [740, 392, 1922, 67, 62, 10, 0], [807, 392, 1986, 12, 62, 10, 0], [875, 392, 1922, 155, 61, 10, 0], [942, 393, 2026,
                    373, 18, 9, 0]], [[0, 89, 530, 756, 474, 355, 0], [478, 392, 1922, 56, 63, 10, 0], [546, 392, 1986, 23, 62, 10, 0], [613, 392, 1986, 34, 62, 10, 0], [680, 392, 1922, 23, 63, 10, 0], [747, 392, 1922, 34, 63, 10, 0], [814, 392, 1922, 45, 63, 10, 0], [882, 392, 1986, 45, 62, 10, 0], [949, 395, 933, 494, 11, 7, 0]], [[0, 395, 2034, 298, 13, 7, 0], [16, 392, 1986, 56, 62, 10, 0], [83, 392, 1985, 67, 62, 10, 0], [150, 397, 933, 488, 12, 5, 0], [196, 394, 2037, 291, 7, 5, 0], [285, 395, 2026, 466, 15, 7, 0], [329, 393, 2044, 235, 3, 3, 0], [356, 398, 2044, 239, 3, 3, 0], [365, 392, 1634, 353, 49, 10, 0], [424, 392, 1922, 287, 57, 10, 0],
                    [487, 392, 1984, 133, 61, 10, 0], [554, 392, 1922, 144, 61, 10, 0], [621, 392, 1984, 144, 61, 10, 0], [688, 392, 1922, 67, 62, 10, 0], [755, 392, 1986, 12, 62, 10, 0], [823, 392, 1922, 155, 61, 10, 0], [890, 392, 1984, 155, 61, 10, 0], [957, 398, 2044, 214, 3, 4, 0]], [[0, 393, 2027, 331, 19, 9, 0], [23, 93, 465, 1885, 464, 365, 0], [494, 392, 1984, 199, 60, 10, 0], [561, 392, 1922, 210, 60, 10, 0], [628, 392, 1983, 210, 60, 10, 0], [695, 392, 1984, 122, 61, 10, 0], [762, 392, 1922, 133, 61, 10, 0], [830, 392, 1922, 221, 60, 10, 0], [897, 392, 1983, 221, 60, 10, 0]], [[0, 393, 933, 379, 26, 9, 0], [29, 392, 1986, 56, 62, 10,
                    0], [96, 392, 1985, 67, 62, 10, 0], [197, 392, 2026, 479, 13, 7, 0], [279, 395, 933, 480, 13, 7, 0], [298, 399, 2044, 210, 4, 3, 0], [328, 392, 933, 429, 24, 8, 0], [375, 392, 1922, 320, 52, 10, 0], [432, 392, 1985, 78, 62, 10, 0], [500, 392, 1984, 133, 61, 10, 0], [567, 392, 1922, 144, 61, 10, 0], [634, 392, 1984, 144, 61, 10, 0], [701, 392, 1922, 67, 62, 10, 0], [768, 392, 1986, 12, 62, 10, 0], [836, 392, 1922, 155, 61, 10, 0], [903, 392, 1922, 276, 57, 10, 0]], [[0, 393, 640, 746, 33, 9, 0], [36, 392, 1986, 56, 62, 10, 0], [103, 392, 1922, 199, 61, 10, 0], [197, 392, 2026, 474, 14, 4, 0], [279, 392, 2028, 320, 20, 10, 0], [328,
                    392, 705, 746, 27, 7, 0], [374, 392, 1922, 243, 60, 10, 0], [439, 392, 1985, 78, 62, 10, 0], [507, 392, 1984, 133, 61, 10, 0], [574, 392, 1922, 144, 61, 10, 0], [641, 392, 1984, 144, 61, 10, 0], [708, 392, 1922, 67, 62, 10, 0], [775, 392, 1986, 12, 62, 10, 0], [843, 392, 1922, 155, 61, 10, 0], [910, 392, 1922, 342, 50, 10, 0]], [[0, 393, 1441, 1113, 39, 9, 0], [43, 98, 0, 1883, 464, 380, 0], [514, 392, 1984, 199, 60, 10, 0], [581, 392, 1922, 210, 60, 10, 0], [648, 392, 1983, 210, 60, 10, 0], [715, 392, 1984, 122, 61, 10, 0], [782, 392, 1922, 133, 61, 10, 0], [850, 392, 1922, 221, 60, 10, 0], [917, 392, 1999, 1123, 43, 10, 0]],
                    [[0, 393, 466, 1068, 46, 9, 0], [49, 392, 1986, 56, 62, 10, 0], [116, 392, 1922, 298, 56, 10, 0], [217, 392, 2043, 243, 3, 3, 0], [292, 393, 2026, 430, 16, 9, 0], [333, 392, 1973, 352, 46, 10, 0], [385, 392, 1985, 89, 62, 10, 0], [452, 392, 1985, 78, 62, 10, 0], [520, 392, 1984, 133, 61, 10, 0], [587, 392, 1922, 144, 61, 10, 0], [654, 392, 1984, 144, 61, 10, 0], [721, 392, 1922, 67, 62, 10, 0], [788, 392, 1986, 12, 62, 10, 0], [856, 392, 1922, 155, 61, 10, 0], [923, 392, 1940, 1145, 37, 10, 0]], [[0, 393, 1994, 0, 53, 10, 0], [56, 392, 1986, 56, 62, 10, 0], [123, 392, 1583, 353, 50, 10, 0], [214, 392, 2040, 489, 6, 4, 0], [294,
                        392, 2026, 448, 15, 9, 0], [333, 392, 1922, 309, 53, 10, 0], [392, 392, 1922, 100, 62, 10, 0], [459, 392, 1985, 78, 62, 10, 0], [527, 392, 1984, 133, 61, 10, 0], [594, 392, 1922, 144, 61, 10, 0], [661, 392, 1984, 144, 61, 10, 0], [728, 392, 1922, 67, 62, 10, 0], [795, 392, 1986, 12, 62, 10, 0], [863, 392, 1922, 155, 61, 10, 0], [930, 392, 2015, 799, 30, 10, 0]], [[0, 393, 1922, 254, 59, 10, 0], [63, 118, 930, 1884, 464, 368, 0], [534, 392, 1984, 199, 60, 10, 0], [601, 392, 1922, 210, 60, 10, 0], [668, 392, 1983, 210, 60, 10, 0], [735, 392, 1984, 122, 61, 10, 0], [802, 392, 1922, 133, 61, 10, 0], [870, 392, 1922, 221, 60, 10,
                        0], [937, 392, 2024, 341, 23, 10, 0]]]
            }, wa: [11, 0, 0, 2048, 2673], bg: "rgba(0,0,0,1)", loop: !0, Ba: 0
        },
        Na: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[284, 83, 419, 3556, 417, 379, 0], [702, 223, 2026, 1310, 20, 237, 0], [723, 245, 2E3, 1691, 20, 215, 0], [746, 266, 2021, 718, 20, 194, 0]], [[297, 83, 403, 5813, 402, 372, 0]], [[295, 82, 1226, 5473, 404, 373, 0]], [[294, 81, 1631, 5846, 398, 374, 0]], [[282, 80, 806, 5962, 397, 374, 0]], [[271, 80, 1241, 5099, 405, 373, 0]], [[271, 79, 0, 5054, 409, 373, 0]], [[269, 79, 416, 4311, 415, 373, 0]], [[269, 80, 1250, 4340, 415, 373, 0]], [[268, 80, 1284, 3212,
                    418, 374, 0]], [[268, 81, 0, 2803, 428, 374, 0]], [[271, 82, 0, 3178, 425, 373, 0]], [[278, 83, 1255, 3967, 416, 372, 0]], [[292, 83, 1631, 5473, 403, 372, 0]], [[297, 82, 0, 5802, 402, 373, 0]], [[295, 81, 406, 5438, 404, 374, 0]], [[294, 80, 1214, 5847, 398, 374, 0]], [[282, 80, 0, 6176, 397, 373, 0]], [[271, 79, 820, 5212, 405, 373, 0]], [[271, 79, 410, 5064, 409, 373, 0]], [[269, 80, 832, 4463, 415, 373, 0]], [[269, 80, 834, 4088, 415, 374, 0]], [[268, 81, 852, 3333, 418, 374, 0]], [[268, 82, 429, 2808, 428, 373, 0]], [[271, 83, 1393, 2459, 430, 379, 0], [702, 223, 2026, 1548, 20, 237, 0], [723, 245, 1483, 1695,
                    20, 215, 0], [746, 266, 2021, 1786, 20, 194, 0]], [[279, 83, 983, 2077, 467, 379, 0], [747, 266, 2019, 58, 22, 194, 0]], [[287, 82, 0, 2073, 488, 380, 0]], [[292, 81, 992, 1695, 490, 381, 0]], [[300, 80, 0, 1690, 492, 382, 0]], [[310, 80, 498, 1660, 493, 382, 0]], [[321, 79, 1012, 1311, 495, 383, 0]], [[332, 79, 0, 1306, 497, 383, 0]], [[333, 80, 0, 923, 509, 382, 0]], [[0, 85, 1485, 6860, 166, 156, 0], [355, 80, 510, 1277, 501, 382, 0]], [[0, 85, 979, 6494, 179, 157, 0], [359, 81, 0, 541, 510, 381, 0]], [[10, 87, 1796, 6221, 182, 157, 0], [376, 82, 1022, 930, 506, 380, 0]], [[23, 89, 1162, 6380, 181, 157, 0], [384,
                    83, 511, 897, 510, 379, 0]], [[35, 91, 1526, 6380, 179, 158, 0], [399, 83, 1529, 930, 505, 379, 0]], [[45, 93, 796, 6495, 178, 157, 0], [417, 82, 1529, 1310, 496, 380, 0]], [[54, 93, 1344, 6536, 176, 157, 0], [431, 81, 493, 2043, 489, 381, 0]], [[61, 91, 1706, 6536, 173, 158, 0], [438, 80, 1483, 2076, 486, 382, 0]], [[65, 89, 1159, 6538, 170, 157, 0], [442, 80, 489, 2425, 461, 382, 0], [905, 266, 2019, 253, 21, 194, 0]], [[66, 87, 680, 6653, 169, 157, 0], [454, 79, 1647, 5099, 398, 373, 0]], [[66, 85, 1330, 6694, 169, 157, 0], [442, 79, 398, 6186, 397, 373, 0]], [[66, 85, 0, 6710, 169, 156, 0], [431, 80, 0, 5428, 405,
                    373, 0]], [[66, 85, 340, 6719, 169, 156, 0], [431, 80, 831, 4837, 409, 374, 0]], [[66, 86, 0, 6550, 169, 159, 0], [429, 81, 0, 4305, 415, 374, 0]], [[66, 90, 1521, 6539, 169, 162, 0], [429, 82, 0, 4680, 415, 373, 0]], [[67, 98, 1670, 6853, 168, 174, 0], [428, 83, 0, 3552, 418, 372, 0]], [[60, 117, 1824, 2701, 196, 166, 0], [428, 83, 1393, 2839, 428, 372, 0]], [[60, 106, 1824, 2523, 196, 177, 0], [431, 82, 426, 3182, 425, 373, 0]], [[62, 94, 1822, 2868, 192, 176, 0], [438, 81, 417, 3936, 416, 374, 0]], [[63, 88, 1666, 4371, 188, 167, 0], [442, 79, 1248, 4714, 413, 384, 0]], [[65, 85, 1822, 3045, 184, 161, 0], [430, 54,
                    858, 2922, 425, 410, 0]], [[66, 82, 1666, 4539, 183, 159, 0], [430, 0, 951, 2457, 441, 464, 0]], [[66, 81, 1204, 6222, 182, 157, 0], [431, 0, 1482, 465, 516, 464, 0]], [[66, 81, 979, 6337, 182, 156, 0], [431, 0, 1498, 0, 520, 464, 0]], [[66, 81, 1666, 4699, 182, 158, 0], [440, 0, 961, 433, 520, 463, 0]], [[66, 83, 1849, 4849, 182, 158, 0], [763, 0, 1824, 2459, 197, 63, 0], [441, 84, 0, 3925, 416, 379, 0]], [[66, 86, 1662, 4858, 182, 158, 0], [442, 84, 1271, 3587, 417, 379, 0]], [[66, 89, 1613, 6221, 182, 158, 0], [442, 84, 837, 3708, 417, 379, 0]], [[66, 92, 1387, 6222, 182, 157, 0], [442, 85, 416, 4685, 414, 378, 0]],
                    [[66, 94, 796, 6337, 182, 157, 0], [437, 88, 811, 5586, 402, 375, 0]], [[66, 95, 1796, 6379, 182, 156, 0], [437, 101, 511, 541, 379, 337, 0]], [[66, 92, 1850, 4690, 183, 158, 0], [443, 124, 1689, 3898, 336, 253, 0]], [[66, 88, 1855, 4371, 184, 160, 0], [440, 134, 1703, 3212, 339, 254, 0]], [[66, 88, 1855, 4532, 184, 157, 0], [424, 84, 0, 2454, 451, 348, 0]], [[66, 87, 1344, 6380, 181, 155, 0], [424, 0, 961, 0, 536, 432, 0]], [[66, 86, 1880, 6536, 167, 155, 0], [469, 0, 1508, 1691, 491, 384, 0]], [[66, 86, 1020, 6854, 168, 155, 0], [450, 329, 1999, 493, 47, 42, 0], [504, 351, 1999, 740, 20, 20, 0], [543, 358, 2043, 31,
                        5, 5, 0], [602, 0, 1689, 3587, 358, 310, 0]], [[66, 86, 1839, 6853, 168, 157, 0], [436, 317, 891, 714, 53, 51, 0], [522, 328, 2043, 37, 4, 5, 0], [504, 351, 1999, 761, 20, 20, 0], [721, 0, 1672, 4152, 239, 218, 0]], [[66, 88, 1691, 6695, 169, 157, 0], [427, 307, 891, 593, 62, 61, 0], [500, 320, 2019, 448, 15, 15, 0], [522, 328, 2043, 43, 4, 5, 0], [843, 6, 1912, 4152, 117, 134, 0]], [[66, 90, 170, 6550, 169, 158, 0], [401, 299, 891, 655, 53, 58, 0], [478, 309, 1999, 718, 21, 21, 0], [500, 320, 2032, 647, 15, 15, 0]], [[66, 92, 340, 6560, 169, 158, 0], [383, 293, 891, 541, 64, 51, 0], [462, 300, 1999, 573, 37, 30, 0]], [[66,
                        95, 510, 6719, 169, 156, 0], [371, 296, 1999, 536, 38, 36, 0], [421, 289, 2019, 31, 23, 26, 0], [450, 291, 1999, 630, 32, 29, 0]], [[66, 95, 680, 6811, 169, 156, 0], [365, 287, 1999, 660, 31, 33, 0], [422, 284, 1999, 465, 48, 27, 0]], [[66, 92, 510, 6560, 169, 158, 0], [363, 281, 2019, 0, 25, 30, 0], [427, 278, 1999, 604, 34, 25, 0]], [[66, 90, 975, 6652, 169, 158, 0], [363, 280, 1999, 694, 21, 23, 0], [434, 273, 2021, 694, 21, 23, 0]], [[66, 88, 1861, 6695, 169, 157, 0], [365, 280, 2032, 630, 16, 16, 0], [433, 270, 891, 766, 18, 20, 0]], [[66, 86, 1145, 6696, 169, 157, 0], [433, 269, 910, 766, 17, 17, 0]], [[66, 86, 850,
                        6811, 169, 156, 0], [435, 269, 1482, 433, 13, 13, 0]], [[66, 86, 1315, 6852, 169, 156, 0]], [[66, 86, 1500, 6702, 169, 157, 0]], [[66, 88, 170, 6709, 169, 157, 0]], [[66, 90, 170, 6550, 169, 158, 0]], [[66, 92, 340, 6560, 169, 158, 0]], [[66, 95, 510, 6719, 169, 156, 0]], [[66, 95, 680, 6811, 169, 156, 0]], [[66, 92, 510, 6560, 169, 158, 0]], [[66, 90, 975, 6652, 169, 158, 0]], [[66, 88, 1861, 6695, 169, 157, 0]], [[66, 86, 1145, 6696, 169, 157, 0]], [[0, 0, 0, 0, 960, 540, 0]], [[66, 86, 1315, 6852, 169, 156, 0]]]
            }, wa: [10, 0, 0, 2048, 7027], bg: "rgba(0,0,0,1)", loop: !1, Ba: 0
        },
        mb: "Octopus Fact",
        Ib: M.g.yc,
        Gb: M.g.zc,
        Va: T(276, 107, 117, 82),
        Ua: {x: 259, y: 93},
        Mb: 2.2,
        $a: "black",
        backgroundColor: "black",
        nb: "octopus"
    }, {
        Jb: 3,
        Hb: 5,
        rb: 4,
        Pa: {x: 801, y: 172},
        Ra: [1, 2344, 2100, 73, 54],
        ab: {x: 801, y: 146},
        Qa: [[1, 2425, 1292, 73, 80], [1, 955, 2100, 73, 80], [1, 1031, 2100, 73, 80], [1, 1107, 2100, 73, 80], [1, 1183, 2100, 73, 80], [1, 1259, 2100, 73, 80], [1, 1335, 2100, 73, 80], [1, 1411, 2100, 73, 80], [1, 1487, 2100, 73, 80], [1, 1487, 2100, 73, 80], [1, 1487, 2100, 73, 80], [1, 1411, 2100, 73, 80], [1, 1335, 2100, 73, 80], [1, 1678, 2100, 73, 80], [1, 1754, 2100, 73, 80], [1, 2425, 1292, 73, 80], [1,
            2425, 1292, 73, 80], [1, 2425, 1292, 73, 80], [1, 2425, 1292, 73, 80], [1, 2425, 1292, 73, 80]],
        vb: 1E4,
        Sa: {x: 818, y: 119},
        Db: [1, 2456, 1182, 38, 54],
        Cb: [1, 647, 1456, 38, 54],
        Ab: {x: 803, y: 152},
        Bb: ue,
        Lb: .6,
        yb: new Ie([760, 98, 840, 98, 887, 180, 887, 260, 708, 260, 709, 180]),
        Ka: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[139, 163, 1657, 0, 271, 219, 0]], [[131, 153, 1363, 0, 293, 229, 0]], [[82, 143, 974, 0, 388, 194, 0]], [[29, 143, 0, 0, 486, 190, 0]], [[29, 203, 487, 0, 486, 175, 0]]]
            }, wa: [4, 0, 0, 1928, 229], bg: "rgba(49,15,72,1)", loop: !0, Ba: 0
        },
        Ma: {
            ya: {
                width: 960, height: 540, frames: [[[145,
                    120, 1654, 876, 270, 219, 0], [0, 415, 0, 0, 960, 125, 0]], [[138, 111, 1654, 647, 291, 228, 0]], [[88, 101, 394, 126, 386, 192, 0]], [[35, 101, 961, 0, 485, 188, 0]], [[35, 161, 1447, 0, 485, 173, 0]], [[90, 120, 0, 126, 393, 219, 0]], [[138, 111, 1654, 647, 291, 228, 0]], [[88, 101, 394, 126, 386, 192, 0]], [[35, 101, 961, 0, 485, 188, 0]], [[35, 161, 1447, 0, 485, 173, 0]], [[90, 120, 0, 126, 393, 219, 0]], [[138, 111, 1654, 647, 291, 228, 0]], [[88, 101, 394, 126, 386, 192, 0]], [[35, 101, 961, 0, 485, 188, 0]], [[35, 161, 1447, 0, 485, 173, 0]], [[90, 120, 0, 126, 393, 219, 0]], [[138, 111, 1654, 647, 291, 228, 0]],
                    [[111, 111, 1443, 412, 323, 234, 0]], [[111, 143, 1119, 189, 323, 268, 0]], [[123, 168, 1353, 647, 300, 243, 0]], [[124, 201, 303, 753, 275, 241, 0]], [[85, 210, 728, 427, 314, 262, 0]], [[85, 242, 1043, 458, 309, 230, 0]], [], [[102, 242, 1767, 412, 271, 229, 0]], [[102, 236, 781, 189, 337, 237, 0]], [[105, 236, 1447, 174, 368, 237, 0]], [[168, 361, 1973, 235, 62, 99, 0], [241, 241, 1181, 931, 142, 102, 0], [270, 377, 1973, 138, 67, 96, 0], [425, 391, 889, 126, 48, 54, 0]], [[180, 366, 334, 346, 51, 108, 0], [241, 242, 1598, 1096, 232, 209, 0]], [], [[108, 421, 2038, 0, 3, 3, 0], [115, 305, 1816, 174, 156, 169, 0],
                        [278, 421, 2014, 335, 27, 39, 0], [360, 317, 1946, 642, 99, 142, 0]], [[142, 242, 579, 933, 245, 234, 0], [412, 398, 2042, 0, 3, 3, 0], [403, 404, 1973, 335, 40, 54, 0]], [[142, 411, 781, 126, 54, 45, 0], [233, 339, 1933, 0, 104, 137, 0], [403, 398, 728, 319, 40, 60, 0]], [[135, 305, 334, 581, 308, 171, 0]], [[135, 406, 836, 126, 52, 52, 0], [191, 242, 269, 995, 241, 236, 0]], [[135, 237, 1043, 689, 286, 241, 0]], [[136, 236, 926, 931, 254, 241, 0]], [[119, 235, 0, 883, 268, 241, 0]], [[106, 235, 1330, 891, 267, 236, 0]], [], [[102, 242, 1767, 412, 271, 229, 0]], [[102, 236, 781, 189, 337, 237, 0]], [[105, 236, 1447,
                        174, 368, 237, 0]], [[168, 361, 1973, 235, 62, 99, 0], [241, 241, 1181, 931, 142, 102, 0], [270, 377, 1973, 138, 67, 96, 0], [425, 391, 889, 126, 48, 54, 0]], [[180, 366, 334, 346, 51, 108, 0], [241, 242, 1598, 1096, 232, 209, 0]], [], [[108, 421, 2038, 0, 3, 3, 0], [115, 305, 1816, 174, 156, 169, 0], [278, 421, 2014, 335, 27, 39, 0], [360, 317, 1946, 642, 99, 142, 0]], [[142, 242, 579, 933, 245, 234, 0], [412, 398, 2042, 0, 3, 3, 0], [403, 404, 1973, 335, 40, 54, 0]], [[142, 411, 781, 126, 54, 45, 0], [233, 339, 1933, 0, 104, 137, 0], [403, 398, 728, 319, 40, 60, 0]], [[135, 305, 334, 581, 308, 171, 0]], [[135, 406, 836,
                        126, 52, 52, 0], [191, 242, 269, 995, 241, 236, 0]], [[135, 237, 1043, 689, 286, 241, 0]], [[136, 236, 926, 931, 254, 241, 0]], [[119, 235, 0, 883, 268, 241, 0]], [], [[77, 235, 0, 346, 333, 245, 0]], [], [[77, 219, 394, 319, 333, 261, 0]], [[121, 198, 643, 690, 282, 242, 0]], [[121, 112, 0, 592, 302, 290, 0]]]
            }, wa: [5, 0, 0, 2045, 1305], bg: "rgba(49,15,72,1)", loop: !0, Ba: 0
        },
        Na: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[352, 157, 1325, 1869, 299, 241, 0]], [[343, 146, 0, 1819, 323, 252, 0]], [[288, 135, 867, 1581, 429, 212, 0]], [[229, 135, 1292, 952, 538, 208, 0]], [[229, 202, 642, 1119, 538, 191, 0]],
                    [[290, 157, 1505, 1351, 437, 241, 0]], [[343, 146, 0, 1819, 323, 252, 0]], [[288, 135, 867, 1581, 429, 212, 0]], [[229, 135, 1292, 952, 538, 208, 0]], [[229, 202, 642, 1119, 538, 191, 0]], [[290, 157, 1505, 1351, 437, 241, 0]], [[343, 146, 0, 1819, 323, 252, 0]], [[288, 135, 867, 1581, 429, 212, 0]], [[229, 135, 1292, 952, 538, 208, 0]], [[229, 197, 1181, 1161, 538, 189, 0]], [[291, 132, 0, 1428, 436, 254, 0]], [[343, 108, 698, 1794, 323, 265, 0]], [[288, 92, 437, 1520, 429, 217, 0]], [[245, 92, 530, 1311, 507, 208, 0]], [[220, 151, 1446, 413, 556, 148, 0]], [[220, 163, 1460, 245, 556, 167, 0]], [[234, 173,
                        0, 1209, 529, 218, 0]], [[268, 193, 1038, 1351, 466, 229, 0]], [[319, 237, 1671, 1593, 368, 252, 0]], [[372, 153, 1292, 2111, 256, 336, 0]], [[422, 121, 1805, 2143, 168, 288, 0]], [[449, 104, 1943, 1319, 95, 181, 0]], [[464, 92, 646, 626, 67, 133, 0]], [[472, 82, 608, 1890, 59, 113, 0]], [[457, 78, 1960, 1846, 83, 100, 0]], [[373, 78, 1831, 952, 195, 160, 0]], [[355, 72, 608, 2060, 266, 196, 0]], [[184, 28, 1460, 0, 585, 244, 0]], [[155, 28, 646, 869, 645, 249, 0]], [[155, 21, 716, 601, 650, 267, 0]], [[164, 21, 0, 927, 641, 281, 0]], [[162, 22, 0, 626, 645, 300, 0]], [[162, 33, 1367, 601, 645, 350, 0]], [[119,
                        99, 0, 0, 729, 354, 0]], [[119, 150, 730, 0, 729, 303, 0]], [[126, 156, 730, 304, 715, 296, 0]], [[126, 166, 0, 355, 715, 270, 0]], [[362, 178, 260, 2255, 251, 241, 0]], [[365, 195, 512, 2257, 250, 163, 0]], [[367, 210, 875, 2198, 252, 148, 0], [465, 379, 2003, 413, 40, 18, 0]], [[366, 222, 1549, 2143, 255, 197, 0]], [[363, 229, 0, 2072, 259, 191, 0]], [[360, 235, 324, 2068, 263, 186, 0]], [[358, 240, 1022, 2041, 269, 156, 0]], [[352, 245, 324, 1890, 283, 177, 0]], [[344, 251, 1022, 1869, 302, 171, 0]], [[339, 257, 1646, 1846, 313, 165, 0]], [[336, 266, 1720, 1161, 325, 157, 0]], [[331, 273, 360, 1738, 337, 151,
                        0]], [[324, 283, 1297, 1727, 348, 141, 0]], [[316, 287, 0, 1683, 359, 135, 0]], [[303, 287, 1297, 1593, 373, 133, 0]], [[295, 288, 1625, 2012, 278, 130, 0], [601, 354, 1446, 562, 75, 22, 0]], [[286, 315, 867, 1520, 145, 60, 0], [448, 325, 2017, 245, 27, 17, 0], [453, 350, 2017, 295, 17, 16, 0], [535, 324, 2036, 263, 5, 5, 0], [542, 327, 2017, 281, 18, 13, 0], [563, 338, 1831, 1113, 112, 38, 0]], [[286, 316, 875, 2060, 145, 60, 0], [453, 349, 2017, 263, 18, 17, 0]], [[286, 315, 1022, 1794, 145, 62, 0]], [[286, 364, 2003, 432, 35, 13, 0], [330, 315, 530, 1209, 101, 50, 0]], [], [], [], [], [], [], [], [], [], [], [], [],
                    [], [], [], []]
            }, wa: [3, 0, 0, 2045, 2496], bg: "rgba(48,17,71,1)", loop: !1, Ba: 0
        },
        mb: "Bat Fact",
        Ib: M.g.nc,
        Gb: M.g.lc,
        Va: T(804, 173, 70, 51),
        Ua: {x: 839, y: 220},
        Mb: 2.2,
        $a: "#1d032c",
        backgroundColor: "#3be3e3",
        nb: "bat"
    }, {
        Jb: 16,
        Hb: 17,
        rb: 18,
        Pa: {x: 445, y: 456},
        Ra: [1, 2436, 1494, 37, 52],
        ab: {x: 445, y: 456},
        Qa: [[1, 2436, 1549, 37, 52], [1, 2436, 1604, 37, 52], [1, 826, 1829, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838, 37, 52], [1, 466, 1838,
            37, 52], [1, 2200, 1846, 37, 52], [1, 826, 1884, 37, 52]],
        vb: 3E3,
        Sa: {x: 422, y: 446},
        Db: [1, 2369, 398, 82, 14],
        Cb: [1, 1769, 763, 82, 14],
        yb: T(419, 410, 90, 100),
        Ka: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[54, 259, 0, 0, 392, 206, 0]], [[294, 302, 329, 246, 16, 16, 0], [338, 259, 1847, 1032, 108, 114, 0]], [[113, 323, 89, 1147, 75, 142, 0], [294, 301, 347, 245, 16, 17, 0], [338, 258, 768, 1002, 108, 115, 0]], [[111, 323, 1097, 1123, 80, 141, 0], [295, 302, 312, 247, 15, 17, 0], [337, 258, 1284, 1007, 110, 114, 0]], [[110, 323, 778, 498, 81, 140, 0], [294, 301, 366, 226, 16, 18, 0], [337, 258, 1540, 1010, 110,
                    114, 0]], [[108, 323, 236, 1120, 81, 139, 0], [294, 301, 330, 227, 16, 18, 0], [337, 257, 1395, 1031, 110, 114, 0]], [[106, 323, 1651, 1072, 85, 138, 0], [294, 300, 312, 228, 16, 18, 0], [336, 257, 238, 1005, 111, 114, 0]], [[105, 322, 1737, 1072, 85, 138, 0], [294, 300, 348, 207, 17, 18, 0], [335, 257, 1926, 505, 112, 113, 0]], [[103, 322, 1173, 859, 89, 137, 0], [294, 300, 366, 207, 17, 18, 0], [335, 257, 655, 1002, 112, 112, 0]], [[102, 322, 0, 1071, 88, 136, 0], [294, 299, 312, 207, 17, 20, 0], [335, 256, 125, 918, 112, 113, 0]], [[100, 322, 350, 1045, 89, 135, 0], [293, 256, 1021, 0, 155, 169, 0]], [[98, 322, 1957,
                    0, 90, 134, 0], [293, 256, 1177, 0, 155, 169, 0]], [[98, 322, 655, 854, 90, 132, 0], [294, 255, 1019, 336, 154, 169, 0]], [[98, 322, 1957, 270, 90, 133, 0], [293, 255, 1333, 0, 155, 168, 0]], [[70, 271, 1015, 506, 134, 185, 0], [294, 255, 1174, 336, 154, 167, 0]], [[70, 271, 1791, 505, 134, 186, 0], [294, 254, 864, 164, 155, 167, 0]], [[71, 271, 0, 541, 133, 187, 0], [293, 254, 393, 0, 156, 167, 0]], [[72, 272, 912, 692, 131, 187, 0], [295, 254, 1329, 337, 154, 166, 0]], [[73, 272, 1328, 669, 131, 188, 0], [294, 253, 707, 165, 155, 167, 0]], [[74, 273, 0, 729, 130, 188, 0], [294, 253, 393, 168, 155, 167, 0]], [[75, 273,
                    525, 854, 129, 189, 0], [293, 254, 550, 0, 156, 167, 0]], [[76, 273, 1044, 859, 128, 190, 0], [294, 254, 1489, 0, 155, 168, 0]], [[77, 274, 879, 880, 127, 190, 0], [293, 255, 549, 168, 155, 167, 0]], [[78, 274, 1720, 880, 126, 191, 0], [293, 255, 1645, 0, 155, 168, 0]], [[79, 274, 1923, 692, 124, 152, 0], [293, 256, 1801, 0, 155, 168, 0]], [[79, 274, 0, 918, 124, 152, 0], [294, 256, 1638, 336, 153, 168, 0]], [[78, 274, 1847, 880, 126, 151, 0], [294, 257, 861, 497, 153, 166, 0]], [[77, 274, 1412, 880, 127, 150, 0], [294, 257, 462, 500, 153, 165, 0]], [[76, 273, 1591, 860, 128, 149, 0], [294, 258, 1328, 504, 153, 164,
                    0]], [[75, 273, 1282, 858, 129, 148, 0], [294, 258, 1484, 337, 153, 207, 0]], [[74, 273, 1460, 732, 130, 147, 0], [294, 258, 1638, 505, 152, 206, 0]], [[73, 272, 1616, 712, 131, 147, 0], [297, 273, 749, 811, 129, 190, 0]], [[72, 272, 268, 667, 132, 146, 0], [298, 273, 265, 814, 129, 190, 0]], [[71, 271, 778, 664, 133, 146, 0], [298, 272, 395, 854, 129, 190, 0]], [[54, 258, 0, 373, 153, 167, 0], [298, 272, 134, 728, 130, 189, 0]], [[54, 258, 624, 498, 153, 166, 0], [297, 272, 616, 665, 132, 188, 0]], [[54, 257, 308, 500, 153, 166, 0], [298, 272, 1150, 670, 131, 188, 0]], [[54, 257, 1174, 504, 153, 165, 0], [298, 272,
                    1791, 692, 131, 187, 0]], [[53, 256, 1020, 170, 155, 165, 0], [298, 271, 462, 666, 132, 187, 0]], [[53, 255, 1176, 170, 155, 165, 0], [297, 271, 134, 541, 133, 186, 0]], [[53, 255, 863, 332, 155, 164, 0], [298, 271, 1482, 545, 133, 186, 0]], [[53, 254, 705, 333, 155, 164, 0], [304, 300, 1044, 692, 103, 156, 0]], [[53, 254, 312, 336, 155, 163, 0], [312, 321, 1957, 135, 90, 134, 0]], [[53, 253, 468, 336, 155, 163, 0], [312, 321, 1956, 1032, 89, 136, 0]], [[52, 253, 864, 0, 156, 163, 0], [311, 322, 1007, 1050, 89, 135, 0]], [[52, 253, 707, 0, 156, 164, 0], [313, 322, 877, 1071, 86, 136, 0]], [[53, 253, 0, 207, 155, 165,
                    0], [313, 322, 634, 1115, 84, 137, 0]], [[53, 254, 156, 207, 155, 165, 0], [313, 322, 440, 1045, 83, 138, 0]], [[53, 254, 1489, 169, 155, 166, 0], [313, 322, 719, 1118, 82, 139, 0]], [[53, 255, 1645, 169, 155, 166, 0], [313, 322, 1284, 1122, 81, 139, 0]], [[53, 256, 1801, 169, 155, 166, 0], [312, 323, 1178, 1123, 80, 139, 0]], [[53, 256, 1333, 169, 155, 167, 0], [312, 323, 624, 336, 79, 140, 0]], [[54, 257, 154, 373, 153, 167, 0], [313, 323, 1506, 1125, 77, 141, 0]], [[54, 257, 1792, 336, 153, 168, 0], [313, 323, 1366, 1146, 76, 142, 0]], [[54, 258, 125, 1032, 110, 114, 0], [190, 300, 330, 207, 17, 19, 0], [313, 323,
                    1823, 1147, 75, 142, 0]], [[54, 258, 1173, 1007, 110, 115, 0], [190, 301, 348, 226, 17, 18, 0]], [[54, 259, 525, 1044, 108, 114, 0], [191, 302, 364, 245, 16, 17, 0]], [], [], []]
            }, wa: [18, 0, 0, 2047, 1289], bg: "rgba(153,112,180,1)", loop: !0, Ba: 0
        },
        Ma: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 0, 0, 0, 960, 540, 0]], [[46, 195, 0, 541, 103, 71, 0], [220, 163, 961, 491, 105, 119, 0]], [[50, 198, 205, 541, 100, 75, 0], [220, 167, 1791, 222, 104, 102, 0]], [[55, 201, 104, 541, 100, 111, 0], [220, 171, 1067, 491, 104, 85, 0]], [[60, 200, 306, 541, 95, 98, 0], [210, 174, 1816, 151, 116, 70, 0]], [[60, 197, 402,
                    541, 95, 97, 0], [210, 170, 1816, 73, 116, 77, 0]], [[49, 154, 1238, 164, 276, 140, 0]], [[40, 154, 1247, 0, 284, 163, 0]], [[38, 153, 961, 0, 285, 163, 0]], [[38, 150, 1532, 0, 283, 165, 0]], [[44, 150, 961, 164, 276, 164, 0]], [[46, 153, 1515, 166, 275, 159, 0]], [[56, 153, 1781, 326, 266, 160, 0]], [[54, 153, 961, 329, 270, 161, 0]], [[54, 153, 1238, 305, 271, 162, 0]], [[55, 153, 1510, 326, 270, 163, 0]], [[57, 148, 1232, 468, 268, 169, 0]], [[60, 146, 1781, 487, 265, 138, 0]], [[62, 146, 1501, 490, 262, 141, 0]], [[64, 204, 498, 541, 87, 85, 0], [215, 150, 1933, 186, 108, 102, 0]], [[66, 204, 586, 541, 81, 88,
                    0], [148, 210, 1798, 173, 5, 4, 0], [211, 153, 1933, 84, 111, 101, 0]], [[209, 156, 1934, 0, 114, 83, 0]], [[208, 160, 1816, 0, 117, 72, 0]], [[209, 211, 1805, 166, 7, 6, 0], [220, 182, 1896, 241, 28, 18, 0], [217, 212, 1791, 173, 6, 5, 0], [258, 177, 668, 541, 68, 49, 0]], [[220, 182, 1896, 222, 29, 18, 0], [210, 211, 1791, 166, 13, 6, 0], [258, 176, 737, 541, 68, 43, 0]], [], [], [], [], [], [], [], [], [], [], []]
            }, wa: [17, 0, 0, 2048, 652], bg: "rgba(153,112,180,1)", loop: !0, Ba: 0
        },
        Na: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[204, 147, 554, 5471, 552, 309, 0]], [], [], [], [], [], [], [], [], [], [], [], [], [],
                    [[203, 147, 0, 5403, 553, 309, 0]], [[202, 147, 1115, 5082, 555, 309, 0]], [[202, 147, 558, 4851, 556, 309, 0]], [[201, 147, 0, 4783, 557, 309, 0]], [[201, 147, 1122, 4462, 558, 309, 0]], [[201, 147, 559, 4541, 558, 309, 0]], [[204, 147, 554, 5471, 552, 309, 0]], [], [[203, 147, 0, 5093, 554, 309, 0]], [[203, 147, 555, 5161, 554, 309, 0]], [[203, 147, 1110, 5392, 554, 309, 0]], [[201, 147, 1118, 4772, 558, 309, 0]], [[200, 147, 1132, 4152, 560, 309, 0]], [[200, 147, 561, 4231, 560, 309, 0]], [[195, 147, 0, 3399, 569, 309, 0]], [[195, 91, 1155, 3040, 569, 365, 0]], [[198, 73, 1138, 3787, 567, 364, 0]], [[198,
                        64, 0, 3709, 567, 367, 0]], [[196, 64, 1141, 3406, 567, 380, 0]], [[196, 68, 570, 3528, 567, 376, 0]], [[196, 89, 1167, 2684, 572, 355, 0]], [[196, 92, 582, 2849, 572, 352, 0]], [[117, 84, 655, 678, 643, 360, 0]], [[80, 81, 0, 764, 612, 363, 0]], [[69, 81, 590, 2121, 587, 363, 0]], [[64, 80, 1178, 2320, 584, 363, 0]], [[63, 80, 0, 2677, 581, 362, 0]], [[62, 80, 585, 2485, 581, 363, 0]], [[62, 80, 1451, 0, 580, 312, 0]], [[62, 79, 0, 2312, 584, 364, 0]], [[65, 72, 0, 1940, 589, 371, 0]], [[71, 66, 1299, 747, 616, 377, 0]], [[102, 66, 0, 0, 730, 378, 0]], [[232, 67, 613, 1039, 611, 377, 0]], [[255, 67, 603, 1417, 602,
                        377, 0]], [[273, 57, 1206, 1536, 598, 387, 0]], [[281, 49, 1198, 1924, 596, 395, 0]], [[284, 37, 0, 1128, 602, 400, 0]], [[290, 31, 1225, 1125, 607, 410, 0]], [[300, 31, 0, 1529, 599, 410, 0]], [[250, 34, 1396, 339, 649, 407, 0]], [[201, 60, 0, 379, 654, 384, 0]], [[199, 86, 0, 3040, 570, 358, 0]], [[199, 92, 0, 4077, 560, 352, 0]], [[201, 92, 0, 4430, 558, 352, 0]], [[312, 300, 1901, 2674, 135, 134, 0], [533, 305, 1740, 3019, 125, 131, 0]], [[198, 94, 568, 3905, 563, 325, 0]], [[195, 94, 571, 3202, 569, 325, 0]], [], [[181, 94, 600, 1795, 597, 325, 0]], [], [[137, 90, 731, 339, 664, 338, 0]], [[137, 90, 731, 0, 719,
                        338, 0]], [[133, 88, 1740, 2871, 128, 147, 0], [273, 169, 0, 5713, 430, 279, 0], [718, 136, 1805, 1658, 153, 112, 0]], [[123, 88, 1830, 3431, 103, 150, 0], [272, 216, 1107, 5702, 434, 232, 0], [748, 136, 1916, 883, 129, 119, 0]], [[105, 94, 1725, 3151, 119, 161, 0], [272, 223, 1542, 5702, 434, 225, 0], [755, 140, 1869, 2880, 126, 132, 0]], [[103, 115, 1869, 3013, 125, 160, 0], [423, 232, 1875, 2809, 134, 70, 0], [439, 308, 1451, 313, 101, 16, 0], [428, 383, 2032, 0, 4, 4, 0], [448, 392, 1553, 313, 44, 18, 0], [753, 159, 1916, 747, 131, 135, 0]], [[99, 141, 1740, 2716, 134, 154, 0], [751, 185, 1763, 2585, 137, 130,
                        0]], [[94, 167, 1795, 2312, 145, 153, 0], [554, 294, 1958, 1813, 86, 154, 0], [751, 214, 1906, 2466, 139, 131, 0]], [[92, 203, 1805, 1862, 151, 150, 0], [552, 294, 1959, 1658, 87, 154, 0], [751, 250, 1763, 2466, 142, 118, 0]], [[89, 241, 1833, 1517, 157, 140, 0], [552, 290, 1957, 3174, 77, 154, 0], [747, 280, 1795, 2204, 146, 107, 0]], [[85, 278, 1833, 1125, 161, 122, 0], [551, 282, 655, 379, 74, 141, 0], [741, 303, 1805, 1771, 152, 90, 0]], [[85, 312, 1833, 1248, 160, 89, 0], [551, 263, 1795, 2069, 149, 134, 0], [741, 339, 1795, 2013, 150, 55, 0]], [[85, 338, 1833, 1338, 160, 63, 0], [553, 261, 1945, 3388, 54,
                        57, 0], [612, 247, 1836, 3340, 108, 90, 0], [741, 357, 1901, 2598, 136, 38, 0]], [[85, 343, 1833, 1402, 160, 58, 0], [553, 261, 1957, 3329, 54, 58, 0], [623, 223, 1946, 2013, 100, 70, 0], [741, 359, 1901, 2637, 136, 36, 0]], [[85, 346, 1833, 1461, 160, 55, 0], [553, 260, 1991, 1517, 55, 59, 0], [619, 211, 1941, 2344, 104, 73, 0]], [[553, 260, 1991, 1577, 55, 59, 0], [619, 211, 1942, 2204, 106, 69, 0]], [[552, 263, 655, 521, 56, 58, 0], [621, 216, 1916, 1003, 113, 76, 0]], [[552, 267, 1995, 1080, 53, 54, 0], [624, 234, 1845, 3174, 111, 59, 0]], [[553, 267, 1995, 1135, 53, 51, 0], [624, 241, 1845, 3234, 111, 52, 0]],
                    [[551, 263, 1299, 678, 56, 55, 0], [623, 241, 1845, 3287, 111, 52, 0]], [[551, 263, 655, 580, 56, 56, 0], [621, 223, 1725, 3313, 110, 66, 0]], [[553, 261, 1225, 1039, 55, 60, 0], [619, 212, 1942, 2274, 106, 69, 0]], [[553, 260, 1945, 2084, 54, 61, 0], [619, 210, 1725, 3380, 104, 68, 0]], [], [], [], [], []]
            }, wa: [16, 0, 0, 2048, 5992], bg: "rgba(153,112,180,1)", loop: !1, Ba: 0
        },
        mb: "Spider Fact",
        Ib: M.g.Dc,
        Gb: M.g.Ec,
        Va: T(447, 458, 35, 48),
        Ua: {x: 456, y: 500},
        Mb: 2.5,
        $a: "#764695",
        backgroundColor: "#ffe431",
        nb: "spider"
    }, {
        Jb: 7,
        Hb: 8,
        rb: 9,
        Pa: {x: 519, y: 146},
        Ra: [1, 1005, 1299, 133, 241],
        ab: {x: 545, y: 156.5},
        Qa: [[1, 2265, 1993, 83, 84], [1, 539, 1996, 83, 84], [1, 625, 1996, 83, 84], [1, 711, 1996, 83, 84], [1, 1642, 2001, 83, 84], [1, 94, 2005, 83, 84], [1, 180, 2005, 83, 84], [1, 266, 2005, 83, 84], [1, 352, 2005, 83, 84], [1, 911, 2013, 83, 84], [1, 997, 2013, 83, 84], [1, 1083, 2013, 83, 84], [1, 1169, 2013, 83, 84], [1, 1255, 2013, 83, 84], [1, 1341, 2013, 83, 84], [1, 352, 2005, 83, 84], [1, 1427, 2013, 83, 84], [1, 1513, 2013, 83, 84], [1, 1728, 2013, 83, 84], [1, 1814, 2013, 83, 84], [1, 1814, 2013, 83, 84], [1, 1814, 2013, 83, 84], [1, 1814, 2013, 83, 84], [1, 1814, 2013, 83, 84]],
        vb: 7E3,
        Sa: {
            x: 424,
            y: 96
        },
        Db: [1, 883, 543, 239, 41],
        Cb: [1, 1125, 543, 239, 41],
        yb: T(420, 48, 248, 337),
        Ka: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 0, 0, 0, 960, 540, 0]], [[74, 226, 961, 0, 67, 269, 0]], [[76, 225, 1097, 0, 65, 270, 0]], [[79, 225, 1293, 0, 63, 269, 0]], [[81, 224, 1420, 0, 62, 270, 0]], [[83, 224, 1483, 0, 62, 270, 0]], [[85, 223, 1609, 0, 61, 271, 0]], [[87, 223, 1671, 0, 59, 271, 0]], [[84, 223, 1357, 0, 62, 271, 0]], [[82, 224, 1546, 0, 62, 270, 0]], [[79, 225, 1163, 0, 64, 269, 0]], [[77, 225, 1228, 0, 64, 269, 0]], [[74, 226, 1029, 0, 67, 269, 0]], [], [], [], [], [], []]
            }, wa: [9, 0, 0, 1730, 540], bg: "rgba(18,201,157,1)",
            loop: !0, Ba: 0
        },
        Ma: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 0, 0, 0, 960, 540, 0]], [[0, 105, 961, 3125, 960, 435, 0]], [[0, 102, 961, 2686, 960, 438, 0]], [[0, 99, 961, 2244, 960, 441, 0]], [[0, 97, 961, 1800, 960, 443, 0]], [[0, 94, 961, 1353, 960, 446, 0]], [[0, 92, 961, 904, 960, 448, 0]], [[0, 89, 961, 0, 960, 451, 0]], [[0, 89, 961, 452, 960, 451, 0]], [[0, 91, 0, 541, 960, 449, 0]], [[0, 93, 0, 991, 960, 447, 0]], [[0, 96, 0, 1439, 960, 444, 0]], [[0, 98, 0, 1884, 960, 442, 0]], [[0, 101, 0, 2327, 960, 439, 0]], [[0, 103, 0, 2767, 960, 437, 0]], [[0, 106, 0, 3205, 960, 434, 0]]]
            }, wa: [8, 0, 0, 1921, 3639], bg: "rgba(18,201,157,1)",
            loop: !0, Ba: 0
        },
        Na: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[0, 0, 0, 0, 960, 540, 0]], [[515, 294, 949, 563, 10, 4, 0], [545, 170, 1937, 1017, 75, 41, 0], [546, 231, 2023, 1037, 16, 67, 0]], [[515, 291, 949, 541, 10, 7, 0], [545, 169, 1937, 1059, 72, 43, 0], [546, 221, 2018, 959, 19, 77, 0]], [[515, 287, 949, 568, 9, 8, 0], [545, 168, 1952, 1103, 70, 130, 0]], [[396, 56, 820, 681, 128, 138, 0], [515, 284, 949, 586, 9, 7, 0], [545, 165, 1952, 1234, 67, 133, 0]], [[396, 56, 820, 541, 128, 139, 0], [515, 281, 949, 594, 9, 7, 0], [545, 162, 1952, 1368, 63, 135, 0]], [[396, 59, 1306, 831, 128, 138, 0], [515, 277, 2039, 539,
                    8, 8, 0], [515, 293, 949, 557, 10, 5, 0], [545, 159, 1952, 1504, 60, 135, 0]], [[396, 59, 1306, 970, 128, 138, 0], [515, 274, 2039, 584, 8, 7, 0], [515, 290, 949, 549, 10, 7, 0], [545, 156, 1952, 1640, 57, 136, 0]], [[396, 57, 311, 3700, 128, 138, 0], [514, 271, 2039, 592, 8, 7, 0], [515, 286, 949, 577, 9, 8, 0], [545, 153, 1952, 1777, 53, 136, 0]], [[396, 56, 820, 681, 128, 138, 0], [514, 267, 2039, 600, 8, 7, 0], [515, 283, 949, 602, 9, 7, 0], [545, 150, 1952, 1914, 50, 136, 0]], [[396, 56, 820, 541, 128, 139, 0], [514, 264, 2039, 608, 8, 7, 0], [515, 280, 949, 610, 8, 7, 0], [545, 147, 1952, 2051, 47, 136, 0]], [[396, 59,
                    1306, 831, 128, 138, 0], [514, 261, 949, 618, 7, 7, 0], [515, 276, 2039, 548, 8, 8, 0], [545, 146, 2003, 1914, 44, 134, 0]], [[396, 59, 1306, 970, 128, 138, 0], [514, 257, 2039, 616, 7, 8, 0], [515, 273, 2039, 557, 8, 8, 0], [546, 144, 2006, 1777, 39, 133, 0]], [[396, 57, 311, 3700, 128, 138, 0], [514, 254, 2039, 625, 7, 7, 0], [514, 270, 2039, 566, 8, 8, 0], [546, 144, 2E3, 2176, 42, 130, 0]], [[396, 56, 820, 681, 128, 138, 0], [514, 251, 2041, 402, 6, 7, 0], [514, 267, 2039, 575, 8, 8, 0], [546, 144, 2003, 2049, 44, 126, 0]], [[396, 56, 449, 4941, 196, 278, 0]], [[396, 59, 0, 4923, 198, 275, 0]], [[396, 59, 673, 4891, 200,
                    272, 0]], [[396, 57, 1102, 3830, 202, 269, 0]], [[396, 56, 1192, 4715, 211, 264, 0]], [[396, 56, 765, 4405, 234, 245, 0]], [[396, 59, 1613, 3965, 258, 239, 0]], [[396, 58, 0, 3902, 258, 240, 0]], [[396, 38, 1608, 4205, 237, 260, 0]], [[396, 29, 234, 4429, 230, 269, 0]], [[396, 27, 225, 4699, 223, 271, 0]], [[396, 59, 1457, 4709, 219, 239, 0]], [[396, 59, 970, 4707, 221, 239, 0]], [[396, 57, 449, 4699, 223, 241, 0]], [[396, 56, 574, 3843, 225, 242, 0]], [[396, 56, 1457, 4466, 225, 242, 0]], [[396, 59, 1683, 4466, 225, 239, 0]], [[396, 59, 744, 4651, 225, 239, 0]], [[396, 56, 0, 4680, 224, 242, 0]], [[396, 27, 1683,
                    4706, 222, 271, 0]], [[365, 26, 512, 4117, 252, 308, 0]], [[365, 23, 259, 4117, 252, 311, 0]], [[365, 19, 1102, 4115, 252, 315, 0]], [[365, 18, 1355, 4115, 252, 315, 0]], [[232, 18, 1449, 419, 487, 398, 0]], [[232, 40, 976, 2768, 487, 376, 0]], [[291, 27, 1306, 3807, 306, 307, 0]], [[232, 27, 961, 441, 487, 389, 0]], [[232, 27, 0, 541, 487, 389, 0]], [[232, 27, 1449, 818, 487, 389, 0]], [[232, 40, 1464, 2768, 487, 376, 0]], [[291, 27, 803, 3830, 298, 307, 0]], [[232, 27, 488, 831, 487, 389, 0]], [[232, 27, 0, 931, 487, 389, 0]], [[232, 27, 976, 1208, 487, 389, 0]], [[232, 40, 488, 2781, 487, 376, 0]], [[291, 27,
                    1631, 3736, 308, 228, 0], [514, 256, 1306, 1109, 42, 78, 0]], [[232, 27, 1464, 1208, 487, 389, 0]], [[232, 27, 488, 1221, 487, 389, 0]], [[232, 27, 0, 1321, 487, 389, 0]], [[232, 40, 0, 2881, 487, 376, 0]], [[291, 27, 1631, 3522, 319, 213, 0], [546, 241, 2044, 11, 4, 5, 0], [546, 250, 2044, 17, 4, 5, 0], [546, 257, 2044, 23, 4, 5, 0], [546, 263, 2044, 0, 4, 10, 0], [547, 274, 2044, 29, 3, 11, 0], [515, 286, 1349, 1109, 41, 48, 0]], [[232, 27, 976, 1598, 487, 389, 0]], [[232, 27, 1464, 1598, 487, 389, 0]], [[232, 27, 488, 1611, 487, 389, 0]], [[232, 40, 976, 3145, 487, 376, 0]], [[291, 27, 976, 831, 329, 307, 0]], [[232,
                    27, 0, 1711, 487, 389, 0]], [[232, 27, 976, 1988, 487, 389, 0]], [[232, 27, 1464, 1988, 487, 389, 0]], [[232, 40, 1464, 3145, 487, 376, 0]], [[291, 27, 976, 3522, 329, 307, 0]], [[232, 27, 488, 2001, 487, 389, 0]], [[232, 27, 0, 2101, 487, 389, 0]], [[232, 27, 976, 2378, 487, 389, 0]], [[232, 40, 488, 3158, 487, 376, 0]], [[291, 27, 488, 3535, 314, 307, 0]], [[232, 27, 1464, 2378, 487, 389, 0]], [[232, 27, 488, 2391, 487, 389, 0]], [[232, 27, 0, 2491, 487, 389, 0]], [[232, 55, 0, 3258, 487, 361, 0]], [[396, 51, 874, 4947, 193, 283, 0]], [[359, 51, 1230, 4431, 226, 283, 0]], [[359, 59, 1E3, 4431, 229, 275, 0]], [[359,
                    62, 512, 4426, 231, 272, 0]], [[359, 66, 0, 4411, 233, 268, 0]], [[359, 67, 0, 4143, 237, 267, 0]], [[359, 68, 765, 4138, 242, 266, 0]], [[345, 61, 311, 3843, 262, 273, 0], [387, 412, 803, 3615, 147, 79, 0]], [[302, 53, 0, 3620, 310, 281, 0], [386, 412, 803, 3535, 154, 79, 0]], [[294, 50, 1306, 3522, 324, 284, 0], [386, 411, 311, 3620, 172, 79, 0]], [[232, 50, 961, 0, 487, 440, 0]], [[232, 51, 1449, 0, 487, 418, 0]], [[295, 51, 488, 541, 331, 283, 0], [488, 412, 1937, 959, 80, 57, 0]], [[531, 158, 1937, 818, 97, 140, 0]], [[531, 159, 1937, 678, 99, 139, 0]], [[531, 160, 1937, 539, 101, 138, 0]], [[531, 162, 1937, 402,
                    103, 136, 0]], [[531, 163, 1937, 134, 105, 135, 0]], [[532, 165, 1937, 0, 106, 133, 0]], [[534, 167, 1937, 270, 105, 131, 0]]]
            }, wa: [7, 0, 0, 2048, 5230], bg: "rgba(92,196,158,1)", loop: !1, Ba: 0
        },
        mb: "Black Cat Fact",
        Ib: M.g.tc,
        Gb: M.g.uc,
        Va: T(523, 147, 129, 236),
        Ua: {x: 606, y: 218},
        Mb: 1.8,
        $a: "#028765",
        backgroundColor: "#3be3e3",
        nb: "jaguar"
    }, {
        Jb: 13,
        Hb: 14,
        rb: 15,
        Pa: {x: 740, y: 388},
        Ra: [1, 2267, 1794, 112, 107],
        ab: {x: 740, y: 388},
        Qa: [[1, 1769, 543, 139, 107], [1, 1769, 653, 139, 107], [1, 2324, 669, 139, 107], [1, 2324, 779, 139, 107], [1, 1005, 1079, 139, 107], [1, 1888, 1182,
            139, 107], [1, 2030, 1182, 139, 107], [1, 2172, 1182, 139, 107], [1, 2314, 1182, 139, 107], [1, 1005, 1189, 139, 107], [1, 1147, 1281, 139, 107], [1, 1289, 1281, 139, 107], [1, 1431, 1281, 139, 107], [1, 1573, 1281, 139, 107], [1, 1715, 1281, 139, 107], [1, 0, 1282, 139, 107], [1, 142, 1282, 139, 107], [1, 284, 1282, 139, 107], [1, 1888, 1182, 139, 107], [1, 426, 1282, 139, 107], [1, 568, 1282, 139, 107], [1, 1857, 1292, 139, 107], [1, 1999, 1292, 139, 107], [1, 2141, 1292, 139, 107], [1, 2283, 1292, 139, 107], [1, 2283, 1292, 139, 107]],
        vb: 9E3,
        Sa: {x: 772, y: 321},
        Db: [1, 647, 1392, 53, 61],
        Cb: [1, 2441, 1375,
            53, 61],
        Ab: {x: 757, y: 345},
        Bb: ue,
        Lb: .7,
        yb: T(683, 262, 232, 247),
        Ka: {
            ya: {
                width: 960,
                height: 540,
                frames: [[[52, 62, 0, 0, 360, 441, 0]], [[166, 58, 361, 0, 246, 220, 0]], [[166, 54, 608, 0, 246, 220, 0]], [[166, 50, 855, 0, 246, 220, 0]], [[166, 47, 361, 221, 246, 219, 0]], [[166, 47, 855, 221, 246, 217, 0]], [[166, 48, 1102, 0, 246, 220, 0]], [[166, 52, 1349, 0, 246, 220, 0]], [[166, 56, 1596, 0, 246, 220, 0]], [[166, 60, 608, 221, 246, 218, 0]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
            }, wa: [15, 0, 0, 1842, 441], bg: "rgba(20,225,227,1)", loop: !0, Ba: 0
        },
        Ma: {
            ya: {
                width: 960, height: 540,
                frames: [[[43, 62, 1211, 891, 369, 441, 0]], [[339, 403, 2034, 254, 8, 5, 0]], [[339, 383, 1828, 404, 30, 25, 0]], [[43, 59, 384, 883, 376, 450, 0]], [[43, 56, 824, 443, 386, 453, 0]], [[43, 52, 1250, 441, 396, 449, 0]], [[44, 48, 418, 438, 405, 444, 0]], [[45, 43, 836, 0, 413, 442, 0]], [[47, 41, 418, 0, 417, 437, 0]], [[235, 213, 1856, 52, 191, 50, 0], [175, 393, 1939, 404, 24, 5, 0], [122, 399, 761, 991, 142, 69, 0]], [[235, 213, 1856, 103, 191, 50, 0], [117, 398, 920, 985, 148, 78, 0]], [[111, 405, 2001, 333, 45, 30, 0], [167, 415, 1833, 282, 15, 15, 0], [235, 213, 1664, 104, 191, 50, 0], [221, 441, 1211, 443, 22,
                    37, 0]], [[235, 213, 1664, 0, 191, 51, 0], [102, 393, 1664, 334, 163, 103, 0]], [[235, 213, 1856, 0, 191, 51, 0], [175, 393, 1939, 404, 24, 5, 0], [97, 399, 1833, 333, 167, 70, 0], [224, 470, 1833, 255, 20, 26, 0]], [[235, 213, 1664, 52, 191, 51, 0], [97, 398, 1664, 255, 168, 78, 0]], [[235, 214, 1856, 154, 191, 50, 0], [116, 393, 920, 897, 149, 87, 0]], [[235, 215, 1664, 155, 191, 49, 0], [175, 393, 1939, 404, 24, 5, 0], [106, 399, 761, 897, 158, 93, 0]], [[88, 420, 2001, 364, 42, 47, 0], [235, 216, 1856, 205, 191, 48, 0], [225, 470, 1888, 404, 25, 32, 0]], [[235, 216, 1664, 205, 191, 49, 0], [88, 398, 1856, 254, 177,
                    78, 0], [227, 481, 1859, 404, 28, 27, 0]], [[47, 41, 0, 0, 417, 438, 0], [231, 488, 1914, 404, 24, 20, 0]], [[45, 44, 1250, 0, 413, 440, 0]], [[44, 48, 0, 439, 403, 441, 0]], [[43, 53, 1647, 441, 393, 445, 0]], [[43, 57, 0, 881, 383, 452, 0]], [[43, 61, 1647, 887, 372, 448, 0]], [], [], [], [], [], [[214, 155, 1123, 897, 51, 47, 0], [311, 155, 1581, 891, 52, 47, 0]], [], [[214, 155, 1581, 939, 51, 47, 0], [311, 155, 1070, 897, 52, 47, 0]], [], [], [], [], [], []]
            }, wa: [14, 0, 0, 2047, 1335], bg: "rgba(20,225,227,1)", loop: !0, Ba: 0
        },
        Na: {
            ya: {
                width: 960, height: 540, frames: [[[322, 156, 1638, 2189, 280, 344, 0]],
                    [], [], [[322, 155, 606, 2031, 281, 327, 0]], [[323, 155, 1357, 2171, 280, 345, 0]], [[325, 155, 888, 2346, 277, 345, 0]], [[362, 155, 1432, 2534, 260, 345, 0]], [[388, 156, 245, 2763, 236, 344, 0]], [[391, 156, 1825, 869, 212, 344, 0]], [[411, 156, 912, 3093, 192, 172, 0]], [], [], [], [], [], [], [[391, 156, 0, 3020, 233, 344, 0]], [[389, 156, 1266, 2880, 235, 344, 0]], [[383, 156, 787, 2692, 240, 344, 0]], [[371, 164, 533, 2647, 253, 336, 0]], [[363, 191, 0, 2365, 268, 309, 0]], [[359, 218, 1680, 1906, 286, 282, 0]], [[359, 236, 1385, 1906, 294, 264, 0]], [[363, 229, 1074, 1738, 310, 271, 0]], [[372, 203,
                        0, 1784, 305, 297, 0]], [[378, 185, 306, 1882, 299, 314, 0]], [[385, 165, 1074, 2010, 282, 335, 0]], [[389, 157, 1693, 2534, 256, 342, 0]], [[391, 156, 1028, 2748, 237, 344, 0]], [[392, 156, 482, 2984, 234, 342, 0]], [[389, 156, 1693, 2877, 236, 344, 0]], [[382, 156, 0, 2675, 244, 344, 0]], [[358, 164, 282, 2197, 278, 336, 0]], [[358, 218, 0, 2082, 281, 282, 0]], [[365, 227, 1457, 1632, 333, 273, 0]], [[382, 171, 354, 1552, 336, 329, 0]], [[370, 127, 500, 416, 426, 373, 0]], [[352, 109, 1041, 398, 454, 391, 0]], [[346, 93, 1552, 0, 485, 407, 0]], [[346, 93, 0, 333, 499, 404, 0]], [[347, 103, 1041, 0, 510, 397,
                        0]], [[603, 119, 561, 2359, 270, 287, 0]], [[608, 178, 1166, 2517, 265, 230, 0]], [[608, 180, 269, 2534, 263, 228, 0]], [[348, 168, 0, 0, 521, 332, 0]], [[351, 85, 522, 0, 518, 415, 0]], [[370, 40, 1496, 408, 447, 460, 0]], [[388, 29, 1097, 790, 363, 471, 0]], [[479, 19, 1825, 1214, 203, 202, 0], [388, 223, 0, 1506, 353, 277, 0]], [[391, 19, 728, 1550, 345, 480, 0]], [[390, 25, 1096, 1262, 360, 475, 0]], [[390, 127, 1461, 1258, 362, 373, 0]], [[391, 119, 0, 738, 365, 381, 0]], [[391, 119, 366, 790, 365, 381, 0]], [[391, 121, 732, 790, 364, 377, 0]], [], [], [], [], [], [], [], [[391, 121, 364, 1172, 363, 379, 0]],
                    [[391, 115, 0, 1120, 363, 385, 0]], [[391, 110, 732, 1168, 363, 381, 0]], [[391, 110, 1461, 869, 363, 388, 0]], [[411, 120, 1824, 1417, 194, 206, 0]], [[411, 123, 1824, 1624, 194, 202, 0]], [[411, 123, 717, 3037, 194, 202, 0]], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
            }, wa: [13, 0, 0, 2037, 3364], bg: "rgba(59,227,227,1)", loop: !1, Ba: 0
        },
        mb: "Owl Fact",
        Ib: M.g.Ac,
        Gb: M.g.Bc,
        Va: new ze(745, 388, 53),
        Ua: {x: 940, y: 520},
        Mb: 2.5,
        $a: "#02b9bb",
        backgroundColor: "#3be3e3",
        nb: "owl"
    }], Ke = [{
        tb: {x: 191, y: 82, width: 40, height: 46},
        Fb: [[1, 131, 1392, 126, 89], [1, 260, 1392, 126, 89],
            [1, 389, 1392, 126, 89], [1, 518, 1392, 126, 89], [1, 1796, 1402, 126, 89], [1, 1925, 1402, 126, 89], [1, 2054, 1402, 126, 89], [1, 2183, 1402, 126, 89], [1, 2312, 1402, 126, 89], [1, 131, 1484, 126, 89], [1, 260, 1484, 126, 89], [1, 389, 1484, 126, 89], [1, 389, 1484, 126, 89]],
        ub: {x: 165, y: 0},
        Ja: !1,
        wb: "chimney"
    }, {
        tb: {x: 422, y: 209, width: 90, height: 187},
        Fb: [[1, 890, 1805, 91, 184], [1, 890, 1805, 91, 184], [1, 984, 1826, 91, 184], [1, 984, 1826, 91, 184], [1, 1078, 1826, 91, 184], [1, 1078, 1826, 91, 184], [1, 1172, 1826, 91, 184], [1, 1172, 1826, 91, 184], [1, 1266, 1826, 91, 184], [1, 1266, 1826,
            91, 184], [1, 1360, 1826, 91, 184], [1, 1360, 1826, 91, 184], [1, 1454, 1826, 91, 184], [1, 1454, 1826, 91, 184], [1, 1548, 1826, 91, 184], [1, 0, 1827, 91, 184]],
        ub: {x: 422, y: 209},
        Ja: !0,
        wb: "plant"
    }, {
        tb: {x: 868, y: 441, width: 86, height: 86},
        Fb: [[1, 466, 1904, 86, 86], [1, 2200, 1904, 86, 86], [1, 2289, 1904, 86, 86], [1, 555, 1907, 86, 86], [1, 644, 1907, 86, 86], [1, 733, 1907, 86, 86], [1, 1642, 1912, 86, 86], [1, 94, 1916, 86, 86], [1, 183, 1916, 86, 86], [1, 272, 1916, 86, 86], [1, 361, 1916, 86, 86], [1, 1731, 1924, 86, 86], [1, 1820, 1924, 86, 86], [1, 1909, 1924, 86, 86], [1, 1998, 1924, 86, 86], [1,
            2087, 1924, 86, 86], [1, 2378, 1929, 86, 86], [1, 822, 1992, 86, 86], [1, 450, 1993, 86, 86], [1, 2176, 1993, 86, 86], [1, 466, 1904, 86, 86], [1, 466, 1904, 86, 86], [1, 466, 1904, 86, 86], [1, 466, 1904, 86, 86], [1, 466, 1904, 86, 86], [1, 466, 1904, 86, 86], [1, 466, 1904, 86, 86]],
        ub: {x: 868, y: 441},
        Ja: !0,
        wb: "pumpkin"
    }, {
        tb: {x: 46, y: 51, width: 90, height: 75},
        Fb: [[1, 640, 1829, 90, 75], [1, 733, 1829, 90, 75], [1, 1642, 1834, 90, 75], [1, 94, 1838, 90, 75], [1, 187, 1838, 90, 75], [1, 280, 1838, 90, 75], [1, 373, 1838, 90, 75], [1, 1735, 1846, 90, 75], [1, 1828, 1846, 90, 75], [1, 1921, 1846, 90, 75], [1,
            2014, 1846, 90, 75], [1, 2107, 1846, 90, 75], [1, 640, 1829, 90, 75]],
        ub: {x: 46, y: 51},
        Ja: !1,
        wb: "antennae"
    }, {
        tb: {x: 761, y: 17, width: 76, height: 79},
        Fb: [[1, 1285, 587, 76, 79], [1, 1285, 669, 76, 79], [1, 2420, 1704, 76, 79], [1, 1900, 2013, 76, 79], [1, 1979, 2013, 76, 79], [1, 2058, 2013, 76, 79], [1, 0, 2014, 76, 79], [1, 2351, 2018, 76, 79], [1, 2265, 2080, 76, 79], [1, 797, 2081, 76, 79], [1, 438, 2082, 76, 79], [1, 517, 2083, 76, 79], [1, 596, 2083, 76, 79], [1, 0, 2014, 76, 79], [1, 675, 2083, 76, 79], [1, 2137, 2082, 76, 79], [1, 1599, 2088, 76, 79], [1, 79, 2092, 76, 79], [1, 158, 2092, 76, 79], [1, 237,
            2092, 76, 79], [1, 316, 2092, 76, 79], [1, 1900, 2095, 76, 79], [1, 1979, 2095, 76, 79], [1, 2058, 2095, 76, 79], [1, 0, 2096, 76, 79], [1, 876, 2100, 76, 79]],
        ub: {x: 761, y: 17},
        Ja: !1,
        wb: "weathervane"
    }, {
        tb: {x: 265, y: 233, width: 130, height: 270},
        Fb: [[1, 518, 1484, 125, 207], [1, 1796, 1494, 125, 207], [1, 1924, 1494, 125, 207], [1, 1924, 1494, 125, 207], [1, 2052, 1494, 125, 207], [1, 2052, 1494, 125, 207], [1, 2180, 1494, 125, 207], [1, 2180, 1494, 125, 207], [1, 2308, 1494, 125, 207], [1, 2308, 1494, 125, 207], [1, 646, 1529, 125, 207], [1, 774, 1529, 125, 207], [1, 902, 1543, 125, 207], [1, 1030,
            1564, 125, 207], [1, 1158, 1564, 125, 207], [1, 1286, 1564, 125, 207], [1, 1414, 1564, 125, 207], [1, 1542, 1564, 125, 207], [1, 0, 1565, 125, 207], [1, 128, 1576, 125, 207], [1, 256, 1576, 125, 207], [1, 384, 1576, 125, 207], [1, 512, 1694, 125, 207], [1, 512, 1694, 125, 207], [1, 512, 1694, 125, 207], [1, 512, 1694, 125, 207], [1, 512, 1694, 125, 207], [1, 512, 1694, 125, 207]],
        ub: {x: 275, y: 280},
        Ja: !1,
        wb: "octopus"
    }];
    var Le = function (a, b) {
        this.g = a;
        this.i = b
    };
    var Me = function (a) {
        this.g = [];
        if (a) a:{
            if (a instanceof Me) {
                var b = a.La();
                a = a.Ha();
                if (0 >= this.g.length) {
                    for (var c = this.g, d = 0; d < b.length; d++) c.push(new Le(b[d], a[d]));
                    break a
                }
            } else b = ab(a), a = $a(a);
            for (d = 0; d < b.length; d++) Ne(this, b[d], a[d])
        }
    }, Ne = function (a, b, c) {
        var d = a.g;
        d.push(new Le(b, c));
        b = d.length - 1;
        a = a.g;
        for (c = a[b]; 0 < b;) if (d = b - 1 >> 1, a[d].g > c.g) a[b] = a[d], b = d; else break;
        a[b] = c
    }, Oe = function (a) {
        return a.g[0] && a.g[0].g
    };
    Me.prototype.Ha = function () {
        for (var a = this.g, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].i);
        return b
    };
    Me.prototype.La = function () {
        for (var a = this.g, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].g);
        return b
    };
    var Pe = function () {
        Me.call(this)
    };
    A(Pe, Me);
    var Qe = function () {
        this.i = this.g = 0;
        this.j = new Pe;
        this.o = 1
    }, Re = function (a, b) {
        var c = Be;
        Ne(c.j, c.g + b, a)
    };
    Qe.prototype.reset = function () {
        this.i = this.g = 0;
        this.o = 1;
        this.j = new Pe
    };
    var Se = 1E3 / 15, Be = new Qe;
    var Te = S.$(), U = function (a, b, c, d, e) {
        this.j = a;
        this.x = b;
        this.y = c;
        this.v = null != d ? d : a[0][3];
        this.S = null != e ? e : a[0][4];
        this.i = 0;
        this.g = this.o = !1;
        this.T = 1E3 / 12;
        this.H = this.j.length;
        this.s = 0;
        this.U = !0
    }, V = function (a, b) {
        var c = a.j[a.i], d = a.x, e = a.y, f = a.v, g = a.S, h = c[1], k = c[2], l = c[3], m = c[4];
        if (void 0 == f) {
            var r = h;
            var n = k;
            var q = l;
            var w = m;
            f = l;
            g = m
        } else r = h, n = k, q = l, w = m;
        if (r < h) {
            var u = h - r;
            r = h;
            q -= u;
            d += u;
            f -= u
        }
        n < k && (u = k - n, n = k, w -= u, e += u, g -= u);
        r + q > h + l && (h = r + q - (h + l), q -= h, f -= h);
        n + w > k + m && (k = n + w - (k + m), w -= k, g -= k);
        c = Te.g[he(c)];
        if (!c.isLoaded()) throw Error("m");
        0 < q && 0 < w && b.drawImage(c.image, r, n, q, w, d, e, f, g);
        !a.U || a.g && !a.o || 1 == a.H || (a.s += Be.i, a.i = Math.floor(a.s / a.T), a.i >= a.H - 1 && (1 < a.H && (a.g = !0), a.o && (a.i %= a.H - 0)))
    };
    U.prototype.reset = function () {
        this.i = 0;
        this.g = !1;
        this.s = 0
    };
    var Ue = function (a) {
        a.o = !0;
        a.g = !1
    };
    var Ve = function () {
        this.g = []
    };
    Ve.prototype.addListener = function (a) {
        this.g.push(a)
    };
    Ve.prototype.removeListener = function (a) {
        Qa(this.g, a)
    };
    y(Ve);
    var We = function (a, b, c) {
        this.g = a;
        this.j = b;
        this.i = c
    }, Xe = function (a, b) {
        if (0 == b) return 0;
        if (1 == b) return 1;
        var c = G(0, a.g, b), d = G(a.g, a.i, b), e = G(a.i, 1, b);
        c = G(c, d, b);
        d = G(d, e, b);
        return G(c, d, b)
    }, Ye = function (a, b) {
        var c = b - 0;
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
            f = Xe(a, c);
            var h = (Xe(a, c + 1E-6) - f) / 1E-6;
            if (1E-6 > Math.abs(f - b)) return c;
            if (1E-6 > Math.abs(h)) break; else f < b ? d = c : e = c, c -= (f - b) / h
        }
        for (g = 0; 1E-6 < Math.abs(f - b) && 8 > g; g++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = Xe(a, c);
        return c
    };
    var Ze = function (a, b, c) {
        var d = new We(a, b, c);
        return function (e) {
            e = Ye(d, e);
            if (0 == e) e = 0; else if (1 == e) e = 1; else {
                var f = G(0, d.j, e), g = G(d.j, 1, e), h = G(1, 1, e);
                f = G(f, g, e);
                g = G(g, h, e);
                e = G(f, g, e)
            }
            return e
        }
    }, $e = function () {
        return function (a) {
            return Math.floor(4 * a) / 4
        }
    }, af = Ze(.25, .1, .25), bf = function (a) {
        return a
    }, cf = Ze(.4, 0, 1), df = Ze(0, 0, .6);
    var ef = function (a, b, c, d, e) {
        this.o = a;
        this.s = b;
        this.H = {};
        this.duration = c;
        this.U = d || af;
        this.j = e || Nd;
        this.g = null;
        this.i = !1
    }, gf = function (a) {
        var b = Math.min(Math.max(ff(a) / a.duration, 0), 1);
        a.i && (b = 1 - b);
        for (var c in a.o) if (a.s.hasOwnProperty(c)) {
            var d = a.H, e = c;
            var f = a.o[c];
            var g = a.s[c], h = a.U;
            h = void 0 === h ? af : h;
            f += h(b) * (g - f);
            d[e] = f
        }
        return a.H
    }, hf = function (a) {
        return ff(a) >= a.duration
    }, ff = function (a) {
        return null === a.g ? 0 : a.j() - a.g
    };
    ef.prototype.start = function () {
        this.g = this.j();
        this.i = !1
    };
    ef.prototype.resume = function () {
        if (null !== this.g) {
            if (this.i) {
                var a = Math.min(this.duration, ff(this));
                this.g = this.j() - (this.duration - a);
                this.i = !1
            }
        } else this.start()
    };
    ef.prototype.reset = function () {
        this.g = null
    };
    var jf = function () {
        var a = document.createElement("div");
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.position = "absolute";
        a.style.left = "0";
        a.style.top = "0";
        a.style.background = "#000";
        a.style.pointerEvents = "none";
        a.style.opacity = "0";
        a.style.zIndex = "9";
        this.j = a;
        this.i = this.g = null
    }, kf = function (a) {
        var b = {};
        b.opacity = a;
        return b
    }, lf = function (a) {
        return new Promise(function (b) {
            a.i && a.i();
            a.i = b
        })
    };
    y(jf);
    var mf = function (a, b) {
        a.innerHTML = "";
        a.classList.add("ddltr");
        a.style.direction = Zd ? "rtl" : "ltr";
        var c = document.createElement("span");
        c.style.display = "inline-block";
        var d = b.text, e = void 0, f = Ud("msgs", {});
        void 0 === e && (e = d);
        if (!(f = f[d])) {
            var g = Ud("alltranslations", {});
            if (g) if (f = g.messages, g = g.translations, f && g) {
                for (var h = -1, k = 0; k < f.length; k++) if (f[k] == d) {
                    h = k;
                    break
                }
                f = -1 == h ? "" : (g[Xd] || g.en).ALL[h]
            } else f = ""; else f = ""
        }
        d = f || e;
        e = jb(d);
        c.innerText = (1 == e ? "\u202a" + d + "\u202c" : -1 == e ? "\u202b" + d + "\u202c" : d).replace(/_/g,
            "\n");
        a.appendChild(c);
        a.style.position = "absolute";
        a.style.top = b.y + "px";
        a.style.left = b.x + "px";
        a.style.width = b.width + "px";
        a.style.height = b.height + "px";
        d = "rotate(" + b.angle + "deg)";
        a.style.webkitTransform = d;
        a.style.MozTransform = d;
        a.style.transform = d;
        a.style.whiteSpace = b.Xb ? "normal" : "nowrap";
        c.style.fontFamily = b.fontFamily;
        c.style.fontSize = b.fontSize + "px";
        c.style.padding = b.padding + "px";
        d = b.fontSize;
        for (e = b.height / 2; (c.offsetHeight > b.height || c.offsetWidth > b.width || c.offsetTop > e) && 8 < d;) c.style.fontSize =
            --d + "px";
        c.style.fontWeight = b.fontWeight;
        c.style.fontStyle = b.fontStyle;
        c.style.lineHeight = b.lineHeight;
        c.style.color = b.color;
        a.style.textAlign = Zd && "left" == b.textAlign ? "right" : b.textAlign;
        c.style.textShadow = b.textShadow;
        c.style.verticalAlign = b.verticalAlign;
        c.style.backgroundColor = b.backgroundColor;
        c.style.borderRadius = b.borderRadius
    }, nf = function (a, b, c) {
        Re(function () {
            a.classList.add(b)
        }, void 0 === c ? 100 : c)
    }, of = function (a) {
        var b = jf.$(), c = parseFloat(b.j.style.opacity);
        b.g = new ef(kf(c), kf(0), a * c);
        b.g.start();
        lf(b)
    }, pf = function (a) {
        var b = jf.$(), c = parseFloat(b.j.style.opacity);
        b.g = new ef(kf(c), kf(1), a * (1 - c));
        b.g.start();
        return lf(b)
    };
    var qf = S.$(), rf = function (a) {
        this.Da = a;
        this.o = new U([a.Ra], a.Pa.x, a.Pa.y);
        this.i = null;
        null != a.Qa && (this.i = new U(a.Qa, a.ab.x, a.ab.y, a.Qa[0][3], a.Qa[0][4]));
        this.H = !1;
        this.T = new U([a.Db], a.Sa.x, a.Sa.y);
        this.W = new U([a.Cb], a.Sa.x, a.Sa.y);
        this.g = null;
        null != this.Da.Ab && (this.g = new U(a.Bb, a.Ab.x, a.Ab.y, a.Bb[0][3] * a.Lb, a.Bb[0][4] * a.Lb), Ue(this.g));
        this.j = [];
        this.j.push(this.o);
        this.j.push(this.T);
        this.j.push(this.W);
        null != this.g && this.j.push(this.g);
        null != this.i && this.j.push(this.i);
        this.U = !1;
        this.Pb = new Set;
        this.v = this.V = !1;
        this.ha = new Promise(function (b) {
            return ie(qf, [a.Jb, a.Hb, a.rb], function () {
                return b()
            })
        });
        this.S = 0;
        this.s = 1;
        this.ka = a.vb
    }, sf = function (a) {
        a.U || (a.v = !0);
        a.U = !0
    }, tf = function (a, b) {
        a.j.forEach(function (c) {
            c.y += b
        })
    };
    var uf = "en af sq am ar hy az eu be bn bs bg my ca zh-HK zh-CN zh-TW hr cs da nl en-GB et fa fil fi fr fr-CA gl ka de el gu iw hi hu is id it ja kn kk km ko ky lo lv lt mk ms ml mr mn ne no pl pt-BR pt-PT pa ro ru sr si sk sl es-419 es sw sv ta te th tr uk ur uz vi zu".split(" ");
    var vf = Math.PI / 180, Af = function (a, b, c) {
            this.H = a;
            this.U = b;
            this.g = c;
            this.v = 14 <= this.g ? 3 + (2 * this.g - 28) / 12 : 3 - (28 - 2 * this.g) / 16;
            this.s = "#ff7d14";
            a = vf / 2;
            this.i = new wf([{Aa: 0, value: -Math.PI / 2 - a}, {Aa: .5, value: -Math.PI / 2 - a}, {
                Aa: 1,
                value: Math.PI - a
            }], 1333, Ze(.4, 0, .2));
            this.j = new wf([{Aa: 0, value: -Math.PI / 2 + a}, {Aa: .5, value: Math.PI + a}, {
                Aa: 1,
                value: Math.PI + a
            }], 1333, Ze(.4, 0, .2));
            this.o = new wf([{Aa: 0, value: 0}, {Aa: 1, value: -2 * Math.PI}], 5332, $e());
            this.S = new wf([{Aa: 0, value: 0}, {Aa: 1, value: 2 * Math.PI}], xf, bf);
            this.T = Nd()
        },
        xf = 2666 * Math.PI / (1.2 * Math.PI + (2 * Math.PI - 3 * Math.PI / 2)), wf = function (a, b, c) {
            Ua(a, function (e, f) {
                return e.Aa - f.Aa
            });
            var d = a[0];
            d && 0 != d.Aa && this.g.unshift({Aa: 0, value: d.value});
            (d = a[a.length - 1]) && 1 != d.Aa && this.g.push({Aa: 1, value: d.value});
            this.g = a;
            this.j = b;
            this.i = c
        }, Bf = function (a, b) {
            for (var c = b / a.j % 1, d = 1, e = a.g.length; d < e; d++) {
                if (c == a.g[d].Aa) return a.g[d].value;
                if (a.g[d].Aa > c) return e = a.g[d - 1], d = a.g[d], c = a.i((c - e.Aa) / (d.Aa - e.Aa)), e = e.value, e + Math.min(1, Math.max(0, c)) * (d.value - e)
            }
            return a.g[a.g.length - 1].value
        };
    var Cf = function () {
        this.g = document.querySelector(".ddl-loadscreen");
        this.o = this.g.getContext("2d");
        this.j = null;
        this.i = !1
    }, Df = function (a) {
        a.o.clearRect(0, 0, a.g.width, a.g.height);
        if (null !== a.j) {
            var b = a.j;
            a = a.o;
            a.save();
            a.translate(b.H, b.U);
            var c = Nd() - b.T;
            a.rotate(Bf(b.S, c) + Bf(b.o, c));
            a.beginPath();
            a.lineWidth = b.v;
            a.strokeStyle = b.s;
            a.lineCap = "square";
            a.arc(0, 0, b.g, Bf(b.i, c), Bf(b.j, c));
            a.stroke();
            a.restore()
        }
    }, Ef = function (a) {
        a.g.width = 2 * a.g.clientWidth;
        a.g.height = 2 * a.g.clientHeight;
        a.j = new Af(a.g.width /
            2, a.g.height / 2, a.g.height / 20);
        a.g.classList.remove("hidden");
        a.i = !0
    };
    Cf.prototype.isVisible = function () {
        return this.i
    };
    var Ff = function () {
        if (Q()) throw"";
        return !Fd && (Gd || Ld())
    }, Gf = function () {
        if (Q()) throw"";
        return Md() || Jd || Fd
    }, Hf = function () {
        return Q() ? "1" == P.g.get("ccta") : Md() && !Ld() || Jd && Fd
    };
    var If = [5, 6, 7, 8, 9, 11, 12, 16], Jf = 0, Kf = 0, Lf = !1, W = {}, Mf = [], Nf = function () {
        Kf = z();
        W.d = "119277346";
        !Lf && Hf() && (Lf = !0, X(10))
    }, Of = function (a, b) {
        W[a] = b;
        !Mf.includes(a) && Mf.push(a)
    }, X = function (a) {
        var b = z();
        W.dt = b - Kf;
        Kf = b;
        0 == a && (Jf = b);
        W.e = a;
        W.t = 0 == Jf ? -1 : Math.floor(b - Jf);
        W.m = Fd ? 1 : 0;
        b = window.document;
        b = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
        b = new yc(b.clientWidth, b.clientHeight);
        W.w = b.width > b.height ? 1 : 0;
        b = [];
        for (var c in W) W.hasOwnProperty(c) && b.push(c + ":" + W[c]);
        c = b.join(",");
        b = 10 == a;
        var d = 0 <= If.indexOf(a);
        Ld() && (c += "&ntp=1");
        b ? (b = fe()) && (c += "&ved=" + b) : d && (ce || ((b = document.getElementById("hplogoshareved")) ? ce = b.getAttribute("data-ved") : Q() && zd(P.g, "sved") && (ce = P.g.get("sved"))), (b = ce) && (c += "&ved=" + b));
        -1 == c.search("&ei=") && (c += "&ei=", (b = ee()) && (c += b));
        for (window.google && window.google.log ? window.google.log("doodle", c) : hd(c); 0 < Mf.length;) delete W[Mf.pop()];
        Lf || 0 != a || Hf() || (Lf = !0, X(10))
    };
    var Pf = function () {
        this.g = [];
        Nf()
    }, Sf = function () {
        var a = Qf;
        X(101);
        Rf(a, 0)
    }, Tf = function () {
        var a = Qf;
        X(0);
        Rf(a, 1)
    }, Vf = function (a, b) {
        var c = Uf;
        Of("d1", a);
        Of("d5", b);
        X(102);
        Rf(c, 2)
    }, Wf = function () {
        var a = Uf;
        X(2);
        Rf(a, 4)
    }, Rf = function (a, b) {
        a.g.includes(b) || (W.c = b, X(1), a.g.push(b))
    };
    y(Pf);
    var Xf = function (a) {
        B.call(this, a);
        this.o = this.g = this.H = null
    };
    t(Xf, B);
    Xf.prototype.preload = function () {
        var a = this;
        this.H || this.g || (this.g = Fc(this.Kb, function () {
            return a.i()
        }))
    };
    Xf.prototype.i = function () {
        var a = this;
        this.g && Nc(this.g) && (this.H = Oc(this.g), this.g.Qb(), this.g = null, this.o = new Image, this.o.onload = function () {
            return B.prototype.i.call(a)
        }, this.o.src = "data:image/svg+xml;utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(this.H)))
    };
    Xf.prototype.hb = function () {
        return this.o
    };
    var Yf = function (a, b) {
        this.g = b.map(function (c) {
            return new Xf(a + c)
        })
    };
    Yf.prototype.preload = function (a, b) {
        var c = "number" == typeof a ? this.g[a] : this.g[a[0]];
        return (new Promise(function (d) {
            Ka(c, d);
            c.preload()
        })).then(function () {
            return b && b()
        })
    };
    var Zf = function (a, b, c) {
        c = void 0 === c ? 1 : c;
        var d = document.createElement("div");
        d.style.width = b[3] * c + "px";
        d.style.height = b[4] * c + "px";
        c = void 0 === c ? 1 : c;
        a = "number" == typeof b ? a.g[b] : a.g[b[0]];
        d.style.background = "url(" + a.Kb + ") " + (-b[1] * c + "px " + -b[2] * c + "px/") + (a.hb().width * c + "px " + (a.hb().height * c + "px no-repeat"));
        return d
    };
    var ag = function () {
        Yf.call(this, "img/halloween-2019/", $f)
    };
    t(ag, Yf);
    var $f = ["svg-sprite.svg"], bg = [0, 20, 20, 73, 72], cg = [0, 20, 624, 80, 80], dg = [0, 20, 724, 80, 80],
        eg = [0, 20, 112, 80, 80], fg = [0, 20, 824, 80, 80], gg = [0, 20, 924, 80, 80], hg = [0, 20, 212, 72, 72],
        ig = [0, 20, 1024, 80, 80], jg = [0, 20, 304, 80, 80], kg = [0, 20, 404, 80, 80], lg = [0, 20, 1124, 80, 80],
        mg = [0, 20, 504, 273, 100];
    y(ag);
    var qg = function (a, b, c) {
        E.call(this);
        this.W = a;
        this.ta = b;
        this.va = c;
        this.V = z();
        this.ha = Td(document, "hidden");
        this.o = (this.T = Td(document, "visibilityState")) ? this.T.replace(/state$/i, "change").toLowerCase() : null;
        this.s = ng(this);
        this.j = !1;
        this.v = this.s;
        og(this);
        pg(this)
    };
    t(qg, E);
    var og = function (a) {
        a.o ? rg(a) : Dd && sg(a, function () {
            rg(a)
        })
    }, rg = function (a) {
        a.g = function () {
            a.s = ng(a);
            a.s || (a.V = z(), a.j = !1);
            tg(a)
        };
        var b = window.agsa_ext;
        a.o ? document.addEventListener(a.o, a.g, !1) : b && b.registerPageVisibilityListener && (google.doodle || (google.doodle = {}), google.doodle.pvc = function () {
            a.g && a.g()
        }, b.registerPageVisibilityListener("google.doodle.pvc();"))
    }, sg = function (a, b) {
        window.agsa_ext ? b() : a.ka = window.setTimeout(function () {
            og(a)
        }, 100)
    };
    qg.prototype.i = function () {
        window.clearTimeout(this.S);
        window.clearTimeout(this.ka);
        this.g && (this.o && document.removeEventListener ? document.removeEventListener(this.o, this.g, !1) : window.agsa_ext && window.agsa_ext.registerPageVisibilityListener && (this.g = null));
        E.prototype.i.call(this)
    };
    var ng = function (a) {
        if (!a.ha && !a.T && window.agsa_ext && window.agsa_ext.getPageVisibility) return "hidden" == window.agsa_ext.getPageVisibility();
        var b = document[a.T];
        return document[a.ha] || "hidden" == b
    }, tg = function (a) {
        var b = a.s || a.j;
        a.v && !b ? (a.v = !1, a.va(), pg(a)) : !a.v && b && (a.v = !0, a.ta())
    }, pg = function (a) {
        a.S && window.clearTimeout(a.S);
        var b = Math.max(100, a.W - ug(a));
        a.S = window.setTimeout(function () {
            a.S = null;
            a.j = ug(a) >= a.W;
            a.j || pg(a);
            tg(a)
        }, b)
    }, ug = function (a) {
        return z() - a.V
    };
    var vg = function () {
    };
    t(vg, ye);
    vg.prototype.contains = function () {
        return !1
    };
    vg.prototype.o = function () {
    };
    var wg = function (a, b) {
        this.o = a;
        this.V = void 0 === b ? null : b;
        this.j = [];
        this.g = null;
        this.H = this.s = 0;
        this.ha = this.U = !1;
        this.v = [];
        this.ka = this.o.width / this.o.clientWidth;
        this.S = this.o.height / this.o.clientHeight;
        this.W = [this.o];
        this.T = !1
    }, xg = function (a, b) {
        a.ka = a.o.width / a.o.clientWidth;
        a.S = a.o.height / a.o.clientHeight;
        void 0 !== b && (a.T = b)
    }, zg = function (a, b, c) {
        a.j.push(new yg(b, c))
    }, Cg = function (a, b) {
        for (var c = a.j.length - 1; 0 <= c; c--) a.j[c].i === b && a.j.splice(c, 1);
        a.g && b === a.g.i && (a.g = null, Ag(a));
        a.i && b === a.i.i && (a.i =
            null);
        Bg(a, "areamove", a.s, a.H)
    };
    wg.prototype.handleEvent = function (a) {
        var b = a.j;
        var c = void 0;
        b = (b = b || window.event) ? (c = c || b.targetTouches && b.targetTouches[0] || b.changedTouches && b.changedTouches[0]) && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== b.clientX ? [b.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), b.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== b.pageX ? [b.pageX, b.pageY] : [0, 0] : [0, 0];
        c = this.o;
        var d = 0, e = 0;
        if (c) {
            do d += c.offsetLeft, e += c.offsetTop;
            while (c = c.offsetParent)
        }
        c = [d, e];
        c = [b[0] - c[0], b[1] - c[1]];
        c[0] *= this.ka;
        c[1] *= this.S;
        this.T && (b = c[0], c[0] = c[1], c[1] = 0 - b);
        b = c[0];
        c = c[1];
        this.V && (d = this.V, d.V = z(), d.j = !1, tg(d));
        this.s = b;
        this.H = c;
        a = a.type;
        this.ha && 0 == a.indexOf("mouse") || (b = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove"
        }, a in b && (this.ha = !0, a = b[a]), Bg(this, a, this.s, this.H))
    };
    var Bg = function (a, b, c, d) {
        if (!a.U && "mousedown" == b) {
            a.U = !0;
            for (var e = 0; e < a.v.length; e++) a.v[e]()
        }
        if ("mousedown" == b) {
            if (!a.i) for (b = 0; b < a.j.length; b++) if (e = a.j[b], e.i.contains(c, d)) {
                a.i = e;
                e.g("mousedown", c, d);
                break
            }
        } else if ("mouseup" == b) a.i ? (a.i.g("mouseup", c, d), a.i = null) : a.g && a.g.g("mouseup", c, d); else if ("mousemove" == b || "areamove" == b) {
            e = null;
            for (var f = 0; f < a.j.length; f++) {
                var g = a.j[f];
                if (g.i.contains(c, d)) {
                    e = g;
                    break
                }
            }
            a.g != e && (a.g && a.g.g("mouseout", c, d), e && e.g("mouseover", c, d), a.g = e);
            if ("mousemove" == b) for (a.i &&
                                       a.i.g("mousemove", c, d), b = 0; b < a.j.length; b++) e = a.j[b], e != a.i && e.i.contains(c, d) && e.g("mousemove", c, d)
        } else "mouseout" == b ? (a.g && a.g.g("mouseout", c, d), a.i = null, a.g = null) : "contextmenu" == b && a.g && a.g.g("contextmenu", c, d);
        Ag(a)
    }, Ag = function (a) {
        for (var b = a.g && a.g.i.hc() ? "pointer" : "default", c = 0, d; d = a.W[c]; c++) R(d, "cursor", b)
    }, yg = function (a, b) {
        this.i = a;
        this.g = b
    };
    (function () {
        var a = new vg;
        a.contains = function () {
            return !0
        };
        a.hc = function () {
            return !1
        };
        return a
    })();
    S.$();
    var Dg = ag.$(), Y = function (a, b) {
        E.call(this);
        this.j = b;
        this.j.style.pointerEvents = "all";
        this.s = a;
        this.g = this.s.getContext("2d");
        this.Fa = Date.now()
    };
    t(Y, E);
    var Z = function (a, b, c, d) {
        a = Zf(b, a, void 0 === d ? 1 : d);
        c && bc(a, ["click"], c);
        return a
    }, Fg = function (a, b) {
        var c = document.createElement("div");
        c.classList.add("back-nav-container");
        var d = Z(bg, Dg, function () {
        }, 1);
        d.classList.add("back-button");
        var e = Z(eg, Dg, function () {
            return xa(new wa(new sa(function (g) {
                if (1 == g.i) {
                    var h = pf(200);
                    g.i = 2;
                    return {value: h}
                }
                a.destroy();
                h = Ve.$();
                for (var k = h.g.slice(0), l = 0; l < k.length; l++) -1 != h.g.indexOf(k[l]) && Eg(k[l]);
                g.i = 0
            })))
        }, 1);
        e.classList.add("back-button-icon");
        d.appendChild(e);
        c.appendChild(d);
        if (null != b) {
            var f = Z(bg, Dg, function () {
            }, 1);
            f.appendChild(b);
            f.classList.add("tot-button");
            b.classList.add("tot-button-icon");
            Re(function () {
                c.appendChild(f)
            }, 200)
        }
        return c
    }, Gg = function (a, b) {
        var c = document.createElement("div");
        c.classList.add("black-wipe");
        c.style.backgroundColor = b;
        a.j.appendChild(c);
        return c
    };
    Y.prototype.ka = function () {
    };
    Y.prototype.ha = function () {
    };
    var Hg = function (a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        var g = document.createElement("canvas");
        g.width = b.width;
        g.height = b.height;
        Ee.call(this, g.getContext("2d"), b, c, d, e, f);
        this.T = a
    };
    t(Hg, Ee);
    Hg.prototype.H = function () {
        Ee.prototype.H.call(this);
        this.T.drawImage(this.o.canvas, 0, 0)
    };
    var Ig = {
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
        ca: ["en", "fr"],
        cd: ["fr", "sw"],
        cf: ["fr"],
        cg: ["fr"],
        ch: ["de", "en",
            "fr", "it"],
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
        gl: ["da", "en"],
        gm: ["en", "wo"],
        gp: ["fr"],
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
        lb: ["ar", "en", "fr",
            "hy"],
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
        nz: ["en"],
        om: ["ar", "en"],
        pa: ["es-419", "en", "es"],
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
        th: ["th",
            "en"],
        tj: ["tg", "ru"],
        tk: ["en"],
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
    var Jg = function () {
        this.g = this.i = null
    };
    Jg.prototype.load = function (a, b, c, d) {
        var e = this;
        a = Kg(this, a, b, c);
        if (null == a) return Promise.resolve();
        var f = d + "messages." + a + ".nocache.json", g = new I;
        g.va = "text";
        return new Promise(function (h, k) {
            g.addEventListener("success", function () {
                try {
                    var l = g.g ? g.g.responseText : ""
                } catch (m) {
                    l = ""
                }
                e.i = JSON.parse(l.substring(5));
                h()
            });
            g.addEventListener("error", k);
            g.send(f)
        })
    };
    var Lg = function (a, b) {
        if (null == a.i) throw"Translations not loaded";
        var c = void 0 === a.i[b] ? "" : a.i[b];
        var d = jb(c);
        return 1 == d ? "\u202a" + c + "\u202c" : -1 == d ? "\u202b" + c + "\u202c" : c
    }, Kg = function (a, b, c, d) {
        var e = b + "-" + c;
        if (-1 < d.indexOf(e)) return a.g = b, e;
        if (b && -1 < d.indexOf(b)) return a.g = b;
        if (c && Ig[c]) for (b = p(Ig[c]), c = b.next(); !c.done; c = b.next()) if (c = c.value, -1 < d.indexOf(c)) return a.g = c, a.g;
        return -1 < d.indexOf("en") ? (a.g = "en", a.g) : a.g = null
    };
    y(Jg);
    var Mg = S.$(), Ng = ag.$();
    Pf.$();
    var Og = Jg.$(), Qg = function (a, b, c, d, e, f) {
        Y.call(this, d, e, f);
        var g = this;
        this.v = [];
        this.o = a.Da;
        this.W = this.o.Ka.loop ? De(this.o.Ka.Ba) : new Ae(-1, 12);
        this.W.g = 1;
        this.Ca = new Hg(this.g, this.o.Ka.ya, Mg.hb(this.o.Ka.wa), je(this.o.Ka.wa), this.W, !0);
        this.ta = this.o.Ka.bg;
        this.T = Z(mg, Ng, function () {
            X(104);
            g.destroy();
            b()
        }, 1);
        this.S = Z(mg, Ng, function () {
            X(105);
            g.destroy();
            c()
        }, 1);
        this.va = {
            text: "",
            x: 80,
            y: 0,
            width: 193,
            height: 100,
            angle: 0,
            fontFamily: "noto sans",
            fontSize: 100,
            fontWeight: "bold",
            fontStyle: "normal",
            color: "black",
            lineHeight: "1.1em",
            Xb: !1,
            textAlign: "center",
            textShadow: "none",
            verticalAlign: "middle",
            backgroundColor: "none",
            padding: "25",
            borderRadius: "40px"
        };
        this.V = new Cf;
        Ef(this.V);
        a.ha.then(function () {
            Pg(g);
            var h = g.V;
            h.g.classList.add("hidden");
            h.i = !1
        })
    };
    t(Qg, Y);
    Qg.prototype.ka = function () {
        Ce(this.W)
    };
    Qg.prototype.ha = function () {
        this.g.save();
        this.g.setTransform(1, 0, 0, 1, 0, 0);
        this.g.fillStyle = this.ta;
        this.g.fillRect(0, 0, this.s.width, this.s.height);
        this.V.isVisible() ? Df(this.V) : He(this.Ca);
        this.g.restore()
    };
    Qg.prototype.destroy = function () {
        var a = this;
        this.v.forEach(function (b) {
            a.j.removeChild(b)
        })
    };
    var Pg = function (a) {
        var b = document.createElement("div"), c = document.createElement("div"), d = document.createElement("div"),
            e = Fg(a), f = Z(jg, Ng, function () {
            }, 1), g = Z(kg, Ng, function () {
            }, 1);
        a.S.appendChild(f);
        a.S.appendChild(d);
        a.T.appendChild(g);
        a.T.appendChild(c);
        b.classList.add("button-container");
        b.style.border = "2px solid " + a.ta;
        a.T.classList.add("choice-button");
        a.T.classList.add("trick-button");
        a.S.classList.add("choice-button");
        a.S.classList.add("treat-button");
        f.classList.add("choice-icon");
        g.classList.add("choice-icon");
        c.style.pointerEvents = "none";
        d.style.pointerEvents = "none";
        a.v.push(e);
        a.v.push(b);
        a.v.push(a.T);
        a.v.push(a.S);
        a.v.forEach(function (h) {
            a.j.appendChild(h)
        });
        b = bb(a.va);
        b.text = Lg(Og, "Trick");
        e = bb(a.va);
        e.text = Lg(Og, "Treat");
        mf(c, b);
        mf(d, e);
        of(200)
    };
    var Rg = {
        width: 960,
        height: 540,
        frames: [[[0, 0, 0, 0, 960, 540, 0]], [[13, 10, 0, 3635, 443, 393, 0], [594, 18, 1947, 0, 89, 186, 0], [582, 305, 1645, 671, 58, 69, 0], [728, 182, 1958, 780, 58, 137, 0]], [[11, 10, 473, 3133, 459, 393, 0], [594, 18, 1947, 373, 87, 184, 0], [581, 304, 1704, 714, 57, 71, 0], [729, 182, 1958, 918, 58, 137, 0]], [[11, 11, 536, 2347, 474, 392, 0], [594, 18, 1947, 187, 88, 185, 0], [580, 302, 1762, 714, 56, 72, 0], [730, 182, 1987, 1195, 57, 137, 0]], [[11, 16, 0, 2480, 474, 387, 0], [579, 18, 1775, 1539, 209, 356, 0]], [[13, 13, 1420, 3125, 460, 390, 0], [495, 293, 1645, 392, 68, 92, 0],
            [577, 18, 1775, 1182, 211, 356, 0]], [[13, 10, 906, 3883, 443, 393, 0], [577, 18, 1734, 0, 212, 356, 0]], [[13, 10, 949, 3103, 470, 393, 0], [496, 272, 2037, 0, 5, 6, 0], [577, 18, 1734, 357, 212, 356, 0]], [[12, 11, 475, 2740, 473, 392, 0], [494, 293, 1947, 558, 64, 92, 0], [593, 19, 1941, 3598, 101, 185, 0], [579, 300, 1875, 714, 54, 73, 0], [729, 191, 682, 641, 60, 127, 0]], [[11, 31, 1011, 2730, 474, 372, 0], [495, 267, 2043, 0, 4, 3, 0], [496, 272, 2037, 7, 5, 6, 0], [593, 20, 1838, 3783, 101, 184, 0], [580, 302, 1819, 714, 55, 72, 0], [729, 191, 743, 641, 59, 128, 0]], [[13, 14, 682, 789, 681, 389, 0], [696, 189, 2043,
            4, 3, 3, 0], [728, 191, 1947, 651, 59, 128, 0]], [[11, 12, 460, 3527, 445, 391, 0], [592, 23, 1838, 3598, 102, 184, 0], [466, 304, 682, 541, 172, 99, 0]], [[13, 10, 0, 541, 681, 393, 0], [696, 189, 2043, 8, 3, 3, 0]], [[12, 10, 1486, 2731, 473, 393, 0], [592, 19, 855, 541, 102, 186, 0], [696, 189, 2043, 4, 3, 3, 0]], [[11, 7, 961, 392, 683, 396, 0], [696, 189, 2043, 8, 3, 3, 0]], [[11, 16, 590, 1573, 560, 387, 0], [594, 7, 1755, 1896, 192, 313, 0]], [[12, 12, 961, 0, 772, 391, 0]], [[13, 10, 593, 1179, 590, 393, 0], [657, 87, 1881, 3362, 125, 235, 0]], [[11, 11, 1364, 789, 593, 392, 0], [656, 87, 1881, 3125, 126, 236, 0]],
            [[14, 31, 1184, 1182, 590, 372, 0], [727, 186, 803, 641, 50, 137, 0]], [[12, 18, 548, 1961, 541, 385, 0], [727, 184, 1987, 1333, 54, 138, 0]], [[11, 15, 1151, 1948, 541, 388, 0], [728, 183, 1987, 1056, 57, 138, 0]], [[11, 11, 0, 1701, 547, 392, 0], [728, 183, 593, 935, 58, 136, 0]], [[12, 11, 0, 935, 592, 392, 0]], [[15, 31, 0, 1328, 589, 372, 0]], [[13, 18, 0, 2094, 535, 385, 0]], [[11, 10, 1392, 3516, 445, 393, 0], [494, 293, 1645, 578, 64, 92, 0]], [[11, 10, 0, 3241, 459, 393, 0]], [[11, 10, 1569, 2337, 474, 393, 0]], [[13, 31, 0, 2868, 472, 372, 0], [496, 272, 2037, 0, 5, 6, 0], [495, 293, 1645, 485, 68, 92, 0]], [[15,
                18, 933, 3497, 458, 385, 0]], [[15, 15, 1350, 3910, 441, 388, 0]], [[12, 11, 1090, 2337, 478, 392, 0], [495, 267, 2043, 0, 4, 3, 0], [496, 272, 2037, 7, 5, 6, 0], [503, 133, 1714, 392, 18, 17, 0]], [[11, 11, 1184, 1555, 570, 392, 0]]]
    };
    var Sg = S.$(), Tg = ag.$();
    Pf.$();
    var Ug = Jg.$(), Wg = function (a, b, c, d, e, f) {
        Y.call(this, b, c, d);
        a = a.Da;
        this.Za = e;
        this.Ia = a.mb;
        this.W = a.Ma.loop ? De(a.Ma.Ba) : new Ae(-1, 12);
        this.W.g = 1;
        this.V = new Hg(this.g, a.Ma.ya, Sg.hb(a.Ma.wa), je(a.Ma.wa), this.W, !1);
        this.Oa = a.Ma.bg;
        this.ta = [];
        this.Ga = new U(we, 512, 71);
        this.ta.push(this.Ga);
        this.Ya = new U([te], 512, 67);
        this.v = a.Gb;
        ad(this.v, .5);
        this.va = Gg(this, a.$a);
        this.S = this.Ca = 0;
        this.o = [];
        this.T = {
            text: "",
            x: 590,
            y: 154,
            width: 300,
            height: 300,
            angle: 0,
            fontFamily: "noto sans",
            fontSize: 100,
            fontWeight: "normal",
            fontStyle: "normal",
            color: "black",
            lineHeight: "1.1em",
            Xb: !0,
            textAlign: "center",
            textShadow: "none",
            verticalAlign: "middle",
            backgroundColor: "none",
            padding: "20",
            borderRadius: "0"
        };
        this.Xa = f;
        Vg(this)
    };
    t(Wg, Y);
    var Vg = function (a) {
        var b = Z(kg, Tg, function () {
            a.destroy();
            a.Za()
        }, .9), c = Fg(a, b);
        b = document.createElement("div");
        var d = document.createElement("div");
        a.o.push(c);
        a.o.push(b);
        a.o.push(d);
        a.o.forEach(function (e) {
            a.j.appendChild(e)
        });
        a.T.text = Lg(Ug, a.Ia);
        mf(b, a.T);
        c = bb(a.T);
        c.y = 120;
        c.text = Lg(Ug, "Treat");
        c.fontWeight = "bold";
        c.height = 60;
        c.padding = "0px";
        mf(d, c);
        b.style.visibility = "hidden";
        d.style.visibility = "hidden";
        a.Xa && nf(a.va, "black-wipe-transition", 20)
    };
    Wg.prototype.ka = function () {
        Ce(this.W);
        this.Ga.g && "hidden" == this.o[this.o.length - 1].style.visibility && (this.o.forEach(function (a) {
            a.style.visibility = "visible"
        }), this.ta.push(this.Ya));
        this.S = this.V.g;
        this.S < this.Ca && (J(this.v), $c(this.v, !1));
        this.Ca = this.S;
        0 == this.V.g && (J(this.v), $c(this.v, !1))
    };
    Wg.prototype.ha = function () {
        var a = this;
        this.g.save();
        this.g.setTransform(1, 0, 0, 1, 0, 0);
        this.g.fillStyle = this.Oa;
        this.g.fillRect(0, 0, this.s.width, this.s.height);
        He(this.V);
        this.ta.forEach(function (b) {
            return V(b, a.g)
        });
        this.g.restore()
    };
    Wg.prototype.destroy = function () {
        var a = this;
        Of("d4", Date.now() - this.Fa);
        X(108);
        J(this.v);
        this.o.forEach(function (b) {
            a.j.removeChild(b)
        });
        this.j.removeChild(this.va)
    };
    var Xg = S.$(), Yg = ag.$();
    Pf.$();
    var ah = function (a, b, c, d, e) {
        Y.call(this, b, c, d);
        var f = this;
        a = a.Da;
        this.ta = a.Na.loop ? De(a.Na.Ba) : new Ae(-1, 12);
        this.ta.g = 1;
        this.v = new Hg(this.g, a.Na.ya, Xg.hb(a.Na.wa), je(a.Na.wa), this.ta, !1);
        this.Ca = a.Na.bg;
        this.Ia = e;
        this.va = a.Ib;
        this.o = null;
        e = (new URL(location.href)).searchParams.get("transition");
        this.V = null;
        "true" == e && (this.V = M.g.Cc);
        this.W = null;
        this.T = Z(hg, Yg, function () {
            X(106);
            J(f.o);
            f.o = null;
            f.v.reset();
            $c(f.va, !1);
            f.T.style.display = "none"
        }, 1.5);
        this.S = [];
        this.Ga = Gg(this, a.$a);
        Zg(this);
        this.V &&
        $c(this.V, !1);
        $g(this.va, !1)
    };
    t(ah, Y);
    var Zg = function (a) {
        var b = Z(jg, Yg, function () {
            a.destroy();
            a.Ia()
        }, .9);
        b = Fg(a, b);
        var c = document.createElement("div");
        a.W = document.createElement("div");
        c.appendChild(a.W);
        c.classList.add("loading-bar-container");
        c.style.border = "2px solid " + a.Ca;
        a.W.classList.add("loading-bar");
        a.T.classList.add("replay-button");
        a.T.style.display = "none";
        a.S.push(b);
        a.S.push(c);
        a.S.push(a.T);
        a.S.forEach(function (d) {
            a.j.appendChild(d)
        });
        nf(a.Ga, "black-wipe-transition", 20)
    };
    ah.prototype.ka = function () {
        Ce(this.ta);
        this.v.s.s && null === this.o && (this.o = M.g.Zb, $g(this.o, !0), this.T.style.display = "initial");
        this.W.style.width = this.v.g / (this.v.j.frames.length - 1) * 100 + "%"
    };
    ah.prototype.ha = function () {
        this.g.save();
        this.g.setTransform(1, 0, 0, 1, 0, 0);
        this.g.fillStyle = this.Ca;
        this.g.fillRect(0, 0, this.s.width, this.s.height);
        He(this.v);
        this.g.restore()
    };
    ah.prototype.destroy = function () {
        var a = this;
        Of("d3", Date.now() - this.Fa);
        X(107);
        J(this.va);
        this.V && J(this.V);
        null != this.o && J(this.o);
        this.S.forEach(function (b) {
            a.j.removeChild(b)
        });
        this.j.removeChild(this.Ga)
    };
    var $g = function (a, b) {
        b = void 0 === b ? !1 : b;
        ad(a, .01);
        $c(a, b);
        Re(function () {
            bd(a, 1)
        }, 50)
    };
    var bh = function (a) {
        E.call(this);
        this.j = a;
        this.g = {}
    };
    A(bh, E);
    var ch = [], dh = function (a, b, c, d, e) {
        Ca(c) || (c && (ch[0] = c.toString()), c = ch);
        for (var f = 0; f < c.length; f++) {
            var g = bc(b, c[f], d || a.handleEvent, e || !1, a.j || a);
            if (!g) break;
            a.g[g.key] = g
        }
    }, eh = function (a) {
        Za(a.g, function (b, c) {
            this.g.hasOwnProperty(c) && jc(b)
        }, a);
        a.g = {}
    };
    bh.prototype.i = function () {
        bh.kb.i.call(this);
        eh(this)
    };
    bh.prototype.handleEvent = function () {
        throw Error("n");
    };
    da();
    ia();
    var fh = function (a) {
        return 0 == a.indexOf("//") ? "https:" + a : a
    }, gh = function (a, b) {
        var c = new N;
        for (d in b) c.add(d, b[d]);
        var d = new id(a);
        ld(d, c);
        return d.toString()
    };
    var hh = S.$(), ih = ag.$(), Uf = Pf.$(), jh = Jg.$(), lh = function (a, b, c, d) {
            kh(this, a, b, c, d)
        }, kh = function (a, b, c, d, e) {
            a.xc = c;
            a.ka = b;
            a.V = a.ka.getContext("2d");
            a.i = d;
            a.v = e;
            a.S = [];
            a.$b = new Set;
            a.Ca = [];
            a.j = [];
            a.Za = [];
            a.Ga = [];
            a.Xa = !1;
            a.o = null;
            a.Wb = !1;
            a.Oa = !1;
            a.Ia = 700;
            a.H = null;
            a.U = null;
            a.W = !1;
            a.g = null;
            a.s = M.g.Zb;
            a.Ub = [0];
            a.T = !1;
            a.Tb = !1;
            a.ha = 0;
            a.ta = 20;
            a.Vb = De(0);
            a.Vb.g = 1;
            a.wc = new Hg(a.V, Rg, hh.hb(qe), je(qe), a.Vb, !1);
            a.Ya = new U([pe], 272, 370);
            a.va = null;
            a.Fa = null;
            a.ac = !0;
            Ve.$().addListener(a);
            b = new U([se], 0, 0, 960, 540);
            a.Ca.push(new U([re],
                0, 0, 960, 540));
            a.Ca.push(b);
            b = new U(xe, 267, 215);
            Ue(b);
            mh(a, b, !0);
            b = new U(ve, 272, 333, 123, 170);
            Ue(b);
            mh(a, b, !0)
        }, rh = function (a, b) {
            a.j = a.j.filter(function (d) {
                return d.Ja || d.Wa.o || !d.Wa.g
            });
            null === a.o && a.S.forEach(function (d) {
                null != d.i && (d.S += b, d.S > d.ka && !d.U && !d.H && (d.S = 0, d.i.reset(), d.H = !0), d.i.g && d.H && (d.H = !1));
                d.v && (.3 < d.s ? d.s -= .0012 * b : (d.s = 1, d.v = !1), d.o.v = d.Da.Ra[3] * d.s)
            });
            null !== a.o || a.Xa || null !== a.H || nh(a);
            if (a.Wb) {
                var c = gf(a.va).zoomScale;
                a.V.transform(c, 0, 0, c, (1 - c) * a.H.Da.Ua.x, (1 - c) * a.H.Da.Ua.y);
                hf(a.va) && (a.Wb = !1, a.va.reset(), oh(a, a.H))
            }
            a.Oa && (c = 1 / gf(a.Fa).zoomScale, a.V.transform(c, 0, 0, c, (1 - c) * a.H.Da.Ua.x, (1 - c) * a.H.Da.Ua.y), hf(a.Fa) && (a.V.setTransform(1, 0, 0, 1, 0, 0), a.Oa = !1, a.Fa.reset(), a.H = null));
            null != a.o ? a.o.ka() : a.W || ph(a);
            a.W && 1080 > a.ha && !a.Oa && (a.ha += a.ta, a.Ca.forEach(function (d) {
                d.y += a.ta
            }), a.S.forEach(function (d) {
                tf(d, a.ta)
            }), a.j.forEach(function (d) {
                d.Wa.y += a.ta
            }), a.Ya.y += a.ta);
            1080 <= a.ha && null === a.U && qh(a);
            a.W && 1080 <= a.ha && Ce(a.Vb)
        }, sh = function (a, b) {
            a.o ? a.o.ha() : (a.Ca.forEach(function (c) {
                V(c,
                    b)
            }), a.S.forEach(function (c) {
                c.U ? (b.save(), b.globalAlpha = 1, b.fillStyle = "black", c.V ? V(c.o, b) : (c.Da.Va.o(b), c.v && V(c.o, b)), b.restore(), c.Pb.has(1) && c.Pb.has(0) ? (V(c.W, b), c.V || (b.save(), b.globalCompositeOperation = "multiply", .5 < b.globalAlpha && (b.globalAlpha = .5), b.fillStyle = "#959595", c.Da.yb.o(b), b.restore())) : (V(c.T, b), null != c.g && V(c.g, b))) : (V(c.o, b), c.H && V(c.i, b), V(c.T, b), null != c.g && V(c.g, b))
            }), a.j.forEach(function (c) {
                V(c.Wa, b)
            }), V(a.Ya, b), a.W && (a.V.save(), a.V.translate(0, a.ha - 1080), He(a.wc), a.V.restore()))
        },
        nh = function (a) {
            a.W || (a.S.forEach(function (b) {
                zg(a.v, b.Da.Va, function (c) {
                    "mousedown" == c && th(a, b)
                });
                b.U || uh(a, b)
            }), vh(a), wh(a), a.Xa = !0)
        }, vh = function (a) {
            [{x: 44, y: 35}, {x: 264, y: 55}, {x: 728, y: 63}, {x: 910, y: 126}, {x: 22, y: 279}, {x: 15, y: 17}, {
                x: 161,
                y: 31
            }, {x: 679, y: 28}].forEach(function (b) {
                var c = document.createElement("div");
                a.Ga.push(c);
                a.i.appendChild(c);
                c.classList.add("star-cover");
                c.style.top = b.y + "px";
                c.style.left = b.x + "px";
                b = "star-blink " + (2 * Math.random() + 3) + "s infinite";
                c.style.animation = b;
                c.style.webkitAnimation =
                    b
            })
        }, uh = function (a, b) {
            var c = b.Da.Pa.x + b.Da.Ra[3] / 2, d = b.Da.Pa.y + b.Da.Ra[4] / 2, e = document.createElement("div");
            a.Ga.push(e);
            a.i.appendChild(e);
            e.classList.add("door-pulsing-indicator");
            e.style.left = c - 5 + "px";
            e.style.top = d - 5 + "px"
        }, xh = function (a) {
            a.Ga.forEach(function (b) {
                a.i.removeChild(b)
            });
            a.Ga = []
        }, yh = function (a) {
            Je.forEach(function (b) {
                b = new rf(b);
                a.S.push(b)
            })
        }, wh = function (a) {
            a.Za = [];
            Ke.forEach(function (b) {
                var c = b.tb, d = b.ub;
                c = T(c.x, c.y, c.width, c.height);
                a.Za.push(c);
                var e = new U(b.Fb, d.x, d.y);
                b.Ja && (zh(a,
                    e) && Ah(a, e), mh(a, e, b.Ja), e.U = !1);
                zg(a.v, c, function (f) {
                    "mousedown" == f && (f = Uf, Of("d2", b.wb), X(103), Rf(f, 3), zh(a, e) || mh(a, e, b.Ja), e.reset(), e.U = !0)
                })
            })
        }, Bh = function (a) {
            Je.forEach(function (b) {
                Cg(a.v, b.Va)
            });
            a.Za.forEach(function (b) {
                Cg(a.v, b)
            });
            xh(a);
            a.Xa = !1
        }, Eg = function (a) {
            a.o = null;
            a.j = a.j.filter(function (b) {
                return b.Wa.o || b.Ja
            });
            a.$b.size == a.S.length && null === a.U && Ch(a);
            a.Oa = !0;
            a.Fa = new ef({zoomScale: 1}, {zoomScale: 1.0185}, a.Ia, df, function () {
                return Be.g
            });
            a.Fa.start();
            of(a.Ia)
        }, oh = function (a, b) {
            a.o = new Qg(b,
                function () {
                    return Dh(a, b)
                }, function () {
                    return Eh(a, b)
                }, a.ka, a.i, a.v)
        }, Eh = function (a, b) {
            a.T ? (ad(a.s, .5), a.Tb && Re(function () {
                return ph(a, .5)
            }, 1E3)) : ph(a, .5);
            b.Pb.add(1);
            a.o = new Wg(b, a.ka, a.i, a.v, function () {
                return Dh(a, b)
            }, !0)
        }, Dh = function (a, b) {
            Fh(a);
            b.Pb.add(0);
            a.o = new ah(b, a.ka, a.i, a.v, function () {
                return Eh(a, b)
            })
        }, th = function (a, b) {
            Vf(b.Da.nb, a.ac);
            a.$b.add(b);
            a.H = b;
            sf(b);
            $c(M.g.mc, !1);
            a.Wb = !0;
            a.va = new ef({zoomScale: 1}, {zoomScale: 1.03}, a.Ia, cf, function () {
                return Be.g
            });
            a.va.start();
            pf(a.Ia);
            Bh(a);
            a.ac =
                !1
        }, Hh = function (a) {
            a.g = document.createElement("div");
            a.g.classList.add("button-bar");
            a.i.appendChild(a.g);
            Gh(a.g, ig, function () {
                X(3);
                var d = google.doodle ? google.doodle.url : "";
                if (d) {
                    var e;
                    (e = (e = !Cd) || Kd()) ? rb(d) : (e = window.top.location, d = d instanceof mb ? d : qb(d), e.assign(ob(d)))
                }
            }).classList.add("button-bar-icon");
            Gh(a.g, gg, function () {
                X(109);
                Bh(a);
                a.i.removeChild(a.U);
                a.i.removeChild(a.g);
                J(a.s);
                kh(a, a.ka, a.xc, a.i, a.v);
                yh(a);
                ph(a)
            }).classList.add("button-bar-icon");
            var b = Ud("shortlink", "https://www.google.com/?doodle=119277346"),
                c = Ud("share", "");
            Cd && !Jd ? Gh(a.g, fg, function () {
                var d = b;
                Vd() || (X(9), d = fh(d), window.location = "http://www.google.com/doodles/_SHARE?description=" + encodeURIComponent(c) + "&url=" + encodeURIComponent(d))
            }).classList.add("button-bar-icon") : (Gh(a.g, dg, function () {
                var d = b;
                Vd() || (d = fh(d), d = gh("https://www.facebook.com/dialog/share", {
                    app_id: "738026486351791",
                    href: d,
                    hashtag: "#GoogleDoodle"
                }), rb(d), X(5))
            }).classList.add("button-bar-icon"), Gh(a.g, lg, function () {
                var d = b;
                Vd() || (d = fh(d), d = "text=" + encodeURIComponent(String(c +
                    "\n" + d)), rb("http://twitter.com/intent/tweet?" + d), X(6))
            }).classList.add("button-bar-icon"), Gh(a.g, cg, function () {
                if (!Vd()) {
                    X(8);
                    var d = window.top.location;
                    var e = b;
                    e = fh(e);
                    e = gh("mailto:", {subject: Wd, body: c + "\n" + e});
                    d.href = e
                }
            }).classList.add("button-bar-icon"));
            Array.from(a.g.children).forEach(function (d) {
                nf(d, "button-bar-icon-transition")
            })
        }, Gh = function (a, b, c) {
            b = Zf(ih, b, .5);
            a.appendChild(b);
            c && bc(b, "click", c);
            return b
        }, qh = function (a) {
            Wf();
            var b = {
                text: "",
                x: 120,
                y: 410,
                width: 720,
                height: 100,
                angle: 0,
                fontFamily: "McLaren, noto sans, sans-serif",
                fontSize: 100,
                fontWeight: "bold",
                fontStyle: "normal",
                color: "#ff7d14",
                lineHeight: "1.1em",
                Xb: !1,
                textAlign: "center",
                textShadow: "none",
                verticalAlign: "middle",
                backgroundColor: "none",
                padding: "0",
                borderRadius: "0"
            };
            b.text = Lg(jh, "Happy Halloween!");
            a.U = document.createElement("div");
            a.U.classList.add("happy-halloween");
            a.i.appendChild(a.U);
            mf(a.U, b);
            Re(function () {
                a.U.classList.add("happy-halloween-transition")
            }, 100);
            Hh(a)
        }, Ch = function (a) {
            J(a.s);
            a.T = !1;
            a.s = M.g.qc;
            $c(a.s, !0);
            a.W = !0;
            a.S.forEach(function (b) {
                b.V = !0
            })
        },
        Fh = function (a) {
            a.T && (a.Tb = !0, bd(a.s, .01), Re(function () {
                a.T && (a.Ub = J(a.s), a.T = !1, a.Tb = !1)
            }, 1E3))
        }, ph = function (a, b) {
            b = void 0 === b ? 1 : b;
            a.T ? bd(a.s, 1) : ($c(a.s, !0, a.Ub[a.Ub.length - 1]), bd(a.s, b), a.T = !0)
        }, mh = function (a, b, c) {
            a.j.push({Wa: b, Ja: c})
        }, Ah = function (a, b) {
            for (var c = -1, d = 0; d < a.j.length; d++) a.j[d].Wa.j == b.j && (c = d);
            -1 != c && a.j.splice(c, 1)
        }, zh = function (a, b) {
            var c = !1;
            a.j.forEach(function (d) {
                d.Wa.j == b.j && (c = !0)
            });
            return c
        };
    var Ih = function (a, b) {
        var c = void 0 === c ? 52 : c;
        var d = document.createElement("canvas");
        d.width = c;
        d.height = c;
        var e = d.getContext("2d");
        e.fillStyle = "rgba(0,0,0,.3)";
        e.arc(c / 2, c / 2, c / 2, 0, 2 * Math.PI);
        e.fill();
        e.strokeStyle = "#fff";
        e.lineWidth = c / 52 * 3.5;
        var f = c / 52 * 2;
        e.beginPath();
        e.moveTo(c / 4 + f, c / 4 + f);
        e.lineTo(3 * c / 4 - f, 3 * c / 4 - f);
        e.stroke();
        e.beginPath();
        e.moveTo(3 * c / 4 - f, c / 4 + f);
        e.lineTo(c / 4 + f, 3 * c / 4 - f);
        e.stroke();
        this.g = d;
        this.g.style.top = "10px";
        this.g.style.right = "10px";
        this.g.style.width = c + "px";
        this.g.style.height =
            c + "px";
        this.g.style.cursor = "pointer";
        this.g.style.position = "absolute";
        this.g.style.pointerEvents = "all";
        this.g.style.background = "transparent";
        this.g.style.display = "none";
        bc(this.g, "click", b);
        a.appendChild(this.g)
    };
    var Kh = function () {
        this.V = !0;
        this.T = !1;
        this.s = [];
        this.S = !1;
        this.g = this.v = this.j = 0;
        this.o = Jh
    };
    A(Kh, E);
    y(Kh);
    var Jh = 1E3 / 60, Lh = function (a) {
        var b = a.s(a.o);
        a.o++;
        a.g = Kh.$().j + a.i / Kh.$().o;
        !b && a.j && a.j();
        return b
    }, Mh = function (a, b) {
        a.s.push(b);
        a.S = !0
    }, Oh = function (a) {
        if (a.V) a.T = !1; else {
            a.T = !0;
            Nh(a);
            a.S && (a.s.sort(function (e, f) {
                return e.g == f.g ? f.i - e.i : e.g - f.g
            }), a.S = !1);
            for (var b = 0, c = 0, d; d = a.s[c]; c++) if (d.g <= a.j) Lh(d) && Mh(a, d), b++; else break;
            a.s.splice(0, b);
            a.j++;
            requestAnimationFrame(function () {
                Oh(a)
            })
        }
    }, Nh = function (a) {
        var b = (new Date).getTime();
        30 < a.j && a.v && (b - a.v >= 1.05 * a.o ? a.g++ : a.g >>= 1, 20 < a.g && (a.o = Math.min(50,
            1.2 * a.o), a.g = 0));
        a.v = b
    };
    Kh.prototype.start = function () {
        this.V = !1;
        this.T || Oh(this)
    };
    Kh.prototype.i = function () {
        this.reset();
        Kh.kb.i.call(this)
    };
    Kh.prototype.reset = function () {
        this.V = !0;
        this.s = [];
        this.j = 0;
        this.S = !1;
        this.o = Jh;
        this.v = this.g = 0
    };
    var Ph = function (a) {
        return 3 * a * a - 2 * a * a * a
    };
    var Qh = function (a, b) {
        E.call(this);
        this.j = !1;
        this.g = a;
        this.s = b || null;
        this.o = function () {
        };
        this.Sb = null;
        Ff() && (this.g.style.willChange = "width,height")
    };
    t(Qh, E);
    var Rh = function (a, b) {
        b = void 0 === b ? function () {
        } : b;
        var c = void 0 === c ? 0 : c;
        if (a.g && Ff() && !a.j) {
            var d = a.g;
            if (Kd()) {
                window.parent.postMessage({
                    cmd: "resizeDoodle",
                    width: "960px",
                    height: "540px",
                    duration: "400ms"
                }, "chrome-search://local-ntp");
                a.j = !0;
                var e = !1;
                a.Sb = setTimeout(function () {
                    e = !0;
                    b()
                }, 500);
                window.addEventListener("message", function (m) {
                    "resizeComplete" === m.data.Kc && (null !== this.Sb && (clearTimeout(this.Sb), this.Sb = null), e || (e = !0, b()))
                })
            } else {
                document.getElementById("fkbx") && R(d.parentNode, "width", "100%");
                var f = d.offsetHeight, g = d.offsetWidth;
                c = Math.min(960, d.parentNode.clientWidth) - 2 * c;
                var h = c / (960 / 540);
                Kh.$();
                var k = Nd(), l = new ef({height: f, width: g}, {height: h, width: c}, 400, Ph, function () {
                    return k
                });
                l.start();
                a.j = !0;
                a.o = function (m) {
                    k = void 0 !== m ? k + m : Nd();
                    m = gf(l);
                    ae(d, Math.round(m.width), Math.round(m.height));
                    a.s && xg(a.s, !1);
                    hf(l) && (b(), a.g.style.willChange = "unset", a.o = function () {
                    })
                }
            }
        }
    };
    Qh.prototype.i = function () {
        E.prototype.i.call(this);
        this.reset();
        this.g = null
    };
    Qh.prototype.reset = function () {
        this.j && (R(this.g, "width", "", "height", ""), $d(0), this.g.style.width = "", this.g.style.height = "");
        this.j = !1
    };
    var Sh = function () {
        this.V = this.W = this.ha = this.j = this.i = null;
        this.ka = !1;
        this.U = null;
        this.v = this.o = this.s = !1;
        this.g = !0;
        this.S = this.T = !1;
        this.H = null
    };
    Sh.prototype.reset = function () {
        this.V = this.W = this.ha = this.j = this.i = null;
        this.ka = !1;
        this.U = null;
        this.v = this.o = this.s = !1;
        this.g = !0;
        this.S = this.T = !1;
        this.H = null
    };
    var Uh = function (a) {
        a.s && (a.S ? (Th.call(document), a.S = !1) : (a.U.call(a.j), a.H && (window.screen.lockOrientation && window.screen.lockOrientation(a.H), window.screen.orientation && window.screen.orientation.lock && window.screen.orientation.lock(a.H)["catch"](Aa))))
    }, Xh = function (a, b, c, d) {
        var e = Vh;
        d = void 0 === d ? Aa : d;
        var f = void 0 === f ? !0 : f;
        e.j = a;
        e.i = b;
        e.ha = d;
        e.U = a[Td(a, "requestFullscreen")];
        a = !!(document[Td(document, "fullscreenEnabled")] && e.U && Th);
        if (Q()) throw"";
        b = Ed ? !1 : Md() && !(Cd || Dd) || Jd && Fd;
        e.s = b && a;
        e.o = f && Gf();
        e.v = !f && Gf();
        e.g = !0;
        if (e.s || e.o) R(document.body, "margin", "0"), R(e.j, "overflow", "visible", "width", "100%", "height", "100%"), document.body.scrollLeft = 0, c ? dh(c, window, "scroll", Wh) : bc(window, "scroll", Wh, !0)
    }, Yh = function (a) {
        var b = Vh;
        b.i.push(a);
        b.g = !0
    };
    Sh.prototype.close = function () {
        this.S = !0;
        Uh(this)
    };
    var Zh = function (a, b) {
        var c = document.createElement("div");
        c.style.pointerEvents = "none";
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        c.style.width = "100%";
        c.style.height = "100%";
        c.style.direction = "ltr";
        c.dataset.width = a;
        c.dataset.height = b;
        return c
    };
    y(Sh);
    var $h = Td(document, "fullscreenElement"), Th = document[Td(document, "exitFullscreen")], Wh = function (a) {
        a.preventDefault();
        a.stopPropagation();
        return !1
    };
    var ai = function (a, b) {
        window.google && google.doodle && (b && Ja("google.doodle.cpDestroy", b), Ja("google.doodle.cpInit", function () {
            b && b();
            a()
        }))
    };
    var bi = function (a, b, c, d) {
        this.g = 0;
        this.i = a;
        this.o = void 0 === c ? 3 : c;
        this.j = b;
        this.s = void 0 === d ? 2E3 : d
    };
    bi.prototype.fetch = function (a, b, c) {
        var d = this;
        b = void 0 === b ? function () {
        } : b;
        c = new id(((void 0 === c ? 0 : c) ? "//www.google.com" : "") + "/async/" + this.i);
        ld(c, a);
        c = c.toString();
        this.g++;
        b(this.g);
        return ci(this, c)["catch"](function (e) {
            return d.g < d.o ? d.j(d.s * Math.pow(2, d.g - 1))["finally"](function () {
                return d.fetch(a, b)
            }) : Promise.reject(e)
        })["finally"](function () {
            return d.g = 0
        })
    };
    var ci = function (a, b) {
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
                    g.hasOwnProperty(a.i) && (g = g[a.i]);
                    g.hasOwnProperty("__err__") ? e(g.__err__) : d(g)
                } else e(c)
            }
        })
    };
    var di = function (a, b, c) {
        bi.call(this, a, function (d) {
            return new Promise(function (e) {
                return setTimeout(e, d)
            })
        }, void 0 === b ? 3 : b, void 0 === c ? 2E3 : c)
    };
    t(di, bi);
    var ei = function () {
    }, fi = "function" == typeof Uint8Array, gi = [], hi = function (a, b) {
        if (b < a.o) {
            var c = b + a.s, d = a.g[c];
            return d === gi ? a.g[c] = [] : d
        }
        if (a.i) return d = a.i[b], d === gi ? a.i[b] = [] : d
    }, ii = function (a) {
        if (a.j) for (var b in a.j) {
            var c = a.j[b];
            if (Ca(c)) for (var d = 0; d < c.length; d++) c[d] && ii(c[d]); else c && ii(c)
        }
    };
    ei.prototype.toString = function () {
        ii(this);
        return this.g.toString()
    };
    var ji = function (a) {
        this.j = null;
        a || (a = []);
        this.s = -1;
        this.g = a;
        a:{
            if (a = this.g.length) {
                --a;
                var b = this.g[a];
                if (!(null === b || "object" != typeof b || Ca(b) || fi && b instanceof Uint8Array)) {
                    this.o = a - -1;
                    this.i = b;
                    break a
                }
            }
            this.o = Number.MAX_VALUE
        }
    };
    A(ji, ei);
    var ki = function () {
        var a = void 0 === a ? !1 : a;
        if (fe() && ee()) return Promise.resolve();
        var b = "_fmt:jspb,doodle:119277346,slot:0,type:3,cta:1";
        Ld() && (b += ",ntp:1");
        if (fe() || a) b += ",impr:0";
        a = new N;
        a.add("async", b);
        return (new di("ddllog", 1)).fetch(a, void 0, !1).then(function (c) {
            c = new ji(c);
            if (!fe() && hi(c, 2)) {
                var d = hi(c, 2);
                be = (new id(d)).g.get("ved", "")
            }
            !ee() && hi(c, 3) && (de = hi(c, 3))
        })["catch"](function () {
            return Promise.resolve()
        })
    };
    var li = function (a, b) {
        b = void 0 === b ? 50 : b;
        E.call(this);
        this.v = a;
        this.o = 0;
        this.j = this.g = !1;
        this.s = b
    };
    t(li, E);
    li.prototype.start = function () {
        this.o = z();
        var a = !this.j && !this.g;
        this.j = !1;
        this.g = !0;
        a && mi(this)
    };
    var mi = function (a) {
        a.j ? a.j = !1 : (requestAnimationFrame(function () {
            return mi(a)
        }), ni(a))
    }, ni = function (a) {
        var b = z(), c = b - a.o;
        0 > c || (c = a.s ? Math.min(c, a.s) : c, a.o = b, a.v(c))
    };
    li.prototype.i = function () {
        this.g && (this.j = !0, this.g = !1);
        E.prototype.i.call(this)
    };
    var Vh = Sh.$(), le = S.$(), oi = ag.$(), Qc = M.$(), Qf = Pf.$(), pi = jf.$(), si = function (a, b) {
        E.call(this);
        var c = this;
        this.ka = b;
        this.ta = a;
        this.T = b.getContext("2d");
        this.Ca = new qg(6E4, function () {
            var g = c.v;
            g.g && (g.g = !1, g.j = !0);
            g = Qc;
            g.s || g.g.suspend();
            g.s = !0
        }, function () {
            c.v.start();
            var g = Qc;
            g.s && g.g.resume();
            g.s = !1
        });
        Mb(this, Ia(Nb, this.Ca));
        this.j = new wg(b, this.Ca);
        this.o = new bh(this);
        Mb(this, Ia(Nb, this.o));
        var d = document.createElement("style");
        d.innerText = ".owl-fact{-webkit-transform:translateX(272px) translateY(52px) rotate(-10deg);-moz-transform:translateX(272px) translateY(52px) rotate(-10deg);-ms-transform:translateX(272px) translateY(52px) rotate(-10deg);-o-transform:translateX(272px) translateY(52px) rotate(-10deg);transform:translateX(272px) translateY(52px) rotate(-10deg);color:black;width:300px;height:200px;font:30px \'Lacquer\'}.trick-or-treat-text{color:black;top:13px;left:0px;width:100%;height:50px;position:absolute;font:14px \'Lacquer\'}.happy-halloween{color:orange;width:100%;top:400px;position:absolute;opacity:0}.happy-halloween-transition{opacity:1;-webkit-transition:opacity 500ms ease-in-out;-o-transition:opacity 500ms ease-in-out;-moz-transition:opacity 500ms ease-in-out;transition:opacity 500ms ease-in-out}.container{background-color:black}.ddldr{left:50%;top:50%;overflow:hidden;pointer-events:none;position:absolute;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0}.ddltr::before{content:\'\';display:inline-block;height:100%;vertical-align:middle}.button-bar-icon{margin-bottom:20px;cursor:pointer;opacity:0}.button-bar-icon-transition{opacity:1;-webkit-transition:opacity 500ms ease-in-out;-o-transition:opacity 500ms ease-in-out;-moz-transition:opacity 500ms ease-in-out;transition:opacity 500ms ease-in-out}.button-bar-icon:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.button-bar{position:absolute;left:887px;top:50%;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-ms-transform:translate(0,-50%);-o-transform:translate(0,-50%);transform:translate(0,-50%);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.back-button{position:absolute;left:0;top:0}.back-button-icon{position:absolute;left:-4px;top:-5px}.back-button:hover{-webkit-filter:contrast(0.8);filter:contrast(0.8)}.back-nav-container{position:absolute;top:20px;left:20px;height:60px;-webkit-border-radius:40px;-moz-border-radius:40px;border-radius:40px;cursor:pointer}.choice-button{position:absolute;left:642px;cursor:pointer}.choice-button:hover{-webkit-filter:brightness(1.1);filter:brightness(1.1)}.treat-button{bottom:155px}.trick-button{top:155px}@-webkit-keyframes iconWiggle{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(-4deg)}50%{-webkit-transform:rotate(0deg)}75%{-webkit-transform:rotate(4deg)}100%{-webkit-transform:rotate(0deg)}}@-moz-keyframes iconWiggle{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(-4deg)}50%{-webkit-transform:rotate(0deg)}75%{-webkit-transform:rotate(4deg)}100%{-webkit-transform:rotate(0deg)}}@-o-keyframes iconWiggle{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(-4deg)}50%{-webkit-transform:rotate(0deg)}75%{-webkit-transform:rotate(4deg)}100%{-webkit-transform:rotate(0deg)}}@keyframes iconWiggle{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(-4deg)}50%{-webkit-transform:rotate(0deg)}75%{-webkit-transform:rotate(4deg)}100%{-webkit-transform:rotate(0deg)}}.choice-icon{position:absolute;top:10px;left:25px;-webkit-animation:iconWiggle 1s infinite linear;-moz-animation:iconWiggle 1s infinite linear;-o-animation:iconWiggle 1s infinite linear;animation:iconWiggle 1s infinite linear}.button-container{position:absolute;top:0px;left:595px;height:100%;width:365px;background:white;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tot-button{position:absolute;left:82px;-webkit-animation:wow 300ms forwards;-moz-animation:wow 300ms forwards;-o-animation:wow 300ms forwards;animation:wow 300ms forwards}.tot-button-icon{position:absolute;left:1px;top:0px;-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);-webkit-animation:wow 300ms forwards;-moz-animation:wow 300ms forwards;-o-animation:wow 300ms forwards;animation:wow 300ms forwards}.tot-button:hover{-webkit-filter:contrast(0.8);filter:contrast(0.8)}@-webkit-keyframes wow{0%{-webkit-transform:scale(0)}75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-moz-keyframes wow{0%{-webkit-transform:scale(0)}75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-o-keyframes wow{0%{-webkit-transform:scale(0)}75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@keyframes wow{0%{-webkit-transform:scale(0)}75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}.black-wipe{position:absolute;top:0px;left:0px;height:100%;width:100%;background-color:black}.black-wipe-transition{-webkit-transform:translateX(-960px);-moz-transform:translateX(-960px);-ms-transform:translateX(-960px);-o-transform:translateX(-960px);transform:translateX(-960px);-webkit-transition:-webkit-transform 300ms ease-in-out;transition:-webkit-transform 300ms ease-in-out;-o-transition:-o-transform 300ms ease-in-out;-moz-transition:transform 300ms ease-in-out, -moz-transform 300ms ease-in-out;transition:transform 300ms ease-in-out;transition:transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out, -moz-transform 300ms ease-in-out, -o-transform 300ms ease-in-out}.ddl-loadscreen{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1001;background:rgba(0,0,0,0.6);-webkit-transition:opacity linear 0.2s;-o-transition:opacity linear 0.2s;-moz-transition:opacity linear 0.2s;transition:opacity linear 0.2s}.ddl-loadscreen.hidden{opacity:0;visibility:hidden;-webkit-transition:visibility linear 0.2s,opacity linear 0.2s;-o-transition:visibility linear 0.2s,opacity linear 0.2s;-moz-transition:visibility linear 0.2s,opacity linear 0.2s;transition:visibility linear 0.2s,opacity linear 0.2s}.mobile #hplogo{border:none}@-webkit-keyframes shadow-pulse{0%{-webkit-box-shadow:0 0 0 0px rgba(255,255,255,0.4);box-shadow:0 0 0 0px rgba(255,255,255,0.4)}100%{-webkit-box-shadow:0 0 0 35px rgba(255,255,255,0);box-shadow:0 0 0 35px rgba(255,255,255,0)}}@-moz-keyframes shadow-pulse{0%{-moz-box-shadow:0 0 0 0px rgba(255,255,255,0.4);box-shadow:0 0 0 0px rgba(255,255,255,0.4)}100%{-moz-box-shadow:0 0 0 35px rgba(255,255,255,0);box-shadow:0 0 0 35px rgba(255,255,255,0)}}@-o-keyframes shadow-pulse{0%{box-shadow:0 0 0 0px rgba(255,255,255,0.4)}100%{box-shadow:0 0 0 35px rgba(255,255,255,0)}}@keyframes shadow-pulse{0%{-webkit-box-shadow:0 0 0 0px rgba(255,255,255,0.4);-moz-box-shadow:0 0 0 0px rgba(255,255,255,0.4);box-shadow:0 0 0 0px rgba(255,255,255,0.4)}100%{-webkit-box-shadow:0 0 0 35px rgba(255,255,255,0);-moz-box-shadow:0 0 0 35px rgba(255,255,255,0);box-shadow:0 0 0 35px rgba(255,255,255,0)}}.door-pulsing-indicator{position:absolute;height:10px;width:10px;opacity:0.5;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:white;-webkit-animation:shadow-pulse 1.5s infinite;-moz-animation:shadow-pulse 1.5s infinite;-o-animation:shadow-pulse 1.5s infinite;animation:shadow-pulse 1.5s infinite}.loading-bar{background:#ffdd00;height:15px;bottom:0px;left:0px;position:absolute;opacity:1}.loading-bar-container{width:100%;background:white;opacity:1;height:19px;bottom:0px;position:absolute;left:0px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.replay-button{position:absolute;right:-31px;bottom:-15px;-webkit-transform:translate3d(-50%,-50%,0px);-moz-transform:translate3d(-50%,-50%,0px);transform:translate3d(-50%,-50%,0px);cursor:pointer}.replay-button:hover{-webkit-filter:brightness(1.05);filter:brightness(1.05)}@-webkit-keyframes cta-animation{0%{-webkit-transform:scale(0.3);transform:scale(0.3)}50%{-webkit-transform:scale(0.4);transform:scale(0.4)}100%{-webkit-transform:scale(0.3);transform:scale(0.3)}}@-moz-keyframes cta-animation{0%{-moz-transform:scale(0.3);transform:scale(0.3)}50%{-moz-transform:scale(0.4);transform:scale(0.4)}100%{-moz-transform:scale(0.3);transform:scale(0.3)}}@-o-keyframes cta-animation{0%{-o-transform:scale(0.3);transform:scale(0.3)}50%{-o-transform:scale(0.4);transform:scale(0.4)}100%{-o-transform:scale(0.3);transform:scale(0.3)}}@keyframes cta-animation{0%{-webkit-transform:scale(0.3);-moz-transform:scale(0.3);-o-transform:scale(0.3);transform:scale(0.3)}50%{-webkit-transform:scale(0.4);-moz-transform:scale(0.4);-o-transform:scale(0.4);transform:scale(0.4)}100%{-webkit-transform:scale(0.3);-moz-transform:scale(0.3);-o-transform:scale(0.3);transform:scale(0.3)}}.cta-play{position:absolute;top:156px;left:245px;-webkit-transform:scale(0.3);-moz-transform:scale(0.3);-ms-transform:scale(0.3);-o-transform:scale(0.3);transform:scale(0.3)}.cta-play-animated{-webkit-animation:cta-animation 1.5s infinite;-moz-animation:cta-animation 1.5s infinite;-o-animation:cta-animation 1.5s infinite;animation:cta-animation 1.5s infinite}@-webkit-keyframes star-blink{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@-moz-keyframes star-blink{0%{-moz-transform:scale(1);transform:scale(1);opacity:0}50%{-moz-transform:scale(1);transform:scale(1);opacity:1}100%{-moz-transform:scale(1);transform:scale(1);opacity:0}}@-o-keyframes star-blink{0%{-o-transform:scale(1);transform:scale(1);opacity:0}50%{-o-transform:scale(1);transform:scale(1);opacity:1}100%{-o-transform:scale(1);transform:scale(1);opacity:0}}@keyframes star-blink{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:0}}.star-cover{position:absolute;background-color:black;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:20px;height:20px;opacity:0}";
        a.appendChild(d);
        this.s = Zh(b.width,
            b.height);
        a.appendChild(this.s);
        Xh(a, [b, this.s], this.o, function (g) {
            xg(c.j, g)
        });
        xg(this.j);
        this.g = document.createElement("div");
        this.g.className = "ddldr";
        this.g.style.width = "960px";
        this.g.style.height = "540px";
        this.s.appendChild(this.g);
        Yh(this.s);
        this.Ga = function () {
            return Vh.close()
        };
        this.Fa = new Ih(this.g, this.Ga);
        this.Fa.g.style.zIndex = 10;
        qi(this);
        var e = function () {
            var g = c.s.offsetHeight / 540, h = c.g;
            g = "scale(" + g + "," + g + ") translate3d(-50%,-50%,0)";
            h.style.webkitTransform = g;
            h.style.MozTransform = g;
            h.style.transform =
                g
        };
        e();
        this.j.W.push(this.g);
        this.W = new Qh(a, this.j);
        Mb(this, Ia(Nb, this.W));
        this.ha = new lh(this.ka, this.ta, this.g, this.j);
        this.S = ne();
        this.S.classList.add("cta-play");
        this.g.appendChild(this.S);
        Sf();
        this.va = !1;
        this.v = new li(function (g) {
            e();
            pi.g && (pi.j.style.opacity = gf(pi.g).opacity, hf(pi.g) && (pi.g = null, pi.i && (pi.i(), pi.i = null)));
            var h = Be;
            h.i = Math.min(g * h.o, Se);
            h.g += h.i;
            for (g = Oe(h.j); void 0 !== g && g <= h.g;) {
                var k = h.j, l = k.g, m = l.length;
                g = l[0];
                if (0 >= m) g = void 0; else {
                    if (1 == m) {
                        if (!Ca(l)) for (k = l.length - 1; 0 <=
                        k; k--) delete l[k];
                        l.length = 0
                    } else {
                        l[0] = l.pop();
                        l = 0;
                        k = k.g;
                        m = k.length;
                        for (var r = k[l]; l < m >> 1;) {
                            var n = 2 * l + 1, q = 2 * l + 2;
                            n = q < m && k[q].g < k[n].g ? q : n;
                            if (k[n].g > r.g) break;
                            k[l] = k[n];
                            l = n
                        }
                        k[l] = r
                    }
                    g = g.i
                }
                g();
                g = Oe(h.j)
            }
            h = Be.i;
            c.W.o(h);
            g = Vh;
            if (g.s || g.o || g.v) if (l = !!document[$h], k = window.innerWidth, m = window.innerHeight, 0 == window.scrollX && 0 == window.scrollY || window.scrollTo(0, 0), k != g.W || m != g.V || l != g.ka || g.g) {
                g.T = k < m;
                r = !1;
                for (n = 0; n < g.i.length; ++n) {
                    q = g.i[n];
                    var w = q.width || q.dataset.width, u = q.height || q.dataset.height;
                    if (g.o) {
                        if (Q()) throw"";
                        Gf() && Fd && !Cd && !Ed && 0 == n && (r = w < u != g.T);
                        var nb = r ? Math.min(k / u, m / w) : Math.min(k / w, m / u);
                        w = nb * w;
                        u = nb * u;
                        if (r) {
                            nb = (k - u) / 2 + u;
                            var yf = (m - w) / 2;
                            var zf = "rotate(90deg)"
                        } else nb = (k - w) / 2, yf = (m - u) / 2, zf = "";
                        Rd(q, "TransformOrigin", "0 0");
                        Rd(q, "Transform", zf);
                        R(q, "position", "absolute", "width", w + "px", "height", u + "px", "left", nb + "px", "top", yf + "px")
                    } else Ad && R(q, "height", m + "px")
                }
                g.v || C(O, "CriOS") || document.body.clientWidth > k && 0 < k && R(document.body, "width", k + "px");
                R(g.j, "height", "100%", "width", "100%");
                g.ha(r);
                g.W = k;
                g.V = m;
                g.ka =
                    l;
                g.g = !1
            }
            c.Fa.g.style.display = document[$h] ? "block" : "none";
            c.va && rh(c.ha, h);
            c.T.clearRect(0, 0, c.T.canvas.width, c.T.canvas.height);
            c.va ? sh(c.ha, c.T) : c.V.isVisible() && Df(c.V)
        });
        d = document.createElement("canvas");
        d.classList.add("ddl-loadscreen");
        d.classList.add("hidden");
        this.g.appendChild(d);
        this.V = new Cf;
        this.g.appendChild(pi.j);
        if (Hf()) ri(this); else {
            var f = T(0, 0, 960, 540);
            zg(this.j, f, function (g) {
                "mousedown" == g && (Cg(c.j, f), ri(c))
            })
        }
    };
    t(si, E);
    var ri = function (a) {
        a.v.start();
        Tf();
        var b = new Promise(function (d) {
            return ie(le, [1, 2, 6], function () {
                return d()
            })
        }), c = function () {
            a.ka.style.background = "none";
            a.ta.title = "";
            Ef(a.V);
            b.then(function () {
                var d = a.V;
                d.g.classList.add("hidden");
                d.i = !1;
                d = a.ha;
                yh(d);
                ph(d);
                a.va = !0
            })
        };
        a.g.removeChild(a.S);
        Ff() ? Rh(a.W, function () {
            c()
        }) : c()
    };
    si.prototype.start = function () {
        var a;
        Q() ? a = "1" == P.g.get("scta") : a = Ld();
        a ? this.v.v(50) : (this.v.start(), this.S.classList.add("cta-play-animated"))
    };
    var qi = function (a) {
        dh(a.o, a.ta, ["mousedown", "mouseout", "touchstart"], function (b) {
            return a.j.handleEvent(b)
        }, !0);
        dh(a.o, document, ["mouseup", "mousemove", "touchend", "touchmove", "contextmenu"], function (b) {
            return a.j.handleEvent(b)
        }, !0);
        dh(a.o, window, "resize", function (b) {
            return a.j.handleEvent(b)
        }, !0);
        dh(a.o, a.ka, ["click", "touchend"], function () {
            Uh(Vh)
        })
    }, ti = null;
    (function (a, b) {
        ai(function () {
            a()
        }, b);
        a()
    })(function () {
        Nf();
        var a = [ki(), Jg.$().load(Xd, Yd, uf, "img/halloween-2019/")];
        Fd && document.body.classList.add("mobile");
        Ld() && document.body.classList.add("ntp");
        var b = new Promise(function (f) {
            return le.preload(0, function () {
                return f()
            })
        });
        Vc();
        var c = new Promise(function (f) {
            return M.i.bc.preload(function () {
                return f()
            })
        }), d = new Promise(function (f) {
            Pd(f)
        }), e = new Promise(function (f) {
            oi.preload(0, f)
        });
        a.push(b);
        a.push(d);
        a.push(e);
        a.push(c);
        Promise.all(a).then(function () {
            var f =
                document.getElementById("hplogo"), g = document.getElementById("hpcanvas");
            f && g && (ti = new si(f, g), ti.start())
        })
    }, function () {
        for (var a = p(le.g), b = a.next(); !b.done; b = a.next()) b.value.s = [];
        Nb(ti)
    });
}).call(this);
