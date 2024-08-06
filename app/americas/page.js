export default function AmericasPage() {
  return (
    <div className="container mt-5">
      <h1>Americas</h1>
      <p>Uncover the historical landmarks in the Americas, from ancient civilizations to colonial history.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/2516418/pexels-photo-2516418.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Machu Picchu" />
            <div className="card-body">
              <h5 className="card-title">Machu Picchu</h5>
              <p className="card-text">Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.</p>
              <a href="https://en.wikipedia.org/wiki/Machu_Picchu" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Statue of Liberty" />
            <div className="card-body">
              <h5 className="card-title">Statue of Liberty</h5>
              <p className="card-text">The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>
              <a href="https://en.wikipedia.org/wiki/Statue_of_Liberty" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
