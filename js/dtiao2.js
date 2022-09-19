setInterval(function() {
  console.clear();
  check();
}, 2000);
var check = function() {
  function doCheck(a) {
    document.body.innerHTML="发生错误，请重试！";
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
