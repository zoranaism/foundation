import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const DonatePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <Donate/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePage;
