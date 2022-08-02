import React from 'react'
import paypal from '../../Asset/paypal.png'
import discover from '../../Asset/discover.png'
import dnl from '../../Asset/dnl.png'
import dpd from '../../Asset/dpd.png'
import fedex from '../../Asset/fedex.png'
import ideal from '../../Asset/ideal.png'
import inpost from '../../Asset/inpost.png'
import master from '../../Asset/master.png'
import moestro from '../../Asset/moestro.png'
import visa from '../../Asset/visa.png'

export default function Payment() {
    return (
        <>
            <div className='row my-4'>

                <div className='col-12 my-4'>
                    <h4>Payment Method</h4>
                    <div className='row my-4'>
                        <div className='col-4'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-warning ' >
                                <img src={paypal} alt='...' className='w-75' />
                                </button>
                            </div>
                        <div className='col-4'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary'>
                            <img src={visa} alt='...' className='w-75' />

                            </button>

                        </div>
                        <div className='col-4'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary'>
                            <img src={master} alt='...' className='w-75' />
                            
                            </button>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary'>
                            <img src={moestro} alt='...' className='w-75' />

                            </button>
                            </div>
                        <div className='col-4'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary'>
                            <img src={discover} alt='...' className='w-75' />
                                
                            </button>

                        </div>
                        <div className='col-4'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary'>
                                
                            <img src={ideal} alt='...' className='w-50' />

                            </button>

                        </div>
                    </div>
                </div>
                <div className='col-12'>
                <h4>Delivery method</h4>
                <div className='row my-4'>
                        <div className='col-6'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-warning ' >
                                <img src={inpost} alt='...' className='w-75' />
                                </button>
                            </div>
                        <div className='col-6'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary'>
                            <img src={dpd} alt='...' className='w-75' />

                            </button>

                        </div>
                      
                    </div>
                <div className='row my-4'>
                        <div className='col-6'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-warning ' >
                                <img src={dnl} alt='...' className='w-75' />
                                </button>
                            </div>
                        <div className='col-6'>
                            <button style={{borderRadius:"2rem"}} className='btn btn-outline-primary py-3'>
                            <img src={fedex} alt='...' className='w-75' />

                            </button>

                        </div>
                      
                    </div>


                </div>

            </div>

        </>
    )
}
