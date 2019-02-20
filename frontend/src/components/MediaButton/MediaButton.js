import React from 'react';
import './MediaButton.css';

class MediaButton extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.playSample = this.playSample.bind(this);
        this.state = { backgroundColor: '' };
        this.audio.onended = () => {
            this.setState({ backgroundColor: '' });
        }

    }

    playSample() {
        if (this.props.isActive) {
            this.audio.play();
            this.audio.onplay = () => {
                this.setState({ backgroundColor: 'rgba(0, 220, 0,0.6)' });
            }
        }
        else {
            return false;
        }
    }
    componentDidMount() {
        this.audio.src = this.props.audioSample;
    }

    render() {
        this.audio.volume = this.props.volume / 100;

        return (
            <button className={`pad-button ${this.props.isActive ? 'active' : 'inactive'}`} style={this.state} onClick={this.playSample}></button>
        )
    }
}

export default (MediaButton);