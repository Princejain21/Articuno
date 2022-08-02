import React from 'react'
export default function Signup() {
  return (
    <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <input style={{width:"11rem", borderRadius:"100px"}} type="email" className="form-control" id="inputEmail4" placeholder="First Name"/>
    </div>
    <div className="form-group col-md-6">
      <input style={{width:"11rem", borderRadius:"100px"}} type="password" className="form-control" id="" placeholder="Last Name"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <input style={{width:"11rem", borderRadius:"100px"}} type="text" className="form-control" placeholder='Email' id="inputCity"/>
    </div>
    <div className="form-group col-md-6">
      <input style={{width:"11rem", borderRadius:"100px"}} type="text" className="form-control" placeholder='Password' id="inputCity"/>
    </div>
  </div>
  <div className="form-row my-3">
  <div className=" col-md-3 form-check form-check-inline">
  <input className="form-check-input" style={{width:"11rem", borderRadius:"100px"}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
  <label className="form-check-label" for="inlineRadio1">Male</label>
</div>
<div className="form-check col-md-3 form-check-inline">
  <input className="form-check-input" style={{width:"11rem", borderRadius:"100px"}} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
  <label className="form-check-label" for="inlineRadio2">Female</label>
</div>
<div className="form-check col-md-3 form-check-inline">
  <input className="form-check-input" style={{width:"11rem", borderRadius:"100px"}} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Transgender" />
  <label className="form-check-label" for="inlineRadio3">Transgender</label>
</div>
  </div>
  


<div className="form-row">
    <div className="form-group col-md-6">
      <input style={{width:"21rem", borderRadius:"100px"}} type="number" className="form-control" id="inputEmail4" placeholder="Number"/>
    </div>
    <div className="form-group col-md-12">
      <textarea style={{width:"21rem", borderRadius:"20px"}} type="text" className="form-control" id="" placeholder="address"/>
    </div>
  </div>
  
  <button style={{width:"11rem", borderRadius:"100px"}} type="submit" className="btn btn-primary">Sign Up</button>
</form>
  )
}
