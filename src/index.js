// 1.1 Если а – четное посчитать а*б, иначе а+б  

function sumOrMultiply(a, b) {
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
    };

    return result;
}

// Найти суммы только положительных из трех чисел

function getPosNumSum(num1, num2, num3) {
    let result = 0;

    if ( (num1 !== 0 || !num1) || (num2 !== 0 || !num2) || (num3 !== 0 ||!num3) ) {
        result = 'Error!';
    }
    if (num1 > 0 || num2 > 0 || num3 > 0) {
        result += num1 + num2 + num3;
    }
   
    return result;
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