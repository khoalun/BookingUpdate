import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUserAction,
  getUserAdminAction,
} from "../../actions/ManageUserAction";
import { DeleteOutlined } from "@ant-design/icons";

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
    {
      title: "Action",
      dataIndex: "hanhDong",
      render: (text, user) => {
        return (
          <Fragment key={user}>
            <span
              key={2}
              className=" text-2xl"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete" + user.taiKhoan.toString()
                  )
                ) {
                  //Call action
                  dispatch(deleteUserAction(user.taiKhoan.toString()));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      width: "20%",
      sortDirection: ["descend", "ascend"],
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
