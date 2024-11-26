import  {useState} from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { IoIosTimer } from "react-icons/io";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const DashboardBox = (props) =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
return(

  

  <Button className="dashboardBox" style={{
    backgroundImage: `linear-gradient(to right, ${props?.color[0]}, ${props?.color[1]})`,
  }}>
    {props.grow===true?<span className="chart"><TrendingUpIcon/></span>:<span className="chart"><TrendingDownIcon/></span>}
   <div className="d-flex w-100">
    <div className="col1">
        <h4 className="text-white mb-0">{props?.name}</h4>
        <span className="text-white">{props?.count}</span>
    </div>
    <div className="ml-auto">
        <span className="icon">
         {props?.icon}
        </span>
    </div>
   </div>
    <div className="d-flex align-items-center w-100 bottomEle">
        <h6 className="text-white mb-0 mt-0">Last Month</h6>
        <div className='ml-auto'>
            <Button className="ml-auto toggleIcon"  onClick={handleClick}><BsThreeDotsVertical/></Button>
            <Menu
        className="dropdown_menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
    
          <MenuItem  onClick={handleClose}>
           <IoIosTimer/> Last Day
          </MenuItem>
          <MenuItem  onClick={handleClose}>
          <IoIosTimer/> Last Week
          </MenuItem>
          <MenuItem  onClick={handleClose}>
          <IoIosTimer/> Last Month
          </MenuItem>
          <MenuItem  onClick={handleClose}>
          <IoIosTimer/> Last Year
          </MenuItem>        
      </Menu>
        </div>
    </div>
    
  </Button>
  
  
        
)
}

export default DashboardBox;