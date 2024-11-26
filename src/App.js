import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Component/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './Component/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import InvoicePage from './Pages/Invoice';


const MyContext = createContext();

function App() {
  const [isToggleSidebar , setIsToggleSidebar] = useState(false);
  const [isLogin,setIsLogin] = useState(true);
  const [isHideSidebarAndHeader,setIsHideSidebarAndHeader] = useState(false);
  const [isThemeMode,setIsThemeMode] = useState(true);

  useEffect(()=>{
    if(isThemeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('isThememode','light');
    }
   else{ document.body.classList.remove('light');
         document.body.classList.add('dark');
          localStorage.setItem('isThememode','dark');}
        }
,[isThemeMode])

  const values ={
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    isThemeMode,
    setIsThemeMode
  }
 
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      { isHideSidebarAndHeader!==true && <Header/>}
     <div className='main d-flex'>
      {isHideSidebarAndHeader!==true &&<div className={`sidebarWrapper ${isToggleSidebar===true ?'toggle':''}`}>
        <Sidebar/>
      </div>}
      <div className={`content ${isHideSidebarAndHeader===true && 'full'} ${isToggleSidebar===true ?'toggle':''}`}>
      <Routes>
       <Route  path="/"  exact={true} element={<Dashboard/>}/>
       <Route  path="/dashboard"  exact={true} element={<Dashboard/>}/>
       <Route  path="/login"  exact={true} element={<Login/>}/>
       <Route  path="/signup"  exact={true} element={<SignUp/>}/>
       <Route  path="/invoice"  exact={true} element={<InvoicePage/>}/>
      </Routes>
      </div>
     </div>
     </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext};
