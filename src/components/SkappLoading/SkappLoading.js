import React, { Component } from 'react'
import styles from './SkappLoading.module.scss'
import { Icon } from '@material-ui/core'
import posed from 'react-pose'

const AnimatedCloud = posed.div({
  left: {
    x: -20,
    transition: {
      x: { type: 'spring', stiffness: 100 }
    }

  },
  right: {
    x: 20,
    transition: {
      x: { type: 'spring', stiffness: 100 }
    }
  }
});

export class SkappLoading extends Component {

  state = {
    cloudPosition: false, // false = left, true = right
    intervalId: null
  }

  componentDidMount() {

    const id = setInterval(() => {
      this.setState((prevState) => ({
        cloudPosition: !prevState.cloudPosition
      }));
    }, 500);

    this.setState({
      intervalId: id
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className={styles.loadingContainer}>
        <AnimatedCloud className={styles.iconLoading} pose={this.state.cloudPosition ? 'right' : 'left'}>
          <Icon className={styles.icon} style={{ fontSize: 90 }}>cloud_done</Icon>
        </AnimatedCloud>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    )
  }
}

export default SkappLoading
