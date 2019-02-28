import React from 'react';
import {ListItem, ListItemText} from '@material-ui/core'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.playSample = this.playSample.bind(this)
        this.handleDrag = this.handleDrag.bind(this)
    }

    componentDidMount() {
        this.audio.src = this.props.audioSample.src;
    }

    playSample() {
        this.audio.play();
    }

    handleDrag(event) {
        event.preventDefault();
        this.props.dragStart(this.props.audioSample.src)
    }

    render() {
        return (
            <ListItem
                button
                onClick = {this.playSample}
                draggable
                onDrag = {this.handleDrag}
            >
                <ListItemText inset secondary={this.props.audioSample.name}/>
            </ListItem>
        )
    }
}