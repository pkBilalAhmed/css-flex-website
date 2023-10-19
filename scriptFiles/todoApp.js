let listItems = [];
let addBtn = document.getElementById('add-btn')
let id = 0;
let inputAdd = document.getElementById('input-el')

inputAdd.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        AddTask()
    }
})
let newId = () => id + 1;
function AddTask() {
    let inputTask = document.getElementById('input-el');
    let inputValue = inputTask.value;
    if (inputValue != '') {
        let data = { name: inputValue, id: newId(), complated: false }
        listItems.push(data)
        inputTask.value = ''
    }
    displayTask()
}
// console.log(newId());
addBtn.addEventListener('click', () => {
    AddTask()
})
function deleteTask(index) {
    console.log(index);
    listItems.splice(index, 1)
    displayTask()
}
let toggleTask = (index) => {
    listItems[index].complated = !listItems[index].complated;
    displayTask()
}
function displayTask() {
    let todoList = document.getElementById('todo-ul');
    todoList.innerHTML = '';
    // listItems.forEach((item, index) => {
    listItems.map((item, index) => {
        let newLi = document.createElement('li');
        let textDiv = document.createElement('div');
        textDiv.innerHTML = item.name;
        // let liLeft = document.createElement('div');
        let liRight = document.createElement('div');
        let deletBtn = document.createElement('button');
        deletBtn.innerHTML = `Delete This ${index}`
        deletBtn.addEventListener('click', () => deleteTask(index))
        let toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = item.complated ? 'Done' : "Do";
        toggleBtn.onclick = () => toggleTask(index);
        liRight.appendChild(deletBtn);
        liRight.appendChild(toggleBtn)
        liRight.className = 'liRight'
        textDiv.className = 'textDiv'
        newLi.className = 'newLi'
        newLi.appendChild(textDiv)
        newLi.appendChild(liRight)


        todoList.appendChild(newLi)
    })
}
