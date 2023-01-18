import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { NotFound } from "../component/notFound";
import PersonDetail from "../component/personDetail.js";
import VehicleDetail from "../component/vehicleDetail";
import PlanetDetail from "../component/planetDetail";
import MovieDetail from "../component/movieDetail";
import StarshipDetail from "../component/starshipDetail";
import SpeciesDetail from "../component/speciesDetail";

const Detail = () => {
  const { element, id } = useParams()
  const { store, actions } = useContext(Context)
  const [elementData, setElementData] = useState(null)

  useEffect(() => {
    async function getData() {
      setElementData(await actions.getDetail(element, id))
    }
    getData()
  }, [id])

  function renderDetail(type) {
    if (elementData == null) return "";
    switch (type) {
      case "people":
        return <PersonDetail element={elementData} />
      case "vehicles":
        return <VehicleDetail element={elementData} />
      case "planets":
        return <PlanetDetail element={elementData} />
      case "films":
        return <MovieDetail element={elementData} />
      case "starships":
        return <StarshipDetail element={elementData} />
      case "species":
        return <SpeciesDetail element={elementData} />
      default:
        break;
    }

  }


  return elementData == null ? (<NotFound element={element} />) :
    <div className="card">
      {renderDetail(element)}
      <Link to={-1} id="backButton" className="btn btn-outline-dark">Atras</Link>
    </div>
}

export default Detail