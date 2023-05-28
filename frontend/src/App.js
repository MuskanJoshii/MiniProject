import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import Instaloginn from './components/main/Instaloginn';
import Manage from './components/main/Manage';
import View from './components/main/View';
import List from './components/main/List';
import AddComponent from './components/user/AddComponent';
import ComponentsDetails from './components/main/ComponentsDetails';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main/home"/>} />
        <Route path="main" element={<Main/>}>
          <Route path="home" element={<Home />}/>
          <Route path="signup" element={<Signup /> }/>
          <Route path="login" element={<Login />}/>
          <Route path="navbar" element={<Navbar />}/>
          <Route path="instaloginn" element={<Instaloginn />}/>
          <Route path="manage" element={<Manage />}/>
          <Route path="viewer/:id" element={<View />}/>
          <Route path="list" element={<List />}/>
          <Route path="addcomponent" element={<AddComponent />}/>
          <Route path="addDetails" element={<ComponentsDetails />}/>
          <Route path="list" element={<List />}/>
          
          

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
