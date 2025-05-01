function addTask(){
  var inp=document.getElementById("inp").value.trim()
  if(inp!==''){
  var newLi=document.createElement("li")
  newLi.innerHTML=
    `<input type="checkbox" /><p>${inp}</p>
    <button onclick="remove()" class="cross">&#10005;</button>`
  document.getElementById("inp_add").appendChild(newLi)
  }

  var checkBox=newLi.querySelector("input")
  var txt=newLi.querySelector("p")

  checkBox.addEventListener("change",function(){
    if(checkBox.checked){
      txt.style.textDecoration="line-through";
    }
    else{
      txt.style.textDecoration="none";
    }
  })

  newLi.querySelector(".cross").addEventListener("click",function(){
    newLi.remove();
  })
}

