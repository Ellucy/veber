import './styles.css'
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import './styles.css'
import logo from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#00FF00' }, // Purple and green play nicely together.
    secondary: { main: '#ffffff' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

function OnePage(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <div className="Main">
          <img src={logo} className="Veber-logo" alt="logo" />
          {/* <img src={require('./veber.png')} className="Meow" /> */}

        </div>
        <div className="Footer">
          <div className='ButtonBox'>

            <div className='Column'>

              <Button variant="contained" color="primary" href="tel:+37258504843" className='Button'>
                <Icon className='leftIcon'>call</Icon>
                +372 5850 4843
              </Button>
            </div>

            <div className='Column'>

              <Button variant="contained" color="primary" href="mailto:info@veber.ee" className='Button'>
                <Icon className='leftIcon'>email</Icon>
                info@veber.ee
            </Button>

            </div>

          </div>

        </div>
      </div>
    </React.Fragment>
    </MuiThemeProvider>
  );
}
export default (OnePage);
