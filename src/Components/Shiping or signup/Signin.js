import React from 'react'

export default function Signin() {
    return (
        <div className='row'>
            <form method='' className='form-inline'>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="text" placeholder=" Email" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="text" placeholder=" address" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="text" placeholder=" firstName" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="text" placeholder=" City" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="text" placeholder=" lastname" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="text" placeholder=" postalCode/zip" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <input type="number" placeholder=" postalCode/zip" className='form-control' style={{ width: "11rem", borderRadius: "100px" }} />
                </div>
                <div className='col col-md-6   py-4 form-group'>
                    <select className="form-control px-2" style={{ width: "20rem", borderRadius: "100px" }} >
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>March</option>
                    </select>
                </div>
                <button style={{width:"11rem", borderRadius:"100px"}} type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>


    )
}
