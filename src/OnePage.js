import './styles.css'
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

function OnePage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <div className="Main">
          <div className="Meow">Who Said Meow?</div>
        </div>
        <div className="Footer">
          <div className='ButtonBox'>
            <div className='Column'>
              <Button variant="contained" className='clickToCall'>
                <Typography variant="subtitle1" gutterBottom>
                  HELISTA
            </Typography>
              </Button>
            </div>
            <div className='Column'>
              <Button variant="contained" className='clickToEmail'>
                <Typography variant="subtitle1" gutterBottom>
                  SAADA E-MAIL
                </Typography>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default (OnePage);
