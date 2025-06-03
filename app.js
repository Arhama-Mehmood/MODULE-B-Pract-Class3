// Destructuring of Array

let [num1, , num3, , num5] = [1, 2, 3, 4, 5];
console.log(num3, num1, num5);

let [num6, num7, num8, [a, b, c]] = [1, 2, 3, [97, "Arhama", 0]];
console.log(b);

let [n, m, o = "Orange"] = ["Hi", "Hellooowwwww!!"];
console.log(o);

let {
  name,
  age,
  address: { home, street },
  hobbies,
} = {
  name: "Arhama",
  age: 20,
  address: {
    home: 130,
    street: 44,
    city: "Karachi",
  },
  hobbies: ["Coding", "Reading", "Writing"],
};
console.log(name, age, home, street, hobbies);

function collectData({ naam, umer }) {
  console.log(naam, umer);
}
let obj = { naam: "arhama hai", umer: "19 saal ki!" };
collectData(obj);

// Spread operator (...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let array = ["arhama", "mehmood"];
let array3 = [...array];
console.log(array3);

// Object
let object = { class: 1, amountOfCopies: 35, price: 100 };
let object2 = { ...object, amountOfCopies: 40, price: 120 };
console.log(object2);

// Nested Objects

let obj1 = {
  name: "Arhama",
  course: {
    course_name: "web and mobile",
    timing: {
      time1: "6 - 9",
      time2: "12 -3",
    },
  },
};
let obj2 = { ...obj1, course: { ...obj1.course_name } };

obj2.course.course_name = "Full Stack Development";

let obj3 = { ...obj2, course: { ...obj2.course.timing } };
obj3.course.time1 = "6:30 - 9:30";

console.log(obj1, obj2, obj3);
