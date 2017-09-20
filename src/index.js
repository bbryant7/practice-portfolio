import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home.js'
import Portfolio from './components/Portfolio.js'
import About from './components/About';
import BaseLayout from './components/BaseLayout.js'




ReactDOM.render(
  <App />
  // <BrowserRouter>
  //  <BaseLayout>
  //    <Switch>
  //      <Route path= '/portfolio' component={Find}/>
  //      <Route path= '/about' component={Menu}/>
  //      <Route path= '/' component={About}/>
  //    </Switch>
  //  </BaseLayout>
  //  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
