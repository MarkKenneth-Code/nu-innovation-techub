import '../styles/Login.css';
import logo from '../landingpage/assets/NU-Logo-home.png';
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="" />
        <h1>NU Innovation Tech-Hub</h1>
        <p>Center for Innovation &amp; Entrepreneurship</p>

        <form action="">
          <label htmlFor="email-address" className="form-label-margin">
            Email Address
          </label>
          <input type="email" className="form-control" id="email-address" autoFocus />
          <label htmlFor="password" className="form-label-margin">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
          <button type="button" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
      <div className="signup-form">
        <p>
          No account yet? <a href="#!"> Create an account.</a>
        </p>
      </div>
      <small>© 2021. All rights reserved</small>
    </div>
  );
}
