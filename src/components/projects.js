import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
      
          <div className="projects-grid">
         
             {/* Project 1 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/07/0701.sdt-rails.jpg) center / cover'}} >Castcast (LMS)</CardTitle>
            <CardText>
              Learning management system like udemy with subscriptions. Tech Stack : Laravel, VueJs, Redis, Sidekiq, StripeAPI.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/udahari/castcast">Github</a> </Button>
              <Button colored>OnProcess</Button>
              <Button colored><a href="castcast.tk">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

         {/* Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1024/0*owwiuHZkUm4AMr-i.png) center / cover'}} >appointmentReact</CardTitle>
         <CardText>
           Appointment management system with React on Rails.
         </CardText>
         <CardActions border>
           <Button colored><a href="https://github.com/udahari/AppointmentReact">GitHub</a></Button>
           <Button colored><a href="https://hub.docker.com/r/23051995/calendar_react/">Docker</a></Button>
           <Button colored><a href="https://calreact1.herokuapp.com/">Live Demo</a></Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
           <IconButton name="share" />
         </CardMenu>
       </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1024/0*owwiuHZkUm4AMr-i.png) center / cover'}} >ideaBoard</CardTitle>
         <CardText>
           IdeaBoard system with Rails API and React Frontend.
         </CardText>
         <CardActions border>
           <Button colored><a href="https://github.com/udahari/IdeaBoardReactFrontend/tree/master/ideaboard">Github</a></Button>
           <Button colored>OnProcess</Button>
           <Button colored><a href="https://ideaboardreact.herokuapp.com/">Live Demo</a> </Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
           <IconButton name="share" />
         </CardMenu>
       </Card>
      
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (

        <div className="projects-grid">
        
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*3VgNyD8Y0FaKmSK_nUTZfw.jpeg) center / cover'}} >Proyek Manajemen</CardTitle>
            <CardText>
              Project management system with Ruby On Rails and VueJS.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/udahari/proyekManajemen">Github</a></Button>
              <Button colored><a href="https://hub.docker.com/r/23051995/proyekmanajemen/">Docker</a></Button>
              <Button colored><a href="https://dashboard.heroku.com/apps/proyekmanajemen1">Live Demo</a> </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>

      )
    } else if(this.state.activeTab === 3) {
      return (

        <div className="projects-grid">

          <div className="projects-grid">
         
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/750/1*1cxvzNwx9AaQkh9gYC4bzw.jpeg) center / cover'}} >MyBnb (NDA Project)</CardTitle>
            <CardText>
              Booking management system like Airbnb with Airbnb full function. Tech Stack : Ruby on Rails, Twilio API, Stripe API, Omniauth.
            </CardText>
            <CardActions border>
              <Button colored>NDA</Button>
              <Button colored>NDA</Button>
              <Button colored>NDA</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>

        
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/07/0701.sdt-rails.jpg) center / cover'}} >Forum</CardTitle>
            <CardText>
              Forum management system with Ruby On Rails.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://forumdiskusi.herokuapp.com/">Github</a> </Button>
              <Button colored><a href="https://hub.docker.com/r/23051995/forum_rails/">Docker</a> </Button>
              <Button colored><a href="https://forumdiskusi.herokuapp.com/">Live Demo</a> </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/07/0701.sdt-rails.jpg) center / cover'}} >jobBoard</CardTitle>
            <CardText>
              jobBoard management system with Ruby On Rails and StripeAPI.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/udahari/jobBoardRails">Github</a> </Button>
              <Button colored><a href="https://hub.docker.com/r/23051995/jobboard_rails/">Docker</a> </Button>
              <Button colored><a href="https://jobboard12.herokuapp.com/">Live Demo</a> </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         </div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        
        <div className="projects-grid">
          
              {/* Project 3 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >myPortfolio</CardTitle>
            <CardText>
              My Portfolio website with React.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/udahari/myportfolio">Github</a></Button>
              <Button colored><a href="https://hub.docker.com/r/23051995/myportfolio_react/">Docker</a> </Button>
              <Button colored><a href="https://hariportfolio.netlify.com">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Laravel-VueJS</Tab>
          <Tab>Rails-ReactJS</Tab>
          <Tab>Rails-VUEJS</Tab>
          <Tab>Rails</Tab>
          <Tab>React</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
