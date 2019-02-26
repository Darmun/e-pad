import React from 'react';
import PropTypes from 'prop-types';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import SubMenu from '../SubMenu/SubMenu';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VolumeMute from '@material-ui/icons/VolumeMute';
import ViewModule from '@material-ui/icons/ViewModule';
import SampleList from '../SampleList/SampleList';
import Select from '../Select/Select';
import Audiotrack from '@material-ui/icons/Audiotrack';
import Sample from '../Sample/Sample';

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
          <VolumeSlider
            onChange={this.props.onChange}
            volume ={this.props.volume}
            />
        </ListItem>
        <SubMenu title="Size"
          icon={<ViewModule />}>
          <ListItem>
            <Select
              quantity="Columns"
              value={this.props.columns}
              onChange={this.props.columnsChange}
              />
          </ListItem>
          <ListItem>
            <Select quantity="Rows"
              value={this.props.rows}
              onChange={this.props.rowsChange}
              />
          </ListItem>
        </SubMenu>
        <SubMenu title="Samples"
          icon={<Audiotrack />}>
          <SampleList category="Percussion">
          <Sample dragStart={this.props.storeDraggedItem} audioSample="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/CASIO%20SK-1/12[kb]SK1_CH.wav.mp3"/>
          </SampleList>
          <SampleList category="Arps"/>
        </SubMenu>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);