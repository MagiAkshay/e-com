import React from 'react';

function Login() {
  return (
    <div class="modal-body">
    <div className="col-md-12">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="loginEmail">Email address</label>
          <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
