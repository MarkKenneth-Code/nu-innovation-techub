export default function VisitorsToBuyers() {
  return (
    <section id="visitors">
      <div className="container py-5 d-flex flex-column align-items-center">
        <h2 className="fw-light">Turn visitors into buyers</h2>
        <div className="container mt-4">
          <div className="row justify-content-center row-cols-1 row-cols-lg-3 ">
            {sectionFeatures.map((feature) => (
              <div className="col d-flex flex-column align-items-center px-4 py-2 section-feature">
                {feature.featureIcon}
                <h4>{feature.featureLabel}</h4>
                <p>{feature.featureDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionFeatures = [
  {
    featureIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-display"
        viewBox="0 0 16 16"
      >
        <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
      </svg>
    ),
    featureLabel: "Access Virtual Exhibits",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus at tellus nunc porta malesuada lectus potenti faucibus. Eget nibh vitae nisl placerat feugiat.",
  },
  {
    featureIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-cart-check"
        viewBox="0 0 16 16"
      >
        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
    featureLabel: "Purchase products online",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus at tellus nunc porta malesuada lectus potenti faucibus. Eget nibh vitae nisl placerat feugiat.",
  },
  {
    featureIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-cash-stack"
        viewBox="0 0 16 16"
      >
        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
      </svg>
    ),
    featureLabel: "Seamless payment methods",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus at tellus nunc porta malesuada lectus potenti faucibus. Eget nibh vitae nisl placerat feugiat.",
  },
];
