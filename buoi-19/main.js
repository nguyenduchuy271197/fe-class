// Functions (Hàm)
// function calculateBillPerPerson(numOfPeople, bill, tipPercent) {
//   let discountPercent = 0;

//   if (numOfPeople >= 0 && bill >= 0 && tipPercent >= 0) {
//     // Tất cả các bill đều được giảm 10%
//     if (bill >= 2000000) {
//       discountPercent = discountPercent + 0.2;
//     } else {
//       discountPercent = discountPercent + 0.1;
//     }

//     // Sau khi xét điều kiện đi trên 4 người
//     if (numOfPeople >= 4) {
//       discountPercent = discountPercent + 0.1;
//     }

//     // Calculate the bill
//     const billAfterDiscount = bill - bill * discountPercent;
//     const tip = billAfterDiscount * (tipPercent / 100);
//     const totalBill = billAfterDiscount + tip;
//     const paymentPerPerson = totalBill / numOfPeople;

//     return paymentPerPerson;
//   } else {
//     return "Đầu vào ko hợp lệ";
//   }
// }

// // Có thể tái sử dụng code
// const eachPerson = calculateBillPerPerson(4, 3000000, 10);
// const eachPerson2 = calculateBillPerPerson(1, 500000, 20);
// const eachPerson3 = calculateBillPerPerson(6, 1000000, 12);
// console.log(eachPerson);
// console.log(eachPerson2);
// console.log(eachPerson3);

// Định nghĩa hàm
function f(x) {
  return 2 * x + 1;
}

// Gọi/Sử dụng hàm
// const result = f(1);

// Định nghĩa hàm tính diện tích hình chữ nhật
// 1. Xác định được những tham số nào (inputs) cần phải có (width, height)
// 2. Xử lí logic tính toán (height * width)
// 3. Trả về 1 giá trị cho hàm

// Định nghĩa hàm
// function calculateArea(height, width) {
//   if (height < 0 || width < 0) {
//     return "With và height không hợp lệ";
//   } else {
//     const area = height * width;
//     return area;
//   }
// }

// Gọi/Sử dụng hàm
// console.log(calculateArea(10, 3));
// console.log(calculateArea(50, 10));
// console.log(calculateArea(20, 4));
// console.log(calculateArea(-20, -4));
// console.log(calculateArea(20, 4));

// Định nghĩa hàm tính BMI
// function calculateBMI(height, weight) {
//   if (height < 0 || weight < 0) {
//     return "Weight và height không hợp lệ";
//   } else {
//     const bmi = weight / (height / 100) ** 2;
//     return bmi;
//   }
// }

// console.log(calculateBMI(170, 60));
// console.log(calculateBMI(180, 75));
// console.log(calculateBMI(160, 50));
// console.log(calculateBMI(-150, -45));

// Array

// Data types
// - string: "Hi", "Tuong", "Huy", "123213"
// - number: 0, 1, -1, 1.4545345, 10.23
// - boolean: true, false
// - array

// const name = "Huy";
// const age = 28;
// const hasDegree = true;
// const products = [
//   "Laptop",
//   "Smartphone",
//   "Headphone",
//   "Tablet",
//   "Camera",
//   "Monitor",
// ];

// const scores = [10, 8, 10, 7.5, 6, 8];

// Lấy phần tử trong mảng
// console.log(products[4]);

// Thêm phần từ vào cuối mảng
// products.push("Doll");
// products.push("Robot");

// console.log(products);

// Loại bỏ phần tử cuối mảng
// products.pop();
// products.pop();
// products.pop();

// console.log(products);

// const myFriends = ["Cat Tuong", "Ngoc Anh", "Trang", "Huy"];
// const yourFriends = ["Minh", "Tien", "Nhi"];

// Nối 2 mảng
// const group = myFriends.concat(yourFriends);
// console.log(group);

// Bài tập:
// - Đầu tiên cho 2 mảng rỗng (ctScores, naScores)
// - Thêm tất cả các điểm số từ trước tới giờ vào trong 2 mảng trên sử dụng phương thức push()
// - Nối 2 mảng lại với nhau
// - Hiển thị mảng đó ra trong console

const ctScores = [];
const naScores = [];

ctScores.push(10);
ctScores.push(8);
ctScores.push(10);
ctScores.push(7.5);
ctScores.push(6);
ctScores.push(8);

naScores.push(9);
naScores.push(8);
naScores.push(10);
naScores.push(7);

const scores = ctScores.concat(naScores);

console.log(scores);
