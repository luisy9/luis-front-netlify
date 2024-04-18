import Footer from "../components/Footer";
import Mapa from "../components/mapa/Mapa";
import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner, NavBar } from "../components";
import CardBox from "../components/cardItem/CardBox";
import SliderItems from "../components/SliderItems/SliderItems";
import { CardHotTrendItem } from "../components";

export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const moveToSearchBar = useRef(null);
  const isSearchBarComponent = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState();

  useEffect(() => {
    // fetch(url + `puntos_interes/;/;/;`)
    //   .then((res) => res.json())
    //   .then((hotTrends) => setHotTrends(hotTrends))
    //   .catch((error) => console.log(error));

    //fetch(url + `puntos_interes`)
      //.then((res) => res.json())
      //.then((puntosInteres) =>
        //setActividadOrPuntoInteres(
          //puntosInteres?.map((e) => {
            //return { ...e, queEs: "puntosInteres" };
          //})
        //)
      //)
      //.catch((error) => console.log(error));
      console.log(isSearchBarComponent)
  }, [isSearchBarComponent]);

  const paginacionScrollHome = () => {
    moveToSearchBar.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <NavBar />
      <div className="w-full">
        <Banner paginacionScrollHome={paginacionScrollHome} />
      </div>
      <div className="w-10/12 mx-auto hidden md:block" ref={isSearchBarComponent}>
        <SearchBar moveToSearchBar={moveToSearchBar} />
      </div>
      <div className="w-10/12 mx-auto">
        
      </div>
      <div className="pt-10 md:w-[89%] lg:w-[87%] xl:w-[87%] 2xl:w-[85%] w-10/12 mx-auto relative">
        
      </div>
      <Mapa/>
      <Footer />
    </div>
  );
};

export default Inicio;
