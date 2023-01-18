import React from "react";

const VehicleDetail = ({element}) => {
    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }


return (
<>
<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + element.uid + ".jpg"} id="imagenes" onError={errorImage} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{element.properties.name}</h5>
<div className="card-text">
<ul>
<li> <strong>Model: </strong>{element.properties.model}</li>
<li> <strong>Passengers: </strong>{element.properties.passengers}</li>
<li> <strong>Pilots: </strong>{element.properties.pilots}</li>
<li> <strong>Films: </strong>{element.properties.films}</li>
<li> <strong>Manufacturer: </strong>{element.properties.manufacturer}</li>
<li> <strong>Crew: </strong>{element.properties.crew}</li>
<li> <strong>Max Speed: </strong>{element.properties.max_atmosphering_speed}</li>
</ul>
</div></div>
</>
)
}

export default VehicleDetail


