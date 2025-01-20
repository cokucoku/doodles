window.__require = function t(e, o, i) {
    function n(r, c) {
        if (!o[r]) {
            if (!e[r]) {
                var a = r.split("/");
                if (a = a[a.length - 1], !e[a]) {
                    var h = "function" == typeof __require && __require;
                    if (!c && h) return h(a, !0);
                    if (s) return s(a, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = a
            }
            var p = o[r] = {
                exports: {}
            };
            e[r][0].call(p.exports, function (t) {
                return n(e[r][1][t] || t)
            }, p, p.exports, t, e, o, i)
        }
        return o[r].exports
    }
    for (var s = "function" == typeof __require && __require, r = 0; r < i.length; r++) n(i[r]);
    return n
}({
    AudioMgr: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fb96eZehPVEcZw5VrqyRwFf", "AudioMgr");
        var i, n = this && this.__extends || (i = function (t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            s = this && this.__decorate || function (t, e, o, i) {
                var n, s = arguments.length,
                    r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i);
                else
                    for (var c = t.length - 1; c >= 0; c--)(n = t[c]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
                return s > 3 && r && Object.defineProperty(e, o, r), r
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.AudioMgr = void 0;
        var r = t("../../config/GameDataCenter"),
            c = t("../../config/GConfig"),
            a = cc._decorator,
            h = a.ccclass,
            p = (a.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bgmId = -1, e.soundId = -1, e.soundData = {}, e
                }
                return n(e, t), e.prototype.onEnable = function () {
                    cc.systemEvent.on(c.GameEvents.S_Play_Sound, this.onPlaySound, this), cc.systemEvent.on(c.GameEvents.S_Stop_Sound, this.onStopSound, this), cc.systemEvent.on(c.GameEvents.S_Play_Bgm_Sound, this.playBgm, this), cc.systemEvent.on(c.GameEvents.S_Stop_Bgm_Sound, this.stopBgm, this)
                }, e.prototype.onDisable = function () {
                    cc.systemEvent.off(c.GameEvents.S_Play_Sound, this.onPlaySound, this), cc.systemEvent.off(c.GameEvents.S_Stop_Sound, this.onStopSound, this), cc.systemEvent.off(c.GameEvents.S_Play_Bgm_Sound, this.playBgm, this), cc.systemEvent.off(c.GameEvents.S_Stop_Bgm_Sound, this.stopBgm, this)
                }, e.prototype.onStopSound = function (t) {
                    (this.soundData[t] || "bgMugic" == t) && (cc.audioEngine.stop(this.soundData[t]), this.soundData[t] = null)
                }, e.prototype.onPlaySound = function (t, e, o, i) {
                    if (void 0 === e && (e = !1), void 0 === o && (o = !1), void 0 === i && (i = 1), "bgm" == t) this.playBgm(t);
                    else if ("stopBgm" == t || "stopSound" == t) this[t].call(this);
                    else {
                        var n = r.GameDataCenter.audios[t];
                        if (n) {
                            var s = cc.audioEngine.play(n, o || !1, i);
                            e && (this.soundId = s)
                        }
                    }
                }, e.prototype.playBgm = function (t) {
                    var e = r.GameDataCenter.audios[t];
                    if (e) {
                        this.stopBgm();
                        var o = cc.audioEngine.play(e, !0, 1);
                        this.bgmId = o
                    }
                }, e.prototype.stopBgm = function () {
                    this.bgmId > -1 && (cc.audioEngine.stop(this.bgmId), this.bgmId = -1)
                }, e.prototype.stopSound = function () {
                    this.soundId > -1 && (cc.audioEngine.stop(this.soundId), this.soundId = -1)
                }, s([h], e)
            }(cc.Component));
        o.AudioMgr = p, cc._RF.pop()
    }, {
        "../../config/GConfig": void 0,
        "../../config/GameDataCenter": void 0
    }],
    GameManager: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "8b57cinjs5LhpHrB+hF0obk", "GameManager");
        var i, n = this && this.__extends || (i = function (t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            s = this && this.__decorate || function (t, e, o, i) {
                var n, s = arguments.length,
                    r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i);
                else
                    for (var c = t.length - 1; c >= 0; c--)(n = t[c]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
                return s > 3 && r && Object.defineProperty(e, o, r), r
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.GameManager = void 0;
        var r = t("../../framework/UIManager"),
            c = cc._decorator.ccclass,
            a = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.start = function () {
                    cc.macro.ENABLE_MULTI_TOUCH = !1, r.UIManager.open("home/HomePanel")
                }, s([c], e)
            }(cc.Component);
        o.GameManager = a, cc._RF.pop()
    }, {
        "../../framework/UIManager": void 0
    }],
    PowerSystem: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "27462BCeZhP7q0Ey0XSkL2F", "PowerSystem");
        var i, n = this && this.__extends || (i = function (t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            s = this && this.__decorate || function (t, e, o, i) {
                var n, s = arguments.length,
                    r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i);
                else
                    for (var c = t.length - 1; c >= 0; c--)(n = t[c]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
                return s > 3 && r && Object.defineProperty(e, o, r), r
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.PowerSystem = void 0;
        var r = t("../../config/GameDataCenter"),
            c = t("../../config/GConfig"),
            a = cc._decorator,
            h = a.ccclass,
            p = a.property,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.powerNode = null, e
                }
                return n(e, t), e.prototype.onEnable = function () {
                    cc.systemEvent.on(c.GameEvents.M_Collect_Effect, this.showEffect, this), cc.systemEvent.on(c.GameEvents.M_Start_Game_Effect, this.startGameEffect, this)
                }, e.prototype.onDisable = function () {
                    cc.systemEvent.off(c.GameEvents.M_Collect_Effect, this.showEffect, this), cc.systemEvent.off(c.GameEvents.M_Start_Game_Effect, this.startGameEffect, this)
                }, e.prototype.onLoad = function () {
                    r.GameDataCenter._powerLabel = this.powerNode
                }, e.prototype.start = function () {
                    this.createNodes()
                }, e.prototype.createNodes = function () {
                    var t = this;
                    this.schedule(function () {
                        var e = cc.instantiate(t.powerNode);
                        e.opacity = 0, e.parent = r.GameDataCenter._powerLabel
                    }, 0, 9)
                }, e.prototype.showEffect = function (t) {
                    for (var e = 0; e < t; e++) {
                        var o = r.GameDataCenter._powerLabel.children[e],
                            i = c.powerFlyUpConfig[t].startPos[e];
                        cc.tween(o).set({
                            opacity: 255,
                            scale: 1,
                            position: i
                        }).delay(.05 * e).parallel(cc.tween().bezierTo(.7, cc.v2(i.x, i.y), cc.v2(i.x, i.y + 150), cc.v2(0, 0)), cc.tween().to(.7, {
                            scale: 1.2
                        })).set({
                            opacity: 0
                        }).call(function () {
                            r.GameDataCenter.power += 1
                        }).start()
                    }
                }, e.prototype.startGameEffect = function (t) {
                    cc.tween(r.GameDataCenter._powerLabel.children[0]).set({
                        opacity: 255,
                        scale: 1,
                        x: 0,
                        y: 0
                    }).to(.6, {
                        x: 285,
                        y: -1125,
                        scale: .8
                    }, {
                        easing: "smooth"
                    }).set({
                        opacity: 0
                    }).call(function () {
                        t()
                    }).start()
                }, s([p(cc.Node)], e.prototype, "powerNode", void 0), s([h], e)
            }(cc.Component);
        o.PowerSystem = u, cc._RF.pop()
    }, {
        "../../config/GConfig": void 0,
        "../../config/GameDataCenter": void 0
    }],
    Power: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ea5b0k8XTJKj4EYEmdZIl2I", "Power");
        var i, n = this && this.__extends || (i = function (t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            s = this && this.__decorate || function (t, e, o, i) {
                var n, s = arguments.length,
                    r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i);
                else
                    for (var c = t.length - 1; c >= 0; c--)(n = t[c]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
                return s > 3 && r && Object.defineProperty(e, o, r), r
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Power = void 0;
        var r = t("../../config/GameDataCenter"),
            c = t("../../config/GConfig"),
            a = t("../../framework/DateTime"),
            h = t("../../framework/NumberFormat"),
            p = t("../../framework/Store"),
            u = cc._decorator,
            l = u.ccclass,
            f = u.property,
            d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.powerLabel = null, e.countDownLabel = null, e.addBtn = null, e.time = 0, e.countDownFunc = null, e
                }
                var o;
                return n(e, t), o = e, e.prototype.onEnable = function () {
                    this.getTime(), this.onBeginCountDown(), this.onPowerChange(), cc.systemEvent.on(c.GameEvents.S_Update_Data_Power, this.onPowerChange, this)
                }, e.prototype.onDisable = function () {
                    cc.systemEvent.off(c.GameEvents.S_Update_Data_Power, this.onPowerChange, this)
                }, e.prototype.onClickAddPower = function () {
                    SDK.shipin(function () {
                        r.GameDataCenter.power += 1
                    })
                }, e.isStartGame = function () {
                    return r.GameDataCenter.power >= 1
                }, e.onPowerSub = function () {
                    r.GameDataCenter.power -= 1
                }, e.onRestorePower = function () {
                    r.GameDataCenter.power = 1, p.Store.remove(o.timeKey)
                }, e.prototype.onPowerChange = function () {
                    this.powerLabel.string = "" + r.GameDataCenter.power, this.addBtn.active = r.GameDataCenter.power <= 2, this.countDownLabel && this.updateCuntDownLabel(), this.onBeginCountDown()
                }, e.prototype.getTime = function () {
                    var t = a.DateTime.getTimeStamp() - p.Store.get(o.timeKey, a.DateTime.getTimeStamp());
                    t < 1 && (t = 1), r.GameDataCenter.power + t / 300 > 5 ? (r.GameDataCenter.power = 5, p.Store.remove(o.timeKey)) : r.GameDataCenter.power = Math.floor(r.GameDataCenter.power + t / 300), this.time = t % 300
                }, e.prototype.updateCuntDownLabel = function () {
                    if (r.GameDataCenter.power <= 2) {
                        this.countDownLabel.node.active = !0;
                        var t = 300 - this.time,
                            e = t % 60,
                            o = t >= 60 ? Math.floor(t / 60) % 60 : 0;
                        this.countDownLabel.string = h.NumberFormat.formatLen(o, 2) + ":" + h.NumberFormat.formatLen(e, 2) + "\u540e\u6062\u590d"
                    } else this.countDownLabel.string = "00:00\u540e\u6062\u590d", this.countDownLabel.node.active = !1, this.time = 0
                }, e.prototype.onBeginCountDown = function () {
                    r.GameDataCenter.power <= 2 && !this.countDownFunc ? (this.countDownFunc = this.onCountDownEvent.bind(this), this.schedule(this.countDownFunc, 1), this.onCountDownEvent()) : r.GameDataCenter.power > 2 && this.countDownFunc && (this.unschedule(this.countDownFunc), this.countDownFunc = null, p.Store.remove(o.timeKey))
                }, e.prototype.onCountDownEvent = function () {
                    if (this.node.active != this.node.parent.active) return this.unschedule(this.countDownFunc), void(this.countDownFunc = null);
                    this.time++, 300 === this.time && (this.time = 0, r.GameDataCenter.power++, r.GameDataCenter.power >= 2 && (this.unschedule(this.countDownFunc), this.countDownFunc = null, p.Store.remove(o.timeKey))), p.Store.set(o.timeKey, a.DateTime.getTimeStamp() - this.time), this.countDownLabel && this.updateCuntDownLabel()
                }, e.EEventName = {
                    ON_CHANGE_POWER: "ON_CHANGE_POWER"
                }, e.timeKey = "PJTimeKey", s([f({
                    type: cc.Label,
                    tooltip: "\u4f53\u529b\u503c."
                })], e.prototype, "powerLabel", void 0), s([f({
                    type: cc.Label,
                    tooltip: "\u5012\u8ba1\u65f6."
                })], e.prototype, "countDownLabel", void 0), s([f({
                    type: cc.Node,
                    tooltip: "\u589e\u52a0\u6309\u94ae"
                })], e.prototype, "addBtn", void 0), o = s([l], e)
            }(cc.Component);
        o.Power = d, cc._RF.pop()
    }, {
        "../../config/GConfig": void 0,
        "../../config/GameDataCenter": void 0,
        "../../framework/DateTime": void 0,
        "../../framework/NumberFormat": void 0,
        "../../framework/Store": void 0
    }],
    ScrollViewExtend: [function (t, e, o) {
        "use strict";
        var i, n, s;
        cc._RF.push(e, "e3331JFpNpCmKYMq7eNXJv2", "ScrollViewExtend"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ScrollViewExtend = o.EMonitorDir = void 0,
            function (t) {
                t[t.YES = 0] = "YES", t[t.NO = 1] = "NO"
            }(i || (i = {})),
            function (t) {
                t.PAGEVIEW = "PAGEVIEW", t.SCROLLVIEW = "SCROLLVIEW"
            }(n || (n = {})),
            function (t) {
                t.TOP = "scroll-to-top", t.LEFT = "scroll-to-left", t.RIGHT = "scroll-to-right", t.BOTTOM = "scroll-to-bottom"
            }(o.EMonitorDir || (o.EMonitorDir = {})),
            function (t) {
                t[t.TOP = 0] = "TOP", t[t.LEFT = 1] = "LEFT", t[t.RIGHT = 2] = "RIGHT", t[t.BOTTOM = 3] = "BOTTOM"
            }(s || (s = {}));
        var r = function () {
            function t(t) {
                if (this.viewType = n.SCROLLVIEW, this.beginDir = s.TOP, this.keepItemFlag = -3, this.isScrolling = !1, this.isVertical = !0, this.datas = [], this.items = [], this.itemMode = null, this.setItemFunc = null, this.viewNode = null, this.layout = null, this.itemSize = null, this.sameDirCount = 1, this.firstLine = 0, this.addLine = 2, this.offset = {}, this.viewNode = t.viewNode, this.itemSize = t.itemSize, this.itemMode = t.itemMode, this.setItemFunc = t.setItemFunc, t.addLine && (this.addLine = t.addLine), this.isVertical = [0, 1].includes(this.viewNode.anchorY), this.offset = Object.assign({
                        x: 0,
                        y: 0,
                        end: 0
                    }, t.offset || {}), this.beginDir = [s.LEFT, s.RIGHT][this.viewNode.anchorX] || [s.BOTTOM, s.TOP][this.viewNode.anchorY], this.sameDirCount = Math.floor(this.viewNode[this.size(i.NO)] / this.getItemSize(i.NO)), this.viewNode.getComponent(cc.PageView) && (this.viewType = n.PAGEVIEW), this.layout = this.viewNode.getComponentInChildren(cc.Layout), !this.layout) {
                    var e = new cc.Node("layout");
                    e.parent = this.viewNode, this.layout = e.addComponent(cc.Layout), this.viewNode.getComponent(cc.ScrollView).content = this.layout.node
                }
                this.layout.type = 0, this.layout.resizeMode = 0, this.layout.node.anchorX = this.viewNode.anchorX, this.layout.node.anchorY = this.viewNode.anchorY, this.layout.node[this.size(i.NO)] = this.viewNode[this.size(i.NO)], this.addScrollMonitor()
            }
            return t.prototype.setDatas = function (t) {
                this.layout.node.x = this.layout.node.y = 0, this.viewNode.getComponent(this.viewComponent()).enabled = !1, this.setItemFunc = t.setItemFunc || this.setItemFunc, t.isKeepItem && (this.keepItemFlag = 1), this.datas = t.datas;
                var e = Math.ceil(this.datas.length / this.sameDirCount);
                if (this.layout.node[this.size(i.YES)] = e * this.getItemSize(i.YES) - this.offset[this.pos(i.YES)] * this.unit() + this.offset.end, this.layout.node.x = this.layout.node.y = 0, this.viewType == n.PAGEVIEW)
                    for (var o = this.viewNode.getComponent(cc.PageView).getPages().length - 1; o >= 0; --o) o > this.datas.length && this.viewNode.getComponent(cc.PageView).removePageAtIndex(o);
                this.initView(t.isFrameLoad, t.callBack)
            }, t.prototype.addDirMonitor = function (t, e) {
                this.viewNode.on(t, e)
            }, t.prototype.forEach = function (t) {
                for (var e = 0; e < this.items.length; e++)
                    if (this.items[e] && this.items[e].node.active && t(this.items[e].node, this.items[e].index, this.datas[e])) return
            }, t.prototype.scrollToItem = function (t, e) {
                t < 0 && (t += this.datas.length);
                var o = {
                        x: 0,
                        y: 0
                    },
                    s = -this.setPosition(t)[this.pos(i.YES)] - this.getItemSize(i.YES) / 2 * this.unit() + this.offset[this.pos(i.YES)] * this.unit(),
                    r = (this.layout.node[this.size(i.YES)] - this.viewNode[this.size(i.YES)]) * this.unit();
                s >= 0 && this.unit() > 0 || s > 0 && this.unit() < 0 ? o[this.pos(i.YES)] = Math.min(s, r) : o[this.pos(i.YES)] = Math.max(s, r), e ? (o[this.pos(i.YES)] = 1 - o[this.pos(i.YES)] / r, this.scrollTo(o, e)) : (this.moveTo(o), this.viewType == n.PAGEVIEW && (this.viewNode.getComponent(cc.PageView)._curPageIdx = t))
            }, t.prototype.scrollToPercent = function (t, e) {
                var o = {
                    x: 0,
                    y: 0
                };
                e ? (o[this.pos(i.YES)] = 1 - t, this.scrollTo(o, e)) : (o[this.pos(i.YES)] = t * (this.layout.node[this.size(i.YES)] - this.viewNode[this.size(i.YES)]), this.moveTo(o))
            }, t.prototype.moveTo = function (t) {
                this.viewNode.getComponent(this.viewComponent()).enabled = !1, this.viewNode.getComponent(this.viewComponent()).stopAutoScroll(), this.layout.node[this.pos(i.YES)] = t[this.pos(i.YES)], this.scrolling(), this.viewNode.getComponent(this.viewComponent()).enabled = !0
            }, t.prototype.scrollTo = function (t, e) {
                this.viewNode.getComponent(this.viewComponent()).enabled = !1, this.viewNode.getComponent(this.viewComponent()).stopAutoScroll(), this.viewNode.getComponent(this.viewComponent()).scrollTo(t, e), this.viewNode.getComponent(this.viewComponent()).enabled = !0
            }, t.prototype.initView = function (t, e) {
                var o = this,
                    n = Math.min(this.datas.length, this.sameDirCount * (Math.ceil(this.viewNode[this.size(i.YES)] / this.getItemSize(i.YES)) + this.addLine));
                if (t) var s = 0,
                    r = 0,
                    c = !0,
                    a = setInterval(function () {
                        for (c = !0, r = (new Date).getTime(); s < n; s++)
                            if (o.createItem(s), (new Date).getTime() - r > 1e3 / 60 * .8) {
                                c = !1;
                                break
                            } c && (clearInterval(a), o.loadSeccess(n), e && e())
                    }, 1e3 / 60);
                else {
                    for (var h = 0; h < n; h++) this.createItem(h);
                    this.loadSeccess(n), e && e()
                }
            }, t.prototype.loadSeccess = function (t) {
                if (cc.isValid(this.viewNode)) {
                    if (this.firstLine = 1, this.viewType == n.PAGEVIEW && (this.viewNode.getComponent(cc.PageView)._curPageIdx = this.items[0].index), this.viewNode.getComponent(this.viewComponent()).enabled = !0, this.items.length > t)
                        if (this.keepItemFlag) this.keepItemFlag++, !this.keepItemFlag && console.warn(" ===> \u5217\u8868\u9891\u7e41\u53cd\u590d\u521b\u5efa\u5220\u9664\u5b50\u9879\uff0c\u5f00\u59cb\u91c7\u7528\u8282\u70b9\u9690\u85cf\u7b56\u7565"), this.items.splice(t, this.items.length - t).forEach(function (t) {
                            t.node.parent = null
                        });
                        else
                            for (var e = t; e < this.items.length; ++e) this.items[e].node.active = !1;
                    console.log(" ===> \u5b9e\u9645\u5168\u90e8\u5b50\u9879\u6570\u91cf\uff1a ", this.datas.length, " \u5b9e\u9645\u52a0\u8f7d\u5b50\u9879\u6570\u91cf\uff1a ", this.items.length, " \u5b9e\u9645\u663e\u793a\u5b50\u9879\u6570\u91cf\uff1a ", t)
                }
            }, t.prototype.addScrollMonitor = function () {
                this.viewType == n.SCROLLVIEW ? this.viewNode.on("scrolling", this.scrolling, this) : this.viewNode.on("scroll-ended", this.scrolling, this)
            }, t.prototype.scrolling = function () {
                var t = this.layout.node[this.pos(i.YES)],
                    e = Math.floor(t / this.getItemSize(i.YES) + .5) * this.unit(),
                    o = Math.ceil((this.datas.length - this.items.length) / this.sameDirCount) + 1;
                e < 1 && this.firstLine > 1 && (e = 1), e > o && this.firstLine < o && (e = o), this.isScrolling || e === this.firstLine || e < 1 || e > o ? this.viewType == n.PAGEVIEW && (this.viewNode.getComponent(cc.PageView)._curPageIdx = e) : (this.isScrolling = !0, this.moveLines(e - this.firstLine))
            }, t.prototype.createItem = function (t) {
                var e = this.items[t] || {
                    node: cc.instantiate(this.itemMode),
                    index: t
                };
                if (!e || !e.node) return console.error("ScrollViewExtend createItem error:", e);
                e.node.parent || (this.viewType == n.PAGEVIEW ? this.viewNode.getComponent(cc.PageView).addPage(e.node) : e.node.parent = this.layout.node), e.index = t, this.items[t] = e, this.setItem(e.node, e.index)
            }, t.prototype.setItem = function (t, e) {
                cc.isValid(this.viewNode) && (t.position = this.setPosition(e), t.active = !!this.datas[e], t.active && this.setItemFunc(t, this.datas[e], e))
            }, t.prototype.moveLines = function (t) {
                if (0 !== t) {
                    for (var e = t / Math.abs(t), o = this.items.length, i = 0; i < this.sameDirCount; i++) {
                        var s = null;
                        if (1 === e) s = this.items.shift(), this.items.push(s);
                        else {
                            if (-1 !== e) return;
                            s = this.items.pop(), this.items.unshift(s)
                        }
                        s && (s.index += e * o, this.setItem(s.node, s.index), this.viewType != n.PAGEVIEW || this.viewNode.getComponent(cc.PageView).getPages()[s.index] || this.viewNode.getComponent(cc.PageView).insertPage(new cc.Node, s.index))
                    }
                    this.viewType == n.PAGEVIEW && (this.viewNode.getComponent(cc.PageView)._curPageIdx = e + this.firstLine), this.firstLine += e, this.moveLines(t - e)
                } else this.isScrolling = !1
            }, t.prototype.getItemSize = function (t) {
                return this.itemSize ? this.itemSize[this.size(t)] : (console.error("this.itemSize is:", this.itemSize), 100)
            }, t.prototype.pos = function (t) {
                return (this.isVertical ? ["y", "x"] : ["x", "y"])[Number(t)]
            }, t.prototype.size = function (t) {
                return (this.isVertical ? ["height", "width"] : ["width", "height"])[Number(t)]
            }, t.prototype.unit = function () {
                return [1, -1][Number(this.beginDir) % 2]
            }, t.prototype.viewComponent = function () {
                return this.viewType == n.SCROLLVIEW ? cc.ScrollView : cc.PageView
            }, t.prototype.setPosition = function (t) {
                if (!this.layout.node) return cc.Vec3.ZERO;
                var e = 0;
                this.sameDirCount * this.getItemSize(i.NO) < this.layout.node[this.size(i.NO)] && (e = (this.layout.node[this.size(i.NO)] - this.sameDirCount * this.getItemSize(i.NO)) / (this.sameDirCount + 1));
                var o = cc.v3(0, 0, 0);
                return o[this.pos(i.YES)] = (this.getItemSize(i.YES) * (-Math.floor(t / this.sameDirCount) - .5) + this.offset[this.pos(i.YES)]) * this.unit(), o[this.pos(i.NO)] = this.getItemSize(i.NO) * (t % this.sameDirCount + .5) - this.layout.node[this.size(i.NO)] / 2 + e * (t % this.sameDirCount + 1) + this.offset[this.pos(i.NO)], !this.isVertical && (o[this.pos(i.NO)] *= -1), o.x -= 100, o
            }, t
        }();
        o.ScrollViewExtend = r, cc._RF.pop()
    }, {}],
    UIMgr: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f017cRXndJN4ILKmsmEyJmg", "UIMgr"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.UIMgr = void 0;
        var i = function () {
            function t() {}
            return t.setShowAnimation = function (t, e, o) {
                t && (t.parent.scale = 1, t.parent.opacity = 255, e && (e.active = !0, e.scale = 1), t.scale = .7, cc.tween(t).to(.2, {
                    scale: 1
                }, {
                    easing: "backOut"
                }).call(function () {
                    o && o()
                }).start())
            }, t.setHideAnimation = function (t, e, o) {
                t && cc.tween(t).to(.1, {
                    scale: .7
                }).call(function () {
                    e && (e.active = !1), o && o()
                }).start()
            }, t
        }();
        o.UIMgr = i, cc._RF.pop()
    }, {}],
    Utils: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "c052a9/huxEH7dR6h8NbX5g", "Utils");
        var i, n = this && this.__extends || (i = function (t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            s = this && this.__decorate || function (t, e, o, i) {
                var n, s = arguments.length,
                    r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i);
                else
                    for (var c = t.length - 1; c >= 0; c--)(n = t[c]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
                return s > 3 && r && Object.defineProperty(e, o, r), r
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Utils = void 0;
        var r = cc._decorator,
            c = r.ccclass,
            a = (r.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.getClickEvents = function (t, e, o, i) {
                    var n = new cc.Component.EventHandler;
                    return n.target = t, n.component = e.split("<")[1].split(">")[0], n.handler = o, i && (n.customEventData = i), n
                }, e.getPosInNode = function (t, e) {
                    if (!t || !e || !e.parent) return e.position;
                    var o = e.parent.convertToWorldSpaceAR(e.position);
                    return t.convertToNodeSpaceAR(o)
                }, e.formatTimeString = function (t) {
                    t = Math.floor(t + .95);
                    var e = Math.floor(t / 3600),
                        o = Math.floor(t % 3600 / 60),
                        i = Math.floor(t % 60),
                        n = "";
                    return n += e > 9 ? e.toString() : "0" + e.toString(), n += ":", n += o > 9 ? o.toString() : "0" + o.toString(), (n += ":") + (i > 9 ? i.toString() : "0" + i.toString())
                }, s([c], e)
            }(cc.Component));
        o.Utils = a, cc._RF.pop()
    }, {}]
}, {}, ["AudioMgr", "GameManager", "Power", "PowerSystem", "ScrollViewExtend", "UIMgr", "Utils"]);