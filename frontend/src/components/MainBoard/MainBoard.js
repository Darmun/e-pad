import React from 'react';
import './MainBoard.css';
import Settings from '../Settings/Settings';
import {Instrument} from '../Instrument/Instrument'

export  class MainBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         // on the basis of these will be calculated number of pad buttons
      boardSize: { 
        columns: 4,
        rows: 2,
      },
      volume: 70,
    };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleVolumeChange(value){
    this.setState({volume:value})
  };


    render() {
        return(<div className="main-board">
        <Instrument size={this.state.boardSize}/>
        <Settings onChange={this.handleVolumeChange} volume ={this.state.volume}/>
        </div>)
    }
}