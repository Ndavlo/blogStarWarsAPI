import React from "react";

const MovieDetail = ({element}) => {
    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }

return (
<>
<img src={"https://starwars-visualguide.com/assets/img/films/" + element.uid + ".jpg"} onError={errorImage} id="imagenes" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{element.properties.title}</h5>
<div className="card-text">
<ul>
<li> <strong>Director: </strong>{element.properties.director}</li>
<li><strong>Producer: </strong>{element.properties.producer}</li>
<li><strong>Release date: </strong>{element.properties.release_date}</li>
<li><strong>Created: </strong>{element.properties.created}</li>
<li><strong>Url: </strong>{element.properties.url}</li>
</ul>
</div>
</div>
</>
)
}

export default MovieDetail