window.__require=function e(t,o,r){function i(a,l){if(!o[a]){if(!t[a]){var f=a.split("/");if(f=f[f.length-1],!t[f]){var s="function"==typeof __require&&__require;if(!l&&s)return s(f,!0);if(n)return n(f,!0);throw new Error("Cannot find module '"+a+"'")}a=f}var c=o[a]={exports:{}};t[a][0].call(c.exports,function(e){return i(t[a][1][e]||e)},c,c.exports,e,t,o,r)}return o[a].exports}for(var n="function"==typeof __require&&__require,a=0;a<r.length;a++)i(r[a]);return i}({LevelProgress:[function(e,t,o){"use strict";cc._RF.push(t,"3bbd6NTd3ZFmIRxLBSVscqe","LevelProgress");var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),n=this&&this.__decorate||function(e,t,o,r){var i,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(n<3?i(a):n>3?i(t,o,a):i(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0}),o.LevelProgress=void 0;var a=e("../config/GameDataCenter"),l=e("../config/GConfig"),f=cc._decorator,s=f.ccclass,c=f.property,d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bottomPre=null,t.fillPre=null,t.bottomLayer=null,t.fillLayer=null,t.flagLayer=null,t.levelIndex=null,t.levelNum=null,t.officialPre=null,t.doormanPre=null,t.index=0,t.curLevelRange=[],t.officialIndex=-1,t.doormanIndex=-1,t}return i(t,e),t.prototype.onEnable=function(){this.node.zIndex=800,cc.systemEvent.on(l.GameEvents.M_Updata_Level_Progress,this.updataProgress,this),cc.systemEvent.on(l.GameEvents.M_Reset_Level_Progress,this.resetProgress,this)},t.prototype.onDisable=function(){cc.systemEvent.off(l.GameEvents.M_Updata_Level_Progress,this.updataProgress,this),cc.systemEvent.off(l.GameEvents.M_Reset_Level_Progress,this.resetProgress,this)},t.prototype.onLoad=function(){this.initProgress()},t.prototype.initProgress=function(){for(var e=0;e<14;e++){var t=cc.instantiate(this.bottomPre);t.x=46*e-299,t.parent=this.bottomLayer}this.updataInfo()},t.prototype.updataProgress=function(){var e=cc.instantiate(this.fillPre);e.x=46*this.index-299,e.parent=this.fillLayer,this.index++,this.levelIndex.x+=46,this.levelNum.string=a.GameDataCenter.curGameLevel+1+"\u9898",this.updataDifferLevel()},t.prototype.resetProgress=function(){this.index=0,this.curLevelRange=[],this.officialIndex=-1,this.doormanIndex=-1,this.fillLayer.removeAllChildren(),this.flagLayer.removeAllChildren(),this.updataInfo()},t.prototype.updataInfo=function(){for(var e=a.GameDataCenter.curGameLevel+1;e<a.GameDataCenter.curGameLevel+15;e++)this.curLevelRange.push(e);var t=l.unlockOfficialLevel[a.GameDataCenter.levelOfficialGrade];if(this.officialIndex=this.curLevelRange.indexOf(t),-1!=this.officialIndex){var o=this.bottomLayer.children[this.officialIndex].x,r=cc.instantiate(this.officialPre);r.x=o+21,r.parent=this.flagLayer}var i=l.unlockDoormanLevel[a.GameDataCenter.levelDoormanGrade];if(this.doormanIndex=this.curLevelRange.indexOf(i),-1!=this.doormanIndex){o=this.bottomLayer.children[this.doormanIndex].x;var n=cc.instantiate(this.doormanPre);n.x=o+21,n.parent=this.flagLayer}this.levelIndex.x=-299,this.levelNum.string=a.GameDataCenter.curGameLevel+1+"\u9898",this.updataDifferLevel()},t.prototype.updataDifferLevel=function(){-1!=this.officialIndex&&-1!=this.doormanIndex?this.officialIndex<this.doormanIndex?(a.GameDataCenter.differLevelInfo.differLevel=this.officialIndex+1-this.index,a.GameDataCenter.differLevelInfo.type="\u52a0\u5b98\u8fdb\u7235"):(a.GameDataCenter.differLevelInfo.differLevel=this.doormanIndex+1-this.index,a.GameDataCenter.differLevelInfo.type="\u62db\u7eb3\u95e8\u5ba2"):-1!=this.officialIndex?(a.GameDataCenter.differLevelInfo.differLevel=this.officialIndex+1-this.index,a.GameDataCenter.differLevelInfo.type="\u52a0\u5b98\u8fdb\u7235"):-1!=this.doormanIndex&&(a.GameDataCenter.differLevelInfo.differLevel=this.doormanIndex+1-this.index,a.GameDataCenter.differLevelInfo.type="\u62db\u7eb3\u95e8\u5ba2")},n([c({type:cc.Prefab,tooltip:"\u5e95\u90e8\u9884\u5236\u4f53"})],t.prototype,"bottomPre",void 0),n([c({type:cc.Prefab,tooltip:"\u586b\u5145\u9884\u5236\u4f53"})],t.prototype,"fillPre",void 0),n([c({type:cc.Node,tooltip:"\u5e95\u90e8\u8282\u70b9\u5c42"})],t.prototype,"bottomLayer",void 0),n([c({type:cc.Node,tooltip:"\u586b\u5145\u8282\u70b9\u5c42"})],t.prototype,"fillLayer",void 0),n([c({type:cc.Node,tooltip:"\u6807\u8bc6\u8282\u70b9\u5c42"})],t.prototype,"flagLayer",void 0),n([c({type:cc.Node,tooltip:"\u5173\u5361\u7d22\u5f15"})],t.prototype,"levelIndex",void 0),n([c({type:cc.Label,tooltip:"\u5173\u5361\u6570"})],t.prototype,"levelNum",void 0),n([c({type:cc.Prefab,tooltip:"\u5b98\u4eba\u9884\u5236\u4f53"})],t.prototype,"officialPre",void 0),n([c({type:cc.Prefab,tooltip:"\u95e8\u5ba2\u9884\u5236\u4f53"})],t.prototype,"doormanPre",void 0),n([s],t)}(cc.Component);o.LevelProgress=d,cc._RF.pop()},{"../config/GConfig":void 0,"../config/GameDataCenter":void 0}]},{},["LevelProgress"]);