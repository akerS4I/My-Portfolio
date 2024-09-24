import "./styles/App.scss";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Availability from "./components/Availability";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Education />
      <Projects />
      <Languages />
      <Availability />
      <Footer />
    </div>
  );
}

export default App;
