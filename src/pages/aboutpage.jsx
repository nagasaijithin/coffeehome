import React from "react";
import Aboutheader from "../components/about/aboutheader.component";
import Thebestcoffee from "../components/about/thebestcoffee.component";
import Weserve from "../components/about/weserve.component";
import Ourgallery from "../components/about/ourgallery.component";
import Ourteams from "../components/about/ourteam.component";
import Contects from "../components/about/contect.component";
import Footer from "../components/footer.component";

const About = () => {
  return (
    <div>
      <Aboutheader />
      <Thebestcoffee />
      <Weserve />
      <Ourgallery />
      <Ourteams />
      <Contects />
      <Footer />
    </div>
  );
};

export default About;
