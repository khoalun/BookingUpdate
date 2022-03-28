import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookTicketAction,
  getDetailTicketAction,
} from "../../actions/ManageTicketAction";
import style from "./Checkout.module.css";
import _ from "lodash";
import "./Checkout.css";
import { BOOK_SEAT } from "../../actions/types/ManageTicketType";
import { InforBooking } from "../../_core/models/InforBooking";
import {
  UserOutlined,
  CheckCircleOutlined,
  PlusCircleOutlined,
  MoneyCollectOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Tabs } from "antd";
import { getUserInforAction } from "../../actions/ManageUserAction";
import { history } from "../../App";
import { USER_LOGIN, TOKEN } from "../../util/settings/config";
import { NavLink } from "react-router-dom";


function Checkout(props) {
  const { userLogin } = useSelector((state) => state.ManageUserReducer);
  const { detailTicket, listSeatChosen } = useSelector(
    (state) => state.ManageTicketReducer
  );
  const dispatch = useDispatch();
  console.log("listSeatChoosing", listSeatChosen);
  useEffect(() => {
    window.scrollTo(0, 0);
})
  // goi Api
  useEffect(() => {
    // Lay id từ Appjs gọi hàm tạo ra 1 async function
    const action = getDetailTicketAction(props.match.params.id);
    // dispatch function di
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ detailTicket });
  const { thongTinPhim, danhSachGhe } = detailTicket;
  const renderSeats = () => {
    return danhSachGhe?.map((seat, index) => {
      let classSeatVip = seat?.loaiGhe === "Vip" ? "seatVip" : "";
      let classSeatReserved = seat?.daDat === true ? "seatReserved" : "";
      let classSeatChosing = "";
      // Kiem tra tung ghe render xem co trong mang ghe dang dat hay khong
      let classSeatBookingYourSelf = "";
      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        classSeatBookingYourSelf = "seatBookingYourSelf";
      }
      let indexGheDD = listSeatChosen.findIndex(
        (gheDD) => gheDD.maGhe === seat.maGhe
      );
      if (indexGheDD !== -1) {
        classSeatReserved = "seatChoosing";
      }

      return (
        <Fragment key={index} >
          <button
            disabled={seat?.daDat}
            key={index}
            className={`seat ${classSeatVip} ${classSeatReserved} ${classSeatChosing} ${classSeatBookingYourSelf}`}
            onClick={() => {
              dispatch({
                type: BOOK_SEAT,
                SeatChosen: seat,
              });
            }}
          >
            {seat?.daDat ? (
              classSeatBookingYourSelf !== "" ? (
                <UserOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              ) : (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )
            ) : (
              seat?.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    
    <div className="min-h-screen mt-12">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="headerFilm ">
            <img
              src={thongTinPhim?.hinhAnh}
              style={{
                borderRadius: "5px",
                width: "120px",
                height: "120px",
                objectFit: "fill",
              }}
              alt={thongTinPhim?.tenPhim}
            />
            <div className="ml-4 text-left flex flex-col justify-center">
              <h3 className="font-bold text-4xl">{thongTinPhim?.tenPhim}</h3>
              <span className="text-sm subpixel-antialiased italic text-gray-600 font-bold">
                Location: {thongTinPhim?.diaChi}
              </span>
              <span className="text-sm subpixel-antialiased italic text-gray-600 font-bold">
                Theatre: {thongTinPhim?.tenCumRap}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black "
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]}`}>
              <h3
                className="mt-3 text-white  text-center font-bold text-xl"
                style={{ disPlay: "inline-block" }}
              >
                Screen
              </h3>
            </div>
            <div className="mt-10">{renderSeats()}</div>
          </div>
          <div className="mt-5 flex justify-center mb-80 ">
            <table className=" divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>SeatAvailable</th>
                  <th>SeatVip</th>
                  <th>SeatReserved</th>
                  <th>SeatChoosing</th>
                  <th>SeatBooking</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                <tr>
                  <td className="text-center">
                    <button
                      className="seat"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <PlusCircleOutlined
                        style={{
                          marginBottom: 2,
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      />
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="seat seatVip"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <MoneyCollectOutlined
                        style={{
                          marginBottom: 2,
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      />
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="seat seatReserved "
                      style={{ width: "50px", height: "50px" }}
                    >
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="seat seatChoosing"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <CheckCircleOutlined
                        style={{
                          marginBottom: 2,
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      />
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="seat seatBookingYourSelf"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <UserOutlined
                        style={{
                          marginBottom: 2,
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3 my-20">
          <h3 className="text-center text-2xl">
            {listSeatChosen
              .reduce((total, seat, index) => {
                return (total += seat.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            Euro
          </h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim?.tenPhim}</h3>
          <p className="font-bold italic text-sm">
            Location: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p className="font-bold italic text-sm">
            Day Release : {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="grid grid-cols-2 my-5">
            <div>
              <span className="text-red-400 text-lg font-bold">Seat </span>
              <div>
                {listSeatChosen?.map((seat, index) => {
                  return (
                    <span
                      key={index}
                      className="text-green-500 mr-2 text-xl font-bold"
                    >
                      {seat?.stt}
                      {(index + 1) % 4 === 0 ? <br /> : ""}
                    </span>
                    // <table key={index} className="text-green-500 mr-2 text-xl">
                    //   <thead>
                    //     <tr>
                    //       <th>{seat?.stt}</th>
                    //     </tr>
                    //   </thead>
                    // </table>
                  );
                })}
              </div>
            </div>
            <div className="text-right">
              <span className="text-green-800 text-lg">
                {listSeatChosen
                  .reduce((total, seat, index) => {
                    return (total += seat.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                Euro
              </span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i> Email </i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i> Phone </i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 flex flex-col justify-end items-center">
            <div
              onClick={() => {
                const inforBooking = new InforBooking();
                inforBooking.maLichChieu = props.match.params.id; //params tren api
                inforBooking.danhSachVe = listSeatChosen;
                console.log("inforBooking", inforBooking);
                dispatch(bookTicketAction(inforBooking)); // gui thong tin ve server de luu tru
              }}
              className="bg-green-500 text-white w-full text-center py-2 font-bold text-2xl cursor-pointer"
            >
              Booking Ticket
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;


/* eslint-disable import/no-anonymous-default-export */
export default function (props) {
  const {userLogin} = useSelector(state => state.ManageUserReducer)
  useEffect(() => {
    return () => {
      dispatch({
        type: 'CHANGE_TAB_ACTIVE',
        number: '1'
      })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const operations = <Fragment>
        {!_.isEmpty(userLogin)?  <Fragment>
          <button onClick={()=>{
          history.push('/profile')
        }}>  <div style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center'}} className='rounded-full bg-red-200  ml-5 text-2xl'>
          {userLogin.taiKhoan.substr(0,1)}</div > Hello ! {userLogin.taiKhoan}</button> <button className='text-blue-800' onClick={(()=>{
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              history.push('/home');
              window.location.reload();
          })}>Sign Out</button></Fragment>: ""}
  </Fragment>
  const {tabActive} = useSelector(state=>state.ManageTicketReducer)

  console.log('tabActive', tabActive)
  const dispatch = useDispatch();
   return (
    <div className="p-5">
      <Tabs  tabBarExtraContent={operations} defaultActiveKey="1" activeKey={tabActive} onChange={(key)=> {
              dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number: key.toString()
              })
      }}>
        <TabPane tab="01 CHOOSE SEAT & CHECKOUT" key="1" 
        >
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 RESULT OF CHECKOUT" key="2" 
        >
          <ResultCheckout {...props} />
        </TabPane>
        <TabPane tab={<div className='text-center' style={{marginLeft:10,fontSize:30}}><NavLink to='/'><HomeOutlined  className='p-2 '/></NavLink></div>} key="3" 
        >
        </TabPane>
      </Tabs>
    </div>
  );
}

function ResultCheckout(props) {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.ManageUserReducer);
  // const { userLogin } = useSelector((state) => state.ManageUserReducer);

  useEffect(() => {
    const action = getUserInforAction();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("userInfor", userInfor);

  const renderTicketItem = function () {
    return userInfor.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt={ticket.tenPhim}
              className="w-24 h-24 bg-gray-100  flex-shrink-0 rounded-full mr-4 object-cover object-top "
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-bold">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500 text-sm font-bold">
                Day Releases: {moment(ticket.ngayDat).format("hh:mm A ")} - Hour
                Starts: {moment(ticket.ngayDat).format("DD-MM-YYYY")}
              </p>
              <p className="text-sm font-bold">Location : {seats.tenHeThongRap}</p>
              <p className="text-sm font-bold">Cinema: {seats.tenCumRap} - <div>{ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl mr-2" key={index}> [{ghe.tenGhe}] </span> })}</div>
                        </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="p-5">
      Result of Booking
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-purple-600 text-2xl font-bold">
              History Booking Ticket Of Customer
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Checking out the Location and Time of Movie to have the funny time
              together
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}
