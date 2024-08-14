import React from 'react';

function Signup() {
  return (
    <div class="modal-body">
    <div className="col-md-12">
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="signupName">Name</label>
          <input type="text" className="form-control" id="signupName" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="signupEmail">Email address</label>
          <input type="email" className="form-control" id="signupEmail" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="signupPassword">Password</label>
          <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="signupConfirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="signupConfirmPassword" placeholder="Confirm Password" />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
