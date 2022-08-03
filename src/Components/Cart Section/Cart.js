import React from 'react'
import './Cart.module.css'
import User from './User'
import sachin from '../../Asset/sachin.jpg'
import sharukh from '../../Asset/download.jpg'

export default function Cart(props) {
    var price1 = 69.99;
    var price2 = 69.99;
    const style = {
        width: "4rem",
        height: "4rem"
    }
    return (
        <>
            <div className='row '>
                <div className='col-2 ml-auto '>
                    <i className="fa fa-shopping-cart border border-dark p-3 text-end" style={{ borderRadius: "2rem" }}></i>
                </div>
                <div className='col-4 align-content-center'><hr className='text-secondary' /></div>
                <div className='col-4 '><i className="fa fa-truck border border-dark bg-success p-3" style={{ borderRadius: "2rem" }}></i></div>
            </div>
            <div className='row'>
                <div className='col col-12'>
                    <p className="font-weight-bold"> YOUR CARTS</p>
                    <User style={style} id="98413" img={sachin} product='T-shirt' message="Summer vibes" price={price1} />
                    <User style={style} img={sharukh} product='Sherbani' message="Marrige vibes" price={price2} />
                </div>
            </div>

            <div className='row'>
                <div className='col col-9 mx-auto'>
                    <button className='btn   px-5 py-3 ' style={{ borderRadius: "2rem", backgroundColor: "#e5e5e5" }}> Total Cost &nbsp; &nbsp; &nbsp;{price1 + price2} </button>
                </div>
                <div className='w-100'></div>
                <div className='col col-12 mt-3'>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-4 '><i className='fas fa-truck mx-4 text-end'></i></div>
                        <div className='col-6'><p>you are $30.56 away from the shipping!</p></div>

                    </div>
                </div>

            </div>
        </>
    )
}
