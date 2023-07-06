function BodyContent1({image, title, text}) {
    return(
        <>
            <div className="row align-items-center justify-content-center border">
                <div className="col-sm-4 col-md-4 col-lg-12 border">
                    <img style={{ width: '64px', height: '64px' }} src={image} alt="icon"/>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-12 border">
                    <span className="fs-3 fw-bold">{title}</span>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-12 border">
                    <span className="fs-6 text-secondary">{text}</span>
                </div>
            </div>
        </>
    );
}

export default BodyContent1