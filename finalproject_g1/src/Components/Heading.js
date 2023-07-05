function Heading({text, size, weight, color, align}) {
  return (
    <>
        <span className={`fs-${size} fw-${weight} text-${color} text-${align}`}>{text}</span>
    </>
  )
}

export default Heading
