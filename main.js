console.clear();
function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
 var i=0;
  var timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}



const p=document.querySelector('p');
typingEffect(p,150);