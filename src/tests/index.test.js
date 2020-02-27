// если первое число четное найти произведение и  сумму, если нечетное.

describe('Conditional operators', () => {
    
    describe('getSumOrMultiply', function() {
        it('should be defined', function() {
            assert.isDefined(getSumOrMultiply);
        });

        it('should return sum(5, 5)', function() {
            const firstNum = 5;
            const secondNum = 5;
            const expected = 10;

            const actual = getSumOrMultiply(firstNum, secondNum);

            assert.deepEqual(actual, expected);
        });

        it('should return product (-4, 5)', function() {
            const firstNum = -4;
            const secondNum = 5;
            const expected = -20;

            const actual = getSumOrMultiply(firstNum, secondNum);

            assert.deepEqual(actual, expected);
        });

        it('should return product (0, 5)', function() {
            const firstNum = 0;
            const secondNum = 5;
            const expected = 0;

            const actual = getSumOrMultiply(firstNum, secondNum);

            assert.deepEqual(actual, expected);
        });

        it('should return product (undefined, undefined)', function() {
            const firstNum = undefined;
            const secondNum = undefined;
            const expected = 'Please input right data!';

            const actual = getSumOrMultiply(firstNum, secondNum);

            assert.deepEqual(actual, expected);
        });

        it('should return product (null, null)', function() {
            const firstNum = null;
            const secondNum = null;
            const expected = 'Please input right data!';

            const actual = getSumOrMultiply(firstNum, secondNum);

            assert.deepEqual(actual, expected);
        });

        it('should return product (\'\',\'\')', function() {
            const firstNum = '';
            const secondNum = '';
            const expected = 'Please input right data!';

            const actual = getSumOrMultiply(firstNum, secondNum);

            assert.deepEqual(actual, expected);
        });
    }) 

    // Определить какой четверти принадлежит точка с координатами (х,у)

    describe('getPoint', () => {
        it('should be defined', () => {
            assert.isDefined(getPoint);
        });

        it('should return \'Начало координат\' ', () => {
            const num1 = 0;
            const num2 = 0;
            const expected = 'Начало координат';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'1-ая четверть\' ', () => {
            const num1 = 1;
            const num2 = 1;
            const expected = '1-ая четверть';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'2-ая четверть\' ', () => {
            const num1 = -1;
            const num2 = 1;
            const expected = '2-ая четверть';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'3-я четверть\' ', () => {
            const num1 = -1;
            const num2 = -1;
            const expected = '3-я четверть';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'4-я четверть\' ', () => {
            const num1 = 1;
            const num2 = -1;
            const expected = '4-я четверть';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Error! Please input right data!\' ', () => {
            const num1 = undefined;
            const num2 = 0;
            const expected = 'Error! Please input right data!';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'точка находится между 1-й и 2-й четвертями\' ', () => {
            const num1 = 0;
            const num2 = 1;
            const expected = 'точка находится между 1-й и 2-й четвертями';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'точка находится между 3-й и 4-й четвертями\' ', () => {
            const num1 = 0;
            const num2 = -1;
            const expected = 'точка находится между 3-й и 4-й четвертями';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'точка находится между 1-й и 4-й четвертями\' ', () => {
            const num1 = 1;
            const num2 = 0;
            const expected = 'точка находится между 1-й и 4-й четвертями';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });

        it('should return \'точка находится между 2-й и 3-й четвертями\' ', () => {
            const num1 = -1;
            const num2 = 0;
            const expected = 'точка находится между 2-й и 3-й четвертями';

            const actual = getPoint(num1, num2);

            assert.deepEqual(actual, expected);
        });
    })

    //  Найти суммы только положительных из трех чисел

    describe('getPosNumSum', () => {
        it('should be defined', () => {
            assert.isDefined(getPosNumSum);
        });

        it('should return error!', () => {
            const num1 = null;
            const num2 = undefined;
            const num3 = null;
            const expected = 'Error!';

            const actual = getPosNumSum(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });

        it('should return result', () => {
            const num1 = -1;
            const num2 = 1;
            const num3 = 1;
            const expected = num2 + num3;

            const actual = getPosNumSum(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });

        it('should return result', () => {
            const num1 = 1;
            const num2 = -1;
            const num3 = 1;
            const expected = num1 + num3;

            const actual = getPosNumSum(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });

        it('should return result', () => {
            const num1 = 1;
            const num2 = 1;
            const num3 = -1;
            const expected = num1 + num2;

            const actual = getPosNumSum(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });
    })

    // Посчитать выражение макс(а*б*с, а+б+с)+3

    describe('getMaxValue', () => {
        it('function defined', () => {
            assert.isDefined(getMaxValue);
        });

        it('should return Error!', () => {
            const num1 = undefined;
            const num2 = "";
            const num3 = undefined;
            const expected = 'Error!';

            const actual = getMaxValue(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });

        it('should return result when sum > production ', () => {
            const num1 = 1;
            const num2 = 1;
            const num3 = 1;
            const expected = (num1 + num2 + num3) + 3;

            const actual = getMaxValue(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });

        it('should return result when sum < production', () => {
            const num1 = 2;
            const num2 = 1;
            const num3 = 4;
            const expected = 11;

            const actual = getMaxValue(num1, num2, num3);

            assert.deepEqual(actual, expected);
        });
    })

    // Написать программу определения оценки студента по его рейтингу

    describe('getStudentRat', () => {
        it('function defined', () => {
            assert.isDefined(getStudentRat);
        });

        it('return result \'Error!\' ', () => {
            const point = 'jj';
            const expected = 'Error!';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'F\' when point >= 0 and point <= 19 ', () => {
            const point = 9;
            const expected = 'F';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'E\' when point >= 20 and point <= 39 ', () => {
            const point = 29;
            const expected = 'E';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'D\' when point >= 40 and point <= 59 ', () => {
            const point = 45;
            const expected = 'D';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'C\' when point >= 60 and point <= 74 ', () => {
            const point = 65;
            const expected = 'C';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'B\' when point >= 75 and point <= 89 ', () => {
            const point = 88;
            const expected = 'B';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'A\' when point >= 90 and point <= 100 ', () => {
            const point = 92;
            const expected = 'A';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });

        it('return result \'Please input a right data!\'', () => {
            const point = -5;
            const expected = 'Please input a right data!';

            const actual = getStudentRat(point);

            assert.deepEqual(actual, expected);
        });
    })
})

describe('Cycles', () => {
 
    // Найти сумму четных чисел и их количество в диапазоне от 1 до 99

    describe('getSumAndQuantity', () => {
        it('function \'getSumAndQuantity\' defined', () => {
            assert.isDefined(getSumAndQuantity);
        });

        it('should return result \'sum 2450 and quantity 49\'', () => {
            const expected = `sum 2450 and quantity 49`;

            const actual = getSumAndQuantity();

            assert.deepEqual(actual, expected)
        });
    })

    // Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

    describe('getSimpleNumber', () => {
        it('function \'getSimpleNumber\' defined',() => {
            assert.isDefined(getSimpleNumber);
        });

        it('should return result \'Error!\'', () => {
            const number = -2;
            const expected = 'Error!';

            const actual = getSimpleNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'simple\'', () => {
            const number = 5;
            const expected = 'Simple';

            const actual = getSimpleNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'Complicated\'', () => {
            const number = 6;
            const expected = 'Complicated';

            const actual = getSimpleNumber(number);

            assert.deepEqual(actual, expected);
        });

    })

    // +Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

    describe('findFact', () => {
        it('function \'findFact\' defined', () => {
            assert.isDefined(findFact);
        });

        it('should return result \'Error!\'', () => {
            const number = -5;
            const expected = 'Error!';

            const actual = findFact(number);

            assert.deepEqual(actual, expected)
        });

        it('should return result \' Factorial of a given number\'', () => {
            const number = 3;
            const expected = 6;

            const actual = findFact(number);

            assert.deepEqual(actual, expected)
        });
        
    })

    // Посчитать сумму цифр заданного числа

    describe('getSumDigitsNumber', () => {
        it('function \'getSumDigitsNumber\' defined', () => {
            assert.isDefined(getSumDigitsNumber);
        });

        it('should return result \'Please input a right data!\'', () => {
            const number = 0;
            const expected = 'Please input a right data!';

            const actual = getSumDigitsNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'sum \'', () => {
            const number = 56;
            const expected = 11;

            const actual = getSumDigitsNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'sum \'', () => {
            const number = -56;
            const expected = -11;

            const actual = getSumDigitsNumber(number);

            assert.deepEqual(actual, expected);
        });
    })
})

describe('Arrays', () => {

    // Найти минимальный элемент массива

    describe('getMinArrElement', () => {
        it('function \'getMinArrElement\' defined', () => {
            assert.isDefined(getMinArrElement);
        });

        it('should return \'Wrong input!\' when arr []', () => {
            const arr = [];
            const expected = 'Wrong input!';

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr null', () => {
            const arr = null;
            const expected = 'Wrong input!';

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr undefined', () => {
            const arr = undefined;
            const expected = 'Wrong input!';

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [1]', () => {
            const arr = [1];
            const expected = 1;

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [1, 2, 3]', () => {
            const arr = [1, 2, 3];
            const expected = 1;

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [1, 2]', () => {
            const arr = [1, 2];
            const expected = 1;

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [ ]', () => {
            const arr = [ ];
            const expected = 'Wrong input!';

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [-1]', () => {
            const arr = [-1];
            const expected = -1;

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [-1, -2]', () => {
            const arr = [-1, -2];
            const expected = -2;

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [1, 2, -6]', () => {
            const arr = [1, 2, -6];
            const expected = -6;

            const actual = getMinArrElement(arr);

            assert.deepEqual(actual, expected);
        });
    })

    // Найти максимальный элемент массива

    describe('getMaxArrElement', () => {
        it('function \'getMaxArrElement\' defined', () => {
            assert.isDefined(getMinArrElement);
        });

        it('should return \'Wrong input!\' when \'arr = []\'', () => {
            const arr = [];
            const expected = 'Wrong input!';

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr \'null\'', () => {
            const arr = null;
            const expected = 'Wrong input!';

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = undefined\'', () => {
            const arr = undefined;
            const expected = 'Wrong input!';

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = [ ]\'', () => {
            const arr = [ ];
            const expected = 'Wrong input!';

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = \'\' \' ', () => {
            const arr = '';
            const expected = 'Wrong input!';

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = [1, 1]\'', () => {
            const arr = [1, 1];
            const expected = 1;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [1]\'', () => {
            const arr = [1];
            const expected = 1;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [1, 2]\'', () => {
            const arr = [1, 2];
            const expected = 2;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [1, 2, 3] \'', () => {
            const arr = [1, 2, 3];
            const expected = 3;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [1, -2] \'', () => {
            const arr = [1, -2];
            const expected = 1;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [0, -2] \'', () => {
            const arr = [0, -2];
            const expected = 0;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });
        
        it('should return result when \'arr = [0, 2, -56]\'', () => {
            const arr = [0, 2, -56];
            const expected = 2;

            const actual = getMaxArrElement(arr);

            assert.deepEqual(actual, expected);
        });
    })

    // Найти индекс минимального элемента массива

    describe('getMinElementIndex', () => {
        it('function \'getMinElementIndex\' defined', () => {
            assert.isDefined(getMinArrElement);
        });

        it('should return \'Wrong input!\' when arr []', () => {
            const arr = [];
            const expected = 'Wrong input!';

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr null', () => {
            const arr = null;
            const expected = 'Wrong input!';

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr undefined', () => {
            const arr = undefined;
            const expected = 'Wrong input!';

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr [ ]', () => {
            const arr = [ ];
            const expected = 'Wrong input!';

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr 0', () => {
            const arr = 0;
            const expected = 'Wrong input!';

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr [1]', () => {
            const arr = [1];
            const expected = 0;

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when arr \'\'', () => {
            const arr = '';
            const expected = 'Wrong input!';

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [6, 2]', () => {
            const arr = [6, 2];
            const expected = 1;

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [6, 2, -6]', () => {
            const arr = [6, 2, -6];
            const expected = 2;

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr [0, 0]', () => {
            const arr = [0, 0];
            const expected = 0;

            const actual = getMinElementIndex(arr);

            assert.deepEqual(actual, expected);
        });
    })

    // Найти индекс максимального элемента массива

    describe('getMaxElementIndex', () => {
        it('function \'getMaxElementIndex\' defined', () => {
            assert.isDefined(getMaxElementIndex);
        });

        it('should return \'Wrong input!\' when \'arr = []\'', () => {
            const arr = [];
            const expected = 'Wrong input!';

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = null\'', () => {
            const arr = null;
            const expected = 'Wrong input!';

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = undefined\'', () => {
            const arr = undefined;
            const expected = 'Wrong input!';

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = 0\'', () => {
            const arr = 0;
            const expected = 'Wrong input!';

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return \'Wrong input!\' when \'arr = undefined\'', () => {
            const arr = undefined;
            const expected = 'Wrong input!';

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [0, 1, 6]\'', () => {
            const arr = [0, 1, 6];
            const expected = 2;

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [0]\'', () => {
            const arr = [0];
            const expected = 0;

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [0, -1, -6]\'', () => {
            const arr = [0, -1, -6];
            const expected = 0;

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when \'arr = [0, 1]\'', () => {
            const arr = [0, 1];
            const expected = 1;

            const actual = getMaxElementIndex(arr);

            assert.deepEqual(actual, expected);
        });
    })
})


describe('defineWeekDay', () => {
    it('should be defined', () => {
        assert.isDefined(defineweekDay)
    });

    it('should return \' \' (0)', () => {
        const number = null;
        const expected = ' ';

        const actual = defineweekDay(number);

        assert.deepEqual(actual, expected);
    });

    it('should return Monday (1)', () => {
        const number = 1;
        const expected = 'Monday';

        const actual = defineweekDay(number);

        assert.deepEqual(actual, expected);
    });
})