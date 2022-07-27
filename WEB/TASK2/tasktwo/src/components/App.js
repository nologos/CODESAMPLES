function App() {
  const name = "User";
  return (
      <div className="container d-flex justify-content-between">
        <h1>Hello {name}</h1>
        
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
}

export default App;
