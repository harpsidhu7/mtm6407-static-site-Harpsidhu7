export default function LandmarkHistoryPage() {
  return (
    <div className="container mt-5">
      <h1>Landmark History</h1>
      <p>Learn about the rich history and stories behind some of the most iconic landmarks around the world.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/19552850/pexels-photo-19552850/free-photo-of-pyramids-of-giza-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Pyramids of Giza" />
            <div className="card-body">
              <h5 className="card-title">Pyramids of Giza</h5>
              <p className="card-text">The Pyramids of Giza, located in Egypt, are ancient pyramid structures that date back to around 2580 – 2560 BC.</p>
              <a href="https://en.wikipedia.org/wiki/Egyptian_pyramids" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/2495575/pexels-photo-2495575.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Angkor Wat" />
            <div className="card-body">
              <h5 className="card-title">Angkor Wat</h5>
              <p className="card-text">Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, originally constructed as a Hindu temple.</p>
              <a href="https://en.wikipedia.org/wiki/Angkor_Wat" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
