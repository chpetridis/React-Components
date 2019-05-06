import React, {Component} from 'react';

import './Bars.scss';
import Modal from '../Modal/Modal';
import DataSummary from '../DataSummary/DataSummary';


class Bars extends Component {
    state = {
      showStatsData: false
    }

    constructor(props) {
      super(props);
      this.showStatsHandler = this.showStatsHandler.bind(this);
      this.hideStatsHandler = this.hideStatsHandler.bind(this);
    }

    redBarStyle = {
      height: this.props.dataNormalizedValues.red,
      backgroundColor: this.props.barColours.bar3.barColour,
      borderColor: this.props.barColours.bar3.barBorderColour
    }

    greenBarStyle = {
      height: this.props.dataNormalizedValues.green,
      backgroundColor: this.props.barColours.bar1.barColour,
      borderColor: this.props.barColours.bar1.barBorderColour
    }

    blueBarStyle = {
      height: this.props.dataNormalizedValues.blue,
      backgroundColor: this.props.barColours.bar2.barColour,
      borderColor: this.props.barColours.bar2.barBorderColour
    }

    showStatsHandler = () => {
      this.setState({showStatsData: true});
    }

    hideStatsHandler = () => {
      this.setState({showStatsData: false});
    }

    render() {
      return (
        <div className='Bars' style={{marginBottom: this.props.scrollStyle.marginBottom}}>
          <Modal show={this.state.showStatsData}>
            <DataSummary label={this.props.dataLabel} summaryValues={this.props.dataValues} barColours={this.props.barColours}/>
          </Modal>

          <p style={this.greenBarStyle} className='Bars-border'
             onMouseEnter={this.showStatsHandler} onMouseLeave={this.hideStatsHandler}></p>
          <p style={this.blueBarStyle} className='Bars-border'
             onMouseEnter={this.showStatsHandler} onMouseLeave={this.hideStatsHandler}></p>
          <p style={this.redBarStyle} className='Bars-border'
             onMouseEnter={this.showStatsHandler} onMouseLeave={this.hideStatsHandler}></p>
        </div>
      )
    }

}

export default Bars;
