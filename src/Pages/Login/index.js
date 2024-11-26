import { useContext, useEffect, useState } from 'react'
import logo from '../../Assets/dashboard.png'
import { MyContext } from '../../App'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import googleIcon from "../../Assets/7123025_logo_google_g_icon.png"

const Login = () =>{

  const [isShowPassword,setIsShowPassword] = useState(false);
  const [inputIndex,setInputIndex]  = useState(null);
  const  context = useContext(MyContext);
  useEffect(()=>{
    context.setIsHideSidebarAndHeader(true);
    window.scroll(0,0);
  },[])

  const focusInput= (index)=>{
       setInputIndex(index);
  }
    return(
       <>
        <section className="loginSection">
            <div className="loginBox">
               <div className='logo text-center'>
                <img src={logo} ></img>
                <h4 className='font-weight-bold'>Login to Dashboard</h4>
               </div>
               <div className='wrapper mt-3 card border p-4'>
                 <form>
                    <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                        <span className='icon'><MdOutlineMail/></span>
                       <input type='text' className='form-control' placeholder='Enter your email' onFocus={()=>focusInput(0)} onBlur={()=>focusInput(null)} autoFocus></input>
                    </div>
                    <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                        <span className='icon'><RiLockPasswordLine/></span>
                       <input type={ `${isShowPassword===true?'text':'password'}`} className='form-control' placeholder='Enter your password' onFocus={()=>focusInput(1)} onBlur={()=>focusInput(null)}></input>
                       <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                         {isShowPassword===true?<IoIosEye/>:<IoIosEyeOff/>}
                        </span>
                    </div>

                    <div className='form-group'>
                        <Button className="btn-blue btn-lg w-100">SING IN</Button>
                    </div>
                    
                    <div className='form-group text-center'>
                        <Link to={'/forget-password'} className='link'>FORGET PASSWORD</Link>
                        <div className='d-flex align-items-center justify-content-center or mt-3'>
                            <span className='line'></span>
                            <span className='text'>or</span>
                            <span className='line'></span>
                        </div>
                    </div>

                    <Button variant='outlined'  className='w-100 btn-lg loginWithGoogle'><img src={googleIcon} width='25px'/>&nbsp;Sign In with Google</Button>

                 </form>

               </div>
               <div className='wrapper mt-3 card border fotter p-3'>
                <span className='text-center '>
                    Don't have an account?
                    <Link to={'/signup'} className='link color ml-2'>Register</Link>
                </span>
               </div>
            </div>
        </section>
       </>
    )

}

export default Login;