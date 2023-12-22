"use strict";

// const person1 = {
//   name: "huy",
//   age: 27,
//   job: "Developer",
//   study: () => {
//     console.log("Studying...");
//   },
// };

// const person2 = {
//   name: "Cat Tuong",
//   age: 20,
//   job: "IT Comtor",
//   study: () => {
//     console.log("Studying...");
//   },
// };

// class Person {
//   #password;
//   constructor(name, age, job, password) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.#password = password;
//   }

//   study(subject) {
//     console.log(`Studying ${subject}...`);
//   }
// }

// const person1 = new Person("Huy", 27, "developer", "123456");
// const person2 = new Person("Cat Tuong", 20, "IT Comtor");
// const person3 = new Person("Ngoc Anh", 25, "Backend Dev");

// console.log(person1);

// AJAX: Async Javascript and JSON
// Pending
// Results:
// - Resolve
// - Reject

const response = fetch("https://dummyjson.com/product");

response
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.products);
  })
  .catch((error) => {
    console.log(error.message);
  });

const response2 = fetch("https://dummyjson.com/product/category/laptops");

response2
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.products);
  })
  .catch((error) => {
    console.log(error.message);
  });
