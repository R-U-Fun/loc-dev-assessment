import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage'
import backgroundImage2 from './Images/Map_BG.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage2})`, backgroundSize: 'cover', fontFamily: 'Comic Sans MS'}}>
        <br/><br/><br/>  
        <Header/>
        <div id="HomeHere">
            <HomePage/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
