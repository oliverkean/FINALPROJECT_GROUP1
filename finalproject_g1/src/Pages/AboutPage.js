import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

//https://www.unoosa.org/oosa/en/ourwork/space4sdgs/sdg4.html link for references
function About() {
    return(
        <>
            <Navbar/>
            
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '60vh', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(78,77,77,1)),url("https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>                
                <div className="container">
                    <AboutContent
                        title="GOAL 4"
                        text="Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all"
                        text_color={'white'}
                        title_color={'danger'}
                        text_size={3}
                    />
                </div>
            </div>

            <div className="container mb-5">

                    <AboutContent
                            title="Sustainable Development Goal 4"
                            text_color={'dark'}
                            title_color={'dark'}
                        />

                    <div className="row d-flex justify-content-center align-items-center text-center text-md-start g-4">
                        <div className="col-12 col-md-6">
                            <img src="https://cdn-images-1.medium.com/max/480/1*BKBolU2eft8g3iiQt7ZcsA.jpeg" className="shadow-lg rounded h-75 w-75"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="fs-5 text-secondary">Aims at ensuring inclusive and equitable quality education and promote lifelong learning opportunities for all. This goal ensures that all girls and boys complete free primary and secondary schooling by 2030. This goal ensures that all girls and boys complete free primary and secondary schooling by 2030. It also aims to provide equal access to affordable vocational training, to eliminate gender and wealth disparities and achieve universal access to a quality higher education.</p>
                        </div>
                    </div>
            </div>
            <Footer/>
            

        </>
    );
}

export default About