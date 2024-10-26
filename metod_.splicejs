// fruits.splice(1, 2, 'new', 'new');

const res = (fruits, start, count, changeArr) => {
    const newArr = []
    for (let i = 0; i < fruits.length; i++) {
        if (i >= start && i < count + start) {
            newArr.push(changeArr[i - start])
        } else {
            newArr.push(fruits[i])
        }

    }
    return newArr
}