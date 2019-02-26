import React, { Component } from 'react';
import styles from './SkappHome.module.scss';
import SkappSearchInput from '../SkappSearchInput/SkappSearchInput';
import SkappButton from '../SkappButton/SkappButton';
import { Link } from 'react-router-dom';

class SkappHome extends Component {

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

  citySubmit = (city) => {
    alert(city);
  }

  handleCitySubmit = (event) => {
    event.preventDefault();
    this.citySubmit(this.state.cityName);
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
            {/* To avoid redirection when input is empty */}
            {this.state.cityName &&
              <Link to={{ pathname: '/forecast', search: '?city=' + this.state.cityName }}>
                <SkappButton iconName='cloud_done' text='GET WEATHER' />
              </Link>}
            {!this.state.cityName &&
              <SkappButton iconName='cloud_done' text='GET WEATHER' />}
          </div>
        </form>
      </div>
    );
  }
}

export default SkappHome;