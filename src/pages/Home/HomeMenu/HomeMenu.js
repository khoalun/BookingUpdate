import React, { useState, memo, Fragment } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import "./HomeMenu.css";
import moment from "moment";
const { TabPane } = Tabs;
function HomeMenu(props) {
  const [state] = useState({
    tabPosition: "left",
  });
  //   const changeTabPosition = (e) => {
  //     setState({ tabPosition: e.target.value });
  //   };
  const { tabPosition } = state;
  console.log("123", props);
  const renderTheatreList = () => {
    return props.arrTheatre.map((theatre, index) => {
      return (
        <TabPane
          tab={
            <img
              src={theatre.logo}
              className="rounded-full border-under"
              width="50px"
              alt="goku.jpg"
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {theatre.lstCumRap?.slice(0, 6).map((partTheatre, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src="https://pbs.twimg.com/media/DyKHSklX0AApOAS.jpg"
                        width="50px"
                        alt="goku.jpg"
                      />
                      <br />
                      <div className="text-left ml-2 text-full">
                        {partTheatre.tenCumRap}
                        <p className="text-sm subpixel-antialiased font-semibold">
                          Detail
                        </p>
                        <hr style={{ marginTop: "40px" }} />
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {partTheatre.danhSachPhim.slice(0, 5).map((movie, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5">
                          <div style={{ display: "flex" }}>
                            <img
                              style={{
                                height: 150,
                                width: 150,
                                border: "1px solid black",
                                borderRadius: "4px",
                                padding: "5px",
                              }}
                              className="imageHome"
                              src={movie.hinhAnh}
                              alt={movie.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://picsum.photos/300/300";
                              }}
                            />
                            <div className="ml-2">
                              <h1 className="font-bold text-sm ml-2">
                                {movie.tenPhim}
                              </h1>
                              <p className="font-medium underline">
                                {partTheatre.diaChi}
                              </p>
                              <div className="grid grid-cols-6 gap-5">
                                {movie.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((day, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${day.maLichChieu}`}
                                        key={index}
                                        className="text-sm text-gray-600 border p-2 bg-gray-200	 font-bold"
                                      >
                                        {moment(day.ngayChieuGioChieu).format(
                                          "hh:mm A"
                                        )}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div>
      <>
        <Tabs tabPosition={tabPosition}>{renderTheatreList()}</Tabs>
      </>
    </div>
  );
}
export default memo(HomeMenu);
