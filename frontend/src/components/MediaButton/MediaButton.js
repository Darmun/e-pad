import React from 'react';
import './MediaButton.css';

class MediaButton extends React.Component {
constructor(props){
    super(props);
    this.state={
        assigned: true,
        sample:'',
    }
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
<button className="pad-button" style={this.state.assigned? active: inactive}></button>
    )
  }
}

export default (MediaButton);