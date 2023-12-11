// DOM: Document Object Model

console.dir(document);
document.title = "LIKELION";

// Truy cập element trong HTML
console.log(document.head);
console.log(document.body);

console.log(document.querySelector("h1"));
console.log(document.querySelector(".text"));
console.log(document.querySelector("#paragraph"));
console.log(document.getElementById("paragraph"));

//

const headingEl = document.getElementById("heading");

console.log(headingEl.id);
console.log(headingEl.style.color);
console.log(headingEl.className);
console.log(headingEl.textContent);
console.log(headingEl.innerHTML);

// Truy cập vào thẻ img thông qua id
// Lấy ra các giá trị của các thuộc tính: src, alt, width, height, class, id
const imgEl = document.getElementById("banner");
console.log(imgEl.id);
console.log(imgEl.src);
console.log(imgEl.alt);
console.log(imgEl.style.width);
console.log(imgEl.style.height);
console.log(imgEl.className);

// const boxEl = document.getElementById("box");
// console.log(boxEl.innerHTML);
// console.log(boxEl.textContent);

// Thay đổi nội dung trong heading thành "Hi Huy"
headingEl.textContent = "Hi Huy";

// Thay đổi màu chữ thành màu đỏ và background thành màu xanh dương
// headingEl.style.color = "red";
// headingEl.style.border = "1px solid #000";
// headingEl.style.fontSize = "50px";
// headingEl.style.fontWeight = 400;
// headingEl.style.backgroundColor = "blue";
// headingEl.style.width = "400px";
// headingEl.style.height = "200px";

// const boxEl = document.getElementById("box");
// boxEl.style.display = "block";

// headingEl.classList.add("active");
// headingEl.classList.remove("active");
