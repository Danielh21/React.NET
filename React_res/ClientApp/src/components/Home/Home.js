import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Resume from '../Resume'
import Technology from '../Technology'
import Navigation from '../Navigation'

export default class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.reactContainer}>
        <div className={classes.headerDiv}>
          <h1>Hello, world!</h1>

        </div>
        <div id="mainContainer" className={classes.mainContainer}>
                <div id="NavDiv" className={classes.navDiv}>
                  This is Nav
          </div>
          <div className={classes.contentDiv}>
            <Route exact path='/' component={Resume}/>
            <Route path='/tech' component={Technology}/>
          </div>
        </div>
        <div id="footer" className={classes.footerDiv}>
            <div>
              I am Footer
              </div>
        </div>


      </div>
    );
  }
}
