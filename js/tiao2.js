window.onload=function(){
document.onkeydown=function(){
var element = new Image();
Object.defineProperty(element,'id',{get:function(){window.location.href="https://www.baidu.com"}});
console.log(element);
var e=window.event||arguments[0];
  if(e.keyCode==123){
     window.location.href="https://www.baidu.com"
      }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
          window.location.href="https://www.baidu.com"
      }
   };
}
