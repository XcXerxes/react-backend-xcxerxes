import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './stores'
import './index.scss';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}
render(Routes)
registerServiceWorker();
