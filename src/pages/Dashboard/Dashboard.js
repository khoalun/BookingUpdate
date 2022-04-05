import React, { useEffect } from "react";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUserAdminAction } from "../../actions/ManageUserAction";

export default function Dashboard() {
  const columns = [
    {
      title: "User",
      dataIndex: "taiKhoan",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Password",
      dataIndex: "matKhau",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Phone Number",
      dataIndex: "soDt",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Right",
      dataIndex: "maLoaiNguoiDung",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
  ];
  const { userAdmin } = useSelector((state) => state.ManageUserReducer);
  const dispatch = useDispatch();
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  useEffect(() => {
    dispatch(getUserAdminAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("use111111r", userAdmin);
  return (
    <div>
      <Table columns={columns} dataSource={userAdmin} onChange={onChange} />
    </div>
  );
}
