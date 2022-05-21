import React from 'react';
import PropTypes from 'prop-types';

const Keypad = (props) => {

    const handleOnDigit = (e) => {
        props.onDigit(e.target.value);
    };

    return (
        <div className="keypad">
            <div className="keypad-row firts-row">

                <div className="btn"></div>
                <div className="btn">SL-300SV</div>
                <div className="btn"></div>
                <button className="btn keypad-secondary-btn  small-button" value="√" onClick={props.onRadical}>√</button>
                <button className="btn keypad-secondary-btn  small-button off-btn " value="off" onClick={props.onOff}>OFF</button>

            </div>
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn " value="clear-history" onClick={props.onClearHistory}>MC</button>
                <button className="btn keypad-secondary-btn" value="MR" onClick={props.onRead}>MR</button>
                <button className="btn keypad-secondary-btn" value="M-" onClick={props.onSubTrackWithHistory}>M-</button>
                <button className="btn keypad-secondary-btn" value="M+" onClick={props.onAddWithHistory}>M+</button>
                <button className="btn keypad-secondary-btn" value="/" onClick={props.onDivide}>&divide;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="%" onClick={props.onPercent}>%</button>
                <button className="btn keypad-secondary-btn" value="7" onClick={handleOnDigit}>7</button>
                <button className="btn keypad-secondary-btn" value="8" onClick={handleOnDigit}>8</button>
                <button className="btn keypad-secondary-btn" value="9" onClick={handleOnDigit}>9</button>
                <button className="btn keypad-secondary-btn" value="*" onClick={props.onMultiply}>&times;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="+-" onClick={props.onToggleSign}>&plusmn;</button>
                <button className="btn keypad-secondary-btn" value="4" onClick={handleOnDigit}>4</button>
                <button className="btn keypad-secondary-btn" value="5" onClick={handleOnDigit}>5</button>
                <button className="btn keypad-secondary-btn" value="6" onClick={handleOnDigit}>6</button>
                <button className="btn keypad-secondary-btn" value="-" onClick={props.onSubtract}>&minus;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="clear" style={{ backgroundColor: '#c9466f' }} onClick={props.onClear}>C</button>
                <button className="btn keypad-secondary-btn" value="1" onClick={handleOnDigit}>1</button>
                <button className="btn keypad-secondary-btn" value="2" onClick={handleOnDigit}>2</button>
                <button className="btn keypad-secondary-btn" value="3" onClick={handleOnDigit}>3</button>
                <button className="btn keypad-secondary-btn plus-btn" value="+" onClick={props.onAdd}>&#43;</button>
            </div>
            <div className="keypad-row last-row">
                <button className="btn keypad-secondary-btn" value="on-clear" style={{ backgroundColor: '#c9466f' }} onClick={props.onTurnOnAndClear}>AC</button>
                <button className="btn keypad-secondary-btn" value="0" onClick={handleOnDigit}>0</button>
                <button className="btn keypad-secondary-btn" value="." onClick={props.onDecimalPoint}>.</button>
                <button className="btn keypad-secondary-btn" value="=" onClick={props.onEquals}><span>=</span></button>
            </div>
            <div className="turnOn">
                ON
            </div>
        </div>
    );
};

Keypad.defaultProps = {
    onDigit: digit => alert(digit),
    onClear: () => alert('clear'),
    onTurnOnAndClear: () => alert('on-clear'),
    onDelete: () => alert('delete'),
    onAdd: () => alert('add'),
    onEquals: () => alert('equals'),
    onDecimalPoint: () => alert('.'),
    onSubtract: () => alert('subtract'),
    onToggleSign: () => alert('+/-'),
    onDivide: () => alert('/'),
    onMultiply: () => alert('*'),
    onRadical: () => alert('√'),
    onOff: () => alert('*'),
    onPercent: () => alert('/100'),
    onClearHistory: () => alert('clear-history'),
    onRead: () => alert('read-history'),
    onSubTrackWithHistory: () => alert('subTrack-history'),
    onAddWithHistory: () => alert('add-history')
};

Keypad.propTypes = {
    onDigit: PropTypes.func,
    onClear: PropTypes.func,
    onTurnOnAndClear: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onEquals: PropTypes.func,
    onDecimalPoint: PropTypes.func,
    onSubtract: PropTypes.func,
    onDivide: PropTypes.func,
    onMultiply: PropTypes.func,
    onToggleSign: PropTypes.func,
    onRadical: PropTypes.func,
    onOff: PropTypes.func,
    onPercent: PropTypes.func,
    onClearHistory: PropTypes.func,
    onRead: PropTypes.func,
    onSubTrackWithHistory: PropTypes.func,
    onAddWithHistory: PropTypes.func
};

export default Keypad;