"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};exports.table=table,exports.where=where,exports.field=field,exports.alias=alias,exports.data=data,exports.order=order,exports.limit=limit,exports.page=page,exports.group=group,exports.having=having,exports.union=union,exports.distinct=distinct,exports.lock=lock,exports.comment=comment,exports.count=count,exports.max=max,exports.min=min,exports.avg=avg,exports.sum=sum;var _uitl=require("./uitl.js");function table(t){return t&&-1!=t.indexOf("SELECT")&&(t="("+t+")"),t&&(this.sqlObj.table=t),this}function where(t){var i="";return(i="string"==typeof t?t:(0,_uitl.getOptToString)(t))&&(this.sqlObj.where=i),this}function field(t){return"object"===(void 0===t?"undefined":_typeof(t))&&(t=t.join(",")),this.sqlObj.field=t,this}function alias(t){return this.sqlObj.alias=t,this}function data(t){var i={};if("string"==typeof t){t.split("&").forEach(function(t){var n=t.split("=");i[n[0]]=n[1]})}else i=t;return this.sqlObj.data=i,this}function order(t){return"object"===(void 0===t?"undefined":_typeof(t))&&(t=t.join(",")),this.sqlObj.order="ORDER BY "+t,this}function limit(){return this.sqlObj.limit="LIMIT "+Array.prototype.slice.apply(arguments),this}function page(t){var i=[];if(2==(i=1===arguments.length?t.split(","):Array.prototype.slice.apply(arguments)).length){var n=parseInt(i[0]-1)*parseInt(i[1]),s=n+parseInt(i[1])-1;this.sqlObj.limit="LIMIT "+n+","+s}return this}function group(t){return this.sqlObj.group="GROUP BY "+t,this}function having(t){return this.sqlObj.having="HAVING "+t,this}function union(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"==typeof t?this.sqlObj.union?this.sqlObj.union=this.sqlObj.union+" ("+t+") "+(i?"UNION ALL":"UNION"):this.sqlObj.union="("+t+") "+(i?"UNION ALL":"UNION")+" ":"object"===(void 0===t?"undefined":_typeof(t))&&(this.sqlObj.union?this.sqlObj.union=this.sqlObj.union+" ("+t.join(i?") UNION ALL (":") UNION (")+")  "+(i?"UNION ALL":"UNION")+" ":this.sqlObj.union="("+t.join(i?") UNION ALL (":") UNION (")+") "+(i?"UNION ALL":"UNION")+" "),this}function distinct(t){return t&&(this.sqlObj.distinct="DISTINCT"),this}function lock(t){return t&&(this.sqlObj.lock="FOR UPDATE"),this}function comment(t){return t&&(this.sqlObj.comment="/* "+t+" */"),this}function count(t){var i=t||1;return this.sqlObj.count="COUNT("+i+")",this}function max(t){return t&&(this.sqlObj.max="MAX("+t+")"),this}function min(t){return t&&(this.sqlObj.min="MIN("+t+")"),this}function avg(t){return t&&(this.sqlObj.avg="AVG("+t+")"),this}function sum(t){return t&&(this.sqlObj.sum="SUM("+t+")"),this}