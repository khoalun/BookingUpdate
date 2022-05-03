import React from "react";
import "../Ads/Ads.scss";
import SliderAds from "../SliderAds/SliderAds";
import listAdventiseImages from "../../constant/advertiseData";

const customSlick = {
  speed: 500,
  dots: false,
  arrows: false,
};
function Ads() {
  return (
    <section className="ads" id="ungdung" style={{ width: "100%" }}>
      <div className="grid grid-cols-10 gap-4 text-white">
        <div className="col-span-4 col-start-3 text-left ">
          <p className="text-2xl font-bold" style={{ lineHeight: "1rem" }}>
          Convenient app for
          </p>
          <p className="text-2xl font-bold">movie lover</p>
          <br />
          <p className="text-lg font-normal	">
          Not only booking tickets, you can also comment on movies and score <br />
          theaters and exchange attractive gifts.
          </p>
          <button
            className="btnDownload"
            style={{
              color: "#fff",
              border: "1px solid #fb4226",
              borderRadius: "4px",
              background: "#fb4226",
              padding: "10px 20px",
              fontWeight: "700px",
            }}
          >
            Free App - Download Now!
          </button>
          <br />
          <p className="text-base	mt-2">
          TIX has two versions <a href="#!">iOS</a> &amp;
            <a href="#!"> Android</a>
          </p>
        </div>
        <div className="col-span-2">
          {
            <SliderAds customSlick={customSlick}>
              {listAdventiseImages.map((img, index) => (
                <div key={index}>
                  <img className="img-fluid" src={img} alt="app-tix" />
                </div>
              ))}
            </SliderAds>
          }
        </div>
      </div>
    </section>
  );
}
export default Ads;
