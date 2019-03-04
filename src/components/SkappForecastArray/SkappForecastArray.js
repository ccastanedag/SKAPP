import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SkappButton from '../SkappButton/SkappButton'
import styles from './SkappForecastArray.module.scss'
import { Link } from 'react-router-dom'
import { toTitleCase } from '../../utils/api'
import SettingsContext from '../../utils/SkappContexts'

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

  render() {
    const { dataForecast, countryCity } = this.props;
    return (
      <ul className={styles.arrayContainer}>
        {
          dataForecast.map((day) => {
            return (
              <li key={day.date}>
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
                    }}>
                      <SkappButton iconName='search' text='MORE DETAILS' />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    )
  }
}

export default SkappForecastArray
