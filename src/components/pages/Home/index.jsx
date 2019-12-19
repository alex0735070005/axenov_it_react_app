import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ApiList from './components/ApiList';

import './styles.scss';

const Home = () => (
  <div className="home">
    <h1 className="page__title">
      <HomeWorkIcon className="page__icon" />
      API DATA URLS
    </h1>
    <ApiList />
  </div>
);
export default Home;
