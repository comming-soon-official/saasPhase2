import React from "react";
import Hero from "@/views/pages/home/Hero";
import Features from "@/views/pages/home/Features";
import Testimonials from "@/views/pages/home/Testimonials";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import Explanation from "@/views/pages/home/Explanation";
import Projects from "@/views/pages/home/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Features />
      <Explanation />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
