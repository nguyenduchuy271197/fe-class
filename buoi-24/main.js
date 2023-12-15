// DOM
// Access elements
// Update elements
// Create elements
// Remove elements

// UI Logic
// Business Logic
// Validation Logic

const listEl = document.getElementById("list");
const addTaskBtnEl = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task-input");

newTaskInput.focus();

addTaskBtnEl.addEventListener("click", function () {
  // ** Lấy dữ liệu trong input ra
  const taskLabel = newTaskInput.value;

  // Kiểm định dữ liệu đầu vào
  if (taskLabel !== "") {
    // ** Thêm một cái task mới vào trong danh sách

    // Tạo ra item element
    const itemEl = document.createElement("li");
    itemEl.className = "item";

    //   Tạo ra label cho item
    const labelEl = document.createElement("p");
    labelEl.textContent = taskLabel;

    //   Tạo ra các button cho element
    const btnContainerEl = document.createElement("div");

    const checkBtnEl = document.createElement("button");
    checkBtnEl.textContent = "Done";

    checkBtnEl.addEventListener("click", function () {
      if (itemEl.classList.contains("done")) {
        itemEl.classList.remove("done");
        checkBtnEl.textContent = "Done";
      } else {
        itemEl.classList.add("done");
        checkBtnEl.textContent = "Undone";
      }
    });

    const deleteBtnEl = document.createElement("button");
    deleteBtnEl.textContent = "Delete";

    deleteBtnEl.addEventListener("click", function () {
      itemEl.remove();
    });

    btnContainerEl.appendChild(checkBtnEl);
    btnContainerEl.appendChild(deleteBtnEl);

    // Thêm label và các nút vào trong item
    itemEl.appendChild(labelEl);
    itemEl.appendChild(btnContainerEl);

    // Thêm item vào trong danh sách
    listEl.appendChild(itemEl);

    // Resets
    newTaskInput.value = "";
    newTaskInput.focus();
  } else {
    alert("Ban can nhap vao 1 cai task");
  }
});

document.addEventListener("keypress", (event) => {
  // event.keyCode or event.which  property will have the code of the pressed key
  let key = event.key;

  // 13 points the enter key
  if (key === "Enter") {
    // call click function of the buttonn
    addTaskBtnEl.click();
  }
});
