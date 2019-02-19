import React from 'react';
import './MediaButton.css';
// volume control
class MediaButton extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.state = {
            assigned: true,
            sample: 'http://streaming.tdiradio.com:8000/house.mp3',
        }
        this.audio.src = this.state.sample;
        this.playSample = this.playSample.bind(this);
    }

    playSample() {

        this.audio.play();
    }

    render() {
        let volumeValue = this.props.volume /100;
        this.audio.volume = volumeValue;
        const active = {
            cursor: 'pointer',
        }
        const inactive = {
            backgroundColor: 'grey',
        }
        return (
            <button className="pad-button" style={this.state.assigned ? active : inactive} onClick={this.playSample}></button>
        )
    }
}

export default (MediaButton);