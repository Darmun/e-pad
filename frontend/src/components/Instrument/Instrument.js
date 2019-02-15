import React from 'react';
import './Instrument.css';
import Button from '@material-ui/core/Button';

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
            <div className='instrument' style={boardSize}>
            <h1>hey</h1>
            <h1>xx</h1>
            <h1><Button/></h1>
            <h1>you</h1>
            <h1>are</h1>
            <h1>holding</h1>
            <h1>up</h1>
            <h1>today?</h1>
            </div>
        </div>)
    }
}