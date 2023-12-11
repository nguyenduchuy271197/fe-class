// Variables
// Data types:
// - string
// - number
// - boolean
// - array
// Operators:
// - arithmetic operators: +, -, *, /, **, %, ...
// - assignment operators: =, +=, -=, *=, ...
// - comparison operators: >, <, >=, <=, ==, ===, !=
// - logical operators: && (AND), || (OR), ! (NOT)
// if/else if/else statements
// Template string (Optional)
// Type conversion & Type coercion (Optional)
// Functions
// Loops

const products = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Tablets",
  "Camera",
  "Keyboard",
  "Mouse",
];

// console.log(products[0]);
// console.log(products[1]);
// console.log(products[2]);
// console.log(products[3]);
// console.log(products[4]);
// console.log(products[5]);
// console.log(products[6]);

// Số thứ tự ban đầu của mình là 0
// Hiển thị ra sản phẩm với số thứ tự là 0
// Số thứ tự tiếp theo của mình là 1
// Hiển thị ra sản phẩm với số thứ tự là 1

// Lặp lại 7 lần để hiển thị ra từng sản phẩm trong danh sách

// for (let i = 0; i <= 6; i++) {
//   console.log(products[i]);
// }

// In ra cho mình từ 1-20
// for (let num = 1; num <= 20; num++) {
//   console.log(num);
// }

// In ra cho mình số lẻ từ 1-20
// for (let i = 1; i <= 20; i++) {
//   // Kiểm tra xem thử là i có phải là số lẻ ko?
//   // Kiểm tra xem thử là i có chia hết cho 2 ko?
//   // Kiểm trả xem thử là số dư sau khi chia cho 2 có bằng 0 không?
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Cho các bạn 1 mảng các số và log ra cho mình những con số lẻ
// const numbers = [200, 51, 34, 57, 78, 98, 53, 23, 1, 20];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     console.log(numbers[i]);
//   }
// }

// Cho các bạn 1 mảng các số và log ra tổng của những con số lẻ
const numbers = [200, 51, 34, 57, 78, 98, 53, 23, 1, 20];

const numbers2 = [200, 51, 34, 57, 78, 98, 53, 23, 1, 20, 30, 35];

function calculateOddTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      total = total + array[i];
    }
  }
  return total;
}

// console.log(calculateOddTotal(numbers));
// console.log(calculateOddTotal(numbers2));
// console.log(calculateOddTotal([1, 2, 3, 4, 5]));

function getEvenNumbers(array) {
  const cart = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      cart.push(array[i]);
    }
  }

  return cart;
}

console.log(getEvenNumbers([100, 21, 13, 40, 51]));
console.log(getEvenNumbers([1, 1, 1, 1, 1]));
console.log(getEvenNumbers([2, 2, 2, 2, 2]));
