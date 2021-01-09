/* #1 Example of Series & Parallel Tasks execution */

const { series, parallel } = require("gulp");

/** Private Task */
function clean(cb) {
  cb();
}

/** Public Task, as it is exported */
function build(cb) {
  cb();
}

exports.build = build;
exports.default = parallel(clean, build);

/* #2 Example of 'Returning a stream' */

const { src, dest } = require("gulp");

function streamTask() {
  return src("*.js").pipe(dest("output"));
}

exports.default = streamTask;

/* #3 Example of 'Returning a promise' */

function promiseTask() {
  return Promise.resolve("the value is ignored");
}

exports.default = promiseTask;

/* #4 Example of 'Returning an event emitter' */

const { EventEmitter } = require("events");

function eventEmitterTask() {
  const emitter = new EventEmitter();

  setTimeout(() => emitter.emit("finish"), 50);
  return emitter;
}

exports.default = eventEmitterTask;

/* #5 Example of 'Returning a child process' */

const { exec } = require("child_process");

function childProcessTask() {
  return exec("date");
}

exports.default = childProcessTask;

/* #6 Example of 'Returning an observable' */

const { Observable } = require("rxjs");

function observableTask() {
  return Observable.of(1, 2, 3);
}

exports.default = observableTask;
