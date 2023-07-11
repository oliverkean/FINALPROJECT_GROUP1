 import '../Assets/headline.css'

export default function Headline(){
    return (
        <header>
        {/* <!-- Background image --> */}
        <div
          class="p-5 text-center bg-image background-img-cus"
        >
          <div class="mask mask-bgcolor">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white position-below">
                <h1 class="mb-3">Education transforms lives</h1>
                <h4 class="mb-3 subheading-p">We provide global and regional leadership in education, strengthens education systems worldwide and responds to contemporary global challenges through education with gender equality as an underlying principle.</h4>
                <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </header>
    )
}