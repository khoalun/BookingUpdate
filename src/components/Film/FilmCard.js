import React from "react";
import "./FilmCard.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { history } from "../../App";
export default function Film_Card(props) {
  const { item } = props;
  return (
    <div className="flip-card mt-5 ">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={item.hinhAnh}
            alt="Avatar"
            className="rounded-t-lg"
            style={{ width: 300, height: 300 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/300/300";
            }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div style={{ position: "absolute" }}>
            <img
              src={item.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
              <p className="leading-relaxed mb-3 mt-5">
                {item.moTa.length > 100 ? (
                  <span>{item.moTa.slice(0, 100)} ...</span>
                ) : (
                  <span>{item.moTa}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center cursor-pointer py-2 font-bold rounded-b-lg"
        style={{ backgroundColor: "gray", color: "white" }}
        onClick={() => {
          history.push(`/detail/${item.maPhim}`);
        }}
      >
        Buy Ticket
      </div>
      &nbsp;
    </div>
  );
}
