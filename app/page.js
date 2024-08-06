export default function HomePage() {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 mb-4 bg-light text-dark rounded-3">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4">Welcome to Historical Landmarks</h1>
            <p className="lead">Discover the most iconic and historically significant landmarks from around the world.</p>
          </div>
          <div className="col-md-4">
            <img src="https://images.pexels.com/photos/5069333/pexels-photo-5069333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Historical Landmark" className="img-fluid" style={{ maxHeight: '300px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-dark">Featured Landmarks</h2>
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/3305370/pexels-photo-3305370.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Eiffel Tower" />
            <div className="card-body">
              <h5 className="card-title">Eiffel Tower</h5>
              <p className="card-text">The Eiffel Tower is one of the most recognizable structures in the world, located in Paris, France. It was constructed from 1887 to 1889 as the entrance arch for the 1889 World's Fair.</p>
              <a href="https://en.wikipedia.org/wiki/Eiffel_Tower" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Great Wall of China" />
            <div className="card-body">
              <h5 className="card-title">Great Wall of China</h5>
              <p className="card-text">The Great Wall of China is a series of fortifications made of various materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions.</p>
              <a href="https://en.wikipedia.org/wiki/Great_Wall_of_China" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-dark">Explore by Region</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Europe" />
            <div className="card-body">
              <h5 className="card-title">Europe</h5>
              <p className="card-text">Explore the rich historical landmarks in Europe, from ancient ruins to magnificent castles.</p>
              <a href="/europe" className="btn btn-outline-primary">Explore Europe</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Asia" />
            <div className="card-body">
              <h5 className="card-title">Asia</h5>
              <p className="card-text">Discover the ancient and historical landmarks of Asia, from the Great Wall of China to the temples of Japan.</p>
              <a href="/asia" className="btn btn-outline-primary">Explore Asia</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/27498575/pexels-photo-27498575/free-photo-of-sea-coast-of-new-york-with-brooklyn-bridge-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Americas" />
            <div className="card-body">
              <h5 className="card-title">Americas</h5>
              <p className="card-text">Uncover the historical landmarks in the Americas, from ancient civilizations to colonial history.</p>
              <a href="/americas" className="btn btn-outline-primary">Explore Americas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
