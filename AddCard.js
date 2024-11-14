const array = [];
const btnAdd = document.querySelector(".btnAdd");
btnAdd.addEventListener("click", onCLick);

document.addEventListener('DOMContentLoaded' ,() => {
    const storedArray = JSON.parse(localStorage.getItem('array'));

    if(storedArray) {
        storedArray.forEach(task => array.push(task));
        updateElement();
        updateStatus();
    };
});

const saveArray = () => {
    localStorage.setItem('array' ,JSON.stringify(array));
};

function onCLick(event) {
  event.preventDefault();
  addElement();
}

function addElement() {
  const inputElem = document.querySelector(".input");
  const text = inputElem.value.trim();
  array.push({ text: text, complete: false });
  // console.log(array)
  inputElem.value = "";
  updateElement(text);
  saveArray();
}

function updateElement() {
  const ulElem = document.querySelector(".ul");
  ulElem.innerHTML = "";
  array.forEach((task, index) => {
    const liElem = document.createElement("li");
    liElem.innerHTML = `
                <div class="todo_input_section task ${task.complete ? 'complete' : ''}">
                    <input type="checkbox" class="checkbox" ${task.complete ? 'checked' : ''}/>
                    <span class="checkText">${task.text}</span>
                </div>
                <div class="todo_img_section">
                    <span class="editTodolist">
                        <img src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" onClick="onEdit(${index})">
                    </span>
                    <span class="deleteTodolist">
                        <img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="" onClick="onDelete(${index})">
                    </span>
                </div>
                `;
                liElem.addEventListener('change' ,() => toggleComplete(index))
                ulElem.append(liElem);
  });
}

const toggleComplete = (index) => {
    array[index].complete = !array[index].complete;
    console.log({array})
    updateElement();
    updateStatus();
    saveArray();
};

function onEdit(index) {
    const inputElem = document.querySelector(".input");
    inputElem.value = array[index].text;
    array.splice(index ,1);
    updateElement();
    saveArray();
};

function onDelete(index) {
    array.splice(index ,1);
    updateElement();
    saveArray();
};

function updateStatus() {
    const completeArray = array.filter(task => task.complete).length;
    const totalArray = array.length;
    const processArray = (completeArray/totalArray) * 100;
    const progressBar = document.querySelector('.todo_stat');
    progressBar.style.width = `${processArray}%`
    document.querySelector('.number').innerText = `${completeArray} / ${totalArray}`
};