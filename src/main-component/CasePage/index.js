import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import PageTitle from '../../components/pagetitle'
import Causes from '../../components/Causes'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Newsletter from '../../components/Newsletter'
import CounterSection from '../../components/counter'


const CausePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Our Causes'} pagesub={'Causes'}/> 
            <Causes/>
            <CounterSection counter={'v2'}/>
            <Newsletter NewsClass={'s2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CausePage;
