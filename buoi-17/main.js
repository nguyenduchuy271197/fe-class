// Variables
// Data types: string, number, boolean
// Operators:
// - Arithmetic Operator: +, -, *, /, %, **
// - Assignment Operator: =, +=, -=,...
// - Comparison Operators: >, <, ==, >=, <=, !=
// - Logical Operators: && (AND), || (OR), ! (NOT)
// If / else if / else statement

// Đề bài 1:
// Sau khi mua sắm trên Shoppee xong thì tổng đơn hàng là 2000000
// - Nếu mà nhập đúng mã code là HUY123 thì sẽ được giảm 10%
// - Còn nếu mà nhập đúng mã code là CATTUONG123 thì sẽ được giảm 20%
// - Còn nếu mà nhập đúng mã code là NGOCANH123 thì sẽ giảm 30%
// - Còn nhập sai thì trả về giá gốc
// Hiển thị ra giá bill cuối cùng

// const total = 2000000;
// const code = "NGOCANH123";

// if (code == "HUY123") {
//   console.log(total * (1 - 0.1));
// } else if (code == "CATTUONG123") {
//   console.log(total * (1 - 0.2));
// } else if (code == "NGOCANH123") {
//   console.log(total * (1 - 0.3));
// } else {
//   console.log(total);
// }

// Đề bài 2: Điểm của toán, lý, hoá tương ứng là 10, 8, 9,
// - Nếu mà GPA lớn hơn hoặc bằng 8 thì mình là học sinh xuất sắc
// - Còn nếu mà GPA từ 6.5 tới 8 thì mình là học sinh khá
// - Còn nếu mà GPA từ 5 tới 6.5 thì mình là học sinh trung bình
// - Còn nếu mà GPA từ 0 tới 5 thì mình là học sinh kém
// - Còn lại thì không hợp lệ

// const mathScore = 2;
// const physicsScore = 2;
// const chemistryScore = 1;

// Kiểm định 3 giá trị toán lý hoá (0-10)

// if (mathScore < 0 || mathScore > 10) {
//   console.log("Điểm toán không hợp lệ");
// } else if (physicsScore < 0 || physicsScore > 10) {
//   console.log("Điểm lý không hợp lệ");
// } else if (physicsScore < 0 || physicsScore > 10) {
//   console.log("Điểm hoá không hợp lệ");
// } else {
//   const gpa = (mathScore + physicsScore + chemistryScore) / 3;

//   if (gpa >= 8) {
//     // Viết mệnh đề (câu lệnh) điều kiện
//     console.log("học sinh xuất sắc");
//   } else if (gpa >= 6.5 && gpa < 8) {
//     console.log("học sinh khá");
//   } else if (gpa >= 5 && gpa < 6.5) {
//     console.log("học sinh trung bình");
//   } else if (gpa >= 0 && gpa < 5) {
//     console.log("học sinh kém");
//   } else {
//     console.log("không hợp lệ");
//   }
// }

// Đề bài 3:
// - Nếu hôm nay trời mưa thì mình ở nhà
// - Còn nếu hôm nay trời lạnh thì mình đi đá bóng
// - Còn nếu hôm nay trời năng thì mình đi học
// - Còn lại thì đi xem phim

// const today = "thunder";

// if (today == "rainy") {
//   console.log("ở nhà");
// } else if (today == "coldy") {
//   console.log("đi đá bóng");
// } else if (today == "sunny") {
//   console.log("đi học");
// } else {
//   console.log("đi xem phim");
// }

// Bài tập về nhà
// Cho người dùng nhập vào chiều cao và cân nặng
// Nếu mà BMI từ 0 - 18.5 thì hiển thị ra "Bạn rất ốm, cần ăn uống nhiều hơn"
// Còn nếu mà BMI từ 18.5 - 24 thì hiển thị ra "Cơ thể ổn định, bạn có thể cải thiện hình thể bằng cách đi tập gym"
// Còn nếu mà BMI > 24 thì hiển thị ra "Bạn mập, cần ăn kiên nha"
// Trường hợp còn lại thì hiển thị ra "Không hợp lệ"

// const mathScore = 8;
// const physicsScore = 9;
// const chemistryScore = 10;

// const gpa = (mathScore + physicsScore + chemistryScore) / 3;

// const firstName = "Tường";
// const lastName = "Nguyễn";
// const city = "Pleiku";
// const province = "Gia Lai";

// const result =
//   "Mình là " + firstName + " " + lastName + " và mình sinh ra ở " + city + ", " + province;

// Template/Literal String
// 1. Backtick (`)
// 2. Bọc các biến của bạn lại như này: ${firstName}

// const result = `Mình là ${firstName} ${lastName}, và mình sinh ra ở ${city}, ${province}`;

// Type Conversion (Chuyển đổi kiểu dữ liệu)
// const physicsScore = "9";
// const chemistryScore = "10";

// // "8910"

// const gpa =
//   (Number(mathScore) + Number(physicsScore) + Number(chemistryScore)) / 3;

// Type Coercion (Ép kiểu dữ liệu)
// console.log("Điểm GPA của bạn là " + 9);

// console.log(mathScore === 8);

// const mathScore = "8";
// const mathScoreNumber = Number(mathScore);

// if (mathScoreNumber === 8) {
//   console.log(mathScoreNumber + 1);
// }

// Đề bài: Tính bill cho mỗi người
// Cho người dùng nhập vào số lượng người, tổng bill và tip
// Kiểm tra xem thử là số người, tổng bill và tip có hợp lệ hay không?
// - Tất cả các bill sẽ được giảm 10%
// - Bill trên 2tr sẽ được giảm 20% (sẽ không được cộng dồn vào 10% tất cả bill)
// - Nếu mà đi trên 4 người thì được bill giảm 10%
// Tính ra bao nhiêu tiền trên đầu người phải trả?

