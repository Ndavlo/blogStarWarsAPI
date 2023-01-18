import React, {useContext, useEffect, useState} from "react";
import Pagination from "../component/pagination";
import { useSearchParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Starships = () => { 
    let [searchParams, setSearchParams] = useSearchParams();
    const {store, actions}= useContext(Context);
   const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
          //let data = await actions.getDetail("planets", 1);
          let resp = await actions.getList("starships", searchParams.get("page"), 4);
          setTotalPages(resp.pages)
        }
        fetchData();
      }, [searchParams.get("page")]);

      function errorImage(e){
        e.target.src="https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
    }

return <>

<h1 className="centerH1">Starships</h1>
<div className="container">
<div className="row">
{store.starships?.map((starship) => (
        <div key={starship.uid} className="col-md-3 col-sm-6">
          <img src={starship.img} onError={errorImage} className="card-img-top" alt="..." />
            <h5 className="card-title">{starship.name}</h5>
            <Link to={`/starships/${starship.uid}`} className="btn btn-dark">
              Detalles
            </Link>
        </div>
      ))}

</div>

</div>
<Pagination pages={totalPages} element="starships" currentPage={searchParams.get("page")}/>
</>
}

export default Starships