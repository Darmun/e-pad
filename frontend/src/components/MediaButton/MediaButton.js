import React from 'react';
import './MediaButton.css';

class MediaButton extends React.Component {
constructor(props){
    super(props);
    this.audio = new Audio;
    this.state={
        assigned: true,
        sample:'./DL Ninety.wav',
    }
    this.playSample =this.playSample.bind(this);
}

playSample(){
    this.audio.src = './DL Ninety.wav';
    this.audio.play();
}

  render() {
      const active ={
cursor:'pointer',
backgroundColor:'#fec02d',
      }
       const inactive ={
backgroundColor:'grey',
      }
      
    return(
<button className="pad-button" style={this.state.assigned? active: inactive} onClick={this.playSample}></button>
    )
  }
}

export default (MediaButton);