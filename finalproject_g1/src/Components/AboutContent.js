function AboutContent({title, text, text_color}) {
    return(
        <div className="col">
            <div className="row d-flex justify-content-center align-items-center mx-4">
                <div className="col-12 mb-5 text-center">
                    <h1 className="fw-bold text-danger mb-3">{title}</h1>
                    <p className={`text-secondary text-${text_color} text-break`}>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutContent