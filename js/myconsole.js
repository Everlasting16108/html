window.onresize=checkSB;
      function checkSB() {
         // 判断是否打开调试台
         if(window.outerWidth - window.innerWidth > 50 || window.outerHeight - window.innerHeight > 200){
            console.clear();
            document.write(`请所在你切勿尝试使用调试，再次触发将记录IP进入黑名单<a href="/" style="color:#4285f4;">点击返回</a>`);
         }
       };
       checkSB();
