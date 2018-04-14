import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Personalskill extends Component {
  render() {
    return(
      <Grid>
        <Cell col={6}>
            <div style={{display: 'flex'}}>{this.props.skill1}  </div>
        </Cell>
        
        <Cell col={6}>
            <div style={{display: 'flex'}}>{this.props.skill2}  </div>
        </Cell>
        
  
      </Grid>
    )
  }
}

export default Personalskill;
