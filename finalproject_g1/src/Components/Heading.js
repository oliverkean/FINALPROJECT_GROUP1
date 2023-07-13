import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Heading({title, text, size, weight, color, align}) {
  useEffect(() => {
    AOS.init({
        duration: 800,
        disable: 'mobile'
    });
  }, [])
  return (
    <div data-aos="fade-right">
        <div>
          <span className={`fs-${size} fw-${weight} text-${color} text-${align}`}>{title}</span>
        </div>
        <hr/>
        <div>
          <p className={`fs-5 text-secondary text-${align}`}>{text}</p>
        </div>
    </div>
  )
}

export default Heading
