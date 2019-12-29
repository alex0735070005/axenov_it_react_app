// eslint-disable-next-line import/prefer-default-export
export const controlProps = index => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};
