import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SkappButton from '../SkappButton/SkappButton'
import styles from './SkappError.module.scss'
import Icon from '@material-ui/core/Icon'

export class SkappError extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    messages: PropTypes.shape({
      h1: PropTypes.string.isRequired,
      h2: PropTypes.string.isRequired,
      h3: PropTypes.string.isRequired
    }).isRequired,
    buttonIcon: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
  }

backToHome = () => {
  this.props.history.push('/');
}

  render() {
    const { icon, messages, buttonIcon, buttonText } = this.props;
    return (
      <div>
        <div className={styles.errorContainer}>
          <Icon style={{ fontSize: 250, color: '#00CDAC' }}>{icon}</Icon>
          <div className={styles.h1}>
            {messages.h1}
          </div>
          <div className={styles.h2}>
            {messages.h2}
          </div>
          <div className={styles.h3}>
            {messages.h3}
          </div>
            <SkappButton iconName={buttonIcon} text={buttonText} onClick={this.backToHome} />       
        </div>
      </div>
    )
  }
}

export default SkappError
