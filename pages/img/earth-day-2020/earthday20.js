(function () {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var d, aa = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }, ea = function (a) {
        a = ["object" == typeof globalThis && globalThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("a");
    }, fa = ea(this), ha = function () {
        ha =
            function () {
            };
        fa.Symbol || (fa.Symbol = ia)
    }, ja = function (a, b) {
        this.g = a;
        ba(this, "description", {configurable: !0, writable: !0, value: b})
    };
    ja.prototype.toString = function () {
        return this.g
    };
    var ia = function () {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new ja("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }

            var b = 0;
            return a
        }(), la = function () {
            ha();
            var a = fa.Symbol.iterator;
            a || (a = fa.Symbol.iterator = fa.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return ka(aa(this))
                }
            });
            la = function () {
            }
        }, ka = function (a) {
            la();
            a = {next: a};
            a[fa.Symbol.iterator] = function () {
                return this
            };
            return a
        },
        n = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {next: aa(a)}
        }, ma = function (a) {
            if (!(a instanceof Array)) {
                a = n(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        }, na = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {
            };
            b.prototype = a;
            return new b
        }, oa;
    if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf; else {
        var pa;
        a:{
            var qa = {a: !0}, ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {
            }
            pa = !1
        }
        oa = pa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa, p = function (a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var e = Object.getOwnPropertyDescriptor(b, c);
            e && Object.defineProperty(a, c, e)
        } else a[c] = b[c];
        a.mb = b.prototype
    }, ta = function (a, b) {
        if (b) {
            var c = fa;
            a = a.split(".");
            for (var e = 0; e < a.length - 1; e++) {
                var f = a[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            a = a[a.length - 1];
            e = c[a];
            b = b(e);
            b != e && null != b && ba(c, a, {configurable: !0, writable: !0, value: b})
        }
    };
    ta("Promise", function (a) {
        function b() {
            this.g = null
        }

        function c(h) {
            return h instanceof f ? h : new f(function (k) {
                k(h)
            })
        }

        if (a) return a;
        b.prototype.i = function (h) {
            if (null == this.g) {
                this.g = [];
                var k = this;
                this.j(function () {
                    k.s()
                })
            }
            this.g.push(h)
        };
        var e = fa.setTimeout;
        b.prototype.j = function (h) {
            e(h, 0)
        };
        b.prototype.s = function () {
            for (; this.g && this.g.length;) {
                var h = this.g;
                this.g = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function (h) {
            this.j(function () {
                throw h;
            })
        };
        var f = function (h) {
            this.i = 0;
            this.j = void 0;
            this.g = [];
            var k = this.o();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        f.prototype.o = function () {
            function h(m) {
                return function (q) {
                    l || (l = !0, m.call(k, q))
                }
            }

            var k = this, l = !1;
            return {resolve: h(this.ha), reject: h(this.s)}
        };
        f.prototype.ha = function (h) {
            if (h === this) this.s(new TypeError("A Promise cannot resolve to itself")); else if (h instanceof f) this.ka(h); else {
                a:switch (typeof h) {
                    case "object":
                        var k = null != h;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.U(h) :
                    this.v(h)
            }
        };
        f.prototype.U = function (h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.s(l);
                return
            }
            "function" == typeof k ? this.ta(k, h) : this.v(h)
        };
        f.prototype.s = function (h) {
            this.H(2, h)
        };
        f.prototype.v = function (h) {
            this.H(1, h)
        };
        f.prototype.H = function (h, k) {
            if (0 != this.i) throw Error("b`" + h + "`" + k + "`" + this.i);
            this.i = h;
            this.j = k;
            this.T()
        };
        f.prototype.T = function () {
            if (null != this.g) {
                for (var h = 0; h < this.g.length; ++h) g.i(this.g[h]);
                this.g = null
            }
        };
        var g = new b;
        f.prototype.ka = function (h) {
            var k = this.o();
            h.mc(k.resolve, k.reject)
        };
        f.prototype.ta = function (h, k) {
            var l = this.o();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        f.prototype.then = function (h, k) {
            function l(B, G) {
                return "function" == typeof B ? function (ca) {
                    try {
                        m(B(ca))
                    } catch (da) {
                        q(da)
                    }
                } : G
            }

            var m, q, w = new f(function (B, G) {
                m = B;
                q = G
            });
            this.mc(l(h, m), l(k, q));
            return w
        };
        f.prototype.catch = function (h) {
            return this.then(void 0, h)
        };
        f.prototype.mc = function (h, k) {
            function l() {
                switch (m.i) {
                    case 1:
                        h(m.j);
                        break;
                    case 2:
                        k(m.j);
                        break;
                    default:
                        throw Error("c`" + m.i);
                }
            }

            var m = this;
            null == this.g ?
                g.i(l) : this.g.push(l)
        };
        f.resolve = c;
        f.reject = function (h) {
            return new f(function (k, l) {
                l(h)
            })
        };
        f.race = function (h) {
            return new f(function (k, l) {
                for (var m = n(h), q = m.next(); !q.done; q = m.next()) c(q.value).mc(k, l)
            })
        };
        f.all = function (h) {
            var k = n(h), l = k.next();
            return l.done ? c([]) : new f(function (m, q) {
                function w(ca) {
                    return function (da) {
                        B[ca] = da;
                        G--;
                        0 == G && m(B)
                    }
                }

                var B = [], G = 0;
                do B.push(void 0), G++, c(l.value).mc(w(B.length - 1), q), l = k.next(); while (!l.done)
            })
        };
        return f
    });
    var ua = function () {
        this.j = !1;
        this.i = null;
        this.s = void 0;
        this.g = 1;
        this.H = 0;
        this.o = null
    }, va = function (a) {
        if (a.j) throw new TypeError("Generator is already running");
        a.j = !0
    };
    ua.prototype.v = function (a) {
        this.s = a
    };
    var wa = function (a, b) {
        a.o = {WB: b, XB: !0};
        a.g = a.H
    };
    ua.prototype.return = function (a) {
        this.o = {return: a};
        this.g = this.H
    };
    var r = function (a, b, c) {
            a.g = c;
            return {value: b}
        }, xa = function (a) {
            this.g = new ua;
            this.i = a
        }, Aa = function (a, b) {
            va(a.g);
            var c = a.g.i;
            if (c) return ya(a, "return" in c ? c["return"] : function (e) {
                return {value: e, done: !0}
            }, b, a.g.return);
            a.g.return(b);
            return za(a)
        }, ya = function (a, b, c, e) {
            try {
                var f = b.call(a.g.i, c);
                if (!(f instanceof Object)) throw new TypeError("Iterator result " + f + " is not an object");
                if (!f.done) return a.g.j = !1, f;
                var g = f.value
            } catch (h) {
                return a.g.i = null, wa(a.g, h), za(a)
            }
            a.g.i = null;
            e.call(a.g, g);
            return za(a)
        },
        za = function (a) {
            for (; a.g.g;) try {
                var b = a.i(a.g);
                if (b) return a.g.j = !1, {value: b.value, done: !1}
            } catch (c) {
                a.g.s = void 0, wa(a.g, c)
            }
            a.g.j = !1;
            if (a.g.o) {
                b = a.g.o;
                a.g.o = null;
                if (b.XB) throw b.WB;
                return {value: b.return, done: !0}
            }
            return {value: void 0, done: !0}
        }, Ba = function (a) {
            this.next = function (b) {
                va(a.g);
                a.g.i ? b = ya(a, a.g.i.next, b, a.g.v) : (a.g.v(b), b = za(a));
                return b
            };
            this.throw = function (b) {
                va(a.g);
                a.g.i ? b = ya(a, a.g.i["throw"], b, a.g.v) : (wa(a.g, b), b = za(a));
                return b
            };
            this.return = function (b) {
                return Aa(a, b)
            };
            la();
            this[Symbol.iterator] =
                function () {
                    return this
                }
        }, Ca = function (a) {
            function b(e) {
                return a.next(e)
            }

            function c(e) {
                return a.throw(e)
            }

            return new Promise(function (e, f) {
                function g(h) {
                    h.done ? e(h.value) : Promise.resolve(h.value).then(b, c).then(g, f)
                }

                g(a.next())
            })
        }, Da = function (a) {
            return Ca(new Ba(new xa(a)))
        };
    ta("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var e = this + "";
            b += "";
            var f = e.length, g = b.length;
            c = Math.max(0, Math.min(c | 0, e.length));
            for (var h = 0; h < g && c < f;) if (e[c++] != b[h++]) return !1;
            return h >= g
        }
    });
    ta("Array.prototype.fill", function (a) {
        return a ? a : function (b, c, e) {
            var f = this.length || 0;
            0 > c && (c = Math.max(0, f + c));
            if (null == e || e > f) e = f;
            e = Number(e);
            0 > e && (e = Math.max(0, f + e));
            for (c = Number(c || 0); c < e; c++) this[c] = b;
            return this
        }
    });
    var Ea = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ta("WeakMap", function (a) {
        function b() {
        }

        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function e(l) {
            if (!Ea(l, g)) {
                var m = new b;
                ba(l, g, {value: m})
            }
        }

        function f(l) {
            var m = Object[l];
            m && (Object[l] = function (q) {
                if (q instanceof b) return q;
                e(q);
                return m(q)
            })
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var l = Object.seal({}), m = Object.seal({}), q = new a([[l, 2], [m, 3]]);
                if (2 != q.get(l) || 3 != q.get(m)) return !1;
                q.delete(l);
                q.set(m, 4);
                return !q.has(l) && 4 == q.get(m)
            } catch (w) {
                return !1
            }
        }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0, k = function (l) {
            this.g = (h += Math.random() + 1).toString();
            if (l) {
                l = n(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        };
        k.prototype.set = function (l, m) {
            if (!c(l)) throw Error("d");
            e(l);
            if (!Ea(l, g)) throw Error("e`" + l);
            l[g][this.g] = m;
            return this
        };
        k.prototype.get = function (l) {
            return c(l) && Ea(l, g) ? l[g][this.g] : void 0
        };
        k.prototype.has = function (l) {
            return c(l) && Ea(l, g) && Ea(l[g], this.g)
        };
        k.prototype.delete = function (l) {
            return c(l) &&
            Ea(l, g) && Ea(l[g], this.g) ? delete l[g][this.g] : !1
        };
        return k
    });
    ta("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var k = Object.seal({x: 4}), l = new a(n([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({x: 4}) || l.set({x: 4}, "t") != l || 2 != l.size) return !1;
                var m = l.entries(), q = m.next();
                if (q.done || q.value[0] != k || "s" != q.value[1]) return !1;
                q = m.next();
                return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
            } catch (w) {
                return !1
            }
        }()) return a;
        la();
        var b = new WeakMap, c = function (k) {
            this.i = {};
            this.g =
                g();
            this.size = 0;
            if (k) {
                k = n(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
        c.prototype.set = function (k, l) {
            k = 0 === k ? 0 : k;
            var m = e(this, k);
            m.list || (m.list = this.i[m.id] = []);
            m.La ? m.La.value = l : (m.La = {
                next: this.g,
                hb: this.g.hb,
                head: this.g,
                key: k,
                value: l
            }, m.list.push(m.La), this.g.hb.next = m.La, this.g.hb = m.La, this.size++);
            return this
        };
        c.prototype.delete = function (k) {
            k = e(this, k);
            return k.La && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.i[k.id], k.La.hb.next = k.La.next, k.La.next.hb = k.La.hb,
                k.La.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.i = {};
            this.g = this.g.hb = g();
            this.size = 0
        };
        c.prototype.has = function (k) {
            return !!e(this, k).La
        };
        c.prototype.get = function (k) {
            return (k = e(this, k).La) && k.value
        };
        c.prototype.entries = function () {
            return f(this, function (k) {
                return [k.key, k.value]
            })
        };
        c.prototype.keys = function () {
            return f(this, function (k) {
                return k.key
            })
        };
        c.prototype.values = function () {
            return f(this, function (k) {
                return k.value
            })
        };
        c.prototype.forEach = function (k, l) {
            for (var m = this.entries(),
                     q; !(q = m.next()).done;) q = q.value, k.call(l, q[1], q[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var e = function (k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h, b.set(l, m)) : m = "p_" + l;
            var q = k.i[m];
            if (q && Ea(k.i, m)) for (k = 0; k < q.length; k++) {
                var w = q[k];
                if (l !== l && w.key !== w.key || l === w.key) return {id: m, list: q, index: k, La: w}
            }
            return {id: m, list: q, index: -1, La: void 0}
        }, f = function (k, l) {
            var m = k.g;
            return ka(function () {
                if (m) {
                    for (; m.head != k.g;) m = m.hb;
                    for (; m.next != m.head;) return m =
                        m.next, {done: !1, value: l(m)};
                    m = null
                }
                return {done: !0, value: void 0}
            })
        }, g = function () {
            var k = {};
            return k.hb = k.next = k.head = k
        }, h = 0;
        return c
    });
    ta("Number.MAX_SAFE_INTEGER", function () {
        return 9007199254740991
    });
    ta("Number.MIN_SAFE_INTEGER", function () {
        return -9007199254740991
    });
    ta("Object.values", function (a) {
        return a ? a : function (b) {
            var c = [], e;
            for (e in b) Ea(b, e) && c.push(b[e]);
            return c
        }
    });
    ta("Array.prototype.flatMap", function (a) {
        return a ? a : function (b, c) {
            for (var e = [], f = 0; f < this.length; f++) {
                var g = b.call(c, this[f], f, this);
                Array.isArray(g) ? e.push.apply(e, g) : e.push(g)
            }
            return e
        }
    });
    ta("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ta("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var e = this;
            e instanceof String && (e = String(e));
            var f = e.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
                var g = e[c];
                if (g === b || Object.is(g, b)) return !0
            }
            return !1
        }
    });
    ta("Promise.prototype.finally", function (a) {
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
    var Fa = Fa || {}, t = this || self, Ga = /^[\w+/_-]+[=]{0,2}$/, Ha = null, Ia = function () {
    }, Ja = function (a) {
        a.Pc = void 0;
        a.Fa = function () {
            return a.Pc ? a.Pc : a.Pc = new a
        }
    }, Ka = function (a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }, La = function (a) {
        var b = Ka(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, Ma = function (a) {
        return "function" == Ka(a)
    }, Na = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, Oa = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, Pa = function (a,
                      b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var f = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(f, e);
                return a.apply(b, f)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, Qa = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qa = Oa : Qa = Pa;
        return Qa.apply(null, arguments)
    }, Ra = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var e = c.slice();
            e.push.apply(e, arguments);
            return a.apply(this, e)
        }
    }, Sa = Date.now || function () {
        return +new Date
    }, Va = function (a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c[e] && c[e] !== Object.prototype[e] ? c = c[e] : c = c[e] = {} : c[e] = b
    }, u = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.mb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Wa = "en af sq am ar hy az eu be bn bs bg my ca zh-HK zh-CN zh-TW hr cs da nl en-GB et fa fil fi fr fr-CA gl ka de el gu iw hi hu is id it ja kn kk km ko ky lo lv lt mk ms ml mr mn ne no pl pt-BR pt-PT pa ro ru sr si-LK sk sl es-419 es sw sv ta te th tr uk ur uz vi zu".split(" ");
    var Xa = function (a) {
        this.Tb = a;
        this.j = !1;
        this.s = []
    };
    Xa.prototype.i = function () {
        if (!this.j) {
            this.j = !0;
            for (var a = 0, b; b = this.s[a]; a++) b()
        }
    };
    Xa.prototype.Qc = function () {
        return this.j
    };
    var Ya = function (a, b) {
        a.j ? b() : a.s.push(b)
    };
    Xa.prototype.unload = function () {
        this.j = !1;
        this.s = []
    };
    var Za = function (a) {
        Xa.call(this, a);
        this.g = new Image
    };
    u(Za, Xa);
    Za.prototype.preload = function () {
        if (!this.g.src) {
            var a = this;
            this.g.onload = function () {
                a.i()
            };
            this.g.src = this.Tb;
            (this.g.complete || "complete" == this.g.readyState) && this.i()
        }
    };
    Za.prototype.unload = function () {
        Za.mb.unload.call(this);
        this.g = new Image
    };
    var bb = function (a) {
        var b = new Image;
        b.onerror = b.onload = b.onabort = function () {
            delete $a[ab]
        };
        $a[ab] = b;
        b.src = "/gen_204?atyp=i&ct=doodle&cad=" + a + "&zx=" + Sa();
        ab++
    }, $a = [], ab = 0;
    var cb = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, cb); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    u(cb, Error);
    cb.prototype.name = "CustomError";
    var db;
    var eb = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        fb = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        gb = /^http:\/\/.*/, hb = /\s+/, ib = /[\d\u06f0-\u06f9]/;
    var jb = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, kb = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var e = a.length, f = "string" === typeof a ? a.split("") : a, g = 0; g < e; g++) g in f && b.call(c, f[g], g, a)
    }, lb = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a,
            b, void 0)
    } : function (a, b) {
        for (var c = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++) if (h in g) {
            var k = g[h];
            b.call(void 0, k, h, a) && (e[f++] = k)
        }
        return e
    }, mb = Array.prototype.reduce ? function (a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function (a, b, c) {
        var e = c;
        kb(a, function (f, g) {
            e = b.call(void 0, e, f, g, a)
        });
        return e
    }, nb = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) if (f in
            e && b.call(void 0, e[f], f, a)) return !0;
        return !1
    }, pb = function (a) {
        a:{
            var b = ob;
            for (var c = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) if (f in e && b.call(void 0, e[f], f, a)) {
                b = f;
                break a
            }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }, qb = function (a, b) {
        b = jb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }, rb = function (a) {
        return Array.prototype.concat.apply([], arguments)
    }, sb = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
            return c
        }
        return []
    }, ub =
        function (a, b) {
            a.sort(b || tb)
        }, tb = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }, vb = function (a) {
        for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
            var e = Math.floor(b() * (c + 1)), f = a[c];
            a[c] = a[e];
            a[e] = f
        }
    };
    var wb = function (a, b, c) {
            for (var e in a) b.call(c, a[e], e, a)
        }, xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        yb = function (a, b) {
            for (var c, e, f = 1; f < arguments.length; f++) {
                e = arguments[f];
                for (c in e) a[c] = e[c];
                for (var g = 0; g < xb.length; g++) c = xb[g], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
            }
        };
    var Bb = function (a, b) {
        this.g = a === zb && b || "";
        this.i = Ab
    };
    Bb.prototype.Ib = !0;
    Bb.prototype.Gb = function () {
        return this.g
    };
    var Cb = function (a) {
        return a instanceof Bb && a.constructor === Bb && a.i === Ab ? a.g : "type_error:Const"
    }, Ab = {}, zb = {}, Db = new Bb(zb, "");
    var Gb = function (a, b) {
        this.i = a === Eb && b || "";
        this.j = Fb
    };
    Gb.prototype.Ib = !0;
    Gb.prototype.Gb = function () {
        return this.i.toString()
    };
    Gb.prototype.Oc = !0;
    Gb.prototype.g = function () {
        return 1
    };
    var Hb = function (a) {
        if (a instanceof Gb && a.constructor === Gb && a.j === Fb) return a.i;
        Ka(a);
        return "type_error:TrustedResourceUrl"
    }, Fb = {}, Eb = {};
    var Ib = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }, Qb = function (a, b) {
        if (b) a = a.replace(Jb, "&amp;").replace(Kb, "&lt;").replace(Lb, "&gt;").replace(Mb, "&quot;").replace(Nb, "&#39;").replace(Ob, "&#0;"); else {
            if (!Pb.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Jb, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Kb, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Lb, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Mb, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Nb,
                "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Ob, "&#0;"))
        }
        return a
    }, Jb = /&/g, Kb = /</g, Lb = />/g, Mb = /"/g, Nb = /'/g, Ob = /\x00/g, Pb = /[\x00&<>"']/, v = function (a, b) {
        return -1 != a.indexOf(b)
    }, Rb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ub = function (a, b) {
        this.i = a === Sb && b || "";
        this.j = Tb
    };
    Ub.prototype.Ib = !0;
    Ub.prototype.Gb = function () {
        return this.i.toString()
    };
    Ub.prototype.Oc = !0;
    Ub.prototype.g = function () {
        return 1
    };
    var Vb = function (a) {
        if (a instanceof Ub && a.constructor === Ub && a.j === Tb) return a.i;
        Ka(a);
        return "type_error:SafeUrl"
    }, Wb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Xb = function (a) {
        if (a instanceof Ub) return a;
        a = "object" == typeof a && a.Ib ? a.Gb() : String(a);
        Wb.test(a) || (a = "about:invalid#zClosurez");
        return new Ub(Sb, a)
    }, Tb = {}, Sb = {};
    var Yb;
    a:{
        var Zb = t.navigator;
        if (Zb) {
            var $b = Zb.userAgent;
            if ($b) {
                Yb = $b;
                break a
            }
        }
        Yb = ""
    }
    var x = function (a) {
        return v(Yb, a)
    };
    var bc = function () {
        this.i = "";
        this.o = ac;
        this.j = null
    };
    bc.prototype.Oc = !0;
    bc.prototype.g = function () {
        return this.j
    };
    bc.prototype.Ib = !0;
    bc.prototype.Gb = function () {
        return this.i.toString()
    };
    var cc = function (a) {
        if (a instanceof bc && a.constructor === bc && a.o === ac) return a.i;
        Ka(a);
        return "type_error:SafeHtml"
    }, ec = function (a) {
        if (a instanceof bc) return a;
        var b = "object" == typeof a, c = null;
        b && a.Oc && (c = a.g());
        a = Qb(b && a.Ib ? a.Gb() : String(a));
        return dc(a, c)
    }, ac = {}, dc = function (a, b) {
        var c = new bc;
        c.i = a;
        c.j = b;
        return c
    };
    dc("<!DOCTYPE html>", 0);
    var fc = dc("", 0);
    dc("<br>", 0);
    var gc = function (a) {
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
        a.innerHTML = cc(fc);
        return !b.parentElement
    }), hc = function (a, b) {
        a.src = Hb(b);
        if (null === Ha) b:{
            b = t.document;
            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && Ga.test(b)) {
                Ha = b;
                break b
            }
            Ha = ""
        }
        b = Ha;
        b && a.setAttribute("nonce",
            b)
    }, ic = function (a) {
        a = a instanceof Ub ? a : Xb(a);
        t.open(Vb(a), "", void 0, void 0)
    };
    var jc = function (a, b, c) {
        return Math.min(Math.max(a, b), c)
    }, y = function (a, b, c) {
        return a + c * (b - a)
    };
    var kc = function (a, b) {
        this.i = {};
        this.g = [];
        this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("f");
            for (var e = 0; e < c; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (a) if (a instanceof kc) for (c = a.ab(), e = 0; e < c.length; e++) this.set(c[e], a.get(c[e])); else for (e in a) this.set(e, a[e])
    };
    kc.prototype.Ta = function () {
        lc(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
        return a
    };
    kc.prototype.ab = function () {
        lc(this);
        return this.g.concat()
    };
    var lc = function (a) {
        if (a.j != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var e = a.g[b];
                mc(a.i, e) && (a.g[c++] = e);
                b++
            }
            a.g.length = c
        }
        if (a.j != a.g.length) {
            var f = {};
            for (c = b = 0; b < a.g.length;) e = a.g[b], mc(f, e) || (a.g[c++] = e, f[e] = 1), b++;
            a.g.length = c
        }
    };
    kc.prototype.get = function (a, b) {
        return mc(this.i, a) ? this.i[a] : b
    };
    kc.prototype.set = function (a, b) {
        mc(this.i, a) || (this.j++, this.g.push(a));
        this.i[a] = b
    };
    kc.prototype.forEach = function (a, b) {
        for (var c = this.ab(), e = 0; e < c.length; e++) {
            var f = c[e], g = this.get(f);
            a.call(b, g, f, this)
        }
    };
    kc.prototype.clone = function () {
        return new kc(this)
    };
    var mc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var nc = function (a) {
        if (a.Ta && "function" == typeof a.Ta) return a.Ta();
        if ("string" === typeof a) return a.split("");
        if (La(a)) {
            for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
            return b
        }
        b = [];
        c = 0;
        for (e in a) b[c++] = a[e];
        return b
    }, oc = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0); else if (La(a) || "string" === typeof a) kb(a, b, void 0); else {
            if (a.ab && "function" == typeof a.ab) var c = a.ab(); else if (a.Ta && "function" == typeof a.Ta) c = void 0; else if (La(a) || "string" === typeof a) {
                c = [];
                for (var e = a.length,
                         f = 0; f < e; f++) c.push(f)
            } else for (f in c = [], e = 0, a) c[e++] = f;
            e = nc(a);
            f = e.length;
            for (var g = 0; g < f; g++) b.call(void 0, e[g], c && c[g], a)
        }
    };
    var pc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        qc = function (a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var e = a[c].indexOf("="), f = null;
                    if (0 <= e) {
                        var g = a[c].substring(0, e);
                        f = a[c].substring(e + 1)
                    } else g = a[c];
                    b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
            }
        };
    var rc = function (a) {
        this.j = this.H = this.o = "";
        this.T = null;
        this.s = this.i = "";
        this.v = !1;
        var b;
        a instanceof rc ? (this.v = a.v, sc(this, a.o), this.H = a.H, this.j = a.j, tc(this, a.T), this.i = a.i, uc(this, a.g.clone()), this.s = a.s) : a && (b = String(a).match(pc)) ? (this.v = !1, sc(this, b[1] || "", !0), this.H = vc(b[2] || ""), this.j = vc(b[3] || "", !0), tc(this, b[4]), this.i = vc(b[5] || "", !0), uc(this, b[6] || "", !0), this.s = vc(b[7] || "")) : (this.v = !1, this.g = new wc(null, this.v))
    };
    rc.prototype.toString = function () {
        var a = [], b = this.o;
        b && a.push(xc(b, yc, !0), ":");
        var c = this.j;
        if (c || "file" == b) a.push("//"), (b = this.H) && a.push(xc(b, yc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.T, null != c && a.push(":", String(c));
        if (c = this.i) this.j && "/" != c.charAt(0) && a.push("/"), a.push(xc(c, "/" == c.charAt(0) ? zc : Ac, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.s) && a.push("#", xc(c, Bc));
        return a.join("")
    };
    rc.prototype.resolve = function (a) {
        var b = this.clone(), c = !!a.o;
        c ? sc(b, a.o) : c = !!a.H;
        c ? b.H = a.H : c = !!a.j;
        c ? b.j = a.j : c = null != a.T;
        var e = a.i;
        if (c) tc(b, a.T); else if (c = !!a.i) {
            if ("/" != e.charAt(0)) if (this.j && !this.i) e = "/" + e; else {
                var f = b.i.lastIndexOf("/");
                -1 != f && (e = b.i.substr(0, f + 1) + e)
            }
            f = e;
            if (".." == f || "." == f) e = ""; else if (v(f, "./") || v(f, "/.")) {
                e = 0 == f.lastIndexOf("/", 0);
                f = f.split("/");
                for (var g = [], h = 0; h < f.length;) {
                    var k = f[h++];
                    "." == k ? e && h == f.length && g.push("") : ".." == k ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(),
                    e && h == f.length && g.push("")) : (g.push(k), e = !0)
                }
                e = g.join("/")
            } else e = f
        }
        c ? b.i = e : c = "" !== a.g.toString();
        c ? uc(b, a.g.clone()) : c = !!a.s;
        c && (b.s = a.s);
        return b
    };
    rc.prototype.clone = function () {
        return new rc(this)
    };
    var sc = function (a, b, c) {
        a.o = c ? vc(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }, tc = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("g`" + b);
            a.T = b
        } else a.T = null
    }, uc = function (a, b, c) {
        b instanceof wc ? (a.g = b, Cc(a.g, a.v)) : (c || (b = xc(b, Dc)), a.g = new wc(b, a.v))
    }, vc = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, xc = function (a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Ec), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, Ec = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, yc = /[#\/\?@]/g, Ac = /[#\?:]/g, zc = /[#\?]/g, Dc = /[#\?@]/g, Bc = /#/g, wc = function (a, b) {
        this.i = this.g = null;
        this.j = a || null;
        this.o = !!b
    }, Fc = function (a) {
        a.g || (a.g = new kc, a.i = 0, a.j && qc(a.j, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    };
    wc.prototype.add = function (a, b) {
        Fc(this);
        this.j = null;
        a = Gc(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.i += 1;
        return this
    };
    var Hc = function (a, b) {
        Fc(a);
        b = Gc(a, b);
        mc(a.g.i, b) && (a.j = null, a.i -= a.g.get(b).length, a = a.g, mc(a.i, b) && (delete a.i[b], a.j--, a.g.length > 2 * a.j && lc(a)))
    }, Ic = function (a, b) {
        Fc(a);
        b = Gc(a, b);
        return mc(a.g.i, b)
    };
    d = wc.prototype;
    d.forEach = function (a, b) {
        Fc(this);
        this.g.forEach(function (c, e) {
            kb(c, function (f) {
                a.call(b, f, e, this)
            }, this)
        }, this)
    };
    d.ab = function () {
        Fc(this);
        for (var a = this.g.Ta(), b = this.g.ab(), c = [], e = 0; e < b.length; e++) for (var f = a[e], g = 0; g < f.length; g++) c.push(b[e]);
        return c
    };
    d.Ta = function (a) {
        Fc(this);
        var b = [];
        if ("string" === typeof a) Ic(this, a) && (b = rb(b, this.g.get(Gc(this, a)))); else {
            a = this.g.Ta();
            for (var c = 0; c < a.length; c++) b = rb(b, a[c])
        }
        return b
    };
    d.set = function (a, b) {
        Fc(this);
        this.j = null;
        a = Gc(this, a);
        Ic(this, a) && (this.i -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.i += 1;
        return this
    };
    d.get = function (a, b) {
        if (!a) return b;
        a = this.Ta(a);
        return 0 < a.length ? String(a[0]) : b
    };
    d.toString = function () {
        if (this.j) return this.j;
        if (!this.g) return "";
        for (var a = [], b = this.g.ab(), c = 0; c < b.length; c++) {
            var e = b[c], f = encodeURIComponent(String(e));
            e = this.Ta(e);
            for (var g = 0; g < e.length; g++) {
                var h = f;
                "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
                a.push(h)
            }
        }
        return this.j = a.join("&")
    };
    d.clone = function () {
        var a = new wc;
        a.j = this.j;
        this.g && (a.g = this.g.clone(), a.i = this.i);
        return a
    };
    var Gc = function (a, b) {
        b = String(b);
        a.o && (b = b.toLowerCase());
        return b
    }, Cc = function (a, b) {
        b && !a.o && (Fc(a), a.j = null, a.g.forEach(function (c, e) {
            var f = e.toLowerCase();
            e != f && (Hc(this, e), Hc(this, f), 0 < c.length && (this.j = null, this.g.set(Gc(this, f), sb(c)), this.i += c.length))
        }, a));
        a.o = b
    };
    var z = navigator.userAgent, Jc = new rc(location.href),
        Kc = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
        Lc = v(z, "iPad") || v(z, "iPhone") || v(z, "iPod") || Kc, Mc = v(z.toLowerCase(), "gsa") || v(z, "GoogleApp"),
        Nc = Mc && Lc, Oc = Mc && !Lc, Pc = v(z, "Gbot"),
        Qc = Lc || v(z, "Android") || v(z, "Mobile") || v(z, "Silk") || v(z, "UCBrowser") || v(z, "UCWEB"),
        Rc = !!document.querySelector("body.hp"), Sc = v(z, "MSIE"), Tc = Sc && v(z, "MSIE 8."),
        Uc = v(Jc.i, "/pages/") && v(Jc.i, ".html"), Wc = function () {
            return !!document.getElementById("fkbx") || Vc()
        }, Vc =
            function () {
                var a = Jc.g.get("ntp");
                return "1" == a || "2" == a
            }, Xc = function () {
            return "1" == Jc.g.get("fpdoodle") && !!document.getElementById("fpdoodle")
        }, Yc = function () {
            return !!document.querySelector("body#iframedoodle")
        };
    var A = function (a, b) {
        for (var c = [], e = 1; e < arguments.length; ++e) c[e - 1] = arguments[e];
        if (a) for (e = 0; e < c.length; e += 2) {
            var f = c[e], g = c[e + 1], h = a.style;
            h && f in h ? h[f] = g : f in a ? a[f] = g : Sc && h && "opacity" == f && (a.zoom = 1, f = (h.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(g)) || (f += "alpha(opacity=" + 100 * g + ")"), h.filter = f)
        }
    }, Zc = self.performance && self.performance.now ? function () {
        return self.performance.now()
    } : Sa, ad = function () {
        var a = ["Nunito Sans"], b, c, e = new Promise(function (g, h) {
            b = g;
            c = h
        });
        if (window.WebFontConfig &&
            a) {
            a = n(a);
            for (var f = a.next(); !f.done; f = a.next()) $c(f.value);
            return e
        }
        Va("WebFontConfig.active", b);
        Va("WebFontConfig.inactive", c);
        Va("WebFontConfig.google.families", a);
        a = document.createElement("script");
        a.src = ("https:" == document.location.protocol ? "" : "") + "img/earth-day-2020/webfont.js";
        a.type = "text/javascript";
        a.async = "true";
        (document.getElementById("xjsc") || document.body).appendChild(a);
        return e
    }, $c = function (a) {
        a = a.toLowerCase().replace(/ /g, "");
        var b = document.documentElement;
        b = b.classList ? b.classList : ("string" == typeof b.className ? b.className : b.getAttribute && b.getAttribute("class") || "").match(/\S+/g) || [];
        for (var c = 0; c < b.length && !b[c].search("wf-" + a + "-w+-active"); c++) ;
    }, bd = ["Moz", "ms", "O", "webkit"], cd = function (a, b, c) {
        if (a) {
            for (var e = n(bd), f = e.next(); !f.done; f = e.next()) a.style[f.value + b] = c;
            a.style[b.charAt(0).toLowerCase() + b.substr(1)] = c
        }
    }, dd = ["", "moz", "ms", "o", "webkit"], ed = function (a, b) {
        if (!a) return null;
        for (var c = n(dd), e = c.next(); !e.done; e = c.next()) {
            e = e.value;
            var f = b;
            0 < e.length && (f = b.charAt(0).toUpperCase() + b.substr(1));
            e += f;
            if ("undefined" != typeof a[e]) return e
        }
        return null
    }, fd = function (a, b) {
        var c;
        return (c = window.google && void 0 !== window.google.doodle ? window.google.doodle : null) && void 0 != c[a] ? c[a] : b
    }, gd = function () {
        var a = fd("doodle_args", {}).is_dogfood;
        return null != a ? a : !1
    }, hd = fd("alt", ""), id = fd("hl", "en"), jd = fd("gl", ""), ld = function (a, b, c) {
        var e = Math.max(0, c - 230) + (document.querySelector("div.og-pdp") ? 36 : 12);
        A(a, "width", b + "px", "height", c + "px");
        kd(e)
    }, kd = function (a) {
        a +=
            "px";
        var b = document.getElementById("lga");
        b && A(b, "marginBottom", a);
        Wc() || ((b = document.getElementById("searchform")) && A(b, "transform", "translateY(" + a + ")"), a = document.createEvent("UIEvents"), a.initUIEvent("resize", !1, !1, window, 0), window.dispatchEvent(a))
    }, md = null, nd = null, od = null, pd = function () {
        od || (window.google && window.google.kEI && window.google.kEI.length ? od = window.google.kEI : Yc() && Ic(Jc.g, "ei") && (od = Jc.g.get("ei")));
        return od
    }, qd = function () {
        if (!md) {
            var a = document.getElementById("hplogoved");
            a ? md = a.getAttribute("data-ved") :
                Yc() && Ic(Jc.g, "ved") && (md = Jc.g.get("ved"))
        }
        return md
    };
    var rd = function (a, b) {
        this.g = [];
        this.i = [];
        b = n(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            var e = c.value;
            c = new Za(a + e.filename);
            e = e.size;
            this.g.push(c);
            this.i.push(e)
        }
    }, sd = function (a) {
        return "number" === typeof a ? a : a[0]
    };
    rd.prototype.preload = function (a, b) {
        var c = this.g[sd(a)];
        return (new Promise(function (e) {
            Ya(c, e);
            c.preload()
        })).then(function () {
            return b && b()
        })
    };
    var ud = function (a) {
        var b = td;
        return Promise.all(a.map(function (c) {
            return b.preload(c)
        })).then(function () {
        })
    };
    d = rd.prototype;
    d.unload = function (a) {
        this.g[sd(a)].unload()
    };
    d.Qc = function () {
        return this.g[sd(void 0)].Qc()
    };
    d.Wb = function (a) {
        return this.g[sd(a)].g
    };
    d.Hb = function (a) {
        return a[3]
    };
    d.Fb = function (a) {
        return a[4]
    };
    d.getSize = function (a) {
        return {width: a[3], height: a[4]}
    };
    d.Va = function (a) {
        return a[5] || 1
    };
    d.drawImage = function (a, b, c, e, f, g, h, k, l, m) {
        var q = b[1], w = b[2], B = b[3], G = b[4];
        if (void 0 == f) {
            var ca = q;
            var da = w;
            var Ta = B;
            var Ua = G;
            f = B;
            g = G
        } else void 0 == h ? (ca = q, da = w, Ta = B, Ua = G) : (ca = q + c, da = w + e, Ta = f, Ua = g, c = h, e = k, f = l, g = m);
        ca < q && (m = q - ca, ca = q, Ta -= m, c += m, f -= m);
        da < w && (m = w - da, da = w, Ua -= m, e += m, g -= m);
        ca + Ta > q + B && (q = ca + Ta - (q + B), Ta -= q, f -= q);
        da + Ua > w + G && (w = da + Ua - (w + G), Ua -= w, g -= w);
        b = this.g[sd(b)];
        if (!b.Qc()) throw Error("i");
        0 < Ta && 0 < Ua && a.drawImage(b.g, ca, da, Ta, Ua, c, e, f, g)
    };
    var wd = function (a, b, c, e, f) {
        f = void 0 === f ? 1 : f;
        c = void 0 === c ? 0 : c;
        e = void 0 === e ? 0 : e;
        var g = f;
        g = void 0 === g ? 1 : g;
        var h = a.Va(b);
        return "url(" + a.g[sd(b)].Tb + ") " + (-(g * b[1] / h + (void 0 === c ? 0 : c)) + "px " + -(g * b[2] / h + (void 0 === e ? 0 : e)) + "px/") + vd(a, b, f) + " no-repeat"
    }, xd = function (a, b, c) {
        return wd(a, b, 0, 0, c / Math.max(a.Hb(b), a.Fb(b)))
    }, vd = function (a, b, c) {
        c = void 0 === c ? 1 : c;
        var e = a.Va(b);
        a = a.i[sd(b)];
        return c * a[0] / e + "px " + c * a[1] / e + "px"
    }, zd = function () {
        var a = yd.Fa(), b = C.cB, c = document.createElement("div");
        A(c, "position", "absolute");
        Sc && !Tc && A(c, "background-color", "rgba(255,255,255,.01)");
        A(c, "userSelect", "none", "MozUserSelect", "none", "webkitUserSelect", "none", "webkitTapHighlightColor", "rgba(0,0,0,0)");
        c.unselectable = "on";
        var e = a.Hb(b), f = a.Fb(b), g = a.Va(b);
        g && 1 != g && a.i[sd(b)] && (e = Math.floor(e / g), f = Math.floor(f / g));
        A(c, "width", e + "px", "height", f + "px");
        a = [c, wd(a, b), vd(a, b)];
        b = a[0];
        c = a[2];
        A(b, "background", a[1]);
        c && A(b, "backgroundSize", c);
        return b
    };
    var yd = function () {
        rd.call(this, "img/earth-day-2020/", Ad)
    };
    p(yd, rd);
    var Ad = [{filename: "fla-sprite.png", size: [1023, 1984]}, {
            filename: "flb-sprite.png",
            size: [1023, 1318]
        }, {filename: "bee-sprite.png", size: [998, 809]}, {
            filename: "dance-one-sprite.png",
            size: [998, 1215]
        }, {filename: "dance-two-sprite.png", size: [998, 1418]}, {
            filename: "dance-three-sprite.png",
            size: [998, 1215]
        }, {filename: "terrain-sprite.png", size: [1149, 951]}, {
            filename: "share-bee-sprite.png",
            size: [1180, 892]
        }, {filename: "initial-sprite.png", size: [942, 121]}, {filename: "intro-sprite.png", size: [1878, 2003]}, {
            filename: "intro-tutorial-sprite.png",
            size: [418, 176]
        }, {filename: "share-sprite.png", size: [903, 152]}, {
            filename: "dandelion-base-sprite.png",
            size: [1002, 689]
        }, {
            filename: "dandelion-large-rotate-one-sprite.png",
            size: [873, 603]
        }, {filename: "dandelion-large-rotate-two-sprite.png", size: [873, 906]}], C = {
            Me: [8, 622, 0, 80, 72],
            Ne: [8, 705, 0, 80, 72],
            Oe: [8, 788, 0, 80, 72],
            Pe: [8, 705, 0, 80, 72],
            Qe: [2, 0, 0, 140, 200],
            Re: [2, 143, 0, 140, 200],
            Se: [2, 286, 0, 140, 200],
            Te: [2, 143, 0, 140, 200],
            Ue: [2, 429, 0, 140, 200],
            Ve: [2, 572, 0, 140, 200],
            We: [2, 715, 0, 140, 200],
            Xe: [2, 858, 0, 140, 200],
            Ye: [2, 0,
                203, 140, 200],
            Ze: [2, 143, 203, 140, 200],
            $e: [2, 286, 203, 140, 200],
            df: [2, 429, 203, 140, 200],
            ef: [2, 572, 203, 140, 200],
            Vc: [2, 715, 203, 140, 200],
            Wc: [2, 858, 203, 140, 200],
            Xc: [2, 0, 406, 140, 200],
            Yc: [2, 143, 406, 140, 200],
            Zc: [2, 286, 406, 140, 200],
            ff: [2, 429, 406, 140, 200],
            $c: [2, 572, 406, 140, 200],
            hd: [2, 715, 406, 140, 200],
            jd: [2, 858, 406, 140, 200],
            kd: [2, 0, 609, 140, 200],
            hf: [2, 143, 609, 140, 200],
            jf: [2, 286, 609, 140, 200],
            kf: [2, 429, 609, 140, 200],
            lf: [2, 286, 609, 140, 200],
            $B: [11, 775, 0, 128, 128],
            mf: [11, 642, 0, 130, 133],
            nf: [11, 0, 0, 498, 152],
            qf: [10, 331, 0, 87,
                137],
            rf: [3, 0, 0, 140, 200],
            sf: [3, 143, 0, 140, 200],
            tf: [3, 286, 0, 140, 200],
            uf: [3, 429, 0, 140, 200],
            vf: [3, 572, 0, 140, 200],
            xf: [3, 715, 0, 140, 200],
            yf: [3, 858, 0, 140, 200],
            zf: [3, 0, 203, 140, 200],
            Af: [3, 143, 203, 140, 200],
            Bf: [3, 286, 203, 140, 200],
            Cf: [3, 429, 203, 140, 200],
            Df: [3, 572, 203, 140, 200],
            Ef: [3, 715, 203, 140, 200],
            Ff: [3, 858, 203, 140, 200],
            Gf: [3, 0, 406, 140, 200],
            Hf: [3, 143, 406, 140, 200],
            If: [3, 286, 406, 140, 200],
            Jf: [3, 429, 406, 140, 200],
            Kf: [3, 572, 406, 140, 200],
            Lf: [3, 715, 406, 140, 200],
            Mf: [3, 858, 406, 140, 200],
            Nf: [3, 0, 609, 140, 200],
            Of: [3, 143, 609,
                140, 200],
            Pf: [3, 286, 609, 140, 200],
            Qf: [3, 429, 609, 140, 200],
            Rf: [3, 572, 609, 140, 200],
            Sf: [3, 715, 609, 140, 200],
            Tf: [3, 858, 609, 140, 200],
            Uf: [3, 0, 812, 140, 200],
            Vf: [3, 143, 812, 140, 200],
            Wf: [3, 286, 812, 140, 200],
            Xf: [3, 429, 812, 140, 200],
            Yf: [3, 572, 812, 140, 200],
            Zf: [3, 715, 812, 140, 200],
            $f: [3, 858, 812, 140, 200],
            dg: [3, 0, 1015, 140, 200],
            fg: [3, 143, 1015, 140, 200],
            hg: [3, 286, 1015, 140, 200],
            ig: [3, 429, 1015, 140, 200],
            jg: [3, 572, 1015, 140, 200],
            lg: [3, 715, 1015, 140, 200],
            og: [3, 858, 1015, 140, 200],
            qg: [4, 0, 0, 140, 200],
            rg: [4, 143, 0, 140, 200],
            vg: [4, 286, 0,
                140, 200],
            wg: [4, 429, 0, 140, 200],
            xg: [4, 572, 0, 140, 200],
            yg: [4, 715, 0, 140, 200],
            zg: [4, 858, 0, 140, 200],
            Ag: [4, 0, 203, 140, 200],
            Bg: [4, 143, 203, 140, 200],
            Cg: [4, 286, 203, 140, 200],
            Dg: [4, 429, 203, 140, 200],
            Eg: [4, 572, 203, 140, 200],
            Fg: [4, 715, 203, 140, 200],
            Gg: [4, 858, 203, 140, 200],
            Hg: [4, 0, 406, 140, 200],
            Ig: [4, 143, 406, 140, 200],
            Jg: [4, 286, 406, 140, 200],
            Kg: [4, 429, 406, 140, 200],
            Lg: [4, 572, 406, 140, 200],
            Mg: [4, 715, 406, 140, 200],
            Ng: [4, 858, 406, 140, 200],
            Og: [4, 0, 609, 140, 200],
            Pg: [4, 143, 609, 140, 200],
            Qg: [4, 286, 609, 140, 200],
            Rg: [4, 429, 609, 140, 200],
            Sg: [4, 572, 609, 140, 200],
            Tg: [4, 715, 609, 140, 200],
            Ug: [4, 858, 609, 140, 200],
            Vg: [4, 0, 812, 140, 200],
            Wg: [4, 143, 812, 140, 200],
            Xg: [4, 286, 812, 140, 200],
            Yg: [4, 429, 812, 140, 200],
            Zg: [4, 572, 812, 140, 200],
            $g: [4, 715, 812, 140, 200],
            ah: [4, 858, 812, 140, 200],
            dh: [4, 0, 1015, 140, 200],
            eh: [4, 143, 1015, 140, 200],
            fh: [4, 286, 1015, 140, 200],
            hh: [4, 429, 1015, 140, 200],
            ih: [4, 572, 1015, 140, 200],
            jh: [4, 715, 1015, 140, 200],
            lh: [4, 858, 1015, 140, 200],
            mh: [4, 0, 1218, 140, 200],
            nh: [4, 143, 1218, 140, 200],
            oh: [4, 286, 1218, 140, 200],
            qh: [4, 429, 1218, 140, 200],
            rh: [4, 572, 1218,
                140, 200],
            sh: [4, 715, 1218, 140, 200],
            uh: [4, 858, 1218, 140, 200],
            wh: [5, 0, 0, 140, 200],
            xh: [5, 143, 0, 140, 200],
            yh: [5, 286, 0, 140, 200],
            zh: [5, 429, 0, 140, 200],
            Ah: [5, 572, 0, 140, 200],
            Bh: [5, 715, 0, 140, 200],
            Ch: [5, 858, 0, 140, 200],
            Dh: [5, 0, 203, 140, 200],
            Eh: [5, 143, 203, 140, 200],
            Fh: [5, 286, 203, 140, 200],
            Gh: [5, 429, 203, 140, 200],
            Hh: [5, 572, 203, 140, 200],
            Ih: [5, 715, 203, 140, 200],
            Jh: [5, 858, 203, 140, 200],
            Kh: [5, 0, 406, 140, 200],
            Lh: [5, 143, 406, 140, 200],
            Mh: [5, 286, 406, 140, 200],
            Nh: [5, 429, 406, 140, 200],
            Oh: [5, 572, 406, 140, 200],
            Ph: [5, 715, 406, 140, 200],
            Qh: [5,
                858, 406, 140, 200],
            Rh: [5, 0, 609, 140, 200],
            Sh: [5, 143, 609, 140, 200],
            Th: [5, 286, 609, 140, 200],
            Uh: [5, 429, 609, 140, 200],
            Vh: [5, 572, 609, 140, 200],
            Wh: [5, 715, 609, 140, 200],
            Xh: [5, 858, 609, 140, 200],
            Yh: [5, 0, 812, 140, 200],
            Zh: [5, 143, 812, 140, 200],
            $h: [5, 286, 812, 140, 200],
            ei: [5, 429, 812, 140, 200],
            hi: [5, 572, 812, 140, 200],
            ii: [5, 715, 812, 140, 200],
            ji: [5, 858, 812, 140, 200],
            li: [5, 0, 1015, 140, 200],
            mi: [5, 143, 1015, 140, 200],
            oi: [5, 286, 1015, 140, 200],
            ri: [5, 429, 1015, 140, 200],
            ti: [5, 572, 1015, 140, 200],
            ui: [5, 715, 1015, 140, 200],
            wi: [5, 858, 1015, 140, 200],
            xi: [12, 0, 0, 259, 260],
            yi: [12, 456, 304, 123, 120],
            zi: [12, 262, 0, 259, 260],
            Ai: [6, 235, 485, 92, 88],
            Bi: [6, 320, 759, 77, 90],
            Ci: [6, 792, 659, 82, 89],
            Di: [6, 441, 241, 92, 96],
            Ei: [6, 165, 760, 76, 94],
            Fi: [6, 330, 575, 88, 92],
            Gi: [6, 771, 838, 70, 96],
            Hi: [6, 320, 670, 82, 86],
            Ii: [6, 613, 587, 87, 92],
            Ji: [6, 946, 843, 68, 92],
            Ki: [6, 937, 525, 91, 91],
            Li: [6, 244, 760, 71, 94],
            Mi: [6, 1031, 569, 89, 86],
            Ni: [6, 0, 474, 93, 85],
            Oi: [6, 235, 576, 88, 91],
            Pi: [6, 692, 766, 76, 87],
            Qi: [6, 0, 562, 91, 87],
            Ri: [6, 441, 340, 83, 78],
            Si: [6, 1043, 750, 79, 80],
            Ti: [6, 229, 857, 61, 78],
            Ui: [6, 703, 677, 82,
                86],
            Vi: [6, 1025, 658, 84, 89],
            Wi: [6, 869, 803, 74, 92],
            Xi: [6, 603, 771, 76, 86],
            Yi: [10, 0, 0, 176, 176],
            Bd: [6, 682, 856, 66, 43],
            Cd: [6, 330, 485, 92, 87],
            Dd: [6, 937, 446, 97, 76],
            Dc: [6, 831, 342, 106, 50],
            Ec: [6, 83, 748, 79, 112],
            Ed: [6, 1103, 220, 46, 114],
            Fc: [6, 519, 640, 85, 86],
            Fd: [6, 441, 429, 121, 83],
            Gd: [6, 607, 682, 82, 86],
            Gc: [6, 138, 379, 131, 84],
            Hc: [6, 138, 264, 135, 112],
            Ic: [6, 565, 429, 118, 114],
            Hd: [6, 555, 860, 58, 68],
            Id: [6, 1037, 446, 96, 120],
            Jd: [6, 400, 788, 75, 86],
            Kd: [6, 697, 245, 143, 94],
            Ld: [8, 126, 0, 122, 121],
            xk: [0, 0, 0, 122, 121],
            yk: [0, 354, 1054, 66, 66],
            zk: [0,
                423, 1054, 66, 66],
            Ak: [0, 492, 1054, 66, 66],
            Bk: [0, 561, 1054, 66, 66],
            Ck: [0, 630, 1054, 66, 66],
            Dk: [0, 699, 1054, 66, 66],
            Ek: [0, 140, 1096, 66, 66],
            Fk: [0, 209, 1096, 66, 66],
            Gk: [0, 0, 1098, 66, 66],
            Hk: [0, 69, 1098, 66, 66],
            Ik: [0, 768, 1120, 66, 66],
            Jk: [0, 837, 1120, 66, 66],
            Kk: [0, 906, 1120, 66, 66],
            Lk: [0, 354, 1123, 66, 66],
            Mk: [0, 423, 1123, 66, 66],
            Nk: [0, 492, 1123, 66, 66],
            Ok: [0, 561, 1123, 66, 66],
            Pk: [0, 630, 1123, 66, 66],
            Qk: [0, 699, 1123, 66, 66],
            Rk: [0, 278, 1124, 66, 66],
            Sk: [0, 138, 1165, 66, 66],
            Tk: [0, 207, 1165, 66, 66],
            Uk: [0, 0, 1167, 66, 66],
            Vk: [0, 69, 1167, 66, 66],
            Wk: [0, 768,
                1189, 66, 66],
            Xk: [0, 371, 0, 77, 73],
            Yk: [0, 451, 0, 77, 73],
            Zk: [0, 531, 0, 77, 73],
            $k: [0, 611, 0, 77, 73],
            bl: [0, 691, 0, 77, 73],
            dl: [0, 771, 0, 77, 73],
            fl: [0, 851, 0, 77, 73],
            jl: [0, 931, 0, 77, 73],
            kl: [0, 371, 76, 77, 73],
            ll: [0, 451, 76, 77, 73],
            ol: [0, 531, 76, 77, 73],
            ql: [0, 611, 76, 77, 73],
            rl: [0, 691, 76, 77, 73],
            ul: [0, 771, 76, 77, 73],
            vl: [0, 851, 76, 77, 73],
            wl: [0, 931, 76, 77, 73],
            xl: [0, 250, 122, 77, 73],
            yl: [0, 0, 124, 77, 73],
            zl: [0, 80, 124, 77, 73],
            Al: [0, 160, 124, 77, 73],
            Bl: [0, 330, 152, 77, 73],
            Cl: [0, 410, 152, 77, 73],
            Dl: [0, 490, 152, 77, 73],
            El: [0, 570, 152, 77, 73],
            Fl: [0, 650, 152,
                77, 73],
            Gl: [0, 730, 152, 77, 73],
            Hl: [0, 810, 152, 77, 73],
            Il: [0, 890, 152, 77, 73],
            Jl: [0, 240, 198, 77, 73],
            Kl: [0, 0, 200, 77, 73],
            Ll: [0, 80, 200, 77, 73],
            Ml: [0, 160, 200, 77, 73],
            Nl: [0, 320, 228, 77, 73],
            Ol: [0, 400, 228, 77, 73],
            Pl: [0, 480, 228, 77, 73],
            Ql: [0, 560, 228, 77, 73],
            Rl: [0, 640, 228, 77, 73],
            Sl: [0, 720, 228, 77, 73],
            Tl: [0, 800, 228, 77, 73],
            Ul: [0, 880, 228, 77, 73],
            Vl: [0, 240, 274, 77, 73],
            Wl: [0, 0, 276, 77, 73],
            Xl: [0, 80, 276, 77, 73],
            Yl: [0, 160, 276, 77, 73],
            Zl: [0, 320, 304, 77, 73],
            $l: [0, 880, 836, 69, 69],
            bm: [0, 952, 836, 69, 69],
            em: [0, 240, 882, 69, 69],
            fm: [0, 0, 884, 69, 69],
            hm: [0, 72, 884, 69, 69],
            km: [0, 144, 884, 69, 69],
            nm: [0, 880, 908, 69, 69],
            rm: [0, 952, 908, 69, 69],
            um: [0, 312, 912, 69, 69],
            vm: [0, 384, 912, 69, 69],
            wm: [0, 456, 912, 69, 69],
            xm: [0, 528, 912, 69, 69],
            ym: [0, 600, 912, 69, 69],
            Am: [0, 672, 912, 69, 69],
            Bm: [0, 744, 912, 69, 69],
            Cm: [0, 216, 954, 69, 69],
            Dm: [0, 0, 956, 69, 69],
            Em: [0, 72, 956, 69, 69],
            Fm: [0, 816, 912, 54, 56],
            Gm: [0, 968, 1258, 54, 56],
            Hm: [0, 968, 1317, 54, 56],
            Im: [0, 966, 1376, 54, 56],
            Jm: [0, 471, 1468, 54, 56],
            Km: [0, 528, 1468, 54, 56],
            Lm: [0, 585, 1468, 54, 56],
            Mm: [0, 642, 1468, 54, 56],
            Nm: [0, 699, 1468, 54, 56],
            Om: [0, 268, 1474,
                54, 56],
            Pm: [0, 130, 1515, 54, 56],
            Qm: [0, 187, 1515, 54, 56],
            Rm: [0, 0, 1517, 54, 56],
            Sm: [0, 57, 1517, 54, 56],
            Tm: [0, 471, 1527, 54, 56],
            Um: [0, 528, 1527, 54, 56],
            Vm: [0, 585, 1527, 54, 56],
            Wm: [0, 642, 1527, 54, 56],
            Xm: [0, 699, 1527, 54, 56],
            Ym: [0, 244, 1533, 54, 56],
            Zm: [0, 756, 1539, 54, 56],
            $m: [0, 813, 1539, 54, 56],
            an: [0, 870, 1539, 54, 56],
            en: [0, 927, 1539, 54, 56],
            fn: [0, 301, 1542, 54, 56],
            jn: [0, 358, 1542, 54, 56],
            ln: [0, 114, 1574, 54, 56],
            nn: [0, 171, 1574, 54, 56],
            qn: [0, 0, 1576, 54, 56],
            rn: [0, 57, 1576, 54, 56],
            un: [0, 415, 1586, 54, 56],
            wn: [0, 472, 1586, 54, 56],
            xn: [0, 529, 1586, 54,
                56],
            yn: [0, 586, 1586, 54, 56],
            zn: [0, 643, 1586, 54, 56],
            An: [0, 228, 1592, 54, 56],
            Bn: [0, 700, 1598, 54, 56],
            Cn: [0, 757, 1598, 54, 56],
            Dn: [0, 814, 1598, 54, 56],
            En: [0, 871, 1598, 54, 56],
            Fn: [0, 928, 1598, 54, 56],
            Gn: [0, 285, 1601, 54, 56],
            Hn: [0, 342, 1601, 54, 56],
            In: [0, 114, 1633, 54, 56],
            Jn: [0, 171, 1633, 54, 56],
            Md: [8, 501, 0, 118, 119],
            Kn: [0, 250, 0, 118, 119],
            Ln: [0, 837, 1189, 66, 66],
            Mn: [0, 906, 1189, 66, 66],
            Nn: [0, 347, 1192, 66, 66],
            On: [0, 416, 1192, 66, 66],
            Pn: [0, 485, 1192, 66, 66],
            Qn: [0, 554, 1192, 66, 66],
            Rn: [0, 623, 1192, 66, 66],
            Sn: [0, 692, 1192, 66, 66],
            Tn: [0, 276, 1193,
                66, 66],
            Un: [0, 138, 1234, 66, 66],
            Vn: [0, 207, 1234, 66, 66],
            Wn: [0, 0, 1236, 66, 66],
            Xn: [0, 69, 1236, 66, 66],
            Yn: [0, 761, 1258, 66, 66],
            Zn: [0, 830, 1258, 66, 66],
            $n: [0, 899, 1258, 66, 66],
            eo: [0, 345, 1261, 66, 66],
            fo: [0, 414, 1261, 66, 66],
            ho: [0, 483, 1261, 66, 66],
            io: [0, 552, 1261, 66, 66],
            ko: [0, 621, 1261, 66, 66],
            lo: [0, 690, 1261, 66, 66],
            oo: [0, 276, 1262, 66, 66],
            qo: [0, 138, 1303, 66, 66],
            uo: [0, 207, 1303, 66, 66],
            vo: [0, 400, 304, 77, 73],
            wo: [0, 480, 304, 77, 73],
            xo: [0, 560, 304, 77, 73],
            yo: [0, 640, 304, 77, 73],
            zo: [0, 720, 304, 77, 73],
            Ao: [0, 800, 304, 77, 73],
            Bo: [0, 880, 304, 77, 73],
            Co: [0, 240, 350, 77, 73],
            Do: [0, 0, 352, 77, 73],
            Eo: [0, 80, 352, 77, 73],
            Fo: [0, 160, 352, 77, 73],
            Go: [0, 320, 380, 77, 73],
            Ho: [0, 400, 380, 77, 73],
            Io: [0, 480, 380, 77, 73],
            Jo: [0, 560, 380, 77, 73],
            Ko: [0, 640, 380, 77, 73],
            Lo: [0, 720, 380, 77, 73],
            Mo: [0, 800, 380, 77, 73],
            No: [0, 880, 380, 77, 73],
            Oo: [0, 240, 426, 77, 73],
            Po: [0, 0, 428, 77, 73],
            Qo: [0, 80, 428, 77, 73],
            Ro: [0, 160, 428, 77, 73],
            So: [0, 320, 456, 77, 73],
            To: [0, 400, 456, 77, 73],
            Uo: [0, 480, 456, 77, 73],
            Vo: [0, 560, 456, 77, 73],
            Wo: [0, 640, 456, 77, 73],
            Xo: [0, 720, 456, 77, 73],
            Yo: [0, 800, 456, 77, 73],
            Zo: [0, 880, 456, 77, 73],
            $o: [0,
                240, 502, 77, 73],
            ap: [0, 0, 504, 77, 73],
            bp: [0, 80, 504, 77, 73],
            ep: [0, 160, 504, 77, 73],
            fp: [0, 320, 532, 77, 73],
            gp: [0, 400, 532, 77, 73],
            hp: [0, 480, 532, 77, 73],
            ip: [0, 560, 532, 77, 73],
            kp: [0, 640, 532, 77, 73],
            lp: [0, 720, 532, 77, 73],
            mp: [0, 800, 532, 77, 73],
            qp: [0, 880, 532, 77, 73],
            rp: [0, 240, 578, 77, 73],
            vp: [0, 0, 580, 77, 73],
            wp: [0, 144, 956, 67, 67],
            xp: [0, 816, 980, 67, 67],
            yp: [0, 886, 980, 67, 67],
            zp: [0, 956, 980, 67, 67],
            Ap: [0, 288, 984, 67, 67],
            Bp: [0, 358, 984, 67, 67],
            Cp: [0, 428, 984, 67, 67],
            Dp: [0, 498, 984, 67, 67],
            Ep: [0, 568, 984, 67, 67],
            Fp: [0, 638, 984, 67, 67],
            Gp: [0, 708,
                984, 67, 67],
            Hp: [0, 144, 1026, 67, 67],
            Ip: [0, 214, 1026, 67, 67],
            Jp: [0, 0, 1028, 67, 67],
            Kp: [0, 70, 1028, 67, 67],
            Lp: [0, 778, 1050, 67, 67],
            Mp: [0, 848, 1050, 67, 67],
            Np: [0, 918, 1050, 67, 67],
            Op: [0, 284, 1054, 67, 67],
            Pp: [0, 0, 1635, 54, 56],
            Qp: [0, 57, 1635, 54, 56],
            Rp: [0, 399, 1645, 54, 56],
            Sp: [0, 456, 1645, 54, 56],
            Tp: [0, 513, 1645, 54, 56],
            Up: [0, 570, 1645, 54, 56],
            Vp: [0, 627, 1645, 54, 56],
            Wp: [0, 228, 1651, 54, 56],
            Xp: [0, 684, 1657, 54, 56],
            Yp: [0, 741, 1657, 54, 56],
            Zp: [0, 798, 1657, 54, 56],
            $p: [0, 855, 1657, 54, 56],
            aq: [0, 912, 1657, 54, 56],
            bq: [0, 969, 1657, 54, 56],
            cq: [0, 285, 1660,
                54, 56],
            eq: [0, 342, 1660, 54, 56],
            fq: [0, 114, 1692, 54, 56],
            gq: [0, 171, 1692, 54, 56],
            hq: [0, 0, 1694, 54, 56],
            jq: [0, 57, 1694, 54, 56],
            kq: [0, 399, 1704, 54, 56],
            mq: [0, 456, 1704, 54, 56],
            nq: [0, 513, 1704, 54, 56],
            oq: [0, 570, 1704, 54, 56],
            pq: [0, 627, 1704, 54, 56],
            qq: [0, 228, 1710, 54, 56],
            rq: [0, 684, 1716, 54, 56],
            sq: [0, 741, 1716, 54, 56],
            tq: [0, 798, 1716, 54, 56],
            uq: [0, 855, 1716, 54, 56],
            wq: [0, 912, 1716, 54, 56],
            xq: [0, 969, 1716, 54, 56],
            yq: [0, 285, 1719, 54, 56],
            zq: [0, 342, 1719, 54, 56],
            Aq: [0, 114, 1751, 54, 56],
            Bq: [0, 171, 1751, 54, 56],
            Cq: [0, 0, 1753, 54, 56],
            Dq: [0, 57, 1753, 54,
                56],
            Eq: [0, 399, 1763, 54, 56],
            Fq: [0, 456, 1763, 54, 56],
            Gq: [0, 513, 1763, 54, 56],
            Hq: [0, 570, 1763, 54, 56],
            Iq: [0, 627, 1763, 54, 56],
            Jq: [0, 228, 1769, 54, 56],
            Kq: [0, 684, 1775, 54, 56],
            Nd: [8, 251, 0, 122, 121],
            Lq: [0, 125, 0, 122, 121],
            Mq: [0, 0, 1305, 66, 66],
            Nq: [0, 69, 1305, 66, 66],
            Oq: [0, 759, 1327, 66, 66],
            Pq: [0, 828, 1327, 66, 66],
            Qq: [0, 897, 1327, 66, 66],
            Rq: [0, 345, 1330, 66, 66],
            Sq: [0, 414, 1330, 66, 66],
            Tq: [0, 483, 1330, 66, 66],
            Uq: [0, 552, 1330, 66, 66],
            Vq: [0, 621, 1330, 66, 66],
            Wq: [0, 690, 1330, 66, 66],
            Xq: [0, 276, 1331, 66, 66],
            Yq: [0, 138, 1372, 66, 66],
            Zq: [0, 207, 1372, 66,
                66],
            $q: [0, 0, 1374, 66, 66],
            dr: [0, 69, 1374, 66, 66],
            er: [0, 759, 1396, 66, 66],
            ir: [0, 828, 1396, 66, 66],
            jr: [0, 897, 1396, 66, 66],
            lr: [0, 345, 1399, 66, 66],
            mr: [0, 414, 1399, 66, 66],
            qr: [0, 483, 1399, 66, 66],
            rr: [0, 552, 1399, 66, 66],
            ur: [0, 621, 1399, 66, 66],
            vr: [0, 690, 1399, 66, 66],
            wr: [0, 80, 580, 77, 73],
            xr: [0, 160, 580, 77, 73],
            yr: [0, 320, 608, 77, 73],
            zr: [0, 400, 608, 77, 73],
            Ar: [0, 480, 608, 77, 73],
            Br: [0, 560, 608, 77, 73],
            Cr: [0, 640, 608, 77, 73],
            Dr: [0, 720, 608, 77, 73],
            Er: [0, 800, 608, 77, 73],
            Fr: [0, 880, 608, 77, 73],
            Gr: [0, 240, 654, 77, 73],
            Hr: [0, 0, 656, 77, 73],
            Ir: [0, 80,
                656, 77, 73],
            Jr: [0, 160, 656, 77, 73],
            Kr: [0, 320, 684, 77, 73],
            Lr: [0, 400, 684, 77, 73],
            Mr: [0, 480, 684, 77, 73],
            Nr: [0, 560, 684, 77, 73],
            Or: [0, 640, 684, 77, 73],
            Pr: [0, 720, 684, 77, 73],
            Qr: [0, 800, 684, 77, 73],
            Rr: [0, 880, 684, 77, 73],
            Sr: [0, 240, 730, 77, 73],
            Tr: [0, 0, 732, 77, 73],
            Ur: [0, 80, 732, 77, 73],
            Vr: [0, 160, 732, 77, 73],
            Wr: [0, 320, 760, 77, 73],
            Xr: [0, 400, 760, 77, 73],
            Yr: [0, 480, 760, 77, 73],
            Zr: [0, 560, 760, 77, 73],
            $r: [0, 640, 760, 77, 73],
            cs: [0, 720, 760, 77, 73],
            ds: [0, 800, 760, 77, 73],
            js: [0, 880, 760, 77, 73],
            ks: [0, 240, 806, 77, 73],
            ms: [0, 0, 808, 77, 73],
            ns: [0, 80, 808,
                77, 73],
            os: [0, 160, 808, 77, 73],
            vs: [0, 320, 836, 77, 73],
            xs: [0, 400, 836, 77, 73],
            ys: [0, 480, 836, 77, 73],
            zs: [0, 560, 836, 77, 73],
            As: [0, 640, 836, 77, 73],
            Bs: [0, 720, 836, 77, 73],
            Cs: [0, 800, 836, 77, 73],
            Ds: [0, 960, 228, 62, 71],
            Es: [0, 960, 302, 62, 71],
            Fs: [0, 960, 376, 62, 71],
            Gs: [0, 960, 450, 62, 71],
            Hs: [0, 960, 524, 62, 71],
            Is: [0, 960, 598, 62, 71],
            Js: [0, 960, 672, 62, 71],
            Ks: [0, 960, 746, 62, 71],
            Ls: [0, 276, 1400, 62, 71],
            Ms: [0, 138, 1441, 62, 71],
            Ns: [0, 203, 1441, 62, 71],
            Os: [0, 0, 1443, 62, 71],
            Ps: [0, 65, 1443, 62, 71],
            Qs: [0, 759, 1465, 62, 71],
            Rs: [0, 824, 1465, 62, 71],
            Ss: [0, 889,
                1465, 62, 71],
            Ts: [0, 954, 1465, 62, 71],
            Us: [0, 341, 1468, 62, 71],
            Vs: [0, 406, 1468, 62, 71],
            Ws: [0, 741, 1775, 54, 56],
            Xs: [0, 798, 1775, 54, 56],
            Ys: [0, 855, 1775, 54, 56],
            Zs: [0, 912, 1775, 54, 56],
            $s: [0, 969, 1775, 54, 56],
            ct: [0, 285, 1778, 54, 56],
            ft: [0, 342, 1778, 54, 56],
            jt: [0, 114, 1810, 54, 56],
            kt: [0, 171, 1810, 54, 56],
            nt: [0, 0, 1812, 54, 56],
            ot: [0, 57, 1812, 54, 56],
            qt: [0, 399, 1822, 54, 56],
            rt: [0, 456, 1822, 54, 56],
            ut: [0, 513, 1822, 54, 56],
            vt: [0, 570, 1822, 54, 56],
            wt: [0, 627, 1822, 54, 56],
            xt: [0, 228, 1828, 54, 56],
            yt: [0, 684, 1834, 54, 56],
            zt: [0, 741, 1834, 54, 56],
            At: [0, 798,
                1834, 54, 56],
            Bt: [0, 855, 1834, 54, 56],
            Ct: [0, 912, 1834, 54, 56],
            Dt: [0, 969, 1834, 54, 56],
            Et: [0, 285, 1837, 54, 56],
            Ft: [0, 342, 1837, 54, 56],
            Gt: [0, 114, 1869, 54, 56],
            Ht: [0, 171, 1869, 54, 56],
            It: [0, 0, 1871, 54, 56],
            Jt: [0, 57, 1871, 54, 56],
            Kt: [0, 399, 1881, 54, 56],
            Lt: [0, 456, 1881, 54, 56],
            Mt: [0, 513, 1881, 54, 56],
            Nt: [0, 570, 1881, 54, 56],
            Ot: [0, 627, 1881, 54, 56],
            Pt: [0, 228, 1887, 54, 56],
            Qt: [0, 684, 1893, 54, 56],
            Rt: [0, 741, 1893, 54, 56],
            St: [0, 798, 1893, 54, 56],
            Tt: [0, 855, 1893, 54, 56],
            Ut: [0, 912, 1893, 54, 56],
            Vt: [0, 969, 1893, 54, 56],
            Wt: [0, 285, 1896, 54, 56],
            Xt: [0, 342,
                1896, 54, 56],
            Yt: [0, 114, 1928, 54, 56],
            Zt: [0, 171, 1928, 54, 56],
            Od: [8, 0, 0, 123, 120],
            $t: [1, 0, 0, 123, 120],
            bu: [1, 869, 749, 66, 66],
            du: [1, 938, 749, 66, 66],
            eu: [1, 216, 750, 66, 66],
            fu: [1, 285, 750, 66, 66],
            gu: [1, 0, 791, 66, 66],
            iu: [1, 69, 792, 66, 66],
            ju: [1, 138, 792, 66, 66],
            ku: [1, 869, 818, 66, 66],
            ou: [1, 938, 818, 66, 66],
            pu: [1, 207, 819, 66, 66],
            qu: [1, 276, 819, 66, 66],
            su: [1, 345, 819, 66, 66],
            tu: [1, 414, 819, 66, 66],
            uu: [1, 483, 819, 66, 66],
            wu: [1, 552, 819, 66, 66],
            xu: [1, 621, 819, 66, 66],
            yu: [1, 690, 819, 66, 66],
            zu: [1, 759, 819, 66, 66],
            Au: [1, 0, 860, 66, 66],
            Bu: [1, 69, 861,
                66, 66],
            Cu: [1, 138, 861, 66, 66],
            Du: [1, 828, 887, 66, 66],
            Eu: [1, 897, 887, 66, 66],
            Fu: [1, 207, 888, 66, 66],
            Gu: [1, 276, 888, 66, 66],
            Hu: [1, 0, 579, 70, 68],
            Iu: [1, 73, 580, 70, 68],
            Ju: [1, 146, 580, 70, 68],
            Ku: [1, 219, 608, 70, 68],
            Lu: [1, 292, 608, 70, 68],
            Mu: [1, 365, 608, 70, 68],
            Nu: [1, 438, 608, 70, 68],
            Ou: [1, 511, 608, 70, 68],
            Pu: [1, 584, 608, 70, 68],
            Qu: [1, 657, 608, 70, 68],
            Ru: [1, 730, 608, 70, 68],
            Su: [1, 803, 608, 70, 68],
            Tu: [1, 876, 608, 70, 68],
            Uu: [1, 949, 608, 70, 68],
            Vu: [1, 0, 650, 70, 68],
            Wu: [1, 73, 651, 70, 68],
            Xu: [1, 146, 651, 70, 68],
            Yu: [1, 219, 679, 70, 68],
            Zu: [1, 292, 679, 70,
                68],
            $u: [1, 960, 152, 54, 56],
            av: [1, 960, 211, 54, 56],
            dv: [1, 960, 270, 54, 56],
            ev: [1, 960, 329, 54, 56],
            fv: [1, 960, 388, 54, 56],
            gv: [1, 960, 447, 54, 56],
            hv: [1, 960, 506, 54, 56],
            iv: [1, 966, 887, 54, 56],
            jv: [1, 966, 946, 54, 56],
            kv: [1, 966, 1005, 54, 56],
            nv: [1, 828, 1025, 54, 56],
            ov: [1, 885, 1025, 54, 56],
            pv: [1, 207, 1026, 54, 56],
            qv: [1, 264, 1026, 54, 56],
            rv: [1, 321, 1026, 54, 56],
            tv: [1, 378, 1026, 54, 56],
            uv: [1, 435, 1026, 54, 56],
            vv: [1, 492, 1026, 54, 56],
            wv: [1, 549, 1026, 54, 56],
            xv: [1, 606, 1026, 54, 56],
            yv: [1, 663, 1026, 54, 56],
            zv: [1, 720, 1026, 54, 56],
            Av: [1, 942, 1064, 54, 56],
            Bv: [1, 0, 1067, 54, 56],
            Cv: [1, 57, 1068, 54, 56],
            Dv: [1, 114, 1068, 54, 56],
            Ev: [1, 777, 1084, 54, 56],
            Fv: [1, 834, 1084, 54, 56],
            Gv: [1, 171, 1085, 54, 56],
            Hv: [1, 228, 1085, 54, 56],
            Iv: [1, 285, 1085, 54, 56],
            Jv: [1, 342, 1085, 54, 56],
            Kv: [1, 399, 1085, 54, 56],
            Lv: [1, 456, 1085, 54, 56],
            Mv: [1, 513, 1085, 54, 56],
            Nv: [1, 570, 1085, 54, 56],
            Ov: [1, 627, 1085, 54, 56],
            Pv: [1, 684, 1085, 54, 56],
            Qv: [1, 891, 1123, 54, 56],
            Rv: [1, 948, 1123, 54, 56],
            Sv: [1, 0, 1126, 54, 56],
            Tv: [1, 57, 1127, 54, 56],
            Uv: [1, 114, 1127, 54, 56],
            Vv: [1, 741, 1143, 54, 56],
            Wv: [1, 798, 1143, 54, 56],
            Xv: [1, 251, 0, 77, 73],
            Yv: [1,
                331, 0, 77, 73],
            Zv: [1, 411, 0, 77, 73],
            $v: [1, 491, 0, 77, 73],
            aw: [1, 571, 0, 77, 73],
            cw: [1, 651, 0, 77, 73],
            dw: [1, 731, 0, 77, 73],
            ew: [1, 811, 0, 77, 73],
            fw: [1, 891, 0, 77, 73],
            gw: [1, 251, 76, 77, 73],
            hw: [1, 331, 76, 77, 73],
            iw: [1, 411, 76, 77, 73],
            jw: [1, 491, 76, 77, 73],
            lw: [1, 571, 76, 77, 73],
            nw: [1, 651, 76, 77, 73],
            ow: [1, 731, 76, 77, 73],
            qw: [1, 811, 76, 77, 73],
            uw: [1, 891, 76, 77, 73],
            ww: [1, 0, 123, 77, 73],
            xw: [1, 80, 124, 77, 73],
            yw: [1, 160, 124, 77, 73],
            Aw: [1, 240, 152, 77, 73],
            Bw: [1, 320, 152, 77, 73],
            Cw: [1, 400, 152, 77, 73],
            Dw: [1, 480, 152, 77, 73],
            Ew: [1, 560, 152, 77, 73],
            Fw: [1, 640,
                152, 77, 73],
            Gw: [1, 720, 152, 77, 73],
            Hw: [1, 800, 152, 77, 73],
            Iw: [1, 880, 152, 77, 73],
            Jw: [1, 0, 199, 77, 73],
            Kw: [1, 80, 200, 77, 73],
            Lw: [1, 160, 200, 77, 73],
            Mw: [1, 240, 228, 77, 73],
            Nw: [1, 320, 228, 77, 73],
            Ow: [1, 400, 228, 77, 73],
            Pw: [1, 480, 228, 77, 73],
            Qw: [1, 560, 228, 77, 73],
            Rw: [1, 640, 228, 77, 73],
            Sw: [1, 720, 228, 77, 73],
            Tw: [1, 800, 228, 77, 73],
            Uw: [1, 880, 228, 77, 73],
            Vw: [1, 0, 275, 77, 73],
            Ww: [1, 80, 276, 77, 73],
            Xw: [1, 160, 276, 77, 73],
            Pd: [8, 376, 0, 122, 121],
            Qd: [1, 126, 0, 122, 121],
            Yw: [1, 240, 304, 77, 73],
            Zw: [1, 320, 304, 77, 73],
            $w: [1, 400, 304, 77, 73],
            ax: [1, 480, 304,
                77, 73],
            bx: [1, 560, 304, 77, 73],
            ex: [1, 640, 304, 77, 73],
            gx: [1, 720, 304, 77, 73],
            hx: [1, 800, 304, 77, 73],
            ix: [1, 880, 304, 77, 73],
            jx: [1, 0, 351, 77, 73],
            kx: [1, 80, 352, 77, 73],
            lx: [1, 160, 352, 77, 73],
            nx: [1, 240, 380, 77, 73],
            ox: [1, 320, 380, 77, 73],
            px: [1, 400, 380, 77, 73],
            qx: [1, 480, 380, 77, 73],
            sx: [1, 560, 380, 77, 73],
            ux: [1, 640, 380, 77, 73],
            vx: [1, 720, 380, 77, 73],
            wx: [1, 800, 380, 77, 73],
            yx: [1, 880, 380, 77, 73],
            zx: [1, 0, 427, 77, 73],
            Ax: [1, 80, 428, 77, 73],
            Bx: [1, 160, 428, 77, 73],
            Cx: [1, 240, 456, 77, 73],
            Dx: [1, 320, 456, 77, 73],
            Ex: [1, 400, 456, 77, 73],
            Fx: [1, 480, 456, 77,
                73],
            Gx: [1, 560, 456, 77, 73],
            Hx: [1, 640, 456, 77, 73],
            Ix: [1, 720, 456, 77, 73],
            Jx: [1, 800, 456, 77, 73],
            Kx: [1, 880, 456, 77, 73],
            Lx: [1, 0, 503, 77, 73],
            Mx: [1, 80, 504, 77, 73],
            Nx: [1, 160, 504, 77, 73],
            Ox: [1, 240, 532, 77, 73],
            Px: [1, 320, 532, 77, 73],
            Qx: [1, 400, 532, 77, 73],
            Rx: [1, 480, 532, 77, 73],
            Sx: [1, 560, 532, 77, 73],
            Tx: [1, 640, 532, 77, 73],
            Ux: [1, 720, 532, 77, 73],
            Vx: [1, 800, 532, 77, 73],
            Wx: [1, 880, 532, 77, 73],
            Xx: [1, 345, 888, 66, 66],
            Yx: [1, 414, 888, 66, 66],
            Zx: [1, 483, 888, 66, 66],
            $x: [1, 552, 888, 66, 66],
            ay: [1, 621, 888, 66, 66],
            ey: [1, 690, 888, 66, 66],
            hy: [1, 759, 888, 66,
                66],
            iy: [1, 0, 929, 66, 66],
            jy: [1, 69, 930, 66, 66],
            ky: [1, 138, 930, 66, 66],
            ny: [1, 828, 956, 66, 66],
            oy: [1, 897, 956, 66, 66],
            qy: [1, 207, 957, 66, 66],
            sy: [1, 276, 957, 66, 66],
            vy: [1, 345, 957, 66, 66],
            wy: [1, 414, 957, 66, 66],
            xy: [1, 483, 957, 66, 66],
            yy: [1, 552, 957, 66, 66],
            zy: [1, 621, 957, 66, 66],
            Ay: [1, 690, 957, 66, 66],
            By: [1, 759, 957, 66, 66],
            Cy: [1, 0, 998, 66, 66],
            Dy: [1, 69, 999, 66, 66],
            Ey: [1, 138, 999, 66, 66],
            Fy: [1, 365, 679, 69, 67],
            Gy: [1, 437, 679, 69, 67],
            Hy: [1, 509, 679, 69, 67],
            Iy: [1, 581, 679, 69, 67],
            Jy: [1, 653, 679, 69, 67],
            Ky: [1, 725, 679, 69, 67],
            Ly: [1, 797, 679, 69, 67],
            My: [1, 869, 679, 69, 67],
            Ny: [1, 941, 679, 69, 67],
            Oy: [1, 0, 721, 69, 67],
            Py: [1, 72, 722, 69, 67],
            Qy: [1, 144, 722, 69, 67],
            Ry: [1, 365, 749, 69, 67],
            Sy: [1, 437, 749, 69, 67],
            Ty: [1, 509, 749, 69, 67],
            Uy: [1, 581, 749, 69, 67],
            Vy: [1, 653, 749, 69, 67],
            Wy: [1, 725, 749, 69, 67],
            Xy: [1, 797, 749, 69, 67],
            Yy: [1, 171, 1144, 54, 56],
            Zy: [1, 228, 1144, 54, 56],
            $y: [1, 285, 1144, 54, 56],
            ez: [1, 342, 1144, 54, 56],
            fz: [1, 399, 1144, 54, 56],
            gz: [1, 456, 1144, 54, 56],
            hz: [1, 513, 1144, 54, 56],
            iz: [1, 570, 1144, 54, 56],
            jz: [1, 627, 1144, 54, 56],
            lz: [1, 684, 1144, 54, 56],
            oz: [1, 855, 1182, 54, 56],
            pz: [1, 912,
                1182, 54, 56],
            qz: [1, 969, 1182, 54, 56],
            rz: [1, 0, 1185, 54, 56],
            sz: [1, 57, 1186, 54, 56],
            vz: [1, 114, 1186, 54, 56],
            wz: [1, 741, 1202, 54, 56],
            xz: [1, 798, 1202, 54, 56],
            yz: [1, 171, 1203, 54, 56],
            zz: [1, 228, 1203, 54, 56],
            Az: [1, 285, 1203, 54, 56],
            Bz: [1, 342, 1203, 54, 56],
            Cz: [1, 399, 1203, 54, 56],
            Dz: [1, 456, 1203, 54, 56],
            Ez: [1, 513, 1203, 54, 56],
            Fz: [1, 570, 1203, 54, 56],
            Gz: [1, 627, 1203, 54, 56],
            Hz: [1, 684, 1203, 54, 56],
            Iz: [1, 855, 1241, 54, 56],
            Jz: [1, 912, 1241, 54, 56],
            Kz: [1, 969, 1241, 54, 56],
            Lz: [1, 0, 1244, 54, 56],
            Mz: [1, 57, 1245, 54, 56],
            Nz: [1, 114, 1245, 54, 56],
            Oz: [1, 741, 1261,
                54, 56],
            Pz: [1, 798, 1261, 54, 56],
            Qz: [1, 171, 1262, 54, 56],
            Rz: [1, 228, 1262, 54, 56],
            Sz: [1, 285, 1262, 54, 56],
            Tz: [1, 342, 1262, 54, 56],
            Uz: [1, 399, 1262, 54, 56],
            Vz: [1, 456, 1262, 54, 56],
            Wz: [1, 513, 1262, 54, 56],
            Xz: [1, 570, 1262, 54, 56],
            Yz: [1, 627, 1262, 54, 56],
            Zz: [10, 179, 0, 149, 157],
            $z: [9, 0, 0, 1878, 2003],
            aA: [13, 0, 0, 216, 300],
            bA: [13, 219, 0, 216, 300],
            cA: [13, 438, 0, 216, 300],
            dA: [13, 657, 0, 216, 300],
            eA: [13, 0, 303, 216, 300],
            fA: [13, 219, 303, 216, 300],
            gA: [13, 438, 303, 216, 300],
            hA: [13, 657, 303, 216, 300],
            iA: [14, 657, 606, 216, 300],
            jA: [14, 0, 0, 216, 300],
            kA: [14,
                219, 0, 216, 300],
            lA: [14, 438, 0, 216, 300],
            mA: [14, 657, 0, 216, 300],
            nA: [14, 0, 303, 216, 300],
            oA: [14, 219, 303, 216, 300],
            pA: [14, 438, 303, 216, 300],
            qA: [14, 657, 303, 216, 300],
            rA: [14, 0, 606, 216, 300],
            sA: [14, 219, 606, 216, 300],
            tA: [14, 438, 606, 216, 300],
            uA: [6, 937, 619, 85, 88],
            vA: [6, 1043, 833, 73, 85],
            wA: [6, 703, 587, 86, 87],
            xA: [6, 788, 751, 78, 84],
            yA: [6, 961, 750, 79, 90],
            zA: [6, 843, 245, 93, 90],
            AA: [6, 0, 652, 84, 91],
            BA: [6, 235, 670, 82, 87],
            CA: [6, 519, 546, 91, 91],
            DA: [6, 318, 852, 66, 82],
            EA: [6, 877, 710, 81, 90],
            FA: [6, 165, 857, 61, 86],
            GA: [6, 519, 729, 81, 87],
            HA: [6,
                478, 819, 74, 91],
            IA: [12, 706, 304, 92, 129],
            JA: [12, 801, 304, 92, 129],
            KA: [12, 896, 304, 92, 129],
            LA: [12, 0, 415, 92, 129],
            MA: [12, 95, 415, 92, 129],
            NA: [12, 190, 415, 92, 129],
            OA: [12, 285, 415, 92, 129],
            PA: [12, 380, 427, 92, 129],
            QA: [12, 475, 427, 92, 129],
            RA: [12, 570, 428, 92, 129],
            SA: [12, 665, 436, 92, 129],
            TA: [12, 760, 436, 92, 129],
            UA: [12, 855, 436, 92, 129],
            VA: [12, 0, 547, 92, 129],
            WA: [12, 95, 547, 92, 129],
            XA: [12, 190, 547, 92, 129],
            YA: [12, 285, 547, 92, 129],
            ZA: [12, 380, 559, 92, 129],
            $A: [12, 475, 559, 92, 129],
            aB: [12, 570, 560, 92, 129],
            Sb: [12, 582, 304, 121, 121],
            cB: [8, 871,
                0, 71, 105],
            dB: [12, 524, 0, 149, 149],
            eB: [12, 676, 0, 149, 149],
            fB: [12, 828, 0, 149, 149],
            gB: [12, 524, 152, 149, 149],
            hB: [12, 676, 152, 149, 149],
            iB: [12, 828, 152, 149, 149],
            jB: [12, 0, 263, 149, 149],
            kB: [12, 152, 263, 149, 149],
            lB: [12, 304, 263, 149, 149],
            mB: [7, 0, 0, 166, 176],
            nB: [7, 169, 0, 166, 176],
            oB: [7, 338, 0, 166, 176],
            pB: [7, 507, 0, 166, 176],
            qB: [7, 676, 0, 166, 176],
            rB: [7, 845, 0, 166, 176],
            sB: [7, 1014, 0, 166, 176],
            tB: [7, 0, 179, 166, 176],
            uB: [7, 169, 179, 166, 176],
            vB: [7, 338, 179, 166, 176],
            wB: [7, 507, 179, 166, 176],
            xB: [7, 676, 179, 166, 176],
            yB: [7, 845, 179, 166, 176],
            zB: [7,
                1014, 179, 166, 176],
            AB: [7, 0, 358, 166, 176],
            BB: [7, 169, 358, 166, 176],
            CB: [7, 338, 358, 166, 176],
            DB: [7, 507, 358, 166, 176],
            EB: [7, 676, 358, 166, 176],
            FB: [7, 845, 358, 166, 176],
            GB: [7, 1014, 358, 166, 176],
            HB: [7, 0, 537, 166, 176],
            IB: [7, 169, 537, 166, 176],
            JB: [7, 338, 537, 166, 176],
            KB: [7, 507, 537, 166, 176],
            LB: [7, 676, 537, 166, 176],
            MB: [7, 845, 537, 166, 176],
            NB: [7, 1014, 537, 166, 176],
            OB: [7, 0, 716, 166, 176],
            PB: [7, 169, 716, 166, 176],
            QB: [7, 338, 716, 166, 176],
            RB: [7, 507, 716, 166, 176],
            SB: [7, 676, 716, 166, 176],
            TB: [7, 845, 716, 166, 176],
            UB: [7, 1014, 716, 166, 176],
            VB: [11,
                501, 0, 138, 142],
            jc: [12, 950, 436, 52, 52],
            Yd: [6, 138, 466, 94, 279],
            Zd: [6, 284, 241, 154, 241],
            $d: [6, 831, 395, 103, 261],
            fe: [6, 697, 342, 131, 242],
            he: [6, 942, 0, 172, 217],
            le: [6, 758, 0, 181, 242],
            oe: [6, 537, 230, 157, 196],
            qe: [6, 284, 0, 250, 238],
            re: [6, 425, 515, 91, 270],
            Kc: [6, 942, 220, 158, 223],
            te: [6, 0, 746, 80, 205],
            ue: [6, 0, 0, 281, 261],
            we: [6, 537, 0, 218, 227],
            xe: [6, 0, 264, 135, 207]
        }, Bd = [C.Me, C.Ne, C.Oe, C.Pe], Cd = [C.Qe, C.Re, C.Se, C.Te],
        Dd = [C.Ue, C.Ve, C.We, C.Xe, C.Ye, C.Ze, C.$e, C.df, C.ef],
        Ed = [C.Vc, C.Wc, C.Xc, C.Yc, C.Zc, C.ff, C.$c, C.hd, C.jd, C.kd], Fd = [C.hf,
            C.jf, C.kf, C.lf],
        Gd = [C.rf, C.sf, C.tf, C.uf, C.vf, C.xf, C.yf, C.zf, C.Af, C.Bf, C.Cf, C.Df, C.Ef, C.Ff, C.Gf, C.Hf, C.If, C.Jf, C.Kf, C.Lf, C.Mf, C.Nf, C.Of, C.Pf, C.Qf, C.Rf, C.Sf, C.Tf, C.Uf, C.Vf, C.Wf, C.Xf, C.Yf, C.Zf, C.$f, C.dg, C.fg, C.hg, C.ig, C.jg, C.lg, C.og, C.qg, C.rg, C.vg, C.wg, C.xg, C.yg, C.zg, C.Ag, C.Bg, C.Cg, C.Dg, C.Eg, C.Fg, C.Gg, C.Hg, C.Ig, C.Jg, C.Kg, C.Lg, C.Mg, C.Ng, C.Og, C.Pg, C.Qg, C.Rg, C.Sg, C.Tg, C.Ug, C.Vg, C.Wg, C.Xg, C.Yg, C.Zg, C.$g, C.ah, C.dh, C.eh, C.fh, C.hh, C.ih, C.jh, C.lh, C.mh, C.nh, C.oh, C.qh, C.rh, C.sh, C.uh, C.wh, C.xh, C.yh, C.zh, C.Ah, C.Bh,
            C.Ch, C.Dh, C.Eh, C.Fh, C.Gh, C.Hh, C.Ih, C.Jh, C.Kh, C.Lh, C.Mh, C.Nh, C.Oh, C.Ph, C.Qh, C.Rh, C.Sh, C.Th, C.Uh, C.Vh, C.Wh, C.Xh, C.Yh, C.Zh, C.$h, C.ei, C.hi, C.ii, C.ji, C.li, C.mi, C.oi, C.ri, C.ti, C.ui, C.wi],
        Hd = [C.Ai, C.Bi, C.Ci, C.Di, C.Ei, C.Fi, C.Gi, C.Hi, C.Ii, C.Ji, C.Ki, C.Li, C.Mi, C.Ni, C.Oi, C.Pi, C.Qi, C.Ri, C.Si, C.Ti, C.Ui, C.Vi, C.Wi, C.Xi],
        Id = [C.Bd, C.Cd, C.Dd, C.Dc, C.Ec, C.Ed, C.Fc, C.Fd, C.Gd, C.Gc, C.Hc, C.Ic, C.Hd, C.Id, C.Jd, C.Kd],
        Jd = [C.Ld, C.Md, C.Nd, C.Od, C.Pd],
        Kd = [C.yk, C.zk, C.Ak, C.Bk, C.Ck, C.Dk, C.Ek, C.Fk, C.Gk, C.Hk, C.Ik, C.Jk, C.Kk, C.Lk, C.Mk, C.Nk,
            C.Ok, C.Pk, C.Qk, C.Rk, C.Sk, C.Tk, C.Uk, C.Vk, C.Wk],
        Ld = [C.Xk, C.Yk, C.Zk, C.$k, C.bl, C.dl, C.fl, C.jl, C.kl, C.ll, C.ol, C.ql, C.rl, C.ul, C.vl, C.wl, C.xl, C.yl, C.zl, C.Al, C.Bl, C.Cl, C.Dl, C.El, C.Fl, C.Gl, C.Hl, C.Il, C.Jl, C.Kl, C.Ll, C.Ml, C.Nl, C.Ol, C.Pl, C.Ql, C.Rl, C.Sl, C.Tl, C.Ul, C.Vl, C.Wl, C.Xl, C.Yl, C.Zl],
        Md = [C.$l, C.bm, C.em, C.fm, C.hm, C.km, C.nm, C.rm, C.um, C.vm, C.wm, C.xm, C.ym, C.Am, C.Bm, C.Cm, C.Dm, C.Em],
        Nd = [C.Fm, C.Gm, C.Hm, C.Im, C.Jm, C.Km, C.Lm, C.Mm, C.Nm, C.Om, C.Pm, C.Qm, C.Rm, C.Sm, C.Tm, C.Um, C.Vm, C.Wm, C.Xm, C.Ym],
        Od = [C.Zm, C.$m, C.an, C.en, C.fn,
            C.jn, C.ln, C.nn, C.qn, C.rn, C.un, C.wn, C.xn, C.yn, C.zn, C.An, C.Bn, C.Cn, C.Dn, C.En, C.Fn, C.Gn, C.Hn, C.In, C.Jn],
        Pd = [C.Ln, C.Mn, C.Nn, C.On, C.Pn, C.Qn, C.Rn, C.Sn, C.Tn, C.Un, C.Vn, C.Wn, C.Xn, C.Yn, C.Zn, C.$n, C.eo, C.fo, C.ho, C.io, C.ko, C.lo, C.oo, C.qo, C.uo],
        Qd = [C.vo, C.wo, C.xo, C.yo, C.zo, C.Ao, C.Bo, C.Co, C.Do, C.Eo, C.Fo, C.Go, C.Ho, C.Io, C.Jo, C.Ko, C.Lo, C.Mo, C.No, C.Oo, C.Po, C.Qo, C.Ro, C.So, C.To, C.Uo, C.Vo, C.Wo, C.Xo, C.Yo, C.Zo, C.$o, C.ap, C.bp, C.ep, C.fp, C.gp, C.hp, C.ip, C.kp, C.lp, C.mp, C.qp, C.rp, C.vp],
        Rd = [C.wp, C.xp, C.yp, C.zp, C.Ap, C.Bp, C.Cp, C.Dp,
            C.Ep, C.Fp, C.Gp, C.Hp, C.Ip, C.Jp, C.Kp, C.Lp, C.Mp, C.Np, C.Op],
        Sd = [C.Pp, C.Qp, C.Rp, C.Sp, C.Tp, C.Up, C.Vp, C.Wp, C.Xp, C.Yp, C.Zp, C.$p, C.aq, C.bq, C.cq, C.eq, C.fq, C.gq, C.hq, C.jq],
        Td = [C.kq, C.mq, C.nq, C.oq, C.pq, C.qq, C.rq, C.sq, C.tq, C.uq, C.wq, C.xq, C.yq, C.zq, C.Aq, C.Bq, C.Cq, C.Dq, C.Eq, C.Fq, C.Gq, C.Hq, C.Iq, C.Jq, C.Kq],
        Ud = [C.Mq, C.Nq, C.Oq, C.Pq, C.Qq, C.Rq, C.Sq, C.Tq, C.Uq, C.Vq, C.Wq, C.Xq, C.Yq, C.Zq, C.$q, C.dr, C.er, C.ir, C.jr, C.lr, C.mr, C.qr, C.rr, C.ur, C.vr],
        Vd = [C.wr, C.xr, C.yr, C.zr, C.Ar, C.Br, C.Cr, C.Dr, C.Er, C.Fr, C.Gr, C.Hr, C.Ir, C.Jr, C.Kr, C.Lr,
            C.Mr, C.Nr, C.Or, C.Pr, C.Qr, C.Rr, C.Sr, C.Tr, C.Ur, C.Vr, C.Wr, C.Xr, C.Yr, C.Zr, C.$r, C.cs, C.ds, C.js, C.ks, C.ms, C.ns, C.os, C.vs, C.xs, C.ys, C.zs, C.As, C.Bs, C.Cs],
        Wd = [C.Ds, C.Es, C.Fs, C.Gs, C.Hs, C.Is, C.Js, C.Ks, C.Ls, C.Ms, C.Ns, C.Os, C.Ps, C.Qs, C.Rs, C.Ss, C.Ts, C.Us, C.Vs],
        Xd = [C.Ws, C.Xs, C.Ys, C.Zs, C.$s, C.ct, C.ft, C.jt, C.kt, C.nt, C.ot, C.qt, C.rt, C.ut, C.vt, C.wt, C.xt, C.yt, C.zt, C.At],
        Yd = [C.Bt, C.Ct, C.Dt, C.Et, C.Ft, C.Gt, C.Ht, C.It, C.Jt, C.Kt, C.Lt, C.Mt, C.Nt, C.Ot, C.Pt, C.Qt, C.Rt, C.St, C.Tt, C.Ut, C.Vt, C.Wt, C.Xt, C.Yt, C.Zt],
        Zd = [C.bu, C.du, C.eu, C.fu,
            C.gu, C.iu, C.ju, C.ku, C.ou, C.pu, C.qu, C.su, C.tu, C.uu, C.wu, C.xu, C.yu, C.zu, C.Au, C.Bu, C.Cu, C.Du, C.Eu, C.Fu, C.Gu],
        $d = [C.Hu, C.Iu, C.Ju, C.Ku, C.Lu, C.Mu, C.Nu, C.Ou, C.Pu, C.Qu, C.Ru, C.Su, C.Tu, C.Uu, C.Vu, C.Wu, C.Xu, C.Yu, C.Zu],
        ae = [C.$u, C.av, C.dv, C.ev, C.fv, C.gv, C.hv, C.iv, C.jv, C.kv, C.nv, C.ov, C.pv, C.qv, C.rv, C.tv, C.uv, C.vv, C.wv, C.xv],
        be = [C.yv, C.zv, C.Av, C.Bv, C.Cv, C.Dv, C.Ev, C.Fv, C.Gv, C.Hv, C.Iv, C.Jv, C.Kv, C.Lv, C.Mv, C.Nv, C.Ov, C.Pv, C.Qv, C.Rv, C.Sv, C.Tv, C.Uv, C.Vv, C.Wv],
        ce = [C.Xv, C.Yv, C.Zv, C.$v, C.aw, C.cw, C.dw, C.ew, C.fw, C.gw, C.hw, C.iw,
            C.jw, C.lw, C.nw, C.ow, C.qw, C.uw, C.ww, C.xw, C.yw, C.Aw, C.Bw, C.Cw, C.Dw, C.Ew, C.Fw, C.Gw, C.Hw, C.Iw, C.Jw, C.Kw, C.Lw, C.Mw, C.Nw, C.Ow, C.Pw, C.Qw, C.Rw, C.Sw, C.Tw, C.Uw, C.Vw, C.Ww, C.Xw],
        de = [C.Xx, C.Yx, C.Zx, C.$x, C.ay, C.ey, C.hy, C.iy, C.jy, C.ky, C.ny, C.oy, C.qy, C.sy, C.vy, C.wy, C.xy, C.yy, C.zy, C.Ay, C.By, C.Cy, C.Dy, C.Ey],
        ee = [C.Yw, C.Zw, C.$w, C.ax, C.bx, C.ex, C.gx, C.hx, C.ix, C.jx, C.kx, C.lx, C.nx, C.ox, C.px, C.qx, C.sx, C.ux, C.vx, C.wx, C.yx, C.zx, C.Ax, C.Bx, C.Cx, C.Dx, C.Ex, C.Fx, C.Gx, C.Hx, C.Ix, C.Jx, C.Kx, C.Lx, C.Mx, C.Nx, C.Ox, C.Px, C.Qx, C.Rx, C.Sx, C.Tx,
            C.Ux, C.Vx, C.Wx],
        fe = [C.Fy, C.Gy, C.Hy, C.Iy, C.Jy, C.Ky, C.Ly, C.My, C.Ny, C.Oy, C.Py, C.Qy, C.Ry, C.Sy, C.Ty, C.Uy, C.Vy, C.Wy, C.Xy],
        ge = [C.Yy, C.Zy, C.$y, C.ez, C.fz, C.gz, C.hz, C.iz, C.jz, C.lz, C.oz, C.pz, C.qz, C.rz, C.sz, C.vz, C.wz, C.xz, C.yz, C.zz],
        he = [C.Az, C.Bz, C.Cz, C.Dz, C.Ez, C.Fz, C.Gz, C.Hz, C.Iz, C.Jz, C.Kz, C.Lz, C.Mz, C.Nz, C.Oz, C.Pz, C.Qz, C.Rz, C.Sz, C.Tz, C.Uz, C.Vz, C.Wz, C.Xz, C.Yz],
        ie = [C.aA, C.bA, C.cA, C.dA, C.eA, C.fA, C.gA, C.hA, C.iA, C.jA, C.kA, C.lA, C.mA, C.nA, C.oA, C.pA, C.qA, C.rA, C.sA, C.tA],
        je = [C.uA, C.vA, C.wA, C.xA, C.yA, C.zA, C.AA, C.BA, C.CA,
            C.DA, C.EA, C.FA, C.GA, C.HA],
        ke = [C.IA, C.JA, C.KA, C.LA, C.MA, C.NA, C.OA, C.PA, C.QA, C.RA, C.SA, C.TA, C.UA, C.VA, C.WA, C.XA, C.YA, C.ZA, C.$A, C.aB],
        le = [C.dB, C.eB, C.fB, C.gB, C.hB, C.iB, C.jB, C.kB, C.lB],
        me = [C.mB, C.nB, C.oB, C.pB, C.qB, C.rB, C.sB, C.tB, C.uB, C.vB, C.wB, C.xB, C.yB, C.zB, C.AB, C.BB, C.CB, C.DB, C.EB, C.FB, C.GB, C.HB, C.IB, C.JB, C.KB, C.LB, C.MB, C.NB, C.OB, C.PB, C.QB, C.RB, C.SB, C.TB, C.UB];
    Ja(yd);
    var D = function (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    D.prototype.clone = function () {
        return new D(this.x, this.y)
    };
    var ne = function (a, b) {
        return b instanceof D && (a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1)
    };
    D.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    D.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    D.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    D.prototype.scale = function (a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var E = function (a, b) {
        this.width = a;
        this.height = b
    }, oe = function (a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    d = E.prototype;
    d.clone = function () {
        return new E(this.width, this.height)
    };
    d.aspectRatio = function () {
        return this.width / this.height
    };
    d.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    d.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    d.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    d.scale = function (a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var pe = function (a, b, c) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0;
        this.V = void 0 !== c ? c : 0
    };
    pe.prototype.clone = function () {
        return new pe(this.x, this.y, this.V)
    };
    var qe = function (a, b) {
        var c = a.x - b.x, e = a.y - b.y;
        a = a.V - b.V;
        return c * c + e * e + a * a
    };
    pe.prototype.toArray = function () {
        return [this.x, this.y, this.V]
    };
    var F = function (a, b, c) {
        this.x = a;
        this.y = b;
        this.V = c
    };
    u(F, pe);
    F.prototype.clone = function () {
        return new F(this.x, this.y, this.V)
    };
    var re = function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y + a.V * a.V)
    };
    F.prototype.scale = function (a) {
        this.x *= a;
        this.y *= a;
        this.V *= a;
        return this
    };
    F.prototype.add = function (a) {
        this.x += a.x;
        this.y += a.y;
        this.V += a.V;
        return this
    };
    var se = function (a, b) {
        return new F(a.x - b.x, a.y - b.y, a.V - b.V)
    }, te = function (a, b, c) {
        return new F(y(a.x, b.x, c), y(a.y, b.y, c), y(a.V, b.V, c))
    };
    var H = function (a, b, c) {
        a = void 0 === a ? 0 : a;
        this.$a = [];
        this.Ea = null;
        this.Qa = a instanceof F ? a : new F(a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.Ub = new F(0, 0, 0);
        this.Be = new F(0, 0, 0);
        this.ye = this.uc = 1;
        this.Tc = this.Sc = this.Sa = !0;
        this.Nc = new ue;
        this.Uc = 0;
        this.ZB = []
    };
    d = H.prototype;
    d.getTags = function () {
        return this.ZB
    };
    d.Va = function () {
        return this.uc
    };
    d.Ba = function (a) {
        this.Sa = a
    };
    d.isActive = function () {
        return this.Sa
    };
    d.Pb = function (a) {
        this.Sc = !0;
        for (var b = n(this.$a), c = b.next(); !c.done; c = b.next()) c.value.Pb(a)
    };
    d.Zb = function (a) {
        this.Tc = !0;
        for (var b = n(this.$a), c = b.next(); !c.done; c = b.next()) c.value.Zb(a)
    };
    d.getParent = function () {
        return this.Ea
    };
    d.setParent = function (a) {
        this.Pb(!0);
        this.Zb(!0);
        this.Ea && qb(this.Ea.$a, this);
        (this.Ea = a) && this.Ea.$a.push(this)
    };
    d.addChild = function (a) {
        a.setParent(this)
    };
    var ve = function (a, b) {
        b = n(b);
        for (var c = b.next(); !c.done; c = b.next()) a.addChild(c.value)
    };
    d = H.prototype;
    d.Fe = function () {
        return this.$a
    };
    d.removeChild = function (a) {
        0 <= jb(this.$a, a) && a.setParent(null)
    };
    d.removeChildren = function () {
        for (var a = n(this.$a), b = a.next(); !b.done; b = a.next()) b = b.value, b.Ea = null, b.setParent(null);
        this.$a = []
    };
    d.Da = function () {
        this.setParent(null)
    };
    d.Aa = function (a, b, c) {
        this.Pb(!0);
        a instanceof F ? (this.Qa.x = a.x, this.Qa.y = a.y, this.Qa.V = a.V) : (this.Qa.x = void 0 === a ? this.Qa.x : a, this.Qa.y = void 0 === b ? this.Qa.y : b, this.Qa.V = void 0 === c ? this.Qa.V : c)
    };
    d.setScale = function (a) {
        this.Zb(!0);
        this.Pb(!0);
        this.uc = a
    };
    d.Ca = function () {
        return this.Qa
    };
    var I = function (a) {
        a.Sc && (a.Ub.x = a.Qa.x, a.Ub.y = a.Qa.y, a.Ub.V = a.Qa.V, a.Ea && a.Ub.scale(we(a.Ea)).add(I(a.Ea)), a.Be = a.Ub, a.Sc = !1);
        return a.Be
    }, we = function (a) {
        if (a.Tc) {
            var b = a.Ea ? a.uc * we(a.Ea) : a.uc;
            a.ye = b;
            a.Tc = !1
        }
        return a.ye
    }, xe = function (a, b) {
        if (!a.isActive()) return !1;
        var c = b(a);
        if (c) return c;
        a = n(a.$a);
        for (c = a.next(); !c.done; c = a.next()) if (c = xe(c.value, b)) return c;
        return !1
    };
    H.prototype.getSize = function () {
        return new E(0, 0)
    };
    H.prototype.update = function () {
    };
    var ye = function (a) {
        return a.Ea ? a.Uc + ye(a.Ea) : a.Uc
    }, ue = function () {
        this.g = 0
    };
    var ze = function () {
        H.call(this);
        this.s = !1
    };
    p(ze, H);
    d = ze.prototype;
    d.update = function (a) {
        this.s || (this.s = !0, this.onStart());
        this.Rc(a);
        this.tb() && this.Oa()
    };
    d.Rc = function () {
    };
    d.onStart = function () {
    };
    d.Oa = function () {
    };
    d.tb = function () {
        return !1
    };
    var Ae = function (a, b, c) {
        b = void 0 === b ? function () {
        } : b;
        c = void 0 === c ? function () {
        } : c;
        ze.call(this);
        this.i = 0;
        this.j = a;
        b && (this.Rc = b);
        this.Oa = c
    };
    p(Ae, ze);
    Ae.prototype.tb = function () {
        return this.i >= this.j
    };
    Ae.prototype.update = function (a) {
        this.i += a;
        ze.prototype.update.call(this, a)
    };
    var Be = function (a) {
        ze.call(this);
        this.g = a
    };
    p(Be, ze);
    Be.prototype.update = function (a) {
        for (var b = n(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.tb() || c.update(a);
        ze.prototype.update.call(this, a)
    };
    Be.prototype.tb = function () {
        for (var a = n(this.g), b = a.next(); !b.done; b = a.next()) if (!b.value.tb()) return !1;
        return !0
    };
    var J = function () {
        H.call(this);
        this.g = [];
        this.i = []
    };
    p(J, H);
    J.prototype.update = function (a) {
        if (0 < this.g.length && 0 < a) {
            var b = this.g[0];
            b.update(a);
            b.tb() && this.g.length && this.g[0] === b && this.g.shift()
        }
        for (b = 0; b < this.i.length; b++) this.i[b].update(a), this.i[b].tb() && this.i.splice(b--, 1)
    };
    var Ce = function (a, b) {
        Array.isArray(b) ? a.g.push(new Be(b)) : a.g.push(b)
    }, K = function (a, b, c) {
        Ce(a, new Ae(b, function () {
        }, void 0 === c ? function () {
        } : c))
    }, De = function (a, b, c) {
        L(a, new Ae(b, function () {
        }, void 0 === c ? function () {
        } : c))
    }, L = function (a, b) {
        Array.isArray(b) ? a.i.push(new Be(b)) : a.i.push(b)
    };
    var M = function (a, b, c, e) {
        this.i = a;
        this.g = b;
        this.width = c;
        this.height = e
    };
    M.prototype.clone = function () {
        return new M(this.i, this.g, this.width, this.height)
    };
    var Ee = function (a, b) {
        a:{
            var c = Math.max(a.i, b.i);
            var e = Math.min(a.i + a.width, b.i + b.width);
            if (c <= e) {
                var f = Math.max(a.g, b.g), g = Math.min(a.g + a.height, b.g + b.height);
                if (f <= g) {
                    c = new M(c, f, e - c, g - f);
                    break a
                }
            }
            c = null
        }
        if (!c || !c.height || !c.width) return [a.clone()];
        c = [];
        e = a.g;
        f = a.height;
        g = a.i + a.width;
        var h = a.g + a.height, k = b.i + b.width, l = b.g + b.height;
        b.g > a.g && (c.push(new M(a.i, a.g, a.width, b.g - a.g)), e = b.g, f -= b.g - a.g);
        l < h && (c.push(new M(a.i, l, a.width, h - l)), f = l - e);
        b.i > a.i && c.push(new M(a.i, e, b.i - a.i, f));
        k < g && c.push(new M(k,
            e, g - k, f));
        return c
    };
    d = M.prototype;
    d.contains = function (a) {
        return a instanceof D ? a.x >= this.i && a.x <= this.i + this.width && a.y >= this.g && a.y <= this.g + this.height : this.i <= a.i && this.i + this.width >= a.i + a.width && this.g <= a.g && this.g + this.height >= a.g + a.height
    };
    d.getSize = function () {
        return new E(this.width, this.height)
    };
    d.ceil = function () {
        this.i = Math.ceil(this.i);
        this.g = Math.ceil(this.g);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    d.floor = function () {
        this.i = Math.floor(this.i);
        this.g = Math.floor(this.g);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    d.round = function () {
        this.i = Math.round(this.i);
        this.g = Math.round(this.g);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    d.scale = function (a, b) {
        b = "number" === typeof b ? b : a;
        this.i *= a;
        this.width *= a;
        this.g *= b;
        this.height *= b;
        return this
    };
    var Fe = 1 / 76, Ge = new M(0, 0, 1E3, 1E3), He = new F(0, 0, 0), Ie = He;
    Object.isFrozen && !Object.isFrozen(He) && (Ie = Object.create(He), Object.freeze(Ie));
    var Je = function (a, b, c, e, f, g) {
        if (6 == arguments.length) this.setTransform(a, b, c, e, f, g); else {
            if (0 != arguments.length) throw Error("j");
            this.g = this.i = 1;
            this.o = this.j = this.s = this.v = 0
        }
    };
    d = Je.prototype;
    d.clone = function () {
        return new Je(this.g, this.o, this.j, this.i, this.s, this.v)
    };
    d.setTransform = function (a, b, c, e, f, g) {
        if ("number" !== typeof a || "number" !== typeof b || "number" !== typeof c || "number" !== typeof e || "number" !== typeof f || "number" !== typeof g) throw Error("k");
        this.g = a;
        this.o = b;
        this.j = c;
        this.i = e;
        this.s = f;
        this.v = g;
        return this
    };
    d.scale = function (a, b) {
        this.g *= a;
        this.o *= a;
        this.j *= b;
        this.i *= b;
        return this
    };
    d.toString = function () {
        return "matrix(" + [this.g, this.o, this.j, this.i, this.s, this.v].join() + ")"
    };
    d.transform = function (a, b, c, e, f) {
        var g = b;
        for (b += 2 * f; g < b;) {
            f = a[g++];
            var h = a[g++];
            c[e++] = f * this.g + h * this.j + this.s;
            c[e++] = f * this.o + h * this.i + this.v
        }
    };
    var Ke = function (a, b) {
        if (a instanceof Ke) this.g = a.toArray(); else {
            var c;
            if (c = La(a)) a:{
                for (var e = c = 0; e < a.length; e++) {
                    if (!La(a[e]) || 0 < c && a[e].length != c) {
                        c = !1;
                        break a
                    }
                    for (var f = 0; f < a[e].length; f++) if ("number" !== typeof a[e][f]) {
                        c = !1;
                        break a
                    }
                    0 == c && (c = a[e].length)
                }
                c = 0 != c
            }
            if (c) this.g = sb(a); else if (a instanceof E) this.g = Le(a.height, a.width); else if ("number" === typeof a && "number" === typeof b && 0 < a && 0 < b) this.g = Le(a, b); else throw Error("l");
        }
        this.i = new E(this.g[0].length, this.g.length)
    }, Me = function (a, b, c) {
        for (var e =
            0; e < a.getSize().height; e++) for (var f = 0; f < a.getSize().width; f++) b.call(c, a.g[e][f], e, f, a)
    }, Ne = function (a, b) {
        var c = new Ke(a.getSize());
        Me(a, function (e, f, g) {
            c.g[f][g] = b.call(void 0, e, f, g, a)
        });
        return c
    }, Le = function (a, b) {
        for (var c = [], e = 0; e < a; e++) {
            c[e] = [];
            for (var f = 0; f < b; f++) c[e][f] = 0
        }
        return c
    };
    Ke.prototype.add = function (a) {
        if (!oe(this.i, a.getSize())) throw Error("m");
        return Ne(this, function (b, c, e) {
            return b + a.g[c][e]
        })
    };
    Ke.prototype.getSize = function () {
        return this.i
    };
    var Oe = function (a, b, c) {
        return 0 <= b && b < a.i.height && 0 <= c && c < a.i.width ? a.g[b][c] : null
    }, Re = function (a, b) {
        if (b instanceof Ke) {
            if (a.i.width != b.getSize().height) throw Error("o");
            return Pe(a, b)
        }
        if ("number" === typeof b) return Qe(a, b);
        throw Error("p");
    };
    Ke.prototype.toArray = function () {
        return this.g
    };
    var Pe = function (a, b) {
        var c = new Ke(a.i.height, b.getSize().width);
        Me(c, function (e, f, g) {
            for (var h = e = 0; h < this.i.width; h++) e += Oe(this, f, h) * Oe(b, h, g);
            if (!(0 <= f && f < c.i.height && 0 <= g && g < c.i.width)) throw Error("n`" + f + "`" + g + "`" + c.i.height + "`" + c.i.width);
            c.g[f][g] = e
        }, a);
        return c
    }, Qe = function (a, b) {
        return Ne(a, function (c) {
            return c * b
        })
    };
    var Se = function (a) {
        a = void 0 === a ? new F(0, 0, 0) : a;
        H.call(this, a);
        var b = this;
        this.g = Ge.clone();
        this.j = new Map;
        this.i = 1.05 * this.g.height;
        this.s = function () {
            return !1
        };
        this.o = function (c) {
            return 2 >= c.V || Math.abs(c.x) >= b.g.width / b.g.height * c.V * .8
        }
    };
    p(Se, H);
    var Te = function (a, b) {
        a.o = b
    }, Ue = function (a, b) {
        a.s = b
    }, Ve = function (a, b) {
        var c = new H;
        c.update = function () {
            var e = b.height;
            a.g.width = b.width;
            a.g.height = e;
            a.i = 1.05 * a.g.height
        };
        c.update(0);
        a.addChild(c)
    };
    Se.prototype.update = function () {
        this.i = 1.05 * this.g.height
    };
    Se.prototype.Aa = function (a, b, c) {
        H.prototype.Aa.call(this, a, b, c);
        this.j.clear()
    };
    var Xe = function (a, b, c) {
        var e = (c = void 0 === c ? !0 : c) ? a.j.get(173 * (103 * We(b.x) + We(b.y)) + We(b.V)) : null;
        if (!e) {
            e = se(b, I(a));
            var f = e.y, g = e.V;
            e.x = e.x;
            e.y = f;
            e.V = g;
            c && 1E3 > a.j.size && a.j.set(173 * (103 * We(b.x) + We(b.y)) + We(b.V), e)
        }
        return e
    }, Ye = function (a, b) {
        var c = new F(-0, -0, 0),
            e = new Ke([[Math.cos(c.y), 0, -Math.sin(c.y)], [0, 1, 0], [Math.sin(c.y), 0, Math.cos(c.y)]]),
            f = new Ke([[1, 0, 0], [0, Math.cos(c.x), Math.sin(c.x)], [0, -Math.sin(c.x), Math.cos(c.x)]]);
        c = new Ke([[Math.cos(c.V), Math.sin(c.V), 0], [-Math.sin(c.V), Math.cos(c.V),
            0], [0, 0, 1]]);
        e = Re(Re(Re(e, f), c), new Ke([[b.x], [b.y], [b.V]]));
        b.x = Oe(e, 0, 0);
        b.y = Oe(e, 1, 0);
        b.V = Oe(e, 2, 0);
        a = I(a);
        return new F(a.x + b.x, a.y + b.y, a.V + b.V)
    }, We = function (a) {
        return Math.round(1E4 * a) / 1E4
    };
    var N = function (a, b, c) {
        H.call(this, void 0 === a ? 0 : a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.i = new Je;
        this.s = new M(0, 0, 0, 0);
        this.Za = new E(0, 0);
        this.Yb = 0;
        this.Ud = 1;
        this.Ya = new D(.5, .5);
        this.bB = "source-over"
    };
    p(N, H);
    N.prototype.isVisible = function (a) {
        a = a.g;
        var b = this.s;
        return a.i <= b.i + b.width && b.i <= a.i + a.width && a.g <= b.g + b.height && b.g <= a.g + a.height
    };
    N.prototype.yc = function (a) {
        this.i = a;
        this.Ae()
    };
    N.prototype.Ae = function () {
        if (this.i && Ze(this)) {
            var a = -Ze(this), b = this.i;
            var c = new Je;
            var e = Math.cos(a);
            a = Math.sin(a);
            c = c.setTransform(e, a, -a, e, -(0 * e) + 0 * a, -(0 * a) - 0 * e);
            e = b.g;
            a = b.j;
            b.g = c.g * e + c.o * a;
            b.j = c.j * e + c.i * a;
            b.s += c.s * e + c.v * a;
            e = b.o;
            a = b.i;
            b.o = c.g * e + c.o * a;
            b.i = c.j * e + c.i * a;
            b.v += c.s * e + c.v * a
        }
    };
    var $e = function (a, b) {
        if (!a.i) return null;
        var c = [0, 0];
        a = a.i;
        var e = a.g * a.i - a.j * a.o;
        (new Je(a.i / e, -a.o / e, -a.j / e, a.g / e, (a.j * a.v - a.i * a.s) / e, (a.o * a.s - a.g * a.v) / e)).transform([b.x, b.y], 0, c, 0, 1);
        return new D(c[0], -c[1])
    };
    N.prototype.Vb = function () {
        return I(this).V
    };
    N.prototype.getSize = function () {
        return this.Za
    };
    var af = function (a) {
        return new E(a.getSize().width * we(a), a.getSize().height * we(a))
    };
    N.prototype.setSize = function (a, b) {
        a instanceof E ? this.Za = a.clone() : (this.Za.width = a, this.Za.height = void 0 === b ? a : b)
    };
    var Ze = function (a) {
        return a.getParent() && a.getParent() instanceof N ? a.Yb + Ze(a.getParent()) : a.Yb
    };
    d = N.prototype;
    d.Ha = function (a) {
        this.Ud = a
    };
    d.Nb = function (a) {
        if (!this.Xb(a)) return !1;
        this.Ce();
        return this.isVisible(a)
    };
    d.Xb = function (a) {
        var b = I(this);
        a = new D(b.x + a.g.width / 2, b.y + a.g.height / 2);
        this.i ? this.i.setTransform(we(this), 0, 0, we(this), a.x, a.y) : this.i = new Je(we(this), 0, 0, we(this), a.x, a.y);
        this.yc(this.i);
        return !0
    };
    d.Ce = function () {
        var a = this.i, b = this.getSize().width, c = this.getSize().height, e = -this.Ya.x * b, f = -this.Ya.y * c,
            g = [];
        a.transform([e, f, e + b, f, e + b, f + c, e, f + c], 0, g, 0, 4);
        b = n([g[0], g[2], g[4], g[6]].reduce(function (h, k) {
            return [Math.min(h[0], k), Math.max(h[1], k)]
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]));
        a = b.next().value;
        b = b.next().value;
        c = n([g[1], g[3], g[5], g[7]].reduce(function (h, k) {
            return [Math.min(h[0], k), Math.max(h[1], k)]
        }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]));
        g = c.next().value;
        c = c.next().value;
        this.s.i = a;
        this.s.g = g;
        this.s.width = b - a;
        this.s.height = c - g;
        bf(this.s)
    };
    d.Wa = function () {
    };
    var bf = function (a) {
        0 > a.width && (a.width *= -1, a.i -= a.width);
        0 > a.height && (a.height *= -1, a.g -= a.height)
    };
    var O = function (a, b, c) {
        N.call(this, void 0 === a ? 0 : a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.yb = new PIXI.Container
    };
    p(O, N);
    O.prototype.Na = function () {
        return this.yb
    };
    O.prototype.addChild = function (a) {
        N.prototype.addChild.call(this, a);
        a.Na && this.yb.addChild(a.Na())
    };
    O.prototype.kc = function () {
        var a = this.Na(), b = a.parent;
        b && b.setChildIndex(a, b.children.length - 1)
    };
    O.prototype.wc = function () {
        var a = this.Na(), b = a.parent;
        b && b.setChildIndex(a, 0)
    };
    var cf = yd.Fa(), ef = function (a) {
        this.o = new Map;
        this.i = new Map;
        this.g = PIXI.autoDetectRenderer({antialias: !0, transparent: !0, forceCanvas: !df});
        this.g.plugins.interaction.destroy();
        this.j = a
    }, gf = function (a) {
        var b = ff;
        return a.map(function (c) {
            return b.i.get(c)
        })
    }, ff = null, df = PIXI.utils.isWebGLSupported();
    var P = function () {
        this.T = this.T;
        this.v = this.v
    };
    P.prototype.T = !1;
    P.prototype.dispose = function () {
        this.T || (this.T = !0, this.i())
    };
    var hf = function (a, b) {
        a.T ? b() : (a.v || (a.v = []), a.v.push(b))
    };
    P.prototype.i = function () {
        if (this.v) for (; this.v.length;) this.v.shift()()
    };
    var jf = function (a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    var kf = function (a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = this.i = !1
    };
    kf.prototype.stopPropagation = function () {
        this.i = !0
    };
    kf.prototype.preventDefault = function () {
        this.defaultPrevented = !0
    };
    var lf = function (a) {
        lf[" "](a);
        return a
    };
    lf[" "] = Ia;
    var nf = function (a, b) {
        var c = mf;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var of = x("Opera"), pf = x("Trident") || x("MSIE"), qf = x("Edge"),
        rf = x("Gecko") && !(v(Yb.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
        sf = v(Yb.toLowerCase(), "webkit") && !x("Edge"), tf = function () {
            var a = t.document;
            return a ? a.documentMode : void 0
        }, uf;
    a:{
        var vf = "", wf = function () {
            var a = Yb;
            if (rf) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (qf) return /Edge\/([\d\.]+)/.exec(a);
            if (pf) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (sf) return /WebKit\/(\S+)/.exec(a);
            if (of) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        wf && (vf = wf ? wf[1] : "");
        if (pf) {
            var xf = tf();
            if (null != xf && xf > parseFloat(vf)) {
                uf = String(xf);
                break a
            }
        }
        uf = vf
    }
    var yf = uf, mf = {}, zf = function (a) {
        return nf(a, function () {
            for (var b = 0, c = Ib(String(yf)).split("."), e = Ib(String(a)).split("."), f = Math.max(c.length, e.length), g = 0; 0 == b && g < f; g++) {
                var h = c[g] || "", k = e[g] || "";
                do {
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == h[0].length && 0 == k[0].length) break;
                    b = Rb(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Rb(0 == h[2].length, 0 == k[2].length) || Rb(h[2], k[2]);
                    h = h[3];
                    k = k[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, Af;
    if (t.document && pf) {
        var Bf = tf();
        Af = Bf ? Bf : parseInt(yf, 10) || void 0
    } else Af = void 0;
    var Cf = Af;
    var Df = !pf || 9 <= Number(Cf), Ef = pf && !zf("9");
    !sf || zf("528");
    rf && zf("1.9b") || pf && zf("8") || of && zf("9.5") || sf && zf("528");
    rf && !zf("8") || pf && zf("9");
    var Ff = function () {
        if (!t.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            t.addEventListener("test", Ia, b), t.removeEventListener("test", Ia, b)
        } catch (c) {
        }
        return a
    }();
    var Hf = function (a, b) {
        kf.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.j = null;
        if (a) {
            var c = this.type = a.type, e = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            if (b = a.relatedTarget) {
                if (rf) {
                    a:{
                        try {
                            lf(b.nodeName);
                            var f = !0;
                            break a
                        } catch (g) {
                        }
                        f = !1
                    }
                    f || (b =
                        null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            e ? (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Gf[a.pointerType] || "";
            this.j = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    u(Hf, kf);
    var Gf = {2: "touch", 3: "pen", 4: "mouse"};
    Hf.prototype.stopPropagation = function () {
        Hf.mb.stopPropagation.call(this);
        this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = !0
    };
    Hf.prototype.preventDefault = function () {
        Hf.mb.preventDefault.call(this);
        var a = this.j;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, Ef) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var If = "closure_listenable_" + (1E6 * Math.random() | 0), Jf = 0;
    var Kf = function (a, b, c, e, f) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!e;
        this.qc = f;
        this.key = ++Jf;
        this.Ob = this.lc = !1
    }, Lf = function (a) {
        a.Ob = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.qc = null
    };
    var Mf = function (a) {
        this.src = a;
        this.g = {};
        this.i = 0
    };
    Mf.prototype.add = function (a, b, c, e, f) {
        var g = a.toString();
        a = this.g[g];
        a || (a = this.g[g] = [], this.i++);
        var h = Nf(a, b, e, f);
        -1 < h ? (b = a[h], c || (b.lc = !1)) : (b = new Kf(b, this.src, g, !!e, f), b.lc = c, a.push(b));
        return b
    };
    var Of = function (a, b) {
        var c = b.type;
        c in a.g && qb(a.g[c], b) && (Lf(b), 0 == a.g[c].length && (delete a.g[c], a.i--))
    }, Nf = function (a, b, c, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.Ob && g.listener == b && g.capture == !!c && g.qc == e) return f
        }
        return -1
    };
    var Pf = "closure_lm_" + (1E6 * Math.random() | 0), Qf = {}, Rf = 0, Tf = function (a, b, c, e, f) {
        if (e && e.once) return Sf(a, b, c, e, f);
        if (Array.isArray(b)) {
            for (var g = 0; g < b.length; g++) Tf(a, b[g], c, e, f);
            return null
        }
        c = Uf(c);
        return a && a[If] ? a.j.add(String(b), c, !1, Na(e) ? !!e.capture : !!e, f) : Vf(a, b, c, !1, e, f)
    }, Vf = function (a, b, c, e, f, g) {
        if (!b) throw Error("q");
        var h = Na(f) ? !!f.capture : !!f, k = Wf(a);
        k || (a[Pf] = k = new Mf(a));
        c = k.add(b, c, e, h, g);
        if (c.g) return c;
        e = Xf();
        c.g = e;
        e.src = a;
        e.listener = c;
        if (a.addEventListener) Ff || (f = h), void 0 === f && (f =
            !1), a.addEventListener(b.toString(), e, f); else if (a.attachEvent) a.attachEvent(Yf(b.toString()), e); else if (a.addListener && a.removeListener) a.addListener(e); else throw Error("r");
        Rf++;
        return c
    }, Xf = function () {
        var a = Zf, b = Df ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }, Sf = function (a, b, c, e, f) {
        if (Array.isArray(b)) {
            for (var g = 0; g < b.length; g++) Sf(a, b[g], c, e, f);
            return null
        }
        c = Uf(c);
        return a && a[If] ? a.j.add(String(b), c, !0, Na(e) ? !!e.capture : !!e,
            f) : Vf(a, b, c, !0, e, f)
    }, $f = function (a, b, c, e, f) {
        if (Array.isArray(b)) for (var g = 0; g < b.length; g++) $f(a, b[g], c, e, f); else (e = Na(e) ? !!e.capture : !!e, c = Uf(c), a && a[If]) ? (a = a.j, b = String(b).toString(), b in a.g && (g = a.g[b], c = Nf(g, c, e, f), -1 < c && (Lf(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete a.g[b], a.i--)))) : a && (a = Wf(a)) && (b = a.g[b.toString()], a = -1, b && (a = Nf(b, c, e, f)), (c = -1 < a ? b[a] : null) && ag(c))
    }, ag = function (a) {
        if ("number" !== typeof a && a && !a.Ob) {
            var b = a.src;
            if (b && b[If]) Of(b.j, a); else {
                var c = a.type, e = a.g;
                b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(Yf(c), e) : b.addListener && b.removeListener && b.removeListener(e);
                Rf--;
                (c = Wf(b)) ? (Of(c, a), 0 == c.i && (c.src = null, b[Pf] = null)) : Lf(a)
            }
        }
    }, Yf = function (a) {
        return a in Qf ? Qf[a] : Qf[a] = "on" + a
    }, cg = function (a, b, c, e) {
        var f = !0;
        if (a = Wf(a)) if (b = a.g[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var g = b[a];
            g && g.capture == c && !g.Ob && (g = bg(g, e), f = f && !1 !== g)
        }
        return f
    }, bg = function (a, b) {
        var c = a.listener, e = a.qc || a.src;
        a.lc && ag(a);
        return c.call(e,
            b)
    }, Zf = function (a, b) {
        if (a.Ob) return !0;
        if (!Df) {
            if (!b) a:{
                b = ["window", "event"];
                for (var c = t, e = 0; e < b.length; e++) if (c = c[b[e]], null == c) {
                    b = null;
                    break a
                }
                b = c
            }
            e = b;
            b = new Hf(e, this);
            c = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a:{
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (h) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = b.g; f; f = f.parentNode) e.push(f);
                a = a.type;
                for (f = e.length - 1; !b.i && 0 <= f; f--) {
                    b.g = e[f];
                    var g = cg(e[f], a, !0, b);
                    c = c && g
                }
                for (f = 0; !b.i && f < e.length; f++) b.g = e[f], g = cg(e[f], a, !1,
                    b), c = c && g
            }
            return c
        }
        return bg(a, new Hf(b, this))
    }, Wf = function (a) {
        a = a[Pf];
        return a instanceof Mf ? a : null
    }, dg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Uf = function (a) {
        if (Ma(a)) return a;
        a[dg] || (a[dg] = function (b) {
            return a.handleEvent(b)
        });
        return a[dg]
    };
    var eg = function () {
        P.call(this);
        this.j = new Mf(this);
        this.Ya = this;
        this.wa = null
    };
    u(eg, P);
    eg.prototype[If] = !0;
    eg.prototype.addEventListener = function (a, b, c, e) {
        Tf(this, a, b, c, e)
    };
    eg.prototype.removeEventListener = function (a, b, c, e) {
        $f(this, a, b, c, e)
    };
    var gg = function (a, b) {
        var c, e = a.wa;
        if (e) for (c = []; e; e = e.wa) c.push(e);
        a = a.Ya;
        e = b.type || b;
        if ("string" === typeof b) b = new kf(b, a); else if (b instanceof kf) b.target = b.target || a; else {
            var f = b;
            b = new kf(e, a);
            yb(b, f)
        }
        f = !0;
        if (c) for (var g = c.length - 1; !b.i && 0 <= g; g--) {
            var h = b.g = c[g];
            f = fg(h, e, !0, b) && f
        }
        b.i || (h = b.g = a, f = fg(h, e, !0, b) && f, b.i || (f = fg(h, e, !1, b) && f));
        if (c) for (g = 0; !b.i && g < c.length; g++) h = b.g = c[g], f = fg(h, e, !1, b) && f
    };
    eg.prototype.i = function () {
        eg.mb.i.call(this);
        if (this.j) {
            var a = this.j, b = 0, c;
            for (c in a.g) {
                for (var e = a.g[c], f = 0; f < e.length; f++) ++b, Lf(e[f]);
                delete a.g[c];
                a.i--
            }
        }
        this.wa = null
    };
    var fg = function (a, b, c, e) {
        b = a.j.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.Ob && h.capture == c) {
                var k = h.listener, l = h.qc || h.src;
                h.lc && Of(a.j, h);
                f = !1 !== k.call(l, e) && f
            }
        }
        return f && !e.defaultPrevented
    };
    var hg = function () {
    };
    hg.prototype.g = null;
    hg.prototype.getOptions = function () {
        var a;
        (a = this.g) || (a = {}, ig(this) && (a[0] = !0, a[1] = !0), a = this.g = a);
        return a
    };
    var jg, kg = function () {
    };
    u(kg, hg);
    var lg = function (a) {
        return (a = ig(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, ig = function (a) {
        if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var e = b[c];
                try {
                    return new ActiveXObject(e), a.i = e
                } catch (f) {
                }
            }
            throw Error("s");
        }
        return a.i
    };
    jg = new kg;
    var mg = function (a, b) {
        this.j = a;
        this.o = b;
        this.i = 0;
        this.g = null
    };
    mg.prototype.get = function () {
        if (0 < this.i) {
            this.i--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.j();
        return a
    };
    var ng = function (a, b) {
        a.o(b);
        100 > a.i && (a.i++, b.next = a.g, a.g = b)
    };
    var og = !rf && !pf || pf && 9 <= Number(Cf) || rf && zf("1.9.1");
    pf && zf("9");
    var qg = function (a, b) {
        wb(b, function (c, e) {
            c && "object" == typeof c && c.Ib && (c = c.Gb());
            "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : pg.hasOwnProperty(e) ? a.setAttribute(pg[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c
        })
    }, pg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }, rg = function (a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }, sg = function () {
        this.g = t.document || document
    };
    sg.prototype.removeChildren = function (a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    sg.prototype.Fe = function () {
        return og && void 0 != (void 0).children ? (void 0).children : lb((void 0).childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    sg.prototype.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var tg = function (a) {
        t.setTimeout(function () {
            throw a;
        }, 0)
    }, ug, vg = function () {
        var a = t.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function () {
            var f = rg(document, "IFRAME");
            f.style.display = "none";
            f.src = Hb(new Gb(Eb, Cb(Db))).toString();
            document.documentElement.appendChild(f);
            var g = f.contentWindow;
            f = g.document;
            f.open();
            f.write(cc(fc));
            f.close();
            var h = "callImmediate" + Math.random(), k = "file:" == g.location.protocol ? "*" : g.location.protocol +
                "//" + g.location.host;
            f = Qa(function (l) {
                if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
            }, this);
            g.addEventListener("message", f, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    g.postMessage(h, k)
                }
            }
        });
        if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {
            var b = new a, c = {}, e = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var f = c.cb;
                    c.cb = null;
                    f()
                }
            };
            return function (f) {
                e.next = {cb: f};
                e = e.next;
                b.port2.postMessage(0)
            }
        }
        return function (f) {
            t.setTimeout(f, 0)
        }
    };
    var wg = function () {
        this.i = this.g = null
    }, yg = new mg(function () {
        return new xg
    }, function (a) {
        a.reset()
    });
    wg.prototype.add = function (a, b) {
        var c = yg.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.g = c;
        this.i = c
    };
    var Ag = function () {
        var a = zg, b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.i = null), b.next = null);
        return b
    }, xg = function () {
        this.next = this.i = this.g = null
    };
    xg.prototype.set = function (a, b) {
        this.g = a;
        this.i = b;
        this.next = null
    };
    xg.prototype.reset = function () {
        this.next = this.i = this.g = null
    };
    var Eg = function (a, b) {
        Bg || Cg();
        Dg || (Bg(), Dg = !0);
        zg.add(a, b)
    }, Bg, Cg = function () {
        if (t.Promise && t.Promise.resolve) {
            var a = t.Promise.resolve(void 0);
            Bg = function () {
                a.then(Fg)
            }
        } else Bg = function () {
            var b = Fg;
            !Ma(t.setImmediate) || t.Window && t.Window.prototype && !x("Edge") && t.Window.prototype.setImmediate == t.setImmediate ? (ug || (ug = vg()), ug(b)) : t.setImmediate(b)
        }
    }, Dg = !1, zg = new wg, Fg = function () {
        for (var a; a = Ag();) {
            try {
                a.g.call(a.i)
            } catch (b) {
                tg(b)
            }
            ng(yg, a)
        }
        Dg = !1
    };
    var Gg = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Ig = function (a) {
        this.g = 0;
        this.v = void 0;
        this.j = this.i = this.Ea = null;
        this.o = this.s = !1;
        if (a != Ia) try {
            var b = this;
            a.call(void 0, function (c) {
                Hg(b, 2, c)
            }, function (c) {
                Hg(b, 3, c)
            })
        } catch (c) {
            Hg(this, 3, c)
        }
    }, Jg = function () {
        this.next = this.j = this.i = this.o = this.g = null;
        this.s = !1
    };
    Jg.prototype.reset = function () {
        this.j = this.i = this.o = this.g = null;
        this.s = !1
    };
    var Kg = new mg(function () {
        return new Jg
    }, function (a) {
        a.reset()
    }), Lg = function (a, b, c) {
        var e = Kg.get();
        e.o = a;
        e.i = b;
        e.j = c;
        return e
    };
    Ig.prototype.then = function (a, b, c) {
        return Mg(this, Ma(a) ? a : null, Ma(b) ? b : null, c)
    };
    Ig.prototype.$goog_Thenable = !0;
    Ig.prototype.cancel = function (a) {
        if (0 == this.g) {
            var b = new Ng(a);
            Eg(function () {
                Og(this, b)
            }, this)
        }
    };
    var Og = function (a, b) {
        if (0 == a.g) if (a.Ea) {
            var c = a.Ea;
            if (c.i) {
                for (var e = 0, f = null, g = null, h = c.i; h && (h.s || (e++, h.g == a && (f = h), !(f && 1 < e))); h = h.next) f || (g = h);
                f && (0 == c.g && 1 == e ? Og(c, b) : (g ? (e = g, e.next == c.j && (c.j = e), e.next = e.next.next) : Pg(c), Qg(c, f, 3, b)))
            }
            a.Ea = null
        } else Hg(a, 3, b)
    }, Sg = function (a, b) {
        a.i || 2 != a.g && 3 != a.g || Rg(a);
        a.j ? a.j.next = b : a.i = b;
        a.j = b
    }, Mg = function (a, b, c, e) {
        var f = Lg(null, null, null);
        f.g = new Ig(function (g, h) {
            f.o = b ? function (k) {
                try {
                    var l = b.call(e, k);
                    g(l)
                } catch (m) {
                    h(m)
                }
            } : g;
            f.i = c ? function (k) {
                try {
                    var l =
                        c.call(e, k);
                    void 0 === l && k instanceof Ng ? h(k) : g(l)
                } catch (m) {
                    h(m)
                }
            } : h
        });
        f.g.Ea = a;
        Sg(a, f);
        return f.g
    };
    Ig.prototype.T = function (a) {
        this.g = 0;
        Hg(this, 2, a)
    };
    Ig.prototype.U = function (a) {
        this.g = 0;
        Hg(this, 3, a)
    };
    var Hg = function (a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a:{
                var e = c, f = a.T, g = a.U;
                if (e instanceof Ig) {
                    Sg(e, Lg(f || Ia, g || null, a));
                    var h = !0
                } else if (Gg(e)) e.then(f, g, a), h = !0; else {
                    if (Na(e)) try {
                        var k = e.then;
                        if (Ma(k)) {
                            Tg(e, k, f, g, a);
                            h = !0;
                            break a
                        }
                    } catch (l) {
                        g.call(a, l);
                        h = !0;
                        break a
                    }
                    h = !1
                }
            }
            h || (a.v = c, a.g = b, a.Ea = null, Rg(a), 3 != b || c instanceof Ng || Ug(a, c))
        }
    }, Tg = function (a, b, c, e, f) {
        var g = !1, h = function (l) {
            g || (g = !0, c.call(f, l))
        }, k = function (l) {
            g || (g = !0, e.call(f, l))
        };
        try {
            b.call(a,
                h, k)
        } catch (l) {
            k(l)
        }
    }, Rg = function (a) {
        a.s || (a.s = !0, Eg(a.H, a))
    }, Pg = function (a) {
        var b = null;
        a.i && (b = a.i, a.i = b.next, b.next = null);
        a.i || (a.j = null);
        return b
    };
    Ig.prototype.H = function () {
        for (var a; a = Pg(this);) Qg(this, a, this.g, this.v);
        this.s = !1
    };
    var Qg = function (a, b, c, e) {
        if (3 == c && b.i && !b.s) for (; a && a.o; a = a.Ea) a.o = !1;
        if (b.g) b.g.Ea = null, Vg(b, c, e); else try {
            b.s ? b.o.call(b.j) : Vg(b, c, e)
        } catch (f) {
            Wg.call(null, f)
        }
        ng(Kg, b)
    }, Vg = function (a, b, c) {
        2 == b ? a.o.call(a.j, c) : a.i && a.i.call(a.j, c)
    }, Ug = function (a, b) {
        a.o = !0;
        Eg(function () {
            a.o && Wg.call(null, b)
        })
    }, Wg = tg, Ng = function (a) {
        cb.call(this, a)
    };
    u(Ng, cb);
    Ng.prototype.name = "cancel";
    var Xg = function (a, b, c) {
        if (Ma(a)) c && (a = Qa(a, c)); else if (a && "function" == typeof a.handleEvent) a = Qa(a.handleEvent, a); else throw Error("t");
        return 2147483647 < Number(b) ? -1 : t.setTimeout(a, b || 0)
    };
    var Yg = function (a) {
        eg.call(this);
        this.headers = new kc;
        this.ha = a || null;
        this.Sa = !1;
        this.U = this.g = null;
        this.va = "";
        this.o = this.ta = this.s = this.ka = !1;
        this.Ga = 0;
        this.H = null;
        this.ya = "";
        this.Ja = this.Pa = !1
    };
    u(Yg, eg);
    var Zg = /^https?$/i, $g = ["POST", "PUT"], ah = [], ch = function (a, b) {
        var c = new Yg;
        ah.push(c);
        b && c.j.add("complete", b, !1, void 0, void 0);
        c.j.add("ready", c.Za, !0, void 0, void 0);
        bh(c, a, void 0, void 0, void 0);
        return c
    };
    Yg.prototype.Za = function () {
        this.dispose();
        qb(ah, this)
    };
    var bh = function (a, b, c, e, f) {
        if (a.g) throw Error("u`" + a.va + "`" + b);
        c = c ? c.toUpperCase() : "GET";
        a.va = b;
        a.ka = !1;
        a.Sa = !0;
        a.g = a.ha ? lg(a.ha) : lg(jg);
        a.U = a.ha ? a.ha.getOptions() : jg.getOptions();
        a.g.onreadystatechange = Qa(a.Ka, a);
        try {
            a.ta = !0, a.g.open(c, String(b), !0), a.ta = !1
        } catch (h) {
            dh(a);
            return
        }
        b = e || "";
        var g = a.headers.clone();
        f && oc(f, function (h, k) {
            g.set(k, h)
        });
        f = pb(g.ab());
        e = t.FormData && b instanceof t.FormData;
        !(0 <= jb($g, c)) || f || e || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function (h,
                            k) {
            this.g.setRequestHeader(k, h)
        }, a);
        a.ya && (a.g.responseType = a.ya);
        "withCredentials" in a.g && a.g.withCredentials !== a.Pa && (a.g.withCredentials = a.Pa);
        try {
            eh(a), 0 < a.Ga && (a.Ja = fh(a.g), a.Ja ? (a.g.timeout = a.Ga, a.g.ontimeout = Qa(a.Xa, a)) : a.H = Xg(a.Xa, a.Ga, a)), a.s = !0, a.g.send(b), a.s = !1
        } catch (h) {
            dh(a)
        }
    }, fh = function (a) {
        return pf && zf(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }, ob = function (a) {
        return "content-type" == a.toLowerCase()
    };
    Yg.prototype.Xa = function () {
        "undefined" != typeof Fa && this.g && (gg(this, "timeout"), this.abort(8))
    };
    var dh = function (a) {
        a.Sa = !1;
        a.g && (a.o = !0, a.g.abort(), a.o = !1);
        gh(a);
        hh(a)
    }, gh = function (a) {
        a.ka || (a.ka = !0, gg(a, "complete"), gg(a, "error"))
    };
    Yg.prototype.abort = function () {
        this.g && this.Sa && (this.Sa = !1, this.o = !0, this.g.abort(), this.o = !1, gg(this, "complete"), gg(this, "abort"), hh(this))
    };
    Yg.prototype.i = function () {
        this.g && (this.Sa && (this.Sa = !1, this.o = !0, this.g.abort(), this.o = !1), hh(this, !0));
        Yg.mb.i.call(this)
    };
    Yg.prototype.Ka = function () {
        this.T || (this.ta || this.s || this.o ? ih(this) : this.Ra())
    };
    Yg.prototype.Ra = function () {
        ih(this)
    };
    var ih = function (a) {
        if (a.Sa && "undefined" != typeof Fa && (!a.U[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != jh(a))) if (a.s && 4 == (a.g ? a.g.readyState : 0)) Xg(a.Ka, 0, a); else if (gg(a, "readystatechange"), 4 == (a.g ? a.g.readyState : 0)) {
            a.Sa = !1;
            try {
                kh(a) ? (gg(a, "complete"), gg(a, "success")) : gh(a)
            } finally {
                hh(a)
            }
        }
    }, hh = function (a, b) {
        if (a.g) {
            eh(a);
            var c = a.g, e = a.U[0] ? Ia : null;
            a.g = null;
            a.U = null;
            b || gg(a, "ready");
            try {
                c.onreadystatechange = e
            } catch (f) {
            }
        }
    }, eh = function (a) {
        a.g && a.Ja && (a.g.ontimeout = null);
        a.H && (t.clearTimeout(a.H), a.H = null)
    };
    Yg.prototype.isActive = function () {
        return !!this.g
    };
    var kh = function (a) {
        var b = jh(a);
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
            if (b = 0 === b) a = String(a.va).match(pc)[1] || null, !a && t.self && t.self.location && (a = t.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Zg.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }, jh = function (a) {
        try {
            return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }, lh = function (a) {
        try {
            return a.g ? a.g.responseXML : null
        } catch (b) {
            return null
        }
    };
    var mh = function (a) {
        Xa.call(this, a);
        this.o = this.g = this.v = null
    };
    p(mh, Xa);
    mh.prototype.preload = function () {
        var a = this;
        this.v || this.g || (this.g = ch(this.Tb, function () {
            return a.i()
        }))
    };
    mh.prototype.i = function () {
        var a = this;
        this.g && kh(this.g) && (this.v = lh(this.g), this.g.dispose(), this.g = null, this.o = new Image, this.o.onload = function () {
            return Xa.prototype.i.call(a)
        }, this.o.src = "data:image/svg+xml;utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(this.v)))
    };
    mh.prototype.unload = function () {
        Xa.prototype.unload.call(this);
        this.o = this.v = null;
        this.g && (this.g.abort(), this.g.dispose(), this.g = null)
    };
    mh.prototype.Wb = function () {
        return this.o
    };
    var nh = function (a, b) {
        this.g = b.map(function (c) {
            return new mh(a + c)
        })
    };
    nh.prototype.preload = function (a, b) {
        var c = oh(this, a);
        return (new Promise(function (e) {
            Ya(c, e);
            c.preload()
        })).then(function () {
            return b && b()
        })
    };
    var oh = function (a, b) {
        return "number" == typeof b ? a.g[b] : a.g[b[0]]
    };
    nh.prototype.Fb = function (a) {
        return a[4]
    };
    nh.prototype.Hb = function (a) {
        return a[3]
    };
    nh.prototype.unload = function (a) {
        oh(this, a).unload()
    };
    var ph = function () {
    };
    ph.prototype.g = function () {
    };
    var qh = null;
    var Q = function (a, b, c) {
        N.call(this, void 0 === a ? 0 : a, void 0 === b ? 0 : b, void 0 === c ? 0 : c);
        this.Ja = !0;
        this.Td = 0
    };
    p(Q, N);
    Q.prototype.Vb = function (a) {
        return this.Ja ? this.Td : N.prototype.Vb.call(this, a)
    };
    Q.prototype.wa = function (a) {
        this.Ja = a
    };
    Q.prototype.Xb = function (a) {
        if (!this.Ja) return N.prototype.Xb.call(this, a);
        this.Td = Xe(a, I(this)).V;
        var b = I(this), c = we(this);
        c = void 0 === c ? 1 : c;
        if (a.s(b)) a = null; else if (b = Xe(a, b), c = void 0 === c ? 1 : c, a.o(b)) a = null; else {
            var e = Math.abs(a.i / b.V);
            a = new Je(e * c, 0, 0, e * c, e * b.x + a.g.width / 2, -1 * e * b.y + a.g.height / 2)
        }
        this.yc(a);
        return !!a
    };
    Q.prototype.Wa = function () {
    };
    var sh = function (a, b, c) {
        var e = void 0 === c ? {} : c;
        c = void 0 === e.fillStyle ? null : e.fillStyle;
        var f = void 0 === e.strokeStyle ? null : e.strokeStyle;
        e = void 0 === e.lineWidth ? .1 : e.lineWidth;
        N.call(this, a);
        this.o = b || rh();
        this.v = this.o.map(function (g) {
            return g.clone()
        });
        this.j = !0;
        this.g = [];
        this.T = [];
        this.H = [];
        this.ya = c;
        this.Ga = !!c;
        this.wa = f;
        this.U = !!f;
        this.ka = e;
        this.ha = !0;
        this.ta = 0;
        this.va = !1
    };
    p(sh, N);
    d = sh.prototype;
    d.isVisible = function (a) {
        return 3 <= this.g.length && N.prototype.isVisible.call(this, a)
    };
    d.Vb = function (a) {
        this.ha && (this.ta = mb(this.T, function (b, c) {
            return Math.max(b, c.V)
        }, Xe(a, I(this)).V));
        return this.ta
    };
    d.Pb = function (a) {
        N.prototype.Pb.call(this, a);
        this.j = a || this.j
    };
    d.Zb = function (a) {
        N.prototype.Zb.call(this, a);
        this.j = a || this.j
    };
    d.Xb = function (a) {
        this.T = [];
        this.H = [];
        this.g = [];
        var b = !!this.wa;
        if (this.j) {
            for (var c = we(this), e = I(this), f = 0; f < this.o.length; f++) this.v[f].x = this.o[f].x * c + e.x, this.v[f].y = this.o[f].y * c + e.y, this.v[f].V = this.o[f].V * c + e.V;
            this.j = !1
        }
        c = n(this.v);
        for (e = c.next(); !e.done; e = c.next()) if (e = Xe(a, e.value, !1), 0 != e.V) {
            if (0 > e.V) {
                f = e.clone();
                f = f.scale(1 / re(f));
                var g = (.05 - e.V) / -f.V;
                e.y += f.y * g;
                e.x += f.x * g;
                e.V = .05
            }
            this.T.push(e);
            b && this.H.push(Math.abs(a.i / e.V));
            f = Math.abs(a.i / e.V);
            this.g.push(new D(f * e.x + a.g.width / 2, -1 *
                f * e.y + a.g.height / 2))
        }
        this.ha = !0;
        return 0 < this.g.length
    };
    d.Ce = function () {
        if (this.g.length) {
            for (var a = Number.MAX_SAFE_INTEGER, b = Number.MAX_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, e = Number.MIN_SAFE_INTEGER, f = n(this.g), g = f.next(); !g.done; g = f.next()) g = g.value, a = Math.min(g.x, a), c = Math.max(g.x, c), b = Math.min(g.y, b), e = Math.max(g.y, e);
            c = Math.abs(c - a);
            e = Math.abs(e - b);
            this.s.i = a;
            this.s.g = b;
            this.s.width = c;
            this.s.height = e;
            bf(this.s)
        }
    };
    d.Wa = function (a) {
        a.beginPath();
        this.U && (a.strokeStyle = this.wa);
        if (this.va && 2 < this.g.length) {
            var b = (this.g[0].x + this.g[1].x) / 2, c = (this.g[0].y + this.g[1].y) / 2;
            a.moveTo(b, c);
            for (var e = 1; e < this.g.length - 1; e++) {
                var f = this.g[e], g = this.g[e + 1];
                a.quadraticCurveTo(f.x, f.y, (f.x + g.x) / 2, (f.y + g.y) / 2);
                this.U && (a.lineWidth = this.ka * this.H[e], a.stroke(), a.beginPath(), a.moveTo(Math.round(f.x), Math.round(f.y)))
            }
            a.quadraticCurveTo(this.g[0].x, this.g[0].y, b, c)
        } else for (b = 0; b < this.g.length; b++) c = this.g[b], a.lineTo(Math.round(c.x),
            Math.round(c.y)), this.U && (a.lineWidth = this.ka * this.H[b], a.stroke(), a.beginPath(), a.moveTo(Math.round(c.x), Math.round(c.y)));
        this.Ga && (a.closePath(), a.fillStyle = this.ya, a.fill())
    };
    var rh = function () {
        var a = new F(1, 1, 0);
        return a.x ? [new F(-a.x / 2, -a.y / 2, -a.V / 2), new F(a.x / 2, -a.y / 2, -a.V / 2), new F(a.x / 2, a.y / 2, a.V / 2), new F(-a.x / 2, a.y / 2, a.V / 2), new F(-a.x / 2, -a.y / 2, -a.V / 2)] : [new F(0, -a.y / 2, -a.V / 2), new F(0, a.y / 2, -a.V / 2), new F(0, a.y / 2, a.V / 2), new F(0, -a.y / 2, a.V / 2), new F(0, -a.y / 2, -a.V / 2)]
    }, th = function (a) {
        var b = 8, c = 2 * Math.PI;
        b = void 0 === b ? 22 : b;
        var e = [], f = a instanceof E ? a.width : a;
        a = a instanceof E ? a.height : a;
        for (var g = 0; g <= b; g++) e.push(new F(f * Math.cos((c - 0) * g / b), 0, a * Math.sin((c - 0) * g / b)));
        return e
    };
    var uh = function (a) {
        sh.call(this, new F(0, 0, 0), th(new E(a, a)), {fillStyle: "#000"});
        this.va = !0;
        this.Ha(.12)
    };
    p(uh, sh);
    uh.prototype.Wa = function (a) {
        var b = this.s;
        3 > b.height ? (a.fillStyle = "#000", a.fillRect(b.i, b.g, b.width, b.height)) : sh.prototype.Wa.call(this, a)
    };
    var vh = [0, 0, 0, 0, 0, 0], S = function (a, b, c, e) {
        a = void 0 === a ? vh : a;
        Q.call(this, void 0 === b ? 0 : b, void 0 === c ? 0 : c, void 0 === e ? 0 : e);
        this.H = (this.g = "number" == typeof a[0] ? null : a) ? this.g[0] : a;
        this.j = this.ha = 0;
        this.ta = !1;
        this.yb = !0;
        this.T = this.bc = !1;
        this.ya = new E(1, 1);
        this.U = new E(0, 0);
        this.rb = new E(0, 0);
        this.Pa = !1;
        R(this, 0, -.5);
        wh(this);
        this.Ka = null
    };
    p(S, Q);
    S.prototype.Jb = function () {
    };
    S.prototype.Ua = function (a) {
        this.H = (this.g = "number" == typeof a[0] ? null : a) ? this.g[0] : a;
        this.ha = this.j = 0;
        wh(this)
    };
    S.prototype.getSize = function () {
        var a = Q.prototype.getSize.call(this);
        return new E(a.width * this.ya.width, a.height * this.ya.height)
    };
    var wh = function (a) {
        var b = a.Ja ? Fe : 1;
        a.setSize(b * a.Jb().Hb(a.H), b * a.Jb().Fb(a.H))
    }, R = function (a, b, c) {
        a.U.width = b;
        a.U.height = c;
        a.Ya.x = -1 * (a.Pa ? -1 : 1) * b + .5;
        a.Ya.y = -c + .5
    };
    S.prototype.wa = function (a) {
        Q.prototype.wa.call(this, a);
        wh(this)
    };
    S.prototype.Ma = function (a, b) {
        b = void 0 == b ? a : b;
        var c = Q.prototype.getSize.call(this);
        a = Math.min(a / c.width, b / c.height);
        this.ya.width = a;
        this.ya.height = a
    };
    var xh = function (a) {
        a.ta = !0;
        a.j = a.T ? a.g.length - 1 : 0;
        a.ha = 0;
        a.g && (a.H = a.g[a.j])
    };
    S.prototype.resume = function () {
        this.ta = !0
    };
    S.prototype.setLoop = function (a) {
        this.yb = a
    };
    var yh = function (a) {
        return !a.T && a.j >= a.g.length - 1 || a.T && 0 >= a.j ? (a.ta = a.ta && a.yb, a.bc ? a.yb ? (a.T = !a.T, a.T ? a.g.length - 1 : 0) : a.j : 0) : a.j + (a.T ? -1 : 1)
    }, zh = function (a) {
        return a.g ? a.g.length : 1
    };
    d = S.prototype;
    d.getDuration = function () {
        return this.g ? 42 * this.g.length : 0
    };
    d.reset = function () {
        this.j = this.T ? this.g.length - 1 : 0;
        this.ha = 0;
        this.H = this.g[this.j];
        this.ta = !1
    };
    d.update = function (a) {
        Q.prototype.update.call(this, a);
        this.ta && (this.ha += a, this.g && 42 < this.ha && (this.ha -= 42, this.j = yh(this), this.H = this.g[this.j]))
    };
    d.xc = function (a) {
        a && !this.Ka && (this.Ka = new uh(this.getSize().width / 2), this.addChild(this.Ka));
        this.Ka && this.Ka.Ba(a)
    };
    d.Wa = function (a) {
        Q.prototype.Wa.call(this, a);
        var b = this.getSize();
        this.Mc(a, this.rb.width + this.U.width * b.width, -this.rb.height + this.U.height * b.height, b.width, b.height, this.Pa)
    };
    d.Mc = function () {
    };
    var T = function (a) {
        S.call(this, a);
        this.ka = new PIXI.Container;
        this.ka.visible = !1;
        this.va = new PIXI.Container;
        this.va.scale.set(Fe, Fe);
        this.v = this.o = null;
        this.Ga = [];
        this.Vd = [];
        this.Ra = new PIXI.Sprite;
        this.Ra.anchor.set(.5);
        this.ka.addChild(this.va);
        this.va.addChild(this.Ra);
        this.Sd = this.j;
        Ah(this, a);
        Bh(this)
    };
    p(T, S);
    var Ah = function (a, b) {
        var c;
        1 < zh(a) ? c = gf(b) : c = [ff.i.get(b)];
        a.Ga = c;
        a.o && Ch(a)
    }, Ch = function (a) {
        a.Vd = a.Ga.map(function (b) {
            if (Dh.has(b)) return Dh.get(b);
            var c = b.width, e = b.height;
            a.v.texture = b;
            a.v.position.x = c / 2;
            a.v.position.y = e / 2;
            c = PIXI.RenderTexture.create({width: c, height: e});
            ff.g.render(a.v, c);
            Dh.set(b, c);
            return c
        })
    };
    T.prototype.Na = function () {
        return this.ka
    };
    var Bh = function (a) {
        var b = a.j;
        a.Ra.texture = a.Ga[b];
        a.o && (a.o.texture = a.Vd[b]);
        a.Sd = b
    };
    d = T.prototype;
    d.kc = function () {
        var a = this.Na(), b = a.parent;
        b && b.setChildIndex(a, b.children.length - 1)
    };
    d.wc = function () {
        var a = this.Na(), b = a.parent;
        b && b.setChildIndex(a, 0)
    };
    d.update = function (a) {
        S.prototype.update.call(this, a);
        1 != this.Ga.length && this.j != this.Sd && Bh(this)
    };
    d.xc = function (a) {
        df && (a ? (this.v = new PIXI.heaven.Sprite, this.v.color.setLight(.56, .56, .39), this.v.color.setDark(.56, .56, .39), this.v.anchor.x = .5, this.v.anchor.y = .5, this.v.scale.set(.95), a = new PIXI.filters.BlurFilter(4), a.padding = 200, this.v.filters = [a], Ch(this), this.o = new PIXI.Sprite, this.o.scale.set(1 + 7 / this.Ga[0].width), this.o.anchor.set(.5), this.o.position.set(-5, 5), this.o.alpha = .7, this.va.addChildAt(this.o, 0), Bh(this)) : (this.o && this.va.removeChild(this.o), this.v = this.o = null))
    };
    d.Ae = function () {
        this.Ra.rotation = Ze(this);
        this.o && (this.o.rotation = Ze(this))
    };
    d.Ha = function (a) {
        S.prototype.Ha.call(this, a);
        this.va.alpha = a
    };
    d.Ba = function (a) {
        S.prototype.Ba.call(this, a);
        this.ka.visible = a;
        this.ka.renderable = a
    };
    d.Jb = function () {
        return qh.g()
    };
    d.Ua = function (a) {
        S.prototype.Ua.call(this, a);
        Ah(this, a);
        Bh(this)
    };
    d.yc = function (a) {
        S.prototype.yc.call(this, a);
        a && this.ka.setTransform(a.s, a.v, a.g, a.i, 0)
    };
    d.Nb = function (a) {
        a = S.prototype.Nb.call(this, a);
        return this.ka.visible = a
    };
    d.Mc = function (a, b, c, e, f, g) {
        a = g ? -1 : 1;
        this.va.setTransform(a * b, c, a * Fe * this.ya.width, Fe * this.ya.height, 0)
    };
    var Eh = function (a) {
        S.prototype.Da.call(a);
        a.Na() && a.Na().destroy({children: !0})
    }, Dh = new Map;
    var Fh = function (a) {
        return new F(a.x, a.y, 0)
    };
    var Gh = function (a, b, c, e, f, g, h, k) {
        this.g = a;
        this.s = b;
        this.j = c;
        this.v = e;
        this.o = f;
        this.H = g;
        this.i = h;
        this.T = k
    };
    Gh.prototype.clone = function () {
        return new Gh(this.g, this.s, this.j, this.v, this.o, this.H, this.i, this.T)
    };
    var Hh = function (a, b) {
        if (0 == b) return a.g;
        if (1 == b) return a.i;
        var c = y(a.g, a.j, b), e = y(a.j, a.o, b);
        a = y(a.o, a.i, b);
        c = y(c, e, b);
        e = y(e, a, b);
        return y(c, e, b)
    }, Ih = function (a, b) {
        if (0 == b) return a.s;
        if (1 == b) return a.T;
        var c = y(a.s, a.v, b), e = y(a.v, a.H, b);
        a = y(a.H, a.T, b);
        c = y(c, e, b);
        e = y(e, a, b);
        return y(c, e, b)
    };
    Gh.prototype.Ca = function () {
        return new D(Hh(this, void 0), Ih(this, void 0))
    };
    var Jh = function (a, b) {
        var c = (b - a.g) / (a.i - a.g);
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var e = 0, f = 1, g = 0, h = 0; 8 > h; h++) {
            g = Hh(a, c);
            var k = (Hh(a, c + 1E-6) - g) / 1E-6;
            if (1E-6 > Math.abs(g - b)) return c;
            if (1E-6 > Math.abs(k)) break; else g < b ? e = c : f = c, c -= (g - b) / k
        }
        for (h = 0; 1E-6 < Math.abs(g - b) && 8 > h; h++) g < b ? (e = c, c = (c + f) / 2) : (f = c, c = (c + e) / 2), g = Hh(a, c);
        return c
    };
    var Kh = function (a, b, c) {
        var e = new Gh(0, 0, a, b, c, 1, 1, 1);
        return function (f) {
            return Ih(e, Jh(e, f))
        }
    }, Lh = Kh(.25, .1, .25), Mh = function (a) {
        return a
    }, Nh = Kh(0, 0, .6);
    var U = function (a, b, c, e, f) {
        f = void 0 === f ? {} : f;
        var g = void 0 === f.Ie ? y : f.Ie, h = void 0 === f.Ia ? Mh : f.Ia, k = void 0 === f.Ge ? void 0 : f.Ge;
        Ae.call(this, a, null, void 0 === f.Oa ? function () {
        } : f.Oa);
        this.T = e;
        this.o = k;
        this.g = b;
        if (null === this.g && void 0 === this.o) throw Error("v");
        this.U = c;
        this.v = g;
        this.H = h
    };
    p(U, Ae);
    U.prototype.onStart = function () {
        null === this.g && (this.g = this.o())
    };
    U.prototype.Rc = function () {
        this.T(this.v(this.g, this.U, this.H(jc(this.i / this.j, 0, 1))))
    };
    var Oh = function (a) {
        O.call(this);
        ff.j.addChild(this.Na());
        this.g = new T(Cd);
        this.g.Ma(a);
        R(this.g, 0, -.3);
        xh(this.g);
        this.g.xc(!0);
        this.addChild(this.g);
        this.Pa = .4;
        this.H = 0;
        this.o = null;
        this.wa = 0;
        this.Ja = !1;
        this.ha = new J;
        this.addChild(this.ha)
    };
    p(Oh, O);
    Oh.prototype.update = function (a) {
        this.wa += a;
        R(this.g, 0, -.3 + .05 * Math.sin(this.wa / 1E3));
        this.kc();
        this.g.kc();
        var b = this.va();
        if (b) {
            var c = this.Ca(), e = se(b, c), f = c.x - b.x, g = c.y - b.y;
            b = c.V - b.V;
            f = Math.min(20, Math.sqrt(f * f + g * g + b * b) / this.Pa);
            e = 180 * Math.atan2(e.y, e.x) / Math.PI * Math.PI / 180;
            e = new F(f * Math.cos(e), f * Math.sin(e), 0);
            a /= 1E3;
            this.o = e = new F(e.x * a, e.y * a, e.V * a);
            -.05 > this.o.x ? Ph(this, 1) : .05 < this.o.x && Ph(this, 0);
            this.Aa(this.Ca().add(this.o))
        } else this.o = null
    };
    Oh.prototype.va = function () {
        return null
    };
    Oh.prototype.Ua = function (a, b) {
        this.g.Ua(a);
        this.g.setLoop(b);
        xh(this.g)
    };
    var Ph = function (a, b) {
        if (b != a.H && (a.H = b, a.ha.g = [], !a.Ja)) {
            var c = (b = 0 == a.H) ? Cd : Fd;
            a.Ua(b ? Dd : Ed, !1);
            K(a.ha, a.g.getDuration(), function () {
                a.Ua(c, !0)
            })
        }
    };
    var Qh = function () {
        this.i = [];
        this.g = new Map
    }, Rh = function (a, b, c) {
        b = a.g.get(b) || [];
        for (var e = [].concat(ma(a.i), ma(b)), f = 0; f < e.length; f++) -1 == a.i.indexOf(e[f]) && -1 == b.indexOf(e[f]) || e[f].tc.addListener(c)
    };
    Qh.prototype.addListener = function (a, b) {
        void 0 === b ? this.i.push(a) : (this.g.has(b) || this.g.set(b, []), this.g.get(b).push(a))
    };
    Qh.prototype.removeListener = function (a, b) {
        if (void 0 !== b) Sh(a, this.g.get(b) || []); else {
            Sh(a, this.i);
            b = n(this.g.values());
            for (var c = b.next(); !c.done; c = b.next()) Sh(a, c.value)
        }
    };
    var Sh = function (a, b) {
        for (var c = b.indexOf(a); -1 != c;) b.splice(c, 1), c = b.indexOf(a)
    };
    Ja(Qh);
    var Th = "Fact2 Fact3 Fact5 Fact6 Fact7 Fact8 Fact9 Fact10 Fact11 Fact12 Fact13 Fact14 Fact15 Fact16 Fact17 Fact18 Fact19 Fact20 Fact21 Fact22 Fact24 Fact26 Fact28".split(" ");
    var Uh = function (a, b) {
        this.s = a;
        this.o = b;
        this.j = this.g = null;
        this.H = this.v = !1;
        this.T = [];
        this.i = null
    }, Zh = function (a) {
        var b = V.Fa();
        if (Vh && !b.g) {
            b.g = new (window.AudioContext || window.webkitAudioContext);
            b.j = b.g.createGain();
            b.j.connect(b.g.destination);
            for (var c in b.s) b.s[c].o = b.g;
            for (var e in b.o) Wh(b.o[e], b.g, b.j);
            b.g.onstatechange = function () {
                Xh(b)
            };
            Xh(b);
            Yh(b);
            Sf(a, ["click", "pointerup", "mouseup", "touchend"], function () {
                b.g.resume();
                Yh(b)
            }, !0)
        }
    }, Xh = function (a) {
        if ("running" == a.g.state && !a.H) {
            a.H = !0;
            for (var b =
                0; b < a.T.length; b++) a.T[b]()
        }
    }, $h = function (a) {
        a.i = a.g.createBufferSource();
        a.i.buffer = a.g.createBuffer(1, 1, 22050);
        a.i.connect(a.g.destination);
        a.i.start(0)
    }, Yh = function (a) {
        a.g && (null == a.i ? $h(a) : void 0 === a.i.playbackState ? $h(a) : a.i.playbackState !== a.i.PLAYING_STATE && a.i.playbackState !== a.i.FINISHED_STATE && $h(a))
    };
    Uh.prototype.destroy = function () {
        this.g.close();
        this.g = null
    };
    Uh.prototype.reset = function () {
        for (var a in this.s) this.s[a].s = [];
        for (var b in this.o) this.o[b].stop()
    };
    var ai = function () {
        var a = V.Fa();
        a.j && a.j.gain.setValueAtTime(1, a.g.currentTime);
        a.v = !1
    };
    Uh.prototype.isMuted = function () {
        return this.v && !!this.j && 0 == this.j.gain.value
    };
    var Vh = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode, W = function (a, b, c, e) {
        this.U = a;
        this.T = b;
        this.v = c;
        this.ha = e;
        this.j = {};
        this.s = this.o = this.i = this.g = null;
        this.H = [];
        this.ka = 0
    };
    W.prototype.clone = function () {
        var a = new W(this.U, this.T, this.v, this.ha);
        Wh(a, this.i, this.o);
        return a
    };
    var Wh = function (a, b, c) {
        a.i = b;
        a.o = c
    }, bi = function (a) {
        if (a.i) for (var b in a.j) {
            var c = a.j[b];
            !c.YB && 1E3 * a.i.currentTime > c.Je + a.v && delete a.j[b]
        }
    }, ci = function (a) {
        !a.g && a.i.createGain && (a.g = a.i.createGain())
    };
    W.prototype.play = function (a, b, c, e, f, g) {
        a = void 0 === a ? 0 : a;
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? 0 : c;
        f = void 0 === f ? !1 : f;
        if (!this.i || !this.o) return -1;
        bi(this);
        g = void 0 === g ? this.i.currentTime + a / 1E3 : g;
        e || (e = this.i.createBufferSource(), e.playbackRate.setValueAtTime(1, this.i.currentTime));
        ci(this);
        this.s && e.connect(this.s);
        this.g ? (this.s ? this.s.connect(this.g) : e.connect(this.g), this.g.connect(this.o)) : this.s ? this.s.connect(this.o) : e.connect(this.o);
        this.s = null;
        e.loop = b;
        try {
            e.buffer = this.U.v
        } catch (k) {
            return -1
        }
        a = this.T /
            1E3;
        var h = this.v / 1E3 / e.playbackRate.value;
        b ? (e.loopStart = a + (f ? c / 1E3 : 0), e.loopEnd = a + h, e.start(g, a + c / 1E3)) : e.start(g, a + c / 1E3, h);
        f = this.ka++;
        this.j[f] = {node: e, Je: 1E3 * g - c, YB: b};
        return f
    };
    var di = function (a, b) {
        ci(a);
        a.g && a.g.gain.setValueAtTime(b, a.i.currentTime)
    }, ei = function (a, b, c) {
        ci(a);
        a.g && (a.g.gain.setValueAtTime(a.g.gain.value, a.i.currentTime), a.g.gain.exponentialRampToValueAtTime(b, a.i.currentTime + c))
    };
    W.prototype.stop = function (a) {
        bi(this);
        if (void 0 !== a) {
            if (this.j[a]) {
                try {
                    this.j[a].node.stop(0)
                } catch (c) {
                }
                var b = (1E3 * this.i.currentTime - this.j[a].Je) % this.v;
                delete this.j[a];
                return [b]
            }
            return []
        }
        a = [];
        for (b in this.j) a = a.concat(this.stop(b));
        return a
    };
    var fi = document.createElement("audio"),
        gi = Ma(fi.canPlayType) && "" != fi.canPlayType("audio/mpeg") ? ".mp3" : ".ogg", hi = function (a, b) {
            Xa.call(this, a + b + gi);
            this.o = this.v = null;
            this.g = 0
        };
    p(hi, Xa);
    hi.prototype.preload = function (a, b) {
        var c = this, e = new Promise(function (g) {
            Ya(c, g)
        });
        a && Ya(this, a);
        if (0 != this.g) return Promise.resolve();
        if (!this.o) return Promise.reject();
        var f = new XMLHttpRequest;
        f.open("GET", this.Tb, !0);
        f.responseType = "arraybuffer";
        f.onload = function () {
            c.o.decodeAudioData(f.response, function (g) {
                g && (c.v = g, c.g = 3, c.i())
            });
            c.g = 2
        };
        b && (f.onprogress = function (g) {
            g.lengthComputable && b(g.loaded / g.total)
        });
        f.send();
        this.g = 1;
        return e
    };
    var X = function () {
        Uh.call(this, X.i, X.g)
    };
    p(X, Uh);
    X.i = {};
    X.i.$ = new hi("img/earth-day-2020/", "sounds");
    X.i.Wd = new hi("img/earth-day-2020/", "music");
    X.i.hc = new hi("img/earth-day-2020/", "intro");
    var Y = X.i;
    X.g = {};
    X.g.Zi = new W(Y.$, 0, 12500, 0);
    X.g.$i = new W(Y.$, 13500, 1658.95703125, 0);
    X.g.aj = new W(Y.$, 16158.9570312, 1658.95703125, 0);
    X.g.ej = new W(Y.$, 18817.9140625, 1658.95703125, 0);
    X.g.hj = new W(Y.$, 21476.8710938, 1658.95703125, 0);
    X.g.ld = new W(Y.$, 24135.828125, 1658.95703125, 0);
    X.g.ij = new W(Y.$, 26794.7851562, 4851.33789062, 0);
    X.g.jj = new W(Y.$, 32646.1210938, 4741.67822266, 0);
    X.g.kj = new W(Y.$, 38387.8007812, 4576.14501953, 0);
    X.g.lj = new W(Y.$, 43963.9453125, 1500, 0);
    X.g.mj = new W(Y.$, 46463.9453125, 1500, 0);
    X.g.nj = new W(Y.$, 48963.9453125, 1500, 0);
    X.g.oj = new W(Y.$, 51463.9453125, 1500, 0);
    X.g.qj = new W(Y.$, 53963.9453125, 1500, 0);
    X.g.rj = new W(Y.$, 56463.9453125, 1500, 0);
    X.g.sj = new W(Y.$, 58963.9453125, 1500, 0);
    X.g.uj = new W(Y.$, 61463.9453125, 1500, 0);
    X.g.vj = new W(Y.$, 63963.9453125, 1500, 0);
    X.g.wj = new W(Y.$, 66463.9453125, 1500, 0);
    X.g.xj = new W(Y.$, 68963.9453125, 1500, 0);
    X.g.yj = new W(Y.$, 71463.9453125, 1500, 0);
    X.g.zj = new W(Y.$, 73963.9453125, 1412.2220459, 0);
    X.g.Aj = new W(Y.$, 76376.171875, 1412.24499512, 0);
    X.g.Bj = new W(Y.$, 78788.4140625, 1412.24499512, 0);
    X.g.Cj = new W(Y.$, 81200.65625, 1412.24499512, 0);
    X.g.Dj = new W(Y.$, 83612.8984375, 1412.24499512, 0);
    X.g.Ej = new W(Y.$, 86025.1484375, 1412.24499512, 0);
    X.g.Fj = new W(Y.$, 88437.390625, 1412.24499512, 0);
    X.g.Gj = new W(Y.$, 90849.640625, 1412.24499512, 0);
    X.g.Hj = new W(Y.$, 93261.8828125, 1412.24499512, 0);
    X.g.Ij = new W(Y.$, 95674.125, 1412.24499512, 0);
    X.g.Jj = new W(Y.$, 98086.375, 1412.24499512, 0);
    X.g.Kj = new W(Y.$, 100498.617188, 1412.24499512, 0);
    X.g.Lj = new W(Y.$, 102910.859375, 1874.98901367, 0);
    X.g.Mj = new W(Y.$, 105785.851562, 1875.01098633, 0);
    X.g.Nj = new W(Y.$, 108660.859375, 1875.01098633, 0);
    X.g.Oj = new W(Y.$, 111535.875, 1875.01098633, 0);
    X.g.Pj = new W(Y.$, 114410.882812, 1875.01098633, 0);
    X.g.Qj = new W(Y.$, 117285.898438, 1875.01098633, 0);
    X.g.Rj = new W(Y.$, 120160.90625, 1875.01098633, 0);
    X.g.Sj = new W(Y.$, 123035.921875, 1875.01098633, 0);
    X.g.Tj = new W(Y.$, 125910.929688, 1875.01098633, 0);
    X.g.Uj = new W(Y.$, 128785.9375, 1875.01098633, 0);
    X.g.Vj = new W(Y.$, 131660.953125, 1875.01098633, 0);
    X.g.Wj = new W(Y.$, 134535.96875, 1875.01098633, 0);
    X.g.Xj = new W(Y.$, 137410.96875, 1874.98901367, 0);
    X.g.Yj = new W(Y.$, 140285.96875, 1875.01098633, 0);
    X.g.Zj = new W(Y.$, 143160.96875, 1875.01098633, 0);
    X.g.$j = new W(Y.$, 146035.984375, 1875.01098633, 0);
    X.g.ak = new W(Y.$, 148911, 1875.01098633, 0);
    X.g.bk = new W(Y.$, 151786.015625, 1875.01098633, 0);
    X.g.ek = new W(Y.$, 154661.015625, 1875.01098633, 0);
    X.g.fk = new W(Y.$, 157536.03125, 1875.01098633, 0);
    X.g.ik = new W(Y.$, 160411.046875, 1875.01098633, 0);
    X.g.jk = new W(Y.$, 163286.046875, 1875.01098633, 0);
    X.g.kk = new W(Y.$, 166161.0625, 1875.01098633, 0);
    X.g.nk = new W(Y.$, 169036.078125, 1875.01098633, 0);
    X.g.nd = new W(Y.$, 171911.09375, 1874.98901367, 0);
    X.g.od = new W(Y.$, 174786.078125, 1875.01098633, 0);
    X.g.qd = new W(Y.$, 177661.09375, 1875.01098633, 0);
    X.g.rd = new W(Y.$, 180536.09375, 1875.01098633, 0);
    X.g.sd = new W(Y.$, 183411.109375, 1875.01098633, 0);
    X.g.ud = new W(Y.$, 186286.125, 1875.01098633, 0);
    X.g.vd = new W(Y.$, 189161.140625, 1875.01098633, 0);
    X.g.wd = new W(Y.$, 192036.140625, 1875.01098633, 0);
    X.g.xd = new W(Y.$, 194911.15625, 1875.01098633, 0);
    X.g.yd = new W(Y.$, 197786.171875, 1875.01098633, 0);
    X.g.zd = new W(Y.$, 200661.171875, 1875.01098633, 0);
    X.g.Ad = new W(Y.$, 203536.1875, 1875.01098633, 0);
    X.g.qk = new W(Y.$, 206411.203125, 4124.98876953, 0);
    X.g.rk = new W(Y.$, 211536.1875, 4624.98876953, 0);
    X.g.tk = new W(Y.$, 217161.171875, 4250, 0);
    X.g.vk = new W(Y.$, 222411.171875, 250.067993164, 0);
    X.g.wk = new W(Y.$, 223661.25, 810.112976074, 0);
    X.g.Rb = new W(Y.hc, 0, 4750, 0);
    X.g.Jc = new W(Y.hc, 5750, 25197.8457031, 0);
    X.g.Rd = new W(Y.hc, 31947.8457031, 15944.5351562, 0);
    X.g.Xd = new W(Y.Wd, 0, 75130.4296875, 0);
    Ja(X);
    var V = X;
    var ii = new Map([[1, {
        Bb: C.Ld,
        Ab: C.xk,
        ub: Nd,
        Kb: Od,
        Cb: Md,
        Mb: Ld,
        Db: Kd,
        Lb: V.g.$i,
        Eb: [V.g.lj, V.g.mj, V.g.nj, V.g.oj, V.g.qj, V.g.rj, V.g.sj, V.g.uj, V.g.vj, V.g.wj, V.g.xj, V.g.yj]
    }], [2, {
        Bb: C.Md,
        Ab: C.Kn,
        ub: Sd,
        Kb: Td,
        Cb: Rd,
        Mb: Qd,
        Db: Pd,
        Lb: V.g.aj,
        Eb: [V.g.zj, V.g.Aj, V.g.Bj, V.g.Cj, V.g.Dj, V.g.Ej, V.g.Fj, V.g.Gj, V.g.Hj, V.g.Ij, V.g.Jj, V.g.Kj]
    }], [3, {
        Bb: C.Nd,
        Ab: C.Lq,
        ub: Xd,
        Kb: Yd,
        Cb: Wd,
        Mb: Vd,
        Db: Ud,
        Lb: V.g.ej,
        Eb: [V.g.Lj, V.g.Mj, V.g.Nj, V.g.Oj, V.g.Pj, V.g.Qj, V.g.Rj, V.g.Sj, V.g.Tj, V.g.Uj, V.g.Vj, V.g.Wj]
    }], [4, {
        Bb: C.Od,
        Ab: C.$t,
        ub: ae,
        Kb: be,
        Cb: $d,
        Mb: ce,
        Db: Zd,
        Lb: V.g.hj,
        Eb: [V.g.Xj, V.g.Yj, V.g.Zj, V.g.$j, V.g.ak, V.g.bk, V.g.ek, V.g.fk, V.g.ik, V.g.jk, V.g.kk, V.g.nk]
    }], [5, {
        Bb: C.Pd,
        Ab: C.Qd,
        ub: ge,
        Kb: he,
        Cb: fe,
        Mb: ee,
        Db: de,
        Lb: V.g.ld,
        Eb: [V.g.nd, V.g.od, V.g.qd, V.g.rd, V.g.sd, V.g.ud, V.g.vd, V.g.wd, V.g.xd, V.g.yd, V.g.zd, V.g.Ad]
    }], [6, {
        Bb: C.yi,
        Ab: C.Qd,
        ub: ge,
        Kb: he,
        Cb: fe,
        Mb: ee,
        Db: de,
        Lb: V.g.ld,
        Eb: [V.g.nd, V.g.od, V.g.qd, V.g.rd, V.g.sd, V.g.ud, V.g.vd, V.g.wd, V.g.xd, V.g.yd, V.g.zd, V.g.Ad]
    }]]);
    var ji = function () {
        S.apply(this, arguments)
    };
    p(ji, S);
    ji.prototype.Jb = function () {
        return qh.g()
    };
    ji.prototype.Mc = function (a, b, c, e, f, g) {
        g && a.scale(-1, 1);
        this.Jb().drawImage(a, this.H, b - e / 2, c - f / 2, e, f);
        g && a.scale(-1, 1)
    };
    var ki = function (a) {
        H.call(this);
        this.s = a;
        this.i = new ji(ii.get(a).ub);
        this.addChild(this.i);
        this.i.Ma(1, 1);
        this.g = new ji(ii.get(a).Kb);
        this.addChild(this.g);
        this.g.Ma(1, 1);
        this.g.setLoop(!1);
        this.j = new J;
        this.addChild(this.j);
        this.o = !0
    };
    p(ki, H);
    ki.prototype.update = function () {
        this.g.j != zh(this.g) - 1 || this.i.ta || (xh(this.i), this.g.Ba(!1))
    };
    var li = function (a, b) {
        a.o = !1;
        Ce(a.j, new U(400, 1, 0, function (c) {
            return a.i.Ha(c)
        }));
        K(a.j, 0, function () {
            a.Da();
            b()
        })
    };
    var mi = function (a) {
        Q.call(this);
        this.g = [null, null, null];
        this.v = [];
        this.j = 0;
        this.o = this.H = a.getSize().width / 2
    };
    p(mi, Q);
    var ni = function (a) {
        for (var b = 0; b < a.g.length; b++) if (!a.g[b]) return b;
        return -1
    };
    mi.prototype.update = function (a) {
        this.o = this.H - Math.abs(this.Ca().x) / 2.9;
        this.j += a;
        for (a = 0; a < this.g.length; a++) if (this.g[a]) {
            var b = 120 * a + this.j / 9;
            this.g[a].Aa(this.o * Math.cos(b * Math.PI / 180), this.o * Math.sin(b * Math.PI / 180))
        }
    };
    var oi = function (a, b) {
        for (var c = {wb: 0}; c.wb < a.g.length; c = {wb: c.wb}, c.wb++) {
            var e = a.g[c.wb];
            if (e && e.o && e.s == b) {
                qb(a.v, e);
                li(e, function (f) {
                    return function () {
                        a.g[f.wb] = null
                    }
                }(c));
                break
            }
        }
    }, pi = function (a, b) {
        return a.g.some(function (c) {
            return c && c.s == b
        })
    };
    var qi = /x(\d+)y(\d+)/, ri = function (a, b) {
        return a instanceof D ? [a.x, a.y] : [a, b]
    }, si = function (a) {
        var b = [a.x, a.y, a.V];
        a = b.map(function (e) {
            return Math.round(e)
        });
        var c = a.map(function (e, f) {
            return Math.abs(e - b[f])
        }).sort(function (e, f) {
            return e - f
        }).map(function (e, f) {
            return f
        });
        a[c[0]] = -a[c[1]] - a[c[2]];
        return new pe(a[0], a[1], a[2])
    }, ti = function (a) {
        var b = n(ri(a, void 0));
        a = b.next().value;
        b = b.next().value;
        var c = a % 2 ? [new D(a - 1, b + 1), new D(a + 1, b + 1)] : [new D(a - 1, b - 1), new D(a + 1, b - 1)];
        return [].concat(ma([new D(a, b - 1),
            new D(a, b + 1), new D(a + 1, b), new D(a - 1, b)]), ma(c))
    }, ui = function (a, b) {
        b = n(ri(a, b));
        a = b.next().value;
        b = b.next().value;
        return "x" + a + "y" + b
    };
    var vi = function (a) {
        this.i = new E(2, 1 * Math.sqrt(3));
        this.g = a || new D(0, 0)
    }, wi = function (a, b, c) {
        c = n(ri(b, c));
        b = c.next().value;
        c = c.next().value;
        b -= a.g.x;
        c -= a.g.y;
        a = new D(2 / 3 * b, -1 / 3 * b + Math.sqrt(3) / 3 * c);
        a = si(new pe(a.x, -a.x - a.y, a.y));
        return new D(a.x, a.V + (a.x - Math.abs(a.x % 2)) / 2)
    }, xi = function (a, b, c) {
        c = n(ri(b, c));
        b = c.next().value;
        c = c.next().value;
        return new D(1.5 * b + a.g.x, a.i.height * (c + .5 * Math.abs(b % 2)) + a.g.y)
    }, yi = function (a, b) {
        var c = wi(a, new D(b.i, b.g));
        a = wi(a, b.i + b.width, b.g - b.height);
        b = [];
        for (var e = c.x; e <=
        a.x; e++) for (var f = a.y; f <= c.y; f++) b.push(e), b.push(f);
        return b
    };
    var zi = function (a, b, c) {
        O.call(this);
        this.Ja = a;
        this.g = b;
        this.v = c;
        a = xi(a, c);
        this.Aa(a.x, a.y)
    };
    p(zi, O);
    zi.prototype.Da = function () {
        O.prototype.Da.call(this);
        this.Na().destroy({children: !0})
    };
    var Di = function (a, b, c, e) {
        zi.call(this, a, b, c);
        this.ha = 0;
        this.Ga = !1;
        this.wa = ii.get(b);
        this.U = new O;
        this.addChild(this.U);
        this.H = null;
        this.va = new T(this.wa.Bb);
        R(this.va, 0, 0);
        this.va.xc(!0);
        this.va.Ba(!1);
        this.U.addChild(this.va);
        this.T = null;
        this.j = new T(this.wa.Cb);
        R(this.j, 0, 0);
        this.j.setScale(3);
        this.j.Ba(!1);
        this.j.setLoop(!1);
        this.addChild(this.j);
        this.ya = this.ka = 0;
        this.setSize(this.Ja.i.clone().scale(.8));
        this.va.Ma(this.getSize().width);
        this.o = new J;
        this.addChild(this.o);
        this.ta = null;
        0 == e ? (Ai(this,
            !1), Bi(this, 0)) : 1 == e ? (this.setScale(0), Bi(this, 1)) : 2 == e ? (this.setScale(0), Ci(this, .5), Bi(this, 3)) : 5 == e ? (Ai(this, !0), Bi(this, 1)) : 3 == e ? (this.setScale(0), Ci(this, 1), Ai(this, !0), Bi(this, 1)) : 4 == e && (this.setScale(0), Ci(this, 1), Bi(this, 0))
    };
    p(Di, zi);
    var Fi = function (a, b) {
        Bi(a, 2);
        a.ta = Ei[Math.floor(Math.random() * Ei.length)];
        di(a.ta, .4);
        a.ta.play();
        a.o.g = [];
        Ce(a.o, new U(400 * (1 - a.ka), a.ka, 1, function (c) {
            a.ka = c
        }));
        K(a.o, 0, function () {
            Bi(a, 1);
            b(a.ta);
            L(a.o, new U(800, a.U.Va(), 1, function (c) {
                a.U.setScale(c)
            }))
        })
    }, Gi = function (a) {
        2 == a.ha && (a.ta && a.ta.stop(), Bi(a, 0), a.o.g = [], Ce(a.o, new U(500 * a.ka, a.ka, 0, function (b) {
            a.ka = b
        })))
    }, Ci = function (a, b, c) {
        L(a.o, new U(500, a.Va(), b, function (e) {
            return a.setScale(e)
        }, {
            Ia: Nh, Oa: void 0 === c ? function () {
            } : c
        }))
    }, Bi = function (a,
                      b) {
        var c = 1 != b;
        !a.H && c && (a.H = new T(a.wa.Ab), R(a.H, 0, 0), a.H.xc(!0), a.H.Ma(a.getSize().width), a.U.addChild(a.H), a.H.wc());
        a.ha = b;
        a.H && a.H.Ba(c);
        a.va.Ba(!c)
    }, Ai = function (a, b) {
        b && !a.T ? (a.T = new ji(a.wa.Mb), R(a.T, 0, 0), a.T.setScale(3), xh(a.T), a.addChild(a.T)) : !b && a.T && (a.T.Da(), a.T = null);
        a.Ga = b;
        a.ya = 0
    }, Hi = function (a) {
        a.j.Ba(!0);
        a.j.reset();
        xh(a.j)
    }, Ii = function (a) {
        var b = new T(a.wa.Db);
        R(b, 0, 0);
        b.setScale(2.6);
        b.setLoop(!1);
        b.reset();
        xh(b);
        a.addChild(b);
        b.wc();
        var c = ii.get(a.g), e = [], f = Math.ceil(3 * Math.random() +
            2), g = new N;
        a.addChild(g);
        for (var h = 0; h < f; h++) {
            var k = new ji(c.ub[0]);
            k.setScale(.7 < Math.random() ? .7 : .5);
            e.push(k);
            g.addChild(k)
        }
        var l = e.map(function (m, q) {
            var w = .2 + 1.5 * Math.random(), B = 1 + 2 * Math.random();
            m = [.5, w];
            var G = [B - .5, w];
            w = [B, w - .5 - 4 * Math.random()];
            q % 2 && (m[0] *= -1, G[0] *= -1, w[0] *= -1);
            return new Gh(0, 0, m[0], m[1], G[0], G[1], w[0], w[1])
        });
        c = new U(1500, 0, 1, function (m) {
            e.forEach(function (q, w) {
                q.Aa(Hh(l[w], m), Ih(l[w], m));
                .6 < m && q.Ha(1 - (m - .6) / .4)
            })
        }, {
            Ia: Nh, Oa: function () {
                g.Da()
            }
        });
        L(a.o, c);
        De(a.o, b.getDuration(),
            function () {
                Eh(b)
            })
    };
    Di.prototype.update = function (a) {
        a && (this.Ga && (this.ya += a, this.U.setScale(1 + .03 * Math.sin(3.5 * this.ya / 1E3))), 1 != this.ha && (this.U.Yb = 90 * this.ka * Math.PI / 180, this.U.setScale(1 + .2 * this.ka)), this.j.j == zh(this.j) - 1 && this.j.Ba(!1))
    };
    var Ji = [1, 2, 3, 4, 5], Ei = [V.g.qk, V.g.rk, V.g.tk];
    var Ki = new E(30, 60);
    var Li = function (a) {
        Oh.call(this, 4);
        this.ya = a;
        this.U = V.g.Zi;
        di(this.U, .2);
        this.Ga = this.U.i.createPanner();
        this.Ga.panningModel = "equalpower";
        a = this.U;
        var b = this.Ga;
        if (!(0 <= jb(a.H, b))) {
            if (a.g) for (var c = [a.g].concat(a.H), e = 0, f; f = c[e++];) f.disconnect();
            a.H.push(b);
            ci(a);
            if (a.g) for (a = [a.g].concat(a.H).concat(a.o), b = 0; b < a.length - 1; b++) a[b].connect(a[b + 1])
        }
        this.j = new F(0, 0, 0);
        this.rb = new F(0, 0, 0);
        this.Ra = new F(0, 0, 0);
        this.Ka = !1;
        this.T = new N;
        this.T.setSize(.9 * this.g.getSize().width, .8 * this.g.getSize().width);
        this.addChild(this.T);
        this.v = new mi(this.T);
        this.addChild(this.v);
        this.bc = -this.T.getSize().height / 5;
        this.ta = [];
        this.ka = new J;
        this.addChild(this.ka)
    };
    p(Li, Oh);
    var Ni = function (a) {
        for (var b = n(Mi), c = b.next(); !c.done; c = b.next()) a.Ua(c.value, !1);
        a.Ua(Cd, !0)
    }, Ri = function (a) {
        a.Ua(0 == a.H ? Gd : Oi, !1);
        a.ha.g = [];
        a.Ja = !0;
        a.ka.g = [];
        K(a.ka, a.g.getDuration(), function () {
            var b = 0 == a.H, c = b ? Cd : Fd;
            a.Ua(b ? Pi : Qi, !1);
            De(a.ka, a.g.getDuration(), function () {
                a.Ja = !1;
                a.Ua(c, !0)
            })
        })
    };
    Li.prototype.update = function (a) {
        this.ta.push(this.Ca().x);
        7 < this.ta.length && this.ta.shift();
        Oh.prototype.update.call(this, a);
        this.v.Aa(this.ta[0] - this.Ca().x, this.bc);
        a = (this.Ca().x - this.ya.Ca().x) / 17;
        this.Ga.setPosition(a, 0, 1 - Math.abs(a));
        di(this.U, .2 + 3 * jc(.7 * (this.o ? re(this.o) : 0), 0, .8 / 3))
    };
    var Si = function (a) {
        a.Ka = !0;
        a.rb = a.j.clone()
    };
    Li.prototype.va = function () {
        if (!this.Ka) return null;
        var a = this.j, b = this.rb;
        if (a == b || b && a.x == b.x && a.y == b.y && a.V == b.V) return new F(this.ya.Ca().x, this.ya.Ca().y, 0);
        if (a = (a = $e(this.g, new D(this.j.x, this.j.y))) ? Fh(a).add(this.Ca()) : null) this.Ra = a;
        return this.Ra
    };
    var Ti = function (a) {
        new ki(a.g);
        return a.Ga
    }, Ui = function (a, b) {
        Ai(b, !1);
        var c = new ki(b.g);
        a = a.v;
        c.g.reset();
        xh(c.g);
        var e = ni(a);
        0 > e && (e = a.v.shift(), a.g[a.g.indexOf(e)] = null, e.Da(), e = ni(a));
        a.v.push(c);
        c.setParent(null);
        a.addChild(c);
        c.Aa(0, 0, 0);
        a.g[e] = c;
        b = ii.get(b.g).Lb;
        di(b, .4);
        b.play()
    }, Vi = function (a, b) {
        return pi(a.v, b.g) && 0 == b.ha
    }, Pi = [C.Zc, C.Yc, C.Xc, C.Wc, C.Vc], Oi = Gd.slice(9), Qi = [C.$c, C.hd, C.jd, C.kd], Mi = [Ed, Dd, Gd, Cd, Fd];
    var Wi = function (a, b) {
        a = void 0 === a ? new F(0, 0, 0) : a;
        b = void 0 === b ? new F(0, 0, 0) : b;
        H.call(this);
        this.i = b;
        this.g = a;
        this.j = new F(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        this.o = new F(1, 1, 1)
    };
    p(Wi, H);
    Wi.prototype.update = function (a) {
        H.prototype.update.call(this, a);
        a /= 1E3;
        this.getParent() && this.getParent().Aa(Xi(this, this.getParent().Ca(), a));
        Yi(this, this.g, a);
        var b = this.g;
        b.x += this.i.x * a;
        b.y += this.i.y * a;
        b.V += this.i.V * a;
        Zi(this, this.g)
    };
    var Yi = function (a, b, c) {
        b.x = $i(b.x, a.o.x, c);
        b.y = $i(b.y, a.o.y, c);
        b.V = $i(b.V, a.o.V, c);
        return b
    }, $i = function (a, b, c) {
        return .01 > Math.abs(a) && 1 > b ? 0 : a - (a - a * b) * c
    }, Zi = function (a, b) {
        b.x = jc(b.x, -a.j.x, a.j.x);
        b.y = jc(b.y, -a.j.y, a.j.y);
        b.V = jc(b.V, -a.j.V, a.j.V);
        return b
    }, aj = function (a, b) {
        a.g.x = 0;
        a.g.y = void 0 === b ? a.g.y : b;
        a.g.V = 0
    }, Xi = function (a, b, c) {
        return Zi(a, a.i.clone().scale(.5 * c).add(Yi(a, a.g, .5 * c))).scale(c).add(b)
    }, bj = function (a, b) {
        var c = 0;
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? 0 : c;
        a.i.x = 0;
        a.i.y = void 0 === b ? a.i.y : b;
        a.i.V =
            void 0 === c ? a.i.V : c
    };
    var cj = function (a) {
        H.call(this);
        this.j = a;
        this.o = 0;
        this.g = new Wi;
        this.addChild(this.g);
        this.i = 3;
        this.v = 0;
        this.s = function () {
        }
    };
    p(cj, H);
    var dj = function (a, b, c) {
        a.o = -c;
        a.v = b;
        bj(a.g, -.5);
        a.i = 0;
        return new Promise(function (e) {
            return a.s = e
        })
    };
    cj.prototype.resume = function () {
        this.Ba(!0)
    };
    cj.prototype.update = function (a) {
        if (3 != this.i) {
            var b = this.v - this.j.Ca().y;
            if (0 == this.i && this.g.g.y <= this.o) bj(this.g, 0), aj(this.g, this.o), this.i = 2; else if (2 == this.i && 7 >= Math.abs(b)) bj(this.g, -Math.pow(this.g.g.y, 2) / (2 * b)), this.i = 1; else if (1 == this.i && (.1 >= Math.abs(b) || 0 <= this.g.g.y)) {
                this.i = 3;
                bj(this.g, 0);
                aj(this.g, 0);
                this.s();
                return
            }
            a = Xi(this.g, this.j.Ca(), a / 1E3);
            this.j.Aa(void 0, a.y)
        }
    };
    var ej = function (a, b, c, e) {
        var f = void 0 === e ? {} : e;
        e = void 0 === f.Oa ? function () {
        } : f.Oa;
        f = void 0 === f.Ia ? Mh : f.Ia;
        U.call(this, b, null, c.clone(), function (g) {
            return a.Aa(g)
        }, {
            Oa: e, Ia: f, Ge: function () {
                return a.Ca().clone()
            }, Ie: te
        })
    };
    p(ej, U);
    var fj = function (a, b, c, e, f) {
        Oh.call(this, 1.25);
        this.ta = a;
        this.T = this.U = null;
        this.v = b;
        this.Ka = c;
        this.Ga = e;
        this.ya = f;
        this.j = new J;
        this.addChild(this.j);
        this.Aa(Fh(xi(this.ta, this.v)));
        this.ka = null;
        this.Pa = .5
    };
    p(fj, Oh);
    fj.prototype.start = function () {
        var a = this.ya(this.v);
        a && gj(this, a)
    };
    fj.prototype.va = function () {
        return this.ka
    };
    fj.prototype.update = function (a) {
        Oh.prototype.update.call(this, a);
        this.U && this.T && 1 == this.T.ha && hj(this)
    };
    var gj = function (a, b) {
        a.U = b;
        a.T = a.Ga(a.U, a.Ka);
        var c = Fh(xi(a.ta, a.v));
        a.ka = c;
        K(a.j, 1200 + 800 * Math.random());
        K(a.j, 200 + 200 * Math.random(), function () {
            ij(a, c.clone(), Fh(xi(a.ta, b)))
        });
        K(a.j, 8E3 + 4E3 * Math.random(), function () {
            Rh(Qh.Fa(), 1);
            var e = a.T;
            Ci(e, 1);
            Bi(e, 1);
            hj(a)
        })
    }, ij = function (a, b, c) {
        var e = c.clone(), f = b.clone();
        a.Aa(b);
        a.ka = c;
        De(a.j, 1600, function () {
            De(a.j, 100, function () {
                ij(a, e, f)
            })
        })
    }, hj = function (a) {
        a.j.i = [];
        a.j.g = [];
        a.v = a.U;
        a.U = null;
        a.T = null;
        var b = a.ya(a.v);
        b ? gj(a, b) : (Ce(a.j, new U(500, 1, 0, function (c) {
            return a.g.Ha(c)
        })),
            K(a.j, 0, function () {
                return a.Da()
            }))
    };
    var jj = function (a) {
        this.g = new Map;
        this.i = a
    }, kj = function (a) {
        return [].concat(ma(a.g.values())).filter(function (b) {
            return null != b
        })
    }, lj = function (a, b) {
        a.g.set(ui(b.v), b)
    }, mj = function (a, b) {
        a.g.set(ui(b.v), b);
        a.i.addChild(b);
        Rh(Qh.Fa(), 2, b)
    }, nj = function (a, b, c) {
        b = ui(b, c);
        return !a.g.has(b) || null == a.g.get(b)
    };
    var pj = function (a) {
        this.i = oj(a.width, a.height);
        this.g = a;
        this.v = new M(0, 0, this.g.width, this.g.height);
        this.o = new Map;
        this.s = [];
        this.j = new D(0, 0)
    };
    pj.prototype.forEach = function (a, b) {
        if (b) {
            var c = b, e = this.v, f = Math.max(c.i, e.i), g = Math.min(c.i + c.width, e.i + e.width);
            if (f <= g) {
                var h = Math.max(c.g, e.g);
                e = Math.min(c.g + c.height, e.g + e.height);
                h <= e && (c.i = f, c.g = h, c.width = g - f, c.height = e - h)
            }
        } else b = this.v;
        for (c = b.i; c < b.i + b.width; c++) for (f = b.g; f < b.g + b.height; f++) a(c, f)
    };
    pj.prototype.getSize = function () {
        return this.g
    };
    var rj = function (a, b, c) {
        return !qj(a, b, c) || 6 >= b || b >= a.g.width - 6 ? !1 : !a.i[b][c]
    }, sj = function (a, b, c) {
        if (!rj(a, b, c)) return !1;
        a.j.x = b;
        a.j.y = c;
        return !a.s.some(function (e) {
            return e.contains(a.j)
        })
    }, qj = function (a, b, c) {
        return !(0 > b || 0 > c || b > a.g.width - 1 || c > a.g.height - 1)
    }, oj = function (a, b) {
        return Array(a).fill(null).map(function () {
            return Array(b).fill(0)
        })
    };
    var tj = function (a, b, c) {
        H.call(this);
        this.o = a;
        this.j = b;
        this.s = c;
        this.i = new J;
        this.addChild(this.i);
        this.g = new H;
        this.addChild(this.g)
    };
    p(tj, H);
    var wj = function (a, b) {
        var c = b.filter(function (f) {
            return 0 < uj(a, f.v).length
        });
        for (b = 7 > c.length || .5 > Math.random() ? 2 : 3; c.length > b;) c.splice(Math.floor(Math.random() * c.length), 1);
        b = {};
        c = n(c);
        for (var e = c.next(); !e.done; b = {zc: b.zc}, e = c.next()) b.zc = e.value, K(a.i, 50, function (f) {
            return function () {
                return vj(a, f.zc)
            }
        }(b))
    }, vj = function (a, b) {
        b = new fj(a.s, b.v, b.g, function (c, e) {
            c = new Di(a.s, e, c, 2);
            mj(a.j, c);
            return c
        }, function (c) {
            c = uj(a, c);
            return c.length ? c[Math.floor(Math.random() * c.length)] : null
        });
        a.g.addChild(b);
        b.start();
        Rh(Qh.Fa(), 0)
    }, uj = function (a, b) {
        return ti(b).filter(function (c) {
            return nj(a.j, c) && qj(a.o, c.x, c.y) && rj(a.o, c.x, c.y)
        })
    };
    var xj = function (a) {
        var b = void 0 === b ? Math.random : b;
        return a[Math.floor(b() * a.length)]
    };
    var zj = function (a, b, c) {
        zi.call(this, a, 6, b);
        this.U = c;
        this.H = new T(C.zi);
        this.H.Ha(.5);
        this.T = new T(C.xi);
        R(this.T, 0, 0);
        R(this.H, 0, 0);
        this.T.Ma(3.5);
        this.setSize(this.T.getSize());
        this.H.Ma(3.5);
        this.addChild(this.H);
        this.addChild(this.T);
        this.o = new T(le);
        this.o.Ba(!1);
        R(this.o, 0, 0);
        this.o.setScale(.7);
        this.addChild(this.o);
        this.o.Ma(3.5);
        this.j = new J;
        this.addChild(this.j);
        yj(this)
    };
    p(zj, zi);
    var yj = function (a) {
        Ce(a.j, new U(630, 0, 1, function (b) {
            a.H.Ha(.5 + .5 * b);
            a.T.setScale(1 + .1 * b)
        }));
        Ce(a.j, new U(630, 1, 0, function (b) {
            a.H.Ha(.5 + .5 * b);
            a.T.setScale(1 + .1 * b)
        }));
        K(a.j, 0, function () {
            return yj(a)
        })
    };
    zj.prototype.play = function () {
        var a = this;
        Aj[Math.floor(Math.random() * Aj.length)].play();
        this.j.g = [];
        Ce(this.j, [new U(168, this.H.Va(), .7, function (e) {
            a.H.setScale(e)
        }), new U(168, this.T.Va(), .7, function (e) {
            a.T.setScale(e)
        })]);
        K(this.j, 0, function () {
            a.H.Da();
            a.T.Da();
            a.o.Ba(!0);
            xh(a.o);
            a.o.setLoop(!1);
            a.o.bc = !0;
            Bj(a);
            L(a.j, new U(a.o.getDuration(), a.o.Va(), 1, function (e) {
                a.o.setScale(e)
            }, {
                Oa: function () {
                    return a.o.Da()
                }
            }))
        });
        K(this.j, 200, function () {
            Cj(a)
        });
        K(this.j, 2E3);
        var b, c = new Promise(function (e) {
            return b =
                e
        });
        K(this.j, 0, b);
        return c
    };
    var Bj = function (a) {
        var b = [new T(C.Sb), new T(C.Sb), new T(C.Sb), new T(C.Sb), new T(C.Sb)],
            c = [new T(C.jc), new T(C.jc), new T(C.jc), new T(C.jc)], e = b.map(function (h, k) {
                R(h, 0, 0);
                k = [.5 * Math.sin(.2 + 2 * Math.PI * k / 5), .5 * Math.cos(.2 + 2 * Math.PI * k / 5)];
                h.Aa(k[0], k[1]);
                h.Ma(1);
                return k
            }), f = c.map(function (h, k) {
                R(h, 0, 0);
                k = [.6 * Math.sin(2 * Math.PI * k / 4), .6 * Math.cos(2 * Math.PI * k / 4)];
                h.Aa(k[0], k[1]);
                h.Ma(.5);
                return k
            }), g = new O;
        a.addChild(g);
        ve(g, b);
        ve(g, c);
        L(a.j, new U(672, 0, 1, function (h) {
            b.forEach(function (k, l) {
                k.Aa(e[l][0] +
                    e[l][0] * h * 5, e[l][1] + e[l][1] * h * 5);
                k.Ha(1 - h);
                k.setScale(1 + .5 * h);
                k.Yb = 180 * h * Math.PI / 180
            });
            c.forEach(function (k, l) {
                k.Aa(f[l][0] + f[l][0] * h * 5, f[l][1] + f[l][1] * h * 5);
                .8 < h && k.Ha(1 - (h - .8) / .2);
                k.Yb = 180 * h * Math.PI / 180
            })
        }, {
            Ia: Nh, Oa: function () {
                g.Ba(!1)
            }
        }))
    }, Cj = function (a) {
        var b = [new T(ke), new T(ke), new T(ke), new T(ke), new T(ke)];
        b.forEach(function (h) {
            R(h, -.5 + Math.random(), -.5 + Math.random());
            xh(h)
        });
        var c = [new T(ie), new T(ie), new T(ie), new T(ie)];
        c.forEach(function (h) {
            R(h, -.5 + Math.random(), -.5 + Math.random());
            xh(h);
            h.Ma(15)
        });
        var e = new O;
        a.addChild(e);
        ve(e, b);
        ve(e, c);
        var f = b.map(function (h, k) {
            return Dj(!!(k % 2))
        }), g = c.map(function (h, k) {
            return Dj(!!(k % 2))
        });
        L(a.j, new U(2520, 0, 1, function (h) {
            b.forEach(function (k, l) {
                k.Aa(Hh(f[l], h), Ih(f[l], h));
                .8 < h && k.Ha(1 - (h - .8) / .2)
            });
            c.forEach(function (k, l) {
                k.Aa(5 * Hh(g[l], h), 3 * Ih(g[l], h));
                .2 > h && k.Ha(h / .2);
                .8 < h && k.Ha(1 - (h - .8) / .2)
            })
        }, {
            Ia: Nh, Oa: function () {
                e.Ba(!1)
            }
        }))
    };
    (function (a) {
        return a.map(function (b) {
            return b[0] % 2 ? [b[0], b[1] - 1] : [b[0], b[1]]
        })
    })([[0, 0], [-1, 0], [1, 0], [0, 1], [-1, -1], [0, -1], [1, -1]]);
    var Dj = function (a) {
        var b = 4 + 2 * Math.random(), c = [.1 + 2 * Math.random(), b], e = [c[0] + .2 + 2 * Math.random(), b];
        b = [e[0] + 1 + 2 * Math.random(), 2 * -b];
        a && (c[0] *= -1, e[0] *= -1, b[0] *= -1);
        return new Gh(0, 0, c[0], c[1], e[0], e[1], b[0], b[1])
    }, Aj = [V.g.ij, V.g.jj, V.g.kj];
    var Ej = Th.map(function (a, b) {
        return b
    });
    vb(Ej);
    var Fj = 0;
    var Gj = function (a, b) {
        Q.call(this);
        this.j = a;
        this.o = new Q;
        this.g = new Q;
        this.v = new F(0, 0, b);
        this.addChild(this.o);
        this.addChild(this.g);
        this.Aa(Ye(this.j, this.v));
        this.Xb(a)
    };
    p(Gj, Q);
    var Hj = function (a) {
        if (!a.i) return null;
        var b = a.j.g, c = $e(a, new D(b.g, b.i));
        b = $e(a, new D(b.width, b.height));
        a.o.Aa(new F(c.x, c.y, 0));
        a.g.Aa(new F(b.x, b.y, 0));
        return {$b: I(a.o), Lc: I(a.g)}
    };
    Gj.prototype.update = function () {
        this.Aa(Ye(this.j, this.v))
    };
    var Ij = function () {
        this.i = [];
        this.g = []
    };
    Ij.prototype.contains = function (a) {
        return 0 <= jb(this.i, a) || 0 <= jb(this.g, a)
    };
    Ij.prototype.Ta = function () {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.g.length;
        for (b = 0; b < c; ++b) a.push(this.g[b]);
        return a
    };
    var Jj = function (a, b, c) {
        return c.length ? c.some(function (e) {
            return 8 > Math.pow(a - e.v.x, 2) + Math.pow(b - e.v.y, 2)
        }) : !1
    }, Kj = function (a, b, c, e) {
        this.i = a;
        this.g = b;
        this.j = c;
        this.o = e
    }, Lj = function (a) {
        var b = [], c = 0;
        a.i.forEach(function (e, f) {
            .04 < Math.random() || !sj(a.i, e, f) || !nj(a.g, e, f) || Jj(e, f, kj(a.g)) || (e = new Di(a.j, Ji[c], new D(e, f), 0), mj(a.g, e), b.push(e), c = (c + 1) % Ji.length)
        });
        return b
    }, Mj = function (a, b) {
        var c = {};
        b = n(b);
        for (var e = b.next(); !e.done; c = {Bc: c.Bc, Cc: c.Cc, vb: c.vb}, e = b.next()) {
            e = e.value;
            var f = e.v;
            c.Bc = 12 +
                f.y;
            c.Cc = f.y - 6;
            c.vb = [];
            a.i.forEach(function (g) {
                return function (h, k) {
                    k >= g.Bc || k <= g.Cc || !sj(a.i, h, k) || !nj(a.g, h, k) || Jj(h, k, kj(a.g)) || g.vb.push(new D(h, k))
                }
            }(c));
            f = Math.floor(Math.random() * c.vb.length);
            0 < c.vb.length && (e = new Di(a.j, e.g, c.vb[f], 5), mj(a.g, e))
        }
    }, Nj = function (a) {
        var b = new D(a.i.getSize().width / 2, 5), c = a.j;
        Fj >= Ej.length && (Fj = 0);
        var e = Ej[Fj++];
        b = new zj(c, b, e);
        mj(a.g, b)
    }, Oj = function (a, b, c) {
        return ti(b).filter(function (e) {
            return qj(a.i, e.x, e.y) && rj(a.i, e.x, e.y) && nj(a.g, e) && !c.has(ui(e))
        })
    }, Pj =
        function (a, b) {
            var c = b.v, e = 6 == b.g, f = e ? 10 : 5;
            var g = Math.ceil(Math.random() * ((e ? 30 : 15) - f) + f);
            f = new Map;
            var h = new Ij;
            for (h.g.push(c); f.size < g;) {
                if (0 == h.i.length && 0 == h.g.length) {
                    for (var k = !1, l = n(f.values()), m = l.next(); !m.done; m = l.next()) if (m = Oj(a, m.value, f), 0 != m.length) {
                        k = !0;
                        h.g.push(m[0]);
                        break
                    }
                    if (!k) break
                }
                0 == h.i.length && (h.i = h.g, h.i.reverse(), h.g = []);
                m = h.i.pop();
                k = ui(m);
                if (!f.has(k)) for (f.set(k, m), m = Oj(a, m, f), k = 0, 0 != m.length && (k = Math.ceil(Math.random() * m.length)), l = 0; l < k; l++) h.g.push(m[Math.floor(Math.random() *
                    m.length)])
            }
            g = [];
            b = b.g;
            f = n(f.values());
            for (m = f.next(); !m.done; m = f.next()) if (h = m.value, e || h != c) h = new Di(a.j, b, h, 1), g.push(h);
            return g
        }, Qj = function (a) {
        for (var b = [], c = Hj(a.o), e = n(a.g.g.entries()), f = e.next(); !f.done; f = e.next()) {
            f = n(f.value);
            var g = f.next().value;
            f = f.next().value;
            var h = a.j;
            g = g.match(qi);
            g = xi(h, new D(parseInt(g[1], 10), parseInt(g[2], 10)));
            g.y < c.$b.y && g.y > c.Lc.y && b.push(f)
        }
        return b
    };
    var Rj = function (a, b, c, e) {
        H.call(this);
        this.i = a;
        this.o = b;
        this.v = e;
        this.g = new M(0, 0, 0, 0);
        this.s = new M(0, 0, 0, 0);
        this.j = new D(0, 0)
    };
    p(Rj, H);
    Rj.prototype.update = function () {
        var a = this, b = I(this.o), c = wi(this.i, b.x, b.y);
        c.x % 2 && --c.x;
        !ne(c, this.j) && (b = Hj(this.o)) && (this.j = c, c = xi(this.i, this.j), this.Aa(c.x, c.y), Sj(this.g, this.s), this.g.i = b.$b.x - 6, this.g.g = b.$b.y + 6, this.g.width = 12 + b.Lc.x - b.$b.x, this.g.height = 12 + b.$b.y - b.Lc.y, b = yi(this.i, this.g), c = Ee(this.s, this.g).flatMap(function (e) {
            return yi(a.i, e)
        }), this.v(c, b))
    };
    var Sj = function (a, b) {
        b.i = a.i;
        b.g = a.g;
        b.width = a.width;
        b.height = a.height
    };
    var Tj = new Map([[C.Yd, [-.5, -.5]], [C.oe, [0, -.5]], [C.qe, [.1, -.65]], [C.re, [.35, -.4]], [C.Kc, [0, -.42]], [C.te, [-.4, -.5]], [C.ue, [0, -.5]], [C.we, [0, -.35]], [C.xe, [0, -.5]], [C.Zd, [0, -.35]], [C.$d, [-.3, -.4]], [C.fe, [-.32, -.45]], [C.he, [0, -.45]], [C.le, [-.5, -.5]]]),
        Uj = new Map([[1, C.Kc], [2, C.we], [3, C.Zd], [5, C.oe], [6, C.he], [7, C.Kc]]),
        Vj = new Map([[1, C.te], [3, C.fe], [6, C.$d]]),
        Wj = new Map([[1, [C.Gc, C.Ed, C.Fc]], [2, [C.Ec, C.Cd, C.Fd, C.Dc]], [3, [C.Id, C.Gd, C.Ic]], [4, [C.Ic, C.Ec, C.Gc, C.Jd]], [5, [C.Hc, C.Kd, C.Dc]], [6, [C.Dd, C.Hc, C.Fc]],
            [7, Id]]), Xj = function (a) {
            var b = new T(a);
            b.setScale(1.28);
            a = Tj.get(a);
            R(b, a[0], a[1]);
            return b
        }, Yj = new Map([[1, function () {
            return Xj(C.Yd)
        }], [2, function (a) {
            return Xj(Uj.get(a))
        }], [3, function () {
            return Xj(C.qe)
        }], [4, function () {
            return Xj(C.re)
        }], [5, function (a) {
            return Xj(Vj.get(a))
        }], [6, function () {
            return Xj(C.ue)
        }], [7, function () {
            return Xj(C.xe)
        }], [8, function () {
            return Xj(C.le)
        }], [9, function (a) {
            a = [C.Bd, C.Hd].concat(ma(Wj.get(a)));
            a = new T(xj(a));
            R(a, 0, 0);
            a.setScale(1.1);
            return a
        }], [11, function () {
            var a = new T(xj(Hd));
            a.Ha(.35);
            R(a, 0, 0);
            a.Ma(1.7);
            return a
        }], [10, function () {
            var a = new T(xj(Hd));
            R(a, 0, 0);
            a.Ma(1.7);
            return a
        }], [12, function () {
            var a = new T(xj(je));
            R(a, 0, 0);
            a.Ma(1.7);
            return a
        }]]);
    var Zj = function (a, b) {
        O.call(this);
        this.H = b;
        this.g = a;
        this.j = new Map;
        this.o = new Map;
        this.v = new O;
        this.addChild(this.v);
        this.T = new O;
        this.addChild(this.T)
    };
    p(Zj, O);
    var ak = function (a, b, c) {
        O.call(this);
        var e = this;
        ff.j.addChild(this.Na());
        this.v = new Rj(b, c, a, function (f, g) {
            for (var h = e.H, k = 0; k < f.length; k += 2) {
                var l = f[k], m = f[k + 1];
                if (qj(h.g, l, m)) {
                    var q = h.g.i[l][m];
                    h.j.has(q) && h.j.get(q).Ba(!1);
                    (l = h.o.get(ui(l, m))) && l.Ba(!1)
                }
            }
            for (f = 0; f < g.length; f += 2) if (k = g[f], l = g[f + 1], qj(h.g, k, l)) {
                m = h.g.i[k][l];
                if (h.j.has(m)) h.j.get(m).Ba(!0); else if (h.g.o.has(m)) {
                    q = h;
                    var w = h.g.o.get(m);
                    if (0 != w.type && Yj.has(w.type)) {
                        var B = w.biome;
                        B = Yj.get(w.type)(B);
                        var G = xi(q.H, w.anchor.x, w.anchor.y);
                        B.Aa(G.x, G.y);
                        w.mirrored && B instanceof S && (G = B, G.Pa = !0, R(G, G.U.width, G.U.height));
                        0 > [11, 10, 9].indexOf(w.type) ? (G = Yj.get(11)(0), G.Aa(B.Ca().clone()), G.Ba(!1), q.o.set(ui(w.anchor), G), q.v.addChild(G), q.T.addChild(B)) : q.v.addChild(B);
                        B.Ba(!1);
                        q = B
                    } else q = null;
                    q && (q.Ba(!0), h.j.set(m, q))
                }
                m = ui(k, l);
                (q = h.o.get(m)) ? q.Ba(!0) : rj(h.g, k, l) && (q = h, w = Yj.get(12)(0), k = xi(q.H, k, l), w.Aa(k.x, k.y), w.Ba(!1), k = w, k.Pa = .5 > Math.random(), R(k, k.U.width, k.U.height), q.addChild(w), k = w, k.Ba(!0), h.o.set(m, k))
            }
        });
        this.addChild(this.v);
        this.U = b;
        this.H = new Zj(a, b);
        this.addChild(this.H);
        this.T = new O;
        this.addChild(this.T);
        this.j = new jj(this.T);
        this.g = new Kj(a, this.j, b, c);
        this.o = new tj(a, this.j, b);
        this.addChild(this.o);
        a = Lj(this.g);
        Mj(this.g, a);
        Nj(this.g)
    };
    p(ak, O);
    ak.prototype.Da = function () {
        O.prototype.Da.call(this);
        this.Na().destroy({children: !0})
    };
    var bk = function () {
        return Yc() ? "1" != Jc.g.get("scta") : !Wc()
    }, ck = function () {
        if (Yc()) throw"";
        return Rc || Wc()
    }, dk = function () {
        if (Yc()) throw"";
        return Xc() || Uc || Qc && !Kc
    }, ek = function () {
        return Yc() ? "1" == Jc.g.get("ccta") : Xc() && !Wc() || Uc && Qc && !Rc
    };
    var fk = function (a) {
        H.call(this);
        var b = this;
        this.s = a;
        this.i = zd();
        this.i.classList.add("ddle20-E");
        setTimeout(function () {
            b.i.classList.add("ddle20-h")
        }, 10);
        a.appendChild(this.i);
        a.classList.add("ddle20-G");
        this.g = new ji(Bd);
        this.g.wa(!1);
        R(this.g, 0, 0);
        this.g.Aa(-328, -72, 0);
        this.g.setScale(3.44);
        xh(this.g);
        this.addChild(this.g);
        this.j = new J;
        this.addChild(this.j);
        bk() && (this.i.classList.add("ddle20-F"), this.g.Ha(0), a = new U(500, 0, 1, function (c) {
            b.g.Ha(c)
        }, {Ia: Nh}), L(this.j, a));
        this.o = 0
    };
    p(fk, H);
    fk.prototype.update = function (a) {
        H.prototype.update.call(this, a);
        this.o += a;
        a = this.g;
        var b = 4 * Math.sin(this.o / 700);
        a.rb.width = 0;
        a.rb.height = b
    };
    fk.prototype.Da = function () {
        H.prototype.Da.call(this);
        this.i.parentNode.removeChild(this.i);
        this.s.classList.remove("ddle20-G")
    };
    var gk = function (a) {
        var b, c = new Promise(function (g) {
            return b = g
        }), e = document.getElementById("hpcanvas");
        e.classList.add("ddle20-b");
        a.i.classList.remove("ddle20-h");
        var f = new U(500, 1, 0, function (g) {
            a.g.Ha(g)
        }, {Ia: Nh});
        K(a.j, 500, b);
        L(a.j, f);
        K(a.j, 10, function () {
            a.Da();
            e.classList.remove("ddle20-b")
        });
        return c
    };
    var ik = function (a, b, c) {
        S.call(this, b);
        this.v = a;
        this.o = this.H;
        this.setSize(c, c);
        hk(this)
    };
    p(ik, S);
    ik.prototype.Jb = function () {
        return yd.Fa()
    };
    ik.prototype.update = function (a) {
        S.prototype.update.call(this, a);
        this.H != this.o && (this.o = this.H, hk(this))
    };
    var hk = function (a) {
        a.v.style.background = xd(yd.Fa(), a.H, a.getSize().width)
    };
    var kk = function () {
        nh.call(this, "img/earth-day-2020/", jk)
    };
    p(kk, nh);
    var jk = ["svg-sprite.svg"], lk = [0, 20, 20, 48, 48], mk = [0, 20, 88, 48, 48], nk = [0, 20, 156, 48, 48],
        ok = [0, 20, 324, 48, 48], pk = [0, 20, 392, 48, 48];
    Ja(kk);
    var qk = function (a, b) {
        return a.querySelectorAll("." + b)[0]
    }, rk = function (a, b, c, e, f, g) {
        a = qk(b, a);
        e ? (e = kk.Fa(), f /= Math.max(e.Hb(c), e.Fb(c)), f = void 0 === f ? 1 : f, e = oh(e, c), c = "url(" + e.Tb + ") " + (-c[1] * f + "px " + -c[2] * f + "px/") + (e.Wb().width * f + "px " + (e.Wb().height * f + "px no-repeat"))) : c = xd(yd.Fa(), c, f);
        a.style.background = c;
        g && Tf(a, "click", g);
        return a
    };
    var sk = {}, tk = function () {
        throw Error("w");
    };
    tk.prototype.De = null;
    tk.prototype.toString = function () {
        return this.He
    };
    var uk = function () {
        tk.call(this)
    };
    u(uk, tk);
    uk.prototype.Ee = sk;
    pf && zf(8);
    var vk = function (a) {
            function b(c) {
                this.He = c
            }

            b.prototype = a.prototype;
            return function (c, e) {
                c = new b(String(c));
                void 0 !== e && (c.De = e);
                return c
            }
        }(uk), Z = function (a) {
            null != a && a.Ee === sk ? a = String(String(a.He).replace(wk, "").replace(xk, "&lt;")).replace(yk, zk) : (a = String(a), a = Qb(a, void 0));
            return a
        }, Ak = {
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
        }, zk = function (a) {
            return Ak[a]
        }, yk = /[\x00\x22\x27\x3c\x3e]/g, wk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        xk = /</g;
    var Bk = function () {
            return vk('<div class="' + Z("ddle20-g") + " " + Z("ddle20-k") + '"><div class="' + Z("factContents") + '"></div><div class="' + Z("ddle20-i") + '"></div></div>')
        }, Ck = function () {
            return vk('<div class="' + Z("ddle20-j") + '"></div>')
        }, Dk = function () {
            return vk('<div class="' + Z("ddle20-l") + '"><div class="' + Z("ddle20-m") + " " + Z("ddle20-k") + '"><div class="' + Z("ddle20-e") + '"></div><div class="' + Z("ddle20-n") + '"><div class="' + Z("ddle20-u") + '"></div><div class="' + Z("ddle20-v") + '"><div class="' + Z("ddle20-x") +
                '"></div><div class="' + Z("ddle20-w") + '"></div></div><div class="' + Z("ddle20-y") + '"></div></div></div><div class="' + Z("ddle20-o") + '"><div class="' + Z("ddle20-p") + " " + Z("ddle20-i") + '"></div><div class="' + Z("ddle20-q") + '"><div class="' + Z("twitter") + " " + Z("ddle20-i") + '"></div></div><div class="' + Z("ddle20-q") + '"><div class="' + Z("email") + " " + Z("ddle20-i") + '"></div></div><div class="' + Z("ddle20-q") + '"><div class="' + Z("ddle20-t") + " " + Z("ddle20-i") + '"></div></div><div class="' + Z("ddle20-q") + '"><div class="' +
                Z("search") + " " + Z("ddle20-i") + '"></div></div></div></div>')
        }, Ek = function () {
            return vk('<div class="' + Z("ddle20-r") + " " + Z("ddle20-k") + '"><span class="' + Z("ddle20-s") + '"></span><input type="text" class="' + Z("copyText") + '"></div>')
        }, Fk = function () {
            return vk('<div class="' + Z("ddle20-A") + " " + Z("ddle20-k") + '"></div>')
        }, Gk = function () {
            return vk('<div class="' + Z("ddle20-z") + " " + Z("ddle20-k") + '"></div>')
        }, Hk = function () {
            return vk('<div class="' + Z("ddle20-B") + " " + Z("ddle20-k") + '"><div class="' + Z("ddle20-C") + '"></div></div>')
        },
        Ik = function () {
            return vk('<div class="' + Z("ddle20-D") + '"></div>')
        };
    var Jk = [5, 6, 7, 8, 9, 11, 12, 16], Kk = 0, Lk = 0, Mk = !1, Nk = {}, Ok = [], Qk = function (a) {
        Nk.c = a;
        Pk(1)
    }, Pk = function (a) {
        var b = Sa();
        Nk.dt = b - Lk;
        Lk = b;
        0 == a && (Kk = b);
        Nk.e = a;
        Nk.t = 0 == Kk ? -1 : Math.floor(b - Kk);
        Nk.m = Qc ? 1 : 0;
        b = window.document;
        b = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
        b = new E(b.clientWidth, b.clientHeight);
        Nk.w = b.width > b.height ? 1 : 0;
        b = [];
        for (var c in Nk) Nk.hasOwnProperty(c) && b.push(c + ":" + Nk[c]);
        c = b.join(",");
        b = 10 == a;
        var e = 0 <= Jk.indexOf(a);
        Wc() && (c += "&ntp=1");
        b ? (b = qd()) && (c += "&ved=" + b) : e && (nd || ((b = document.getElementById("hplogoshareved")) ?
            nd = b.getAttribute("data-ved") : Yc() && Ic(Jc.g, "sved") && (nd = Jc.g.get("sved"))), (b = nd) && (c += "&ved=" + b));
        -1 == c.search("&ei=") && (c += "&ei=", (b = pd()) && (c += b));
        for (window.google && window.google.log ? window.google.log("doodle", c) : bb(c); 0 < Ok.length;) delete Nk[Ok.pop()];
        Mk || 0 != a || ek() || (Mk = !0, Pk(10))
    };
    var Rk = {
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
        lk: ["en",
            "si", "ta"],
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
    var Sk = function () {
        this.g = this.i = null
    };
    Sk.prototype.load = function (a, b, c, e) {
        var f = this;
        a = Tk(this, a, b, c);
        if (null == a) return Promise.resolve();
        var g = e + "messages." + a + ".nocache.json", h = new Yg;
        h.ya = "text";
        return new Promise(function (k, l) {
            h.addEventListener("success", function () {
                try {
                    var m = h.g ? h.g.responseText : ""
                } catch (q) {
                    m = ""
                }
                f.i = JSON.parse(m.substring(5));
                k()
            });
            h.addEventListener("error", l);
            bh(h, g)
        })
    };
    var Uk = function (a) {
        var b = Sk.Fa();
        if (null == b.i) throw Error("y");
        a = void 0 === b.i[a] ? "" : b.i[a];
        for (var c = b = 0, e = !1, f = a.split(hb), g = 0; g < f.length; g++) {
            var h = f[g];
            fb.test(h) ? (b++, c++) : gb.test(h) ? e = !0 : eb.test(h) ? c++ : ib.test(h) && (e = !0)
        }
        b = 0 == c ? e ? 1 : 0 : .4 < b / c ? -1 : 1;
        return 1 == b ? "\u202a" + a + "\u202c" : -1 == b ? "\u202b" + a + "\u202c" : a
    }, Tk = function (a, b, c, e) {
        var f = b + "-" + c;
        if (-1 < e.indexOf(f)) return a.g = b, f;
        if (b && -1 < e.indexOf(b)) return a.g = b;
        if (c && Rk[c]) for (b = n(Rk[c]), c = b.next(); !c.done; c = b.next()) if (c = c.value, -1 < e.indexOf(c)) return a.g =
            c, a.g;
        return -1 < e.indexOf("en") ? (a.g = "en", a.g) : a.g = null
    };
    Ja(Sk);
    var Vk = function (a) {
        P.call(this);
        this.j = a;
        this.g = {}
    };
    u(Vk, P);
    var Wk = [], Xk = function (a, b, c, e, f) {
        Array.isArray(c) || (c && (Wk[0] = c.toString()), c = Wk);
        for (var g = 0; g < c.length; g++) {
            var h = Tf(b, c[g], e || a.handleEvent, f || !1, a.j || a);
            if (!h) break;
            a.g[h.key] = h
        }
    }, Yk = function (a) {
        wb(a.g, function (b, c) {
            this.g.hasOwnProperty(c) && ag(b)
        }, a);
        a.g = {}
    };
    Vk.prototype.i = function () {
        Vk.mb.i.call(this);
        Yk(this)
    };
    Vk.prototype.handleEvent = function () {
        throw Error("z");
    };
    ha();
    la();
    var Zk = function (a) {
        return 0 == a.indexOf("//") ? "https:" + a : a
    }, $k = function (a, b) {
        var c = new wc, e;
        for (e in b) c.add(e, b[e]);
        a = new rc(a);
        uc(a, c);
        return a.toString()
    }, al = null;
    var cl = function (a) {
        var b = a(bl, void 0);
        a = db || (db = new sg);
        a = rg(a.g, "DIV");
        if (Na(b)) if (b instanceof tk) {
            if (b.Ee !== sk) throw Error("x");
            b = dc(b.toString(), b.De || null)
        } else b = ec("zSoyz"); else b = ec(String(b));
        if (gc()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = cc(b);
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
        return a
    }, bl = {};
    var fl = function (a, b) {
        H.call(this);
        var c = this;
        this.g = cl(Dk);
        a.appendChild(this.g);
        this.i = cl(Ek);
        qk(this.i, "ddle20-s").textContent = Uk("Click to copy");
        this.o = b;
        this.j = "";
        rk("ddle20-e", this.g, C.mf, !1, 40, function () {
            dl(c)
        });
        a = new ik(qk(this.g, "ddle20-u"), me, 80);
        xh(a);
        this.addChild(a);
        rk("ddle20-y", this.g, C.nf, !1, 160, function () {
            dl(c)
        }).textContent = Uk("Continue");
        var e = fd("shortlink", "https://www.google.com/?doodle=144865383");
        a = qk(this.g, "ddle20-o");
        rk("ddle20-p", a, mk, !0, 40, function () {
            var f = e;
            gd() || (f =
                Zk(f), f = $k("https://www.facebook.com/dialog/share", {
                app_id: "738026486351791",
                href: f,
                hashtag: "#GoogleDoodle"
            }), ic(f), Pk(5))
        });
        rk("twitter", a, pk, !0, 32, function () {
            var f = e, g = el(c);
            gd() || (f = Zk(f), f = "text=" + encodeURIComponent(String(g + "\n" + f)), ic("http://twitter.com/intent/tweet?" + f), Pk(6))
        });
        rk("email", a, lk, !0, 32, function () {
            var f = el(c);
            if (!gd()) {
                Pk(8);
                var g = window.top.location, h = e;
                h = Zk(h);
                f = $k("mailto:", {subject: hd, body: f + "\n" + h});
                g.href = f
            }
        });
        rk("ddle20-t", a, nk, !0, 32, function () {
            Pk(16);
            var f = "https:" + fd("shortlink",
                "//www.google.com/?doodle=144865383");
            if (navigator.g) navigator.g.cC(f); else if (document.execCommand) {
                al || (al = document.createElement("input"), al.readOnly = !0, A(al, "position", "absolute", "opacity", 0, "left", 0, "top", 0, "pointerEvents", "none"), document.body.appendChild(al));
                var g = al;
                g.value = f;
                g !== document.activeElement && g.focus();
                var h = document.createRange();
                g.contentEditable = !0;
                g.readOnly = !1;
                h.selectNodeContents(g);
                var k = window.getSelection();
                k.removeAllRanges();
                k.addRange(h);
                g.setSelectionRange(0, g.value.length);
                g.contentEditable = !1;
                g.readOnly = !0;
                g = !1;
                try {
                    g = document.execCommand("copy")
                } catch (l) {
                    g = !1
                }
                window.getSelection().removeAllRanges();
                al.remove();
                al = null;
                g ? Promise.resolve() : Promise.reject()
            } else Promise.reject();
            c.i.classList.add("ddle20-h");
            g = qk(c.i, "copyText");
            g.value = f;
            g.select()
        }).appendChild(this.i);
        rk("search", a, ok, !0, 32, function () {
            Pk(3);
            var f = google.doodle ? google.doodle.url : "";
            if (f) {
                var g;
                (g = (g = !Nc) || Vc()) ? ic(f) : (g = window.top.location, f = f instanceof Ub ? f : Xb(f), g.assign(Vb(f)))
            }
        })
    };
    p(fl, H);
    var gl = function (a, b) {
        Qk(6);
        a.Ba(!0);
        a.j = b;
        a.g.classList.add("ddle20-h");
        a.o.Ba(!1);
        a = qk(a.g, "ddle20-w");
        a.textContent = b;
        b = a.parentElement.clientWidth;
        var c = a.parentElement.clientHeight, e = 8;
        e = void 0 === e ? 10 : e;
        var f = 24;
        for (a.style.fontSize = f + "px"; (a.offsetWidth > b || a.offsetHeight > c) && f > e;) f--, a.style.fontSize = f + "px"
    }, dl = function (a) {
        V.g.vk.play();
        a.o.resume();
        a.g.classList.remove("ddle20-h");
        a.i.classList.remove("ddle20-h");
        a.Ba(!1);
        Qk(7)
    }, el = function (a) {
        var b = Uk("New Share Text");
        return a.j + "\n\n" + b
    };
    var hl = function (a, b) {
        H.call(this);
        var c = this;
        this.j = new J;
        this.addChild(this.j);
        this.s = b;
        this.g = cl(Bk);
        a.appendChild(this.g);
        this.o = qk(this.g, "factContents");
        this.i = "";
        rk("ddle20-i", this.g, C.VB, !1, 40, function () {
            V.g.wk.play();
            c.g.classList.remove("ddle20-h");
            Pk(103);
            gl(c.s, c.i)
        })
    };
    p(hl, H);
    var il = function (a, b) {
        a.i = Uk(Th[b]);
        a.o.textContent = a.i;
        a.g.classList.add("ddle20-h");
        a.j.g = [];
        K(a.j, 5E3, function () {
            return a.g.classList.remove("ddle20-h")
        })
    };
    var jl = new Gb(Eb, Cb(new Bb(zb, "img/earth-day-2020/bootstrap_compiled.js"))), kl = function (a) {
        a = void 0 === a ? !0 : a;
        var b = void 0 === b ? !0 : b;
        return new Promise(function (c) {
            var e = new Worker(Hb(jl).toString(), void 0);
            e.postMessage([Ki.width, Ki.height, a, b]);
            e.onmessage = function (f) {
                f = f.data;
                for (var g = new pj(new E(f.size[0], f.size[1])), h = n(f.terrainData), k = h.next(); !k.done; k = h.next()) k = k.value, k = {
                    anchor: new D(k.anchor[0], k.anchor[1]),
                    shape: k.shape,
                    type: k.type,
                    id: k.id,
                    mirrored: k.mirrored,
                    biome: k.biome
                }, g.o.set(k.id,
                    k);
                h = n(f.noSpawnAreas);
                for (k = h.next(); !k.done; k = h.next()) k = k.value, g.s.push(new M(k[0], k[1], k[2], k[3]));
                g.i = f.map;
                c(g)
            }
        })
    };
    var ll = function (a, b) {
        H.call(this);
        this.g = new J;
        this.addChild(this.g);
        this.j = a;
        this.i = b
    };
    p(ll, H);
    var ml = function (a, b, c) {
        var e = Pj(a.i.g, a.j), f = ii.get(a.j.g).Eb.slice(0);
        vb(f);
        for (var g = {kb: 0}; g.kb < e.length; g = {
            kb: g.kb,
            nb: g.nb
        }, g.kb++) lj(a.i.j, e[g.kb]), g.nb = e[g.kb], K(a.g, 50 + 7 * g.kb, function (k) {
            return function () {
                var l = f[k.kb % f.length];
                di(l, .4);
                l.play();
                mj(a.i.j, k.nb);
                k.nb.wc();
                Ci(k.nb, 1, function () {
                    if (b) for (var m = a.i.g, q = k.nb, w = n(ti(q.v)), B = w.next(); !B.done; B = w.next()) (B = m.g.g.get(ui(B.value))) && B instanceof Di && 3 != B.ha && 1 != B.ha && B.g == q.g && (Rh(Qh.Fa(), 1), Bi(B, 1))
                });
                Ii(k.nb)
            }
        }(g));
        b && 0 < e.length && (K(a.g,
            200, function () {
                vb(e);
                Ai(e[0], !0)
            }), c && Ce(a.g, new U(1E3, .3, 0, function (k) {
            di(c, k)
        }, {Ia: Nh})), K(a.g, 700, function () {
            wj(a.i.o, e)
        }));
        var h;
        g = new Promise(function (k) {
            return h = k
        });
        K(a.g, 0, h);
        return g
    };
    var nl = function (a, b, c, e, f, g) {
        O.call(this);
        ff.j.addChild(this.Na());
        this.j = b;
        this.U = c;
        this.ha = g;
        this.T = cl(Fk);
        a.appendChild(this.T);
        this.v = new Di(f, 1, new D(13, e.getSize().height - 5), 3);
        this.addChild(this.v);
        this.v.Ba(!1);
        this.o = new Di(f, 1, new D(17, e.getSize().height - 5), 4);
        a = e.getSize().height - 5;
        e.i[17][a] = 1;
        this.addChild(this.o);
        this.o.Ba(!1);
        this.H = Qc ? new ji(C.Zz) : new ji(C.qf);
        this.addChild(this.H);
        this.g = new J;
        this.addChild(this.g)
    };
    p(nl, O);
    nl.prototype.play = function () {
        var a = this, b, c = new Promise(function (f) {
            return b = f
        });
        this.T.textContent = Uk("InGame1");
        var e = this.j.Ca().clone();
        this.j.Aa(this.v.Ca().x - 3, this.v.Ca().y);
        this.H.Aa(this.j.Ca().x, this.j.Ca().y - 3.5);
        this.U.Aa(void 0, this.j.Ca().y, -15);
        K(this.g, 500, function () {
            a.v.Ba(!0);
            a.j.U.play(0, !0)
        });
        K(this.g, 1E3, function () {
            return a.o.Ba(!0)
        });
        K(this.g, 0, function () {
            L(a.g, new ej(a.j, 2E3, a.v.Ca().clone().add(new F(2.6, 0, 0)), {Ia: Lh}));
            L(a.g, new ej(a.H, 2E3, a.v.Ca().clone().add(new F(2.6, -3.5,
                0)), {Ia: Lh}))
        });
        K(this.g, 700, function () {
            return Ui(a.j, a.v)
        });
        K(this.g, 700, function () {
            return Hi(a.o)
        });
        K(this.g, 2E3);
        K(this.g, 0, function () {
            L(a.g, new ej(a.j, 2500, a.o.Ca().clone().add(new F(2.6, 0, 0)), {Ia: Lh}));
            L(a.g, new ej(a.H, 2500, a.o.Ca().clone().add(new F(2.6, -3.5, 0)), {Ia: Lh}))
        });
        K(this.g, 700, function () {
            Fi(a.o, function () {
                oi(a.j.v, a.o.g);
                a.ha(a.o)
            })
        });
        K(this.g, 1E3, function () {
            a.T.classList.add("ddle20-h")
        });
        K(this.g, 0, function () {
            L(a.g, new U(1E3, 1, 0, function (f) {
                a.H.Ha(f)
            }, {
                Ia: Nh, Oa: function () {
                    a.H.Ba(!1)
                }
            }))
        });
        K(this.g, 1E3);
        K(this.g, 0, function () {
            Ph(a.j, 1)
        });
        Ce(this.g, [new ej(this.U, 1E3, this.U.Ca().clone().add(new F(0, -5, -5))), new ej(this.j, 2E3, e, {Ia: Lh})]);
        K(this.g, 0, function () {
            a.T.classList.remove("ddle20-h");
            b()
        });
        K(this.g, 1E3, function () {
            return a.T.parentElement.removeChild(a.T)
        });
        K(this.g, 29E3, function () {
            return a.Da()
        });
        return c
    };
    var ol = function (a, b, c, e) {
        H.call(this);
        this.j = a;
        this.i = b;
        this.v = c;
        this.s = e;
        this.g = b.map(function () {
            return !1
        })
    };
    p(ol, H);
    ol.prototype.update = function () {
        for (var a = 0; a < this.i.length; a++) {
            var b = this.o(this.j, this.i[a]);
            this.g[a] != b && (!this.g[a] && b ? (this.g[a] = !0, this.v(this.j, this.i[a])) : this.g[a] && !b && (this.g[a] = !1, this.s && this.s(this.j, this.i[a])))
        }
    };
    ol.prototype.o = function () {
        return !1
    };
    ol.prototype.addListener = function (a) {
        this.i.push(a);
        this.g.push(!1)
    };
    ol.prototype.removeListener = function (a) {
        a = this.i.indexOf(a);
        0 > a || (this.i.splice(a, 1), this.g.splice(a, 1))
    };
    var pl = function (a, b) {
        a.i = b;
        a.g = b.map(function () {
            return !1
        })
    }, ql = function () {
        ol.apply(this, arguments)
    };
    p(ql, ol);
    ql.prototype.o = function (a, b) {
        var c = Math.max(af(a).width, af(a).height) / 2, e = Math.max(af(b).width, af(b).height) / 2;
        return qe(I(a), I(b)) < Math.pow(c, 2) + Math.pow(e, 2)
    };
    var rl = function () {
    };
    rl.prototype.ze = function () {
        return !0
    };
    var vl = function (a, b, c) {
        P.call(this);
        this.ka = a;
        this.wa = b;
        this.ya = c;
        this.ha = Sa();
        this.ta = ed(document, "hidden");
        this.j = (this.U = ed(document, "visibilityState")) ? this.U.replace(/state$/i, "change").toLowerCase() : null;
        this.o = sl(this);
        this.s = !1;
        this.H = this.o;
        tl(this);
        ul(this)
    };
    p(vl, P);
    var tl = function (a) {
        a.j ? wl(a) : Oc && xl(a, function () {
            wl(a)
        })
    }, wl = function (a) {
        a.g = function () {
            a.o = sl(a);
            a.o ? yl(a) : zl(a)
        };
        var b = window.agsa_ext;
        a.j ? document.addEventListener(a.j, a.g, !1) : b && b.registerPageVisibilityListener && (google.doodle || (google.doodle = {}), google.doodle.pvc = function () {
            a.g && a.g()
        }, b.registerPageVisibilityListener("google.doodle.pvc();"))
    }, xl = function (a, b) {
        window.agsa_ext ? b() : a.va = window.setTimeout(function () {
            tl(a)
        }, 100)
    };
    vl.prototype.i = function () {
        window.clearTimeout(this.Xa);
        window.clearTimeout(this.va);
        this.g && (this.j && document.removeEventListener ? document.removeEventListener(this.j, this.g, !1) : window.agsa_ext && window.agsa_ext.registerPageVisibilityListener && (this.g = null));
        P.prototype.i.call(this)
    };
    var sl = function (a) {
        if (!a.ta && !a.U && window.agsa_ext && window.agsa_ext.getPageVisibility) return "hidden" == window.agsa_ext.getPageVisibility();
        var b = document[a.U];
        return document[a.ta] || "hidden" == b
    }, yl = function (a) {
        var b = a.o || a.s;
        a.H && !b ? (a.H = !1, a.ya(), ul(a)) : !a.H && b && (a.H = !0, a.wa())
    }, ul = function (a) {
        a.Xa && window.clearTimeout(a.Xa);
        var b = Math.max(100, a.ka - Al(a));
        a.Xa = window.setTimeout(function () {
            a.Xa = null;
            a.s = Al(a) >= a.ka;
            a.s || ul(a);
            yl(a)
        }, b)
    }, Al = function (a) {
        return Sa() - a.ha
    }, zl = function (a) {
        a.ha = Sa();
        a.s =
            !1;
        yl(a)
    };
    var Bl = function () {
    };
    p(Bl, rl);
    Bl.prototype.contains = function () {
        return !1
    };
    var Dl = function (a, b) {
        this.o = a;
        this.ka = void 0 === b ? null : b;
        this.j = [];
        this.g = null;
        this.v = this.s = 0;
        this.ta = this.H = !1;
        this.T = [];
        this.U = this.va = 1;
        this.wa = [this.o];
        this.ha = !1;
        Cl(this)
    }, Cl = function (a, b) {
        void 0 !== b && (a.ha = b);
        a.va = a.o.width / a.o.clientWidth;
        a.U = a.o.height / a.o.clientHeight
    }, Fl = function (a, b) {
        a.j.push(new El(b))
    }, Jl = function (a) {
        for (var b = Gl, c = a.j.length - 1; 0 <= c; c--) a.j[c].i === b && a.j.splice(c, 1);
        a.g && b === a.g.i && (a.g = null, Hl(a));
        a.i && b === a.i.i && (a.i = null);
        Il(a, "areamove", a.s, a.v)
    };
    Dl.prototype.handleEvent = function (a) {
        var b = a.j;
        var c = void 0;
        b = (b = b || window.event) ? (c = c || b.targetTouches && b.targetTouches[0] || b.changedTouches && b.changedTouches[0]) && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== b.clientX ? [b.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), b.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== b.pageX ? [b.pageX, b.pageY] : [0, 0] : [0, 0];
        c = this.o;
        var e = 0, f = 0;
        if (c) {
            do e += c.offsetLeft, f += c.offsetTop;
            while (c = c.offsetParent)
        }
        c = [e, f];
        b = [b[0] - c[0], b[1] - c[1]];
        this.ha && (c = b[0], b[0] = b[1], b[1] = 0 - c);
        b[0] *= this.va;
        b[1] *= this.U;
        c = b[0];
        b = b[1];
        this.ka && zl(this.ka);
        this.s = c;
        this.v = b;
        a = a.type;
        this.ta && 0 == a.indexOf("mouse") || (b = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove"
        }, a in b && (this.ta = !0, a = b[a]), Il(this, a, this.s, this.v))
    };
    var Il = function (a, b, c, e) {
        if (!a.H && "mousedown" == b) {
            a.H = !0;
            for (var f = 0; f < a.T.length; f++) a.T[f]()
        }
        if ("mousedown" == b) {
            if (!a.i) for (b = 0; b < a.j.length; b++) if (f = a.j[b], f.i.contains(c, e)) {
                a.i = f;
                f.g("mousedown", c, e);
                break
            }
        } else if ("mouseup" == b) a.i ? (a.i.g("mouseup", c, e), a.i = null) : a.g && a.g.g("mouseup", c, e); else if ("mousemove" == b || "areamove" == b) {
            f = null;
            for (var g = 0; g < a.j.length; g++) {
                var h = a.j[g];
                if (h.i.contains(c, e)) {
                    f = h;
                    break
                }
            }
            a.g != f && (a.g && a.g.g("mouseout", c, e), f && f.g("mouseover", c, e), a.g = f);
            if ("mousemove" == b) for (a.i &&
                                       a.i.g("mousemove", c, e), b = 0; b < a.j.length; b++) f = a.j[b], f != a.i && f.i.contains(c, e) && f.g("mousemove", c, e)
        } else "mouseout" == b ? (a.g && a.g.g("mouseout", c, e), a.i = null, a.g = null) : "contextmenu" == b && a.g && a.g.g("contextmenu", c, e);
        Hl(a)
    }, Hl = function (a) {
        for (var b = a.g && a.g.i.ze() ? "pointer" : "default", c = 0, e; e = a.wa[c]; c++) A(e, "cursor", b)
    }, El = function (a) {
        this.i = Gl;
        this.g = a
    }, Gl = function () {
        var a = new Bl;
        a.contains = function () {
            return !0
        };
        a.ze = function () {
            return !1
        };
        return a
    }();
    var Nl = function (a, b, c, e, f, g) {
        H.call(this);
        var h = this;
        this.ya = f;
        e = cl(Ck);
        f.appendChild(e);
        var k = Math.pow(1 * Ki.width, 2);
        this.j = b;
        Te(this.j, function (l) {
            return 0 >= l.V
        });
        Ue(this.j, function (l) {
            return qe(l, I(h.j)) > Math.pow(I(h.j).V, 2) + k
        });
        this.T = new cj(this.j);
        this.addChild(this.T);
        this.i = new Li(this.j);
        Ni(this.i);
        this.s = new vi;
        this.U = a;
        this.H = null;
        this.ka = function () {
        };
        this.ha = 0;
        a = xi(this.s, Ki.width / 2, Ki.height);
        this.i.Aa(a.x, a.y - 10);
        this.j.Aa(this.i.Ca().x, this.i.Ca().y, -20);
        this.wa = new Gj(b, -I(this.j).V);
        this.addChild(this.wa);
        this.o = this.g = null;
        this.v = new fl(f, this.T);
        this.addChild(this.v);
        this.v.Ba(!1);
        this.va = new hl(f, this.v);
        this.addChild(this.va);
        this.tc = new ql(this.i.T, [], function (l, m) {
            Kl(h, m)
        }, function (l, m) {
            m instanceof Di && Gi(m)
        });
        this.addChild(this.tc);
        this.ta = new J;
        this.addChild(this.ta);
        Ll(this, g, c);
        Ml(this);
        Qh.Fa().addListener(this, 2)
    };
    p(Nl, H);
    var Ll = function (a, b, c) {
        Fl(b, function (e, f, g) {
            ["mousemove", "touchmove", "mousedown", "touchstart"].includes(e) && (Qc && (g -= 120), e = a.i, f = jc(f, 70, c.width - 70), g = jc(g, 120, c.height), void 0 !== f && (e.j.x = f), void 0 !== g && (e.j.y = g), e.j.V = 1)
        })
    }, Ol = function (a, b) {
        a = a.g.v;
        if (!a) return !1;
        a = a.g;
        return b.Ca().y > a.g + 5 && 0 != a.g
    };
    Nl.prototype.update = function () {
        this.g.v && Pl(this);
        this.o && this.o.U.g.y > this.j.Ca().y + 10 && (this.o.Da(), this.o = null)
    };
    var Pl = function (a) {
        if (a.g) {
            a.g.o.g.Fe().filter(function (k) {
                return Ol(a, k)
            }).map(function (k) {
                return k.Da()
            });
            var b = a.g.j;
            kj(b).filter(function (k) {
                return Ol(a, k)
            }).map(function (k) {
                k.Da();
                b.g.delete(ui(k.v))
            });
            for (var c = a.g.H, e = [], f = n(c.j.entries()), g = f.next(); !g.done; g = f.next()) {
                g = g.value;
                var h = g[1];
                Ol(a, h) && (Eh(h), e.push(g))
            }
            e = n(e);
            for (g = e.next(); !g.done; g = e.next()) c.j.delete(g.value[0])
        }
    }, Ql = function (a, b, c) {
        a.s = c;
        a.U = b;
        var e = a.g;
        e && (e.g = null);
        a.g = new ak(b, c, a.wa);
        a.addChild(a.g);
        pl(a.tc, kj(a.g.j));
        a.H = new Promise(function (f) {
            return a.ka = f
        });
        a.o && (a.o.Da(), a.o = null);
        a.o = e
    }, Ml = function (a) {
        var b;
        Da(function (c) {
            if (1 == c.g) return a.addChild(a.i), Ql(a, a.U, a.s), b = new nl(a.ya, a.i, a.j, a.U, a.s, function (e) {
                mj(a.g.j, e);
                Rl(a, e, null, !1)
            }), a.addChild(b), V.g.Rd.play(), di(V.g.Xd, .9), V.g.Xd.play(V.g.Rd.v, !0), Qk(3), r(c, b.play(), 2);
            V.g.Rb.stop();
            V.g.Jc.stop();
            Qk(4);
            Si(a.i);
            Sl(a);
            c.g = 0
        })
    }, Sl = function (a) {
        var b, c;
        Da(function (e) {
            if (1 == e.g) return b = xi(a.s, 0, 6).y, c = 1 * a.s.i.height, r(e, Promise.race([dj(a.T, b, c), a.H]),
                2);
            Tl(a);
            e.g = 0
        })
    }, Tl = function (a) {
        var b, c, e;
        Da(function (f) {
            if (1 == f.g) return r(f, kl(!1), 2);
            if (3 != f.g) return b = f.s, r(f, a.H, 3);
            c = xi(a.s, 0, -Ki.height);
            e = new vi(c);
            Ql(a, b, e);
            Sl(a);
            f.g = 0
        })
    }, Kl = function (a, b) {
        if (b instanceof Di) {
            if (a.g.g) if (Vi(a.i, b)) Fi(b, function (h) {
                return Rl(a, b, h)
            }); else if (Ti(b)) {
                Ui(a.i, b);
                for (var c = {}, e = n(Qj(a.g.g)), f = e.next(); !f.done; c = {Qb: c.Qb}, f = e.next()) f = f.value, f instanceof Di && (c.Qb = f, c.Qb.g == b.g && 0 == c.Qb.ha && K(a.ta, 500, function (h) {
                    return function () {
                        Hi(h.Qb)
                    }
                }(c)))
            }
        } else {
            Qk(5);
            a.tc.removeListener(b);
            Ri(a.i);
            var g = new ll(b, a.g);
            a.addChild(g);
            ml(g, !1, null);
            b.kc();
            b.play().then(function () {
                b.Da();
                g.Da();
                a.ka()
            });
            c = b.U;
            a.ha++;
            3 == a.ha ? (c = Uk(Th[c]), gl(a.v, c)) : il(a.va, c)
        }
    }, Rl = function (a, b, c, e) {
        e = void 0 === e ? !0 : e;
        var f;
        return Da(function (g) {
            if (1 == g.g) return oi(a.i.v, b.g), f = new ll(b, a.g), a.addChild(f), r(g, ml(f, e, c), 2);
            f.Da();
            g.g = 0
        })
    };
    var Ul = {
        width: 360,
        height: 323,
        frames: [[[115, 135, 0, 1626, 35, 23, 0], [108, 189, 495, 1483, 29, 25, 0], [157, 97, 491, 1655, 29, 23, 0], [153, 165, 270, 1954, 9, 8, 0], [157, 178, 555, 1651, 29, 24, 0], [201, 125, 1220, 818, 34, 24, 0], [223, 155, 85, 1628, 35, 23, 0]], [[114, 136, 765, 1406, 13, 22, 0], [107, 190, 1552, 1642, 30, 23, 0], [138, 136, 1080, 1457, 12, 22, 0], [157, 99, 33, 1833, 10, 20, 0], [153, 166, 561, 599, 9, 7, 0], [157, 180, 176, 1625, 11, 20, 0], [177, 99, 1090, 276, 8, 20, 0], [177, 180, 1851, 1721, 9, 20, 0], [201, 127, 44, 1833, 10, 20, 0], [226, 127, 1633, 1767, 9, 20, 0], [223, 156, 985, 1716,
            12, 21, 0], [248, 156, 1718, 278, 9, 21, 0]], [[112, 136, 1464, 364, 14, 22, 0], [106, 190, 1387, 1643, 30, 23, 0], [137, 136, 432, 1062, 11, 22, 0], [156, 100, 363, 1881, 10, 18, 0], [154, 165, 598, 1706, 8, 8, 0], [157, 180, 55, 1833, 10, 20, 0], [177, 100, 451, 1661, 8, 18, 0], [177, 180, 1364, 1911, 9, 20, 0], [200, 128, 1540, 1668, 10, 19, 0], [226, 127, 1443, 1212, 8, 19, 0], [222, 156, 1266, 1716, 12, 21, 0], [247, 156, 939, 621, 10, 21, 0]], [[111, 136, 1485, 1629, 35, 22, 0], [106, 190, 701, 1655, 29, 23, 0], [156, 99, 433, 1833, 10, 20, 0], [154, 165, 1385, 1783, 8, 8, 0], [157, 180, 444, 1833, 10, 20, 0], [176, 99,
            1374, 1911, 9, 20, 0], [177, 180, 1090, 297, 8, 20, 0], [200, 127, 420, 1838, 10, 20, 0], [226, 127, 1090, 318, 8, 20, 0], [222, 156, 72, 1630, 11, 21, 0], [246, 156, 939, 643, 10, 21, 0]], [[110, 136, 535, 790, 36, 22, 0], [105, 190, 176, 1646, 30, 23, 0], [156, 99, 467, 1838, 10, 20, 0], [154, 165, 280, 1954, 9, 8, 0], [156, 180, 1325, 1768, 11, 20, 0], [176, 99, 1090, 339, 8, 20, 0], [176, 180, 1384, 1911, 9, 20, 0], [200, 127, 1011, 1726, 10, 19, 0], [226, 128, 859, 1784, 8, 19, 0], [221, 156, 1279, 1716, 12, 21, 0], [246, 156, 704, 300, 9, 21, 0]], [[108, 136, 541, 1546, 36, 22, 0], [104, 190, 207, 1647, 30, 23, 0], [155,
            99, 478, 1838, 10, 20, 0], [155, 165, 931, 1808, 8, 8, 0], [156, 180, 489, 1838, 10, 20, 0], [174, 98, 939, 665, 10, 21, 0], [176, 180, 1454, 519, 8, 20, 0], [199, 128, 374, 1881, 10, 18, 0], [226, 128, 1709, 654, 7, 18, 0], [220, 156, 1292, 1716, 12, 21, 0], [245, 156, 704, 1359, 10, 21, 0]], [[107, 136, 36, 1630, 35, 22, 0], [103, 190, 630, 1646, 30, 23, 0], [155, 99, 530, 1880, 10, 19, 0], [155, 165, 290, 1954, 9, 8, 0], [155, 180, 1121, 1769, 11, 20, 0], [175, 99, 1241, 1964, 8, 18, 0], [175, 180, 1394, 1911, 9, 20, 0], [199, 127, 500, 1838, 10, 20, 0], [225, 127, 1454, 540, 8, 20, 0], [220, 156, 1704, 1760, 11, 21, 0], [244,
            156, 704, 1381, 10, 21, 0]], [[106, 136, 1086, 1630, 35, 22, 0], [102, 190, 1281, 1647, 30, 23, 0], [155, 99, 511, 1838, 10, 20, 0], [156, 165, 851, 980, 9, 9, 0], [155, 180, 522, 1838, 10, 20, 0], [174, 99, 1404, 1911, 9, 20, 0], [175, 180, 1414, 1911, 9, 20, 0], [199, 127, 541, 1881, 10, 19, 0], [225, 128, 236, 402, 7, 19, 0], [219, 156, 1305, 1716, 12, 21, 0], [244, 156, 1718, 300, 9, 21, 0]], [[104, 136, 1403, 1556, 36, 22, 0], [102, 190, 839, 1660, 29, 23, 0], [154, 99, 533, 1838, 10, 20, 0], [156, 166, 300, 1954, 9, 8, 0], [155, 180, 544, 1839, 10, 20, 0], [173, 98, 1367, 1441, 10, 21, 0], [174, 180, 1452, 1911, 9, 20,
            0], [198, 127, 1133, 1769, 11, 20, 0], [224, 127, 1454, 561, 8, 20, 0], [218, 156, 1318, 1716, 12, 21, 0], [243, 156, 49, 1499, 10, 21, 0]], [[103, 136, 1677, 1630, 35, 22, 0], [101, 190, 1748, 1647, 30, 23, 0], [154, 99, 555, 1839, 10, 20, 0], [157, 166, 310, 1954, 9, 8, 0], [154, 181, 385, 1881, 10, 18, 0], [174, 99, 674, 608, 8, 20, 0], [174, 180, 574, 936, 5, 7, 0], [177, 188, 1781, 1463, 6, 12, 0], [198, 127, 552, 1881, 10, 19, 0], [225, 128, 762, 911, 7, 18, 0], [218, 156, 1716, 1760, 11, 21, 0], [242, 156, 682, 1512, 10, 21, 0]], [[102, 136, 768, 1631, 35, 22, 0], [100, 190, 1779, 1647, 30, 23, 0], [154, 100, 112, 582,
            9, 18, 0], [158, 166, 1319, 1266, 9, 9, 0], [154, 180, 566, 1839, 10, 20, 0], [174, 100, 1250, 1964, 8, 18, 0], [174, 180, 1462, 1911, 9, 20, 0], [198, 127, 577, 1839, 10, 20, 0], [223, 127, 1472, 1911, 9, 20, 0], [217, 156, 1721, 1716, 12, 21, 0], [242, 156, 704, 322, 9, 21, 0]], [[100, 136, 1730, 1616, 36, 22, 0], [99, 190, 121, 1648, 30, 23, 0], [153, 99, 588, 1839, 10, 20, 0], [158, 166, 429, 804, 10, 10, 0], [154, 180, 626, 1838, 10, 20, 0], [173, 99, 1482, 1911, 9, 20, 0], [173, 180, 1492, 1911, 9, 20, 0], [197, 128, 563, 1881, 10, 19, 0], [223, 127, 1693, 1839, 8, 19, 0], [216, 156, 1734, 1716, 12, 21, 0], [241, 156,
            391, 1579, 10, 21, 0]], [[99, 136, 227, 1624, 36, 22, 0], [98, 190, 913, 1648, 30, 23, 0], [153, 99, 637, 1839, 10, 20, 0], [159, 167, 1339, 1804, 11, 11, 0], [153, 180, 648, 1839, 10, 20, 0], [173, 99, 674, 629, 8, 20, 0], [173, 180, 1502, 1912, 9, 20, 0], [197, 127, 574, 1881, 10, 19, 0], [224, 128, 948, 913, 7, 18, 0], [216, 156, 1728, 1760, 11, 21, 0], [240, 156, 85, 1589, 10, 21, 0]], [[98, 136, 488, 1632, 35, 22, 0], [98, 190, 874, 1649, 30, 23, 0], [152, 99, 1798, 1673, 29, 19, 0], [153, 170, 1158, 1367, 28, 30, 0], [197, 127, 659, 1839, 10, 20, 0], [222, 127, 674, 650, 8, 20, 0], [215, 156, 1747, 1716, 12, 21, 0], [240,
            156, 1718, 322, 9, 21, 0]], [[96, 136, 1287, 1624, 36, 22, 0], [97, 190, 1810, 1649, 30, 23, 0], [152, 99, 670, 1839, 10, 20, 0], [152, 180, 290, 1770, 11, 20, 0], [172, 99, 1300, 955, 8, 20, 0], [164, 174, 1789, 1327, 17, 26, 0], [196, 128, 396, 1881, 10, 18, 0], [223, 128, 1099, 1113, 7, 18, 0], [214, 156, 1760, 1716, 12, 21, 0], [239, 156, 704, 344, 9, 21, 0]], [[95, 136, 1767, 1624, 36, 22, 0], [96, 190, 1841, 1649, 30, 23, 0], [152, 99, 681, 1839, 10, 20, 0], [152, 180, 692, 1839, 10, 20, 0], [171, 99, 1512, 1912, 9, 20, 0], [170, 180, 1004, 1705, 18, 20, 0], [196, 127, 703, 1839, 10, 20, 0], [222, 127, 1300, 976, 8, 20,
            0], [214, 156, 1740, 1760, 11, 21, 0], [238, 156, 1312, 1647, 10, 21, 0]], [[94, 136, 717, 1632, 35, 22, 0], [95, 190, 0, 1650, 30, 23, 0], [151, 99, 814, 1838, 10, 20, 0], [152, 180, 825, 1838, 10, 20, 0], [170, 98, 1867, 1764, 10, 21, 0], [171, 180, 213, 1695, 17, 20, 0], [196, 127, 585, 1881, 10, 19, 0], [192, 184, 1544, 1954, 9, 9, 0], [222, 128, 236, 422, 7, 19, 0], [213, 156, 1773, 1717, 12, 21, 0], [238, 156, 1718, 344, 9, 21, 0]], [[92, 136, 139, 1625, 36, 22, 0], [95, 190, 1021, 1660, 29, 23, 0], [151, 99, 407, 1881, 10, 18, 0], [151, 180, 836, 1838, 10, 20, 0], [171, 99, 18, 1964, 8, 19, 0], [171, 180, 1522, 1912,
            9, 20, 0], [195, 127, 1058, 1228, 34, 20, 0], [212, 156, 1786, 1717, 12, 21, 0], [192, 178, 1081, 1137, 20, 15, 0], [237, 156, 1718, 366, 9, 21, 0]], [[91, 136, 913, 1625, 36, 22, 0], [94, 190, 524, 1651, 30, 23, 0], [150, 99, 1083, 1770, 11, 20, 0], [151, 180, 752, 1839, 10, 20, 0], [170, 99, 1532, 1912, 9, 20, 0], [171, 180, 1300, 997, 8, 20, 0], [195, 127, 391, 1640, 34, 20, 0], [210, 156, 753, 1632, 13, 21, 0], [203, 178, 320, 1954, 9, 8, 0], [236, 156, 1681, 1806, 10, 21, 0]], [[89, 136, 1464, 387, 14, 22, 0], [93, 198, 1090, 360, 8, 15, 0], [114, 136, 831, 1182, 11, 22, 0], [104, 190, 951, 415, 19, 23, 0], [150, 99, 763,
            1839, 10, 20, 0], [150, 180, 1095, 1770, 11, 20, 0], [169, 98, 1592, 1806, 10, 21, 0], [170, 180, 1542, 1912, 9, 20, 0], [195, 127, 620, 1880, 10, 19, 0], [221, 128, 576, 1245, 7, 18, 0], [210, 156, 1117, 1713, 13, 21, 0], [236, 156, 112, 384, 9, 21, 0]], [[88, 136, 1131, 1713, 13, 21, 0], [92, 198, 1495, 1697, 8, 15, 0], [113, 136, 939, 575, 10, 22, 0], [103, 190, 951, 439, 19, 23, 0], [150, 99, 774, 1839, 10, 20, 0], [150, 180, 631, 1881, 10, 19, 0], [170, 99, 79, 1025, 8, 20, 0], [170, 180, 79, 1046, 8, 20, 0], [194, 127, 1107, 1770, 11, 20, 0], [220, 127, 79, 1067, 8, 20, 0], [210, 151, 768, 1703, 12, 26, 0], [235, 156, 1718,
            388, 9, 21, 0]], [[87, 136, 765, 1429, 13, 22, 0], [91, 198, 1256, 1721, 8, 15, 0], [111, 136, 1410, 1714, 12, 22, 0], [102, 190, 951, 463, 19, 23, 0], [149, 99, 785, 1839, 10, 20, 0], [150, 180, 847, 1839, 10, 20, 0], [169, 99, 480, 1680, 9, 19, 0], [169, 180, 1552, 1912, 9, 20, 0], [194, 127, 453, 1881, 10, 18, 0], [221, 129, 339, 1617, 6, 11, 0], [208, 141, 951, 316, 19, 36, 0], [234, 156, 1214, 1808, 10, 21, 0]], [[85, 136, 1464, 410, 14, 22, 0], [91, 198, 250, 1984, 7, 15, 0], [110, 136, 1201, 1548, 11, 22, 0], [101, 190, 306, 1119, 19, 23, 0], [149, 99, 858, 1839, 10, 20, 0], [149, 180, 1448, 1770, 11, 20, 0], [169, 99,
            1443, 1191, 8, 20, 0], [169, 180, 1562, 1912, 9, 20, 0], [193, 127, 114, 1771, 11, 20, 0], [205, 127, 1204, 409, 22, 26, 0], [209, 156, 1799, 1717, 12, 21, 0], [234, 156, 112, 406, 9, 21, 0]], [[84, 136, 1864, 1567, 13, 22, 0], [90, 198, 835, 1766, 8, 15, 0], [108, 136, 1423, 1714, 12, 22, 0], [100, 190, 376, 1175, 20, 23, 0], [149, 99, 986, 1838, 10, 20, 0], [149, 180, 923, 1839, 10, 20, 0], [168, 99, 1572, 1911, 9, 20, 0], [169, 180, 141, 1218, 8, 20, 0], [193, 127, 1558, 1423, 34, 22, 0], [208, 156, 1812, 1717, 12, 21, 0], [233, 156, 1718, 410, 9, 21, 0]], [[83, 136, 1185, 1582, 13, 22, 0], [89, 198, 943, 1975, 8, 15, 0],
            [107, 136, 573, 1614, 11, 22, 0], [100, 190, 1747, 1125, 19, 23, 0], [148, 99, 934, 1839, 10, 20, 0], [148, 180, 126, 1771, 11, 20, 0], [168, 99, 859, 1934, 9, 19, 0], [168, 180, 1620, 1911, 9, 20, 0], [193, 127, 426, 1640, 34, 20, 0], [208, 156, 1752, 1760, 11, 21, 0], [232, 156, 1225, 1808, 10, 21, 0]], [[81, 136, 1464, 433, 14, 22, 0], [88, 198, 952, 1975, 8, 15, 0], [106, 136, 334, 1630, 11, 22, 0], [99, 190, 306, 1143, 19, 23, 0], [148, 99, 945, 1839, 10, 20, 0], [148, 180, 956, 1839, 10, 20, 0], [168, 99, 141, 1239, 8, 20, 0], [168, 180, 1630, 1911, 9, 20, 0], [193, 128, 1864, 1590, 13, 18, 0], [219, 128, 576, 1264, 7,
            18, 0], [207, 156, 1825, 1717, 12, 21, 0], [232, 156, 112, 428, 9, 21, 0]], [[80, 136, 1185, 1605, 13, 22, 0], [87, 198, 961, 1975, 8, 15, 0], [104, 136, 1436, 1714, 12, 22, 0], [98, 190, 1506, 1233, 19, 23, 0], [147, 99, 138, 1771, 11, 20, 0], [148, 180, 967, 1839, 10, 20, 0], [167, 99, 1640, 1911, 9, 20, 0], [168, 180, 1595, 1266, 8, 20, 0], [192, 127, 150, 1771, 11, 20, 0], [218, 127, 716, 1274, 8, 20, 0], [206, 156, 89, 1717, 12, 21, 0], [231, 156, 1718, 432, 9, 21, 0]], [[79, 136, 1185, 1628, 13, 22, 0], [87, 198, 258, 1984, 7, 15, 0], [103, 136, 1289, 1760, 11, 22, 0], [97, 190, 1857, 1183, 20, 23, 0], [147, 99, 997, 1839,
            10, 20, 0], [147, 180, 591, 1771, 11, 20, 0], [166, 98, 1457, 1808, 10, 21, 0], [167, 180, 1650, 1911, 9, 20, 0], [190, 127, 1296, 1021, 12, 18, 0], [206, 156, 1764, 1761, 11, 21, 0], [218, 128, 27, 1965, 8, 19, 0], [230, 156, 1812, 1808, 10, 21, 0]], [[78, 136, 1449, 1714, 12, 22, 0], [86, 198, 970, 1975, 8, 15, 0], [102, 136, 1301, 1760, 11, 22, 0], [97, 190, 902, 1410, 19, 23, 0], [147, 99, 642, 1881, 10, 19, 0], [147, 180, 1008, 1839, 10, 20, 0], [167, 99, 36, 1965, 8, 19, 0], [167, 180, 716, 1295, 8, 20, 0], [190, 128, 156, 1091, 11, 18, 0], [205, 156, 102, 1717, 12, 21, 0], [218, 128, 576, 1283, 7, 18, 0], [230, 156, 112,
            450, 9, 21, 0]], [[76, 136, 882, 1694, 13, 22, 0], [85, 198, 979, 1975, 8, 15, 0], [100, 136, 131, 1715, 12, 22, 0], [96, 190, 902, 1434, 19, 23, 0], [146, 99, 1019, 1839, 10, 20, 0], [146, 180, 603, 1771, 11, 20, 0], [165, 98, 12, 1809, 10, 21, 0], [166, 180, 1660, 1911, 9, 20, 0], [189, 127, 780, 1357, 12, 20, 0], [204, 156, 115, 1717, 12, 21, 0], [217, 127, 131, 1302, 8, 20, 0], [229, 156, 1718, 454, 9, 21, 0]], [[74, 136, 1464, 456, 14, 22, 0], [84, 198, 1021, 1975, 8, 15, 0], [99, 136, 78, 1761, 11, 22, 0], [95, 190, 822, 1454, 19, 23, 0], [146, 99, 1228, 1838, 10, 20, 0], [146, 180, 1239, 1838, 10, 20, 0], [166, 99, 131,
            1323, 8, 20, 0], [166, 180, 1670, 1911, 9, 20, 0], [186, 127, 1725, 1291, 15, 19, 0], [203, 156, 299, 1714, 12, 21, 0], [217, 128, 45, 1965, 8, 19, 0], [228, 156, 23, 1809, 10, 21, 0]], [[74, 136, 144, 1715, 12, 22, 0], [84, 198, 266, 1984, 7, 15, 0], [98, 136, 90, 1761, 11, 22, 0], [94, 190, 768, 1593, 19, 23, 0], [146, 99, 1250, 1838, 10, 20, 0], [146, 180, 1261, 1839, 10, 20, 0], [165, 99, 1680, 1911, 9, 20, 0], [166, 180, 641, 1326, 8, 20, 0], [181, 127, 1093, 1228, 20, 20, 0], [203, 156, 1776, 1761, 11, 21, 0], [216, 127, 694, 1450, 8, 20, 0], [228, 156, 112, 472, 9, 21, 0]], [[72, 136, 1862, 1697, 13, 22, 0], [83, 198,
            274, 1984, 7, 15, 0], [96, 136, 157, 1715, 12, 22, 0], [93, 190, 376, 1199, 20, 23, 0], [145, 99, 1272, 1839, 10, 20, 0], [145, 181, 653, 1881, 10, 19, 0], [165, 99, 869, 1934, 9, 19, 0], [172, 127, 550, 1676, 28, 23, 0], [165, 180, 1690, 1911, 9, 20, 0], [202, 156, 312, 1717, 12, 21, 0], [217, 128, 576, 1302, 7, 18, 0], [227, 156, 1718, 476, 9, 21, 0]], [[70, 136, 1464, 479, 14, 22, 0], [82, 198, 1030, 1975, 8, 15, 0], [95, 136, 102, 1761, 11, 22, 0], [93, 190, 1565, 1598, 19, 23, 0], [145, 99, 1283, 1839, 10, 20, 0], [145, 180, 1294, 1839, 10, 20, 0], [165, 99, 118, 1457, 8, 20, 0], [160, 139, 1108, 1075, 21, 11, 0], [165,
            180, 118, 1478, 8, 20, 0], [190, 127, 1335, 1838, 10, 20, 0], [201, 156, 325, 1717, 12, 21, 0], [215, 127, 1700, 1911, 9, 20, 0], [226, 156, 813, 1809, 10, 21, 0]], [[70, 136, 170, 1716, 12, 22, 0], [81, 198, 1039, 1975, 8, 15, 0], [94, 136, 163, 1761, 11, 22, 0], [92, 190, 1850, 1610, 19, 23, 0], [144, 99, 615, 1772, 11, 20, 0], [145, 180, 1346, 1838, 10, 20, 0], [163, 98, 1041, 1809, 10, 21, 0], [156, 136, 1384, 1300, 13, 12, 0], [164, 180, 1710, 1911, 9, 20, 0], [189, 128, 664, 1881, 10, 19, 0], [201, 156, 1788, 1761, 11, 21, 0], [216, 128, 290, 1535, 7, 18, 0], [226, 156, 112, 494, 9, 21, 0]], [[68, 136, 1396, 1701, 13,
            22, 0], [80, 198, 1556, 1975, 8, 15, 0], [92, 136, 598, 1715, 12, 22, 0], [91, 190, 1021, 1632, 19, 23, 0], [144, 99, 1357, 1838, 10, 20, 0], [144, 180, 1368, 1838, 10, 20, 0], [164, 99, 879, 1934, 9, 19, 0], [155, 132, 49, 1521, 10, 12, 0], [164, 180, 1720, 1911, 9, 20, 0], [189, 127, 675, 1881, 10, 19, 0], [200, 156, 338, 1717, 12, 21, 0], [216, 128, 290, 1554, 7, 18, 0], [225, 156, 112, 516, 9, 21, 0]], [[66, 136, 185, 795, 14, 22, 0], [80, 198, 282, 1984, 7, 15, 0], [91, 136, 645, 1761, 11, 22, 0], [90, 190, 965, 1249, 20, 23, 0], [144, 99, 1379, 1838, 10, 20, 0], [154, 129, 802, 1692, 9, 12, 0], [144, 180, 1390, 1838, 10,
            20, 0], [164, 99, 118, 1499, 8, 20, 0], [164, 180, 668, 1604, 8, 20, 0], [189, 127, 1401, 1838, 10, 20, 0], [199, 156, 351, 1717, 12, 21, 0], [214, 127, 1730, 1912, 9, 20, 0], [224, 156, 1052, 1809, 10, 21, 0]], [[66, 136, 624, 1717, 12, 21, 0], [79, 198, 576, 1976, 8, 15, 0], [90, 136, 1383, 1760, 11, 22, 0], [90, 190, 1418, 1643, 19, 23, 0], [143, 98, 421, 1661, 29, 21, 0], [154, 126, 668, 1625, 8, 11, 0], [143, 180, 1386, 1667, 29, 20, 0], [188, 128, 686, 1881, 10, 19, 0], [199, 156, 1800, 1761, 11, 21, 0], [215, 128, 1870, 1609, 7, 18, 0], [224, 156, 112, 538, 9, 21, 0]], [[64, 136, 1190, 1703, 13, 22, 0], [78, 198, 585,
            1976, 8, 15, 0], [88, 136, 611, 1715, 12, 22, 0], [89, 190, 731, 1655, 19, 23, 0], [143, 99, 1412, 1838, 10, 20, 0], [143, 180, 1423, 1838, 10, 20, 0], [154, 125, 1454, 582, 8, 10, 0], [163, 99, 1740, 1912, 9, 20, 0], [163, 180, 62, 1653, 8, 20, 0], [188, 127, 1434, 1838, 10, 20, 0], [198, 156, 637, 1717, 12, 21, 0], [214, 127, 470, 1701, 8, 20, 0], [223, 156, 112, 560, 9, 21, 0]], [[63, 136, 1042, 1705, 13, 22, 0], [77, 198, 594, 1976, 8, 15, 0], [87, 136, 1501, 1760, 11, 22, 0], [88, 190, 212, 1671, 19, 23, 0], [143, 99, 697, 1881, 10, 19, 0], [143, 180, 1471, 1838, 10, 20, 0], [164, 101, 948, 932, 7, 17, 0], [154, 125, 1823,
            1808, 8, 8, 0], [162, 180, 1750, 1912, 9, 20, 0], [188, 127, 802, 1880, 10, 19, 0], [197, 156, 650, 1717, 12, 21, 0], [214, 128, 54, 1965, 8, 19, 0], [222, 156, 1063, 1809, 10, 21, 0]], [[61, 136, 1605, 1705, 13, 22, 0], [77, 198, 290, 1984, 7, 15, 0], [85, 136, 213, 1716, 12, 22, 0], [87, 190, 1858, 1673, 19, 23, 0], [142, 99, 1482, 1838, 10, 20, 0], [142, 180, 1493, 1838, 10, 20, 0], [161, 98, 1627, 1809, 10, 21, 0], [154, 125, 1845, 1900, 10, 9, 0], [162, 180, 1760, 1912, 9, 20, 0], [187, 127, 627, 1772, 11, 20, 0], [197, 156, 882, 1717, 12, 21, 0], [213, 127, 540, 1702, 8, 20, 0], [221, 156, 1313, 1810, 10, 21, 0]], [[60,
            136, 1619, 1705, 13, 22, 0], [76, 198, 298, 1984, 7, 15, 0], [84, 136, 781, 1716, 12, 22, 0], [86, 190, 965, 1273, 20, 23, 0], [142, 99, 1504, 1838, 10, 20, 0], [142, 180, 1515, 1839, 10, 20, 0], [162, 99, 1869, 1839, 8, 20, 0], [155, 126, 321, 1386, 13, 10, 0], [162, 180, 1564, 1954, 8, 20, 0], [187, 127, 813, 1880, 10, 19, 0], [196, 156, 895, 1717, 12, 21, 0], [214, 128, 1041, 1632, 7, 18, 0], [221, 156, 561, 577, 9, 21, 0]], [[59, 136, 570, 1706, 13, 22, 0], [83, 136, 1513, 1760, 11, 22, 0], [75, 190, 72, 1652, 30, 23, 0], [141, 99, 969, 1771, 11, 20, 0], [141, 180, 1243, 1771, 11, 20, 0], [160, 98, 1468, 1810, 10, 21, 0],
            [159, 128, 1101, 853, 16, 9, 0], [161, 180, 1800, 1911, 9, 20, 0], [187, 127, 1526, 1839, 10, 20, 0], [195, 156, 1204, 1717, 12, 21, 0], [212, 127, 581, 1955, 8, 20, 0], [220, 156, 1603, 1810, 10, 21, 0]], [[57, 136, 1145, 1713, 13, 21, 0], [81, 136, 959, 1716, 12, 22, 0], [74, 190, 944, 1652, 30, 23, 0], [141, 99, 1537, 1839, 10, 20, 0], [141, 180, 1548, 1839, 10, 20, 0], [161, 99, 63, 1965, 8, 19, 0], [167, 129, 815, 1976, 8, 8, 0], [161, 180, 1810, 1911, 9, 20, 0], [176, 125, 1118, 853, 8, 9, 0], [186, 128, 596, 1882, 10, 18, 0], [195, 156, 854, 1718, 12, 21, 0], [213, 128, 20, 1702, 7, 18, 0], [219, 156, 1614, 1810, 10,
            21, 0]], [[56, 136, 584, 1706, 13, 22, 0], [80, 136, 1525, 1760, 11, 22, 0], [73, 190, 1245, 1652, 30, 23, 0], [141, 99, 1559, 1839, 10, 20, 0], [141, 180, 824, 1880, 10, 19, 0], [161, 99, 590, 1955, 8, 20, 0], [161, 181, 1259, 1964, 8, 18, 0], [176, 123, 1851, 1397, 20, 23, 0], [194, 156, 867, 1718, 12, 21, 0], [213, 128, 236, 442, 7, 19, 0], [219, 156, 717, 1601, 9, 21, 0]], [[55, 136, 840, 1708, 13, 22, 0], [79, 136, 1537, 1760, 11, 22, 0], [73, 190, 1051, 1660, 29, 23, 0], [140, 99, 1255, 1771, 11, 20, 0], [140, 180, 1267, 1771, 11, 20, 0], [159, 98, 34, 1811, 10, 21, 0], [160, 180, 1820, 1911, 9, 20, 0], [178, 120, 728,
            1538, 18, 27, 0], [193, 156, 183, 1719, 12, 21, 0], [211, 127, 1830, 1911, 9, 20, 0], [218, 156, 45, 1811, 10, 21, 0]], [[53, 136, 1633, 1709, 13, 22, 0], [78, 136, 1549, 1761, 11, 22, 0], [72, 190, 1479, 1652, 30, 23, 0], [140, 99, 1570, 1839, 10, 20, 0], [140, 180, 1636, 1838, 10, 20, 0], [160, 99, 599, 1955, 8, 20, 0], [160, 180, 608, 1955, 8, 20, 0], [180, 119, 289, 1187, 15, 28, 0], [193, 156, 196, 1719, 12, 21, 0], [212, 128, 1108, 1736, 7, 18, 0], [217, 156, 56, 1811, 10, 21, 0]], [[52, 136, 1647, 1709, 13, 22, 0], [76, 136, 1561, 1761, 11, 22, 0], [71, 190, 31, 1653, 30, 23, 0], [140, 100, 1646, 1516, 9, 18, 0], [139,
            180, 1395, 1771, 11, 20, 0], [160, 99, 72, 1965, 8, 19, 0], [159, 180, 411, 1913, 9, 20, 0], [180, 118, 343, 581, 15, 29, 0], [192, 156, 1331, 1719, 12, 21, 0], [211, 127, 617, 1955, 8, 20, 0], [217, 156, 1089, 1901, 9, 21, 0]], [[51, 136, 1103, 1713, 13, 22, 0], [75, 136, 1573, 1761, 11, 22, 0], [70, 190, 1086, 1653, 30, 23, 0], [139, 99, 1647, 1838, 10, 20, 0], [139, 180, 1703, 1838, 10, 20, 0], [158, 98, 434, 1811, 10, 21, 0], [159, 180, 449, 1912, 9, 20, 0], [181, 117, 1738, 1661, 8, 9, 0], [185, 128, 524, 1632, 9, 18, 0], [191, 156, 1862, 1720, 12, 21, 0], [211, 128, 236, 462, 7, 19, 0], [216, 156, 445, 1811, 10, 21, 0]],
            [[50, 135, 950, 1628, 35, 23, 0], [69, 190, 1677, 1653, 30, 23, 0], [139, 99, 1714, 1838, 10, 20, 0], [139, 180, 1725, 1838, 10, 20, 0], [159, 99, 626, 1955, 8, 20, 0], [158, 180, 459, 1913, 9, 20, 0], [181, 118, 1246, 843, 8, 7, 0], [184, 127, 1407, 1771, 11, 20, 0], [191, 156, 908, 1721, 12, 21, 0], [210, 127, 635, 1955, 8, 20, 0], [215, 156, 422, 1816, 10, 21, 0]], [[69, 198, 306, 1984, 7, 15, 0], [79, 190, 1851, 1421, 20, 23, 0], [139, 100, 975, 1652, 9, 18, 0], [138, 180, 1419, 1771, 11, 20, 0], [159, 100, 1268, 1964, 8, 18, 0], [158, 180, 469, 1913, 9, 20, 0], [181, 117, 1554, 1954, 9, 9, 0], [184, 127, 607, 1882, 10,
                18, 0], [190, 156, 921, 1721, 12, 21, 0], [211, 129, 1644, 1754, 6, 11, 0], [212, 141, 580, 936, 5, 6, 0], [215, 156, 783, 1908, 9, 21, 0]], [[68, 198, 603, 1976, 8, 15, 0], [79, 190, 762, 1679, 19, 23, 0], [138, 99, 1736, 1838, 10, 20, 0], [138, 180, 1682, 1839, 10, 20, 0], [158, 99, 479, 1913, 9, 20, 0], [158, 180, 644, 1955, 8, 20, 0], [181, 118, 572, 310, 12, 28, 0], [189, 156, 934, 1721, 12, 21, 0], [210, 128, 236, 482, 7, 19, 0], [214, 156, 472, 1816, 10, 21, 0]], [[67, 198, 612, 1976, 8, 15, 0], [78, 190, 842, 1684, 19, 23, 0], [138, 99, 1747, 1839, 10, 20, 0], [137, 180, 1431, 1771, 11, 20, 0], [158, 99, 653, 1955, 8,
                20, 0], [157, 180, 489, 1913, 9, 20, 0], [182, 121, 273, 1714, 12, 26, 0], [189, 156, 1812, 1761, 11, 21, 0], [209, 127, 662, 1955, 8, 20, 0], [213, 156, 483, 1816, 10, 21, 0]], [[66, 198, 621, 1976, 8, 15, 0], [77, 190, 1642, 1685, 19, 23, 0], [137, 99, 981, 1782, 11, 20, 0], [137, 180, 1758, 1839, 10, 20, 0], [156, 98, 494, 1816, 10, 21, 0], [157, 180, 499, 1913, 9, 20, 0], [181, 126, 848, 960, 12, 19, 0], [188, 156, 1217, 1721, 12, 21, 0], [210, 129, 1770, 1912, 7, 18, 0], [213, 156, 1006, 1908, 9, 21, 0]], [[66, 198, 314, 1984, 7, 15, 0], [76, 190, 1110, 1689, 19, 23, 0], [137, 99, 742, 1881, 10, 19, 0], [137, 180, 1769,
                1839, 10, 20, 0], [157, 99, 1277, 1964, 8, 18, 0], [156, 180, 509, 1913, 9, 20, 0], [178, 127, 289, 1242, 15, 21, 0], [187, 156, 1230, 1721, 12, 21, 0], [208, 127, 671, 1955, 8, 20, 0], [212, 156, 505, 1816, 10, 21, 0]], [[65, 198, 630, 1976, 8, 15, 0], [75, 190, 441, 1424, 20, 23, 0], [137, 99, 1780, 1839, 10, 20, 0], [136, 180, 1701, 1782, 11, 20, 0], [157, 99, 680, 1955, 8, 20, 0], [156, 180, 519, 1913, 9, 20, 0], [171, 127, 1768, 945, 21, 26, 0], [187, 156, 0, 1761, 11, 21, 0], [209, 128, 1656, 1766, 7, 17, 0], [211, 156, 516, 1816, 10, 21, 0]], [[64, 198, 639, 1976, 8, 15, 0], [75, 190, 1130, 1689, 19, 23, 0], [136, 99,
                1791, 1839, 10, 20, 0], [136, 180, 753, 1881, 10, 19, 0], [155, 98, 527, 1816, 10, 21, 0], [162, 144, 965, 1297, 18, 12, 0], [156, 180, 81, 1964, 8, 19, 0], [182, 127, 0, 1839, 10, 20, 0], [186, 156, 1243, 1721, 12, 21, 0], [207, 127, 529, 1912, 9, 20, 0], [211, 156, 1016, 1908, 9, 21, 0]], [[63, 198, 648, 1976, 8, 15, 0], [74, 190, 1150, 1689, 19, 23, 0], [136, 99, 66, 1839, 10, 20, 0], [136, 180, 77, 1839, 10, 20, 0], [156, 99, 689, 1955, 8, 20, 0], [152, 146, 585, 1150, 19, 10, 0], [155, 180, 539, 1913, 9, 20, 0], [181, 128, 708, 1882, 10, 18, 0], [185, 156, 1462, 1714, 12, 21, 0], [208, 128, 1132, 1984, 7, 18, 0], [210, 156,
                538, 1816, 10, 21, 0]], [[62, 198, 657, 1976, 8, 15, 0], [73, 190, 1336, 1671, 19, 23, 0], [136, 100, 913, 1840, 9, 18, 0], [135, 180, 88, 1839, 10, 20, 0], [156, 100, 1493, 1965, 8, 18, 0], [147, 144, 1686, 915, 14, 11, 0], [155, 180, 549, 1913, 9, 20, 0], [181, 127, 99, 1840, 10, 20, 0], [185, 156, 206, 1761, 11, 21, 0], [208, 128, 1692, 1785, 7, 17, 0], [210, 156, 1026, 1908, 9, 21, 0]], [[62, 198, 322, 1984, 7, 15, 0], [72, 190, 1851, 1445, 20, 23, 0], [135, 98, 1708, 1661, 29, 21, 0], [145, 143, 422, 1805, 11, 10, 0], [135, 180, 935, 1676, 28, 20, 0], [181, 127, 110, 1840, 10, 20, 0], [184, 156, 1475, 1721, 12, 21, 0],
                [206, 127, 559, 1913, 9, 20, 0], [209, 156, 1187, 1908, 9, 21, 0]], [[61, 198, 666, 1976, 8, 15, 0], [71, 190, 441, 1448, 20, 23, 0], [135, 99, 121, 1840, 10, 20, 0], [143, 141, 874, 1901, 10, 10, 0], [134, 180, 1713, 1782, 11, 20, 0], [155, 99, 698, 1955, 8, 20, 0], [154, 180, 569, 1913, 9, 20, 0], [180, 128, 719, 1882, 10, 18, 0], [183, 156, 1838, 1721, 12, 21, 0], [207, 128, 1140, 1984, 7, 18, 0], [208, 156, 549, 1817, 10, 21, 0]], [[60, 198, 675, 1976, 8, 15, 0], [71, 190, 1356, 1689, 19, 23, 0], [134, 100, 764, 1881, 10, 19, 0], [142, 140, 1856, 1900, 10, 9, 0], [134, 180, 132, 1840, 10, 20, 0], [154, 99, 889, 1934, 9,
                19, 0], [154, 180, 707, 1955, 8, 20, 0], [180, 127, 143, 1840, 10, 20, 0], [183, 156, 218, 1761, 11, 21, 0], [206, 127, 716, 1955, 8, 20, 0], [208, 156, 1197, 1908, 9, 21, 0]], [[59, 198, 684, 1976, 8, 15, 0], [70, 190, 1505, 1689, 19, 23, 0], [134, 99, 155, 1839, 10, 20, 0], [140, 139, 1868, 1860, 10, 9, 0], [134, 180, 166, 1840, 10, 20, 0], [154, 99, 579, 1913, 9, 20, 0], [153, 180, 589, 1913, 9, 20, 0], [180, 127, 775, 1881, 10, 19, 0], [182, 156, 20, 1722, 12, 21, 0], [206, 128, 90, 1965, 8, 19, 0], [207, 156, 1207, 1908, 9, 21, 0]], [[59, 198, 330, 1984, 7, 15, 0], [69, 190, 232, 1690, 19, 23, 0], [134, 99, 177, 1840, 10,
                20, 0], [140, 138, 1612, 1953, 9, 9, 0], [133, 180, 188, 1840, 10, 20, 0], [154, 99, 725, 1955, 8, 20, 0], [153, 180, 599, 1913, 9, 20, 0], [179, 127, 1725, 1782, 11, 20, 0], [181, 156, 33, 1722, 12, 21, 0], [205, 127, 734, 1955, 8, 20, 0], [206, 156, 560, 1817, 10, 21, 0]], [[58, 198, 338, 1984, 7, 15, 0], [68, 190, 876, 1485, 20, 23, 0], [133, 99, 200, 1839, 10, 20, 0], [139, 137, 1622, 1953, 9, 9, 0], [133, 180, 211, 1839, 10, 20, 0], [153, 99, 609, 1913, 9, 20, 0], [153, 180, 743, 1955, 8, 20, 0], [179, 127, 835, 1881, 10, 19, 0], [181, 156, 230, 1761, 11, 21, 0], [206, 128, 1148, 1984, 7, 18, 0], [206, 156, 1432, 1908, 9,
                21, 0]], [[57, 198, 693, 1976, 8, 15, 0], [68, 190, 252, 1690, 19, 23, 0], [133, 99, 846, 1881, 10, 19, 0], [139, 136, 1334, 1741, 8, 9, 0], [132, 180, 1737, 1782, 11, 20, 0], [153, 99, 1502, 1965, 8, 18, 0], [152, 180, 619, 1912, 9, 20, 0], [179, 127, 222, 1839, 10, 20, 0], [180, 156, 1056, 1722, 12, 21, 0], [204, 127, 629, 1913, 9, 20, 0], [205, 156, 1442, 1909, 9, 21, 0]], [[56, 198, 702, 1976, 8, 15, 0], [67, 190, 272, 1690, 19, 23, 0], [133, 99, 233, 1839, 10, 20, 0], [138, 135, 1632, 1953, 9, 9, 0], [132, 180, 244, 1839, 10, 20, 0], [152, 99, 639, 1913, 9, 20, 0], [152, 180, 752, 1955, 8, 20, 0], [178, 128, 968, 1880, 10,
                19, 0], [179, 156, 1069, 1722, 12, 21, 0], [205, 128, 1156, 1984, 7, 18, 0], [204, 156, 571, 1817, 10, 21, 0]], [[55, 198, 711, 1976, 8, 15, 0], [66, 190, 292, 1690, 19, 23, 0], [132, 99, 255, 1839, 10, 20, 0], [138, 135, 330, 1954, 9, 8, 0], [132, 180, 906, 1881, 10, 19, 0], [151, 98, 582, 1817, 10, 21, 0], [152, 181, 1511, 1965, 8, 18, 0], [178, 127, 917, 1881, 10, 19, 0], [179, 156, 242, 1761, 11, 21, 0], [205, 128, 1241, 1983, 7, 18, 0], [203, 156, 593, 1817, 10, 21, 0]], [[55, 189, 1356, 1641, 30, 25, 0], [132, 99, 266, 1839, 10, 20, 0], [138, 135, 824, 1976, 8, 8, 0], [131, 180, 1749, 1782, 11, 20, 0], [152, 99, 761, 1955,
                8, 20, 0], [151, 180, 649, 1913, 9, 20, 0], [178, 127, 277, 1839, 10, 20, 0], [178, 156, 1082, 1722, 12, 21, 0], [203, 127, 659, 1913, 9, 20, 0], [203, 156, 1610, 1908, 9, 21, 0]], [[132, 99, 899, 1934, 9, 19, 0], [138, 135, 1709, 1143, 8, 7, 0], [131, 180, 288, 1839, 10, 20, 0], [152, 100, 1520, 1965, 8, 18, 0], [151, 180, 859, 1954, 8, 20, 0], [177, 128, 928, 1881, 10, 19, 0], [177, 156, 1661, 1722, 12, 21, 0], [204, 128, 1249, 1983, 7, 18, 0], [202, 156, 631, 1816, 10, 21, 0]], [[131, 99, 299, 1839, 10, 20, 0], [137, 135, 340, 1954, 9, 8, 0], [130, 180, 1761, 1783, 11, 20, 0], [151, 99, 669, 1913, 9, 20, 0], [150, 180, 679,
                1913, 9, 20, 0], [177, 127, 310, 1839, 10, 20, 0], [177, 156, 304, 1761, 11, 21, 0], [203, 127, 868, 1954, 8, 20, 0], [201, 156, 642, 1817, 10, 21, 0], [221, 208, 1521, 1642, 30, 25, 0]], [[131, 99, 321, 1839, 10, 20, 0], [136, 135, 248, 1042, 10, 8, 0], [130, 180, 332, 1839, 10, 20, 0], [151, 99, 877, 1954, 8, 20, 0], [150, 180, 689, 1913, 9, 20, 0], [177, 127, 939, 1881, 10, 19, 0], [176, 156, 46, 1724, 12, 21, 0], [203, 128, 1709, 514, 7, 19, 0], [201, 156, 1790, 1908, 9, 21, 0], [221, 210, 59, 1724, 12, 21, 0], [235, 210, 1348, 269, 5, 9, 0], [245, 218, 353, 1012, 6, 13, 0]], [[130, 99, 343, 1839, 10, 20, 0], [133, 135, 472,
                1805, 11, 10, 0], [130, 180, 354, 1839, 10, 20, 0], [150, 99, 909, 1934, 9, 19, 0], [149, 180, 699, 1913, 9, 20, 0], [176, 127, 1773, 1783, 11, 20, 0], [175, 156, 72, 1724, 12, 21, 0], [202, 127, 886, 1954, 8, 20, 0], [200, 156, 653, 1817, 10, 21, 0], [221, 209, 1415, 1690, 19, 23, 0], [244, 218, 757, 1100, 6, 13, 0]], [[130, 99, 365, 1839, 10, 20, 0], [133, 137, 1012, 1881, 9, 12, 0], [129, 180, 1785, 1783, 11, 20, 0], [150, 99, 895, 1954, 8, 20, 0], [149, 180, 709, 1913, 9, 20, 0], [176, 127, 950, 1881, 10, 19, 0], [175, 156, 316, 1761, 11, 21, 0], [203, 128, 1709, 534, 7, 19, 0], [199, 156, 664, 1817, 10, 21, 0], [221, 210,
                328, 1761, 11, 21, 0], [234, 210, 1405, 789, 5, 9, 0], [244, 218, 1627, 1110, 6, 13, 0]], [[130, 99, 376, 1839, 10, 20, 0], [133, 140, 1725, 1311, 15, 12, 0], [129, 180, 387, 1839, 10, 20, 0], [149, 99, 719, 1913, 9, 20, 0], [149, 180, 904, 1954, 8, 20, 0], [176, 127, 979, 1881, 10, 19, 0], [174, 156, 437, 1704, 12, 21, 0], [202, 128, 99, 1965, 8, 19, 0], [199, 156, 11, 1909, 9, 21, 0], [220, 209, 1435, 1690, 19, 23, 0], [244, 218, 1051, 1314, 5, 13, 0]], [[129, 99, 398, 1839, 10, 20, 0], [128, 180, 1797, 1783, 11, 20, 0], [148, 98, 675, 1817, 10, 21, 0], [140, 144, 1464, 502, 14, 12, 0], [148, 180, 729, 1913, 9, 20, 0], [175,
                127, 1809, 1783, 11, 20, 0], [173, 156, 450, 1724, 12, 21, 0], [201, 127, 913, 1954, 8, 20, 0], [198, 156, 686, 1817, 10, 21, 0], [220, 210, 1873, 1314, 5, 13, 0], [226, 222, 1343, 909, 5, 9, 0], [233, 210, 661, 1660, 5, 9, 0], [243, 218, 1627, 1124, 6, 13, 0]], [[129, 99, 730, 1882, 10, 18, 0], [128, 180, 409, 1839, 10, 20, 0], [149, 99, 1529, 1965, 8, 18, 0], [145, 147, 1376, 1689, 8, 11, 0], [148, 180, 739, 1913, 9, 20, 0], [175, 127, 990, 1881, 10, 19, 0], [173, 156, 340, 1761, 11, 21, 0], [202, 128, 1257, 1983, 7, 18, 0], [197, 156, 697, 1817, 10, 21, 0], [219, 209, 1455, 1690, 19, 23, 0], [242, 218, 1220, 322, 6, 14, 0]],
            [[128, 99, 0, 1783, 11, 20, 0], [128, 180, 455, 1839, 10, 20, 0], [147, 98, 708, 1817, 10, 21, 0], [141, 150, 124, 1760, 12, 10, 0], [147, 180, 749, 1913, 9, 20, 0], [174, 127, 199, 1783, 11, 20, 0], [172, 156, 463, 1724, 12, 21, 0], [200, 127, 922, 1954, 8, 20, 0], [197, 156, 21, 1909, 9, 21, 0], [219, 210, 1873, 1328, 5, 13, 0], [225, 222, 1872, 1661, 5, 9, 0], [232, 210, 1110, 1677, 5, 9, 0], [242, 218, 1627, 1138, 6, 13, 0]], [[128, 99, 1510, 1668, 29, 20, 0], [135, 151, 1513, 1382, 15, 10, 0], [127, 180, 238, 1669, 29, 20, 0], [174, 129, 1376, 1538, 9, 17, 0], [171, 156, 476, 1724, 12, 21, 0], [201, 128, 1265, 1983, 7,
                18, 0], [196, 156, 824, 1816, 10, 21, 0], [218, 209, 133, 1691, 19, 23, 0], [241, 217, 346, 1984, 7, 15, 0]], [[128, 99, 599, 1840, 10, 20, 0], [128, 152, 985, 1397, 16, 10, 0], [127, 180, 1001, 1881, 10, 19, 0], [148, 99, 931, 1954, 8, 20, 0], [147, 180, 108, 1965, 8, 19, 0], [174, 127, 610, 1840, 10, 20, 0], [171, 156, 352, 1761, 11, 21, 0], [199, 127, 759, 1913, 9, 20, 0], [195, 156, 835, 1816, 10, 21, 0], [218, 210, 489, 1724, 12, 21, 0], [231, 210, 1220, 367, 6, 9, 0], [241, 218, 1626, 1152, 6, 13, 0]], [[127, 99, 1223, 1880, 10, 19, 0], [122, 154, 343, 611, 15, 14, 0], [127, 180, 714, 1840, 10, 20, 0], [147, 99, 919, 1934,
                9, 19, 0], [146, 180, 769, 1913, 9, 20, 0], [174, 128, 968, 1860, 9, 18, 0], [170, 156, 502, 1724, 12, 21, 0], [200, 128, 1709, 554, 7, 19, 0], [195, 156, 31, 1910, 9, 21, 0], [217, 209, 153, 1691, 19, 23, 0], [240, 217, 354, 1985, 7, 15, 0]], [[127, 99, 725, 1840, 10, 20, 0], [122, 159, 1869, 1880, 9, 17, 0], [126, 180, 736, 1840, 10, 20, 0], [147, 99, 940, 1954, 8, 20, 0], [146, 180, 823, 1913, 9, 20, 0], [173, 127, 869, 1840, 10, 20, 0], [169, 156, 515, 1725, 12, 21, 0], [199, 127, 949, 1954, 8, 20, 0], [194, 156, 846, 1816, 10, 21, 0], [217, 210, 528, 1725, 12, 21, 0], [230, 210, 757, 1114, 6, 9, 0], [241, 218, 1873, 1342,
                5, 13, 0]], [[127, 99, 880, 1840, 10, 20, 0], [123, 168, 1464, 279, 14, 32, 0], [146, 99, 833, 1913, 9, 20, 0], [146, 180, 958, 1954, 8, 20, 0], [173, 127, 857, 1882, 10, 18, 0], [169, 156, 723, 1761, 11, 21, 0], [199, 128, 117, 1965, 8, 19, 0], [193, 156, 992, 1816, 10, 21, 0], [216, 209, 170, 1016, 13, 23, 0], [230, 210, 862, 1684, 5, 9, 0], [239, 217, 362, 1985, 7, 15, 0]], [[126, 99, 1234, 1880, 10, 19, 0], [125, 172, 1375, 1040, 18, 28, 0], [146, 99, 929, 1934, 9, 19, 0], [145, 180, 843, 1913, 9, 20, 0], [173, 128, 1052, 1934, 9, 18, 0], [168, 156, 541, 1724, 12, 21, 0], [199, 128, 1709, 574, 7, 19, 0], [193, 156, 41, 1910,
                9, 21, 0], [216, 210, 554, 1724, 12, 21, 0], [229, 210, 1330, 1180, 6, 9, 0], [240, 218, 1873, 1356, 5, 13, 0]], [[126, 99, 1244, 1676, 28, 20, 0], [125, 169, 1158, 1335, 28, 31, 0], [172, 127, 211, 1783, 11, 20, 0], [167, 156, 663, 1724, 12, 21, 0], [198, 127, 967, 1954, 8, 20, 0], [192, 156, 759, 1817, 10, 21, 0], [216, 210, 676, 1724, 12, 21, 0], [229, 210, 1488, 1721, 5, 9, 0], [238, 217, 370, 1985, 7, 15, 0]], [[125, 99, 223, 1783, 11, 20, 0], [125, 180, 891, 1840, 10, 20, 0], [145, 99, 853, 1913, 9, 20, 0], [140, 169, 1642, 1953, 9, 9, 0], [144, 180, 863, 1913, 9, 20, 0], [172, 127, 868, 1882, 10, 18, 0], [167, 156, 735,
                1762, 11, 21, 0], [199, 129, 631, 1793, 6, 11, 0], [200, 141, 586, 936, 5, 6, 0], [191, 156, 770, 1817, 10, 21, 0], [215, 210, 689, 1724, 12, 21, 0], [228, 210, 854, 1708, 6, 9, 0], [239, 218, 1873, 1370, 5, 13, 0]], [[125, 99, 902, 1840, 10, 20, 0], [124, 180, 1118, 1839, 10, 20, 0], [144, 98, 781, 1817, 10, 21, 0], [141, 168, 1396, 1746, 8, 9, 0], [144, 180, 1086, 1923, 9, 20, 0], [171, 127, 235, 1783, 11, 20, 0], [166, 156, 702, 1724, 12, 21, 0], [197, 127, 976, 1954, 8, 20, 0], [191, 156, 51, 1910, 9, 21, 0], [215, 210, 715, 1724, 12, 21, 0], [228, 210, 794, 1716, 6, 9, 0], [237, 217, 378, 1985, 7, 15, 0]], [[125, 99, 1245,
                1880, 10, 19, 0], [124, 180, 1129, 1839, 10, 20, 0], [145, 99, 126, 1965, 8, 19, 0], [141, 168, 833, 1976, 8, 8, 0], [144, 180, 985, 1954, 8, 20, 0], [171, 129, 1062, 1934, 9, 18, 0], [165, 156, 728, 1724, 12, 21, 0], [198, 128, 154, 1985, 7, 17, 0], [190, 156, 792, 1817, 10, 21, 0], [214, 210, 741, 1725, 12, 21, 0], [227, 210, 364, 1717, 6, 9, 0], [238, 218, 1873, 1384, 5, 13, 0]], [[124, 99, 1140, 1839, 10, 20, 0], [123, 180, 302, 1783, 11, 20, 0], [143, 98, 857, 1817, 10, 21, 0], [141, 167, 1652, 1953, 9, 9, 0], [143, 180, 779, 1930, 9, 20, 0], [171, 127, 1151, 1839, 10, 20, 0], [165, 156, 747, 1762, 11, 21, 0], [196, 127,
                1002, 1930, 9, 20, 0], [189, 156, 868, 1817, 10, 21, 0], [214, 209, 173, 1692, 19, 23, 0], [236, 217, 386, 1985, 7, 15, 0]], [[124, 99, 1069, 1840, 10, 20, 0], [123, 180, 1080, 1840, 10, 20, 0], [144, 99, 1024, 1954, 8, 20, 0], [142, 167, 842, 1976, 8, 8, 0], [143, 180, 1033, 1954, 8, 20, 0], [170, 128, 1256, 1881, 10, 19, 0], [164, 156, 754, 1725, 12, 21, 0], [197, 128, 1273, 1983, 7, 18, 0], [189, 156, 429, 1909, 9, 21, 0], [213, 210, 1023, 1724, 12, 21, 0], [226, 210, 1713, 1727, 6, 9, 0], [237, 218, 1872, 1398, 5, 13, 0]], [[124, 99, 1091, 1840, 10, 20, 0], [123, 180, 1102, 1840, 10, 20, 0], [143, 99, 1012, 1930, 9, 20,
                0], [142, 166, 1448, 1759, 8, 9, 0], [142, 180, 1022, 1930, 9, 20, 0], [170, 127, 1267, 1881, 10, 19, 0], [163, 156, 1367, 1724, 12, 21, 0], [197, 128, 162, 1985, 7, 17, 0], [188, 156, 931, 1817, 10, 21, 0], [213, 209, 608, 1691, 19, 23, 0], [236, 218, 1597, 1180, 6, 13, 0]], [[128, 99, 846, 1731, 5, 8, 0], [123, 108, 643, 1805, 6, 11, 0], [122, 180, 1278, 1881, 10, 19, 0], [143, 99, 939, 1934, 9, 19, 0], [142, 166, 114, 1761, 8, 9, 0], [142, 180, 1179, 1930, 9, 20, 0], [170, 127, 1162, 1840, 10, 20, 0], [163, 156, 775, 1761, 11, 21, 0], [195, 127, 1189, 1930, 9, 20, 0], [187, 156, 942, 1817, 10, 21, 0], [212, 210, 1380, 1724,
                12, 21, 0], [226, 210, 1101, 1758, 5, 9, 0], [236, 218, 1597, 1194, 6, 13, 0]], [[123, 99, 1173, 1840, 10, 20, 0], [122, 180, 1184, 1840, 10, 20, 0], [143, 99, 1042, 1954, 8, 20, 0], [142, 166, 1078, 1983, 8, 8, 0], [142, 180, 781, 1955, 8, 20, 0], [169, 128, 879, 1882, 10, 18, 0], [162, 156, 872, 1761, 11, 21, 0], [196, 128, 1281, 1984, 7, 18, 0], [187, 156, 439, 1909, 9, 21, 0], [212, 209, 782, 1692, 19, 23, 0], [235, 218, 1597, 1208, 6, 13, 0]], [[122, 99, 314, 1783, 11, 20, 0], [121, 180, 326, 1783, 11, 20, 0], [141, 98, 953, 1817, 10, 21, 0], [142, 166, 1048, 1984, 8, 8, 0], [141, 180, 1199, 1930, 9, 20, 0], [169, 127,
                1324, 1839, 10, 20, 0], [161, 156, 1393, 1724, 12, 21, 0], [195, 127, 790, 1955, 8, 20, 0], [186, 156, 964, 1817, 10, 21, 0], [212, 210, 884, 1761, 11, 21, 0], [225, 210, 295, 1791, 5, 9, 0], [235, 218, 1597, 1222, 6, 13, 0]], [[122, 99, 1289, 1881, 10, 19, 0], [121, 180, 1658, 1839, 10, 20, 0], [142, 99, 135, 1965, 8, 19, 0], [143, 165, 1027, 847, 6, 4, 0], [143, 170, 749, 929, 6, 3, 0], [141, 180, 1424, 1930, 9, 20, 0], [169, 127, 1327, 1880, 10, 19, 0], [161, 156, 945, 1761, 11, 21, 0], [195, 128, 144, 1965, 8, 19, 0], [185, 156, 975, 1817, 10, 21, 0], [211, 209, 964, 1692, 19, 23, 0], [235, 218, 1872, 1412, 5, 13, 0]], [[122,
                99, 1814, 1839, 10, 20, 0], [121, 180, 1825, 1839, 10, 20, 0], [142, 99, 799, 1955, 8, 20, 0], [143, 165, 1693, 907, 6, 4, 0], [143, 170, 756, 930, 6, 3, 0], [140, 180, 1608, 1930, 9, 20, 0], [168, 127, 338, 1783, 11, 20, 0], [160, 156, 957, 1761, 11, 21, 0], [194, 127, 808, 1955, 8, 20, 0], [185, 156, 1294, 1909, 9, 21, 0], [210, 210, 1509, 1724, 12, 21, 0], [224, 210, 391, 1806, 5, 9, 0], [233, 217, 394, 1985, 7, 15, 0]], [[121, 99, 1836, 1839, 10, 20, 0], [120, 180, 350, 1783, 11, 20, 0], [140, 98, 1003, 1817, 10, 21, 0], [143, 165, 788, 1607, 6, 8, 0], [140, 180, 1789, 1930, 9, 20, 0], [168, 127, 1338, 1880, 10, 19, 0], [159,
                156, 1522, 1724, 12, 21, 0], [184, 156, 1014, 1817, 10, 21, 0], [195, 128, 1289, 1984, 7, 18, 0], [210, 210, 1535, 1724, 12, 21, 0], [223, 210, 1581, 1839, 6, 9, 0], [234, 218, 1872, 1426, 5, 13, 0]], [[121, 99, 1847, 1839, 10, 20, 0], [120, 180, 1858, 1839, 10, 20, 0], [141, 99, 817, 1955, 8, 20, 0], [144, 165, 669, 811, 4, 3, 0], [145, 170, 763, 930, 3, 3, 0], [140, 180, 826, 1955, 8, 20, 0], [168, 127, 1349, 1880, 10, 19, 0], [159, 156, 1011, 1761, 11, 21, 0], [183, 156, 1025, 1817, 10, 21, 0], [194, 128, 153, 1965, 8, 19, 0], [210, 210, 1548, 1724, 12, 21, 0], [223, 210, 1417, 1953, 5, 9, 0], [232, 217, 402, 1985, 7, 15,
                0]], [[121, 99, 1360, 1880, 10, 19, 0], [119, 180, 717, 1783, 11, 20, 0], [141, 100, 1538, 1965, 8, 18, 0], [144, 165, 668, 815, 4, 3, 0], [139, 180, 10, 1931, 9, 20, 0], [167, 127, 729, 1784, 11, 20, 0], [158, 156, 1147, 1761, 11, 21, 0], [183, 156, 1588, 1909, 9, 21, 0], [193, 127, 835, 1955, 8, 20, 0], [209, 210, 1561, 1725, 12, 21, 0], [222, 210, 1658, 1881, 6, 9, 0], [233, 218, 1872, 1440, 5, 13, 0]], [[120, 99, 1195, 1840, 10, 20, 0], [119, 180, 1581, 1850, 10, 20, 0], [139, 98, 1236, 1816, 10, 21, 0], [139, 180, 20, 1931, 9, 20, 0], [167, 127, 1371, 1880, 10, 19, 0], [157, 156, 1574, 1725, 12, 21, 0], [182, 156, 1247,
                1816, 10, 21, 0], [194, 128, 1232, 1984, 7, 18, 0], [209, 210, 1587, 1725, 12, 21, 0], [222, 210, 1569, 1900, 6, 9, 0], [231, 218, 1409, 1985, 7, 14, 0]], [[120, 99, 1669, 1850, 10, 20, 0], [119, 180, 1206, 1852, 10, 20, 0], [140, 99, 844, 1955, 8, 20, 0], [142, 165, 1057, 1984, 8, 8, 0], [138, 180, 30, 1932, 9, 20, 0], [167, 127, 1217, 1852, 10, 20, 0], [157, 156, 1159, 1761, 11, 21, 0], [181, 156, 1258, 1816, 10, 21, 0], [192, 127, 40, 1932, 9, 20, 0], [208, 210, 0, 1725, 12, 21, 0], [222, 210, 1843, 1984, 5, 9, 0], [232, 218, 1597, 1236, 6, 13, 0]], [[119, 99, 741, 1784, 11, 20, 0], [118, 180, 771, 1783, 11, 20, 0], [138,
                98, 1269, 1817, 10, 21, 0], [142, 165, 259, 1042, 10, 8, 0], [138, 180, 50, 1932, 9, 20, 0], [166, 128, 1382, 1880, 10, 19, 0], [156, 156, 226, 1725, 12, 21, 0], [181, 156, 1598, 1909, 9, 21, 0], [193, 128, 1297, 1984, 7, 18, 0], [208, 209, 984, 1692, 19, 23, 0], [230, 218, 1417, 1985, 7, 14, 0]], [[119, 99, 1393, 1880, 10, 19, 0], [118, 180, 1445, 1852, 10, 20, 0], [139, 99, 162, 1965, 8, 19, 0], [166, 127, 1802, 1852, 10, 20, 0], [143, 156, 1853, 53, 24, 21, 0], [138, 180, 1082, 1962, 8, 20, 0], [180, 156, 1280, 1817, 10, 21, 0], [192, 127, 1868, 1962, 8, 20, 0], [207, 210, 239, 1725, 12, 21, 0], [221, 210, 1849, 1984, 5,
                9, 0], [231, 218, 1597, 1250, 6, 13, 0]], [[119, 99, 11, 1853, 10, 20, 0], [118, 181, 1072, 1934, 9, 18, 0], [139, 99, 270, 1963, 8, 20, 0], [166, 127, 1404, 1880, 10, 19, 0], [146, 156, 1605, 1152, 20, 21, 0], [138, 181, 1547, 1964, 8, 18, 0], [179, 156, 1291, 1817, 10, 21, 0], [192, 128, 171, 1965, 8, 19, 0], [207, 209, 1273, 1692, 19, 23, 0], [229, 218, 1425, 1984, 7, 14, 0]], [[118, 99, 22, 1853, 10, 20, 0], [117, 180, 33, 1854, 10, 20, 0], [137, 98, 1339, 1816, 10, 21, 0], [137, 180, 421, 1931, 9, 20, 0], [165, 127, 869, 1783, 11, 20, 0], [152, 156, 185, 818, 14, 21, 0], [179, 156, 1779, 1910, 9, 21, 0], [191, 127, 279,
                1963, 8, 20, 0], [207, 210, 1171, 1762, 11, 21, 0], [220, 210, 765, 1985, 5, 9, 0], [230, 218, 1441, 1399, 6, 13, 0]], [[118, 99, 1415, 1880, 10, 19, 0], [117, 180, 44, 1854, 10, 20, 0], [138, 99, 1186, 1965, 8, 18, 0], [137, 180, 288, 1963, 8, 20, 0], [165, 127, 1426, 1880, 10, 19, 0], [151, 156, 1464, 340, 14, 23, 0], [178, 156, 1350, 1816, 10, 21, 0], [192, 128, 1709, 594, 7, 19, 0], [206, 209, 1293, 1692, 19, 23, 0], [230, 218, 1872, 1454, 5, 13, 0]], [[118, 99, 796, 1853, 10, 20, 0], [116, 180, 881, 1783, 11, 20, 0], [138, 99, 297, 1963, 8, 20, 0], [136, 180, 431, 1931, 9, 20, 0], [147, 156, 430, 1602, 17, 25, 0], [165,
                127, 1467, 1880, 10, 19, 0], [177, 156, 1361, 1816, 10, 21, 0], [191, 128, 1305, 1984, 7, 18, 0], [206, 210, 978, 1477, 5, 13, 0], [212, 222, 771, 1985, 5, 9, 0], [219, 210, 777, 1986, 5, 9, 0], [229, 218, 1781, 1407, 6, 13, 0]], [[117, 99, 1030, 1853, 10, 20, 0], [116, 180, 1041, 1853, 10, 20, 0], [137, 99, 1287, 1931, 9, 20, 0], [164, 127, 944, 1783, 11, 20, 0], [136, 156, 441, 629, 28, 44, 0], [177, 156, 1845, 1910, 9, 21, 0], [190, 127, 306, 1963, 8, 20, 0], [205, 209, 1313, 1692, 19, 23, 0], [229, 218, 1819, 1532, 5, 13, 0]], [[117, 99, 1052, 1853, 10, 20, 0], [116, 180, 1622, 1853, 10, 20, 0], [137, 99, 315, 1963, 8,
                20, 0], [135, 175, 289, 1216, 15, 25, 0], [151, 156, 252, 1725, 12, 21, 0], [164, 127, 1478, 1880, 10, 19, 0], [176, 156, 1372, 1816, 10, 21, 0], [191, 128, 1709, 614, 7, 19, 0], [205, 210, 347, 1533, 5, 13, 0], [211, 222, 783, 1986, 5, 9, 0], [218, 210, 789, 1986, 5, 9, 0], [228, 218, 1781, 1421, 6, 13, 0]], [[117, 100, 964, 1934, 9, 19, 0], [115, 180, 55, 1854, 10, 20, 0], [137, 100, 180, 1965, 8, 19, 0], [151, 156, 1183, 1762, 11, 21, 0], [135, 180, 1030, 1314, 20, 20, 0], [163, 127, 956, 1783, 11, 20, 0], [175, 156, 1383, 1816, 10, 21, 0], [189, 127, 1434, 1931, 9, 20, 0], [204, 209, 1722, 1692, 19, 23, 0], [227, 217, 410,
                1985, 7, 15, 0]], [[116, 99, 431, 1854, 10, 20, 0], [115, 180, 442, 1854, 10, 20, 0], [135, 98, 1394, 1816, 10, 21, 0], [135, 180, 324, 1963, 8, 20, 0], [150, 156, 1159, 1725, 12, 21, 0], [146, 187, 1002, 1397, 16, 10, 0], [163, 129, 1136, 1934, 9, 18, 0], [174, 156, 1405, 1816, 10, 21, 0], [190, 128, 1313, 1984, 7, 18, 0], [204, 210, 1172, 1725, 12, 21, 0], [217, 210, 1594, 1952, 6, 9, 0], [227, 218, 1781, 1435, 6, 13, 0]], [[116, 99, 1305, 1854, 10, 20, 0], [114, 180, 1010, 1783, 11, 20, 0], [136, 99, 333, 1963, 8, 20, 0], [134, 180, 1364, 1932, 9, 20, 0], [163, 127, 1456, 1854, 10, 20, 0], [149, 156, 1185, 1726, 12, 21,
                0], [154, 186, 354, 1478, 16, 11, 0], [174, 156, 1416, 1816, 10, 21, 0], [189, 127, 342, 1963, 8, 20, 0], [203, 209, 1742, 1692, 19, 23, 0], [226, 217, 418, 1985, 7, 15, 0]], [[115, 99, 1592, 1854, 10, 20, 0], [114, 180, 1603, 1854, 10, 20, 0], [135, 99, 1374, 1932, 9, 20, 0], [134, 180, 351, 1963, 8, 20, 0], [149, 156, 1195, 1761, 11, 21, 0], [163, 127, 1489, 1880, 10, 19, 0], [173, 156, 1427, 1816, 10, 21, 0], [161, 183, 1024, 1750, 12, 12, 0], [189, 128, 1321, 1984, 7, 18, 0], [203, 210, 411, 1726, 12, 21, 0], [216, 210, 1556, 1964, 6, 9, 0], [227, 218, 1819, 1546, 5, 13, 0]], [[115, 99, 1500, 1880, 10, 19, 0], [114, 180,
                420, 1859, 10, 20, 0], [135, 99, 770, 1966, 8, 18, 0], [133, 180, 1384, 1932, 9, 20, 0], [148, 156, 424, 1726, 12, 21, 0], [162, 129, 1146, 1934, 9, 18, 0], [172, 156, 1438, 1816, 10, 21, 0], [165, 182, 1662, 1953, 9, 9, 0], [189, 128, 1329, 1984, 7, 18, 0], [202, 209, 1762, 1692, 19, 23, 0], [225, 217, 426, 1985, 7, 15, 0]], [[115, 99, 466, 1859, 10, 20, 0], [113, 180, 477, 1859, 10, 20, 0], [135, 99, 360, 1964, 8, 20, 0], [133, 180, 1394, 1932, 9, 20, 0], [147, 156, 437, 1726, 12, 21, 0], [162, 127, 488, 1859, 10, 20, 0], [172, 156, 1479, 1816, 10, 21, 0], [166, 181, 1279, 1771, 8, 9, 0], [187, 127, 1404, 1932, 9, 20, 0],
                [202, 210, 998, 1726, 12, 21, 0], [215, 210, 1515, 1984, 6, 9, 0], [226, 218, 347, 1547, 5, 13, 0]], [[114, 99, 499, 1859, 10, 20, 0], [113, 180, 510, 1859, 10, 20, 0], [133, 98, 1490, 1816, 10, 21, 0], [133, 180, 369, 1964, 8, 20, 0], [147, 156, 1347, 1761, 11, 21, 0], [162, 128, 1156, 1934, 9, 18, 0], [171, 156, 1501, 1816, 10, 21, 0], [166, 180, 1433, 1792, 8, 9, 0], [188, 128, 1337, 1984, 7, 18, 0], [201, 209, 1384, 1276, 13, 23, 0], [215, 210, 795, 1986, 5, 9, 0], [224, 217, 434, 1985, 7, 15, 0]], [[114, 99, 890, 1882, 10, 18, 0], [112, 180, 1145, 1783, 11, 20, 0], [134, 99, 994, 1966, 8, 18, 0], [132, 180, 1444, 1932,
                9, 20, 0], [146, 156, 1674, 1726, 12, 21, 0], [161, 127, 521, 1859, 10, 20, 0], [170, 156, 1512, 1816, 10, 21, 0], [166, 179, 1423, 1806, 8, 9, 0], [187, 127, 378, 1964, 8, 20, 0], [201, 210, 1687, 1726, 12, 21, 0], [214, 210, 1522, 1984, 6, 9, 0], [225, 218, 347, 1561, 5, 13, 0]], [[114, 99, 532, 1859, 10, 20, 0], [112, 180, 543, 1860, 10, 20, 0], [132, 98, 1523, 1817, 10, 21, 0], [132, 180, 1454, 1932, 9, 20, 0], [145, 156, 1700, 1727, 12, 21, 0], [161, 127, 1107, 1881, 10, 18, 0], [170, 156, 1534, 1817, 10, 21, 0], [166, 178, 1869, 1807, 8, 9, 0], [187, 128, 189, 1965, 8, 19, 0], [201, 210, 364, 1727, 12, 21, 0], [214, 210,
                801, 1986, 5, 9, 0], [223, 217, 442, 1984, 7, 15, 0]], [[113, 99, 554, 1860, 10, 20, 0], [112, 180, 565, 1860, 10, 20, 0], [132, 98, 1545, 1817, 10, 21, 0], [131, 180, 1464, 1932, 9, 20, 0], [144, 156, 377, 1727, 12, 21, 0], [160, 127, 1157, 1783, 11, 20, 0], [166, 156, 511, 1087, 13, 30, 0], [186, 127, 387, 1964, 8, 20, 0], [200, 210, 390, 1727, 12, 21, 0], [213, 210, 1529, 1984, 6, 9, 0], [224, 218, 1812, 1592, 5, 13, 0]], [[113, 99, 576, 1860, 10, 20, 0], [111, 180, 1169, 1784, 11, 20, 0], [133, 99, 396, 1964, 8, 20, 0], [131, 180, 1474, 1932, 9, 20, 0], [144, 156, 1359, 1761, 11, 21, 0], [160, 128, 974, 1934, 9, 19, 0],
                [166, 156, 572, 280, 12, 29, 0], [187, 128, 170, 1985, 7, 17, 0], [200, 209, 450, 1701, 19, 22, 0], [222, 217, 450, 1985, 7, 15, 0]], [[112, 99, 587, 1860, 10, 20, 0], [111, 180, 621, 1859, 10, 20, 0], [133, 100, 1003, 1966, 8, 18, 0], [131, 180, 405, 1964, 8, 20, 0], [143, 156, 794, 1727, 12, 21, 0], [160, 127, 1118, 1881, 10, 18, 0], [165, 156, 511, 1118, 13, 28, 0], [187, 129, 1206, 1818, 6, 11, 0], [188, 141, 592, 936, 5, 6, 0], [199, 210, 807, 1727, 12, 21, 0], [212, 210, 1536, 1984, 6, 9, 0], [223, 218, 488, 1601, 5, 13, 0]], [[112, 99, 632, 1860, 10, 20, 0], [110, 180, 1181, 1784, 11, 20, 0], [132, 99, 1484, 1932, 9,
                20, 0], [130, 180, 1582, 1931, 9, 20, 0], [142, 156, 820, 1727, 12, 21, 0], [159, 127, 1193, 1784, 11, 20, 0], [165, 156, 572, 339, 12, 28, 0], [185, 127, 414, 1964, 8, 20, 0], [199, 209, 1782, 1693, 19, 23, 0], [221, 217, 458, 1985, 7, 15, 0]], [[112, 99, 643, 1860, 10, 20, 0], [110, 180, 654, 1860, 10, 20, 0], [132, 99, 423, 1964, 8, 20, 0], [130, 180, 1592, 1931, 9, 20, 0], [142, 156, 1371, 1761, 11, 21, 0], [159, 128, 984, 1934, 9, 19, 0], [165, 156, 831, 1126, 11, 27, 0], [186, 128, 178, 1985, 7, 17, 0], [198, 210, 1036, 1728, 12, 21, 0], [212, 210, 807, 1986, 5, 9, 0], [222, 218, 1781, 1449, 6, 13, 0]], [[111, 99, 665,
                1860, 10, 20, 0], [110, 180, 676, 1860, 10, 20, 0], [130, 98, 1556, 1817, 10, 21, 0], [129, 180, 60, 1933, 9, 20, 0], [141, 156, 1600, 1728, 12, 21, 0], [159, 127, 687, 1860, 10, 20, 0], [165, 156, 831, 1154, 11, 27, 0], [184, 127, 70, 1933, 9, 20, 0], [198, 209, 1802, 1693, 19, 23, 0], [221, 218, 1677, 1582, 6, 13, 0]], [[111, 99, 1129, 1881, 10, 18, 0], [109, 180, 698, 1860, 10, 20, 0], [131, 99, 1012, 1966, 8, 18, 0], [129, 180, 80, 1933, 9, 20, 0], [140, 156, 1613, 1728, 12, 21, 0], [158, 128, 1511, 1881, 10, 19, 0], [164, 156, 258, 1358, 11, 26, 0], [185, 128, 1547, 1983, 7, 18, 0], [198, 210, 403, 1762, 11, 21, 0], [211,
                210, 813, 1986, 5, 9, 0], [221, 218, 788, 1593, 6, 13, 0]], [[111, 99, 807, 1859, 10, 20, 0], [109, 180, 818, 1859, 10, 20, 0], [130, 99, 1414, 1932, 9, 20, 0], [129, 180, 432, 1964, 8, 20, 0], [140, 156, 415, 1762, 11, 21, 0], [158, 127, 829, 1859, 10, 20, 0], [165, 156, 704, 277, 9, 22, 0], [184, 127, 441, 1963, 8, 20, 0], [197, 209, 1822, 1693, 19, 23, 0], [220, 218, 1677, 1596, 6, 13, 0]], [[110, 99, 747, 1860, 10, 20, 0], [109, 181, 1166, 1934, 9, 18, 0], [129, 98, 1567, 1817, 10, 21, 0], [139, 156, 567, 1729, 12, 21, 0], [129, 181, 1172, 1966, 8, 18, 0], [158, 127, 1522, 1881, 10, 19, 0], [164, 156, 939, 521, 10, 26, 0],
                [184, 128, 198, 1965, 8, 19, 0], [197, 210, 427, 1762, 11, 21, 0], [210, 210, 819, 1985, 5, 9, 0], [220, 218, 1677, 1610, 6, 13, 0]], [[110, 99, 758, 1860, 10, 20, 0], [108, 180, 769, 1860, 10, 20, 0], [130, 99, 450, 1964, 8, 20, 0], [138, 156, 580, 1729, 12, 21, 0], [128, 180, 1494, 1933, 9, 20, 0], [157, 127, 1279, 1783, 11, 20, 0], [163, 156, 939, 548, 10, 26, 0], [183, 127, 459, 1964, 8, 20, 0], [196, 209, 91, 1693, 19, 23, 0], [219, 218, 1433, 1985, 7, 14, 0]], [[110, 101, 853, 1975, 8, 18, 0], [108, 180, 780, 1860, 10, 20, 0], [129, 99, 1096, 1933, 9, 19, 0], [138, 156, 845, 1762, 11, 21, 0], [128, 180, 468, 1964, 8, 20,
                0], [157, 127, 1533, 1881, 10, 19, 0], [162, 156, 780, 1328, 12, 28, 0], [184, 128, 1861, 1983, 7, 18, 0], [196, 210, 488, 1615, 5, 13, 0], [202, 222, 825, 1985, 5, 9, 0], [209, 210, 831, 1985, 5, 9, 0], [219, 218, 1804, 1624, 6, 13, 0]], [[109, 99, 840, 1860, 10, 20, 0], [107, 180, 1291, 1783, 11, 20, 0], [128, 98, 1578, 1817, 10, 21, 0], [137, 156, 767, 1730, 12, 21, 0], [127, 180, 1504, 1933, 9, 20, 0], [157, 127, 1544, 1881, 10, 19, 0], [162, 156, 343, 550, 15, 30, 0], [183, 128, 207, 1964, 8, 19, 0], [195, 209, 111, 1693, 19, 23, 0], [218, 217, 1220, 274, 6, 15, 0]], [[109, 99, 851, 1860, 10, 20, 0], [107, 180, 978, 1859,
                10, 20, 0], [129, 99, 477, 1964, 8, 20, 0], [136, 156, 833, 1731, 12, 21, 0], [127, 180, 486, 1964, 8, 20, 0], [156, 127, 1337, 1783, 11, 20, 0], [161, 156, 1857, 1151, 20, 31, 0], [182, 127, 495, 1964, 8, 20, 0], [195, 210, 661, 1646, 5, 13, 0], [201, 222, 1572, 1984, 6, 9, 0], [208, 210, 1579, 1984, 6, 9, 0], [218, 218, 1583, 1641, 6, 13, 0]], [[108, 99, 913, 1860, 10, 20, 0], [106, 180, 1349, 1783, 11, 20, 0], [128, 99, 1106, 1933, 9, 19, 0], [136, 156, 857, 1762, 11, 21, 0], [126, 180, 1514, 1933, 9, 20, 0], [156, 127, 1555, 1881, 10, 19, 0], [160, 156, 1638, 1816, 10, 21, 0], [183, 128, 1869, 1983, 7, 18, 0], [173, 179,
                170, 966, 14, 9, 0], [194, 209, 312, 1693, 19, 23, 0], [217, 217, 466, 1985, 7, 15, 0]], [[108, 99, 924, 1860, 10, 20, 0], [106, 180, 935, 1860, 10, 20, 0], [128, 99, 504, 1964, 8, 20, 0], [135, 156, 1488, 1732, 12, 21, 0], [126, 180, 1524, 1933, 9, 20, 0], [156, 127, 946, 1860, 10, 20, 0], [160, 156, 1855, 1910, 9, 21, 0], [181, 127, 1534, 1933, 9, 20, 0], [179, 177, 1513, 1370, 15, 11, 0], [194, 210, 1626, 1732, 12, 21, 0], [207, 210, 1586, 1984, 6, 9, 0], [218, 218, 1872, 1647, 5, 13, 0], [241, 157, 753, 1654, 29, 24, 0]], [[108, 99, 957, 1860, 10, 20, 0], [106, 180, 989, 1860, 10, 20, 0], [127, 99, 1544, 1933, 9, 20, 0],
                [134, 156, 1639, 1732, 12, 21, 0], [126, 180, 513, 1964, 8, 20, 0], [155, 128, 1625, 1880, 10, 19, 0], [159, 156, 1649, 1816, 10, 21, 0], [182, 128, 18, 1984, 7, 18, 0], [185, 174, 185, 855, 14, 12, 0], [193, 209, 332, 1693, 19, 23, 0], [216, 217, 474, 1985, 7, 15, 0], [240, 159, 1361, 1783, 11, 20, 0], [260, 159, 1865, 1910, 9, 21, 0]], [[107, 99, 1E3, 1860, 10, 20, 0], [105, 180, 1373, 1783, 11, 20, 0], [126, 98, 1660, 1817, 10, 21, 0], [134, 156, 986, 1760, 11, 21, 0], [125, 180, 1554, 1933, 9, 20, 0], [155, 127, 1011, 1860, 10, 20, 0], [158, 156, 1704, 1816, 10, 21, 0], [181, 127, 522, 1964, 8, 20, 0], [190, 168, 723,
                1746, 12, 14, 0], [193, 210, 1344, 1733, 12, 21, 0], [206, 210, 1593, 1984, 6, 9, 0], [217, 218, 1170, 1689, 5, 13, 0], [240, 159, 1495, 1783, 11, 20, 0], [260, 159, 1564, 1933, 9, 20, 0]], [[107, 99, 1636, 1880, 10, 19, 0], [105, 180, 1228, 1859, 10, 20, 0], [127, 99, 216, 1964, 8, 19, 0], [133, 156, 1117, 1735, 12, 21, 0], [125, 180, 531, 1964, 8, 20, 0], [155, 127, 1691, 1880, 10, 19, 0], [158, 156, 0, 1911, 9, 21, 0], [181, 128, 0, 1985, 7, 18, 0], [193, 163, 85, 1611, 10, 14, 0], [192, 210, 1130, 1735, 12, 21, 0], [206, 210, 837, 1985, 5, 9, 0], [215, 217, 482, 1985, 7, 15, 0], [240, 159, 1239, 1859, 10, 20, 0], [259, 159,
                61, 1911, 9, 21, 0]], [[106, 99, 1507, 1783, 11, 20, 0], [105, 180, 1250, 1859, 10, 20, 0], [125, 98, 1715, 1816, 10, 21, 0], [132, 156, 1143, 1735, 12, 21, 0], [124, 180, 1618, 1932, 9, 20, 0], [154, 128, 1702, 1880, 10, 19, 0], [157, 156, 1726, 1816, 10, 21, 0], [180, 127, 225, 1964, 8, 19, 0], [194, 162, 716, 1316, 8, 10, 0], [192, 210, 299, 1736, 12, 21, 0], [205, 210, 1600, 1984, 6, 9, 0], [216, 218, 1266, 1697, 5, 13, 0], [239, 159, 1519, 1783, 11, 20, 0], [259, 159, 1628, 1932, 9, 20, 0]], [[106, 99, 1261, 1860, 10, 20, 0], [104, 180, 1272, 1860, 10, 20, 0], [126, 99, 1638, 1932, 9, 20, 0], [132, 156, 998, 1762, 11,
                21, 0], [124, 180, 1648, 1932, 9, 20, 0], [154, 127, 1283, 1860, 10, 20, 0], [156, 156, 1737, 1816, 10, 21, 0], [180, 127, 540, 1964, 8, 20, 0], [194, 161, 803, 1817, 8, 9, 0], [192, 210, 1095, 1736, 12, 21, 0], [205, 210, 843, 1985, 5, 9, 0], [214, 217, 490, 1985, 7, 15, 0], [239, 159, 1748, 1817, 10, 21, 0], [258, 159, 71, 1911, 9, 21, 0]], [[106, 99, 1335, 1859, 10, 20, 0], [104, 180, 1140, 1881, 10, 18, 0], [125, 99, 1658, 1932, 9, 20, 0], [131, 156, 1462, 1736, 12, 21, 0], [124, 180, 234, 1964, 8, 19, 0], [154, 127, 1713, 1880, 10, 19, 0], [156, 156, 81, 1911, 9, 21, 0], [180, 128, 1709, 634, 7, 19, 0], [194, 161, 1066,
                1984, 8, 8, 0], [191, 210, 1406, 1737, 12, 21, 0], [204, 210, 1607, 1984, 6, 9, 0], [215, 218, 1103, 1698, 5, 13, 0], [238, 159, 1531, 1783, 11, 20, 0], [258, 159, 1668, 1932, 9, 20, 0]], [[105, 99, 1346, 1859, 10, 20, 0], [103, 180, 1543, 1784, 11, 20, 0], [125, 99, 1116, 1933, 9, 19, 0], [130, 156, 1419, 1737, 12, 21, 0], [123, 180, 1678, 1932, 9, 20, 0], [153, 127, 1555, 1784, 11, 20, 0], [155, 156, 1759, 1817, 10, 21, 0], [179, 127, 549, 1964, 8, 20, 0], [194, 160, 1671, 1817, 8, 9, 0], [191, 209, 1376, 1701, 19, 22, 0], [213, 217, 498, 1985, 7, 15, 0], [238, 159, 1665, 1762, 11, 21, 0], [257, 159, 91, 1912, 9, 21, 0]],
            [[105, 99, 1357, 1859, 10, 20, 0], [103, 180, 1368, 1859, 10, 20, 0], [125, 99, 558, 1964, 8, 20, 0], [130, 156, 1677, 1762, 11, 21, 0], [123, 180, 1688, 1932, 9, 20, 0], [153, 127, 1724, 1880, 10, 19, 0], [154, 156, 1770, 1817, 10, 21, 0], [180, 128, 93, 745, 7, 19, 0], [194, 160, 93, 785, 7, 8, 0], [190, 210, 1432, 1737, 12, 21, 0], [203, 210, 1614, 1984, 6, 9, 0], [214, 218, 905, 1649, 6, 13, 0], [237, 159, 1689, 1763, 11, 21, 0], [257, 159, 101, 1912, 9, 21, 0]], [[104, 99, 1567, 1784, 11, 20, 0], [103, 180, 1379, 1859, 10, 20, 0], [123, 98, 1781, 1817, 10, 21, 0], [129, 156, 1445, 1737, 12, 21, 0], [122, 180, 1698, 1932,
                9, 20, 0], [152, 127, 72, 1784, 11, 20, 0], [154, 156, 111, 1912, 9, 21, 0], [178, 127, 567, 1964, 8, 20, 0], [196, 160, 668, 819, 4, 3, 0], [190, 209, 352, 1693, 19, 23, 0], [212, 218, 1441, 1985, 7, 14, 0], [237, 159, 1390, 1859, 10, 20, 0], [257, 159, 1286, 1963, 8, 20, 0]], [[104, 99, 1401, 1859, 10, 20, 0], [102, 180, 1412, 1859, 10, 20, 0], [124, 99, 1126, 1933, 9, 19, 0], [128, 156, 128, 1738, 12, 21, 0], [122, 180, 1708, 1932, 9, 20, 0], [152, 129, 1209, 1933, 9, 18, 0], [153, 156, 1792, 1817, 10, 21, 0], [178, 127, 243, 1964, 8, 19, 0], [193, 160, 1672, 1953, 9, 9, 0], [189, 210, 141, 1738, 12, 21, 0], [203, 210, 988,
                1975, 5, 9, 0], [213, 218, 1177, 1667, 6, 13, 0], [236, 159, 175, 1763, 11, 21, 0], [256, 159, 121, 1912, 9, 21, 0]], [[104, 99, 1423, 1859, 10, 20, 0], [102, 180, 1434, 1859, 10, 20, 0], [124, 99, 1295, 1963, 8, 20, 0], [128, 156, 187, 1763, 11, 21, 0], [122, 180, 1304, 1963, 8, 20, 0], [152, 127, 1467, 1859, 10, 20, 0], [152, 156, 0, 1817, 10, 21, 0], [177, 127, 1718, 1932, 9, 20, 0], [193, 160, 637, 1014, 9, 11, 0], [189, 209, 628, 1693, 19, 23, 0], [212, 218, 1095, 1722, 6, 13, 0], [236, 159, 1478, 1859, 10, 20, 0], [256, 159, 1728, 1933, 9, 20, 0]], [[103, 99, 84, 1784, 11, 20, 0], [101, 180, 96, 1784, 11, 20, 0], [122,
                98, 67, 1817, 10, 21, 0], [127, 156, 154, 1738, 12, 21, 0], [121, 180, 1738, 1933, 9, 20, 0], [152, 128, 1219, 1933, 9, 18, 0], [152, 156, 131, 1912, 9, 21, 0], [178, 128, 93, 765, 7, 19, 0], [192, 162, 1159, 1713, 9, 11, 0], [188, 210, 593, 1738, 12, 21, 0], [202, 210, 988, 1985, 5, 9, 0], [212, 218, 265, 1725, 6, 13, 0], [235, 159, 162, 1784, 11, 20, 0], [255, 159, 141, 1912, 9, 21, 0]], [[103, 99, 1489, 1859, 10, 20, 0], [101, 180, 1500, 1859, 10, 20, 0], [123, 99, 1748, 1933, 9, 20, 0], [126, 156, 606, 1738, 12, 21, 0], [121, 180, 1758, 1933, 9, 20, 0], [151, 129, 1229, 1933, 9, 18, 0], [151, 156, 78, 1817, 10, 21, 0], [178,
                128, 8, 1985, 7, 18, 0], [188, 164, 1121, 1757, 12, 11, 0], [188, 209, 648, 1693, 19, 23, 0], [211, 218, 403, 1727, 6, 13, 0], [235, 159, 174, 1785, 11, 20, 0], [255, 159, 1768, 1933, 9, 20, 0]], [[103, 99, 1735, 1881, 10, 19, 0], [101, 180, 1511, 1860, 10, 20, 0], [123, 99, 252, 1964, 8, 19, 0], [126, 156, 254, 1763, 11, 21, 0], [120, 180, 1778, 1932, 9, 20, 0], [151, 127, 1522, 1860, 10, 20, 0], [150, 156, 89, 1817, 10, 21, 0], [177, 127, 1313, 1963, 8, 20, 0], [184, 167, 521, 888, 12, 9, 0], [188, 210, 266, 1763, 11, 21, 0], [201, 210, 994, 1985, 5, 9, 0], [211, 218, 1501, 1732, 6, 13, 0], [235, 159, 1533, 1860, 10, 20, 0],
                [254, 159, 151, 1912, 9, 21, 0]], [[102, 99, 1544, 1860, 10, 20, 0], [100, 180, 186, 1785, 11, 20, 0], [121, 98, 100, 1818, 10, 21, 0], [125, 156, 619, 1739, 12, 21, 0], [120, 180, 1799, 1932, 9, 20, 0], [151, 127, 1746, 1881, 10, 19, 0], [150, 156, 161, 1912, 9, 21, 0], [177, 128, 26, 1985, 7, 18, 0], [178, 166, 1513, 1393, 15, 10, 0], [187, 209, 899, 1693, 19, 23, 0], [211, 218, 1056, 1705, 5, 13, 0], [234, 159, 278, 1763, 11, 21, 0], [254, 159, 171, 1912, 9, 21, 0]], [[102, 99, 1555, 1860, 10, 20, 0], [100, 180, 1566, 1860, 10, 20, 0], [122, 99, 1322, 1963, 8, 20, 0], [124, 156, 606, 1738, 12, 21, 0], [120, 180, 1331, 1963,
                8, 20, 0], [150, 127, 1633, 1859, 10, 20, 0], [149, 156, 111, 1818, 10, 21, 0], [176, 127, 1340, 1963, 8, 20, 0], [177, 164, 885, 1901, 10, 10, 0], [187, 210, 13, 1725, 5, 13, 0], [193, 222, 1E3, 1985, 5, 9, 0], [200, 210, 1006, 1985, 5, 9, 0], [210, 218, 872, 1740, 6, 13, 0], [234, 159, 1644, 1859, 10, 20, 0], [253, 159, 1809, 1932, 9, 20, 0]], [[101, 99, 400, 1784, 11, 20, 0], [100, 181, 1239, 1934, 9, 18, 0], [121, 99, 1819, 1932, 9, 20, 0], [124, 156, 364, 1763, 11, 21, 0], [120, 181, 862, 1975, 8, 18, 0], [150, 127, 1055, 1882, 10, 18, 0], [148, 156, 122, 1818, 10, 21, 0], [176, 128, 236, 502, 7, 12, 0], [179, 141, 669,
                781, 4, 5, 0], [176, 162, 1019, 1397, 9, 10, 0], [186, 209, 1206, 1693, 19, 23, 0], [209, 217, 506, 1985, 7, 15, 0], [233, 159, 376, 1763, 11, 21, 0], [253, 159, 181, 1912, 9, 21, 0]], [[101, 99, 1693, 1859, 10, 20, 0], [99, 180, 1704, 1859, 10, 20, 0], [121, 99, 1032, 1934, 9, 19, 0], [123, 156, 632, 1739, 12, 21, 0], [119, 180, 1829, 1932, 9, 20, 0], [149, 127, 412, 1784, 11, 20, 0], [148, 156, 191, 1912, 9, 21, 0], [175, 127, 1349, 1964, 8, 20, 0], [176, 161, 641, 1347, 8, 10, 0], [186, 210, 1049, 1728, 5, 13, 0], [192, 222, 1621, 1984, 6, 9, 0], [199, 210, 1628, 1984, 6, 9, 0], [209, 218, 291, 1741, 6, 13, 0], [233, 159,
                1715, 1859, 10, 20, 0], [252, 159, 1839, 1932, 9, 20, 0]], [[101, 99, 1726, 1859, 10, 20, 0], [99, 180, 1737, 1860, 10, 20, 0], [121, 99, 1358, 1964, 8, 20, 0], [122, 156, 645, 1739, 12, 21, 0], [119, 180, 1367, 1964, 8, 20, 0], [149, 127, 1757, 1881, 10, 19, 0], [147, 156, 133, 1818, 10, 21, 0], [176, 128, 186, 1985, 7, 17, 0], [176, 161, 1704, 1749, 7, 8, 0], [185, 209, 862, 1694, 19, 23, 0], [208, 217, 514, 1985, 7, 15, 0], [232, 159, 388, 1763, 11, 21, 0], [252, 159, 201, 1911, 9, 21, 0]], [[100, 99, 424, 1784, 11, 20, 0], [98, 180, 639, 1784, 11, 20, 0], [119, 98, 144, 1818, 10, 21, 0], [122, 156, 787, 1763, 11, 21, 0],
                [118, 180, 1849, 1932, 9, 20, 0], [149, 127, 1066, 1882, 10, 18, 0], [146, 156, 156, 1817, 10, 21, 0], [175, 128, 261, 1964, 8, 19, 0], [175, 161, 350, 1954, 9, 8, 0], [185, 209, 0, 1702, 19, 22, 0], [207, 218, 1449, 1985, 7, 14, 0], [232, 159, 1748, 1860, 10, 20, 0], [251, 159, 1859, 1932, 9, 20, 0]], [[100, 99, 1768, 1881, 10, 19, 0], [98, 180, 1759, 1860, 10, 20, 0], [120, 99, 1051, 1964, 8, 19, 0], [121, 156, 985, 1738, 12, 21, 0], [118, 180, 1376, 1964, 8, 20, 0], [148, 127, 835, 1784, 11, 20, 0], [146, 156, 211, 1911, 9, 21, 0], [174, 127, 1385, 1964, 8, 20, 0], [175, 161, 1682, 1828, 8, 9, 0], [184, 210, 1256, 1738,
                12, 21, 0], [198, 210, 1012, 1985, 5, 9, 0], [208, 218, 1843, 1743, 6, 13, 0], [231, 159, 799, 1763, 11, 21, 0], [251, 159, 221, 1911, 9, 21, 0]], [[100, 99, 1770, 1860, 10, 20, 0], [97, 180, 847, 1784, 11, 20, 0], [120, 99, 1394, 1964, 8, 20, 0], [120, 156, 1269, 1738, 12, 21, 0], [117, 180, 0, 1933, 9, 20, 0], [148, 128, 1249, 1934, 9, 18, 0], [145, 156, 167, 1818, 10, 21, 0], [175, 128, 194, 1985, 7, 17, 0], [175, 162, 779, 1976, 8, 9, 0], [184, 209, 193, 1695, 19, 23, 0], [207, 218, 442, 1748, 6, 13, 0], [231, 159, 1781, 1860, 10, 20, 0], [251, 159, 1403, 1964, 8, 20, 0]], [[99, 99, 0, 1860, 10, 20, 0], [97, 180, 66, 1860,
                10, 20, 0], [119, 99, 90, 1934, 9, 20, 0], [120, 156, 811, 1763, 11, 21, 0], [117, 180, 100, 1934, 9, 20, 0], [148, 127, 77, 1860, 10, 20, 0], [144, 156, 178, 1818, 10, 21, 0], [173, 127, 110, 1934, 9, 20, 0], [174, 163, 360, 1955, 9, 8, 0], [183, 210, 1282, 1738, 12, 21, 0], [197, 210, 1565, 1989, 5, 9, 0], [207, 218, 559, 1768, 6, 13, 0], [230, 159, 993, 1784, 11, 20, 0], [250, 159, 231, 1911, 9, 21, 0]], [[99, 99, 88, 1860, 10, 20, 0], [97, 180, 99, 1861, 10, 20, 0], [119, 99, 1412, 1964, 8, 20, 0], [119, 156, 1295, 1738, 12, 21, 0], [117, 180, 1421, 1963, 8, 20, 0], [147, 128, 1077, 1882, 10, 18, 0], [144, 156, 241, 1911,
                9, 21, 0], [174, 128, 34, 1985, 7, 18, 0], [174, 163, 788, 1976, 8, 9, 0], [183, 209, 1333, 1695, 19, 23, 0], [206, 218, 1449, 1816, 6, 13, 0], [230, 159, 1023, 1763, 11, 21, 0], [249, 159, 189, 1818, 10, 21, 0]], [[99, 100, 1259, 1934, 9, 18, 0], [96, 180, 1579, 1785, 11, 20, 0], [119, 100, 871, 1975, 8, 18, 0], [118, 156, 1308, 1738, 12, 21, 0], [116, 180, 120, 1934, 9, 20, 0], [147, 127, 110, 1861, 10, 20, 0], [143, 156, 200, 1817, 10, 21, 0], [173, 127, 1430, 1963, 8, 20, 0], [173, 164, 370, 1955, 9, 8, 0], [183, 210, 1035, 1763, 11, 21, 0], [196, 210, 729, 1991, 5, 9, 0], [206, 218, 923, 1818, 6, 13, 0], [230, 159, 121,
                1861, 10, 20, 0], [249, 159, 130, 1934, 9, 20, 0]], [[98, 99, 132, 1861, 10, 20, 0], [96, 180, 143, 1861, 10, 20, 0], [117, 98, 211, 1817, 10, 21, 0], [118, 156, 1313, 1763, 11, 21, 0], [116, 180, 1439, 1964, 8, 20, 0], [147, 127, 1779, 1881, 10, 19, 0], [142, 156, 222, 1817, 10, 21, 0], [173, 128, 1060, 1964, 8, 19, 0], [173, 164, 1682, 1953, 9, 9, 0], [182, 209, 919, 1697, 19, 23, 0], [205, 217, 1220, 337, 6, 14, 0], [229, 159, 1585, 1763, 11, 21, 0], [249, 159, 251, 1911, 9, 21, 0]], [[98, 99, 154, 1860, 10, 20, 0], [95, 180, 1591, 1785, 11, 20, 0], [118, 99, 1448, 1964, 8, 20, 0], [117, 156, 1713, 1738, 12, 21, 0], [115,
                180, 140, 1934, 9, 20, 0], [146, 128, 0, 1881, 10, 19, 0], [142, 156, 261, 1911, 9, 21, 0], [173, 128, 42, 1985, 7, 18, 0], [172, 165, 380, 1955, 9, 8, 0], [182, 210, 1088, 1744, 5, 13, 0], [188, 222, 735, 1991, 5, 9, 0], [195, 210, 741, 1991, 5, 9, 0], [205, 218, 978, 1839, 6, 13, 0], [229, 159, 165, 1861, 10, 20, 0], [248, 159, 150, 1934, 9, 20, 0]], [[97, 99, 1656, 1784, 11, 20, 0], [95, 180, 176, 1861, 10, 20, 0], [116, 98, 233, 1817, 10, 21, 0], [116, 156, 1726, 1738, 12, 21, 0], [115, 180, 160, 1934, 9, 20, 0], [146, 127, 187, 1861, 10, 20, 0], [141, 156, 244, 1817, 10, 21, 0], [172, 127, 1457, 1964, 8, 20, 0], [172, 165,
                1692, 1953, 9, 9, 0], [181, 209, 939, 1697, 19, 23, 0], [204, 217, 1220, 290, 6, 15, 0], [228, 159, 1597, 1763, 11, 21, 0], [248, 159, 271, 1911, 9, 21, 0]], [[97, 99, 66, 1881, 10, 19, 0], [95, 180, 1088, 1882, 10, 18, 0], [117, 99, 1069, 1964, 8, 19, 0], [116, 156, 567, 1764, 11, 21, 0], [115, 180, 1091, 1964, 8, 19, 0], [146, 127, 77, 1881, 10, 19, 0], [140, 156, 255, 1817, 10, 21, 0], [172, 128, 1100, 1964, 8, 19, 0], [171, 166, 390, 1955, 9, 8, 0], [181, 210, 78, 1746, 5, 13, 0], [187, 222, 1635, 1984, 6, 9, 0], [194, 210, 1642, 1984, 6, 9, 0], [204, 218, 1305, 1838, 6, 13, 0], [228, 159, 199, 1860, 10, 20, 0], [247, 159,
                170, 1934, 9, 20, 0]], [[97, 99, 210, 1860, 10, 20, 0], [94, 180, 1668, 1784, 11, 20, 0], [117, 99, 1466, 1964, 8, 20, 0], [115, 156, 1739, 1738, 12, 21, 0], [114, 180, 180, 1934, 9, 20, 0], [145, 127, 247, 1785, 11, 20, 0], [140, 156, 281, 1911, 9, 21, 0], [171, 127, 1475, 1964, 8, 20, 0], [171, 166, 1087, 1984, 8, 8, 0], [180, 209, 1226, 1697, 19, 23, 0], [203, 217, 522, 1985, 7, 15, 0], [227, 159, 579, 1764, 11, 21, 0], [247, 159, 291, 1911, 9, 21, 0]], [[96, 99, 221, 1860, 10, 20, 0], [94, 180, 232, 1860, 10, 20, 0], [115, 98, 266, 1817, 10, 21, 0], [114, 156, 1752, 1738, 12, 21, 0], [114, 180, 190, 1934, 9, 20, 0], [145,
                127, 88, 1881, 10, 19, 0], [139, 156, 277, 1817, 10, 21, 0], [172, 128, 50, 1985, 7, 18, 0], [170, 166, 400, 1955, 9, 8, 0], [180, 210, 1765, 1739, 12, 21, 0], [193, 210, 1649, 1984, 6, 9, 0], [204, 218, 199, 1763, 5, 13, 0], [227, 159, 1843, 1764, 11, 21, 0], [246, 159, 301, 1911, 9, 21, 0]], [[96, 99, 99, 1882, 10, 19, 0], [94, 180, 243, 1860, 10, 20, 0], [116, 99, 880, 1975, 8, 18, 0], [114, 156, 1855, 1764, 11, 21, 0], [113, 180, 201, 1933, 9, 20, 0], [145, 127, 254, 1860, 10, 20, 0], [138, 156, 288, 1817, 10, 21, 0], [170, 127, 211, 1933, 9, 20, 0], [169, 166, 441, 1954, 9, 8, 0], [179, 209, 1246, 1697, 19, 23, 0], [202,
                217, 530, 1985, 7, 15, 0], [226, 159, 259, 1785, 11, 20, 0], [246, 159, 221, 1933, 9, 20, 0]], [[96, 99, 265, 1860, 10, 20, 0], [93, 180, 276, 1860, 10, 20, 0], [116, 99, 1484, 1964, 8, 20, 0], [113, 156, 1778, 1739, 12, 21, 0], [113, 180, 231, 1933, 9, 20, 0], [144, 128, 110, 1882, 10, 19, 0], [138, 156, 311, 1911, 9, 21, 0], [170, 127, 1109, 1964, 8, 19, 0], [169, 167, 1718, 1143, 8, 7, 0], [179, 210, 1791, 1739, 12, 21, 0], [192, 210, 1656, 1984, 6, 9, 0], [203, 218, 1836, 1765, 5, 13, 0], [226, 159, 759, 1765, 11, 21, 0], [245, 159, 321, 1911, 9, 21, 0]], [[95, 99, 287, 1860, 10, 20, 0], [93, 180, 298, 1860, 10, 20, 0], [114,
                98, 299, 1817, 10, 21, 0], [112, 156, 1804, 1739, 12, 21, 0], [113, 180, 1573, 1963, 8, 20, 0], [144, 127, 309, 1860, 10, 20, 0], [137, 156, 310, 1817, 10, 21, 0], [170, 127, 1582, 1963, 8, 20, 0], [168, 166, 451, 1955, 9, 8, 0], [178, 209, 1449, 1319, 13, 23, 0], [192, 210, 747, 1991, 5, 9, 0], [201, 217, 538, 1985, 7, 15, 0], [225, 159, 271, 1785, 11, 20, 0], [245, 159, 241, 1933, 9, 20, 0]], [[95, 99, 320, 1860, 10, 20, 0], [92, 180, 362, 1785, 11, 20, 0], [115, 99, 1591, 1963, 8, 20, 0], [112, 156, 896, 1765, 11, 21, 0], [112, 180, 251, 1933, 9, 20, 0], [144, 127, 121, 1882, 10, 19, 0], [136, 156, 321, 1817, 10, 21, 0], [170,
                128, 1693, 807, 7, 19, 0], [167, 166, 461, 1955, 9, 8, 0], [178, 210, 1817, 1739, 12, 21, 0], [191, 210, 1663, 1984, 6, 9, 0], [202, 218, 1872, 1786, 5, 13, 0], [225, 159, 908, 1765, 11, 21, 0], [244, 159, 332, 1817, 10, 21, 0]], [[95, 100, 1269, 1934, 9, 18, 0], [92, 180, 331, 1860, 10, 20, 0], [115, 100, 889, 1975, 8, 18, 0], [111, 156, 85, 1739, 12, 21, 0], [112, 180, 261, 1933, 9, 20, 0], [143, 128, 1151, 1882, 10, 18, 0], [136, 156, 331, 1911, 9, 21, 0], [170, 128, 58, 1985, 7, 18, 0], [167, 166, 1096, 1984, 8, 8, 0], [178, 210, 98, 1739, 12, 21, 0], [191, 210, 753, 1991, 5, 9, 0], [200, 217, 546, 1985, 7, 15, 0], [225, 159,
                342, 1860, 10, 20, 0], [244, 159, 271, 1933, 9, 20, 0]], [[94, 99, 353, 1860, 10, 20, 0], [92, 180, 364, 1860, 10, 20, 0], [113, 98, 343, 1817, 10, 21, 0], [110, 156, 111, 1739, 12, 21, 0], [111, 180, 281, 1933, 9, 20, 0], [143, 127, 375, 1860, 10, 20, 0], [135, 156, 354, 1817, 10, 21, 0], [169, 127, 1600, 1963, 8, 20, 0], [166, 166, 471, 1955, 9, 8, 0], [177, 210, 167, 1739, 12, 21, 0], [190, 210, 1670, 1984, 6, 9, 0], [201, 218, 752, 1818, 5, 13, 0], [224, 159, 920, 1765, 11, 21, 0], [244, 159, 341, 1911, 9, 21, 0]], [[94, 99, 386, 1860, 10, 20, 0], [91, 180, 397, 1860, 10, 20, 0], [114, 99, 1609, 1963, 8, 20, 0], [110, 156,
                932, 1765, 11, 21, 0], [111, 180, 291, 1933, 9, 20, 0], [143, 127, 132, 1882, 10, 19, 0], [134, 156, 365, 1817, 10, 21, 0], [169, 128, 66, 1985, 7, 18, 0], [165, 166, 481, 1955, 9, 8, 0], [177, 209, 520, 1702, 19, 22, 0], [199, 217, 554, 1985, 7, 15, 0], [224, 159, 408, 1860, 10, 20, 0], [243, 159, 351, 1911, 9, 21, 0]], [[93, 99, 453, 1860, 10, 20, 0], [91, 180, 598, 1861, 10, 20, 0], [112, 98, 376, 1817, 10, 21, 0], [109, 156, 209, 1739, 12, 21, 0], [111, 180, 1618, 1963, 8, 20, 0], [142, 127, 374, 1785, 11, 20, 0], [134, 156, 361, 1912, 9, 21, 0], [168, 127, 1627, 1963, 8, 20, 0], [165, 165, 1702, 1953, 9, 9, 0], [176, 210,
                312, 1739, 12, 21, 0], [189, 210, 1677, 1984, 6, 9, 0], [200, 218, 1614, 1854, 6, 13, 0], [223, 159, 386, 1785, 11, 20, 0], [243, 159, 301, 1933, 9, 20, 0]], [[93, 99, 143, 1882, 10, 19, 0], [90, 180, 783, 1785, 11, 20, 0], [113, 99, 898, 1975, 8, 18, 0], [108, 156, 325, 1739, 12, 21, 0], [110, 180, 311, 1933, 9, 20, 0], [142, 127, 154, 1881, 10, 19, 0], [133, 156, 387, 1817, 10, 21, 0], [169, 129, 74, 1985, 7, 18, 0], [164, 165, 491, 1955, 9, 8, 0], [176, 209, 1475, 1697, 19, 23, 0], [198, 218, 1457, 1985, 7, 14, 0], [223, 159, 609, 1861, 10, 20, 0], [242, 159, 371, 1912, 9, 21, 0]], [[93, 99, 709, 1861, 10, 20, 0], [90, 180,
                165, 1882, 10, 19, 0], [112, 99, 321, 1933, 9, 20, 0], [108, 156, 1207, 1765, 11, 21, 0], [110, 180, 1636, 1963, 8, 20, 0], [141, 127, 795, 1785, 11, 20, 0], [132, 156, 398, 1817, 10, 21, 0], [167, 127, 331, 1933, 9, 20, 0], [164, 164, 797, 1976, 8, 9, 0], [175, 210, 338, 1739, 12, 21, 0], [189, 210, 943, 1991, 5, 9, 0], [199, 218, 1022, 1860, 6, 13, 0], [222, 159, 807, 1785, 11, 20, 0], [242, 159, 341, 1933, 9, 20, 0]], [[92, 99, 720, 1861, 10, 20, 0], [90, 180, 731, 1861, 10, 20, 0], [111, 98, 409, 1817, 10, 21, 0], [107, 156, 351, 1739, 12, 21, 0], [110, 180, 1645, 1963, 8, 20, 0], [141, 129, 1337, 1933, 9, 17, 0], [132, 156,
                381, 1912, 9, 21, 0], [168, 128, 82, 1984, 7, 18, 0], [163, 164, 501, 1955, 9, 8, 0], [175, 209, 1842, 1697, 19, 23, 0], [198, 218, 1327, 1860, 6, 13, 0], [222, 159, 1219, 1765, 11, 21, 0], [241, 159, 391, 1912, 9, 21, 0]], [[92, 99, 1162, 1882, 10, 18, 0], [89, 180, 1022, 1785, 11, 20, 0], [112, 99, 907, 1975, 8, 18, 0], [106, 156, 780, 1739, 12, 21, 0], [109, 180, 351, 1933, 9, 20, 0], [141, 127, 176, 1882, 10, 19, 0], [131, 156, 456, 1817, 10, 21, 0], [168, 129, 90, 1985, 7, 18, 0], [163, 163, 1712, 1953, 9, 9, 0], [174, 210, 880, 1739, 12, 21, 0], [188, 210, 949, 1991, 5, 9, 0], [198, 218, 1437, 1880, 6, 13, 0], [221, 159,
                1034, 1785, 11, 20, 0], [241, 159, 361, 1934, 9, 20, 0]], [[91, 99, 1303, 1785, 11, 20, 0], [89, 180, 862, 1861, 10, 20, 0], [111, 99, 371, 1934, 9, 20, 0], [106, 156, 1231, 1765, 11, 21, 0], [109, 180, 1654, 1963, 8, 20, 0], [140, 127, 1680, 1785, 11, 20, 0], [130, 156, 604, 1818, 10, 21, 0], [166, 127, 1663, 1963, 8, 20, 0], [174, 209, 29, 1698, 19, 23, 0], [197, 218, 1099, 1882, 6, 13, 0], [221, 159, 1471, 1765, 11, 21, 0], [240, 159, 615, 1818, 10, 21, 0]], [[91, 99, 873, 1861, 10, 20, 0], [88, 180, 559, 1786, 11, 20, 0], [110, 98, 719, 1818, 10, 21, 0], [105, 156, 893, 1739, 12, 21, 0], [108, 180, 381, 1934, 9, 20, 0],
                [130, 156, 401, 1912, 9, 21, 0], [140, 129, 1347, 1933, 9, 17, 0], [166, 127, 1118, 1964, 8, 19, 0], [163, 163, 806, 1976, 8, 9, 0], [174, 210, 1824, 1765, 11, 21, 0], [187, 210, 955, 1991, 5, 9, 0], [197, 218, 1424, 1911, 6, 13, 0], [220, 159, 12, 1766, 11, 21, 0], [240, 159, 962, 1911, 9, 21, 0]], [[91, 99, 884, 1861, 10, 20, 0], [88, 180, 895, 1861, 10, 20, 0], [111, 99, 1672, 1963, 8, 20, 0], [104, 156, 947, 1739, 12, 21, 0], [108, 180, 391, 1934, 9, 20, 0], [129, 156, 730, 1818, 10, 21, 0], [140, 127, 1113, 1860, 10, 20, 0], [165, 127, 401, 1934, 9, 20, 0], [163, 163, 454, 1472, 9, 10, 0], [173, 209, 1063, 1698, 19, 23,
                0], [196, 218, 1220, 352, 6, 14, 0], [220, 159, 1124, 1860, 10, 20, 0], [240, 159, 1681, 1963, 8, 20, 0]], [[90, 99, 1135, 1860, 10, 20, 0], [88, 180, 1146, 1860, 10, 20, 0], [110, 99, 1042, 1934, 9, 19, 0], [103, 156, 960, 1739, 12, 21, 0], [108, 180, 1690, 1963, 8, 20, 0], [128, 156, 741, 1818, 10, 21, 0], [140, 128, 1297, 1933, 9, 18, 0], [166, 128, 1693, 827, 7, 19, 0], [163, 164, 1460, 1770, 9, 14, 0], [173, 210, 796, 1839, 5, 13, 0], [179, 222, 961, 1991, 5, 9, 0], [186, 210, 967, 1991, 5, 9, 0], [196, 218, 954, 1912, 6, 13, 0], [219, 159, 571, 1786, 11, 20, 0], [239, 159, 793, 1912, 9, 21, 0]], [[90, 99, 1063, 1861, 10,
                20, 0], [87, 180, 1836, 1786, 11, 20, 0], [110, 99, 441, 1933, 9, 20, 0], [103, 156, 24, 1766, 11, 21, 0], [107, 180, 451, 1934, 9, 20, 0], [128, 156, 803, 1912, 9, 21, 0], [139, 127, 1074, 1861, 10, 20, 0], [165, 127, 1699, 1963, 8, 20, 0], [163, 169, 1792, 1860, 9, 11, 0], [172, 209, 1083, 1698, 19, 23, 0], [195, 217, 562, 1985, 7, 15, 0], [219, 159, 1848, 1786, 11, 20, 0], [239, 159, 461, 1934, 9, 20, 0]], [[90, 99, 1085, 1861, 10, 20, 0], [87, 180, 1096, 1861, 10, 20, 0], [109, 99, 471, 1934, 9, 20, 0], [102, 156, 1198, 1739, 12, 21, 0], [107, 180, 1708, 1963, 8, 20, 0], [127, 156, 879, 1818, 10, 21, 0], [139, 127, 1173,
                1882, 10, 18, 0], [165, 128, 1127, 1964, 8, 19, 0], [163, 171, 1236, 1953, 9, 10, 0], [172, 210, 906, 1861, 5, 13, 0], [178, 222, 1684, 1984, 6, 9, 0], [185, 210, 1691, 1984, 6, 9, 0], [195, 218, 1179, 1912, 6, 13, 0], [218, 159, 1860, 1786, 11, 20, 0], [238, 159, 813, 1912, 9, 21, 0]], [[89, 99, 1157, 1861, 10, 20, 0], [86, 180, 753, 1787, 11, 20, 0], [108, 98, 890, 1818, 10, 21, 0], [101, 156, 846, 1740, 12, 21, 0], [106, 180, 481, 1934, 9, 20, 0], [126, 156, 901, 1818, 10, 21, 0], [138, 127, 893, 1787, 11, 20, 0], [164, 127, 1717, 1964, 8, 20, 0], [163, 171, 1246, 1953, 9, 10, 0], [171, 209, 1662, 1698, 19, 23, 0], [194,
                217, 1164, 1984, 7, 15, 0], [218, 159, 905, 1787, 11, 20, 0], [238, 159, 491, 1934, 9, 20, 0]], [[89, 99, 1184, 1882, 10, 18, 0], [86, 180, 1168, 1861, 10, 20, 0], [109, 99, 916, 1975, 8, 18, 0], [101, 156, 823, 1766, 11, 21, 0], [106, 180, 501, 1934, 9, 20, 0], [126, 156, 874, 1912, 9, 21, 0], [138, 127, 187, 1882, 10, 19, 0], [165, 128, 202, 1985, 7, 17, 0], [163, 166, 118, 1520, 8, 14, 0], [171, 210, 859, 1740, 12, 21, 0], [184, 210, 1698, 1984, 6, 9, 0], [194, 218, 421, 1913, 6, 13, 0], [218, 159, 912, 1818, 10, 21, 0], [237, 159, 884, 1912, 9, 21, 0]], [[88, 99, 917, 1787, 11, 20, 0], [86, 180, 1179, 1861, 10, 20, 0], [107,
                98, 1118, 1817, 10, 21, 0], [100, 156, 180, 1741, 12, 21, 0], [106, 180, 1726, 1964, 8, 20, 0], [125, 156, 1129, 1817, 10, 21, 0], [138, 127, 1316, 1881, 10, 18, 0], [164, 128, 1263, 1490, 7, 12, 0], [167, 141, 669, 787, 4, 5, 0], [158, 157, 1353, 1713, 13, 19, 0], [170, 209, 49, 1700, 19, 23, 0], [193, 217, 1172, 1985, 7, 15, 0], [217, 159, 1047, 1766, 11, 21, 0], [237, 159, 894, 1912, 9, 21, 0]], [[88, 99, 1190, 1861, 10, 20, 0], [85, 181, 198, 1881, 10, 19, 0], [108, 99, 511, 1934, 9, 20, 0], [99, 156, 193, 1741, 12, 21, 0], [105, 180, 521, 1934, 9, 20, 0], [124, 156, 1140, 1817, 10, 21, 0], [137, 127, 929, 1787, 11, 20,
                0], [163, 127, 1735, 1964, 8, 20, 0], [157, 155, 1702, 1704, 18, 22, 0], [170, 210, 265, 1741, 12, 21, 0], [183, 210, 1705, 1984, 6, 9, 0], [194, 218, 961, 1881, 5, 13, 0], [217, 159, 1294, 1860, 10, 20, 0], [236, 159, 531, 1934, 9, 20, 0]], [[88, 99, 209, 1881, 10, 19, 0], [85, 180, 1316, 1860, 10, 20, 0], [108, 99, 1136, 1964, 8, 19, 0], [99, 156, 1059, 1766, 11, 21, 0], [105, 180, 541, 1934, 9, 20, 0], [124, 156, 904, 1912, 9, 21, 0], [137, 127, 220, 1881, 10, 19, 0], [164, 128, 210, 1984, 7, 17, 0], [155, 153, 1768, 972, 21, 25, 0], [169, 210, 278, 1741, 12, 21, 0], [183, 210, 973, 1991, 5, 9, 0], [192, 217, 1181, 1984,
                7, 15, 0], [216, 159, 1071, 1766, 11, 21, 0], [236, 159, 914, 1912, 9, 21, 0]], [[87, 98, 1634, 1663, 29, 21, 0], [98, 156, 1321, 1741, 12, 21, 0], [85, 180, 1476, 1676, 28, 20, 0], [123, 156, 1151, 1817, 10, 21, 0], [137, 127, 1655, 1860, 10, 20, 0], [162, 127, 551, 1934, 9, 20, 0], [153, 152, 1853, 0, 24, 27, 0], [169, 210, 1851, 1742, 12, 21, 0], [182, 210, 1712, 1985, 6, 9, 0], [193, 218, 1287, 1912, 5, 13, 0], [216, 159, 1680, 1860, 10, 20, 0], [235, 159, 561, 1934, 9, 20, 0]], [[87, 99, 268, 1669, 29, 20, 0], [97, 156, 1864, 1742, 12, 21, 0], [84, 180, 298, 1669, 29, 20, 0], [122, 156, 1074, 1818, 10, 21, 0], [136, 128,
                1566, 1881, 10, 18, 0], [163, 128, 98, 1985, 7, 18, 0], [153, 150, 1572, 616, 25, 29, 0], [169, 210, 906, 1743, 12, 21, 0], [182, 210, 979, 1991, 5, 9, 0], [191, 217, 1189, 1984, 7, 15, 0], [215, 159, 1644, 1766, 11, 21, 0], [235, 159, 924, 1912, 9, 21, 0]], [[87, 99, 30, 1677, 28, 20, 0], [97, 156, 1483, 1767, 11, 21, 0], [84, 180, 1081, 1677, 28, 20, 0], [121, 156, 1085, 1818, 10, 21, 0], [136, 127, 1813, 1860, 10, 20, 0], [162, 127, 1744, 1964, 8, 20, 0], [152, 149, 1850, 433, 26, 31, 0], [168, 210, 919, 1743, 12, 21, 0], [181, 210, 1719, 1985, 6, 9, 0], [192, 218, 1357, 1933, 5, 13, 0], [215, 159, 1824, 1860, 10, 20, 0],
                [235, 159, 1753, 1964, 8, 20, 0]], [[86, 99, 1416, 1669, 29, 20, 0], [96, 156, 932, 1743, 12, 21, 0], [83, 180, 1446, 1669, 29, 20, 0], [121, 156, 934, 1912, 9, 21, 0], [136, 127, 231, 1881, 10, 19, 0], [162, 128, 1145, 1964, 8, 19, 0], [163, 148, 1722, 1954, 9, 9, 0], [151, 158, 62, 1676, 28, 23, 0], [168, 209, 1565, 1702, 19, 22, 0], [190, 217, 1197, 1984, 7, 15, 0], [214, 159, 1205, 1787, 11, 20, 0], [234, 159, 944, 1912, 9, 21, 0]], [[86, 99, 1664, 1677, 28, 20, 0], [95, 156, 1211, 1743, 12, 21, 0], [83, 180, 152, 1670, 29, 20, 0], [120, 156, 1096, 1818, 10, 21, 0], [135, 128, 1647, 1881, 10, 18, 0], [162, 128, 106, 1985,
                7, 18, 0], [163, 147, 1732, 1954, 9, 9, 0], [151, 157, 461, 1655, 29, 24, 0], [167, 210, 238, 1647, 19, 21, 0], [191, 218, 1861, 1963, 5, 13, 0], [214, 159, 1217, 1787, 11, 20, 0], [234, 159, 571, 1934, 9, 20, 0]], [[85, 99, 182, 1671, 29, 20, 0], [95, 156, 1609, 1767, 11, 21, 0], [83, 180, 491, 1679, 28, 20, 0], [119, 156, 1162, 1818, 10, 21, 0], [135, 127, 1835, 1860, 10, 20, 0], [161, 127, 432, 1033, 11, 28, 0], [151, 157, 495, 1509, 29, 25, 0], [167, 209, 1585, 1702, 19, 22, 0], [189, 217, 1205, 1985, 7, 15, 0], [213, 159, 1229, 1787, 11, 20, 0], [233, 159, 972, 1912, 9, 21, 0]], [[85, 98, 585, 1664, 29, 21, 0], [94, 156,
                1224, 1743, 12, 21, 0], [82, 180, 615, 1670, 29, 20, 0], [119, 156, 982, 1912, 9, 21, 0], [135, 127, 242, 1881, 10, 19, 0], [161, 128, 1201, 1494, 11, 26, 0], [150, 156, 1847, 1112, 30, 26, 0], [166, 210, 152, 1648, 19, 21, 0], [190, 218, 1574, 1932, 6, 13, 0], [213, 159, 1621, 1767, 11, 21, 0], [233, 159, 992, 1912, 9, 21, 0]], [[85, 99, 388, 1685, 28, 19, 0], [93, 156, 1237, 1743, 12, 21, 0], [82, 180, 675, 1679, 28, 20, 0], [118, 156, 1173, 1818, 10, 21, 0], [134, 127, 1460, 1787, 11, 20, 0], [160, 127, 1544, 1507, 12, 27, 0], [164, 156, 1047, 853, 17, 9, 0], [157, 167, 627, 830, 21, 8, 0], [166, 209, 69, 1700, 19, 23, 0],
                [189, 218, 771, 1934, 6, 13, 0], [213, 159, 1846, 1860, 10, 20, 0], [232, 159, 581, 1934, 9, 20, 0]], [[84, 98, 1583, 1664, 29, 21, 0], [93, 156, 36, 1768, 11, 21, 0], [81, 180, 783, 1671, 29, 20, 0], [117, 156, 1184, 1818, 10, 21, 0], [134, 127, 253, 1881, 10, 19, 0], [161, 128, 1201, 1521, 11, 26, 0], [163, 156, 1065, 853, 17, 9, 0], [156, 168, 361, 921, 23, 14, 0], [165, 210, 748, 1703, 19, 21, 0], [189, 218, 994, 1934, 6, 13, 0], [212, 159, 48, 1768, 11, 21, 0], [232, 159, 1099, 1911, 9, 21, 0]], [[84, 99, 975, 1671, 29, 20, 0], [92, 156, 1475, 1743, 12, 21, 0], [81, 180, 1613, 1685, 28, 19, 0], [117, 156, 1109, 1911, 9,
                21, 0], [134, 127, 1857, 1860, 10, 20, 0], [159, 127, 1830, 1743, 12, 21, 0], [164, 155, 1029, 1013, 16, 9, 0], [156, 168, 301, 272, 23, 8, 0], [165, 209, 480, 1700, 19, 23, 0], [188, 218, 1279, 1934, 6, 13, 0], [212, 159, 1577, 1871, 10, 20, 0], [231, 159, 591, 1934, 9, 20, 0]], [[84, 99, 704, 1679, 28, 20, 0], [91, 156, 13, 1744, 12, 21, 0], [81, 180, 733, 1679, 28, 20, 0], [116, 156, 1195, 1818, 10, 21, 0], [133, 128, 1677, 1881, 10, 18, 0], [160, 128, 286, 1714, 12, 26, 0], [164, 155, 274, 870, 17, 10, 0], [156, 168, 1853, 112, 24, 8, 0], [165, 210, 392, 1705, 18, 21, 0], [188, 218, 1565, 1975, 6, 13, 0], [211, 159, 60,
                1768, 11, 21, 0], [231, 159, 1119, 1911, 9, 21, 0]], [[83, 99, 1276, 1671, 29, 20, 0], [91, 156, 439, 1768, 11, 21, 0], [80, 180, 1306, 1671, 29, 20, 0], [115, 156, 1302, 1816, 10, 21, 0], [133, 127, 264, 1881, 10, 19, 0], [160, 128, 114, 1985, 7, 18, 0], [165, 159, 735, 929, 6, 4, 0], [155, 168, 1379, 789, 25, 9, 0], [164, 209, 500, 1700, 19, 23, 0], [188, 218, 1789, 1984, 5, 13, 0], [211, 159, 1666, 1871, 10, 20, 0], [230, 159, 601, 1934, 9, 20, 0]], [[83, 99, 451, 1680, 28, 20, 0], [90, 156, 26, 1744, 12, 21, 0], [80, 180, 421, 1683, 28, 20, 0], [115, 156, 1129, 1911, 9, 21, 0], [133, 127, 1201, 1873, 10, 20, 0], [158, 127,
                611, 1934, 9, 20, 0], [163, 156, 1727, 1143, 8, 7, 0], [155, 168, 1062, 599, 26, 9, 0], [164, 210, 802, 1705, 18, 21, 0], [187, 218, 1473, 1985, 6, 13, 0], [210, 159, 451, 1768, 11, 21, 0], [230, 159, 1036, 1912, 9, 21, 0]], [[82, 99, 1738, 1671, 29, 20, 0], [89, 156, 1049, 1744, 12, 21, 0], [79, 180, 1768, 1671, 29, 20, 0], [114, 156, 1324, 1817, 10, 21, 0], [132, 128, 275, 1881, 10, 19, 0], [158, 127, 1154, 1964, 8, 19, 0], [154, 168, 1736, 1143, 8, 7, 0], [163, 209, 550, 1700, 19, 23, 0], [186, 217, 1220, 306, 6, 15, 0], [210, 159, 463, 1768, 11, 21, 0], [229, 159, 1046, 1912, 9, 21, 0]], [[82, 99, 1828, 1673, 29, 19, 0],
                [89, 156, 475, 1768, 11, 21, 0], [79, 180, 103, 1672, 29, 20, 0], [113, 156, 1692, 1817, 10, 21, 0], [132, 127, 1212, 1873, 10, 20, 0], [158, 127, 1762, 1964, 8, 20, 0], [163, 210, 1795, 1984, 5, 13, 0], [169, 222, 1726, 1985, 6, 9, 0], [176, 210, 1733, 1985, 6, 9, 0], [186, 218, 1480, 1985, 6, 13, 0], [209, 159, 1821, 1787, 11, 20, 0], [229, 159, 621, 1934, 9, 20, 0]], [[82, 99, 1693, 1683, 28, 20, 0], [88, 156, 1062, 1744, 12, 21, 0], [79, 180, 813, 1684, 28, 20, 0], [113, 156, 1056, 1912, 9, 21, 0], [132, 127, 286, 1881, 10, 19, 0], [158, 128, 1693, 847, 7, 19, 0], [164, 155, 1814, 1830, 7, 8, 0], [162, 209, 668, 1700, 19,
                23, 0], [185, 217, 1213, 1985, 7, 15, 0], [209, 159, 487, 1768, 11, 21, 0], [228, 159, 1823, 1817, 10, 21, 0]], [[81, 98, 1185, 1665, 29, 21, 0], [87, 156, 1075, 1744, 12, 21, 0], [78, 180, 328, 1672, 29, 20, 0], [112, 156, 1834, 1817, 10, 21, 0], [131, 127, 12, 1788, 11, 20, 0], [157, 127, 1771, 1964, 8, 20, 0], [163, 153, 1357, 1733, 8, 10, 0], [162, 210, 1652, 1744, 12, 21, 0], [175, 210, 1740, 1985, 6, 9, 0], [185, 218, 1487, 1985, 6, 13, 0], [208, 159, 24, 1788, 11, 20, 0], [228, 159, 631, 1934, 9, 20, 0]], [[81, 99, 358, 1672, 29, 20, 0], [87, 156, 499, 1768, 11, 21, 0], [78, 180, 1005, 1684, 28, 20, 0], [111, 156, 1845,
                1817, 10, 21, 0], [131, 127, 1803, 1881, 10, 18, 0], [158, 128, 122, 1985, 7, 18, 0], [163, 150, 694, 1471, 8, 13, 0], [161, 209, 688, 1700, 19, 23, 0], [184, 217, 1221, 1985, 7, 15, 0], [208, 159, 511, 1769, 11, 21, 0], [228, 159, 1066, 1912, 9, 21, 0]], [[81, 99, 579, 1686, 28, 19, 0], [86, 156, 39, 1746, 12, 21, 0], [77, 180, 645, 1672, 29, 20, 0], [111, 156, 1076, 1912, 9, 21, 0], [130, 127, 819, 1788, 11, 20, 0], [156, 127, 343, 517, 15, 32, 0], [161, 210, 52, 1746, 12, 21, 0], [174, 210, 1747, 1985, 6, 9, 0], [185, 218, 1801, 1984, 5, 13, 0], [208, 159, 1445, 1873, 10, 20, 0], [227, 159, 641, 1934, 9, 20, 0]], [[80, 98,
                1552, 1666, 29, 21, 0], [85, 156, 65, 1746, 12, 21, 0], [77, 180, 905, 1672, 29, 20, 0], [110, 156, 1856, 1817, 10, 21, 0], [130, 129, 411, 1934, 9, 17, 0], [157, 128, 130, 1985, 7, 18, 0], [164, 147, 1367, 1713, 7, 10, 0], [160, 209, 843, 1379, 13, 23, 0], [174, 210, 1018, 1991, 5, 9, 0], [183, 217, 1345, 1985, 7, 15, 0], [207, 159, 523, 1769, 11, 21, 0], [227, 159, 1139, 1912, 9, 21, 0]], [[80, 99, 1792, 1873, 10, 20, 0], [85, 156, 535, 1769, 11, 21, 0], [77, 180, 11, 1874, 10, 20, 0], [100, 99, 1780, 1964, 8, 20, 0], [97, 180, 1789, 1963, 8, 20, 0], [110, 156, 1149, 1912, 9, 21, 0], [130, 127, 1814, 1881, 10, 18, 0], [157,
                129, 1464, 312, 14, 27, 0], [160, 210, 450, 1746, 12, 21, 0], [173, 210, 1754, 1985, 6, 9, 0], [184, 218, 1807, 1984, 5, 13, 0], [207, 159, 22, 1874, 10, 20, 0], [226, 159, 1159, 1912, 9, 21, 0]], [[79, 98, 1117, 1667, 29, 21, 0], [84, 156, 463, 1746, 12, 21, 0], [76, 180, 869, 1673, 29, 20, 0], [109, 156, 1169, 1912, 9, 21, 0], [129, 127, 1046, 1788, 11, 20, 0], [155, 127, 1029, 983, 16, 29, 0], [160, 210, 972, 1716, 12, 22, 0], [173, 210, 1024, 1991, 5, 9, 0], [182, 217, 1353, 1985, 7, 15, 0], [206, 159, 1058, 1788, 11, 20, 0], [226, 159, 651, 1934, 9, 20, 0]], [[79, 99, 33, 1875, 10, 20, 0], [83, 156, 476, 1746, 12, 21, 0],
                [76, 180, 44, 1875, 10, 20, 0], [99, 99, 1163, 1964, 8, 19, 0], [96, 180, 661, 1934, 9, 20, 0], [108, 156, 1867, 1817, 10, 21, 0], [129, 129, 1082, 1944, 9, 17, 0], [155, 127, 1312, 1504, 16, 28, 0], [159, 210, 489, 1746, 12, 21, 0], [172, 210, 1761, 1985, 6, 9, 0], [183, 218, 1813, 1984, 5, 13, 0], [206, 159, 1107, 1818, 10, 21, 0], [225, 159, 1217, 1911, 9, 21, 0]], [[79, 99, 791, 1874, 10, 20, 0], [83, 156, 547, 1768, 11, 21, 0], [76, 180, 1022, 1874, 10, 20, 0], [99, 99, 1798, 1963, 8, 20, 0], [95, 180, 671, 1934, 9, 20, 0], [108, 156, 1227, 1911, 9, 21, 0], [129, 127, 1033, 1874, 10, 20, 0], [154, 127, 900, 1209, 17, 28,
                0], [159, 210, 502, 1746, 12, 21, 0], [172, 210, 1768, 1985, 6, 9, 0], [181, 217, 1361, 1985, 7, 15, 0], [205, 159, 1070, 1788, 11, 20, 0], [225, 159, 681, 1934, 9, 20, 0]], [[78, 99, 1633, 1788, 11, 20, 0], [82, 156, 515, 1747, 12, 21, 0], [75, 180, 1044, 1874, 10, 20, 0], [98, 99, 691, 1934, 9, 20, 0], [107, 156, 1237, 1911, 9, 21, 0], [95, 180, 701, 1934, 9, 20, 0], [128, 128, 1825, 1881, 10, 18, 0], [155, 128, 1029, 951, 16, 31, 0], [158, 209, 708, 1700, 19, 23, 0], [182, 218, 1494, 1984, 6, 13, 0], [205, 159, 657, 1768, 11, 21, 0], [224, 159, 1589, 1828, 10, 21, 0]], [[78, 99, 297, 1881, 10, 19, 0], [81, 156, 528, 1747,
                12, 21, 0], [75, 180, 1614, 1874, 10, 20, 0], [98, 99, 1196, 1964, 8, 19, 0], [106, 156, 1671, 1828, 10, 21, 0], [95, 180, 1807, 1963, 8, 20, 0], [128, 127, 55, 1875, 10, 20, 0], [154, 127, 1816, 1963, 8, 20, 0], [158, 210, 1819, 1984, 5, 13, 0], [164, 148, 242, 1984, 7, 16, 0], [171, 210, 1775, 1985, 6, 9, 0], [164, 222, 1782, 1985, 6, 9, 0], [181, 218, 1501, 1984, 6, 13, 0], [204, 159, 1315, 1789, 11, 20, 0], [224, 159, 711, 1934, 9, 20, 0]], [[78, 99, 431, 1875, 10, 20, 0], [81, 156, 669, 1768, 11, 21, 0], [74, 180, 1472, 1789, 11, 20, 0], [98, 99, 1825, 1963, 8, 20, 0], [106, 156, 1247, 1912, 9, 21, 0], [94, 180, 721, 1934,
                9, 20, 0], [128, 127, 1836, 1881, 10, 18, 0], [154, 128, 1344, 1719, 7, 12, 0], [157, 141, 669, 793, 4, 5, 0], [164, 153, 1693, 867, 7, 19, 0], [157, 209, 728, 1700, 19, 23, 0], [180, 217, 1369, 1985, 7, 15, 0], [204, 159, 681, 1768, 11, 21, 0], [223, 159, 1206, 1830, 10, 21, 0]], [[77, 99, 442, 1875, 10, 20, 0], [80, 156, 541, 1746, 12, 21, 0], [74, 180, 1305, 1875, 10, 20, 0], [96, 98, 1217, 1830, 10, 21, 0], [105, 156, 1257, 1912, 9, 21, 0], [94, 180, 731, 1934, 9, 20, 0], [128, 128, 1307, 1933, 9, 18, 0], [154, 128, 1693, 887, 7, 19, 0], [164, 161, 236, 381, 7, 20, 0], [157, 210, 1170, 1703, 19, 21, 0], [180, 218, 1508, 1984,
                6, 13, 0], [203, 159, 1603, 1789, 11, 20, 0], [223, 159, 1267, 1912, 9, 21, 0]], [[77, 99, 1456, 1875, 10, 20, 0], [79, 156, 554, 1746, 12, 21, 0], [74, 180, 1588, 1875, 10, 20, 0], [97, 99, 1834, 1963, 8, 20, 0], [104, 156, 1449, 1830, 10, 21, 0], [93, 180, 741, 1934, 9, 20, 0], [127, 127, 1599, 1875, 10, 20, 0], [153, 127, 1843, 1963, 8, 20, 0], [164, 170, 1652, 1732, 7, 11, 0], [164, 182, 1803, 1817, 7, 11, 0], [156, 209, 1525, 1700, 19, 23, 0], [179, 217, 1377, 1985, 7, 15, 0], [203, 159, 1615, 1789, 11, 20, 0], [223, 159, 751, 1934, 9, 20, 0]], [[77, 100, 1317, 1933, 9, 18, 0], [79, 156, 693, 1768, 11, 21, 0], [73, 180,
                419, 1880, 10, 20, 0], [97, 100, 925, 1975, 8, 18, 0], [103, 156, 1803, 1830, 10, 21, 0], [93, 180, 761, 1934, 9, 20, 0], [127, 127, 1847, 1881, 10, 18, 0], [153, 128, 1205, 1965, 8, 19, 0], [163, 182, 1337, 1768, 8, 14, 0], [156, 210, 417, 1704, 19, 21, 0], [180, 218, 1825, 1984, 5, 13, 0], [202, 159, 36, 1790, 11, 20, 0], [222, 159, 1277, 1912, 9, 21, 0]], [[76, 99, 464, 1880, 10, 20, 0], [78, 156, 658, 1746, 12, 21, 0], [73, 180, 475, 1880, 10, 20, 0], [95, 98, 11, 1831, 10, 21, 0], [103, 156, 1304, 1911, 9, 21, 0], [93, 180, 1852, 1963, 8, 20, 0], [126, 127, 48, 1790, 11, 20, 0], [152, 127, 0, 1964, 8, 20, 0], [163, 185, 704,
                366, 9, 15, 0], [155, 209, 1545, 1700, 19, 23, 0], [178, 217, 1385, 1985, 7, 15, 0], [202, 159, 60, 1790, 11, 20, 0], [222, 159, 954, 1933, 9, 20, 0]], [[76, 99, 486, 1880, 10, 20, 0], [77, 156, 671, 1746, 12, 21, 0], [72, 180, 436, 1790, 11, 20, 0], [96, 99, 9, 1964, 8, 20, 0], [102, 156, 22, 1831, 10, 21, 0], [92, 180, 789, 1934, 9, 20, 0], [126, 127, 308, 1881, 10, 19, 0], [153, 128, 218, 1984, 7, 17, 0], [163, 188, 1510, 1652, 9, 15, 0], [155, 210, 1682, 1704, 19, 21, 0], [179, 218, 1831, 1984, 5, 13, 0], [202, 159, 803, 1831, 10, 21, 0], [221, 159, 1314, 1911, 9, 21, 0]], [[75, 97, 391, 1661, 29, 23, 0], [77, 156, 1713, 1639,
                34, 21, 0], [72, 179, 1147, 1667, 29, 21, 0], [126, 127, 319, 1881, 10, 19, 0], [151, 127, 799, 1934, 9, 20, 0], [163, 191, 227, 1607, 9, 16, 0], [155, 210, 821, 1705, 18, 21, 0], [177, 217, 1393, 1985, 7, 15, 0], [201, 160, 1858, 1881, 10, 18, 0], [220, 159, 1036, 1831, 10, 21, 0]], [[76, 156, 684, 1746, 12, 21, 0], [72, 180, 497, 1880, 10, 20, 0], [90, 179, 939, 598, 10, 22, 0], [101, 156, 1324, 1911, 9, 21, 0], [126, 136, 1772, 1011, 3, 3, 0], [130, 129, 669, 760, 4, 6, 0], [151, 127, 1214, 1965, 8, 19, 0], [154, 194, 951, 278, 19, 37, 0], [178, 218, 1837, 1984, 5, 13, 0], [201, 159, 508, 1880, 10, 20, 0], [220, 159, 1334,
                1911, 9, 21, 0]], [[75, 156, 697, 1746, 12, 21, 0], [71, 180, 330, 1881, 10, 19, 0], [100, 156, 1047, 1831, 10, 21, 0], [90, 180, 519, 1880, 10, 20, 0], [125, 138, 612, 936, 3, 4, 0], [130, 131, 1776, 1011, 3, 3, 0], [152, 128, 762, 891, 7, 19, 0], [154, 196, 951, 353, 19, 35, 0], [176, 217, 1401, 1985, 7, 15, 0], [200, 160, 341, 1881, 10, 19, 0], [219, 159, 1058, 1831, 10, 21, 0]], [[75, 156, 705, 1768, 11, 21, 0], [71, 181, 1327, 1933, 9, 18, 0], [99, 156, 1625, 1831, 10, 21, 0], [89, 179, 1313, 1832, 10, 21, 0], [125, 135, 669, 697, 4, 9, 0], [130, 128, 669, 799, 4, 5, 0], [150, 127, 809, 1934, 9, 20, 0], [154, 199, 402, 1102,
                28, 34, 0], [200, 167, 669, 707, 4, 9, 0], [205, 162, 608, 936, 3, 5, 0], [219, 159, 819, 1934, 9, 20, 0]], [[74, 156, 710, 1746, 12, 21, 0], [70, 180, 1577, 1892, 10, 18, 0], [99, 156, 1344, 1911, 9, 21, 0], [90, 180, 829, 1934, 9, 20, 0], [151, 128, 226, 1984, 7, 17, 0], [154, 201, 684, 417, 29, 30, 0], [199, 160, 1658, 1892, 10, 18, 0], [219, 159, 839, 1934, 9, 20, 0]], [[73, 156, 1044, 1457, 35, 21, 0], [70, 180, 1034, 1684, 28, 20, 0], [124, 138, 616, 936, 3, 4, 0], [151, 129, 138, 1985, 7, 18, 0], [153, 203, 1848, 1082, 30, 29, 0], [219, 160, 1223, 1965, 8, 19, 0]], [[73, 156, 448, 1790, 11, 20, 0], [97, 156, 1460, 1832,
                10, 21, 0], [90, 181, 146, 1985, 7, 18, 0], [154, 137, 1304, 732, 3, 7, 0], [153, 204, 1324, 1640, 31, 30, 0], [218, 159, 849, 1934, 9, 20, 0]], [[72, 157, 352, 1881, 10, 19, 0], [96, 156, 1600, 1832, 10, 21, 0], [89, 181, 934, 1975, 8, 18, 0], [151, 130, 1029, 823, 3, 6, 0], [153, 137, 669, 727, 4, 8, 0], [152, 205, 201, 610, 33, 34, 0], [219, 161, 669, 736, 4, 7, 0], [223, 169, 1601, 799, 3, 7, 0]], [[72, 166, 1780, 1011, 3, 3, 0], [72, 170, 620, 936, 3, 4, 0], [77, 159, 1784, 1011, 3, 3, 0], [96, 156, 1354, 1911, 9, 21, 0], [90, 183, 1027, 832, 6, 14, 0], [152, 206, 986, 1632, 34, 38, 0], [218, 160, 669, 805, 4, 5, 0], [222, 168,
                669, 717, 4, 9, 0]], [[71, 167, 604, 936, 3, 6, 0], [95, 156, 1611, 1832, 10, 21, 0], [151, 207, 1338, 1108, 35, 42, 0]], [[96, 157, 1232, 1964, 8, 19, 0], [151, 206, 535, 704, 36, 48, 0]], [[150, 206, 1561, 958, 38, 54, 0]], [[66, 155, 837, 1590, 37, 46, 0], [122, 126, 839, 1637, 34, 22, 0], [150, 206, 1310, 851, 38, 57, 0], [196, 158, 391, 1661, 29, 23, 0]], [[149, 206, 923, 1335, 40, 60, 0]], [[149, 206, 1615, 1452, 40, 63, 0]], [[145, 206, 192, 1537, 45, 69, 0]], [[141, 199, 1387, 1472, 53, 83, 0]], [[138, 191, 0, 1401, 60, 97, 0]], [[134, 191, 726, 1223, 67, 104, 0]], [[130, 185, 844, 1097, 74, 111, 0]], [[126, 162,
                445, 951, 81, 135, 0]], [[122, 141, 0, 867, 88, 157, 0]], [[118, 133, 674, 672, 96, 167, 0]], [[116, 102, 834, 521, 104, 198, 0]], [[109, 80, 0, 384, 111, 217, 0]], [[109, 59, 1601, 278, 116, 235, 0]], [[109, 40, 1228, 269, 119, 252, 0]], [[104, 14, 715, 0, 128, 275, 0]], [[104, 11, 586, 0, 128, 276, 0]], [[105, 8, 1605, 0, 123, 277, 0]], [[104, 5, 1355, 0, 124, 278, 0]], [[103, 1, 326, 0, 129, 280, 0]], [[103, 0, 456, 0, 129, 279, 0]], [[103, 0, 844, 0, 127, 277, 0]], [[103, 0, 972, 0, 127, 275, 0]], [[103, 0, 1100, 0, 127, 273, 0]], [[104, 2, 1228, 0, 126, 268, 0]], [[104, 3, 1480, 0, 124, 265, 0]], [[105, 5, 1729, 0, 123,
                261, 0]], [[106, 6, 0, 125, 122, 258, 0]], [[106, 8, 123, 127, 121, 253, 0]], [[107, 10, 1729, 262, 120, 250, 0]], [[107, 10, 1480, 266, 120, 249, 0]], [[108, 11, 715, 276, 118, 246, 0]], [[109, 12, 972, 276, 117, 215, 0], [155, 229, 726, 1176, 29, 27, 0]], [[109, 13, 834, 278, 116, 242, 0]], [[110, 14, 1348, 279, 115, 239, 0]], [[110, 16, 245, 281, 114, 235, 0]], [[111, 17, 1090, 378, 113, 232, 0]], [[111, 19, 123, 381, 112, 228, 0]], [[112, 21, 572, 383, 111, 224, 0]], [[113, 22, 360, 408, 110, 220, 0]], [[113, 25, 951, 492, 110, 197, 0], [159, 223, 1605, 1110, 21, 20, 0]], [[113, 28, 1718, 513, 108, 160, 0], [121,
                189, 471, 577, 89, 28, 0], [159, 220, 322, 1593, 20, 23, 0]], [[114, 32, 1601, 514, 107, 159, 0], [124, 192, 361, 939, 83, 24, 0], [160, 229, 1375, 1069, 18, 14, 0]], [[114, 34, 1464, 516, 107, 155, 0], [123, 191, 477, 898, 87, 52, 0]], [[115, 37, 236, 517, 106, 180, 0], [171, 220, 1788, 1011, 3, 3, 0], [161, 226, 103, 1652, 16, 17, 0]], [[115, 40, 1204, 522, 104, 179, 0], [161, 226, 1513, 1352, 15, 17, 0]], [[116, 44, 1309, 594, 102, 147, 0], [124, 193, 1794, 915, 83, 25, 0], [161, 237, 1220, 843, 15, 6, 0]], [[116, 47, 684, 523, 102, 148, 0], [126, 196, 1798, 744, 78, 47, 0]], [[117, 50, 0, 602, 101, 142, 0], [123, 193,
                717, 934, 84, 26, 0], [162, 233, 1555, 1023, 3, 3, 0], [166, 239, 962, 487, 8, 4, 0]], [[117, 53, 471, 408, 99, 168, 0]], [[118, 56, 1062, 611, 98, 138, 0], [128, 199, 245, 246, 77, 21, 0], [163, 232, 1686, 939, 3, 4, 0], [173, 239, 686, 1026, 3, 3, 0]], [[118, 59, 102, 610, 98, 184, 0]], [[119, 62, 343, 629, 97, 159, 0], [169, 240, 690, 1026, 3, 3, 0]], [[119, 65, 1702, 674, 95, 124, 0], [122, 191, 694, 1026, 3, 3, 0], [131, 203, 1442, 886, 65, 19, 0], [173, 238, 1690, 939, 3, 4, 0]], [[119, 66, 1606, 674, 95, 132, 0], [133, 206, 648, 944, 66, 16, 0]], [[120, 67, 1509, 674, 96, 124, 0], [127, 200, 698, 1026, 3, 3, 0], [131,
                205, 245, 268, 70, 3, 0], [138, 209, 1350, 775, 58, 13, 0]], [[120, 69, 1412, 672, 96, 127, 0], [130, 204, 957, 832, 69, 18, 0]], [[120, 70, 441, 704, 93, 128, 0], [134, 207, 889, 990, 57, 36, 0]], [[120, 71, 0, 745, 92, 121, 0], [134, 207, 1742, 1228, 66, 16, 0]], [[120, 72, 573, 697, 95, 117, 0], [122, 190, 702, 1026, 3, 3, 0], [129, 203, 957, 811, 71, 20, 0], [170, 238, 1694, 939, 3, 4, 0]], [[120, 73, 939, 690, 95, 120, 0], [125, 195, 706, 1026, 3, 3, 0], [136, 209, 627, 815, 40, 14, 0]], [[121, 74, 1350, 800, 91, 121, 0], [131, 204, 131, 1353, 63, 19, 0]], [[121, 75, 1601, 807, 91, 107, 0], [121, 183, 360, 399, 91, 5, 0],
                [124, 193, 710, 1026, 3, 3, 0], [137, 210, 771, 701, 59, 13, 0]], [[121, 76, 1161, 702, 94, 115, 0], [204, 194, 669, 744, 4, 7, 0], [138, 211, 865, 795, 54, 13, 0]], [[121, 77, 360, 281, 94, 117, 0], [128, 202, 714, 1026, 3, 3, 0], [133, 208, 1044, 1096, 62, 16, 0]], [[122, 78, 387, 833, 89, 105, 0], [204, 198, 718, 1026, 3, 3, 0], [162, 219, 649, 830, 20, 8, 0]], [[121, 78, 771, 832, 90, 101, 0], [207, 180, 1029, 811, 4, 11, 0], [136, 210, 387, 789, 51, 14, 0]], [[122, 79, 771, 720, 93, 111, 0], [123, 192, 722, 1026, 3, 3, 0], [136, 210, 1350, 760, 58, 14, 0], [168, 237, 598, 936, 5, 5, 0]], [[122, 80, 1256, 742, 93, 108, 0],
                [207, 190, 353, 1026, 3, 3, 0], [164, 218, 102, 602, 19, 6, 0]], [[122, 80, 627, 840, 89, 103, 0], [122, 188, 1555, 1027, 3, 3, 0], [206, 193, 803, 1031, 3, 3, 0], [147, 218, 294, 780, 23, 6, 0], [163, 232, 1555, 1031, 3, 3, 0]], [[122, 81, 957, 853, 89, 97, 0], [137, 212, 803, 1035, 3, 3, 0], [157, 220, 318, 780, 23, 4, 0]], [[122, 81, 1035, 750, 92, 102, 0], [141, 215, 294, 770, 47, 9, 0]], [[122, 81, 201, 770, 92, 99, 0], [208, 182, 1555, 1035, 3, 3, 0], [141, 215, 803, 1039, 3, 3, 0]], [[122, 82, 1220, 851, 89, 103, 0], [138, 213, 245, 272, 55, 4, 0], [152, 218, 297, 762, 32, 6, 0], [171, 227, 1768, 1011, 3, 4, 0], [154, 264,
                1850, 465, 26, 26, 0]], [[126, 82, 1395, 922, 84, 97, 0], [196, 209, 803, 1043, 3, 3, 0], [151, 219, 1108, 1050, 25, 24, 0], [153, 263, 684, 448, 29, 29, 0]], [[123, 83, 865, 811, 91, 101, 0], [122, 187, 185, 870, 88, 9, 0], [195, 209, 827, 715, 4, 4, 0], [155, 220, 1572, 611, 26, 4, 0], [148, 258, 449, 1601, 38, 38, 0]], [[123, 83, 535, 815, 91, 82, 0], [168, 168, 803, 1047, 3, 3, 0], [163, 172, 1256, 732, 47, 7, 0], [195, 210, 803, 1051, 3, 3, 0], [140, 250, 1771, 1477, 54, 54, 0]], [[123, 165, 669, 752, 4, 7, 0], [131, 85, 77, 1160, 73, 57, 0], [156, 149, 1204, 378, 22, 30, 0], [140, 250, 299, 1478, 54, 54, 0], [205, 163, 1130,
                1075, 3, 3, 0], [207, 170, 1130, 1079, 3, 3, 0]], [[125, 158, 669, 767, 4, 6, 0], [130, 83, 757, 1126, 73, 96, 0], [141, 251, 1441, 1481, 53, 52, 0], [207, 170, 1130, 1083, 3, 3, 0]], [[123, 92, 1128, 818, 91, 44, 0], [157, 153, 1530, 1090, 21, 19, 0], [163, 173, 1813, 792, 11, 6, 0], [142, 252, 1412, 594, 50, 50, 0]], [[123, 82, 1702, 799, 91, 145, 0], [162, 229, 185, 840, 14, 14, 0], [144, 254, 1591, 1535, 46, 46, 0]], [[122, 82, 1047, 863, 88, 160, 0], [147, 257, 1485, 1588, 40, 40, 0]], [[123, 81, 185, 880, 87, 161, 0], [148, 258, 678, 1601, 38, 38, 0]], [[123, 81, 93, 795, 91, 159, 0], [150, 260, 1007, 1497, 35, 35, 0]],
            [[123, 80, 1509, 799, 91, 158, 0], [151, 261, 201, 645, 33, 32, 0]], [[125, 80, 1136, 863, 82, 156, 0], [150, 260, 264, 1634, 34, 34, 0]], [[126, 80, 1686, 945, 81, 153, 0], [150, 260, 299, 1634, 34, 34, 0]], [[126, 93, 1310, 922, 84, 117, 0], [151, 211, 1356, 1667, 29, 21, 0], [150, 260, 1007, 1533, 35, 34, 0]], [[126, 106, 1601, 915, 84, 126, 0], [149, 259, 535, 753, 36, 36, 0]], [[132, 106, 306, 1175, 69, 125, 0], [149, 259, 527, 951, 36, 36, 0]], [[134, 107, 444, 1228, 65, 123, 0], [149, 259, 535, 1614, 37, 36, 0]], [[133, 119, 1605, 1175, 69, 111, 0], [149, 258, 189, 1607, 37, 38, 0]], [[133, 132, 656, 1176, 69,
                97, 0], [148, 258, 1328, 1601, 38, 38, 0]], [[140, 132, 1098, 1480, 53, 99, 0], [148, 258, 495, 1593, 39, 38, 0]], [[140, 132, 1044, 1480, 53, 102, 0], [148, 257, 859, 1294, 39, 40, 0]], [[136, 141, 195, 1358, 62, 95, 0], [147, 257, 44, 1589, 40, 40, 0]], [[136, 149, 641, 1359, 62, 90, 0]], [[142, 148, 582, 1477, 50, 93, 0]], [[142, 148, 1827, 513, 50, 94, 0]], [[138, 156, 985, 1408, 58, 88, 0]], [[138, 161, 1155, 1409, 58, 84, 0]], [[143, 159, 354, 1490, 48, 88, 0]], [[143, 159, 1826, 1477, 48, 89, 0]], [[139, 165, 1657, 1451, 56, 83, 0]], [[139, 167, 1558, 1452, 56, 82, 0]], [[143, 163, 958, 1497, 48, 86, 0]], [[143,
                163, 876, 1531, 47, 79, 0], [169, 247, 844, 1092, 3, 3, 0]], [[139, 167, 765, 1454, 56, 78, 0], [163, 246, 316, 268, 8, 3, 0]], [[139, 167, 128, 1453, 56, 82, 0]], [[143, 162, 1152, 1494, 48, 87, 0]], [[143, 162, 1263, 1504, 48, 80, 0], [163, 245, 1837, 792, 10, 4, 0]], [[139, 166, 185, 1454, 56, 82, 0]], [[139, 165, 242, 1458, 56, 76, 0], [163, 245, 951, 487, 10, 3, 0]], [[143, 160, 0, 1499, 48, 81, 0], [163, 244, 1848, 792, 10, 4, 0], [276, 220, 1035, 720, 25, 25, 0]], [[143, 160, 1495, 1507, 48, 80, 0], [163, 244, 1825, 792, 11, 4, 0], [275, 219, 1062, 492, 26, 26, 0]], [[139, 164, 1714, 1471, 56, 76, 0], [165, 244, 791,
                715, 8, 4, 0], [275, 218, 1850, 262, 27, 28, 0]], [[139, 163, 61, 1457, 56, 77, 0], [164, 244, 1859, 792, 9, 4, 0], [273, 217, 1128, 750, 31, 31, 0]], [[143, 159, 1214, 1490, 48, 88, 0], [271, 214, 1338, 1151, 35, 36, 0]], [[143, 159, 573, 608, 100, 88, 0], [268, 211, 97, 1585, 41, 42, 0]], [[150, 151, 471, 608, 101, 95, 0], [264, 208, 990, 1164, 48, 48, 0]], [[164, 148, 294, 789, 92, 92, 0], [264, 208, 1044, 1408, 48, 48, 0]], [[200, 148, 1500, 1423, 57, 83, 0], [265, 208, 97, 1536, 47, 48, 0]], [[200, 150, 1316, 1361, 62, 79, 0], [265, 209, 1638, 1535, 46, 46, 0]], [[203, 150, 1094, 1407, 60, 72, 0], [214, 223, 387, 827,
                9, 4, 0], [266, 209, 495, 1546, 45, 46, 0]], [[203, 150, 1379, 1399, 61, 72, 0], [214, 223, 397, 827, 9, 4, 0], [266, 210, 1358, 1556, 44, 44, 0]], [[205, 147, 465, 1407, 60, 75, 0], [215, 223, 717, 929, 8, 3, 0], [267, 210, 0, 1581, 43, 44, 0]], [[205, 147, 704, 1406, 60, 79, 0], [267, 211, 238, 1581, 43, 42, 0]], [[203, 150, 258, 1386, 62, 71, 0], [215, 222, 800, 715, 8, 4, 0]], [[203, 149, 716, 1328, 63, 77, 0]], [[205, 146, 321, 1397, 61, 80, 0]], [[205, 146, 923, 1397, 61, 79, 0]], [[203, 149, 510, 1330, 63, 76, 0]], [[203, 148, 1030, 1335, 63, 72, 0], [215, 221, 809, 715, 8, 4, 0]], [[205, 146, 1789, 1397, 61, 79, 0]],
            [[205, 146, 574, 1398, 61, 78, 0]], [[203, 148, 1094, 1335, 63, 71, 0], [215, 220, 407, 827, 9, 4, 0]], [[253, 86, 876, 1509, 20, 20, 0], [203, 148, 1530, 1351, 63, 71, 0], [216, 220, 818, 715, 8, 4, 0]], [[249, 82, 441, 674, 28, 28, 0], [204, 145, 1657, 1376, 62, 74, 0], [215, 220, 1236, 843, 9, 4, 0]], [[245, 78, 403, 1490, 36, 36, 0], [204, 145, 1594, 1372, 62, 79, 0]], [[241, 74, 633, 1559, 44, 44, 0], [203, 147, 401, 1352, 63, 71, 0], [215, 220, 771, 715, 9, 3, 0]], [[237, 70, 441, 1483, 53, 52, 0], [203, 147, 1252, 1352, 63, 71, 0], [216, 219, 1869, 792, 8, 4, 0]], [[237, 70, 822, 1485, 53, 52, 0], [204, 144, 780, 1379,
                62, 74, 0], [216, 219, 565, 936, 8, 4, 0]], [[237, 71, 717, 840, 52, 50, 0], [204, 144, 131, 1373, 62, 79, 0]], [[238, 72, 1827, 608, 50, 48, 0], [203, 146, 576, 1326, 64, 71, 0], [216, 219, 726, 929, 8, 3, 0]], [[239, 73, 633, 1512, 48, 46, 0], [203, 146, 0, 1324, 64, 76, 0]], [[240, 74, 145, 1537, 46, 44, 0], [204, 143, 1725, 1327, 63, 79, 0]], [[241, 75, 1819, 1567, 44, 42, 0], [204, 143, 859, 1335, 63, 74, 0], [216, 218, 742, 929, 6, 4, 0]], [[241, 75, 541, 1571, 44, 42, 0], [180, 122, 273, 882, 87, 99, 0]], [[169, 75, 456, 280, 115, 127, 0]], [[167, 75, 586, 277, 117, 105, 0]], [[165, 75, 1100, 274, 119, 103, 0]], [[165,
                101, 1634, 1099, 74, 75, 0], [242, 75, 1050, 1583, 42, 41, 0]], [[165, 98, 1384, 1319, 64, 79, 0]], [[165, 95, 965, 1314, 64, 82, 0]], [[164, 93, 1442, 800, 65, 85, 0]], [[164, 93, 1809, 1228, 65, 85, 0]], [[164, 93, 1530, 1266, 64, 84, 0]], [[164, 93, 141, 1268, 64, 84, 0]], [[164, 93, 206, 1273, 64, 84, 0]], [[164, 93, 651, 1274, 64, 84, 0]], [[164, 92, 1319, 1276, 64, 84, 0]], [[164, 91, 1189, 1246, 64, 85, 0]], [[164, 91, 900, 1249, 64, 85, 0]], [[163, 91, 0, 1239, 65, 84, 0]], [[163, 91, 585, 1241, 65, 84, 0]], [[163, 91, 1595, 1287, 64, 84, 0]], [[163, 91, 1660, 1291, 64, 84, 0]], [[163, 90, 794, 1294, 64, 84, 0]],
            [[89, 64, 1035, 690, 25, 29, 0], [163, 90, 271, 1301, 64, 84, 0]], [[86, 62, 1848, 1017, 30, 33, 0], [162, 90, 510, 1245, 65, 84, 0]], [[84, 59, 1367, 1601, 34, 39, 0], [162, 89, 1399, 1233, 65, 85, 0]], [[82, 57, 967, 1584, 38, 43, 0], [162, 89, 1058, 1249, 64, 85, 0]], [[80, 54, 1007, 1583, 42, 48, 0], [162, 89, 1123, 1249, 64, 85, 0]], [[80, 54, 465, 1352, 43, 49, 0], [162, 88, 1254, 1266, 64, 85, 0]], [[79, 53, 297, 698, 44, 50, 0], [162, 88, 1465, 1266, 64, 85, 0]], [[79, 53, 796, 1538, 45, 51, 0], [162, 88, 1808, 1314, 64, 82, 0]], [[79, 52, 787, 615, 45, 52, 0], [162, 88, 336, 1315, 64, 81, 0], [191, 170, 848, 1092,
                3, 3, 0]], [[78, 52, 1441, 1534, 47, 53, 0], [162, 87, 66, 1302, 64, 84, 0]], [[78, 52, 49, 1535, 47, 53, 0], [161, 87, 1742, 1245, 65, 81, 0]], [[38, 190, 842, 1538, 32, 31, 0], [79, 53, 1312, 1538, 45, 51, 0], [161, 87, 511, 1150, 73, 94, 0]], [[36, 187, 875, 1611, 37, 37, 0], [80, 54, 1098, 1580, 43, 49, 0], [129, 112, 1348, 519, 105, 74, 0]], [[81, 55, 1161, 611, 41, 47, 0], [27, 179, 477, 833, 55, 54, 0], [126, 114, 862, 913, 85, 76, 0]], [[81, 56, 1444, 1588, 40, 45, 0], [27, 109, 0, 0, 163, 124, 0]], [[82, 57, 1526, 1598, 38, 43, 0], [27, 107, 164, 0, 161, 126, 0]], [[27, 179, 902, 1477, 55, 53, 0], [120, 106, 151, 1181,
                68, 86, 0]], [[28, 180, 694, 1486, 53, 51, 0], [119, 106, 376, 1228, 67, 86, 0]], [[30, 181, 1634, 1042, 49, 49, 0], [119, 106, 990, 1228, 67, 85, 0]], [[31, 183, 242, 1535, 47, 45, 0], [118, 106, 1260, 1180, 69, 85, 0]], [[33, 185, 145, 1582, 43, 42, 0], [118, 106, 1527, 1180, 69, 85, 0]], [[117, 106, 220, 1187, 68, 85, 0]], [[117, 106, 1330, 1191, 68, 84, 0]], [[116, 106, 919, 1164, 70, 84, 0]], [[116, 106, 1118, 1164, 70, 84, 0]], [[116, 106, 831, 1209, 68, 84, 0], [147, 257, 796, 1590, 40, 40, 0]], [[116, 106, 72, 1218, 68, 83, 0], [148, 257, 282, 1593, 39, 40, 0]], [[115, 106, 1189, 1164, 70, 81, 0], [149, 258, 1812,
                1610, 37, 38, 0]], [[102, 106, 1794, 799, 83, 115, 0], [150, 260, 1444, 1634, 34, 34, 0]], [[101, 110, 245, 127, 79, 118, 0], [152, 262, 1848, 1051, 30, 30, 0]], [[93, 127, 1375, 1087, 77, 103, 0], [155, 265, 1853, 28, 24, 24, 0]], [[89, 156, 948, 951, 80, 75, 0], [156, 266, 1853, 176, 23, 22, 0]], [[89, 162, 1798, 674, 79, 69, 0], [157, 267, 327, 1074, 21, 21, 0]], [[91, 162, 0, 1025, 78, 70, 0], [158, 268, 958, 1477, 19, 19, 0], [268, 211, 1245, 1585, 41, 42, 0]], [[91, 162, 607, 1026, 78, 69, 0], [159, 269, 1358, 1538, 17, 17, 0], [268, 212, 1161, 659, 41, 40, 0]], [[91, 165, 765, 1059, 78, 66, 0], [160, 264, 361, 902,
                23, 18, 0], [269, 213, 728, 1593, 39, 38, 0]], [[91, 165, 527, 1083, 78, 66, 0], [155, 255, 521, 1675, 28, 26, 0], [184, 268, 1105, 1984, 8, 8, 0], [271, 214, 794, 1223, 35, 36, 0]], [[91, 163, 686, 1031, 78, 68, 0], [149, 248, 1256, 702, 51, 29, 0], [273, 217, 1128, 782, 31, 31, 0]], [[91, 163, 729, 961, 79, 69, 0], [162, 242, 736, 1747, 12, 14, 0], [144, 263, 1768, 998, 21, 12, 0], [176, 245, 1026, 1213, 16, 14, 0], [192, 268, 1513, 1404, 15, 10, 0], [276, 219, 1572, 646, 25, 26, 0]], [[91, 166, 1395, 1020, 79, 66, 0], [158, 238, 748, 1519, 13, 12, 0], [138, 260, 1853, 244, 23, 15, 0], [183, 242, 1685, 1535, 16, 12, 0],
                [198, 270, 282, 1581, 13, 11, 0], [279, 223, 1565, 1622, 19, 18, 0]], [[91, 166, 1475, 1023, 79, 66, 0], [154, 236, 813, 1671, 13, 11, 0], [133, 258, 361, 882, 23, 19, 0], [191, 240, 748, 1486, 15, 10, 0], [203, 272, 1592, 1750, 12, 12, 0], [284, 215, 1686, 927, 14, 11, 0], [285, 227, 1114, 1984, 8, 8, 0]], [[91, 164, 361, 964, 79, 68, 0], [151, 235, 137, 1760, 12, 10, 0], [137, 257, 170, 976, 14, 9, 0], [132, 269, 231, 1110, 10, 8, 0], [197, 240, 507, 888, 13, 9, 0], [205, 275, 1351, 1804, 11, 11, 0], [281, 206, 1480, 906, 25, 29, 0]], [[91, 164, 273, 982, 79, 68, 0], [149, 235, 1173, 1154, 11, 9, 0], [136, 257, 656, 1167,
                10, 8, 0], [131, 269, 1742, 1954, 9, 9, 0], [201, 240, 1160, 1154, 12, 9, 0], [207, 277, 1363, 1804, 11, 11, 0], [283, 205, 1327, 1789, 8, 14, 0], [276, 223, 768, 1617, 16, 11, 0], [298, 199, 1789, 1381, 16, 14, 0]], [[91, 167, 1219, 955, 80, 65, 0], [149, 235, 511, 1955, 9, 8, 0], [135, 258, 521, 1955, 9, 8, 0], [130, 270, 1752, 1954, 9, 9, 0], [204, 240, 1868, 1870, 10, 9, 0], [208, 279, 1762, 1954, 9, 9, 0], [242, 76, 924, 1584, 42, 40, 0], [283, 199, 729, 1976, 8, 14, 0], [271, 220, 1204, 504, 21, 14, 0], [305, 196, 322, 1617, 16, 12, 0]], [[92, 165, 1768, 1017, 79, 67, 0], [147, 234, 1029, 1806, 11, 9, 0], [134, 258, 667,
                1167, 10, 8, 0], [129, 271, 531, 1955, 9, 8, 0], [205, 240, 1241, 1806, 11, 9, 0], [208, 279, 371, 1478, 10, 11, 0], [246, 79, 804, 1637, 34, 33, 0], [265, 221, 477, 888, 14, 8, 0], [283, 193, 738, 1976, 8, 14, 0], [285, 213, 1465, 1985, 7, 14, 0], [313, 194, 748, 1497, 15, 10, 0]], [[93, 163, 809, 990, 79, 68, 0], [145, 234, 1253, 1806, 11, 9, 0], [132, 258, 1713, 1630, 10, 8, 0], [128, 271, 1772, 1954, 9, 9, 0], [206, 240, 1265, 1806, 11, 9, 0], [209, 281, 363, 1900, 10, 11, 0], [249, 82, 1215, 1665, 28, 27, 0], [260, 221, 809, 980, 13, 8, 0], [282, 187, 1645, 1788, 9, 14, 0], [285, 206, 747, 1976, 8, 14, 0], [319, 194, 170,
                986, 14, 9, 0]], [[93, 163, 527, 1014, 79, 68, 0], [143, 234, 1301, 1806, 11, 9, 0], [131, 258, 1867, 1900, 10, 9, 0], [126, 272, 0, 1901, 10, 9, 0], [207, 240, 1375, 1806, 11, 9, 0], [210, 283, 374, 1900, 10, 11, 0], [252, 84, 1204, 436, 22, 23, 0], [255, 221, 1328, 1590, 13, 10, 0], [281, 182, 1484, 1789, 9, 14, 0], [285, 200, 756, 1976, 8, 14, 0], [323, 194, 900, 1238, 12, 9, 0]], [[94, 164, 89, 1024, 79, 66, 0], [141, 234, 1158, 1398, 12, 9, 0], [130, 258, 66, 1901, 10, 9, 0], [126, 273, 1798, 1953, 9, 9, 0], [209, 240, 1387, 1806, 11, 9, 0], [210, 285, 385, 1900, 10, 11, 0], [253, 86, 1857, 1207, 20, 19, 0], [254, 223, 541,
                1955, 9, 8, 0], [280, 178, 91, 1676, 10, 13, 0], [285, 194, 771, 1951, 9, 14, 0], [326, 194, 77, 1901, 10, 9, 0]], [[95, 163, 1296, 1040, 78, 67, 0], [139, 234, 150, 1760, 12, 10, 0], [128, 259, 88, 1901, 10, 9, 0], [125, 274, 1256, 1953, 9, 10, 0], [210, 241, 1399, 1806, 11, 9, 0], [211, 286, 1196, 1951, 9, 12, 0], [254, 87, 902, 1458, 18, 17, 0], [253, 223, 1808, 1953, 9, 9, 0], [279, 174, 947, 1721, 10, 13, 0], [285, 189, 1718, 498, 9, 13, 0], [327, 194, 1411, 1806, 11, 9, 0]], [[95, 161, 889, 1027, 78, 69, 0], [137, 235, 593, 1760, 12, 10, 0], [128, 259, 1818, 1953, 9, 9, 0], [124, 274, 896, 1901, 10, 10, 0], [211, 241, 556,
                1807, 11, 9, 0], [210, 288, 1702, 1535, 10, 12, 0], [255, 81, 728, 1566, 18, 23, 0], [251, 224, 99, 1902, 10, 9, 0], [278, 171, 1789, 1354, 17, 26, 0], [329, 194, 110, 1902, 10, 9, 0]], [[95, 161, 353, 1033, 78, 68, 0], [136, 236, 484, 1805, 11, 10, 0], [126, 260, 121, 1902, 10, 9, 0], [123, 276, 132, 1902, 10, 9, 0], [213, 242, 568, 1807, 11, 9, 0], [210, 290, 827, 1671, 10, 12, 0], [251, 72, 684, 478, 29, 28, 0], [277, 167, 951, 389, 19, 25, 0], [250, 225, 1117, 1657, 10, 8, 0], [330, 194, 143, 1902, 10, 9, 0]], [[96, 163, 1768, 1085, 78, 66, 0], [134, 236, 1134, 1757, 12, 11, 0], [125, 261, 154, 1901, 10, 9, 0], [123, 277,
                1266, 1953, 9, 10, 0], [214, 242, 496, 1805, 11, 10, 0], [210, 292, 1037, 1750, 10, 12, 0], [245, 65, 844, 1059, 43, 32, 0], [275, 165, 1204, 460, 22, 23, 0], [249, 225, 907, 1901, 10, 10, 0], [331, 194, 918, 1901, 10, 10, 0]], [[96, 162, 169, 1042, 78, 67, 0], [132, 237, 291, 1758, 12, 11, 0], [124, 261, 929, 1901, 10, 10, 0], [122, 278, 1276, 1953, 9, 10, 0], [215, 242, 508, 1805, 11, 10, 0], [209, 294, 786, 1895, 10, 12, 0], [258, 62, 809, 960, 38, 19, 0], [240, 85, 387, 804, 41, 10, 0], [274, 163, 1853, 75, 24, 21, 0], [248, 226, 165, 1902, 10, 9, 0], [333, 195, 176, 1902, 10, 9, 0]], [[97, 179, 920, 795, 17, 13, 0], [108,
                200, 353, 982, 6, 14, 0], [115, 160, 968, 1027, 59, 68, 0], [131, 238, 1484, 1804, 11, 11, 0], [123, 262, 187, 1902, 10, 9, 0], [121, 279, 940, 1901, 10, 10, 0], [217, 243, 951, 1901, 10, 10, 0], [208, 295, 573, 1637, 11, 12, 0], [257, 59, 994, 1951, 9, 14, 0], [234, 85, 492, 888, 14, 8, 0], [247, 227, 198, 1901, 10, 9, 0], [267, 61, 572, 368, 12, 13, 0], [273, 85, 1118, 1154, 13, 9, 0], [272, 162, 606, 1760, 12, 10, 0], [287, 60, 748, 1508, 15, 10, 0], [289, 169, 1012, 1895, 10, 12, 0], [333, 195, 619, 1807, 11, 9, 0]], [[83, 58, 630, 1604, 37, 41, 0], [105, 160, 1675, 1228, 66, 62, 0], [130, 239, 1704, 1803, 11, 12, 0], [122,
                263, 209, 1901, 10, 9, 0], [121, 280, 1286, 1952, 9, 10, 0], [218, 244, 962, 1900, 10, 10, 0], [207, 297, 1716, 1803, 11, 12, 0], [229, 85, 1342, 1590, 13, 10, 0], [256, 53, 1004, 1951, 9, 14, 0], [246, 228, 220, 1901, 10, 9, 0], [271, 58, 1044, 1137, 36, 12, 0], [279, 85, 1132, 1154, 13, 9, 0], [271, 161, 1615, 1516, 30, 17, 0], [335, 196, 1833, 1807, 11, 9, 0]], [[87, 62, 684, 383, 29, 33, 0], [96, 162, 1555, 1042, 78, 67, 0], [128, 241, 1088, 1758, 12, 11, 0], [121, 263, 973, 1901, 10, 10, 0], [120, 281, 984, 1901, 10, 10, 0], [206, 299, 1728, 1803, 11, 12, 0], [228, 87, 1128, 1657, 10, 8, 0], [219, 244, 520, 1805, 11, 10,
                0], [245, 229, 231, 1901, 10, 9, 0], [256, 48, 1014, 1951, 9, 14, 0], [275, 56, 990, 1213, 35, 13, 0], [284, 86, 430, 1628, 13, 10, 0], [269, 161, 201, 678, 33, 15, 0], [336, 196, 532, 1805, 11, 10, 0]], [[90, 65, 1853, 149, 23, 26, 0], [95, 163, 1136, 1020, 79, 67, 0], [127, 242, 1740, 1803, 11, 12, 0], [120, 264, 995, 1901, 10, 10, 0], [120, 282, 1296, 1952, 9, 10, 0], [205, 300, 1752, 1804, 11, 12, 0], [227, 87, 1828, 1953, 9, 9, 0], [220, 245, 396, 1900, 10, 11, 0], [245, 230, 1306, 1952, 9, 10, 0], [255, 44, 913, 1611, 9, 13, 0], [279, 56, 1675, 1208, 31, 13, 0], [289, 87, 1838, 1953, 9, 9, 0], [267, 161, 1442, 906, 37,
                13, 0], [337, 196, 544, 1805, 11, 10, 0]], [[92, 68, 372, 1705, 19, 21, 0], [93, 162, 89, 955, 80, 68, 0], [126, 243, 1764, 1804, 11, 12, 0], [119, 265, 1099, 1900, 10, 10, 0], [119, 283, 407, 1900, 10, 11, 0], [204, 302, 1776, 1804, 11, 12, 0], [226, 88, 551, 1955, 9, 8, 0], [221, 246, 631, 1805, 11, 10, 0], [254, 40, 1195, 1894, 10, 13, 0], [264, 161, 1850, 1634, 13, 12, 0], [244, 231, 1110, 1900, 10, 10, 0], [282, 56, 1007, 1568, 30, 13, 0], [290, 88, 1848, 1953, 9, 9, 0], [294, 162, 831, 1805, 11, 10, 0], [339, 197, 1121, 1900, 10, 10, 0]], [[93, 69, 121, 1628, 16, 19, 0], [90, 162, 565, 944, 82, 69, 0], [125, 245, 1788,
                1804, 11, 12, 0], [118, 266, 1132, 1900, 10, 10, 0], [119, 285, 1316, 1952, 9, 10, 0], [202, 303, 1605, 1750, 12, 12, 0], [225, 88, 1858, 1953, 9, 9, 0], [222, 247, 1045, 1901, 10, 10, 0], [253, 36, 1206, 1894, 10, 13, 0], [262, 163, 426, 815, 13, 13, 0], [244, 232, 1326, 1952, 9, 10, 0], [284, 56, 0, 1674, 29, 13, 0], [291, 88, 1869, 1932, 9, 9, 0], [296, 162, 843, 1805, 11, 10, 0], [340, 198, 992, 1805, 11, 10, 0]], [[93, 61, 1122, 1630, 18, 26, 0], [90, 167, 1480, 958, 80, 64, 0], [124, 246, 1664, 1663, 11, 13, 0], [117, 267, 1056, 1901, 10, 10, 0], [118, 286, 1067, 1901, 10, 10, 0], [201, 305, 567, 1751, 12, 12, 0], [224,
                89, 1869, 1942, 9, 9, 0], [223, 248, 1433, 1805, 11, 10, 0], [251, 33, 1569, 1688, 11, 13, 0], [261, 165, 1383, 1746, 12, 13, 0], [243, 233, 1434, 1952, 9, 10, 0], [284, 56, 1263, 1089, 31, 14, 0], [292, 89, 1869, 1952, 9, 9, 0], [297, 162, 619, 1761, 12, 10, 0], [341, 198, 1078, 1901, 10, 10, 0]], [[110, 51, 1123, 1984, 8, 8, 0], [88, 61, 1853, 222, 23, 21, 0], [89, 167, 648, 961, 80, 64, 0], [123, 248, 1800, 1804, 11, 12, 0], [117, 268, 1143, 1901, 10, 10, 0], [118, 287, 418, 1901, 10, 11, 0], [200, 306, 580, 1751, 12, 12, 0], [223, 90, 0, 1954, 9, 9, 0], [224, 249, 452, 1900, 10, 11, 0], [250, 31, 0, 1804, 11, 12, 0], [260,
                168, 1501, 1746, 12, 13, 0], [242, 234, 1154, 1901, 10, 10, 0], [286, 56, 924, 1564, 30, 14, 0], [293, 90, 242, 1901, 10, 9, 0], [299, 163, 1005, 1671, 13, 11, 0], [342, 199, 1445, 1805, 11, 10, 0]], [[83, 45, 1399, 1191, 43, 38, 0], [89, 164, 1216, 1021, 79, 67, 0], [122, 249, 1514, 1746, 12, 13, 0], [116, 269, 1165, 1901, 10, 10, 0], [118, 288, 1357, 1953, 9, 10, 0], [198, 307, 1527, 1746, 12, 13, 0], [222, 91, 80, 1954, 9, 9, 0], [225, 250, 1176, 1901, 10, 10, 0], [248, 29, 1458, 1758, 12, 11, 0], [259, 170, 749, 1747, 12, 14, 0], [242, 235, 1367, 1953, 9, 10, 0], [288, 56, 842, 1570, 30, 14, 0], [294, 91, 253, 1901, 10,
                9, 0], [302, 164, 1540, 1746, 12, 13, 0], [343, 200, 1568, 1806, 11, 10, 0]], [[77, 41, 565, 898, 57, 37, 0], [89, 164, 248, 1051, 78, 67, 0], [121, 251, 508, 1791, 11, 13, 0], [115, 270, 1217, 1900, 10, 10, 0], [117, 289, 463, 1901, 10, 11, 0], [197, 309, 762, 1752, 12, 12, 0], [221, 92, 90, 1955, 9, 9, 0], [226, 251, 474, 1901, 10, 11, 0], [247, 27, 198, 1804, 11, 12, 0], [241, 236, 1228, 1900, 10, 10, 0], [259, 173, 520, 1791, 11, 13, 0], [290, 56, 726, 1204, 29, 15, 0], [295, 91, 1239, 1900, 10, 10, 0], [303, 166, 1553, 1747, 12, 13, 0], [344, 201, 1580, 1806, 11, 10, 0]], [[72, 67, 1146, 1154, 13, 9, 0], [96, 39, 717, 891,
                44, 37, 0], [88, 166, 432, 1087, 78, 65, 0], [120, 253, 1566, 1747, 12, 13, 0], [114, 271, 1250, 1901, 10, 10, 0], [117, 290, 1226, 1952, 9, 11, 0], [195, 310, 1864, 1634, 13, 12, 0], [220, 92, 1261, 1901, 10, 10, 0], [227, 252, 485, 1901, 10, 11, 0], [245, 27, 632, 1761, 12, 10, 0], [241, 237, 1337, 1951, 9, 11, 0], [259, 176, 1023, 1895, 10, 12, 0], [291, 57, 684, 507, 29, 14, 0], [296, 92, 1377, 1953, 9, 10, 0], [305, 169, 532, 1791, 11, 13, 0], [345, 202, 1645, 1805, 11, 10, 0]], [[67, 68, 1525, 1689, 13, 10, 0], [95, 37, 1412, 645, 50, 25, 0], [117, 68, 170, 996, 14, 9, 0], [88, 166, 1108, 1088, 77, 65, 0], [119, 254, 1579,
                1747, 12, 13, 0], [114, 272, 1387, 1953, 9, 10, 0], [117, 292, 1397, 1953, 9, 10, 0], [194, 311, 461, 1640, 13, 12, 0], [219, 94, 264, 1901, 10, 9, 0], [227, 253, 1496, 1804, 11, 11, 0], [244, 27, 1657, 1805, 11, 10, 0], [240, 238, 496, 1901, 10, 11, 0], [258, 177, 210, 1804, 11, 12, 0], [293, 57, 1582, 1686, 28, 15, 0], [297, 93, 1407, 1953, 9, 10, 0], [305, 171, 1011, 1746, 12, 14, 0], [346, 203, 1508, 1804, 11, 11, 0]], [[66, 69, 100, 1955, 9, 9, 0], [94, 31, 1709, 1099, 54, 25, 0], [122, 69, 170, 1006, 14, 9, 0], [88, 163, 1453, 1090, 76, 68, 0], [118, 256, 0, 1747, 12, 13, 0], [113, 273, 1272, 1901, 10, 10, 0], [116, 292,
                1034, 1895, 10, 12, 0], [192, 312, 1063, 1684, 13, 11, 0], [219, 95, 110, 1955, 9, 9, 0], [228, 254, 507, 1901, 10, 11, 0], [241, 27, 1509, 1713, 13, 10, 0], [240, 240, 1444, 1953, 9, 10, 0], [258, 178, 544, 1791, 11, 13, 0], [295, 58, 402, 1137, 28, 14, 0], [298, 94, 1454, 1953, 9, 10, 0], [306, 174, 475, 1640, 11, 14, 0], [347, 204, 1669, 1806, 11, 10, 0]], [[65, 70, 120, 1955, 9, 9, 0], [94, 27, 1044, 1113, 54, 23, 0], [128, 70, 561, 1955, 9, 8, 0], [87, 163, 79, 1091, 76, 68, 0], [118, 258, 1396, 1759, 12, 11, 0], [112, 274, 1283, 1901, 10, 10, 0], [116, 294, 518, 1901, 10, 11, 0], [192, 314, 1171, 1398, 12, 9, 0], [218,
                95, 1464, 1953, 9, 10, 0], [239, 27, 832, 1753, 12, 12, 0], [239, 241, 1311, 1900, 10, 10, 0], [228, 255, 222, 1804, 11, 12, 0], [258, 180, 234, 1804, 11, 12, 0], [296, 60, 0, 1688, 28, 13, 0], [298, 95, 1322, 1900, 10, 10, 0], [307, 177, 1610, 1895, 10, 12, 0], [348, 205, 1333, 1900, 10, 10, 0]], [[64, 70, 130, 1955, 9, 9, 0], [93, 23, 802, 934, 57, 25, 0], [129, 71, 571, 1955, 9, 8, 0], [87, 165, 0, 1096, 76, 66, 0], [112, 274, 1347, 1951, 9, 11, 0], [116, 295, 1344, 1900, 10, 10, 0], [217, 97, 275, 1901, 10, 9, 0], [237, 29, 222, 1747, 12, 13, 0], [239, 242, 1355, 1900, 10, 10, 0], [229, 256, 530, 1900, 10, 11, 0], [258, 181,
                651, 1790, 11, 13, 0], [298, 60, 1850, 354, 27, 14, 0], [299, 96, 1474, 1953, 9, 10, 0], [307, 178, 295, 1804, 11, 12, 0], [348, 206, 246, 1806, 11, 10, 0]], [[63, 71, 140, 1955, 9, 9, 0], [92, 20, 771, 672, 59, 28, 0], [130, 71, 150, 1955, 9, 9, 0], [87, 164, 968, 1096, 75, 67, 0], [111, 275, 1344, 1900, 10, 10, 0], [217, 97, 1424, 1951, 9, 11, 0], [236, 31, 235, 1747, 12, 13, 0], [239, 243, 1602, 1951, 9, 11, 0], [258, 182, 307, 1804, 11, 12, 0], [299, 62, 1850, 369, 27, 13, 0], [300, 97, 1574, 1952, 9, 10, 0], [307, 179, 663, 1790, 11, 13, 0], [349, 207, 541, 1901, 10, 11, 0]], [[61, 72, 286, 1901, 10, 9, 0], [90, 17, 299, 1458,
                20, 19, 0], [123, 38, 445, 939, 30, 11, 0], [131, 72, 160, 1955, 9, 9, 0], [87, 162, 1530, 1110, 74, 69, 0], [216, 99, 1366, 1900, 10, 10, 0], [235, 34, 675, 1790, 11, 13, 0], [238, 244, 552, 1901, 10, 11, 0], [257, 184, 1488, 1754, 12, 12, 0], [300, 63, 1850, 383, 27, 12, 0], [300, 98, 1788, 1951, 9, 11, 0], [307, 181, 319, 1804, 11, 12, 0], [350, 208, 563, 1901, 10, 11, 0]], [[60, 73, 297, 1901, 10, 9, 0], [89, 14, 1204, 484, 22, 19, 0], [125, 38, 607, 1014, 29, 11, 0], [132, 72, 1377, 1900, 10, 10, 0], [86, 161, 606, 1096, 75, 70, 0], [216, 100, 1584, 1952, 9, 10, 0], [234, 36, 1357, 1746, 12, 14, 0], [238, 246, 1388, 1900,
                10, 10, 0], [257, 185, 248, 1747, 12, 13, 0], [301, 65, 1850, 396, 27, 12, 0], [301, 99, 10, 1952, 9, 11, 0], [307, 182, 687, 1790, 11, 13, 0], [351, 209, 1206, 1952, 9, 12, 0]], [[59, 73, 1399, 1900, 10, 10, 0], [35, 187, 391, 1602, 38, 37, 0], [87, 12, 1480, 936, 25, 17, 0], [127, 38, 1847, 1139, 28, 11, 0], [133, 73, 170, 1955, 9, 9, 0], [86, 160, 1263, 1108, 74, 71, 0], [215, 101, 1410, 1900, 10, 10, 0], [233, 39, 1156, 1747, 12, 13, 0], [238, 246, 1216, 1952, 9, 12, 0], [257, 187, 1396, 1759, 12, 11, 0], [302, 66, 331, 1804, 11, 12, 0], [301, 101, 1421, 1900, 10, 10, 0], [308, 183, 1437, 1894, 10, 13, 0], [319, 67, 1459,
                1900, 10, 10, 0], [351, 210, 20, 1952, 9, 11, 0]], [[59, 74, 50, 1953, 9, 10, 0], [42, 193, 1108, 1024, 25, 25, 0], [86, 11, 1177, 1687, 28, 15, 0], [129, 38, 1386, 1688, 28, 12, 0], [134, 74, 180, 1955, 9, 9, 0], [86, 159, 327, 1102, 74, 72, 0], [215, 102, 60, 1954, 9, 10, 0], [233, 41, 699, 1790, 11, 13, 0], [237, 248, 1520, 1804, 11, 11, 0], [303, 68, 343, 1804, 11, 12, 0], [302, 102, 1470, 1900, 10, 10, 0], [307, 185, 1169, 1747, 12, 13, 0], [320, 68, 1481, 1900, 10, 10, 0]], [[58, 75, 70, 1954, 9, 10, 0], [43, 195, 1853, 199, 23, 22, 0], [84, 10, 476, 1208, 31, 14, 0], [130, 39, 1540, 1688, 28, 11, 0], [135, 75, 190, 1955,
                9, 9, 0], [86, 158, 1044, 1154, 73, 73, 0], [214, 103, 574, 1901, 10, 11, 0], [233, 43, 651, 1804, 11, 12, 0], [237, 249, 1344, 1900, 10, 10, 0], [304, 69, 1119, 1790, 11, 13, 0], [302, 103, 585, 1901, 10, 11, 0], [307, 186, 403, 1748, 12, 13, 0], [321, 69, 1492, 1900, 10, 10, 0]], [[57, 76, 1052, 1953, 9, 10, 0], [44, 196, 1605, 1131, 21, 20, 0], [83, 10, 336, 1301, 34, 12, 0], [132, 40, 1850, 409, 27, 11, 0], [135, 76, 308, 1901, 10, 9, 0], [86, 158, 1453, 1159, 73, 73, 0], [214, 105, 1062, 1953, 9, 10, 0], [233, 44, 1131, 1790, 11, 13, 0], [305, 71, 283, 1791, 11, 13, 0], [302, 104, 596, 1901, 10, 11, 0], [307, 188, 1396,
                1759, 12, 11, 0], [322, 70, 1503, 1901, 10, 10, 0]], [[56, 77, 1514, 1901, 10, 10, 0], [45, 197, 1613, 1664, 19, 18, 0], [80, 10, 387, 815, 38, 11, 0], [134, 41, 1062, 587, 26, 11, 0], [136, 77, 319, 1901, 10, 9, 0], [86, 157, 402, 1153, 73, 74, 0], [213, 105, 607, 1901, 10, 11, 0], [233, 45, 1082, 1791, 11, 13, 0], [305, 73, 663, 1804, 11, 12, 0], [303, 105, 618, 1900, 10, 11, 0], [322, 71, 1532, 1805, 11, 11, 0]], [[56, 78, 1072, 1953, 9, 10, 0], [45, 197, 1023, 1705, 18, 18, 0], [78, 10, 297, 749, 42, 12, 0], [135, 42, 1572, 599, 26, 11, 0], [137, 78, 1092, 1953, 9, 10, 0], [86, 156, 1709, 1152, 73, 75, 0], [213, 107, 629,
                1901, 10, 11, 0], [233, 47, 55, 1896, 10, 12, 0], [306, 75, 675, 1804, 11, 12, 0], [303, 107, 1525, 1901, 10, 10, 0], [323, 72, 1536, 1901, 10, 10, 0]], [[55, 79, 1102, 1953, 9, 10, 0], [46, 198, 783, 1654, 17, 16, 0], [76, 10, 1827, 657, 47, 15, 0], [136, 43, 1850, 421, 27, 11, 0], [138, 79, 1112, 1953, 9, 10, 0], [86, 156, 1783, 1152, 73, 75, 0], [213, 108, 1547, 1901, 10, 10, 0], [232, 48, 1094, 1791, 11, 13, 0], [307, 76, 1106, 1791, 11, 13, 0], [303, 107, 640, 1901, 10, 11, 0], [323, 73, 1544, 1805, 11, 11, 0]], [[54, 80, 651, 1901, 10, 11, 0], [47, 192, 1495, 1713, 13, 18, 0], [75, 14, 1443, 1791, 11, 13, 0], [112, 11,
                701, 1640, 13, 12, 0], [138, 44, 1572, 586, 26, 12, 0], [138, 80, 1558, 1901, 10, 10, 0], [87, 156, 0, 1163, 71, 75, 0], [212, 109, 662, 1901, 10, 11, 0], [232, 50, 687, 1804, 11, 12, 0], [307, 78, 108, 1792, 11, 13, 0], [304, 109, 1122, 1953, 9, 10, 0], [324, 74, 1556, 1805, 11, 11, 0]], [[54, 82, 1132, 1953, 9, 10, 0], [42, 183, 1853, 121, 23, 27, 0], [74, 17, 120, 1792, 11, 13, 0], [87, 164, 417, 827, 6, 5, 0], [115, 12, 416, 1748, 12, 13, 0], [139, 44, 1572, 572, 26, 13, 0], [139, 81, 1142, 1953, 9, 10, 0], [98, 156, 668, 823, 4, 3, 0], [101, 166, 383, 1424, 57, 65, 0], [212, 110, 673, 1901, 10, 11, 0], [232, 51, 132, 1792,
                11, 13, 0], [307, 80, 429, 1748, 12, 13, 0], [304, 110, 1621, 1900, 10, 10, 0], [325, 75, 699, 1804, 11, 12, 0]], [[53, 83, 1632, 1900, 10, 10, 0], [37, 176, 1050, 1625, 35, 34, 0], [73, 19, 472, 1790, 11, 14, 0], [116, 15, 998, 1748, 12, 13, 0], [140, 45, 1062, 572, 26, 14, 0], [139, 82, 684, 1901, 10, 11, 0], [85, 156, 682, 1100, 74, 75, 0], [212, 111, 430, 1896, 10, 12, 0], [232, 52, 711, 1804, 11, 12, 0], [308, 81, 484, 1790, 11, 14, 0], [304, 111, 695, 1901, 10, 11, 0], [325, 76, 72, 1805, 11, 11, 0]], [[31, 195, 823, 980, 13, 8, 0], [73, 22, 496, 1790, 11, 14, 0], [53, 84, 1152, 1953, 9, 10, 0], [47, 171, 476, 1153, 33, 21,
                0], [49, 193, 1736, 1143, 8, 7, 0], [117, 17, 1182, 1748, 12, 13, 0], [141, 46, 1062, 556, 26, 15, 0], [140, 83, 1162, 1953, 9, 10, 0], [87, 156, 865, 720, 72, 74, 0], [212, 113, 1344, 1900, 10, 10, 0], [308, 83, 1618, 1754, 12, 12, 0], [304, 113, 1643, 1900, 10, 10, 0]], [[26, 195, 837, 980, 13, 8, 0], [52, 85, 1669, 1900, 10, 10, 0], [43, 169, 383, 1397, 16, 23, 0], [72, 25, 723, 1805, 11, 12, 0], [63, 168, 1853, 97, 24, 14, 0], [118, 20, 1665, 1748, 12, 13, 0], [142, 47, 1062, 539, 26, 16, 0], [140, 84, 706, 1901, 10, 11, 0], [90, 157, 585, 1167, 70, 73, 0], [304, 113, 530, 1900, 10, 11, 0]], [[20, 195, 170, 955, 14, 10, 0],
                [52, 86, 30, 1953, 9, 11, 0], [38, 163, 327, 1051, 21, 22, 0], [72, 22, 1350, 742, 58, 17, 0], [143, 48, 1572, 555, 26, 16, 0], [141, 85, 40, 1953, 9, 11, 0], [67, 157, 201, 698, 95, 71, 0]], [[19, 197, 1722, 1683, 10, 8, 0], [34, 169, 372, 1693, 13, 11, 0], [51, 87, 717, 1901, 10, 11, 0], [49, 158, 1176, 1951, 9, 14, 0], [72, 27, 441, 1896, 10, 12, 0], [71, 166, 441, 1472, 12, 9, 0], [120, 25, 1300, 1896, 10, 12, 0], [144, 49, 1572, 537, 26, 17, 0], [141, 87, 1680, 1900, 10, 10, 0], [85, 156, 1029, 1024, 78, 71, 0]], [[18, 197, 200, 1954, 9, 9, 0], [30, 167, 231, 1714, 13, 10, 0], [51, 88, 728, 1901, 10, 11, 0], [48, 154, 785, 1617,
                9, 13, 0], [72, 29, 1448, 1896, 10, 12, 0], [74, 166, 1845, 1807, 11, 9, 0], [120, 26, 144, 1792, 11, 13, 0], [144, 50, 1850, 335, 27, 18, 0], [142, 88, 411, 1952, 9, 11, 0], [90, 156, 156, 1110, 74, 70, 0]], [[27, 167, 495, 1535, 12, 9, 0], [17, 198, 1779, 1901, 10, 8, 0], [51, 89, 739, 1901, 10, 11, 0], [47, 150, 1790, 1894, 10, 13, 0], [71, 30, 583, 1792, 11, 13, 0], [76, 165, 1484, 1953, 9, 10, 0], [120, 28, 735, 1805, 11, 12, 0], [145, 51, 1850, 492, 26, 19, 0], [142, 89, 1691, 1900, 10, 10, 0], [93, 157, 1186, 1089, 76, 74, 0]], [[25, 166, 1857, 1807, 11, 9, 0], [16, 198, 210, 1954, 9, 9, 0], [50, 91, 1702, 1900, 10, 10, 0],
                [46, 146, 11, 1895, 10, 13, 0], [71, 31, 595, 1792, 11, 13, 0], [76, 165, 747, 1808, 11, 9, 0], [120, 29, 765, 1804, 11, 12, 0], [146, 52, 1062, 519, 26, 19, 0], [142, 90, 750, 1901, 10, 11, 0], [93, 161, 1794, 941, 82, 75, 0]], [[15, 199, 220, 1954, 9, 9, 0], [25, 166, 230, 1954, 9, 9, 0], [50, 92, 761, 1901, 10, 11, 0], [45, 143, 22, 1895, 10, 13, 0], [71, 33, 607, 1793, 11, 13, 0], [78, 166, 883, 1808, 11, 9, 0], [94, 169, 895, 1808, 11, 9, 0], [120, 30, 619, 1793, 11, 13, 0], [146, 53, 1572, 516, 26, 20, 0], [142, 91, 84, 1805, 11, 11, 0], [106, 174, 231, 1119, 74, 67, 0]], [[22, 166, 508, 1535, 12, 9, 0], [14, 200, 240, 1954,
                9, 9, 0], [50, 93, 772, 1901, 10, 11, 0], [43, 141, 859, 1804, 11, 12, 0], [71, 34, 968, 1792, 11, 13, 0], [80, 166, 907, 1808, 11, 9, 0], [96, 169, 330, 1901, 10, 9, 0], [121, 32, 1588, 1896, 10, 12, 0], [146, 54, 1850, 291, 27, 21, 0], [142, 92, 871, 1804, 11, 12, 0], [119, 175, 1449, 1352, 63, 68, 0]], [[20, 166, 1526, 1588, 12, 9, 0], [13, 200, 1494, 1954, 9, 10, 0], [50, 94, 1344, 1900, 10, 10, 0], [41, 139, 1409, 1759, 12, 11, 0], [71, 36, 72, 1805, 11, 11, 0], [82, 166, 258, 1806, 11, 10, 0], [97, 169, 919, 1808, 11, 9, 0], [120, 33, 1678, 1748, 12, 13, 0], [147, 56, 1850, 313, 27, 21, 0], [143, 94, 1713, 1900, 10, 10, 0],
                [127, 175, 526, 1477, 55, 68, 0]], [[19, 166, 270, 1806, 11, 10, 0], [12, 202, 250, 1954, 9, 9, 0], [40, 138, 96, 1805, 11, 11, 0], [83, 167, 973, 1760, 12, 10, 0], [98, 169, 355, 1806, 11, 10, 0], [120, 34, 364, 1749, 12, 13, 0], [147, 66, 1396, 1759, 12, 11, 0], [143, 95, 1344, 1900, 10, 10, 0], [127, 176, 1330, 1472, 56, 65, 0]], [[17, 167, 1202, 1808, 11, 9, 0], [11, 202, 1724, 1900, 10, 10, 0], [38, 137, 1250, 1760, 12, 10, 0], [85, 167, 1422, 1759, 12, 11, 0], [100, 170, 341, 1901, 10, 9, 0], [120, 36, 1396, 1759, 12, 11, 0], [127, 171, 1214, 1424, 57, 65, 0]], [[15, 167, 367, 1806, 11, 10, 0], [11, 203, 1504, 1954, 9,
                10, 0], [37, 137, 379, 1806, 11, 10, 0], [87, 168, 108, 1806, 11, 11, 0], [101, 170, 460, 1806, 11, 10, 0], [128, 168, 1272, 1441, 57, 62, 0]], [[13, 168, 1263, 1760, 12, 10, 0], [10, 204, 1514, 1954, 9, 10, 0], [34, 137, 245, 1714, 13, 10, 0], [88, 169, 1435, 1759, 12, 11, 0], [103, 171, 352, 1901, 10, 9, 0], [128, 168, 636, 1450, 57, 61, 0]], [[12, 169, 120, 1806, 11, 11, 0], [9, 205, 797, 1900, 10, 11, 0], [32, 137, 1185, 1651, 13, 12, 0], [90, 170, 941, 1804, 11, 12, 0], [104, 171, 1735, 1901, 10, 10, 0], [129, 171, 1441, 1421, 58, 59, 0]], [[10, 170, 132, 1806, 11, 11, 0], [9, 207, 260, 1954, 9, 9, 0], [30, 139, 377, 1749,
                12, 13, 0], [91, 172, 144, 1806, 11, 11, 0], [105, 172, 1746, 1901, 10, 10, 0], [130, 175, 1720, 1407, 60, 63, 0]], [[9, 171, 156, 1805, 11, 11, 0], [8, 208, 1524, 1954, 9, 10, 0], [29, 141, 390, 1749, 12, 13, 0], [92, 173, 953, 1804, 11, 12, 0], [106, 172, 1757, 1901, 10, 10, 0], [134, 175, 65, 1387, 62, 69, 0]], [[7, 172, 1631, 1754, 12, 12, 0], [7, 208, 808, 1900, 10, 11, 0], [28, 144, 1241, 1792, 11, 13, 0], [93, 175, 168, 1806, 11, 11, 0], [107, 173, 583, 1806, 11, 10, 0], [139, 168, 1188, 1332, 63, 76, 0]], [[6, 174, 180, 1806, 11, 11, 0], [7, 210, 1534, 1954, 9, 10, 0], [27, 146, 1370, 1746, 12, 14, 0], [94, 176, 1005,
                1804, 11, 12, 0], [108, 174, 595, 1806, 11, 10, 0], [150, 167, 843, 1410, 58, 74, 0]], [[5, 175, 1118, 1804, 11, 12, 0], [6, 211, 819, 1900, 10, 11, 0], [26, 149, 793, 1749, 12, 13, 0], [95, 178, 1130, 1804, 11, 12, 0], [109, 175, 607, 1807, 11, 10, 0], [164, 153, 1685, 1548, 44, 81, 0]], [[4, 177, 1142, 1804, 11, 12, 0], [6, 212, 421, 1952, 9, 11, 0], [26, 152, 1154, 1804, 11, 12, 0], [96, 179, 1253, 1792, 11, 13, 0], [110, 176, 777, 1806, 11, 10, 0], [165, 143, 1201, 1579, 43, 85, 0]], [[3, 178, 806, 1749, 12, 13, 0], [5, 213, 830, 1901, 10, 11, 0], [26, 153, 1082, 1805, 11, 12, 0], [97, 181, 1094, 1805, 11, 12, 0], [111,
                177, 789, 1806, 11, 10, 0], [166, 141, 1591, 1582, 42, 81, 0]], [[3, 180, 1106, 1805, 11, 12, 0], [5, 215, 1768, 1901, 10, 10, 0], [26, 154, 1265, 1792, 11, 13, 0], [97, 183, 1166, 1805, 11, 12, 0], [112, 178, 801, 1806, 11, 10, 0], [166, 138, 1634, 1582, 42, 80, 0]], [[2, 182, 1178, 1805, 11, 12, 0], [4, 216, 1801, 1900, 10, 10, 0], [26, 156, 1599, 1896, 10, 12, 0], [98, 184, 1385, 1792, 11, 13, 0], [113, 178, 841, 1901, 10, 11, 0], [166, 129, 1142, 1582, 42, 84, 0]], [[1, 183, 1397, 1792, 11, 13, 0], [4, 217, 852, 1901, 10, 11, 0], [26, 157, 1190, 1805, 11, 12, 0], [99, 186, 1409, 1792, 11, 13, 0], [114, 180, 1812, 1900,
                10, 10, 0], [165, 120, 586, 1571, 43, 92, 0]], [[1, 185, 1421, 1792, 11, 13, 0], [4, 218, 1823, 1900, 10, 10, 0], [25, 158, 1334, 1755, 12, 12, 0], [99, 188, 980, 1803, 11, 13, 0], [114, 181, 283, 1805, 11, 11, 0], [165, 120, 347, 1579, 43, 92, 0]], [[0, 187, 1692, 1803, 11, 13, 0], [4, 219, 431, 1952, 9, 11, 0], [25, 160, 1108, 1757, 12, 12, 0], [100, 190, 1277, 1804, 11, 12, 0], [115, 182, 965, 1806, 11, 10, 0], [164, 120, 787, 523, 45, 91, 0]], [[0, 189, 1289, 1804, 11, 12, 0], [3, 220, 863, 1901, 10, 11, 0], [25, 161, 819, 1749, 12, 13, 0], [100, 191, 1691, 1749, 12, 13, 0], [116, 183, 398, 1805, 11, 11, 0], [164, 120, 403,
                1536, 45, 65, 0], [169, 186, 1330, 1441, 36, 25, 0]], [[0, 190, 33, 1896, 10, 13, 0], [3, 222, 1834, 1900, 10, 10, 0], [25, 162, 711, 1804, 11, 12, 0], [100, 193, 1396, 1759, 12, 11, 0], [116, 184, 410, 1805, 11, 11, 0], [164, 120, 449, 1536, 45, 64, 0], [169, 187, 1245, 1628, 35, 23, 0]], [[0, 192, 44, 1896, 10, 13, 0], [3, 223, 1344, 1900, 10, 10, 0], [117, 185, 1344, 1900, 10, 10, 0], [164, 120, 682, 1538, 45, 62, 0], [170, 184, 1561, 1013, 37, 26, 0]], [[0, 194, 530, 1900, 10, 11, 0], [164, 120, 526, 1407, 46, 63, 0], [170, 185, 794, 1260, 35, 24, 0]], [[164, 120, 1544, 1535, 46, 62, 0], [169, 185, 527, 988, 36, 24, 0]],
            [[163, 120, 1771, 1532, 47, 59, 0], [167, 185, 1309, 577, 37, 15, 0], [182, 202, 330, 762, 11, 7, 0]], [[163, 120, 299, 1533, 47, 59, 0], [167, 185, 1214, 1409, 34, 12, 0], [182, 200, 264, 1624, 12, 9, 0]], [[163, 121, 748, 1533, 47, 59, 0], [170, 188, 1310, 909, 32, 10, 0], [182, 199, 1276, 1760, 12, 10, 0]], [[163, 120, 919, 1097, 47, 60, 0], [168, 185, 765, 1031, 37, 23, 0]], [[163, 157, 234, 1984, 7, 17, 0], [164, 180, 852, 1092, 3, 3, 0], [171, 120, 1309, 522, 37, 54, 0], [173, 188, 1350, 789, 28, 8, 0], [181, 198, 259, 1714, 13, 10, 0]], [[163, 120, 1403, 1588, 40, 54, 0], [164, 180, 856, 1092, 3, 3, 0], [168, 185,
                271, 1273, 32, 22, 0], [204, 160, 353, 997, 6, 14, 0]], [[167, 119, 401, 1315, 40, 35, 0], [162, 158, 1709, 1125, 37, 17, 0], [164, 180, 860, 1092, 3, 3, 0], [181, 190, 133, 1672, 17, 17, 0]], [[167, 120, 1287, 1590, 40, 33, 0], [182, 158, 781, 715, 9, 3, 0], [179, 162, 1272, 1424, 31, 12, 0], [183, 192, 334, 1653, 11, 16, 0]], [[162, 170, 669, 774, 4, 6, 0], [171, 120, 1675, 1175, 32, 32, 0], [177, 162, 1083, 853, 17, 7, 0], [181, 192, 1798, 792, 14, 4, 0], [182, 198, 1017, 1806, 11, 10, 0]], [[171, 120, 476, 1175, 32, 32, 0], [182, 195, 1327, 1804, 11, 12, 0]], [[167, 120, 1730, 1548, 40, 33, 0], [182, 192, 973, 1739, 11,
                15, 0]], [[167, 120, 1730, 1582, 40, 33, 0], [182, 192, 460, 1790, 11, 15, 0]], [[171, 120, 924, 1531, 32, 32, 0], [182, 192, 1304, 1424, 10, 15, 0]], [[171, 120, 668, 1640, 32, 31, 0], [183, 194, 1186, 1951, 9, 13, 0]], [[167, 120, 1465, 1233, 40, 32, 0], [183, 192, 964, 1676, 9, 15, 0]], [[167, 121, 1771, 1592, 40, 31, 0], [183, 192, 720, 1976, 8, 15, 0]]]
    };
    var Vl = function (a, b) {
        this.o = b ? 1E3 / b : 0;
        this.g = null;
        this.i = a;
        this.s = this.j = 0
    };
    Vl.prototype.reset = function () {
        this.g = null
    };
    Vl.prototype.call = function (a, b) {
        0 == this.o ? b++ : (b = 0 == this.s ? Date.now() : this.j, null == this.g && (this.g = b), b = Math.floor((b - this.g) / this.o));
        b >= a && (b = 0 <= this.i ? b % (a - this.i) + this.i : a - 1);
        return b
    };
    Vl.prototype.update = function (a) {
        this.j += a
    };
    var Wl = function (a, b, c, e, f) {
        this.o = a;
        this.j = b;
        this.H = c;
        this.v = e || {x: 0, y: 0};
        this.g = -1;
        this.i = 0;
        this.s = f || new Vl(-1, void 0)
    }, Yl = function (a, b) {
        0 == b && Xl(a);
        b = n(a.j.frames[b]);
        for (var c = b.next(); !c.done; c = b.next()) {
            var e = c.value;
            c = e[0];
            var f = e[1], g = e[2] + a.v.x, h = e[3] + a.v.y, k = e[4];
            e = e[5];
            a.o.clearRect(c, f, k, e);
            a.o.drawImage(a.H, g, h, k, e, c, f, k, e)
        }
    }, Zl = function (a) {
        a.g > a.i && (a.g = -1);
        for (a.g == a.i && Yl(a, a.i); a.g < a.i;) Yl(a, ++a.g)
    }, Xl = function (a) {
        a.o.clearRect(0, 0, a.j.width, a.j.height)
    };
    Wl.prototype.reset = function () {
        Xl(this);
        this.i = 0;
        this.g = -1;
        this.s.reset()
    };
    var $l = 1E3 / 42, am = function (a, b, c) {
        b = void 0 === b ? $l : b;
        c = void 0 === c ? !0 : c;
        Q.call(this);
        var e = a.nc, f = document.createElement("canvas");
        f.width = e.width;
        f.height = e.height;
        this.v = f;
        e = this.v.getContext("2d");
        f = qh.g();
        this.g = 1E3 / b;
        var g;
        c ? g = new Vl(0, b) : g = new Vl(-1, b);
        this.o = g;
        this.o.s = 1;
        b = a.Le;
        this.j = new Wl(e, a.nc, f.Wb(a.Le), {x: b[1], y: b[2]}, this.o);
        this.setSize(a.nc.width, a.nc.height);
        this.H = !0;
        this.T = !1
    };
    p(am, Q);
    d = am.prototype;
    d.play = function () {
        this.H = !1
    };
    d.Ma = function (a, b) {
        var c = this.getSize();
        a = Math.min(a / c.width, b / c.height);
        this.setSize(c.width * a, c.height * a)
    };
    d.update = function (a) {
        this.o.update(a);
        this.H ? this.T || Zl(this.j) : (a = this.j, Zl(a), a.i = a.s.call(a.j.frames.length, a.g));
        this.T = !0
    };
    d.Wa = function (a) {
        var b = this.Ja ? Fe : 1, c = this.getSize(), e = b * c.height;
        b *= c.width;
        a.drawImage(this.v, -b / 2, -e / 2, b, e)
    };
    d.getDuration = function () {
        return this.j.j.frames.length * this.g
    };
    var cm = function (a) {
        H.call(this);
        var b = this;
        this.i = new ji(C.Yi);
        this.addChild(this.i);
        this.i.wa(!1);
        this.i.setScale(2.07);
        this.i.Ha(0);
        R(this.i, 0, 0);
        this.g = new am({nc: Ul, Le: C.$z}, 24, !1);
        this.g.Aa(36);
        this.g.wa(!1);
        this.addChild(this.g);
        this.g.setScale(2.07);
        this.g.Ha(0);
        this.j = new J;
        this.addChild(this.j);
        this.s = new J;
        this.addChild(this.s);
        this.T = function () {
        };
        this.v = cl(Gk);
        a.appendChild(this.v);
        this.v.textContent = Uk("Skip Intro");
        Sf(this.v, ["click", "touchend"], function () {
            bm(b)
        });
        this.o = cl(Hk);
        this.U =
            qk(this.o, "ddle20-C");
        a.appendChild(this.o);
        this.H = new J;
        this.addChild(this.H)
    };
    p(cm, H);
    cm.prototype.play = function () {
        var a = this;
        Qk(1);
        V.g.Jc.play();
        var b = new Promise(function (l) {
            return a.T = l
        });
        Ce(this.j, new U(300, 0, 1, function (l) {
            a.g.Ha(l);
            a.i.Ha(l)
        }));
        K(this.j, 0, function () {
            a.g.play();
            K(a.s, 218 * a.g.g);
            Ce(a.s, new U(27 * a.g.g, a.i.Va(), 1.03, function (l) {
                return a.i.setScale(l)
            }));
            K(a.s, 0, function () {
                a.i.Da()
            })
        });
        for (var c = 0, e = 0, f = {}, g = n(dm), h = g.next(); !h.done; f = {Ac: f.Ac}, h = g.next()) {
            h = n(h.value);
            var k = h.next().value;
            f.Ac = h.next().value;
            h = k - c;
            k = h * this.g.g;
            K(this.j, k, function (l) {
                return function () {
                    em(a,
                        l.Ac)
                }
            }(f));
            c += h;
            e += k
        }
        K(this.j, Math.max(0, this.g.getDuration() - e), function () {
            Qk(2);
            Pk(102);
            a.T()
        });
        return b
    };
    var bm = function (a) {
            Qk(2);
            Pk(101);
            a.H.g = [];
            a.j.g = [];
            a.s.g = [];
            K(a.j, 200, function () {
                ei(V.g.Jc, .01, .5);
                a.T()
            })
        }, em = function (a, b) {
            a.o.classList.contains("ddle20-h") && (a.o.classList.remove("ddle20-h"), K(a.H, 400));
            K(a.H, 0, function () {
                a.U.textContent = Uk(b);
                a.o.classList.add("ddle20-h")
            });
            K(a.H, 200)
        },
        dm = [[0, "IntroShot1"], [63, "IntroShot2"], [173, "IntroShot3"], [212, "IntroShot4"], [336, "IntroShot5"], [431, "IntroShot6"]];
    var fm = function () {
        H.call(this);
        this.j = new N;
        this.addChild(this.j);
        this.j.setScale(.9);
        this.s = [];
        for (var a = 0; 5 > a; a++) {
            var b = new ji(Jd[a]);
            b.Aa(-320 + 160 * a);
            b.wa(!1);
            R(b, 0, 0);
            this.s.push(b);
            this.j.addChild(b)
        }
        this.i = new N;
        this.i.Wa = function (c) {
            c.setTransform(1, 0, 0, 1, 0, 0);
            c.fillStyle = "#fff";
            c.fillRect(0, 0, c.canvas.width, c.canvas.height)
        };
        this.i.Uc = 2;
        this.addChild(this.i);
        this.o = new J;
        this.addChild(this.o);
        this.g = new J;
        this.addChild(this.g)
    };
    p(fm, H);
    fm.prototype.start = function () {
        var a = this, b, c = new Promise(function (k) {
            return b = k
        });
        K(this.o, 2500, b);
        K(this.g, 500);
        for (var e = 0; 10 > e; e++) {
            for (var f = {}, g = n(this.s), h = g.next(); !h.done; f = {ac: f.ac}, h = g.next()) f.ac = h.value, K(this.g, 0, function (k) {
                return function () {
                    L(a.g, new U(500, 0, 1, function (l) {
                        k.ac.setScale(1 + .3 * l)
                    }, {
                        Oa: function () {
                            L(a.g, new U(500, 1, 0, function (l) {
                                k.ac.setScale(1 + .3 * l)
                            }, {Ia: Lh}))
                        }, Ia: Nh
                    }))
                }
            }(f)), K(this.g, 300);
            K(this.g, 500)
        }
        return c
    };/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var hm = function (a) {
        var b = gm;
        this.o = [];
        this.ka = b;
        this.ha = a || null;
        this.j = this.g = !1;
        this.i = void 0;
        this.T = this.ta = this.v = !1;
        this.s = 0;
        this.Ea = null;
        this.H = 0
    };
    hm.prototype.cancel = function (a) {
        if (this.g) this.i instanceof hm && this.i.cancel(); else {
            if (this.Ea) {
                var b = this.Ea;
                delete this.Ea;
                a ? b.cancel(a) : (b.H--, 0 >= b.H && b.cancel())
            }
            this.ka ? this.ka.call(this.ha, this) : this.T = !0;
            this.g || (a = new im(this), jm(this), km(this, !1, a))
        }
    };
    hm.prototype.U = function (a, b) {
        this.v = !1;
        km(this, a, b)
    };
    var km = function (a, b, c) {
        a.g = !0;
        a.i = c;
        a.j = !b;
        lm(a)
    }, jm = function (a) {
        if (a.g) {
            if (!a.T) throw new mm(a);
            a.T = !1
        }
    }, nm = function (a, b, c, e) {
        a.o.push([b, c, e]);
        a.g && lm(a)
    };
    hm.prototype.then = function (a, b, c) {
        var e, f, g = new Ig(function (h, k) {
            e = h;
            f = k
        });
        nm(this, e, function (h) {
            h instanceof im ? g.cancel() : f(h)
        });
        return g.then(a, b, c)
    };
    hm.prototype.$goog_Thenable = !0;
    var om = function (a) {
        return nb(a.o, function (b) {
            return Ma(b[1])
        })
    }, lm = function (a) {
        if (a.s && a.g && om(a)) {
            var b = a.s, c = pm[b];
            c && (t.clearTimeout(c.g), delete pm[b]);
            a.s = 0
        }
        a.Ea && (a.Ea.H--, delete a.Ea);
        b = a.i;
        for (var e = c = !1; a.o.length && !a.v;) {
            var f = a.o.shift(), g = f[0], h = f[1];
            f = f[2];
            if (g = a.j ? h : g) try {
                var k = g.call(f || a.ha, b);
                void 0 !== k && (a.j = a.j && (k == b || k instanceof Error), a.i = b = k);
                if (Gg(b) || "function" === typeof t.Promise && b instanceof t.Promise) e = !0, a.v = !0
            } catch (l) {
                b = l, a.j = !0, om(a) || (c = !0)
            }
        }
        a.i = b;
        e && (k = Qa(a.U, a, !0),
            e = Qa(a.U, a, !1), b instanceof hm ? (nm(b, k, e), b.ta = !0) : b.then(k, e));
        c && (b = new qm(b), pm[b.g] = b, a.s = b.g)
    }, mm = function () {
        cb.call(this)
    };
    u(mm, cb);
    mm.prototype.message = "Deferred has already fired";
    mm.prototype.name = "AlreadyCalledError";
    var im = function () {
        cb.call(this)
    };
    u(im, cb);
    im.prototype.message = "Deferred was canceled";
    im.prototype.name = "CanceledError";
    var qm = function (a) {
        this.g = t.setTimeout(Qa(this.j, this), 0);
        this.i = a
    };
    qm.prototype.j = function () {
        delete pm[this.g];
        throw this.i;
    };
    var pm = {};
    var vm = function () {
        var a = new Gb(Eb, Cb(rm)), b = {}, c = b.document || document, e = Hb(a).toString(),
            f = rg(document, "SCRIPT"), g = {Ke: f, Xa: void 0}, h = new hm(g), k = null,
            l = null != b.timeout ? b.timeout : 5E3;
        0 < l && (k = window.setTimeout(function () {
            sm(f, !0);
            var m = new tm(1, "Timeout reached for loading script " + e);
            jm(h);
            km(h, !1, m)
        }, l), g.Xa = k);
        f.onload = f.onreadystatechange = function () {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (sm(f, b.aC || !1, k), jm(h), km(h, !0, null))
        };
        f.onerror = function () {
            sm(f, !0, k);
            var m = new tm(0,
                "Error while loading script " + e);
            jm(h);
            km(h, !1, m)
        };
        g = b.attributes || {};
        yb(g, {type: "text/javascript", charset: "UTF-8"});
        qg(f, g);
        hc(f, a);
        um(c).appendChild(f);
        return h
    }, um = function (a) {
        var b;
        return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    }, gm = function () {
        if (this && this.Ke) {
            var a = this.Ke;
            a && "SCRIPT" == a.tagName && sm(a, !0, this.Xa)
        }
    }, sm = function (a, b, c) {
        null != c && t.clearTimeout(c);
        a.onload = Ia;
        a.onerror = Ia;
        a.onreadystatechange = Ia;
        b && window.setTimeout(function () {
            a && a.parentNode &&
            a.parentNode.removeChild(a)
        }, 0)
    }, tm = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        cb.call(this, c);
        this.code = a
    };
    u(tm, cb);
    var wm = function (a, b) {
        N.call(this);
        this.j = new PIXI.Container;
        for (var c = ff = new ef(this.j), e = n(Object.values(C)), f = e.next(); !f.done; f = e.next()) {
            f = f.value;
            var g = sd(f), h = c.o.get(g);
            h || (h = PIXI.BaseTexture.from(cf.Wb(f)), c.o.set(g, h));
            c.i.set(f, new PIXI.Texture(h, new PIXI.Rectangle(f[1], f[2], cf.Hb(f), cf.Fb(f))))
        }
        this.g = ff.g;
        this.g.resize(a, b);
        PIXI.Ticker.shared.autoStart = !1;
        PIXI.Ticker.shared.stop()
    };
    p(wm, N);
    wm.prototype.Wa = function () {
        this.g.render(this.j)
    };
    var rm = new Bb(zb, "https://www.gstatic.com/external_hosted/pixi_v5/pixi-legacy.min.js"), xm = function () {
        return Da(function (a) {
            return df ? a.return(Promise.resolve()) : a.return(new Promise(function (b) {
                var c = vm();
                nm(c, b, null, void 0)
            }))
        })
    };
    var ym = function (a) {
        H.call(this);
        this.g = cl(Ik);
        a.appendChild(this.g);
        this.i = new J;
        this.addChild(this.i)
    };
    p(ym, H);
    ym.prototype.play = function (a) {
        var b = this;
        a = void 0 === a ? 300 : a;
        var c, e = new Promise(function (f) {
            return c = f
        });
        this.g.classList.add("ddle20-h");
        K(this.i, 400, c);
        K(this.i, a, function () {
            b.g.classList.remove("ddle20-h")
        });
        return e
    };
    var zm = function (a) {
        K(a.i, 500, function () {
            return a.Da()
        })
    };
    ym.prototype.Da = function () {
        H.prototype.Da.call(this);
        this.g.parentNode.removeChild(this.g)
    };
    var Am = function (a, b) {
        var c = void 0 === c ? 52 : c;
        var e = c * (window.devicePixelRatio || 1), f = document.createElement("canvas");
        f.width = e;
        f.height = e;
        var g = f.getContext("2d");
        g.fillStyle = "rgba(0,0,0,.3)";
        g.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI);
        g.fill();
        g.strokeStyle = "#fff";
        g.lineWidth = e / 52 * 3.5;
        var h = e / 52 * 2;
        g.beginPath();
        g.moveTo(e / 4 + h, e / 4 + h);
        g.lineTo(3 * e / 4 - h, 3 * e / 4 - h);
        g.stroke();
        g.beginPath();
        g.moveTo(3 * e / 4 - h, e / 4 + h);
        g.lineTo(e / 4 + h, 3 * e / 4 - h);
        g.stroke();
        this.g = f;
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
        Tf(this.g, "click", b);
        a.appendChild(this.g)
    };
    var Bm = function () {
        this.s = [];
        this.o = new H;
        this.g = [];
        this.j = [];
        this.i = []
    }, Cm = function () {
        return Bm.Fa().o
    };
    Bm.prototype.reset = function () {
        this.s = [];
        this.o = new H;
        this.g = [];
        this.j = [];
        this.i = []
    };
    var Dm = function (a, b) {
        a.j = [];
        for (var c = n(a.s), e = c.next(); !e.done; e = c.next()) xe(e.value, function (g) {
            a.j.push(g);
            g.update(b)
        });
        a.i = [];
        var f = 0;
        xe(a.o, function (g) {
            a.i.push(g);
            var h = f++;
            g.Nc.g = h;
            g.update(b)
        })
    }, Em = function (a, b) {
        a.g = [];
        for (var c = n(a.j), e = c.next(); !e.done; e = c.next()) e = e.value, e.isActive() && e.Nb && e.Nb(b) && a.g.push(e);
        c = [];
        var f = n(a.i);
        for (e = f.next(); !e.done; e = f.next()) e = e.value, e.isActive() && e.Nb && e.Nb(b) && c.push(e);
        ub(c, function (g, h) {
            var k;
            return (k = h.Vb(b) + ye(h) - (g.Vb(b) + ye(g))) ? k : g.Nc.g -
                h.Nc.g
        });
        c.forEach(function () {
        });
        a.g.push.apply(a.g, ma(c))
    };
    Ja(Bm);
    var Gm = function () {
        this.ka = !0;
        this.ha = !1;
        this.o = [];
        this.U = !1;
        this.g = this.s = this.j = 0;
        this.H = Fm
    };
    u(Gm, P);
    Ja(Gm);
    var Fm = 1E3 / 60, Hm = function (a) {
        var b = a.s(a.o);
        a.o++;
        a.g = Gm.Fa().j + a.i / Gm.Fa().H;
        !b && a.j && a.j();
        return b
    }, Im = function (a, b) {
        a.o.push(b);
        a.U = !0
    }, Km = function (a) {
        if (a.ka) a.ha = !1; else {
            a.ha = !0;
            Jm(a);
            a.U && (a.o.sort(function (f, g) {
                return f.g == g.g ? g.i - f.i : f.g - g.g
            }), a.U = !1);
            for (var b = 0, c = 0, e; e = a.o[c]; c++) if (e.g <= a.j) Hm(e) && Im(a, e), b++; else break;
            a.o.splice(0, b);
            a.j++;
            requestAnimationFrame(function () {
                Km(a)
            })
        }
    }, Jm = function (a) {
        var b = (new Date).getTime();
        30 < a.j && a.s && (b - a.s >= 1.05 * a.H ? a.g++ : a.g >>= 1, 20 < a.g && (a.H = Math.min(50,
            1.2 * a.H), a.g = 0));
        a.s = b
    };
    Gm.prototype.start = function () {
        this.ka = !1;
        this.ha || Km(this)
    };
    Gm.prototype.stop = function () {
        this.ka = !0;
        this.s = this.g = 0
    };
    Gm.prototype.i = function () {
        this.reset();
        Gm.mb.i.call(this)
    };
    Gm.prototype.reset = function () {
        this.stop();
        this.o = [];
        this.j = 0;
        this.U = !1;
        this.H = Fm;
        this.s = this.g = 0
    };
    var Mm = function (a, b, c) {
        var e = Lm;
        this.o = a;
        this.s = b;
        this.v = {};
        this.duration = 400;
        this.H = e || Lh;
        this.j = c || Zc;
        this.g = null;
        this.i = !1
    }, Om = function (a) {
        var b = Math.min(Math.max(Nm(a) / a.duration, 0), 1);
        a.i && (b = 1 - b);
        for (var c in a.o) if (a.s.hasOwnProperty(c)) {
            var e = a.v, f = c;
            var g = a.o[c];
            var h = a.s[c], k = a.H;
            k = void 0 === k ? Lh : k;
            g += k(b) * (h - g);
            e[f] = g
        }
        return a.v
    }, Nm = function (a) {
        return null === a.g ? 0 : a.j() - a.g
    };
    Mm.prototype.start = function () {
        this.g = this.j();
        this.i = !1
    };
    Mm.prototype.resume = function () {
        if (null !== this.g) {
            if (this.i) {
                var a = Math.min(this.duration, Nm(this));
                this.g = this.j() - (this.duration - a);
                this.i = !1
            }
        } else this.start()
    };
    Mm.prototype.reset = function () {
        this.g = null
    };
    var Lm = function (a) {
        return 3 * a * a - 2 * a * a * a
    };
    var Pm = function (a, b) {
        P.call(this);
        this.j = !1;
        this.g = a;
        this.H = b || null;
        this.s = function () {
        };
        this.o = null;
        ck() && (this.g.style.willChange = "width,height")
    };
    p(Pm, P);
    var Qm = function (a, b) {
        b = void 0 === b ? function () {
        } : b;
        var c = void 0 === c ? 0 : c;
        if (a.g && ck() && !a.j) {
            var e = a.g;
            if (Vc()) {
                var f = {cmd: "resizeDoodle", width: "768px", height: "432px", duration: "400ms"};
                "1" == Jc.g.get("ntp") ? window.parent.postMessage(f, "chrome-search://local-ntp") : window.top.postMessage(f, "chrome://new-tab-page");
                a.j = !0;
                var g = !1;
                a.o = setTimeout(function () {
                    g = !0;
                    b()
                }, 500);
                window.addEventListener("message", function (q) {
                    "resizeComplete" === q.data.bC && (null !== a.o && (clearTimeout(a.o), a.o = null), g || (g = !0, b()))
                })
            } else {
                document.getElementById("fkbx") &&
                A(e.parentNode, "width", "100%");
                f = e.offsetHeight;
                var h = e.offsetWidth;
                c = Math.min(768, e.parentNode.clientWidth) - 2 * c;
                var k = c / (768 / 432);
                Gm.Fa();
                var l = Zc(), m = new Mm({height: f, width: h}, {height: k, width: c}, function () {
                    return l
                });
                m.start();
                a.j = !0;
                a.s = function (q) {
                    l = void 0 !== q ? l + q : Zc();
                    q = Om(m);
                    ld(e, Math.round(q.width), Math.round(q.height));
                    a.H && Cl(a.H, !1);
                    Nm(m) >= m.duration && (b(), a.g.style.willChange = "unset", a.s = function () {
                    })
                }
            }
        }
    };
    Pm.prototype.i = function () {
        P.prototype.i.call(this);
        this.reset();
        this.g = null
    };
    Pm.prototype.reset = function () {
        this.j && (A(this.g, "width", "", "height", ""), kd(0), this.g.style.width = "", this.g.style.height = "");
        this.j = !1
    };
    Pm.prototype.update = function (a) {
        this.s(a)
    };
    var Rm = function () {
        this.ta = this.va = this.wa = this.j = this.i = null;
        this.ya = !1;
        this.T = null;
        this.v = this.U = this.o = this.s = !1;
        this.g = !0;
        this.ha = this.ka = !1;
        this.H = null
    };
    Rm.prototype.reset = function () {
        this.ta = this.va = this.wa = this.j = this.i = null;
        this.ya = !1;
        this.T = null;
        this.v = this.U = this.o = this.s = !1;
        this.g = !0;
        this.ha = this.ka = !1;
        this.H = null
    };
    var Tm = function (a) {
        a.s && (a.ha ? (Sm.call(document), a.ha = !1) : (a.T.call(a.j), a.H && (window.screen.lockOrientation && window.screen.lockOrientation(a.H), window.screen.orientation && window.screen.orientation.lock && window.screen.orientation.lock(a.H).catch(Ia))))
    }, Vm = function (a, b, c, e, f) {
        f = void 0 === f ? Ia : f;
        var g = void 0 === g ? !0 : g;
        a.j = b;
        a.i = c;
        a.wa = f;
        a.v = !1;
        a.T = b[ed(b, "requestFullscreen")];
        b = !!(document[ed(document, "fullscreenEnabled")] && a.T && Sm);
        if (Yc()) throw"";
        c = Pc ? !1 : Xc() && !(Nc || Oc) || Uc && Qc && !Lc;
        a.s = c && b;
        a.o = g &&
            dk();
        a.U = !g && dk();
        a.g = !0;
        if (a.s || a.o) A(document.body, "margin", "0"), A(a.j, "overflow", "visible", "width", "100%", "height", "100%"), document.body.scrollLeft = 0, e ? Xk(e, window, "scroll", Um) : Tf(window, "scroll", Um, !0)
    }, Wm = function (a, b) {
        a.i.push(b);
        a.g = !0
    };
    Rm.prototype.close = function () {
        this.ha = !0;
        Tm(this)
    };
    Rm.prototype.update = function () {
        if (this.s || this.o || this.U) {
            var a = !!document[Xm], b = window.innerWidth, c = window.innerHeight;
            0 == window.scrollX && 0 == window.scrollY || window.scrollTo(0, 0);
            if (b != this.va || c != this.ta || a != this.ya || this.g) {
                this.ka = b < c;
                for (var e = !1, f = 0; f < this.i.length; ++f) {
                    var g = this.i[f], h = g.width || g.dataset.width, k = g.height || g.dataset.height;
                    if (this.o) {
                        if (Yc()) throw"";
                        dk() && Qc && !Rc && !Nc && !Pc && 0 == f && (e = h < k != this.ka);
                        var l = e ? Math.min(b / k, c / h) : Math.min(b / h, c / k), m = l * h, q = l * k,
                            w = this.v ? "scale(" + l + ") " :
                                "";
                        if (e) {
                            l = (b - q) / 2 + q;
                            var B = (c - m) / 2;
                            w += "rotate(90deg)"
                        } else l = (b - m) / 2, B = (c - q) / 2;
                        h = this.v ? h : m;
                        k = this.v ? k : q;
                        cd(g, "TransformOrigin", "0 0");
                        cd(g, "Transform", w);
                        A(g, "position", "absolute", "width", h + "px", "height", k + "px", "left", l + "px", "top", B + "px")
                    } else Lc && A(g, "height", c + "px")
                }
                this.U || v(z, "CriOS") || document.body.clientWidth > b && 0 < b && A(document.body, "width", b + "px");
                A(this.j, "height", "100%", "width", "100%");
                this.wa(e);
                this.va = b;
                this.ta = c;
                this.ya = a;
                this.g = !1
            }
        }
    };
    var Ym = function (a, b) {
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
    Ja(Rm);
    var Xm = ed(document, "fullscreenElement"), Sm = document[ed(document, "exitFullscreen")], Um = function (a) {
        a.preventDefault();
        a.stopPropagation();
        return !1
    };
    var Zm = function (a, b) {
        window.google && google.doodle && (b && Va("google.doodle.cpDestroy", b), Va("google.doodle.cpInit", function () {
            b && b();
            a()
        }))
    };
    var $m = function (a, b, c, e) {
        this.g = 0;
        this.i = a;
        this.o = void 0 === c ? 3 : c;
        this.j = b;
        this.s = void 0 === e ? 2E3 : e
    };
    $m.prototype.fetch = function (a, b, c) {
        var e = this;
        b = void 0 === b ? function () {
        } : b;
        c = new rc(((void 0 === c ? 0 : c) ? "//www.google.com" : "") + "/async/" + this.i);
        uc(c, a);
        c = c.toString();
        this.g++;
        b(this.g);
        return an(this, c).catch(function (f) {
            return e.g < e.o ? e.j(e.s * Math.pow(2, e.g - 1)).finally(function () {
                return e.fetch(a, b)
            }) : Promise.reject(f)
        }).finally(function () {
            return e.g = 0
        })
    };
    var an = function (a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", b);
        return new Promise(function (e, f) {
            c.send();
            c.onreadystatechange = function () {
                if (4 == c.readyState) if (200 == c.status && c.responseText) a:{
                    var g = c.responseText;
                    g.startsWith(")]}'\n") && (g = g.substring(5));
                    var h = {};
                    try {
                        h = JSON.parse(g)
                    } catch (k) {
                        f(g);
                        break a
                    }
                    h.hasOwnProperty(a.i) && (h = h[a.i]);
                    h.hasOwnProperty("__err__") ? f(h.__err__) : e(h)
                } else f(c)
            }
        })
    };
    var bn = function (a, b, c) {
        $m.call(this, a, function (e) {
            return new Promise(function (f) {
                return setTimeout(f, e)
            })
        }, void 0 === b ? 3 : b, void 0 === c ? 2E3 : c)
    };
    p(bn, $m);
    var cn = function () {
    }, dn = "function" == typeof Uint8Array, en = [], fn = function (a, b) {
        if (b < a.o) {
            b += a.s;
            var c = a.g[b];
            return c === en ? a.g[b] = [] : c
        }
        if (a.i) return c = a.i[b], c === en ? a.i[b] = [] : c
    }, gn = function (a) {
        if (a.j) for (var b in a.j) {
            var c = a.j[b];
            if ("array" == Ka(c)) for (var e = 0; e < c.length; e++) c[e] && c[e].toArray(); else c && c.toArray()
        }
    };
    cn.prototype.toArray = function () {
        gn(this);
        return this.g
    };
    cn.prototype.toString = function () {
        gn(this);
        return this.g.toString()
    };
    cn.prototype.clone = function () {
        return new this.constructor(hn(this.toArray()))
    };
    var hn = function (a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var e = a[c];
                null != e && (b[c] = "object" == typeof e ? hn(e) : e)
            }
            return b
        }
        if (dn && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) e = a[c], null != e && (b[c] = "object" == typeof e ? hn(e) : e);
        return b
    };
    var jn = function (a) {
        this.j = null;
        a || (a = []);
        this.s = -1;
        this.g = a;
        a:{
            if (a = this.g.length) {
                --a;
                var b = this.g[a];
                if (!(null === b || "object" != typeof b || Array.isArray(b) || dn && b instanceof Uint8Array)) {
                    this.o = a - -1;
                    this.i = b;
                    break a
                }
            }
            this.o = Number.MAX_VALUE
        }
    };
    u(jn, cn);
    var kn = function () {
        var a = void 0 === a ? !1 : a;
        if (qd() && pd()) return Promise.resolve();
        var b = "_fmt:jspb,doodle:144865383,slot:0,type:3,cta:1";
        Wc() && (b += ",ntp:1");
        if (qd() || a) b += ",impr:0";
        a = new wc;
        a.add("async", b);
        return (new bn("ddllog", 1)).fetch(a, void 0, !1).then(function (c) {
            c = new jn(c);
            if (!qd() && fn(c, 2)) {
                var e = fn(c, 2);
                md = (new rc(e)).g.get("ved", "")
            }
            !pd() && fn(c, 3) && (od = fn(c, 3))
        }).catch(function () {
            return Promise.resolve()
        })
    };
    var ln = function (a) {
        if (Lc) {
            a = n(a);
            for (var b = a.next(); !b.done; b = a.next()) Tf(b.value, "touchmove", function (c) {
                1 !== c.scale && c.preventDefault()
            }, !1)
        }
    };
    var mn = function (a, b) {
        b = void 0 === b ? 50 : b;
        P.call(this);
        this.o = a;
        this.s = 0;
        this.j = this.g = !1;
        this.H = b
    };
    p(mn, P);
    mn.prototype.start = function () {
        this.s = Sa();
        var a = !this.j && !this.g;
        this.j = !1;
        this.g = !0;
        a && nn(this)
    };
    var nn = function (a) {
        a.j ? a.j = !1 : (requestAnimationFrame(function () {
            return nn(a)
        }), on(a))
    }, on = function (a) {
        var b = Sa(), c = b - a.s;
        0 > c || (c = a.H ? Math.min(c, a.H) : c, a.s = b, a.o(c))
    };
    mn.prototype.i = function () {
        this.g && (this.j = !0, this.g = !1);
        P.prototype.i.call(this)
    };
    var td = yd.Fa(), pn = kk.Fa(), qn = function () {
    };
    p(qn, ph);
    qn.prototype.g = function () {
        return yd.Fa()
    };
    var un = function (a, b) {
        P.call(this);
        var c = this;
        this.s = b;
        this.ka = a;
        this.Ya = !1;
        var e = document.createElement("style");
        e.innerText = ".ddle20-a{position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#hpcanvas{-webkit-transition:opacity 500ms;-o-transition:opacity 500ms;-moz-transition:opacity 500ms;transition:opacity 500ms}#hpcanvas.ddle20-b{opacity:0}.ddle20-c{z-index:-1}.ddle20-d{z-index:-2}.ddle20-e{z-index:101}.ddle20-f{left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0}.ddle20-g{position:absolute;top:0;opacity:0;width:100%;max-width:80%;min-width:50%;left:50%;-webkit-transform:translate(-50%,-120%);-moz-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);-o-transform:translate(-50%,-120%);transform:translate(-50%,-120%);margin:8px auto 0 auto;padding:12px;background:rgba(158,181,124,0.9);border-left:4px solid rgba(158,181,124,0.9);border-bottom:4px solid rgba(158,181,124,0.9);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:14pt;-webkit-transition:opacity 2000ms,-webkit-transform 500ms;transition:opacity 2000ms,-webkit-transform 500ms;-o-transition:opacity 2000ms,-o-transform 500ms;-moz-transition:opacity 2000ms,transform 500ms,-moz-transform 500ms;transition:opacity 2000ms,transform 500ms;transition:opacity 2000ms,transform 500ms,-webkit-transform 500ms,-moz-transform 500ms,-o-transform 500ms;-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;z-index:3}.ddle20-g.ddle20-h{opacity:1;-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);-o-transform:translate(-50%,0);transform:translate(-50%,0)}.ddle20-g .ddle20-i{height:40px;width:40px;position:absolute;top:50%;left:0;-webkit-transform:translate(-60%,-50%);-moz-transform:translate(-60%,-50%);-ms-transform:translate(-60%,-50%);-o-transform:translate(-60%,-50%);transform:translate(-60%,-50%);pointer-events:all;cursor:pointer}.ddle20-g .ddle20-i:hover{-webkit-transform:translate(-60%,-50%) scale(1.09);-moz-transform:translate(-60%,-50%) scale(1.09);-ms-transform:translate(-60%,-50%) scale(1.09);-o-transform:translate(-60%,-50%) scale(1.09);transform:translate(-60%,-50%) scale(1.09)}.ddle20-j{position:absolute;width:100%;height:100%;-webkit-box-shadow:inset 0 0 30px 5px #0076a3;-moz-box-shadow:inset 0 0 30px 5px #0076a3;box-shadow:inset 0 0 30px 5px #0076a3;opacity:0.25}.ddle20-k{font-family:\'Nunito Sans\',sans-serif}.ddle20-l{position:absolute;top:43%;left:50%;-webkit-transform:translate(-50%,-50%) scale(0);-moz-transform:translate(-50%,-50%) scale(0);-ms-transform:translate(-50%,-50%) scale(0);-o-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0;font-size:14pt;pointer-events:all;z-index:3;-webkit-transition:opacity 100ms,-webkit-transform 500ms;transition:opacity 100ms,-webkit-transform 500ms;-o-transition:opacity 100ms,-o-transform 500ms;-moz-transition:opacity 100ms,transform 500ms,-moz-transform 500ms;transition:opacity 100ms,transform 500ms;transition:opacity 100ms,transform 500ms,-webkit-transform 500ms,-moz-transform 500ms,-o-transform 500ms;text-align:center}.ddle20-m{position:relative;top:0;left:0;width:400px;background:rgba(124,199,209,0.9);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border-bottom:4px solid rgba(124,199,209,0.9);border-left:4px solid rgba(124,199,209,0.9)}.ddle20-l.ddle20-h{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);-moz-transform:translate(-50%,-50%) scale(1);-ms-transform:translate(-50%,-50%) scale(1);-o-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.ddle20-n{margin:auto;width:90%}.ddle20-m .ddle20-e{height:40px;width:40px;position:absolute;top:0;left:0;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:all;cursor:pointer;-webkit-transition:-webkit-transform 100ms;transition:-webkit-transform 100ms;-o-transition:-o-transform 100ms;-moz-transition:transform 100ms, -moz-transform 100ms;transition:transform 100ms;transition:transform 100ms, -webkit-transform 100ms, -moz-transform 100ms, -o-transform 100ms}.ddle20-m .ddle20-e:hover{-webkit-transform:translate(-50%,-50%) scale(1.09);-moz-transform:translate(-50%,-50%) scale(1.09);-ms-transform:translate(-50%,-50%) scale(1.09);-o-transform:translate(-50%,-50%) scale(1.09);transform:translate(-50%,-50%) scale(1.09)}.ddle20-o{position:absolute;top:100%;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);width:80%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-moz-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:8px}.ddle20-o .ddle20-i{height:32px;width:32px}.ddle20-o .ddle20-i.ddle20-p{height:40px;width:40px}.ddle20-o .ddle20-q{height:40px;width:40px;background:rgba(124,199,209,0.9);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border-bottom:2px solid rgba(130,186,192,0.9);border-left:2px solid rgba(130,186,192,0.9);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ddle20-o .ddle20-q,.ddle20-o .ddle20-i.ddle20-p{-webkit-transition:-webkit-transform 100ms;transition:-webkit-transform 100ms;-o-transition:-o-transform 100ms;-moz-transition:transform 100ms, -moz-transform 100ms;transition:transform 100ms;transition:transform 100ms, -webkit-transform 100ms, -moz-transform 100ms, -o-transform 100ms;cursor:pointer}.ddle20-o .ddle20-i.ddle20-p:hover,.ddle20-o .ddle20-q:hover{-webkit-transform:scale(1.09);-moz-transform:scale(1.09);-ms-transform:scale(1.09);-o-transform:scale(1.09);transform:scale(1.09)}.ddle20-r{background:#7cc7d1;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:6px;opacity:0;left:50%;position:relative;height:24px;width:300px;-webkit-transform:translate(-50%,43px);-moz-transform:translate(-50%,43px);-ms-transform:translate(-50%,43px);-o-transform:translate(-50%,43px);transform:translate(-50%,43px);font-size:14px;-webkit-transition:opacity 200ms;-o-transition:opacity 200ms;-moz-transition:opacity 200ms;transition:opacity 200ms}.ddle20-r.ddle20-h{opacity:0.9}.ddle20-r .ddle20-s{margin-right:12px;display:inline}.ddle20-t .ddle20-r .ddle20-s{display:inline}.ddle20-m .ddle20-u{height:80px;width:80px;margin-bottom:8px;margin-top:8px;display:inline-block}.ddle20-v{height:96px;margin-bottom:16px}.ddle20-w{display:inline-block;vertical-align:middle}.ddle20-x{display:inline-block;height:100%;width:0;vertical-align:middle}.ddle20-m .ddle20-y{height:46px;width:160px;pointer-events:all;line-height:42px;margin-bottom:12px;display:inline-block;cursor:pointer;-webkit-transition:-webkit-transform 100ms;transition:-webkit-transform 100ms;-o-transition:-o-transform 100ms;-moz-transition:transform 100ms, -moz-transform 100ms;transition:transform 100ms;transition:transform 100ms, -webkit-transform 100ms, -moz-transform 100ms, -o-transform 100ms}.ddle20-m .ddle20-y:hover{-webkit-transform:scale(1.09);-moz-transform:scale(1.09);-ms-transform:scale(1.09);-o-transform:scale(1.09);transform:scale(1.09)}.ddle20-z{position:absolute;left:0;top:0;margin:5px;cursor:pointer;pointer-events:all;font-size:20pt;-webkit-transition:opacity 100ms;-o-transition:opacity 100ms;-moz-transition:opacity 100ms;transition:opacity 100ms}.ddle20-z:hover{opacity:0.65}.ddle20-A,.ddle20-B{position:absolute;bottom:8px;height:110px;width:100%;font-size:18.4pt;opacity:0;text-align:center;z-index:4}.ddle20-B{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms}.ddle20-A{-webkit-transition:opacity 400ms;-o-transition:opacity 400ms;-moz-transition:opacity 400ms;transition:opacity 400ms}.ddle20-C{top:50%;left:50%;width:80%;position:absolute;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ddle20-A.ddle20-h,.ddle20-B.ddle20-h{opacity:1}.ddle20-D{position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;opacity:0;z-index:100;-webkit-transition:400ms opacity;-o-transition:400ms opacity;-moz-transition:400ms opacity;transition:400ms opacity}.ddle20-D.ddle20-h{opacity:1}@-webkit-keyframes cta-animation{0%{-webkit-transform:scale(1.36);transform:scale(1.36)}50%{-webkit-transform:scale(1.6);transform:scale(1.6)}100%{-webkit-transform:scale(1.36);transform:scale(1.36)}}@-moz-keyframes cta-animation{0%{-moz-transform:scale(1.36);transform:scale(1.36)}50%{-moz-transform:scale(1.6);transform:scale(1.6)}100%{-moz-transform:scale(1.36);transform:scale(1.36)}}@-o-keyframes cta-animation{0%{-o-transform:scale(1.36);transform:scale(1.36)}50%{-o-transform:scale(1.6);transform:scale(1.6)}100%{-o-transform:scale(1.36);transform:scale(1.36)}}@keyframes cta-animation{0%{-webkit-transform:scale(1.36);-moz-transform:scale(1.36);-o-transform:scale(1.36);transform:scale(1.36)}50%{-webkit-transform:scale(1.6);-moz-transform:scale(1.6);-o-transform:scale(1.6);transform:scale(1.6)}100%{-webkit-transform:scale(1.36);-moz-transform:scale(1.36);-o-transform:scale(1.36);transform:scale(1.36)}}.ddle20-E{position:absolute;top:178px;left:343px;-webkit-transform:scale(1.36);-moz-transform:scale(1.36);-ms-transform:scale(1.36);-o-transform:scale(1.36);transform:scale(1.36);opacity:0;-webkit-transition:opacity 500ms;-o-transition:opacity 500ms;-moz-transition:opacity 500ms;transition:opacity 500ms;pointer-events:all}.ddle20-F{-webkit-animation:cta-animation 1.5s infinite;-moz-animation:cta-animation 1.5s infinite;-o-animation:cta-animation 1.5s infinite;animation:cta-animation 1.5s infinite}.ddle20-E.ddle20-h{opacity:1}.ddle20-G{pointer-events:all;cursor:pointer}";
        a.appendChild(e);
        this.Ka = new vl(6E4, function () {
            var f = c.H;
            f.g && (f.g = !1, f.j = !0);
            f = V.Fa();
            f.j && f.j.gain.setValueAtTime(0, f.g.currentTime);
            f.v = !0
        }, function () {
            return c.resume()
        });
        hf(this, Ra(jf, this.Ka));
        this.o = new Dl(b, this.Ka);
        this.U = new Vk(this);
        hf(this, Ra(jf, this.U));
        this.ha = Rm.Fa();
        Vm(this.ha, a, [b], this.U, function (f) {
            Cl(c.o, f)
        });
        this.va = Ym(b.width,
            b.height);
        a.appendChild(this.va);
        Wm(this.ha, this.va);
        this.g = document.createElement("div");
        this.g.className = "ddle20-f";
        this.g.style.width = "768px";
        this.g.style.height = "432px";
        this.va.appendChild(this.g);
        this.Ra = function () {
            var f = c.va.offsetHeight / 432;
            c.g.style.transform = "scale(" + f + "," + f + ") translate3d(-50%,-50%,0)";
            Cl(c.o)
        };
        this.Ra();
        this.Za = new Am(this.g, function () {
            return c.ha.close()
        });
        this.Za.g.classList.add("ddle20-e");
        this.Ja = new Pm(a, this.o);
        hf(this, Ra(jf, this.Ja));
        Fl(this.o, function (f) {
            "mousedown" ==
            f && (Jl(c.o), rn(c, function () {
                return sn(c)
            }))
        });
        this.H = new mn(function (f) {
            c.Ra();
            c.Ja.update(f);
            c.ha.update();
            Ge.width = c.Ga.canvas.width;
            Ge.height = c.Ga.canvas.height;
            c.j.width = c.s.width;
            c.j.height = c.s.height;
            c.ta && c.ta.g.resize(c.j.width, c.j.height);
            c.Za.g.style.display = document[Xm] ? "block" : "none";
            var g = Bm.Fa(), h = c.Ga, k = c.wa;
            Dm(g, f);
            Em(g, k);
            h.setTransform(1, 0, 0, 1, 0, 0);
            h.clearRect(0, 0, h.canvas.width, h.canvas.height);
            f = n(g.g);
            for (g = f.next(); !g.done; g = f.next()) g = g.value, k = h, g.i && (k.globalAlpha = g.Ud, k.setTransform(g.i.g,
                g.i.j, g.i.o, g.i.i, g.i.s, g.i.v), k.globalCompositeOperation = g.bB, g.Wa(k), k.globalCompositeOperation = "source-over")
        });
        this.ta = null;
        this.j = document.createElement("canvas");
        this.j.classList.add("ddle20-a");
        this.j.classList.add("ddle20-c");
        this.Ga = this.j.getContext("2d");
        this.wa = new Se;
        Ve(this.wa, this.j);
        Cm().addChild(this.wa);
        this.g.appendChild(this.j);
        this.Pa = new fk(this.g);
        Cm().addChild(this.Pa);
        this.ya = null;
        tn(this)
    };
    p(un, P);
    var rn = function (a, b) {
        Da(function (c) {
            bk() || a.H.start();
            a.Ya = !0;
            ck() ? Qm(a.Ja, b) : b();
            c.g = 0
        })
    };
    un.prototype.resume = function () {
        var a = this;
        this.Ya || bk() ? (this.ya && (ag(this.ya), this.ya = null), this.H.start()) : (this.H.o(50), this.ya = Tf(window, "resize", function () {
            a.H.o(50)
        }));
        ai()
    };
    un.prototype.start = function () {
        this.ka.classList.add("fpdoodleready");
        bk() ? this.H.start() : this.H.o(50)
    };
    var sn = function (a) {
        var b, c, e, f, g;
        return Da(function (h) {
            switch (h.g) {
                case 1:
                    return r(h, gk(a.Pa), 2);
                case 2:
                    return Qk(0), Pk(0), a.ka.title = "", a.s.style.background = "#fff", r(h, vn(a), 3);
                case 3:
                    return b = h.s, c = xm(), e = Promise.all([c, Promise.all([ud([2, 3, 4, 5, 6, 12, 13, 14, 0, 1, 7, 11]), V.i.Wd.preload(), V.i.$.preload()])]), f = !1, e.then(function () {
                        return f = !0
                    }), r(h, wn(a), 4);
                case 4:
                    if (f) {
                        h.g = 5;
                        break
                    }
                    di(V.g.Rb, .001);
                    V.g.Rb.play(0, !0);
                    setTimeout(function () {
                        ei(V.g.Rb, 1, 1)
                    }, 10);
                    return r(h, xn(a, e), 6);
                case 6:
                    ei(V.g.Rb, .01, .9);
                case 5:
                    yn(a), g = new Nl(b, a.wa, a.j, a.ka, a.g, a.o), Cm().addChild(g), h.g = 0
            }
        })
    }, yn = function (a) {
        a.s.style.background = "#efefa5";
        a.ta = new wm(a.s.width, a.s.height);
        var b = a.ta.g.view;
        b.classList.add("ddle20-a");
        b.classList.add("ddle20-d");
        Cm().addChild(a.ta);
        a.g.appendChild(b)
    }, tn = function (a) {
        ln([document, a.ka, a.g, a.s]);
        Xk(a.U, a.s, ["mousedown", "mouseout", "touchstart"], function (b) {
            return a.o.handleEvent(b)
        }, !0);
        Xk(a.U, a.g, ["mousedown", "touchstart"], function (b) {
            return a.o.handleEvent(b)
        }, !0);
        Xk(a.U, document, ["mouseup",
            "mousemove", "touchend", "touchmove", "contextmenu"], function (b) {
            return a.o.handleEvent(b)
        }, !0);
        Xk(a.U, a.ka, ["mousedown", "touchstart"], function () {
            Tm(a.ha);
            zl(a.Ka)
        }, !0)
    }, vn = function (a) {
        var b, c, e;
        return Da(function (f) {
            return 1 == f.g ? (b = kl(), b.then(function (g) {
                return c = g
            }), e = Promise.all([ud([9, 10]), V.i.hc.preload(), b]), r(f, xn(a, e), 2)) : f.return(c)
        })
    }, xn = function (a, b) {
        var c, e;
        return Da(function (f) {
            switch (f.g) {
                case 1:
                    return c = new ym(a.g), Cm().addChild(c), r(f, c.play(), 2);
                case 2:
                    return e = new fm, Cm().addChild(e),
                        r(f, Promise.all([b, e.start()]), 3);
                case 3:
                    return r(f, c.play(), 4);
                case 4:
                    zm(c), e.Da(), f.g = 0
            }
        })
    }, wn = function (a) {
        var b, c;
        return Da(function (e) {
            switch (e.g) {
                case 1:
                    return b = new ym(a.g), Cm().addChild(b), r(e, b.play(), 2);
                case 2:
                    return c = new cm(a.g), Cm().addChild(c), r(e, c.play(), 3);
                case 3:
                    return r(e, b.play(500), 4);
                case 4:
                    zm(b), c.o.parentElement.removeChild(c.o), c.v.parentElement.removeChild(c.v), c.Da(), e.g = 0
            }
        })
    }, zn = null;
    (function (a, b) {
        Zm(function () {
            a()
        }, b);
        a()
    })(function () {
        var a = document.getElementById("hplogo"), b = document.getElementById("hpcanvas");
        if (a && b) {
            b.width = 1536;
            b.height = 864;
            Lk = Sa();
            Nk.d = "144865383";
            !Mk && ek() && (Mk = !0, Pk(10));
            Zh(a);
            var c = [ad(), kn(), Sk.Fa().load(id, jd, Wa, "img/earth-day-2020/"), td.preload(8), pn.preload(0)];
            Promise.all(c).then(function () {
                qh = new qn;
                zn = new un(a, b);
                zn.start()
            })
        }
    }, function () {
        var a = yd.Fa();
        a = n(a.g);
        for (var b = a.next(); !b.done; b = a.next()) b.value.s = [];
        jf(zn)
    });
}).call(this);
