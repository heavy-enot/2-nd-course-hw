function season() {
    let monthNumber = Number(prompt('Введите число'));


    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
        alert('Зима, холода, одинокие дома...');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Запахло весной, метелям отбой...');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Вот и лето наступает, помидоры расцветают...');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert('Осенью в дожливый серый день, проскакал по городу олень...');
    } else
        alert('А такой песни не существует, как и времени года, но вы всегда може сыграть снова');

    monthNumber++;
}



function wordGame() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits.sort(function () { return 0.5 - Math.random() });
    alert(fruits.join(', '));

    let firstAnswerUser = prompt('Чему равнялся первый элемент массива?');
    let secondAnswerUser = prompt('Чему равнялся последний элемент массива?');
    if (firstAnswerUser.toLowerCase() === fruits[0].toLowerCase() && secondAnswerUser.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
        alert('У вас хорошая память!');
    } else if (secondAnswerUser.toLowerCase() === fruits[fruits.length - 1].toLowerCase() ||
        firstAnswerUser.toLowerCase() === fruits[0].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Увы, ответы неверны ((');
    }
}