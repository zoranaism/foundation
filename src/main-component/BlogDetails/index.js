import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetails =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSingle/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
