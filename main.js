const input =document.querySelector('.input_tolist')
const toDoList =document.querySelector('.logo')

function soat()
{
    let  soat = new Date();
    let son = soat.getHours();
    let son1 = soat.getMinutes();
    let son2 = soat.getSeconds();
    let javob = son + ":" + son1 + ":" + son2;
    document.write(javob)
}
const DATA = [
{
    li: 'salom',
    


}

];

function add(){
    let thri = {
        li:input.value

    } 
    DATA.push(thri)
    console.log(DATA);
    createTable(DATA)
    input.value =''

}



function createTable (data){
    while(toDoList.firstChild){
        toDoList.firstChild.remove()
    }
    data.forEach((user,index)=>{
        let li =  document.createElement('li')
        li.innerHTML = `
  
        <li class="checked" >${user.li}</li>
       <div class="img">
       <button onclick="soat()">Time</button>
       <div class="img-rasm">
       <button class="bnt"  onclick="go(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
       </div>
       </div>

    

      
       `
       toDoList.appendChild(li)
       
    })
    
}
createTable(DATA)


function go(index){
    DATA.splice(index,1)
    createTable(DATA)
    
}



toDoList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked').style.backgroundColor = 'gray'
    }
    else if(e.target.tagName === 'go'){
        e.target.classList.toggle.remove()

    }
})