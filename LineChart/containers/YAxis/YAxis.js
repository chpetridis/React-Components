import React, {Component} from 'react';
import PropTypes from 'prop-types';

import YAxisScales from '../../components/YAxisScales/YAxisScales';


class YAxis extends Component {
    state = {
      values: []
    }

    static propTypes = {
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number
    };

    static defaultProps = {
      min: 0,
      max: 100,
      step: 10
    };

    initValues() {
      let tempValues = [];

      for (let i = this.props.min ; i < this.props.max; i += this.props.step) {
        tempValues.push(i);
      }
      this.setState({values: tempValues});
    }

    componentWillMount() {
      this.initValues();
    }

    render() {
      return <YAxisScales values={this.state.values} max={this.props.max}/>
    }

}

export default YAxis;
