function TwoColGrid({col1, col2}) {
    return(

        <div className = 'row'>
            <div className="col-sm-12 col-md-6 col-lg-6">
                {col1}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                {col2}
            </div>
        </div>

    );
}

export default TwoColGrid