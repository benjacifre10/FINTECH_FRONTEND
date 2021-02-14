import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Current from './containers/Current/Current';
import Forecast from './containers/Forecast/Forecast';
import Layout from './components/UI/Layout/Layout';

import styles from './index.module.css';

const App = () => {
    const routes = (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/current" component={Current} />
            <Route exact path="/forecast" component={Forecast} />
        </Switch>  
    );
    return (
      <div className={styles.app}>
          <Layout>
              {routes}
          </Layout>
      </div>
    );
}

export default App;
