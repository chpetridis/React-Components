import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './LGJChartBar.scss';
import YAxis from '../YAxis/YAxis';
import DataListContainer from '../DataListContainer/DataListContainer';


class LGJChartBar extends Component {
    static propTypes = {
      position: PropTypes.string,
      barColours: PropTypes.object
    };

    static defaultProps = {
      position: 'auto',
      barColours: {
        bar1: {barColour: '#bddbd1', barBorderColour: '#009900'},
        bar2: {barColour: '#b4d1fd', barBorderColour: '#006699'},
        bar3: {barColour: '#fccfd2', barBorderColour: '#990000'}
      }
    };

    chartPosition = {
      alignSelf: this.props.position
    }

    render() {
      return (
        <div className="LGJChartBar" style={this.chartPosition}>
          <YAxis/>
          <DataListContainer barColours={this.props.barColours}/>
        </div>
      )
    }

}

export default LGJChartBar;
