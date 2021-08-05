export default function LatestStories() {
  return (
    <section className="section-content" id="latestStories">
      <div className="container py-5">
        <div className="container d-flex flex-column-reverse  align-items-center mb-5">
          <h2 className="fw-light text-uppercase text-darkblue">
            Latest Stories
          </h2>
          <h5 className="fw-lighter">
            From achievements to innovation stories
          </h5>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center stories-container">
          {latestStories.map((story) => (
            <div className="col">
              <div className="card">
                <img
                  src={story.blogImage}
                  alt=""
                  className="img-fluid rounded"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{story.blogTitle}</h5>
                  <h6 className="card-subtitle fw-normal">
                    {story.datePosted}
                  </h6>
                  <p className="card-text fw-light">
                    {story.blogContentPreview}
                  </p>
                  <a href="!#" className="btn btn-outline-warning">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col">
            <div className="card">
              <img
                src="https://images.idgesg.net/images/article/2018/06/nw_ss_top_ten_supercomputers_2018_slide_01_1200x800-100762093-large.jpg"
                className="img-fluid rounded"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">text</p>
                <a href="!#" className="btn btn-outline-warning">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.idgesg.net/images/article/2018/06/nw_ss_top_ten_supercomputers_2018_slide_01_1200x800-100762093-large.jpg"
                className="img-fluid rounded"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">text</p>
                <a href="!#" className="btn btn-outline-warning">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.idgesg.net/images/article/2018/06/nw_ss_top_ten_supercomputers_2018_slide_01_1200x800-100762093-large.jpg"
                className="img-fluid rounded"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">text</p>
                <a href="!#" className="btn btn-outline-warning">
                  Read more
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

const latestStories = [
  {
    blogImage:
      "https://images.idgesg.net/images/article/2018/06/nw_ss_top_ten_supercomputers_2018_slide_01_1200x800-100762093-large.jpg",
    blogTitle: "CoE prof gets international faculty award",
    blogContentPreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo. ",
    datePosted: "June 04, 2021",
  },
  {
    blogImage:
      "https://images.techhive.com/images/article/2015/12/00-52ss-weird-tech-100634640-gallery.idge.jpg",
    blogTitle: "CoE prof gets international faculty award",
    blogContentPreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo. ",
    datePosted: "June 04, 2021",
  },
  {
    blogImage:
      "https://images.idgesg.net/images/article/2018/06/nw_ss_top_ten_supercomputers_2018_slide_01_1200x800-100762093-large.jpg",
    blogTitle: "CoE prof gets international faculty award",
    blogContentPreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo. ",
    datePosted: "June 04, 2021",
  },
];
