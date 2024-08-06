export default function CulturalSignificancePage() {
    return (
      <div className="container mt-5">
        <h1>Cultural Significance</h1>
        <p>Explore the cultural significance and impact of various landmarks across different civilizations and eras.</p>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 bg-light text-dark">
              <img src="https://images.pexels.com/photos/1998165/pexels-photo-1998165.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Petra" />
              <div className="card-body">
                <h5 className="card-title">Petra</h5>
                <p className="card-text">Petra is a historical and archaeological city in southern Jordan that is famous for its rock-cut architecture and water conduit system.</p>
                <a href="https://en.wikipedia.org/wiki/Petra" className="btn btn-outline-primary">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 bg-light text-dark">
              <img src="https://images.pexels.com/photos/5819322/pexels-photo-5819322.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Moai Statues" />
              <div className="card-body">
                <h5 className="card-title">Moai Statues</h5>
                <p className="card-text">The Moai statues are monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia between 1250 and 1500.</p>
                <a href="https://en.wikipedia.org/wiki/Moai" className="btn btn-outline-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  