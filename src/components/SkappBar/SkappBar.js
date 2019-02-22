import React,{ Component } from 'react';
import styles from './SkappBar.module.scss';
import SkappLogo from '../../images/SkappLogo.svg';

class SkappBar extends Component {
  render(){
    return(
      <div className={styles.bar}>
        <div className={styles.logoBox}>
          <img src={SkappLogo} alt='Skapp Logo'/>
        </div>
      </div>
    );
  }
}

export default SkappBar;