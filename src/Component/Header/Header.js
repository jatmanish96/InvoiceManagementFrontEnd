import React,{ useContext, useState} from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/dashboard.png'
import { Button, Divider } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import userLogo from "../../Assets/user.png";
import { FaShieldAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from "../../App";

const Header = () =>{
    const context  = useContext(MyContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationDrop,setIsOpenNotificationDrop] = useState(null);
    const handleOpenMyAccDrop = (event)=> {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
      setAnchorEl(null);
    };

    const handleOpenNotificationDrop = (event) =>{
        setIsOpenNotificationDrop(event.currentTarget);
    }
    const handleCloseNotificationDrop = () =>{
        setIsOpenNotificationDrop(null);
    }
    return(
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center w-100">
                    {/*Logo Wrapper*/}
                    <div className="col-sm-2 part-1">
                        <Link to={'/'} className="d-flex align-items-center logo"> 
                        <img src={logo}/>
                        <span className="ml-2">MJ</span>
                        </Link>
                    </div>
                    <div className="col-sm-2 d-flex align-items-center part-2 pl-4">
                        <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                        {context.isToggleSidebar==false?<MdMenuOpen/> : <MdOutlineMenu/>}
                        </Button>
                       <SearchBox/>
                    </div>
                    <div className="col-sm-7 d-flex align-items-center justify-content-end part-3 ">
                        <Button className="rounded-circle mr-3"
                        onClick={()=>context.setIsThemeMode(!context.isThemeMode)}><MdLightMode/></Button>
                        <Button className="rounded-circle mr-3"><MdOutlineMail/></Button>
                        <Button className="rounded-circle mr-3" onClick={handleOpenNotificationDrop}><IoMdNotificationsOutline/></Button>
                        <Menu
        anchorEl={isOpenNotificationDrop}
        id="notifications"
        className="notifications"
        open={Boolean(isOpenNotificationDrop)}
        onClose={handleCloseNotificationDrop}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className="head pl-3 pb-0">
            <h4>Notifications </h4>
        </div>
        <Divider  className="mb-3"/>
        <MenuItem onClick={handleCloseNotificationDrop}>
        <div className="d-flex align-items-center">
            <span className="rounded-circle"></span>
        </div>
        </MenuItem>
                       </Menu>
                        
                       { context.isLogin!==true ? <Link to={'/login'}><Button className="btn-blue btn-lg btn-round">Sign In</Button></Link> :
                         <div className="myAccWrapper">
                        <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                            <div className="userImg">
                                <span className="rounded-circle">
                                    <img src={userLogo}/>
                                </span>
                            </div>
                            <div className="userInfo">
                                <h4>Manish Jat</h4>
                                <p className="mb-0">@jatmanish</p>
                            </div>
                        </Button>
                        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleCloseMyAccDrop}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAccDrop}>
        <ListItemIcon>
        <FaRegUser /> 
        </ListItemIcon>
          My Account 
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <FaShieldAlt  />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Logout  />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                        </div>
                       }

                        
                    </div>
                </div>
            </div>
        </header>
    )

}



export default Header; 