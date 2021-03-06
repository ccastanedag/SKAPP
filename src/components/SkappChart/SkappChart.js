import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SettingsContext from '../../utils/SkappContexts'
import { Line } from 'react-chartjs-2'
import styles from './SkappChart.module.scss'
import { defaults } from 'react-chartjs-2'
import { Box } from '../../utils/SkappAnimations' 

export class SkappChart extends Component {
  static contextType = SettingsContext;
  state = {
    select:null, // (Average Temperature / Humidity)
    dataToRender: null,
    labelToRender: null,
    animation: 'begin'
  }
  static propTypes = {
    dataChart: PropTypes.arrayOf(PropTypes.shape({
      temperature: PropTypes.number,
      humidity: PropTypes.number,
      date: PropTypes.string
    })).isRequired
  }

  getDataToRender(key) {
    const dataChart = this.props.dataChart;
    return dataChart.map((object) => {
      return object[key];
    });
  }
  componentDidMount() {
    let dates = this.getDataToRender('date');
    const dateLabels = dates.map((date) => {
      return date.substring(date.indexOf(',')+2, date.length);
    });
    this.setState(() => {
      return {
        dataToRender: this.getDataToRender('temperature'),
        labelToRender: dateLabels,
        select: 'Avg. Temperature',
        animation: 'end'
      }
    });
  }

  handleChange = (event) => {
    const value = event.target.value;
    const tooltipText = value === 'temperature' ? 'Avg. Temperature' : 'Humidity';
    this.setState(() => {
      return {
        dataToRender: this.getDataToRender(value),
        select: tooltipText
      }
    });
  }

  render() {
    defaults.global.defaultFontFamily = 'NimbusSanL';
    defaults.global.defaultFontColor = '#3C3C3C';
    defaults.global.defaultFontSize = 12;
    defaults.global.defaultFontStyle = 'inherit';
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, -370, 0, 250);
      gradient.addColorStop(0, '#00CDAC');
      gradient.addColorStop(0.25, '#00CDAC');
      gradient.addColorStop(1, 'white');
      return {
        labels: this.state.labelToRender,
        datasets: [
          {
            label: this.state.select,
            backgroundColor: gradient,
            borderColor: 'rgb(0, 205, 172,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: this.state.dataToRender,
          }
        ]
      };

    };
    return (
      <div className={styles.chartContainer}>
        <Box className={styles.shadowContainer} pose={this.state.animation}>
          <div className={styles.selectContainer}>
            <select name="dataToDraw" onChange={this.handleChange}>
              <option value="temperature">Average Temperature</option>
              <option value="humidity">Humidity</option>
            </select>
          </div>
          <div className={styles.chartBox}>
            <Line
              data={data}
              options={{
                legend: {
                  display: false,
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  scaleLabel: {
                    fontStyle: 'normal'
                  },
                  yAxes: [
                    {
                      gridLines: {
                        color: '#EAF0F4',
                        borderDash: [1, 1]
                      }
                    }
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        color: '#EAF0F4',
                        borderDash: [1, 1]
                      }
                    }
                  ]
                },
                tooltips: {
                  backgroundColor: '#eee',
                  titleFontColor: '#b2b1b0',
                  titleFontFamily: 'NimbusSanL',
                  titleFontSize: 10,
                  titleFontStyle: 'normal',
                  footerFontSize: 10,
                  footerFontStyle: 'normal',
                  callbacks: {
                    labelColor: function (tooltipItem, chart) {
                      return {
                        borderColor: '#00CDAC',
                        backgroundColor: '#00CDAC',
                      }
                    },
                    labelTextColor: function (tooltipItem, chart) {
                      return '#b2b1b0';
                    }
                  }
                }
              }}
            />
          </div>
          <div className={styles.unitContainer}>
            <div className={styles.unitColor}></div>
            <div className={styles.unitText}>{
              this.state.select === 'Humidity' ? 'Percentage' 
              : (this.context.settings.metric? 'Celsius':'Farenheit')
              }</div>
          </div>
        </Box>
      </div>
    )
  }
}

export default SkappChart
