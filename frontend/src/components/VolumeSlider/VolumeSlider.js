import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 80,
    paddingLeft: 16,
  },
  slider: {
    padding: '10px 0px',
  },
};

class SimpleSlider extends React.Component {
constructor(props){
  super(props);
  this.handleChange = this.handleChange.bind(this);
}

  handleChange (event, value) {
    this.props.onChange({ value });
  };

  render() {
    const {classes} = this.props;
    const {value} = {value: this.props.volume}

    return (
      <div className = {classes.root}>
        <Slider
          classes = {{container: classes.slider}}
          value = {value}
          aria-labelledby = "label"
          onChange = {this.handleChange}
          />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);

