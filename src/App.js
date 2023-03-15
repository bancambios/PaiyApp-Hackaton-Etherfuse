//import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './components/Login'
import WalletSelect from './components/Wallet select';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className='wallet_button'><WalletSelect /></div>
      
        <Routes>
        
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
