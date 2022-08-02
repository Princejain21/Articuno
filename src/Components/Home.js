import React from 'react'
import Cart from './Cart Section/Cart'
import Payment from './Payment Section/Payment'
import Form from './Shiping or signup/Form'


export default function Home() {

    return (
        <>
            <div className='row my-2'>
                <div className='col col-lg-4 col-md-6 col-sm-12'>
                    <h4>Shipping and Payment</h4>
                    <Form />
                    <a className='mt-5 py-5 text-dark' href='/'>
                        <i className="fa fa-arrow-left"></i> Back</a>
                </div>
                <div className='col col-lg-8 col-md-6 col-sm-12'>

                    <div className='row'>
                        <div className='col col-md-6'>
                            <Payment />


                        </div>
                        <div className='col col-md-6'>
                            <Cart />


                        </div>
                    </div>
                    <div className='row '>
                        <div className=' ml-lg-auto col col-md-3 col-sm-5 my-2 '>
                            <button className='btn btn-outline-dark p-3' style={{ borderRadius: "2rem" }}>Continue Shopping</button>
                        </div>
                        <div className=' col col-md-4 col-sm-6 my-2 '>
                            <button className='btn btn-success p-3' style={{ borderRadius: "2rem" }}>Proceed To Payment</button>

                        </div>

                    </div>


                </div>




            </div>
        </>


    )
}
