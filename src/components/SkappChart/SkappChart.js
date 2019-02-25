import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import styles from './SkappChart.module.scss'
import { Line } from 'react-chartjs-2'
import styles from './SkappChart.module.scss'
import { defaults } from 'react-chartjs-2'

export class SkappChart extends Component {
  static state = {
    isTemperature: true, // (Average Temperature if true, Humidity otherwise)
    isUsUnits: true // If false international units are used
  }
  static propTypes = {

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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Avg. Temperature',
            backgroundColor: gradient,
            borderColor: 'rgb(0, 205, 172,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
          }
        ]
      };

    };
    return (
      <div className={styles.chartContainer}>
        <div className={styles.shadowContainer}>
          <div className={styles.selectContainer}>
            <select name="dataToDraw" >
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
                  backgroundColor:'#eee',
                  titleFontColor: '#b2b1b0',
                  titleFontFamily: 'NimbusSanL',
                  titleFontSize:10,
                  titleFontStyle:'normal',
                  footerFontSize: 10,
                  footerFontStyle:'normal',
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
            {/* TODO: Instead of celsius should receive a prop */}
            <div className={styles.unitText}>Celsius</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkappChart
