import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Techxp extends Component {
  render() {
    return(
      <Grid>
        <Cell col={6}>
            <div style={{display: 'flex'}}>{this.props.techxp1}  </div>
        </Cell>
        
        <Cell col={6}>
            <div style={{display: 'flex'}}>{this.props.techxp2}  </div>
        </Cell>
        
  
      </Grid>
    )
  }
}

export default Techxp;
