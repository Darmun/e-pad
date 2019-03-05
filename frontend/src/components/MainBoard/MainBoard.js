import React from 'react';
import './MainBoard.css';
import Settings from '../Settings/Settings';
import MediaButton from '../MediaButton/MediaButton';
import Typography from '@material-ui/core/Typography';

export class MainBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardConfig: {
        columns: 4,
        rows: 2,
      },
      volume: 70,
      showBindPopUp: false,
      draggedSample: '',
    };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleColumnsChange = this.handleColumnsChange.bind(this);
    this.handleRowsChange = this.handleRowsChange.bind(this);
    this.toggleBindPopUp = this.toggleBindPopUp.bind(this);
    this.storeDraggedItem = this.storeDraggedItem.bind(this);
  };

  handleVolumeChange({value}) {
    this.setState({ 
      volume: value,
     });
  };

  storeDraggedItem(item) {
    this.setState({ 
      draggedSample: item,
    });
  };

  handleRowsChange(rows) {
    this.setState(({boardConfig}) => ({
      boardConfig: {
        ...boardConfig,
        rows,
      }
    }));
  };

  handleColumnsChange(columns) {
   this.setState(({boardConfig}) => ({
      boardConfig: {
        ...boardConfig,
        columns
      }
    }));
  };

  toggleBindPopUp() {
    this.setState({ 
      showBindPopUp: !this.state.showBindPopUp 
    });
  };

  prepareBtnsIndexes() {
    const count = this.state.boardConfig.rows * this.state.boardConfig.columns;
    const btnIndexes = Array(count).fill(0).map((_, i) => i);
    return btnIndexes;
  };

  render() {
    return (
      <div className="main-board">
        {this.state.showBindPopUp && (
          <div className="pop-up-background">
            <div className="bind-pop-up">
              <Typography  gutterBottom>
                Press button which will be assigned to sample or press escape to return:
              </Typography>
            </div>
          </div>
        ) }
        <div className="flex-container">
          <div
            className="button-container"
            style={{
              gridTemplateColumns: `repeat(${this.state.boardConfig.columns}, 1fr)`,
              gridTemplateRows: `repeat(${this.state.boardConfig.rows}, 1fr)`,
            }}
            >
            {this.prepareBtnsIndexes().map((i) =>
              <MediaButton
                key={`btn_${i}`}
                volume={this.state.volume}
                isActive={false}
                togglePopUp={this.toggleBindPopUp}
                draggedSample={this.state.draggedSample}
                />
            )}
          </div>
        </div>
        <Settings
          onChange={this.handleVolumeChange}
          volume={this.state.volume}
          boardConfig={this.state.boardConfig}
          rowsChange={this.handleRowsChange}
          columnsChange={this.handleColumnsChange}
          storeDraggedItem={this.storeDraggedItem}
          />
      </div>
      )};
}