import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import Gallery2 from '../../components/Gallery2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const GalleryPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'}/> 
            <Gallery2/>
            <Newsletter NewsClass={'v2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GalleryPage;

