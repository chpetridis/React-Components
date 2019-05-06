import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DataList from '../../components/DataList/DataList';


class DataListContainer extends Component {
    state= {
      data: [
          {label: '1.Label', values:{red: 10, green: 25, blue: 30}},
          {label: '2.Label', values:{red: 45, green: 80, blue: 100}},
          {label: '3.Label', values:{red: 66, green: 37, blue: 30}},
          {label: '4.Label', values:{red: 40, green: 20, blue: 40}},
          {label: '5.Label', values:{red: 0.51, green: 60, blue: 32.2}}
      ]
    }

    constructor(props) {
      super(props);
      this.heightNormalization = this.heightNormalization.bind(this);
    }

    static propTypes = {
      min: PropTypes.number,
      max: PropTypes.number
    };

    static defaultProps = {
      min: 0,
      max: 100
    };

    getScrollStyle() {
      if (this.state.data.length > 5) {
        return {overflowX: 'scroll', marginBottom: '0px'}
      }
      return {overflowX: 'hidden', marginBottom: '5px'}
    }

    heightNormalization = (index) => {
      const YAxisSpace = (this.props.max - this.props.min);

      const normalizedRed = (this.state.data[index].values.red / YAxisSpace * 100) + '%';
      const normalizedGreen = (this.state.data[index].values.green / YAxisSpace * 100) + '%';
      const normalizedBlue = (this.state.data[index].values.blue / YAxisSpace * 100) + '%';

      return {red: normalizedRed, green: normalizedGreen, blue: normalizedBlue};
    }

    render() {
      return <DataList data={this.state.data} normalize={this.heightNormalization}
                       barColours={this.props.barColours} scrollStyle={this.getScrollStyle()} />
    }

}

export default DataListContainer;
