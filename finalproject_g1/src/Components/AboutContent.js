function AboutContent({image, title, text}) {
    return(
        <div className="col mt-5 text-center text-md-start">
            <div className="row d-flex justify-content-center align-items-center mx-4">
                <div className="col-12 col-md-6 mb-5">
                    <img style={{ width: '100%', height: '100%' }} src={image} alt="icon" className="rounded"/>
                </div>
                <div className="col-12 col-md-6 mb-5">
                    <h1 className="fw-bold text-white">{title}</h1>
                    <p className="text-secondary text-white">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutContent