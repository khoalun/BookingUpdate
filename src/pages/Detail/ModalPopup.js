import React from "react";

const ModalPopup = (props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>
        <div className="relative inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div
              className="sm:flex sm:items-start"
              style={{ width: "100%", height: "500px" }}
            >
              <div
                className="modal-dialog modal-dialog-centered modal-xl"
                style={{ width: "100%", height: "100%" }}
              >
                <div
                  className="modal-content"
                  style={{ background: "#000", width: "100%", height: "100%" }}
                >
                  <div className="modal-body" style={{ height: "100%" }}>
                    <iframe
                      title="trailer"
                      width="100%"
                      height="100%"
                      src={props.film?.trailer}
                      // src={src}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                      autoPlay
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
