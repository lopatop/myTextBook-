// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:
// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// Решение:

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
