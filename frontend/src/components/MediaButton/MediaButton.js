import React from 'react';
import './MediaButton.css';

class MediaButton extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.state = {
            playing: false,
            bindedBtn: ''
        };
        this.playSample = this.playSample.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.bindButton = this.bindButton.bind(this);
        this.chooseButton = this.chooseButton.bind(this);
        this.triggerBtn = this.triggerBtn.bind(this);
        this.audio.onended = () => {
            this.setState({ playing: false });
        }

    }
    handleClick(e) {
        if (e.altKey) {

            this.chooseButton()
        }
        else {
            this.playSample();
        }
    }
    bindButton(e) {
        console.log('Binding button...')
        const key = e.keyCode;
        this.setState({ bindedBtn: key });
        document.addEventListener('keydown',this.triggerBtn);
        document.removeEventListener('keydown', this.bindButton, false);
    }

    chooseButton() {
        document.addEventListener('keydown', this.bindButton, false);
        console.log('Click button you want to assign to sample');
    }
    playSample() {
        if (this.props.isActive) {
            this.audio.play();
            this.audio.onplay = () => {
                this.setState({ playing: true });
            }
        }
        else {
            return false;
        }
    }

     triggerBtn(e) {
        if (e.keyCode === this.state.bindedBtn) {
            this.playSample();
        }

    }

    componentDidMount() {
        this.audio.src = this.props.audioSample;
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.bindButton, false);
        document.removeEventListener('keydown', this.triggerBtn);
    }

    render() {
        this.audio.volume = this.props.volume / 100;
        const OnOffStyle = this.state.playing ? { backgroundColor: 'rgba(0, 220, 0,0.6)' } : { backgroundColor: '' };
        return (
            <button className="pad-button" disabled ={!this.props.isActive} style={OnOffStyle} onClick={this.handleClick}></button>
        )
    }
}

export default (MediaButton);