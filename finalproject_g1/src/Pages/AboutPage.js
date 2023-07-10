import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";

function About() {
    return(
        <>
            <Navbar/>

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '50vh', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")`}}>
                <Heading 
                    title="ABOUT US"
                    text=""
                    size="1"
                    weight="bold"
                    color="white"
                    align="center"
                />
            </div>

            <div className="container">
                <Heading 
                    text=""
                    size="1"
                    weight="bold"
                    color="black"
                    align="center"
                />
            </div>
            

        </>
    );
}

export default About