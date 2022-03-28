/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  SET_CURRENT_FILM,
  SET_UPCOMING_FILM,
} from "../../actions/types/ManageFilmType";
import FilmCard from "../Film/FilmCard";
import styleSlick from "./SliderSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
        left: "-50px",
      }}
      onClick={onClick}
    />
  );
}

const SliderSlick = (props) => {
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.MovieListReducer
  );
  let activeClassDC =
    dangChieu === true ? "active_FilmDC" : "none_active_FilmDC";

  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
  const dispatch = useDispatch();
  const renderMovie = () => {
    return props.arrFilm.slice(0, 20)?.map((item, index) => {
      return (
        <div key={index} className="mt-2">
          <FilmCard item={item} />
        </div>
      );
    });
  };
  const settings = {
    className: "center ",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <button
        className={`${styleSlick[activeClassDC]} relative overflow-hidden px-8 py-4 ml-4  font-semibold rounded bg-neutral-900	 text-white mt-5 border border-gray-800`}
        style={{ marginLeft: "57px" }}
        onClick={() => {
          const action = { type: SET_CURRENT_FILM };
          dispatch(action);
        }}
      >
        Current Movie
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap bg-violet-400 origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
          New
        </span>
      </button>

      <button
        className={`${styleSlick[activeClassSC]}  px-8 py-4 ml-4  font-semibold rounded bg-neutral-900	text-white border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_UPCOMING_FILM };
          dispatch(action);
        }}
      >
        Movie ComingSoon
      </button>

      <Slider {...settings}>{renderMovie()}</Slider>
    </div>
  );
};

export default SliderSlick;
