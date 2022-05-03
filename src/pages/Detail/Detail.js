import React, { useEffect, useState } from "react";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "../../assets/styles/circle.scss";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getDetailMovie } from "../../actions/ManageTheatreAction";
import moment from "moment";
import { Rate } from "antd";

import "./Detail.css";
import { NavLink } from "react-router-dom";

import ModalPopup from "./ModalPopup";

const { TabPane } = Tabs;
export default function Detail(props) {
  const filmDetail = useSelector((state) => state.MovieListReducer.filmDetail);
  const [openModal, setOpenModal] = useState(false);
  console.log({ filmDetail });
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(getDetailMovie(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPostion: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: "150px", minHeight: "200vh" }}
        effectColor="#000000" // required
        color="#14AEFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
        className="backgroundImg"
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3 ">
            <div className="grid grid-cols-2 ">
              <img
                src={filmDetail.hinhAnh}
                alt="123"
                style={{ width: "215px", height: "339px" }}
              />

              <div className="flex flex-col justify-center  ml-7">
                <p className="text-sm text-gray-100	">
                  Day Release:
                  {moment(filmDetail.ngayKhoiChieu).format(" dd - mm - yyyy")}
                </p>
                <p className="text-3xl text-gray-100	 leading-2 font-bold">
                  {filmDetail.tenPhim}
                </p>
                <p className="text-sm text-gray-100	">{filmDetail.moTa}</p>
                {/* <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content" style={{ background: "#000" }}>
                    <div className="modal-body">
                      <iframe
                        title="trailer"
                        width="100%"
                        height="85%"
                        src={filmDetail?.trailer}
                        // src={src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                        autoPlay
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div> */}
                <button onClick={handleOpen}>Open</button>
                {openModal && (
                  <div onClick={handleClose}>
                    <ModalPopup film={filmDetail} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4 ml-20">
            <p style={{ marginLeft: "12%" }} className="text-2xl text-gray-100">
              Review
              <div style={{ marginLeft: "-4%" }}>
                <Rate
                  allowHalf
                  defaultValue={filmDetail.danhGia / 2}
                  style={{ color: "rgb(168, 151, 151)" }}
                />
              </div>
            </p>

            <div className={`c100 p${filmDetail.danhGia * 8} big`}>
              <span>{filmDetail.danhGia * 8}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 ml-72 w-2/3 bg-white container mx-auto my-auto ">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Day Schedule" key="1">
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((item, index) => {
                  return (
                    <TabPane
                      tab={
                        <div>
                          <img
                            src={item.logo}
                            alt={item.tenPhim}
                            width={50}
                            className="rounded-full"
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                          <p>{item.tenHeThongRap}</p>
                        </div>
                      }
                      key={index}
                    >
                      {item.cumRapChieu?.map((filmLocate, index) => {
                        return (
                          <div key={index}>
                            <div className="flex flex-row mt-8">
                              <img
                                src={"https://picsum.photos/200/200"}
                                style={{ width: 50, height: 50 }}
                                alt="https://picsum.photos/200/200"
                              />
                              <div className="ml-5">
                                <p
                                  className="text-2xl leading-3 text-sm"
                                  style={{
                                    fontSize: "20",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {filmLocate.tenCumRap}
                                </p>
                                <p
                                  style={{ marginTop: 0 }}
                                  className="text-sm text-gray-400"
                                >
                                  {filmLocate.tenCumRap}
                                </p>
                              </div>
                            </div>
                            <div className="thong-tin-lich-chieu grid grid-cols-6">
                              {filmLocate.lichChieuPhim
                                ?.slice(0, 10)
                                .map((day, index) => {
                                  return (
                                    <NavLink
                                      to={`/checkout/${day.maLichChieu}`}
                                      key={index}
                                      className="col-span-1 text-green-800 font-bold"
                                    >
                                      {moment(day.ngayChieuGioChieu).format(
                                        "hh:mm A"
                                      )}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Information" key="2">
              <div className="grid grid-cols-9 mx-auto my-auto p-8">
                <div className="col-span-2 col-start-2 titleInfo">
                  <div className="titleInfo">Release date</div>
                  <div className="titleInfo">Director</div>
                  <div className="titleInfo">Actor</div>
                  <div className="titleInfo">Category</div>
                  <div className="titleInfo">Format</div>
                  <div className="titleInfo">Language</div>
                </div>
                <div className="col-span-2  gap-4">
                  <div className="titleInfo">
                    {moment(filmDetail.ngayKhoiChieu).format("hh.mm A")}
                  </div>
                  <div className="titleInfo">Michael Bay</div>
                  <div className="titleInfo">David Machela</div>
                  <div className="titleInfo">Drama , Science</div>
                  <div className="titleInfo">3D</div>
                  <div className="titleInfo">English</div>
                </div>
                <div className="col-span-4">
                  <div className="titleInfo">Content</div>
                  <div>{filmDetail.moTa}</div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Review" key="3">
              Tab 3
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
