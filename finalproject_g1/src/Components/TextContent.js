export default function TextContent({text, color, size, weight, align}) {
    return(
        <>
        
            <div className={`fs-${size} fw-${weight} text-${color} text-${align}`}>
                {text}
            </div>

        </>
    );
}