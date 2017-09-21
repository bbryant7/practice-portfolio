import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import BaseLayout from './components/BaseLayout.js';
import Contact from './components/contacts.js';
import References from './components/references.js';




ReactDOM.render(
  <BrowserRouter>
   <BaseLayout>
     <Switch>
      <Route exact path="/" component={App}/>
       <Route path= '/portfolio' component={Portfolio}/>
       <Route path= '/about' component={About}/>
       <Route path= '/contact' component={Contact}/>
       <Route path= '/references' component={References}/>
       <Route path= '/home' component={Home}/>
     </Switch>
   </BaseLayout>
   </BrowserRouter>

  ,document.getElementById('root'));
registerServiceWorker();
