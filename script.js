let inputtag=document.querySelector("input");
let ultag=document.querySelector("ul")
inputtag.addEventListener("keydown",function(e){
    let key=e.key;
    if(key=='Enter'){
        let value=inputtag.value;
        //console.log(value);
        if(value.length == 0){
          return;
      }
    
      inputtag.value="";
      let litag=document.createElement("li");
     litag.innerHTML = `<div>${value}</div>
     <div class="delete"><i class="fa fa-trash"></i></div>`    
     handleRemoval(litag);
      ultag.appendChild(litag);

    }
})

function handleRemoval(liTag){
  let deleteDiv = liTag.querySelector(".delete"); 
  deleteDiv.addEventListener("click",function(){
      liTag.remove();
  })
}