console.log("Add your Task Please!");

const arr = [];
const inputTop = document.querySelector(".input");
const btnTop = document.querySelector(".btnAdd");
const ulElement = document.querySelector(".ul");

btnTop.addEventListener("click", onClick);

function onClick(event) {
  const inputValue = inputTop.value;
  if(inputValue != '') {
    arr.push(inputValue);
    inputTop.value = ''
    event.preventDefault();
    console.log(inputValue);
  }

  addItem(inputValue);
}

function addItem(inputValue ,index) {
  const liElement = document.createElement("li");
  liElement.innerHTML = `
                    <div class="todo_input_section">
                        <input class="inputBottom" type="checkbox" value="checked">
                        <span>${inputValue}</span>
                    </div>
                    <div class="todo_img_section">
                        <span class="editTodolist">
                            <img src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png">
                        </span>
                        <span class="deleteTodolist">
                            <img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="">
                        </span>
                    </div>`;
  ulElement.appendChild(liElement);

  const editElement = document.querySelector('.editTodolist');
  const deleteElement = document.querySelector('.deleteTodolist');

  editElement.addEventListener('click' ,() => {

  });

  deleteElement.addEventListener('click' ,() => {
    ulElement.removeChild(liElement);
    const index = arr.indexOf(inputValue);
    if(index > -1) {
        arr.splice(index, 1)
    };
  });
}
