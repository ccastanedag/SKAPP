import React, { Component } from 'react';
import styles from './SkappHome.module.scss';
import SkappSearchInput from '../SkappSearchInput/SkappSearchInput';
import SkappButton from '../SkappButton/SkappButton';
import PropTypes from 'prop-types';

class SkappHome extends Component {
  static propTypes = {
    citySubmit: PropTypes.func.isRequired
  }

  state = {
    cityName: ''
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState(() => {
      return {
        cityName: newValue
      }
    });
  }

  handleCitySubmit = (event) => {
    event.preventDefault();
    this.props.citySubmit(this.state.cityName);
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <form className={styles.homeBox} onSubmit={this.handleCitySubmit}>
          <div className={styles.homeTop}>
            <label className={styles.title}>Enter a city</label>
            <SkappSearchInput
              value={this.state.cityName}
              onChange={this.handleChange} />
          </div>
          <div className={styles.homeBottom}>
            <SkappButton iconName='cloud_done' text='GET WEATHER' />
          </div>
        </form>
      </div>
    );
  }
}

export default SkappHome;