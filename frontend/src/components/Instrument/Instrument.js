import React from 'react';
import './Instrument.css';
import MediaButton from '../MediaButton/MediaButton';


export class Instrument extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const boardSize = {
            gridTemplateColumns: `repeat(${this.props.columns}, 1fr)`,
            gridTemplateRows:`repeat(${this.props.rows}, 1fr)`
        }
        return (<div className='instrument-container'>
            <div className='instrument' style={boardSize}>
            <MediaButton/>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            </div>
        </div>)
    }
}