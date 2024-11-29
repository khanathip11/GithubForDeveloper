const arrays = [];
const btn = document.querySelector(".btnAdd");

btn.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  addTask();
  console.log(event);
}

function addTask() {
  const inputElem = document.querySelector(".input");
  const text = inputElem.value.trim();
  arrays.push({ text: text, complete: false });
  inputElem.value = '';
  updateTask();
  statusTask();
  console.log(arrays);
}

function updateTask() {
  const ulElem = document.querySelector(".ul");
  ulElem.innerHTML = "";
  arrays.forEach((task, index) => {
    const liElem = document.createElement("li");
    liElem.innerHTML = `
        <div class="todo_input_section task ${task.complete ? 'complete' : ''}">
            <input type="checkbox" ${task.complete ? 'checked' : ''}>
                <span>${task.text}</span>
        </div>
        <div class="todo_img_section">
            <span class="editTodolist" onClick="editTask(${index})">
                <img src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png">
            </span>
            <span class="deleteTodolist" onClick="deleteTask(${index})">
                <img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="">
            </span>
        </div>
        `;
        console.log(liElem)
        liElem.addEventListener('change',() => onChang(index));
        ulElem.append(liElem);
    });
}

function onChang(index) {
    arrays[index].complete = !arrays[index].complete;
    console.log({arrays});
    updateTask();
    statusTask();
};

function editTask(index) {
    const inputElem = document.querySelector('.input');
    inputElem.value = arrays[index].text;
    arrays.splice(index, 1);
    updateTask();
    statusTask();
    console.log(arrays)
};

function deleteTask(index) {
    arrays.splice(index , 1);
    updateTask();
    statusTask();
    console.log(arrays)
};

function statusTask() {
    const completeTask = arrays.filter((task) => task.complete).length
    const totalTask = arrays.length;
    const processTask = (completeTask / totalTask) * 100;
    const progressbar = document.querySelector('.todo_stat');
    progressbar.style.width = `${processTask}%`;
    const scroll = document.querySelector('.number');
    scroll.innerText = `${completeTask} / ${totalTask}`
};

function saveTask() {
    localStorage.setItem('arrays' ,JSON.stringify(arrays));
};