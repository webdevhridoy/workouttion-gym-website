import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import logo from '../../user_profile.png';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({ list }) => {
    const [breaks, setBreaks] = useState('');

    const breaksHandle = (breakTime) => {
        localStorage.setItem("break-time", breakTime);
        setBreaks(breakTime);
    };
    useEffect(() => {
        const getBreakFromLocalStorage = localStorage.getItem("break-time");
        setBreaks(getBreakFromLocalStorage);
    }, []);

    const notify = () => toast("Wow so easy!");

    let time = 0;
    for (const item of list) {
        time = time + item.times;
    }

    return (
        <div className='shadow-lg py-5 position-sticky bg-white top-0'>
            <div className='row'>
                <div className='col-3'>
                    <img className='w-100 rounded-5 w-100' src={logo} alt="" />
                </div>
                <div className='col-9 pe-5 '>
                    <h2 className='fs-5 '>Md Rafiqul Islam</h2>
                    <span><FontAwesomeIcon className='me-2' icon={faLocationDot} />Rangpur, Bangladesh</span>
                </div>
            </div>
            <div className='row p-2 rounded-3 user-info'>
                <div className='col'>
                    <h4>62kg</h4>
                    <p>Weight</p>
                </div>
                <div className='col'>
                    <h4>5.6</h4>
                    <p>Height</p>
                </div>
                <div className='col'>
                    <h4>28yrs</h4>
                    <p>Age</p>
                </div>
            </div>
            <div className='py-2'>
                <h4 className='fs-5'>Add A Break</h4>
                <div className='d-inline-flex break p-3 rounded-3'>
                    <p onClick={() => breaksHandle(10)} className="mx-1" href="/">10s</p>
                    <p onClick={() => breaksHandle(20)} className="mx-1" href="/">20s</p>
                    <p onClick={() => breaksHandle(30)} className="mx-1" href="/">30s</p>
                    <p onClick={() => breaksHandle(40)} className="mx-1" href="/">40s</p>
                    <p onClick={() => breaksHandle(50)} className="mx-1" href="/">50s</p>

                </div>
            </div>
            <div className='py-2'>
                <h4 className='fs-5'>Exercise Details</h4>

                <div className='list-unstyled p-3 my-2 rounded-3 '>
                    <li className='mx-1 excersice-details py-3'><span>Exercise time {time}h</span></li>
                </div>
                <div className='list-unstyled p-3 my-2 rounded-3 '>
                    <li className='mx-1 excersice-details py-3'><span>Break time {breaks}</span>s</li>
                </div>
                <div>
                    <button onClick={notify} className='btn btn-primary d-block w-75 mx-auto mt-5'>Activity Completed</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Cart;