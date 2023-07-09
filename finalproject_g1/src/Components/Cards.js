function Cards({image, title, text}) {
    return(
        <>
            <div class="card">
                <div class="card-header">
                    <img src={image} class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{text}</p>
                        <a href="#" class="text-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Cards