function BodyContent2({image, title, text, orderL, orderR, bg}) {
    return(
        <>
            <div className="row align-items-center mx-auto border">
                <div className={`col-lg-6 col-md-12 mb-lg-0 mb-md-0 mb-sm-5 mb-5 order-md-${orderL}`}>
                    <img src={image} alt='image' style={{width: '100%', height: 'auto'}} className="p-lg-5"/>
                </div>
                <div className={`col-lg-6 col-md-12 p-lg-5 order-md-${orderR}`}>
                    <div>
                        <span className="fs-2 fw-bold">{title}</span>
                    </div>
                    <div>
                        <span className="fs-5 text-secondary">{text}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyContent2