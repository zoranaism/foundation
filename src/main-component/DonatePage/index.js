import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const DonatePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <Donate/>
            {/* <Newsletter/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePage;
