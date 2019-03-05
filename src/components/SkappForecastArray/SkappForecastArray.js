import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SkappButton from '../SkappButton/SkappButton'
import styles from './SkappForecastArray.module.scss'
import { Link } from 'react-router-dom'
import { toTitleCase } from '../../utils/api'
import SettingsContext from '../../utils/SkappContexts'
import { UL, LI } from '../../utils/SkappAnimations'

export const SkappIcon = ({ icon, size }) => {
  const imgSrc = `/images/${icon}.svg`;
  return (
    <img src={imgSrc} width={size} alt='weather icon'/>
  );
}

SkappIcon.defaultProps = {
  size: 200
}

export class SkappForecastArray extends Component {
  static contextType = SettingsContext;
  static propTypes = {
    dataForecast: PropTypes.array.isRequired, // The data required to render the chart and cards
    unit: PropTypes.string.isRequired,
  }
  state = {
    animation: 'begin'
  }

  componentDidMount(){
    this.setState({
      animation: 'end'
    });
  }

  render() {
    const { dataForecast, countryCity } = this.props;
    return (
      <UL className={styles.arrayContainer} pose={this.state.animation}>
        {
          dataForecast.map((day) => {
            return (
              <LI key={day.date}>
                <div className={styles.dayContainer}>
                  <div className={styles.temperatureIconContainer}>
                    <div className={styles.temperature}>{day.temperature} {this.context.settings.metric? 'C°':'F°'}</div>
                    <div className={styles.icon}>
                      <SkappIcon icon={day.icon} size={100} />
                    </div>
                  </div>
                  <div className={styles.date}>{day.date}</div>
                  <div className={styles.viewMore}>
                    <Link to={{
                      pathname: '/details',
                      search: '?city=' + countryCity.city,
                      state: {
                        city: toTitleCase(countryCity.city),
                        country: countryCity.country,
                        date: day.date,
                        description: toTitleCase(day.description),
                        icon: day.icon,
                        min_temperature: Math.round(day.min_temperature),
                        max_temperature: Math.round(day.max_temperature),
                        humidity: day.humidity
                      }
                    }} className={styles.link}>
                      <SkappButton iconName='search' text='MORE DETAILS' />
                    </Link>
                  </div>
                </div>
              </LI>
            );
          })
        }
      </UL>
    )
  }
}

export default SkappForecastArray
