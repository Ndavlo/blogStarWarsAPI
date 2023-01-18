import React from "react";

const SpeciesDetail = ({element}) => {
    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }

return (
<>
<img src={"https://starwars-visualguide.com/assets/img/species/" + element.uid + ".jpg"} onError={errorImage} id="imagenes" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{element.properties.name}</h5>
<div className="card-text">
<ul>
<li> <strong>Average Height: </strong>{element.properties.average_height}</li>
<li><strong>Average Lifespan: </strong>{element.properties.average_lifespan}</li>
<li><strong>Designation: </strong>{element.properties.designation}</li>
<li><strong>Homeworld: </strong>{element.properties.homeworld}</li>
<li><strong>Language: </strong>{element.properties.language}</li>
<li><strong>People: </strong>{element.properties.people}</li>
</ul>
</div></div>
</>
)
}

export default SpeciesDetail