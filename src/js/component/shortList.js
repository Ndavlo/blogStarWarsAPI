import React, { useEffect, useContext } from "react"
import { Context } from '../store/appContext'
import { Link } from "react-router-dom"

const ShortList = ({ elementType }) => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getList(elementType, 1, 5)
    }, [])

    function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }
    
    function getTitle(){
        switch(elementType){
            case "planets":
                return "Planetas"
            case "films":
                return "Películas"
                case "people":
                    return "Personajes"
                case "vehicles":
                    return "Vehículos"
                case "starships":
                    return "Starships"
                case "species":
                    return "Especies"
        }
    }

    return <div>
        <h1 className="hometitle">{getTitle()}</h1>
        <div className="d-flex horizontal-container">
            {store[elementType]?.map(item => <div key={item.uid} className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" onError={errorImage} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name|| item.properties.title }</h5>
                    <Link to={`/${elementType}/${item.uid}`} className="btn btn-outline-dark">Leer mas</Link>
                    <button onClick={() => actions.favoritos(item.name || item.properties.title)} className="btn btn-outline-light d-md-flex justify-content-end"><i className="fa fa-heart text-danger" /></button>
                </div>
            </div>)}
                <div key={-1} className="card bg-transparent">
            <Link to={`/${elementType}`} >
                    <button id="verMas" className="btn btn-outline-light"> <h4>Ver mas</h4>
            </button>
            </Link>
                </div>
        </div>
    </div>
}

export default ShortList