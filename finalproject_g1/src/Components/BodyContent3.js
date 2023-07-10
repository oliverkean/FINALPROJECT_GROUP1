import TwoColGrid from "../Layouts/TwoColGrid";

function BodyContent3({image, title, text}) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row align-items-center text-center">
                <div className="col-sm-4 col-md-4 col-lg-12">
                    <img style={{ width: '64px', height: '64px' }} src={image} alt="icon"/>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-12">
                    <span className="fs-5 fw-bold">{title}</span>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-12">
                    <span className="fs-6 text-secondary">{text}</span>
                </div>
            </div>
        </div>
    );
}

export default BodyContent3