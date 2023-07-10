import TwoColGrid from "../Layouts/TwoColGrid";

function BodyContent2({img, title, text, ordL, ordR}) {
    return(
        <>
            <TwoColGrid>
                <div className={`col-sm-12 col-md-6 col-lg-6 order-lg-${ordL}`}>
                    <img src={img} alt="Image" loading="lazy" className="img-fluid"/>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6 order-lg-${ordR}`}>
                    <div>
                        <span className="fs-1 fw-bold">{title}</span>
                    </div>
                    <div>
                        <span className="fs-5 text-secondary">{text}</span>
                    </div>
                </div>
            </TwoColGrid>
        </>
    );
}

export default BodyContent2