import DashboardBox  from "./components/dashboardBox";
import { PiUsersFourBold } from "react-icons/pi";
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IoIosTimer } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  {useEffect, useState} from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import { useContext } from "react";
import { MyContext } from "../../App";
import { Link } from 'react-router-dom';
const Dashboard =() =>{
    const context  = useContext(MyContext);
    const [showBy, setShowBy] =   useState('');
    const [categotyBy, setCategoryBy] =   useState('');
    const [brandBy, setBrandBy] =   useState('');
    const [searchBy, setSearchBy] =   useState('');
  
     useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);
        window.scroll(0,0);
     },[])

     const data = [
        ["Year", "Sales", "Expenses"],
        ["2020", 1000, 400],
        ["2021", 1170, 460],
        ["2022", 660, 1120],
        ["2023", 1030, 540],
      ];
       const options = {
        title: "Sales & Expense",
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor:'transparent',
        colors: ['#48d483','#FF0000'],
        width: context.isToggleSidebar ? 362 : 262,
      };
      
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
return(
  <>   
     <div className="right-content w-100">
       <div className="row dashboardWrapperRow">
       <div className="col-md-8">
       <div className="dashboardWrapper d-flex">
        <DashboardBox color={["#1da256","#48d483"]} icon={<PiUsersFourBold/>} name={'Total Users'} count={'3022'} grow={true}/>
        <DashboardBox color={["#c012e2","#eb64fe"]} icon={<CalendarMonthIcon/>} name={'Monthly Sales'} count={'1020'}/>
        <DashboardBox color={["#2c78e5","#60aff5"]} icon={<CalendarTodayIcon/>} name={'Today Sales'} count={'250'}/>
        <DashboardBox color={["#e1950e","#f3cd29"]} icon={<BusinessIcon/>} name={'Total Companies'} count={'500'}/>
        </div>
        </div>
         <div className="col-md-4 pl-0">
            <div className="box graphBox"> 
            <div className="d-flex align-items-center w-100 bottomEle">
            <h6 className="text-white mb-0 mt-0">Total Sales</h6>
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
             <h3 className=" text-white font-weight-bold">$3,787,681.00</h3>
             <p >$3,578.90 in last month</p>
             <Chart 
      chartType="LineChart"
      data={data}
      options={options}
      legendToggle
    />
            </div>
         </div>

       </div>

       <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Recent Invoices</h3>
        <div className="row cardFilters mt-3">
            <div className="col-md-3">
                <h4>SHOW BY</h4>
                <FormControl size="small" className="w-100">
                <Select
          value={showBy}
          onChange={(e)=>setShowBy(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
            </div>
            <div className="col-md-3">
                <h4>CATEGORY BY</h4>
                <FormControl size="small" className="w-100">
                <Select
          value={categotyBy}
          onChange={(e)=>setCategoryBy(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
            </div>
            <div className="col-md-3">
                <h4>BRAND BY</h4>
                <FormControl size="small" className="w-100">
                <Select
          value={brandBy}
          onChange={(e)=>setBrandBy(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
            </div>
            <div className="col-md-3">
                <h4>SEARCH BY</h4>
                <FormControl size="small" className="w-100">
                <Select
          value={searchBy}
          onChange={(e)=>setSearchBy(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
            </div>
        </div>
       </div>
        
        <div className="table-responsive mt-3">
          <table className="table table-bordered v-align">
            <thead className="thead-dark">
                <tr>
                    <th>INID</th>
                    <th>CUSTOMER NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE NO</th>
                    <th>GST NO</th>
                    <th>VEHICLE NO</th>
                    <th>VEHICLE MODEL</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#1</td>
                    <td>John</td>
                    <td>bc@gmail.com</td>
                    <td>9990009000</td>
                    <td>AAYBHYD890000Z</td>
                    <td>KA-01-DH-8979</td>
                    <td>Xtreme 160</td>
                    <td>PENDING</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Link to={'/invoice'}><Button className="secondary" color="secondary"><FaEye/></Button></Link>
                            <Button className="success" color="success"><FaPencilAlt/></Button>
                            <Button className="error" color="error"><RiDeleteBinLine/></Button>
                        </div>
                    </td>

                </tr>
            </tbody>

          </table>
             <div className="d-flex tableFotter">
                <p>Showing <b>10</b> of <b>60</b> results </p>
             <Pagination count={6} color="primary" showFirstButton showLastButton className="pagination" />
             </div>
      
        </div>

     </div>
   </>
)


}

export default Dashboard;