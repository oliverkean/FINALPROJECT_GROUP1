function BodyContent1({content}) {
    return(
       <>
        {content.map((content, index) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-start">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-4 col-md-4 col-lg-12">
                        <div className="row align-items-center w-100">
                            <div className="col-3 my-3">
                                <img className="img-fluid" src={content.image} alt="icon"/>
                            </div>
                            <div className="col-9 my-3">
                                <span className="fs-5 fw-bold">{content.title}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-12">
                        <span className="fs-6 text-white">{content.text}</span>
                    </div>
                </div>
            </div>
        ))}
        {console.log(content.image)}
       </>
    );
}

export default BodyContent1