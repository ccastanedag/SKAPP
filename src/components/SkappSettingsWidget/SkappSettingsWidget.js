import React, { Component } from 'react'
import styles from './SkappSettingsWidget.module.scss'
import Switch from '@material-ui/core/Switch'
import SettingsContext from '../../utils/SkappContexts'
import { Icon } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import posed from 'react-pose'

const Widget = posed.div(
  {
    open: {
      x: 15,
      transition: {
        x: { type: 'spring', stiffness: 75 }
      }
    },
    close: {
      x: 195,
      transition: {
        x: { ease: 'easeOut', duration: 300 }
      }
    }
  }
);
const switchesStyles = theme => ({
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#00CDAC',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: '#DDDBD7',
    backgroundColor: '#DDDBD7',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
});

export class SkappSettingsWidget extends Component {

  static contextType = SettingsContext;

  state = {
    isOpen: false
  }

  openCloseWidget = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Widget className={styles.widgetContainer} pose={this.state.isOpen ? 'open' : 'close'}>
        <div className={styles.settingsBox}>
          <div className={styles.units}>
            <p>Metric Units</p>
            <Switch
              checked={this.context.settings.metric}
              onChange={(event) => this.context.updateSettings(event.target.value)}
              value="metric"
              classes={{
                switchBase: classes.iOSSwitchBase,
                bar: classes.iOSBar,
                icon: classes.iOSIcon,
                iconChecked: classes.iOSIconChecked,
                checked: classes.iOSChecked,
              }}
            />
          </div>
        </div>
        <div className={styles.settingsOpener} onClick={this.openCloseWidget}>
          <Icon className={styles.icon} style={{ fontSize: 24 }}>settings</Icon>
        </div>
      </Widget>
    );
  }
}

export default withStyles(switchesStyles)(SkappSettingsWidget);
