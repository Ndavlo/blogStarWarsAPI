import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import ShortList from "../component/shortList";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [planetInfo, setPlanetInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      let data = await actions.getDetail("planets", 1);
      setPlanetInfo(data);
      await actions.getList("planets");
    }
    fetchData();
  }, []);

  return (
    <div className="text-center mt-5">
        <ShortList elementType="films"/>
        <ShortList elementType="people"/>
        <ShortList elementType="vehicles"/>
        <ShortList elementType="planets"/>
        <ShortList elementType="starships"/>
        <ShortList elementType="species"/>
    </div>
  );
};
