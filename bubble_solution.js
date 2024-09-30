const score = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];


const costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .27, .29];




//Bubble solution #0 score: 60
//Bubble solution #1 score: 50
//Bubble solution #2 score: 60
//Bubbles tests: 36

//Highest bubble score: 69
//Solutions with highest score: #11, #18

//Bubble Solution #11 is the most cost effective


function getBestScores(array, maxMalue) {
    const numberArrCore = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxMalue) {
            numberArrCore.push(i);
        }
    }
    return numberArrCore
}

function printAndGetHighScore(array) {
    let output;
    let highBubble = 0;

    for (let i = 0; i < array.length; i++) {
        output = `Bubble solution #${i} score: ${array[i]}`;
        console.log(output);
        if (array[i] > highBubble) {
            highBubble = array[i];

        }
    }
    return highBubble
}

function getMostCostEffectiveSolution(resultArray, costsArray, maxValue) {
    let index;
    let cost = 100;
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] === maxValue) {
            if (costsArray[i] < cost) {
                cost = costsArray[i]
                index = i;
            }
        }
    }
    return index
}

//print score and get higt score
const highBubble = printAndGetHighScore(score);
console.log(`Bubbles tests: ${score.length}`);
console.log(`Highest bubble score: ${highBubble}`);

//get best scores
const bestSolutions = getBestScores(score, highBubble);
console.log(`Solutions with highest score: ${getBestScores(score, highBubble)}`);

//get most cost effective solution

const mostCostEffective = getMostCostEffectiveSolution(score, costs, highBubble);
console.log(`Bubble solution #${mostCostEffective} is the most cost effective`);
