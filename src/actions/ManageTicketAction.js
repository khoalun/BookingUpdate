// GOI API TICKET Tai day de dat ve

import { manageTicketService } from "../services/ManageTicketService";
import { InforBooking } from "../_core/models/InforBooking";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { FINISH_BOOKING, SET_DETAIL_TICKET, CHANGE_TAB } from "./types/ManageTicketType";

export const getDetailTicketAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await manageTicketService.getDetailTicket(maLichChieu);
      console.log("result", result);
      if (result.status === 200) {
        dispatch({
          type: SET_DETAIL_TICKET,
          detailTicket: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const bookTicketAction = (inforBooking = new InforBooking()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await manageTicketService.bookTicket(inforBooking);
      console.log(result.data.content);
      // Đặt vé thành công gọi api load lại phòng vé
      await dispatch(getDetailTicketAction(inforBooking.maLichChieu));
      await dispatch({ type: FINISH_BOOKING });
      await dispatch(hideLoadingAction);
      dispatch({type:CHANGE_TAB})
    } catch (error) {
      dispatch(hideLoadingAction);
    
      console.log(error.response.data);
    }
  };
};
