// если первое число четное найти произведение и  сумму, если нечетное.

describe('sumOrMultiply', function() {
    it('should be defined', function() {
        assert.isDefined(sumOrMultiply);
    });

    it('should return sum(5, 5)', function() {
        const firstNum = 5;
        const secondNum = 5;
        const expected = 10;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return product (-4, 5)', function() {
        const firstNum = -4;
        const secondNum = 5;
        const expected = -20;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return product (0, 5)', function() {
        const firstNum = 0;
        const secondNum = 5;
        const expected = 0;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return product (undefined, undefined)', function() {
        const firstNum = undefined;
        const secondNum = undefined;
        const expected = 'Please input right data!';

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });
}) 

describe('getPoint', () => {
    it('should be defined', () => {
        assert.isDefined(getPoint)
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
})

describe('getPosNumSum', () => {
    it('should be defined', () => {
        assert.isDefined(getPosNumSum)
    });

    it('should return error!', () => {
        const num1 = 0;
        const num2 = undefined;
        const num3 = null;

        const expected = 'Error!';

        const actual = getPosNumSum(num1, num2, num3);

        assert.deepEqual(actual, expected);
    });

    it('should return result', () => {
        const num1 = 1;
        const num2 = 1;
        const num3 = 3;

        const expected = num1 + num2 + num3;

        const actual = getPosNumSum(num1, num2, num3);

        assert.deepEqual(actual, expected);
    });

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