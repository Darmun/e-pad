import React from 'react';
import './MainBoard.css';
import Settings from '../Settings/Settings';
import MediaButton from '../MediaButton/MediaButton';

export class MainBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      columns: 4,
      rows: 2,
      volume: 70,
    };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleColumnsChange = this.handleColumnsChange.bind(this);
    this.handleRowsChange = this.handleRowsChange.bind(this);
  }

  handleVolumeChange({value}) {
    this.setState({volume: value} )
  };

  handleRowsChange(rows) {
    this.setState({rows})
  };

  handleColumnsChange(columns) {
    this.setState({columns})
  };

  prepareBtnsIndexes(){
    const btnIndexes = [];
    for (let i = 0; i < this.state.rows * this.state.columns; i++){
     btnIndexes[i] = i; 
  }
  return btnIndexes;
};

  render() {
    const boardDimensions = {
      gridTemplateColumns: `repeat(${this.state.columns}, 1fr)`,
      gridTemplateRows: `repeat(${this.state.rows}, 1fr)`
    } 
    const btnArray = this.prepareBtnsIndexes().map((index)=>
<MediaButton key ={`btn_${index}`} volume={this.state.volume} isActive={true} audioSample="http://streaming.tdiradio.com:8000/house.mp3"/>
    );

    return (<div className="main-board">
      <div className='flex-container'>
        <div className ='button-container' style={boardDimensions}>{btnArray}</div>
      </div>
      <Settings onChange={this.handleVolumeChange} volume ={this.state.volume} rows={this.state.rows} rowsChange={this.handleRowsChange} columns={this.state.columns} columnsChange={this.handleColumnsChange} />
    </div>)
  }
}