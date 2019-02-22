import React,{ Component } from 'react';
import styles from './SkappBar.module.scss';
import SkappLogo from '../../images/SkappLogo.svg';
import SkappSearchForm from '../SkappSearchForm/SkappSearchForm';
import PropTypes from 'prop-types';

class SkappBar extends Component {
  static propTypes = {
    citySubmit : PropTypes.func.isRequired
  }

  render(){
    let {citySubmit} = this.props;
    return(
      <div className={styles.bar}>
        <div className={styles.logoBox}>
          <img src={SkappLogo} alt='Skapp Logo'/>
        </div>
        <SkappSearchForm citySubmit={citySubmit}/>
      </div>
    );
  }
}

export default SkappBar;