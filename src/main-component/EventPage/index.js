import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import EventSection from '../../components/event'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'
import CounterSection from '../../components/counter'

const EventPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Our Event'} pagesub={'Event'}/> 
            <EventSection/>
            <CounterSection counter={'v2'}/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
