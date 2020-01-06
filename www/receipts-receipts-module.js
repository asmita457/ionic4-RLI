(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receipts-receipts-module"],{

/***/ "./node_modules/q/q.js":
/*!*****************************!*\
  !*** ./node_modules/q/q.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (true) {
        module.exports = definition();

    // RequireJS
    } else { var previousQ, global; }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});


/***/ }),

/***/ "./src/app/receipts/receipts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.module.ts ***!
  \*********************************************/
/*! exports provided: ReceiptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageModule", function() { return ReceiptsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {ReceiptsRouterModules} from './receipts.router.modules';
var routes = [
    {
        path: '',
        component: _receipts_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptsPage"]
    }
];
var ReceiptsPageModule = /** @class */ (function () {
    function ReceiptsPageModule() {
    }
    ReceiptsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_receipts_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptsPage"]]
        })
    ], ReceiptsPageModule);
    return ReceiptsPageModule;
}());



/***/ }),

/***/ "./src/app/receipts/receipts.page.html":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header class=\"app-page-home\" color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubuttonspace\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title align=\"center\" class=\"titleall\">Receipts</ion-title>\n  <ion-icon style=\"width: 30px;height: 30px;color: black\" slot=\"end\" name=\"help-circle-outline\"\n    (click)=\"presentAlert()\"></ion-icon>\n</ion-toolbar>\n<!--</ion-header>-->\n<ion-content align=\"center\">\n\n  <button align=\"center\" style=\"margin-top: 10px\" class=\"receipts-buttonclass\" (click)=\"newReceipt()\" type=\"submit\">ADD\n    RECEIPTS</button>\n\n  <br>\n\n  <ion-segment style=\"margin-top: 5px\" (ionChange)=\"tabChanged($event)\" scrollable>\n    <ion-segment-button value=\"Approved\" checked layout=\"icon-end\" class=\"segmentwidth\">\n      <ion-label style=\"text-transform: capitalize;font-size: 14px\">Approved</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Request\" class=\"segmentwidth\">\n      <ion-label style=\"text-transform: capitalize;font-size: 14px\">Audit Req/Declined</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"isSelected=='Approved'\" style=\"margin-top: 15px\">\n    <div *ngIf=\"isApprovedDataBlank=='Data'\" style=\"margin-top: 15px; margin-bottom: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold;margin: 10px\">Below details only for current active event\n        \"{{activeEvent}}\"</ion-label>\n    </div>\n    <div *ngIf=\"isApprovedDataBlank=='Blank'\" style=\"margin-top: 15px; padding: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold\">No Approved Receipts</ion-label>\n    </div>\n    <ion-list *ngFor=\"let item of approvedReceiptData let j = index\">\n      <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n        <ion-label style=\"font-size: 14px; font-weight: bold;\">{{item.date}}</ion-label>\n        <!-- <ion-label style=\"font-size: 13px\">Total Hrs:1.47</ion-label> -->\n      </ion-list-header>\n      <ion-item (click)=\"acceptReceipt(j,i)\" *ngFor=\"let data of item.receiptListArray; let i = index\">\n        <ion-label class=\"h4-text\">\n          {{data.category_name}}: ${{data.amount}}\n        </ion-label>\n        <ion-icon (click)=\"acceptReceipt(j,i)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n      <ion-item (click)=\"payoutClicked(j)\">\n        <ion-label class=\"payout\">\n          Payout: $({{item.payout}})\n        </ion-label>\n        <ion-icon (click)=\"payoutClicked(j)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"receiptTotal\">\n          Receipt Total: ${{item.total}}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"isSelected=='Request'\" style=\"margin-top: 15px\">\n    <div *ngIf=\"isAuditdataBlank=='Data'\" style=\"margin-top: 15px; margin-bottom: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold;margin: 10px\">Below details only for current active event\n        \"{{activeEvent}}\"</ion-label>\n    </div>\n    <div *ngIf=\"isAuditdataBlank=='Blank'\" style=\"margin-top: 15px; padding: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold\">No Audit Required or Declined Receipts</ion-label>\n    </div>\n\n    <ion-list *ngFor=\"let item of auditReceiptData let j = index\">\n      <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n        <ion-label style=\"font-size: 14px; font-weight: bold\">{{item.date}}</ion-label>\n        <!--<ion-label style=\"font-size: 13px\">Total Hrs:1.47</ion-label>-->\n      </ion-list-header>\n      <ion-item (click)=\"declineReceipt(j,i)\" *ngFor=\"let data of item.data; let i = index\">\n        <ion-label class=\"h4-text\">\n          {{data.category_name}}: ${{data.amount}}\n          <span *ngIf=\"data.rliOfficeUpdateArray.audit_status!='Audit Required'\" style=\"color: red;float:right\">Declined</span>\n        </ion-label>\n        <ion-icon (click)=\"declineReceipt(j,i)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-bg\">\n  <ion-label align=\"bottom\" style=\"font-size: 16px;font-weight: bold\">Balance:${{balanceData}}</ion-label>\n</ion-footer>"

/***/ }),

/***/ "./src/app/receipts/receipts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".receipts-buttonclass {\n  background-color: #E3A214;\n  cursor: pointer;\n  border: none;\n  width: 60%;\n  height: 35px;\n  padding: 5px; }\n\n.footer-bg {\n  height: 5%;\n  padding: 5px;\n  background-color: #9AB7BC; }\n\n.menubutton {\n  color: black !important; }\n\n.sc-ion-segment-md-h {\n  --background: transparent;\n  --background-hover: rgba(var(--ion-color-primary-rgb,56,128,255),0.1);\n  --background-activated: rgba(var(--ion-color-primary-rgb,56,128,255),0.16);\n  --background-checked: #3880ff00;\n  --color-checked: var(--ion-color-primary-contrast,#fff);\n  --color-disabled: rgba(var(--ion-color-primary-rgb,56,128,255),0.3);\n  --color-checked-disabled: rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);\n  --border-color: transparent;\n  --indicator-color: black;\n  background-color: gray;\n  height: 50px;\n  --color: #000000; }\n\n.border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.headerlist {\n  background-color: #DCDCDC;\n  color: black;\n  height: 10px !important;\n  width: 100%; }\n\n.h4-text {\n  font-size: 15px; }\n\n.payout {\n  font-size: 15px;\n  color: red; }\n\n.receiptTotal {\n  font-size: 15px;\n  text-align: end;\n  font-weight: bold; }\n\n.segmentwidth {\n  width: 50%; }\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBUXpCO0VBRUUseUJBQWE7RUFDYixxRUFBbUI7RUFDbkIsMEVBQXVCO0VBQ3ZCLCtCQUFxQjtFQUVyQix1REFBZ0I7RUFDaEIsbUVBQWlCO0VBQ2pCLHFGQUF5QjtFQUN6QiwyQkFBZTtFQUNmLHdCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUczQixzQkFBcUI7RUFDckIsZUFBZTtFQUVmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFNbkI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjZWlwdHMtYnV0dG9uY2xhc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0EyMTQ7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmZvb3Rlci1iZ3tcbiAgaGVpZ2h0OiA1JTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUFCN0JDO1xufVxuXG4ubWVudWJ1dHRvbntcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4vLy50aXRsZWFsbHtcbi8vICBtYXJnaW4tdG9wOiA3cHg7XG4vLyAgLy9mb250LXNpemU6IDE1cHg7XG4vLyAgLy9hbGlnbi1jb250ZW50OiBzdGFydDtcbi8vfVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4vLy5zYy1pb24tc2VnbWVudC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xNik7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMzg4MGZmMDA7XG4gIC8vIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMwMDAwMDApICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7XG4gIC0tY29sb3ItZGlzYWJsZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMyk7XG4gIC0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsMjU1LDI1NSwyNTUpLDAuMyk7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tY29sb3I6ICMwMDAwMDA7XG59XG5cbi5ib3JkZXJ7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAvL21hcmdpbi1yaWdodDogNXB4IWltcG9ydGFudDtcbiAgLy9tYXJnaW4tbGVmdDogNXB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlcmxpc3R7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLmg0LXRleHR7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnBheW91dHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ucmVjZWlwdFRvdGFsIHtcbiAgZm9udC1zaXplOiAxNXB4OyBcbiAgdGV4dC1hbGlnbjogZW5kOyBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vL1xuLy86aG9zdCguYWN0aXZhdGVkKSwgOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbi8vICB3aWR0aDogNTAlO1xuLy99XG4uc2VnbWVudHdpZHRoe1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/receipts/receipts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/receipts/receipts.page.ts ***!
  \*******************************************/
/*! exports provided: ReceiptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPage", function() { return ReceiptsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/Data-Services/data-sevices.service */ "./src/app/providers/Data-Services/data-sevices.service.ts");
/* harmony import */ var _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/NetworkProvider/network-provider.service */ "./src/app/providers/NetworkProvider/network-provider.service.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ReceiptsPage = /** @class */ (function () {
    function ReceiptsPage(router, navCtrl, alertController, dataServices, loadingController, networkProvider, sqlite, platform) {
        var _this = this;
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.networkProvider = networkProvider;
        this.sqlite = sqlite;
        this.platform = platform;
        this.isSelected = 'Approved';
        this.isAuditdataBlank = 'Blank';
        this.isApprovedDataBlank = 'Blank';
        this.receiptsInDB = [];
        this.i = 0;
        this.receiptsofflineInDB = [];
        this.balanceData = 0.00;
        this.approvedReceiptDataFromDB = [];
        this.nonApprovedReceiptDataFromDB = [];
        this.serverIdsString = '';
        this.receiptGeoLocation = [];
        this.geoCounter = 0;
        this.isAuditdataBlank = 'Blank';
        this.isApprovedDataBlank = 'Blank';
        this.platform.ready().then(function () {
            Object(q__WEBPACK_IMPORTED_MODULE_6__["delay"])(function (_) {
                _this.displayReceiptFromDB();
            }, 5000);
        });
    }
    ReceiptsPage.prototype.ngOnInit = function () {
        this.activeEvent = localStorage.getItem('EventName');
        this.syncReceipts();
        this.getBalanceFromReceipt();
        this.getApprovedReceiptsData();
        this.getAuditReceiptListData();
    };
    ReceiptsPage.prototype.newReceipt = function () {
        this.router.navigate(['/newreceipts']);
    };
    ReceiptsPage.prototype.tabChanged = function (data) {
        console.log('tab: ' + data.detail.value);
        if (data.detail.value == 'Approved') {
            console.log('Approved.');
            this.getApprovedReceiptsData();
            this.isSelected = 'Approved';
            // this.displayReceiptFromDB()
        }
        else {
            console.log('Request.');
            // this.getAuditReceiptListData()
            this.isSelected = 'Request';
            this.displayReceiptFromDB();
        }
    };
    ReceiptsPage.prototype.getApprovedReceiptsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var eventid, contractorid;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.networkProvider.getNetworkStatus() == 'Online') {
                    eventid = localStorage.getItem('EventId');
                    contractorid = localStorage.getItem('UserID');
                    this.dataServices.getApprovedReceiptList(eventid, contractorid).then(function (result) {
                        _this.approvedReceiptData = result.dateArray;
                        console.log("Approved Receipt DATA:-", _this.approvedReceiptData);
                        localStorage.setItem('approvedReceipt', JSON.stringify(_this.approvedReceiptData));
                        if (_this.approvedReceiptData.length > 0) {
                            _this.isApprovedDataBlank = 'Data';
                        }
                        else {
                            _this.isApprovedDataBlank = 'Blank';
                        }
                    }, function (error) {
                        if (error.url == null) {
                            _this.loadingController.dismiss();
                            // alert('No internet connection.')  
                        }
                        _this.loadingController.dismiss();
                        if (error.status == 401) {
                            // this.dataServices.DeleteSqliteDB_Tables()
                            _this.displayUnauthoriesdAlert();
                        }
                    });
                }
                else {
                    this.approvedReceiptData = JSON.parse(localStorage.getItem('approvedReceipt'));
                    console.log('Offline receipt: ' + this.approvedReceiptData);
                    if (this.approvedReceiptData.length > 0) {
                        this.isApprovedDataBlank = 'Data';
                    }
                    else {
                        this.isApprovedDataBlank = 'Blank';
                    }
                    this.loadingController.dismiss();
                    // alert('No internet connection.')
                }
                return [2 /*return*/];
            });
        });
    };
    ReceiptsPage.prototype.getAuditReceiptListData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.networkProvider.getNetworkStatus() == 'Online') {
                    // this.presentLoading()
                    this.dataServices.getAuditReceiptList().then(function (response) {
                        // this.auditReceiptData = result
                        // console.log("Audit Receipt DATA:-", this.auditReceiptData)
                        // this.isAuditdataBlank = 'Data'
                        var nonApprovedReceiptData = [];
                        nonApprovedReceiptData = response;
                        var serverIds = [];
                        if (nonApprovedReceiptData.length > 0) {
                            var _loop_1 = function (i) {
                                var _loop_2 = function (j) {
                                    // serverIds.push(nonApprovedReceiptData[i].data[j].log_id)
                                    _this.sqlite.create({
                                        name: 'Commander.db',
                                        location: 'default'
                                    }).then(function (db) {
                                        db.executeSql('UPDATE receipts SET transactionID=?, auditStatus=?, status=?, reason=? WHERE server_id=?', [nonApprovedReceiptData[i].data[j].transaction_id, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.audit_status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.reason, nonApprovedReceiptData[i].data[j].transaction_id])
                                            .then(function (res) {
                                            console.log('Update: ' + res);
                                        }).catch(function (e) { return console.log(e); });
                                        var receiptInsertQuery = 'INSERT INTO receipts (userID,  receiptID,   eventTitle, eventID, workorder, date, amount,   category, categoryID, comment, transactionID, auditStatus, auditDate, status,  reason, RLICardinfo, yardID, yardName, image, imageName, server_id) Select ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT * FROM receipts WHERE server_id=?)';
                                        db.executeSql(receiptInsertQuery, [nonApprovedReceiptData[i].data[j].userId, nonApprovedReceiptData[i].data[j].transaction_id, '', nonApprovedReceiptData[i].data[j].event_id, '', nonApprovedReceiptData[i].data[j].receiptDate, nonApprovedReceiptData[i].data[j].amount.toString(), nonApprovedReceiptData[i].data[j].category_name, nonApprovedReceiptData[i].data[j].category_id, nonApprovedReceiptData[i].data[j].comments, nonApprovedReceiptData[i].data[j].transaction_id, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.audit_status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.date, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.reason, '', nonApprovedReceiptData[i].data[j].yard_id, nonApprovedReceiptData[i].data[j].yard_name, nonApprovedReceiptData[i].data[j].receiptFile, '', nonApprovedReceiptData[i].data[j].transaction_id, nonApprovedReceiptData[i].data[j].transaction_id])
                                            .then(function (res) {
                                            console.log('Insert: ' + res);
                                        }).catch(function (e) { console.log(e); });
                                        //                                                                                                                                                                                                                                                                                                                                                                                            'userID,                                      eventTitle,                           eventID,                                                            date,                                     LOG,                                 ticket,                          laborCode,                                        laborCodeID,                                              startTime,                                                endTime,                                              hours,                                            state,                                          stateName,                                          yardID,                                                yardName,                                       comment,                     transactionId,                      auditStatus,                                auditDate,                                      status ,                                              reason,                                     server_id'
                                    }).catch(function (e) { return console.log(e); });
                                };
                                for (var j = 0; j < nonApprovedReceiptData[i].data.length; j++) {
                                    _loop_2(j);
                                }
                            };
                            for (var i = 0; i < nonApprovedReceiptData.length; i++) {
                                _loop_1(i);
                            }
                            console.log('serverIds: ' + serverIds);
                            var string = void 0;
                            string = JSON.stringify(serverIds).replace('[', '').replace(']', '');
                            console.log('String nonApproved: ' + string);
                            _this.serverIdsString = _this.serverIdsString + ',' + string;
                            console.log('String in nonApproved: ' + _this.serverIdsString);
                        }
                        _this.loadingController.dismiss();
                    }, function (error) {
                        _this.loadingController.dismiss();
                        if (error.status == 401) {
                            // this.dataServices.DeleteSqliteDB_Tables()
                            _this.displayUnauthoriesdAlert();
                        }
                    });
                }
                else {
                    this.loadingController.dismiss();
                    // alert('No internet connection.')
                }
                return [2 /*return*/];
            });
        });
    };
    ReceiptsPage.prototype.getBalanceFromReceipt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.networkProvider.getNetworkStatus() == 'Online') {
                    // this.presentLoading();
                    this.uId = localStorage.getItem('UserID');
                    this.eventId = localStorage.getItem('EventId');
                    this.dataServices.getBalanceFromReceiptApi(this.uId, this.eventId).then(function (result) {
                        _this.balanceData = result.data;
                        console.log('Balance : ' + _this.balanceData);
                        localStorage.setItem('balance', result.data);
                        _this.loadingController.dismiss();
                    }, function (error) {
                        _this.loadingController.dismiss();
                        if (error.status == 401) {
                            // this.dataServices.DeleteSqliteDB_Tables()
                            _this.displayUnauthoriesdAlert();
                        }
                    });
                }
                else {
                    this.loadingController.dismiss();
                    this.balanceData = localStorage.getItem('balance');
                    // alert('No internet connection.')
                }
                return [2 /*return*/];
            });
        });
    };
    ReceiptsPage.prototype.acceptReceipt = function (section, index) {
        console.log('Section: ', section);
        console.log('Index: ', index);
        console.log('acceptReceipt: ' + JSON.stringify(this.approvedReceiptData[section].receiptListArray[index]));
        this.router.navigate(['approved-receipt', { type: 'receipt', item: JSON.stringify(this.approvedReceiptData[section].receiptListArray[index]) }]);
    };
    ReceiptsPage.prototype.payoutClicked = function (section) {
        console.log('Section of payout: ', section);
        this.router.navigate(['approved-receipt', { type: 'payout', item: JSON.stringify(this.approvedReceiptData[section].payoutData) }]);
    };
    ReceiptsPage.prototype.declineReceipt = function (section, index) {
        console.log('Section: ', section);
        console.log('Index: ', index);
        this.router.navigate(['declinedreceipt', { item: JSON.stringify(this.auditReceiptData[section].data[index]) }]);
    };
    ReceiptsPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: 'The details listed and the balance are only for your active event.  Note that each client during a deployment is considered to be a separate event. To see balances from other events, please go to your portal using this app.  Receipts must be approved by the Finance/Admin Section for you to be reimbursed. Review declined receipts and resubmit if you disagree with the decision as you will not be reimbursed for declined receipts.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReceiptsPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: null
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 2000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    ReceiptsPage.prototype.displayUnauthoriesdAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Unauthorized',
                            subHeader: '',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        _this.router.navigate(['/login']);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReceiptsPage.prototype.readonly = function () {
        return true;
    };
    ReceiptsPage.prototype.syncReceipts = function () {
        var _this = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            this.presentLoading();
        }
        this.sqlite.create({
            name: 'Commander.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM receipts WHERE server_id=0', [])
                .then(function (res) {
                console.log("Task log:-", JSON.stringify(res));
                console.log("Task log length:-", JSON.stringify(res.rows.length));
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.receiptsInDB.push(res.rows.item(i));
                    }
                }
                console.log("DATA ARRAY:-", _this.receiptsInDB);
                _this.i = 0;
                _this.postReceipt();
                _this.receiptGeoLocation = JSON.parse(localStorage.getItem('receiptGeoLocation'));
                if (_this.receiptGeoLocation.length != 0) {
                    _this.geoCounter = 0;
                    _this.postReceiptGeoLocation();
                }
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    ReceiptsPage.prototype.postReceiptGeoLocation = function () {
        var _this = this;
        this.dataServices.postGeoLocation(this.receiptGeoLocation[this.geoCounter].split(',')[0], this.receiptGeoLocation[this.geoCounter].split(',')[1], this.receiptGeoLocation[this.geoCounter].split(',')[2], this.receiptGeoLocation[this.geoCounter].split(',')[3], this.receiptGeoLocation[this.geoCounter].split(',')[4], this.receiptGeoLocation[this.geoCounter].split(',')[5])
            .then(function (result) {
            console.log('Location post successfully on add task logs: ' + JSON.stringify(result));
            if (_this.geoCounter < _this.receiptGeoLocation.length) {
                _this.geoCounter += 1;
                _this.postReceiptGeoLocation();
            }
            else {
                localStorage.removeItem('receiptGeoLocation');
            }
        }, function (error) {
            console.log('Error in post location: ' + JSON.stringify(error));
        });
    };
    ReceiptsPage.prototype.postReceipt = function () {
        var _this = this;
        if (this.receiptsInDB.length > this.i) {
            if (this.networkProvider.getNetworkStatus() == 'Online') {
                // local_id: any, eventId: any, date: any, yard: any, entityID: any, category: any, amount: any, comments: any, billable: any,checknum: any,audit: any,receiptFileNname: any, ccid: any
                if (this.receiptsInDB[this.i].RLICardinfo.split('.')[0].length != 0) {
                    if (this.receiptsInDB[this.i].RLICardinfo.split('.')[0].length == 4) {
                        // GET CREDIT CARD DETAILS API CALL
                        this.dataServices.getCreditCardDetailApi(this.receiptsInDB[this.i].RLICardinfo.split('.')[0]).then(function (result) {
                            _this.responseData = result;
                            console.log("Credit Card", _this.responseData);
                            var creditIdStatus = _this.responseData.status;
                            if (creditIdStatus == 'success') {
                                //Update RLICardinfo number to credit_id
                                _this.sqlite.create({
                                    name: 'Commander.db',
                                    location: 'default'
                                }).then(function (db) {
                                    db.executeSql('UPDATE receipts SET RLICardinfo= ? WHERE ID= ?', [_this.responseData.credit_id, _this.receiptsInDB[_this.i].ID])
                                        .then(function (res) {
                                        console.log(res);
                                    }).catch(function (e) { return console.log(e); });
                                }).catch(function (e) { return console.log(e); });
                                //Retrieve same row for post 
                                _this.sqlite.create({
                                    name: 'Commander.db',
                                    location: 'default'
                                }).then(function (db) {
                                    db.executeSql('SELECT * FROM receipts WHERE ID=?', [_this.receiptsInDB[_this.i].ID])
                                        .then(function (res) {
                                        console.log("Task log:-", JSON.stringify(res));
                                        console.log("Task log length:-", JSON.stringify(res.rows.length));
                                        if (res.rows.length > 0) {
                                            _this.receiptsofflineInDB = [];
                                            for (var i = 0; i < res.rows.length; i++) {
                                                _this.receiptsofflineInDB.push(res.rows.item(i));
                                            }
                                        }
                                        console.log("DATA ARRAY:-", _this.receiptsofflineInDB);
                                        console.log('Credit Card No:-', _this.receiptsofflineInDB[0].RLICardinfo);
                                        _this.dataServices.postReceiptData(_this.receiptsofflineInDB[0].ID, _this.receiptsofflineInDB[0].eventID, _this.receiptsofflineInDB[0].date, _this.receiptsofflineInDB[0].yardName, _this.receiptsofflineInDB[0].userID, _this.receiptsofflineInDB[0].categoryID, _this.receiptsofflineInDB[0].amount, _this.receiptsofflineInDB[0].comment, 1, '', 1, _this.receiptsofflineInDB[0].image, _this.receiptsofflineInDB[0].imageName, _this.receiptsofflineInDB[0].RLICardinfo).then(function (result) {
                                            console.log("Sucess Status: ", result);
                                            console.log("Response Data", result.success);
                                            if (result.success == true) {
                                                _this.sqlite.create({
                                                    name: 'Commander.db',
                                                    location: 'default'
                                                }).then(function (db) {
                                                    db.executeSql('UPDATE receipts SET transactionID=?, server_id=? WHERE ID=?', [result.server_id, result.server_id, result.local_id])
                                                        .then(function (res) {
                                                        console.log(res);
                                                        _this.i++;
                                                        if (_this.receiptsInDB.length == _this.i) {
                                                            _this.receiptsInDB = [];
                                                            _this.loadingController.dismiss();
                                                            // this.TaskLogSaved("Task Log Saved Successfully")
                                                        }
                                                        else {
                                                            _this.loadingController.dismiss();
                                                            _this.postReceipt();
                                                        }
                                                    }).catch(function (e) { return console.log(e); });
                                                }).catch(function (e) { return console.log(e); });
                                            }
                                            else {
                                                _this.i++;
                                                if (_this.receiptsInDB.length == _this.i) {
                                                    _this.receiptsInDB = [];
                                                    _this.loadingController.dismiss();
                                                    // this.taskLogSaved("Task Log Saved Successfully")
                                                }
                                                else {
                                                    _this.loadingController.dismiss();
                                                    _this.postReceipt();
                                                }
                                            }
                                        });
                                    }).catch(function (e) { return console.log(e); });
                                }).catch(function (e) { return console.log(e); });
                            }
                            else {
                                // If Credit card no. is invalid. 
                                _this.sqlite.create({
                                    name: 'Commander.db',
                                    location: 'default'
                                }).then(function (db) {
                                    db.executeSql('UPDATE receipts SET auditStatus= ? WHERE ID= ?', ['Declined', _this.receiptsInDB[_this.i].ID])
                                        .then(function (res) {
                                        console.log(res);
                                        _this.i++;
                                        if (_this.receiptsInDB.length == _this.i) {
                                            _this.receiptsInDB = [];
                                            _this.loadingController.dismiss();
                                            // this.taskLogSaved("Task Log Saved Successfully")
                                        }
                                        else {
                                            _this.loadingController.dismiss();
                                            _this.postReceipt();
                                        }
                                    }).catch(function (e) { return console.log(e); });
                                }).catch(function (e) { return console.log(e); });
                            }
                        }, function (error) {
                            _this.loadingController.dismiss();
                            if (error.status == 401) {
                                // this.dataServices.DeleteSqliteDB_Tables()
                                _this.displayUnauthoriesdAlert();
                            }
                        });
                    }
                }
                else {
                    // Without credit card 
                    this.dataServices.postReceiptData(this.receiptsInDB[this.i].ID, this.receiptsInDB[this.i].eventID, this.receiptsInDB[this.i].date, this.receiptsInDB[this.i].yardName, this.receiptsInDB[this.i].userID, this.receiptsInDB[this.i].categoryID, this.receiptsInDB[this.i].amount, this.receiptsInDB[this.i].comment, 1, '', 1, this.receiptsInDB[this.i].image, this.receiptsInDB[this.i].imageName, this.receiptsInDB[this.i].RLICardinfo).then(function (result) {
                        console.log("Sucess Status: ", result);
                        console.log("Response Data", result.success);
                        if (result.success == true) {
                            _this.sqlite.create({
                                name: 'Commander.db',
                                location: 'default'
                            }).then(function (db) {
                                db.executeSql('UPDATE receipts SET transactionID=?, server_id=? WHERE ID=?', [result.server_id, result.server_id, result.local_id])
                                    .then(function (res) {
                                    console.log(res);
                                }).catch(function (e) { return console.log(e); });
                            }).catch(function (e) { return console.log(e); });
                            _this.i++;
                            if (_this.receiptsInDB.length == _this.i) {
                                _this.receiptsInDB = [];
                                // this.TaskLogSaved("Task Log Saved Successfully")
                            }
                            else {
                                _this.postReceipt();
                            }
                        }
                        else {
                            _this.i++;
                            if (_this.receiptsInDB.length == _this.i) {
                                _this.receiptsInDB = [];
                                _this.loadingController.dismiss();
                                // this.taskLogSaved("Task Log Saved Successfully")
                            }
                            else {
                                _this.postReceipt();
                            }
                        }
                    });
                }
            }
            else {
                this.loadingController.dismiss();
                // alert('No internet connection.')
            }
        }
        else {
            this.loadingController.dismiss();
        }
    };
    ReceiptsPage.prototype.displayReceiptFromDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'Commander.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM receipts GROUP BY date ORDER BY date DESC', [])
                .then(function (res) {
                console.log("Task log:-", JSON.stringify(res));
                console.log("Task log length:-", JSON.stringify(res.rows.length));
                if (res.rows.length > 0) {
                    _this.approvedReceiptDataFromDB = [];
                    _this.nonApprovedReceiptDataFromDB = [];
                    var _loop_3 = function (i) {
                        //Audit Required
                        db.executeSql('SELECT * FROM receipts WHERE date = ?', [res.rows.item(i).date]).then(function (res1) {
                            console.log('Data of Date: ' + res1);
                            if (res1.rows.length > 0) {
                                var taskLogArr = [];
                                // let totalHrs = 0.0
                                for (var j = 0; j < res1.rows.length; j++) {
                                    var taskLogDataObj = void 0;
                                    taskLogDataObj = {
                                        "event_id": res1.rows.item(j).eventID,
                                        "userId": res1.rows.item(j).userID,
                                        "yard_id": res1.rows.item(j).yardID,
                                        "receiptDate": res1.rows.item(j).date,
                                        "category_name": res1.rows.item(j).category,
                                        "category_id": res1.rows.item(j).categoryID,
                                        "amount": res1.rows.item(j).amount,
                                        "transaction_id": res1.rows.item(j).transactionID,
                                        "comments": res1.rows.item(j).comment,
                                        "yard_name": res1.rows.item(j).yardName,
                                        "receiptFile": res1.rows.item(j).image,
                                        "checknum": "",
                                        "rliOfficeUpdateArray": {
                                            "audit_status": res1.rows.item(j).auditStatus,
                                            "date": "0000-00-00 00:00:00",
                                            "transaction_id": res1.rows.item(j).transactionID,
                                            "status": res1.rows.item(j).status,
                                            "reason": res1.rows.item(j).reason
                                        }
                                    };
                                    taskLogArr.push(taskLogDataObj);
                                    // totalHrs += parseFloat((res1.rows.item(j).hours).replace(':', '.')) //res1.rows.item(j).hours
                                }
                                // console.log(res.rows.item(i).date + ': ' + taskLogArr.length + ' totalHrs: ' + totalHrs)
                                var taskLog = void 0;
                                taskLog = {
                                    "date": res.rows.item(i).date,
                                    // "totalHrs": totalHrs,
                                    "data": taskLogArr
                                };
                                _this.nonApprovedReceiptDataFromDB.push(taskLog);
                            }
                            console.log('nonApprovedReceiptDataFromDB: ' + JSON.stringify(_this.nonApprovedReceiptDataFromDB));
                            _this.auditReceiptData = _this.nonApprovedReceiptDataFromDB;
                            if (_this.auditReceiptData.length > 0) {
                                _this.isAuditdataBlank = 'Data';
                            }
                            else {
                                _this.isAuditdataBlank = 'Blank';
                            }
                        }).catch(function (e) { return console.log('Error in Date DB: ' + e); });
                    };
                    for (var i = 0; i < res.rows.length; i++) {
                        _loop_3(i);
                    }
                }
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    ReceiptsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipts',
            template: __webpack_require__(/*! ./receipts.page.html */ "./src/app/receipts/receipts.page.html"),
            styles: [__webpack_require__(/*! ./receipts.page.scss */ "./src/app/receipts/receipts.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__["DataSevicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProviderService"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ReceiptsPage);
    return ReceiptsPage;
}());



/***/ })

}]);
//# sourceMappingURL=receipts-receipts-module.js.map