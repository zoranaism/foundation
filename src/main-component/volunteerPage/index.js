import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Volunteer from '../../components/Volunteer'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const VolunteerPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Become a Volunteer'} pagesub={'Become a Volunteer'}/> 
            <Volunteer teamClas={'v2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VolunteerPage;
