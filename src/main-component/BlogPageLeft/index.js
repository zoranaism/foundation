import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import BlogLeft from '../../components/BlogLeft'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'


const BlogPageLeft =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogLeft/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageLeft;

