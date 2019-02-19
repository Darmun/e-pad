import React from 'react';
import './MediaButton.css';
// volume control
class MediaButton extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.playSample = this.playSample.bind(this);
    }

    playSample() {

        this.audio.play();
    }

    render() {
        let volumeValue = this.props.volume / 100;
        let track = this.props.audioSample;
        this.audio.volume = volumeValue;
        this.audio.src = track;
        const active = {
            cursor: 'pointer',
        }
        const inactive = {
            backgroundColor: 'grey',
        }
        return (
            <button className="pad-button" style={this.props.isActive ? active : inactive} onClick={this.playSample}></button>
        )
    }
}

export default (MediaButton);