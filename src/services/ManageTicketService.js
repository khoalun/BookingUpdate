import { InforBooking } from "../_core/models/InforBooking";
import { baseService } from "./baseService";
export default class ManageTicketService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getDetailTicket = (maLichChieu) => {
    // maLichChieu lay tu Url
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  };

  bookTicket = (inforBooking = new InforBooking()) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, inforBooking);
  };
}

export const manageTicketService = new ManageTicketService();
