import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

class SubMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState(state => ({ 
      open: !state.open, 
    }));
  };

  render() {

    return (
      <div>
        <ListItem
          button
          onClick={this.handleClick}
          >
          <ListItemIcon>
            {this.props.icon}
          </ListItemIcon>
          <ListItemText
            inset
            primary={this.props.title}
            />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={this.state.open}
          timeout="auto"
          unmountOnExit
          >
          <List
            component="div"
            disablePadding
            >
            {this.props.children}
          </List>
        </Collapse>
      </div>
    );
  };
};

export default withStyles(styles)(SubMenu);