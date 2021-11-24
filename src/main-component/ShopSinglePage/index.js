import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import ShopSingle from '../../components/shopsingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const ShopSinglePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Shop Single'} pagesub={'Shop'}/> 
            <ShopSingle/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopSinglePage;

