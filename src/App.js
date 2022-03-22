// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar'
import Textbox from './component/Textbox';


function App() {
  return (
    <>
      <Navbar title="myweb" menu="see menu"/>
      {/* <Navbar/> */}
      <div className="container">
      <Textbox title="Write Text"/>
      <About/>
      </div>
        </>

  );
}

export default App;
