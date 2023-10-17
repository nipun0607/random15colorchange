let parentDiv=document.querySelector(".container");
// console.log(parentDiv);

for(let i=0;i<15;i++){
    let newdiv=document.createElement("div");
    newdiv.classList.add("colordiv");    
    parentDiv.appendChild(newdiv);  
}
let child_div=document.querySelectorAll(".colordiv");

child_div.forEach((color)=>{
  

    let newcolor=generate_random_color();
    console.log(newcolor);
    color.style.backgroundColor="#"+newcolor;
    color.innerText="#"+newcolor;
})

function generate_random_color(){
    let hexchars="0123456789abcdef";
    let colorCode="";
    let colorCodeLength=6;
    for(let i=0;i<colorCodeLength;i++){
        let randomIndex=Math.floor(Math.random()*16);
        colorCode=colorCode+hexchars[randomIndex];
    } 
    return colorCode;
}