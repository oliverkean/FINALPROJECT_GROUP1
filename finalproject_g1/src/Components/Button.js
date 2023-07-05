function Button({text, color}) {
    return(
        <>
            <button type="button" className={ `btn btn-${color}` } >{text}</button>
        </>
    );
}
export default Button