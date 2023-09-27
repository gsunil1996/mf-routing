import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFoundApp';

const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'da-custom'; // Customize the class name prefix here

const App = ({ history }) => {
  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App