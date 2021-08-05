export default function Information() {
  return (
    <div className="pe-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active fw-bold" aria-current="page">
            Shipping Information
          </li>
          <li className="breadcrumb-item active">Payment</li>
        </ol>
      </nav>
      <form className="row g-3" action="/mycart/payment">
        <div class="col-md-6">
          <label for="firstName" className="form-label d-none">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div class="col-md-6">
          <label for="lastName" className="form-label d-none">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div class="col-12">
          <label for="address1" class="form-label d-none">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Main Address"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div class="col-12">
          <label for="address2" class="form-label d-none">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Second Address"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div class="col-md-4">
          <label for="city" className="form-label d-none">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="City"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-success">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}
