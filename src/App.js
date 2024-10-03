import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import NoPage from './page/NoPage';
import LayoutView from './layout/LayoutView';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HelmetProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/ecommerce' element={<LayoutView />}>
            <Route path='home' element={<HomePage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        </HelmetProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
