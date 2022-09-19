setInterval(function() {
  check();
}, 2000);
var check = function() {
  function doCheck(a) {
    if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
      (function() {console.clear();document.body.innerHTML="发生错误，请重试！";}['constructor']('debugger')());
    } else {
      (function() {console.clear();document.body.innerHTML="发生错误，请重试！";}['constructor']('debugger')());
    }
    doCheck(++a);
  }
  try {
    doCheck(0);
  } catch (err) {}
};
check();
