function AboutContent({title, text, text_color}) {
    return(
        <div className="col">
            <div className="row d-flex justify-content-center align-items-center mx-4">
<<<<<<< HEAD
                <div className="col-12 mb-5 text-center">
                    <h1 className="fw-bold text-danger mb-3">{title}</h1>
                    <p className={`text-secondary text-${text_color}`}>{text}</p>
=======
                <div className="col-12 col-md-7 mb-5">
                    <img width="700" src={image} alt="icon" className="rounded"/>
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <h1 className="fw-bold text-white">{title}</h1>
                    <p className="text-secondary text-white">{text}</p>
>>>>>>> d3178b2d4695dd33120ea32d7e966ad276d5cba7
                </div>
            </div>
        </div>
    );
}

export default AboutContent