import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react"
import { Context } from '../store/appContext'
import Star_Wars_Logo from "../../img/Star_Wars_Logo.svg.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-transparent mb-3">
			<Link to="/">
      <img src={Star_Wars_Logo} alt="Logo" width="150" height="100"/>
			</Link>
			<div className="ml-auto" id="navbarButtons">
			<Link className="buttonsNav" to="/films">Películas
				</Link>
				<Link className="buttonsNav" to="/people">Personajes
				</Link>
				<Link className="buttonsNav" to="/vehicles">Vehículos
				</Link>
				<Link className="buttonsNav" to="/planets">Planetas
				</Link>
				<Link className="buttonsNav" to="/starships">Starships
				</Link>
				<Link className="buttonsNav" to="/species">Especies
				</Link>
				<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </button>
  <ul className="dropdown-menu bg-secondary dropdown-menu-end">
		{store.favoritos?.map((item, id) => 
		<li key={id}><p id="droptext" className="dropdown-item bg-transparent">{item}
		<div className="iconholder"><i id="trash" onClick={()=> actions.borrarFavorito(item)} className="fa fa-trash"></i></div></p>
		</li>)}
</ul>
</div>
			</div>
		</nav>
	);
};
