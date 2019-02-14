import React from 'react';
import './Instrument.css';
export class Instrument extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const boardSize = {
            gridTemplateColumns: `repeat(${this.props.size.columns}, 1fr)`,
            gridTemplateRows:`repeat(${this.props.size.rows}, 1fr)`
        }
        return (<div className='instrument-container'>
            <div className='instrument' style={boardSize}></div>
        </div>)
    }
}