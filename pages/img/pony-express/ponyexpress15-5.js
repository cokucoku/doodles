(function () {
    for (var d, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }, ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ha = ["Object", "is"], ia = 0; ia < ha.length - 1; ia++) {
        var ja = ha[ia];
        ja in ba || (ba[ja] = {});
        ba = ba[ja]
    }
    var ka = ha[ha.length - 1], la = ba[ka], ma = la ? la : function (a, b) {
        return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b
    };
    ma != la && null != ma && aa(ba, ka, {configurable: !0, writable: !0, value: ma});
    var l = this, p = function (a) {
            return void 0 !== a
        }, q = function (a) {
            return "string" == typeof a
        }, na = function (a) {
            return "number" == typeof a
        }, oa = function () {
        }, pa = function (a) {
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
        }, qa = function (a) {
            return "array" == pa(a)
        }, ra = function (a) {
            return "function" == pa(a)
        }, sa = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }, ta = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, ua = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var e =
                    Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, e);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }, r = function (a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = ta : r = ua;
            return r.apply(null, arguments)
        }, va = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        wa = Date.now || function () {
            return +new Date
        }, xa = function (a) {
            a = a.split(".");
            var b = l;
            a[0] in b || !b.execScript || b.execScript("var " + a[0]);
            for (var c; a.length && (c = a.shift());) !a.length && p(!0) ? b[c] = !0 : b[c] && b[c] !== Object.prototype[c] ? b = b[c] : b = b[c] = {}
        }, t = function (a, b) {
            function c() {
            }

            c.prototype = b.prototype;
            a.lb = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ke = function (a, c, g) {
                for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
                return b.prototype[c].apply(a, e)
            }
        };
    var ya = function (a, b) {
        window.google && google.doodle && (b && (google.doodle.cpDestroy = b), google.doodle.cpInit = function () {
            b && b();
            a()
        })
    }, za = function (a) {
        !window.google || google.doodle && google.doodle.jesr || (xa("google.doodle.jesr"), google.raas && google.raas("doodle", {
            init: function () {
                google.doodle.jesrd && (a(), google.doodle.jesrd = !1)
            }
        }))
    };
    var u = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, u); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    t(u, Error);
    u.prototype.name = "CustomError";
    var Aa = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Ba = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var e = a.length, f = q(a) ? a.split("") : a, g = 0; g < e; g++) g in f && b.call(c, f[g], g, a)
    }, Ca = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c =
            a.length, e = q(a) ? a.split("") : a, f = 0; f < c; f++) if (f in e && b.call(void 0, e[f], f, a)) return !0;
        return !1
    }, Da = function (a) {
        return Array.prototype.concat.apply([], arguments)
    }, Ea = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
            return c
        }
        return []
    };
    var Fa = function () {
    };
    Fa.prototype.xe = function () {
        return !0
    };
    var v = function () {
        this.U = this.U;
        this.H = this.H
    };
    v.prototype.U = !1;
    v.prototype.xd = function () {
        this.U || (this.U = !0, this.v())
    };
    var Ga = function (a, b) {
        a.U ? p(void 0) ? b.call(void 0) : b() : (a.H || (a.H = []), a.H.push(p(void 0) ? r(b, void 0) : b))
    };
    v.prototype.v = function () {
        if (this.H) for (; this.H.length;) this.H.shift()()
    };
    var Ha = function (a) {
        a && "function" == typeof a.xd && a.xd()
    };
    var Ia = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }, x = function (a, b) {
        return -1 != a.indexOf(b)
    }, Ja = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ka = "StopIteration" in l ? l.StopIteration : {message: "StopIteration", stack: ""}, La = function () {
    };
    La.prototype.next = function () {
        throw Ka;
    };
    La.prototype.T = function () {
        return this
    };
    var Ma = function (a, b, c) {
            for (var e in a) b.call(c, a[e], e, a)
        }, Na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Oa = function (a, b) {
            for (var c, e, f = 1; f < arguments.length; f++) {
                e = arguments[f];
                for (c in e) a[c] = e[c];
                for (var g = 0; g < Na.length; g++) c = Na[g], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
            }
        };
    var y = function (a, b) {
        this.v = {};
        this.s = [];
        this.R = this.H = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("a");
            for (var e = 0; e < c; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (a) {
            if (a instanceof y) {
                var f = a.Ib();
                e = a.Jb()
            } else {
                c = [];
                var g = 0;
                for (f in a) c[g++] = f;
                f = c;
                c = [];
                g = 0;
                for (e in a) c[g++] = a[e];
                e = c
            }
            for (c = 0; c < f.length; c++) this.set(f[c], e[c])
        }
    };
    y.prototype.Jb = function () {
        Pa(this);
        for (var a = [], b = 0; b < this.s.length; b++) a.push(this.v[this.s[b]]);
        return a
    };
    y.prototype.Ib = function () {
        Pa(this);
        return this.s.concat()
    };
    var Pa = function (a) {
        if (a.H != a.s.length) {
            for (var b = 0, c = 0; b < a.s.length;) {
                var e = a.s[b];
                Qa(a.v, e) && (a.s[c++] = e);
                b++
            }
            a.s.length = c
        }
        if (a.H != a.s.length) {
            var f = {};
            for (c = b = 0; b < a.s.length;) e = a.s[b], Qa(f, e) || (a.s[c++] = e, f[e] = 1), b++;
            a.s.length = c
        }
    };
    y.prototype.get = function (a, b) {
        return Qa(this.v, a) ? this.v[a] : b
    };
    y.prototype.set = function (a, b) {
        Qa(this.v, a) || (this.H++, this.s.push(a), this.R++);
        this.v[a] = b
    };
    y.prototype.forEach = function (a, b) {
        for (var c = this.Ib(), e = 0; e < c.length; e++) {
            var f = c[e], g = this.get(f);
            a.call(b, g, f, this)
        }
    };
    y.prototype.T = function (a) {
        Pa(this);
        var b = 0, c = this.R, e = this, f = new La;
        f.next = function () {
            if (c != e.R) throw Error("b");
            if (b >= e.s.length) throw Ka;
            var f = e.s[b++];
            return a ? f : e.v[f]
        };
        return f
    };
    var Qa = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ra = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Sa = function (a, b) {
            if (a) for (var c = a.split("&"), e = 0; e < c.length; e++) {
                var f = c[e].indexOf("="), g = null;
                if (0 <= f) {
                    var h = c[e].substring(0, f);
                    g = c[e].substring(f + 1)
                } else h = c[e];
                b(h, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
            }
        }, Va = function (a, b) {
            var c;
            if (c = "ds" + (null != b ? "=" + encodeURIComponent(String(b)) : "")) {
                var e = a.indexOf("#");
                0 > e && (e = a.length);
                var f = a.indexOf("?");
                if (0 > f || f > e) {
                    f = e;
                    var g = ""
                } else g = a.substring(f + 1, e);
                e = [a.substr(0, f), g, a.substr(e)];
                f = e[1];
                e[1] = c ? f ? f + "&" + c : c : f;
                c = e[0] + (e[1] ? "?" + e[1] : "") + e[2]
            } else c = a;
            return c
        }, Wa = function (a, b, c) {
            for (; 0 <= (b = a.indexOf("ds", b)) && b < c;) {
                var e = a.charCodeAt(b - 1);
                if (38 == e || 63 == e) if (e = a.charCodeAt(b + 2), !e || 61 == e || 38 == e || 35 == e) return b;
                b += 3
            }
            return -1
        }, Xa = /#|$/, Ya = /[?&]($|#)/, Za = function (a) {
            for (var b = a.search(Xa), c = 0, e, f = []; 0 <= (e = Wa(a, c, b));) f.push(a.substring(c, e)), c = Math.min(a.indexOf("&", e) + 1 || b, b);
            f.push(a.substr(c));
            return f.join("").replace(Ya,
                "$1")
        };
    var z = function (a, b) {
        this.R = this.$ = this.H = "";
        this.V = null;
        this.U = this.T = "";
        this.s = !1;
        if (a instanceof z) {
            this.s = p(b) ? b : a.s;
            $a(this, a.H);
            this.$ = a.$;
            this.R = a.R;
            ab(this, a.V);
            this.T = a.T;
            var c = a.v;
            var e = new A;
            e.H = c.H;
            c.s && (e.s = new y(c.s), e.v = c.v);
            bb(this, e);
            this.U = a.U
        } else a && (c = String(a).match(Ra)) ? (this.s = !!b, $a(this, c[1] || "", !0), this.$ = cb(c[2] || ""), this.R = cb(c[3] || "", !0), ab(this, c[4]), this.T = cb(c[5] || "", !0), bb(this, c[6] || "", !0), this.U = cb(c[7] || "")) : (this.s = !!b, this.v = new A(null, this.s))
    };
    z.prototype.toString = function () {
        var a = [], b = this.H;
        b && a.push(db(b, eb, !0), ":");
        var c = this.R;
        if (c || "file" == b) a.push("//"), (b = this.$) && a.push(db(b, eb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.V, null != c && a.push(":", String(c));
        if (c = this.T) this.R && "/" != c.charAt(0) && a.push("/"), a.push(db(c, "/" == c.charAt(0) ? fb : gb, !0));
        (c = this.v.toString()) && a.push("?", c);
        (c = this.U) && a.push("#", db(c, hb));
        return a.join("")
    };
    var $a = function (a, b, c) {
        a.H = c ? cb(b, !0) : b;
        a.H && (a.H = a.H.replace(/:$/, ""))
    }, ab = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("c`" + b);
            a.V = b
        } else a.V = null
    }, bb = function (a, b, c) {
        b instanceof A ? (a.v = b, ib(a.v, a.s)) : (c || (b = db(b, jb)), a.v = new A(b, a.s))
    }, cb = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, db = function (a, b, c) {
        return q(a) ? (a = encodeURI(a).replace(b, kb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, kb = function (a) {
        a = a.charCodeAt(0);
        return "%" +
            (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, eb = /[#\/\?@]/g, gb = /[#\?:]/g, fb = /[#\?]/g, jb = /[#\?@]/g, hb = /#/g, A = function (a, b) {
        this.v = this.s = null;
        this.H = a || null;
        this.R = !!b
    }, lb = function (a) {
        a.s || (a.s = new y, a.v = 0, a.H && Sa(a.H, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    };
    A.prototype.add = function (a, b) {
        lb(this);
        this.H = null;
        a = mb(this, a);
        var c = this.s.get(a);
        c || this.s.set(a, c = []);
        c.push(b);
        this.v += 1;
        return this
    };
    var nb = function (a, b) {
        lb(a);
        b = mb(a, b);
        if (Qa(a.s.v, b)) {
            a.H = null;
            a.v -= a.s.get(b).length;
            var c = a.s, e = b;
            Qa(c.v, e) && (delete c.v[e], c.H--, c.R++, c.s.length > 2 * c.H && Pa(c))
        }
    }, ob = function (a, b) {
        lb(a);
        b = mb(a, b);
        return Qa(a.s.v, b)
    };
    d = A.prototype;
    d.forEach = function (a, b) {
        lb(this);
        this.s.forEach(function (c, e) {
            Ba(c, function (c) {
                a.call(b, c, e, this)
            }, this)
        }, this)
    };
    d.Ib = function () {
        lb(this);
        for (var a = this.s.Jb(), b = this.s.Ib(), c = [], e = 0; e < b.length; e++) for (var f = a[e], g = 0; g < f.length; g++) c.push(b[e]);
        return c
    };
    d.Jb = function (a) {
        lb(this);
        var b = [];
        if (q(a)) ob(this, a) && (b = Da(b, this.s.get(mb(this, a)))); else {
            a = this.s.Jb();
            for (var c = 0; c < a.length; c++) b = Da(b, a[c])
        }
        return b
    };
    d.set = function (a, b) {
        lb(this);
        this.H = null;
        a = mb(this, a);
        ob(this, a) && (this.v -= this.s.get(a).length);
        this.s.set(a, [b]);
        this.v += 1;
        return this
    };
    d.get = function (a, b) {
        var c = a ? this.Jb(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    d.toString = function () {
        if (this.H) return this.H;
        if (!this.s) return "";
        for (var a = [], b = this.s.Ib(), c = 0; c < b.length; c++) {
            var e = b[c], f = encodeURIComponent(String(e));
            e = this.Jb(e);
            for (var g = 0; g < e.length; g++) {
                var h = f;
                "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
                a.push(h)
            }
        }
        return this.H = a.join("&")
    };
    var mb = function (a, b) {
        var c = String(b);
        a.R && (c = c.toLowerCase());
        return c
    }, ib = function (a, b) {
        b && !a.R && (lb(a), a.H = null, a.s.forEach(function (a, b) {
            var c = b.toLowerCase();
            b != c && (nb(this, b), nb(this, c), 0 < a.length && (this.H = null, this.s.set(mb(this, c), Ea(a)), this.v += a.length))
        }, a));
        a.R = b
    };
    var rb = function (a) {
        var b = new Image, c = pb, e = "";
        b.onerror = b.onload = b.onabort = function () {
            delete qb[c]
        };
        qb[c] = b;
        -1 != a.search("&ei=") || (e = "&ei=");
        a = "/gen_204?atyp=i&ct=doodle&cad=" + a + e + "&zx=" + wa();
        /^http:/i.test(a) && "https:" == window.location.protocol ? delete qb[c] : (b.src = a, pb = c + 1)
    }, qb = [], pb = 0;
    var sb, tb, B = navigator.userAgent, ub = window.location.href, vb = x(B, "iPad") || x(B, "iPhone") || x(B, "iPod"),
        wb = x(B.toLowerCase(), "gsa"), xb = vb && wb, yb = wb && !vb,
        zb = vb || x(B, "Android") || x(B, "Mobile") || x(B, "Silk") || x(B, "UCBrowser") || x(B, "UCWEB"),
        Ab = x(B, "Chrome") && x(B, "Mobile") && x(B, "wv"), Bb = 0 <= B.indexOf("MSIE"),
        Cb = Bb && 0 <= B.indexOf("MSIE 8."), Db = x(ub, "/pages/") && x(ub, ".html"), Eb = function () {
            return !!document.getElementById("fkbx") || 0 <= ub.indexOf("ntp=1")
        }, Fb = function () {
            return 0 <= ub.indexOf("fpdoodle=1") && !!document.getElementById("fpdoodle")
        },
        Hb = function () {
            var a = document.createElement("div");
            Gb(a, "position", "absolute");
            Bb && !Cb && Gb(a, "background-color", "rgba(255,255,255,.01)");
            return a
        }, Gb = function (a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var e = arguments[c], f = arguments[c + 1], g = a.style;
                g && e in g ? g[e] = f : e in a ? a[e] = f : Bb && g && "opacity" == e && (a.zoom = 1, e = (g.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(f)) || (e += "alpha(opacity=" + 100 * f + ")"), g.filter = e)
            }
        }, Ib = function (a, b) {
            a = a || window.event;
            if (!a) return [0, 0];
            var c = b || a.targetTouches &&
                a.targetTouches[0] || a.changedTouches && a.changedTouches[0];
            return c && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== a.clientX ? [a.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), a.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== a.pageX ? [a.pageX, a.pageY] : [0, 0]
        }, Jb = ["", "moz", "ms", "o", "webkit"], Kb = function (a, b) {
            if (!a) return null;
            for (var c = 0; c < Jb.length; c++) {
                var e = Jb[c], f = b;
                0 < e.length && (f = b.charAt(0).toUpperCase() + b.substr(1));
                e += f;
                if ("undefined" != typeof a[e]) return e
            }
            return null
        }, Lb = function (a) {
            var b = google.doodle ? google.doodle.url : "";
            if (b) if (a = a && !xb, google.nav && google.nav.go) {
                var c = b;
                if (0 == b.indexOf("/search")) {
                    c = new z(window.location);
                    c.T = "/search";
                    b = (b instanceof z ? new z(b) : new z(b, void 0)).v;
                    for (var e = b.Ib(), f = 0; f < e.length; f++) {
                        var g = e[f], h = c, k = g;
                        g = b.get(g);
                        h.v.set(k, g)
                    }
                    c = c.toString()
                }
                a ? window.open(c) : google.nav.go(c)
            } else a ? window.open(b) : window.parent ? window.parent.location.assign(b) : window.location.assign(b)
        },
        Mb = function (a, b) {
            var c = window.google ? window.google.doodle : null;
            return c && void 0 != c[a] ? c[a] : b
        }, Nb = Mb("alt", ""), Ob = function () {
            for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], b = 0; b < a.length; b++) {
                var c = window[a[b]];
                if (c) return function (a, b, e) {
                    return c(function (b) {
                        return a.call(e, b)
                    }, b)
                }
            }
            var e = 0, f = 33, g = 50;
            return function (a, b, c) {
                b && 0 > --g && (1.25 < b / f ? (e = 0, f = Math.min(66, ++f)) : 10 < ++e && (e = 0, f = Math.max(17, --f)));
                window.setTimeout(function (b) {
                    a.call(c,
                        b)
                }, f)
            }
        }, Pb = function (a, b, c) {
            Pb = Ob();
            return Pb(a, b, c)
        }, Qb = function (a, b, c) {
            window.google && window.google.log ? (b ? (sb || (b = document.getElementById("hplogoved")) && (sb = b.getAttribute("data-ved")), (b = sb) && (a += "&ved=" + b)) : c && (tb || (b = document.getElementById("hplogoshareved")) && (tb = b.getAttribute("data-ved")), (b = tb) && (a += "&ved=" + b)), window.google.log("doodle", a)) : rb(a)
        };
    var Ub = function (a, b, c) {
        v.call(this);
        this.wa = a;
        this.Ga = b;
        this.Bb = c;
        this.ra = wa();
        this.ya = Kb(document, "hidden");
        this.R = (this.ha = Kb(document, "visibilityState")) ? this.ha.replace(/state$/i, "change").toLowerCase() : null;
        this.T = Rb(this);
        this.V = !1;
        this.$ = this.T;
        Sb(this);
        Tb(this)
    };
    t(Ub, v);
    var Sb = function (a) {
        a.R ? Vb(a) : yb && Wb(a, function () {
            Vb(a)
        })
    }, Vb = function (a) {
        a.s = function () {
            a.T = Rb(a);
            a.T ? Xb(a) : Yb(a)
        };
        var b = window.agsa_ext;
        a.R ? document.addEventListener(a.R, a.s, !1) : b && b.registerPageVisibilityListener && (google.doodle || (google.doodle = {}), google.doodle.pvc = function () {
            a.s && a.s()
        }, b.registerPageVisibilityListener("google.doodle.pvc();"))
    }, Wb = function (a, b) {
        window.agsa_ext ? b() : a.Da = window.setTimeout(function () {
            Sb(a)
        }, 100)
    };
    Ub.prototype.v = function () {
        window.clearTimeout(this.ka);
        window.clearTimeout(this.Da);
        this.s && (this.R && document.removeEventListener ? document.removeEventListener(this.R, this.s, !1) : window.agsa_ext && window.agsa_ext.registerPageVisibilityListener && (this.s = null));
        Ub.lb.v.call(this)
    };
    var Rb = function (a) {
        if (!a.ya && !a.ha && window.agsa_ext && window.agsa_ext.getPageVisibility) return "hidden" == window.agsa_ext.getPageVisibility();
        var b = document[a.ha];
        return document[a.ya] || "hidden" == b
    }, Xb = function (a) {
        var b = a.T || a.V;
        a.$ && !b ? (a.$ = !1, a.Bb(), Tb(a)) : !a.$ && b && (a.$ = !0, a.Ga())
    }, Tb = function (a) {
        a.ka && window.clearTimeout(a.ka);
        var b = Math.max(100, a.wa - Zb(a));
        a.ka = window.setTimeout(function () {
            a.ka = null;
            a.V = Zb(a) >= a.wa;
            a.V || Tb(a);
            Xb(a)
        }, b)
    }, Zb = function (a) {
        return wa() - a.ra
    }, Yb = function (a) {
        a.ra = wa();
        a.V =
            !1;
        Xb(a)
    };
    var ac = function () {
        var a = C, b = $b;
        this.v = C;
        this.V = a;
        this.ka = b || null;
        this.R = [];
        this.s = null;
        this.wa = this.ra = 0;
        this.ya = this.T = !1;
        this.U = [];
        this.Da = this.v.width / this.v.clientWidth;
        this.$ = this.v.height / this.v.clientHeight;
        this.Ga = [this.v];
        this.ha = !1
    };
    (function () {
        var a = new Fa;
        a.contains = function () {
            return !0
        };
        a.xe = function () {
            return !1
        };
        return a
    })();
    var cc = function (a, b, c) {
        a.R.push(new bc(b, c))
    };
    ac.prototype.handleEvent = function (a) {
        var b = Ib(a.s, void 0);
        var c = this.v;
        var e = 0, f = 0;
        if (c) {
            do e += c.offsetLeft, f += c.offsetTop; while (c = c.offsetParent)
        }
        c = [e, f];
        b = [b[0] - c[0], b[1] - c[1]];
        b[0] *= this.Da;
        b[1] *= this.$;
        this.ha && (c = b[0], b[0] = b[1], b[1] = 0 - c);
        dc(this, a, b[0], b[1])
    };
    var dc = function (a, b, c, e) {
        a.ka && Yb(a.ka);
        a.ra = c;
        a.wa = e;
        c = b.type;
        if (!a.ya || 0 != c.indexOf("mouse")) {
            e = {touchstart: "mousedown", touchend: "mouseup", touchmove: "mousemove"};
            c in e && (a.ya = !0, c = e[c]);
            "mousedown" == c && (b.preventDefault(), a.V && a.V.focus());
            b = c;
            c = a.ra;
            e = a.wa;
            if (!a.T && "mousedown" == b) {
                a.T = !0;
                for (var f = 0; f < a.U.length; f++) a.U[f]()
            }
            if ("mousedown" == b) {
                if (!a.H) for (f = 0; f < a.R.length; f++) {
                    var g = a.R[f];
                    if (g.v.contains(c, e)) {
                        a.H = g;
                        g.s("mousedown", c, e);
                        break
                    }
                }
            } else if ("mouseup" == b) a.H ? (a.H.s("mouseup", c, e),
                a.H = null) : a.s && a.s.s("mouseup", c, e); else if ("mousemove" == b || "areamove" == b) {
                var h = null;
                for (f = 0; f < a.R.length; f++) if (g = a.R[f], g.v.contains(c, e)) {
                    h = g;
                    break
                }
                a.s != h && (a.s && a.s.s("mouseout", c, e), h && h.s("mouseover", c, e), a.s = h);
                if ("mousemove" == b) for (a.H && a.H.s("mousemove", c, e), f = 0; f < a.R.length; f++) g = a.R[f], g != a.H && g.v.contains(c, e) && g.s("mousemove", c, e)
            } else "mouseout" == b && (a.s && a.s.s("mouseout", c, e), a.H = null, a.s = null);
            b = a.s && a.s.v.xe() ? "pointer" : "default";
            for (c = 0; e = a.Ga[c]; c++) Gb(e, "cursor", b)
        }
    }, bc = function (a,
                      b) {
        this.v = a;
        this.s = b
    };
    var ec = function (a) {
        this.R = a;
        this.v = !1;
        this.H = []
    }, fc = function (a) {
        if (!a.v) {
            a.v = !0;
            for (var b = 0, c; c = a.H[b]; b++) c()
        }
    }, gc = function (a) {
        ec.call(this, a);
        this.s = new Image
    };
    t(gc, ec);
    var hc = function (a) {
        a.s.src || (a.s.onload = function () {
            fc(a)
        }, a.s.src = a.R, (a.s.complete || "complete" == a.s.readyState) && fc(a))
    };
    var ic = function (a, b) {
        this.s = [];
        this.v = [];
        for (var c = 0, e; e = b[c]; c++) {
            var f = new gc(a + e.filename);
            e = e.size;
            this.s.push(f);
            this.v.push(e)
        }
    }, lc = function (a, b) {
        var c = jc(kc, a);
        b && (c.v ? b() : c.H.push(b));
        hc(c)
    }, jc = function (a, b) {
        return a.s[na(b) ? b : b[0]]
    }, mc = function (a, b, c, e, f, g, h, k, m, n) {
        var w = c[1], G = c[2], Ta = c[3], Ua = c[4];
        if (void 0 == f) {
            var ca = w;
            var da = G;
            var ea = Ta;
            var fa = Ua;
            k = 0;
            f = Ta;
            g = Ua
        } else void 0 == h ? (ca = w, da = G, ea = Ta, fa = Ua, k = 0) : (ca = w + e, da = G + 0, ea = f, fa = g, e = h, f = m, g = n);
        ca < w && (n = w - ca, ca = w, ea -= n, e += n, f -= n);
        da < G && (n =
            G - da, da = G, fa -= n, k += n, g -= n);
        ca + ea > w + Ta && (n = ca + ea - (w + Ta), ea -= n, f -= n);
        da + fa > G + Ua && (n = da + fa - (G + Ua), fa -= n, g -= n);
        a = jc(a, c);
        if (!a.v) throw Error("e");
        0 < ea && 0 < fa && b.drawImage(a.s, ca, da, ea, fa, e, k, f, g)
    };
    ic.prototype.W = function (a, b, c, e, f) {
        var g = a[3], h = a[4];
        f = void 0 != f ? f : 1;
        b.save();
        b.translate(c, e);
        b.scale(f, f);
        mc(this, b, a, 0, g, h, 0 * -g, 0 * -h, g, h);
        b.restore()
    };
    var oc = function () {
        ic.call(this, "img/pony-express/", nc)
    };
    t(oc, ic);
    var nc = [{filename: "horsechange1-sprite-2.png", size: [963, 1045]}, {
        filename: "horsechange2-sprite-2.png",
        size: [938, 1014]
    }, {filename: "intro2-sprite-2.png", size: [1247, 1653]}, {
        filename: "level1-sprite-2.png",
        size: [858, 1118]
    }, {filename: "level1jpg-sprite-2.jpg", size: [640, 363]}, {
        filename: "level2-sprite-2.png",
        size: [1571, 1697]
    }, {filename: "level3-sprite-2.png", size: [1639, 1374]}, {
        filename: "end-sprite-2.png",
        size: [641, 4387]
    }, {filename: "tools-sprite.png", size: [50, 209]}], D = {
        Ta: [6, 0, 578, 940, 49],
        Mb: [6, 1121, 181, 480,
            81],
        Ed: [2, 1080, 1451, 113, 127],
        Ge: [8, 0, 0, 50, 50],
        Fd: [2, 648, 573, 597, 194],
        Nb: [2, 622, 938, 619, 306],
        hc: [6, 0, 630, 539, 387],
        Ob: [6, 0, 1020, 539, 337],
        Cb: [5, 0, 723, 418, 974],
        Gd: [0, 0, 0, 963, 1045],
        Hd: [1, 0, 0, 938, 1014],
        jc: [2, 0, 843, 619, 554],
        Pb: [2, 0, 670, 639, 111],
        kc: [5, 850, 689, 419, 760],
        lc: [5, 421, 899, 406, 167],
        mc: [6, 976, 448, 539, 606],
        nc: [6, 1121, 77, 517, 101],
        Tc: [2, 0, 172, 702, 398],
        Id: [2, 0, 1400, 619, 171],
        Jd: [2, 622, 1247, 619, 201],
        Qb: [5, 421, 1069, 405, 149],
        Kd: [7, 0, 1578, 637, 1238],
        Ld: [7, 0, 2819, 636, 1166],
        Md: [7, 0, 3988, 546, 361],
        Nd: [7, 0, 363,
            640, 1212],
        Rb: [3, 0, 777, 439, 341],
        He: [8, 0, 53, 50, 50],
        Od: [6, 976, 326, 640, 60],
        Sb: [2, 0, 784, 621, 56],
        Ie: [8, 0, 106, 50, 50],
        Db: [3, 604, 832, 74, 180],
        mb: [3, 560, 264, 165, 182],
        nb: [3, 728, 154, 115, 155],
        Pd: [2, 624, 784, 620, 151],
        Qd: [2, 0, 636, 640, 31],
        qc: [5, 850, 509, 612, 56],
        sc: [6, 976, 389, 612, 56],
        Rd: [2, 359, 1574, 63, 54],
        Sd: [2, 622, 1451, 455, 159],
        Td: [2, 0, 0, 864, 169],
        tc: [2, 705, 204, 528, 102],
        S: [2, 705, 172, 540, 29],
        Xa: [2, 425, 1574, 41, 72],
        uc: [2, 1196, 1451, 51, 92],
        vc: [2, 1196, 1546, 47, 78],
        Ua: [2, 201, 1574, 76, 55],
        Ba: [2, 1040, 58, 114, 65],
        Uc: [3, 0, 0, 720, 261],
        wc: [3, 0, 264, 557, 187],
        xc: [3, 0, 454, 534, 320],
        Vc: [6, 1518, 655, 104, 117],
        yc: [6, 1121, 0, 518, 74],
        zc: [6, 1518, 775, 102, 188],
        Wc: [5, 0, 321, 1253, 122],
        Ac: [5, 421, 1418, 344, 213],
        Bc: [5, 850, 581, 514, 105],
        Cc: [5, 421, 723, 409, 173],
        Dc: [5, 0, 446, 847, 274],
        Ec: [5, 0, 0, 1493, 318],
        Ud: [5, 768, 1452, 126, 39],
        Xc: [5, 1367, 581, 198, 84],
        Tb: [5, 1433, 1144, 137, 72],
        Ya: [5, 1272, 689, 296, 80],
        Va: [5, 1272, 1040, 192, 101],
        Za: [5, 1256, 321, 315, 99],
        Fc: [5, 1470, 772, 99, 176],
        Eb: [5, 1010, 1452, 110, 158],
        Yc: [5, 1272, 1325, 150, 178],
        Zc: [5, 1272, 1144, 158, 178],
        $c: [5, 1272, 1325, 150,
            178],
        ad: [6, 1518, 448, 120, 204],
        hd: [6, 801, 752, 156, 269],
        jd: [6, 1436, 1057, 74, 123],
        kd: [6, 1E3, 1057, 152, 191],
        $a: [5, 1496, 0, 69, 58],
        Fb: [6, 1282, 265, 54, 43],
        Sa: [6, 1387, 265, 42, 14],
        qb: [6, 1182, 265, 97, 39],
        ab: [6, 1518, 966, 95, 61],
        ld: [6, 542, 865, 255, 108],
        md: [6, 542, 752, 256, 110],
        Gc: [6, 799, 1057, 198, 317],
        Hc: [6, 542, 976, 254, 313],
        rb: [6, 1155, 1057, 150, 314],
        nd: [6, 1518, 1030, 78, 196],
        Vd: [6, 1308, 1057, 125, 270],
        Wd: [6, 1077, 265, 102, 36],
        od: [6, 0, 0, 1118, 197],
        Gb: [6, 826, 630, 139, 82],
        qd: [6, 542, 630, 281, 119],
        Ub: [5, 1272, 896, 193, 141],
        Ic: [5, 1272, 772,
            195, 121],
        Xd: [6, 0, 200, 1074, 123],
        Jc: [6, 0, 326, 973, 159],
        Yd: [2, 280, 1574, 76, 49],
        Zd: [2, 105, 1574, 93, 61],
        $d: [2, 867, 0, 334, 55],
        rd: [2, 705, 309, 515, 72],
        ae: [2, 867, 93, 111, 45],
        de: [2, 1157, 58, 81, 65],
        Je: [8, 0, 159, 50, 50],
        ee: [6, 1339, 265, 45, 50],
        Kc: [2, 867, 58, 170, 32],
        fe: [7, 549, 3988, 64, 64],
        he: [4, 0, 0, 640, 56],
        sd: [4, 0, 59, 312, 304],
        Lc: [3, 537, 692, 155, 137],
        ie: [2, 0, 573, 645, 60],
        Ha: [2, 0, 1574, 102, 79],
        Aa: [3, 442, 777, 81, 59],
        Ca: [2, 981, 93, 55, 42],
        je: [5, 1496, 61, 65, 60],
        tb: [3, 695, 692, 145, 182],
        Hb: [3, 723, 0, 135, 151],
        ke: [7, 0, 0, 641, 360],
        le: [7, 549,
            4055, 64, 64],
        ub: [5, 850, 568, 534, 10],
        ne: [7, 549, 4122, 64, 64],
        oe: [7, 549, 4189, 64, 64],
        qe: [7, 549, 4256, 64, 64],
        re: [7, 549, 4323, 64, 64],
        td: [3, 442, 839, 68, 218],
        Vb: [3, 526, 832, 75, 264],
        Wb: [3, 681, 877, 53, 194],
        se: [6, 1436, 1183, 70, 60],
        Xb: [5, 1433, 1219, 129, 296],
        vb: [5, 897, 1452, 110, 244],
        hb: [5, 1123, 1452, 109, 243],
        te: [5, 850, 446, 635, 60],
        Mc: [3, 728, 312, 98, 119],
        ud: [3, 537, 454, 319, 235],
        vd: [5, 421, 1221, 377, 194],
        ue: [2, 705, 384, 509, 169],
        wd: [6, 0, 488, 952, 87],
        ve: [2, 1204, 0, 36, 36],
        we: [2, 1204, 39, 14, 15],
        Yb: [6, 1604, 181, 26, 15]
    };
    oc.s = void 0;
    oc.v = function () {
        return oc.s ? oc.s : oc.s = new oc
    };
    var pc = [D.Sb, D.qc, D.sc], qc = [D.jc, D.kc, D.mc], rc = {};
    rc[D.Ua] = D.Nb;
    rc[D.Ba] = D.Nb;
    rc[D.qb] = D.Ob;
    rc[D.ab] = D.Ob;
    rc[D.Cb] = D.Qb;
    var sc = [D.Pb, D.lc, D.Pb];
    var tc = {
        width: 45,
        height: 64,
        frames: [[[0, 0, 0, 0, 45, 64]], [[0, 0, 46, 0, 45, 64]], [[0, 0, 92, 0, 45, 64]], [[0, 0, 138, 0, 45, 64]], [[0, 0, 184, 0, 45, 64]], [[0, 0, 230, 0, 45, 64]], [[0, 0, 276, 0, 45, 64]], [[0, 0, 322, 0, 45, 64]], [[0, 0, 368, 0, 45, 64]], [[0, 0, 414, 0, 45, 64]], [[0, 0, 460, 0, 45, 64]], [[0, 0, 506, 0, 45, 64]], [[0, 0, 552, 0, 45, 64]], [[0, 0, 0, 65, 45, 64]], [[0, 0, 46, 65, 45, 64]], [[0, 0, 92, 65, 45, 64]], [[0, 0, 138, 65, 45, 64]], [[0, 0, 184, 65, 45, 64]], [[0, 0, 138, 65, 45, 64]], [[0, 0, 92, 65, 45, 64]], [[0, 0, 230, 65, 45, 64]], [[0, 0, 276, 65, 45, 64]], [[0, 0, 322, 65, 45, 64]], [[0, 0,
            368, 65, 45, 64]], [[0, 0, 414, 65, 45, 64]], [[0, 0, 460, 65, 45, 64]], [[0, 0, 506, 65, 45, 64]], [[0, 0, 552, 65, 45, 64]], [[0, 0, 0, 130, 45, 64]], [[0, 0, 46, 130, 45, 64]], [[0, 0, 92, 130, 45, 64]], [[0, 0, 138, 130, 45, 64]], [[0, 0, 184, 130, 45, 64]], [[0, 0, 92, 0, 45, 64]], [[0, 0, 46, 0, 45, 64]], [[0, 0, 230, 130, 45, 64]]]
    };
    var uc = {
        width: 172,
        height: 102,
        frames: [[[41, 39, 228, 151, 64, 55]], [[44, 33, 98, 94, 64, 61]], [[43, 33, 281, 89, 65, 61]], [[42, 21, 519, 65, 66, 73]], [[38, 14, 445, 62, 73, 80]], [[35, 9, 365, 62, 79, 85]], [[33, 6, 281, 0, 83, 88]], [[31, 4, 192, 0, 88, 90]], [[30, 1, 98, 0, 93, 93]], [[29, 0, 0, 0, 97, 94]], [[108, 0, 0, 260, 20, 29], [27, 30, 533, 0, 81, 64]], [[25, 33, 365, 0, 83, 61], [110, 0, 584, 167, 21, 29]], [[25, 33, 449, 0, 83, 61], [113, 1, 412, 148, 23, 28]], [[25, 36, 21, 260, 18, 32], [18, 71, 258, 132, 19, 16], [44, 33, 0, 95, 64, 61], [118, 6, 65, 124, 25, 23]], [[25, 42, 347, 89, 13, 32], [18, 84, 163,
            123, 20, 9], [44, 33, 519, 139, 64, 61], [123, 14, 586, 65, 31, 20]], [[18, 53, 284, 258, 20, 40], [44, 33, 445, 143, 64, 61], [139, 21, 584, 141, 24, 25]], [[0, 82, 293, 151, 38, 20], [44, 33, 163, 144, 64, 61], [146, 25, 163, 94, 25, 28]], [[0, 82, 293, 151, 38, 20], [44, 33, 347, 148, 64, 61], [146, 25, 65, 95, 25, 28]], [[0, 82, 293, 151, 38, 20], [43, 42, 192, 91, 65, 52], [146, 25, 163, 94, 25, 28]], [[0, 82, 293, 151, 38, 20], [44, 43, 0, 157, 64, 51], [146, 25, 163, 94, 25, 28]], [[0, 82, 293, 151, 38, 20], [44, 43, 0, 157, 64, 51], [146, 25, 163, 94, 25, 28]], [[0, 82, 293, 151, 38, 20], [44, 41, 65, 156, 64, 53], [146,
            25, 163, 94, 25, 28]], [[0, 82, 293, 151, 38, 20], [47, 44, 510, 201, 61, 50], [146, 25, 163, 94, 25, 28]], [[0, 82, 293, 151, 38, 20], [47, 44, 412, 205, 61, 50], [146, 25, 586, 112, 25, 28]], [[0, 82, 293, 151, 38, 20], [47, 44, 510, 201, 61, 50], [146, 27, 586, 86, 26, 25]], [[0, 82, 293, 151, 38, 20], [47, 44, 510, 201, 61, 50], [146, 27, 586, 86, 26, 25]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 474, 205, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 378, 210, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 258, 91, 21, 40]], [[0, 82, 293, 151,
            38, 20], [47, 44, 192, 207, 61, 50], [148, 8, 598, 243, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 378, 210, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 130, 156, 21, 40]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 440, 256, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 240, 258, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 130, 156, 21, 40]], [[0, 82, 293, 151, 38, 20], [47, 44, 192, 207, 61, 50], [148, 8, 262, 258, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148,
            8, 240, 258, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 258, 91, 21, 40]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 474, 205, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 378, 210, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 258, 91, 21, 40]], [[0, 82, 293, 151, 38, 20], [47, 44, 192, 207, 61, 50], [148, 8, 598, 243, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 378, 210, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 130, 156, 21, 40]], [[0, 82, 293, 151, 38,
            20], [47, 44, 130, 206, 61, 50], [148, 8, 440, 256, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 240, 258, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 130, 156, 21, 40]], [[0, 82, 293, 151, 38, 20], [47, 44, 192, 207, 61, 50], [148, 8, 262, 258, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 240, 258, 21, 39]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 258, 91, 21, 40]], [[0, 82, 293, 151, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 474, 205, 21, 39]], [[0, 82, 293, 172, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8,
            378, 210, 21, 39]], [[0, 82, 572, 201, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 258, 91, 21, 40]], [[0, 82, 572, 222, 38, 20], [47, 44, 254, 207, 61, 50], [148, 8, 440, 256, 21, 39]], [[0, 82, 124, 257, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 378, 210, 21, 39]], [[0, 82, 163, 258, 38, 20], [47, 44, 130, 206, 61, 50], [148, 8, 130, 156, 21, 40]], [[0, 82, 293, 193, 38, 12], [47, 44, 0, 209, 61, 50], [148, 8, 440, 256, 21, 39]], [[0, 83, 202, 258, 37, 11], [47, 44, 62, 210, 61, 50], [148, 8, 240, 258, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 130, 156, 21, 40]], [[47, 44, 474, 252, 61, 50], [148, 8, 474, 205, 21,
            39]], [[47, 44, 316, 210, 61, 50], [148, 8, 240, 258, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 258, 91, 21, 40]], [[47, 44, 316, 210, 61, 50], [148, 8, 474, 205, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 378, 210, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 258, 91, 21, 40]], [[47, 44, 536, 252, 61, 50], [148, 8, 440, 256, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 378, 210, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 130, 156, 21, 40]], [[47, 44, 316, 210, 61, 50], [148, 8, 440, 256, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 240, 258, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 130, 156,
            21, 40]], [[47, 44, 378, 256, 61, 50], [148, 8, 474, 205, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 240, 258, 21, 39]], [[47, 44, 316, 210, 61, 50], [148, 8, 258, 91, 21, 40]]]
    };
    var vc = {
        width: 101,
        height: 101,
        frames: [[[0, 0, 102, 0, 101, 93]], [[0, 0, 300, 0, 95, 71], [74, 76, 492, 0, 27, 17]], [[0, 0, 396, 0, 95, 71], [74, 76, 492, 0, 27, 17]], [[0, 0, 396, 72, 95, 69], [74, 76, 492, 0, 27, 17]], [[0, 0, 204, 0, 95, 74], [74, 76, 492, 0, 27, 17]], [[0, 0, 204, 75, 95, 69], [74, 76, 492, 0, 27, 17]], [[0, 0, 102, 94, 95, 69], [74, 76, 492, 0, 27, 17]], [[0, 0, 300, 144, 95, 68], [74, 76, 492, 0, 27, 17]], [[0, 0, 198, 145, 95, 67], [74, 76, 492, 0, 27, 17]], [[0, 0, 96, 164, 95, 67], [74, 76, 492, 0, 27, 17]], [[0, 0, 0, 166, 95, 67], [74, 76, 492, 0, 27, 17]], [[0, 0, 0, 96, 95, 69], [74, 76, 492, 0, 27, 17]],
            [[0, 0, 300, 72, 95, 71], [74, 76, 492, 0, 27, 17]], [[0, 0, 192, 213, 95, 64], [42, 76, 480, 298, 59, 17]], [[0, 0, 396, 212, 95, 65], [42, 76, 480, 278, 59, 19]], [[0, 0, 0, 0, 101, 95]], [[0, 0, 396, 142, 95, 69], [29, 76, 265, 365, 72, 20]], [[0, 0, 288, 213, 95, 62], [29, 76, 169, 367, 72, 20]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96,
                232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72,
                25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29,
                76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 96, 232, 95, 62], [29, 76, 288, 339, 72, 25]], [[0, 0, 0, 234, 95, 62], [29, 76, 192, 341, 72, 25]], [[0, 0, 288, 276, 95, 62], [29, 76, 361, 341, 72, 25]], [[0, 0, 192, 278, 95, 62], [29, 76, 434, 341, 72, 25]], [[0, 0, 384, 278, 95, 62], [29, 76, 96, 358, 72, 25]], [[0, 0, 96, 295, 95, 62], [29, 76, 0, 360, 72, 25]], [[0, 0, 0, 297, 95, 62], [74, 76, 492, 0, 27, 17]]]
    };
    var wc = 640 / 360, xc = 290 / 6;
    var E = null, F = !1, yc = null, kc = oc.v(), zc = function (a) {
        return 70 + (.5 + Math.floor(a)) * xc
    }, Ac = function (a) {
        return Math.floor((a - 70) / xc)
    };
    var Bc = function (a, b, c, e, f) {
        this.v = a;
        this.x = b;
        this.y = c;
        this.width = e;
        this.s = f
    }, Cc = function (a, b, c, e) {
        this.type = a;
        this.s = b;
        this.x = c;
        this.y = e
    }, Dc = function () {
        this.s = [];
        for (var a = 0; 6 > a; a++) this.s.push(Number.MAX_VALUE);
        this.H = [];
        this.T = null
    };
    var Ec = {
        width: 205,
        height: 110,
        frames: [[[39, 49, 0, 196, 64, 53]], [[41, 32, 150, 133, 65, 70]], [[41, 20, 425, 130, 65, 82]], [[83, 12, 491, 151, 30, 27], [41, 41, 216, 134, 65, 61]], [[89, 7, 0, 250, 30, 26], [38, 34, 222, 65, 68, 68]], [[94, 4, 31, 250, 30, 25], [35, 32, 150, 62, 71, 70]], [[98, 1, 129, 256, 30, 24], [33, 31, 76, 62, 73, 71]], [[102, 0, 412, 265, 30, 23], [31, 31, 0, 62, 75, 71]], [[106, 0, 249, 248, 29, 22], [30, 33, 411, 0, 76, 69]], [[29, 35, 333, 0, 77, 67], [110, 0, 474, 268, 30, 22]], [[27, 38, 253, 0, 79, 64], [113, 0, 505, 268, 30, 22]], [[25, 41, 89, 0, 81, 61], [117, 0, 443, 265, 30, 23]], [[25,
            41, 171, 0, 81, 61], [121, 1, 31, 276, 30, 22]], [[18, 41, 0, 0, 88, 61], [125, 3, 249, 271, 29, 22]], [[25, 50, 522, 174, 13, 32], [18, 92, 193, 230, 20, 9], [41, 41, 0, 134, 65, 61], [128, 6, 0, 277, 30, 21]], [[18, 61, 106, 297, 20, 40], [41, 41, 66, 134, 65, 61], [131, 8, 129, 281, 30, 21]], [[0, 90, 488, 0, 38, 20], [41, 41, 282, 181, 65, 61], [134, 12, 344, 287, 30, 20]], [[0, 90, 488, 0, 38, 20], [41, 41, 282, 181, 65, 61], [138, 15, 375, 287, 29, 20]], [[0, 90, 488, 0, 38, 20], [43, 50, 291, 128, 66, 52], [142, 19, 160, 281, 30, 21]], [[0, 90, 488, 0, 38, 20], [43, 51, 358, 130, 66, 51], [147, 24, 160, 256, 30, 24]], [[0, 90,
            488, 0, 38, 20], [43, 51, 358, 130, 66, 51], [153, 31, 491, 179, 30, 27]], [[0, 90, 488, 0, 38, 20], [44, 49, 348, 182, 65, 53], [161, 43, 405, 289, 28, 28]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [172, 60, 434, 289, 24, 30]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [170, 60, 522, 151, 17, 12]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [165, 54, 132, 158, 14, 12], [181, 56, 527, 0, 12, 12]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [162, 51, 132, 134, 15, 12], [184, 54, 132, 182, 13, 9]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [159, 50, 132, 147, 15, 10], [189, 54,
            527, 13, 10, 6]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [157, 49, 522, 164, 14, 9], [192, 54, 527, 20, 9, 5]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [155, 50, 132, 171, 13, 10], [195, 54, 527, 26, 8, 7]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [153, 55, 527, 49, 6, 7], [160, 50, 527, 43, 7, 5], [198, 57, 527, 34, 7, 8]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]],
            [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 129, 204, 63, 51]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [166, 61, 62, 297, 21, 22]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [166, 56, 84, 297, 21, 22]], [[0, 90, 488, 0, 38, 20], [45, 51, 65, 196, 63, 51], [166, 52, 504, 291, 21, 23]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 50, 279, 293, 21, 23]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 482, 291, 21, 24]], [[0,
                90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 193, 204, 21, 25]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 459, 291, 22, 24]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 301, 293, 21, 23]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 301, 293, 21, 23]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 301, 293, 21, 23]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 301, 293, 21, 23]], [[0, 90, 488, 0, 38, 20], [45, 51, 216, 196, 63, 51], [166, 49, 301, 293, 21, 23]], [[0, 90, 488, 21, 38, 20], [45, 51, 414, 213, 63, 51],
                [166, 49, 301, 293, 21, 23]], [[0, 90, 488, 42, 38, 20], [45, 52, 348, 236, 63, 50], [166, 49, 301, 293, 21, 23]], [[0, 90, 492, 63, 38, 20], [45, 53, 280, 243, 63, 49], [166, 49, 301, 293, 21, 23]], [[0, 90, 492, 84, 38, 20], [46, 54, 65, 248, 63, 48], [166, 49, 301, 293, 21, 23]], [[0, 90, 492, 105, 38, 20], [44, 48, 478, 213, 59, 54], [166, 49, 249, 294, 21, 23]], [[0, 90, 492, 126, 38, 12], [42, 45, 193, 248, 55, 57], [166, 49, 249, 294, 21, 23]], [[0, 91, 491, 139, 37, 11], [40, 43, 291, 68, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49,
                249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166,
                49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 425, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59],
                [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]], [[40, 43, 358, 70, 66, 59], [166, 49, 249, 294, 21, 23]]]
    };
    var Fc = {
        width: 229,
        height: 457,
        frames: [[[78, 0, 234, 710, 38, 264], [14, 441, 161, 457, 95, 12]], [[78, 15, 374, 444, 38, 265], [14, 441, 161, 444, 106, 12]], [[44, 36, 161, 470, 72, 265], [14, 441, 230, 45, 117, 13]], [[44, 61, 0, 680, 72, 265], [14, 440, 230, 30, 128, 14]], [[44, 92, 73, 680, 72, 265], [14, 440, 230, 15, 139, 14]], [[44, 126, 268, 444, 105, 265], [14, 440, 230, 0, 149, 14]], [[14, 166, 0, 390, 160, 289]], [[14, 250, 216, 236, 172, 207]], [[11, 288, 227, 66, 191, 169]], [[8, 335, 0, 267, 205, 122]], [[4, 389, 0, 198, 215, 68]], [[0, 392, 0, 132, 222, 65]], [[0, 392, 0, 66, 226, 65]], [[0, 392,
            0, 0, 229, 65]]]
    };
    var Gc,
        Hc = {Ia: !0, Ja: !0, La: !1, Ea: !1, Ma: !1, Oa: !1, Qa: !1, Na: !1, Ra: !1, Ka: !1, Pa: !1, Fa: !1, name: 0},
        Ic = {Ia: !0, Ja: !0, La: !1, Ea: !1, Ma: !1, Oa: !1, Qa: !1, Na: !0, Ra: !1, Ka: !1, Pa: !1, Fa: !1, name: 1},
        Jc = {Ia: !0, Ja: !1, La: !0, Ea: !0, Ma: !1, Oa: !1, Qa: !1, Na: !1, Ra: !1, Ka: !0, Pa: !0, Fa: !0, name: 2},
        Kc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !0, Oa: !1, Qa: !1, Na: !1, Ra: !1, Ka: !0, Pa: !0, Fa: !0, name: 3},
        Lc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !1, Oa: !1, Qa: !0, Na: !1, Ra: !0, Ka: !0, Pa: !0, Fa: !0, name: 4},
        Mc = {
            Ia: !1, Ja: !0, La: !1, Ea: !1, Ma: !1, Oa: !1, Qa: !1, Na: !1, Ra: !1, Ka: !1, Pa: !1, Fa: !1,
            name: 6
        },
        Nc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !0, Oa: !0, Qa: !1, Na: !1, Ra: !1, Ka: !0, Pa: !0, Fa: !0, name: 7},
        Oc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !1, Oa: !1, Qa: !1, Na: !1, Ra: !0, Ka: !0, Pa: !1, Fa: !1, name: 9},
        Pc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !0, Oa: !0, Qa: !1, Na: !1, Ra: !0, Ka: !0, Pa: !0, Fa: !0, name: 8},
        Qc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !0, Oa: !1, Qa: !1, Na: !1, Ra: !0, Ka: !0, Pa: !0, Fa: !0, name: 5},
        Rc = {Ia: !0, Ja: !1, La: !1, Ea: !0, Ma: !0, Oa: !0, Qa: !1, Na: !1, Ra: !1, Ka: !0, Pa: !0, Fa: !0, name: 10},
        Sc = {
            Ia: !0, Ja: !0, La: !1, Ea: !1, Ma: !1, Oa: !1, Qa: !1, Na: !1, Ra: !1, Ka: !1, Pa: !1, Fa: !1,
            name: 11
        };
    var Uc = function () {
        Tc();
        return Gc.Ea
    }, Tc = function () {
        null == Gc && (Gc = xb && !Db ? Jc : yb ? Kc : x(B, "Gbot") ? Lc : Eb() && !zb ? Mc : Fb() ? Nc : document.querySelector("body.hp") ? zb ? Ic : Hc : Db ? Ab ? Qc : zb ? Pc : Oc : zb ? Rc : Sc)
    };
    var Vc = null, Wc = null, Xc = null, Yc = null, Zc = !1, $c = null,
        ad = 0 <= window.location.href.indexOf("pony-express.html") || 0 <= window.location.href.indexOf("demo.html"),
        bd = Kb(document, "fullscreenElement"), cd = null, dd = document[Kb(document, "exitFullscreen")], ed = !1,
        fd = function () {
            Wc = document.getElementById("hplogo");
            var a = Vc = document.getElementById("hplogoc");
            $c = E.get(D.ve);
            cd = a[Kb(a, "requestFullscreen")];
            ed = zb && document[Kb(document, "fullscreenEnabled")] && void 0 != cd && void 0 != dd;
            Uc() && (document.body.style.margin = "0", Gb(document.body,
                "margin", "0"), Vc.style.position = "absolute", Wc.style.overflow = "visible")
        };
    var H = function () {
        this.s = this.T = this.velocityX = this.y = this.x = 0;
        this.ta = !1
    };
    d = H.prototype;
    d.De = function (a) {
        this.x += this.velocityX * a;
        this.y += this.T * a
    };
    d.update = function () {
    };
    d.W = function () {
    };
    d.zd = function () {
        return []
    };
    d.Ad = function () {
    };
    var hd = function () {
        this.y = this.x = 0;
        this.s = -61;
        this.Bd = 0;
        this.v = new gd
    };
    hd.prototype.update = function (a, b) {
        this.s += this.Bd * a;
        this.x = b.x + this.s;
        this.v.update(a)
    };
    hd.prototype.W = function (a, b) {
        a.clearRect(0, 0, 640, 360);
        var c = this.x + this.v.x, e = this.y + this.v.y;
        a.save();
        a.translate(-c, -e);
        b.sort(function (a, b) {
            return a.s - b.s
        });
        for (var f = 0; f < b.length; f++) {
            var g = b[f], h = g.ma ? g.x + g.ka + g.ma.width : c + 640;
            (g.ma ? g.x + g.ka : c) < c + 640 && h > c && g.W(a, c, e)
        }
        a.restore()
    };
    var id = function (a) {
        a = a.v;
        a.H = 33;
        a.s = 10;
        a.R = .9;
        a.v = 1 / a.H;
        window.navigator.vibrate && window.navigator.vibrate(200)
    }, gd = function () {
        this.v = this.R = this.s = this.H = this.y = this.x = 0
    };
    gd.prototype.update = function (a) {
        0 != this.s && (this.v -= a, 0 > this.v && (this.v = 1 / this.H, this.s *= this.R, 2 > this.s && (this.s = 0), this.x = (Math.random() - .5) * this.s, this.y = (Math.random() - .5) * this.s))
    };
    var jd = function () {
        H.call(this);
        H.call(this);
        this.v = this.H = 0
    };
    t(jd, H);
    jd.prototype.update = function () {
        0 < this.H && (this.H = Math.max(0, this.H - .01));
        0 < this.v && (this.v = Math.max(0, this.v - .01))
    };
    jd.prototype.W = function (a, b, c) {
        if (0 < this.H || 0 < this.v) a.save(), a.translate(b, c), a.fillStyle = "white", a.globalAlpha = this.H, a.fillRect(0, 0, 640, 180), a.globalAlpha = this.v, a.fillRect(0, 180, 640, 180), a.restore()
    };
    var I = function (a, b, c) {
        this.v = a;
        this.R = b;
        this.H = c;
        this.s = 0;
        this.ta = !1
    };
    I.prototype.update = function (a) {
        this.s >= this.v || (this.s += a, this.s >= this.v ? (this.ta = !0, this.R(1), this.H && this.H()) : this.R(this.s / this.v))
    };
    var kd = function (a) {
        return 3 * a * a - 2 * a * a * a
    };
    var ld = function (a) {
        H.call(this);
        this.ra = a;
        this.y = 0;
        this.H = 1;
        this.v = null;
        zb ? (this.v = E.get(D.Td), this.v.yd = 2) : this.v = E.get(D.Sd);
        this.ha = this.v.scale = 0;
        this.U = this.V = null
    };
    t(ld, H);
    ld.prototype.update = function (a) {
        this.x = this.ra.x + 80;
        this.v.update(a);
        this.U && this.U.update(a)
    };
    var md = function (a, b) {
        1 == a.H && (a.H = 2, a.V = b, a.U = new I(.5, function (b) {
            a.v.scale = b;
            a.ha = b
        }))
    }, od = function (a) {
        3 > a.H && (1 < a.H ? (a.H = 3, a.U = new I(.5, function (b) {
            a.v.scale = 1 - b;
            a.ha = 1 - b
        }, function () {
            nd(a)
        })) : nd(a))
    }, nd = function (a) {
        a.H = 4;
        a.V && a.V()
    };
    ld.prototype.W = function (a) {
        if (2 <= this.H && 3 >= this.H) {
            var b = a.globalAlpha;
            a.globalAlpha = this.ha;
            this.v.W(a, this.x, this.y);
            a.globalAlpha = b
        }
    };
    var pd = function (a, b) {
        H.call(this);
        this.U = b;
        this.v = [];
        this.H = a
    };
    t(pd, H);
    var qd = function (a, b, c) {
        a.v.push([a.H, b]);
        a.H += b.width * c
    };
    pd.prototype.W = function (a, b) {
        var c = Math.round(b * this.U);
        a.save();
        a.translate(b - c, 0);
        for (var e = 0; e < this.v.length - 1 && c >= this.v[e + 1][0];) e++;
        for (var f = this.v[e][1], g = c - (c - this.v[e][0]) % f.width; g < c + 640;) f.W(a, g, this.y), g += f.width, e < this.v.length - 1 && g >= this.v[e + 1][0] && (e++, f = this.v[e][1]);
        a.restore()
    };
    var L = function (a) {
        H.call(this);
        this.ma = a;
        if (a.Ab == D.wd || a.Ab == D.Mb) a.yd = 3;
        this.ka = J[a.Lb] || 0;
        this.v = K[a.Lb] || 0;
        rd(this);
        this.R = [];
        this.$ = []
    };
    t(L, H);
    var J = {}, K = {};
    J[D.jc] = -34;
    K[D.jc] = -57;
    J[D.kc] = -34;
    K[D.kc] = -57;
    J[D.mc] = -34;
    K[D.mc] = -57;
    J[D.Nb] = -36;
    K[D.Nb] = -37;
    J[D.Ob] = -38;
    K[D.Ob] = -46;
    J[D.Pb] = -20;
    K[D.Pb] = 0;
    J[D.lc] = -20;
    K[D.lc] = 0;
    J[D.Sb] = 0;
    K[D.Sb] = 0;
    J[D.qc] = 0;
    K[D.qc] = 0;
    J[D.sc] = 0;
    K[D.sc] = 0;
    J[D.tc] = -16;
    K[D.tc] = -73;
    J[D.nc] = 5;
    K[D.nc] = 5;
    J[D.Ta] = 0;
    K[D.Ta] = 0;
    J[D.hc] = 4;
    K[D.hc] = 20;
    J[D.Cb] = -25;
    K[D.Cb] = -442;
    J[D.Qb] = 0;
    K[D.Qb] = -25;
    J[D.Rb] = 0;
    K[D.Rb] = 0;
    var M = {};
    M[D.Qb] = 500;
    M[D.mb] = -182;
    M[D.nb] = -155;
    M[D.wc] = -187;
    M[D.xc] = -320;
    M[D.yc] = 188;
    M[D.Ac] = -213;
    M[D.Bc] = -105;
    M[D.Cc] = -173;
    M[D.Dc] = -274;
    M[D.Ec] = -317;
    M[D.Gc] = -317;
    M[D.rb] = -314;
    M[D.Hc] = -313;
    M[D.Jc] = -159;
    M[D.vd] = 235;
    L.prototype.update = function (a) {
        this.ma.update(a);
        rd(this);
        for (a = 0; a < this.$.length; a++) this.R[a].x = this.$[a].x + this.x, this.R[a].y = this.$[a].y + this.y
    };
    var rd = function (a) {
        a.s = a.y + a.ma.height + a.v + (M[a.ma.Lb] || 0)
    };
    L.prototype.W = function (a) {
        this.ma.W(a, this.x + this.ka, this.y + this.v)
    };
    var N = function (a, b) {
        a.ma = b;
        a.ka = J[b.Lb] || 0;
        a.v = K[b.Lb] || 0;
        rd(a)
    };
    L.prototype.zd = function () {
        return this.R
    };
    var sd = function () {
        H.call(this);
        H.call(this);
        this.V = E.get(D.rd);
        this.x = 100;
        this.y = 360;
        this.U = -1;
        this.H = !1;
        this.v = 0;
        this.ha = [[E.get(D.Ud), 215, 2], [E.get(D.Wd), 384, 24]]
    };
    t(sd, H);
    sd.prototype.update = function (a) {
        this.v -= a;
        0 > this.v && (this.v = (this.H = !this.H) ? .5 : .3);
        this.y = Math.min(360, Math.max(360 - (this.V.height + 5), this.y + this.T))
    };
    sd.prototype.W = function (a, b, c) {
        a.save();
        a.translate(b, c);
        this.V.W(a, this.x, this.y);
        for (b = 0; b <= (this.H ? this.U : this.U - 1); b++) c = this.ha[b], c[0].W(a, this.x + c[1], this.y + c[2]);
        a.restore()
    };
    var ud = function () {
        H.call(this);
        this.ra = E.get(D.S);
        this.wa = E.get(D.we);
        this.v = E.get(D.Kc);
        this.v.pause();
        this.U = E.get(D.Kc);
        this.U.pause();
        this.V = E.get(D.ee);
        this.H = 0;
        this.ha = [new td(this.v), new td(this.U), new td(this.V)]
    };
    t(ud, H);
    ud.prototype.update = function (a) {
        this.v.update(a);
        this.U.update(a);
        this.V.update(a);
        for (var b = 0; b < this.ha.length; b++) this.ha[b].update(a)
    };
    ud.prototype.W = function (a, b, c) {
        a.save();
        a.translate(b, c);
        b = 5;
        this.ra.W(a, b, 320);
        b += this.ra.width + 5;
        this.wa.W(a, b, 321);
        b += this.wa.width + 3;
        if (100 == this.H) vd(this.V, 0), this.V.W(a, b, 301); else {
            c = Math.floor(this.H / 10);
            var e = this.H % 10, f = 0;
            0 < c && (vd(this.U, c), this.U.W(a, b, 311), f += this.v.width);
            vd(this.v, e);
            this.v.W(a, b + f, 311)
        }
        a.restore()
    };
    var td = function (a) {
        this.Rc = 0;
        this.ma = a
    };
    td.prototype.update = function (a) {
        this.ma.scale += this.Rc * a;
        1.5 <= this.ma.scale ? (this.ma.scale = 1.5, this.Rc = -10) : 1 >= this.ma.scale && (this.ma.scale = 1, this.Rc = 0)
    };
    var wd = function (a, b, c) {
        H.call(this);
        this.R = [];
        for (var e = 0; e < a.length; e++) this.R.push(new Bc(this, a[e][0], a[e][1], a[e][2], b));
        this.v = c
    };
    t(wd, H);
    var O = function (a, b, c) {
        for (var e = [], f = 0; 6 > f; f++) e.push([a, zc(f), b]);
        return new wd(e, !0, c)
    };
    wd.prototype.zd = function () {
        return this.R
    };
    wd.prototype.Ad = function (a) {
        this.v(a)
    };
    var Bd = function () {
        this.U = xd;
        this.v = [];
        this.Ga = [];
        this.ka = new Dc;
        this.wb = new hd;
        this.H = 1;
        this.wa = this.ya = 0;
        this.T = 2;
        this.va = null;
        yd(this);
        this.level = 0;
        this.$ = !1;
        this.ha = this.Da = 0;
        this.s = new ld(this.va);
        zd(this);
        this.R = new sd;
        Ad(this);
        this.ra = new ud;
        this.ra.s = 5E3;
        this.add(this.ra);
        this.V = new jd;
        this.V.s = -1;
        this.add(this.V);
        var a = new pd(-61, .1);
        qd(a, E.get(D.he), 1);
        a.y = 0;
        a.s = -4;
        this.add(a);
        a = new pd(-61, 1 / 3);
        qd(a, E.get(D.ie), 6);
        qd(a, E.get(D.je), 1);
        qd(a, E.get(D.te), 4);
        qd(a, E.get(D.se), 1);
        qd(a, E.get(D.Od),
            1);
        a.y = 0;
        a.s = -3;
        this.add(a);
        a = new pd(-61, 1);
        qd(a, E.get(D.sd), 1);
        a.y = 360 - E.get(D.sd).height;
        a.s = -2;
        this.add(a)
    }, yd = function (a) {
        var b = E.get(sc[0]);
        vd(b, 19);
        a.va = new L(b);
        var c = a.va;
        c.x = 0;
        c.y = zc(a.T) + -49;
        P(b, function () {
            N(c, E.get(D.Sb));
            c.velocityX = 220;
            Q(a.U.s, "gallop-loop", 1)
        });
        a.add(c)
    }, zd = function (a) {
        a.s.s = 5001;
        a.add(a.s);
        var b = O(70, 200, function () {
            b.ta = !0;
            a.s && md(a.s, function () {
                a.s = null
            })
        });
        a.add(b);
        var c = O(924, 20, function () {
            c.ta = !0;
            a.s && od(a.s)
        });
        a.add(c)
    }, Ad = function (a) {
        a.R.s = 5001;
        a.add(a.R);
        var b =
            O(9100, 20, function () {
                b.ta = !0;
                var c = a.R;
                c.U = 0;
                c.T = -3
            });
        a.add(b);
        var c = O(9700, 20, function () {
            c.ta = !0;
            a.R.T = 3
        });
        a.add(c);
        var e = O(17750, 20, function () {
            e.ta = !0;
            var b = a.R;
            b.U = 1;
            b.T = -3
        });
        a.add(e);
        var f = O(18450, 20, function () {
            f.ta = !0;
            a.R.T = 3
        });
        a.add(f)
    };
    Bd.prototype.add = function (a) {
        if (!(a instanceof H)) throw window.console.log(a), Error("f");
        this.v.push(a)
    };
    var Cd = function (a, b) {
        a.T = Math.max(0, Math.min(5, b))
    }, Dd = function (a) {
        a.va.y = a.ha;
        Cd(a, Ac(a.va.y - -49))
    };
    Bd.prototype.update = function (a) {
        for (var b = 0; b < this.Ga.length; b++) this.Ga[b].update(a);
        b = this.ra;
        var c = this.H;
        if (c != b.H) for (var e = 0; e < b.ha.length; e++) b.ha[e].Rc = 10;
        b.H = c;
        0 < this.va.velocityX && -100 < this.wb.s && (this.wb.s -= this.va.velocityX * a);
        this.va.T = Math.min(Math.max(12 * (zc(this.T) + -49 - this.va.y), -600), 600);
        this.Da = this.va.x;
        this.ha = this.va.y;
        for (b = this.v.length - 1; 0 < b; b--) c = this.v[b], c.De(a), c.update(a), c.ta && this.v.splice(b, 1);
        b = this.ka;
        c = this.v;
        e = this.va;
        var f = this.ha;
        b.U = 49;
        b.v = e.x + 64;
        b.V = e.y + b.U;
        e = Ac(b.V);
        f = e == Ac(f + b.U) ? 0 : 1;
        for (var g = 0; 6 > g; g++) b.s[g] = Number.MAX_VALUE;
        0 < b.H.length && (b.H = []);
        for (g = 0; g < c.length; g++) for (var h = c[g].zd(), k = 0; k < h.length; k++) {
            var m = h[k], n = Ac(m.y), w = m.x, G = m.x + m.width + 40;
            n == e && b.v >= w && b.v <= G && (b.T = new Cc(f, m.v, b.v, b.V), b.H.push(b.T));
            w -= b.v;
            !m.s && b.v < G && (0 > w && (w = 0), w < b.s[n] && (b.s[n] = w))
        }
        b.R = 2;
        for (n = 0; 6 > n; n++) b.s[n] > b.s[b.R] && (b.R = n);
        c = this.ka.H;
        this.$ = !1;
        for (b = 0; b < c.length; b++) e = c[b], e.s.Ad(e);
        this.s && this.s.update(a);
        this.wb.update(a, this.va)
    };
    var Gd = function (a) {
        var b = R;
        if (!b.$) {
            b.$ = !0;
            if (0 == a.type) {
                Ed(b, -3);
                F = !0;
                id(b.wb);
                b.va.x = b.Da;
                b.va.velocityX = 0;
                if (a.s.ma.Ab in rc) {
                    var c = E.get(rc[a.s.ma.Ab]);
                    a.s.ma.Ab == D.Cb && (c.ye = 1.5)
                } else c = E.get(qc[b.level]);
                N(b.va, c);
                P(c, function () {
                    Fd(b)
                })
            }
            Dd(b)
        }
    }, Fd = function (a) {
        var b = a.ka.R;
        Cd(a, b);
        a.va.y = zc(b) + -49;
        b = E.get(sc[a.level]);
        N(a.va, b);
        P(b, function () {
            N(a.va, E.get(pc[a.level]));
            a.va.velocityX = 220;
            Q(a.U.s, "gallop-loop", 1);
            F = !1
        })
    };
    Bd.prototype.W = function (a) {
        this.wb.W(a, this.v)
    };
    var Ed = function (a, b) {
        if (0 < b) {
            a.ya++;
            var c = a.U;
            Q(c.s, "letter", 1);
            Hd(c.s, "letter")
        } else 0 > b && (a.wa++, Q(a.U.s, "gallop-loop", 0), c = a.U, Q(c.s, "impact", 1), Hd(c.s, "impact"));
        a.H = Math.max(0, a.H + b)
    };
    var Id = {
        width: 108,
        height: 121,
        frames: [[[39, 39, 204, 398, 63, 74]], [[62, 28, 591, 177, 20, 7], [41, 40, 0, 329, 65, 73]], [[63, 19, 582, 230, 18, 13], [41, 38, 184, 322, 65, 75]], [[66, 9, 201, 234, 11, 20], [41, 33, 291, 320, 65, 80]], [[67, 4, 72, 237, 10, 20], [38, 26, 395, 284, 68, 87]], [[65, 1, 606, 94, 13, 18], [35, 22, 0, 237, 71, 91]], [[64, 0, 184, 234, 16, 15], [33, 20, 545, 0, 73, 93]], [[63, 0, 602, 219, 17, 13], [31, 20, 108, 234, 75, 93]], [[62, 0, 591, 185, 19, 12], [30, 22, 214, 230, 76, 91]], [[62, 0, 582, 219, 19, 10], [29, 23, 317, 229, 77, 90]], [[62, 0, 395, 229, 19, 10], [27, 24, 502, 207, 79, 89]],
            [[61, 3, 584, 94, 21, 9], [25, 26, 509, 119, 81, 87]], [[61, 7, 584, 104, 21, 9], [25, 29, 420, 199, 81, 84]], [[62, 10, 591, 155, 20, 11], [18, 34, 420, 119, 88, 79]], [[25, 61, 601, 233, 13, 32], [18, 103, 591, 167, 20, 9], [63, 15, 291, 230, 18, 14], [41, 38, 72, 328, 65, 75]], [[18, 72, 591, 114, 20, 40], [41, 20, 464, 297, 65, 93]], [[0, 101, 545, 94, 38, 20], [41, 28, 530, 297, 65, 85]], [[0, 101, 545, 94, 38, 20], [41, 42, 357, 372, 65, 71]], [[0, 101, 545, 94, 38, 20], [43, 58, 530, 383, 65, 55]], [[0, 101, 545, 94, 38, 20], [43, 60, 138, 398, 65, 53]], [[0, 101, 545, 94, 38, 20], [43, 60, 138, 398, 65, 53]], [[0, 101,
                545, 94, 38, 20], [43, 58, 423, 391, 65, 55]], [[0, 101, 545, 94, 38, 20], [41, 37, 381, 447, 53, 76]], [[0, 101, 545, 94, 38, 20], [41, 27, 489, 439, 53, 86]], [[0, 101, 545, 94, 38, 20], [40, 18, 268, 401, 58, 95]], [[0, 11, 214, 119, 102, 110]], [[0, 7, 108, 119, 105, 114]], [[0, 4, 0, 119, 107, 117]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 327, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]],
            [[0, 3, 0, 0, 108, 118]], [[0, 3, 327, 0, 108, 118]], [[0, 3, 327, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 436, 0, 108, 118]], [[0, 12, 317, 119, 102, 109]], [[0, 101, 250, 322, 38, 20], [41, 19, 0, 403, 56, 94]], [[0, 101, 138, 328, 38, 20], [41, 26, 57, 404, 53, 87]], [[0, 101, 250, 343, 38, 20], [41, 31, 543, 439, 53, 82]], [[0, 101, 138, 349, 38, 12], [41, 34, 327, 444, 53, 79]], [[0, 102, 582, 207, 37, 11], [41, 37, 111,
                452, 53, 76]], [[41, 37, 165, 473, 53, 76]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]], [[41, 51, 57, 492, 53, 62]]]
    };
    var Jd = {
        width: 87,
        height: 55,
        frames: [[[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[13, 0, 531, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[24, 49, 593, 0, 32, 6]], [[13, 0, 531, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13,
            0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 0, 56, 61, 55]], [[13, 0, 469, 0, 61, 55]], [[13, 0, 62, 56, 61, 55]], [[13, 1, 248, 56, 61, 54]], [[9, 0, 124, 56, 61, 55]], [[6, 0, 310, 56, 60, 55]], [[0, 0, 186, 56, 61, 55]], [[6, 0, 339, 0, 65, 55]], [[7, 0, 205, 0, 66, 55]], [[9, 0, 272, 0, 66, 55]], [[12, 0, 69, 0, 67, 55]], [[11, 0, 137, 0, 67, 55]], [[10, 0, 536, 56, 51, 55], [62, 3, 593, 7, 16, 15]], [[9, 0, 430, 56, 52, 55], [64, 3, 610, 13, 4, 4], [62, 9, 624, 12, 5, 4], [65, 15, 631, 7, 6, 3], [72, 3, 626, 0, 6, 6], [72, 12, 633, 0, 6, 5]], [[10,
            1, 588, 56, 51, 54], [64, 2, 624, 7, 6, 4], [64, 8, 615, 13, 4, 4], [65, 15, 631, 11, 6, 3], [74, 3, 610, 7, 6, 5], [73, 12, 617, 7, 6, 5]], [[9, 2, 483, 56, 52, 53]], [[12, 0, 371, 56, 58, 55]], [[16, 0, 405, 0, 63, 55]], [[19, 0, 0, 0, 68, 55]]]
    };
    var Kd = {
        width: 108,
        height: 121,
        frames: [[[39, 39, 0, 575, 63, 74]], [[62, 28, 391, 434, 20, 7], [41, 40, 336, 522, 64, 73]], [[63, 19, 401, 358, 18, 13], [41, 38, 0, 499, 64, 75]], [[66, 9, 408, 80, 11, 20], [41, 33, 206, 498, 64, 80]], [[67, 4, 408, 101, 10, 20], [38, 26, 323, 434, 67, 87]], [[65, 1, 403, 302, 13, 18], [35, 22, 252, 352, 70, 91]], [[64, 0, 403, 253, 16, 15], [33, 20, 179, 352, 72, 93]], [[63, 0, 401, 372, 17, 13], [31, 20, 0, 349, 74, 93]], [[62, 0, 391, 442, 19, 12], [30, 22, 103, 348, 75, 91]], [[62, 0, 391, 455, 19, 10], [29, 23, 324, 343, 76, 90]], [[62, 0, 391, 466, 19, 10], [27, 24, 324, 253, 78, 89]],
            [[61, 3, 75, 349, 21, 9], [25, 26, 327, 80, 80, 87]], [[61, 7, 75, 359, 21, 9], [25, 29, 326, 168, 80, 84]], [[62, 10, 75, 410, 20, 11], [18, 34, 327, 0, 87, 79]], [[25, 61, 403, 269, 13, 32], [18, 103, 75, 422, 20, 9], [63, 15, 401, 343, 18, 14], [41, 38, 271, 522, 64, 75]], [[18, 72, 75, 369, 20, 40], [41, 20, 141, 446, 64, 93]], [[0, 101, 206, 446, 38, 20], [41, 28, 66, 496, 64, 85]], [[0, 101, 206, 446, 38, 20], [41, 42, 131, 540, 64, 71]], [[0, 101, 206, 446, 38, 20], [43, 58, 75, 440, 65, 55]], [[0, 101, 206, 446, 38, 20], [43, 60, 252, 444, 65, 53]], [[0, 101, 206, 446, 38, 20], [43, 60, 252, 444, 65, 53]], [[0, 101, 206,
                446, 38, 20], [43, 58, 0, 443, 65, 55]], [[0, 101, 206, 446, 38, 20], [41, 37, 176, 675, 54, 76]], [[0, 101, 206, 446, 38, 20], [41, 27, 255, 598, 54, 86]], [[0, 101, 206, 446, 38, 20], [40, 18, 196, 579, 58, 95]], [[0, 11, 0, 238, 102, 110]], [[0, 7, 218, 237, 105, 114]], [[0, 4, 218, 119, 107, 117]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 0, 119, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0,
                3, 0, 0, 108, 118]], [[0, 3, 0, 119, 108, 118]], [[0, 3, 0, 119, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 109, 119, 108, 118]], [[0, 12, 103, 238, 102, 109]], [[0, 101, 206, 467, 38, 20], [41, 19, 64, 582, 56, 94]], [[0, 101, 271, 498, 38, 20], [41, 26, 336, 596, 54, 87]], [[0, 101, 231, 685, 38, 20], [41, 31, 121, 612, 54, 82]], [[0, 101, 270, 685, 38, 12], [41, 34, 0, 650, 54, 79]], [[0, 102, 110, 695, 37, 11], [41, 37, 55, 677,
                54, 76]], [[41, 37, 310, 684, 54, 76]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]], [[41, 51, 365, 684, 54, 62]]]
    };
    var Ld = {
        width: 85,
        height: 55,
        frames: [[[22, 49, 166, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[22, 49, 200, 112, 33, 6]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]],
            [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[10, 0, 274, 0, 62, 55]], [[13, 0, 123, 56, 59, 55]], [[11, 0, 337, 0, 61, 55]], [[11, 1, 0, 56, 61, 54]], [[4, 0, 142, 0, 65, 55]], [[7, 0, 183, 56, 58, 55]], [[6, 0, 298, 56, 54, 55]], [[7, 0, 353, 56, 53, 55]], [[10, 0, 115, 112, 50, 55]], [[9, 0, 295, 112, 51, 55]], [[9, 0, 347, 112, 51, 55]], [[8, 0, 62, 110, 52, 55]], [[8, 0, 0, 111, 52, 55]], [[8, 1, 242, 111, 52, 54]], [[5, 1, 242, 56, 55, 54]], [[0, 2, 62, 56, 60, 53]], [[4, 0, 208, 0, 65, 55]], [[7, 0, 0, 0, 70, 55]],
            [[15, 0, 71, 0, 70, 55]]]
    };
    var Md = {
        width: 108,
        height: 121,
        frames: [[[38, 39, 141, 412, 64, 74]], [[62, 28, 404, 202, 20, 7], [41, 40, 0, 416, 64, 73]], [[63, 19, 186, 248, 18, 13], [41, 38, 444, 398, 64, 75]], [[66, 9, 203, 262, 11, 20], [41, 33, 254, 381, 64, 80]], [[67, 4, 310, 262, 10, 20], [38, 26, 186, 324, 67, 87]], [[65, 1, 296, 262, 13, 18], [35, 22, 444, 306, 70, 91]], [[64, 0, 186, 262, 16, 15], [33, 20, 371, 306, 72, 93]], [[63, 0, 76, 249, 17, 13], [31, 20, 296, 287, 74, 93]], [[62, 0, 296, 234, 19, 12], [30, 22, 0, 238, 75, 91]], [[62, 0, 186, 237, 19, 10], [29, 23, 109, 237, 76, 90]], [[62, 0, 76, 238, 19, 10], [27, 24, 217, 234, 78,
            89]], [[61, 3, 411, 119, 21, 9], [25, 26, 323, 199, 80, 87]], [[61, 7, 411, 129, 21, 9], [25, 29, 404, 221, 80, 84]], [[62, 10, 411, 180, 20, 11], [18, 34, 323, 119, 87, 79]], [[25, 61, 94, 249, 13, 32], [18, 103, 411, 192, 20, 9], [63, 15, 296, 247, 18, 14], [41, 38, 319, 400, 64, 75]], [[18, 72, 411, 139, 20, 40], [41, 20, 76, 328, 64, 93]], [[0, 101, 254, 324, 38, 20], [41, 28, 0, 330, 64, 85]], [[0, 101, 254, 324, 38, 20], [41, 42, 65, 422, 64, 71]], [[0, 101, 254, 324, 38, 20], [44, 58, 206, 462, 64, 55]], [[0, 101, 254, 324, 38, 20], [44, 60, 449, 474, 64, 53]], [[0, 101, 254, 324, 38, 20], [44, 60, 449, 474, 64, 53]], [[0,
            101, 254, 324, 38, 20], [44, 58, 384, 474, 64, 55]], [[0, 101, 254, 324, 38, 20], [41, 37, 449, 528, 54, 76]], [[0, 101, 254, 324, 38, 20], [41, 27, 55, 494, 54, 86]], [[0, 101, 254, 324, 38, 20], [40, 18, 271, 476, 58, 95]], [[0, 11, 436, 0, 102, 110]], [[0, 7, 217, 119, 105, 114]], [[0, 4, 109, 119, 107, 117]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 327, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108,
            118]], [[0, 3, 0, 0, 108, 118]], [[0, 3, 327, 0, 108, 118]], [[0, 3, 327, 0, 108, 118]], [[0, 3, 109, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 218, 0, 108, 118]], [[0, 3, 0, 119, 108, 118]], [[0, 12, 436, 111, 102, 109]], [[0, 101, 141, 328, 38, 20], [41, 19, 130, 487, 56, 94]], [[0, 101, 254, 345, 38, 20], [41, 26, 0, 490, 54, 87]], [[0, 101, 141, 349, 38, 20], [41, 31, 485, 221, 54, 82]], [[0, 101, 254, 366, 38, 12], [41, 34, 187, 518, 54, 79]], [[0, 102, 141, 370, 37, 11], [41,
            37, 330, 530, 54, 76]], [[41, 37, 385, 530, 54, 76]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]], [[41, 51, 384, 400, 54, 62]]]
    };
    var Nd = {
        width: 118,
        height: 50,
        frames: [[[0, 0, 0, 0, 73, 50]], [[7, 0, 74, 0, 73, 50]], [[14, 0, 148, 0, 73, 50]], [[20, 0, 148, 0, 73, 50]], [[26, 0, 222, 0, 73, 50]], [[30, 0, 148, 0, 73, 50]], [[34, 0, 296, 0, 73, 50]], [[38, 0, 370, 0, 73, 50]], [[40, 0, 444, 0, 73, 50]], [[42, 0, 222, 0, 73, 50]], [[43, 0, 0, 51, 73, 50]], [[43, 0, 296, 0, 73, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74,
            51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0,
            74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]], [[54, 0, 74, 51, 64, 50]]]
    };
    var Od = {
        width: 237,
        height: 133,
        frames: [[[0, 0, 0, 0, 237, 131]], [[22, 0, 465, 133, 215, 131]], [[11, 0, 238, 131, 226, 131]], [[0, 1, 238, 0, 237, 130]], [[54, 1, 0, 266, 183, 132]], [[43, 1, 421, 265, 194, 131]], [[33, 0, 216, 263, 204, 132]], [[22, 0, 0, 132, 215, 133]], [[11, 0, 476, 0, 226, 132]]]
    };
    var Pd = {
        width: 320,
        height: 179,
        frames: [[[0, 0, 0, 0, 320, 179]], [[0, 35, 0, 891, 86, 120], [156, 52, 547, 717, 129, 82]], [[0, 35, 113, 844, 96, 120]], [[0, 35, 376, 825, 105, 120]], [[0, 35, 0, 770, 112, 120]], [[0, 35, 256, 734, 119, 120]], [[0, 35, 130, 723, 125, 120]], [[0, 35, 139, 602, 131, 120]], [[0, 35, 574, 596, 135, 120]], [[0, 35, 144, 481, 139, 120]], [[0, 35, 294, 476, 142, 120]], [[0, 35, 149, 361, 144, 119]], [[0, 35, 397, 355, 145, 120]], [[0, 35, 543, 359, 145, 119]], [[0, 35, 0, 312, 148, 118]], [[0, 34, 575, 239, 158, 119]], [[13, 34, 397, 240, 150, 114]], [[28, 34, 437, 595, 136, 112]], [[29,
            27, 835, 360, 128, 108]], [[36, 19, 830, 477, 131, 100]], [[71, 14, 845, 578, 103, 78]], [[82, 12, 294, 361, 97, 56]], [[90, 12, 294, 418, 92, 52]], [[99, 12, 845, 657, 86, 49]], [[106, 12, 763, 936, 82, 50]], [[115, 13, 654, 942, 79, 50]], [[122, 13, 385, 946, 77, 51]], [[132, 14, 887, 236, 76, 53]], [[139, 14, 846, 936, 80, 58]], [[146, 15, 568, 914, 85, 70]], [[153, 16, 284, 597, 132, 136]], [[40, 21, 0, 180, 245, 131]], [[32, 31, 321, 118, 253, 121]], [[33, 34, 575, 120, 252, 118]], [[29, 34, 587, 0, 256, 119]], [[20, 36, 321, 0, 265, 117]], [[9, 50, 0, 431, 143, 102], [175, 80, 129, 965, 38, 41]], [[5, 62, 887,
            290, 46, 52], [67, 106, 887, 343, 17, 6], [94, 96, 957, 21, 5, 3], [86, 106, 887, 350, 12, 7], [128, 80, 949, 601, 12, 12], [175, 80, 246, 971, 37, 41]], [[5, 82, 149, 312, 46, 41], [177, 81, 376, 734, 39, 40]], [[8, 82, 196, 312, 43, 44], [184, 81, 606, 985, 33, 39]], [[13, 81, 376, 775, 38, 48]], [[19, 81, 768, 987, 32, 48]], [], [], [[249, 61, 905, 343, 16, 16]], [[248, 58, 417, 597, 18, 18]], [[248, 60, 548, 299, 19, 14]], [[248, 59, 294, 217, 19, 17]], [[156, 35, 0, 652, 129, 117]], [[156, 36, 417, 708, 129, 116]], [[147, 35, 0, 534, 138, 117]], [[143, 35, 828, 120, 135, 115]], [[129, 35, 437, 479, 140, 115]], [[129,
            65, 246, 180, 47, 53], [190, 128, 417, 616, 16, 23], [219, 107, 548, 240, 22, 34], [253, 50, 934, 321, 26, 21]], [[140, 65, 168, 965, 38, 41], [220, 103, 294, 180, 22, 36], [253, 48, 677, 717, 31, 25]], [[145, 64, 927, 971, 33, 42], [221, 103, 677, 790, 30, 34], [254, 47, 734, 987, 33, 28]], [[148, 63, 932, 657, 31, 42], [221, 105, 806, 898, 30, 28], [254, 47, 763, 898, 42, 29]], [[151, 62, 640, 993, 28, 44], [221, 105, 677, 743, 31, 25], [255, 46, 87, 965, 41, 31]], [[150, 62, 801, 987, 30, 45], [221, 108, 677, 769, 31, 20], [257, 44, 207, 971, 38, 34]], [[149, 36, 578, 479, 109, 116], [259, 44, 927, 936, 35, 34]], [[149,
            38, 840, 821, 109, 114], [260, 40, 548, 314, 18, 26], [265, 68, 949, 578, 14, 9], [281, 43, 548, 341, 17, 14], [281, 63, 922, 343, 15, 12]], [[148, 39, 547, 800, 110, 113], [264, 40, 938, 343, 14, 11], [263, 54, 271, 602, 11, 10], [266, 68, 949, 614, 12, 9], [285, 43, 830, 578, 13, 13], [283, 63, 949, 588, 13, 12]], [[148, 39, 710, 709, 129, 116]], [[155, 37, 689, 477, 140, 118]], [[162, 35, 246, 240, 150, 120]], [[168, 35, 734, 239, 152, 120]], [[175, 39, 689, 360, 145, 116]], [[186, 43, 710, 596, 134, 112]], [[197, 44, 840, 709, 123, 111]], [[208, 42, 844, 0, 112, 113]], [[216, 40, 658, 826, 104, 115]], [[225, 40,
            210, 855, 95, 115]], [[235, 47, 482, 914, 85, 108]], [[242, 56, 306, 946, 78, 99]], [[251, 84, 763, 826, 69, 71]], [[264, 82, 482, 825, 56, 72]], [[272, 76, 306, 855, 48, 78]], [[283, 75, 568, 985, 37, 26], [315, 118, 957, 10, 5, 10], [314, 144, 957, 0, 6, 9]], [[291, 75, 934, 290, 29, 30]], [[301, 82, 548, 275, 19, 23]]]
    };
    var Qd = {
        width: 320,
        height: 179,
        frames: [[[0, 0, 0, 0, 320, 179]], [[0, 35, 302, 848, 86, 120], [178, 52, 0, 767, 107, 84]], [[0, 35, 740, 820, 96, 120]], [[0, 35, 108, 785, 104, 120]], [[0, 35, 522, 697, 112, 120]], [[0, 36, 124, 665, 119, 119]], [[0, 35, 396, 614, 125, 120]], [[0, 35, 0, 535, 130, 120]], [[0, 35, 0, 414, 135, 120]], [[0, 35, 619, 357, 139, 120]], [[0, 35, 298, 242, 142, 120]], [[0, 35, 765, 240, 144, 120]], [[0, 35, 152, 180, 145, 119]], [[0, 36, 473, 240, 145, 119]], [[3, 35, 802, 585, 128, 119], [132, 77, 566, 198, 5, 6]], [[0, 34, 575, 119, 158, 120]], [[13, 34, 0, 180, 151, 114]], [[28, 34,
            759, 361, 136, 112]], [[29, 27, 759, 474, 135, 110]], [[36, 19, 540, 478, 131, 101]], [[71, 15, 466, 818, 103, 77]], [[82, 12, 473, 121, 97, 56]], [[90, 12, 473, 178, 92, 52]], [[98, 12, 213, 822, 88, 49]], [[106, 12, 213, 872, 82, 50]], [[114, 13, 471, 896, 80, 51]], [[123, 13, 86, 906, 76, 52]], [[132, 14, 552, 896, 76, 54]], [[139, 14, 389, 896, 81, 58]], [[146, 15, 672, 478, 84, 71]], [[153, 17, 407, 478, 132, 135]], [[41, 37, 896, 361, 42, 41], [137, 85, 282, 300, 14, 14], [155, 21, 136, 533, 130, 131]], [[32, 32, 321, 0, 253, 120]], [[33, 34, 575, 0, 252, 118]], [[30, 42, 671, 585, 130, 112], [188, 34, 629, 928,
            53, 86]], [[20, 43, 282, 363, 136, 111], [182, 35, 233, 923, 57, 86]], [[9, 52, 837, 936, 43, 49], [56, 121, 298, 180, 20, 32], [87, 121, 910, 239, 26, 31], [117, 65, 282, 315, 14, 12], [176, 81, 730, 941, 37, 41]], [[5, 62, 683, 928, 46, 52], [176, 81, 768, 941, 37, 41]], [[5, 82, 887, 197, 46, 41], [177, 81, 896, 464, 39, 41]], [[8, 82, 389, 848, 43, 44], [186, 82, 542, 951, 31, 39]], [[13, 82, 895, 506, 38, 46]], [[19, 82, 509, 948, 32, 46]], [], [], [[250, 61, 419, 455, 15, 17]], [[248, 58, 419, 363, 19, 18]], [[248, 60, 419, 400, 19, 15]], [[248, 59, 419, 382, 19, 17]], [[177, 35, 828, 0, 109, 117]], [[156, 36, 540,
            580, 130, 116]], [[147, 35, 441, 360, 139, 117]], [[143, 35, 136, 416, 135, 116]], [[129, 36, 141, 300, 140, 115]], [[129, 65, 466, 735, 47, 54], [190, 129, 419, 416, 17, 23], [219, 107, 574, 951, 22, 35], [253, 50, 910, 271, 26, 21]], [[141, 65, 471, 948, 37, 41], [220, 103, 910, 293, 22, 36], [253, 48, 710, 550, 31, 25]], [[145, 64, 581, 395, 33, 42], [221, 103, 441, 288, 30, 34], [254, 47, 581, 438, 33, 28]], [[148, 63, 433, 848, 31, 42], [222, 105, 355, 705, 29, 28], [254, 47, 896, 403, 42, 29]], [[151, 62, 806, 941, 29, 44], [222, 105, 441, 323, 30, 25], [255, 47, 896, 433, 41, 30]], [[150, 62, 441, 242, 30, 45],
            [222, 108, 895, 553, 30, 20], [257, 44, 881, 936, 38, 34]], [[148, 36, 244, 705, 110, 116], [259, 44, 581, 360, 35, 34]], [[148, 38, 748, 705, 110, 114], [259, 41, 298, 213, 19, 25], [265, 68, 441, 349, 13, 9], [281, 43, 419, 440, 17, 14], [281, 63, 742, 550, 15, 12]], [[148, 40, 355, 735, 110, 112], [264, 41, 282, 328, 14, 10], [263, 54, 926, 553, 11, 10], [266, 68, 455, 349, 12, 9], [285, 43, 282, 339, 13, 13], [283, 63, 742, 563, 13, 12]], [[148, 39, 267, 588, 128, 116]], [[155, 37, 0, 295, 140, 118]], [[161, 35, 321, 121, 151, 120]], [[168, 35, 734, 119, 152, 120]], [[175, 39, 619, 240, 145, 116]], [[186, 43, 272,
            475, 134, 112]], [[197, 45, 0, 656, 123, 110]], [[208, 42, 635, 698, 112, 113]], [[216, 40, 635, 812, 104, 115]], [[224, 40, 837, 820, 96, 115]], [[235, 47, 0, 852, 85, 108]], [[242, 56, 859, 705, 78, 99]], [[251, 84, 163, 923, 69, 71]], [[264, 82, 570, 818, 56, 72]], [[272, 76, 887, 118, 48, 78]], [[283, 75, 672, 550, 37, 26], [315, 118, 566, 187, 5, 10], [314, 145, 566, 178, 6, 8]], [[291, 75, 213, 785, 29, 30]], [[301, 82, 910, 330, 19, 23]]]
    };
    var Rd;
    a:{
        var Sd = l.navigator;
        if (Sd) {
            var Td = Sd.userAgent;
            if (Td) {
                Rd = Td;
                break a
            }
        }
        Rd = ""
    }
    var S = function (a) {
        return x(Rd, a)
    };
    var Ud = function () {
        return S("Trident") || S("MSIE")
    };
    var Vd = function (a, b) {
        this.H = a;
        this.R = b;
        this.v = 0;
        this.s = null
    };
    Vd.prototype.get = function () {
        if (0 < this.v) {
            this.v--;
            var a = this.s;
            this.s = a.next;
            a.next = null
        } else a = this.H();
        return a
    };
    var Wd = function (a, b) {
        a.R(b);
        100 > a.v && (a.v++, b.next = a.s, a.s = b)
    };
    var Xd = function (a) {
        l.setTimeout(function () {
            throw a;
        }, 0)
    }, Yd, Zd = function () {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !S("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                e = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = r(function (a) {
                if (("*" == e || a.origin == e) && a.data == c) this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, e)
                }
            }
        });
        if ("undefined" !== typeof a && !Ud()) {
            var b = new a, c = {}, e = c;
            b.port1.onmessage = function () {
                if (p(c.next)) {
                    c = c.next;
                    var a = c.cb;
                    c.cb = null;
                    a()
                }
            };
            return function (a) {
                e.next = {cb: a};
                e = e.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            l.setTimeout(a, 0)
        }
    };
    var $d = function () {
        this.v = this.s = null
    }, be = new Vd(function () {
        return new ae
    }, function (a) {
        a.reset()
    });
    $d.prototype.add = function (a, b) {
        var c = be.get();
        c.set(a, b);
        this.v ? this.v.next = c : this.s = c;
        this.v = c
    };
    var de = function () {
        var a = ce, b = null;
        a.s && (b = a.s, a.s = a.s.next, a.s || (a.v = null), b.next = null);
        return b
    }, ae = function () {
        this.next = this.v = this.s = null
    };
    ae.prototype.set = function (a, b) {
        this.s = a;
        this.v = b;
        this.next = null
    };
    ae.prototype.reset = function () {
        this.next = this.v = this.s = null
    };
    var he = function (a, b) {
        ee || fe();
        ge || (ee(), ge = !0);
        ce.add(a, b)
    }, ee, fe = function () {
        if (-1 != String(l.Promise).indexOf("[native code]")) {
            var a = l.Promise.resolve(void 0);
            ee = function () {
                a.then(ie)
            }
        } else ee = function () {
            var a = ie;
            !ra(l.setImmediate) || l.Window && l.Window.prototype && !S("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Yd || (Yd = Zd()), Yd(a)) : l.setImmediate(a)
        }
    }, ge = !1, ce = new $d, ie = function () {
        for (var a; a = de();) {
            try {
                a.s.call(a.v)
            } catch (b) {
                Xd(b)
            }
            Wd(be, a)
        }
        ge = !1
    };
    var je = function (a) {
        je[" "](a);
        return a
    };
    je[" "] = oa;
    var le = function (a, b) {
        var c = ke;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var me = S("Opera"), ne = Ud(), oe = S("Edge"),
        pe = S("Gecko") && !(x(Rd.toLowerCase(), "webkit") && !S("Edge")) && !(S("Trident") || S("MSIE")) && !S("Edge"),
        qe = x(Rd.toLowerCase(), "webkit") && !S("Edge"), re = S("Windows"), se = function () {
            var a = l.document;
            return a ? a.documentMode : void 0
        }, te;
    a:{
        var ue = "", ve = function () {
            var a = Rd;
            if (pe) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (oe) return /Edge\/([\d\.]+)/.exec(a);
            if (ne) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (qe) return /WebKit\/(\S+)/.exec(a);
            if (me) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        ve && (ue = ve ? ve[1] : "");
        if (ne) {
            var we = se();
            if (null != we && we > parseFloat(ue)) {
                te = String(we);
                break a
            }
        }
        te = ue
    }
    var xe = te, ke = {}, ye = function (a) {
        return le(a, function () {
            for (var b = 0, c = Ia(String(xe)).split("."), e = Ia(String(a)).split("."), f = Math.max(c.length, e.length), g = 0; 0 == b && g < f; g++) {
                var h = c[g] || "", k = e[g] || "";
                do {
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == h[0].length && 0 == k[0].length) break;
                    b = Ja(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Ja(0 == h[2].length, 0 == k[2].length) || Ja(h[2], k[2]);
                    h = h[3];
                    k = k[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, ze;
    var Ae = l.document;
    ze = Ae && ne ? se() || ("CSS1Compat" == Ae.compatMode ? parseInt(xe, 10) : 5) : void 0;
    var Be = function (a, b) {
        this.width = a;
        this.height = b
    };
    d = Be.prototype;
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
        var c = na(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var Ce = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, De = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var T = function (a, b) {
        this.s = 0;
        this.V = void 0;
        this.R = this.v = this.H = null;
        this.T = this.U = !1;
        if (a != oa) try {
            var c = this;
            a.call(b, function (a) {
                Ee(c, 2, a)
            }, function (a) {
                Ee(c, 3, a)
            })
        } catch (e) {
            Ee(this, 3, e)
        }
    }, Fe = function () {
        this.next = this.H = this.v = this.R = this.s = null;
        this.T = !1
    };
    Fe.prototype.reset = function () {
        this.H = this.v = this.R = this.s = null;
        this.T = !1
    };
    var Ge = new Vd(function () {
        return new Fe
    }, function (a) {
        a.reset()
    }), He = function (a, b, c) {
        var e = Ge.get();
        e.R = a;
        e.v = b;
        e.H = c;
        return e
    };
    T.prototype.then = function (a, b, c) {
        return Ie(this, ra(a) ? a : null, ra(b) ? b : null, c)
    };
    Ce(T);
    T.prototype.cancel = function (a) {
        0 == this.s && he(function () {
            var b = new Je(a);
            Ke(this, b)
        }, this)
    };
    var Ke = function (a, b) {
        if (0 == a.s) if (a.H) {
            var c = a.H;
            if (c.v) {
                for (var e = 0, f = null, g = null, h = c.v; h && (h.T || (e++, h.s == a && (f = h), !(f && 1 < e))); h = h.next) f || (g = h);
                f && (0 == c.s && 1 == e ? Ke(c, b) : (g ? (e = g, e.next == c.R && (c.R = e), e.next = e.next.next) : Le(c), Me(c, f, 3, b)))
            }
            a.H = null
        } else Ee(a, 3, b)
    }, Oe = function (a, b) {
        a.v || 2 != a.s && 3 != a.s || Ne(a);
        a.R ? a.R.next = b : a.v = b;
        a.R = b
    }, Ie = function (a, b, c, e) {
        var f = He(null, null, null);
        f.s = new T(function (a, h) {
            f.R = b ? function (c) {
                try {
                    var f = b.call(e, c);
                    a(f)
                } catch (n) {
                    h(n)
                }
            } : a;
            f.v = c ? function (b) {
                try {
                    var f = c.call(e,
                        b);
                    !p(f) && b instanceof Je ? h(b) : a(f)
                } catch (n) {
                    h(n)
                }
            } : h
        });
        f.s.H = a;
        Oe(a, f);
        return f.s
    };
    T.prototype.ka = function (a) {
        this.s = 0;
        Ee(this, 2, a)
    };
    T.prototype.ha = function (a) {
        this.s = 0;
        Ee(this, 3, a)
    };
    var Ee = function (a, b, c) {
        if (0 == a.s) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.s = 1;
            a:{
                var e = c, f = a.ka, g = a.ha;
                if (e instanceof T) {
                    Oe(e, He(f || oa, g || null, a));
                    var h = !0
                } else if (De(e)) e.then(f, g, a), h = !0; else {
                    if (sa(e)) try {
                        var k = e.then;
                        if (ra(k)) {
                            Pe(e, k, f, g, a);
                            h = !0;
                            break a
                        }
                    } catch (m) {
                        g.call(a, m);
                        h = !0;
                        break a
                    }
                    h = !1
                }
            }
            h || (a.V = c, a.s = b, a.H = null, Ne(a), 3 != b || c instanceof Je || Qe(a, c))
        }
    }, Pe = function (a, b, c, e, f) {
        var g = !1, h = function (a) {
            g || (g = !0, c.call(f, a))
        }, k = function (a) {
            g || (g = !0, e.call(f, a))
        };
        try {
            b.call(a,
                h, k)
        } catch (m) {
            k(m)
        }
    }, Ne = function (a) {
        a.U || (a.U = !0, he(a.$, a))
    }, Le = function (a) {
        var b = null;
        a.v && (b = a.v, a.v = b.next, b.next = null);
        a.v || (a.R = null);
        return b
    };
    T.prototype.$ = function () {
        for (var a; a = Le(this);) Me(this, a, this.s, this.V);
        this.U = !1
    };
    var Me = function (a, b, c, e) {
        if (3 == c && b.v && !b.T) for (; a && a.T; a = a.H) a.T = !1;
        if (b.s) b.s.H = null, Re(b, c, e); else try {
            b.T ? b.R.call(b.H) : Re(b, c, e)
        } catch (f) {
            Se.call(null, f)
        }
        Wd(Ge, b)
    }, Re = function (a, b, c) {
        2 == b ? a.R.call(a.H, c) : a.v && a.v.call(a.H, c)
    }, Qe = function (a, b) {
        a.T = !0;
        he(function () {
            a.T && Se.call(null, b)
        })
    }, Se = Xd, Je = function (a) {
        u.call(this, a)
    };
    t(Je, u);
    Je.prototype.name = "cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var Te = function (a, b) {
        this.T = [];
        this.wa = a;
        this.ra = b || null;
        this.R = this.s = !1;
        this.v = void 0;
        this.ka = this.ya = this.V = !1;
        this.U = 0;
        this.H = null;
        this.$ = 0
    };
    Te.prototype.cancel = function (a) {
        if (this.s) this.v instanceof Te && this.v.cancel(); else {
            if (this.H) {
                var b = this.H;
                delete this.H;
                a ? b.cancel(a) : (b.$--, 0 >= b.$ && b.cancel())
            }
            this.wa ? this.wa.call(this.ra, this) : this.ka = !0;
            if (!this.s) {
                a = new Ue(this);
                if (this.s) {
                    if (!this.ka) throw new Ve(this);
                    this.ka = !1
                }
                this.s = !0;
                this.v = a;
                this.R = !0;
                We(this)
            }
        }
    };
    Te.prototype.ha = function (a, b) {
        this.V = !1;
        this.s = !0;
        this.v = b;
        this.R = !a;
        We(this)
    };
    var Xe = function (a, b, c) {
        a.T.push([b, c, void 0]);
        a.s && We(a)
    };
    Te.prototype.then = function (a, b, c) {
        var e, f, g = new T(function (a, b) {
            e = a;
            f = b
        });
        Xe(this, e, function (a) {
            a instanceof Ue ? g.cancel() : f(a)
        });
        return g.then(a, b, c)
    };
    Ce(Te);
    var Ye = function (a) {
        return Ca(a.T, function (a) {
            return ra(a[1])
        })
    }, We = function (a) {
        if (a.U && a.s && Ye(a)) {
            var b = a.U, c = Ze[b];
            c && (l.clearTimeout(c.s), delete Ze[b]);
            a.U = 0
        }
        a.H && (a.H.$--, delete a.H);
        b = a.v;
        for (var e = c = !1; a.T.length && !a.V;) {
            var f = a.T.shift(), g = f[0], h = f[1];
            f = f[2];
            if (g = a.R ? h : g) try {
                var k = g.call(f || a.ra, b);
                p(k) && (a.R = a.R && (k == b || k instanceof Error), a.v = b = k);
                if (De(b) || "function" === typeof l.Promise && b instanceof l.Promise) e = !0, a.V = !0
            } catch (m) {
                b = m, a.R = !0, Ye(a) || (c = !0)
            }
        }
        a.v = b;
        e && (k = r(a.ha, a, !0), e = r(a.ha,
            a, !1), b instanceof Te ? (Xe(b, k, e), b.ya = !0) : b.then(k, e));
        c && (b = new $e(b), Ze[b.s] = b, a.U = b.s)
    }, Ve = function () {
        u.call(this)
    };
    t(Ve, u);
    Ve.prototype.message = "Deferred has already fired";
    Ve.prototype.name = "AlreadyCalledError";
    var Ue = function () {
        u.call(this)
    };
    t(Ue, u);
    Ue.prototype.message = "Deferred was canceled";
    Ue.prototype.name = "CanceledError";
    var $e = function (a) {
        this.s = l.setTimeout(r(this.H, this), 0);
        this.v = a
    };
    $e.prototype.H = function () {
        delete Ze[this.s];
        throw this.v;
    };
    var Ze = {};
    var af = function () {
        this.s = null
    };
    af.prototype.reset = function () {
        this.s = null
    };
    af.prototype.call = function (a, b) {
        b++;
        b >= a && (b = a - 1);
        return b
    };
    var bf = function (a, b, c, e) {
        this.H = a;
        this.R = b;
        this.V = c;
        this.U = e;
        this.v = -1;
        this.s = 0;
        this.T = new af
    }, df = function (a, b) {
        0 == b && cf(a);
        for (var c = a.R.frames[b], e = 0; e < c.length; e++) {
            var f = c[e], g = f[4], h = f[5];
            a.H.drawImage(a.V, f[2] + a.U.x, f[3] + a.U.y, g, h, f[0], f[1], g, h)
        }
    }, ef = function (a) {
        a.v > a.s && (a.v = -1);
        for (a.v == a.s && df(a, a.s); a.v < a.s;) df(a, ++a.v)
    }, cf = function (a) {
        a.H.clearRect(0, 0, a.R.width, a.R.height)
    };
    bf.prototype.reset = function () {
        cf(this);
        this.s = 0;
        this.v = -1;
        this.T.reset()
    };
    var ff = function (a, b) {
        for (var c = a.length, e = function () {
            c--;
            0 == c && b && b()
        }, f = 0; f < a.length; f++) lc(a[f], e)
    }, gf = function (a, b) {
        var c = Ib(b), e = a.getBoundingClientRect();
        if (yc) {
            var f = 360 / e.width;
            return 360 - f * (c[0] - e.left)
        }
        f = 360 / e.height;
        return f * (c[1] - e.top)
    }, hf = function (a, b) {
        var c = Ib(b), e = a.getBoundingClientRect();
        if (yc) {
            var f = 640 / e.height;
            return f * (c[1] - e.top)
        }
        f = 640 / e.width;
        return f * (c[0] - e.left)
    };
    var jf = function (a, b, c, e) {
        this.Ab = a[0];
        this.Lb = this.Ab.join(",");
        this.U = a;
        this.s = c;
        this.V = e;
        this.H = -1;
        this.R = [];
        this.T = b;
        this.yb = b * a.length;
        this.width = a[0][3] / b;
        this.height = a[0][4];
        if (0 == this.width && 0 == this.height) throw Error("g");
        this.Wa = 0;
        this.Zb = null;
        this.yd = 24;
        this.$b = !1;
        this.scale = 1;
        this.v = this.ye = 0;
        if (0 < this.s.length) {
            for (a = 0; a < this.s.length; ++a) {
                var f = this.U[a];
                b = this.s[a];
                c = document.createElement("canvas");
                c.width = b.width;
                c.height = b.height;
                e = jc(kc, f).s;
                f = {x: f[1], y: f[2]};
                this.R.push(new bf(c.getContext("2d"),
                    b, e, f))
            }
            for (a = this.yb = 0; b = this.s[a++];) this.yb += b.frames.length;
            this.width = this.s[0].width;
            this.height = this.s[0].height
        }
    };
    jf.prototype.update = function (a) {
        this.$b || (this.v += a, this.v >= this.ye && (this.Wa += this.yd * a, this.Wa >= this.yb && (this.Wa = 0, this.H = -1, this.v = 0, this.Zb && this.Zb())))
    };
    var P = function (a, b) {
        a.Zb = b
    };
    jf.prototype.W = function (a, b, c, e, f) {
        var g = void 0 == e ? this.width : e, h = void 0 == f ? this.height : f;
        f = g * this.scale;
        e = h * this.scale;
        b -= (f - g) / 2;
        c -= (e - h) / 2;
        g = Math.floor(this.Wa);
        if (0 < this.s.length) {
            for (var k = 0, m = 0; h = this.s[m]; ++m) h = h.frames.length, g >= h && (g -= h, ++k);
            m = this.R[k];
            var n = m.H;
            h = this.s[k];
            if (this.V) for (k = this.H + 1; k <= g; k++) {
                var w = m, G = k;
                w.s = G;
                w.T.s = wa() - 0 * G;
                ef(m)
            } else this.H != g && (n.clearRect(0, 0, h.width, h.height), k = g, m.s = k, m.T.s = wa() - 0 * k, ef(m));
            a.drawImage(n.canvas, 0, 0, h.width, h.height, b, c, f, e);
            this.H = g
        } else mc(kc,
            a, this.U[Math.floor(this.Wa / this.T)], g % this.T * this.width, this.width, this.height, b, c, f, e)
    };
    jf.prototype.pause = function () {
        this.$b = !0
    };
    var vd = function (a, b) {
        0 <= b && b < a.yb && (a.Wa = b)
    };
    var sf = function () {
        var a = [[[D.ee], 1], [[D.Mb], 2], [[D.Pd], 1], [[D.Qd], 1], [[D.ue], 1], [[D.Ta], 20], [[D.Fd], tc.frames.length, [tc]], [[D.Nb], uc.frames.length, [uc]], [[D.hc], vc.frames.length, [vc]], [[D.Ob], Ec.frames.length, [Ec]], [[D.Cb], Fc.frames.length, [Fc]], [[D.Gd], Pd.frames.length, [Pd], !0], [[D.Hd], Qd.frames.length, [Qd], !0], [[D.jc], Id.frames.length, [Id]], [[D.Pb], Jd.frames.length, [Jd]], [[D.kc], Kd.frames.length, [Kd]], [[D.lc], Ld.frames.length, [Ld]], [[D.mc], Md.frames.length, [Md]], [[D.nc], Nd.frames.length, [Nd]],
            [[D.Tc], Od.frames.length, [Od]], [[D.Id], kf.frames.length, [kf]], [[D.Jd], lf.frames.length, [lf]], [[D.Qb], mf.frames.length, [mf]], [[D.Ld], nf.frames.length, [nf]], [[D.Md], of.frames.length, [of]], [[D.Nd], pf.frames.length, [pf]], [[D.Kd], qf.frames.length, [qf]], [[D.Rb], rf.frames.length, [rf]], [[D.Od], 1], [[D.Sb], 9], [[D.Db], 1], [[D.mb], 1], [[D.nb], 1], [[D.qc], 9], [[D.sc], 9], [[D.Sd], 1], [[D.Td], 2], [[D.tc], 8], [[D.S], 15], [[D.Xa], 1], [[D.uc], 1], [[D.vc], 1], [[D.Ua], 1], [[D.Ba], 1], [[D.Uc], 1], [[D.wc], 1], [[D.xc], 1], [[D.Vc], 1], [[D.yc],
                7], [[D.zc], 1], [[D.Wc], 1], [[D.Ac], 1], [[D.Bc], 1], [[D.Cc], 1], [[D.Dc], 1], [[D.Ec], 1], [[D.Ud], 1], [[D.Xc], 1], [[D.Tb], 1], [[D.Ya], 1], [[D.Va], 1], [[D.Za], 1], [[D.Fc], 1], [[D.Eb], 1], [[D.Yc], 1], [[D.Zc], 1], [[D.$c], 1], [[D.ad], 1], [[D.hd], 1], [[D.jd], 1], [[D.kd], 1], [[D.$a], 1], [[D.Fb], 1], [[D.qb], 1], [[D.ab], 1], [[D.Sa], 1], [[D.ld], 1], [[D.md], 1], [[D.Gc], 1], [[D.Hc], 1], [[D.rb], 1], [[D.nd], 1], [[D.Vd], 1], [[D.Wd], 1], [[D.Gb], 1], [[D.qd], 1], [[D.Ub], 1], [[D.Ic], 1], [[D.od], 1], [[D.Xd], 1], [[D.Jc], 1], [[D.$d], 1], [[D.rd], 1], [[D.Ed], 1], [[D.de],
                1], [[D.Rd], 1], [[D.Yd], 1], [[D.Zd], 1], [[D.ae], 1], [[D.Kc], 10], [[D.fe], 1], [[D.he], 1], [[D.sd], 1], [[D.Lc], 1], [[D.ie], 1], [[D.Ha], 1], [[D.Aa], 1], [[D.Ca], 1], [[D.je], 1], [[D.tb], 1], [[D.Hb], 1], [[D.ke], 1], [[D.le], 1], [[D.ub], 6], [[D.ne], 1], [[D.oe], 1], [[D.qe], 1], [[D.re], 1], [[D.td], 1], [[D.Vb], 1], [[D.Wb], 1], [[D.se], 1], [[D.Xb], 1], [[D.vb], 1], [[D.hb], 1], [[D.te], 1], [[D.Mc], 1], [[D.ud], 1], [[D.vd], 1], [[D.wd], 2], [[D.ve], 1], [[D.we], 1], [[D.Yb], 1]];
        this.s = {};
        this.v = {};
        for (var b = 0; b < a.length; b++) {
            var c = a[b], e = c[0], f = c[1], g = [];
            2 < c.length && (g = c[2]);
            var h = !1;
            3 < c.length && (h = c[3]);
            c = [];
            for (var k = 0; k < e.length; k++) {
                var m = e[k];
                this.v[m.join(",")] = !1;
                c.push(m)
            }
            this.s[e[0]] = [c, f, g, h]
        }
    };
    sf.prototype.get = function (a) {
        a = a.join(",");
        if (!(a in this.s)) throw Error("h`" + a);
        this.v[a] = !0;
        a = this.s[a];
        return new jf(a[0], a[1], a[2], a[3])
    };
    var tf;
    (tf = !ne) || (tf = 9 <= Number(ze));
    var uf = tf, vf = ne && !ye("9"), wf = function () {
        if (!l.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        l.addEventListener("test", oa, b);
        l.removeEventListener("test", oa, b);
        return a
    }();
    var xf = function (a, b) {
        this.type = a;
        this.v = this.target = b;
        this.H = !1;
        this.Be = !0
    };
    xf.prototype.T = function () {
        this.H = !0
    };
    xf.prototype.preventDefault = function () {
        this.Be = !1
    };
    var U = function (a, b) {
        xf.call(this, a ? a.type : "");
        this.relatedTarget = this.v = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.R = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.s = null;
        a && this.U(a, b)
    };
    t(U, xf);
    var yf = {2: "touch", 3: "pen", 4: "mouse"};
    U.prototype.U = function (a, b) {
        var c = this.type = a.type, e = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.v = b;
        var f = a.relatedTarget;
        if (f) {
            if (pe) {
                a:{
                    try {
                        je(f.nodeName);
                        var g = !0;
                        break a
                    } catch (h) {
                    }
                    g = !1
                }
                g || (f = null)
            }
        } else "mouseover" == c ? f = a.fromElement : "mouseout" == c && (f = a.toElement);
        this.relatedTarget = f;
        null === e ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX =
            void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
        this.button = a.button;
        this.R = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = q(a.pointerType) ? a.pointerType : yf[a.pointerType] || "";
        this.s = a;
        a.defaultPrevented && this.preventDefault()
    };
    U.prototype.T = function () {
        U.lb.T.call(this);
        this.s.stopPropagation ? this.s.stopPropagation() : this.s.cancelBubble = !0
    };
    U.prototype.preventDefault = function () {
        U.lb.preventDefault.call(this);
        var a = this.s;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, vf) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var Bf = function () {
        var a = C, b = $b;
        this.s = zf;
        this.v = [];
        var c = this, e = function (a, b, e) {
            c.v.push([a, b, e]);
            a.addEventListener(b, e)
        };
        e(document.body, "keydown", function (a) {
            Yb(b);
            Af(c.s).ze(a)
        });
        e(document.body, "keyup", function (a) {
            Yb(b);
            Af(c.s).Ae(a)
        });
        e(a, "touchstart", function (e) {
            Yb(b);
            var f = hf(a, e), h = gf(a, e);
            ed && (300 < f && 340 > f && 360 > h && 280 < h ? dd.call(document) : cd.call(Vc));
            Af(c.s).Qc(e);
            e.preventDefault && e.preventDefault()
        });
        e(a, "touchmove", function (a) {
            Yb(b);
            Af(c.s).Ce(a);
            a.preventDefault && a.preventDefault()
        });
        e(a, "touchend", function (a) {
            Yb(b);
            Af(c.s).Cd(a)
        });
        e(a, "mousedown", function (a) {
            Yb(b);
            Af(c.s).Pc(a)
        })
    }, Df = function () {
        for (var a = Cf, b = 0; b < a.v.length; b++) a.v[b][0].removeEventListener(a.v[b][1], a.v[b][2])
    }, Ef = function () {
    };
    d = Ef.prototype;
    d.ze = function () {
    };
    d.Ae = function () {
    };
    d.Qc = function () {
    };
    d.Ce = function () {
    };
    d.Cd = function () {
    };
    d.Pc = function () {
    };
    var Ff = function (a) {
        this.s = a
    };
    t(Ff, Ef);
    Ff.prototype.Pc = function (a) {
        F || this.s(a)
    };
    Ff.prototype.Qc = function (a) {
        F || this.s(a)
    };
    var If = function (a, b, c) {
        this.H = a;
        this.ha = b;
        this.ka = c;
        this.U = {};
        var e = this;
        this.R = {
            38: function () {
                Gf(e, !0)
            }, 40: function () {
                Hf(e, !0)
            }
        };
        this.$ = !1;
        this.V = 0;
        this.s = 200;
        this.T = 0
    };
    t(If, Ef);
    var Gf = function (a, b) {
        F || a.ha(b);
        Jf(a);
        a.v = !1
    }, Hf = function (a, b) {
        F || a.ka(b);
        Jf(a);
        a.v = !1
    };
    If.prototype.ze = function (a) {
        var b = a.keyCode;
        this.U[b] = !0;
        b in this.R && (a.preventDefault(), this.R[b]())
    };
    If.prototype.Ae = function (a) {
        var b = a.keyCode;
        this.U[b] = !1;
        b in this.R && a.preventDefault()
    };
    var Jf = function (a) {
        a.T && window.clearTimeout(a.T)
    };
    If.prototype.Qc = function (a) {
        function b() {
            c.Cd(a)
        }

        this.V = gf(this.H, a);
        this.$ = this.v = !0;
        var c = this;
        0 < this.s ? this.T = window.setTimeout(b, this.s) : b()
    };
    If.prototype.Ce = function (a) {
        a = gf(this.H, a) - this.V;
        20 < a ? (this.s = 200, this.v && Hf(this, !1)) : -20 > a && (this.s = 200, this.v && Gf(this, !1))
    };
    If.prototype.Cd = function (a) {
        this.v && (this.s = Math.floor(this.s / 2), 180 < gf(this.H, a) ? Hf(this, !1) : Gf(this, !1))
    };
    If.prototype.Pc = function (a) {
        this.$ || (180 < gf(this.H, a) ? Hf(this, !1) : Gf(this, !1))
    };
    var Kf = function (a, b) {
        this.s = a;
        this.v = b
    };
    t(Kf, Ef);
    Kf.prototype.Pc = function (a) {
        dc(this.v, new U(a), hf(this.s, a), gf(this.s, a));
        a = new U(a);
        a.type = "mouseup";
        this.v.handleEvent(a)
    };
    Kf.prototype.Qc = function (a) {
        dc(this.v, new U(a), hf(this.s, a), gf(this.s, a));
        a = new U(a);
        a.type = "touchend";
        this.v.handleEvent(a)
    };
    var V = function (a) {
        H.call(this);
        this.v = a;
        this.alpha = 1
    };
    t(V, H);
    V.prototype.W = function (a, b, c) {
        var e = a.globalAlpha;
        a.globalAlpha *= this.alpha;
        this.v.W(a, b, c);
        a.globalAlpha = e
    };
    V.prototype.update = function (a) {
        this.v.update(a)
    };
    var Lf = function () {
    };
    Lf.prototype.update = function () {
    };
    Lf.prototype.W = function () {
    };
    var Mf = function (a) {
        this.s = a
    };
    t(Mf, Lf);
    Mf.prototype.update = function (a) {
        this.s.update(a)
    };
    Mf.prototype.W = function (a) {
        this.s.W(a, 0, 0, 640, 360)
    };
    var Nf = function (a) {
        this.s = a
    };
    t(Nf, Lf);
    Nf.prototype.update = function (a) {
        this.s.update(a)
    };
    Nf.prototype.W = function (a) {
        this.s.W(a)
    };
    var Of = function () {
        this.v = [];
        this.H = [];
        this.s = 0
    };
    Of.prototype.add = function (a, b) {
        this.v.push(a);
        this.H.push(b)
    };
    Of.prototype.update = function (a) {
        var b = this.v[this.s];
        b && b.update && b.update(a)
    };
    Of.prototype.W = function (a) {
        var b = this.v[this.s];
        b && b.W(a)
    };
    var Af = function (a) {
        return a.H[a.s]
    }, Pf = function (a) {
        a.s = Math.min(a.s + 1, a.v.length - 1)
    };
    var Qf = function (a) {
        var b = E;
        this.T = new L(b.get(D.Pd));
        this.T.x = 8;
        this.T.y = 10;
        this.H = new L(b.get(D.Fd));
        this.H.x = 260;
        this.H.y = 46;
        this.U = new L(b.get(D.Qd));
        this.U.x = 0;
        this.U.y = 360 - this.U.ma.height;
        this.ka = new V(this.U);
        this.R = new L(b.get(D.ue));
        this.R.x = 32;
        this.R.y = 360 - this.R.ma.height;
        this.v = new L(b.get(D.Tc));
        this.v.x = 155;
        this.v.y = this.U.y - this.v.ma.height + 5;
        Eb() && (this.v.ma.pause(), this.H.ma.pause());
        this.$ = 1;
        this.V = [this.T, this.H, this.R, this.v, this.ka];
        this.s = [];
        this.ha = a
    };
    t(Qf, Lf);
    Qf.prototype.update = function (a) {
        for (var b = 0; b < this.V.length; b++) this.V[b].update(a);
        for (b = this.s.length - 1; 0 <= b; b--) this.s[b].update(a), this.s[b].ta && this.s.splice(b, 1)
    };
    Qf.prototype.W = function (a) {
        a.fillStyle = "#D3C2B3";
        a.fillRect(0, 0, 640, 360);
        var b = a.globalAlpha;
        a.globalAlpha = this.$;
        a.fillStyle = "#FDB406";
        a.fillRect(0, 0, 640, 360);
        a.globalAlpha = b;
        for (b = 0; b < this.V.length; b++) this.V[b].W(a)
    };
    Qf.prototype.start = function () {
        this.v.ma.$b = !1;
        this.H.ma.$b = !1;
        var a = this, b = a.T.y;
        this.s.push(new I(1.2, function (c) {
            a.T.y = b - 300 * kd(c)
        }));
        var c = a.H.y;
        this.s.push(new I(1.2, function (b) {
            a.H.y = c - 300 * kd(b)
        }));
        var e = a.v.x;
        this.s.push(new I(1.2, function (b) {
            a.v.x = e + 500 * kd(b)
        }));
        this.s.push(new I(.5, function () {
        }, function () {
            a.s.push(new I(.5, function (b) {
                a.ka.alpha = 1 - kd(b)
            }, function () {
                a.ha()
            }))
        }));
        var f = this.R.y;
        this.s.push(new I(1.2, function (b) {
            a.R.y = f + 300 * kd(b)
        }));
        this.s.push(new I(1.2, function (b) {
            a.$ = 1 - kd(b)
        }))
    };
    var lf = {
        width: 73,
        height: 51,
        frames: [[[0, 0, 0, 0, 72, 48]], [[1, 0, 290, 0, 71, 47]], [[1, 0, 146, 0, 71, 48]], [[2, 0, 362, 0, 70, 48]], [[3, 0, 504, 0, 69, 48]], [[4, 0, 429, 49, 67, 49]], [[6, 0, 0, 49, 64, 49]], [[7, 0, 129, 49, 62, 49]], [[9, 0, 254, 97, 59, 50]], [[11, 0, 564, 49, 55, 50]], [[12, 0, 428, 99, 52, 50]], [[15, 0, 100, 100, 47, 50]], [[16, 0, 148, 100, 44, 51]], [[19, 0, 481, 100, 39, 51]], [[21, 0, 559, 100, 35, 51]], [[23, 0, 270, 148, 30, 51]], [[26, 0, 595, 100, 24, 51]], [[28, 0, 353, 149, 19, 51]], [[30, 0, 391, 150, 14, 51]], [[32, 0, 419, 150, 9, 51]], [[33, 0, 429, 150, 7, 51]], [[30, 0, 406, 150,
            12, 51]], [[27, 0, 373, 150, 17, 51]], [[24, 0, 330, 149, 22, 51]], [[21, 0, 301, 149, 28, 51]], [[19, 0, 237, 148, 32, 51]], [[16, 0, 521, 100, 37, 51]], [[13, 0, 193, 100, 43, 51]], [[11, 0, 52, 100, 47, 51]], [[9, 0, 0, 99, 51, 51]], [[7, 0, 373, 98, 54, 51]], [[6, 0, 314, 98, 58, 50]], [[4, 0, 192, 49, 61, 50]], [[3, 0, 65, 49, 63, 50]], [[2, 0, 497, 49, 66, 50]], [[1, 1, 360, 49, 68, 48]], [[1, 1, 290, 48, 69, 48]], [[1, 1, 433, 0, 70, 48]], [[1, 0, 218, 0, 71, 48]], [[1, 0, 73, 0, 72, 48]]]
    };
    var kf = {
        width: 73,
        height: 159,
        frames: [[[1, 7, 74, 0, 70, 47], [18, 56, 74, 48, 42, 58]], [[0, 1, 0, 0, 73, 113]], [[2, 0, 145, 0, 69, 114]], [[6, 0, 215, 0, 61, 114]], [[10, 2, 277, 0, 53, 112]], [[14, 4, 331, 0, 46, 110]], [[17, 6, 117, 115, 39, 49], [18, 56, 550, 61, 42, 58]], [[20, 8, 234, 115, 35, 46], [18, 56, 507, 68, 42, 58]], [[24, 12, 593, 0, 26, 38], [18, 56, 464, 75, 42, 58]], [[24, 12, 593, 0, 26, 38], [18, 56, 464, 75, 42, 58]], [[18, 22, 378, 0, 42, 92]], [[18, 31, 421, 0, 42, 83]], [[18, 40, 464, 0, 42, 74]], [[18, 47, 507, 0, 42, 67]], [[18, 54, 550, 0, 42, 60]], [[18, 56, 421, 84, 42, 58]], [[18, 56, 378, 93,
            42, 58]], [[18, 56, 74, 107, 42, 58]], [[18, 56, 331, 111, 42, 58]], [[18, 56, 277, 113, 42, 58]], [[18, 72, 0, 114, 41, 42]], [[18, 72, 0, 114, 41, 42]], [[19, 80, 157, 115, 39, 38]], [[20, 87, 197, 115, 36, 36]], [[21, 94, 550, 120, 33, 33]], [[22, 101, 584, 120, 31, 31]], [[23, 109, 42, 114, 28, 28]], [[24, 116, 593, 39, 25, 25]], [[25, 123, 117, 48, 22, 23]], [[25, 130, 593, 65, 20, 20]], [[26, 138, 117, 72, 18, 17]], [[27, 145, 593, 86, 15, 14]]]
    };
    var Rf = [[D.S, 1090, 222], [D.S, 1449, 173], [D.S, 1878, 271], [D.S, 2203, 172], [D.Ba, 2256, 134], [D.Ua, 2570, 245], [D.S, 2581, 180], [D.S, 2639, 180], [D.Ba, 2652, 234], [D.S, 2701, 181], [D.S, 2984, 74], [D.S, 3046, 73], [D.S, 3107, 73], [D.S, 3166, 73], [D.Ca, 3226, 64], [D.Ha, 3268, 273], [D.S, 3342, 126], [D.Ca, 3378, 304], [D.S, 3412, 77], [D.Ba, 3412, 90], [D.S, 3802, 269], [D.Ha, 3859, 138], [D.Ua, 3872, 240], [D.Ua, 3926, 44], [D.Xa, 3936, 130], [D.vc, 4001, 20], [D.S, 4043, 221], [D.uc, 4053, 7], [D.Ba, 4061, 278], [D.Ua, 4099, 191], [D.Ba, 4104, 33], [D.Xa, 4226, 23], [D.Ba, 4282,
        229], [D.S, 4491, 267], [D.Aa, 4561, 251], [D.Ua, 4581, 195], [D.Xa, 4656, 177], [D.S, 4694, 79], [D.S, 4733, 124], [D.S, 4771, 172], [D.wc, 4797, 39], [D.S, 4809, 221], [D.tb, 4822, -77], [D.S, 4853, 268], [D.Aa, 4885, 105], [D.Lc, 4930, 1], [D.Aa, 5015, 242], [D.Ca, 5091, 48], [D.S, 5100, 175], [D.Hb, 5127, -43], [D.Aa, 5132, 287], [D.Ha, 5186, 189], [D.Aa, 5220, 50], [D.S, 5428, 175], [D.S, 5608, 173], [D.Uc, 5650, 100], [D.Ba, 5688, 135], [D.Ca, 5741, 312], [D.Hb, 5783, 201], [D.Ha, 5902, 297], [D.tb, 5913, 117], [D.Ca, 5918, 182], [D.Aa, 5936, 133], [D.S, 5939, 72], [D.Aa, 6E3, 291], [D.Ha,
        6029, 200], [D.Ca, 6081, 210], [D.Ca, 6114, 323], [D.Ca, 6123, 286], [D.S, 6337, 72], [D.Ha, 6434, 93], [D.Vb, 6458, -154], [D.Aa, 6496, 98], [D.Ha, 6628, 236], [D.Ha, 6674, 36], [D.Aa, 6685, 239], [D.Aa, 6752, 63], [D.Wb, 6781, 153], [D.Wb, 6824, -86], [D.Aa, 6888, 143], [D.td, 6938, -48], [D.Ha, 6979, 140], [D.S, 6984, 268], [D.S, 7037, 317], [D.S, 7089, 270], [D.Vb, 7106, -151], [D.Aa, 7187, 65], [D.Aa, 7270, 306], [D.S, 7343, 75], [D.Xa, 7348, 280], [D.uc, 7393, 264], [D.xc, 7435, 47], [D.S, 7588, 220], [D.S, 7708, 218], [D.S, 7841, 174], [D.Wb, 7868, -91], [D.Vb, 7918, -110], [D.nb, 8117,
        14], [D.S, 8204, 174], [D.Db, 8230, 48], [D.mb, 8271, 177], [D.Xa, 8374, 21], [D.vc, 8428, 277], [D.Xa, 8483, 281], [D.Ba, 8564, 36], [D.Mc, 8689, 73], [D.ud, 8758, -18], [D.Hb, 9021, -42], [D.tb, 9160, -70], [D.Ua, 9620, 46], [D.Ba, 9702, 36], [D.nb, 9810, 56], [D.Ba, 9909, 287], [D.Db, 9923, 90], [D.mb, 9965, 224], [D.Aa, 10059, 237], [D.Ca, 10120, 300], [D.Ac, 10327, 105], [D.S, 10711, 69], [D.Cc, 10794, 48], [D.S, 10874, 170], [D.Bc, 10886, 254], [D.S, 11021, 222], [D.S, 11114, 219], [D.Dc, 11590, 46], [D.S, 11939, 319], [D.S, 12E3, 319], [D.Fc, 12034, -68], [D.S, 12064, 320], [D.S, 12128,
        320], [D.S, 12223, 275], [D.S, 12358, 321], [D.Eb, 12455, 9], [D.Fc, 12695, 273], [D.S, 12730, 124], [D.Ec, 12792, 49], [D.S, 13207, 269], [D.S, 13258, 222], [D.S, 13307, 179], [D.S, 13367, 222], [D.S, 13422, 268], [D.S, 13479, 229], [D.S, 13534, 179], [D.vb, 14131, -141], [D.vb, 14204, -120], [D.Va, 14219, 21], [D.vb, 14281, -93], [D.S, 14288, 219], [D.Aa, 14302, 284], [D.Wc, 14325, -2], [D.S, 14375, 172], [D.Ya, 14389, 267], [D.ub, 14532, 185], [D.Xb, 14546, 239], [D.Ca, 14702, 299], [D.Va, 14774, 263], [D.vb, 14820, 271], [D.S, 14842, 171], [D.ub, 14962, 181], [D.Tb, 14986, 280], [D.hb,
        15104, 245], [D.Za, 15137, 282], [D.hb, 15155, 275], [D.S, 15231, 164], [D.ub, 15319, 177], [D.Va, 15359, 291], [D.hb, 15408, 227], [D.Ya, 15521, 44], [D.Ub, 15541, 225], [D.Ya, 15614, 296], [D.Xc, 15676, 16], [D.S, 15690, 219], [D.Tb, 15740, 138], [D.ub, 15761, 229], [D.Va, 15779, 313], [D.$a, 15866, 44], [D.Za, 15905, 22], [D.Za, 15907, 295], [D.S, 15925, 270], [D.S, 16084, 224], [D.Ic, 16146, 192], [D.$a, 16185, 287], [D.hb, 16196, -142], [D.Xb, 16252, 235], [D.Ya, 16272, 247], [D.Xb, 16333, 203], [D.S, 16335, 126], [D.S, 16381, 78], [D.hb, 16421, 244], [D.S, 16429, 126], [D.Yc, 16540,
        237], [D.S, 16645, 77], [D.Tb, 16692, 272], [D.S, 16714, 125], [D.S, 16765, 77], [D.S, 16831, 124], [D.Va, 16837, 255], [D.nb, 16871, 21], [D.S, 16896, 173], [D.Db, 16983, 55], [D.mb, 17020, 195], [D.Va, 17039, 18], [D.Za, 17150, -185], [D.Zc, 17151, 210], [D.$c, 17222, -21], [D.Za, 17291, 260], [D.Mc, 17428, 73], [D.vd, 17434, -21], [D.ud, 17498, -19], [D.Va, 17524, 249], [D.hb, 17754, 226], [D.Ya, 17765, 31], [D.Za, 18117, 10], [D.Ya, 18287, 28], [D.vb, 18561, -138], [D.nb, 18658, 15], [D.Db, 18769, 48], [D.mb, 18809, 179], [D.ad, 19092, 15], [D.S, 19147, 223], [D.S, 19203, 220], [D.hd,
        19207, 17], [D.jd, 19431, 47], [D.S, 19432, 176], [D.S, 19486, 177], [D.kd, 19495, 57], [D.Gb, 19725, 294], [D.S, 19832, 268], [D.Fb, 19844, 215], [D.$a, 19872, 188], [D.Ta, 19924, 187], [D.S, 19954, 269], [D.Yb, 2E4, 283], [D.Ic, 20093, -14], [D.S, 20101, 268], [D.Ub, 20289, -22], [D.S, 20303, 126], [D.Gb, 20360, 122], [D.Ub, 20423, 209], [D.Ca, 20440, 71], [D.$a, 20465, 38], [D.Ta, 20521, 42], [D.S, 20546, 128], [D.Yb, 20599, 139], [D.od, 20613, 163], [D.Gb, 20781, 29], [D.Fb, 20892, 114], [D.Eb, 20914, -61], [D.$a, 20920, 89], [D.Ta, 20973, 91], [D.S, 21002, 174], [D.qd, 21023, 0], [D.Yb,
        21051, 187], [D.S, 21117, 172], [D.Fb, 21275, 119], [D.Gb, 21301, 14], [D.$a, 21302, 91], [D.Ta, 21354, 90], [D.Yb, 21433, 186], [D.Eb, 21447, -60], [D.S, 21496, 174], [D.Fb, 21677, 165], [D.S, 21836, 172], [D.S, 21931, 174], [D.Lc, 22001, 217], [D.Eb, 22023, -50], [D.zc, 22135, 176], [D.yc, 22169, 154], [D.S, 22318, 311], [D.Vc, 22362, -7], [D.qb, 22394, 305], [D.Sa, 22448, 305], [D.S, 22599, 77], [D.ab, 22668, 45], [D.Sa, 22720, 66], [D.S, 22791, 318], [D.ab, 22860, 284], [D.Sa, 22913, 303], [D.S, 22991, 127], [D.qb, 23050, 112], [D.ab, 23074, 43], [D.Sa, 23104, 110], [D.Sa, 23128, 61],
        [D.S, 23216, 127], [D.S, 23275, 224], [D.S, 23342, 173], [D.qb, 23404, 161], [D.Sa, 23457, 160], [D.S, 23480, 322], [D.ab, 23556, 286], [D.Sa, 23608, 308], [D.zc, 23616, 178], [D.yc, 23648, 160], [D.tb, 23747, -24], [D.S, 23808, 176], [D.S, 23911, 176], [D.ab, 23966, 138], [D.S, 23971, 125], [D.Sa, 24019, 160], [D.S, 24083, 79], [D.qb, 24182, 67], [D.Sa, 24236, 64], [D.S, 24301, 269], [D.Gc, 24334, 46], [D.ld, 24434, 18], [D.S, 24452, 119], [D.md, 24475, 54], [D.rb, 24529, 50], [D.rb, 24676, 50], [D.S, 24693, 117], [D.rb, 24823, 50], [D.ld, 24874, 11], [D.S, 24886, 117], [D.md, 24913, 52],
        [D.rb, 24968, 50], [D.S, 25079, 116], [D.Hc, 25117, 50], [D.tb, 25335, -63], [D.Hb, 25371, 289], [D.S, 25406, 170], [D.Jc, 25535, 1], [D.Xd, 25647, 237], [D.Mb, 25704, 218], [D.wd, 25876, 106], [D.Mb, 25994, 218], [D.Mb, 26273, 218], [D.nd, 26526, 36], [D.Vd, 26595, 31]];
    var W = function (a, b, c, e) {
        this.T = b;
        this.H = a;
        this.R = c;
        this.v = !1;
        this.s = null;
        if (e || void 0 == e) this.s = E.get(D.Tc)
    };
    t(W, Lf);
    W.prototype.update = function (a) {
        this.s && this.s.update(a)
    };
    W.prototype.W = function (a) {
        for (var b = !0, c = 0; c < this.H.length; c++) if (!jc(kc, this.H[c]).v) {
            b = !1;
            break
        }
        b ? this.T() : (this.v || (this.v = !0, this.R()), a.fillStyle = "#D3C2B3", a.fillRect(0, 0, 640, 360), this.s && this.s.W(a, 320 - this.s.width / 2, 180 - this.s.height / 2))
    };
    var Uf = function (a, b) {
        this.Fe = a;
        this.Ee = b;
        this.H = [];
        this.s = [];
        this.Dd = 1;
        var c = E;
        this.text = new L(c.get(D.$d));
        this.text.x = 153;
        this.text.y = 48;
        this.ra = new V(this.text);
        this.ra.alpha = 0;
        this.Da = new L(c.get(D.Ed));
        this.Da.x = 53;
        this.Da.y = 198;
        this.Ga = new V(this.Da);
        this.Ga.alpha = 1;
        this.ac = new L(c.get(D.de));
        this.ac.x = 544;
        this.ac.y = 204;
        this.bc = new V(this.ac);
        this.bc.alpha = 1;
        this.ya = new L(c.get(D.Zd));
        this.ya.x = 130;
        this.ya.y = 146;
        this.$ = new V(this.ya);
        this.$.alpha = 0;
        this.Sc = new L(c.get(D.ae));
        this.Sc.x = 294;
        this.Sc.y =
            131;
        this.ha = new V(this.Sc);
        this.ha.alpha = 0;
        this.wa = new L(c.get(D.Yd));
        this.wa.x = 466;
        this.wa.y = 162;
        this.V = new V(this.wa);
        this.V.alpha = 0;
        this.line = new L(c.get(D.rd));
        this.line.x = 63;
        this.line.y = 178;
        this.Bb = new V(this.line);
        this.Bb.alpha = 1;
        this.v = new L(c.get(D.Rd));
        this.v.x = 52;
        this.v.y = 142;
        this.ka = new V(this.v);
        this.ka.alpha = 0;
        this.T = new Sf;
        this.T.x = 0;
        this.T.y = this.line.y;
        this.T.height = 360;
        this.R = new L(c.get(D.Jd));
        this.R.x = 40;
        this.R.y = 29;
        this.R.ma.pause();
        this.U = new V(this.R);
        this.U.alpha = 0;
        this.H.push(this.ra,
            this.Ga, this.bc, this.Bb, this.T, this.$, this.ha, this.V, this.ka, this.U);
        Tf(this)
    };
    t(Uf, Lf);
    var Tf = function (a) {
        a.s.push(new I(.5, function (b) {
            a.ra.alpha = b;
            a.ka.alpha = b;
            a.U.alpha = b
        }, function () {
            Vf(a)
        }))
    }, Vf = function (a) {
        var b = E;
        P(a.R.ma, function () {
            a.U.ta = !0;
            var c = new L(b.get(D.Id));
            c.x = 40;
            c.y = 23;
            P(c.ma, function () {
                c.ma.pause();
                var b = c.ma;
                b.Wa = b.yb - 1;
                Wf(a)
            });
            a.H.push(c)
        });
        a.R.ma.$b = !1
    }, Wf = function (a) {
        a.s.push(new I(1.6, function (b) {
            a.T.x = 640 * kd(b)
        }));
        a.s.push(new I(.4, function () {
        }, function () {
            a.s.push(new I(.5, function (b) {
                a.$.alpha = b
            }))
        }));
        a.s.push(new I(.8, function () {
        }, function () {
            a.s.push(new I(.5,
                function (b) {
                    a.ha.alpha = b
                }))
        }));
        a.s.push(new I(1.2, function () {
        }, function () {
            a.s.push(new I(.5, function (b) {
                a.V.alpha = b
            }))
        }));
        a.s.push(new I(3, function () {
        }, function () {
            Xf(a)
        }))
    }, Xf = function (a) {
        a.s.push(new I(1, function (b) {
            b = 1 - b;
            a.ra.alpha = b;
            a.Ga.alpha = b;
            a.bc.alpha = b;
            a.Bb.alpha = b;
            a.T.alpha = b;
            a.$.alpha = b;
            a.ha.alpha = b;
            a.V.alpha = b;
            a.U.alpha = b;
            a.ka.alpha = b;
            a.Dd = b
        }, function () {
            a.Fe()
        }))
    };
    Uf.prototype.update = function (a) {
        for (var b = this.H.length - 1; 0 <= b; b--) this.H[b].update(a), this.H[b].ta && this.H.splice(b, 1);
        for (b = this.s.length - 1; 0 <= b; b--) this.s[b].update(a), this.s[b].ta && this.s.splice(b, 1)
    };
    Uf.prototype.W = function (a) {
        this.Ee.W(a);
        var b = a.globalAlpha;
        a.globalAlpha = this.Dd;
        a.fillStyle = "#D3C2B3";
        a.fillRect(0, 0, 640, 360);
        a.globalAlpha = b;
        for (b = 0; b < this.H.length; b++) this.H[b].W(a)
    };
    var Sf = function () {
        H.call(this);
        this.width = 640;
        this.height = 360
    };
    t(Sf, H);
    Sf.prototype.W = function (a) {
        a.fillStyle = "#D3C2B3";
        a.fillRect(this.x, this.y, this.width, this.height)
    };
    var mf = {
        width: 72,
        height: 57,
        frames: [[[10, 19, 63, 111, 62, 38]], [[10, 17, 257, 107, 62, 40]], [[10, 9, 257, 58, 62, 48]], [[10, 5, 194, 58, 62, 52]], [[10, 3, 68, 56, 62, 54]], [[8, 2, 68, 0, 64, 55]], [[5, 0, 0, 0, 67, 57]], [[3, 6, 392, 0, 6, 6], [10, 0, 133, 0, 62, 57]], [[2, 6, 385, 0, 6, 7], [10, 0, 196, 0, 62, 57]], [[0, 8, 399, 0, 6, 6], [10, 0, 259, 0, 62, 57]], [[10, 1, 322, 0, 62, 56]], [[10, 3, 322, 57, 62, 54]], [[10, 3, 0, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131,
            58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]], [[10, 3, 131, 58, 62, 54]]]
    };
    var qf = {
        width: 641,
        height: 360,
        frames: [[[156, 195, 610, 0, 27, 26], [234, 166, 235, 885, 146, 176]], [[154, 193, 604, 319, 31, 30], [234, 166, 235, 885, 146, 176]], [[152, 191, 569, 576, 36, 34], [198, 225, 610, 54, 27, 25], [234, 166, 235, 885, 146, 176]], [[150, 189, 528, 576, 40, 38], [196, 222, 571, 319, 32, 30], [234, 166, 235, 885, 146, 176]], [[148, 188, 571, 278, 44, 40], [194, 220, 569, 611, 36, 34], [234, 166, 382, 885, 146, 176]], [[147, 186, 532, 505, 85, 70], [234, 166, 0, 1062, 146, 176]], [[146, 166, 0, 885, 234, 176], [381, 197, 610, 80, 27, 25]], [[145, 166, 0, 354, 265, 176]], [[145, 166,
            302, 177, 268, 176], [417, 223, 610, 27, 27, 26]], [[144, 166, 306, 0, 303, 176]], [[144, 166, 0, 0, 305, 176], [455, 198, 610, 80, 27, 25]], [[186, 166, 266, 354, 265, 176], [453, 195, 606, 576, 31, 30]], [[186, 166, 0, 177, 301, 176]], [[227, 166, 265, 531, 262, 176]], [[227, 166, 0, 531, 264, 176]], [[234, 166, 260, 708, 258, 176]], [[234, 166, 0, 708, 259, 176]], [[234, 166, 235, 885, 146, 176], [405, 187, 532, 430, 90, 74]], [[234, 166, 235, 885, 146, 176], [405, 186, 532, 354, 90, 75]], [[234, 166, 235, 885, 146, 176], [443, 186, 571, 228, 53, 49]], [[234, 166, 235, 885, 146, 176], [443, 186, 571, 177, 53,
            50]], [[234, 166, 235, 885, 146, 176]], [[234, 166, 235, 885, 146, 176]], [[234, 166, 235, 885, 146, 176]]]
    };
    var nf = {
        width: 231,
        height: 167,
        frames: [[[0, 2, 174, 834, 173, 165]], [[0, 2, 348, 835, 173, 165]], [[0, 2, 348, 835, 173, 165]], [[0, 2, 348, 835, 173, 165]], [[0, 1, 348, 668, 173, 166]], [[0, 1, 0, 832, 173, 166]], [[0, 0, 463, 0, 173, 167]], [[0, 0, 209, 498, 173, 167]], [[0, 0, 383, 500, 173, 167]], [[0, 0, 383, 500, 173, 167]], [[0, 0, 0, 664, 173, 167]], [[0, 0, 383, 500, 173, 167]], [[0, 0, 174, 666, 173, 167]], [[0, 0, 433, 332, 202, 167]], [[0, 2, 0, 498, 208, 165]], [[0, 2, 219, 332, 213, 165]], [[0, 2, 0, 332, 218, 165]], [[0, 2, 0, 999, 173, 165], [182, 19, 556, 168, 37, 37]], [[0, 2, 174, 1E3, 173, 165],
            [178, 16, 510, 168, 45, 44]], [[0, 2, 348, 1001, 173, 165], [175, 13, 459, 168, 50, 49]], [[0, 2, 230, 166, 228, 165]], [[0, 2, 0, 166, 229, 165]], [[0, 2, 232, 0, 230, 165]], [[0, 2, 0, 0, 231, 165]]]
    };
    var of = {
        width: 186,
        height: 180,
        frames: [[[0, 0, 0, 181, 165, 180]], [[0, 0, 166, 181, 165, 180]], [[0, 0, 166, 181, 165, 180]], [[0, 0, 370, 0, 176, 180]], [[0, 0, 187, 0, 182, 180]], [[0, 0, 0, 0, 186, 180]]]
    };
    var pf = {
        width: 213,
        height: 170,
        frames: [[[11, 29, 414, 435, 201, 141]], [[10, 29, 0, 431, 202, 141]], [[4, 29, 0, 289, 208, 141]], [[4, 31, 209, 290, 208, 139]], [[8, 34, 209, 430, 204, 136]], [[24, 15, 192, 1006, 189, 155]], [[21, 9, 0, 859, 192, 143], [57, 153, 121, 1162, 117, 17]], [[19, 4, 0, 715, 194, 143], [59, 154, 0, 1172, 114, 16]], [[9, 1, 418, 290, 204, 144], [59, 154, 239, 1179, 113, 16]], [[4, 0, 211, 145, 209, 144], [60, 154, 115, 1180, 112, 16]], [[2, 0, 428, 144, 211, 144], [63, 154, 113, 1197, 106, 15]], [[0, 0, 0, 0, 213, 144], [63, 154, 113, 1197, 106, 15]], [[0, 0, 214, 0, 213, 144], [60, 154,
            228, 1196, 111, 16]], [[1, 1, 428, 0, 212, 143], [60, 154, 0, 1189, 112, 16]], [[3, 4, 0, 145, 210, 143], [58, 154, 239, 1162, 115, 16]], [[20, 0, 396, 722, 193, 152], [56, 153, 0, 1154, 120, 17]], [[25, 0, 382, 1033, 188, 170]], [[22, 13, 389, 875, 191, 157]], [[21, 20, 0, 1003, 191, 150]], [[19, 21, 195, 856, 193, 149]], [[17, 24, 200, 709, 195, 146]], [[15, 26, 404, 577, 197, 144]], [[13, 29, 0, 573, 199, 141]], [[12, 29, 203, 567, 200, 141]]]
    };
    var Yf = function (a) {
        this.s = a
    };
    t(Yf, Fa);
    Yf.prototype.contains = function (a, b) {
        var c = this.s;
        if (6 > c.length) return !1;
        for (var e = !1, f = 0, g = c.length - 2; f < c.length; g = f, f += 2) {
            var h = c[f], k = c[f + 1], m = c[g];
            g = c[g + 1];
            a < h != a < m && b > k + (a - h) * (g - k) / (m - h) && (e = !e)
        }
        return e
    };
    Yf.prototype.W = function (a) {
        a.beginPath();
        for (var b = 0; b < this.s.length; b += 2) a.lineTo(this.s[b], this.s[b + 1]);
        a.lineTo(this.s[0], this.s[1]);
        a.fill();
        a.stroke()
    };
    var Zf = "closure_listenable_" + (1E6 * Math.random() | 0), $f = function (a) {
        return !(!a || !a[Zf])
    }, ag = 0;
    var bg = function (a, b, c, e, f) {
        this.listener = a;
        this.s = null;
        this.src = b;
        this.type = c;
        this.capture = !!e;
        this.Oc = f;
        this.key = ++ag;
        this.Kb = this.Nc = !1
    }, cg = function (a) {
        a.Kb = !0;
        a.listener = null;
        a.s = null;
        a.src = null;
        a.Oc = null
    };
    var dg = function (a) {
        this.src = a;
        this.s = {};
        this.v = 0
    };
    dg.prototype.add = function (a, b, c, e, f) {
        var g = a.toString();
        a = this.s[g];
        a || (a = this.s[g] = [], this.v++);
        var h = eg(a, b, e, f);
        -1 < h ? (b = a[h], c || (b.Nc = !1)) : (b = new bg(b, this.src, g, !!e, f), b.Nc = c, a.push(b));
        return b
    };
    var fg = function (a, b) {
        var c = b.type;
        if (c in a.s) {
            var e = a.s[c], f = Aa(e, b), g;
            (g = 0 <= f) && Array.prototype.splice.call(e, f, 1);
            g && (cg(b), 0 == a.s[c].length && (delete a.s[c], a.v--))
        }
    }, gg = function (a, b, c, e, f) {
        a = a.s[b.toString()];
        b = -1;
        a && (b = eg(a, c, e, f));
        return -1 < b ? a[b] : null
    }, eg = function (a, b, c, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.Kb && g.listener == b && g.capture == !!c && g.Oc == e) return f
        }
        return -1
    };
    var hg = "closure_lm_" + (1E6 * Math.random() | 0), ig = {}, jg = 0, lg = function (a, b, c, e, f) {
        if (e && e.once) return kg(a, b, c, e, f);
        if (qa(b)) {
            for (var g = 0; g < b.length; g++) lg(a, b[g], c, e, f);
            return null
        }
        c = mg(c);
        return $f(a) ? a.listen(b, c, sa(e) ? !!e.capture : !!e, f) : ng(a, b, c, !1, e, f)
    }, ng = function (a, b, c, e, f, g) {
        if (!b) throw Error("i");
        var h = sa(f) ? !!f.capture : !!f, k = pg(a);
        k || (a[hg] = k = new dg(a));
        c = k.add(b, c, e, h, g);
        if (c.s) return c;
        e = qg();
        c.s = e;
        e.src = a;
        e.listener = c;
        if (a.addEventListener) wf || (f = h), void 0 === f && (f = !1), a.addEventListener(b.toString(),
            e, f); else if (a.attachEvent) a.attachEvent(rg(b.toString()), e); else if (a.addListener && a.removeListener) a.addListener(e); else throw Error("j");
        jg++;
        return c
    }, qg = function () {
        var a = sg, b = uf ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }, kg = function (a, b, c, e, f) {
        if (qa(b)) {
            for (var g = 0; g < b.length; g++) kg(a, b[g], c, e, f);
            return null
        }
        c = mg(c);
        return $f(a) ? a.s.add(String(b), c, !0, sa(e) ? !!e.capture : !!e, f) : ng(a, b, c, !0, e, f)
    }, tg = function (a, b, c, e, f) {
        if (qa(b)) for (var g =
            0; g < b.length; g++) tg(a, b[g], c, e, f); else e = sa(e) ? !!e.capture : !!e, c = mg(c), $f(a) ? a.unlisten(b, c, e, f) : a && (a = pg(a)) && (b = gg(a, b, c, e, f)) && ug(b)
    }, ug = function (a) {
        if (!na(a) && a && !a.Kb) {
            var b = a.src;
            if ($f(b)) fg(b.s, a); else {
                var c = a.type, e = a.s;
                b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(rg(c), e) : b.addListener && b.removeListener && b.removeListener(e);
                jg--;
                (c = pg(b)) ? (fg(c, a), 0 == c.v && (c.src = null, b[hg] = null)) : cg(a)
            }
        }
    }, rg = function (a) {
        return a in ig ? ig[a] : ig[a] = "on" + a
    }, wg = function (a,
                      b, c, e) {
        var f = !0;
        if (a = pg(a)) if (b = a.s[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var g = b[a];
            g && g.capture == c && !g.Kb && (g = vg(g, e), f = f && !1 !== g)
        }
        return f
    }, vg = function (a, b) {
        var c = a.listener, e = a.Oc || a.src;
        a.Nc && ug(a);
        return c.call(e, b)
    }, sg = function (a, b) {
        if (a.Kb) return !0;
        if (!uf) {
            var c;
            if (!(c = b)) a:{
                c = ["window", "event"];
                for (var e = l, f = 0; f < c.length; f++) if (e = e[c[f]], null == e) {
                    c = null;
                    break a
                }
                c = e
            }
            f = c;
            c = new U(f, this);
            e = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a:{
                    var g = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (m) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (g = c.v; g; g = g.parentNode) f.push(g);
                g = a.type;
                for (var h = f.length - 1; !c.H && 0 <= h; h--) {
                    c.v = f[h];
                    var k = wg(f[h], g, !0, c);
                    e = e && k
                }
                for (h = 0; !c.H && h < f.length; h++) c.v = f[h], k = wg(f[h], g, !1, c), e = e && k
            }
            return e
        }
        return vg(a, new U(b, this))
    }, pg = function (a) {
        a = a[hg];
        return a instanceof dg ? a : null
    }, xg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), mg = function (a) {
        if (ra(a)) return a;
        a[xg] || (a[xg] = function (b) {
            return a.handleEvent(b)
        });
        return a[xg]
    };
    var X = function () {
        v.call(this);
        this.s = new dg(this);
        this.ka = this;
        this.T = null
    };
    t(X, v);
    X.prototype[Zf] = !0;
    X.prototype.addEventListener = function (a, b, c, e) {
        lg(this, a, b, c, e)
    };
    X.prototype.removeEventListener = function (a, b, c, e) {
        tg(this, a, b, c, e)
    };
    var zg = function (a, b) {
        var c, e = a.T;
        if (e) for (c = []; e; e = e.T) c.push(e);
        e = a.ka;
        var f = b, g = f.type || f;
        if (q(f)) f = new xf(f, e); else if (f instanceof xf) f.target = f.target || e; else {
            var h = f;
            f = new xf(g, e);
            Oa(f, h)
        }
        h = !0;
        if (c) for (var k = c.length - 1; !f.H && 0 <= k; k--) {
            var m = f.v = c[k];
            h = yg(m, g, !0, f) && h
        }
        f.H || (m = f.v = e, h = yg(m, g, !0, f) && h, f.H || (h = yg(m, g, !1, f) && h));
        if (c) for (k = 0; !f.H && k < c.length; k++) m = f.v = c[k], h = yg(m, g, !1, f) && h;
        return h
    };
    X.prototype.v = function () {
        X.lb.v.call(this);
        if (this.s) {
            var a = this.s, b = 0, c;
            for (c in a.s) {
                for (var e = a.s[c], f = 0; f < e.length; f++) ++b, cg(e[f]);
                delete a.s[c];
                a.v--
            }
        }
        this.T = null
    };
    X.prototype.listen = function (a, b, c, e) {
        return this.s.add(String(a), b, !1, c, e)
    };
    X.prototype.unlisten = function (a, b, c, e) {
        var f = this.s;
        a = String(a).toString();
        if (a in f.s) {
            var g = f.s[a];
            b = eg(g, b, c, e);
            -1 < b ? (cg(g[b]), Array.prototype.splice.call(g, b, 1), 0 == g.length && (delete f.s[a], f.v--), f = !0) : f = !1
        } else f = !1;
        return f
    };
    var yg = function (a, b, c, e) {
        b = a.s.s[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.Kb && h.capture == c) {
                var k = h.listener, m = h.Oc || h.src;
                h.Nc && fg(a.s, h);
                f = !1 !== k.call(m, e) && f
            }
        }
        return f && 0 != e.Be
    };
    var Bg = function (a) {
        X.call(this);
        this.R = a;
        lg(a, Ag, this.$, !1, this);
        lg(a, "click", this.V, !1, this)
    };
    t(Bg, X);
    var Ag = pe ? "keypress" : "keydown";
    Bg.prototype.$ = function (a) {
        (13 == a.R || qe && 3 == a.R) && Cg(this, a)
    };
    Bg.prototype.V = function (a) {
        Cg(this, a)
    };
    var Cg = function (a, b) {
        var c = new Dg(b);
        if (zg(a, c)) {
            c = new Eg(b);
            try {
                zg(a, c)
            } finally {
                b.T()
            }
        }
    };
    Bg.prototype.v = function () {
        Bg.lb.v.call(this);
        tg(this.R, Ag, this.$, !1, this);
        tg(this.R, "click", this.V, !1, this);
        delete this.R
    };
    var Eg = function (a) {
        U.call(this, a.s);
        this.type = "action"
    };
    t(Eg, U);
    var Dg = function (a) {
        U.call(this, a.s);
        this.type = "beforeaction"
    };
    t(Dg, U);
    var Fg = function (a) {
        v.call(this);
        this.ha = a;
        this.s = {}
    };
    t(Fg, v);
    var Gg = [];
    Fg.prototype.listen = function (a, b, c, e) {
        qa(b) || (b && (Gg[0] = b.toString()), b = Gg);
        for (var f = 0; f < b.length; f++) {
            var g = lg(a, b[f], c || this.handleEvent, e || !1, this.ha || this);
            if (!g) break;
            this.s[g.key] = g
        }
        return this
    };
    Fg.prototype.unlisten = function (a, b, c, e, f) {
        if (qa(b)) for (var g = 0; g < b.length; g++) this.unlisten(a, b[g], c, e, f); else c = c || this.handleEvent, e = sa(e) ? !!e.capture : !!e, f = f || this.ha || this, c = mg(c), e = !!e, b = $f(a) ? gg(a.s, String(b), c, e, f) : a ? (a = pg(a)) ? gg(a, b, c, e, f) : null : null, b && (ug(b), delete this.s[b.key]);
        return this
    };
    var Hg = function (a) {
        Ma(a.s, function (a, c) {
            this.s.hasOwnProperty(c) && ug(a)
        }, a);
        a.s = {}
    };
    Fg.prototype.v = function () {
        Fg.lb.v.call(this);
        Hg(this)
    };
    Fg.prototype.handleEvent = function () {
        throw Error("k");
    };
    var Ig = [5, 6, 7, 8, 9], Jg = 0, Kg = !1, Y = {}, Lg = [], Mg = function (a) {
        var b = wa();
        0 == a && (Jg = b);
        Y.e = a;
        Y.t = 0 == Jg ? -1 : Math.floor(b - Jg);
        Y.m = zb ? 1 : 0;
        b = window.document;
        b = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
        b = new Be(b.clientWidth, b.clientHeight);
        Y.w = b.width > b.height ? 1 : 0;
        Y.o = "orientation" in window ? parseInt(window.orientation, 10) : "_";
        b = [];
        for (var c in Y) Y.hasOwnProperty(c) && b.push(c + ":" + Y[c]);
        for (Qb(b.join(","), 10 == a, 0 <= Ig.indexOf(a)); 0 < Lg.length;) delete Y[Lg.pop()];
        if (a = !Kg && 0 == a) Tc(), a = !Gc.Fa;
        a && (Kg = !0, Mg(10))
    };
    var Ng = function (a, b, c, e, f) {
        Fg.call(this);
        this.V = a;
        this.ya = b;
        this.wa = c;
        this.ra = e;
        f && (this.R && this.unlisten(this.R, "action", this.T), f && (this.R = new Bg(f), Ga(this, va(Ha, this.R)), this.T = r(this.$, this), this.listen(this.R, "action", this.T)))
    };
    t(Ng, Fg);
    Ng.prototype.$ = function () {
        Mg(7);
        Og() && !Ud() && window.gapi && window.gapi.load ? window.gapi.load("share", r(this.ka, this)) : window.open("https://plus.google.com/share?url=" + this.V)
    };
    var Og = function () {
        if (!window.gbar) return !1;
        var a = !!(window.gbar.sos && 0 < window.gbar.sos().length), b = !(!window.gbar.so || !window.gbar.so());
        return a || b
    };
    Ng.prototype.ka = function () {
        if (window.gapi && window.gapi.share) {
            var a = {
                items: [{
                    type: "http://schema.org/WebPage",
                    id: location.protocol + "//" + location.host,
                    properties: {url: [this.V], name: [this.ya], image: [this.ra]}
                }]
            }, b = window.location.toString().match(/[?&]authuser=(\d+)/);
            b = b && b[1];
            var c = Og() || !!window.google.doodle.sf;
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: c, onLoginPopupBlocked: function () {
                    Qb("gplus,popupblocked")
                }, onLoginStateChanged: r(function () {
                    xa("google.doodle.sf");
                    this.ka()
                }, this),
                editorText: this.wa, sessionIndex: b || "", sourceForLogging: "doodle"
            })
        }
    };
    var Vg = function (a, b, c, e, f, g, h, k, m) {
        this.ka = b;
        this.T = k;
        this.kb = m || window.location.protocol + (window.google.doodle.shortlink || "//www.google.com");
        this.R = Hb();
        var n = this;
        this.V = null;
        null != c && (this.V = Pg(c), this.V.onclick = function () {
            Qg(n.kb, n.T(4), n.ka)
        }, this.R.appendChild(this.V));
        this.$ = Pg(e);
        this.$.onclick = function () {
            Rg(n.kb)
        };
        this.R.appendChild(this.$);
        this.ha = Pg(f);
        this.ha.onclick = function () {
            Sg(n.kb, n.T(3))
        };
        this.R.appendChild(this.ha);
        this.s = null;
        null != g && (this.s = Tg(g), Ug(this), this.s.onclick = function () {
            Ug(n);
            Mg(8)
        }, this.s.onmousedown = this.s.ontouchstart = function () {
            Ug(n)
        }, this.R.appendChild(this.s));
        a.appendChild(this.R)
    };
    t(Vg, v);
    var Pg = function (a) {
        Gb(a, "cursor", "pointer");
        return a
    }, Tg = function (a) {
        var b = document.createElement("a");
        b.appendChild(Pg(a));
        Gb(b, "position", "absolute");
        return b
    };
    Vg.prototype.v = function () {
        var a = this.R;
        a && a.parentNode && a.parentNode.removeChild(a);
        Vg.lb.v.call(this)
    };
    var Wg = function (a) {
        return 0 == a.indexOf("//") ? "https:" + a : a
    }, Qg = function (a, b, c) {
        a = Wg(a);
        a = Va(Za(a), "gp");
        (new Ng(a, window.google.doodle.alt || "", b, c)).$()
    }, Rg = function (a) {
        a = Wg(a);
        a = Va(Za(a), "fb");
        var b = new z("http://www.facebook.com/sharer.php"), c = new A;
        c.add("u", a);
        bb(b, c);
        window.open(b.toString());
        Mg(5)
    }, Sg = function (a, b) {
        a = Wg(a);
        a = Va(Za(a), "tw");
        var c = "text=" + encodeURIComponent(String(b + "\n" + a));
        window.open("http://twitter.com/intent/tweet?" + c);
        Mg(6)
    }, Ug = function (a) {
        a.s && a.s.setAttribute("href", Xg(a.kb,
            a.T(5)))
    }, Xg = function (a, b) {
        a = Wg(a);
        var c = {subject: Nb, body: b + "\n" + a}, e = new A, f;
        for (f in c) e.add(f, c[f]);
        c = new z("mailto:");
        bb(c, e);
        return c.toString()
    };
    var Yg = function (a) {
        H.call(this);
        H.call(this);
        this.ha = this.U = a;
        this.v = 0;
        this.ra = a;
        this.V = 1;
        this.H = E.get(D.Kc)
    };
    t(Yg, H);
    Yg.prototype.update = function (a) {
        this.v += a;
        a = Math.min(1, this.v / this.V);
        a--;
        this.ra = (this.ha - this.U) * (a * a * a + 1) + this.U
    };
    Yg.prototype.W = function (a, b, c) {
        for (var e = "" + Math.round(this.ra), f = 0, g = e.length - 1; 0 <= g; g--) vd(this.H, parseInt(e.charAt(g), 10) || 0), this.H.W(a, b + f, c), f -= this.H.width
    };
    var Zg = function (a, b, c, e) {
        a.v = 0;
        a.U = b;
        a.ha = c;
        a.V = e
    };
    var $g = function (a, b, c) {
        this.U = a;
        this.Ga = b;
        this.Da = c;
        this.H = !1;
        this.R = new Yg(0);
        this.ya = new Yg(100);
        this.v = new Yg(0)
    };
    t($g, Lf);
    var ah = {30: [D.Ld, 208, 176], 60: [D.Md, 195, 161], 99: [D.Nd, 173, 178], 100: [D.Kd, 0, 0]}, ch = function (a) {
        for (var b = a.U.H, c = Object.keys(ah), e = 0, f = 0, g; g = c[f]; f++) if (b <= g) {
            e = f;
            break
        }
        b = ah[parseInt(c[e], 10)];
        a.T = E.get(b[0]);
        a.$ = b[1];
        a.ka = b[2];
        a.V = E.get(D.ke);
        a.ha = E.get(D.ne);
        a.ra = E.get(D.oe);
        a.wa = E.get(D.qe);
        a.bc = E.get(D.re);
        a.Bb = E.get(D.fe);
        a.ac = E.get(D.le);
        b = Mb("score", {});
        c = b.rate;
        e = b.time;
        f = b.total;
        b = 0;
        na(c) && na(e) && na(f) && (b = Math.round(Math.max(0, f + (Date.now() - e) / 1E3 * c)));
        c = a.U.H;
        e = Math.max(2, c / 100 * 5);
        Zg(a.R,
            0, c, e);
        Zg(a.v, b, b + c, e);
        a.s = new Vg(document.createElement("div"), "https://www.google.com/logos/2014/venn/share.png", document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), {
            height: 64,
            width: 64
        }, function () {
            return Mb("share", "")
        });
        bh(a, 490, 10, function () {
            var b = a.s;
            Qg(b.kb, b.T(4), b.ka)
        });
        bh(a, 565, 10, function () {
            Rg(a.s.kb)
        });
        bh(a, 490, 85, function () {
            var b = a.s;
            Sg(b.kb, b.T(3))
        });
        bh(a, 565, 85, function () {
            var b = window.location;
            var c = a.s;
            c = Xg(c.kb, c.T(5));
            b.href = c
        });
        bh(a, 490, 275, a.Da);
        bh(a, 565, 275, Lb);
        a.H = !0
    }, bh = function (a, b, c, e) {
        cc(a.Ga, new Yf([b, c, b + 64, c, b + 64, c + 64, b, c + 64]), function (a) {
            "mousedown" == a && e()
        })
    };
    $g.prototype.update = function (a) {
        this.H || ch(this);
        this.R.update(a);
        this.v.update(a);
        this.T.update(a)
    };
    $g.prototype.W = function (a) {
        this.H || ch(this);
        this.V.W(a, 0, 0);
        this.R.W(a, 360, 26);
        this.ya.W(a, 448, 26);
        this.v.W(a, 448, 102);
        this.T.W(a, this.$, this.ka);
        this.ra.W(a, 490, 10);
        this.ha.W(a, 565, 10);
        this.bc.W(a, 490, 85);
        this.wa.W(a, 565, 85);
        this.Bb.W(a, 490, 275);
        this.ac.W(a, 565, 275)
    };
    var rf = {
        width: 219,
        height: 56,
        frames: [[[0, 0, 0, 285, 80, 56]], [[8, 0, 349, 228, 83, 56]], [[16, 0, 88, 228, 86, 56]], [[23, 0, 0, 171, 89, 56]], [[30, 0, 286, 57, 92, 56]], [[36, 0, 199, 0, 95, 56]], [[53, 0, 269, 171, 87, 56]], [[58, 0, 93, 114, 91, 56]], [[62, 0, 96, 57, 94, 56]], [[78, 0, 175, 228, 86, 56]], [[80, 0, 185, 114, 91, 56]], [[83, 0, 191, 57, 94, 56]], [[97, 0, 0, 228, 87, 56]], [[98, 0, 277, 114, 91, 56]], [[99, 0, 295, 0, 95, 56]], [[111, 0, 180, 171, 88, 56]], [[111, 0, 0, 114, 92, 56]], [[110, 0, 101, 0, 97, 56]], [[121, 0, 90, 171, 89, 56]], [[118, 0, 0, 57, 95, 56]], [[116, 0, 0, 0, 100, 56]], [[136,
            0, 357, 171, 82, 56]], [[133, 0, 262, 228, 86, 56]]]
    };
    var dh = S("Safari") && !((S("Chrome") || S("CriOS")) && !S("Edge") || S("Coast") || S("Opera") || S("Edge") || S("Silk") || S("Android")) && !(S("iPhone") && !S("iPod") && !S("iPad") || S("iPad") || S("iPod"));
    var eh = re && dh && !ye(536.25), fh = function (a, b, c) {
        var e = document.createElement("source");
        e.src = b;
        e.type = c;
        a.appendChild(e)
    }, gh = function (a) {
        if (eh) return null;
        var b = document.createElement("audio");
        b && b.canPlayType && (b.canPlayType("audio/mpeg") || b.canPlayType("audio/ogg")) ? (b.controls = !1, b.hidden = !0, b.loaded = !1, lg(b, "loadedmetadata", function () {
            b.loaded = !0;
            if (b.onloadedmetadata) b.onloadedmetadata()
        }), fh(b, a + ".ogg", "audio/ogg"), fh(b, a + ".mp3", "audio/mpeg")) : b = null;
        return b
    };
    var hh = function (a, b, c) {
        this.s = {};
        this.R = b || "";
        this.T = c || document.body;
        a && this.loadAll(a)
    };
    t(hh, v);
    hh.prototype.v = function () {
        for (var a in this.s) {
            var b = this.pause(a);
            b && b.loaded && (b.currentTime = 0);
            b = this.s[a];
            b.parent && b.parent.removeChild(b)
        }
        this.s = {};
        hh.lb.v.call(this)
    };
    hh.prototype.load = function (a) {
        if (a) {
            var b = this.s[a];
            !b && (b = gh(this.R + "/" + a)) && (this.T.appendChild(b), this.s[a] = b)
        }
        return b
    };
    hh.prototype.loadAll = function (a) {
        for (var b in a) this.load(a[b])
    };
    hh.prototype.loop = function (a) {
        if (a = Hd(this, a)) a.loop = !0;
        return a
    };
    var Hd = function (a, b) {
        var c = a.load(b);
        c && c.play && (c.autoplay = !0, c.loop = !1, c.loaded && (c.currentTime = 0), c.play());
        return c
    }, Q = function (a, b, c) {
        if (a = a.load(b)) a.volume = c
    };
    hh.prototype.pause = function (a) {
        if (a) {
            var b = this.s[a];
            b && b.loaded && b.pause && (b.pause(), b.autoplay = !1, b.loop = !1)
        }
        return b
    };
    var ih = function () {
        v.call(this);
        this.s = new hh([], "img/pony-express");
        this.R = !1;
        Ga(this, va(Ha, this.s))
    };
    t(ih, v);
    var jh = ["gallop-loop", "impact", "letter"];
    ih.prototype.loadAll = function () {
        this.R = !0;
        for (var a = 0, b; b = jh[a++];) Hd(this.s, b), Q(this.s, b, 0);
        vb || this.s.loop("gallop-loop")
    };
    var kh = function () {
        var a = xd;
        if (a.R) for (var b = 0, c; c = jh[b++];) Q(a.s, c, 0)
    }, lh = function () {
        var a = xd;
        if (a.R) for (var b = 0, c; c = jh[b++];) Q(a.s, c, 1)
    };
    var mh = function (a) {
        L.call(this, a)
    };
    t(mh, L);
    mh.prototype.update = function (a) {
        this.ma.update(a)
    };
    mh.prototype.De = function () {
    };
    var nh, Cf, C = null, oh = null, zf = null, R = null, ph = null, $b = null, xd = null, qh = Date.now(), Z = {};
    Z[D.Db] = [[26, 175, 24, !1]];
    Z[D.mb] = [[28, 67, 21, !1], [72, 107, 18, !1], [118, 155, 22, !1]];
    Z[D.nb] = [[2, 39, 111, !1], [22, 79, 89, !1], [65, 126, 48, !1]];
    Z[D.Xa] = [[6, 68, 32, !1]];
    Z[D.uc] = [[6, 86, 34, !1]];
    Z[D.vc] = [[6, 74, 36, !1]];
    Z[D.Ua] = [[0, 50, 72, !1]];
    Z[D.Ba] = [[0, 60, 111, !1]];
    Z[D.Uc] = [[2, 235, 720, !1], [70, 190, 550, !1], [120, 140, 410, !1], [170, 90, 300, !1], [240, 40, 180, !1]];
    Z[D.wc] = [[2, 25, 530, !1], [30, 75, 550, !1], [60, 125, 480, !1], [90, 175, 80, !1]];
    Z[D.xc] = [[50, 60, 100, !1], [100, 100, 175, !1], [200, 150, 140, !1], [290, 250, 140, !1], [315, 300, 185, !1]];
    Z[D.Vc] = [[2, 118, 100, !1]];
    Z[D.zc] = [[43, 162, 55, !1]];
    Z[D.Wc] = [[150, 100, 90, !1], [770, 100, 115, !1], [92, 95, 1103, !1]];
    Z[D.Ac] = [[0, 50, 270, !1], [50, 100, 275, !1], [147, 140, 150, !1], [170, 190, 150, !1]];
    Z[D.Bc] = [[65, 25, 305, !1], [32, 75, 450, !1]];
    Z[D.Cc] = [[25, 20, 175, !1], [66, 57, 175, !1], [130, 100, 210, !1], [280, 150, 115, !1]];
    Z[D.Dc] = [[20, 50, 400, !1], [156, 142, 350, !1], [48, 192, 710, !1], [306, 248, 258, !1], [716, 248, 100, !1]];
    Z[D.Ec] = [[55, 96, 1101, !1], [190, 195, 143, !1], [198, 246, 145, !1], [856, 147, 413, !1], [943, 238, 424, !1], [208, 295, 1214, !1]];
    Z[D.Xc] = [[0, 70, 195, !1]];
    Z[D.Tb] = [[0, 57, 135, !1]];
    Z[D.Ya] = [[8, 60, 257, !1]];
    Z[D.Va] = [[3, 75, 187, !1]];
    Z[D.Za] = [[7, 76, 280, !1], [12, 61, 265, !1]];
    Z[D.Fc] = [[0, 165, 95, !1]];
    Z[D.Eb] = [[0, 150, 105, !1]];
    Z[D.Yc] = [[59, 163, 41, !1]];
    Z[D.Zc] = [[64, 166, 43, !1]];
    Z[D.$c] = [[60, 164, 39, !1]];
    Z[D.ad] = [[12, 181, 78, !1]];
    Z[D.hd] = [[70, 259, 84, !1]];
    Z[D.jd] = [[9, 106, 52, !1]];
    Z[D.kd] = [[39, 177, 110, !1]];
    Z[D.$a] = [[4, 45, 63, !1]];
    Z[D.Fb] = [[2, 35, 45, !1]];
    Z[D.qb] = [[2, 30, 93, !1]];
    Z[D.ab] = [[3, 50, 90, !1]];
    Z[D.Gc] = [[5, 42, 197, !1], [131, 140, 68, !1], [81, 194, 118, !1], [90, 248, 110, !1], [46, 295, 153, !1]];
    Z[D.rb] = [[0, 39, 151, !1], [0, 143, 151, !1], [0, 189, 151, !1], [0, 241, 151, !1], [0, 294, 151, !1]];
    Z[D.Hc] = [[0, 41, 85, !1], [0, 145, 150, !1], [0, 196, 142, !1], [0, 241, 155, !1], [0, 282, 181, !1]];
    Z[D.Gb] = [[8, 58, 127, !1]];
    Z[D.qd] = [[2, 92, 277, !1]];
    Z[D.Ub] = [[21, 114, 168, !1]];
    Z[D.Ic] = [[24, 101, 166, !1]];
    Z[D.Jc] = [[29, 128, 956, !1], [9, 106, 956, !1]];
    Z[D.od] = [[16, 181, 1098, !1], [15, 122, 1072, !1], [107, 76, 210, !1], [562, 78, 128, !1], [937, 77, 123, !1]];
    Z[D.Lc] = [[12, 90, 133, !1], [32, 110, 133, !1], [56, 133, 133, !1]];
    Z[D.Ha] = [[1, 57, 99, !1]];
    Z[D.Aa] = [[0, 41, 81, !1]];
    Z[D.Ca] = [[0, 30, 55, !1]];
    Z[D.tb] = [[42, 167, 56, !1]];
    Z[D.Hb] = [[44, 142, 57, !1]];
    Z[D.ub] = [[105, 9, 95, !1]];
    Z[D.td] = [[12, 216, 43, !1]];
    Z[D.Vb] = [[18, 259, 50, !1]];
    Z[D.Wb] = [[10, 191, 33, !1]];
    Z[D.Xb] = [[28, 290, 91, !1]];
    Z[D.vb] = [[12, 237, 90, !1]];
    Z[D.hb] = [[15, 239, 76, !1]];
    var rh = !1, sh = !1, th = function () {
        if (sh) rh = !1; else {
            rh = !0;
            var a = Date.now(), b = (a - qh) / 1E3;
            .1 < b && (b = .1);
            qh = a;
            a = oh;
            var c = nh, e = Vc, f = null != document[bd], g = window.innerWidth / window.innerHeight;
            yc = f ? 1 >= g : !1;
            var h = Wc, k = f || Fb() || ad, m = !1;
            if (window.innerWidth != Xc || window.innerHeight != Yc || f != Zc) {
                f ? yc ? (e.width = 360, e.height = 640, a.setTransform(1, 0, 0, 1, 0, 0), a.translate(360, 0), a.rotate(Math.PI / 2), m = !0) : (e.width = 640, e.height = 360, a.setTransform(1, 0, 0, 1, 0, 0)) : Zc && (e.width = 640, e.height = 360, a.setTransform(1, 0, 0, 1, 0, 0));
                if (k) {
                    h.style.width =
                        "100%";
                    h.style.height = "100%";
                    h = yc ? 1 / wc : wc;
                    var n = f || Uc() ? 0 : 16;
                    k = window.innerHeight - n;
                    n = window.innerWidth - n;
                    if (g > h) {
                        g = k;
                        var w = Math.round(g * h);
                        e.style.height = g + "px";
                        e.style.width = w + "px";
                        Uc() && (e.style.left = Math.round((n - w) / 2) + "px", e.style.top = "0")
                    } else w = n, g = Math.round(w / h), e.style.width = w + "px", e.style.height = g + "px", Uc() && (e.style.left = "0", e.style.top = Math.round((k - g) / 2) + "px")
                } else h.style.width = "400px", h.style.height = "225px", e.style.width = "100%", e.style.height = "100%";
                e = m;
                c.Da = c.v.width / c.v.clientWidth;
                c.$ = c.v.height / c.v.clientHeight;
                p(e) && (c.ha = e);
                Xc = window.innerWidth;
                Yc = window.innerHeight;
                Zc = f
            }
            zf.update(b);
            zf.W(a);
            null != document[bd] && (a.globalAlpha = .2, $c.W(a, 320 - $c.width / 2, 360 - $c.height), a.globalAlpha = 1);
            Pb(th)
        }
    }, uh = function (a) {
        if (a.ma.Ab in Z) for (var b = Z[a.ma.Lb], c = 0; c < b.length; c++) {
            var e = b[c][0], f = b[c][1], g = b[c][2], h = b[c][3];
            a.$.push(new Bc(a, e, f, g, h));
            a.R.push(new Bc(a, a.x + e, a.y + f, g, h));
            a.Ad = function (a) {
                Gd(a)
            }
        }
    }, vh = function (a) {
        var b = new wd([[a.x + 3, a.y + 26, 30]], !0, function () {
            Ed(R, 1);
            var c = E.get(D.tc);
            P(c, function () {
                a.ta = !0
            });
            N(a, c);
            b.ta = !0
        });
        R.add(b)
    }, wh = function (a) {
        var b = R, c = b.va, e = new wd([[a.x + 108, a.y + 85, 23]], !1, function () {
            c.velocityX = 0;
            F = !0;
            N(c, E.get(D.nc));
            Ed(b, -3);
            var f = E.get(D.hc);
            P(f, function () {
                N(a, E.get(D.Ta));
                Fd(b)
            });
            N(a, f);
            e.ta = !0
        });
        b.add(e)
    }, xh = function (a) {
        var b = R, c = O(a.x + 40, 20, function () {
            var b = E.get(D.Cb);
            P(b, function () {
                b.Wa = b.yb - 1;
                b.pause()
            });
            N(a, b);
            c.ta = !0
        });
        b.add(c)
    }, zh = function (a, b, c) {
        var e = R.va, f = O(a - 250, 20, function () {
            f.ta = !0;
            Cd(R, b);
            F = !0
        });
        R.add(f);
        var g = new wd([[a, zc(b), 20]],
            !0, function () {
                yh(c);
                g.ta = !0;
                e.velocityX = 0;
                var a = E.get(D.Rb);
                P(a, function () {
                    R.level++;
                    N(e, E.get(pc[R.level]));
                    e.velocityX = 220;
                    e.x += 200;
                    F = !1;
                    Pf(zf)
                });
                N(e, a);
                Q(xd.s, "gallop-loop", 0)
            });
        R.add(g)
    }, Ah = function (a) {
        var b = O(a - 950, 20, function () {
            b.ta = !0;
            Cd(R, 3);
            F = !0
        });
        R.add(b);
        var c = R.wb, e = O(a - 620, 20, function () {
            c.Bd = -100;
            e.ta = !0
        });
        R.add(e);
        var f = R.va, g = O(a, 20, function () {
            g.ta = !0;
            yh(5);
            f.velocityX = 0;
            c.Bd = 0;
            var a = E.get(D.Rb);
            P(a, function () {
                Pf(zf)
            });
            N(f, a);
            kh()
        });
        R.add(g)
    }, Bh = function () {
        for (var a = 0, b = 0; b < Rf.length; b++) {
            var c =
                Rf[b][0], e = Rf[b][1], f = Rf[b][2], g = new mh(E.get(c));
            g.x = e;
            g.y = f;
            rd(g);
            uh(g);
            if (c == D.S) vh(g); else if (c == D.Mc) {
                var h = 0 == a ? 3 : 4;
                zh(e, Ac(f + g.ma.height), h);
                a++
            } else c == D.Ta ? wh(g) : c == D.ub ? xh(g) : c == D.nd && Ah(e);
            R.add(g)
        }
        var k = O(4E3, 20, function () {
            k.ta = !0;
            Pf(zf)
        });
        R.add(k);
        h = O(70, 200, function () {
            h.ta = !0;
            yh(2)
        });
        R.add(h)
    }, Ch = function () {
        F = !1;
        var a = R = new Bd;
        Bh();
        var b = ph = new If(C, function (b) {
            b = !b;
            Cd(a, a.T + -1);
            b && (a.V.H = .2)
        }, function (b) {
            b = !b;
            Cd(a, a.T + 1);
            b && (a.V.v = .2)
        }), c = zf = new Of, e = function () {
            Pf(c)
        }, f = function () {
            Pf(c);
            Q(xd.s, "gallop-loop", 1)
        }, g = new Ff(e), h = new Ef, k = new Qf(e), m = function (a) {
            return function () {
                yh(a)
            }
        };
        c.add(new W([2], e, m(6), !1), h);
        c.add(k, new Ff(function () {
            k.start();
            xd.loadAll();
            yh(1);
            ff([3], function () {
                ff([5, 0], function () {
                    ff([7, 6, 1])
                })
            })
        }));
        c.add(new W([2, 4], e, m(7)), h);
        var n = new Uf(e, new Nf(a));
        c.add(n, h);
        a.update(0);
        c.add(new Nf(a), b);
        c.add(new W([3], e, m(8)), h);
        c.add(new Nf(a), b);
        c.add(new W([0], e, m(9)), h);
        n = E.get(D.Gd);
        n.Zb = f;
        c.add(new Mf(n), g);
        c.add(new W([3, 5], e, m(10)), h);
        c.add(new Nf(a), b);
        c.add(new W([1],
            e, m(11)), h);
        n = E.get(D.Hd);
        n.Zb = f;
        c.add(new Mf(n), g);
        c.add(new W([3, 5, 6], e, m(12)), h);
        c.add(new Nf(a), b);
        c.add(new W([7], e, m(13)), h);
        b = nh = new ac;
        c.add(new $g(a, b, function () {
            Ch()
        }), new Kf(C, b));
        Cf && Df();
        Cf = new Bf
    }, Dh = function () {
        $b = new Ub(6E4, function () {
            sh = !0;
            kh()
        }, function () {
            sh = !1;
            rh || th();
            lh()
        });
        fd();
        Ch();
        sh = !1;
        rh || th();
        lh()
    }, yh = function (a) {
        Qb(["ponyexpress", "n:" + a, "p:" + R.ya, "c:" + R.wa, "s:" + R.H].join())
    };
    var Eh = null;
    (function (a, b) {
        var c = function () {
            a();
            window.lol && window.lol()
        }, e = function () {
            za(c);
            ya(c, b);
            c()
        };
        window.google && google.x ? google.x({id: "DOODLE"}, e) : e()
    })(function () {
        if (Eh = document.getElementById("hplogo")) C = document.getElementById("hplogoc"), oh = C.getContext("2d"), C.width = 640, C.height = 360, xd = new ih, E = new sf, ff([2, 4], Dh)
    }, function () {
        sh = !0;
        kh();
        $b && $b.xd();
        ph && Jf(ph);
        Cf && Df();
        Ha(xd)
    });
}).call(this);
