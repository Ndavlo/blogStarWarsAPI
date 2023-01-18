import React from "react";

const PlanetDetail = ({element}) => {
    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }

return (
<>
<img src={"https://starwars-visualguide.com/assets/img/planets/" + element.uid + ".jpg"} onError={errorImage} id="imagenes" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{element.properties.name}</h5>
<div className="card-text">
<ul>
<li> <strong>Diameter: </strong>{element.properties.diameter}</li>
<li><strong>Gravity: </strong>{element.properties.gravity}</li>
<li><strong>Population: </strong>{element.properties.population}</li>
<li><strong>Climate: </strong>{element.properties.climate}</li>
<li><strong>Residents: </strong>{element.properties.residents}</li>
<li><strong>Created: </strong>{element.properties.created}</li>
<li><strong>Url: </strong>{element.properties.url}</li>
</ul>
</div></div>
</>
)
}

export default PlanetDetail