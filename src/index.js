// 1.1 Если а – четное посчитать а*б, иначе а+б  

function getSumOrMultiply(a, b) {
    if ( (a !== 0) && !a || (b !== 0) && ! b ) {
        return 'Please input right data!';
    }

    return a % 2 ===0 ? a * b : a + b;
}

// Определить какой четверти принадлежит точка с координатами (х,у)

function getPoint(num1, num2) {
    let result = "";

    if(!num1 ||num1 !==0 && !num2 || num2 !==0) {
        result = "Error! Please input right data!"
    }
    if (num1 === 0 && num2 === 0) {
        result = "Начало координат";
    } else if (num1 > 0 && num2 > 0) {
        result = "1-ая четверть";
    } else if (num1 < 0 && num2 > 0) {
        result = "2-ая четверть";
    } else if (num1 < 0 && num2 < 0) {
        result = "3-я четверть";
    } else if (num1 > 0 && num2 < 0) {
        result = "4-я четверть";
    } else if (num1 === 0 && num2 > 0) {
        result = "точка находится между 1-й и 2-й четвертями";
    } else if (num1 === 0 && num2 < 0) {
        result = "точка находится между 3-й и 4-й четвертями"
    } else if (num1 > 0 && num2 === 0) {
        result = "точка находится между 1-й и 4-й четвертями";
    } else if (num1 < 0 && num2 === 0) {
        result = "точка находится между 2-й и 3-й четвертями"
    }

    return result;
}

// Найти суммы только положительных из трех чисел

function getPosNumSum(num1, num2, num3) {
    let result = 0;

    if ( (num1 !== 0 && !num1) || (num2 !== 0 && !num2) || (num3 !==0 && !num3) ) {
        result = 'Error!';
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = 0;
    }
    num1 > 0 && (result += num1);
    num2 > 0 && (result += num2);
    num3 > 0 && (result += num3); 
    
    return result;
}



// Посчитать выражение макс(а*б*с, а+б+с)+3

function getMaxValue(num1, num2, num3) {
    let result = 0;

    if ( (num1 !== 0 && !num1) || (num2 !== 0 && !num2) || (num3 !==0 && !num3) ) {
        result = "Error!";
    } else if (num1 + num2 + num3 > num1 * num2 * num3) {
        result = (num1 + num2 + num3) + 3;
    } else if (num1 + num2 + num3 < num1 * num2 * num3) {
        result = (num1 * num2 * num3) + 3;
    }

    return result; 
}


// Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function getStudentRat(point) {
    let result = "";

    if ( (typeof point) !== 'number' ) {
        result = "Error!";
    } else if (point >= 0 && point <= 19) {
        result = "F";
    } else if (point >= 20 && point <= 39) {
        result = "E";
    } else if (point >= 40 && point <= 59) {
        result = "D";
    } else if (point >= 60 && point <= 74) {
        result = "C";
    } else if (point >= 75 && point <= 89) {
        result = "B";
    } else if (point >= 90 && point <= 100) {
        result = "A";
    } else if (point < 0) {
        result = "Please input a right data!";
    }
    
    return result;
}

// Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function getSumAndQuantity() {
    let sum = 0;
    let quantity = 0;
    let i = 1;

    for (i = 1; i < 99; i ++) {
        if (i % 2 === 0) {
        sum = sum + i;
        quantity ++;
        }
    }
    return `sum ${sum} and quantity ${quantity}`;
}
console.log(getSumAndQuantity());


// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function getSimpleNumber(number) {
    let result = "Simple";

    if (typeof number !== "number" || number === 0 || number < 0) {
        result = "Error!";
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0)     {
            result = "Complicated"; break;
        } else {
            return result;
        }
    }

    return result;
}

// +Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

function findFact(number) {
    let result = 1;
    let i = 1;

    if( (typeof number !== "number") || number < 0) {
        result = "Error!";
    }

    for (i = 1; i <= number; i++) { 
        result *= i;
    }
    
    return result;
}

// Посчитать сумму цифр заданного числа

function getSumDigitsNumber(number) {
    let result = 0;
    let i = 0;

    if( (typeof number !== "number" || number === 0) ) {
        result = "Please input a right data!";
    }
    while (number > 0 || number < 0) {
        i = number % 10;
        number = ( number - i ) / 10;
        result += i;
    }

    return result;
}  

// Найти минимальный элемент массива

function getMinArrElement(arr) {
    if (!arr || (arr.length === 0) || (typeof arr !== "object") ) {
        return  "Wrong input!"
    }

    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if ( min > arr[i]) {
            min = arr[i];
        }
    }
    
    return min;
}
 
// Найти максимальный элемент массива

function getMaxArrElement(arr) {
    if (!arr || (arr.length === 0) || (typeof arr !== "object") ) {
        return  "Wrong input!"
    }

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];    
        }
    }

    return max;
}

// Найти индекс минимального элемента массива

function getMinElementIndex(arr) {
    if (!arr || (arr.length === 0) || (typeof arr !== "object") ) {
        return  "Wrong input!"
    }

    let min = arr[0];
    let ind = 0;

    for (let i = 0; i < arr.length; i++) {
        if ( min > arr[i]) {
            min = arr[i];
            ind = i;
        }
    }

    return ind;
}


// Найти индекс максимального элемента массива

function getMaxElementIndex(arr) {
    if (!arr || (arr.length === 0) || (typeof arr !== "object") ) {
        return  "Wrong input!"
    }
    
    let max = arr[0];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            index = i; 
        }
    }

    return index;
}

function defineweekDay(number) {
    let result = '';

    if (number > 7 || number < 0 || !number) {
        result = ' ';
    };

    const weekDays = [' ', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
    
    for (let i = 0; i < weekDays.length; i++) {
        if (number === i) {
            result = weekDays[i];
        };
        
    }

    return result;
}