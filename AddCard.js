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


// const express = require('express')
// const app = express();

// Route 2
// const productAPI = require('.Files/product')

// Route 3
// const { readdirSync } = require('fs')

// Route 1
// app.get('/',(req ,res) => {
//     res.send('Hello Node.JS');
// })

// Route 2
// app.use('/api', require('api', file));

// Route 3
// app.readdirSync('.Files').map((r) => app.use('/api/' ,require('./Files/' + r)));

// Port
// app.listen(3000, () => {
//     console.log('Hello Server')
// })

// const array = [];
// const btnAdd = document.querySelector(".btnAdd");
// btnAdd.addEventListener("click", onCLick);

// document.addEventListener('DOMContentLoaded' ,() => {
//     const storedArray = JSON.parse(localStorage.getItem('array'));

//     if(storedArray) {
//         storedArray.forEach(task => array.push(task));
//         updateElement();
//         updateStatus();
//     };
// });

// const saveArray = () => {
//     localStorage.setItem('array' ,JSON.stringify(array));
// };

// function onCLick(event) {
//   event.preventDefault();
//   addElement();
// }

// function addElement() {
//   const inputElem = document.querySelector(".input");
//   const text = inputElem.value.trim();
//   array.push({ text: text, complete: false });
//   // console.log(array)
//   inputElem.value = "";
//   updateElement(text);
//   saveArray();
// }

// function updateElement() {
//   const ulElem = document.querySelector(".ul");
//   ulElem.innerHTML = "";
//   array.forEach((task, index) => {
//     const liElem = document.createElement("li");
//     liElem.innerHTML = `
//                 <div class="todo_input_section task ${task.complete ? 'complete' : ''}">
//                     <input type="checkbox" class="checkbox" ${task.complete ? 'checked' : ''}/>
//                     <span class="checkText">${task.text}</span>
//                 </div>
//                 <div class="todo_img_section">
//                     <span class="editTodolist">
//                         <img src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" onClick="onEdit(${index})">
//                     </span>
//                     <span class="deleteTodolist">
//                         <img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="" onClick="onDelete(${index})">
//                     </span>
//                 </div>
//                 `;
//                 liElem.addEventListener('change' ,() => toggleComplete(index))
//                 ulElem.append(liElem);
//   });
// }

// const toggleComplete = (index) => {
//     array[index].complete = !array[index].complete;
//     console.log({array})
//     updateElement();
//     updateStatus();
//     saveArray();
// };

// function onEdit(index) {
//     const inputElem = document.querySelector(".input");
//     inputElem.value = array[index].text;
//     array.splice(index ,1);
//     updateElement();
//     saveArray();
// };

// function onDelete(index) {
//     array.splice(index ,1);
//     updateElement();
//     saveArray();
// };

// function updateStatus() {
//     const completeArray = array.filter(task => task.complete).length;
//     const totalArray = array.length;
//     const processArray = (completeArray/totalArray) * 100;
//     const progressBar = document.querySelector('.todo_stat');
//     progressBar.style.width = `${processArray}%`
//     document.querySelector('.number').innerText = `${completeArray} / ${totalArray}`
// };
