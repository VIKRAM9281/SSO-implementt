import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Title from './Title';
import OAuthCallback from './Callback';
import OAuthError from './Error';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Title/>}/>
          <Route path='/callback' element={<OAuthCallback/>}/>    
          <Route path='/error' element={<OAuthError/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
