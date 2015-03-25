var myFunctions = {

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  extend: function(obj1, obj2) {
    var obj = {};
    if(obj1==={}){
      obj = obj2;
      return obj;
    }
    obj = obj1;
    for (var i = 1; i < arguments.length; i++) {
      for(var key in arguments[i]){
      obj[key] = arguments[i][key];
      }
    }
    return obj;
  },

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.

  once: function(func) {

  var alreadyCalled = false;
  var result;

  // TIP: We'll return a new function that delegates to the old one, but only
  // if it hasn't been called before.
  return function() {
    if(alreadyCalled){
      return result;
    } else{
      result = func();
      alreadyCalled = true;
      return result;
    }

    // TIP: .apply(this, arguments) is the standard way to pass on all of the
    // information from one function call to another.

    // The new function always returns the originally computed result.

   };

  },

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  delay: function(func, wait) {
    var arr = [];
    if(arguments[2]){
      for (var i = 2; i < arguments.length; i++) {
        arr.push(arguments[i]);
      }
    }
    return setTimeout(function(){func.apply(this, arr);}, wait);
  },

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // _.memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  // http://addyosmani.com/blog/faster-javascript-memoization/
  memoize: function(func) {

    var cache = {};

    return function inner(n){
      if(cache[n]){
        return cache[n];
      } else{
        cache[n] = func(n);
        return func(n);
      }


    // var k = 1;
    // return function inner(n){
    //     while(k <= n){
    //       if(cache[k-1] && cache[k-2]){
    //           cache[k] = cache[k-1] + cache[k-2];
    //       }else{
    //           cache[k] = func(k);
    //       }
    //       k++;
    //       if(k-1 === n) return cache[n];
    //     }
        
        // return cache[n];
    };
    // var cache = {}, n = 1;

    // return function inner(n){
    //     if(cache[n]){
    //         return cache[n];
    //     }
    //   return cache[n] = func(n);
    // };
    // //   while(i < n){
    // //      i++;
    // //      cache[i] = func(i);
    // //     //  console.log(cache[i]);
    // //     inner(i);
    // //   }
    // //   return cache[n];
  }

};
module.exports = myFunctions;
