// Your code here.
const itemElement=document.getElementById("item");
itemElement.addEventListener("mousedown",(e)=>{
    console.log("mousedown")

})
itemElement.addEventListener("mouseup",(e)=>{
    console.log("mouseup")

})
itemElement.addEventListener("dragstart",(e)=>{
    console.log("dragstart")

})