function ButtonLink({text, color, link}) {
    return(
        <>
            <a href={link} className={ `btn btn-${color}` } >{text}</a>
        </>
    );
}
export default ButtonLink