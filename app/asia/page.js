export default function AsiaPage() {
  return (
    <div className="container mt-5">
      <h1>Asia</h1>
      <p>Discover the ancient and historical landmarks of Asia, from the Great Wall of China to the temples of Japan.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Taj Mahal" />
            <div className="card-body">
              <h5 className="card-title">Taj Mahal</h5>
              <p className="card-text">The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.</p>
              <a href="https://en.wikipedia.org/wiki/Taj_Mahal" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 bg-light text-dark">
            <img src="https://images.pexels.com/photos/6249542/pexels-photo-6249542.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-card" alt="Kyoto Temples" />
            <div className="card-body">
              <h5 className="card-title">Kyoto Temples</h5>
              <p className="card-text">Kyoto is known for its well-preserved temples, including the iconic Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.</p>
              <a href="https://en.wikipedia.org/wiki/Kyoto" className="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
