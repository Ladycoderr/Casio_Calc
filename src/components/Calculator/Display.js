import React from 'react';
import PropTypes from 'prop-types';
const image = require('../../casio.png')


const Display = (props) => (
    <div>
        <div className="mt-md-2" style={{ position: 'relative' }}>
            <div className="row" style={{ marginTop: "14px" }}>
                <div className="col-sm-5" style={{ marginLeft: '27px' }}>
                    <div><img src={image} /></div>

                </div>
                <div className="col-sm-5 black-power" style={{ backgroundColor: "black", height: '42px' }}></div>
            </div>
            <div className="text-power">TWO WAY POWER</div>
        </div>

        <div className="mt-md-2" style={{ position: 'relative' }}>
            <div className="pr-2 h4" className="expression-display">{props.expression}</div>
            <div className="display text-right pr-2 h3 d-md-none d-sm-block pt-5">{props.value}</div>
            <div className="display text-right pr-2 h1 d-none d-lg-none d-md-block pt-4 ">{props.value}</div>
            <div className="display text-right pr-2 display-4 d-none d-lg-block pt-4 display-shadow">{props.value}</div>
            {props.showHistory &&
                <div className="pr-2 h4" className="memory-display" >M</div>}
            {!props.isValidOperate &&
                <div className="pr-2 h4" className="error-display" >E</div>}
        </div>

    </div>



);

Display.defaultProps = {
    expression: '',
    value: '0',
    showHistory: false,
    isValidOperate: true
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;