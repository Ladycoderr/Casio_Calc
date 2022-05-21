// PACKAGE REFERENCES
import React, { Component } from 'react';


// PROJECT REFERENCES
import Display from './Display';
import Keypad from './Keypad';
import CalculatorEngine from './CalculatorEngine';


// INITIALIZATION
const calculator = new CalculatorEngine();


export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expression: '',
            value: '',
            showHistory: false,
            isOn: false,
            isValidOperate: true
        };

        this.handleOnDigit = this.handleOnDigit.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnTurnOnAndClear = this.handleOnTurnOnAndClear.bind(this);
        this.handleOnOff = this.handleOnOff.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSubtract = this.handleOnSubtract.bind(this);
        this.handleOnDivide = this.handleOnDivide.bind(this);
        this.handleOnMultiply = this.handleOnMultiply.bind(this);
        this.handleOnDecimalPoint = this.handleOnDecimalPoint.bind(this);
        this.handleOnEquals = this.handleOnEquals.bind(this);
        this.handleOnToggleSign = this.handleOnToggleSign.bind(this);
        this.handleOnClearHistory = this.handleOnClearHistory.bind(this);
        this.handleOnRadical = this.handleOnRadical.bind(this);
        this.handleOnPercent = this.handleOnPercent.bind(this);
        this.handleAddHistory = this.handleAddHistory.bind(this);
        this.handleReadHistory = this.handleReadHistory.bind(this);
        this.handleSubTrackHistory = this.handleSubTrackHistory.bind(this);
    }
    handleReadHistory() {
        if (this.state.isOn && this.state.isValidOperate && this.state.showHistory) {
            calculator.loadHistory();
            this.setState(() => ({
                value: calculator.getHistory(),
                expression: calculator.getExpression()
            }));
        }
    }
    handleAddHistory() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.addWithHistory();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                value: calculatorValue.value.toString(),
                showHistory: true,
                isValidOperate: calculatorValue.isValid,
                expression: calculator.getExpression()
            }));
        }
    }
    handleSubTrackHistory() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.subtrackWithHistory();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                value: calculatorValue.value.toString(),
                showHistory: true,
                isValidOperate: calculatorValue.isValid,
                expression: calculator.getExpression()
            }));
        }
    }
    handleOnClearHistory() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.clearHistory();
            this.setState(() => ({
                showHistory: false
            }));
        }
    }



    handleOnClear() {
        if (this.state.isOn) {
            calculator.clear();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }
    handleOnTurnOnAndClear() {
        calculator.on();
        const calculatorValue = calculator.getValue();
        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculatorValue.value.toString(),
            isOn: true,
            isValidOperate: calculatorValue.isValid,
            showHistory: calculator.getHistory().length > 0
        }));
    }
    handleOnOff() {
        calculator.off();
        const calculatorValue = calculator.getValue();
        this.setState(() => ({
            isOn: false,
            expression: calculator.getExpression(),
            value: calculatorValue.value,
            showHistory: false,
            isValidOperate: calculatorValue.isValid
        }));
    }




    handleOnDecimalPoint() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.inputDecimal();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                value: calculatorValue.value,
                isValidOperate: calculatorValue.isValid
            }));
        }
    }





    handleOnDigit(number) {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.inputDigit(number);
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                value: calculatorValue.value,
                isValidOperate: calculatorValue.isValid
            }));
        }

    }




    handleOnRadical() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.radical();
            const calculatorValue = calculator.getResult();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }

    handleOnPercent() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.percent();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }
    handleOnDelete() {
        if (this.state.isOn) {
            calculator.delete();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }


    handleOnToggleSign() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.toggleSign();
            const calculatorValue = calculator.getValue();
            this.setState(() => ({
                value: calculatorValue.value.toString(),
            }));
        }
    }


    handleOnEquals() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.equals();
            const calculatorValue = calculator.getResult();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }

    handleOnDivide() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.divide();
            const calculatorValue = calculator.getResult();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }
    handleOnMultiply() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.multiply();
            const calculatorValue = calculator.getResult();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }


    handleOnSubtract() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.subtract();
            const calculatorValue = calculator.getResult();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }

    }

    handleOnAdd() {
        if (this.state.isOn && this.state.isValidOperate) {
            calculator.add();
            const calculatorValue = calculator.getResult();
            this.setState(() => ({
                expression: calculator.getExpression(),
                value: calculatorValue.value.toString(),
                isValidOperate: calculatorValue.isValid
            }));
        }
    }



    render() {
        return (
            <div className="row">
                <div className="calculator mx-auto main-shadow">
                    <div className="second-div">
                        <Display value={this.state.value} isValidOperate={this.state.isValidOperate} showHistory={this.state.showHistory} expression={this.state.expression} />
                        {
                            <Keypad onDigit={this.handleOnDigit}
                                onAdd={this.handleOnAdd}
                                onSubtract={this.handleOnSubtract}
                                onDivide={this.handleOnDivide}
                                onMultiply={this.handleOnMultiply}
                                onDecimalPoint={this.handleOnDecimalPoint}
                                onEquals={this.handleOnEquals}
                                onTurnOnAndClear={this.handleOnTurnOnAndClear}
                                onClear={this.handleOnClear}
                                onDelete={this.handleOnDelete}
                                onRadical={this.handleOnRadical}
                                onOff={this.handleOnAdd}
                                onPercent={this.handleOnPercent}
                                onOff={this.handleOnOff}
                                onClearHistory={this.handleOnClearHistory}
                                onToggleSign={this.handleOnToggleSign}
                                onRead={this.handleReadHistory}
                                onSubTrackWithHistory={this.handleSubTrackHistory}
                                onAddWithHistory={this.handleAddHistory}
                            />
                        }
                    </div>
                </div>
            </div>

        );
    }
}