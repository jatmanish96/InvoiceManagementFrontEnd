import { useContext, useEffect, useState } from "react";
import logo from '../../Assets/dashboard.png'
import { MyContext } from '../../App'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Button, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import googleIcon from "../../Assets/7123025_logo_google_g_icon.png"
import Checkbox from '@mui/material/Checkbox';
import { IoHomeOutline } from "react-icons/io5";

const SignUp = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isConfirmShowPassword, setIsConfirmShowPassword] = useState(false);
    const [inputIndex, setInputIndex] = useState(null);
    const context = useContext(MyContext);
    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
        window.scroll(0,0);
    }, [])

    const focusInput = (index) => {
        setInputIndex(index);
    }
    return (
        <>
            <section className="loginSection signUpSection">
                <div className="row">
                    <div className="col-md-8 d-flex align-items-center justify-content-center flex-column part-1 ">
                        <h1> BEST BILL <span className="text-sky">INVOICES DASHBOARD</span> & ADMIN PANEL</h1>
                        <p>The system will automate the creation of invoices, integrating customer data, pricing details, and payment terms. Additionally, it will enable users to track invoice statuses, generate reports, and send reminders for overdue payments. The project will reduce human errors, improve efficiency, and ensure timely payments by offering a user-friendly interface for both administrators and clients. The system will also support multiple currencies and payment methods, making it adaptable to a global business environment.</p>
                        <div className="w-100 mt-4">
                        <Link to={'/'}>
                        <Button className="btn-blue btn-lg">< IoHomeOutline className="homeicon"/> Go To Home</Button>
                        </Link>
                        </div>
                       
                    </div>

                    <div className="col-md-4 pr-0">
                        <div className="loginBox">
                            <div className='logo text-center'>
                                <img src={logo} ></img>
                                <h4 className='font-weight-bold'>Register User</h4>
                            </div>
                            <div className='wrapper mt-3 card border p-4'>
                                <form>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'><MdOutlineMail /></span>
                                        <input type='text' className='form-control' placeholder='Enter your name' onFocus={() => focusInput(0)} onBlur={() => focusInput(null)} autoFocus></input>
                                    </div>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'><MdOutlineMail /></span>
                                        <input type='text' className='form-control' placeholder='Enter your email' onFocus={() => focusInput(1)} onBlur={() => focusInput(null)}></input>
                                    </div>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'><RiLockPasswordLine /></span>
                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='Enter new password' onFocus={() => focusInput(2)} onBlur={() => focusInput(null)}></input>
                                        <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                                            {isShowPassword === true ? <IoIosEye /> : <IoIosEyeOff />}
                                        </span>
                                    </div>

                                    <div className={`form-group mb-3 position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'><IoShieldCheckmarkOutline /></span>
                                        <input type={`${isConfirmShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='Confirm your password' onFocus={() => focusInput(3)} onBlur={() => focusInput(null)}></input>
                                        <span className='toggleShowPassword' onClick={() => setIsConfirmShowPassword(!isConfirmShowPassword)}>
                                            {isConfirmShowPassword === true ? <IoIosEye /> : <IoIosEyeOff />}
                                        </span>
                                    </div>
                                    <FormControlLabel control={<Checkbox />} label="I agree all terms & conditions." />
                                    <div className='form-group'>
                                        <Button className="btn-blue btn-lg w-100">REGISTER</Button>
                                    </div>

                                    <div className='form-group text-center'>
                                        <div className='d-flex align-items-center justify-content-center or mt-3'>
                                            <span className='line'></span>
                                            <span className='text'>or</span>
                                            <span className='line'></span>
                                        </div>
                                    </div>

                                    <Button variant='outlined' className='w-100 btn-lg loginWithGoogle'><img src={googleIcon} width='25px' />&nbsp;Sign In with Google</Button>

                                </form>

                            </div>
                            <div className='wrapper mt-3 card border fotter p-3'>
                                <span className='text-center '>
                                    Already Register?
                                    <Link to={'/login'} className='link color ml-2'>Sign In</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;