export default function EuropePage() {
  return (
    <div className="container mt-5">
      <h1>Europe</h1>
      <p>Explore the rich historical landmarks in Europe, from ancient ruins to magnificent castles.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Colosseum" />
            <div className="card-body">
              <h5 className="card-title">Colosseum</h5>
              <p className="card-text">The Colosseum is an ancient amphitheater in Rome, Italy, and is one of the most iconic symbols of ancient Rome.</p>
              <a href="https://en.wikipedia.org/wiki/Colosseum" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/2716774/pexels-photo-2716774.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Stonehenge" />
            <div className="card-body">
              <h5 className="card-title">Stonehenge</h5>
              <p className="card-text">Stonehenge is a prehistoric monument in Wiltshire, England, consisting of a ring of standing stones.</p>
              <a href="https://en.wikipedia.org/wiki/Stonehenge" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
