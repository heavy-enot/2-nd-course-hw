let a = 10;
alert(a);
a = 20;
alert(a);
// Задание 1;

const iphoneBirthday = 2007;
alert(iphoneBirthday);
// Задание 2;

const authorJs = "Brendan Eich";
alert(authorJs);
// Задание 3;

let b = 10;
let c = 2;
alert(`Сумма: ` + (b + c));
alert(`Разность: ` + (b - c));
alert(`Произведение: ` + (b * c));
alert(`Деление: ` + (b / c));
// Задание 4;

let result = 2 ** 5;
alert(result);
// Задание 5;

let x = 9;
let y = 2;
alert(9 % 2);
// Задание 6;

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// Задание 7;


let age = prompt('Сколько вам лет?');
alert(age);
// Задание 8;


let user = {
    name: "Alex",
    age: 30,
    isAdmin: true
};
// Задание 9;

user[`city of residence`] = "London";
// Задание 9.1;

user.age = 40;
// Задание 9.2;

delete user[`city of residence`];
// Задание 9.3;

let info = prompt("Какую информацию хотите узнать о пользователе?", ("name"), ("age"), ("isAdmin"));
alert(user[info]);
// Задание 9.4;

let name = prompt("Напишите ваше имя");
alert("Привет " + name +"!");
// Задание 10.
