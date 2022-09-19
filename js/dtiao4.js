setInterval(function() {
  check();
}, 2000);
var check = function() {
  function doCheck(a) {
    if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
      (function() {}['constructor']('debugger')(){console.clear();document.body.innerHTML="发生错误，请重试！";});
    } else {
      (function() {}['constructor']('debugger')(){console.clear();document.body.innerHTML="发生错误，请重试！";});
    }
    doCheck(++a);
  }
  try {
    doCheck(0);
  } catch (err) {}
};
check();
