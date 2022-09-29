import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
