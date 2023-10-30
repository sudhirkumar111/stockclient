import './App.css';
import Home from './component/Home.js'
import PageNotFound from './component/PageNotFound.js'
import {Routes, BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
