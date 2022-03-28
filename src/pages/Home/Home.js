/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import SliderSlick from "../../components/SliderSlick/SliderSlick";
import { getFilmAction } from "../../actions/ManageFilmAction";
import { getListTheatre } from "../../actions/ManageTheatreAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import Ads from "../../components/Ads";
import News from "../News/News";



export default function Home(props) {

  const { arrFilm } = useSelector((state) => state.MovieListReducer);
  const { arrTheatre } = useSelector((state) => state.ManageTheatreReducer);
  const dispatch = useDispatch();
  console.log("propsHome", arrFilm);

  useEffect(() => {
    const action = getFilmAction();
    dispatch(action); //dispatch function từ thunk
    dispatch(getListTheatre());
  }, []);

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font ">
        <div className="container px-5  mx-auto">
          <SliderSlick arrFilm={arrFilm} />
        </div>
      </section>
      
      <div className="mx-44  mt-12"  >
        <HomeMenu arrTheatre={arrTheatre} />
     
     
      </div>  
      <News/>
      <Ads />
     
    </div>
  );
}
