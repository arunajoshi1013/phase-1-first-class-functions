function receivesAFunction(cb) {
   cb();
}

function returnsANamedFunction() {
  return function namedFn() {
    console.log("Return a named fn");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Return an anon fn");
  };
}
