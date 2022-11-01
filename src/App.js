import About from "./About/About";
import "./App.scss";
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <About />
        <Career />
        <Contact />
        <h2>¡En desarrollo!</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
