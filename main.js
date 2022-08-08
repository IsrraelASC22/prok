const boxes=document.getElementsByClassName("box")[0]
const img=document.getElementById("img")
document.addEventListener('click',clickListener)
img.addEventListener('click', clickListenerb)
function clickListener(event){
    event.preventDefault()


    

}
function clickListenerb()
var rotateDegrees = 0;  
function rotateImage(){
  rotateDegrees += 30;
  img.style.transform = "rotate(" + rotateDegrees + "deg)";
};