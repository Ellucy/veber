import './styles.css'
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
            <div className='Button1'>button1</div>
            <div className='Button2'>button2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default (OnePage);
