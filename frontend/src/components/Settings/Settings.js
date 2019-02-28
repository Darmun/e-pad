import React from 'react';
import PropTypes from 'prop-types';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import SubMenu from '../SubMenu/SubMenu';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VolumeMute from '@material-ui/icons/VolumeMute';
import ViewModule from '@material-ui/icons/ViewModule';
import SampleList from '../SampleList/SampleList';
import Select from '../Select/Select';
import Audiotrack from '@material-ui/icons/Audiotrack';
import Sample from '../Sample/Sample';
import Arp from '../../Data/Arpeggios/130_A_G_Arps_SP_01.wav'
import {arps, kicks, claps, percussion} from  '../../Data/Samples';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    maxHeight: '99vh',
    overflowY: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});



class NestedList extends React.Component {

  render() {
    const { classes } = this.props;
    const trackList = sampleArray => sampleArray.map(track => <Sample dragStart = {this.props.storeDraggedItem}
      audioSample = {track} />)

    const arpList = trackList(arps);
    const kickList = trackList(kicks);
    const clapList = trackList(claps);
    const percussionList = trackList(percussion);

    return (
      <List
        component = "nav"
        subheader = {<ListSubheader component="div">E-pad</ListSubheader>}
        className = {classes.root}
        >
        <ListItem>
          <ListItemIcon>
            <VolumeMute />
          </ListItemIcon>
          <VolumeSlider
            onChange = {this.props.onChange}
            volume = {this.props.volume}
            />
        </ListItem>
        <SubMenu
          title = "Size"
          icon = {<ViewModule />}
          >
          <ListItem>
            <Select
              quantity = "Columns"
              value = {this.props.columns}
              onChange = {this.props.columnsChange}
              />
          </ListItem>
          <ListItem>
            <Select
              quantity = "Rows"
              value = {this.props.rows}
              onChange = {this.props.rowsChange}
              />
          </ListItem>
        </SubMenu>
        <SubMenu
          title = "Samples"
          icon = {<Audiotrack />}
          >
          <SampleList category ="Percussion">
            {percussionList}
          </SampleList>
          <SampleList category = "Arps">
            {arpList}
          </SampleList>
           <SampleList category ="Kicks">
            {kickList}
          </SampleList>
          <SampleList category ="Claps">
            {clapList}
          </SampleList>
        </SubMenu>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);