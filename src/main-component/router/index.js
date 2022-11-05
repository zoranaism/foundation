import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import GalleryPage from '../GalleryPage'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import ContactPage from '../ContactPage' 
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/home' element={<Homepage />} />
            {/* <Route path='/gallery' element={<GalleryPage />} /> */}
            {/* <Route path='/donate' element={<DonatePage />}/> */}
            {/* <Route path='/volunteer' element={<VolunteerPage />}/>  */}
            {/* <Route path='/contact' element={<ContactPage />}/> */}
          </Routes>
      </Router>
      
    </div>
  );
}

export default AllRoute;
