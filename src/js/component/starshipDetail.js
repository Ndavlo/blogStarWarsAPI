import React from "react";

const StarshipDetail = ({element}) => {
    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }

return (
<>
<img src={"https://starwars-visualguide.com/assets/img/starships/" + element.uid + ".jpg"} onError={errorImage} id="imagenes" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{element.properties.name}</h5>
<div className="card-text">
<ul>
<li> <strong>MGLT: </strong>{element.properties.MGLT}</li>
<li><strong>Cargo Capacity: </strong>{element.properties.cargo_capacity}</li>
<li><strong>Hyperdrive Rating: </strong>{element.properties.hyperdrive_rating}</li>
<li><strong>Passengers: </strong>{element.properties.passengers}</li>
<li><strong>Pilots: </strong>{element.properties.pilots}</li>
<li><strong>Starship Class: </strong>{element.properties.starship_class}</li>
<li><strong>Crew: </strong>{element.properties.crew}</li>
</ul>
</div></div>
</>
)
}

export default StarshipDetail