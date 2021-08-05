export default function InquireNow() {
  return (
    <section className="section-content-inquire" id="inquireNow">
      <div className="container py-5 ">
        <div className="container d-flex flex-column-reverse  align-items-center">
          <h2 className="fw-light text-uppercase text-gold">Inquire Now</h2>
          <h5 className="fw-lighter">Ask us something</h5>
        </div>
        <div className="d-flex mt-5 px-5">
          <p className="text-center fw-light sm-text-truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
            condimentum in nibh cras. Sed quis fermentum elit venenatis dolor
            posuere. Risus, tempor egestas nunc, enim. Id ac netus phasellus
            aliquam blandit at proin egestas tincidunt. Sed maecenas ut aliquet
            facilisis massa. Ut in sit vel enim viverra quam. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed nisi condimentum in nibh
            cras. Sed quis fermentum elit venenatis dolor posuere. Risus, tempor
            egestas nunc, enim. Id ac netus phasellus aliquam blandit at proin
            egestas tincidunt. Sed maecenas ut aliquet facilisis massa. Ut in
            sit vel enim viverra quam.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <form className="row g-2">
            <div className="col-auto">
              <label htmlFor="emailAddress" className="form-label d-none">
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="form-control"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="col-auto">
              <button type="submit" class="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
