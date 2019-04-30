import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderAppBar from './components/Headers';
import AppRouter from './AppRouter';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from  './store/index'
import Provider from "react-redux/es/components/Provider";

const App = () => (
    <MuiThemeProvider>
        <AppRouter />
    </MuiThemeProvider>
);
render(<Provider store={store}>     <App />   </Provider>, document.getElementById('app'));
