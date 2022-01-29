var input=document.querySelector("input[name='todo_input']")
var addtobtn=document.querySelector("button")
var todo_List=document.querySelector(".todos")
var count=0
addtobtn.addEventListener('click',function(){
    var tval=document.createElement('p')
    tval.setAttribute("key",count)
    count+=1
    tval.innerHTML=input.value
    todo_List.appendChild(tval)
    input.value=" "
    tval.addEventListener('click',function(){
        todo_List.removeChild(tval)
    })
    
})
