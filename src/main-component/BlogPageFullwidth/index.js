import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import BlogFullwidth from '../../components/BlogFullwidth'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'

const BlogPageFullwidth =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogFullwidth/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

