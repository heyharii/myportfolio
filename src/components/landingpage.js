import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML / CSS | Bootstrap | JavaScript | Laravel | Ruby on Rails | React | Vue Js | PostgreSql / Mysql | Docker</p>

        <div className="social-links">


          {/* Github */}
          <a href="https://github.com/udahari" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github-square" aria-hidden="true" />
          </a>

          {/* Dockerimage */}
          <a href="https://hub.docker.com//r/23051995/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-docker" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
