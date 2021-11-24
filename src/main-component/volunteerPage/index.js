import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import Volunteer from '../../components/Volunteer'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const VolunteerPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Become a Volunteer'} pagesub={'Become a Volunteer'}/> 
            <Volunteer teamClas={'v2'}/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VolunteerPage;
