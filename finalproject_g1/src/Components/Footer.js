function Footer() {
  return (
    <div className="container">
    <footer className="py-5">
        <div className="row">
            <div className="col-lg-2 col-md-12">
                <br/><br/>
                <i className="bi bi-apple"></i>LOGO
            </div>

            <div className="col-2">
            </div>
            
            <div className="col-2">
            </div>

            <div className="col-2">
                <h5>Mobile App</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Live share</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Video record</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5>Community</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Featured artists</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">The Portal</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Live events</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5>Company</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">History</a></li>
                </ul>
            </div>
            
            </div>

            <div className="d-flex justify-content-between py-4 border-top">
            <p>© 2023 APPDEV GROUP1</p>
            <ul className="list-unstyled d-flex">Follow us:
                <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-facebook"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-discord"></i></a></li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer