function ThreeColGrid({col1, col2, col3}) {
    return(

        <div className = 'row'>
            <div className="col-sm-12 col-md-6 col-lg-4">
                {col1}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                {col2}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                {col3}
            </div>
        </div>

    );
}

export default ThreeColGrid