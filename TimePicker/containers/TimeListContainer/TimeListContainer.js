import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TimeList from '../../components/TimeList/TimeList';

class TimeListContainer extends Component {
  state= {
    timeValues: [
      {time: '00:00'}, {time: '00:30'}, {time: '01:00'}, {time: '01:30'},
      {time: '02:00'}, {time: '02:30'}, {time: '03:00'}, {time: '03:30'},
      {time: '04:00'}, {time: '04:30'}, {time: '05:00'}, {time: '05:30'},
      {time: '06:00'}, {time: '06:30'}, {time: '07:00'}, {time: '07:30'},
      {time: '08:00'}, {time: '08:30'}, {time: '09:00'}, {time: '09:30'},
      {time: '10:00'}, {time: '10:30'}, {time: '11:00'}, {time: '11:30'},
      {time: '12:00'}, {time: '12:30'}, {time: '13:00'}, {time: '13:30'},
      {time: '14:00'}, {time: '14:30'}, {time: '15:00'}, {time: '15:30'},
      {time: '16:00'}, {time: '16:30'}, {time: '17:00'}, {time: '17:30'},
      {time: '18:00'}, {time: '18:30'}, {time: '19:00'}, {time: '19:30'},
      {time: '20:00'}, {time: '20:30'}, {time: '21:00'}, {time: '21:30'},
      {time: '22:00'}, {time: '22:30'}, {time: '23:00'}, {time: '23:30'},
    ]
  }

  static propTypes = {
    clicked: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.onRef(this)
  }

  onUpdateClicked = (time) => {
    if ('clicked' in this.props){
      this.props.clicked(time);
    } else {
      console.warn('Clicked property is not provided.');
    }
  }

  compareTimes(firstTime, secondTime) {
    if (firstTime.time < secondTime.time) {
      return -1;
    }
    if (firstTime.time > secondTime.time) {
      return 1;
    }
    return 0;
  }

  updateTimeListIfNeeded = (newTime) => {
    for (let i = 0; i < this.state.timeValues.length; i++) {
      if (newTime === this.state.timeValues[i].time) {
        return;
      }
    }
    const newTimeList = [...this.state.timeValues, {time: newTime}].sort(this.compareTimes);
    this.setState({timeValues: newTimeList});
  }

  render() {
    return <TimeList times={this.state.timeValues} onUpdateClicked={this.onUpdateClicked}/>
  }

};

export default TimeListContainer;
