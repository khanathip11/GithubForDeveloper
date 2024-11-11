console.log("Add your Task Please!");

const arr = [];
const btnTop = document.querySelector(".btnAdd");

btnTop.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  addItem();
};

function addItem() {
  const inputTop = document.querySelector(".input");
  const text = inputTop.value.trim();
  if(text) {
    arr.push({text: text ,complete: false});
  };
  inputTop.value = '';
  updateElement();
  // console.log(arr);
};

function updateElement() {
  const ulElement = document.querySelector('.ul');
  ulElement.innerHTML = '';

  arr.forEach((task ,index) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <div class="todo_input_section ${task.complete ? 'complete' : ''}">
        <input class="inputBottom" type="checkbox" ${task.complete ? 'checked' : ''}>
        <span>${task.text}</span>
      </div>

      <div class="todo_img_section">
        <span class="editTodolist">
          <img src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" onClick="edit_f(${index})">
        </span>
        <span class="deleteTodolist">
          <img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="" onClick="delete_f(${index})">
        </span>
      </div> `;
      console.log(task);
      liElement.addEventListener('change' ,() => onCheng(index));
      ulElement.append(liElement);
  });
};

const onCheng = (index) => {
  arr[index].complete = !arr[index].complete;
  updateElement();
};

const edit_f = (index) => {
  const inputTop = document.querySelector(".input");
  inputTop.value = arr[index].text;

  arr.splice(index ,1);
  updateElement();
};

const delete_f = (index) => {
  arr.splice(index ,1);
  updateElement();
};

// const inputTop = document.querySelector(".input");
// const btnTop = document.querySelector(".btnAdd");
// const ulElement = document.querySelector(".ul");

// btnTop.addEventListener("click", onClick);

// function onClick(event) {
//   const inputValue = inputTop.value.trim();
//   if (inputValue !== '') {
//     arr.push(inputValue);
//     inputTop.value = ''; // Clear input field
//     event.preventDefault();
//     console.log(inputValue);
//     addItem(inputValue);
//   }
// }

// function addItem(inputValue) {
//   const liElement = document.createElement("li");
//   liElement.classList.add('todo-item');
//   liElement.innerHTML = `
//                     <div class="todo_input_section">
//                         <input class="inputBottom" type="checkbox" value="checked">
//                         <span>${inputValue}</span>
//                     </div>
//                     <div class="todo_img_section">
//                         <span class="editTodolist">
//                             <img src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png">
//                         </span>
//                         <span class="deleteTodolist">
//                             <img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="">
//                         </span>
//                     </div>`;
//   ulElement.appendChild(liElement);

//   const editElement = document.querySelector('.editTodolist');
//   const deleteElement = document.querySelector('.deleteTodolist');

//   editElement.addEventListener('click' ,() => {
//     const newInputValue = prompt("Edit your task:", inputValue);
//     if (newInputValue && newInputValue !== inputValue) {
//       liElement.querySelector("span").textContent = newInputValue;
//       const index = arr.indexOf(inputValue);
//       if (index > -1) {
//         arr[index] = newInputValue;  // Update the array
//       }
//     }
//   });

//   deleteElement.addEventListener('click' ,() => {
//     ulElement.removeChild(liElement);
//     const index = arr.indexOf(inputValue);
//     if (index > -1) {
//       arr.splice(index, 1);  // Remove from the array
//     }
//   });
// }

