//Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


function sumInput() {
    let arrPrompt = [];
    let wordPrompt;
    let arrSum = 0;
    while (true) {
        wordPrompt = prompt("Введите число", 0);

        if (wordPrompt === null || wordPrompt === "" || isNaN(wordPrompt)) {
            break;
        }
        arrPrompt.push(+wordPrompt);
    }
    for (let i = 0; i < arrPrompt.length; i++) {
        arrSum = arrSum + arrPrompt[i];
    }
    console.log(arrPrompt);
    return arrSum;
}
console.log(sumInput());