function Heading({title, text, size, weight, color, align}) {
  return (
    <>
        <div>
          <span className={`fs-${size} fw-${weight} text-${color} text-${align}`}>{title}</span>
        </div>
        <hr/>
        <div>
          <p className={`fs-5 text-secondary text-${align}`}>{text}</p>
        </div>
    </>
  )
}

export default Heading
