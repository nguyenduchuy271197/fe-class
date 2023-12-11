// Variables
// Data types
// Operators
// - Arithmetic Operators: +, -, *, /, **, %
// - Assignment Operators: =, +=, -=, *=, /=
// - Comparison Operators: >, <, ==, >=, <=, !=
// - Logical Operators: && (AND), || (OR), ! (NOT)
// if/else statement

// const num1 = 30;
// const num2 = 20;
// const isNumberGreater = num1 > num2;

// const age = 18;
// const isOver18 = age >= 18;

// const inputPassword = "123456";
// const registeredPassword = "123456";
// const isLoginSuccessful = inputPassword == registeredPassword;

// const width = 30;
// const height = 10;
// const area = width * height;
// console.log(area);

// const originalBill = 2000000;
// const discount = 0.2;

// const payment = originalBill * (1 - discount);
// console.log(payment);

// const mathScore = 10;
// const physicsScore = 8.5;
// const chemistryScore = 3;

// const averageScore = (mathScore + physicsScore + chemistryScore) / 3;

// console.log(averageScore);

// const height = 170;
// const weight = 50;
// const bmi = weight / (height / 100) ** 2;

// let height = 170;
// height += 10;
// height -= 10;
// height *= 10;
// height /= 17;

// const isOver18 = age >= 18; // false

// Nếu bạn là nữ và lớn hơn 18 tuổi và đi 1 mình thì bạn được xem phim
// const age = 20;
// const gender = "female";
// const isAlone = true;

// const canWatchMovie = age >= 18 && gender == "female" && isAlone == true;

// console.log(canWatchMovie);

// Để nhận được học bổng thì diểm GPA của em phải lớn hơn hoặc bằng 8 và hạnh kiểm của em là loại Giỏi

// const gpa = 7;
// const conduct = "Kém";

// const hasScholarship = gpa >= 8 && conduct == "Giỏi";

// console.log(hasScholarship);

// Để nhận được quà thì bạn phải từ 18 - 30 tuổi và bạn là nữ
// const age = 40;
// const gender = "female";

// const hasGifts = age >= 18 && age <= 30 && gender == "female";

// console.log(hasGifts);

// Nếu mà các bạn đi ăn vào thứ 7 và chủ nhật thì các bạn sẽ được discount
// const eatingDate = "Monday";

// const hasDiscount = eatingDate == "Saturday" || eatingDate == "Sunday";

// Nếu bạn là nữ hoặc bạn lớn hơn 18 tuổi hoặc bạn đi 1 mình thì bạn được xem phim
// const age = 20;
// const gender = "male";
// const isAlone = false;

// const canWatchMovie = age >= 18 || gender == "female" || isAlone == true;

// console.log(canWatchMovie);

// Tính diện tích của hình chữ nhật, width và height
// const width = 10;
// const height = 20;

// const isLegal = height >= 0 && width >= 0;

// console.log(isLegal);

// Để mà có được voucher thì bạn phải từ độ tuổi từ 18 - 25, hoặc là bạn có thẻ hssv
// const age = 17;
// const isStudent = false;

// const hasVoucher = (age >= 18 && age <= 25) || isStudent == true;

// console.log(hasVoucher);

// Để mà cua được trai, bạn chỉ cần 1 là xinh, 2 là giỏi
// const isPretty = false;
// const isClever = false;

// const hasBoyfriend = isPretty == true || isClever == true;
// console.log(hasBoyfriend);

// const isWeekend = false;
// console.log(!isWeekend);

// Nếu hôm nay trời mưa thì mình sẽ không đi xem phim, ngược lại thì mình sẽ đi xem phim

// const weather = "cold";
// if (weather == "rainy") {
//   console.log("Khong di xem phim");
// } else {
//   console.log("Di xem phim");
// }

// Nếu mà bạn từ 18 - 25 tuổi thì bạn sẽ nhận được quà, còn không thì bạn sẽ không nhận được quà!
// const age = 24;

// if (age >= 18 && age <= 25) {
//   console.log("Bạn nhận được quà");
// } else {
//   console.log("Bạn không nhận được quà");
// }

// Nếu mã khuyến mãi của bạn nhập là HUY123 thì bạn sẽ được discount, còn không thì bạn không được discount

// const code = "huy123";

// if (code == "HUY123") {
//   console.log("Bạn sẽ được giảm giá");
// } else {
//   console.log("Bạn không được giảm giá");
// }

// Tính chỉ số BMI
// Cho người dùng nhập vào chiều cao và cân nặng
// Kiểm tra xem thử là chiều cao và cân nặng có hợp lệ không?
// - Chiều cao nhập vào phải lớn hơn 100 cm
// - Cân nặng nhập vào phải lớn hơn 20 kg
// Nếu mà không hợp lệ thì in ra dòng chữ "Chiều cao hoặc cân nặng không hợp lệ", còn không thì in ra chỉ số BMI

// const height = 170; // cm
// const weight = 60; // kg

// if (height >= 100 && weight >= 20) {
//   // Calculate BMI
//   const bmi = weight / (height / 100) ** 2;
//   console.log(bmi);
// } else {
//   console.log("Chiều cao hoặc cân nặng không hợp lệ");
// }

// Đề bài: Tính bill cho mỗi người
// Cho người dùng nhập vào số lượng người, tổng bill và tip
// Kiểm tra xem thử là số người, tổng bill và tip có hợp lệ hay không?
// Tính ra bao nhiêu tiền trên đầu người phải trả?
// - Nếu mà đi trên 4 người thì được bill giảm 10%
// - Nếu mà bill trên 2tr sẽ được bill giảm 5%
// Nếu mà không hợp lệ thì in ra dòng chữ "Đầu vào không hợp lệ", còn không thì in ra giá tiền mỗi ng ười phải trả

// Buớc 1: Cho người dùng nhậ vào số lượng người, bill (VND) và tip (%)
// const numOfPeople = 4;
// const bill = 3500000; // VND
// const tipPercent = 10; // %

// // Tạo ra biến discountPercent để lưu trữ phần trăm discount
// let discountPercent = 0;

// // Bước 2: Kiểm tra xem thử là số người, tổng bill và tip có hợp lệ hay không?
// if (numOfPeople >= 0 && bill >= 0 && tipPercent >= 0) {
//   // Bước 3: Kiểm tra điều kiện để xem thử là mình được giảm bao nhiêu phần trăm?
//   if (numOfPeople >= 4) {
//     discountPercent = discountPercent + 0.1;
//   }

//   if (bill >= 2000000) {
//     discountPercent = discountPercent + 0.05;
//   }

//   // Bước 4: Tính ra bill của mình sau khi được giảm
//   const billAfterDiscount = bill * (1 - discountPercent);

//   // Buớc 5: Tính tiền tips và tính tổng tiền bao gồm tip
//   const tip = billAfterDiscount * (tipPercent / 100);
//   const totalBill = billAfterDiscount + tip;

//   // Bước 6: Tính tiền cho mỗi đầu người
//   const paymentPerPerson = totalBill / numOfPeople;
//   console.log(paymentPerPerson);
// } else {
//   console.log("Đầu vào ko hợp lệ");
// }
