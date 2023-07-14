import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Accordion({content}) {
    useEffect(() => {
        AOS.init({
            duration: '1000',
            disable: 'mobile'
        });
    }, [])
    return(
        <>
             {content.map((item, index) => (
                <div className="accordion accordion-flush" id="accordionFlushExample" key={index} data-aos="fade-right">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                                {item.title}
                            </button>
                        </h2>
                        <div id={`flush-collapse-${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                {item.text}
                                <ul class="list-group">
                                    {item.links.map((link, linkIndex) => (
                                    <div key={linkIndex}>
                                        <a class="list-group-item list-group-item list-group-item-action" href={link.url} target="_blank">{link.text}</a>
                                    </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}