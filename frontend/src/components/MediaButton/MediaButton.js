import React from 'react';
import './MediaButton.css';

class MediaButton extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.state = {
            playing: false,
            bindedBtn: null,
            src: null,
            isActive: false,
        };
        this.playSample = this.playSample.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.bindButton = this.bindButton.bind(this);
        this.chooseButton = this.chooseButton.bind(this);
        this.triggerBtn = this.triggerBtn.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
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
        this.props.togglePopUp();
        const key = e.keyCode;
        this.setState({ bindedBtn: key });
        document.addEventListener('keydown', this.triggerBtn);
        document.removeEventListener('keydown', this.bindButton, false);
    }

    chooseButton() {
        document.addEventListener('keydown', this.bindButton, false);
        this.props.togglePopUp();
    }
    playSample() {
        if (this.state.isActive) {
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
    onDragOver(event) {
        event.preventDefault();
    }

   async onDrop(event) {
      await this.setState({
            src: this.props.draggedSample,
            isActive: true
        })
        this.audio.src = this.state.src;
        console.log(this.audio.src);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.bindButton, false);
        document.removeEventListener('keydown', this.triggerBtn);
    }

    render() {
        this.audio.volume = this.props.volume / 100;
        const OnOffStyle = this.state.playing ? { backgroundColor: 'rgba(0, 220, 0,0.6)' } : { backgroundColor: '' };
        return (
            <button className="pad-button"
                onDrop={this.onDrop}
                onDragOver = {this.onDragOver}
                disabled ={!this.state.isActive}
                style={OnOffStyle}
                onClick={this.handleClick}>
            </button>
        )
    }
}

export default (MediaButton);