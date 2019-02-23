import React, { Component } from 'react';
import styles from './SkappBar.module.scss';
import SkappLogo from '../../images/SkappLogo.svg';
import SkappSearchInput from '../SkappSearchInput/SkappSearchInput';
import SkappButton from '../SkappButton/SkappButton';
import PropTypes from 'prop-types';

class SkappBar extends Component {
  static propTypes = {
    citySubmit: PropTypes.func.isRequired
  }

  state = {
    cityName: ''
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState(() => ({ cityName: newValue })
    );
  }

  handleCitySubmit = (event) => {
    event.preventDefault();
    this.props.citySubmit(this.state.cityName);
  }

  render() {
    let { citySubmit } = this.props;
    return (
      <div className={styles.bar}>
        <div className={styles.logoBox}>
          <img src={SkappLogo} alt='Skapp Logo' />
        </div>
        <form className={styles} onSubmit={this.handleCitySubmit}>
          <SkappSearchInput
            value={this.state.cityName}
            onChange={this.handleChange} />
          <SkappButton text='GET WEATHER' iconName='cloud_done' />
        </form>
      </div>
    );
  }
}

export default SkappBar;