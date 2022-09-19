setInterval(function() {
  check();
}, 2000);
var check = function() {
  var b = 1;
  if(b===1){console.clear();b++};
  if(b!==1){b=0};
  function doCheck(a) {
    if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
      (function() {}['constructor']('debugger')());
    } else {
      (function() {}['constructor']('debugger')());
    }
    doCheck(++a);
  }
  try {
    doCheck(0);
  } catch (err) {}
};
check();
