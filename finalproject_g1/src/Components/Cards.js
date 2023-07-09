function Cards({image, title, text}) {
    return(
        <div class="card">
            <img src={image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <a href="#" class="text-primary text-decoration-none">Learn More</a>
            </div>
        </div>
    );
}

export default Cards