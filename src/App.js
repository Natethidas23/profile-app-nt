import About from "./components/About.jsx"
import Carousel from "./components/Carousel.jsx"
import Footer from "./components/Footer.jsx"
import Grid from "./components/Grid.jsx"
import Quote from "./components/Quote.jsx"
import Video from "./components/Video.jsx"

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <About/>
       <Carousel/>
       <Footer/>
       <Grid/>
       <Quote/>
       <Video/>
    </div>
  );
}

export default App;
