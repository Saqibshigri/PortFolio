
 import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects'
import Footer from './Components/Footer'
// import AboutMe from './Components/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main>
        {/* <AboutMe/> */}
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

