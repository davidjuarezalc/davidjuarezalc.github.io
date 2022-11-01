import About from "./About/About";
import "./App.scss";
import Career from "./Career/Career";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <About />
        <Career />
      </div>
      <Footer />
    </div>
  );
}

export default App;
