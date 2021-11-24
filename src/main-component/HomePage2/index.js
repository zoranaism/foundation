import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero2 from '../../components/hero2'
import About from '../../components/about'
import Features from '../../components/Features'
import Causes from '../../components/Causes'
import CounterSection from '../../components/counter'
import Gallery from '../../components/Gallery'
import EventSection from '../../components/event'
import TeamSection from '../../components/team'
import CtaSection from '../../components/cta'
import BlogSection from '../../components/BlogSection'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/footer'
import abimg from '../../images/Volunteers2.jpg'

import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero2/>
            <Features Features={'features-area-2'}/>
            <About AbImg={abimg}/>
            <Causes/>
            <CounterSection/>
            <Gallery/>
            <TeamSection/>
            <EventSection/>
            <CtaSection/>
            <BlogSection/>
            <Newsletter/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;