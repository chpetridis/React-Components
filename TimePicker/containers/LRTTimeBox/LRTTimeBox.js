import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Modal from '../../components/Modal/Modal';
import TimeBox from '../../components/TimeBox/TimeBox';
import TimeListContainer from '../TimeListContainer/TimeListContainer';

const DEFAULT_TIME = '09:00';


class LRTTimeBox extends Component {
  state = {
    showTimeList: false,
    typed: false,
    displayedTime: DEFAULT_TIME
  }

  static propTypes = {
    OnTimeChanged: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.showHandler = this.showHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.updateBeforeHideHandler = this.updateBeforeHideHandler.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  showHandler = (event) => {
    event.target.select();
    this.setState( (prevState) => {
      return {
        showTimeList: !prevState.showTimeList
      }
    });
  }

  dispatchTimeChangedEvent(time) {
    if ('OnTimeChanged' in this.props){
      this.props.OnTimeChanged(time);
    } else {
      console.error('Warning: Didn\'t provide \'OnTimeChanged\' attribute!');
    }
  }

  updateTime = (newTime) => {
    if (newTime === this.state.displayedTime) {
      this.setState({showTimeList: false});
      return;
    }

    this.setState({displayedTime: newTime, showTimeList: false, typed: false});
    this.dispatchTimeChangedEvent(newTime);
  }

  inputHandler = (event) => {
    let inputValue = event.target.value;

    if (inputValue.length === 2) {
      inputValue += ':';
    }

    this.setState({displayedTime: inputValue, typed: true});
  }

  isInvalidInput() {
    const hoursAndMinutes = this.state.displayedTime.split(":");

    return   this.isInvalidHours(hoursAndMinutes[0])
          || this.isInvalidMinutes(hoursAndMinutes[1])
          || this.isInvalidTimeLength(hoursAndMinutes[0], hoursAndMinutes[1])
          || this.isNotNumbers(hoursAndMinutes[0], hoursAndMinutes[1])
  }

  isInvalidHours(hours) {
    return hours >23 || hours < 0 || isNaN(hours[0]) || isNaN(hours[1]);
  }

  isInvalidMinutes(minutes) {
    return minutes >59 || minutes < 0 || isNaN(minutes[0]) || isNaN(minutes[1]);
  }

  isInvalidTimeLength(hours, minutes) {
    return hours.length < 2 || minutes.length < 2;
  }

  isNotNumbers(hours, minutes) {
    return isNaN(hours) || isNaN(minutes);
  }

  updateBeforeHideHandler = (newTime) => {
    if (this.state.typed) {
      if (this.isInvalidInput()) {
        this.setState({displayedTime: DEFAULT_TIME, typed: false, showTimeList: false});
        alert("Wrong input!!! Try Again.");
        return;
      }
      this.TimeListContainer.updateTimeListIfNeeded(newTime);
      this.dispatchTimeChangedEvent(newTime);
    }
    this.setState({typed: false, showTimeList: false});
  }

  render() {
    return (
      <div>
        <TimeBox timeValue={this.state.displayedTime} focus={this.showHandler}
          changed={this.inputHandler} update={this.updateBeforeHideHandler} />

        <Modal show={this.state.showTimeList} >
          <TimeListContainer clicked={this.updateTime} onRef={ref => (this.TimeListContainer=ref)}/>
        </Modal>

      </div>
    );
  }

}

export default LRTTimeBox;
