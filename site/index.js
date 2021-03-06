import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import './index.css';
import App from './App';
import ThemeProvider from './ThemeProvider'
import allMiddleware from './middleware';
import rootReducer from './reducers';
import createTheme from './theme';

const theme = createTheme();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(allMiddleware)
);

render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
