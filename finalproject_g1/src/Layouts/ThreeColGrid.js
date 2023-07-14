function ThreeColGrid({children, bg}) {
    return(
        
        <div className = {`row bg-${bg}`}>
            {children}
=======
            <div className="col-sm-12 col-md-6 col-lg-4">
                {col1}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                {col2}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                {col3}
            </div>
>>>>>>> origin/main
        </div>
    );
}

export default ThreeColGrid