import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import BlogDetailsFullwidth from '../../components/BlogDetailsFullwidth'
import Footer from '../../components/footer'
import Newsletter from '../../components/Newsletter'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsFull =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogDetailsFullwidth/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;