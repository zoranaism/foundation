import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            {/* <Newsletter/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

