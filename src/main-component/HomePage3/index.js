import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import Hero from '../../components/hero'
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
import abimg from '../../images/Volunteers.jpg'
import hero1 from '../../images/slider/slide-7.jpg'

import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <Hero Hero={hero1}/>
            <Features/>
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