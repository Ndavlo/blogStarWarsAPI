import React from "react";

const PersonDetail = ({element}) => {
    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }

return (
<>
<img src={"https://starwars-visualguide.com/assets/img/characters/" + element.uid + ".jpg"} onError={errorImage} id="imagenes" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{element.properties.name}</h5>
<div className="card-text">
<ul>
<li> <strong>Height: </strong>{element.properties.height}</li>
<li><strong>Mass: </strong>{element.properties.mass}</li>
<li><strong>Hair color: </strong>{element.properties.hair_color}</li>
<li><strong>Skin color: </strong>{element.properties.skin_color}</li>
<li><strong>Eye color: </strong>{element.properties.eye_color}</li>
<li><strong>Birth year: </strong>{element.properties.birth_year}</li>
<li><strong>Gender: </strong>{element.properties.gender}</li>
<li><strong>Created: </strong>{element.properties.created}</li>
<li><strong>Edited: </strong>{element.properties.edited}</li>
<li><strong>Home World: </strong>{element.properties.homeworld}</li>
<li><strong>Url: </strong>{element.properties.url}</li>
</ul>
</div></div>
</>
)
}

export default PersonDetail