import React, { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'

export default function Form(){
    const [show, setshow] = useState(true);
    const [close, setclose] = useState(false)
    const changeColor = (e) => {
        setshow(true);
        setclose(false)
    }
    const changeColor1 = (e) => {
        setshow(false)
        setclose(true)
    }
    return (
        <>
            <div className='row mt-5 '>
                <div className='col col-6'> <button style={{ borderRadius:"100px"}} className={`px-5 py-3 btn btn-${show?"success":''}`} onClick={changeColor}>
                    Log in</button></div>
                <div className='col col-6 '>
                    <button className={`btn px-5 py-3 btn-${close?"success":''}`} style={{ borderRadius:"100px"}} onClick={changeColor1}> Sing Up</button>
                </div>
                <h5 className='my-5'>Shipping Information</h5>
            </div>
            {    show ? <Signin/>:<Signup/>}
       
        </>
    )
}
