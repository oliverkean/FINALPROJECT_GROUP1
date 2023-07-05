function Heading({text, size, weight, color}) {
  return (
    <>
        <span className={`fs-${size} fw-${weight} text-${color}`}>{text}</span>
    </>
  )
}

export default Heading
