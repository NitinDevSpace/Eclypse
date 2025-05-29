import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Gallery from './Gallery';
import Details from './Details';
import Customers from './Customers';
import Footer from './Footer';
import Silhouette from './Silhouette';
import { Routes, Route } from 'react-router-dom';
import PlaceOrder from './PlaceOrder';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route
          path="/Eclypse"
          element={
            <>
              <Hero />
              <Gallery />
              <Silhouette />
              <Details />
              <Customers />
              <Footer />
            </>
          }
        />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;