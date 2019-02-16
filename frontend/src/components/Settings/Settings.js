import React from 'react';
import PropTypes from 'prop-types';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import SamplesMenu from '../SamplesMenu/SamplesMenu';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import VolumeMute from '@material-ui/icons/VolumeMute';
import ViewModule from '@material-ui/icons/ViewModule';
import SampleList from '../SampleList/SampleList';
import Select from '../Select/Select';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">E-pad</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemIcon>
            <VolumeMute />
          </ListItemIcon>
          <VolumeSlider/>
        </ListItem>
        <SamplesMenu title="Size" icon={<ViewModule/>}>
         <ListItem>
         <Select quantity="Columns"/>
         </ListItem>
           <ListItem>
         <Select quantity="Rows"/>
         </ListItem>
         </SamplesMenu>
        <SamplesMenu title="Samples" icon={<ViewModule/>}>
        <SampleList category="Percussion"/>
        <SampleList category="Arps"/></SamplesMenu>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);