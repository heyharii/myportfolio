import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Techxp from './techxp';
import Personalskill from './personalskill'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Hari</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>"I'm motivated and have a goal this year to work outside my country, to meet great people and great leader. Learn as much as I can and back to build my country.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Jakarta Indonesia</p>
            <h5>Phone</h5>
            <p>(+62) 81374600472</p>
            <h5>Email</h5>
            <p>hari@alumni.ui.ac.id</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2017}
              schoolName="University of Indonesia"
              schoolDescription="The best university in Indonesia. Bachelor in Computer Science"
               />

            <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Work Experience</h2>

            <Experience
              Year={2017}
              jobName="Intern at National Accreditation Board Indonesia"
              jobDescription="Full Stack Developer.I created internal mail system. Deployed to the server and Maintained it"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Freelancer at Guru. Get a project from company at Canada (NDA Project)"
                jobDescription="Full Stack Developer. I created website like airbnb for business tiny homes and Deployed it to the server"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={80}
                />
                <Skills
                  skill="Javascript"
                  progress={80}
                  />
                  <Skills
                    skill="Laravel"
                    progress={75}
                    />
                    <Skills
                      skill="Rails"
                      progress={70}
                      />
                        <Skills
                          skill="React"
                          progress={30}
                          />
                          <Skills
                            skill="VueJs"
                            progress={30}
                            />
                            <Skills
                              skill="Docker"
                              progress={25}
                              />

              <hr style={{borderTop: '3px solid #e22947'}} />

                  <h2>Tech Experience</h2>

                    <Techxp
                      techxp1="Amazon EC2"
                      techxp2="Rancher Docker UI"
                      />
                      <Techxp
                        techxp1="Amazon S3"
                        techxp2="Heroku"
                        />
                        <Techxp
                          techxp1="Git Github"
                          techxp2="TDD"
                          />
                          <Techxp
                            techxp1="Redis"
                            techxp2="Stripe - Twilio API"
                            />
                            <Techxp
                              techxp1="Firebase"
                              techxp2="Bulma - Bootstrap"
                              />
                              <Techxp
                                techxp1="API"
                                techxp2="Omniauth"
                                />

               <hr style={{borderTop: '3px solid #e22947'}} />

                  <h2>Personal Skills</h2>

                    <Personalskill
                      skill1="Interpersonal"
                      skill2="Communication"
                      />
                      <Personalskill
                        skill1="Self Learning"
                        skill2="Remote work"
                        />
                        <Personalskill
                          skill1="Self driven"
                          skill2="Presentations"
                          />
                          <Personalskill
                            skill1="Adapt new tech"
                            skill2="Create Mindset"
                            />
                            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
