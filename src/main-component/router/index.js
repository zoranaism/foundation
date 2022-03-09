import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import GalleryPage from '../GalleryPage'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import ContactPage from '../ContactPage' 
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/gallery' component={GalleryPage} />
            <Route path='/donate' component={DonatePage}/>
            <Route path='/volunteer' component={VolunteerPage}/> 
            <Route path='/contact' component={ContactPage}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
