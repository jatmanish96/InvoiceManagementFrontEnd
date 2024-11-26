import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";

const Sidebar = () =>{
    const [activeTab,setActiveTab] = useState(null);
    const isOpenSubMenu = (tabIndex) => {
        setActiveTab(prevTab => prevTab === tabIndex ? null : tabIndex); // Toggle submenu visibility
    }
  return(
    <>
    <div className="sidebar">
     <ul >
        <li><Button className={`w-100 ${activeTab===0 ? 'active' :''} `} onClick={()=>isOpenSubMenu(0)}>
            <span className='icon'><MdOutlineDashboard/></span>Dashboard 
            <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===0 ? 'colapse':'colapsed'}`}>
            <ul className='submenu'>
                <li><Link to='#'>Overview</Link></li>
            </ul>
            </div>
        </li>
        <li><Button className={`w-100 ${activeTab===1 ? 'active' :''}`} onClick={()=>isOpenSubMenu(1)}>
            <span className='icon'><LiaFileInvoiceDollarSolid/></span>Invoices 
            <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===1 ? 'colapse':'colapsed'}`}>
            <ul className='submenu'>
                <li><Link to='#'>Create Invoice</Link></li>
                <li><Link to='#'>View Invoice</Link></li>
                <li><Link to='#'>Delete Invoice</Link></li>
                <li><Link to='#'>Export Invoice</Link></li>
            </ul>
            </div>
        </li>    
        <li><Button className={`w-100 ${activeTab===2 ? 'active' :''} `}  onClick={()=>isOpenSubMenu(2)}>
            <span className='icon'><FaUsers/></span>Users 
            <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===2 ? 'colapse':'colapsed'}`}>
            <ul className='submenu'>
                <li><Link to='#'>Create Users</Link></li>
                <li><Link to='#'>View Users</Link></li>
                <li><Link to='#'>Edit Users</Link></li>
                <li><Link to='#'>Delete Users</Link></li>
                <li><Link to='#'>Approve Users</Link></li>
            </ul>
            </div>
        </li>
        <li><Button className={`w-100 ${activeTab===3 ? 'active' :''} `}  onClick={()=>isOpenSubMenu(3)}>
            <span className='icon'><AddBusinessIcon/></span>Companies 
            <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===3 ? 'colapse':'colapsed'}`}>
            <ul className='submenu'>
                <li><Link to='#'>Create Company</Link></li>
                <li><Link to='#'>View Company</Link></li>
                <li><Link to='#'>Edit Company</Link></li>
                <li><Link to='#'>Delete Company</Link></li>
                <li><Link to='#'>Approve Company</Link></li>
            </ul>
            </div>
        </li>
       <li><Button className={`w-100 ${activeTab===4 ? 'active' :''} `} onClick={()=>isOpenSubMenu(4)}>
           <span className='icon'><MdOutlineSettingsApplications/></span>Settings 
           <span className='arrow'><FaAngleRight/></span>
           </Button>
           <div className={`submenuWrapper ${activeTab===4 ? 'colapse':'colapsed'}`}>
            <ul className='submenu'>
                <li><Link to='#'>User Permission</Link></li>
                <li><Link to='#'>Assign Permission</Link></li>
            </ul>
            </div>
       </li>
       <li><Button className={`w-100 ${activeTab===5 ? 'active' :''} `} onClick={()=>isOpenSubMenu(5)}>
           <span className='icon'><IoIosLock/></span>Authentication 
           <span className='arrow'><FaAngleRight/></span>
           </Button>
           <div className={`submenuWrapper ${activeTab===5 ? 'colapse':'colapsed'}`}>
            <ul className='submenu'>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/signup'}>Registration</Link></li>
            </ul>
            </div>
       </li>
     </ul>
     <br/>
     <div className='logoutWrapper'>
     <div className='logoutbox'>
     <Button variant="contained"><RiLogoutCircleRLine/> Logout</Button>
     </div>
     </div>
    
    </div>
    </>
  )

}

export default Sidebar;