import React from "react";
import listData from "../../constant/newsData";
import listRowData from "../../constant/newsDataRow";
import listColData from "../../constant/newsDataCol";
import "../News/News.scss";
export default function News() {
  return (
    <section className="md:h-full flex items-center text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h5 className="text-base md:text-lg text-indigo-700 mb-1">
            See Our Recent News
          </h5>
          <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">
            Movie News in 24 hours
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {listData.map((item, index) => {
            return (
              <div className="p-4 sm:w-1/2 lg:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={item.image}
                    alt="blog"
                  />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                      {item.day}
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
                    <p className="leading-relaxed mb-3">
                      {item.description.length > 200 ? (
                        <p>{item.description.substring(0, 200)} ...</p>
                      ) : (
                        <p> {item.description}</p>
                      )}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href="https://movie.zalopay.vn/landing"
                        className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        {item.like}
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {item.comment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-12 mt-5 p-2">
          {listRowData.map((card, index) => {
            return (
              <div className="col-span-3" key={index}>
                <img src={card.image} alt={card.image} />
                <div>
                  <a
                    href="https://movie.zalopay.vn/landing"
                    className="text-left font-bold text-lg  text-black"
                  >
                    {card.shortDescription}
                  </a>
                  <p>{card.description}</p>
                  <div className="flex text-left" style={{ width: "100%" }}>
                    <span className="flex  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      {card.comment}
                    </span>
                    <span className="flex ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {card.like}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col-span-3 ">
            {listColData.map((item, index) => {
              return (
                <div className="flex flex-row" key={index}>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    className="imageFixed"
                    src={item.image}
                    alt={item.description}
                  />
                  <a
                    className="para text-black"
                    href="https://movie.zalopay.vn/landing"
                  >
                    {item.description.length > 80 ? (
                      <p>{item.description.substring(0, 80)} ...</p>
                    ) : (
                      <p>{item.description}</p>
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
