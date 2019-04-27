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

function OnePage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <div className="Main">

          <img src={require('./veber.png')} className="Meow" />

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
          {/* <br /> */}
          <div className="RootGrid">
            <Grid container spacing={24}>
              <Grid item xs={6} alignContent="flex-start">
                <Typography variant="caption" gutterBottom color="secondary">
                  caption text
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" gutterBottom  color="secondary">
                  caption text
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default (OnePage);
