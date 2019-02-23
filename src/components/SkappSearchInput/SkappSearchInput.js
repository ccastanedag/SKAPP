import React, { Component } from 'react';
import styles from './SkappSearchInput.module.scss';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

class SkappSearchInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    let { value, onChange } = this.props;
    return (
      <div className={styles.inputBox}>
        <Icon className={styles.icon} style={{ fontSize: 25 }}>search</Icon>
        <input
          placeholder='Eg: New York'
          value={value}
          onChange={onChange}
          className={styles.input} />
      </div>
    );
  }
}

export default SkappSearchInput;