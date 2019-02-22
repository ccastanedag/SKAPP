import React from 'react';
import styles from './SkappButton.module.scss';
import Icon from '@material-ui/core/Icon'

export default function SkappButton({ iconName, iconSize, text, type, onClick }) {
  
  return (
    <button className={styles.skappButton}>
      <Icon className={styles.icon}>{iconName}</Icon>
      {text}
    </button>
  );
}