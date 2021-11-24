import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import Shop from '../../components/Shop'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const ShopPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
            <Shop/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopPage;

