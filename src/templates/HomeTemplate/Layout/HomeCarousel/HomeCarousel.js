/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../../../actions/CarouselAction";
import "./HomeCarousel.css";
export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  console.log("arrImg", arrImg);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getCarouselAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contentStyle = {
    height: "900px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} alt={item.maPhim} className="w-full opacity-0" />
          </div>
        </div>
      );
    });
  };
  return <Carousel autoplay>{renderImg()}</Carousel>;
}
