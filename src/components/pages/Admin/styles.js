import { makeStyles } from '@material-ui/core/styles';

export const useTabStyles = makeStyles(() => ({
  root: {
    minWidth: '100px',
    padding: 0,
    margin: '0 15px 5px 0',
    border: '1px solid #ddd',
  },
}));

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
