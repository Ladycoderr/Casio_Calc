
import  math from 'mathjs';

let currentValue;
let register;
let history;
let result;
let isMemoryMode;
let lastOpertate;
let digitLength;
let isValidValue

class CalculatorEngine {

    constructor() {
        currentValue = '';
        register = [];
        history = '';
        result = '';
        isMemoryMode = false;
        lastOpertate = [];
        digitLength = 8;
        isValidValue = true
    }

    inputDigit(digit) {

        if (isNaN(digit)) {
            throw Error('Only numeric input is allowed');
        }
        if (isMemoryMode) {
            currentValue = '';
            isMemoryMode = false;
        }

        if (currentValue.length > 0 && currentValue[0] === "0" && currentValue[1] !== ".") {
            currentValue = currentValue.slice(1, currentValue.length);
        }
        currentValue += digit;
        this.checkMoreThanDigitInType(currentValue);
        result = currentValue;
    }

    checkMoreThanDigitInType(value) {
        isValidValue = true;
        let length = digitLength;
        if (value.indexOf('-') !== -1)
            length++;
        if (value.indexOf('.') !== -1)
            length++;

        if (value.length > length) {
            isValidValue = false;
        }

        return isValidValue;
    }
    checkMoreThanDigitInResult(value) {
        isValidValue = true;
        let length = digitLength;
        if (value.indexOf('-') !== -1)
            length++;
        if (value.indexOf('.') === -1) {
            if (value.length > length) {
                isValidValue = false;
            }
        }
        else {
            const decimal = value.substr(0, value.indexOf('.'));
            if (decimal.length > length)
                isValidValue = false;
        }
        return isValidValue;
    }

    inputDecimal() {

        this.checkMoreThanDigitInType(currentValue);

        if (currentValue.indexOf('.') >= 0) {
            return;
        }

        if (currentValue === '') {
            currentValue += '0.';
        } else {
            currentValue += '.';
        }
    }

    clear() {
        currentValue = '0';
        register = [];
        result = '';
        lastOpertate = [];
        isValidValue = true;
    }
    off() {
        currentValue = '';
        register = [];
        result = '';
        lastOpertate = [];
        isValidValue = true;
    }
    on() {
        currentValue = '0';
        register = [];
        result = '';
        lastOpertate = [];
        isValidValue = true;
    }
    clearAll() {
        currentValue = '0';
        register = [];
        result = '';
        history = '';
        isMemoryMode = false;
        lastOpertate = [];
        isValidValue = true;
    }



    delete() {
        if (currentValue === '') {
            return;
        }

        currentValue = currentValue.substring(0, currentValue.length - 1);
        result = currentValue;
        this.checkMoreThanDigitInType(currentValue);
        if (currentValue === '')
            currentValue = '0';
    }
    checkHistory() {
        register = [];
        if (currentValue === '')
            currentValue = result;
    }
    customEval(value) {
        let newValue = value;
        if (value === '')
            newValue = '0';
        return math.eval(newValue);
    }
    addWithHistory() {
        this.checkHistory();
        const addValue = (this.customEval(history) + this.customEval(currentValue)).toString();
        isMemoryMode = true;
        this.checkMoreThanDigitInResult(addValue);
        if (isValidValue)
            history = addValue;
    }
    subtrackWithHistory() {
        this.checkHistory();
        const subTrackValue = (this.customEval(history) - this.customEval(currentValue)).toString();
        isMemoryMode = true;
        this.checkMoreThanDigitInResult(subTrackValue);
        if (isValidValue)
            history = subTrackValue;
    }
    clearHistory() {
        history = '';
    }

    add() {
        this.ReplaceOperator('+');
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        this.isNeedToCalculate();
        register.push('+');

        currentValue = '';
    }

    subtract() {
        this.ReplaceOperator('-');
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        this.isNeedToCalculate();
        register.push('-');

        currentValue = '';

    }

    multiply() {
        this.ReplaceOperator('*');
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        this.isNeedToCalculate();
        register.push('*');

        currentValue = '';
    }

    divide() {
        this.ReplaceOperator('/');
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        this.isNeedToCalculate();
        register.push('/');

        currentValue = '';
    }
    radical() {
        if (currentValue === '' && result === '') {
            return;
        }
        if (currentValue === '' && result !== '')
            currentValue = result;
        if (Number(currentValue) > 0) {
            result = this.customEval(`sqrt(${currentValue})`);
            currentValue = this.convertTodigit(result.toString());
            result = currentValue;
            this.checkMoreThanDigitInResult(currentValue);
        }
        else {
            currentValue = '0';
            isValidValue = false;
        }

    }
    percent() {
        if (currentValue === '' && result === '') {
            return;
        }
        if (currentValue === '' && result !== '')
            currentValue = result;

        result = this.customEval(`${currentValue}/100`);
        currentValue = result.toString();
        result = currentValue;
        this.checkMoreThanDigitInResult(currentValue);
    }

    isNeedToCalculate() {
        let result = false;
        if (currentValue === '') {
            return;
        }
        if (register.length > 2) {
            result = true;
            this.equals(true);
        }
        return result;
    }
    ReplaceOperator(newOperator) {
        if (currentValue !== '') {
            return;
        }
        let oldOperator = register[register.length - 1]
        if (oldOperator === '-' || oldOperator === '*' || oldOperator === '/' || oldOperator === '+') {
            register.pop();
            register.push(newOperator);
        }
    }

    equals(needToCalculate = false) {
        if (currentValue === '') {
            return;
        }
        if (!needToCalculate)
            register.push(currentValue);

        if (lastOpertate.length !== 0 && register.length === 1)
            register.push(...lastOpertate);

        const expression = register.join(' ');

        result = this.customEval(expression).toString();
        currentValue = result.toString();

        this.checkMoreThanDigitInResult(currentValue);

        if (!needToCalculate) {
            lastOpertate = [];
            lastOpertate = register.splice(1, register.length - 1);
        }

        else
            lastOpertate = [];

        register = [];
        !needToCalculate ? register = [] : register.push(result.toString());

    }

    loadHistory() {
        currentValue = history;
        result = currentValue;
        register = [];
        isMemoryMode = true;
    }

    toggleSign() {
        if (currentValue === '') {
            return;
        }
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }

    getValue() {
        const newValue = this.validateResultValue(currentValue);
        currentValue = newValue.value;
        newValue.value = this.convertToDisplayDigit(newValue.value)
        return newValue;
    }

    getExpression() {
        return register.join(' ');
    }

    getHistory() {
        return this.convertToDisplayDigit(history);
    }

    getResult() {
        const newValue = this.validateResultValue(result);
        result = newValue.value;
        newValue.value = this.convertToDisplayDigit(newValue.value)
        return newValue;
    }
    validateResultValue(finalResult) {
        let valueResult = '';
        const convertTodigitResult = this.convertTodigit(finalResult);
        valueResult = {
            isValid: isValidValue,
            value: convertTodigitResult
        };
        return valueResult;
    }
    convertTodigit(value) {
        let length = digitLength;
        let newValue = value;
        if (value.indexOf('-') !== -1)
            length++;
        if (value.indexOf('.') !== -1)
            length++;
        if (value.indexOf('.') === -1) {
            newValue = value.substr(0, length);
        }
        else {
            let decimal = value.substr(0, value.indexOf('.'));

            decimal = decimal.substr(0, digitLength - 1);

            newValue = decimal + value.substr(value.indexOf('.'), length - decimal.length)
        }
        return newValue;
    }
    convertToDisplayDigit(value) {
        if (value.indexOf('.') !== -1) {
            return value.substr(0, value.indexOf('.')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1'") + value.substr(value.indexOf('.'), value.length)
        }
        else {
            return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1'")
        }
    }

}

export default CalculatorEngine;