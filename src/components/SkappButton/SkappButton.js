import React from 'react';
import styles from './SkappButton.module.scss';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';

export default function SkappButton({ iconName, text, onClick }) {

  return (
    <div> 
      <button className={styles.skappButton} onClick={onClick}>
        <Icon className={styles.icon} style={{ fontSize: 25 }}>{iconName}</Icon>
        {text}
      </button>
    </div>
  );
}

SkappButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}