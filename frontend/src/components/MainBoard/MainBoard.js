import React from 'react';
import './MainBoard.css';
import Settings from '../Settings/Settings';
import {Instrument} from '../Instrument/Instrument'

export  class MainBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         // on the basis of these will be calculated number of pad buttons
        columns: 4,
        rows: 2,
      volume: 70,
    };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
     this.handleColumnsChange = this.handleColumnsChange.bind(this);
      this.handleRowsChange = this.handleRowsChange.bind(this);
  }

  handleVolumeChange(value){
    this.setState({volume:value.value})
  };

   handleRowsChange(value){
    this.setState({rows: value})
  };

  handleColumnsChange(value){
    this.setState({columns: value})
  };
    render() {
        return(<div className="main-board">
        <Instrument rows={this.state.rows} columns={this.state.columns}/>
        <Settings onChange={this.handleVolumeChange} volume ={this.state.volume} rows={this.state.rows} rowsChange={this.handleRowsChange} columns={this.state.columns} columnsChange={this.handleColumnsChange} />
        </div>)
    }
}