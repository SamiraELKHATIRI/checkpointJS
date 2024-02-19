document.getElementsByClassName("change")[0].addEventListener("change",onchangeTask)
 let item = "" ; 
 let arrTasks = []
function onchangeTask (e){
    console.log(e.target);
  item = e.target.value 
}

document.getElementsByClassName("submit")[0].addEventListener("click",onclickTask)
let i = 0
function onclickTask (){
    if(document.getElementsByClassName("change")[0].value==""){
        alert("must be add data")
        return;
    }
    
    if( document.getElementsByClassName("submit")[0].innerHTML == "Submit"){
        i=i+1 
        arrTasks.push({
            name : item,
            id:i
        })
        document.getElementsByClassName("change")[0].value=""
    }
    const cont =  document.getElementsByClassName("cont")[0]
    cont.innerHTML =arrTasks.map(item=> `<input class="val" type="text" style="width: 59%;margin-top: 20px"
     value=${item.name} /> <button onClick="deleteItem('${item.id}')">delete</button>
     <button onClick="update('${item.id}')">update</button>`)
}

function update(x){
    let item= arrTasks.find(itm=>x==itm.id)
    document.getElementsByClassName("change")[0].value=item.name
    document.getElementsByClassName("submit")[0].innerHTML="edit"
    document.getElementsByClassName("submit")[0].setAttribute("onclick",`edit(${x})`)
}

function edit(x){
    let item = arrTasks.find(itm=>x==itm.id)
    item.name=document.getElementsByClassName("change")[0].value
    onclickTask()
    document.getElementsByClassName("submit")[0].innerHTML="Submit"
    document.getElementsByClassName("change")[0].value=""
    document.getElementsByClassName("submit")[0].removeAttribute("onclick")
}

function deleteItem(x){
     arrTasks = arrTasks.filter(itm => x != itm.id)
     const cont =  document.getElementsByClassName("cont")[0]
    cont.innerHTML =arrTasks.map(item=> `<input class="val" type="text" style="width: 59%;margin-top: 20px" 
    value=${item.name} />
    <button onClick="deleteItem('${item.id}')">delete</button>
    <button onClick="update('${item.id}')">update</button>`)
    }




