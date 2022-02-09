import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/main/Home';
import Login from './views/auth/Login';
import Register from './views/auth/Register'; 
import Post from './views/admin/Post';
import LayoutMain from './views/main/LayoutMain';
import Dashboard from './views/admin/Dashboard.js';
import LayoutAdmin from './views/admin/LayoutAdmin.js';

function App() {
  return (
    <BrowserRouter>
        <Routes> 
           	<Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin" element={<LayoutAdmin/>}>
               <Route index element={<Dashboard/>}/>
               <Route path="post" element={<Post/>}/>
            </Route>
            <Route path="/" element={<LayoutMain/>}>
               <Route index element={<Home/>}/>
               <Route path="postList" element={<h1>Post Listados</h1>}/>
               <Route path="*" element={<h1>NoFOUND</h1>}/>
            </Route>

        </Routes>
    </BrowserRouter>
   

  );
}

export default App;
