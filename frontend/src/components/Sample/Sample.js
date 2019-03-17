import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio();
    this.playToggle = this.playToggle.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    this.audio.src = this.props.audioSample.src;
  }

  playToggle() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  handleDrag(event) {
    event.preventDefault();
    this.props.dragStart(this.props.audioSample.src);
  }

  render() {
    this.audio.volume = this.props.volume / 100;

    return (
      <ListItem
        button
        onClick={this.playToggle}
        draggable
        onDrag={this.handleDrag}
      >
        <ListItemText inset secondar={this.props.audioSample.name} />
      </ListItem>
    );
  }
}
