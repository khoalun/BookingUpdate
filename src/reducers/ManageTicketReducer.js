import {
  BOOK_SEAT,
  FINISH_BOOKING,
  SET_DETAIL_TICKET,
  CHANGE_TAB,
} from "../actions/types/ManageTicketType";

const stateDefault = {
  detailTicket: {},
  listSeatChosen: [
    // {
    //   daDat: false,
    //   giaVe: 75000,
    //   loaiGhe: "Thuong",
    //   maGhe: 49301,
    //   maRap: 462,
    //   stt: "141",
    //   taiKhoanNguoiDat: null,
    //   tenGhe: "141",
    // },
  ],
  tabActive: '1',
};

export const ManageTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DETAIL_TICKET: {
      state.detailTicket = action.detailTicket;
      return { ...state };
    }
    case BOOK_SEAT: {
      let listSeatUpdate = [...state.listSeatChosen];
      let index = listSeatUpdate.findIndex(
        // tim SeatChosen ben  Checkout gui qua
        (seatDD) => seatDD.maGhe === action.SeatChosen.maGhe
      );
      if (index !== -1) {
        //If you find SeatChosen in an array meaning you click before and delete it
        listSeatUpdate.splice(index, 1);
      } else {
        listSeatUpdate.push(action.SeatChosen);
      }
      //   console.log(action);

      return { ...state, listSeatChosen: listSeatUpdate };
    }

    case FINISH_BOOKING: {
      state.listSeatChosen = [];
      return { ...state };
    }

    case CHANGE_TAB : {
      state.tabActive = '2';
      return {...state}
    }
    case 'CHANGE_TAB_ACTIVE': {
        state.tabActive = action.number;
        return {...state}
    }
    default:
      return { ...state };
  }
};
