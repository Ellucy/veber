import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';
import './styles.css'
import logo from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#007bff' },
    secondary: { main: '#ffffff' },
  },
  typography: { useNextVariants: true },
});

function OnePage() {

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <div className="Main">

            <img src={logo} className="Veber-logo" alt="logo" />

          </div>
          <div className="Footer">
            <div className='ButtonBox'>

              <div className='Column'>

                <Button variant="contained" color="primary" href="tel:+37258504843" className='Button'>
                  
                  <Icon className='leftIcon'>call</Icon>
                  <span className="buttonText" style={{ textTransform: 'lowercase'}}>
                    +372 5372 1200
                </span>

                </Button>
              </div>

              <div className='Column'>

                <Button variant="contained" color="primary" href="mailto:info@veber.ee" className='Button'>
                  
                  <Icon className='leftIcon'>email</Icon>
                  <span className="buttonText" style={{ textTransform: 'lowercase' }}>
                    info@veber.ee
                </span>
                

                </Button>

              </div>

              <break></break>

              <div className='ColumnText'>

              <Typography variant="caption" gutterBottom color="secondary">Veber Ehitus OÜ</Typography>
              <Typography variant="caption" gutterBottom color="secondary">Uus-Kalamaja 5, Tallinn, 10415 Harjumaa</Typography>
              <Typography variant="caption" gutterBottom color="secondary">Reg. nr. 14460351, KMKR: EE102110160</Typography>
              <Typography variant="caption" gutterBottom color="secondary" className="lastItem">SEB Pank: EE851010220278730228</Typography>
              </div>

            </div>

          </div>
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default (OnePage);
