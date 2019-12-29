import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from 'components/modules/admin/TabPanel';
import GroupIcon from '@material-ui/icons/Group';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Users from 'components/modules/admin/Users';
import useStyles, { useTabStyles } from './styles';
import { controlProps } from './helpers';

const Admin = () => {
  const classes = useStyles();
  const tabClasses = useTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          classes={tabClasses}
          label="Users"
          icon={<GroupIcon />}
          {...controlProps(0)}
        />
        <Tab
          classes={tabClasses}
          label="Analytics"
          icon={<AssessmentIcon />}
          {...controlProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Analytics info
      </TabPanel>
    </div>
  );
};

export default Admin;
