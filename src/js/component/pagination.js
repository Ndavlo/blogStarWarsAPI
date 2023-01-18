import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({currentPage, pages, element}) => {
return <nav className="pagination" aria-label="...">
<ul className="pagination">
  <li className={`page-item ${currentPage==1?"disabled":""}`}>
  <Link className="page-link" to={`/${element}?page=${parseInt(currentPage)-1}`}>Anterior</Link>
  </li>
 {
    Array(pages).fill("").map((el,i)=>{
        let page = i+1
        return <li key={page} className={`page-item ${page==currentPage?"active":""}`}>  
        <Link className="page-link" to={`/${element}?page=${page}`}>{page}</Link>
      </li>
    })
 }
  <li className={`page-item ${pages==currentPage?"disabled":""}`}>
  <Link className="page-link" to={`/${element}?page=${parseInt(currentPage)+1}`}>Siguiente</Link>
  </li>
</ul>
</nav>

}

export default Pagination