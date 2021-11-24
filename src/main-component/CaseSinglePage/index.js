import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import CaseSingle from '../../components/CaseSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const CaseSinglePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Single Causes'} pagesub={'Ensure Education for every poor children'}/> 
            <CaseSingle/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePage;
