import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import BlogDetailsLeft from '../../components/BlogDetailsLeft'
import Footer from '../../components/footer'
import Newsletter from '../../components/Newsletter'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsLeftSiide =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogDetailsLeft/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


