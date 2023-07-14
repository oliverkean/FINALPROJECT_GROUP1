import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards({image, title, text, link}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
<<<<<<< HEAD
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 g-3">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  style={{ overflow:'hidden', backgroundSize: 'cover', backgroundImage: `url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")`}}>
=======
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 my-3" data-aos="fade-up">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ border: 'none', overflow:'hidden', backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundImage: `url(${(image)})` }}>
>>>>>>> a4857c1221dfd9763fed869aab81f8e90f0ee43f
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 fs-3 lh-1 fw-bold text-stroke"><a className="link-hover link-underline-light link-light link-underline-opacity-0 link-underline-opacity-75-hover" href={link} target="_blank">{title}</a></h3>
                </div>
            </div>
        </div>
        
    );
}

export default Cards

{/* <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
                    </li>
                    <li class="d-flex align-items-center me-3"> */}
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                    //     <small>Earth</small>
                    // </li>
                    // <li class="d-flex align-items-center">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                        {/* <small>3d</small>
                    </li> */}