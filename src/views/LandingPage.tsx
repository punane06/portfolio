import NavBar from "../components/Navbar";
import Hero from "../layouts/Hero";
// import Portfolio from "../layouts/Portfolio";
// import AboutMe from "../layouts/AboutMe";
import Contact from "../layouts/Contact";
import Footer from "../components/Footer";
import AboutMe from "../layouts/AboutMe";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <Portfolio /> */}
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
