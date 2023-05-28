// let a = 10;
// alert(a);
// a = 20;
// alert(a);
// // Задание 1;

// const iphoneBirthday = 2007;
// alert(iphoneBirthday);
// // Задание 2;

// const authorJs = "Brendan Eich";
// alert(authorJs);
// // Задание 3;

// let b = 10;
// let c = 2;
// alert(`Сумма: ` + (b + c));
// alert(`Разность: ` + (b - c));
// alert(`Произведение: ` + (b * c));
// alert(`Деление: ` + (b / c));
// // Задание 4;

// let result = 2 ** 5;
// alert(result);
// // Задание 5;

// let x = 9;
// let y = 2;
// alert(9 % 2);
// // Задание 6;

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);
// // Задание 7;


// let age = prompt('Сколько вам лет?');
// alert(age);
// // Задание 8;


// let user = {
//     name: "Alex",
//     age: 30,
//     isAdmin: true
// };
// // Задание 9;

// user[`city of residence`] = "London";
// // Задание 9.1;

// user.age = 40;
// // Задание 9.2;

// delete user[`city of residence`];
// // Задание 9.3;

// let info = prompt("Какую информацию хотите узнать о пользователе?", ("name"), ("age"), ("isAdmin"));
// alert(user[info]);
// // Задание 9.4;

// let name = prompt("Напишите ваше имя");
// alert("Привет " + name +"!");
// // Задание 10.



// ДОМАШКА № 3

// let password = 'qwerty';
// let inputPassword = prompt('Введите пароль');
// if (inputPassword === password) {
//     console.log('Пароль введен верно');

// } else {
//     console.log('Пароль введен неверно');
// };
// // Задание 1;

// let c = 2;
// if (c > 0 && c < 10) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// };
// // Задание 2;

// let e = 1;
// let d = 52;
// (e > 100 || d > 100) ? console.log('верно'): console.log('неверно');
// // Задание 3;

// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));
// // Задание 4;

// let monthNumber = Number(prompt('Введите номер месяца'));
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зима, холода, одинокие дома...');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Запахло весной, метелям отбой...');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Вот и лето наступает, помидоры расцветают...');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осенью в дожливый серый день, проскакал по городу олень...');
//         break;

//     default:
//         console.log('А такой песни не существует, как и времени года');
//         break;
// };
// // Задание 5;

// let enterTheNumber = prompt('Введите любое число');
// if (isNaN(enterTheNumber) === false) {
//     console.log('number');
// } else {
//     console.log('nan')};
// if (enterTheNumber % 2 === 0) {
//     console.log('Число четное');
// } else {console.log('Число нечетное')};
// // Задание 7;

// let clientOS = Number(prompt('Введите 0, если у вас iOS или 1, если стоит Android'));
// if (clientOS === 1) {
//     console.log('Установите версию приложения для Android по ссылке');
// } else {
//     console.log('Установите версию приложения для iOS по ссылке');
// };
// // Задание 8;



// ДОМАШКА № 4

// let hi = 0;
// while (hi < 2) {
//     alert("привет!");
//     hi++
// }
// // Задание 1;

// let number = 0;
// while (number <= 5) {
//     console.log(number);
//     number++
// }
// // Задание 2;

// let variable = 7;
// while (variable <= 22) {
//     console.log(variable);
//     variable++
// }
// // Задание 3;

// const obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400'
// }
// for (const salary in obj) {
//     console.log(`${salary} - зарплата ${obj[salary]}`);
//     }
// // Задание 4;

// let n = 1000;
// let result = 0;
// while (n >= 50) {
//     n = n / 2;
//     result++
// }
// console.log(`итераций: ${result}, число: ${n}`);
// // Задание 5;

// let friday = 7;
// while (friday <= 31) {
//     console.log(`Сегодня пятница, ${friday}-ое число`);
//     friday += 7;
// }
// // Задание 6;

// Домашка 5

// function minNumber(a, b) {
//     if (a < b) {
//         return a;
// } else {
//         return b;
//     }
// }
//
// minNumber(16, 9);
// // Задание 1;

// let a = Number(prompt('введите число'));
// function evenNotEven(a) {
//     if (a % 2 === 0) {
//         return ('Четное');
// } else {
//         return ('нечетное');
//     }
// }
//
// evenNotEven(a);
// // Задание 2;

// function squareNumber(q) {
//     let total = q ** 2;
//     console.log(`квадрат числа равен ${total}`)
// }
//
// squareNumber(7);
// // Задание 3.1

// function squareNumber(q) {
//     let total = q ** 2;
//     return(`квадрат числа равен ${total}`)
// }

// squareNumber(5);
// // Задание 3.2

// let a = Number(prompt('Сколько вам лет?'));
// function age(a) {
//     if (a < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (a >= 0 && a <= 12){
//         alert('привет, друг!');
//     } else {
//         alert('Добро пожаловать!')
//     }
// }

// age(a);
// // Задание 4;

// let a = prompt('введите первое число');
// let b = prompt('введите второе число');
// function isNan(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// isNan(a, b);
// // Задание 5;

// let a = prompt('введите число');
// function isNan(a) {
//     if (isNaN(a)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return a ** 3;
//     }
// }

// isNan(a);
// // Задание 6;

// function getArea() {
//     return this.radius ** 2 * this.pi;
// }

// function getPerimeter() {
//     return 2 * this.pi * this.radius
// }

// const circle1 = {
//     radius: 3,
//     pi: 3.14,
//     circleArea: getArea
// };

// const circle2 = {
//     radius: 7,
//     pi: 3.14,
//     circlePerimeter: getPerimeter
// };

// console.log(circle1.circleArea());
// console.log(circle2.circlePerimeter());
// // Задание 7;

function season() {
    let monthNumber = Number(prompt('Введите число'));


    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
        console.log('Зима, холода, одинокие дома...');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('Запахло весной, метелям отбой...');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('Вот и лето наступает, помидоры расцветают...');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log('Осенью в дожливый серый день, проскакал по городу олень...');
    } else
        console.log('А такой песни не существует, как и времени года, но вы всегда може сыграть снова');

    monthNumber++;
}
// season(monthNumber);
// // Задание 8;

Домашка 6;

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        console.log(numbers[i]);
        break;
    }
    console.log(numbers[i]);
}
// Задание 1;

const numbers = [1, 5, 4, 10, 0, 3];
console.log(numbers.indexOf(4));
// Задание 2;


let numbers = [1, 5, 4, 10, 0, 3];
numbers = numbers.join(' ');
console.log(numbers);
// Задание 3;


const arr = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for (let e = 0; e < 3; e++) {
        innerArr.push(1);
    }
    arr.push(innerArr);
}
console.log(arr);
// Задание 4;


let numbers = [1, 1, 1];
numbers.push(2, 2, 2);
console.log(numbers);
// Задание 5;


const arr = [9, 8, 7, 'a', 6, 5];
arr.sort().pop();
console.log(arr)
// Задание 6;


let a = Number(prompt('введите число'));
let numbers = [9, 8, 7, 6, 5];
let userNumber = numbers.includes(a);
console.log(userNumber);
// Задание 7;


let a = 'abcdef';
a = a.split('').reverse('').join('');
console.log(a);
//Задание 8;


const arr = [[1, 2, 3], [4, 5, 6]];
const result = [].concat(arr[0], arr[1]);
console.log(result);

// или можно через flat:

const arr = [[1, 2, 3], [4, 5, 6]];
const arr1 = arr.flat();
console.log(arr1);
// Задание 9;


const randomNumbers = [1, 2, 3, 6, -9, 7, 9, 3, 0, 345, 57];
for (let i = 0; i < (randomNumbers.length - 1); i++) {
    console.log(randomNumbers[i] + randomNumbers[i + 1])
};
console.log(randomNumbers[(randomNumbers.length - 1)]);
// Задание 10;


const randomNumbers = [5, 2, 3, 6, 0, 345, 57];
const result = randomNumbers.map(item => (item ** 2));
console.log(result);
// Задание 11;


const getLength = source => source.map(str => str.length);
console.log(getLength(['one', 'sound', 'underground']));
// Задание 12;


let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
let minusNumbers = arr.filter(function (item) {
    if (item <= 0) {
        return true;
    } else {
        return false;
    }
});
console.log(minusNumbers);
// Задание 13;