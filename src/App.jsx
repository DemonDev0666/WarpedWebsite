import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Releases from "./components/releases/Releases"

function App() {
  return(
    <>
   <Navbar />
   <Hero />
   <About />
   <Releases />
   <Footer />
    </>
  )
}

export default App;