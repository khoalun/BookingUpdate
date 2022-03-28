/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

export default function Footer(props) {
  const { arrTheatre } = useSelector((state) => state.ManageTheatreReducer);
  const arrTheatreFooter = _.map(arrTheatre, (item) =>
    _.pick(item, ["maHeThongRap", "tenHeThongRap", "logo"])
  );
  console.log("footer", arrTheatreFooter);
  return (
    <footer className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100 text-center bg-black text-white">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4 ">
          <h2 className="font-medium text-white">Tix</h2>
          <div className="flex flex-col space-y-2 dark:text-coolGray-400 ">
            <a rel="noopener noreferrer" href="#" className="text-white">
              FAQ
            </a>
            <a rel="noopener noreferrer" href="#" className="text-white">
              Brand Guideline
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-white">Partners</h2>
          <div className="flex flex-row text-sm dark:text-coolGray-40 justify-center">
            {arrTheatreFooter.map((banner, index) => {
              return (
                <a rel="noopener noreferrer" href="#" key={index}>
                  <img
                    src={banner.logo}
                    className="rounded-full mr-2 "
                    width="50px"
                    alt="goku.jpg"
                  />
                </a>
              );
            })}
          </div>

          <div className="flex flex-row text-sm dark:text-coolGray-40 justify-center">
            {arrTheatreFooter.map((banner, index) => {
              return (
                <a rel="noopener noreferrer" href="#" key={index}>
                  <img
                    src={banner.logo}
                    className="rounded-full mr-2 "
                    width="50px"
                    alt="goku.jpg"
                  />
                </a>
              );
            })}
          </div>

          <div className="flex flex-row text-sm dark:text-coolGray-40 justify-center">
            {arrTheatreFooter.map((banner, index) => {
              return (
                <a rel="noopener noreferrer" href="#" key={index}>
                  <img
                    src={banner.logo}
                    className="rounded-full mr-2 "
                    width="50px"
                    alt="goku.jpg"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-white">Mobile App</h2>
          <div
            className="flex flex-row  text-sm dark:text-coolGray-400 justify-center"
            viewBox="0 0 24 24"
          >
            <a href="https://www.apple.com/fi/?afid=p238%7Csugzzuv59-dc_mtid_187079nc38483_pcrid_571079961319_pgrid_16483783215_&cid=aos-fi-kwgo-brand--slid--bran-product-">
              <i className="fab fa-apple mr-2 text-6xl text-white"></i>
            </a>

            <a href="https://www.apple.com/fi/?afid=p238%7Csugzzuv59-dc_mtid_187079nc38483_pcrid_571079961319_pgrid_16483783215_&cid=aos-fi-kwgo-brand--slid--bran-product-">
              <i className="fab fa-android mr-2 text-6xl text-white"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-white">Social</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400 ">
            <a rel="noopener noreferrer" href="#" className="text-white">
              GitHub
            </a>
            <a rel="noopener noreferrer" href="#" className="text-white">
              Discord
            </a>
            <a rel="noopener noreferrer" href="#" className="text-white">
              Twitter
            </a>
            <a rel="noopener noreferrer" href="#" className="text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="dark:text-coolGray-400">
          © Copyright Khoa Bui. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
