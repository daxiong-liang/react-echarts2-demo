import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import Echarts from "./routes/demo/Echarts.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Echarts} />
      <Route path="/echarts" component={Echarts} />
      <IndexRedirect to="/echarts" />
    </Router>
  );
}

export default RouterConfig;
