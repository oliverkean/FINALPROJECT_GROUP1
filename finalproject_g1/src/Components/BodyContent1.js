function BodyContent1({image, title, text}) {
    return(
       <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-start g-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-4 col-md-4 col-lg-12">
                        <div className="row align-items-center">
                            <div className="col-2 my-3">
                                <img style={{ width: '64px', height: '64px' }} src={image} alt="icon"/>
                            </div>
                            <div className="col-10 my-3">
                                <span className="fs-5 fw-bold text-white">{title}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-12">
                        <span className="fs-6 text-secondary text-white">{text}</span>
                    </div>
                </div>
            </div>
       </>
    );
}

export default BodyContent1