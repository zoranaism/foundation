import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Causes from "../../components/Causes";
import CtaSection from "../../components/cta";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
// import abimg from "../../images/Volunteers.jpg";
import hero1 from "../../images/slider/background2.png";
import abimg from "../../images/about/team3.jpg";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero Hero={hero1} />
      <About AbImg={abimg} />
      <Causes />
      <CtaSection />
      {/* <Newsletter/> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
