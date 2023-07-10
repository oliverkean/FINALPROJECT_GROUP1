function AboutContent({image, title, text}) {
    return(
        <div className="col mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-4 col-md-12">
                    <img style={{ width: '30vw', height: '100%' }} src={image} alt="icon" className="rounded"/>
                </div>
                <div className="col-4 col-md-12">
                    <h1 className="fw-bold text-white">{title}</h1>
                    <span className="fs-5 text-secondary text-white">{text}</span>
                </div>
            </div>
        </div>
    );
}

export default AboutContent