function ThreeColGrid({children, bg}) {
    return(
        
        <div className = {`row bg-${bg}`}>
            {children}
        </div>
    );
}

export default ThreeColGrid