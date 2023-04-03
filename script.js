window.addEventListener('load',()=>{
const field = document.getElementById('field');
const addItem = document.getElementsByClassName("btn");
const form = document.getElementById("form");
const list = document.getElementById("main-list");


 form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let task = field.value;
   if( !task){
    alert("Add your item in the shopping list");
    return;
   }

   const element = document.createElement("div");
   element.classList.add("element");

   const listItem = document.createElement("div");
      listItem.classList.add("list-item")

      const inputField = document.createElement("input");
      inputField.value = task;
      inputField.classList.add("text");


      listItem.appendChild(inputField);

      element.appendChild(listItem);

      const action = document.createElement("div");
      action.classList.add("action");

      const exitBtn = document.createElement("button");
      exitBtn.innerHTML = "X";
      exitBtn.classList.add("exit");

      action.appendChild(exitBtn);
       element.appendChild(action);

       list.appendChild(element);

       field.value="";
       
       exitBtn.addEventListener('click', ()=>{
         list.removeChild(element);

         
       })
    const clearBtn = document.createElement("button");
    clearBtn.innerHTML = "Clear All";


})
})