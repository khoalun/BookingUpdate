import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import { Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFilmAction,
  getFilmAction,
} from "../../actions/ManageFilmAction";

import { NavLink } from "react-router-dom";
import { history } from "../../App";

export default function Films() {
  const { arrFilmDefault } = useSelector((state) => state.MovieListReducer);
  const dispatch = useDispatch();
  console.log("arrFilmDefault", arrFilmDefault);
  useEffect(() => {
    dispatch(getFilmAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "maPhim",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Image",
      dataIndex: "age",
      render: (text, film, index) => {
        return (
          <Fragment key={index}>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={100}
              height={100}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/100/100`;
              }}
            />
          </Fragment>
        );
      },
      width: "20%",
    },
    {
      title: "Name Movie",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase();
        let tenPhimB = b.tenPhim.toLowerCase();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: "20%",
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Description",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let moTaA = a.moTa.toLowerCase();
        let moTaB = b.moTa.toLowerCase();
        if (moTaA > moTaB) {
          return 1;
        }
        return -1;
      },
      render: (text, film) => {
        return (
          <Fragment key={film}>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirection: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "hanhDong",
      render: (text, film) => {
        return (
          <Fragment key={film}>
            <NavLink
              key={1}
              className="mr-2 text-2xl"
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>

            <span
              key={2}
              className=" text-2xl"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete" + film.tenPhim
                  )
                ) {
                  //Call action
                  dispatch(deleteFilmAction(film.maPhim));
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
  const data = arrFilmDefault;
  const onSearch = (value) => {
    console.log(value);
    // Call api to get film list
    dispatch(getFilmAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const { Search } = Input;
  return (
    <div>
      <h3 className="text-4xl">Manage Films</h3>
      <Button
        onClick={() => {
          history.push("/admin/films/addnew");
        }}
        className="mb-4"
      >
        Adding Film
      </Button>
      <Search
        placeholder="Search here"
        className="mb-5 "
        allowClear
        enterButton={<SearchOutlined className="mb-2" />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={'maPhim'}
      />
    </div>
  );
}
