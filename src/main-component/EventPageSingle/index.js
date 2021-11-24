import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import EventSingle from '../../components/EventSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const EventPageSingle =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Single Event'} pagesub={'Education for All Children'}/> 
            <EventSingle/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPageSingle;
