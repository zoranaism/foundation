import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Gallery2 from '../../components/Gallery2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const GalleryPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'}/> 
            <Gallery2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GalleryPage;

