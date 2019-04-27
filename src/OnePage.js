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
        
          <img src={require('./veber.png')} className="Meow"/>

        </div>
        <div className="Footer">
          <div className='ButtonBox'>

            <div className='Column'>


              {/* <a href="tel:+37258504843" className='clickToCall'>

                <span className='actionButton'>
                  <i class="material-icons md-dark">
                    call
                </i>

                  <span className="text">+372 5850 4843</span>
                </span>
              </a> */}

              <Button variant="contained" color="primary" href="tel:+37258504843" className='clickToCall'>
                <Call className='leftIcon' />
                +372 5850 4843
              </Button>
            </div>

            <div className='Column'>

              {/* <a href="mailto:mets.eleri@gmail.com" className='clickToEmail'>

                <span className='actionButton'>
                  <i class="material-icons md-dark" >
                    email
              </i>

                  <span className="text">SAADA E-MAIL</span>
                </span>
              </a> */}

              <Button variant="contained" color="primary" href="mailto:mets.eleri@gmail.com" className='clickToEmail'>
                <Email className='leftIcon' />
                mets.eleri@gmail.com
          </Button>

            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default (OnePage);
