import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Footer from './components/Footer/Footer';


function App() {
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
