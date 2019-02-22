import React, { Component } from 'react';
import styles from './SkappSearchForm.module.scss';
import { Input } from '@material-ui/core';
import SkappButton from '../SkappButton/SkappButton';
import PropTypes from 'prop-types';

class SkappSearchForm extends Component {
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
    return (
      <form className={styles} onSubmit={this.handleCitySubmit}>
        <Input
          value={this.state.cityName}
          onChange={this.handleChange} />
        <SkappButton text='GET WEATHER' iconName='cloud_done' />
      </form>
    );
  }
}

export default SkappSearchForm;