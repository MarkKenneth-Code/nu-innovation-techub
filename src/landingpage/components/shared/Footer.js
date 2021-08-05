import DTILogo from "../../assets/DTI.png";
import NULogo from "../../assets/NU-Logo-old.png";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 ">
            <div className="footer-copyright py-3">
              <img src={DTILogo} alt="" />
              <img src={NULogo} alt="" />
              <p className="mt-3 mb-0">Copyright © NU Innovations Tech Hub</p>
              <p>© 2021. All rights reserved</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-2">
            <div className="d-flex flex-column footer-links py-3">
              <h4>Links</h4>
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/innovators">Innovators</a>
              <a href="/aboutus">About Us</a>
              <a href="/contactus">Contact Us</a>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
            <div className="footer-address py-3">
              <h4>Contact Us</h4>
              <address>
                <div className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <p>
                    National University-Manila, M.F. Jhocson Street, Sampaloc,
                    Manila
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <p>(02) 8712 1900</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  <p>nutechhub@gmail.com</p>
                </div>
              </address>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="footer-subscription py-3">
              <h4>Stay up to date</h4>
              <label>
                <input
                  type="email"
                  className="form-control"
                  id="email-address"
                  placeholder="Your email address"
                />
              </label>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cursor-fill ms-2 mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
