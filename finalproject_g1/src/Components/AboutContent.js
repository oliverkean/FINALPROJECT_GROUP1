function AboutContent({image, title, text}) {
    return(
        <div className="col mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-lg-6 col-md-12">
                    <img style={{ width: '40vw', height: '100%' }} src={image} alt="icon" className="rounded"/>
                </div>
                <div className="col col-lg-6 col-md-12">
                    <div className="my-5">
                        <h1 className="fw-bold text-white">{title}</h1>
                    </div>
                    <div className="my-3">
                        <span className="fs-5 text-secondary text-white">{text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent