// instead of including the axios from the apiGateway sdk
// just 'npm install --save axios' and require it
const axios = require("axios");

// patch for document in sigV4Client.js:line 182
// sigV4Client.js uses one instance of document.createElement('a')
// to use as a parser to extract the hostname of a URL.
// this object substitutes for the missing 'document' object.
// it needs to create an object that has a createElement method
// that returns an object simulating the browser 'document' object
// wth only the hostname and href fields exposed.
// this object is added to the 'exports' in suffix.js
const document = {
  hostname: "",
  createElement: function() {
    return {
      href: "",
      hostname: function() {
        // your user program needs to set document.hostname to the AWS endpoint.
        // you could hardcode the hostname here but this way you don't have
        // to execute the 'include.sh' every time you modify this file.
        return hostname;
      }
    };
  }
};

;
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,s){var f={},g=f.lib={},q=function(){},m=g.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=g.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new r.init(c,a)}}),l=f.enc={},k=l.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new r.init(d,c/2)}},n=l.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new r.init(d,c)}},j=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
u=g.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new r.init(g,b)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=u.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){u.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new t.HMAC.init(a,
d)).finalize(c)}}});var t=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,g=f.WordArray,q=f.Hasher,f=s.algo,m=[],r=[],l=function(a){return 4294967296*(a-(a|0))|0},k=2,n=0;64>n;){var j;a:{j=k;for(var u=h.sqrt(j),t=2;t<=u;t++)if(!(j%t)){j=!1;break a}j=!0}j&&(8>n&&(m[n]=l(h.pow(k,0.5))),r[n]=l(h.pow(k,1/3)),n++);k++}var a=[],f=f.SHA256=q.extend({_doReset:function(){this._hash=new g.init(m.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],j=b[3],h=b[4],m=b[5],n=b[6],q=b[7],p=0;64>p;p++){if(16>p)a[p]=
c[d+p]|0;else{var k=a[p-15],l=a[p-2];a[p]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+a[p-7]+((l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10)+a[p-16]}k=q+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&n)+r[p]+a[p];l=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);q=n;n=m;m=h;h=j+k|0;j=g;g=f;f=e;e=k+l|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+j|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+n|0;b[7]=b[7]+q|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=q._createHelper(f);s.HmacSHA256=q._createHmacHelper(f)})(Math);
(function(){var h=CryptoJS,s=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=s.parse(g));var h=f.blockSize,m=4*h;g.sigBytes>m&&(g=f.finalize(g));g.clamp();for(var r=this._oKey=g.clone(),l=this._iKey=g.clone(),k=r.words,n=l.words,j=0;j<h;j++)k[j]^=1549556828,n[j]^=909522486;r.sigBytes=l.sigBytes=m;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();

;
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,s){var f={},t=f.lib={},g=function(){},j=t.Base={extend:function(a){g.prototype=this;var c=new g;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=t.WordArray=j.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||u).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new q.init(c,a)}}),v=f.enc={},u=v.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new q.init(d,c/2)}},k=v.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new q.init(d,c)}},l=v.Utf8={stringify:function(a){try{return decodeURIComponent(escape(k.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return k.parse(unescape(encodeURIComponent(a)))}},
x=t.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=l.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var m=0;m<a;m+=e)this._doProcessBlock(d,m);m=d.splice(0,a);c.sigBytes-=b}return new q.init(m,b)},clone:function(){var a=j.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});t.Hasher=x.extend({cfg:j.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new w.HMAC.init(a,
d)).finalize(c)}}});var w=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,t=f.WordArray,g=f.Hasher,f=s.algo,j=[],q=[],v=function(a){return 4294967296*(a-(a|0))|0},u=2,k=0;64>k;){var l;a:{l=u;for(var x=h.sqrt(l),w=2;w<=x;w++)if(!(l%w)){l=!1;break a}l=!0}l&&(8>k&&(j[k]=v(h.pow(u,0.5))),q[k]=v(h.pow(u,1/3)),k++);u++}var a=[],f=f.SHA256=g.extend({_doReset:function(){this._hash=new t.init(j.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],m=b[2],h=b[3],p=b[4],j=b[5],k=b[6],l=b[7],n=0;64>n;n++){if(16>n)a[n]=
c[d+n]|0;else{var r=a[n-15],g=a[n-2];a[n]=((r<<25|r>>>7)^(r<<14|r>>>18)^r>>>3)+a[n-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+a[n-16]}r=l+((p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25))+(p&j^~p&k)+q[n]+a[n];g=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&m^f&m);l=k;k=j;j=p;p=h+r|0;h=m;m=f;f=e;e=r+g|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+m|0;b[3]=b[3]+h|0;b[4]=b[4]+p|0;b[5]=b[5]+j|0;b[6]=b[6]+k|0;b[7]=b[7]+l|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=g._createHelper(f);s.HmacSHA256=g._createHmacHelper(f)})(Math);

;
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    /**
     * HMAC algorithm.
     */
    var HMAC = C_algo.HMAC = Base.extend({
        /**
         * Initializes a newly created HMAC.
         *
         * @param {Hasher} hasher The hash algorithm to use.
         * @param {WordArray|string} key The secret key.
         *
         * @example
         *
         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
         */
        init: function (hasher, key) {
            // Init hasher
            hasher = this._hasher = new hasher.init();

            // Convert string to WordArray, else assume WordArray already
            if (typeof key == 'string') {
                key = Utf8.parse(key);
            }

            // Shortcuts
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;

            // Allow arbitrary length keys
            if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
            }

            // Clamp excess bits
            key.clamp();

            // Clone key for inner and outer pads
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();

            // Shortcuts
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;

            // XOR keys with pad constants
            for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

            // Set initial values
            this.reset();
        },

        /**
         * Resets this HMAC to its initial state.
         *
         * @example
         *
         *     hmacHasher.reset();
         */
        reset: function () {
            // Shortcut
            var hasher = this._hasher;

            // Reset
            hasher.reset();
            hasher.update(this._iKey);
        },

        /**
         * Updates this HMAC with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {HMAC} This HMAC instance.
         *
         * @example
         *
         *     hmacHasher.update('message');
         *     hmacHasher.update(wordArray);
         */
        update: function (messageUpdate) {
            this._hasher.update(messageUpdate);

            // Chainable
            return this;
        },

        /**
         * Finalizes the HMAC computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The HMAC.
         *
         * @example
         *
         *     var hmac = hmacHasher.finalize();
         *     var hmac = hmacHasher.finalize('message');
         *     var hmac = hmacHasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Shortcut
            var hasher = this._hasher;

            // Compute HMAC
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

            return hmac;
        }
    });
}());

;
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;

            // Clamp excess bits
            wordArray.clamp();

            // Convert
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }

            // Add padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }

            return base64Chars.join('');
        },

        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function (base64Str) {
            // Shortcuts
            var base64StrLength = base64Str.length;
            var map = this._map;

            // Ignore padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex != -1) {
                    base64StrLength = paddingIndex;
                }
            }

            // Convert
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }

            return WordArray.create(words, nBytes);
        },

        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
}());

;
/*
 UriTemplates Template Processor - Version: @VERSION - Dated: @DATE
 (c) marc.portier@gmail.com - 2011-2012
 Licensed under APLv2 (http://opensource.org/licenses/Apache-2.0)
 */

;
var uritemplate = (function() {

// Below are the functions we originally used from jQuery.
// The implementations below are often more naive then what is inside jquery, but they suffice for our needs.

    function isFunction(fn) {
        return typeof fn == 'function';
    }

    function isEmptyObject (obj) {
        for(var name in obj){
            return false;
        }
        return true;
    }

    function extend(base, newprops) {
        for (var name in newprops) {
            base[name] = newprops[name];
        }
        return base;
    }

    /**
     * Create a runtime cache around retrieved values from the context.
     * This allows for dynamic (function) results to be kept the same for multiple
     * occuring expansions within one template.
     * Note: Uses key-value tupples to be able to cache null values as well.
     */
        //TODO move this into prep-processing
    function CachingContext(context) {
        this.raw = context;
        this.cache = {};
    }
    CachingContext.prototype.get = function(key) {
        var val = this.lookupRaw(key);
        var result = val;

        if (isFunction(val)) { // check function-result-cache
            var tupple = this.cache[key];
            if (tupple !== null && tupple !== undefined) {
                result = tupple.val;
            } else {
                result = val(this.raw);
                this.cache[key] = {key: key, val: result};
                // NOTE: by storing tupples we make sure a null return is validly consistent too in expansions
            }
        }
        return result;
    };

    CachingContext.prototype.lookupRaw = function(key) {
        return CachingContext.lookup(this, this.raw, key);
    };

    CachingContext.lookup = function(me, context, key) {
        var result = context[key];
        if (result !== undefined) {
            return result;
        } else {
            var keyparts = key.split('.');
            var i = 0, keysplits = keyparts.length - 1;
            for (i = 0; i<keysplits; i++) {
                var leadKey = keyparts.slice(0, keysplits - i).join('.');
                var trailKey = keyparts.slice(-i-1).join('.');
                var leadContext = context[leadKey];
                if (leadContext !== undefined) {
                    return CachingContext.lookup(me, leadContext, trailKey);
                }
            }
            return undefined;
        }
    };


    function UriTemplate(set) {
        this.set = set;
    }

    UriTemplate.prototype.expand = function(context) {
        var cache = new CachingContext(context);
        var res = "";
        var i = 0, cnt = this.set.length;
        for (i = 0; i<cnt; i++ ) {
            res += this.set[i].expand(cache);
        }
        return res;
    };

//TODO: change since draft-0.6 about characters in literals
    /* extract:
     The characters outside of expressions in a URI Template string are intended to be copied literally to the URI-reference if the character is allowed in a URI (reserved / unreserved / pct-encoded) or, if not allowed, copied to the URI-reference in its UTF-8 pct-encoded form.
     */
    function Literal(txt ) {
        this.txt = txt;
    }

    Literal.prototype.expand = function() {
        return this.txt;
    };



    var RESERVEDCHARS_RE = new RegExp("[:/?#\\[\\]@!$&()*+,;=']","g");
    function encodeNormal(val) {
        return encodeURIComponent(val).replace(RESERVEDCHARS_RE, function(s) {return escape(s);} );
    }

//var SELECTEDCHARS_RE = new RegExp("[]","g");
    function encodeReserved(val) {
        //return encodeURI(val).replace(SELECTEDCHARS_RE, function(s) {return escape(s)} );
        return encodeURI(val); // no need for additional replace if selected-chars is empty
    }


    function addUnNamed(name, key, val) {
        return key + (key.length > 0 ? "=" : "") + val;
    }

    function addNamed(name, key, val, noName) {
        noName = noName || false;
        if (noName) { name = ""; }

        if (!key || key.length === 0)  {
            key = name;
        }
        return key + (key.length > 0 ? "=" : "") + val;
    }

    function addLabeled(name, key, val, noName) {
        noName = noName || false;
        if (noName) { name = ""; }

        if (!key || key.length === 0)  {
            key = name;
        }
        return key + (key.length > 0 && val ? "=" : "") + val;
    }


    var simpleConf = {
        prefix : "",     joiner : ",",     encode : encodeNormal,    builder : addUnNamed
    };
    var reservedConf = {
        prefix : "",     joiner : ",",     encode : encodeReserved,  builder : addUnNamed
    };
    var fragmentConf = {
        prefix : "#",    joiner : ",",     encode : encodeReserved,  builder : addUnNamed
    };
    var pathParamConf = {
        prefix : ";",    joiner : ";",     encode : encodeNormal,    builder : addLabeled
    };
    var formParamConf = {
        prefix : "?",    joiner : "&",     encode : encodeNormal,    builder : addNamed
    };
    var formContinueConf = {
        prefix : "&",    joiner : "&",     encode : encodeNormal,    builder : addNamed
    };
    var pathHierarchyConf = {
        prefix : "/",    joiner : "/",     encode : encodeNormal,    builder : addUnNamed
    };
    var labelConf = {
        prefix : ".",    joiner : ".",     encode : encodeNormal,    builder : addUnNamed
    };


    function Expression(conf, vars ) {
        extend(this, conf);
        this.vars = vars;
    }

    Expression.build = function(ops, vars) {
        var conf;
        switch(ops) {
            case ''  : conf = simpleConf; break;
            case '+' : conf = reservedConf; break;
            case '#' : conf = fragmentConf; break;
            case ';' : conf = pathParamConf; break;
            case '?' : conf = formParamConf; break;
            case '&' : conf = formContinueConf; break;
            case '/' : conf = pathHierarchyConf; break;
            case '.' : conf = labelConf; break;
            default  : throw "Unexpected operator: '"+ops+"'";
        }
        return new Expression(conf, vars);
    };

    Expression.prototype.expand = function(context) {
        var joiner = this.prefix;
        var nextjoiner = this.joiner;
        var buildSegment = this.builder;
        var res = "";
        var i = 0, cnt = this.vars.length;

        for (i = 0 ; i< cnt; i++) {
            var varspec = this.vars[i];
            varspec.addValues(context, this.encode, function(key, val, noName) {
                var segm = buildSegment(varspec.name, key, val, noName);
                if (segm !== null && segm !== undefined) {
                    res += joiner + segm;
                    joiner = nextjoiner;
                }
            });
        }
        return res;
    };



    var UNBOUND = {};

    /**
     * Helper class to help grow a string of (possibly encoded) parts until limit is reached
     */
    function Buffer(limit) {
        this.str = "";
        if (limit === UNBOUND) {
            this.appender = Buffer.UnboundAppend;
        } else {
            this.len = 0;
            this.limit = limit;
            this.appender = Buffer.BoundAppend;
        }
    }

    Buffer.prototype.append = function(part, encoder) {
        return this.appender(this, part, encoder);
    };

    Buffer.UnboundAppend = function(me, part, encoder) {
        part = encoder ? encoder(part) : part;
        me.str += part;
        return me;
    };

    Buffer.BoundAppend = function(me, part, encoder) {
        part = part.substring(0, me.limit - me.len);
        me.len += part.length;

        part = encoder ? encoder(part) : part;
        me.str += part;
        return me;
    };


    function arrayToString(arr, encoder, maxLength) {
        var buffer = new Buffer(maxLength);
        var joiner = "";

        var i = 0, cnt = arr.length;
        for (i=0; i<cnt; i++) {
            if (arr[i] !== null && arr[i] !== undefined) {
                buffer.append(joiner).append(arr[i], encoder);
                joiner = ",";
            }
        }
        return buffer.str;
    }

    function objectToString(obj, encoder, maxLength) {
        var buffer = new Buffer(maxLength);
        var joiner = "";
        var k;

        for (k in obj) {
            if (obj.hasOwnProperty(k) ) {
                if (obj[k] !== null && obj[k] !== undefined) {
                    buffer.append(joiner + k + ',').append(obj[k], encoder);
                    joiner = ",";
                }
            }
        }
        return buffer.str;
    }


    function simpleValueHandler(me, val, valprops, encoder, adder) {
        var result;

        if (valprops.isArr) {
            result = arrayToString(val, encoder, me.maxLength);
        } else if (valprops.isObj) {
            result = objectToString(val, encoder, me.maxLength);
        } else {
            var buffer = new Buffer(me.maxLength);
            result = buffer.append(val, encoder).str;
        }

        adder("", result);
    }

    function explodeValueHandler(me, val, valprops, encoder, adder) {
        if (valprops.isArr) {
            var i = 0, cnt = val.length;
            for (i = 0; i<cnt; i++) {
                adder("", encoder(val[i]) );
            }
        } else if (valprops.isObj) {
            var k;
            for (k in val) {
                if (val.hasOwnProperty(k)) {
                    adder(k, encoder(val[k]) );
                }
            }
        } else { // explode-requested, but single value
            adder("", encoder(val));
        }
    }

    function valueProperties(val) {
        var isArr = false;
        var isObj = false;
        var isUndef = true;  //note: "" is empty but not undef

        if (val !== null && val !== undefined) {
            isArr = (val.constructor === Array);
            isObj = (val.constructor === Object);
            isUndef = (isArr && val.length === 0) || (isObj && isEmptyObject(val));
        }

        return {isArr: isArr, isObj: isObj, isUndef: isUndef};
    }


    function VarSpec (name, vhfn, nums) {
        this.name = unescape(name);
        this.valueHandler = vhfn;
        this.maxLength = nums;
    }


    VarSpec.build = function(name, expl, part, nums) {
        var valueHandler, valueModifier;

        if (!!expl) { //interprete as boolean
            valueHandler = explodeValueHandler;
        } else {
            valueHandler = simpleValueHandler;
        }

        if (!part) {
            nums = UNBOUND;
        }

        return new VarSpec(name, valueHandler, nums);
    };


    VarSpec.prototype.addValues = function(context, encoder, adder) {
        var val = context.get(this.name);
        var valprops = valueProperties(val);
        if (valprops.isUndef) { return; } // ignore empty values
        this.valueHandler(this, val, valprops, encoder, adder);
    };



//----------------------------------------------parsing logic
// How each varspec should look like
    var VARSPEC_RE=/([^*:]*)((\*)|(:)([0-9]+))?/;

    var match2varspec = function(m) {
        var name = m[1];
        var expl = m[3];
        var part = m[4];
        var nums = parseInt(m[5], 10);

        return VarSpec.build(name, expl, part, nums);
    };


// Splitting varspecs in list with:
    var LISTSEP=",";

// How each template should look like
    var TEMPL_RE=/(\{([+#.;?&\/])?(([^.*:,{}|@!=$()][^*:,{}$()]*)(\*|:([0-9]+))?(,([^.*:,{}][^*:,{}]*)(\*|:([0-9]+))?)*)\})/g;
// Note: reserved operators: |!@ are left out of the regexp in order to make those templates degrade into literals
// (as expected by the spec - see tests.html "reserved operators")


    var match2expression = function(m) {
        var expr = m[0];
        var ops = m[2] || '';
        var vars = m[3].split(LISTSEP);
        var i = 0, len = vars.length;
        for (i = 0; i<len; i++) {
            var match;
            if ( (match = vars[i].match(VARSPEC_RE)) === null) {
                throw "unexpected parse error in varspec: " + vars[i];
            }
            vars[i] = match2varspec(match);
        }

        return Expression.build(ops, vars);
    };


    var pushLiteralSubstr = function(set, src, from, to) {
        if (from < to) {
            var literal = src.substr(from, to - from);
            set.push(new Literal(literal));
        }
    };

    var parse = function(str) {
        var lastpos = 0;
        var comp = [];

        var match;
        var pattern = TEMPL_RE;
        pattern.lastIndex = 0; // just to be sure
        while ((match = pattern.exec(str)) !== null) {
            var newpos = match.index;
            pushLiteralSubstr(comp, str, lastpos, newpos);

            comp.push(match2expression(match));
            lastpos = pattern.lastIndex;
        }
        pushLiteralSubstr(comp, str, lastpos, str.length);

        return new UriTemplate(comp);
    };


//-------------------------------------------comments and ideas

//TODO: consider building cache of previously parsed uris or even parsed expressions?

    return parse;

}());

;
/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
var apiGateway = apiGateway || {};
apiGateway.core = apiGateway.core || {};

apiGateway.core.sigV4ClientFactory = {};
apiGateway.core.sigV4ClientFactory.newClient = function (config) {
    var AWS_SHA_256 = 'AWS4-HMAC-SHA256';
    var AWS4_REQUEST = 'aws4_request';
    var AWS4 = 'AWS4';
    var X_AMZ_DATE = 'x-amz-date';
    var X_AMZ_SECURITY_TOKEN = 'x-amz-security-token';
    var HOST = 'host';
    var AUTHORIZATION = 'Authorization';

    function hash(value) {
        return CryptoJS.SHA256(value);
    }

    function hexEncode(value) {
        return value.toString(CryptoJS.enc.Hex);
    }

    function hmac(secret, value) {
        return CryptoJS.HmacSHA256(value, secret, {asBytes: true});
    }

    function buildCanonicalRequest(method, path, queryParams, headers, payload) {
        return method + '\n' +
            buildCanonicalUri(path) + '\n' +
            buildCanonicalQueryString(queryParams) + '\n' +
            buildCanonicalHeaders(headers) + '\n' +
            buildCanonicalSignedHeaders(headers) + '\n' +
            hexEncode(hash(payload));
    }

    function hashCanonicalRequest(request) {
        return hexEncode(hash(request));
    }

    function buildCanonicalUri(uri) {
        return encodeURI(uri);
    }

    function buildCanonicalQueryString(queryParams) {
        if (Object.keys(queryParams).length < 1) {
            return '';
        }

        var sortedQueryParams = [];
        for (var property in queryParams) {
            if (queryParams.hasOwnProperty(property)) {
                sortedQueryParams.push(property);
            }
        }
        sortedQueryParams.sort();

        var canonicalQueryString = '';
        for (var i = 0; i < sortedQueryParams.length; i++) {
            canonicalQueryString += sortedQueryParams[i] + '=' + fixedEncodeURIComponent(queryParams[sortedQueryParams[i]]) + '&';
        }
        return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
    }

    function fixedEncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }

    function buildCanonicalHeaders(headers) {
        var canonicalHeaders = '';
        var sortedKeys = [];
        for (var property in headers) {
            if (headers.hasOwnProperty(property)) {
                sortedKeys.push(property);
            }
        }
        sortedKeys.sort();

        for (var i = 0; i < sortedKeys.length; i++) {
            canonicalHeaders += sortedKeys[i].toLowerCase() + ':' + headers[sortedKeys[i]] + '\n';
        }
        return canonicalHeaders;
    }

    function buildCanonicalSignedHeaders(headers) {
        var sortedKeys = [];
        for (var property in headers) {
            if (headers.hasOwnProperty(property)) {
                sortedKeys.push(property.toLowerCase());
            }
        }
        sortedKeys.sort();

        return sortedKeys.join(';');
    }

    function buildStringToSign(datetime, credentialScope, hashedCanonicalRequest) {
        return AWS_SHA_256 + '\n' +
            datetime + '\n' +
            credentialScope + '\n' +
            hashedCanonicalRequest;
    }

    function buildCredentialScope(datetime, region, service) {
        return datetime.substr(0, 8) + '/' + region + '/' + service + '/' + AWS4_REQUEST
    }

    function calculateSigningKey(secretKey, datetime, region, service) {
        return hmac(hmac(hmac(hmac(AWS4 + secretKey, datetime.substr(0, 8)), region), service), AWS4_REQUEST);
    }

    function calculateSignature(key, stringToSign) {
        return hexEncode(hmac(key, stringToSign));
    }

    function buildAuthorizationHeader(accessKey, credentialScope, headers, signature) {
        return AWS_SHA_256 + ' Credential=' + accessKey + '/' + credentialScope + ', SignedHeaders=' + buildCanonicalSignedHeaders(headers) + ', Signature=' + signature;
    }

    var awsSigV4Client = { };
    if(config.accessKey === undefined || config.secretKey === undefined) {
        return awsSigV4Client;
    }
    awsSigV4Client.accessKey = apiGateway.core.utils.assertDefined(config.accessKey, 'accessKey');
    awsSigV4Client.secretKey = apiGateway.core.utils.assertDefined(config.secretKey, 'secretKey');
    awsSigV4Client.sessionToken = config.sessionToken;
    awsSigV4Client.serviceName = apiGateway.core.utils.assertDefined(config.serviceName, 'serviceName');
    awsSigV4Client.region = apiGateway.core.utils.assertDefined(config.region, 'region');
    awsSigV4Client.endpoint = apiGateway.core.utils.assertDefined(config.endpoint, 'endpoint');

    awsSigV4Client.makeRequest = function (request) {
        var verb = apiGateway.core.utils.assertDefined(request.verb, 'verb');
        var path = apiGateway.core.utils.assertDefined(request.path, 'path');
        var queryParams = apiGateway.core.utils.copy(request.queryParams);
        if (queryParams === undefined) {
            queryParams = {};
        }
        var headers = apiGateway.core.utils.copy(request.headers);
        if (headers === undefined) {
            headers = {};
        }

        //If the user has not specified an override for Content type the use default
        if(headers['Content-Type'] === undefined) {
            headers['Content-Type'] = config.defaultContentType;
        }

        //If the user has not specified an override for Accept type the use default
        if(headers['Accept'] === undefined) {
            headers['Accept'] = config.defaultAcceptType;
        }

        var body = apiGateway.core.utils.copy(request.body);
        if (body === undefined || verb === 'GET') { // override request body and set to empty when signing GET requests
            body = '';
        }  else {
            body = JSON.stringify(body);
        }

        //If there is no body remove the content-type header so it is not included in SigV4 calculation
        if(body === '' || body === undefined || body === null) {
            delete headers['Content-Type'];
        }

        var datetime = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z').replace(/[:\-]|\.\d{3}/g, '');
        headers[X_AMZ_DATE] = datetime;
        var parser = document.createElement('a');
        parser.href = awsSigV4Client.endpoint;
        headers[HOST] = parser.hostname;

        var canonicalRequest = buildCanonicalRequest(verb, path, queryParams, headers, body);
        var hashedCanonicalRequest = hashCanonicalRequest(canonicalRequest);
        var credentialScope = buildCredentialScope(datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
        var stringToSign = buildStringToSign(datetime, credentialScope, hashedCanonicalRequest);
        var signingKey = calculateSigningKey(awsSigV4Client.secretKey, datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
        var signature = calculateSignature(signingKey, stringToSign);
        headers[AUTHORIZATION] = buildAuthorizationHeader(awsSigV4Client.accessKey, credentialScope, headers, signature);
        if(awsSigV4Client.sessionToken !== undefined && awsSigV4Client.sessionToken !== '') {
            headers[X_AMZ_SECURITY_TOKEN] = awsSigV4Client.sessionToken;
        }
        delete headers[HOST];

        var url = config.endpoint + path;
        var queryString = buildCanonicalQueryString(queryParams);
        if (queryString != '') {
            url += '?' + queryString;
        }

        //Need to re-attach Content-Type if it is not specified at this point
        if(headers['Content-Type'] === undefined) {
            headers['Content-Type'] = config.defaultContentType;
        }

        var signedRequest = {
            method: verb,
            url: url,
            headers: headers,
            data: body
        };
        return axios(signedRequest);
    };

    return awsSigV4Client;
};

;
/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
var apiGateway = apiGateway || {};
apiGateway.core = apiGateway.core || {};

apiGateway.core.apiGatewayClientFactory = {};
apiGateway.core.apiGatewayClientFactory.newClient = function (simpleHttpClientConfig, sigV4ClientConfig) {
    var apiGatewayClient = { };
    //Spin up 2 httpClients, one for simple requests, one for SigV4
    var sigV4Client = apiGateway.core.sigV4ClientFactory.newClient(sigV4ClientConfig);
    var simpleHttpClient = apiGateway.core.simpleHttpClientFactory.newClient(simpleHttpClientConfig);

    apiGatewayClient.makeRequest = function (request, authType, additionalParams, apiKey) {
        //Default the request to use the simple http client
        var clientToUse = simpleHttpClient;

        //Attach the apiKey to the headers request if one was provided
        if (apiKey !== undefined && apiKey !== '' && apiKey !== null) {
            request.headers['x-api-key'] = apiKey;
        }

        if (request.body === undefined || request.body === '' || request.body === null || Object.keys(request.body).length === 0) {
            request.body = undefined;
        }

        // If the user specified any additional headers or query params that may not have been modeled
        // merge them into the appropriate request properties
        request.headers = apiGateway.core.utils.mergeInto(request.headers, additionalParams.headers);
        request.queryParams = apiGateway.core.utils.mergeInto(request.queryParams, additionalParams.queryParams);

        //If an auth type was specified inject the appropriate auth client
        if (authType === 'AWS_IAM') {
            clientToUse = sigV4Client;
        }

        //Call the selected http client to make the request, returning a promise once the request is sent
        return clientToUse.makeRequest(request);
    };
    return apiGatewayClient;
};

;
/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
var apiGateway = apiGateway || {};
apiGateway.core = apiGateway.core || {};

apiGateway.core.simpleHttpClientFactory = {};
apiGateway.core.simpleHttpClientFactory.newClient = function (config) {
    function buildCanonicalQueryString(queryParams) {
        //Build a properly encoded query string from a QueryParam object
        if (Object.keys(queryParams).length < 1) {
            return '';
        }

        var canonicalQueryString = '';
        for (var property in queryParams) {
            if (queryParams.hasOwnProperty(property)) {
                canonicalQueryString += encodeURIComponent(property) + '=' + encodeURIComponent(queryParams[property]) + '&';
            }
        }

        return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
    }

    var simpleHttpClient = { };
    simpleHttpClient.endpoint = apiGateway.core.utils.assertDefined(config.endpoint, 'endpoint');

    simpleHttpClient.makeRequest = function (request) {
        var verb = apiGateway.core.utils.assertDefined(request.verb, 'verb');
        var path = apiGateway.core.utils.assertDefined(request.path, 'path');
        var queryParams = apiGateway.core.utils.copy(request.queryParams);
        if (queryParams === undefined) {
            queryParams = {};
        }
        var headers = apiGateway.core.utils.copy(request.headers);
        if (headers === undefined) {
            headers = {};
        }

        //If the user has not specified an override for Content type the use default
        if(headers['Content-Type'] === undefined) {
            headers['Content-Type'] = config.defaultContentType;
        }

        //If the user has not specified an override for Accept type the use default
        if(headers['Accept'] === undefined) {
            headers['Accept'] = config.defaultAcceptType;
        }

        var body = apiGateway.core.utils.copy(request.body);
        if (body === undefined) {
            body = '';
        }

        var url = config.endpoint + path;
        var queryString = buildCanonicalQueryString(queryParams);
        if (queryString != '') {
            url += '?' + queryString;
        }
        var simpleHttpRequest = {
            method: verb,
            url: url,
            headers: headers,
            data: body
        };
        return axios(simpleHttpRequest);
    };
    return simpleHttpClient;
};
;
/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
var apiGateway = apiGateway || {};
apiGateway.core = apiGateway.core || {};

apiGateway.core.utils = {
    assertDefined: function (object, name) {
        if (object === undefined) {
            throw name + ' must be defined';
        } else {
            return object;
        }
    },
    assertParametersDefined: function (params, keys, ignore) {
        if (keys === undefined) {
            return;
        }
        if (keys.length > 0 && params === undefined) {
            params = {};
        }
        for (var i = 0; i < keys.length; i++) {
            if(!apiGateway.core.utils.contains(ignore, keys[i])) {
                apiGateway.core.utils.assertDefined(params[keys[i]], keys[i]);
            }
        }
    },
    parseParametersToObject: function (params, keys) {
        if (params === undefined) {
            return {};
        }
        var object = { };
        for (var i = 0; i < keys.length; i++) {
            object[keys[i]] = params[keys[i]];
        }
        return object;
    },
    contains: function(a, obj) {
        if(a === undefined) { return false;}
        var i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    },
    copy: function (obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    },
    mergeInto: function (baseObj, additionalProps) {
        if (null == baseObj || "object" != typeof baseObj) return baseObj;
        var merged = baseObj.constructor();
        for (var attr in baseObj) {
            if (baseObj.hasOwnProperty(attr)) merged[attr] = baseObj[attr];
        }
        if (null == additionalProps || "object" != typeof additionalProps) return baseObj;
        for (attr in additionalProps) {
            if (additionalProps.hasOwnProperty(attr)) merged[attr] = additionalProps[attr];
        }
        return merged;
    }
};

;
/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://0xgsbyh6y7.execute-api.us-west-2.amazonaws.com/prod';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.goGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var goGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/go').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(goGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.helloGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var helloGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/hello').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(helloGetRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};

;
// export the client factory. see the file
// 'src/apigClient.js, provided by the AWS API generator.
// it contains the methods that a client calls to access the Lambda REST endpoint
exports.apigClientFactory = apigClientFactory;

// export the substitude browser document object
// used to set the hostname for the api client module
exports.document = document;
