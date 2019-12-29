import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './styles.module.scss';
import useStyles from './styles';

const TabPanel = props => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <Typography
      className={styles.tabPanel}
      component="div"
      classes={classes}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={styles.box}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;
