import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/main/Home';
import Login from './views/auth/Login';
// import CreateArticles from './views/admin/CreateArticles';
import LayoutMain from './views/main/LayoutMain';

function App() {
  return (
    <BrowserRouter>
        <Routes> 
        	<Route path="/login" element={<Login/>}/>
          <Route path="/" element={<LayoutMain/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
