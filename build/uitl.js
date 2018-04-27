"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=require("babel-runtime/helpers/typeof"),_typeof3=_interopRequireDefault(_typeof2),_keys=require("babel-runtime/core-js/object/keys"),_keys2=_interopRequireDefault(_keys);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getOptToString(o){var n="",e=Object.prototype.toString.call(o);if("[object Object]"===e){var c=o._type&&o._type.toUpperCase()||"AND",r=o._type&&o._type.trim()?1:0,p=(0,_keys2.default)(o);p.forEach(function(e,t){"_type"!==e&&(n="object"===(0,_typeof3.default)(o[e])?t===p.length-1-r?n+""+checkOptObjType(e,o[e]):n+(checkOptObjType(e,o[e])+" ")+c+" ":t===p.length-1-r?n+(e+"=")+checkOptType(o[e]):n+(e+"=")+checkOptType(o[e])+" "+c+" ")})}else"[object Array]"===e&&o.forEach(function(c,e){var r="",t=0,p=c._type&&c._type.toUpperCase()||"AND",a=c._nexttype||"AND";t=c._type&&c._type.trim()?t+1:t,t=c._nexttype&&c._nexttype.trim()?t+1:t,(0,_keys2.default)(c).forEach(function(e,t){"_type"!==e&&"_nexttype"!==e&&(r=r?"object"===(0,_typeof3.default)(c[e])?r+(p+" ")+checkOptObjType(e,c[e]):r+(p+" ")+e+"="+checkOptType(c[e])+" ":"object"===(0,_typeof3.default)(c[e])?""+checkOptObjType(e,c[e]):e+"="+checkOptType(c[e])+" ")}),r=e===o.length-1?"("+r+")":"("+r+") "+a.toUpperCase(),n=n+" "+r});return n}function checkOptType(e){var t=void 0;switch(Object.prototype.toString.call(e)){case"[object String]":t="`"+e+"`";break;case"[object Boolean]":case"[object Number]":t=e;break;default:t=e}return t}function checkOptObjType(r,p){var a="";if("[object Object]"===Object.prototype.toString.call(p)){var o=(0,_keys2.default)(p),n=p._type&&p._type.trim()?1:0;o.forEach(function(e,t){if("_type"!==e){var c=p._type||"AND";a+=expressionQuery(r,e,p[e],c.toUpperCase(),t===o.length-1-n)}})}else a=r+"="+p;return"("+a+") "}function expressionQuery(e,t,c,r,p){var a="";switch(t.toUpperCase()){case"EQ":a="("+e+"="+checkOptType(c)+")";break;case"NEQ":a="("+e+"<>"+checkOptType(c)+")";break;case"GT":a="("+e+">"+checkOptType(c)+")";break;case"EGT":a="("+e+">="+checkOptType(c)+")";break;case"LT":a="("+e+"<"+checkOptType(c)+")";break;case"ELT":a="("+e+"<="+checkOptType(c)+")";break;case"LIKE":a="("+e+" LIKE "+checkOptType(c)+")";break;case"NOTLIKE":a="("+e+" NOT LIKE "+checkOptType(c)+")";break;case"BETWEEN":a="("+e+" BETWEEN "+c.replace(","," AND ")+")";break;case"NOTBETWEEN":a="("+e+" NOT BETWEEN "+c.replace(","," AND ")+")";break;case"IN":a="("+e+" IN ("+c+"))";break;case"NOTIN":a="("+e+" NOT IN ("+c+"))";break;default:a="("+e+"="+checkOptType(c)+")"}return p?a+" ":a+" "+r+" "}function sortSelectSql(e){var t=e||{};if(t.count||t.max||t.min||t.avg||t.sum){var c=(t.count?","+t.count:"")+(t.max?","+t.max:"")+(t.min?","+t.min:"")+(t.avg?","+t.avg:"")+(t.sum?","+t.sum:"");t.count=t.max=t.min=t.avg=t.sum="",t.field?t.field=t.field+c:t.field=c.substring(1)}t.field||(t.field="*"),t.table&&(t.table="FROM "+t.table),t.where&&(t.where="WHERE "+t.where);var r=(0,_keys2.default)(t),p=[],a=["union","distinct","field","count","max","min","avg","sum","table","alias","where","group","having","order","limit","page","comment"];return r.forEach(function(c,e){a.forEach(function(e,t){c===e&&(p[t]=c)})}),{sortkeys:p,result:t}}exports.getOptToString=getOptToString,exports.checkOptType=checkOptType,exports.checkOptObjType=checkOptObjType,exports.expressionQuery=expressionQuery,exports.sortSelectSql=sortSelectSql;