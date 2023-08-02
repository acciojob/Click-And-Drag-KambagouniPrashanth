// Your code here.
const itemElement=document.getElementByClass("item");
itemElement.addEventListener("mousedown",(e)=>{
    console.log("mousedown")

})
itemElement.addEventListener("mouseup",(e)=>{
    console.log("mouseup")

})
itemElement.addEventListener("dragstart",(e)=>{
    console.log("dragstart")

})