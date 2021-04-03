
const Header = () => {
  return (

    <>
    <div className="section1">
    <div className="container">
      
    
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <div className="navbar-brand logotext" href="#">Serviz<span className="logotext">pay</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bussiness">For Business</a>
        </li>
        
      </ul>
      <ul className="flex ulspace">
        <button className="btn btn-primary space9ing btn-sm">Sign up</button>
        <button className="btn transparents btn-sm">Log in</button>
      </ul>
      
    </div>
  </div>
  
</nav>
</div>
</div>
    </>
  );
};

export default Header;

