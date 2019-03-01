import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SkappSettingsWidget.module.scss'
import Switch from '@material-ui/core/Switch'
import SettingsContext from '../../utils/SkappContexts'
import { Icon } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import purple from '@material-ui/core/colors/purple';

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
  render() {
    const { classes } = this.props;
    return (
      <div className={styles.widgetContainer}>
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
          <div className={styles.theme}>
            <p>Light Theme</p>
            <Switch
              checked={this.context.settings.light}
              onChange={(event) => this.context.updateSettings(event.target.value)}
              value="light"
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
        <div className={styles.settingsOpener}>
          <Icon className={styles.icon} style={{ fontSize: 24 }}>settings</Icon>
        </div>
      </div>
    );
  }
}

export default withStyles(switchesStyles)(SkappSettingsWidget);
