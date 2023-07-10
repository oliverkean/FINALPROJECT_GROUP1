function Cards({image, title, text}) {
    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 my-3">
            {/* <div class="card">
                <div class="card-header">
                    <img src={image} class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{text}</p>
                        <a href="#" class="text-primary">Learn More</a>
                    </div>
                </div>
            </div> */}
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ border: 'none', overflow:'hidden', backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundImage: `url(${(image)})` }}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
                    </li>
                    <li class="d-flex align-items-center me-3">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                        <small>Earth</small>
                    </li>
                    <li class="d-flex align-items-center">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                        <small>3d</small>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Cards